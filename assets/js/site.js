/* Effets propres à Tableaux Enfant. Le socle gère ouverture, voile, en-tête, menu, boucles, mesures et la bibliothèque
   d'effets (data-anime, data-fx, data-survol). Effets du plan, chacun marqué data-effet :
   - toile-peinte : la vraie toile apparaît sous trois coups de pinceau qui effacent son fond à pois, puis se balance au défilement ;
   - fonds : la toile du sur-mesure change de fond (uni, rayures, pois, quadrillage) à chaque étape ;
   - voir-au-mur : la toile se pose et se balance sur le mur d'une chambre, à l'échelle, environ ;
   - composeur : l'aperçu du sur-mesure suit les choix du visiteur et s'incline au défilement ;
   - ruban-produits : bandeau des créations de la boutique ; portrait-cadre : signature de Sevb qui se pose.
   Modules de la bibliothèque : panier-en-tiroir, envol-vers-le-panier (appelé par le panier), catalogue-filtres-flip. */
import { demarrer, boucle, versObjet, quand, bloquerDefilement, debloquerDefilement, suivre, lacher, rafraichir } from './socle/index.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const telephone = () => matchMedia('(max-width: 760px)').matches;

/* ---------- toile-peinte ---------- */
function peindre(toile, { delai = 0 } = {}) {
  if (!toile || toile.classList.contains('est-peinte')) return;
  const coups = $$('.coup', toile);
  if (!gsap || !coups.length) { toile.classList.add('est-peinte'); return; }
  gsap.fromTo(coups, { strokeDashoffset: 1 }, {
    strokeDashoffset: 0, duration: 0.55, ease: 'power2.inOut', stagger: 0.22, delay: delai,
    onComplete: () => toile.classList.add('est-peinte'),
  });
}
function toileAuDefilement() {
  const ouv = $('.ouv-accueil');
  if (!ouv || !gsap || !window.ScrollTrigger) return;
  /* La toile accrochée se balance doucement sur ses deux fils, toute seule, après l'ouverture. */
  const toile = $('.toile', ouv);
  if (toile) quand('pret', () => {
    gsap.set(toile, { transformOrigin: '50% -12%' });
    let t = 0;
    boucle(toile, (dt) => { t += dt; gsap.set(toile, { rotate: Math.sin(t * 1.15) * 1.1 }); });
  });
  gsap.to('.ouv-accueil .toile-cadre', { rotate: -3.5, y: 36, ease: 'none', scrollTrigger: { trigger: ouv, start: 'top top', end: 'bottom top', scrub: 0.6 } });
  gsap.to('.ouv-accueil .ouv-mur', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: ouv, start: 'top top', end: 'bottom top', scrub: true } });
}

/* ---------- fonds (accueil, le sur-mesure en quatre étapes) ---------- */
function fonds() {
  const toile = $('[data-effet="fonds"]');
  if (!toile) return;
  const nom = $('[data-fond-nom]', toile);
  const libelles = Object.fromEntries($$('[data-fond-repere]').map((li) => [li.dataset.fondRepere, li.textContent.trim()]));
  const ordre = ['uni', 'rayures', 'pois', 'quadrillage'];
  let courant = 'uni';
  const poser = (f) => {
    if (f === courant) return;
    const avant = ordre.indexOf(courant), apres = ordre.indexOf(f);
    courant = f; toile.dataset.fond = f;
    if (nom) nom.textContent = libelles[f] || f;
    $$('[data-fond-repere]').forEach((li) => li.classList.toggle('est-actif', li.dataset.fondRepere === f));
    for (const calque of $$('[data-fond-calque]', toile)) {
      const i = ordre.indexOf(calque.dataset.fondCalque);
      const visible = i <= apres;
      if (!gsap) { calque.style.clipPath = visible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)'; continue; }
      if (i === apres && apres > avant) gsap.fromTo(calque, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'power3.inOut' });
      else if (i > apres && i <= avant) gsap.to(calque, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.6, ease: 'power3.inOut' });
      else gsap.set(calque, { clipPath: visible ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' });
    }
  };
  if (!window.ScrollTrigger) return;
  const mm = gsap.matchMedia();
  /* Ordinateur : la toile reste collée à côté des étapes, son fond suit l'étape lue. */
  mm.add('(min-width: 861px)', () => {
    $$('[data-etape-fond]').forEach((etape) => {
      ScrollTrigger.create({ trigger: etape, start: 'top 62%', end: 'bottom 62%', onToggle: (s) => { if (s.isActive) poser(etape.dataset.etapeFond); } });
    });
  });
  /* Téléphone et tablette en une colonne : la toile passe sous les étapes ; elle parcourt les fonds toute seule tant qu'elle est à l'écran. */
  mm.add('(max-width: 860px)', () => {
    let i = 0, t = 0.6;
    const b = boucle(toile, (dt) => { t += dt; if (t > 1.0) { t = 0; i = (i + 1) % ordre.length; poser(ordre[i]); } });
    return () => b.arreter();
  });
}

