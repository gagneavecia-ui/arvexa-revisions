/* ═══════════════════════════════════════════════════════════════════
   ARVX RÉVISIONS — app.js (v1)
   SPA sans rechargement (window.__marque = 42 survit à la navigation :
   on ne remplace jamais le document, on ne rend que dans #stage).

   Pages (vues) : accueil → carte (groupe de notions) → exercice.
   Dans chaque carte : LA MÉTHODOLOGIE D'ABORD, puis les exercices.
   Dans chaque exercice : énoncé → « ce que tu dois comprendre » →
   méthode pas à pas (sans résultats) → bouton VOIR LA CORRECTION.

   · Comptes : même projet Firebase que ARVX (arvexa-fbf10) — un compte
     fonctionne dans les deux applications.
   · Progression : document users/{uid}, champ « revisions » (fusion).
   · IA : /api/ai — chaîne multi-fournisseurs (OpenRouter → Gemini →
     Groq) ; si l'un tombe en panne, le suivant répond instantanément.
   ═══════════════════════════════════════════════════════════════════ */

import { auth, db } from './firebase-config.js';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js';
import {
  doc, getDoc, setDoc, serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js';

/* ── Garde de marque (démon de SPA : 42 après n'importe quelle navigation) ── */
window.__marque = 42;

const $ = (id) => document.getElementById(id);
const stage = $('stage');
const DATA = window.ARVX_DATA;

/* ── État ─────────────────────────────────────────────────────── */
const state = {
  user: null,
  profile: null,
  seen: {},            // { exId: timestamp } (miroir local de Firestore)
  route: { view: 'home', group: null, exo: null },
  lastExo: localStorage.getItem('arvx-last-exo') || null,
};

/* ════════════════════════════════════════════════════════════════
   Aides
   ════════════════════════════════════════════════════════════════ */
function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function tex(el) {
  if (window.renderMathInElement) {
    try {
      renderMathInElement(el, {
        delimiters: [
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
        ],
        throwOnError: false,
      });
    } catch (e) { console.warn('KaTeX', e); }
  }
}
function toast(msg, isErr) {
  const t = document.createElement('div');
  t.className = 'toast' + (isErr ? ' err' : '');
  t.textContent = msg;
  $('toastWrap').appendChild(t);
  setTimeout(() => t.remove(), 3400);
}
window.ARVXtoast = (m) => toast(m); /* utilisé par js/pwa.js */
function setConnexion(txt, cls) {
  $('bbTxt').textContent = txt;
  $('bbDot').className = 'dot ' + cls;
}
function setProgress() {
  const total = Object.keys(DATA.exos).filter((k) => DATA.exos[k].correction && !DATA.exos[k].pending).length;
  const done = Object.keys(state.seen).filter((k) => state.seen[k] && DATA.exos[k] && DATA.exos[k].correction && !DATA.exos[k].pending).length;
  $('tbProgNum').textContent = `${done}/${total}`;
}

/* ════════════════════════════════════════════════════════════════
   Progression (Firestore : users/{uid}.revisions)
   ════════════════════════════════════════════════════════════════ */
async function loadProgress() {
  if (!state.user) return;
  try {
    const snap = await getDoc(doc(db, 'users', state.user.uid));
    if (snap.exists()) {
      state.profile = snap.data();
      state.seen = (snap.data().revisions) || {};
    }
  } catch (e) {
    console.warn('[Révisions] lecture progression :', e.code || e.message);
  }
  setProgress();
}
async function markSeen(exId) {
  state.seen[exId] = Date.now();
  setProgress();
  try {
    await setDoc(doc(db, 'users', state.user.uid),
      { revisions: { [exId]: state.seen[exId] } }, { merge: true });
  } catch (e) {
    console.warn('[Révisions] écriture progression :', e.code || e.message);
  }
}

/* ════════════════════════════════════════════════════════════════
   Rendu des vues
   ════════════════════════════════════════════════════════════════ */
function go(route) {
  state.route = route;
  render();
  stage.scrollTop = 0;
}

function render() {
  const r = state.route;
  $('btnBack').hidden = r.view === 'home';
  if (!state.user) { renderAuth(); return; }
  if (r.view === 'group' && r.group) renderGroup(r.group);
  else if (r.view === 'exo' && r.exo) renderExo(r.exo);
  else renderHome();
}

/* ── Auth ─────────────────────────────────────────────────────── */
let authMode = 'login';
function renderAuth() {
  $('btnBack').hidden = true;
  const login = authMode === 'login';
  stage.innerHTML = `
    <div class="view auth-wrap">
      <div class="auth-logo">
        <div class="l1">ARVX <em>Révisions</em></div>
        <div class="l2">Nombres complexes — Terminale D · 25 exercices corrigés pas à pas</div>
      </div>
      <div class="card">
        <div class="blk-tag">${login ? 'Connexion' : 'Créer un compte'}</div>
        ${login ? '' : `
        <div class="field"><input id="fPrenom" type="text" placeholder="Prénom" autocomplete="given-name"></div>
        <div class="field"><input id="fNom" type="text" placeholder="Nom" autocomplete="family-name"></div>`}
        <div class="field"><input id="fEmail" type="email" placeholder="Adresse e-mail" autocomplete="email"></div>
        <div class="field"><input id="fPass" type="password" placeholder="Mot de passe" autocomplete="current-password"></div>
        <button class="btn green" id="btnAuth">${login ? 'Se connecter' : 'Créer mon compte'}</button>
        <div class="auth-switch" id="authSwitch"></div>
        <p class="muted" style="margin-bottom:0">Même compte que l'application ARVX (base arvexa-fbf10). Ta progression est enregistrée dans ta fiche profil.</p>
      </div>
    </div>`;
  $('authSwitch').innerHTML = login
    ? `Pas encore de compte ? <b id="swLink">Crée-le ici</b>`
    : `Déjà un compte ? <b id="swLink">Se connecter</b>`;
  $('swLink').onclick = () => { authMode = login ? 'register' : 'login'; renderAuth(); };
  $('btnAuth').onclick = doAuth;
  tex(stage);
}

function authErr(e) {
  const map = {
    'auth/invalid-email': 'Adresse e-mail invalide.',
    'auth/user-not-found': 'Aucun compte avec cet e-mail.',
    'auth/wrong-password': 'Mot de passe incorrect.',
    'auth/invalid-credential': 'E-mail ou mot de passe incorrect.',
    'auth/email-already-in-use': 'Cet e-mail a déjà un compte — connecte-toi.',
    'auth/weak-password': 'Mot de passe trop faible (6 caractères minimum).',
    'auth/too-many-requests': 'Trop d’essais — réessaie dans un instant.',
    'auth/network-request-failed': 'Réseau indisponible.',
  };
  return map[e.code] || 'Erreur : ' + (e.code || e.message);
}

async function doAuth() {
  const email = $('fEmail').value.trim();
  const pass = $('fPass').value;
  const btn = $('btnAuth');
  btn.disabled = true;
  try {
    if (authMode === 'login') {
      await signInWithEmailAndPassword(auth, email, pass);
    } else {
      const prenom = ($('fPrenom').value || '').trim();
      const nom = ($('fNom').value || '').trim();
      if (!prenom) throw Object.assign(new Error('prenom'), { code: 'x/prenom' });
      const cred = await createUserWithEmailAndPassword(auth, email, pass);
      /* Profil compatible ARVX (mêmes champs que l'inscription ARVX) */
      const now = serverTimestamp();
      await setDoc(doc(db, 'users', cred.user.uid), {
        uid: cred.user.uid,
        firstName: prenom,
        lastName: nom,
        fullName: `${prenom} ${nom}`.trim(),
        email,
        establishment: '',
        classId: 'terminale_d',
        exam: 'bac',
        role: 'student',
        onboardingCompleted: false,
        premium: false,
        isUnlocked: false,
        hasDeposited: false,
        accountStatus: 'active',
        plan: 'gratuit',
        stats: { courses: 0, done: 0 },
        totalStudyTime: 0,
        createdAt: now,
        updatedAt: now,
      });
    }
  } catch (e) {
    toast(e.code === 'x/prenom' ? 'Ton prénom est utile : il personnalise la page.' : authErr(e), true);
  }
  btn.disabled = false;
}

/* ── Accueil ──────────────────────────────────────────────────── */
function groupDone(g) {
  return g.exos.filter((id) => state.seen[id]).length;
}
function renderHome() {
  $('tbSub').textContent = 'Nombres complexes — Terminale D';
  const prenom = state.profile?.firstName || state.user.email.split('@')[0];
  const totalExos = Object.keys(DATA.exos).filter((k) => DATA.exos[k].correction && !DATA.exos[k].pending).length;
  const doneAll = Object.keys(state.seen).filter((k) => state.seen[k] && DATA.exos[k]?.correction && !DATA.exos[k].pending).length;
  const pct = Math.round((doneAll / totalExos) * 100);

  stage.innerHTML = `
    <div class="view">
      <div class="h1">Bonjour <em>${esc(prenom)}</em> 👋</div>
      <p class="p">Chaque carte regroupe les exercices <b>d'une même notion</b> :
      la <b style="color:var(--gold)">méthodologie</b> d'abord (formules + étapes + à quoi ça sert),
      puis chaque exercice <b>sans le résultat</b> — tu cherches sur ta feuille,
      puis tu appuies sur <b style="color:var(--gold)">Voir la correction</b>
      pour comparer, comme avec un prof.</p>

      <div class="card">
        <div class="blk-tag">Ta progression</div>
        <div style="font-size:26px;font-weight:800">${doneAll}<span style="color:var(--txt-2);font-size:16px">/${totalExos} corrections consultées</span></div>
        <div class="pbar gold"><i style="width:${pct}%"></i></div>
        ${state.lastExo && DATA.exos[state.lastExo] ? `
        <button class="btn ghost" id="btnLast" style="margin-top:12px">↻ Reprendre : Exercice ${DATA.exos[state.lastExo].num}</button>` : ''}
      </div>

      ${DATA.groups.map((g) => {
        const corr = g.exos.filter((id) => !DATA.exos[id].pending);
        const d = corr.filter((id) => state.seen[id]).length, n = corr.length, p = n ? Math.round((d / n) * 100) : 0;
        const pendN = g.exos.length - n;
        return `
        <div class="card tap" data-group="${g.id}">
          <h2>${esc(g.titre)}</h2>
          <p class="p">${esc(g.accroche)}</p>
          <div style="margin-top:10px">
            <span class="chip green">${n} exercice${n > 1 ? 's' : ''} corrigé${n > 1 ? 's' : ''}</span>
            ${pendN ? `<span class="chip">+${pendN} en préparation</span>` : ''}
            <span class="chip ${d === n && n > 0 ? 'done' : 'gold'}">${d === n && n > 0 ? 'Carte terminée' : d + ' vu' + (d > 1 ? 's' : '')}</span>
          </div>
          <div class="pbar"><i style="width:${p}%"></i></div>
        </div>`;
      }).join('')}

      <div class="card">
        <div class="blk-tag">Le projet</div>
        <p class="p" style="margin-top:0">Page reliée à la même base de données que ARVX
        (Firebase <b>arvexa-fbf10</b>), servie par Vercel, code source sur GitHub.
        L'IA de cette page passe par une chaîne de plusieurs fournisseurs :
        si l'un tombe en panne, un autre répond instantanément.</p>
        <div class="links">
          <a href="https://github.com/gagneavecia-ui/arvexa-revisions" target="_blank" rel="noopener"><b>GitHub</b> gagneavecia-ui/arvexa-revisions</a>
          <a href="https://arvexa-revisions.vercel.app" target="_blank" rel="noopener"><b>Vercel</b> arvexa-revisions.vercel.app</a>
          <a href="https://console.firebase.google.com/project/arvexa-fbf10" target="_blank" rel="noopener"><b>Firebase</b> console · arvexa-fbf10</a>
        </div>
      </div>
    </div>`;

  stage.querySelectorAll('[data-group]').forEach((el) => {
    el.onclick = () => go({ view: 'group', group: el.dataset.group, exo: null });
  });
  const bl = $('btnLast');
  if (bl) bl.onclick = () => go({ view: 'exo', group: null, exo: state.lastExo });
  tex(stage);
}

/* ── Carte (groupe de notions) ────────────────────────────────── */
function renderGroup(gid) {
  const g = DATA.groups.find((x) => x.id === gid);
  if (!g) { go({ view: 'home' }); return; }
  $('tbSub').textContent = g.titre;
  const m = g.methode;
  stage.innerHTML = `
    <div class="view">
      <div class="h1">${esc(g.titre)}</div>
      <p class="p">${esc(g.intro)}</p>

      <div class="card metho">
        <div class="metho-tag">◆ Méthodologie — à lire avant les exercices</div>
        <p class="p" style="margin-top:0;color:var(--txt)">${esc(m.positionnement)}</p>
        <div class="blk-tag" style="margin-top:12px">Les formules à connaître</div>
        <ul class="formules">
          ${m.formules.map((f) => `<li><span class="f-tex">\\(${f.tex}\\)</span><span class="f-txt">${esc(f.txt)}</span></li>`).join('')}
        </ul>
        <div class="blk-tag" style="margin-top:14px">La marche à suivre</div>
        <ol class="steps">${m.etapes.map((s) => `<li>${s}</li>`).join('')}</ol>
        <div class="sert"><b>À quoi ça sert :</b> ${esc(m.aservir)}</div>
      </div>

      <div class="blk-tag" style="margin:18px 0 4px">Les exercices de cette carte</div>
      ${g.exos.map((id) => {
        const e = DATA.exos[id];
        if (!e) return '';
        const done = !!state.seen[id];
        return `
        <div class="exo-item ${done ? 'done' : ''}" data-exo="${id}">
          <div class="exo-num">${e.num}</div>
          <div class="exo-tt">${esc(e.titre)}</div>
          <div class="exo-check">${done ? '✓' : '›'}</div>
        </div>`;
      }).join('')}
      <p class="muted" style="text-align:center">Fiche ${g.id.toUpperCase()} · exercices ${g.exos.map((id) => DATA.exos[id]?.num).filter(Boolean).join(', ')}</p>
    </div>`;

  stage.querySelectorAll('[data-exo]').forEach((el) => {
    el.onclick = () => go({ view: 'exo', group: gid, exo: el.dataset.exo });
  });
  tex(stage);
}

/* ── Exercice ─────────────────────────────────────────────────── */
function renderExo(id) {
  const e = DATA.exos[id];
  if (!e) { go({ view: 'home' }); return; }
  state.lastExo = id;
  localStorage.setItem('arvx-last-exo', id);
  $('tbSub').textContent = `Exercice ${e.num} — ${e.titre}`;
  const done = !!state.seen[id] && !e.pending;
  stage.innerHTML = `
    <div class="view">
      <div class="h1">Exercice ${e.num} <em>·</em> ${esc(e.titre)}</div>
      <div style="margin:4px 0 10px">
        <span class="chip gold">${esc(DATA.groups.find((g) => g.id === e.groupe)?.titre || '')}</span>
        ${done ? '<span class="chip done">✓ corrigé consulté</span>' : ''}
      </div>
      <p class="muted livre-ref">Repère dans ton livre : <b>${esc(DATA.meta.livre)}</b>, ${esc(DATA.meta.pages)}
      — exercice <b>N° ${e.num}</b>. Garde la page ouverte à côté et compare pendant que tu cherches.</p>

      <div class="card enonce">
        <div class="blk-tag">Énoncé</div>
        ${e.enonce}
      </div>

      <div class="card comprendre">
        <div class="blk-tag">Avant de chercher — ce que tu dois comprendre</div>
        ${e.comprendre}
      </div>

      ${e.note ? `<div class="card note-livre"><div class="blk-tag" style="color:#9cc3f5">Remarque sur l'énoncé</div>${e.note}</div>` : ''}

      <div class="card">
        <div class="blk-tag">Méthode pas à pas — cherche d'abord sur ta feuille</div>
        <ol class="steps">${e.etapes.map((s) => `<li>${s}</li>`).join('')}</ol>
        <p class="muted" style="margin:10px 0 14px">Quand c'est fait (ou bloqué), ouvre la correction et compare ligne par ligne.</p>
        <button class="btn" id="btnCorr">${done ? 'Revoir la correction' : 'Voir la correction'}</button>
      </div>

      <div class="card correction" id="corrCard">
        <h3>Correction détaillée — prof particulier</h3>
        ${e.correction}
      </div>

      <div class="card ai-card">
        <div class="ai-head">
          <b>Pose ta question à l'IA</b>
          <span class="ai-provider" id="aiProvider"></span>
        </div>
        <p class="p" style="margin:0 0 10px">L'IA connaît cet exercice et sa correction : elle t'explique
        le passage qui te bloque, sans te donner la suite brute. Chaîne multi-fournisseurs :
        si l'un est en panne, un autre prend le relais.</p>
        <div class="ai-row">
          <input type="text" id="aiQ" placeholder="Ex. : pourquoi le conjugué au dénominateur ?">
          <button id="aiGo" title="Envoyer">➤</button>
        </div>
        <div class="ai-extra">
          <label for="aiFile">📷 Vérifier ma copie (photo)</label>
          <input type="file" id="aiFile" accept="image/*">
          <span class="muted" id="aiHint"></span>
        </div>
        <div class="ai-out" id="aiOut"></div>
      </div>
    </div>`;

  const corrCard = $('corrCard');
  $('btnCorr').onclick = async () => {
    const open = corrCard.classList.toggle('open');
    $('btnCorr').textContent = open ? 'Cacher la correction' : (state.seen[id] ? 'Revoir la correction' : 'Voir la correction');
    if (open && !state.seen[id]) {
      await markSeen(id);
      const it = stage.querySelector(`[data-exo="${id}"]`);
      if (it) it.classList.add('done');
    }
    if (open) corrCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  if (done) corrCard.classList.add('open');

  /* IA */
  const out = $('aiOut');
  const setOut = (html, isErr) => {
    out.className = 'ai-out show' + (isErr ? ' err' : '');
    out.textContent = html;
  };
  const context = `[Contexte pour l'IA — exercice ${e.num}, Terminale D, nombres complexes]\nÉnoncé : ${e.enonceText}\nCorrection de référence (résumé) : ${e.correctionText}\n[Réponds en français, comme un prof de lycée : pas à pas, en expliquant le pourquoi, sans donner d'un coup toute la solution si l'élève pose une question ciblée.]`;
  async function askIA(q, imageDataUrl) {
    setOut('⟳ Réflexion en cours…');
    $('aiHint').textContent = '';
    try {
      let res;
      if (imageDataUrl) {
        res = await ARVX_AI.ask('image', {
          mode: 'ask',
          lang: 'fr',
          images: [imageDataUrl],
          question: context + `\n\nL'élève envoie la PHOTO DE SA COPIE pour cet exercice. Compare sa copie à la correction : dis précisément ce qui est juste, ce qui est faux, où est l'erreur et comment la corriger.`,
        });
      } else {
        res = await ARVX_AI.ask('chat', {
          lang: 'fr',
          messages: [{ role: 'user', content: context + `\n\nQuestion de l'élève : ${q}` }],
        });
      }
      if (res && res.provider) $('aiProvider').textContent = 'via ' + res.provider;
      setOut((res && res.data && (res.data.text || res.data.content)) || JSON.stringify(res && res.data));
    } catch (err) {
      setOut(ARVX_AI.errMessage(err && err.code) || ('Erreur : ' + (err.message || err)), true);
    }
  }
  $('aiGo').onclick = () => {
    const q = $('aiQ').value.trim();
    if (q) { askIA(q); $('aiQ').value = ''; }
  };
  $('aiQ').addEventListener('keydown', (ev) => { if (ev.key === 'Enter') $('aiGo').click(); });
  $('aiFile').addEventListener('change', async (ev) => {
    const f = ev.target.files && ev.target.files[0];
    if (!f) return;
    $('aiHint').textContent = 'compression de la photo…';
    try {
      const dataUrl = await ARVX_AI.compressImageFile(f);
      $('aiHint').textContent = 'photo prête ✓';
      askIA(null, dataUrl);
    } catch (err) {
      setOut('Photo illisible : ' + (err.message || err), true);
    }
    ev.target.value = '';
  });

  tex(stage);
}

/* ════════════════════════════════════════════════════════════════
   Navigation & boot
   ════════════════════════════════════════════════════════════════ */
$('btnBack').onclick = () => {
  const r = state.route;
  if (r.view === 'exo' && r.group) go({ view: 'group', group: r.group, exo: null });
  else go({ view: 'home' });
};
$('btnHome').onclick = () => go({ view: 'home' });
$('btnResume').onclick = () => { if (state.lastExo) go({ view: 'exo', group: null, exo: state.lastExo }); };

setConnexion('connexion…', 'warn');
onAuthStateChanged(auth, async (user) => {
  if (user) {
    state.user = user;
    setConnexion('Firebase ✓', 'ok');
    await loadProgress();
    $('btnResume').hidden = !state.lastExo;
    render();
  } else {
    state.user = null;
    state.profile = null;
    state.seen = {};
    setConnexion('hors ligne', 'warn');
    render();
  }
});

/* Test intégré : la marque doit rester 42 (aucun rechargement). */
if (window.__marque !== 42) console.error('marque perdue !');
