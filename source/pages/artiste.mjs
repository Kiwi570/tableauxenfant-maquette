/* L'artiste : portrait de Sevb d'un côté, texte de l'autre ; son histoire ; l'atelier ; ce qui l'inspire ; avis ; appel final. */
import { html } from '../../outils/gabarit.mjs';
import { avis } from '../gabarits/morceaux.mjs';

export const page = { cle: 'artiste', fichier: 'artiste', imagePartage: 'sevb-atelier-800.webp' };

export default (c) => {
  const t = (k) => c.t(`artiste.${k}`);
  const P = c.donnees.produits;
  const media = (id) => P.find((p) => p.id === id);
  return html`
<section class="ouv ouv-artiste" id="debut">
  <div class="conteneur ouv-artiste-grille">
    <div class="ouv-artiste-portrait">
      ${c.media({ nom: 'sevb-atelier', alt: c.s('artiste.alt'), priorite: true, classe: 'portrait-media', sizes: '(max-width: 760px) 80vw, 34vw', cadrage: '62% 45%', attrs: 'data-iris-centre' })}
      <span class="portrait-signature" aria-hidden="true" data-audit-ignorer data-effet="portrait-cadre">Sevb</span>
    </div>
    <div class="ouv-artiste-texte">
      <p class="surtitre" data-anime="gsap">${t('surtitre')}</p>
      <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${t('titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${t('titre2')}</em></span></span></h1>
      <p class="ouv-intro" data-anime="gsap">${t('texte')}</p>
      <p class="ouv-actions" data-anime="gsap">${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: t('action'), attrs: 'data-action-principale' })} <span class="ouv-info" data-info-cle>Romorantin-Lanthenay · Loir-et-Cher</span></p>
    </div>
  </div>
</section>

<section class="histoire fond-rose" id="histoire">
  <div class="conteneur histoire-grille">
    <h2 data-anime="lignes">${t('histoireTitre')}</h2>
    <div class="histoire-texte">
      <p data-anime>${t('histoire1')}</p>
      <p data-anime>${t('histoire2')}</p>
      <blockquote class="histoire-citation" data-anime="lettres"><p>${t('citation')}</p></blockquote>
    </div>
  </div>
</section>

<section class="atelier conteneur" id="atelier">
  ${c.media({ nom: 'grok/atelier-table', alt: c.s('artiste.atelierAlt'), classe: 'atelier-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="parallaxe"' })}
  <div class="atelier-texte">
    <h2 data-anime="lignes">${t('atelierTitre')}</h2>
    <p data-anime>${t('atelierTexte')}</p>
    <ul class="atelier-toiles" data-anime="cascade">${['toile-lady-coccinelle', 'toile-lutine-ardoise', 'toile-coquine-ballons'].map((id) => html`<li>${c.media({ nom: id, alt: media(id).titre, sizes: '(max-width: 760px) 28vw, 10vw' })}</li>`)}</ul>
  </div>
</section>

<section class="inspire fond-sombre" id="inspirations">
  <div class="conteneur">
    <h2 data-anime="lignes">${t('inspTitre')}</h2>
    <ul class="inspire-liste" data-anime="cascade">
      ${[['insp1', 'detail-zebulon'], ['insp2', 'toile-ours-doudou'], ['insp3', 'toile-lolita-lapin']].map(([k, img]) => html`<li data-fx="vitesse">${c.media({ nom: img, alt: '', classe: 'inspire-media', sizes: '(max-width: 760px) 90vw, 28vw' })}<h3>${t(`${k}t`)}</h3><p>${t(k)}</p></li>`)}
    </ul>
  </div>
</section>

<section class="avis fond-rose" id="avis">
  <div class="conteneur">
    <div class="tete-section"><h2 data-anime="lignes">${t('avisTitre')}</h2></div>
    ${avis(c)}
  </div>
</section>

<section class="fin fond-sombre" id="fin">
  <div class="conteneur fin-grille">
    <div class="fin-texte">
      <h2 data-anime="lignes">${t('finTitre')}</h2>
      <p data-anime>${t('finTexte')}</p>
      <p class="fin-actions" data-anime>${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: t('finAction') })} ${c.lien('contact', { classe: 'bouton bouton--clair', texte: c.t('commun.ecrire') })}</p>
    </div>
    <ul class="fin-toiles" data-anime="cascade" aria-hidden="true">
      ${['toile-princesse-pois', 'toile-femme-affaires', 'toile-prince-nb', 'toile-lolita-coccinelle', 'toile-chipie-modele'].map((id) => html`<li>${c.media({ nom: id, alt: '', sizes: '(max-width: 760px) 30vw, 12vw' })}</li>`)}
    </ul>
  </div>
</section>
`;
};
