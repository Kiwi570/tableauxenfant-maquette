/* Morceaux communs aux pages : carte produit, toile qui se peint, fonds, avis, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

export const prix = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ',')) + ' €';

/* La toile accrochée (crochets du logo), avec son fond à pois qui se fait recouvrir au pinceau (effet toile-peinte). */
export function toilePeinte(c, { nom, alt, classe = '', iris = true, sizes = '(max-width: 760px) 78vw, 40vw', priorite = false, id = 'tp' } = {}) {
  return html`<div class="toile ${classe}"${iris ? brut(' data-iris-centre') : ''} data-effet="toile-peinte">
  <span class="toile-fils" aria-hidden="true"></span>
  <div class="toile-cadre">
    ${c.media({ nom, alt, priorite, classe: 'toile-media', sizes })}
    <svg class="toile-couverture" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="${id}-pois" width="9" height="9" patternUnits="userSpaceOnUse"><rect width="9" height="9" fill="#F6E4DF"/><circle cx="4.5" cy="4.5" r="1.9" fill="#C2304F"/></pattern>
        <mask id="${id}-masque" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <rect width="100" height="100" fill="#fff"/>
          <path class="coup" pathLength="1" d="M-14 18 C 20 4, 52 30, 114 10" fill="none" stroke="#000" stroke-width="42" stroke-linecap="round"/>
          <path class="coup" pathLength="1" d="M114 50 C 76 36, 40 66, -14 48" fill="none" stroke="#000" stroke-width="42" stroke-linecap="round"/>
          <path class="coup" pathLength="1" d="M-14 86 C 24 72, 60 100, 114 84" fill="none" stroke="#000" stroke-width="42" stroke-linecap="round"/>
        </mask>
      </defs>
      <rect width="100" height="100" fill="url(#${id}-pois)" mask="url(#${id}-masque)"/>
    </svg>
  </div>
</div>`;
}

/* Bouton d'ajout rapide : ajoute au panier (envol vers le panier) ; un produit à options ouvre sa fiche. */
export function ajoutRapide(c, p, { ficheDansLaPage = false } = {}) {
  if (!p.dispo) return '';
  const options = (p.dos && p.dos.length > 1) || p.modeles;
  const icone = brut('<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>');
  if (options) {
    return ficheDansLaPage
      ? html`<button type="button" class="ajout-rapide" data-fiche="${p.id}" aria-label="Choisir les options de ${p.titre}">${icone}</button>`
      : html`<a class="ajout-rapide" href="${c.url('boutique', '', `produit=${p.id}`)}" data-libelle="${c.libelle('boutique')}" aria-label="Choisir les options de ${p.titre}">${icone}</a>`;
  }
  const dos = p.dos ? JSON.stringify({ Dos: p.dos[0] }) : '';
  return html`<button type="button" class="ajout-rapide" data-panier-ajouter="${p.id}" data-nom="${p.titre}" data-prix="${p.prix}" data-image="/assets/images/${p.image}-400.webp"${dos ? brut(` data-options='${dos}'`) : ''} aria-label="Ajouter ${p.titre} au panier">${icone}</button>`;
}

export function carteProduit(c, p, { sizes = '(max-width: 760px) 46vw, 22vw', classe = '' } = {}) {
  const fiche = c.url('boutique', '', `produit=${p.id}`);
  return html`<article class="produit ${classe}${p.dispo ? '' : ' produit--epuise'}" data-produit="${p.id}" data-panier-produit>
  <a class="produit-lien" href="${fiche}" data-libelle="${c.libelle('boutique')}">
    ${c.media({ nom: p.image, alt: p.titre, classe: `produit-media produit-media--${p.cat}`, sizes })}
    <span class="produit-texte"><span class="produit-titre">${p.titre}</span>
    <span class="produit-prix" data-prix>${prix(p.prix)}</span>${p.dispo ? '' : html` <span class="produit-epuise">${c.t('commun.epuise')}</span>`}</span>
  </a>
  ${ajoutRapide(c, p)}
</article>`;
}

/* Mur d'accrochage : toiles ou affiches encadrées, suspendues à deux fils comme le cadre du logo ;
   elles descendent se poser à l'entrée dans l'écran, se balancent seules et au toucher (effet accroche). */
