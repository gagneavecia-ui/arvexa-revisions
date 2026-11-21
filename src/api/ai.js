/* ═══════════════════════════════════════════════════════════════════
   KIT IA ARVX — api/ai.js (fonction serverless Vercel, Node, 0 dépendance)
   Intelligence pour IMAGES et DOCUMENTS : décrire, OCR, question/réponse,
   JSON structuré, pages de PDF (rendues en images côté client), chat texte.

   Les clés vivent UNIQUEMENT dans les variables d'environnement Vercel :
     OPENROUTER_API_KEY  (requis)   GEMINI_API_KEY (optionnel)
     GROQ_API_KEY        (optionnel)
   Aucune clé n'apparaît jamais dans le client.

   Chaîne de fournisseurs (si l'un échoue ou traîne → le suivant) :
     OpenRouter : nvidia/nemotron-3.5-super-vl:free (rapide, testé)
                  → dots-studio/dots-3-note-preview:free (testé)
                  → openrouter/free (routeur auto)
     Gemini     : gemini-flash-latest (si clé valide — inline_data image)
     Groq       : llama-4-scout (si clé valide)
   Un fournisseur qui répond 401/403 (clé invalide) est mis de côté
   automatiquement jusqu'au prochain démarrage de la fonction.

   Tâches (POST /api/ai) :
     image — { mode:'describe'|'ocr'|'ask'|'json', lang, images:[dataURL×1-4], question? }
     doc   — { mode:'summary'|'keypoints'|'ask'|'json', lang, images:[pages×1-4], question? }
     chat  — { lang, messages:[{role:'user'|'assistant', content}×≤12] }

   Garde-fous : POST seul · OPTIONS (CORS) · corps ≤ 3,4 Mo · images PNG/JPEG/WEBP
   ≤ 1,4 Mo (base64) chacune · limite de débit 20 req/10 min/IP (RATE_MAX) ·
   délai 25 s par fournisseur · budget total 32 s · erreurs génériques sans détail.
   ═══════════════════════════════════════════════════════════════════ */

const MAX_BODY = 3.4 * 1024 * 1024;
const MAX_IMAGE_B64 = 1.4 * 1024 * 1024; /* par image, partie base64 */
const MAX_IMAGES = 4;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const PROVIDER_TIMEOUT_MS = 25000;
const TOTAL_BUDGET_MS = 32000;
const RETRY_BACKOFF_MS = 1300;

const OR_VISION = [
  'nvidia/nemotron-3.5-super-vl:free',
  'dots-studio/dots-3-note-preview:free',
  'openrouter/free',
];

/* ── utilitaires de réponse (CORS partout) ────────────────────────── */
const CORS_HEADERS = () => ({
  'Access-Control-Allow-Origin': process.env.ALLOW_ORIGIN || '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});

function json(res, status, body) {
  const h = Object.assign({ 'Content-Type': 'application/json; charset=utf-8' }, CORS_HEADERS());
  res.writeHead(status, h);
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > MAX_BODY) { reject(Object.assign(new Error('too_large'), { code: 'too_large' })); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

/* ── limite de débit glissante (best-effort, mémoire de l'instance) ─ */
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const max = parseInt(process.env.RATE_MAX || '20', 10) || 20;
  const arr = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (arr.length >= max) { hits.set(ip, arr); return true; }
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 5000) hits.clear();
  return false;
}

/* ── appel HTTP avec délai ────────────────────────────────────────── */
async function httpJson(url, body, headers, timeoutMs) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs || PROVIDER_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    let data = null;
    try { data = await res.json(); } catch (e) { data = null; }
    return { status: res.status, data };
  } finally {
    clearTimeout(timer);
  }
}

/* Fournisseurs morts (clé invalide) — évite de retenter à chaque appel */
const dead = { openrouter: false, gemini: false, groq: false };

/* ── construire le message multimodal (texte + images) ────────────── */
function partsFor(mode, v) {
  const L = v.lang === 'an' ? 'an' : 'fr';
  const T = L === 'an' ? {
    describe: 'Describe this image in detail: content, visible text, context. Answer in English.',
    ocr: 'Read ALL the text visible in this image (or these pages), word for word, without inventing anything, keeping the structure. Answer in English.',
    ask: v.question || 'What does this image show?',
    json: (v.question || 'Extract the key information from this image.') +
      ' Answer ONLY with a valid JSON object, no surrounding text, no code fences.' +
      (v.schema ? ' Expected structure: ' + v.schema : ''),
    summary: 'These are the pages of one document. Write a clear, structured summary of it. Answer in English.',
    keypoints: 'These are the pages of one document. List the key takeaways as bullet points. Answer in English.',
    docNote: ' (The images are the pages of one single document.)',
  } : {
    describe: 'Décris cette image en détail et de façon utile : contenu, textes visibles, contexte. Réponds en français.',
    ocr: 'Lis TOUT le texte visible de cette image (ou de ces pages), mot à mot, sans rien inventer, en conservant la structure. Réponds en français.',
    ask: v.question || 'Que montre cette image ?',
    json: (v.question || 'Extrais les informations importantes de cette image.') +
      ' Réponds UNIQUEMENT par un objet JSON valide, sans texte autour, sans balises de code.' +
      (v.schema ? ' Structure attendue : ' + v.schema : ''),
    summary: 'Voici les pages d\'un même document. Fais un résumé clair et structuré de ce document. Réponds en français.',
    keypoints: 'Voici les pages d\'un même document. Liste les points clés à retenir, sous forme de liste à puces. Réponds en français.',
    docNote: ' (Les images sont les pages d\'un même document.)',
  };
  const text = (T[mode] || T.ask) + (v.isDoc ? T.docNote : '');
  const parts = [{ type: 'text', text }];
  for (const img of v.images) parts.push({ type: 'image_url', image_url: { url: img } });
  return parts;
}

