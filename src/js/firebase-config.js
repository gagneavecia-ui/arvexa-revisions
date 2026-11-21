/* ═══════════════════════════════════════════════════════════════════
   ARVX RÉVISIONS — FIREBASE CONFIG
   Même projet Firebase que ARVEXA School et l'application ARVX :
   « arvexa-fbf10 ». Un compte y fonctionne dans les trois applications.

   · Config publique par conception (identifiants d'aiguillage) — la
     sécurité est assurée par les règles Firestore (chacun n'accède
     qu'à ses données) et la liste des domaines Authentication.
   · SDK modulaire v12 via CDN ESM (gstatic) — aucun build.
   · La progression des révisions est stockée dans le DOCUMENT PROFIL
     users/{uid} (champ « revisions ») : même base de données que ARVX,
     collection déjà accessible au propriétaire du compte.
   ═══════════════════════════════════════════════════════════════════ */

import { initializeApp, getApps, getApp } from
  'https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js';
import { getAuth } from
  'https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js';
import { initializeFirestore, persistentLocalCache, persistentSingleTabManager } from
  'https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js';

export const firebaseConfig = {
  apiKey: 'AIzaSyDHscOXw3rLuhV6z1Cny-bdYCumqpnG7QE',
  authDomain: 'arvexa-fbf10.firebaseapp.com',
  projectId: 'arvexa-fbf10',
  appId: '1:920108330053:web:f532d71cbc2c824bc7472c',
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentSingleTabManager(),
  }),
});
