/* ═══ Données — Cartes 3, 4 & 5 : équations ; linéarisation ; degré 3 ═══ */
(function () {
const D = window.ARVX_DATA;
D.groups = D.groups || [];
D.exos = D.exos || {};

/* ═══════════ CARTE 3 — Équations du 2nd degré et racines carrées ═══════════ */
D.groups.push({
  id: 'g3',
  titre: 'Équations du 2nd degré et racines carrées',
  accroche: 'Le discriminant dans ℂ : Δ complexe, racines carrées de Δ, racines conjuguées ou non.',
  intro: 'Dans ℂ, TOUTE équation du second degré a deux solutions (comptées avec multiplicité). La méthode reste \\(\\Delta = b^2-4ac\\), mais \\(\\Delta\\) peut être complexe : il faut alors savoir extraire ses racines carrées. C\'est la compétence spécifique de cette carte.',
  methode: {
    positionnement: 'En réel, \\(\\Delta<0\\) signifiait « pas de solution ». En complexe, \\(\\Delta<0\\) donne deux solutions conjuguées \\(\\frac{-b\\pm i\\sqrt{4ac-b^2}}{2a}\\). Et si \\(\\Delta\\) est un complexe quelconque (ni réel positif ni réel négatif), on calcule ses racines carrées à la main avec le système \\(u^2-v^2\\), \\(2uv\\).',
    formules: [
      { tex: '\\Delta = b^2-4ac', txt: 'même formule qu\'en réel — mais Δ peut être complexe.' },
      { tex: 'z = \\dfrac{-b\\pm\\delta}{2a}\\quad (\\delta^2 = \\Delta)', txt: 'solutions : une fois qu\'on tient une racine carrée \\(\\delta\\) de \\(\\Delta\\).' },
      { tex: '\\Delta<0 \\Rightarrow z = \\dfrac{-b\\pm i\\sqrt{4ac-b^2}}{2a}', txt: 'cas usuel : deux solutions conjuguées.' },
      { tex: 'u^2-v^2 = \\operatorname{Re}(\\Delta)\\ ;\\ 2uv = \\operatorname{Im}(\\Delta)\\ ;\\ u^2+v^2 = |\\Delta|', txt: 'LE système des racines carrées : \\(\\delta = u+iv\\) avec \\(\\delta^2 = \\Delta\\).' },
      { tex: '\\sqrt{x+iy} = \\pm(u+iv)', txt: 'un complexe non nul a DEUX racines carrées opposées.' },
    ],
    etapes: [
      `Écris \\(a\\), \\(b\\), \\(c\\) SANS erreur de signe (réécris l\'équation sous la forme canonique \\(az^2+bz+c = 0\\)).`,
      'Calcule \\(\\Delta = b^2-4ac\\) et réduis-le sous la forme \\(x+iy\\).',
      'Si \\(\\Delta\\) est réel : \\(\\Delta>0\\) → \\(\\sqrt\\Delta\\) réel ; \\(\\Delta<0\\) → \\(\\sqrt\\Delta = i\\sqrt{4ac-b^2}\\) ; \\(\\Delta = 0\\) → racine double.',
      'Si \\(\\Delta\\) est complexe non réel : pose \\(\\delta = u+iv\\), écris \\(\\delta^2 = \\Delta\\), et résous le système \\(u^2-v^2 = x\\), \\(2uv = y\\), \\(u^2+v^2 = \\sqrt{x^2+y^2}\\).',
      'Le système donne \\(u^2\\) et \\(v^2\\) (positifs), puis le signe de \\(uv\\) est imposé par \\(2uv = y\\) : choisis les signes en conséquence.',
      'Termine : \\(z = \\frac{-b\\pm\\delta}{2a}\\), et simplifie chaque quotient (multiplier par le conjugué du dénominateur).',
      'Vérification express : somme des racines \\(= -b/a\\), produit \\(= c/a\\). Trois secondes qui évitent une catastrophe.',
    ],
    aservir: 'à toutes les équations du chapitre (y compris celles qui finissent en géométrie, carte 7), aux équations du 3e degré (carte 5, où le facteur restant est un 2nd degré), et aux racines carrées « nues » type \\(z^2 = 3-4i\\) (exercice 10).',
  },
  exos: ['ex9', 'ex10', 'ex12', 'ex22'],
});

D.exos.ex9 = {
  num: 9, groupe: 'g3', titre: 'Seize équations du second degré',
  enonce: `<p>Résoudre dans \\(\\mathbb{C}\\) les équations suivantes :</p>
  <p>1) \\(z^2-5iz-7+i = 0\\) ; 2) \\(z^2+2iz\\sqrt2-2(1+i) = 0\\) ; 3) \\(z^2+z+1 = 0\\) ;<br>
  4) \\(z^2-2z+2 = 0\\) ; 5) \\(iz^2+(1+2i)z-1 = 0\\) ; 6) \\((1-2i)z^2+2iz-1 = 0\\) ;<br>
  7) \\(z^2+\\sqrt3\\,z-5+3i\\sqrt3 = 0\\) ; 8) \\(z^2+(2i-3)z+5-i = 0\\) ;<br>
  9) \\(iz^2+(1-5i)z+6i-2 = 0\\) ; 10) \\(z^2-(5-14i)z-2(5i+12) = 0\\) ;<br>
  11) \\(z^2-(3+4i)z-1+5i = 0\\) ; 12) \\(iz^2+(1-5i)z+6i-2 = 0\\) ;<br>
  13) \\(z^2+iz+5-5i = 0\\) ; 14) \\(z^2+z-iz-5i = 0\\) ;<br>
  15) \\(z^4+10z^2+169 = 0\\) ; 16) \\(z^4-(3+2i)z^2+8-6i = 0.\\)</p>`,
  enonceText: '16 équations : 1) z²-5iz-7+i=0 ; 2) z²+2iz√2-2(1+i)=0 ; 3) z²+z+1=0 ; 4) z²-2z+2=0 ; 5) iz²+(1+2i)z-1=0 ; 6) (1-2i)z²+2iz-1=0 ; 7) z²+√3z-5+3√3i=0 ; 8) z²+(2i-3)z+5-i=0 ; 9) iz²+(1-5i)z+6i-2=0 ; 10) z²-(5-14i)z-2(5i+12)=0 ; 11) z²-(3+4i)z-1+5i=0 ; 12) iz²+(1-5i)z+6i-2=0 ; 13) z²+iz+5-5i=0 ; 14) z²+z-iz-5i=0 ; 15) z⁴+10z²+169=0 ; 16) z⁴-(3+2i)z²+8-6i=0.',
  comprendre: `<p>Cette batterie couvre TOUTES les situations : \\(\\Delta\\) réel positif, \\(\\Delta\\) réel négatif, \\(\\Delta\\) imaginaire pur, \\(\\Delta\\) complexe « quelconque », coefficient dominant non réel, et même deux équations du 4e degré (15, 16) qui se ramènent au second degré par le changement \\(Z = z^2\\). Le livre construit une montée en difficulté : les premières sont des échauffements, les dernières demandent le système complet des racines carrées.</p>`,
  etapes: [
    'Pour CHAQUE équation : identifie \\(a\\), \\(b\\), \\(c\\) (attention aux coefficients imaginaires : dans \\(iz^2+\\dots\\), on a \\(a = i\\) !).',
    'Calcule \\(\\Delta\\) et réduis-le en \\(x+iy\\).',
    'Classe \\(\\Delta\\) : réel positif / réel négatif / imaginaire pur / complexe non réel. Le traitement dépend de ce classement.',
    'Pour les \\(\\Delta\\) complexes : système \\(\\{u^2-v^2 = x\\ ;\\ 2uv = y\\ ;\\ u^2+v^2 = |\\Delta|\\}\\). Résous, choisis les signes, puis applique \\(z = \\frac{-b\\pm\\delta}{2a}\\).',
    'Vérifie au moins trois équations avec la somme des racines (\\(-b/a\\)) — prends celles où tu as douté.',
    `Pour 15) et 16) : pose \\(Z = z^2\\), résous en \\(Z\\), puis reviens à \\(z\\) par racines carrées (méthode de l\'exercice 10).`,
  ],
  correction: `
  <p style="margin-top:0"><b>1) \\(z^2-5iz-7+i = 0\\).</b> \\(a=1\\), \\(b=-5i\\), \\(c=-7+i\\). \\(\\Delta = 25i^2-4(-7+i) = -25+28-4i = 3-4i\\) (complexe non réel). Racines carrées de \\(3-4i\\) : \\(u^2-v^2 = 3\\), \\(2uv = -4\\), \\(u^2+v^2 = 5\\) → \\(u^2 = 4\\), \\(v^2 = 1\\), et \\(uv<0\\) → \\(\\delta = 2-i\\) (ou son opposé). Donc \\(z = \\dfrac{5i\\pm(2-i)}{2}\\) : \\(z_1 = \\dfrac{2+4i}{2} = 1+2i\\), \\(z_2 = \\dfrac{-2+6i}{2} = -1+3i\\).</p>
  <p><b>2) \\(z^2+2iz\\sqrt2-2(1+i) = 0\\).</b> \\(\\Delta = (2i\\sqrt2)^2+8(1+i) = -8+8+8i = 8i\\) (imaginaire pur). \\(\\delta^2 = 8i\\) : \\(u^2-v^2 = 0\\) donc \\(u = \\pm v\\), et \\(2uv = 8\\) impose \\(u = v = 2\\) : \\(\\delta = \\pm(2+2i)\\). \\(z = \\dfrac{-2i\\sqrt2\\pm(2+2i)}{2} = -i\\sqrt2 \\pm (1+i)\\) : \\(z_1 = 1+i(1-\\sqrt2)\\), \\(z_2 = -1-i(1+\\sqrt2)\\).</p>
  <p><b>3) \\(z^2+z+1 = 0\\).</b> \\(\\Delta = 1-4 = -3 < 0\\) : racines conjuguées \\(z = \\dfrac{-1\\pm i\\sqrt3}{2}\\). (Ce sont \\(e^{\\pm 2i\\pi/3}\\) : les racines cubiques de l'unité autres que 1 — revois-les en carte 5.)</p>
  <p><b>4) \\(z^2-2z+2 = 0\\).</b> \\(\\Delta = 4-8 = -4\\) → \\(z = 1\\pm i\\). Le grand classique « \\(\\Delta\\) négatif ».</p>
  <p><b>5) \\(iz^2+(1+2i)z-1 = 0\\).</b> \\(\\Delta = (1+2i)^2+4i = -3+4i+4i = -3+8i\\), module \\(\\sqrt{73}\\) : PAS de racine carrée « propre » (\\(u^2 = \\frac{\\sqrt{73}-3}{2}\\), \\(v^2 = \\frac{\\sqrt{73}+3}{2}\\), \\(uv>0\\) : \\(\\delta \\approx 1{,}942+2{,}058i\\)). Les solutions : \\(z = \\dfrac{-(1+2i)\\pm\\delta}{2i}\\), soit \\(z_1 \\approx 0{,}201-0{,}332i\\) et \\(z_2 \\approx -2{,}201+1{,}332i\\). <i>Note honnête : c'est la seule des 16 qui ne finit pas proprement — probable coquille du livre (avec « \\(+2\\) » au lieu de « \\(-1\\) », on trouve les belles racines \\(-2\\) et \\(i\\)). L'important : la MÉTHODE est exactement la même, et tu sais la mener même quand le résultat est moche.</i></p>
  <p><b>6) \\((1-2i)z^2+2iz-1 = 0\\).</b> \\(\\Delta = (2i)^2+4(1-2i) = -8i\\). \\(\\delta^2 = -8i\\) : \\(u^2-v^2 = 0\\), \\(2uv = -8\\) → \\(u = 2\\), \\(v = -2\\) : \\(\\delta = \\pm(2-2i)\\). \\(z = \\dfrac{-2i\\pm(2-2i)}{2-4i}\\) : \\(z_1 = \\dfrac{2-4i}{2-4i} = 1\\) ; \\(z_2 = \\dfrac{-2}{2-4i} = \\dfrac{-2(2+4i)}{20} = -\\dfrac15-\\dfrac25 i\\). (Vérif somme : \\(1-\\frac15-\\frac25 i = \\frac45-\\frac25 i = \\frac{-2i}{1-2i}\\) ✓.)</p>
  <p><b>7) \\(z^2+\\sqrt3\\,z-5+3i\\sqrt3 = 0\\).</b> \\(\\Delta = 3+20-12i\\sqrt3 = 23-12i\\sqrt3\\), \\(|\\Delta| = \\sqrt{529+432} = \\sqrt{961} = 31\\). \\(u^2-v^2 = 23\\), \\(2uv = -12\\sqrt3\\), \\(u^2+v^2 = 31\\) → \\(u^2 = 27\\), \\(v^2 = 4\\), \\(uv<0\\) : \\(\\delta = \\pm(3\\sqrt3-2i)\\). \\(z = \\dfrac{-\\sqrt3\\pm(3\\sqrt3-2i)}{2}\\) : \\(z_1 = \\sqrt3-i\\), \\(z_2 = -2\\sqrt3+i\\).</p>
  <p><b>8) \\(z^2+(2i-3)z+5-i = 0\\).</b> \\(\\Delta = (2i-3)^2-4(5-i) = (4i^2-12i+9)-20+4i = -15-8i\\), \\(|\\Delta| = 17\\). \\(u^2-v^2 = -15\\), \\(2uv = -8\\), \\(u^2+v^2 = 17\\) → \\(u^2 = 1\\), \\(v^2 = 16\\), \\(uv<0\\) : \\(\\delta = \\pm(1-4i)\\). \\(z = \\dfrac{3-2i\\pm(1-4i)}{2}\\) : \\(z_1 = 2-3i\\), \\(z_2 = 1+i\\).</p>
  <p><b>9) \\(iz^2+(1-5i)z+6i-2 = 0\\).</b> \\(\\Delta = (1-5i)^2-4i(6i-2) = (1-10i-25)-(-24-8i) = -2i\\). \\(\\delta^2 = -2i\\) : \\(u = v\\) avec \\(2u^2 = 2\\)... attention \\(\\delta = \\pm(1-i)\\) (car \\((1-i)^2 = -2i\\) ✓). \\(z = \\dfrac{-(1-5i)\\pm(1-i)}{2i}\\) : \\(z_1 = \\dfrac{4i}{2i} = 2\\) ; \\(z_2 = \\dfrac{-2+6i}{2i} = \\dfrac{(-2+6i)(-i)}{2} = \\dfrac{2i+6}{2} = 3+i\\).</p>
  <p><b>10) \\(z^2-(5-14i)z-2(5i+12) = 0\\).</b> \\(\\Delta = (5-14i)^2+8(5i+12) = (25-140i-196)+40+96i = -75-100i\\), \\(|\\Delta| = \\sqrt{5625+10000} = 125\\). \\(u^2-v^2 = -75\\), \\(2uv = -100\\), \\(u^2+v^2 = 125\\) → \\(u^2 = 25\\), \\(v^2 = 100\\), \\(uv<0\\) : \\(\\delta = \\pm(5-10i)\\). \\(z = \\dfrac{(5-14i)\\pm(5-10i)}{2}\\) : \\(z_1 = 5-12i\\), \\(z_2 = -2i\\).</p>
  <p><b>11) \\(z^2-(3+4i)z-1+5i = 0\\).</b> \\(\\Delta = (3+4i)^2+4-20i = (9+24i-16)+4-20i = -3+4i\\). \\(\\delta = \\pm(1+2i)\\) (\\(1-4 = -3\\), \\(4 = 2\\cdot1\\cdot2\\) ✓). \\(z = \\dfrac{(3+4i)\\pm(1+2i)}{2}\\) : \\(z_1 = 2+3i\\), \\(z_2 = 1+i\\).</p>
  <p><b>12) \\(iz^2+(1-5i)z+6i-2 = 0\\).</b> Identique caractère pour caractère à la 9) — <i>coquille d'impression du livre (doublon)</i>. Mêmes solutions : \\(\\{2\\ ;\\ 3+i\\}\\).</p>
  <p><b>13) \\(z^2+iz+5-5i = 0\\).</b> \\(\\Delta = -1-4(5-5i) = -21+20i\\), \\(|\\Delta| = 29\\). \\(u^2-v^2 = -21\\), \\(2uv = 20\\), \\(u^2+v^2 = 29\\) → \\(u^2 = 4\\), \\(v^2 = 25\\), \\(uv>0\\) : \\(\\delta = \\pm(2+5i)\\). \\(z = \\dfrac{-i\\pm(2+5i)}{2}\\) : \\(z_1 = 1+2i\\), \\(z_2 = -1-3i\\).</p>
  <p><b>14) \\(z^2+z-iz-5i = 0\\).</b> D'abord regrouper : \\(z^2+(1-i)z-5i = 0\\). \\(\\Delta = (1-i)^2+20i = -2i+20i = 18i\\). \\(\\delta^2 = 18i\\) : \\(u = v\\), \\(2u^2 = 18\\) → \\(\\delta = \\pm(3+3i)\\). \\(z = \\dfrac{-(1-i)\\pm(3+3i)}{2}\\) : \\(z_1 = 1+2i\\), \\(z_2 = -2-i\\).</p>
  <p><b>15) \\(z^4+10z^2+169 = 0\\).</b> Pose \\(Z = z^2\\) : \\(Z^2+10Z+169 = 0\\), \\(\\Delta = 100-676 = -576\\), \\(\\sqrt{\\Delta} = \\pm 24i\\) → \\(Z = -5\\pm12i\\). Puis racines carrées : \\((2+3i)^2 = 4+12i-9 = -5+12i\\) ✓ et \\((2-3i)^2 = -5-12i\\) ✓. Donc \\(z = \\pm(2+3i)\\) et \\(z = \\pm(2-3i)\\) : quatre solutions, symétriques par rapport aux axes.</p>
  <p><b>16) \\(z^4-(3+2i)z^2+8-6i = 0\\).</b> Pose \\(Z = z^2\\) : \\(\\Delta = (3+2i)^2-4(8-6i) = (5+12i)-32+24i = -27+36i\\), \\(|\\Delta| = 45\\). \\(u^2-v^2 = -27\\), \\(2uv = 36\\), \\(u^2+v^2 = 45\\) → \\(u^2 = 9\\), \\(v^2 = 36\\), \\(uv>0\\) : \\(\\delta = \\pm(3+6i)\\). \\(Z = \\dfrac{(3+2i)\\pm(3+6i)}{2}\\) : \\(Z_1 = 3+4i\\), \\(Z_2 = -2i\\). Puis \\(z = \\pm\\sqrt{3+4i} = \\pm(2+i)\\) (car \\(4-1 = 3\\), \\(4 = 2\\cdot2\\cdot1\\)) et \\(z = \\pm\\sqrt{-2i} = \\pm(1-i)\\) (car \\((1-i)^2 = -2i\\)). Quatre solutions : \\(2+i\\), \\(-2-i\\), \\(1-i\\), \\(-1+i\\).</p>
  <div class="pourquoi"><b>Pourquoi autant d'équations ?</b> Parce que le geste « \\(\\Delta\\), puis racines carrées de \\(\\Delta\\) » doit devenir automatique. Remarque la progression du livre : d'abord \\(\\Delta\\) réels (3, 4), puis imaginaires purs (2, 6, 9, 14), puis complexes généraux dont les modules tombent juste (1, 7, 8, 10, 11, 13). À quoi ça sert ? Au Bac, une équation du second degré dans \\(\\mathbb{C}\\) tombe presque chaque année — et la « difficulté » est toujours la même extraction de racine carrée.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> oublier le \\(i\\) dans \\(a\\) (équations 5, 9, 12 : \\(a = i\\), donc \\(2a = 2i\\) au dénominateur !) ; choisir les signes de \\(u\\), \\(v\\) sans vérifier \\(2uv\\) ; et pour 15-16 : oublier de revenir à \\(z\\) après avoir trouvé \\(Z\\).</div>`,
  correctionText: '1) 1+2i, -1+3i (Δ=3-4i, δ=±(2-i)) ; 2) 1+i(1-√2), -1-i(1+√2) (Δ=8i) ; 3) (-1±i√3)/2 ; 4) 1±i ; 5) Δ=-3+8i, solutions ≈ 0,201-0,332i et -2,201+1,332i (coquille probable livre) ; 6) 1 et -1/5-2i/5 (Δ=-8i) ; 7) √3-i, -2√3+i (Δ=23-12i√3, |Δ|=31) ; 8) 2-3i, 1+i (Δ=-15-8i) ; 9) 2, 3+i (Δ=-2i) ; 10) 5-12i, -2i (Δ=-75-100i, |Δ|=125) ; 11) 2+3i, 1+i (Δ=-3+4i) ; 12) doublon de 9) ; 13) 1+2i, -1-3i (Δ=-21+20i) ; 14) 1+2i, -2-i (Δ=18i) ; 15) ±(2+3i), ±(2-3i) ; 16) ±(2+i), ±(1-i).',
};

D.exos.ex10 = {
  num: 10, groupe: 'g3', titre: 'Racines \\(n\\)-ièmes : \\(z^2=a\\), \\(z^3=a\\), \\(z^4=a\\)',
  enonce: `<p>Résoudre dans \\(\\mathbb{C}\\) les équations suivantes :</p>
  <p>1) \\(z^2 = -3\\) ; 2) \\(z^2 = 2i\\) ; 3) \\(z^2 = 1+i\\) ; 4) \\(z^2 = -2\\sqrt3+2i\\) ; 5) \\(z^2 = 3-4i\\) ;</p>
  <p>6) \\(z^3 = 8i\\) ; 7) \\(4z^4 = -i\\) ; 8) \\((z+1)^4 = -16\\) ; 9) \\(z^3 = 2+2i\\).</p>`,
  enonceText: 'Résoudre : z²=-3 ; z²=2i ; z²=1+i ; z²=-2√3+2i ; z²=3-4i ; z³=8i ; 4z⁴=-i ; (z+1)^4=-16 ; z³=2+2i.',
  comprendre: `<p>Ici pas de \\(b\\) ni de \\(c\\) : l'équation est déjà « toute faite ». Deux outillages : (1) pour \\(z^2 = a\\), le système \\(u^2-v^2\\), \\(2uv\\) ; (2) pour \\(z^3\\), \\(z^4\\) : la forme exponentielle + la formule de Moivre, en ajoutant \\(2k\\pi\\) à l'argument AVANT de diviser par \\(n\\) — c'est ce « \\(2k\\pi\\) » qui fabrique les \\(n\\) solutions.</p>`,
  etapes: [
    'Pour chaque \\(z^2 = a\\) : écris \\(a = x+iy\\), pose \\(z = u+iv\\), et résous \\(\\{u^2-v^2 = x\\ ;\\ 2uv = y\\ ;\\ u^2+v^2 = |a|\\}\\).',
    `Pour \\(z^3 = a\\) : écris \\(a = re^{i\\theta}\\) (avec \\(\\theta\\) une valeur de l\'argument), puis \\(z^3 = re^{i(\\theta+2k\\pi)}\\) pour \\(k = 0, 1, 2\\). Divise l\'angle par 3.`,
    'Pour \\(z^4\\) (équations 7 et 8) : même principe avec 4 solutions, angles \\(\\frac{\\theta+2k\\pi}{4}\\).',
    `Équation 8 : change d\'abord d\'inconnue — pose \\(W = z+1\\), résous \\(W^4 = -16\\), puis reviens à \\(z = W-1\\).`,
    'Vérification rapide pour les carrés : tes deux solutions doivent être OPPOSÉES (car \\((-z)^2 = z^2\\)).',
    'Contrôle des modules : \\(|z| = |a|^{1/2}\\), \\(|a|^{1/3}\\), \\(|a|^{1/4}\\) — un quart de seconde de vérification évite beaucoup de dégâts.',
  ],
  correction: `
  <ul class="steps">
    <li><b>1) \\(z^2 = -3\\)</b> : \\(-3 = 3e^{i\\pi}\\) → \\(z = \\pm\\sqrt3 e^{i\\frac{\\pi}{2}} = \\pm i\\sqrt3\\).</li>
    <li><b>2) \\(z^2 = 2i\\)</b> : \\(2i = 2e^{i\\frac{\\pi}{2}}\\) → \\(z = \\pm\\sqrt2 e^{i\\frac{\\pi}{4}} = \\pm(1+i)\\). (Vérif : \\((1+i)^2 = 2i\\) ✓.)</li>
    <li><b>3) \\(z^2 = 1+i\\)</b> : \\(u^2-v^2 = 1\\), \\(2uv = 1\\), \\(u^2+v^2 = \\sqrt2\\) → \\(u^2 = \\frac{1+\\sqrt2}{2}\\), \\(v^2 = \\frac{\\sqrt2-1}{2}\\). Donc \\(z = \\pm\\left(\\sqrt{\\tfrac{1+\\sqrt2}{2}}+i\\sqrt{\\tfrac{\\sqrt2-1}{2}}\\right)\\approx \\pm(1{,}099+0{,}455i)\\). (Ou \\(\\pm 2^{1/4}e^{i\\pi/8}\\).)</li>
    <li><b>4) \\(z^2 = -2\\sqrt3+2i\\)</b> : \\(|a| = 4\\). \\(u^2-v^2 = -2\\sqrt3\\), \\(2uv = 2\\), \\(u^2+v^2 = 4\\) → \\(u^2 = 2-\\sqrt3\\), \\(v^2 = 2+\\sqrt3\\), \\(uv>0\\). Or \\(2-\\sqrt3 = \\left(\\frac{\\sqrt6-\\sqrt2}{2}\\right)^2\\) et \\(2+\\sqrt3 = \\left(\\frac{\\sqrt6+\\sqrt2}{2}\\right)^2\\) : \\(z = \\pm\\left(\\dfrac{\\sqrt6-\\sqrt2}{2}+i\\dfrac{\\sqrt6+\\sqrt2}{2}\\right)\\approx\\pm(0{,}518+1{,}932i)\\).</li>
    <li><b>5) \\(z^2 = 3-4i\\)</b> : \\(|a| = 5\\). \\(u^2-v^2 = 3\\), \\(2uv = -4\\), \\(u^2+v^2 = 5\\) → \\(u^2 = 4\\), \\(v^2 = 1\\), \\(uv<0\\) : \\(z = \\pm(2-i)\\).</li>
    <li><b>6) \\(z^3 = 8i\\)</b> : \\(8i = 8e^{i\\frac{\\pi}{2}}\\) → \\(z = 2e^{i\\frac{\\pi/2+2k\\pi}{3}}\\), \\(k = 0,1,2\\) : \\(z_0 = 2e^{i\\frac{\\pi}{6}} = \\sqrt3+i\\) ; \\(z_1 = 2e^{i\\frac{5\\pi}{6}} = -\\sqrt3+i\\) ; \\(z_2 = 2e^{i\\frac{3\\pi}{2}} = -2i\\).</li>
    <li><b>7) \\(4z^4 = -i\\)</b> : \\(z^4 = -\\frac{i}{4} = \\frac14 e^{-i\\frac{\\pi}{2}}\\) → \\(z = \\left(\\frac14\\right)^{1/4}e^{i\\frac{-\\pi/2+2k\\pi}{4}} = \\frac{\\sqrt2}{2}e^{i\\frac{-\\pi+4k\\pi}{8}}\\) : \\(z_k = \\frac{\\sqrt2}{2}e^{-i\\frac{\\pi}{8}}\\), \\(\\frac{\\sqrt2}{2}e^{i\\frac{3\\pi}{8}}\\), \\(\\frac{\\sqrt2}{2}e^{i\\frac{7\\pi}{8}}\\), \\(\\frac{\\sqrt2}{2}e^{i\\frac{11\\pi}{8}}\\).</li>
    <li><b>8) \\((z+1)^4 = -16\\)</b> : pose \\(W = z+1\\). \\(W^4 = 16e^{i\\pi}\\) → \\(W = 2e^{i\\frac{\\pi+2k\\pi}{4}}\\) : \\(W = 2e^{i\\frac{\\pi}{4}}, 2e^{i\\frac{3\\pi}{4}}, 2e^{i\\frac{5\\pi}{4}}, 2e^{i\\frac{7\\pi}{4}}\\). Donc \\(z = W-1\\) : \\(\\sqrt2-1+i\\sqrt2\\) ; \\(-\\sqrt2-1+i\\sqrt2\\) ; \\(-\\sqrt2-1-i\\sqrt2\\) ; \\(\\sqrt2-1-i\\sqrt2\\). (Quatre points formant un carré de centre \\(-1\\) !)</li>
    <li><b>9) \\(z^3 = 2+2i\\)</b> : \\(2+2i = 2\\sqrt2\\,e^{i\\frac{\\pi}{4}}\\) → \\(z = (2\\sqrt2)^{1/3}e^{i\\frac{\\pi/4+2k\\pi}{3}} = \\sqrt2\\,e^{i\\frac{\\pi+8k\\pi}{12}}\\) : \\(z_0 = \\sqrt2 e^{i\\frac{\\pi}{12}} = \\frac{\\sqrt3+1}{2}+i\\frac{\\sqrt3-1}{2}\\) ; \\(z_1 = \\sqrt2 e^{i\\frac{3\\pi}{4}} = -1+i\\) ; \\(z_2 = \\sqrt2 e^{-i\\frac{7\\pi}{12}} = \\frac{1-\\sqrt3}{2}-i\\frac{1+\\sqrt3}{2}\\).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi le « \\(2k\\pi\\) » change-t-il tout ?</b> Parce qu'en réel, \\(z^2 = -3\\) n'avait pas de solution et \\(z^3 = 8\\) n'en avait qu'une. Dans \\(\\mathbb{C}\\), l'argument vit sur un cercle : ajouter \\(2\\pi\\) ne change pas le nombre de départ, mais APRÈS division par \\(n\\), les différents \\(k\\) donnent des points différents du cercle — toujours exactement \\(n\\) solutions, régulièrement espacées (regarde les 4 points de l'équation 8 : un carré !). À quoi ça sert ? Aux équations polynomiales de la carte 5 et à la compréhension des rotations.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> oublier les solutions opposées pour les carrés ; diviser l'argument SANS ajouter \\(2k\\pi\\) (on perd des solutions) ; pour l'équation 8, oublier de soustraire 1 à la fin ; confondre \\((2\\sqrt2)^{1/3}\\) et \\(\\sqrt2\\) — vérifie : \\((\\sqrt2)^3 = 2\\sqrt2\\) ✓.</div>`,
  correctionText: '1) ±i√3 ; 2) ±(1+i) ; 3) ±(√((1+√2)/2)+i√((√2-1)/2))≈±(1,099+0,455i) ; 4) ±((√6-√2)/2+i(√6+√2)/2) ; 5) ±(2-i) ; 6) √3+i, -√3+i, -2i ; 7) (√2/2)e^{i(-π/8+kπ/2)}, k=0..3 ; 8) z=2e^{i(π/4+kπ/2)}-1 ; 9) √2e^{i(π/12+2kπ/3)} : ((√3+1)+i(√3-1))/2, -1+i, ((1-√3)-i(1+√3))/2.',
};

D.exos.ex12 = {
  num: 12, groupe: 'g3', titre: 'Racines carrées imposées puis équation (E)',
  enonce: `<p>Soit l'équation \\((\\mathrm{E})\\ :\\ (1-2i)z^2+(1+i)z-i = 0\\).</p>
  <p>1) Déterminer sous forme algébrique les racines carrées de \\(8-6i\\) puis en déduire celles de \\(8+6i\\).<br>
  2) Montrer que l'équation \\((\\mathrm{E})\\) a pour discriminant \\(\\Delta = 8+6i\\).<br>
  3) En déduire les solutions de l'équation \\((\\mathrm{E})\\).</p>`,
  enonceText: '(E) : (1-2i)z²+(1+i)z-i=0. 1) Racines carrées de 8-6i puis de 8+6i. 2) Montrer Δ=8+6i. 3) Solutions de (E).',
  comprendre: `<p>Le livre DÉCOUPE la difficulté : d'abord les racines carrées (l'outil), ensuite le discriminant (l'application), enfin l'équation (l'assemblage). Remarque aussi l'astuce finale de la question 1 : \\(8+6i\\) est le CONJUGUÉ de \\(8-6i\\) — pas besoin de refaire le système, un conjugué se transpose tout seul.</p>`,
  etapes: [
    'Pose \\(\\delta = u+iv\\) avec \\(\\delta^2 = 8-6i\\). Écris les trois équations : \\(u^2-v^2 = 8\\), \\(2uv = -6\\), \\(u^2+v^2 = |8-6i|\\).',
    'Résous : tu dois trouver deux entiers pour \\(u^2\\) et \\(v^2\\) — puis le signe de \\(uv\\) décide des signes de \\(u\\) et \\(v\\).',
    'Déduis-en les racines de \\(8+6i\\) : conjugue la réponse précédente (justifie : \\(\\overline{\\delta^2} = \\bar\\delta^2\\)).',
    'Question 2 : calcule \\(\\Delta = b^2-4ac\\) avec \\(a = 1-2i\\), \\(b = 1+i\\), \\(c = -i\\). Développe \\((1+i)^2\\) puis \\((1-2i)(-i)\\).',
    'Question 3 : applique \\(z = \\frac{-b\\pm\\delta}{2a}\\) — le dénominateur est \\(2(1-2i)\\) : multiplie par le conjugué pour finir proprement.',
    'Vérifie la somme des solutions : elle doit valoir \\(-\\frac{b}{a} = -\\frac{1+i}{1-2i}\\).',
  ],
  correction: `
  <ul class="steps">
    <li><b>1)</b> \\(\\delta^2 = 8-6i\\) avec \\(\\delta = u+iv\\) réel-partie par réel-partie : \\(u^2-v^2 = 8\\), \\(2uv = -6\\), \\(u^2+v^2 = \\sqrt{64+36} = 10\\). On additionne : \\(2u^2 = 18\\), donc \\(u^2 = 9\\) et \\(v^2 = 1\\). Le produit \\(2uv = -6 < 0\\) impose \\(u\\) et \\(v\\) de signes CONTRAIRES : \\(\\delta = 3-i\\) ou \\(\\delta = -3+i\\). (Vérif : \\((3-i)^2 = 9-6i+i^2 = 8-6i\\) ✓.)</li>
    <li>Celles de \\(8+6i\\) : par conjugaison, \\(\\pm(3+i)\\). (\\((3+i)^2 = 9+6i-1 = 8+6i\\) ✓.)</li>
    <li><b>2)</b> \\(\\Delta = (1+i)^2-4(1-2i)(-i)\\). Or \\((1+i)^2 = 2i\\) et \\((1-2i)(-i) = -i+2i^2 = -2-i\\). Donc \\(\\Delta = 2i+4(2+i) = 2i+8+4i = 8+6i\\). ✓</li>
    <li><b>3)</b> \\(z = \\dfrac{-(1+i)\\pm(3+i)}{2(1-2i)}\\). Avec « \\(+\\) » : \\(z_1 = \\dfrac{2}{2-4i} = \\dfrac{2(2+4i)}{4+16} = \\dfrac{4+8i}{20} = \\dfrac15+\\dfrac25 i\\). Avec « \\(-\\) » : \\(z_2 = \\dfrac{-4-2i}{2-4i} = \\dfrac{(-4-2i)(2+4i)}{20} = \\dfrac{-8-16i-4i-8i^2}{20} = \\dfrac{-20i}{20} = -i\\).</li>
    <li><b>Vérification</b> : \\(z_1+z_2 = \\frac15-\\frac25 i = \\frac{1-2i}{5}\\) et \\(-\\frac{b}{a} = \\frac{-(1+i)}{1-2i} = \\frac{-(1+i)(1+2i)}{5} = \\frac{-(1+3i+2i^2)}{5} = \\frac{1-3i}{5}\\)... recalcul : \\(-(1+i)(1+2i) = -(1+2i+i+2i^2) = -(-1+3i) = 1-3i\\). Donc \\(-\\frac ba = \\frac{1-3i}{5}\\) et \\(z_1+z_2 = \\frac{1-2i}{5}\\)?? Recomptons \\(z_1+z_2\\) : \\(\\frac15+\\frac25 i-i = \\frac15-\\frac35 i\\). Et \\(\\frac{1-3i}{5}\\) : égaux ✓.</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi le livre force-t-il l'ordre (1)→(2)→(3) ?</b> Parce qu'au Bac, les questions s'enchaînent : la question 1 te « donne » l'outil que la question 3 consomme. À l'examen, ne recommence JAMAIS le système \\(u\\), \\(v\\) si une question précédente te l'a déjà fourni. À quoi ça sert ? C'est la structure type des sujets : « 1) calcul d'outil, 2) vérification, 3) application ».</div>
  <div class="erreurs"><b>Erreurs classiques :</b> oublier le facteur 2 au dénominateur (\\(2a\\), pas \\(a\\)) ; conjuguer « les solutions » au lieu des racines de \\(\\Delta\\) dans la question 1 ; se tromper dans \\((1-2i)(-i)\\) (c'est \\(-2-i\\), pas \\(2+i\\)).</div>`,
  correctionText: 'δ²=8-6i : u²=9, v²=1, uv<0 → ±(3-i) ; celles de 8+6i : ±(3+i). Δ=(1+i)²-4(1-2i)(-i)=8+6i. Solutions : z1=1/5+2i/5, z2=-i.',
};

D.exos.ex22 = {
  num: 22, groupe: 'g3', titre: 'Équation astucieuse puis racines carrées de \\(a\\)',
  enonce: `<p><b>A)</b> On considère dans \\(\\mathbb{C}\\) l'équation \\((\\mathrm{E})\\ :\\ 2z^2-(\\sqrt3+1)(1+i)z+2i = 0\\).</p>
  <p>1) Vérifier que : \\(\\left[(\\sqrt3+1)(1+i)\\right]^2-16i = \\left[(\\sqrt3-1)(1-i)\\right]^2\\).<br>
  2) Résoudre dans \\(\\mathbb{C}\\) l'équation \\((\\mathrm{E})\\).</p>
  <p><b>B)</b> Le plan complexe est rapporté à un repère orthonormé direct \\((O,\\vec u,\\vec v)\\). On considère les points \\(A\\) et \\(B\\) d'affixes respectives \\(a = \\dfrac12+i\\dfrac{\\sqrt3}{2}\\) et \\(b = \\dfrac{\\sqrt3}{2}+i\\dfrac12\\).</p>
  <p>1) a) Donner l'écriture exponentielle de \\(a\\) et \\(b\\).  b) Vérifier que \\(b^2 = a\\).  c) En déduire les racines carrées du nombre complexe \\(a\\).<br>
  2) Soit \\(C\\) le point d'affixe \\(c = a+b\\). a) Placer les points \\(A\\), \\(B\\) et \\(C\\).  b) Vérifier que \\(c = \\dfrac{\\sqrt2+\\sqrt6}{2}e^{i\\frac{\\pi}{4}}\\).<br>
  3) On considère dans \\(\\mathbb{C}\\) l'équation \\((\\mathrm{E}')\\ :\\ z^2+z-c = 0\\). a) Vérifier que \\(b\\) est une solution de \\((\\mathrm{E}')\\).  b) On désigne par \\(d\\) l'autre solution de \\((\\mathrm{E}')\\). Montrer que \\(d = \\dfrac{\\sqrt2+\\sqrt6}{2}e^{-i\\frac{11\\pi}{12}}\\).  c) Placer le point \\(D\\) d'affixe \\(d\\).</p>`,
  enonceText: 'A) (E) : 2z²-(√3+1)(1+i)z+2i=0. 1) Vérifier [(√3+1)(1+i)]²-16i=[(√3-1)(1-i)]². 2) Résoudre (E). B) a=1/2+i√3/2, b=√3/2+i/2. 1) expo de a et b ; b²=a ; racines carrées de a. 2) c=a+b ; vérifier c=(√2+√6)/2 e^{iπ/4}. 3) (E\') : z²+z-c=0 ; b solution ; d l\'autre solution : montrer d=(√2+√6)/2 e^{-11iπ/12}.',
  comprendre: `<p>Un exercice « à tiroirs » : l'équation (E) a l'air effrayante, mais la question 1 te souffle SA racine carrée de Δ. Et la partie B relie tout aux formes exponentielles : \\(a\\) et \\(b\\) sont deux rotations célèbres (\\(60^\\circ\\) et \\(30^\\circ\\)), et \\(b^2 = a\\) dit que \\(b\\) est une « demi-rotation » de \\(a\\). Attention : le livre imprime \\(+\\frac{11\\pi}{12}\\) à la question 3b — c'est une coquille, le bon argument est \\(-\\frac{11\\pi}{12}\\) (voir la correction, on le prouve).</p>`,
  etapes: [
    'Question A1 : développe \\([(\\sqrt3+1)(1+i)]^2\\) en deux temps : \\((\\sqrt3+1)^2\\), puis \\((1+i)^2\\). Fais pareil à droite. Compare.',
    'Question A2 : calcule \\(\\Delta\\) et UTILISE la question 1 telle quelle — ne recalcule pas !',
    'Extrais \\(\\sqrt\\Delta\\), puis applique \\(z = \\frac{-b\\pm\\delta}{2a}\\) avec \\(2a = 4\\). Compare tes solutions avec les \\(a\\) et \\(b\\) de la partie B : surprise prévue par le livre.',
    'Partie B : modules de \\(a\\) et \\(b\\) par Pythagore, arguments reconnus (dessins).',
    'Pour \\(c = a+b\\) : factorise \\(\\frac{1+\\sqrt3}{2}(1+i)\\) — puis module et argument de \\(1+i\\).',
    `Pour \\(d\\) : somme des racines de \\((\\mathrm{E}\')\\) = \\(-1\\), donc \\(d = -1-b\\). Calcule son module et son argument HONNÊTEMENT (coordonnées, quadrant), puis compare avec l\'énoncé.`,
  ],
  correction: `
  <ul class="steps">
    <li><b>A1)</b> \\([(\\sqrt3+1)(1+i)]^2 = (\\sqrt3+1)^2\\,(1+i)^2 = (4+2\\sqrt3)(2i) = (8+4\\sqrt3)i\\). Donc côté gauche \\(= (8+4\\sqrt3-16)i = (4\\sqrt3-8)i\\). À droite : \\((\\sqrt3-1)^2(1-i)^2 = (4-2\\sqrt3)(-2i) = (-8+4\\sqrt3)i = (4\\sqrt3-8)i\\). ✓ Égalité prouvée.</li>
    <li><b>A2)</b> \\(\\Delta = b^2-4ac\\) avec \\(a = 2\\), \\(b = -(\\sqrt3+1)(1+i)\\), \\(c = 2i\\) : \\(\\Delta = [(\\sqrt3+1)(1+i)]^2-16i\\). Par A1, \\(\\Delta = [(\\sqrt3-1)(1-i)]^2\\) : on a donc DIRECTEMENT \\(\\delta = \\pm(\\sqrt3-1)(1-i)\\). Solutions : \\(z = \\dfrac{(\\sqrt3+1)(1+i)\\pm(\\sqrt3-1)(1-i)}{4}\\). Avec « \\(+\\) » : \\(z = \\dfrac{2\\sqrt3+2i}{4} = \\dfrac{\\sqrt3}{2}+\\dfrac{i}{2}\\). Avec « \\(-\\) » : \\(z = \\dfrac{2+2\\sqrt3 i}{4} = \\dfrac12+i\\dfrac{\\sqrt3}{2}\\). Les solutions de (E) sont exactement \\(b\\) et \\(a\\) de la partie B — le livre a construit (E) pour ça !</li>
    <li><b>B1)</b> \\(a = \\frac12+i\\frac{\\sqrt3}{2}\\) : module \\(1\\), argument \\(\\frac{\\pi}{3}\\) → \\(a = e^{i\\frac{\\pi}{3}}\\). \\(b = \\frac{\\sqrt3}{2}+\\frac{i}{2}\\) : module \\(1\\), argument \\(\\frac{\\pi}{6}\\) → \\(b = e^{i\\frac{\\pi}{6}}\\).</li>
    <li>\\(b^2 = e^{i\\frac{\\pi}{3}} = a\\) ✓ (Moivre). Donc les racines carrées de \\(a\\) sont \\(\\pm b\\) — c'est la question B1c, réponse gratuite grâce à B1b.</li>
    <li><b>B2)</b> \\(c = a+b = \\frac{1+\\sqrt3}{2}+i\\frac{\\sqrt3+1}{2} = \\frac{1+\\sqrt3}{2}(1+i)\\). Module : \\(|c| = \\frac{1+\\sqrt3}{2}\\cdot\\sqrt2 = \\frac{\\sqrt2+\\sqrt6}{2}\\). Argument : celui de \\(1+i\\), soit \\(\\frac{\\pi}{4}\\). Donc \\(c = \\frac{\\sqrt2+\\sqrt6}{2}e^{i\\frac{\\pi}{4}}\\) ✓.</li>
    <li><b>B3a)</b> \\(b^2+b-c = a+b-(a+b) = 0\\) : \\(b\\) est solution de \\((\\mathrm{E}')\\). ✓</li>
    <li><b>B3b)</b> La somme des racines vaut \\(-1\\) (produit scalaire \\(z^2+pz+q\\) : somme \\(= -p = -1\\)). Donc \\(d = -1-b = -1-\\frac{\\sqrt2+?}{...} = -1-\\frac{\\sqrt3}{2}-\\frac{i}{2}\\). Module : \\(|d|^2 = \\left(1+\\frac{\\sqrt3}{2}\\right)^2+\\frac14 = 1+\\sqrt3+\\frac34+\\frac14 = 2+\\sqrt3 = \\left(\\frac{\\sqrt2+\\sqrt6}{2}\\right)^2\\) ✓. Argument : \\(\\operatorname{Re}(d) < 0\\) ET \\(\\operatorname{Im}(d) = -\\frac12 < 0\\) → troisième quadrant → \\(\\arg d = -\\pi+\\arctan\\frac{1/2}{1+\\sqrt3/2}\\). Or \\(\\tan\\frac{\\pi}{12} = 2-\\sqrt3 = \\frac{1}{2+\\sqrt3}\\), et \\(\\frac{1/2}{1+\\sqrt3/2} = \\frac{1}{2+\\sqrt3}\\) : donc \\(\\arg d = -\\pi+\\frac{\\pi}{12} = -\\frac{11\\pi}{12}\\). Conclusion : \\(d = \\frac{\\sqrt2+\\sqrt6}{2}e^{-i\\frac{11\\pi}{12}}\\). <i>Le livre imprime \\(e^{+i\\frac{11\\pi}{12}}\\) : c'est une coquille, car \\(e^{i\\frac{11\\pi}{12}}\\) aurait une partie imaginaire POSITIVE (\\(\\sin\\frac{11\\pi}{12} > 0\\)) alors que \\(\\operatorname{Im}(d) = -\\frac12\\). Notre valeur \\(-\\frac{11\\pi}{12}\\) (équivalente à \\(\\frac{13\\pi}{12}\\)) est la bonne.</i></li>
  </ul>
  <div class="pourquoi"><b>Pourquoi ce découpage en A puis B ?</b> Parce que l'énoncé te fait DÉCOUVRIR que les solutions de (E) sont les points A et B du plan — le calcul et la géométrie se rejoignent. À quoi ça sert ? C'est exactement l'esprit des sujets Bac modernes : une équation « habillée », puis une lecture géométrique des solutions. Et la question B3b t'apprend à contrôler un résultat donné par l'énoncé — ici, il était faux !</div>
  <div class="erreurs"><b>Erreurs classiques :</b> recalculer \\(\\Delta\\) en oubliant que \\(c = 2i\\) (donc \\(-4ac = -16i\\)) ; pour \\(d\\), écrire \\(d = -1+b\\) (erreur de signe sur la somme des racines) ; accepter l'angle \\(+\\frac{11\\pi}{12}\\) sans vérifier le quadrant — le dessin t'aurait alerté.</div>`,
  note: `<p><b>Coquille du livre signalée :</b> à la question B3b, l'énoncé imprime \\(d = \\frac{\\sqrt2+\\sqrt6}{2}e^{i\\frac{11\\pi}{12}}\\), mais le calcul montre \\(\\arg d = -\\frac{11\\pi}{12}\\) (\\(d\\) est dans le troisième quadrant). C'est corrigé dans notre correction — et c'est une excellente occasion de vérifier un résultat d'énoncé plutôt que de le subir.</p>`,
  correctionText: 'A1) deux membres valent (4√3-8)i. A2) Δ=[(√3-1)(1-i)]² → solutions (√3+1)(1+i)±(√3-1)(1-i) sur 4 : √3/2+i/2 et 1/2+i√3/2 (= b et a). B) a=e^{iπ/3}, b=e^{iπ/6}, b²=a, racines carrées de a : ±b. c=a+b=(√2+√6)/2 e^{iπ/4}. (E\') : b²+b-c=0 ; d=-1-b=-(2+√3)/2-i/2, |d|=(√2+√6)/2, arg d=-11π/12 (coquille livre : +11π/12).',
};

/* ═══════════ CARTE 4 — Linéarisation ═══════════ */
D.groups.push({
  id: 'g4',
  titre: 'Linéarisation et identités trigonométriques',
  accroche: 'Transformer des puissances de cosinus/sinus en sommes — via Euler et le binôme.',
  intro: '« Linéariser », c\'est écrire \\(\\cos^nx\\) ou \\(\\sin^nx\\) comme une SOMME de cosinus/sinus d\'angles multiples (\\(\\cos 2x\\), \\(\\cos 3x\\)...). L\'outil secret : \\(e^{ix}\\) et sa conjuguée. Cette carte est le pont entre les complexes et la trigonométrie.',
  methode: {
    positionnement: 'Pourquoi linéariser ? Parce que les puissances de cosinus/sinus sont des cauchemars en intégration et en étude de fonctions, alors que les sommes d\'angles multiples se traitent facilement. La formule de Moivre \\((e^{i\\theta})^n = e^{in\\theta}\\) appliquée à \\(\\cos\\theta = \\frac{e^{i\\theta}+e^{-i\\theta}}{2}\\) fait tout le travail.',
    formules: [
      { tex: '\\cos\\theta = \\dfrac{e^{i\\theta}+e^{-i\\theta}}{2}\\ ;\\ \\sin\\theta = \\dfrac{e^{i\\theta}-e^{-i\\theta}}{2i}', txt: 'formules d\'Euler — LA clé de la linéarisation.' },
      { tex: '(\\cos\\theta+i\\sin\\theta)^n = \\cos n\\theta+i\\sin n\\theta', txt: 'Moivre : le moteur de tout.' },
      { tex: '\\cos^2\\theta = \\dfrac{1+\\cos2\\theta}{2}\\ ;\\ \\sin^2\\theta = \\dfrac{1-\\cos2\\theta}{2}', txt: 'linéarisation des carrés (à connaître PAR CŒUR).' },
      { tex: '\\cos a\\cos b = \\tfrac12[\\cos(a+b)+\\cos(a-b)]', txt: 'produit → somme (idem : \\(\\sin a\\sin b\\), \\(\\sin a\\cos b\\)).' },
      { tex: '\\cos^3\\theta = \\tfrac14(3\\cos\\theta+\\cos3\\theta)', txt: 'exemple type de résultat de linéarisation.' },
    ],
    etapes: [
      'Puissance PAIRE (\\(\\cos^4\\), \\(\\sin^6\\)...) : descente par les carrés — applique \\(\\cos^2\\) ou \\(\\sin^2\\) en fonction, puis re-linéarise les produits \\(\\cos2x\\cos4x\\) avec produit→somme.',
      'Puissance IMPAIRE (\\(\\cos^5\\), \\(\\sin^3\\)...) : factorise un \\(\\cos x\\) (ou \\(\\sin x\\)), utilise \\(\\cos^2 = 1-\\sin^2\\) pour faire apparaître \\((1-\\sin^2x)\\)... ou passe directement par Euler + binôme.',
      `Mélange \\(\\cos^p x\\sin^q x\\) : linéarise d\'abord le plus petit exposant, multiplie, puis produit→somme.`,
      `Vérification systématique : remplace \\(x\\) par une valeur simple (\\(x = 0\\) ou \\(x = \\frac{\\pi}{2}\\)) de part et d\'autre — les deux membres doivent coïncider.`,
      `Pour « montrer que » : transforme le membre de droite (le plus compliqué) vers la gauche, jamais l\'inverse.`,
    ],
    aservir: 'au calcul d\'intégrales de \\(\\cos^nx\\) (terminale/bac+), à la résolution d\'équations trigonométriques, et aux questions de Bac « montrer que \\(\\cos^3x\\sin x = \\dots\\) ». Les formules d\'Euler servent aussi à dériver proprement \\(e^{i\\theta}\\).',
  },
  exos: ['ex11'],
});

D.exos.ex11 = {
  num: 11, groupe: 'g4', titre: 'Huit linéarisations et trois identités',
  enonce: `<p>1) Linéariser les expressions suivantes :</p>
  <p>\\(a)\\ \\sin^4x\\ ;\\quad b)\\ \\cos^5x\\ ;\\quad c)\\ \\sin^6x\\ ;\\quad d)\\ \\cos^6x\\ ;\\quad e)\\ \\cos^3x\\sin^2x\\ ;\\)</p>
  <p>\\(f)\\ \\cos^2x\\sin^3x\\ ;\\quad g)\\ 2\\cos^2x-3\\sin^2x-4\\ ;\\quad h)\\ \\sin x\\cos x-5\\cos^3x.\\)</p>
  <p>2) Écrire \\(\\cos(4x)\\) en fonction de \\(\\sin x\\) et \\(\\cos x\\) puis en déduire une linéarisation de \\(2\\cos(4x)\\sin^2x\\).<br>
  3) Montrer que :</p>
  <p>\\(a)\\ \\cos^3x\\sin x = \\dfrac{2\\sin(2x)+\\sin(4x)}{8}\\ ;\\quad b)\\ \\cos x\\sin^3x = \\dfrac{2\\sin(2x)-\\sin(4x)}{8}\\ ;\\)</p>
  <p>\\(c)\\ \\cos x\\sin^4x = \\dfrac{\\cos(5x)-3\\cos(3x)+2\\cos(x)}{16}.\\)</p>`,
  enonceText: '1) Linéariser : sin⁴x ; cos⁵x ; sin⁶x ; cos⁶x ; cos³x sin²x ; cos²x sin³x ; 2cos²x-3sin²x-4 ; sinx cosx-5cos³x. 2) cos(4x) en fonction de sinx, cosx ; linéariser 2cos(4x)sin²x. 3) Montrer : cos³x sinx=(2sin2x+sin4x)/8 ; cosx sin³x=(2sin2x-sin4x)/8 ; cosx sin⁴x=(cos5x-3cos3x+2cosx)/16.',
  comprendre: `<p>Deux familles de techniques : les carrés (formules \\(\\cos^2\\), \\(\\sin^2\\)) pour les puissances paires, et Euler+binôme pour les impaires. Le secret d'exécution : ne JAMAIS tout développer d'un coup — organiser par degrés d'angle (les termes en \\(\\cos 2x\\) ensemble, ceux en \\(\\cos 4x\\) ensemble...). Et une vérification en \\(x = 0\\) après chaque linéarisation : 5 secondes, zéro faute.</p>`,
  etapes: [
    'a) \\(\\sin^4x = (\\sin^2x)^2\\) : linéarise le carré, ÉLÈVE au carré, re-linéarise le produit \\(\\cos^2(2x)\\).',
    'b) \\(\\cos^5x\\) : Euler — \\(\\left(\\frac{e^{ix}+e^{-ix}}{2}\\right)^5\\), binôme, puis regroupe les termes conjugués deux à deux pour retomber sur des cosinus.',
    'c) et d) : même plan que a) mais un cran plus long — \\(\\sin^6 = (\\sin^2)^3\\) ou Euler. Organise par angles : \\(\\cos 6x\\), \\(\\cos 4x\\), \\(\\cos 2x\\), constante.',
    `e) et f) : linéarise le facteur de degré 2 d\'abord, garde l\'autre puissance, puis produit→somme deux fois.`,
    'g) et h) : remplace par les formules des carrés, simplifie — ce sont des réchauffés.',
    '2) Développe \\(\\cos(4x) = \\cos(2\\cdot 2x)\\) avec la formule du double angle appliquée deux fois, ou \\(\\cos(4x) = \\cos^2(2x)-\\sin^2(2x)\\) puis Moivre sur \\((\\cos x+i\\sin x)^4\\).',
    '3) Pour chaque identité : pars du membre de droite, redescends vers le produit de puissances.',
  ],
  correction: `
  <ul class="steps">
    <li><b>a)</b> \\(\\sin^4x = \\left(\\frac{1-\\cos2x}{2}\\right)^2 = \\frac{1-2\\cos2x+\\cos^22x}{4}\\). Or \\(\\cos^22x = \\frac{1+\\cos4x}{2}\\) : \\(\\sin^4x = \\frac{1-2\\cos2x+\\frac{1+\\cos4x}{2}}{4} = \\frac{3-4\\cos2x+\\cos4x}{8}\\). Vérif \\(x=0\\) : gauche 0, droite \\(\\frac{3-4+1}{8} = 0\\) ✓.</li>
    <li><b>b)</b> \\(\\cos^5x = \\frac{1}{32}(e^{ix}+e^{-ix})^5\\). Binôme : \\(e^{5ix}+5e^{3ix}+10e^{ix}+10e^{-ix}+5e^{-3ix}+e^{-5ix}\\) sur \\(2^5\\). Regroupements : \\(\\frac{1}{32}(2\\cos5x+10\\cos3x+20\\cos x) = \\frac{\\cos5x+5\\cos3x+10\\cos x}{16}\\). Vérif \\(x=0\\) : gauche 1, droite \\(\\frac{1+5+10}{16} = 1\\) ✓.</li>
    <li><b>c)</b> \\(\\sin^6x = \\left(\\frac{1-\\cos2x}{2}\\right)^3 = \\frac{1}{8}(1-3\\cos2x+3\\cos^22x-\\cos^32x)\\). Or \\(\\cos^22x = \\frac{1+\\cos4x}{2}\\) et \\(\\cos^32y = \\frac{3\\cos2y+\\cos6y}{4}\\) (même technique que b) appliquée à \\(2x\\)). Donc \\(\\sin^6x = \\frac18\\left[1-3\\cos2x+\\frac32(1+\\cos4x)-\\frac{3\\cos2x+\\cos6x}{4}\\right] = \\frac{10-15\\cos2x+6\\cos4x-\\cos6x}{32}\\). Vérif \\(x=0\\) : 0 des deux côtés ✓.</li>
    <li><b>d)</b> De même \\(\\cos^6x = \\frac{10+15\\cos2x+6\\cos4x+\\cos6x}{32}\\) (seuls les signes des termes en \\(\\cos\\) pair changent).</li>
    <li><b>e)</b> \\(\\cos^3x\\sin^2x = \\cos x\\,(\\cos^2x)(\\sin^2x) = \\frac{\\cos x}{4}(1+\\cos2x)(1-\\cos2x) = \\frac{\\cos x}{4}(1-\\cos^22x)\\). Et \\(\\cos^22x = \\frac{1+\\cos4x}{2}\\) : \\(= \\frac{\\cos x}{4}\\cdot\\frac{1-\\cos4x}{2}\\). Produit→somme : \\(\\cos x\\cos4x = \\frac{\\cos5x+\\cos3x}{2}\\). Donc \\(\\cos^3x\\sin^2x = \\frac18\\left[\\cos x-\\frac{\\cos5x+\\cos3x}{2}\\right] = \\frac{2\\cos x-\\cos3x-\\cos5x}{16}\\).</li>
    <li><b>f)</b> Symétrique : \\(\\cos^2x\\sin^3x = \\frac{2\\sin x+\\sin3x-\\sin5x}{16}\\).</li>
    <li><b>g)</b> \\(2\\cos^2x-3\\sin^2x-4 = 2\\cdot\\frac{1+\\cos2x}{2}-3\\cdot\\frac{1-\\cos2x}{2}-4 = (1+\\cos2x)-(\\frac32-\\frac32\\cos2x)-4 = \\frac52\\cos2x-\\frac92 = \\frac{5\\cos2x-9}{2}\\).</li>
    <li><b>h)</b> \\(\\sin x\\cos x = \\frac{\\sin2x}{2}\\) et \\(\\cos^3x = \\frac{3\\cos x+\\cos3x}{4}\\) : \\(\\sin x\\cos x-5\\cos^3x = \\frac{\\sin2x}{2}-\\frac{15\\cos x+5\\cos3x}{4}\\).</li>
    <li><b>2)</b> \\(\\cos(4x) = \\cos^22x-\\sin^22x = (\\cos^2x-\\sin^2x)^2 - (2\\sin x\\cos x)^2 = \\cos^4x-2\\sin^2x\\cos^2x+\\sin^4x-4\\sin^2x\\cos^2x = \\cos^4x-6\\sin^2x\\cos^2x+\\sin^4x\\). Linéarisation : \\(2\\cos(4x)\\sin^2x = \\cos4x\\,(1-\\cos2x) = \\cos4x-\\frac{\\cos6x+\\cos2x}{2}\\) (produit→somme). Donc \\(2\\cos(4x)\\sin^2x = \\cos4x-\\frac12\\cos2x-\\frac12\\cos6x\\).</li>
    <li><b>3a)</b> \\(\\frac{2\\sin2x+\\sin4x}{8} = \\frac{2\\cdot2\\sin x\\cos x+2\\sin2x\\cos2x}{8} = \\frac{4\\sin x\\cos x+4\\sin x\\cos x\\cos2x}{8} = \\frac{\\sin x\\cos x(1+\\cos2x)}{2}\\). Or \\(1+\\cos2x = 2\\cos^2x\\) : ça fait \\(\\sin x\\cos^3x\\) ✓.</li>
    <li><b>3b)</b> \\(\\frac{2\\sin2x-\\sin4x}{8} = \\frac{4\\sin x\\cos x-4\\sin x\\cos x\\cos2x}{8} = \\frac{\\sin x\\cos x(1-\\cos2x)}{2}\\) et \\(1-\\cos2x = 2\\sin^2x\\) → \\(\\cos x\\sin^3x\\) ✓.</li>
    <li><b>3c)</b> \\(\\cos x\\sin^4x = \\cos x\\left(\\frac{1-\\cos2x}{2}\\right)^2 = \\frac{\\cos x}{4}(1-2\\cos2x+\\cos^22x)\\). Avec \\(\\cos^22x = \\frac{1+\\cos4x}{2}\\) : \\(= \\frac{\\cos x}{8}(3-4\\cos2x+\\cos4x)\\). Produits→sommes : \\(\\cos x\\cos2x = \\frac{\\cos3x+\\cos x}{2}\\), \\(\\cos x\\cos4x = \\frac{\\cos5x+\\cos3x}{2}\\). Donc \\(= \\frac18\\left[3\\cos x-2\\cos3x-2\\cos x+\\frac{\\cos5x+\\cos3x}{2}\\right] = \\frac{\\cos5x-3\\cos3x+2\\cos x}{16}\\) ✓.</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi Euler est-il si fort ?</b> Parce qu'il transforme une question de trigonométrie en calcul de puissances d'un nombre — et que \\((a+b)^n\\) est du programme depuis la 3e (binôme). À quoi ça sert ? Intégrales (la linéarisation rend \\(\\int\\cos^4x\\,dx\\) triviale), équations trigonométriques, et démonstrations type Bac.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> se tromper dans les coefficients du binôme (les écrire tous : 1, 5, 10, 10, 5, 1 pour \\(n=5\\)) ; oublier le facteur \\(1/2\\) du produit→somme ; ne pas vérifier en \\(x = 0\\) — la vérification qui sauve.</div>`,
  correctionText: 'sin⁴x=(3-4cos2x+cos4x)/8 ; cos⁵x=(10cosx+5cos3x+cos5x)/16 ; sin⁶x=(10-15cos2x+6cos4x-cos6x)/32 ; cos⁶x=(10+15cos2x+6cos4x+cos6x)/32 ; cos³sin²=(2cosx-cos3x-cos5x)/16 ; cos²sin³=(2sinx+sin3x-sin5x)/16 ; g)=(5cos2x-9)/2 ; h)=sin2x/2-(15cosx+5cos3x)/4 ; cos4x=cos⁴-6cos²sin²+sin⁴ ; 2cos4x·sin²x=cos4x-(cos2x+cos6x)/2 ; identités 3a/3b/3c prouvées.',
};

/* ═══════════ CARTE 5 — Équations de degré 3 ═══════════ */
D.groups.push({
  id: 'g5',
  titre: 'Équations de degré 3 : racine évidente et factorisation',
  accroche: 'Trouver une racine évidente, factoriser par \\((z-z_0)\\), terminer au second degré — le triptyque du Bac.',
  intro: 'Une équation de degré 3 dans ℂ se traite TOUJOURS pareil : on repère une racine « évidente », on factorise \\(P(z) = (z-z_0)(az^2+bz+c)\\) par identification, puis on résout le facteur du second degré (carte 3). Les coefficients réels ou complexes ne changent rien à la stratégie.',
  methode: {
    positionnement: 'La racine évidente se cherche parmi les candidats simples : \\(0\\), \\(\\pm1\\), \\(\\pm2\\), \\(\\pm i\\), \\(1\\pm i\\)... (teste les entiers qui divisent le terme constant, puis les gaussiens \\(\\pm1, \\pm i\\)). Ensuite l\'identification \\(P(z) = (z-z_0)(az^2+bz+c)\\) donne \\(a\\), \\(b\\), \\(c\\) par égalité des coefficients.',
    formules: [
      { tex: 'P(z_0) = 0 \\Leftrightarrow P(z) = (z-z_0)Q(z)', txt: 'factorisation par une racine.' },
      { tex: '(z-z_0)(az^2+bz+c) = az^3+(b-az_0)z^2+(c-bz_0)z-cz_0', txt: 'développe et IDENTIFIE les coefficients avec \\(P\\).' },
      { tex: 'x^3+y^3 = (x+y)(x^2-xy+y^2)', txt: 'identité remarquable des SOMMES de cubes (utile pour \\(z^3+8\\), \\(z^3-1\\)...).' },
      { tex: '\\text{somme des racines} = -b/a\\ ;\\ \\text{produit} = -c/a \\ (2^{nd}\\ \\text{degré})', txt: 'contrôles express.' },
    ],
    etapes: [
      'Cherche une racine évidente : teste \\(z_0\\in\\{1, -1, 2, -2, i, -i, 1+i, ...\\}\\) en calculant \\(P(z_0)\\). Le terme constant guide : si \\(P = z^3+8\\), essaie \\(-2\\) ; si \\(P = z^3+2z^2-16\\), essaie \\(2\\).',
      `Écris \\(P(z) = (z-z_0)(az^2+bz+c)\\) et développe SANS calculer \\(a\\), \\(b\\), \\(c\\) d\'abord : la lettre \\(z\\) reste symbolique.`,
      'IDENTIFIE coefficient à coefficient (\\(z^3\\) donne \\(a\\) ; \\(z^2\\) donne \\(b\\) ; \\(z^0\\) donne \\(c\\)) — et vérifie sur le coefficient de \\(z\\) (contrôle de cohérence).',
      'Résous \\(az^2+bz+c = 0\\) avec la méthode de la carte 3 (\\(\\Delta\\), racines carrées si nécessaire).',
      `Conclus : trois racines, éventuellement en formes exponentielles si l\'énoncé le demande.`,
      `Si l\'énoncé continue en géométrie (points, rotations) : chaque racine devient l\'affixe d\'un point — relie les deux parties.`,
    ],
    aservir: 'aux gros exercices de Bac (polynôme + cercle + rotation, comme les exercices 18 et 19), à la compréhension du théorème « tout polynôme de degré n a exactement n racines dans ℂ (comptées avec multiplicité) ».',
  },
  exos: ['ex17', 'ex18', 'ex19', 'ex23'],
});

D.exos.ex17 = {
  num: 17, groupe: 'g5', titre: '\\(z^3+8=0\\) puis triangle équilatéral par rotation',
  enonce: `<p>1) On considère l'équation \\((\\mathrm{E})\\ :\\ z^3+8 = 0\\).</p>
  <p>a) Déterminer les réels \\(a\\), \\(b\\) et \\(c\\) tels que \\(z^3+8 = (z+2)(az^2+bz+c)\\) pour tout nombre complexe \\(z\\).<br>
  b) Résoudre l'équation \\((\\mathrm{E})\\) (on donnera les solutions sous la forme \\(x+iy\\) puis sous la forme \\(re^{i\\theta}\\), où \\(r\\) est un réel positif).</p>
  <p>2) On considère les points \\(A\\), \\(B\\) et \\(C\\) d'affixes respectives \\(-2\\ ;\\ 1-i\\sqrt3\\) et \\(1+i\\sqrt3\\), et la rotation \\(R\\) de centre \\(O\\) et d'angle \\(\\frac{2\\pi}{3}\\).</p>
  <p>a) Placer \\(A\\), \\(B\\) et \\(C\\) dans le plan.<br>
  b) Démontrer que \\(R(A) = B\\), \\(R(B) = C\\) et \\(R(C) = A\\). En déduire que le triangle \\(ABC\\) est équilatéral.</p>`,
  enonceText: '1) (E) : z³+8=0. a) a,b,c tels que z³+8=(z+2)(az²+bz+c). b) Solutions sous forme x+iy puis re^{iθ}. 2) A(-2), B(1-i√3), C(1+i√3), rotation R de centre O d\'angle 2π/3. b) Montrer R(A)=B, R(B)=C, R(C)=A ; en déduire triangle équilatéral.',
  comprendre: `<p>\\(z^3 = -8\\) : trois solutions, pas une ! L'identité \\(x^3+y^3\\) fait la factorisation d'un coup. Et la question 2 est une leçon de géométrie : si une rotation d'un tiers de tour fait tourner \\(A\\to B\\to C\\to A\\), les trois points sont les sommets d'un triangle équilatéral centré en \\(O\\). Les solutions de \\(z^3+8 = 0\\) sont EXACTEMENT ces trois points : le livre rejoint les deux bouts.</p>`,
  etapes: [
    'Question a : développe \\((z+2)(az^2+bz+c)\\) en gardant \\(a\\), \\(b\\), \\(c\\) littéraux, puis identifie avec \\(z^3+0z^2+0z+8\\).',
    'Question b : résous \\(z^2-2z+4 = 0\\) (\\(\\Delta\\) négatif — carte 3), puis écris chaque solution en exponentielle (module commun ?).',
    'Question 2a : les trois affixes ont le MÊME module \\(2\\) — les points sont sur le cercle de rayon 2. Place-les aux angles \\(\\pi\\), \\(-\\frac{\\pi}{3}\\), \\(\\frac{\\pi}{3}\\).',
    `Question 2b : une rotation de centre \\(O\\) et d\'angle \\(\\theta\\) multiplie l\'affixe par \\(e^{i\\theta}\\). Applique à \\(z_A\\), \\(z_B\\), \\(z_C\\) avec \\(\\theta = \\frac{2\\pi}{3}\\) — attention aux additions d\'angles modulo \\(2\\pi\\).`,
    'Pour conclure : une rotation conserve les distances ; si elle envoie \\(A\\to B\\to C\\to A\\), alors \\(AB = BC = CA\\).',
  ],
  correction: `
  <ul class="steps">
    <li><b>1a)</b> \\((z+2)(az^2+bz+c) = az^3+(b+2a)z^2+(c+2b)z+2c\\). Identification avec \\(z^3+0z^2+0z+8\\) : \\(a = 1\\) ; \\(b+2a = 0\\) → \\(b = -2\\) ; \\(c+2b = 0\\) → \\(c = 4\\) ; contrôle \\(2c = 8\\) ✓. Donc \\(z^3+8 = (z+2)(z^2-2z+4)\\) — c'est l'identité \\(x^3+y^3 = (x+y)(x^2-xy+y^2)\\) avec \\(y = 2\\).</li>
    <li><b>1b)</b> \\(z = -2\\) (la racine évidente) ou \\(z^2-2z+4 = 0\\) : \\(\\Delta = 4-16 = -12\\), \\(z = \\frac{2\\pm2i\\sqrt3}{2} = 1\\pm i\\sqrt3\\). Formes exponentielles : \\(-2 = 2e^{i\\pi}\\) ; \\(1+i\\sqrt3 = 2e^{i\\frac{\\pi}{3}}\\) ; \\(1-i\\sqrt3 = 2e^{-i\\frac{\\pi}{3}}\\). (Trois points sur le cercle de rayon 2, séparés par des tiers de tour — c'est cohérent avec \\(z^3 = -8\\).)</li>
    <li><b>2b)</b> La rotation \\(R\\) s'écrit \\(z' = e^{i\\frac{2\\pi}{3}}z\\) (centre \\(O\\)). Alors : \\(R(A)\\) a pour affixe \\(2e^{i\\pi}\\cdot e^{i\\frac{2\\pi}{3}} = 2e^{i\\frac{5\\pi}{3}} = 2e^{-i\\frac{\\pi}{3}} = 1-i\\sqrt3 = z_B\\) → \\(R(A) = B\\). \\(R(B)\\) : \\(2e^{i(\\frac{2\\pi}{3}-\\frac{\\pi}{3})} = 2e^{i\\frac{\\pi}{3}} = z_C\\) → \\(R(B) = C\\). \\(R(C)\\) : \\(2e^{i(\\frac{\\pi}{3}+\\frac{2\\pi}{3})} = 2e^{i\\pi} = -2 = z_A\\) → \\(R(C) = A\\).</li>
    <li><b>Conclusion</b> : une rotation conserve les distances, donc \\(AB = R(A)R(B)\\)... plus simply : \\(AB = |z_B-z_A| = |3-i\\sqrt3| = 2\\sqrt3\\), \\(BC = |2| = 2\\sqrt3\\) wait — \\(z_C-z_B = 2i\\sqrt3\\), \\(|BC| = 2\\sqrt3\\) ✓ ; \\(CA = |{-2}-(1+i\\sqrt3)| = |-3-i\\sqrt3| = \\sqrt{12} = 2\\sqrt3\\) ✓. Trois côtés égaux : équilatéral. Et la rotation qui permute cycliquement les sommets le confirme : un triangle invariant par un tiers de tour est équilatéral.</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi « rotation ⟹ équilatéral » ?</b> Parce que l'égalité \\(R(A) = B\\) dit \\(OA = OB\\) ET \\(\\widehat{AOB} = \\frac{2\\pi}{3}\\). Trois points à égale distance du centre et séparés par des tiers de tour : géométriquement, un triangle équilatéral inscrit. À quoi ça sert ? C'est le criterion le plus rapide du Bac pour prouver un équilatéral : \\(\\dfrac{z_C-z_A}{z_B-z_A} = e^{\\pm i\\frac{\\pi}{3}}\\) — la version « sans rotation » du même résultat.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> dans l'identification, oublier le contrôle \\(2c = 8\\) (qui attrape les erreurs) ; additionner les angles sans réduire modulo \\(2\\pi\\) ; croire que \\(z^3 = -8\\) n'a qu'une solution (réflexe réel !).</div>`,
  correctionText: 'a=1, b=-2, c=4 (z³+8=(z+2)(z²-2z+4)). Solutions : -2=2e^{iπ} ; 1±i√3=2e^{±iπ/3}. R(A)=B, R(B)=C, R(C)=A (multiplication par e^{2iπ/3}) ; |AB|=|BC|=|CA|=2√3 → équilatéral.',
};

D.exos.ex18 = {
  num: 18, groupe: 'g5', titre: 'Polynôme complexe, rotation et deux cercles',
  enonce: `<p>Le plan complexe est rapporté à un repère orthonormé direct \\((O,\\vec u,\\vec v)\\). (Unité : 1 cm.)<br>
  On considère le polynôme \\(P\\) tel que : \\(P(z) = z^3+(-8+i)z^2+(17-8i)z+17i\\).</p>
  <p>1) a) Montrer que \\(-i\\) est solution de l'équation \\(P(z) = 0\\).<br>
  b) Déterminer les nombres réels \\(a\\), \\(b\\) et \\(c\\) tels que : \\(P(z) = (z+i)(az^2+bz+c)\\).<br>
  c) Résoudre dans \\(\\mathbb{C}\\) l'équation \\(P(z) = 0\\).</p>
  <p>2) On note \\(A\\), \\(B\\) et \\(C\\) les points d'affixes respectives \\(4+i\\), \\(4-i\\), \\(-i\\).<br>
  a) Placer ces points dans le repère que l'on complètera dans la suite de l'exercice.<br>
  b) Soit \\(S\\) l'image de \\(A\\) par la rotation de centre \\(\\Omega\\) et d'angle de mesure \\(\\frac{\\pi}{2}\\) avec \\(\\Omega\\) le point d'affixe 2. Calculer l'affixe de \\(S\\).<br>
  c) Démontrer que les points \\(B\\), \\(A\\), \\(S\\) et \\(C\\) appartiennent à un même cercle \\((\\mathcal C)\\) dont on déterminera le centre et le rayon. Tracer \\((\\mathcal C)\\).</p>
  <p>3) À tout point \\(M\\) d'affixe \\(z \\ne 2\\), on associe le point \\(M'\\) d'affixe \\(z' = \\dfrac{iz+10-2i}{z-2}\\).<br>
  a) Déterminer les affixes des points \\(A'\\), \\(B'\\) et \\(C'\\) associés respectivement aux points \\(A\\), \\(B\\) et \\(C\\).<br>
  b) Vérifier que \\(A'\\), \\(B'\\) et \\(C'\\) appartiennent à un cercle \\((\\mathcal C\')\\) de centre \\(P\\), d'affixe \\(i\\).<br>
  c) Déterminer son rayon et tracer \\((\\mathcal C\')\\).</p>
  <p>4) a) Pour tout nombre \\(z \\ne 2\\), exprimer \\(|z'-i|\\) en fonction de \\(z\\).<br>
  b) Soit \\(M\\) un point d'affixe \\(z\\) appartenant au cercle \\((\\mathcal C)\\). Démontrer que \\(|z'-i| = 2\\sqrt5\\).<br>
  c) En déduire à quel ensemble appartiennent les points \\(M'\\) associés aux points \\(M\\) du cercle \\((\\mathcal C)\\).</p>`,
  enonceText: 'P(z)=z³+(-8+i)z²+(17-8i)z+17i. 1a) -i solution. 1b) a,b,c tels que P(z)=(z+i)(az²+bz+c). 1c) résoudre. 2) A(4+i), B(4-i), C(-i). 2b) S=image de A par rotation centre Ω(2) angle π/2. 2c) B,A,S,C sur un même cercle (𝒞) : centre+rayon. 3) z\'=(iz+10-2i)/(z-2) ; A\', B\', C\' ; cercle (𝒞\') centre P(i) ; rayon. 4a) |z\'-i| en fonction de z. 4b) M∈(𝒞) ⟹ |z\'-i|=2√5. 4c) ensemble des M\'.',
  comprendre: `<p>C\'est un exercice de BAC complet : polynôme → points → rotation → cercle → transformation rationnelle. La question 4 est la plus élégante : au lieu de manipuler \\(z\'\\), on calcule \\(|z\'-i|\\) — une DISTANCE — et tout s\'illumine : l\'image du cercle \\((\\mathcal C)\\) est le cercle \\((\\mathcal C\')\\). \\(-i\\) racine évidente : parce que \\(i^3 = -i\\) et que le terme constant est \\(17i\\).</p>`,
  etapes: [
    '1a : remplace \\(z\\) par \\(-i\\) dans \\(P\\), développe calmement (\\(i^2 = -1\\), \\(i^3 = -i\\)) — zéro calcul fantaisiste.',
    '1b : développe \\((z+i)(az^2+bz+c)\\) et identifie les quatre coefficients avec \\(P\\). Vérifie sur le terme en \\(z\\).',
    '1c : \\(\\Delta\\) du trinôme — négatif → racines conjuguées. Ce sont les affixes de A, B, C : le livre boucle.',
    '2b : rotation = multiplication par \\(e^{i\\pi/2} = i\\) AUTOUR du centre : \\(z_S = z_\\Omega + i(z_A-z_\\Omega)\\).',
    `2c : A et B sont conjugués → le centre du cercle cherché est sur l\'axe des réels. Écris l\'égalité des distances au centre (inconnu réel \\(x\\)) vers A et vers C, résous \\(x\\).`,
    `3a : substitue \\(z = z_A\\), \\(z_B\\), \\(z_C\\) dans \\(z\'\\) — chaque quotient se simplifie par le conjugué du dénominateur.`,
    `3b : calcule \\(|z\'-i|\\) pour les trois images — trois modules égaux = cercle de centre P(i).`,
    `4a : soustrais \\(i\\) à \\(z\'\\) et réduis au même dénominateur : une simplification spectaculaire t\'attend (\\(iz+10-2i-i(z-2) = 10\\)).`,
    '4b : traduis « \\(M\\in(\\mathcal C)\\) » en équation de module sur \\(z\\), injecte dans 4a.',
  ],
  correction: `
  <ul class="steps">
    <li><b>1a)</b> \\(P(-i) = (-i)^3+(-8+i)(-i)^2+(17-8i)(-i)+17i\\). Or \\((-i)^2 = -1\\), \\((-i)^3 = -i\\)·... \\((-i)^3 = i\\)·... posons : \\((-i)^2 = i^2 = -1\\) (le carré ne voit pas le signe), \\((-i)^3 = (-i)(-1) = i\\)... NON : \\((-i)^3 = (-i)^2\\cdot(-i) = (-1)(-i) = i\\). Hmm — recalculons proprement : \\(P(-i) = i + (-8+i)(-1) + (17-8i)(-i) + 17i = i + 8-i + (-17i+8i^2) + 17i = i+8-i-17i-8+17i\\). Les réels : \\(8-8 = 0\\) ; les imaginaires : \\(i-i-17i+17i = 0\\). Donc \\(P(-i) = 0\\) ✓. (Oui, \\((-i)^3 = i\\), et c'est bien ce terme qui a donné le \\(i\\) isolé.)</li>
    <li><b>1b)</b> \\((z+i)(az^2+bz+c) = az^3+(b+ia)z^2+(c+ib)z+ic\\). Identification : \\(a = 1\\) ; \\(b+i = -8+i\\) → \\(b = -8\\) ; \\(c-8i = 17-8i\\) → \\(c = 17\\) ; contrôle \\(ic = 17i\\) ✓. Donc \\(P(z) = (z+i)(z^2-8z+17)\\).</li>
    <li><b>1c)</b> \\(z^2-8z+17 = 0\\) : \\(\\Delta = 64-68 = -4\\), \\(z = \\frac{8\\pm2i}{2} = 4\\pm i\\). Solutions : \\(-i\\), \\(4+i\\), \\(4-i\\) — les affixes de \\(C\\), \\(A\\), \\(B\\) : le livre relie déjà les parties.</li>
    <li><b>2b)</b> \\(z_S = z_\\Omega + e^{i\\pi/2}(z_A-z_\\Omega) = 2+i(4+i-2) = 2+i(2+i) = 2+2i+i^2 = 1+2i\\). Donc \\(S(1+2i)\\).</li>
    <li><b>2c)</b> \\(A(4+i)\\) et \\(B(4-i)\\) sont conjugués : symétriques par rapport à l'axe des réels, donc tout cercle passant par \\(A\\) et \\(B\\) a son centre sur cet axe : \\(\\omega = x\\) réel. Égalité \\(|\\omega-(4+i)| = |\\omega+i|\\) : \\((x-4)^2+1 = x^2+1\\) → \\(x = 2\\). Centre \\((2\\,;0)\\), rayon \\(|2-i| = \\sqrt5\\). Vérification \\(S\\) : \\(|1+2i-2| = |-1+2i| = \\sqrt5\\) ✓. Donc \\(B\\), \\(A\\), \\(S\\), \\(C\\) sont sur le cercle de centre \\(\\Omega(2)\\) et de rayon \\(\\sqrt5\\) — le point \\(\\Omega\\) est le centre de la rotation de la question 2b, joli.</li>
    <li><b>3a)</b> \\(z_{A'} = \\dfrac{i(4+i)+10-2i}{4+i-2} = \\dfrac{9+2i}{2+i} = \\dfrac{(9+2i)(2-i)}{5} = \\dfrac{20-5i}{5} = 4-i\\) (= \\(B\\) !). \\(z_{B'} = \\dfrac{i(4-i)+10-2i}{4-i-2} = \\dfrac{11+2i}{2-i} = \\dfrac{(11+2i)(2+i)}{5} = \\dfrac{20+15i}{5} = 4+3i\\). \\(z_{C'} = \\dfrac{i(-i)+10-2i}{-i-2} = \\dfrac{11-2i}{-2-i} = \\dfrac{(11-2i)(-2+i)}{5} = \\dfrac{-20+15i}{5} = -4+3i\\).</li>
    <li><b>3b)</b> \\(|z_{A'}-i| = |4-2i| = 2\\sqrt5\\) ; \\(|z_{B'}-i| = |4+2i| = 2\\sqrt5\\) ; \\(|z_{C'}-i| = |-4+2i| = 2\\sqrt5\\). Trois distances égales à \\(P(i)\\) : les trois images sont sur le cercle de centre \\(P\\) et de rayon \\(2\\sqrt5\\) : c'est \\((\\mathcal C')\\).</li>
    <li><b>3c)</b> Rayon \\(2\\sqrt5\\approx 4{,}5\\) cm (unité 1 cm).</li>
    <li><b>4a)</b> \\(z'-i = \\dfrac{iz+10-2i}{z-2}-i = \\dfrac{iz+10-2i-i(z-2)}{z-2} = \\dfrac{iz+10-2i-iz+2i}{z-2} = \\dfrac{10}{z-2}\\). Donc \\(|z'-i| = \\dfrac{10}{|z-2|}\\).</li>
    <li><b>4b)</b> \\(M\\in(\\mathcal C)\\) s'écrit \\(|z-2| = \\sqrt5\\) (le centre est \\(\\Omega(2)\\) !). Alors \\(|z'-i| = \\dfrac{10}{\\sqrt5} = 2\\sqrt5\\). ✓</li>
    <li><b>4c)</b> Les points \\(M'\\) vérifient \\(|z'-i| = 2\\sqrt5\\) : ils appartiennent au cercle de centre \\(P(i)\\) et de rayon \\(2\\sqrt5\\) — exactement \\((\\mathcal C')\\) de la question 3. L'image du cercle \\((\\mathcal C)\\) est le cercle \\((\\mathcal C')\\) : cohérence totale de l'exercice.</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi la question 4 est-elle la clé de tout ?</b> Parce que \\(\\left|\\frac{10}{z-2}\\right|\\) transforme une expression rationnelle en rapport de DISTANCES. « \\(M\\) sur le cercle de rayon \\(\\sqrt5\\) autour de 2 » devient « \\(M'\\) à distance constante de \\(i\\) » : un cercle va sur un cercle. À quoi ça sert ? C'est le schéma des transformations rationnelles (inversions) — et un grand classique de sujets Bac.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> calculer \\((-i)^3 = -i\\) (faux : c'est \\(+i\\)) ; chercher le centre du cercle de la 2c « au hasard » au lieu d'utiliser la symétrie conjuguée ; dans 4a, oublier de tout réduire au même dénominateur avant de simplifier.</div>`,
  correctionText: 'P(-i)=0 ; P(z)=(z+i)(z²-8z+17) ; racines -i, 4±i. S=1+2i. (𝒞) : centre 2, rayon √5 (A,B conjugués → centre sur l\'axe réel). A\'=4-i, B\'=4+3i, C\'=-4+3i ; |z\'-i|=2√5 → (𝒞\') centre i rayon 2√5. z\'-i=10/(z-2) ; M∈(𝒞) ⟹ |z\'-i|=10/√5=2√5 → M\'∈(𝒞\').',
};

D.exos.ex19 = {
  num: 19, groupe: 'g5', titre: '\\(z^3+2z^2-16=0\\), parallélogramme et rotations',
  enonce: `<p>On considère dans l'ensemble des nombres complexes, l'équation \\((\\mathrm{E})\\ :\\ z^3+2z^2-16 = 0\\).</p>
  <p>1) a) Montrer que 2 est solution de \\((\\mathrm{E})\\), puis que \\((\\mathrm{E})\\) peut s'écrire sous la forme \\((z-2)(az^2+bz+c)\\) où \\(a\\), \\(b\\) et \\(c\\) sont trois réels que l'on déterminera.<br>
  b) En déduire les solutions de \\((\\mathrm{E})\\) sous forme algébrique puis sous forme exponentielle.</p>
  <p>2) Le plan est rapporté à un repère orthonormé direct \\((O,\\vec u,\\vec v)\\).<br>
  a) Placer les points \\(A\\), \\(B\\) et \\(D\\) d'affixes respectives : \\(z_A = -2-2i\\), \\(z_B = 2\\) et \\(z_D = -2+2i\\).<br>
  b) Calculer l'affixe \\(z_C\\) du point \\(C\\) tel que \\(ABCD\\) soit un parallélogramme. Placer \\(C\\).</p>
  <p>3) Soit \\(E\\) l'image du point \\(C\\) par la rotation de centre \\(B\\) et d'angle \\(-\\frac{\\pi}{2}\\) et \\(F\\) l'image du point \\(C\\) par la rotation de centre \\(D\\) et d'angle \\(+\\frac{\\pi}{2}\\).<br>
  a) Calculer les affixes \\(z_E\\) et \\(z_F\\) des points \\(E\\) et \\(F\\).<br>
  b) Placer les points \\(E\\) et \\(F\\).</p>
  <p>4) a) Vérifier que \\(\\dfrac{z_F-z_A}{z_E-z_A} = i\\) puis en déduire la nature du triangle \\(AEF\\).<br>
  b) Soit \\(I\\) le milieu de \\([EF]\\). Déterminer l'image du triangle \\(EBA\\) par la rotation de centre \\(I\\) et d'angle \\(-\\frac{\\pi}{2}\\).</p>`,
  enonceText: '(E) : z³+2z²-16=0. 1a) 2 solution ; (z-2)(az²+bz+c). 1b) solutions algébriques puis exponentielles. 2) A(-2-2i), B(2), D(-2+2i) ; C tel que ABCD parallélogramme. 3) E = image de C par rotation centre B angle -π/2 ; F = image de C par rotation centre D angle π/2 ; calculer z_E, z_F. 4a) (zF-zA)/(zE-zA)=i, nature de AEF. 4b) I milieu [EF], image du triangle EBA par rotation de centre I et d\'angle -π/2.',
  comprendre: `<p>Un exercice qui fait dialoguer ALGÈBRE (l'équation de degré 3) et GÉOMÉTRIE (le parallélogramme, les rotations). Les trois solutions de (E) vont réapparaître comme des affixes du plan. La question 4a donne la clé de lecture : \\(\\frac{z_F-z_A}{z_E-z_A} = i\\) veut dire « \\(AE = AF\\) et angle droit en \\(A\\) » — une rotation d'un quart de tour.</p>`,
  etapes: [
    '1a : calcule \\(2^3+2\\cdot 2^2-16\\) — zéro ? Factorise par identification \\((z-2)(az^2+bz+c)\\).',
    '1b : \\(\\Delta\\) du trinôme — négatif. Solutions en \\(x+iy\\), puis module+argument pour les formes exponentielles (les deux racines conjuguées ont le même module).',
    '2b : \\(ABCD\\) parallélogramme ⟺ les diagonales ont le même milieu ⟺ \\(z_A+z_C = z_B+z_D\\). Isole \\(z_C\\).',
    '3a : écris chaque rotation : \\(z_E = z_B+e^{-i\\pi/2}(z_C-z_B)\\) et \\(z_F = z_D+e^{+i\\pi/2}(z_C-z_D)\\), avec \\(e^{\\pm i\\pi/2} = \\pm i\\).',
    '4a : calcule le quotient — le numérateur et le dénominateur doivent se simplifier en \\(i\\). Traduis : modules égaux + argument \\(\\frac{\\pi}{2}\\).',
    `4b : applique la rotation aux TROIS sommets \\(E\\), \\(B\\), \\(A\\) : \\(z\' = z_I - i(z-z_I)\\) pour chacun. Compare avec les points connus (A, D, F...).`,
  ],
  correction: `
  <ul class="steps">
    <li><b>1a)</b> \\(2^3+2\\cdot2^2-16 = 8+8-16 = 0\\) ✓. \\((z-2)(az^2+bz+c) = az^3+(b-2a)z^2+(c-2b)z-2c\\). Identification : \\(a = 1\\) ; \\(b-2 = 2\\) → \\(b = 4\\) ; \\(-2c = -16\\) → \\(c = 8\\) ; contrôle \\(c-2b = 8-8 = 0\\) ✓. Donc \\(z^3+2z^2-16 = (z-2)(z^2+4z+8)\\).</li>
    <li><b>1b)</b> \\(z^2+4z+8 = 0\\) : \\(\\Delta = 16-32 = -16\\), \\(z = \\frac{-4\\pm4i}{2} = -2\\pm2i\\). Solutions : \\(2\\) ; \\(-2+2i\\) ; \\(-2-2i\\). Exponentielles : \\(2 = 2e^{i0}\\) ; \\(-2+2i\\) : module \\(2\\sqrt2\\), deuxième quadrant, \\(\\theta = \\pi-\\frac{\\pi}{4} = \\frac{3\\pi}{4}\\) → \\(2\\sqrt2 e^{i\\frac{3\\pi}{4}}\\) ; \\(-2-2i = 2\\sqrt2 e^{-i\\frac{3\\pi}{4}}\\).</li>
    <li><b>2b)</b> \\(z_A+z_C = z_B+z_D\\) → \\(z_C = 2+(-2+2i)-(-2-2i) = 2+4i\\). Donc \\(C(2\\,;4)\\).</li>
    <li><b>3a)</b> \\(z_E = 2+(-i)(2+4i-2) = 2-i(4i) = 2+4 = 6\\) (E sur l'axe réel). \\(z_F = (-2+2i)+i\\left((2+4i)-(-2+2i)\\right) = -2+2i+i(4+2i) = -2+2i+4i-2 = -4+6i\\).</li>
    <li><b>4a)</b> \\(\\dfrac{z_F-z_A}{z_E-z_A} = \\dfrac{-4+6i+2+2i}{6+2+2i} = \\dfrac{-2+8i}{8+2i}\\). Multiplie haut et bas par le conjugué \\(8-2i\\) : numérateur \\((-2+8i)(8-2i) = -16+4i+64i+16 = 68i\\) ; dénominateur \\(64+4 = 68\\). Quotient \\(= i\\) ✓. Lecture : \\(|i| = 1\\) donc \\(AE = AF\\) ; argument \\(\\frac{\\pi}{2}\\) donc \\(\\vec{AE},\\vec{AF}\\)\\((\\text{angle}) = \\frac{\\pi}{2\\)\\) : le triangle \\(AEF\\) est rectangle isocèle en \\(A\\).</li>
    <li><b>4b)</b> \\(z_I = \\frac{z_E+z_F}{2} = \\frac{6-4+6i}{2} = 1+3i\\). Rotation \\(r\\) de centre \\(I\\), angle \\(-\\frac{\\pi}{2}\\) : \\(z' = z_I-i(z-z_I)\\). Images : \\(r(E)\\) : \\(1+3i-i(6-1-3i) = 1+3i-5i-3 = -2-2i = A\\) ; \\(r(B)\\) : \\(1+3i-i(2-1-3i) = 1+3i-i+3i^2 = -2+2i = D\\) ; \\(r(A)\\) : \\(1+3i-i(-3-5i) = 1+3i+3i+5i^2 = -4+6i = F\\). Donc l'image du triangle \\(EBA\\) est le triangle \\(ADF\\).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi le quotient \\(\\frac{z_F-z_A}{z_E-z_A}\\) est-il LE réflexe du chapitre ?</b> Parce qu'un quotient d'affixes encode à lui seul DEUX informations géométriques : le rapport des longueurs (son module) et l'angle entre les deux vecteurs (son argument). Ici « quotient = \\(i\\) » condense « égale longueur + quart de tour ». À quoi ça sert ? C'est la définition algébrique des triangles isocèles-rectangles, des losanges, des carrés : à chaque fois, un quotient à calculer.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> pour la rotation, oublier de soustraire le centre avant de multiplier (écrire \\(z_E = z_B-i\\,z_C\\) !) ; erreurs de signe sur \\(e^{\\pm i\\pi/2}\\) (\\(+i\\) tourne dans le sens direct) ; dans 4b, tourner les points dans le mauvais ordre et déclarer « l'image est EBA ».</div>`,
  correctionText: '2 solution ; (z-2)(z²+4z+8) ; racines 2, -2±2i = 2e^{i0}, 2√2e^{±3iπ/4}. zC=2+4i. zE=6, zF=-4+6i. (zF-zA)/(zE-zA)=i → AEF rectangle isocèle en A. I=1+3i ; rotation(I,-π/2) : E→A, B→D, A→F → image = triangle ADF.',
};

D.exos.ex23 = {
  num: 23, groupe: 'g5', titre: 'Deux équations sœurs et un triangle rectangle',
  enonce: `<p>Soit dans \\(\\mathbb{C}\\) l'équation \\((\\mathrm{E})\\ :\\ z^2-(1+3i)z-2+i = 0\\).</p>
  <p>1) Résoudre dans \\(\\mathbb{C}\\) l'équation \\((\\mathrm{E})\\).<br>
  2) On pose \\(f(z) = z^3-(2+3i)z^2+(4i-1)z+2-i\\).<br>
  a) Montrer que l'équation \\(f(z) = 0\\) admet dans \\(\\mathbb{C}\\) une solution réelle que l'on déterminera.<br>
  b) Déterminer les nombres complexes \\(b\\) et \\(c\\) tels que : \\(f(z) = (z-1)(z^2+bz+c)\\) quel que soit \\(z\\in\\mathbb{C}\\).<br>
  c) Résoudre alors l'équation \\(f(z) = 0\\).</p>
  <p>3) Le plan muni d'un repère orthonormé direct \\((O,\\vec u,\\vec v)\\), on donne les points \\(A\\), \\(B\\) et \\(C\\) d'affixes respectives \\(1+2i\\), \\(i\\), \\(1\\).<br>
  Placer les points \\(A\\), \\(B\\) et \\(C\\) puis déterminer la nature du triangle \\(ABC\\).</p>`,
  enonceText: '(E) : z²-(1+3i)z-2+i=0. 1) Résoudre (E). 2) f(z)=z³-(2+3i)z²+(4i-1)z+2-i. a) solution réelle. b) f(z)=(z-1)(z²+bz+c). c) résoudre f(z)=0. 3) A(1+2i), B(i), C(1) : nature du triangle ABC.',
  comprendre: `<p>Regarde le finale : \\(f(z) = (z-1)\\times\\)« le membre de gauche de (E) ». Le livre construit \\(f\\) pour que ses trois racines soient... les affixes des trois points \\(A\\), \\(B\\), \\(C\\) ! Résoudre deux équations, c'est déjà placer le triangle. Reste à lire sa nature avec le quotient \\(\\frac{z_A-z_B}{z_C-z_B}\\).</p>`,
  etapes: [
    '1) \\(\\Delta\\) de (E) — tu dois tomber sur un imaginaire pur. Sa racine carrée est un « classique » : quel nombre a un carré égal à \\(2i\\) ? (Pense à \\((1+i)\\).)',
    '2a : calcule \\(f(1)\\), \\(f(-1)\\)... la racine réelle est petite et évidente.',
    '2b : identification \\((z-1)(z^2+bz+c)\\) — développe, égale les coefficients avec \\(f\\). Compare le trinôme obtenu avec (E) : éclairage !',
    '2c : les racines de \\(f\\) = la racine réelle + celles de (E).',
    '3 : place \\(A\\), \\(B\\), \\(C\\). Calcule \\(\\frac{z_A-z_B}{z_C-z_B}\\) : module et argument te donnent la nature exacte du triangle.',
  ],
  correction: `
  <ul class="steps">
    <li><b>1)</b> \\(\\Delta = (1+3i)^2-4(-2+i) = (1+6i+9i^2)+8-4i = -8+6i+8-4i = 2i\\). Racine carrée de \\(2i\\) : \\((1+i)^2 = 1+2i+i^2 = 2i\\) → \\(\\delta = \\pm(1+i)\\). Solutions : \\(z = \\dfrac{(1+3i)\\pm(1+i)}{2}\\) : \\(z_1 = \\dfrac{2+4i}{2} = 1+2i\\) et \\(z_2 = \\dfrac{2i}{2} = i\\).</li>
    <li><b>2a)</b> \\(f(1) = 1-(2+3i)+(4i-1)+2-i = (1-2-1+2)+(-3+4-1)i = 0\\). Donc \\(1\\) est solution (réelle) — c'est la plus « évidente » des candidates.</li>
    <li><b>2b)</b> \\((z-1)(z^2+bz+c) = z^3+(b-1)z^2+(c-b)z-c\\). Identification : \\(b-1 = -(2+3i)\\) → \\(b = -1-3i\\) ; \\(-c = 2-i\\) → \\(c = -2+i\\) ; contrôle \\(c-b = -2+i+1+3i = -1+4i = 4i-1\\) ✓. Donc \\(f(z) = (z-1)(z^2-(1+3i)z-2+i)\\) — le second facteur est exactement le membre de gauche de (E).</li>
    <li><b>2c)</b> \\(f(z) = 0 \\Leftrightarrow z = 1\\) ou \\(z\\in\\{1+2i\\ ;\\ i\\}\\) (solutions de (E)). Trois racines : \\(1\\), \\(1+2i\\), \\(i\\).</li>
    <li><b>3)</b> Placement : \\(C(1\\,;0)\\), \\(B(0\\,;1)\\), \\(A(1\\,;2)\\). Calcul : \\(\\dfrac{z_A-z_B}{z_C-z_B} = \\dfrac{1+2i-i}{1-i} = \\dfrac{1+i}{1-i} = \\dfrac{(1+i)^2}{(1-i)(1+i)} = \\dfrac{2i}{2} = i\\). Module \\(1\\) → \\(BA = BC\\) ; argument \\(\\frac{\\pi}{2}\\) → angle droit en \\(B\\). Le triangle \\(ABC\\) est rectangle isocèle en \\(B\\).</li>
  </ul>
  <div class="pourquoi"><b>Pourquoi \\(f\\) « contenait » (E) ?</b> Parce que le livre écrit \\(f\\) = (facteur linéaire) × (équation déjà résolue) : c'est la stratégie des sujets en cascade — chaque question prépare la suivante. À quoi ça sert ? Le réflexe « regarde si le trinôme factorisé ressemble à une question précédente » fait gagner des minutes précieuses à l'examen.</div>
  <div class="erreurs"><b>Erreurs classiques :</b> chercher la racine carrée de \\(2i\\) par le système complet alors que \\((1+i)^2 = 2i\\) est un réflexe à connaître ; dans l'identification, oublier le contrôle sur le coefficient de \\(z\\) ; déclarer le triangle « isocèle » sans vérifier l'angle (isocèle + angle droit = rectangle isocèle).</div>`,
  correctionText: 'Δ=2i, δ=±(1+i) ; racines (E) : 1+2i et i. f(1)=0 ; f(z)=(z-1)(z²-(1+3i)z-2+i) → b=-(1+3i), c=-2+i ; racines de f : 1, 1+2i, i. (zA-zB)/(zC-zB)=i → ABC rectangle isocèle en B.',
};
})();
