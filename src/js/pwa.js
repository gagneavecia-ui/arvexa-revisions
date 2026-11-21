/* ═══════════════════════════════════════════════════════════════════
   ARVX Révisions — js/pwa.js (installation de l'application)
   · Enregistre le service worker (hors-ligne)
   · Affiche le bouton « Installer » quand le navigateur le permet
   · iPhone : explique Partager → Sur l'écran d'accueil
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* 1. Service worker */
  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  }

  /* 2. Bouton Installer (Android / Chrome / Edge) */
  let deferred = null;
  var btn = document.getElementById('btnInstall');

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    if (btn) {
      btn.hidden = false;
      btn.onclick = function () {
        if (!deferred) return;
        deferred.prompt();
        deferred.userChoice.then(function () { deferred = null; btn.hidden = true; });
      };
    }
  });
  window.addEventListener('appinstalled', function () {
    if (btn) btn.hidden = true;
    if (window.ARVXtoast) window.ARVXtoast('Application installée sur ton téléphone');
  });

  /* 3. iPhone / iPad : pas de prompt automatique → notice une fois par jour */
  var iOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  var standalone = window.navigator.standalone === true
    || window.matchMedia('(display-mode: standalone)').matches;
  if (iOS && !standalone) {
    try {
      var last = parseInt(localStorage.getItem('arvx-ios-hint') || '0', 10);
      if (Date.now() - last > 20 * 3600 * 1000) {
        localStorage.setItem('arvx-ios-hint', String(Date.now()));
        setTimeout(function () {
          if (window.ARVXtoast) {
            window.ARVXtoast('Sur iPhone : bouton Partager, puis « Sur l\u2019écran d\u2019accueil »');
          }
        }, 2500);
      }
    } catch (e) { /* localStorage indisponible */ }
  }
})();