/* ── chaîne de fournisseurs (image / doc) ─────────────────────────── */
async function generate(mode, v) {
  const started = Date.now();
  const parts = partsFor(mode, v);
  const attempt = async (fn) => {
    try { return await fn(); } catch (e) { return { status: 0, data: null }; }
  };

  /* 1) OpenRouter (modèles vision gratuits, testés) */
  if (!dead.openrouter && process.env.OPENROUTER_API_KEY) {
    for (const model of OR_VISION) {
      for (let tries = 0; tries < 2; tries++) {
        const left = TOTAL_BUDGET_MS - (Date.now() - started);
        if (left < 3000) break;
        const r = await attempt(() => httpJson(
          'https://openrouter.ai/api/v1/chat/completions',
          { model, max_tokens: 1600, temperature: 0.3, messages: [{ role: 'user', content: parts }] },
          { Authorization: 'Bearer ' + process.env.OPENROUTER_API_KEY },
          Math.min(PROVIDER_TIMEOUT_MS, left)));
        if (r.status === 200 && r.data && r.data.choices && r.data.choices[0]) {
          const msg = r.data.choices[0].message || {};
          const text = (msg.content || '').trim();
          if (text) return { provider: 'openrouter/' + model.split('/')[1], text };
        }
        if (r.status === 401 || r.status === 403) { dead.openrouter = true; break; }
        if (r.status === 429 || r.status >= 500 || r.status === 0) {
          await new Promise((res) => setTimeout(res, RETRY_BACKOFF_MS));
          continue; /* nouvelle tentative du même modèle */
        }
        break; /* autre erreur → modèle suivant */
      }
      if (dead.openrouter) break;
      if (Date.now() - started > TOTAL_BUDGET_MS) break;
    }
  }

  /* 2) Gemini (optionnel — inline_data images) */
  if (!dead.gemini && process.env.GEMINI_API_KEY && Date.now() - started < TOTAL_BUDGET_MS - 3000) {
    const contents = [{
      parts: parts.map((p) => (p.type === 'text'
        ? { text: p.text }
        : { inline_data: { mime_type: 'image/jpeg', data: p.image_url.url.replace(/^data:image\/[a-z]+;base64,/, '') } })),
    }];
    const r = await attempt(() => httpJson(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent',
      { contents, generationConfig: { temperature: 0.3, maxOutputTokens: 1600 } },
      { Authorization: 'Bearer ' + process.env.GEMINI_API_KEY }));
    if (r.status === 200 && r.data && r.data.candidates && r.data.candidates[0]) {
      const p0 = (r.data.candidates[0].content || {}).parts || [];
      const text = p0.map((x) => x.text || '').join('').trim();
      if (text) return { provider: 'gemini', text };
    }
    if (r.status === 401 || r.status === 403) dead.gemini = true;
  }

  /* 3) Groq (optionnel — llama-4 scout vision) */
  if (!dead.groq && process.env.GROQ_API_KEY && Date.now() - started < TOTAL_BUDGET_MS - 3000) {
    const r = await attempt(() => httpJson(
      'https://api.groq.com/openai/v1/chat/completions',
      { model: 'meta-llama/llama-4-scout-17b-16e-instruct', max_tokens: 1600, messages: [{ role: 'user', content: parts }] },
      { Authorization: 'Bearer ' + process.env.GROQ_API_KEY }));
    if (r.status === 200 && r.data && r.data.choices && r.data.choices[0]) {
      const text = ((r.data.choices[0].message || {}).content || '').trim();
      if (text) return { provider: 'groq', text };
    }
    if (r.status === 401 || r.status === 403) dead.groq = true;
  }

  throw Object.assign(new Error('ai_error'), { code: 'ai_error' });
}

/* ── extraction JSON stricte pour le mode 'json' ──────────────────── */
function extractJson(text) {
  let t = String(text || '').trim();
  t = t.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();
  const firstObj = t.indexOf('{');
  const firstArr = t.indexOf('[');
  let start = -1, open = '{', close = '}';
  if (firstArr !== -1 && (firstObj === -1 || firstArr < firstObj)) { start = firstArr; open = '['; close = ']'; }
  else if (firstObj !== -1) { start = firstObj; }
  if (start === -1) return null;
  const end = t.lastIndexOf(close);
  if (end <= start) return null;
  try { return JSON.parse(t.slice(start, end + 1)); } catch (e) { return null; }
}