/* ---------- voir-au-mur ---------- */
/* Position (centre) et largeur de la toile de 50 cm dans chaque photo, en % de l'image, d'après les meubles visibles
   (tabouret d'environ 45 cm, oreillers d'environ 50 cm) : échelle indicative. */
const MURS = {
  rose: { x: 47, y: 37, l: 19, xm: 46, ym: 36, lm: 30 },
  bleue: { x: 60, y: 38, l: 19, xm: 56, ym: 36, lm: 30 },
  sauge: { x: 62, y: 35, l: 18, xm: 58, ym: 34, lm: 29 },
};
function voirAuMur() {
  const section = $('[data-effet="voir-au-mur"]');
  if (!section) return;
  const scene = $('[data-mur-scene]', section), toile = $('[data-mur-toile]', section), titre = $('[data-mur-titre]', section);
  const placer = (m) => {
    const p = MURS[m]; const tel = matchMedia('(max-width: 760px) and (orientation: portrait)').matches;
    toile.style.setProperty('--x', (tel ? p.xm : p.x) + '%');
    toile.style.setProperty('--y', (tel ? p.ym : p.y) + '%');
    toile.style.setProperty('--l', (tel ? p.lm : p.l) + '%');
  };
  const balancer = () => { if (gsap) gsap.fromTo(toile, { rotate: 5 }, { rotate: 0, duration: 1.6, ease: 'elastic.out(1, 0.35)' }); };
  let mur = 'rose';
  placer(mur);
  addEventListener('resize', () => placer(mur));
  section.addEventListener('click', (e) => {
    const bt = e.target.closest('[data-mur-choix-toile]');
    const bm = e.target.closest('[data-mur-choix-mur]');
    if (bt) {
      $$('[data-mur-choix-toile]', section).forEach((b) => b.setAttribute('aria-pressed', String(b === bt)));
      $$('[data-mur-image]', section).forEach((f) => f.classList.toggle('est-active', f.dataset.murImage === bt.dataset.murChoixToile));
      if (titre) titre.textContent = bt.getAttribute('aria-label');
      balancer();
    }
    if (bm) {
      mur = bm.dataset.murChoixMur;
      $$('[data-mur-choix-mur]', section).forEach((b) => b.setAttribute('aria-pressed', String(b === bm)));
      $$('[data-mur-photo]', section).forEach((f) => f.classList.toggle('est-active', f.dataset.murPhoto === mur));
      scene.dataset.mur = mur;
      placer(mur); balancer();
    }
  });
  /* Au défilement : la toile descend se poser sur le mur, se balance, puis suit légèrement le défilement. */
  if (gsap && window.ScrollTrigger) {
    gsap.fromTo(toile, { yPercent: -60, rotate: -7 }, { yPercent: 0, rotate: 0, ease: 'none', scrollTrigger: { trigger: scene, start: 'top 85%', end: 'top 35%', scrub: 0.8 } });
  }
}

