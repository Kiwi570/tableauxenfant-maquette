/* Boutique : grand titre puis bandeau de vraies créations qui défile, filtres tout de suite (module catalogue-filtres-flip),
   fiche en tiroir avec son propre lien (?produit=…), panier en tiroir (module panier-en-tiroir), bon à savoir, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { prix, ajoutRapide, icone } from '../gabarits/morceaux.mjs';

export const page = { cle: 'boutique', fichier: 'boutique', imagePartage: 'chambre-coussins-1280.webp' };

const RUBAN = ['toile-lady-coccinelle', 'affiche-motarde', 'coussin-lutine-rose', 'toile-aviateur', 'affiche-chevalier', 'coussin-pompier', 'toile-ecoliere', 'cartes-postales', 'affiche-danseuse', 'toile-lolita-lapin', 'coussin-aviateur', 'affiche-zorro'];

export default (c) => {
  const P = c.donnees.produits;
  const t = (k) => c.t(`boutique.${k}`);
  const groupe = (nom, valeurs) => html`<div class="cff__groupe" role="group" aria-label="${c.s(`boutique.${nom}`)}" data-filtre-groupe="${nom === 'categorie' ? 'cat' : nom}">
      <span class="cff__libelle">${t(nom)}</span>
      <button type="button" data-valeur="tout" aria-pressed="true">${nom === 'categorie' ? t('tout') : t('tous')}</button>
      ${valeurs.map((v) => html`<button type="button" data-valeur="${v}" aria-pressed="false">${t(v)}</button>`)}
    </div>`;
  return html`
<section class="ouv ouv-boutique" id="debut">
  <div class="conteneur ouv-boutique-tete">
    <p class="surtitre" data-anime="gsap">${t('surtitre')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${t('titre1')}</span></span> <span class="ligne-masque"><span class="ouv-ligne"><em data-iris-centre>${t('titre2')}</em></span></span></h1>
    <div class="ouv-boutique-bas" data-anime="gsap">
      <p class="ouv-intro masque-ecran-tres-bas">${t('texte')}</p>
      <p class="ouv-actions"><a class="bouton" href="#catalogue" data-action-principale data-sans-transition>${t('action')}</a> <span class="ouv-info" data-info-cle>${t('info')}</span></p>
    </div>
  </div>
  <div class="ruban-produits" data-effet="ruban-produits">
    <div class="ruban-piste" id="ruban-boutique" data-boucle-css aria-label="${c.s('boutique.ruban')}" role="img">
      ${[0, 1].map((k) => html`<ul class="ruban-liste"${k ? brut(' aria-hidden="true"') : ''}>${RUBAN.map((id, i) => {
        const p = P.find((x) => x.id === id);
        return html`<li class="ruban-item ruban-item--${p.cat}">${c.media({ nom: p.image, alt: k ? '' : p.titre, sizes: '(max-width: 760px) 40vw, 16vw', priorite: !k && i < 6 })}</li>`;
      })}</ul>`)}
    </div>
    <button type="button" class="ruban-pause" data-pause-pour="ruban-boutique" data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}"><span data-libelle-bouton>${c.t('commun.pause')}</span></button>
  </div>
</section>

<section class="cff catalogue conteneur" id="catalogue" data-module="catalogue-filtres-flip" aria-label="${c.s('boutique.filtres')}">
  <h2 class="catalogue-titre" data-anime="lignes">${t('catalogueTitre')}</h2>
  <div class="cff__filtres" data-anime>
    ${groupe('categorie', ['toiles', 'affiches', 'coussins', 'cadeaux'])}
    ${groupe('pour', ['fille', 'garcon'])}
    <div class="cff__ligne">
      <label class="cff__curseur">${t('budget')} <b data-sortie="prix"></b><input type="range" min="2" max="195" step="1" value="195" data-filtre-max="prix"></label>
      <label class="cff__tri">${t('tri')} <select data-tri><option value="ordre">${t('triOrdre')}</option><option value="prix-asc">${t('triPrixAsc')}</option><option value="prix-desc">${t('triPrixDesc')}</option></select></label>
      <label class="cff__recherche">${t('recherche')} <input type="search" data-recherche placeholder="${c.s('boutique.recherchePlaceholder')}" autocomplete="off"></label>
    </div>
    <p class="cff__compte" aria-live="polite"><b data-compte>${P.length}</b> <span data-compte-mot>${t('comptePlusieurs')}</span> · <button type="button" class="lien" data-reinit>${t('reinit')}</button></p>
  </div>
  <div class="cff__grille" data-grille>
    ${P.map((p, i) => html`<article class="cff__fiche produit${p.dispo ? '' : ' produit--epuise'}" data-cat="${p.cat}" data-pour="${p.pour === 'tous' ? 'fille garcon' : p.pour}" data-prix="${p.prix}" data-ordre="${i}" data-mots="${p.titre.toLowerCase()} ${p.cat}" data-produit="${p.id}" data-panier-produit>
      <a class="produit-lien" href="${c.url('boutique', '', `produit=${p.id}`)}" data-fiche="${p.id}" data-sans-transition>
        ${c.media({ nom: p.image, alt: p.titre, classe: `produit-media produit-media--${p.cat}`, sizes: '(max-width: 760px) 46vw, 23vw' })}
        <span class="produit-texte"><span class="produit-titre">${p.titre}</span><span class="produit-prix" data-prix>${p.modeles ? 'l’unité ' : ''}${prix(p.prix)}</span>${p.dispo ? '' : html`<span class="produit-epuise">${c.t('commun.epuise')}</span>`}</span>
      </a>
      ${ajoutRapide(c, p, { ficheDansLaPage: true })}
    </article>`)}
    <p class="cff__vide" data-vide hidden>${t('vide')} <button type="button" class="lien" data-reinit>${t('reinit')}</button></p>
  </div>
</section>

<div class="fiche" id="fiche" data-fiche-tiroir role="dialog" aria-modal="true" aria-labelledby="fiche-titre" hidden data-recouvrement>
  <div class="fiche-voile" data-fiche-fermer></div>
  <div class="fiche-panneau">
    <button type="button" class="fiche-fermer" data-fiche-fermer aria-label="${c.s('boutique.fermer')}"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2"/></svg></button>
    <div class="fiche-corps" data-panier-produit>
      <figure class="fiche-media"><img data-fiche-image src="/assets/images/toile-zebulon-coccinelle-800.webp" alt="" width="800" height="800"></figure>
      <div class="fiche-texte">
        <p class="surtitre" data-fiche-cat></p>
        <h2 id="fiche-titre" data-fiche-titre></h2>
        <p class="fiche-prix" data-prix data-fiche-prix></p>
        <p data-fiche-details></p>
        <div class="fiche-options" data-fiche-options></div>
        <p class="fiche-dispo" data-fiche-dispo></p>
        <a class="bouton fiche-ajouter" href="#catalogue" data-panier-ajouter data-sans-transition data-grille="retour">${c.t('commun.ajouter')}</a>
      </div>
    </div>
  </div>
</div>
<script type="application/json" id="donnees-produits">${brut(JSON.stringify(P.map((p) => ({ ...p, prixTexte: prix(p.prix) }))).replace(/</g, '\\u003c'))}</script>

<section class="bon fond-rose" id="bon-a-savoir">
  <div class="conteneur">
    <h2 data-anime="lignes">${t('bonTitre')}</h2>
    <ul class="bon-liste" data-anime="cascade">${[1, 2, 3, 4].map((n) => html`<li>${icone(['colis', 'balance', 'calendrier', 'palette'][n - 1])}<h3>${t(`bon${n}t`)}</h3><p>${t(`bon${n}`)}</p></li>`)}</ul>
  </div>
</section>

<section class="fin fond-sombre" id="fin">
  <div class="conteneur fin-grille">
    <div class="fin-texte">
      <h2 data-anime="lignes">${t('finTitre')}</h2>
      <p data-anime>${t('finTexte')}</p>
      <p class="fin-actions" data-anime>${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: t('finAction') })}</p>
    </div>
    ${c.media({ nom: 'chambre-paul', alt: c.s('mesure.realAlt'), classe: 'fin-media', sizes: '(max-width: 760px) 90vw, 40vw', cadrage: '40% 35%', legende: c.s('commun.situation'), attrs: 'data-anime="rideau"' })}
  </div>
</section>
`;
};