/* ── validation des demandes ──────────────────────────────────────── */
function sanitize(task, p) {
  const out = { lang: p.lang === 'an' ? 'an' : 'fr', isDoc: task === 'doc' };
  if (task === 'image' || task === 'doc') {
    const modes = task === 'image'
      ? ['describe', 'ocr', 'ask', 'json']
      : ['summary', 'keypoints', 'ask', 'json'];
    out.mode = modes.indexOf(p.mode) !== -1 ? p.mode : (task === 'image' ? 'ask' : 'summary');
    const imgs = Array.isArray(p.images) ? p.images : [];
    if (!imgs.length || imgs.length > MAX_IMAGES) return null;
    const clean = [];
    for (const im of imgs) {
      if (typeof im !== 'string' || im.slice(0, 11) !== 'data:image/') return null;
      const b64 = im.split(',')[1] || '';
      if (!b64 || b64.length > MAX_IMAGE_B64) return null;
      clean.push(im);
    }
    out.images = clean;
    out.question = String(p.question || '').slice(0, 600).trim();
    out.schema = String(p.schema || '').slice(0, 400).trim();
    if ((out.mode === 'ask' || out.mode === 'json') && out.mode === 'ask' && !out.question) return null;
    return out;
  }
  if (task === 'chat') {
    const hist = Array.isArray(p.messages) ? p.messages.slice(-12) : [];
    out.messages = hist
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
      .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));
    if (!out.messages.length || out.messages[out.messages.length - 1].role !== 'user') return null;
    return out;
  }
  return null;
}

/* ── chat texte (sans images) ─────────────────────────────────────── */
async function generateChat(v) {
  const started = Date.now();
  const sys = v.lang === 'an'
    ? 'You are a helpful assistant. Answer concisely in English.'
    : 'Tu es un assistant utile. Réponds de façon claire et concise en français.';
  const messages = [{ role: 'system', content: sys }].concat(v.messages);
  const attempt = async (fn) => {
    try { return await fn(); } catch (e) { return { status: 0, data: null }; }
  };
  if (!dead.openrouter && process.env.OPENROUTER_API_KEY) {
    for (const model of OR_VISION) {
      const left = TOTAL_BUDGET_MS - (Date.now() - started);
      if (left < 3000) break;
      const r = await attempt(() => httpJson(
        'https://openrouter.ai/api/v1/chat/completions',
        { model, max_tokens: 900, temperature: 0.6, messages },
        { Authorization: 'Bearer ' + process.env.OPENROUTER_API_KEY },
        Math.min(PROVIDER_TIMEOUT_MS, left)));
      if (r.status === 200 && r.data && r.data.choices && r.data.choices[0]) {
        const text = ((r.data.choices[0].message || {}).content || '').trim();
        if (text) return { provider: 'openrouter/' + model.split('/')[1], text };
      }
      if (r.status === 401 || r.status === 403) { dead.openrouter = true; break; }
    }
  }
  throw Object.assign(new Error('ai_error'), { code: 'ai_error' });
}

/* ═══════════════════════════════════════════════════════════════════
   HANDLER
   ═══════════════════════════════════════════════════════════════════ */
async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS_HEADERS());
    res.end();
    return;
  }
  if (req.method !== 'POST') { json(res, 405, { ok: false, error: 'method' }); return; }

  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    (req.socket && req.socket.remoteAddress) || 'ip';
  if (rateLimited(ip)) { json(res, 429, { ok: false, error: 'rate' }); return; }

  let payload;
  try {
    payload = JSON.parse(await readBody(req));
  } catch (e) {
    const too = e && e.code === 'too_large';
    json(res, too ? 413 : 400, { ok: false, error: too ? 'too_large' : 'bad_request' });
    return;
  }

  const task = payload && typeof payload.task === 'string' ? payload.task : '';
  if (['image', 'doc', 'chat'].indexOf(task) === -1) { json(res, 400, { ok: false, error: 'bad_task' }); return; }

  const v = sanitize(task, payload || {});
  if (!v) { json(res, 400, { ok: false, error: 'bad_request' }); return; }

  try {
    if (task === 'chat') {
      const { provider, text } = await generateChat(v);
      json(res, 200, { ok: true, provider, data: { text } });
      return;
    }
    const { provider, text } = await generate(v.mode, v);
    if (v.mode === 'json') {
      json(res, 200, { ok: true, provider, data: { json: extractJson(text), text } });
    } else {
      json(res, 200, { ok: true, provider, data: { text } });
    }
  } catch (e) {
    json(res, 502, { ok: false, error: (e && e.code) || 'ai_error' });
  }
}

module.exports = handler;
module.exports.maxDuration = 45;
