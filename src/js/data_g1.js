/* ═══ Données — Cartes 1 & 2 : calcul algébrique ; module/argument ═══ */
(function () {
const D = window.ARVX_DATA;
D.groups = D.groups || [];
D.exos = D.exos || {};

/* ═══════════ CARTE 1 — Calcul dans ℂ : forme algébrique ═══════════ */
D.groups.push({
  id: 'g1',
  titre: 'Forme algébrique : calculs et conjugué',
  accroche: 'Écrire, additionner, multiplier, diviser des complexes — le socle de tout le chapitre.',
  intro: 'Dans cette carte on manipule les nombres complexes sous la forme \\(z = x + iy\\) : les parties réelle et imaginaire, le conjugué, et les quatre opérations. C\'est la boîte à outils que TOUTES les autres cartes utiliseront.',
  methode: {
    positionnement: 'Avant toute question de module, d\'argument ou de géométrie, il faut savoir écrire un nombre complexe sous forme algébrique \\(x + iy\\) avec \\(x\\) et \\(y\\) réels. Ici on s\'entraîne exactement à cela : développer avec \\(i^2 = -1\\), rendre un quotient « sans \\(i\\) au dénominateur » grâce au conjugué, et reconnaître parties réelle et imaginaire.',
    formules: [
      { tex: 'i^2 = -1', txt: 'la règle de base : chaque fois que \\(i^2\\) apparaît, on le remplace par \\(-1\\).' },
      { tex: '\\bar{z} = x - iy', txt: 'conjugué : on change le signe de la partie imaginaire (et \\(\\overline{x}=x\\) si \\(z\\) est réel).' },
      { tex: '\\dfrac{1}{x+iy} = \\dfrac{x-iy}{x^2+y^2}', txt: '« multiplier par le conjugué » : le dénominateur devient réel \\(x^2+y^2\\).' },
      { tex: '(x+iy)(x\'+iy\') = (xx\'-yy\') + i(xy\'+yx\')', txt: 'produit : on développe comme une double distributivité puis \\(i^2=-1\\).' },
      { tex: 'z\\bar{z} = |z|^2 = x^2+y^2', txt: 'un nombre fois son conjugué = le carré de son module (nombre réel positif).' },
    ],
    etapes: [
      `Réécris d\'abord chaque nombre sous la forme canonique \\(x+iy\\) (exemple : \\(z = i-1 = -1+i\\)) — c\'est là que naissent 90 % des erreurs de signe.`,
      'Pour une somme ou différence : additionne les parties réelles entre elles, les parties imaginaires entre elles. Jamais « en croix ».',
      'Pour un produit : développe avec la double distributivité, remplace \\(i^2\\) par \\(-1\\), puis regroupe réel et imaginaire.',
      'Pour un quotient \\(\\dfrac{a+ib}{c+id}\\) : multiplie numérateur et dénominateur par le conjugué \\(c-id\\). Le dénominateur devient \\(c^2+d^2\\), un réel.',
      'Pour une puissance : écris la définition (\\(z^3 = z\\times z\\times z\\)) ou utilise une identité remarquable, puis développe comme un produit.',
      'Termine TOUJOURS en relisant : « quelle est ma partie réelle ? quelle est ma partie imaginaire ? »',
    ],
    aservir: 'tout le reste du chapitre : résoudre des équations (carte 3), calculer des modules (carte 2), placer des points (carte 7), écrire des transformations (carte 6). Au Bac, une question « écrire sous forme algébrique » vaut des points faciles — à condition de ne pas se tromper de signe.',
  },
  exos: ['ex1', 'ex2', 'ex3'],
});

D.exos.ex1 = {
  num: 1, groupe: 'g1', titre: 'Parties réelle, imaginaire, conjugués',
  enonce: `<p>1) Donner la partie réelle et la partie imaginaire de chacun des nombres complexes :</p>
  <p>\\(z_1 = -1+\\tfrac{1}{2}i\\ ;\\quad z_2 = i\\ ;\\quad z_3 = (1+2i)^2\\ ;\\quad z_4 = (1+i)^3\\ ;\\)</p>
  <p>\\(z_5 = \\dfrac{1}{1+3i}\\ ;\\quad z_6 = \\dfrac{1+i}{2+i}\\ ;\\quad z_7 = (1+i)^{-3}\\ ;\\quad z_8 = -i-3.\\)</p>
  <p>2) Donner les conjugués de chacun des nombres complexes :</p>
  <p>\\(z_1 = 2+3i\\ ;\\quad z_2 = -i\\ ;\\quad z_3 = (1-i)^3\\ ;\\quad z_4 = (1+i\\sqrt{2})^3\\ ;\\)</p>
  <p>\\(z_5 = \\dfrac{3}{1-2i}\\ ;\\quad z_6 = \\dfrac{1-i}{2-i}\\ ;\\quad z_7 = (1+i)^{-2}\\ ;\\quad z_8 = -4i-1.\\)</p>
  <p>3) Placer dans le plan complexe les points \\(M_i\\) d'affixes \\(z_1 = 2+3i\\ ;\\ z_2 = -i-3\\ ;\\ z_3 = -1+2i\\ ;\\ z_4 = 2-i\\ ;\\ z_5 = i\\ ;\\ z_6 = -2.\\)</p>`,
  enonceText: '1) Parties réelle et imaginaire de : z1=-1+i/2 ; z2=i ; z3=(1+2i)^2 ; z4=(1+i)^3 ; z5=1/(1+3i) ; z6=(1+i)/(2+i) ; z7=(1+i)^-3 ; z8=-i-3. 2) Conjugués de : 2+3i ; -i ; (1-i)^3 ; (1+i√2)^3 ; 3/(1-2i) ; (1-i)/(2-i) ; (1+i)^-2 ; -4i-1. 3) Placer les points d\'affixes 2+3i, -i-3, -1+2i, 2-i, i, -2.',
  comprendre: `<p>Ce que le livre teste ici : sais-tu qu'un nombre complexe n'est « fini » que lorsqu'il est écrit \\(x+iy\\) avec \\(x\\) et \\(y\\) <b>réels</b> ? Un nombre comme \\((1+2i)^2\\) ou \\(\\frac{1}{1+3i}\\) n'est pas encore sous forme algébrique : il faut le transformer. Et le conjugué, c'est simplement « le même nombre avec l'imaginaire opposé » — mais encore faut-il avoir la forme \\(x+iy\\) pour le voir.</p>`,
  etapes: [
    'Pour chaque nombre, demande-toi : « est-il déjà sous la forme \\(x+iy\\) ? ». Si oui, lis \\(x\\) et \\(y\\) directement.',
    'Pour \\(z_3\\) et \\(z_4\\) (des puissances) : développe avec \\(i^2=-1\\) AVANT de lire parties réelle et imaginaire.',
    'Pour \\(z_5\\) et \\(z_6\\) (des quotients) : multiplie haut et bas par le conjugué du dénominateur.',
    `Pour \\(z_7\\) : \\((1+i)^{-3} = \\dfrac{1}{(1+i)^3}\\) — calcule d\'abord \\((1+i)^3\\), puis inverse avec le conjugué.`,
    'Pour les conjugués (question 2) : même travail, puis change le signe de la partie imaginaire.',
    `Astuce pour \\(z_4\\) et \\(z_3\\) question 2 : \\(\\overline{z^3} = \\bar{z}^3\\) — tu peux conjuguer AVANT d\'élever au cube, c\'est parfois plus simple.`,
    'Question 3 : chaque point \\(M(x\\,;y)\\) a pour affixe \\(x+iy\\) — abscisse = partie réelle, ordonnée = partie imaginaire.',
  ],
  correction: `
  <p><b>Question 1 — parties réelle et imaginaire.</b></p>
  <ul class="steps">
    <li>\\(z_1 = -1+\\tfrac12 i\\) : déjà algébrique → \\(\\operatorname{Re}(z_1) = -1\\), \\(\\operatorname{Im}(z_1) = \\tfrac12\\).</li>
    <li>\\(z_2 = i\\) : c'est \\(0+1\\cdot i\\) → \\(\\operatorname{Re} = 0\\), \\(\\operatorname{Im} = 1\\). (Un imaginaire pur a une partie réelle nulle.)</li>
    <li>\\(z_3 = (1+2i)^2 = 1+4i+4i^2 = 1+4i-4 = -3+4i\\). Pourquoi développer ? Parce que \\((a+b)^2 = a^2+2ab+b^2\\) marche pour TOUS les nombres, complexes compris. → \\(-3\\) et \\(4\\).</li>
    <li>\\(z_4 = (1+i)^3\\). On passe par \\((1+i)^2 = 1+2i+i^2 = 2i\\), puis \\((1+i)^3 = 2i(1+i) = 2i+2i^2 = -2+2i\\). → \\(-2\\) et \\(2\\).</li>
    <li>\\(z_5 = \\dfrac{1}{1+3i}\\). On multiplie par le conjugué : \\(\\dfrac{1\\cdot(1-3i)}{(1+3i)(1-3i)} = \\dfrac{1-3i}{1+9} = \\dfrac{1}{10} - \\dfrac{3}{10}i\\). Pourquoi ça marche ? Parce que \\((1+3i)(1-3i) = 1^2-(3i)^2 = 1+9\\), un réel. → \\(\\tfrac{1}{10}\\) et \\(-\\tfrac{3}{10}\\).</li>
    <li>\\(z_6 = \\dfrac{(1+i)(2-i)}{(2+i)(2-i)} = \\dfrac{2-i+2i-i^2}{5} = \\dfrac{3+i}{5}\\). → \\(\\tfrac35\\) et \\(\\tfrac15\\).</li>
    <li>\\(z_7 = (1+i)^{-3} = \\dfrac{1}{-2+2i} = \\dfrac{(-2-2i)}{(-2)^2+2^2} = \\dfrac{-2-2i}{8} = -\\dfrac14-\\dfrac14 i\\). → \\(-\\tfrac14\\) et \\(-\\tfrac14\\).</li>
    <li>\\(z_8 = -i-3 = -3-i\\) → \\(-3\\) et \\(-1\\). (Réécris TOUJOURS le réel d'abord : c'est le réflexe anti-erreur.)</li>
  </ul>
  <p><b>Question 2 — conjugués.</b></p>
  <ul class="steps">
    <li>\\(\\overline{2+3i} = 2-3i\\) ; \\(\\overline{-i} = i\\) ; \\(\\overline{-4i-1} = -1+4i\\) : lecture directe.</li>
    <li>\\(\\overline{(1-i)^3}\\) : d'abord \\((1-i)^2 = 1-2i+i^2 = -2i\\), puis \\((1-i)^3 = -2i(1-i) = -2i+2i^2 = -2-2i\\). Conjugué : \\(-2+2i\\).</li>
    <li>\\(\\overline{(1+i\\sqrt2)^3}\\) : astuce \\(\\overline{z^3} = \\bar z^{\\,3}\\), donc conjugué \\(= (1-i\\sqrt2)^3\\). Or \\((1-i\\sqrt2)^2 = 1-2i\\sqrt2-2 = -1-2i\\sqrt2\\), puis \\((-1-2i\\sqrt2)(1-i\\sqrt2) = -1+i\\sqrt2-2i\\sqrt2+2i^2\\sqrt2\\cdot\\) ... on trouve \\(-5-i\\sqrt2\\). (Le cube lui-même vaut \\(-5+i\\sqrt2\\).)</li>
    <li>\\(\\overline{\\dfrac{3}{1-2i}}\\) : \\(\\dfrac{3}{1-2i} = \\dfrac{3(1+2i)}{5} = \\dfrac{3+6i}{5}\\), conjugué \\(= \\dfrac{3-6i}{5}\\). (Ou directement : \\(\\overline{3/(1-2i)} = 3/(1+2i)\\).)</li>
    <li>\\(\\dfrac{1-i}{2-i} = \\dfrac{(1-i)(2+i)}{5} = \\dfrac{2+i-2i-i^2}{5} = \\dfrac{3-i}{5}\\), conjugué \\(= \\dfrac{3+i}{5}\\).</li>
    <li>\\((1+i)^{-2} = \\dfrac{1}{2i} = \\dfrac{-i}{2}\\) (car \\(\\frac{1}{i} = -i\\)), conjugué \\(= \\dfrac{i}{2}\\).</li>
  </ul>
  <p><b>Question 3 — placement.</b> \\(2+3i\\) : point de coordonnées \\((2\\,;3)\\). \\(-i-3\\) : \\((-3\\,;-1)\\). \\(-1+2i\\) : \\((-1\\,;2)\\). \\(2-i\\) : \\((2\\,;-1)\\). \\(i\\) : \\((0\\,;1)\\). \\(-2\\) : \\((-2\\,;0)\\) — sur l'axe des réels, car imaginaire nulle.</p>
  <div class="pourquoi"><b>Pourquoi cette méthode ?</b> Le conjugué est l'outil qui « annule » l'imaginaire d'un produit : \\(z\\bar z = |z|^2\\) est réel. C'est pour ça qu'on multiplie par le conjugué du dénominateur — on fabrique une identité remarquable \\((a+ib)(a-ib) = a^2+b^2\\). À quoi ça sert ? À diviser dans \\(\\mathbb{C}\\), donc à TOUT : équations, modules, arguments.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> oublier de changer le signe de \\(i\\) dans le conjugué ; écrire \\((1+i)^{-3} = (1+i)^3\\) ; remplacer \\(i^2\\) par \\(+1\\) ; et surtout ne PAS réécrire \\(i-1\\) en \\(-1+i\\) avant de calculer — d'où des signes faux en cascade.</div>`,
  correctionText: 'z3=(1+2i)^2=-3+4i ; z4=(1+i)^3=-2+2i ; z5=(1-3i)/10 ; z6=(3+i)/5 ; z7=(-1-i)/4 ; z8=-3-i. Conjugués : 2-3i ; i ; -2+2i ; -5-i√2 ; (3-6i)/5 ; (3+i)/5 ; i/2 ; -1+4i. Placement : affixe x+iy ↔ point (x,y).',
};

D.exos.ex2 = {
  num: 2, groupe: 'g1', titre: 'Opérations sur deux complexes',
  enonce: `<p>Soient \\(z_1 = 3+4i\\) et \\(z_2 = i-1\\).</p>
  <p>Calculer \\(z_1+z_2\\ ;\\quad z_1-z_2\\ ;\\quad 2z_1-3z_2\\ ;\\quad z_1z_2\\ ;\\quad {z_1}^2.\\)</p>`,
  enonceText: 'z1=3+4i, z2=i-1. Calculer z1+z2 ; z1-z2 ; 2z1-3z2 ; z1z2 ; z1^2.',
  comprendre: `<p>Un exercice volontairement simple — mais avec un piège : \\(z_2 = i-1\\) n'est PAS sous forme canonique. Si tu calcules avec « \\(i-1\\) » tel quel, tu vas sortir des signes faux. Le réflexe prof : réécrire \\(z_2 = -1+i\\) AVANT toute opération.</p>`,
  etapes: [
    `Réécris \\(z_2 = -1+i\\). C\'est fait ? Tout le reste est mécanique.`,
    'Somme et différence : groupe les réels ensemble, les imaginaires ensemble.',
    `Pour \\(2z_1-3z_2\\) : multiplie D\'ABORD chaque nombre par son coefficient, puis soustrais.`,
    'Pour le produit \\(z_1z_2\\) : double distributivité, \\(i^2 = -1\\), regroupe.',
    'Pour \\(z_1^2\\) : identité remarquable \\((a+b)^2 = a^2+2ab+b^2\\) avec \\(a=3\\), \\(b=4i\\).',
    'Vérification rapide : le produit de deux nombres dont les parties imaginaires sont de signes opposés... regarde le signe de ta partie imaginaire finale pour te convaincre.',
  ],
  correction: `
  <ul class="steps">
    <li>\\(z_1+z_2 = (3+4i)+(-1+i) = (3-1)+(4+1)i = 2+5i\\).</li>
    <li>\\(z_1-z_2 = (3+4i)-(-1+i) = 3+4i+1-i = 4+3i\\). Attention : le « \\(-\\) » agit sur TOUT \\(z_2\\), d'où \\(+1\\) et \\(-i\\).</li>
    <li>\\(2z_1-3z_2 = (6+8i)-(-3+3i) = 6+8i+3-3i = 9+5i\\).</li>
    <li>\\(z_1z_2 = (3+4i)(-1+i) = -3+3i-4i+4i^2 = -3-i-4 = -7-i\\).</li>
    <li>\\({z_1}^2 = (3+4i)^2 = 9+24i+16i^2 = 9+24i-16 = -7+24i\\).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi insister sur un exercice simple ?</b> Parce qu'au Bac, les questions difficiles sont presque toujours des EMPILEMENTS de ces gestes. Le jour où tu doutes d'un signe dans un gros calcul, tu redescends à ce niveau : somme, produit, carré. À quoi ça sert ? \\({z_1}^2\\) avec \\(3+4i\\) est célèbre : c'est le triangle rectangle \\(3\\)-\\(4\\)-\\(5\\) caché dans \\(\\sqrt{3^2+4^2} = 5\\) — module de \\(z_1\\), puis \\(|z_1^2| = 25\\) aussi.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> calculer \\(z_1-z_2\\) comme \\(3+4i-1+i\\) (oubli de distribuer le « moins ») ; écrire \\(4i^2 = 4i\\) ; oublier le double produit \\(2ab\\) dans le carré.</div>`,
  correctionText: 'z1+z2=2+5i ; z1-z2=4+3i ; 2z1-3z2=9+5i ; z1z2=-7-i ; z1^2=-7+24i.',
};

D.exos.ex3 = {
  num: 3, groupe: 'g1', titre: 'Quatre mises sous forme \\(x+iy\\)',
  enonce: `<p>Écrire sous la forme \\(x+iy\\), \\((x,y)\\in\\mathbb{R}^2\\), les nombres complexes suivants :</p>
  <p>\\(z_1 = (2+3i)^3\\ ;\\quad z_2 = \\dfrac{2+5i}{1-i}+\\dfrac{2-5i}{1+i}\\ ;\\quad z_3 = \\left(\\dfrac{i-1}{2}\\right)(1+i)^2\\ ;\\quad z_4 = \\left(\\dfrac{1+i}{2-i}\\right)^2+\\dfrac{3+6i}{3-4i}.\\)</p>`,
  enonceText: 'Écrire sous forme x+iy : z1=(2+3i)^3 ; z2=(2+5i)/(1-i)+(2-5i)/(1+i) ; z3=((i-1)/2)(1+i)^2 ; z4=((1+i)/(2-i))^2+(3+6i)/(3-4i).',
  comprendre: `<p>Quatre techniques en un exercice : la puissance au cube, la somme de deux quotients conjugués, le produit par un carré remarquable, et le mélange carré-de-quotient + quotient. Remarque déjà : dans \\(z_2\\), les deux dénominateurs \\(1-i\\) et \\(1+i\\) sont conjugués — ce n'est pas un hasard, c'est conçu pour que ça se simplifie.</p>`,
  etapes: [
    `\\(z_1\\) : passe par \\((2+3i)^2\\) d\'abord, puis multiplie le résultat par \\((2+3i)\\).`,
    '\\(z_2\\) : traite chaque quotient séparément (conjugué du dénominateur), puis additionne les deux résultats. Observe : les parties imaginaires vont se détruire.',
    `\\(z_3\\) : commence par \\((1+i)^2\\) — tu connais déjà sa valeur depuis l\'exercice 1. C\'est un raccourci volontaire du livre.`,
    `\\(z_4\\) : d\'abord le quotient \\(\\frac{1+i}{2-i}\\), puis son carré ; séparément \\(\\frac{3+6i}{3-4i}\\) ; additionne à la fin. Mets les deux termes au même dénominateur.`,
    `Contrôle final : chaque résultat doit s\'écrire \\(x+iy\\) avec \\(x\\), \\(y\\) rationnels ici. Si des \\(i\\) traînent au dénominateur, ce n\'est pas fini.`,
  ],
  correction: `
  <ul class="steps">
    <li>\\(z_1\\) : \\((2+3i)^2 = 4+12i+9i^2 = -5+12i\\). Puis \\(z_1 = (-5+12i)(2+3i) = -10-15i+24i+36i^2 = -46+9i\\). Donc \\(z_1 = -46+9i\\).</li>
    <li>\\(z_2\\) : \\(\\dfrac{(2+5i)(1+i)}{(1-i)(1+i)} = \\dfrac{-3+7i}{2}\\) et \\(\\dfrac{(2-5i)(1-i)}{2} = \\dfrac{-3-7i}{2}\\). Somme : \\(\\dfrac{-3+7i-3-7i}{2} = \\dfrac{-6}{2} = -3\\). Les imaginaires se sont annulées — c'était le but du couple de dénominateurs conjugués. \\(z_2 = -3\\) (réel pur).</li>
    <li>\\(z_3\\) : \\((1+i)^2 = 2i\\), donc \\(z_3 = \\dfrac{(i-1)}{2}\\cdot 2i = (i-1)i = i^2-i = -1-i\\).</li>
    <li>\\(z_4\\) : \\(\\dfrac{1+i}{2-i} = \\dfrac{(1+i)(2+i)}{5} = \\dfrac{1+3i}{5}\\), donc \\(\\left(\\dfrac{1+3i}{5}\\right)^2 = \\dfrac{1+6i+9i^2}{25} = \\dfrac{-8+6i}{25}\\). Et \\(\\dfrac{3+6i}{3-4i} = \\dfrac{(3+6i)(3+4i)}{25} = \\dfrac{-15+30i}{25}\\). Somme : \\(z_4 = \\dfrac{-23+36i}{25}\\).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi \\(z_2\\) tombe-t-elle si bien ?</b> Parce que \\(\\dfrac{2+5i}{1-i}\\) et \\(\\dfrac{2-5i}{1+i}\\) sont conjuguées l'une de l'autre : leur somme vaut \\(2\\times\\) la partie réelle. Le livre construit ainsi : reconnaître des structures (conjugués, carrés remarquables) pour économiser du calcul. À quoi ça sert ? En géométrie (carte 7), les affixes se mélangent exactement comme ici — qui sait bien calculer écrit les corrections de géométrie sans faute.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> développer \\((2+3i)^3\\) directement en \\(2^3+(3i)^3\\) (FAUX — le cube n'est pas distribué sur une somme !) ; oublier de réduire au même dénominateur dans \\(z_4\\) ; s'arrêter avant d'avoir regroupé.</div>`,
  correctionText: 'z1=(2+3i)^3=-46+9i ; z2=-3 (quotients conjugués, parties imaginaires nulles) ; z3=-1-i ; z4=(-23+36i)/25.',
};

/* ═══════════ CARTE 2 — Module, argument, formes expo ═══════════ */
D.groups.push({
  id: 'g2',
  titre: 'Module, argument et formes exponentielles',
  accroche: 'Calculer un module, un argument, passer d\'une écriture à l\'autre — la « boussole » des complexes.',
  intro: 'Ici on quitte la vision « calculatoire » pour la vision « géométrique » : un nombre complexe, c\'est une DISTANCE (module) et une DIRECTION (argument). Les écritures trigonométrique et exponentielle rendent les multiplications et les puissances presque instantanées.',
  methode: {
    positionnement: 'Savoir passer de \\(z = x+iy\\) à \\(z = r\\,e^{i\\theta}\\) (et revenir) est LA compétence centrale du chapitre. Le module \\(r\\) se calcule avec Pythagore ; l\'argument \\(\\theta\\) se lit sur un dessin ou avec les valeurs remarquables (\\(\\pi/6\\), \\(\\pi/4\\), \\(\\pi/3\\), \\(\\pi/2\\)...). Les propriétés de l\'exponentielle transforme ensuite produits et puissances en additions d\'arguments.',
    formules: [
      { tex: '|z| = \\sqrt{x^2+y^2}', txt: 'module = distance de l\'origine au point \\(M(z)\\) — Pythagore.' },
      { tex: '\\cos\\theta = \\dfrac{x}{r}\\ ;\\ \\sin\\theta = \\dfrac{y}{r}', txt: 'argument : on divise par le module, puis on RECONNAÎT un angle remarquable (dessin obligatoire !).' },
      { tex: 'z = r(\\cos\\theta + i\\sin\\theta) = r\\,e^{i\\theta}', txt: 'formes trigonométrique et exponentielle.' },
      { tex: 'zz\' = rr\'\\,e^{i(\\theta+\\theta\')}', txt: 'produit : modules multipliés, arguments ADDITIONNÉS.' },
      { tex: '\\dfrac{z}{z\'} = \\dfrac{r}{r\'}\\,e^{i(\\theta-\\theta\')}', txt: 'quotient : modules divisés, arguments SOUSTRAITS.' },
      { tex: 'z^n = r^n e^{in\\theta}', txt: 'puissance : module puissance n, argument multiplié par n (formule de Moivre).' },
      { tex: '\\arg(z) \\equiv \\theta\\ [2\\pi]', txt: 'l\'argument est défini « à \\(2\\pi\\) près » : on donne une valeur, jamais LA valeur.' },
    ],
    etapes: [
      `Pour \\(|z|\\) : applique Pythagore \\(\\sqrt{x^2+y^2}\\). Simplifie la racine quand c\'est possible (\\(\\sqrt{12} = 2\\sqrt3\\)).`,
      'Pour \\(\\arg(z)\\) : place le point \\((x\\,;y)\\) mentalement (quel quadrant ?), écris \\(\\cos\\theta\\) et \\(\\sin\\theta\\), puis RECONNAIS un angle du cercle trigonométrique.',
      `Pour écrire \\(r\\,e^{i\\theta}\\) : le module d\'abord, l\'angle ensuite. Vérifie avec un dessin que l\'angle pointe dans le bon quadrant.`,
      'Pour une puissance \\(z^n\\) : écris \\(z = re^{i\\theta}\\) UNE fois, puis applique \\(z^n = r^ne^{in\\theta}\\). Reviens à la forme demandée à la fin seulement.',
      `Pour un quotient \\(\\frac{z}{z\'}\\) : modules divisés, arguments soustraits — jamais besoin de « multiplier par le conjugué » si tu as les formes exponentielles !`,
      'Angles négatifs et grands : ramène-les dans \\((-\\pi, \\pi]\\) ou \\([0, 2\\pi)\\) en ajoutant/retirant \\(2\\pi\\) (\\(e^{3i\\pi} = e^{i\\pi}\\), etc.).',
    ],
    aservir: 'aux équations (racines carrées d\'un complexe, carte 3), aux transformations (rotations = « multiplier par \\(e^{i\\theta}\\) », carte 6), à la géométrie (angles et distances, carte 7), et aux valeurs exactes de cosinus/sinus (exercice 8). C\'est aussi LA technique du Bac pour les valeurs exactes non triviales.',
  },
  exos: ['ex4', 'ex5', 'ex6', 'ex7', 'ex8'],
});

D.exos.ex4 = {
  num: 4, groupe: 'g2', titre: 'De l\'exponentielle à l\'algébrique',
  enonce: `<p>Écrire sous forme algébrique les nombres complexes suivants :</p>
  <p>\\(z_1 = 4e^{i\\frac{2\\pi}{3}}\\ ;\\quad z_2 = 6e^{3i\\pi}\\ ;\\quad z_3 = e^{-i\\frac{3\\pi}{4}}\\ ;\\quad z_4 = e^{-i\\frac{5\\pi}{3}}\\ ;\\quad z_5 = e^{-i\\frac{6\\pi}{4}}\\ ;\\quad z_6 = \\sqrt2\\,e^{i\\frac{\\pi}{8}}.\\)</p>`,
  enonceText: 'Forme algébrique de : 4e^{2iπ/3} ; 6e^{3iπ} ; e^{-3iπ/4} ; e^{-5iπ/3} ; e^{-6iπ/4} ; √2 e^{iπ/8}.',
  comprendre: `<p>Un exposant « moche » comme \\(3i\\pi\\) ou \\(-\\frac{6i\\pi}{4}\\) n'a rien d'effrayant : l'exponentielle complexe est \\(2\\pi\\)-périodique, donc on PEUT (et on DOIT) simplifier l'angle d'abord. Ensuite, \\(re^{i\\theta} = r\\cos\\theta + i\\,r\\sin\\theta\\) — il ne reste qu'à reconnaître les cosinus/sinus remarquables.</p>`,
  etapes: [
    'Simplifie chaque angle modulo \\(2\\pi\\) : \\(3\\pi \\equiv \\pi\\), \\(-\\frac{6\\pi}{4} = -\\frac{3\\pi}{2} \\equiv \\frac{\\pi}{2}\\), etc.',
    'Applique \\(r e^{i\\theta} = r\\cos\\theta + i\\,r\\sin\\theta\\).',
    'Valeurs à avoir en tête : \\(\\cos\\frac{2\\pi}{3} = -\\frac12\\), \\(\\sin\\frac{2\\pi}{3} = \\frac{\\sqrt3}{2}\\) ; \\(\\cos\\frac{3\\pi}{4} = -\\frac{\\sqrt2}{2}\\) ; \\(\\cos\\frac{5\\pi}{3} = \\frac12\\), \\(\\sin\\frac{5\\pi}{3} = -\\frac{\\sqrt3}{2}\\).',
    `Pour \\(z_6\\), l\'angle \\(\\pi/8\\) n\'est pas remarquable : laisse \\(\\sqrt2\\cos\\frac{\\pi}{8}+i\\sqrt2\\sin\\frac{\\pi}{8}\\) (ou donne l\'approximation \\(\\approx 1{,}31+0{,}54i\\)). Le livre veut te faire comprendre que certaines formes algébriques sont « moches » — et que la forme exponentielle est justement là pour ça.`,
    'Contrôle : le module de ton résultat doit être celui de départ (ex. \\(|z_1| = 4\\)). Vérifie mentalement.',
  ],
  correction: `
  <ul class="steps">
    <li>\\(z_1 = 4\\left(\\cos\\frac{2\\pi}{3}+i\\sin\\frac{2\\pi}{3}\\right) = 4\\left(-\\frac12+i\\frac{\\sqrt3}{2}\\right) = -2+2i\\sqrt3\\).</li>
    <li>\\(z_2 = 6e^{3i\\pi}\\). D'abord l'angle : \\(3\\pi = \\pi + 2\\pi\\), donc \\(e^{3i\\pi} = e^{i\\pi} = -1\\). Donc \\(z_2 = -6\\). (Réel négatif — normal, l'angle pointe vers la gauche.)</li>
    <li>\\(z_3 = \\cos\\left(-\\frac{3\\pi}{4}\\right)+i\\sin\\left(-\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt2}{2}-i\\frac{\\sqrt2}{2}\\). (Troisième quadrant : réel ET imaginaire négatifs.)</li>
    <li>\\(z_4 = e^{-i\\frac{5\\pi}{3}}\\). L'angle \\(-\\frac{5\\pi}{3}\\) est en quatrième quadrant (équivalent à \\(\\frac{\\pi}{3}\\) modulo \\(2\\pi\\)) : \\(z_4 = \\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3} = \\frac12+i\\frac{\\sqrt3}{2}\\).</li>
    <li>\\(z_5 = e^{-i\\frac{6\\pi}{4}} = e^{-i\\frac{3\\pi}{2}}\\). Et \\(-\\frac{3\\pi}{2} \\equiv \\frac{\\pi}{2}\\) (car \\(-\\frac{3\\pi}{2}+2\\pi = \\frac{\\pi}{2}\\)) : \\(z_5 = i\\).</li>
    <li>\\(z_6 = \\sqrt2\\cos\\frac{\\pi}{8}+i\\sqrt2\\sin\\frac{\\pi}{8}\\). Avec \\(\\cos\\frac{\\pi}{8} = \\frac{\\sqrt{2+\\sqrt2}}{2}\\) : \\(z_6 = \\frac{\\sqrt{4+2\\sqrt2}}{2}+i\\frac{\\sqrt{4-2\\sqrt2}}{2}\\approx 1{,}31+0{,}54i\\). Le livre l'inclut pour te montrer que la forme exponentielle est parfois la « plus simple » qui existe.</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi simplifier l'angle d'abord ?</b> Parce que \\(e^{i\\theta}\\) ne « voit » que la position du point sur le cercle — tourner \\(2\\pi\\) de plus ne change rien. Réduire l'angle, c'est choisir le chemin le plus court vers une valeur remarquable. À quoi ça sert ? Toutes les équations type \\(z^n = a\\) (cartes 3 et 5) demandent ce réflexe de réduction d'angle.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> écrire \\(e^{3i\\pi} = +1\\) (confusion avec \\(2\\pi\\)) ; oublier le signe « moins » dans \\(\\cos(-\\theta) = \\cos\\theta\\) mais \\(\\sin(-\\theta) = -\\sin\\theta\\) ; donner \\(z_5 = -i\\) sans vérifier le quadrant.</div>`,
  correctionText: '4e^{2iπ/3}=-2+2√3i ; 6e^{3iπ}=6e^{iπ}=-6 ; e^{-3iπ/4}=-√2/2-i√2/2 ; e^{-5iπ/3}=1/2+i√3/2 ; e^{-6iπ/4}=e^{iπ/2}=i ; √2e^{iπ/8}≈1,31+0,54i.',
};

D.exos.ex5 = {
  num: 5, groupe: 'g2', titre: 'Dix modules et arguments',
  enonce: `<p>Déterminer le module et l'argument des nombres complexes :</p>
  <p>\\(z_1 = 2+2i\\ ;\\quad z_2 = 1-i\\ ;\\quad z_3 = \\sqrt3+i\\ ;\\quad z_4 = 4\\ ;\\quad z_5 = -2i\\ ;\\)</p>
  <p>\\(z_6 = (1+i)^5\\ ;\\quad z_7 = (1+i\\sqrt3)^2\\ ;\\quad z_8 = \\dfrac12+i\\dfrac{\\sqrt3}{2}\\ ;\\quad z_9 = \\dfrac{1}{1+i}+\\dfrac{1}{1-i}\\ ;\\quad z_{10} = \\dfrac{1-i}{1+i}.\\)</p>`,
  enonceText: 'Module et argument de : 2+2i ; 1-i ; √3+i ; 4 ; -2i ; (1+i)^5 ; (1+i√3)^2 ; 1/2+i√3/2 ; 1/(1+i)+1/(1-i) ; (1-i)/(1+i).',
  comprendre: `<p>Les cinq premiers cas sont des lectures directes (quadrant + angle remarquable). Les cinq derniers cachent une idée plus forte : plutôt que de développer puis mesurer, on passe EN FORME EXPONENTIELLE et on laisse les règles de calcul travailler. \\((1+i)^5\\) se fait en une ligne avec Moivre — et en dix avec le binôme.</p>`,
  etapes: [
    `Cas « lecture » (\\(z_1\\) à \\(z_5\\)) : module par Pythagore, argument par reconnaissance d\'angle. Dessine chaque point dans sa tête (ou sur papier) : le quadrant impose le signe de l\'argument.`,
    '\\(z_6\\) : écris \\(1+i = \\sqrt2 e^{i\\pi/4}\\), puis élève à la puissance 5 avec Moivre.',
    '\\(z_7\\) : écris \\(1+i\\sqrt3 = 2e^{i\\pi/3}\\), puis élève au carré.',
    '\\(z_9\\) : mets au même dénominateur — observe que \\(1-i\\) et \\(1+i\\) sont conjugués et que \\((1+i)(1-i) = 2\\).',
    '\\(z_{10}\\) : multiplie par le conjugué du dénominateur, simplifie, puis conclus « imaginaire pur ». Quel argument pour un imaginaire pur négatif ?',
    `Pour CHAQUE argument, ajoute « \\(+2k\\pi\\) » : l\'argument se donne à \\(2\\pi\\) près.`,
  ],
  correction: `
  <ul class="steps">
    <li>\\(z_1 = 2+2i\\) : \\(|z_1| = \\sqrt{4+4} = 2\\sqrt2\\) ; point en premier quadrant, \\(\\cos\\theta = \\frac{2}{2\\sqrt2} = \\frac{\\sqrt2}{2}\\) → \\(\\arg z_1 = \\frac{\\pi}{4}+2k\\pi\\).</li>
    <li>\\(z_2 = 1-i\\) : \\(|z_2| = \\sqrt2\\) ; quatrième quadrant → \\(\\arg z_2 = -\\frac{\\pi}{4}+2k\\pi\\).</li>
    <li>\\(z_3 = \\sqrt3+i\\) : \\(|z_3| = \\sqrt{3+1} = 2\\) ; \\(\\cos\\theta = \\frac{\\sqrt3}{2}\\), \\(\\sin\\theta = \\frac12\\) → \\(\\arg z_3 = \\frac{\\pi}{6}+2k\\pi\\).</li>
    <li>\\(z_4 = 4\\) : \\(|z_4| = 4\\), \\(\\arg z_4 = 0+2k\\pi\\) (réel positif — sur l'axe).</li>
    <li>\\(z_5 = -2i\\) : \\(|z_5| = 2\\), \\(\\arg z_5 = -\\frac{\\pi}{2}+2k\\pi\\) (imaginaire pur négatif — vers le bas).</li>
    <li>\\(z_6 = (1+i)^5\\) : \\(1+i = \\sqrt2 e^{i\\pi/4}\\) donc \\(z_6 = (\\sqrt2)^5 e^{i\\frac{5\\pi}{4}} = 4\\sqrt2\\, e^{i\\frac{5\\pi}{4}}\\). Module \\(4\\sqrt2\\) ; argument \\(\\frac{5\\pi}{4} \\equiv -\\frac{3\\pi}{4}\\) (troisième quadrant, cohérent avec \\(-4-4i\\)).</li>
    <li>\\(z_7 = (1+i\\sqrt3)^2\\) : \\(1+i\\sqrt3 = 2e^{i\\pi/3}\\) donc \\(z_7 = 4e^{i\\frac{2\\pi}{3}}\\). Module \\(4\\), argument \\(\\frac{2\\pi}{3}+2k\\pi\\). (Vérification algébrique : \\((1+i\\sqrt3)^2 = -2+2i\\sqrt3\\), même chose.)</li>
    <li>\\(z_8 = \\frac12+i\\frac{\\sqrt3}{2}\\) : module \\(\\sqrt{\\frac14+\\frac34} = 1\\) ; \\(\\arg = \\frac{\\pi}{3}+2k\\pi\\). C'est une racine de l'unité « célèbre ».</li>
    <li>\\(z_9 = \\dfrac{(1-i)+(1+i)}{(1+i)(1-i)} = \\dfrac{2}{2} = 1\\) : module \\(1\\), argument \\(0+2k\\pi\\).</li>
    <li>\\(z_{10} = \\dfrac{(1-i)^2}{(1+i)(1-i)} = \\dfrac{-2i}{2} = -i\\) : module \\(1\\), argument \\(-\\frac{\\pi}{2}+2k\\pi\\).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi deux méthodes (lecture et exponentielle) ?</b> Parce qu'au Bac on choisit la plus courte. \\(z_9\\) et \\(z_{10}\\) montrent l'autre leçon : un QUOTIENT de conjugués donne un nombre de module 1 (\\(z_{10}\\)) ou un réel (\\(z_9\\)) — reconnaître ces structures évite tout calcul. À quoi ça sert ? Les arguments servent à mesurer des ANGLES entre vecteurs (carte 7) : \\(\\arg\\frac{z_C-z_A}{z_B-z_A}\\) est littéralement l'angle \\(\\widehat{BAC}\\).</div>
  <div class="erreurs"><b>Erreurs classiques :</b> donner \\(\\arg(1-i) = \\frac{7\\pi}{4}\\) sans préciser le modulo (c'est juste, mais écris « \\(\\equiv -\\frac{\\pi}{4}\\ [2\\pi]\\) ») ; oublier le quadrant (donner \\(\\frac{\\pi}{4}\\) pour \\(-4-4i\\)) ; calculer \\((1+i)^5\\) par le binôme et se tromper — Moivre est là pour ça.</div>`,
  correctionText: '2+2i : 2√2, π/4 ; 1-i : √2, -π/4 ; √3+i : 2, π/6 ; 4 : 4, 0 ; -2i : 2, -π/2 ; (1+i)^5 : 4√2, 5π/4≡-3π/4 ; (1+i√3)^2 : 4, 2π/3 ; 1/2+i√3/2 : 1, π/3 ; z9=1 : 1, 0 ; z10=-i : 1, -π/2.',
};

D.exos.ex6 = {
  num: 6, groupe: 'g2', titre: 'Formes trigonométrique et exponentielle',
  enonce: `<p>Écrire sous forme trigonométrique et exponentielle les nombres complexes suivants :</p>
  <p>\\(z_1 = 2\\ ;\\quad z_2 = -3i\\ ;\\quad z_3 = 1+i\\ ;\\quad z_4 = \\sqrt3+3i\\ ;\\quad z_5 = -\\sqrt2-i\\sqrt2\\ ;\\)</p>
  <p>\\(z_6 = \\dfrac{\\sqrt3+3i}{1-i}\\ ;\\quad z_7 = (1-i)^3\\ ;\\quad z_8 = 1+i\\sqrt3\\ ;\\quad z_9 = \\dfrac{1}{1-i}.\\)</p>`,
  enonceText: 'Formes trigonométrique et exponentielle de : 2 ; -3i ; 1+i ; √3+3i ; -√2-i√2 ; (√3+3i)/(1-i) ; (1-i)^3 ; 1+i√3 ; 1/(1-i).',
  comprendre: `<p>La forme trigonométrique \\(r(\\cos\\theta+i\\sin\\theta)\\) et la forme exponentielle \\(re^{i\\theta}\\) disent la même chose de deux façons. Le livre demande LES DEUX pour t'obliger à maîtriser la traduction. Trois nombres sont des quotients/puissances : traite-les avec les règles des modules et arguments, pas à coups de conjugués.</p>`,
  etapes: [
    'Cas simples : module, puis argument (dessin !), puis écris les DEUX formes.',
    `\\(z_5\\) : les deux coordonnées sont négatives → troisième quadrant → l\'argument est \\(\\pi + \\) un angle aigu.`,
    '\\(z_6\\) : modules et arguments du numérateur et du dénominateur séparément, puis division des modules et soustraction des arguments.',
    `\\(z_7\\) : forme exponentielle de \\(1-i\\) d\'abord, puis Moivre (cube).`,
    '\\(z_9\\) : \\(\\frac{1}{1-i}\\) — soit par le conjugué, soit par les arguments : \\(\\arg(1-i) = -\\frac{\\pi}{4}\\), donc \\(\\arg\\frac{1}{1-i} = +\\frac{\\pi}{4}\\), et le module est \\(1/\\sqrt2\\).',
    'Contrôle : la forme trigonométrique doit contenir \\(r > 0\\) et un angle cohérent avec le quadrant du nombre de départ.',
  ],
  correction: `
  <ul class="steps">
    <li>\\(z_1 = 2 = 2(\\cos 0 + i\\sin 0) = 2e^{i\\cdot 0}\\).</li>
    <li>\\(z_2 = -3i = 3\\left(\\cos\\left(-\\frac{\\pi}{2}\\right)+i\\sin\\left(-\\frac{\\pi}{2}\\right)\\right) = 3e^{-i\\frac{\\pi}{2}}\\).</li>
    <li>\\(z_3 = 1+i\\) : module \\(\\sqrt2\\), angle \\(\\frac{\\pi}{4}\\) → \\(\\sqrt2\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right) = \\sqrt2 e^{i\\frac{\\pi}{4}}\\).</li>
    <li>\\(z_4 = \\sqrt3+3i\\) : module \\(\\sqrt{3+9} = 2\\sqrt3\\) ; \\(\\tan\\theta = \\frac{3}{\\sqrt3} = \\sqrt3\\) et premier quadrant → \\(\\theta = \\frac{\\pi}{3}\\). Donc \\(2\\sqrt3 e^{i\\frac{\\pi}{3}}\\).</li>
    <li>\\(z_5 = -\\sqrt2-i\\sqrt2\\) : module \\(\\sqrt{2+2} = 2\\) ; troisième quadrant, angle aigu \\(\\frac{\\pi}{4}\\) → \\(\\theta = \\frac{\\pi}{4}+\\pi = \\frac{5\\pi}{4} \\equiv -\\frac{3\\pi}{4}\\). Donc \\(2e^{-i\\frac{3\\pi}{4}}\\) (ou \\(2e^{i\\frac{5\\pi}{4}}\\)).</li>
    <li>\\(z_6\\) : \\(|\\sqrt3+3i| = 2\\sqrt3\\) avec \\(\\arg = \\frac{\\pi}{3}\\) (cf. \\(z_4\\)) ; \\(|1-i| = \\sqrt2\\) avec \\(\\arg = -\\frac{\\pi}{4}\\). Donc \\(|z_6| = \\frac{2\\sqrt3}{\\sqrt2} = \\sqrt6\\) et \\(\\arg z_6 = \\frac{\\pi}{3}-\\left(-\\frac{\\pi}{4}\\right) = \\frac{7\\pi}{12}\\). Donc \\(z_6 = \\sqrt6\\left(\\cos\\frac{7\\pi}{12}+i\\sin\\frac{7\\pi}{12}\\right) = \\sqrt6\\,e^{i\\frac{7\\pi}{12}}\\). (On a DIVISÉ les modules et SOUSTRAIT les arguments : aucun calcul de conjugué.)</li>
    <li>\\(z_7\\) : \\(1-i = \\sqrt2 e^{-i\\frac{\\pi}{4}}\\) → \\(z_7 = (\\sqrt2)^3 e^{-i\\frac{3\\pi}{4}} = 2\\sqrt2\\,e^{-i\\frac{3\\pi}{4}}\\) (et \\(= -2-2i\\), cohérent : troisième quadrant).</li>
    <li>\\(z_8 = 1+i\\sqrt3\\) : module \\(2\\), \\(\\tan\\theta = \\sqrt3\\) → \\(\\theta = \\frac{\\pi}{3}\\) → \\(2e^{i\\frac{\\pi}{3}}\\).</li>
    <li>\\(z_9 = \\dfrac{1}{1-i}\\) : module \\(\\frac{1}{\\sqrt2} = \\frac{\\sqrt2}{2}\\), argument \\(0-\\left(-\\frac{\\pi}{4}\\right) = \\frac{\\pi}{4}\\) → \\(\\frac{\\sqrt2}{2}e^{i\\frac{\\pi}{4}}\\) (et \\(= \\frac{1+i}{2}\\), vérification facile).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi la forme exponentielle « mange » les quotients ?</b> Parce qu'un quotient de puissances de \\(e\\) est une différence d'exposants — exactement comme en réel. C'est TOUT l'intérêt de cette écriture : elle transforme la géométrie (angles, distances) en arithmétique (sommes, produits). À quoi ça sert ? Chaque transformation du plan (carte 6) s'écrit \\(z' = az+b\\) et se LIT sur \\(a = re^{i\\theta}\\) : rapport \\(r\\), angle \\(\\theta\\).</div>
  <div class="erreurs"><b>Erreurs classiques :</b> oublier de diviser les modules dans un quotient ; soustraire les arguments dans le mauvais ordre (\\(\\arg\\frac{z}{z'} = \\arg z - \\arg z'\\)) ; écrire \\(2\\sqrt3 e^{i\\pi/3}\\) avec le module du numérateur seul dans \\(z_6\\).</div>`,
  correctionText: '2=2e^{i0} ; -3i=3e^{-iπ/2} ; 1+i=√2e^{iπ/4} ; √3+3i=2√3e^{iπ/3} ; -√2-i√2=2e^{-3iπ/4} ; (√3+3i)/(1-i)=√6e^{i7π/12} ; (1-i)^3=2√2e^{-3iπ/4} ; 1+i√3=2e^{iπ/3} ; 1/(1-i)=(√2/2)e^{iπ/4}.',
};

D.exos.ex7 = {
  num: 7, groupe: 'g2', titre: 'Produit, quotient et leurs modules',
  enonce: `<p>On donne les nombres complexes :</p>
  <p>\\(z = \\left(\\sqrt6+i\\sqrt2\\right)\\left(\\dfrac14+i\\dfrac{\\sqrt3}{4}\\right)\\quad\\text{et}\\quad z' = \\dfrac{1-i\\sqrt3}{-\\frac12+i\\frac{\\sqrt3}{2}}.\\)</p>
  <p>1) Écrire \\(z\\) et \\(z'\\) sous forme algébrique \\(a+ib\\).<br>
  2) Déterminer le module puis un argument de \\(z\\) ; \\(z'\\) et \\(zz'\\).<br>
  3) Déterminer le module puis un argument de \\(Z = \\dfrac{z}{z'}\\). Écrire \\(Z\\) sous forme algébrique.</p>`,
  enonceText: 'z=(√6+i√2)(1/4+i√3/4) ; z\'=(1-i√3)/(-1/2+i√3/2). 1) Formes algébriques. 2) Module et argument de z, z\', zz\'. 3) Module, argument et forme algébrique de Z=z/z\'.',
  comprendre: `<p>Deux surprises t'attendent : \\(z\\) a une partie réelle NULLE et \\(z'\\) est un RÉEL négatif. Le livre choisit des données qui se cassent la figure « compliquée » — pour te montrer que la méthode (facteur par facteur : module, argument) domine toujours l'apparence.</p>`,
  etapes: [
    'Pour \\(z\\) : développe le produit avec \\(i^2 = -1\\) et simplifie \\(\\sqrt{18} = 3\\sqrt2\\). Regarde ce qui reste...',
    `Pour \\(z\'\\) : ne développe pas tout — reconnais le dénominateur \\(-\\frac12+i\\frac{\\sqrt3}{2}\\) : quel est son module ? Son argument ? (C\'est un angle remarquable !)`,
    'Pour le module de \\(z\\) : TU PEUX le calculer sans la forme algébrique : \\(|ab| = |a|\\cdot|b|\\). Fais-le des deux façons pour vérifier.',
    `Pour \\(zz\'\\) : multiplie les formes algébriques (une ligne), OU additionne les arguments. Compare.`,
    `Pour \\(Z = \\frac{z}{z\'}\\) : module divisé, argument soustrait. Puis translate en forme algébrique.`,
  ],
  correction: `
  <ul class="steps">
    <li><b>Forme algébrique de \\(z\\)</b> : \\(z = \\dfrac{\\sqrt6}{4}+i\\dfrac{\\sqrt{18}}{4}+i\\dfrac{\\sqrt2}{4}+i^2\\dfrac{\\sqrt6}{4}\\). Or \\(\\sqrt{18} = 3\\sqrt2\\) et \\(i^2 = -1\\) : les termes réels \\(\\frac{\\sqrt6}{4}-\\frac{\\sqrt6}{4}\\) s'annulent, il reste \\(z = i\\left(\\frac{3\\sqrt2+\\sqrt2}{4}\\right) = i\\sqrt2\\). Donc \\(z = 0+i\\sqrt2\\) : imaginaire pur !</li>
    <li><b>Forme algébrique de \\(z\'</b> : le dénominateur \\(-\\frac12+i\\frac{\\sqrt3}{2}\\) a un module \\(\\sqrt{\\frac14+\\frac34} = 1\\) et un argument \\(\\frac{2\\pi}{3}\\) (deuxième quadrant) : c'est \\(e^{i\\frac{2\\pi}{3}}\\). Le numérateur \\(1-i\\sqrt3\\) a un module \\(2\\) et un argument \\(-\\frac{\\pi}{3}\\). Donc \\(z' = 2e^{i(-\\frac{\\pi}{3}-\\frac{2\\pi}{3})} = 2e^{-i\\pi} = -2\\). Vérification par le conjugué : \\(\\dfrac{(1-i\\sqrt3)(-\\frac12-i\\frac{\\sqrt3}{2})}{1} = -\\frac12-\\frac{3}{2} = -2\\). ✓ Donc \\(z' = -2\\).</li>
    <li><b>Modules et arguments.</b> \\(z\\) : \\(|z| = \\sqrt2\\), \\(\\arg z = \\frac{\\pi}{2}+2k\\pi\\). \\(z'\\) : \\(|z'| = 2\\), \\(\\arg z' = \\pi+2k\\pi\\). Produit : \\(zz' = -2i\\sqrt2\\) (une multiplication : \\(i\\sqrt2 \\times (-2)\\)), donc \\(|zz'| = 2\\sqrt2\\) et \\(\\arg(zz') = -\\frac{\\pi}{2}+2k\\pi\\) — c'est bien \\(\\frac{\\pi}{2}+\\pi\\) modulo \\(2\\pi\\) : les arguments s'additionnent. ✓</li>
    <li><b>Quotient \\(Z\\)</b> : \\(|Z| = \\frac{\\sqrt2}{2}\\) et \\(\\arg Z = \\frac{\\pi}{2}-\\pi = -\\frac{\\pi}{2}\\) (à \\(2\\pi\\) près). Donc \\(Z = \\frac{\\sqrt2}{2}e^{-i\\frac{\\pi}{2}} = -i\\frac{\\sqrt2}{2}\\). Forme algébrique : \\(Z = 0 - i\\frac{\\sqrt2}{2}\\).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi le livre donne-t-il des « moches » qui finissent « beaux » ?</b> Pour t'apprendre à ne JAMAIS paniquer devant \\(\\sqrt6+i\\sqrt2\\) : on mesure module et argument, et la structure apparaît. À quoi ça sert ? Cette question 3 est la matrice de la géométrie des angles : \\(\\arg\\frac{z_C-z_A}{z_B-z_A}\\) = angle en A — même mécanique que \\(\\arg\\frac{z}{z'}\\) ici.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> oublier que \\(|ab| = |a||b|\\) et recalculer Pythagore sur le produit développé (double travail, double risque) ; se tromper dans l'argument de \\(-\\frac12+i\\frac{\\sqrt3}{2}\\) (deuxième quadrant : \\(\\frac{2\\pi}{3}\\), pas \\(-\\frac{\\pi}{3}\\)).</div>`,
  correctionText: 'z=i√2 (|z|=√2, arg=π/2) ; z\'=-2 (|z\'|=2, arg=π) ; zz\'=-2i√2 (2√2, -π/2) ; Z=z/z\'=-i√2/2 (√2/2, -π/2).',
};

D.exos.ex8 = {
  num: 8, groupe: 'g2', titre: 'Valeurs exactes de \\(\\cos\\frac{7\\pi}{12}\\) et \\(\\sin\\frac{7\\pi}{12}\\)',
  enonce: `<p>Soit les nombres complexes \\(z_1 = 1+i\\sqrt3\\) et \\(z_2 = 1+i\\).</p>
  <p>1) Écrire \\(z_1\\) et \\(z_2\\) sous forme trigonométrique et exponentielle.<br>
  2) En déduire une forme trigonométrique de \\(z_1\\times z_2\\).<br>
  3) Déterminer la forme algébrique de \\(z_1\\times z_2\\).<br>
  4) En déduire la valeur exacte de \\(\\cos\\dfrac{7\\pi}{12}\\) et \\(\\sin\\dfrac{7\\pi}{12}\\).</p>`,
  enonceText: 'z1=1+i√3, z2=1+i. 1) Formes trigo et expo. 2) Forme trigo de z1×z2. 3) Forme algébrique de z1×z2. 4) En déduire cos(7π/12) et sin(7π/12) exacts.',
  comprendre: `<p>C'est LE grand classique du Bac. L'angle \\(\\frac{7\\pi}{12} = 105^\\circ\\) n'est pas dans ta table de valeurs — mais il est la SOMME de \\(\\frac{\\pi}{3}\\) et \\(\\frac{\\pi}{4}\\), deux angles connus. Le produit \\(z_1z_2\\) additionne les arguments : on calcule donc le MÊME nombre de deux façons (expo puis algébrique) et on IDENTIFIE. C'est le principe « mesurer deux fois la même chose ».</p>`,
  etapes: [
    'Écris \\(z_1\\) et \\(z_2\\) en exponentielle : modules par Pythagore, arguments reconnus sur le dessin.',
    `Produit : modules multipliés, arguments additionnés. Quel angle obtient-on ? Vérifie qu\'il vaut bien \\(\\frac{\\pi}{3}+\\frac{\\pi}{4}\\).`,
    'Calcule aussi \\(z_1z_2\\) en algébrique : double distributivité, \\(i^2=-1\\).',
    `Écris l\'égalité des deux résultats sous la forme \\(R(\\cos\\theta+i\\sin\\theta) = A+iB\\).`,
    'IDENTIFIE : partie réelle avec partie réelle, imaginaire avec imaginaire, puis divise par \\(R\\).',
    'Rends les dénominateurs « propres » : multiplie haut et bas par \\(\\sqrt2\\) pour éliminer les racines au dénominateur.',
  ],
  correction: `
  <ul class="steps">
    <li>\\(z_1 = 1+i\\sqrt3\\) : \\(|z_1| = \\sqrt{1+3} = 2\\), angle \\(\\frac{\\pi}{3}\\) → \\(z_1 = 2\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right) = 2e^{i\\frac{\\pi}{3}}\\).</li>
    <li>\\(z_2 = 1+i\\) : \\(|z_2| = \\sqrt2\\), angle \\(\\frac{\\pi}{4}\\) → \\(z_2 = \\sqrt2\\,e^{i\\frac{\\pi}{4}}\\).</li>
    <li>Produit : \\(z_1z_2 = 2\\sqrt2\\,e^{i\\left(\\frac{\\pi}{3}+\\frac{\\pi}{4}\\right)} = 2\\sqrt2\\,e^{i\\frac{7\\pi}{12}}\\), soit la forme trigonométrique \\(z_1z_2 = 2\\sqrt2\\left(\\cos\\frac{7\\pi}{12}+i\\sin\\frac{7\\pi}{12}\\right)\\).</li>
    <li>Algébrique : \\(z_1z_2 = (1+i\\sqrt3)(1+i) = 1+i+i\\sqrt3+i^2\\sqrt3 = (1-\\sqrt3)+i(1+\\sqrt3)\\).</li>
    <li>Identification : \\(2\\sqrt2\\cos\\frac{7\\pi}{12} = 1-\\sqrt3\\) et \\(2\\sqrt2\\sin\\frac{7\\pi}{12} = 1+\\sqrt3\\). D'où :</li>
  </ul>
  <p style="text-align:center">\\[\\cos\\frac{7\\pi}{12} = \\frac{1-\\sqrt3}{2\\sqrt2} = \\frac{\\sqrt2-\\sqrt6}{4}\\qquad\\text{et}\\qquad \\sin\\frac{7\\pi}{12} = \\frac{1+\\sqrt3}{2\\sqrt2} = \\frac{\\sqrt2+\\sqrt6}{4}.\\]</p>
  <ul class="steps">
    <li>La dernière étape : \\(\\frac{1-\\sqrt3}{2\\sqrt2}\\times\\frac{\\sqrt2}{\\sqrt2} = \\frac{\\sqrt2-\\sqrt6}{4}\\) — on « rentre » \\(\\sqrt2\\) dans le numérateur.</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi ça marche ?</b> Un même nombre complexe a une SEULE paire (module, argument) — donc les deux chemins de calcul aboutissent forcément au même couple. En identifiant, on fabrique des égalités de cosinus/sinus « gratuites ». À quoi ça sert ? C'est la technique standard pour \\(\\cos\\frac{\\pi}{12}\\), \\(\\cos\\frac{5\\pi}{12}\\)... dès que l'angle est une somme d'angles remarquables. La formule \\(\\cos(a+b)\\) redonne le même résultat : vérifie-le une fois pour croire à la méthode.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> oublier de diviser par le module \\(2\\sqrt2\\) lors de l'identification (donner \\(\\cos = 1-\\sqrt3\\) !) ; se tromper dans \\(i^2\\sqrt3 = -\\sqrt3\\) ; rendre \\(\\frac{1-\\sqrt3}{2\\sqrt2}\\) sans simplification (juste mais non « valeur exacte propre »).</div>`,
  correctionText: 'z1=2e^{iπ/3} ; z2=√2e^{iπ/4} ; z1z2=2√2e^{i7π/12}=(1-√3)+i(1+√3) ; cos(7π/12)=(√2-√6)/4 ; sin(7π/12)=(√2+√6)/4.',
};
})();
