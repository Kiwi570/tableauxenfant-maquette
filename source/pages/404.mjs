/* Page 404 : le chevalet vide, la toile tombée par terre. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="ouv ouv-404 fond-sombre" id="debut">
  ${c.media({ nom: 'grok/chevalet-404', alt: c.s('introuvable.alt'), priorite: true, classe: 'ouv-404-media', sizes: '100vw', cadrage: '70% 50%' })}
  <div class="conteneur ouv-404-texte">
    <p class="surtitre">404</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne" data-iris-centre>${c.t('introuvable.titre')}</span></span></h1>
    <p data-anime="gsap">${c.t('introuvable.texte')}</p>
    <p class="ouv-actions" data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('boutique', { classe: 'bouton bouton--clair', texte: c.t('introuvable.boutique') })}</p>
  </div>
</section>
`;
