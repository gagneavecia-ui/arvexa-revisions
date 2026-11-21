/* ═══════════════════════════════════════════════════════════════════
   ARVX Révisions — sw.js (service worker, installation + hors-ligne)
   Coquille en cache prioritaire ; /api/* (IA) et Firebase traversent
   toujours vers le réseau. Bumper ARVX_SW_V à chaque déploiement.
   ═══════════════════════════════════════════════════════════════════ */
const ARVX_SW_V = 'arvx-rev-v2';
const CORE = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/pwa.js',
  './js/arvx-ai.js',
  './js/data.js',
  './js/data_g1.js',
  './js/data_g2.js',
  './js/data_g3.js',
  './js/firebase-config.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-64.png',
  './vendor/katex.min.js',
  './vendor/auto-render.min.js',
  './vendor/katex.min.css',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(ARVX_SW_V)
      .then((c) => c.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== ARVX_SW_V).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.pathname.startsWith('/api/')) return;        /* IA → réseau */
  if (url.origin !== location.origin) return;          /* Firebase/gstatic → réseau */
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit ||
      fetch(req).then((res) => {
        if (res.ok) {
          const cp = res.clone();
          caches.open(ARVX_SW_V).then((c) => c.put(req, cp)); /* polices, pages */
        }
        return res;
      }).catch(() => caches.match('./index.html'))
    )
  );
});
