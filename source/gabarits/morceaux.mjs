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

export function carteProduit(c, p, { sizes = '(max-width: 760px) 46vw, 22vw', classe = '' } = {}) {
  const fiche = c.url('boutique', '', `produit=${p.id}`);
  return html`<article class="produit ${classe}${p.dispo ? '' : ' produit--epuise'}" data-produit="${p.id}">
  <a class="produit-lien" href="${fiche}" data-libelle="${c.libelle('boutique')}">
    ${c.media({ nom: p.image, alt: p.titre, classe: `produit-media produit-media--${p.cat}`, sizes })}
    <span class="produit-texte"><span class="produit-titre">${p.titre}</span>
    <span class="produit-prix" data-prix>${prix(p.prix)}</span>${p.dispo ? '' : html` <span class="produit-epuise">${c.t('commun.epuise')}</span>`}</span>
  </a>
</article>`;
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