export function murAccroche(c, ids, { cadre = 'toile', classe = '' } = {}) {
  const P = c.donnees.produits;
  const H = [26, 64, 14, 48, 34, 58];
  return html`<ul class="accroche accroche--${cadre} ${classe}">
    ${ids.map((id, i) => {
      const p = P.find((x) => x.id === id);
      return html`<li class="accroche-item" style="--h:${H[i % H.length]}px;--i:${i}" data-effet="accroche">
        <span class="accroche-fils" aria-hidden="true"></span>
        <a class="accroche-cadre" href="${c.url('boutique', '', `produit=${p.id}`)}" data-libelle="${c.libelle('boutique')}" aria-label="${p.titre}, ${prix(p.prix)}">${c.media({ nom: p.image, alt: '', sizes: '(max-width: 760px) 30vw, 12vw', classe: 'accroche-media' })}</a>
      </li>`;
    })}
  </ul>`;
}

export function avis(c) {
  return html`<ul class="avis-liste" data-anime="cascade">${c.donnees.avis.map((a, i) => html`<li class="avis-carte avis-carte--${i + 1}" data-fx="vitesse" data-fx-force="2">
    <svg class="avis-guillemet" viewBox="0 0 60 44" aria-hidden="true"><path d="M4 40 C 4 22, 10 10, 26 4 M34 40 C 34 22, 40 10, 56 4" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>
    <blockquote><p>${a.texte}</p></blockquote>
    <p class="avis-nom">${a.nom}${a.qui ? html` · <span>${a.qui}</span>` : ''}</p>
  </li>`)}</ul>`;
}

/* Les quatre fonds du sur-mesure : échantillons dessinés en CSS. */
export const FONDS = ['uni', 'rayures', 'pois', 'quadrillage'];

/* Petites icônes au trait, dessinées à la main en SVG (encre verte, accent framboise). */
const ICONES = {
  toile: '<rect x="6" y="6" width="28" height="28" rx="2"/><path d="M10 10h20v20H10z" stroke-dasharray="2 3"/><path d="M14 30l6-8 4 5 3-3 3 6"/>',
  motif: '<rect x="6" y="6" width="28" height="28" rx="3"/><circle cx="13" cy="13" r="2.4" class="a"/><circle cx="27" cy="13" r="2.4" class="a"/><circle cx="20" cy="20" r="2.4" class="a"/><circle cx="13" cy="27" r="2.4" class="a"/><circle cx="27" cy="27" r="2.4" class="a"/>',
  photo: '<rect x="5" y="11" width="30" height="21" rx="4"/><path d="M14 11l2-4h8l2 4"/><circle cx="20" cy="21.5" r="6"/><path d="M17.5 21.5l2 2 3.5-4" class="t"/>',
  cadeau: '<rect x="7" y="15" width="26" height="18" rx="2"/><path d="M5 11h30v5H5zM20 11v22"/><path d="M20 11c-3-6-10-6-8-1 1 2 5 1 8 1zM20 11c3-6 10-6 8-1-1 2-5 1-8 1z" class="t"/>',
  colis: '<path d="M6 13l14-7 14 7v15l-14 7-14-7z"/><path d="M6 13l14 7 14-7M20 20v15"/><path d="M13 9.5l14 7" class="t"/>',
  calendrier: '<rect x="6" y="9" width="28" height="25" rx="3"/><path d="M6 16h28M13 5v7M27 5v7"/><path d="M14 25l4 4 8-8" class="t"/>',
  balance: '<path d="M20 6v26M10 32h20M8 12h24"/><path d="M8 12l-4 9a4 4 0 0 0 8 0zM32 12l-4 9a4 4 0 0 0 8 0z" class="t"/>',
  palette: '<path d="M20 6c-8 0-14 6-14 13 0 6 5 9 9 8 3-1 2 5 6 5 7 0 13-6 13-13S28 6 20 6z"/><circle cx="14" cy="17" r="2" class="a"/><circle cx="20" cy="12" r="2" class="a"/><circle cx="27" cy="15" r="2" class="a"/>',
};
export const icone = (nom) => brut(`<svg class="icone" viewBox="0 0 40 40" width="44" height="44" aria-hidden="true">${ICONES[nom] || ''}</svg>`);
