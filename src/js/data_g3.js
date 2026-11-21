/* ═══ Données — Cartes 6 & 7 : transformations ; géométrie du plan complexe ═══ */
(function () {
const D = window.ARVX_DATA;
D.groups = D.groups || [];
D.exos = D.exos || {};

/* ═══════════ CARTE 6 — Transformations et similitudes ═══════════ */
D.groups.push({
  id: 'g6',
  titre: 'Transformations : translations, rotations, homothéties, similitudes',
  accroche: 'Lire \\(z\' = az+b\\) : chaque coefficient raconte une transformation du plan.',
  intro: 'Toute transformation « de base » du plan s\'écrit \\(z\' = az+b\\). Le module de \\(a\\) donne le rapport, son argument l\'angle, et \\(b\\) déplace le centre. Cette carte apprend à DÉCODER une écriture complexe, puis à la FABRIQUER depuis une description ou une formule analytique.',
  methode: {
    positionnement: 'La traduction complète : \\(z\' = z+b\\) (translation) ; \\(|a| = 1, a\\ne1\\) (rotation d\'angle \\(\\arg a\\)) ; \\(a\\) réel positif \\(\\ne1\\) (homothétie) ; \\(a\\) quelconque \\(\\ne1\\) (similitude directe de rapport \\(|a|\\) et d\'angle \\(\\arg a\\)). Le centre se calcule toujours par \\(\\Omega = \\dfrac{b}{1-a}\\) — le point FIXE de la transformation.',
    formules: [
      { tex: "z' = z+b", txt: 'translation de vecteur d\'affixe \\(b\\) (pas de point fixe : \\(a = 1\\)).' },
      { tex: "z'-\\omega = e^{i\\theta}(z-\\omega)", txt: 'rotation de centre \\(\\omega\\), d\'angle \\(\\theta\\).' },
      { tex: "z'-\\omega = k(z-\\omega),\\ k\\in\\mathbb{R}^*", txt: 'homothétie de centre \\(\\omega\\), de rapport \\(k\\).' },
      { tex: "z' = az+b\\ (a\\ne1)", txt: 'similitude directe : centre \\(\\Omega = \\dfrac{b}{1-a}\\), rapport \\(|a|\\), angle \\(\\arg a\\).' },
      { tex: '\\Omega = \\dfrac{b}{1-a}', txt: 'LE point fixe : résoudre \\(z = az+b\\).' },
      { tex: "z'-\\omega = a(z-\\omega)", txt: 'forme centrée : toujours ramener la similitude à cette écriture pour LIRE ses éléments.' },
    ],
    etapes: [
      `Devant \\(z\' = az+b\\) : calcule \\(|a|\\) et \\(\\arg a\\). Si \\(a = 1\\) : translation. Si \\(|a| = 1\\) : rotation. Sinon : similitude directe (dont l\'homothétie si \\(a\\) réel).`,
      'Calcule le centre \\(\\Omega = \\frac{b}{1-a}\\) (quotient : conjugué du dénominateur).',
      `Réécris la transformation sous forme CENTRÉE \\(z\'-\\omega = a(z-\\omega)\\) : c\'est la forme « pro » qui se lit d\'un coup d\'œil.`,
      `Pour fabriquer une écriture depuis \\((\\omega, k, \\theta)\\) : part de \\(z\'-\\omega = ke^{i\\theta}(z-\\omega)\\), développe, réduis en \\(a\\,z+b\\).`,
      `Pour une formule analytique \\(\\{x\' = \\alpha x+\\beta y+\\gamma\\ ;\\ y\' = \\alpha\' x+\\beta\' y+\\gamma\'\\}\\) : \\(a = \\alpha-\\beta i\\) et \\(b = \\gamma+i\\gamma\'\\) — puis vérifie que la partie \\(y\'\\) colle (\\(\\alpha\' = \\beta\\), \\(\\beta\' = \\alpha\\)).`,
      'Contrôle géométrique : une similitude directe conserve les angles et multiplie les distances par \\(|a|\\) — un carré reste un carré (grandi/tourné), jamais aplati.',
    ],
    aservir: 'aux questions Bac « déterminer la nature et les éléments caractéristiques de S », aux images de points (calculs d\'affixes type exercices 19, 21), et à la reconnaissance de figures (carré, losange — carte 7).',
  },
  exos: ['ex14', 'ex15', 'ex16', 'ex21'],
});

D.exos.ex14 = {
  num: 14, groupe: 'g6', titre: 'Nature de dix transformations \\(S\\)',
  enonce: `<p>Dans chacun des cas suivants, déterminer la nature et les éléments caractéristiques de la transformation \\(S\\) :</p>
  <p>1) \\(z' = -z+2-6i\\) ; 2) \\(z' = \\left(-\\frac12+i\\frac12\\right)z+4-3i\\) ; 3) \\(z' = z+5-7i\\) ;<br>
  4) \\(z' = (-1-i)z\\) ; 5) \\(z' = (-1+i)z+2\\) ; 6) \\(z' = 5z+2i\\) ;<br>
  7) \\(z' = z+1+3i\\) ; 8) \\(z' = \\left(\\frac12+i\\frac{\\sqrt3}{2}\\right)z+\\frac12-i\\frac{\\sqrt3}{2}\\) ;<br>
  9) \\(z' = \\dfrac{1}{i}z\\) ; 10) \\(z'-i = (\\sqrt3+i)(z-i)\\).</p>`,
  enonceText: 'Nature et éléments caractéristiques de S : 1) z\'=-z+2-6i ; 2) z\'=(-1/2+i/2)z+4-3i ; 3) z\'=z+5-7i ; 4) z\'=(-1-i)z ; 5) z\'=(-1+i)z+2 ; 6) z\'=5z+2i ; 7) z\'=z+1+3i ; 8) z\'=(1/2+i√3/2)z+1/2-i√3/2 ; 9) z\'=(1/i)z ; 10) z\'-i=(√3+i)(z-i).',
  comprendre: `<p>Dix écritures, quatre natures : translation (\\(a = 1\\)), rotation (\\(|a| = 1\\)), homothétie (\\(a\\) réel), similitude directe (le cas général). Le réflexe : regarder \\(a\\) AVANT tout calcul. Et dans chaque cas « centré » : le point fixe \\(\\Omega = \\frac{b}{1-a}\\) est le centre de tout.</p>`,
  etapes: [
    'Pour chaque cas : extrais \\(a\\) et \\(b\\), calcule \\(|a|\\) et \\(\\arg a\\) — et note le cas (translation / rotation / homothétie / similitude).',
    `Cas \\(a = 1\\) : c\'est une translation de vecteur \\(b\\) — PAS de centre (l\'équation \\(z = z+b\\) n\'a pas de solution !).`,
    `Cas \\(|a| = 1\\) : rotation d\'angle \\(\\arg a\\) ; centre \\(\\Omega = \\frac{b}{1-a}\\). Pour le cas 1, \\(a = -1\\) : c\'est une rotation d\'angle \\(\\pi\\) (alias symétrie centrale).`,
    'Cas \\(a\\) réel (6) : homothétie de rapport \\(a\\).',
    'Cas \\(b = 0\\) (4, 9) : centre \\(O\\) — pas de calcul de \\(\\Omega\\) nécessaire.',
    `Cas 10 : la forme est déjà CENTRÉE (\\(z\'-i = a(z-i)\\)) — lis le centre directement !`,
  ],
  correction: `
  <ul class="steps">
    <li><b>1)</b> \\(a = -1\\) : \\(|a| = 1\\), \\(\\arg a = \\pi\\) → rotation d'angle \\(\\pi\\) (symétrie centrale). Centre : \\(\\Omega = \\dfrac{2-6i}{1-(-1)} = 1-3i\\).</li>
    <li><b>2)</b> \\(a = -\\frac12+\\frac{i}{2}\\) : \\(|a| = \\sqrt{\\frac14+\\frac14} = \\frac{\\sqrt2}{2}\\), \\(\\arg a = \\frac{3\\pi}{4}\\) (deuxième quadrant) → similitude directe de rapport \\(\\frac{\\sqrt2}{2}\\), d'angle \\(\\frac{3\\pi}{4}\\). Centre : \\(\\Omega = \\dfrac{4-3i}{1-(-\\frac12+\\frac{i}{2})} = \\dfrac{4-3i}{\\frac32-\\frac{i}{2}}\\). Multiplie par le conjugué \\(\\frac32+\\frac{i}{2}\\) : numérateur \\((4-3i)(\\frac32+\\frac{i}{2}) = 6+2i-\\frac92 i+\\frac32 = \\frac{15}{2}-\\frac{5}{2}i\\) ; dénominateur \\(\\frac94+\\frac14 = \\frac{10}{4}\\). Donc \\(\\Omega = 3-i\\).</li>
    <li><b>3)</b> \\(a = 1\\), \\(b = 5-7i\\) : translation de vecteur d'affixe \\(5-7i\\).</li>
    <li><b>4)</b> \\(a = -1-i\\) : \\(|a| = \\sqrt2\\), \\(\\arg a = -\\frac{3\\pi}{4}\\) (troisième quadrant) ; \\(b = 0\\) → similitude directe de CENTRE \\(O\\), rapport \\(\\sqrt2\\), angle \\(-\\frac{3\\pi}{4}\\).</li>
    <li><b>5)</b> \\(a = -1+i\\) : \\(|a| = \\sqrt2\\), \\(\\arg a = \\frac{3\\pi}{4}\\). Centre : \\(\\Omega = \\dfrac{2}{1-(-1+i)} = \\dfrac{2}{2-i} = \\dfrac{2(2+i)}{5} = \\dfrac45+\\dfrac25 i\\).</li>
    <li><b>6)</b> \\(a = 5\\) (réel positif) : homothétie de rapport \\(5\\). Centre : \\(\\Omega = \\dfrac{2i}{1-5} = -\\dfrac{i}{2}\\).</li>
    <li><b>7)</b> \\(a = 1\\), \\(b = 1+3i\\) : translation de vecteur d'affixe \\(1+3i\\).</li>
    <li><b>8)</b> \\(a = \\frac12+i\\frac{\\sqrt3}{2} = e^{i\\frac{\\pi}{3}}\\) : \\(|a| = 1\\) → rotation d'angle \\(\\frac{\\pi}{3}\\). Centre : \\(\\Omega = \\dfrac{\\frac12-\\frac{\\sqrt3}{2}i}{1-\\frac12-\\frac{\\sqrt3}{2}i} = 1\\) (numérateur = dénominateur !). Rotation de centre \\(A(1)\\), d'angle \\(\\frac{\\pi}{3}\\).</li>
    <li><b>9)</b> \\(\\frac{1}{i} = -i\\) : \\(|a| = 1\\), \\(\\arg a = -\\frac{\\pi}{2}\\), \\(b = 0\\) → rotation de centre \\(O\\), d'angle \\(-\\frac{\\pi}{2}\\).</li>
    <li><b>10)</b> La forme est \\(z'-\\omega = a(z-\\omega)\\) avec \\(\\omega = i\\) et \\(a = \\sqrt3+i = 2e^{i\\frac{\\pi}{6}}\\) : similitude directe de centre \\(\\Omega(i)\\), de rapport \\(2\\), d'angle \\(\\frac{\\pi}{6}\\). (Le centre se LIT — c'est l'intérêt de la forme centrée.)</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi le point fixe est-il « le » centre ?</b> Parce qu'une rotation/homothétie/similitude laisse exactement UN point immobile : le centre. Résoudre \\(z = az+b\\) revient à chercher qui ne bouge pas — et ce point ancre toute la transformation. À quoi ça sert ? Au Bac, « déterminer les éléments caractéristiques » = \\(\\{|a|\\), \\(\\arg a\\), \\(\\Omega\\}\\) : trois quantités, toujours les mêmes.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> appeler « homothétie » une similitude de rapport \\(\\sqrt2\\) (non : rapport NON réel) ; oublier que la translation n'a pas de centre ; dans le cas 9, simplifier \\(\\frac1i\\) en \\(i\\) au lieu de \\(-i\\).</div>`,
  correctionText: '1) rotation π, centre 1-3i ; 2) similitude directe rapport √2/2, angle 3π/4, centre 3-i ; 3) translation 5-7i ; 4) centre O, rapport √2, angle -3π/4 ; 5) centre 4/5+2i/5, rapport √2, angle 3π/4 ; 6) homothétie rapport 5, centre -i/2 ; 7) translation 1+3i ; 8) rotation π/3 centre 1 ; 9) rotation -π/2 centre O ; 10) similitude directe centre i, rapport 2, angle π/6.',
};

D.exos.ex15 = {
  num: 15, groupe: 'g6', titre: 'Écriture complexe depuis \\((\\omega, k, \\theta)\\)',
  enonce: `<p>Dans chacun des cas suivants, donner l'écriture complexe de la similitude directe de centre \\(\\Omega\\) d'affixe \\(\\omega\\), de rapport \\(k\\) et d'angle \\(\\theta\\) :</p>
  <p>1) \\(\\omega = 1-2i\\ ;\\ k = 2\\ ;\\ \\theta = \\frac{\\pi}{4}\\).  2) \\(\\omega = 1+i\\ ;\\ k = 2\\sqrt2\\ ;\\ \\theta = -\\frac{\\pi}{2}\\).<br>
  3) \\(\\omega = 2\\ ;\\ k = 3\\ ;\\ \\theta = \\pi\\).  4) \\(\\omega = 0\\ ;\\ k = \\sqrt3\\ ;\\ \\theta = \\frac{\\pi}{3}\\).<br>
  5) \\(\\omega = \\frac12+i\\ ;\\ k = \\frac{\\sqrt3}{2}\\ ;\\ \\theta = -\\frac{\\pi}{3}\\).  6) \\(\\omega = 3i\\ ;\\ k = \\frac{\\sqrt2}{2}\\ ;\\ \\theta = \\frac{2\\pi}{3}\\).<br>
  7) \\(\\omega = -2\\ ;\\ k = 2\\ ;\\ \\theta = -\\frac{\\pi}{4}\\).  8) \\(\\omega = 5-4i\\ ;\\ k = \\sqrt3\\ ;\\ \\theta = \\frac{\\pi}{6}\\).</p>`,
  enonceText: 'Écriture complexe de la similitude directe de centre ω, rapport k, angle θ : 1) ω=1-2i, k=2, θ=π/4 ; 2) ω=1+i, k=2√2, θ=-π/2 ; 3) ω=2, k=3, θ=π ; 4) ω=0, k=√3, θ=π/3 ; 5) ω=1/2+i, k=√3/2, θ=-π/3 ; 6) ω=3i, k=√2/2, θ=2π/3 ; 7) ω=-2, k=2, θ=-π/4 ; 8) ω=5-4i, k=√3, θ=π/6.',
  comprendre: `<p>Cette fois on fabrique l'écriture au lieu de la décoder. Le moule est UNIQUE : \\(z' = ke^{i\\theta}\\,z + \\omega(1-ke^{i\\theta})\\). Tout le travail consiste à calculer proprement \\(ke^{i\\theta}\\) (avec les angles remarquables) puis \\(\\omega(1-ke^{i\\theta})\\) — deux produits à faire calmement.</p>`,
  etapes: [
    'Écris \\(a = ke^{i\\theta}\\) et réduis-le en forme algébrique (ex. \\(2e^{i\\pi/4} = \\sqrt2+i\\sqrt2\\)).',
    `Écris \\(z\'-\\omega = a(z-\\omega)\\) — la forme centrée d\'abord, TOUJOURS.`,
    `Développe : \\(z\' = az+\\omega(1-a)\\). Le terme \\(\\omega(1-a)\\) est le seul « long » : fais-le deux fois si besoin.`,
    `Vérification : \\(\\omega\\) doit être point fixe — remplace \\(z = \\omega\\) dans ta formule finale, tu dois retrouver \\(z\' = \\omega\\).`,
    `Cas \\(\\theta = \\pi\\) (cas 3) : \\(e^{i\\pi} = -1\\) → similitude qui est une HOMOTHÉTIE de rapport \\(-k\\)... attention au signe du rapport pour une homothétie : \\(k\\) de l\'énoncé est 3, l\'écriture donne \\(a = -3\\).`,
  ],
  correction: `
  <p style="margin-top:0">Dans chaque cas : \\(a = ke^{i\\theta}\\), puis \\(z' = az+\\omega(1-a)\\).</p>
  <ul class="steps">
    <li><b>1)</b> \\(a = 2e^{i\\frac{\\pi}{4}} = \\sqrt2+i\\sqrt2\\). \\(\\omega(1-a) = (1-2i)(1-\\sqrt2-i\\sqrt2)\\). Développement : \\(1-\\sqrt2-i\\sqrt2-2i+2i\\sqrt2+2i^2\\sqrt2\\)→ \\((1-\\sqrt2-2\\sqrt2)+i(-\\sqrt2-2+2\\sqrt2)\\)... posons-nous : \\((1-2i)(1-\\sqrt2-i\\sqrt2) = 1\\cdot(1-\\sqrt2-i\\sqrt2) - 2i\\cdot(1-\\sqrt2-i\\sqrt2)\\) \\(= 1-\\sqrt2-i\\sqrt2-2i+2i\\sqrt2+2i^2\\sqrt2 = (1-\\sqrt2-2\\sqrt2)+i(-\\sqrt2-2+2\\sqrt2) = (1-3\\sqrt2)+i(\\sqrt2-2)\\). Donc \\(z' = (\\sqrt2+i\\sqrt2)z+1-3\\sqrt2+i(\\sqrt2-2)\\).</li>
    <li><b>2)</b> \\(a = 2\\sqrt2 e^{-i\\frac{\\pi}{2}} = -2i\\sqrt2\\). \\(\\omega(1-a) = (1+i)(1+2i\\sqrt2) = 1+2i\\sqrt2+i+2i^2\\sqrt2 = (1-2\\sqrt2)+i(1+2\\sqrt2)\\). Donc \\(z' = -2i\\sqrt2\\,z+1-2\\sqrt2+i(1+2\\sqrt2)\\).</li>
    <li><b>3)</b> \\(a = 3e^{i\\pi} = -3\\). \\(\\omega(1-a) = 2\\cdot4 = 8\\). Donc \\(z' = -3z+8\\). (C'est l'homothétie de centre \\(2\\) et de rapport \\(-3\\).)</li>
    <li><b>4)</b> \\(a = \\sqrt3 e^{i\\frac{\\pi}{3}} = \\sqrt3\\left(\\frac12+i\\frac{\\sqrt3}{2}\\right) = \\frac{\\sqrt3}{2}+\\frac{3}{2}i\\). \\(\\omega = 0\\) : \\(z' = \\left(\\frac{\\sqrt3}{2}+\\frac{3}{2}i\\right)z\\).</li>
    <li><b>5)</b> \\(a = \\frac{\\sqrt3}{2}e^{-i\\frac{\\pi}{3}} = \\frac{\\sqrt3}{2}\\left(\\frac12-\\frac{\\sqrt3}{2}i\\right) = \\frac{\\sqrt3}{4}-\\frac{3}{4}i\\). \\(\\omega(1-a) = (\\frac12+i)(1-\\frac{\\sqrt3}{4}+\\frac{3}{4}i)\\). Produit : partie réelle \\(\\frac12\\left(1-\\frac{\\sqrt3}{4}\\right)-1\\cdot\\frac34 = \\frac12-\\frac{\\sqrt3}{8}-\\frac34 = -\\frac14-\\frac{\\sqrt3}{8}\\) ; partie imaginaire \\(\\frac12\\cdot\\frac34+1\\cdot(1-\\frac{\\sqrt3}{4}) = \\frac38+1-\\frac{\\sqrt3}{4} = \\frac{11}{8}-\\frac{2\\sqrt3}{8}\\). Donc \\(z' = \\left(\\frac{\\sqrt3}{4}-\\frac34 i\\right)z-\\frac14-\\frac{\\sqrt3}{8}+i\\left(\\frac{11}{8}-\\frac{\\sqrt3}{4}\\right)\\).</li>
    <li><b>6)</b> \\(a = \\frac{\\sqrt2}{2}e^{i\\frac{2\\pi}{3}} = \\frac{\\sqrt2}{2}\\left(-\\frac12+\\frac{\\sqrt3}{2}i\\right) = -\\frac{\\sqrt2}{4}+\\frac{\\sqrt6}{4}i\\). \\(\\omega(1-a) = 3i\\left(1+\\frac{\\sqrt2}{4}-\\frac{\\sqrt6}{4}i\\right) = 3i\\left(1+\\frac{\\sqrt2}{4}\\right)+3i\\left(-\\frac{\\sqrt6}{4}i\\right) = \\frac{3\\sqrt6}{4}+i\\left(3+\\frac{3\\sqrt2}{4}\\right)\\). Donc \\(z' = \\left(-\\frac{\\sqrt2}{4}+\\frac{\\sqrt6}{4}i\\right)z+\\frac{3\\sqrt6}{4}+i\\left(3+\\frac{3\\sqrt2}{4}\\right)\\).</li>
    <li><b>7)</b> \\(a = 2e^{-i\\frac{\\pi}{4}} = \\sqrt2-i\\sqrt2\\). \\(\\omega(1-a) = -2(1-\\sqrt2+i\\sqrt2) = -2+2\\sqrt2-2i\\sqrt2\\). Donc \\(z' = (\\sqrt2-i\\sqrt2)z-2+2\\sqrt2-2i\\sqrt2\\).</li>
    <li><b>8)</b> \\(a = \\sqrt3 e^{i\\frac{\\pi}{6}} = \\sqrt3\\left(\\frac{\\sqrt3}{2}+\\frac{i}{2}\\right) = \\frac32+\\frac{\\sqrt3}{2}i\\). \\(\\omega(1-a) = (5-4i)\\left(-\\frac12-\\frac{\\sqrt3}{2}i\\right)\\). Partie réelle : \\(-\\frac52-2\\sqrt3\\) ; partie imaginaire : \\(-\\frac{5\\sqrt3}{4}+2\\)·... développons : \\(5\\cdot(-\\frac12) = -\\frac52\\) ; \\(5\\cdot(-\\frac{\\sqrt3}{2}i) = -\\frac{5\\sqrt3}{2}i\\) ; \\(-4i\\cdot(-\\frac12) = 2i\\) ; \\(-4i\\cdot(-\\frac{\\sqrt3}{2}i) = 2\\sqrt3 i^2 = -2\\sqrt3\\). Réel : \\(-\\frac52-2\\sqrt3\\) ; imaginaire : \\(2-\\frac{5\\sqrt3}{2}\\). Donc \\(z' = \\left(\\frac32+\\frac{\\sqrt3}{2}i\\right)z-\\frac52-2\\sqrt3+i\\left(2-\\frac{5\\sqrt3}{2}\\right)\\).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi toujours passer par la forme centrée ?</b> Parce qu'elle sépare les deux rôles : \\(a\\) décrit CE QUE FAIT la transformation (grandir, tourner), \\(\\omega(1-a)\\) ajuste le POURQUOI (autour de quel point). À quoi ça sert ? Les Bac demandent l'écriture \\(a\\,z+b\\) ; les correcteurs regardent le centre ; et la forme centrée sert aux ensembles d'images (carte 7).</div>
  <div class="erreurs"><b>Erreurs classiques :</b> écrire \\(z' = a z+\\omega\\) (oubli du \\((1-a)\\) !) ; se tromper dans \\(e^{-i\\pi/3}\\) (cosinus pair, sinus IMPAIR : \\(\\frac12-\\frac{\\sqrt3}{2}i\\)) ; ne pas vérifier que \\(\\omega\\) est point fixe à la fin.</div>`,
  correctionText: '1) z\'=(√2+i√2)z+1-3√2+i(√2-2) ; 2) z\'=(-2i√2)z+1-2√2+i(1+2√2) ; 3) z\'=-3z+8 ; 4) z\'=(√3/2+3i/2)z ; 5) z\'=(√3/4-3i/4)z-(2+√3)/8+i(11-2√3)/8 ; 6) z\'=(-√2/4+√6/4 i)z+3√6/4+i(3+3√2/4) ; 7) z\'=(√2-i√2)z-2+2√2-2i√2 ; 8) z\'=(3/2+i√3/2)z-5/2-2√3+i(2-5√3/2).',
};

D.exos.ex16 = {
  num: 16, groupe: 'g6', titre: 'Écriture complexe depuis la formule analytique',
  enonce: `<p>Dans chacun des cas suivants, donner l'écriture complexe de la similitude directe définie par son expression analytique :</p>
  <p>1) \\(\\begin{cases}x' = x+y-3\\\\ y' = -x+y+2\\end{cases}\\)  2) \\(\\begin{cases}x' = x+2y-3\\\\ y' = -2x+y+1\\end{cases}\\)<br>
  3) \\(\\begin{cases}x' = x\\sqrt3-y+1\\\\ y' = x+y\\sqrt3\\end{cases}\\)  4) \\(\\begin{cases}x' = \\frac12 x+\\frac12 y+1\\\\ y' = -\\frac12 x+\\frac12 y+1\\end{cases}\\)  6) \\(\\begin{cases}x' = -3y-1\\\\ y' = 3x-7\\end{cases}\\)</p>`,
  enonceText: 'Écriture complexe des similitudes : 1) x\'=x+y-3, y\'=-x+y+2 ; 2) x\'=x+2y-3, y\'=-2x+y+1 ; 3) x\'=x√3-y+1, y\'=x+y√3 ; 4) x\'=x/2+y/2+1, y\'=-x/2+y/2+1 ; 6) x\'=-3y-1, y\'=3x-7.',
  comprendre: `<p>La formule analytique donne \\(x'\\) et \\(y'\\) séparément ; l'écriture complexe les FUSIONNE : \\(z' = x'+iy' = az+b\\). La clé : \\(az = (\\alpha+i\\beta)(x+iy)\\) a pour partie réelle \\(\\alpha x-\\beta y\\) et pour partie imaginaire \\(\\beta x+\\alpha y\\) — les coefficients de \\(y'\\) sont une PERMUTATION signée de ceux de \\(x'\\). C'est le test de reconnaissance d'une similitude directe.</p>`,
  etapes: [
    `Compare le tableau des coefficients : \\(x' = \\alpha x+\\beta y+\\gamma\\) et \\(y' = -\\beta x+\\alpha y+\\delta\\) ? Alors \\(a = \\alpha-\\beta i\\), \\(b = \\gamma+i\\delta\\).`,
    `Écris \\(z' = az+b\\) avec ces valeurs.`,
    'Calcule \\(|a|\\) et \\(\\arg a\\) pour décrire la similitude (rapport, angle).',
    'Calcule le centre \\(\\Omega = \\frac{b}{1-a}\\).',
    `Vérifie en testant un point simple : \\(z = 0\\) doit donner \\(z' = b\\) (c\'est-à-dire le point \\((\\gamma\\,;\\delta)\\)) — deux secondes de contrôle.`,
  ],
  correction: `
  <ul class="steps">
    <li><b>1)</b> \\(\\alpha = 1\\), \\(\\beta = 1\\), \\(\\gamma = -3\\), \\(\\delta = 2\\) (et \\(y' = -1\\cdot x+1\\cdot y+2\\) colle bien : \\(-\\beta = -1\\), \\(\\alpha = 1\\)). Donc \\(a = 1-i\\), \\(b = -3+2i\\) : \\(z' = (1-i)z-3+2i\\). \\(|a| = \\sqrt2\\), \\(\\arg a = -\\frac{\\pi}{4}\\). Centre : \\(\\Omega = \\dfrac{-3+2i}{1-(1-i)} = \\dfrac{-3+2i}{i} = (-3+2i)(-i) = 2+3i\\).</li>
    <li><b>2)</b> \\(\\alpha = 1\\), \\(\\beta = 2\\) : \\(a = 1-2i\\), \\(b = -3+i\\). \\(z' = (1-2i)z-3+i\\). \\(|a| = \\sqrt5\\), \\(\\arg a = -\\arctan 2\\). Centre : \\(\\Omega = \\dfrac{-3+i}{2i} = \\dfrac{(-3+i)(-i)}{2} = \\dfrac{1+3i}{2}\\).</li>
    <li><b>3)</b> \\(\\alpha = \\sqrt3\\), \\(\\beta = -1\\) : \\(a = \\sqrt3+i\\), \\(b = 1\\). \\(z' = (\\sqrt3+i)z+1\\). \\(|a| = 2\\), \\(\\arg a = \\frac{\\pi}{6}\\). Centre : \\(\\Omega = \\dfrac{1}{1-\\sqrt3-i} = \\dfrac{(1-\\sqrt3)+i}{(1-\\sqrt3)^2+1} = \\dfrac{(1-\\sqrt3)+i}{5-2\\sqrt3} = \\dfrac{-1-3\\sqrt3}{13}+i\\dfrac{5+2\\sqrt3}{13}\\approx -0{,}48+0{,}65i\\).</li>
    <li><b>4)</b> \\(\\alpha = \\frac12\\), \\(\\beta = \\frac12\\) : \\(a = \\frac{1-i}{2}\\), \\(b = 1+i\\). \\(z' = \\frac{1-i}{2}z+1+i\\). \\(|a| = \\frac{\\sqrt2}{2}\\), \\(\\arg a = -\\frac{\\pi}{4}\\). Centre : \\(\\Omega = \\dfrac{1+i}{1-\\frac{1-i}{2}} = \\dfrac{1+i}{\\frac{1+i}{2}} = 2\\). (Une similitude de rapport \\(\\frac{\\sqrt2}{2}\\) — un « zoom arrière » d'un quart de tour négatif, centré en \\(2\\).)</li>
    <li><b>6)</b> \\(\\alpha = 0\\), \\(\\beta = -3\\) : \\(a = 0-(-3)i = 3i\\), \\(b = -1-7i\\). \\(z' = 3iz-1-7i\\). \\(|a| = 3\\), \\(\\arg a = \\frac{\\pi}{2}\\). Centre : \\(\\Omega = \\dfrac{-1-7i}{1-3i} = \\dfrac{(-1-7i)(1+3i)}{10} = \\dfrac{-1-3i-7i+21}{10} = 2-i\\).</li>
  </ul>
  <p class="muted">Le cas 5) est masqué par le pli de la page sur la photo — il sera ajouté avec la seconde moitié de la série.</p>
  <div class="pourquoi"><b>Pourquoi la permutation des coefficients ?</b> Parce que multiplier par \\(i\\) échange réels et imaginaires : une similitude directe de matrice \\(\\begin{pmatrix}\\alpha&\\beta\\\\-\\beta&\\alpha\\end{pmatrix}\\) est exactement « multiplication par \\(\\alpha-\\beta i\\) ». Une matrice qui ne colle pas à ce motif n'est PAS une similitude directe. À quoi ça sert ? À relier le chapitre « nombres complexes » au chapitre « matrices/similitudes », et à vérifier en 5 secondes si une formule analytique définit bien une similitude directe.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> écrire \\(a = \\alpha+\\beta i\\) (signe faux : c'est \\(\\alpha-\\beta i\\) car la partie imaginaire de \\(az\\) est \\(\\beta x+\\alpha y\\)) ; oublier \\(b = \\gamma+i\\delta\\) ; oublier de vérifier \\(\\alpha' = \\beta\\), \\(\\beta' = \\alpha\\) avant d'affirmer « similitude directe ».</div>`,
  note: `<p><b>Photo :</b> le cas 5) de cet exercice est masqué par le pli de la page — il sera ajouté avec la seconde moitié de la série (les cas 1, 2, 3, 4 et 6 sont traités).</p>`,
  correctionText: '1) z\'=(1-i)z-3+2i, |a|=√2, arg -π/4, centre 2+3i ; 2) z\'=(1-2i)z-3+i, |a|=√5, centre (1+3i)/2 ; 3) z\'=(√3+i)z+1, |a|=2, arg π/6, centre (-1-3√3)/13+i(5+2√3)/13 ; 4) z\'=(1-i)/2 z+1+i, |a|=√2/2, arg -π/4, centre 2 ; 6) z\'=3iz-1-7i, |a|=3, arg π/2, centre 2-i.',
};

D.exos.ex21 = {
  num: 21, groupe: 'g6', titre: 'Équation, transformations, carré PQRS et tangente',
  enonce: `<p>1) Résoudre dans \\(\\mathbb{C}\\) l'équation : \\(4z^2-12z+153 = 0\\).</p>
  <p>2) Dans le plan rapporté à un repère orthonormé direct \\((O,\\vec u,\\vec v)\\) d'unité graphique 1 cm, on considère les points \\(A\\), \\(B\\), \\(C\\) et \\(P\\) d'affixes respectives \\(z_A = \\frac32+6i\\), \\(z_B = \\frac32-6i\\), \\(z_C = -3-\\frac14 i\\), \\(z_P = 3+2i\\) et le vecteur \\(\\vec w\\) d'affixe \\(z_{\\vec w} = -1+\\frac52 i\\).</p>
  <p>a) Déterminer l'affixe \\(z_Q\\) du point \\(Q\\), image du point \\(B\\) dans la translation \\(t_{\\vec w}\\).<br>
  b) Déterminer l'affixe \\(z_R\\) du point \\(R\\), image du point \\(P\\) par l'homothétie \\(h\\) de centre \\(C\\) et de rapport \\(-\\frac13\\).<br>
  c) Déterminer l'affixe \\(z_S\\) du point \\(S\\), image du point \\(P\\) par la rotation de centre \\(A\\) et d'angle \\(-\\frac{\\pi}{2}\\).<br>
  Placer les points \\(P\\), \\(Q\\), \\(R\\) et \\(S\\).</p>
  <p>3) a) Démontrer que le quadrilatère \\(PQRS\\) est un parallélogramme.<br>
  b) Calculer \\(\\dfrac{z_R-z_Q}{z_P-z_Q}\\) puis en déduire la nature précise du parallélogramme \\(PQRS\\).<br>
  c) Justifier que les points \\(P\\), \\(Q\\), \\(R\\) et \\(S\\) appartiennent à un même cercle, noté \\((\\mathcal C)\\). On calculera l'affixe de son centre \\(\\Omega\\) et son rayon.</p>
  <p>4) La droite \\((AP)\\) est-elle tangente au cercle \\((\\mathcal C)\\) ?</p>`,
  enonceText: '1) 4z²-12z+153=0. 2) A(3/2+6i), B(3/2-6i), C(-3-i/4), P(3+2i), w=-1+5i/2. a) Q = t_w(B). b) R = h(C, -1/3)(P). c) S = rotation centre A angle -π/2 de P. 3a) PQRS parallélogramme. 3b) (zR-zQ)/(zP-zQ), nature précise. 3c) cercle (𝒞) : centre et rayon. 4) (AP) tangente à (𝒞) ?',
  comprendre: `<p>Une équation du second degré qui FABRIQUE les points \\(A\\) et \\(B\\) (les racines !), puis trois transformations qui construisent \\(Q\\), \\(R\\), \\(S\\). La question 3b est le point culminant : le quotient \\(\\frac{z_R-z_Q}{z_P-z_Q}\\) va dire EN UN NOMBRE que \\(PQRS\\) est un carré. Et la tangente de la question 4 se prouve avec... un angle droit.</p>`,
  etapes: [
    `1) Calcule \\(\\Delta\\) — grand et négatif. Racines \\(\\frac{3}{2}\\pm 6i\\) : ce sont \\(z_A\\) et \\(z_B\\) (regarde l\'énoncé !).`,
    '2a : translation = addition : \\(z_Q = z_B+z_{\\vec w}\\).',
    '2b : homothétie : \\(z_R = z_C+k(z_P-z_C)\\) avec \\(k = -\\frac13\\).',
    '2c : rotation : \\(z_S = z_A+e^{-i\\pi/2}(z_P-z_A) = z_A-i(z_P-z_A)\\).',
    '3a : parallélogramme ⟺ mêmes diagonales ⟺ \\(z_P+z_R = z_Q+z_S\\). Compare les deux sommes.',
    '3b : calcule le quotient. Module 1 → côtés égaux ; argument \\(\\pm\\frac{\\pi}{2}\\) → angle droit : quelle conclusion pour un parallélogramme ?',
    '3c : un parallélogramme dont les sommets sont cocycliques... quel quadrilatère particulier ? Centre = milieu des diagonales.',
    '4 : tangente en \\(P\\) ⟺ \\(\\Omega P\\perp AP\\) ⟺ quotient \\(\\frac{z_P-z_\\Omega}{z_P-z_A}\\) imaginaire pur. Calcule-le.',
  ],
  correction: `
  <ul class="steps">
    <li><b>1)</b> \\(\\Delta = 144-4\\cdot4\\cdot153 = 144-2448 = -2304\\), \\(\\sqrt{\\Delta} = 48i\\). \\(z = \\dfrac{12\\pm48i}{8} = \\dfrac32\\pm6i\\). (Ce sont \\(z_A\\) et \\(z_B\\) : l'équation « fabrique » les deux premiers points.)</li>
    <li><b>2a)</b> \\(z_Q = \\left(\\frac32-6i\\right)+\\left(-1+\\frac52 i\\right) = \\frac12-\\frac72 i\\).</li>
    <li><b>2b)</b> \\(z_R = z_C-\\frac13(z_P-z_C) = -3-\\frac14 i-\\frac13\\left(6+\\frac94 i\\right) = -3-\\frac14 i-2-\\frac34 i = -5-i\\).</li>
    <li><b>2c)</b> \\(z_S = z_A-i(z_P-z_A) = \\frac32+6i-i\\left(\\frac32-4i\\right) = \\frac32+6i-\\frac32 i+4i^2\\)·... attention : \\(-i\\cdot(-4i) = 4i^2 = -4\\). Donc \\(z_S = \\frac32+6i-\\frac32 i-4 = -\\frac52+\\frac92 i\\).</li>
    <li><b>3a)</b> \\(z_P+z_R = (3+2i)+(-5-i) = -2+i\\). \\(z_Q+z_S = \\left(\\frac12-\\frac72 i\\right)+\\left(-\\frac52+\\frac92 i\\right) = -2+i\\). Égaux → les diagonales \\([PR]\\) et \\([QS]\\) ont le même milieu → \\(PQRS\\) parallélogramme. ✓</li>
    <li><b>3b)</b> \\(\\dfrac{z_R-z_Q}{z_P-z_Q} = \\dfrac{-5-i-\\frac12+\\frac72 i}{3+2i-\\frac12+\\frac72 i} = \\dfrac{-\\frac{11}{2}+\\frac52 i}{\\frac52+\\frac{11}{2} i} = \\dfrac{-11+5i}{5+11i}\\). Multiplie par le conjugué \\(5-11i\\) : numérateur \\((-11+5i)(5-11i) = -55+121i+25i-55i^2 = -55+146i+55 = 146i\\) ; dénominateur \\(25+121 = 146\\). Quotient \\(= i\\). Lecture : \\(|i| = 1\\) → \\(QP = QR\\) ; argument \\(\\frac{\\pi}{2}\\) → angle droit en \\(Q\\). Un parallélogramme avec un angle droit ET deux côtés adjacents égaux est un <b>CARRÉ</b>.</li>
    <li><b>3c)</b> Un carré est inscriptible dans un cercle (ses sommets voient les diagonales sous des angles droits égaux, ou simplement : symétrie du carré). Centre \\(\\Omega\\) = milieu des diagonales = \\(\\dfrac{z_P+z_R}{2} = \\dfrac{-2+i}{2} = -1+\\dfrac{i}{2}\\). Rayon \\(= \\dfrac{|PR|}{2} = \\dfrac{|8+3i|}{2} = \\dfrac{\\sqrt{73}}{2}\\approx 4{,}27\\) cm.</li>
    <li><b>4)</b> \\((AP)\\) est tangente en \\(P\\) si et seulement si \\((AP)\\perp(\\Omega P)\\). Calcul : \\(\\dfrac{z_P-z_\\Omega}{z_P-z_A} = \\dfrac{4+\\frac32 i}{\\frac32-4i}\\). Multiplie par le conjugué \\(\\frac32+4i\\) : numérateur \\(\\left(4+\\frac32 i\\right)\\left(\\frac32+4i\\right) = 6+16i+\\frac94 i+6i^2 = 0+\\frac{73}{4}i\\) ; dénominateur \\(\\frac94+16 = \\frac{73}{4}\\). Quotient \\(= i\\) : imaginaire pur → angle droit → \\((AP)\\) est TANGENTE au cercle \\((\\mathcal C)\\) en \\(P\\).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi « quotient = \\(i\\) » prouve-t-il la tangence ?</b> Parce qu'un quotient imaginaire pur = perpendicularité (argument \\(\\pm\\frac{\\pi}{2}\\)). Une tangente à un cercle est précisément la perpendiculaire au rayon au point de contact : le calcul d'UN quotient referme la question. À quoi ça sert ? C'est le modèle des questions « la droite est-elle tangente/sécante ? » : distance au centre OU angle droit — deux façons, une même géométrie.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> dans l'homothétie, écrire \\(z_R = z_C+k\\,z_P\\) (il faut \\(k(z_P-z_C)\\)) ; oublier de conclure « CARRÉ » (dire juste « parallélogramme avec angle droit ») ; pour la tangente, comparer des distances au lieu du quotient d'affixes.</div>`,
  correctionText: 'Racines 3/2±6i (= A et B). zQ=1/2-7i/2 ; zR=-5-i ; zS=-5/2+9i/2. zP+zR=zQ+zS → parallélogramme ; (zR-zQ)/(zP-zQ)=i → CARRÉ. Cercle : centre Ω=-1+i/2, rayon √73/2. (zP-zΩ)/(zP-zA)=i → (AP) tangente en P.',
};

/* ═══════════ CARTE 7 — Géométrie du plan complexe ═══════════ */
D.groups.push({
  id: 'g7',
  titre: 'Géométrie du plan complexe : figures et ensembles de points',
  accroche: 'Alignements, angles, distances, cercles et médiatrices : lire la géométrie dans les affixes.',
  intro: 'Ici les complexes deviennent un langage géométrique complet : une distance = un module, un angle = un argument de quotient, un cercle = \\(|z-\\omega| = r\\), une médiatrice = égalité de deux modules. Les exercices de cette carte sont les plus proches des sujets de Bac.',
  methode: {
    positionnement: 'Le plan complexe : point \\(M\\) ↔ affixe \\(z\\). Toute question géométrique se traduit en équation sur \\(z\\), et réciproquement. Les quatre objets à maîtriser : distance (module d\'une différence), angle (argument d\'un quotient), alignement (quotient réel), perpendicularité (quotient imaginaire pur).',
    formules: [
      { tex: 'AB = |z_B-z_A|', txt: 'distance entre deux points.' },
      { tex: '\\widehat{BAC} = \\arg\\dfrac{z_C-z_A}{z_B-z_A}', txt: 'l\'angle en \\(A\\) : quotient (affixe de \\(\\vec{AC}\\))/(affixe de \\(\\vec{AB}\\)).' },
      { tex: '\\dfrac{z_C-z_A}{z_B-z_A}\\in\\mathbb{R} \\Leftrightarrow A,B,C\\ \\text{alignés}', txt: 'quotient RÉEL = vecteurs colinéaires.' },
      { tex: '\\dfrac{z_C-z_A}{z_B-z_A}\\in i\\mathbb{R} \\Leftrightarrow (AB)\\perp(AC)', txt: 'quotient IMAGINAIRE PUR = angle droit.' },
      { tex: '\\dfrac{z_C-z_A}{z_B-z_A} = e^{i\\frac{\\pi}{3}} \\Leftrightarrow ABC\\ \\text{équilatéral}', txt: 'module 1 + angle \\(\\frac{\\pi}{3}\\) (ou \\(-\\frac{\\pi}{3}\\)) : le test équilatéral.' },
      { tex: '|z-\\omega| = r\\ ;\\ |z-\\omega| = |z-\\omega\'|', txt: 'cercle de centre \\(\\omega\\) rayon \\(r\\) ; médiatrice de \\([\\omega\\omega\']\\).' },
      { tex: 'I\\ \\text{milieu de}\\ [AB] \\Leftrightarrow z_I = \\dfrac{z_A+z_B}{2}', txt: 'milieu.' },
    ],
    etapes: [
      `Devant « que peut-on dire des points ? » : calcule d\'abord les DIFFÉRENCES d\'affixes (\\(z_B-z_A\\), \\(z_C-z_A\\)...) — ce sont les vecteurs.`,
      `Forme le quotient des deux vecteurs qui t\'intéressent. Son module donne le rapport des longueurs, son argument l\'angle.`,
      'Traduis : quotient réel → alignement ; imaginaire pur → perpendicularité ; module 1 → longueurs égales ; argument \\(\\pm\\frac{\\pi}{2}\\) + module 1 → carré/rectangle isocèle ; argument \\(\\pm\\frac{\\pi}{3}\\) + module 1 → équilatéral.',
      'Pour les ensembles \\(\\{M(z)\\ :\\ |z-a| = |z-b|\\}\\) : médiatrice de \\([AB]\\). Écris \\(z = x+iy\\), développe les carrés, simplifie — tu obtiens une droite.',
      `Pour \\(|z-a| = r\\) (ou \\(|az+b| = c\\) : factorise d\'abord le coefficient !) : cercle de centre \\(a\\) et rayon \\(r\\).`,
      'Contrôle : chaque ensemble doit avoir la bonne dimension — une droite (médiatrice) ou un cercle, jamais « un nuage ».',
    ],
    aservir: 'aux questions de Bac sur la nature de triangles/quadrilatères (exercices 13, 19, 23, 24), aux ensembles de points (25), et aux tangences (21). C\'est aussi la grammaire de la géométrie dynamique.',
  },
  exos: ['ex13', 'ex20', 'ex24', 'ex25', 'ex26'],
});

D.exos.ex13 = {
  num: 13, groupe: 'g7', titre: 'Que peut-on dire des points \\(A\\), \\(B\\), \\(C\\) ?',
  enonce: `<p>Dans chacun des cas suivants, que peut-on dire des points \\(A\\), \\(B\\) et \\(C\\) ?</p>
  <p>1) \\(z_A = -1-2i\\ ;\\quad z_B = -10-8i\\ ;\\quad z_C = 2\\) ;<br>
  2) \\(z_A = 2+i\\ ;\\quad z_B = 1+i\\ ;\\quad z_C = 2+2i\\) ;<br>
  3) \\(z_A = -1+i\\sqrt3\\ ;\\quad z_B = -1-i\\sqrt3\\ ;\\quad z_C = 2\\) ;<br>
  4) \\(z_A = 2+i\\ ;\\quad z_B = 1+i\\ ;\\quad z_C = 1-i\\).</p>`,
  enonceText: 'Que dire de A, B, C ? 1) A(-1-2i), B(-10-8i), C(2) ; 2) A(2+i), B(1+i), C(2+2i) ; 3) A(-1+i√3), B(-1-i√3), C(2) ; 4) A(2+i), B(1+i), C(1-i).',
  comprendre: `<p>Quatre configurations classiques : alignement, rectangle isocèle, équilatéral, rectangle. AUCUNE ne demande de calculer les longueurs « une par une » : le quotient \\(\\frac{z_C-z_A}{z_B-z_A}\\) dit tout. Attention au cas 3 : le livre imprime \\(z_B = -1+i\\sqrt3\\) — identique à \\(z_A\\) — c'est une coquille : la valeur cohérente (et qui rend l'exercice intéressant) est \\(z_B = -1-i\\sqrt3\\).</p>`,
  etapes: [
    'Pour chaque cas : calcule \\(z_B-z_A\\) et \\(z_C-z_A\\) (les vecteurs \\(\\vec{AB}\\) et \\(\\vec{AC}\\)).',
    'Forme le quotient \\(q = \\dfrac{z_C-z_A}{z_B-z_A}\\).',
    'Interprète \\(q\\) : réel → alignés ; imaginaire pur → rectangle en \\(A\\) ; module 1 → isocèle en \\(A\\) ; module 1 + argument \\(\\pm\\frac{\\pi}{2}\\) → rectangle isocèle ; module 1 + argument \\(\\pm\\frac{\\pi}{3}\\) → équilatéral.',
    'Cas 1 : le quotient devrait tomber sur un nombre RÉEL simple — il donne même le rapport de colinéarité.',
    `Cas 3 : remarque que les trois points sont à la même distance du point \\(-1\\) — autre lecture possible de l\'équilatéral.`,
    `Cas 4 : l\'angle droit n\'est PAS en \\(A\\) — choisis bien quel sommet sert de pivot au quotient.`,
  ],
  correction: `
  <ul class="steps">
    <li><b>1)</b> \\(\\vec{AB}\\) : \\(z_B-z_A = -9-6i\\) ; \\(\\vec{AC}\\) : \\(z_C-z_A = 3+2i\\). Quotient : \\(\\dfrac{-9-6i}{3+2i} = -3\\) (réel ! car \\(-9-6i = -3(3+2i)\\)). Donc \\(\\vec{AB} = -3\\,\\vec{AC}\\) : les points sont <b>ALIGNÉS</b> (et \\(B\\) est du côté opposé à \\(C\\) par rapport à \\(A\\), avec \\(AB = 3\\,AC\\)).</li>
    <li><b>2)</b> \\(z_B-z_A = -1\\) ; \\(z_C-z_A = i\\). Quotient : \\(\\dfrac{i}{-1} = -i\\) : imaginaire pur (angle droit en \\(A\\)) ET module \\(1\\) (\\(AB = AC\\)). Triangle <b>RECTANGLE ISOCÈLE EN \\(A\\)</b>.</li>
    <li><b>3)</b> (avec \\(z_B = -1-i\\sqrt3\\), coquille du livre corrigée) : \\(AB = |{-2i\\sqrt3}| = 2\\sqrt3\\) ; \\(AC = |3-i\\sqrt3| = \\sqrt{9+3} = 2\\sqrt3\\) ; \\(BC = |3+i\\sqrt3| = 2\\sqrt3\\). Trois côtés égaux : triangle <b>ÉQUILATÉRAL</b>. (Lecture en quotients : \\(\\dfrac{z_C-z_A}{z_B-z_A} = \\dfrac{3-i\\sqrt3}{-2i\\sqrt3}\\)... plus simple ici : les trois points sont sur le cercle de centre \\(-1\\) et de rayon \\(2\\), séparés d'angles \\(\\frac{2\\pi}{3}\\).)</li>
    <li><b>4)</b> Ici l'angle droit se teste en \\(B\\) : \\(z_A-z_B = 1\\) (horizontal) et \\(z_C-z_B = -2i\\) (vertical). Quotient \\(\\dfrac{z_C-z_B}{z_A-z_B} = -2i\\) : imaginaire pur → angle droit en \\(B\\). Mais \\(|BA| = 1\\) et \\(|BC| = 2\\) : longueurs différentes. Triangle <b>RECTANGLE (quelconque) EN \\(B\\)</b>.</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi le quotient suffit-il ?</b> Parce qu'il condense le rapport des longueurs ET l'angle : deux nombres dans un seul objet. Un module de 1 dit « mêmes longueurs » ; un argument de \\(\\pm\\frac{\\pi}{2}\\) dit « angle droit » ; de \\(\\pm\\frac{\\pi}{3}\\), « équilatéral ». À quoi ça sert ? C'est la façon la plus rapide — et celle des correcteurs — de trancher la nature d'un triangle sans dessiner.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> tester l'angle en \\(A\\) dans le cas 4 alors qu'il est en \\(B\\) ; conclure « équilatéral » à partir de DEUX côtés égaux ; ne pas signaler la coquille du cas 3 (si tu recopies \\(z_B = -1+i\\sqrt3\\), les points \\(A\\) et \\(B\\) sont confondus et l'exercice perd son sens).</div>`,
  note: `<p><b>Coquille du livre signalée :</b> le cas 3) imprime \\(z_B = -1+i\\sqrt3\\), identique à \\(z_A\\) (points confondus !). La valeur cohérente — celle qui donne l'exercice classique du triangle équilatéral — est \\(z_B = -1-i\\sqrt3\\), utilisée dans la correction.</p>`,
  correctionText: '1) (zB-zA)/(zC-zA)=-3 réel → alignés, AB=3·AC. 2) (zC-zA)/(zB-zA)=-i → rectangle isocèle en A. 3) (zB corrigé = -1-i√3) côtés tous 2√3 → équilatéral. 4) (zC-zB)/(zA-zB)=-2i imaginaire pur, |BA|=1≠|BC|=2 → rectangle en B.',
};

D.exos.ex20 = {
  num: 20, groupe: 'g7', titre: 'Cercle de diamètre, point sur cercle et rotation',
  enonce: `<p>Le plan complexe \\(P\\) est rapporté à un repère orthonormé \\((O,\\vec u,\\vec v)\\). On désigne les points \\(I\\), \\(A\\) et \\(B\\) d'affixes respectives \\(z_I = 1\\) ; \\(z_A = 1-2i\\) et \\(z_B = -2+2i\\), et \\((\\mathcal C)\\) le cercle de diamètre \\([AB]\\).<br>
  On complètera la figure au fur et à mesure. (Unité graphique : 2 cm.)</p>
  <p>1) Déterminer le centre \\(\\Omega\\) du cercle \\((\\mathcal C)\\) et calculer son rayon.<br>
  2) Soit \\(D\\) le point d'affixe \\(z_D = \\dfrac{3+9i}{4+2i}\\). Écrire \\(z_D\\) sous forme algébrique puis démontrer que \\(D\\) est un point du cercle \\((\\mathcal C)\\).<br>
  3) On considère un point \\(E\\) d'affixe \\(z_E\\) appartenant au cercle \\((\\mathcal C)\\) tel que \\(\\left(\\overrightarrow{\\Omega I}\\,;\\,\\overrightarrow{\\Omega E}\\right) = \\frac{\\pi}{4}\\).<br>
  a) Préciser le module et un argument de \\(z_E+\\frac12\\).<br>
  b) En déduire que \\(z_E = \\dfrac{5\\sqrt2-2}{4}+\\dfrac{5\\sqrt2}{4}i\\).</p>
  <p>4) Soit \\(R\\) l'application du plan \\(P\\) dans lui-même qui associe à tout point \\(M\\) d'affixe \\(z\\), le point \\(M'\\) d'affixe \\(z'\\) tel que \\(z'+\\dfrac12 = e^{i\\frac{\\pi}{4}}\\left(z+\\dfrac12\\right)\\).<br>
  a) Déterminer la nature de \\(R\\) et ses éléments caractéristiques.<br>
  b) Soit \\(K\\) le point d'affixe \\(z_K = 2\\). Déterminer par le calcul l'image de \\(K\\) par \\(R\\).</p>`,
  enonceText: 'I(1), A(1-2i), B(-2+2i), (𝒞) cercle de diamètre [AB]. 1) Centre Ω et rayon. 2) zD=(3+9i)/(4+2i) : forme algébrique, D∈(𝒞) ? 3) E∈(𝒞) tel que (ΩI,ΩE)=π/4 : a) module et argument de zE+1/2 ; b) en déduire zE=(5√2-2)/4+i5√2/4. 4) z\'+1/2=e^{iπ/4}(z+1/2) : nature de R ; image de K(2).',
  comprendre: `<p>Trois réflexes y sont entraînés : (1) un cercle de DIAMÈTRE \\([AB]\\) a son centre au milieu et son rayon à \\(AB/2\\) ; (2) « \\(D\\) est sur le cercle » = « \\(|z_D-z_\\Omega| = r\\) » — une égalité de modules ; (3) une écriture \\(z'+c = e^{i\\theta}(z+c)\\) est une ROTATION dont le centre est immédiatement lisible. La question 3 lit l'appartenance au cercle « en coordonnées polaires autour de \\(\\Omega\\) ».</p>`,
  etapes: [
    '1) \\(\\Omega\\) = milieu de \\([AB]\\) : \\(z_\\Omega = \\frac{z_A+z_B}{2}\\). Rayon : \\(\\frac{|z_A-z_B|}{2}\\).',
    '2) réduis \\(z_D\\) en algébrique (conjugué du dénominateur), puis calcule \\(|z_D-z_\\Omega|\\) et compare au rayon.',
    `3a : \\(z_E+\\frac12 = z_E-z_\\Omega\\) : c\'est le vecteur \\(\\overrightarrow{\\Omega E}\\). Son module = rayon ; son argument = angle cherché + angle de \\(\\overrightarrow{\\Omega I}\\).`,
    '3b : \\(\\overrightarrow{\\Omega I}\\) est horizontal (regarde \\(z_I-z_\\Omega\\)) → son argument est 0. Alors \\(z_E+\\frac12 = re^{i\\pi/4}\\) : développe.',
    '4a : \\(|e^{i\\pi/4}| = 1\\) et la forme est centrée en \\(-\\frac12\\) : quelle nature ? Quel centre ? Quel angle ?',
    `4b : applique \\(R\\) à \\(z = 2\\) : \\(z\' = -\\frac12+e^{i\\pi/4}\\left(2+\\frac12\\right)\\). Compare avec le \\(z_E\\) de la question 3b — surprise prévue !`,
  ],
  correction: `
  <ul class="steps">
    <li><b>1)</b> \\(z_\\Omega = \\dfrac{(1-2i)+(-2+2i)}{2} = -\\dfrac12\\) ; rayon \\(r = \\dfrac{|z_A-z_B|}{2} = \\dfrac{|3-4i|}{2} = \\dfrac{5}{2}\\).</li>
    <li><b>2)</b> \\(z_D = \\dfrac{(3+9i)(4-2i)}{(4+2i)(4-2i)} = \\dfrac{12-6i+36i+18}{20} = \\dfrac{30+30i}{20} = \\dfrac32+\\dfrac32 i\\). Alors \\(z_D-z_\\Omega = \\dfrac32+\\dfrac32 i+\\dfrac12 = 2+\\dfrac32 i\\), et \\(|z_D-z_\\Omega| = \\sqrt{4+\\frac94} = \\sqrt{\\frac{25}{4}} = \\frac52 = r\\). Donc \\(D\\in(\\mathcal C)\\). ✓</li>
    <li><b>3a)</b> \\(z_E+\\frac12 = z_E-z_\\Omega = \\overrightarrow{\\Omega E}\\) (en affixe) : son module vaut le rayon \\(\\frac52\\) (car \\(E\\in(\\mathcal C)\\)). Son argument : \\(\\arg(\\overrightarrow{\\Omega E}) = \\arg(\\overrightarrow{\\Omega I})+\\frac{\\pi}{4}\\). Or \\(z_I-z_\\Omega = 1+\\frac12 = \\frac32\\) : réel positif → argument \\(0\\). Donc \\(\\arg\\left(z_E+\\frac12\\right) = \\frac{\\pi}{4}\\) (à \\(2\\pi\\) près).</li>
    <li><b>3b)</b> \\(z_E+\\frac12 = \\frac52 e^{i\\frac{\\pi}{4}}\\) donc \\(z_E = -\\frac12+\\frac52\\left(\\frac{\\sqrt2}{2}+\\frac{\\sqrt2}{2}i\\right) = \\frac{5\\sqrt2}{4}-\\frac12+i\\frac{5\\sqrt2}{4} = \\dfrac{5\\sqrt2-2}{4}+\\dfrac{5\\sqrt2}{4}i\\). ✓</li>
    <li><b>4a)</b> \\(z'+\\frac12 = e^{i\\frac{\\pi}{4}}\\left(z+\\frac12\\right)\\) : \\(|e^{i\\frac{\\pi}{4}}| = 1\\) → \\(R\\) est une ROTATION, de centre le point fixe... la forme est déjà centrée : centre \\(\\Omega' = -\\frac12\\) (le point qui vérifie \\(z'+\\frac12 = z+\\frac12\\)), angle \\(\\frac{\\pi}{4}\\). Donc \\(R\\) = rotation de centre \\(\\Omega(-\\frac12)\\), d'angle \\(\\frac{\\pi}{4}\\) — LE centre du cercle !</li>
    <li><b>4b)</b> \\(z_K' = -\\dfrac12+e^{i\\frac{\\pi}{4}}\\left(2+\\dfrac12\\right) = -\\dfrac12+\\dfrac52 e^{i\\frac{\\pi}{4}}\\). C'est EXACTEMENT le calcul de la question 3b : \\(z_K' = \\dfrac{5\\sqrt2-2}{4}+\\dfrac{5\\sqrt2}{4}i = z_E\\). L'image de \\(K\\) par la rotation est \\(E\\). (Cohérence : \\(K\\) est sur le cercle, à l'angle 0 depuis \\(\\Omega\\) — comme \\(I\\) — et la rotation le conduit à l'angle \\(\\frac{\\pi}{4}\\) : c'est \\(E\\).)</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi « \\(z_E+\\frac12\\) » plutôt que « \\(z_E-z_\\Omega\\) » ?</b> Parce que \\(-\\frac12\\) se soustrait en ajoutant \\(\\frac12\\) : le livre écrit les vecteurs depuis \\(\\Omega\\) sous forme « plus ». Dès que tu vois \\(z+c\\), pense « \\(z-(-c)\\) » : un vecteur partant du point \\(-c\\). À quoi ça sert ? Les questions « module et argument de \\(z-a\\) » sont LE standard du Bac pour localiser un point par rapport à un centre.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> calculer le rayon comme \\(|z_A+z_B|/2\\) (c'est la DIFFÉRENCE !) ; oublier que \\(\\arg(\\overrightarrow{\\Omega I}) = 0\\) (le calculer quand même) ; dans 4a, chercher un centre compliqué alors que la forme centrée le montre : \\(-\\frac12\\).</div>`,
  correctionText: 'Ω=-1/2, rayon 5/2. zD=3/2+3/2 i, |zD-Ω|=5/2 → D∈(𝒞). zE+1/2 : module 5/2, argument π/4 (car ΩI horizontal) → zE=(5√2-2)/4+i5√2/4. R : rotation centre -1/2, angle π/4. R(K)=E.',
};

D.exos.ex24 = {
  num: 24, groupe: 'g7', titre: 'Relations sur les racines puis rectangle \\(OBAC\\)',
  enonce: `<p>Soit l'équation \\((\\mathrm{E})\\ :\\ z^2+(1-3i)z-2i-2 = 0\\). On désigne par \\(z_1\\) et \\(z_2\\) les deux solutions de \\((\\mathrm{E})\\).</p>
  <p>1) a) Sans calculer \\(z_1\\) et \\(z_2\\), vérifier que \\(|z_1\\times z_2| = 2\\sqrt2\\) et \\(\\arg(z_1\\times z_2) = -\\dfrac{3\\pi}{4}+2k\\pi\\).<br>
  b) Vérifier que \\(z_1 = 2i\\) est une solution de \\((\\mathrm{E})\\).<br>
  c) En déduire l'écriture exponentielle puis l'écriture algébrique de \\(z_2\\).</p>
  <p>2) Soit \\((\\mathrm{E}\')\\ :\\ z^3-(1+3i)z^2-(4-4i)z+2(2i+2) = 0\\).<br>
  a) Vérifier que 2 est une solution de \\((\\mathrm{E}\')\\).<br>
  b) Résoudre dans \\(\\mathbb{C}\\) l'équation \\((\\mathrm{E}\')\\).</p>
  <p>3) Soit \\((\\mathrm{E}_1)\\ :\\ z^2+2e^{i\\theta}z+e^{2i\\theta}-1 = 0\\). Résoudre dans \\(\\mathbb{C}\\) l'équation \\((\\mathrm{E}_1)\\).</p>
  <p>4) Soit \\(A\\), \\(B\\) et \\(C\\) les points d'affixes respectives : \\(2e^{i\\theta}\\), \\(1+e^{i\\theta}\\) et \\(-1+e^{i\\theta}\\).<br>
  a) Écrire \\(z_B\\) et \\(z_C\\) sous forme exponentielle.<br>
  b) Montrer que \\(OBAC\\) est un rectangle.</p>`,
  enonceText: '(E) : z²+(1-3i)z-2i-2=0, z1, z2 solutions. 1a) sans calculer z1, z2 : |z1×z2|=2√2, arg=-3π/4+2kπ. 1b) z1=2i solution. 1c) déduire z2 (expo puis algébrique). 2) (E\') : z³-(1+3i)z²-(4-4i)z+2(2i+2)=0 ; 2 solution ; résoudre. 3) (E1) : z²+2e^{iθ}z+e^{2iθ}-1=0 : résoudre. 4) A(2e^{iθ}), B(1+e^{iθ}), C(-1+e^{iθ}) : a) zB, zC en exponentielle ; b) OBAC rectangle.',
  comprendre: `<p>La question 1a est une merveille : \\(z_1z_2 = \\frac{c}{a}\\) (produit des racines) — on connaît le PRODUIT sans connaître les racines ! Puis \\(z_1\\) connue ⟹ \\(z_2 = \\frac{z_1z_2}{z_1}\\) : une division et c'est fini. La question 3 est une équation « paramétrée » par \\(\\theta\\) dont le discriminant ne dépend PAS de \\(\\theta\\) — observe ça, c'est magique. Et la 4b : un parallélogramme dont les diagonales sont égales est un rectangle.</p>`,
  etapes: [
    `1a : écris \\(z_1z_2 = \\frac{c}{a}\\) (produit des racines d\'un \\(az^2+bz+c\\)). Ici \\(c = -2i-2\\) : calcule son module et son argument.`,
    '1b : substitue \\(2i\\) dans \\((\\mathrm{E})\\) — trois lignes.',
    '1c : \\(z_2 = \\dfrac{z_1z_2}{z_1}\\). Fais-le en ALGÉBRIQUE, puis passe \\(z_2\\) en exponentielle (module, argument).',
    `2a : teste \\(z = 2\\) dans \\((\\mathrm{E}\')\\).`,
    '2b : factorise \\((z-2)(az^2+bz+c)\\) par identification, puis résous le trinôme — son \\(\\Delta\\) est un imaginaire pur sympathique.',
    '3 : \\(\\Delta\\) de \\((\\mathrm{E}_1)\\) en fonction de \\(\\theta\\) — simplifie ! Les solutions sont \\(-e^{i\\theta}\\pm\\dots\\)',
    '4a : factorise \\(1+e^{i\\theta}\\) et \\(e^{i\\theta}-1\\) par \\(e^{i\\theta/2}\\) — les demi-sommets font apparaître cosinus et sinus de \\(\\frac{\\theta}{2}\\).',
    `4b : montre d\'abord le PARALLÉLOGRAMME (\\(z_A = z_B+z_C\\)), puis l\'égalité des DIAGONALES (\\(|z_A-z_O| = |z_B-z_C|\\)).`,
  ],
  correction: `
  <ul class="steps">
    <li><b>1a)</b> Produit des racines : \\(z_1z_2 = \\dfrac{c}{a} = -2i-2 = -2-2i\\). Donc \\(|z_1z_2| = \\sqrt{4+4} = 2\\sqrt2\\) et \\(\\arg(z_1z_2) = -\\dfrac{3\\pi}{4}+2k\\pi\\) (troisième quadrant, \\(\\tan = 1\\)). Aucun calcul de \\(z_1\\), \\(z_2\\) — c'est la puissance des relations sur les racines.</li>
    <li><b>1b)</b> \\((2i)^2+(1-3i)(2i)-2i-2 = -4+2i+6-2i-2 = 0\\) ✓.</li>
    <li><b>1c)</b> \\(z_2 = \\dfrac{-2-2i}{2i}\\). Multiplie haut et bas par \\(-i\\) : \\(z_2 = \\dfrac{(-2-2i)(-i)}{2} = \\dfrac{2i+2i^2}{2} = \\dfrac{2i-2}{2} = -1+i\\). Forme exponentielle : module \\(\\sqrt2\\), deuxième quadrant → \\(z_2 = \\sqrt2 e^{i\\frac{3\\pi}{4}}\\). (Contrôle : \\(\\arg z_1+\\arg z_2 = \\frac{\\pi}{2}+\\frac{3\\pi}{4} = \\frac{5\\pi}{4} \\equiv -\\frac{3\\pi}{4}\\ [2\\pi]\\) ✓.)</li>
    <li><b>2a)</b> \\(8-4(1+3i)-2(4-4i)+4+4i = 8-4-12i-8+8i+4+4i = 0\\) ✓.</li>
    <li><b>2b)</b> \\((\\mathrm{E}\') = (z-2)(z^2+bz+c)\\) : identification → \\(b-2 = -(1+3i)\\) donc \\(b = 1-3i\\) ; \\(-2c = 2(2i+2)\\) donc \\(c = -2-2i\\) ; contrôle \\(c-2b = -2-2i-2+6i = -4+4i\\) = coefficient de \\(z\\) ✓. \\(z^2+(1-3i)z-2-2i = 0\\) : \\(\\Delta = (1-3i)^2+8+8i = (1-6i-9)+8+8i = 2i\\), \\(\\delta = \\pm(1+i)\\). Racines : \\(z = \\dfrac{-(1-3i)\\pm(1+i)}{2}\\) : \\(z = 2i\\) et \\(z = -1+i\\). Donc \\((\\mathrm{E}\')\\) a pour solutions \\(\\{2\\ ;\\ 2i\\ ;\\ -1+i\\}\\) — on retrouve les racines de \\((\\mathrm{E})\\) !</li>
    <li><b>3)</b> \\(\\Delta = 4e^{2i\\theta}-4(e^{2i\\theta}-1) = 4\\) : indépendant de \\(\\theta\\) ! \\(\\delta = \\pm2\\), \\(z = \\dfrac{-2e^{i\\theta}\\pm2}{2} = -e^{i\\theta}\\pm1\\). Solutions : \\(1-e^{i\\theta}\\) et \\(-1-e^{i\\theta}\\).</li>
    <li><b>4a)</b> \\(z_B = 1+e^{i\\theta} = e^{i\\frac{\\theta}{2}}\\left(e^{-i\\frac{\\theta}{2}}+e^{i\\frac{\\theta}{2}}\\right) = 2\\cos\\dfrac{\\theta}{2}\\,e^{i\\frac{\\theta}{2}}\\) (sommets conjugués → réel). Et \\(z_C = e^{i\\theta}-1 = e^{i\\frac{\\theta}{2}}\\left(e^{i\\frac{\\theta}{2}}-e^{-i\\frac{\\theta}{2}}\\right) = 2i\\sin\\dfrac{\\theta}{2}\\,e^{i\\frac{\\theta}{2}} = 2\\sin\\dfrac{\\theta}{2}\\,e^{i\\left(\\frac{\\theta}{2}+\\frac{\\pi}{2}\\right)}\\).</li>
    <li><b>4b)</b> \\(z_B+z_C = 2e^{i\\theta} = z_A\\) : le quadrilatère \\(OBAC\\) (dans cet ordre) a \\(z_O+z_A = z_B+z_C\\) → c'est un PARALLÉLOGRAMME (diagonales \\([OA]\\) et \\([BC]\\) de même milieu). Ses diagonales : \\(OA = |z_A| = 2\\) et \\(BC = |z_B-z_C| = |1-(-1)| = 2\\). Égales → le parallélogramme est un <b>RECTANGLE</b>. ✓</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi « diagonales égales ⟹ rectangle » ?</b> Parce qu'un parallélogramme a ses diagonales qui se coupent en leur milieu ; si en plus elles ont même longueur, les quatre sommets sont à égale distance de ce milieu commun — c'est la définition d'un cercle traversé par les quatre sommets... et un quadrilatère inscriptible à diagonales isométriques est un rectangle. À quoi ça sert ? C'est l'un des trois tests « nature d'un quadrilatère » (parallélogramme → losange/carré/rectangle) que le Bac adore.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> vouloir résoudre \\((\\mathrm{E})\\) avant la 1a (l'énoncé dit SANS calculer !) ; dans 4b, tester l'angle au lieu des diagonales (plus long) ; dans 4a, oublier le facteur \\(e^{i\\theta/2}\\) commun.</div>`,
  correctionText: 'z1z2=c/a=-2-2i : module 2√2, arg -3π/4+2kπ. z1=2i ✓. z2=(-2-2i)/(2i)=-1+i=√2e^{3iπ/4}. (E\') : (z-2)(z²+(1-3i)z-2-2i) ; Δ=2i ; racines 2, 2i, -1+i. (E1) : Δ=4, solutions 1-e^{iθ} et -1-e^{iθ}. zB=2cos(θ/2)e^{iθ/2}, zC=2sin(θ/2)e^{i(θ/2+π/2)} ; zA=zB+zC (parallélogramme) et OA=BC=2 → OBAC rectangle.',
};

D.exos.ex25 = {
  num: 25, groupe: 'g7', titre: 'Losange \\(ABCD\\) et trois ensembles de points',
  enonce: `<p>Le plan complexe \\(P\\) est rapporté à un repère orthonormé direct \\((O,\\vec u,\\vec v)\\).</p>
  <p>1) a) Placer les points \\(A\\), \\(B\\), \\(C\\) et \\(I\\) d'affixes respectives \\(-2i\\ ;\\ 1+i\\ ;\\ 4+2i\\) et 2.<br>
  b) Vérifier que \\(I\\) est le milieu de \\([AC]\\).</p>
  <p>2) a) Calculer les affixes \\(u\\) et \\(v\\) des vecteurs \\(\\overrightarrow{BA}\\) et \\(\\overrightarrow{BC}\\).<br>
  b) Montrer que \\(ABC\\) est un triangle isocèle en \\(B\\).</p>
  <p>3) a) Soit \\(D = S_i(B)\\). Calculer l'affixe du point \\(D\\).<br>
  b) Montrer que \\(ABCD\\) est un losange.</p>
  <p>4) Déterminer les ensembles suivants :<br>
  \\(\\Delta = \\{M(z)\\ \\text{tel que}\\ |z-2| = |z+2i|\\}\\) ;<br>
  \\(\\Delta\' = \\{M(z)\\ \\text{tel que}\\ |2z+4i| = 4\\}\\) ;<br>
  \\(\\Delta\'\' = \\{M(z)\\ \\text{tel que}\\ |iz-i+1| = |z-4-2i|\\}\\).</p>`,
  enonceText: 'A(-2i), B(1+i), C(4+2i), I(2). 1b) I milieu de [AC]. 2a) affixes u, v des vecteurs BA, BC. 2b) ABC isocèle en B. 3a) D = S_i(B) (symétrie centrale de centre I) : affixe. 3b) ABCD losange. 4) Ensembles : Δ = {|z-2|=|z+2i|} ; Δ\' = {|2z+4i|=4} ; Δ\'\' = {|iz-i+1|=|z-4-2i|}.',
  comprendre: `<p>La partie géométrique prépare la partie « ensembles » : \\(\\Delta\\) utilise les points \\(A\\) et \\(I\\), \\(\\Delta\'\\) le point \\(A\\), \\(\\Delta\'\'\\) les points \\(B\\) et \\(C\\) — les trois ensembles parlent des points déjà placés ! Le fil rouge : traduire chaque module en DISTANCE, chaque égalité de modules en ensemble géométrique connu.</p>`,
  etapes: [
    '1b : milieu : \\(z_I = \\frac{z_A+z_C}{2}\\) — remplace et compare.',
    `2a : affixe d\'un vecteur = différence des affixes (destination - départ) : \\(u = z_A-z_B\\), \\(v = z_C-z_B\\).`,
    '2b : isocèle en \\(B\\) ⟺ \\(|u| = |v|\\) — deux Pythagore.',
    '3a : la symétrie centrale \\(S_i\\) envoie \\(B\\) sur son symétrique : \\(z_D = 2z_I-z_B\\) (\\(I\\) devient le milieu de \\([BD]\\)).',
    `3b : parallélogramme ? \\(z_A+z_C = z_B+z_D\\). Et l\'isocélie de la 2b fait le reste : losange.`,
    '4-Δ : \\(|z-2|\\) = distance à \\(I(2)\\) ; \\(|z+2i| = |z-(-2i)|\\) = distance à \\(A\\). Égalité de deux distances = ?',
    `4-Δ\' : FACTORISE d\'abord : \\(|2z+4i| = 2|z+2i|\\) — la propriété \\(|\\lambda z| = |\\lambda||z|\\) sauve tout.`,
    `4-Δ\'\' : fais sortir le \\(i\\) du premier module : \\(iz-i+1 = i(z-1-i)\\). Puis reconnais \\(B\\) et \\(C\\).`,
  ],
  correction: `
  <ul class="steps">
    <li><b>1b)</b> \\(\\dfrac{z_A+z_C}{2} = \\dfrac{-2i+4+2i}{2} = 2 = z_I\\) ✓ : \\(I\\) est le milieu de \\([AC]\\).</li>
    <li><b>2a)</b> \\(u = z_A-z_B = -2i-1-i = -1-3i\\) ; \\(v = z_C-z_B = 4+2i-1-i = 3+i\\).</li>
    <li><b>2b)</b> \\(|u| = \\sqrt{1+9} = \\sqrt{10}\\) et \\(|v| = \\sqrt{9+1} = \\sqrt{10}\\) : \\(BA = BC\\) → triangle isocèle en \\(B\\). ✓</li>
    <li><b>3a)</b> \\(z_D = 2z_I-z_B = 4-1-i = 3-i\\).</li>
    <li><b>3b)</b> \\(z_A+z_C = 4\\) et \\(z_B+z_D = 1+i+3-i = 4\\) : égaux → les diagonales \\([AC]\\) et \\([BD]\\) ont le même milieu \\(I\\) → \\(ABCD\\) parallélogramme. Et \\(BA = BC\\) (question 2b) : un parallélogramme ayant deux côtés adjacents égaux est un <b>LOSANGE</b>. (Remarque : \\(I\\) est le centre de symétrie du losange — c'est pour ça que \\(S_i\\) construit \\(D\\).)</li>
    <li><b>4-\\(\\Delta\\)</b> : \\(|z-2| = |z+2i|\\) s'écrit \\(MA = MI\\) avec \\(A(-2i)\\) et \\(I(2)\\) : l'ensemble est la <b>MÉDIATRICE de \\([AI]\\)</b>. Équation cartésienne : \\(z = x+iy\\), \\((x-2)^2+y^2 = x^2+(y+2)^2\\) → \\(-4x = 4y\\) → \\(y = -x\\) (la droite \\(y = -x\\)).</li>
    <li><b>4-\\(\\Delta\'\\)</b> : \\(|2z+4i| = 2|z+2i|\\) (on factorise le 2) → \\(|z+2i| = 2\\) → \\(MA = 2\\) avec \\(A(-2i)\\) : <b>CERCLE de centre \\(A\\) et de rayon \\(2\\)</b>. (Sans factoriser, on aurait pu paniquer — la factorisation est le geste clé.)</li>
    <li><b>4-\\(\\Delta\'\'\\)</b> : \\(iz-i+1 = i(z-1-i)\\) (vérifie en développant : \\(iz-i-i^2 = iz-i+1\\) ✓). Donc \\(|iz-i+1| = |i|\\cdot|z-1-i| = |z-1-i| = |z-z_B|\\). Et \\(|z-4-2i| = |z-z_C|\\). L'ensemble : \\(MB = MC\\) → <b>MÉDIATRICE de \\([BC]\\)</b>. Équation : \\((x-1)^2+(y-1)^2 = (x-4)^2+(y-2)^2\\) → \\(-2x-2y+2 = -8x-4y+20\\) → \\(6x+2y = 18\\) → \\(3x+y = 9\\).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi faut-il « voir » les points cachés ?</b> Parce que \\(|z-\\omega|\\) est TOUJOURS une distance au point \\(\\omega\\) : reconnaître \\(2\\), \\(-2i\\), \\(1+i\\), \\(4+2i\\) dans les modules de la question 4 transforme des formules abstraites en géométrie familière. À quoi ça sert ? Les ensembles de points sont LA question type des Bac scientifiques : cercle, médiatrice, droite — trois figures, un seul réflexe (traduire en distances).</div>
  <div class="erreurs"><b>Erreurs classiques :</b> oublier que \\(|z+2i|\\) = distance à \\(-2i\\) (et non à \\(+2i\\)) ; ne pas factoriser \\(|2z+4i|\\) ; pour \\(\\Delta\'\'\\), développer \\(iz-i+1\\) au lieu de factoriser par \\(i\\).</div>`,
  correctionText: 'I milieu [AC] ✓. u=-1-3i, v=3+i, |u|=|v|=√10 → isocèle en B. D=3-i ; ABCD parallélogramme + isocèle → losange. Δ : médiatrice de [AI] : y=-x. Δ\' : |z+2i|=2 → cercle centre A rayon 2. Δ\'\' : iz-i+1=i(z-1-i) → médiatrice de [BC] : 3x+y=9.',
};

D.exos.ex26 = {
  num: 26, groupe: 'g7', pending: true, titre: 'Triangle rectangle isocèle et milieux \\(I\\), \\(J\\)',
  enonce: `<p>Dans le plan orienté, on considère un triangle \\(ABC\\) rectangle et isocèle en \\(A\\) tel que \\(\\left(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AC}\\right) = \\dfrac{\\pi}{2}\\ [2\\pi]\\). Soit \\(I\\) et \\(J\\) les milieux respectifs des segments \\([AB]\\) et \\([BC]\\).</p>`,
  enonceText: 'Triangle ABC rectangle isocèle en A, (AB,AC)=π/2. I et J milieux de [AB] et [BC]. (Questions page 45 — seconde moitié de la série.)',
  comprendre: `<p>L'énoncé est posé (triangle rectangle isocèle en \\(A\\), sens direct, milieux \\(I\\) et \\(J\\)) : les QUESTIONS sont à la page 45, que tu m'enverras avec la seconde moitié de la série. En attendant, la méthodologie de la carte 7 t'y prépare : ce type d'exercice demande typiquement de calculer des affixes de \\(I\\) et \\(J\\), des quotients \\(\\frac{z_J-z_A}{z_I-z_A}\\) pour la nature de \\(AIJ\\), et des ensembles de points. La correction complète sera ajoutée dès réception des questions.</p>`,
  etapes: [
    `Choisis un repère astucieux : \\(A\\) à l\'origine, \\(B\\) sur l\'axe des réels, \\(C\\) sur l\'axe des imaginaires — la contrainte « rectangle isocèle en \\(A\\), sens direct » devient \\(z_C = i\\,z_B\\).`,
    'Milieux : \\(z_I = \\frac{z_A+z_B}{2}\\), \\(z_J = \\frac{z_B+z_C}{2}\\).',
    'Prépare les quotients usuels : \\(\\frac{z_J-z_A}{z_I-z_A}\\) (nature de \\(AIJ\\)), \\(\\frac{z_J-z_I}{z_C-z_I}\\) (position de \\(J\\) dans le triangle...).',
    'Rappel du réflexe : réel → alignement ; imaginaire pur → angle droit ; module 1 → longueurs égales.',
  ],
  correction: `<p><b>Correction en attente :</b> les questions de cet exercice figurent en page 45 du manuel — elles arriveront avec la seconde moitié de la série d'exercices. Dès réception, cette carte sera complétée (énoncé intégral + correction détaillée, comme les autres). La méthodologie ci-dessus et celle de la carte 7 couvrent déjà les outils attendus (milieux, quotients d'affixes, nature de triangles).</p>`,
  correctionText: 'En attente des questions (page 45) — seconde moitié de la série.',
};
})();