/* ---------- composeur (sur-mesure) ---------- */
const COULEURS = { rose: '#E8A9B4', framboise: '#C2304F', turquoise: '#2BA4A8', anis: '#A8C64B', marine: '#1F3A5F', noir: '#2A2A2A' };
function composeur() {
  const form = $('[data-composeur]'), apercu = $('[data-effet="composeur"]');
  if (!form || !apercu) return;
  const recap = $('[data-recap]', form), prenom = $('[data-apercu-prenom]', apercu);
  const exemple = prenom ? prenom.textContent : '';
  const lire = () => {
    const d = new FormData(form);
    const fond = d.get('fond') || 'pois', couleur = d.get('couleur') || 'rose';
    apercu.dataset.fond = fond; apercu.dataset.couleur = couleur;
    apercu.style.setProperty('--c', COULEURS[couleur]);
    const p = (d.get('prenom') || '').trim();
    if (prenom) prenom.textContent = p || exemple;
    const lab = (name) => { const i = form.querySelector(`input[name="${name}"]:checked`); return i ? i.closest('label').textContent.trim() : ''; };
    const univers = $$('input[name="univers"]:checked', form).map((i) => i.closest('label').textContent.trim().toLowerCase());
    if (recap) recap.textContent = `Toile 50 × 50 cm · fond ${lab('fond').toLowerCase()} · ${lab('couleur').toLowerCase()}${univers.length ? ' · ' + univers.join(', ') : ''}${p ? ` · « ${p} »` : ''} · ${lab('occasion').toLowerCase()}`;
  };
  form.addEventListener('input', lire); form.addEventListener('change', lire);
  lire();
  if (gsap && window.ScrollTrigger) gsap.fromTo(apercu, { rotate: -2.5 }, { rotate: 2, ease: 'none', scrollTrigger: { trigger: '#composer', start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
}

/* ---------- portrait-cadre (L'artiste) ---------- */
function portrait() {
  const sig = $('[data-effet="portrait-cadre"]');
  if (!sig || !gsap || !window.ScrollTrigger) return;
  gsap.to(sig, { rotate: -2, xPercent: -18, yPercent: -40, ease: 'none', scrollTrigger: { trigger: '.ouv-artiste', start: 'top top', end: 'bottom top', scrub: 0.6 } });
  gsap.to('.ouv-artiste .portrait-media img', { scale: 1.08, yPercent: 4, ease: 'none', scrollTrigger: { trigger: '.ouv-artiste', start: 'top top', end: 'bottom top', scrub: true } });
}

/* ---------- appels finaux : les petites toiles montent à des vitesses différentes ---------- */
function finToiles() {
  if (!gsap || !window.ScrollTrigger) return;
  $$('.fin-toiles li').forEach((li, i) => {
    gsap.fromTo(li.querySelector('.media'), { y: 40 + i * 18 }, { y: -10 - i * 6, ease: 'none', scrollTrigger: { trigger: li.closest('section'), start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

/* ---------- boutique : fiche en tiroir (?produit=…) ---------- */
function boutique() {
  const tiroir = $('[data-fiche-tiroir]'), source = $('#donnees-produits');
  if (!tiroir || !source) return;
  let produits = [];
  try { produits = JSON.parse(source.textContent); } catch { return; }
  const par = Object.fromEntries(produits.map((p) => [p.id, p]));
  const CATS = { toiles: 'Toile originale', affiches: 'Affiche A4', coussins: 'Coussin · série limitée', cadeaux: 'Petit cadeau' };
  const img = $('[data-fiche-image]', tiroir), ajouter = $('[data-panier-ajouter]', tiroir);
  let ouvreur = null, ouverte = false;
  const champ = (id, label, contenu, aide = '') => `<div class="champ"><label for="${id}">${label}</label>${contenu}${aide ? `<p class="champ-aide">${aide}</p>` : ''}</div>`;
  function remplir(p) {
    const large = `/assets/images/${p.image}-800.webp`;
    img.src = large; img.alt = p.titre;
    img.width = 800; img.height = p.ratio === '7:10' ? 1143 : p.ratio === '3:4' ? 1067 : p.ratio === '4:5' ? 1000 : 800;
    $('[data-fiche-cat]', tiroir).textContent = CATS[p.cat] || '';
    $('[data-fiche-titre]', tiroir).textContent = p.titre;
    $('[data-fiche-prix]', tiroir).textContent = (p.modeles ? 'l’unité ' : '') + p.prixTexte;
    $('[data-fiche-details]', tiroir).textContent = p.details;
    let options = '';
    if (p.dos && p.dos.length > 1) options += champ('fo-dos', 'Dos du coussin', `<select id="fo-dos" data-panier-option="Dos">${p.dos.map((d) => `<option>${d}</option>`).join('')}</select>`);
    else if (p.dos) options += `<input type="hidden" data-panier-option="Dos" value="${p.dos[0]}">`;
    if (p.modeles) options += champ('fo-modele', 'Modèle', `<select id="fo-modele" data-panier-option="Modèle">${p.modeles.map((m) => `<option>${m}</option>`).join('')}</select>`);
    if (p.cat === 'affiches' || p.cat === 'toiles') options += champ('fo-prenom', 'Prénom ou petit mot (facultatif)', '<input id="fo-prenom" maxlength="24" autocomplete="off" data-prenom>', 'Sevb l’ajoute sur demande ; il apparaît dans la ligne du panier.');
    $('[data-fiche-options]', tiroir).innerHTML = options;
    $('[data-fiche-dispo]', tiroir).textContent = p.dispo ? 'Disponible' : 'Épuisée : Sevb peut en peindre une sur mesure.';
    ajouter.dataset.panierAjouter = p.id; ajouter.dataset.nom = p.titre; ajouter.dataset.prix = String(p.prix);
    ajouter.dataset.image = `/assets/images/${p.image}-400.webp`;
    ajouter.toggleAttribute('aria-disabled', !p.dispo);
    if (!p.dispo) ajouter.setAttribute('aria-disabled', 'true'); else ajouter.removeAttribute('aria-disabled');
    ajouter.textContent = p.dispo ? 'Ajouter au panier' : 'Épuisée';
  }
  function ouvrir(id, depuis) {
    const p = par[id]; if (!p) return;
    remplir(p);
    ouvreur = depuis || document.activeElement;
    tiroir.hidden = false; ouverte = true;
    bloquerDefilement('fiche'); suivre(tiroir);
    const u = new URL(location.href); u.searchParams.set('produit', id); history.replaceState(history.state, '', u);
    if (gsap) gsap.fromTo($('.fiche-panneau', tiroir), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' });
    requestAnimationFrame(() => $('.fiche-fermer', tiroir).focus());
  }
  function fermer() {
    if (!ouverte) return;
    ouverte = false; tiroir.hidden = true; lacher(tiroir); debloquerDefilement('fiche');
    const u = new URL(location.href); u.searchParams.delete('produit'); history.replaceState(history.state, '', u);
    if (ouvreur && ouvreur.isConnected) ouvreur.focus();
  }
  document.addEventListener('click', (e) => {
    const lien = e.target.closest('[data-fiche]');
    if (lien && !e.metaKey && !e.ctrlKey) { e.preventDefault(); ouvrir(lien.dataset.fiche, lien); return; }
    if (e.target.closest('[data-fiche-fermer]')) fermer();
  });
  /* Le prénom passe dans les options de la ligne du panier. */
  tiroir.addEventListener('input', (e) => {
    if (!e.target.matches('[data-prenom]')) return;
    const v = e.target.value.trim();
    if (v) e.target.setAttribute('data-panier-option', 'Prénom'); else e.target.removeAttribute('data-panier-option');
  });
  /* Après l'ajout, la fiche se referme pour laisser voir l'envol vers le panier. */
  ajouter.addEventListener('click', (e) => { if (ajouter.getAttribute('aria-disabled') === 'true') { e.preventDefault(); e.stopPropagation(); return; } setTimeout(fermer, 60); });
  document.addEventListener('keydown', (e) => {
    if (!ouverte) return;
    if (e.key === 'Escape') { e.preventDefault(); fermer(); }
    if (e.key === 'Tab') {
      const f = $$('a[href], button, input:not([type="hidden"]), select, textarea', tiroir).filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  const q = new URLSearchParams(location.search).get('produit');
  if (q && par[q]) quand('pret', () => ouvrir(q));
}

/* ---------- modules de la bibliothèque ---------- */
async function modules() {
  const panier = $('[data-module="panier-en-tiroir"]');
  if (panier) { try { const m = await import('./modules/panier-en-tiroir/module.js?v=1'); await m.init(panier); } catch (err) { console.error('[panier]', err); } }
  const cat = $('[data-module="catalogue-filtres-flip"]');
  if (cat) {
    try {
      const m = await import('./modules/catalogue-filtres-flip/module.js?v=1');
      await m.init(cat, { mots: ['création', 'créations'], format: (n) => n + ' €' });
      rafraichir();
    } catch (err) { console.error('[catalogue]', err); }
  }
}

/* ---------- ouverture : intro, arrivée par le voile, état final ---------- */
function partiesOuverture(tl, t0) {
  const ouv = $('.ouv'); if (!ouv) return;
  const lignes = $$('.ouv-ligne', ouv);
  tl.fromTo($$('.ouv-titre', ouv), { opacity: 0 }, { opacity: 1, duration: 0.01 }, t0);
  if (lignes.length) tl.fromTo(lignes, { yPercent: 115 }, { yPercent: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out' }, t0);
  const autres = $$('[data-anime="gsap"]:not(.ouv-titre)', ouv);
  if (autres.length) tl.fromTo(autres, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' }, t0 + 0.15);
}

demarrer({
  preparer() {
    toileAuDefilement();
    fonds();
    voirAuMur();
    composeur();
    portrait();
    finToiles();
    boutique();
    modules();
  },
  /* Intro (2,3 s) : le cadre accroché du logo et les quatre échantillons de fond s'ouvrent en éventail ; le cadre glisse
     jusqu'à l'objet de la page et l'écran s'ouvre en cercle depuis lui ; sur l'accueil, trois coups de pinceau révèlent la toile. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-nom, .ouverture-ligne', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08 }, 0.05)
      .fromTo('.ouverture-fonds span', { y: 24, scale: 0.4, rotate: (i) => (i - 1.5) * 18, opacity: 0 }, { y: 0, scale: 1, rotate: (i) => (i - 1.5) * 6, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'back.out(2)' }, 0.15)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-fonds', { opacity: 0, duration: 0.26 }, 0.72);
    versObjet(tl, { a: 0.85 });
    partiesOuverture(tl, 1.35);
    const toile = $('.ouv-accueil .toile');
    if (toile) tl.call(() => peindre(toile), null, 1.4);
    return tl;
  },
  etatFinal() {
    $$('.toile').forEach((t) => t.classList.add('est-peinte'));
    if (!gsap) return;
    gsap.set('.ouv-ligne, .ouv [data-anime="gsap"], .ouv-titre', { clearProps: 'transform,opacity' });
  },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ delay: 0.12 });
    partiesOuverture(tl, 0);
    const toile = $('.ouv-accueil .toile');
    if (toile) peindre(toile, { delai: 0.35 });
  },
});
