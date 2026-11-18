/* Accueil : la toile qui se peint, trois façons d'offrir, les toiles originales en galerie, voir au mur,
   le sur-mesure en quatre étapes (le fond change), Sevb, affiches et séries limitées, avis, livraison, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { toilePeinte, carteProduit, avis, prix, FONDS, murAccroche } from '../gabarits/morceaux.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'chambre-paul-1000.webp' };

const MUR_TOILES = ['toile-lady-coccinelle', 'toile-aviateur', 'toile-ours-doudou'];
/* Chaque fond du sur-mesure et une vraie toile de Sevb peinte sur ce fond. */
const FOND_TOILES = { uni: 'toile-petite-peche', rayures: 'toile-lolita-lunettes', pois: 'toile-princesse-pois', quadrillage: 'toile-prince-turquoise' };
const GALERIE = ['toile-coquine-ballons', 'toile-ecoliere', 'toile-lutine-ardoise', 'toile-femme-affaires', 'toile-prince-nb', 'toile-lolita-lapin', 'toile-chipie-modele'];

export default (c) => {
  const P = c.donnees.produits;
  const trouve = (id) => P.find((p) => p.id === id);
  const toiles = GALERIE.map(trouve);
  const vitrine = ['affiche-danseuse', 'coussin-pompier', 'cadre-sobre', 'cartes-postales'].map(trouve);
  return html`
<section class="ouv ouv-accueil" id="debut">
  <div class="ouv-texte">
    <p class="surtitre" data-anime="gsap">${c.t('accueil.ouverture.surtitre')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('accueil.ouverture.titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('accueil.ouverture.titre2')}</em></span></span></h1>
    <p class="ouv-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.ouverture.texte')}</p>
    <p class="ouv-actions" data-anime="gsap">
      ${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('accueil.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('boutique', { classe: 'bouton bouton--contour masque-ecran-tres-bas', texte: c.t('accueil.ouverture.boutique') })}
    </p>
    <p class="ouv-info" data-info-cle data-anime="gsap">${c.t('accueil.ouverture.info')}</p>
  </div>
  <div class="ouv-scene">
    <div class="ouv-mur" aria-hidden="true" data-fx-mur></div>
    ${toilePeinte(c, { nom: 'toile-zebulon-coccinelle', alt: c.s('accueil.ouverture.alt'), priorite: true, id: 'ouv', sizes: '(max-width: 760px) 70vw, 34vw' })}
    <p class="toile-cartel" data-anime="gsap">${c.t('accueil.ouverture.cartel')} · <b>145 €</b></p>
  </div>
</section>

<section class="offrir conteneur" id="offrir">
  <div class="tete-section">
    <p class="surtitre">${c.t('accueil.offrir.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('accueil.offrir.titre')}</h2>
  </div>
  <div class="offrir-grille" data-anime="cascade">
    <a class="offre" href="${c.url('boutique', 'catalogue', 'categorie=toiles')}" data-libelle="${c.libelle('boutique')}" data-fx="vitesse">
      ${c.media({ nom: 'toile-lolita-coccinelle', alt: '', classe: 'offre-media', sizes: '(max-width: 760px) 90vw, 30vw', cadrage: '50% 30%' })}
      <span class="offre-texte"><span class="offre-titre">${c.t('accueil.offrir.toile')}</span><span class="offre-desc">${c.t('accueil.offrir.toileTexte')}</span><span class="offre-pied"><b data-prix>${c.t('accueil.offrir.toilePrix')}</b> <span class="offre-lien">${c.t('accueil.offrir.voirToiles')}</span></span></span>
    </a>
    <a class="offre offre--phare" href="${c.url('sur-mesure')}" data-libelle="${c.libelle('sur-mesure')}" data-fx="vitesse">
      ${c.media({ nom: 'chambre-paul', alt: '', classe: 'offre-media', sizes: '(max-width: 760px) 90vw, 30vw', cadrage: '38% 40%' })}
      <span class="offre-texte"><span class="offre-titre">${c.t('accueil.offrir.mesure')}</span><span class="offre-desc">${c.t('accueil.offrir.mesureTexte')}</span><span class="offre-pied"><b data-prix>${c.t('accueil.offrir.mesurePrix')}</b> <span class="offre-lien">${c.t('accueil.offrir.voirMesure')}</span></span></span>
    </a>
    <a class="offre" href="${c.url('boutique', 'catalogue', 'categorie=affiches')}" data-libelle="${c.libelle('boutique')}" data-fx="vitesse">
      ${c.media({ nom: 'detail-motarde', alt: '', classe: 'offre-media', sizes: '(max-width: 760px) 90vw, 30vw' })}
      <span class="offre-texte"><span class="offre-titre">${c.t('accueil.offrir.affiche')}</span><span class="offre-desc">${c.t('accueil.offrir.afficheTexte')}</span><span class="offre-pied"><b data-prix>${c.t('accueil.offrir.affichePrix')}</b> <span class="offre-lien">${c.t('accueil.offrir.voirAffiches')}</span></span></span>
    </a>
  </div>
</section>

<section class="toiles ecran epingle fond-rose" id="toiles" data-fx="galerie">
  <div class="conteneur toiles-tete">
    <h2 data-anime="lignes">${c.t('accueil.toiles.titre')}</h2>
    <p class="masque-ecran-bas">${c.t('accueil.toiles.texte')}</p>
  </div>
  <div class="piste toiles-piste" data-galerie tabindex="0" role="region" aria-label="${c.s('accueil.toiles.region')}">
    ${toiles.map((p) => carteProduit(c, p, { classe: 'toile-carte', sizes: '(max-width: 760px) 70vw, 30vw' }))}
    <a class="toiles-fin" href="${c.url('boutique', 'catalogue', 'categorie=toiles')}" data-libelle="${c.libelle('boutique')}"><span>${c.t('accueil.toiles.tout')}</span><svg viewBox="0 0 40 16" aria-hidden="true"><path d="M2 8h34M30 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/></svg></a>
  </div>
  <div class="galerie-progres" aria-hidden="true"><span></span></div>
</section>

<section class="mur conteneur" id="mur" data-effet="voir-au-mur">
  <div class="tete-section">
    <h2 data-anime="lignes">${c.t('accueil.mur.titre')}</h2>
    <p>${c.t('accueil.mur.texte')}</p>
  </div>
  <div class="mur-corps">
    <div class="mur-scene" data-mur-scene data-mur="rose">
      ${['rose', 'bleue', 'sauge'].map((m, i) => c.media({ nom: `grok/chambre-${m}`, alt: c.s(`accueil.mur.${m === 'bleue' ? 'bleu' : m}`), classe: `mur-photo mur-photo--${m}${i === 0 ? ' est-active' : ''}`, sizes: '(max-width: 760px) 100vw, 66vw', attrs: `data-mur-photo="${m}"` }))}
      <div class="mur-toile" data-mur-toile>
        ${MUR_TOILES.map((id, i) => c.media({ nom: id, alt: trouve(id).titre, classe: `mur-toile-media${i === 0 ? ' est-active' : ''}`, sizes: '20vw', attrs: `data-mur-image="${id}"` }))}
      </div>
    </div>
    <div class="mur-commandes">
      <fieldset><legend>${c.t('accueil.mur.toile')}</legend>
        <div class="mur-choix">${MUR_TOILES.map((id, i) => html`<button type="button" class="mur-vignette" data-mur-choix-toile="${id}" aria-pressed="${i === 0 ? 'true' : 'false'}" aria-label="${trouve(id).titre}">${c.media({ nom: id, alt: '', sizes: '64px' })}</button>`)}</div>
      </fieldset>
      <fieldset><legend>${c.t('accueil.mur.murChoix')}</legend>
        <div class="mur-choix">${[['rose', 'rose'], ['bleue', 'bleu'], ['sauge', 'sauge']].map(([m, k], i) => html`<button type="button" class="mur-pastille mur-pastille--${m}" data-mur-choix-mur="${m}" aria-pressed="${i === 0 ? 'true' : 'false'}"><span aria-hidden="true"></span>${c.t(`accueil.mur.${k}`)}</button>`)}</div>
      </fieldset>
      <p class="mur-cartel" aria-live="polite"><b data-mur-titre>${trouve(MUR_TOILES[0]).titre}</b><br>${c.t('accueil.mur.cartel')}</p>
      <p class="mur-echelle">${c.t('accueil.mur.echelle')}</p>
      ${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('accueil.mur.action') })}
    </div>
  </div>
</section>

<section class="mesure fond-rose" id="sur-mesure">
  <div class="conteneur mesure-grille">
    <div class="mesure-colle">
      <div class="mesure-toile" data-effet="fonds" data-fond="uni" role="img" aria-label="${c.s('accueil.mesure.toileAlt')}">
        ${FONDS.map((f) => html`<span class="fond fond--${f}" data-fond-calque="${f}"></span><div class="fond-toile" data-fond-toile="${f}">${c.media({ nom: FOND_TOILES[f], alt: '', sizes: '(max-width: 860px) 300px, 34vw' })}</div>`)}
        <span class="mesure-toile-nom" data-fond-nom>${c.t('accueil.mesure.fondUni')}</span>
      </div>
      <ul class="mesure-fonds" aria-hidden="true">${FONDS.map((f, i) => html`<li data-fond-repere="${f}" data-fond-exemple="${trouve(FOND_TOILES[f]).titre}"${i === 0 ? brut(' class="est-actif"') : ''}><span class="pastille fond--${f}"></span>${c.t(`accueil.mesure.fond${f[0].toUpperCase() + f.slice(1)}`)}</li>`)}</ul>
      <p class="mesure-exemple" aria-live="polite">${c.t('accueil.mesure.exemple')} <b data-fond-exemple-titre>${trouve(FOND_TOILES.uni).titre}</b></p>
    </div>
    <div class="mesure-texte">
      <p class="surtitre">${c.t('accueil.mesure.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.mesure.titre')}</h2>
      <p class="mesure-intro" data-anime>${c.t('accueil.mesure.texte')}</p>
      <ol class="etapes">
        ${[1, 2, 3, 4].map((n) => html`<li class="etape" data-etape-fond="${FONDS[n - 1]}" data-anime><span class="etape-num">${n}</span><h3>${c.t(`accueil.mesure.e${n}t`)}</h3><p>${c.t(`accueil.mesure.e${n}`)}</p></li>`)}
      </ol>
      <p class="mesure-delai"><b data-prix>185 €</b> · ${c.t('accueil.mesure.delai')}</p>
      ${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('accueil.mesure.action'), attrs: 'data-survol="magnetique"' })}
    </div>
  </div>
</section>

<section class="sevb fond-sombre" id="sevb">
  <div class="conteneur sevb-grille">
    ${c.media({ nom: 'sevb-atelier', alt: c.s('accueil.sevb.alt'), classe: 'sevb-media', sizes: '(max-width: 760px) 90vw, 36vw', cadrage: '62% 45%', attrs: 'data-anime="rideau"' })}
    <div class="sevb-texte">
      <p class="surtitre">${c.t('accueil.sevb.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.sevb.titre')}</h2>
      <p data-anime>${c.t('accueil.sevb.texte')}</p>
      <blockquote class="sevb-citation" data-anime="mots"><p>${c.t('accueil.sevb.citation')}</p></blockquote>
      <p class="sevb-chiffre"><span>${c.t('accueil.sevb.anneesAvant')}</span> <strong data-compteur="20">20</strong> <span>${c.t('accueil.sevb.annees')}</span></p>
      ${c.lien('artiste', { classe: 'bouton bouton--clair', texte: c.t('accueil.sevb.action') })}
    </div>
  </div>
</section>

<section class="plus" id="plus">
  <div class="plus-ruban" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel>
    <p data-fx-rangee>${c.t('accueil.plus.ruban')} ${c.t('accueil.plus.ruban')}</p>
  </div>
  <div class="conteneur plus-grille">
    <div class="plus-texte">
      <h2 data-anime="lignes">${c.t('accueil.plus.titre')}</h2>
      <p data-anime>${c.t('accueil.plus.texte')}</p>
      ${c.lien('boutique', { classe: 'bouton bouton--contour', texte: c.t('accueil.plus.action') })}
    </div>
    ${c.media({ nom: 'chambre-coussins', alt: c.s('accueil.plus.alt'), classe: 'plus-media', sizes: '(max-width: 760px) 100vw, 60vw', legende: c.s('commun.situation'), attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  </div>
  <div class="conteneur plus-produits" data-anime="cascade">
    ${vitrine.map((p) => carteProduit(c, p, { sizes: '(max-width: 760px) 46vw, 20vw' }))}
  </div>
</section>

<section class="avis fond-rose" id="avis">
  <div class="conteneur">
    <div class="tete-section">
      <h2 data-anime="lignes">${c.t('accueil.avis.titre')}</h2>
      <p>${c.t('accueil.avis.texte')}</p>
    </div>
    ${avis(c)}
  </div>
</section>

<section class="fin fond-sombre" id="fin">
  <div class="conteneur fin-grille">
    <div class="fin-texte">
      <h2 data-anime="lignes">${c.t('accueil.fin.titre')}</h2>
      <p data-anime>${c.t('accueil.fin.texte')}</p>
      <p class="fin-actions" data-anime>
        ${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('accueil.fin.action'), attrs: 'data-survol="magnetique"' })}
        ${c.lien('contact', { params: 'sujet=mesure', classe: 'bouton bouton--clair', texte: c.t('accueil.fin.ecrire') })}
      </p>
    </div>
    ${murAccroche(c, ['affiche-zebulon', 'affiche-chevalier', 'affiche-fee-rose', 'affiche-pompier', 'affiche-lolita-bleue'], { cadre: 'affiche' })}
  </div>
</section>
`;
};
