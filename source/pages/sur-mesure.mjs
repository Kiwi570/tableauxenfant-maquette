/* Sur mesure : photo pleine page de la toile vierge et 185 € en très grand, ce qui est compris, le composeur
   (fond, couleur, univers, prénom : aperçu et demande simulée), les quatre étapes, les prénoms déjà peints, FAQ, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { FONDS } from '../gabarits/morceaux.mjs';

export const page = { cle: 'sur-mesure', fichier: 'sur-mesure', imagePartage: 'grok/toile-vierge-1280.webp' };

const COULEURS = [['rose', 'cRose', '#E8A9B4'], ['framboise', 'cFramboise', '#C2304F'], ['turquoise', 'cTurquoise', '#2BA4A8'], ['anis', 'cAnis', '#A8C64B'], ['marine', 'cMarine', '#1F3A5F'], ['noir', 'cNoir', '#2A2A2A']];
const UNIVERS = ['uDoudou', 'uAnimal', 'uPassion', 'uMusique', 'uVetement', 'uPhoto'];
const OCCASIONS = ['oNaissance', 'oAnniversaire', 'oBapteme', 'oDeco'];
const PRENOMS = ['Côme', 'Mya', 'Léonie', 'Mattéo', 'Théo', 'Charlène', 'Rose', 'Caroline', 'Adélie', 'Paul'];

export default (c) => {
  const t = (k) => c.t(`mesure.${k}`);
  return html`
<section class="ouv ouv-mesure fond-sombre" id="debut">
  ${c.media({ nom: 'grok/toile-vierge', alt: c.s('mesure.alt'), priorite: true, classe: 'ouv-mesure-media', sizes: '100vw', cadrage: '62% 50%', cadrageMobile: '50% 72%', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur ouv-mesure-texte">
    <p class="surtitre" data-anime="gsap">${t('surtitre')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${t('titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${t('titre2')}</em></span></span></h1>
    <p class="ouv-intro masque-ecran-tres-bas" data-anime="gsap">${t('texte')}</p>
    <p class="ouv-prix" data-anime="gsap" data-info-cle><strong data-prix data-iris-centre>${t('prix')}</strong> <span>${t('prixDetail')}</span></p>
    <p class="ouv-actions" data-anime="gsap"><a class="bouton" href="#composer" data-action-principale data-sans-transition data-survol="magnetique">${t('action')}</a></p>
  </div>
</section>

<section class="inclus conteneur" id="inclus">
  <h2 data-anime="lignes">${t('inclusTitre')}</h2>
  <ul class="inclus-liste" data-anime="cascade">
    ${[1, 2, 3, 4, 5, 6].map((n) => html`<li data-fx="vitesse" data-fx-force="1.5"><span class="inclus-num">0${n}</span><h3>${t(`i${n}t`)}</h3><p>${t(`i${n}`)}</p></li>`)}
  </ul>
</section>

<section class="composer fond-rose" id="composer">
  <div class="conteneur composer-grille">
    <div class="composer-apercu">
      <div class="composer-colle">
        <div class="apercu-toile" data-effet="composeur" data-fond="pois" data-couleur="rose" role="img" aria-label="${c.s('mesure.apercu')}">
          <span class="apercu-fond"></span>
          <span class="apercu-silhouette" aria-hidden="true"><svg viewBox="0 0 100 140"><path d="M50 18c11 0 19 8 19 19s-8 20-19 20-19-9-19-20 8-19 19-19Zm-24 52c6-6 14-9 24-9s18 3 24 9l6 40c1 6-3 10-9 10H29c-6 0-10-4-9-10l6-40Z" fill="currentColor"/></svg></span>
          <span class="apercu-prenom" data-apercu-prenom>${t('prenomExemple')}</span>
        </div>
        <p class="apercu-note">${t('apercuNote')}</p>
      </div>
    </div>
    <form class="composer-form" data-formulaire data-composeur novalidate>
      <h2 data-anime="lignes">${t('composerTitre')}</h2>
      <p>${t('composerTexte')}</p>
      <fieldset class="choix"><legend>${t('fond')}</legend>
        ${FONDS.map((f) => html`<label class="choix-carte"><input type="radio" name="fond" value="${f}"${f === 'pois' ? brut(' checked') : ''}><span class="pastille fond--${f}" aria-hidden="true"></span>${c.t(`accueil.mesure.fond${f[0].toUpperCase() + f.slice(1)}`)}</label>`)}
      </fieldset>
      <fieldset class="choix"><legend>${t('couleur')}</legend>
        ${COULEURS.map(([v, k, hex]) => html`<label class="choix-carte"><input type="radio" name="couleur" value="${v}"${v === 'rose' ? brut(' checked') : ''}><span class="pastille" style="--p:${hex}" aria-hidden="true"></span>${t(k)}</label>`)}
      </fieldset>
      <fieldset class="choix"><legend>${t('univers')}</legend>
        ${UNIVERS.map((k) => html`<label class="choix-carte"><input type="checkbox" name="univers" value="${c.s(`mesure.${k}`)}">${t(k)}</label>`)}
      </fieldset>
      <fieldset class="choix"><legend>${t('occasion')}</legend>
        ${OCCASIONS.map((k, i) => html`<label class="choix-carte"><input type="radio" name="occasion" value="${c.s(`mesure.${k}`)}"${i === 0 ? brut(' checked') : ''}>${t(k)}</label>`)}
      </fieldset>
      <div class="champ"><label for="m-prenom">${t('prenom')}</label><input id="m-prenom" name="prenom" maxlength="24" autocomplete="off"></div>
      <div class="recap" aria-live="polite"><p class="recap-titre">${t('recap')}</p><p data-recap></p><p class="recap-prix"><b data-prix>${t('recapPrix')}</b></p></div>
      <div class="composer-champs">
        <div class="champ"><label for="m-nom">${t('nom')}</label><input id="m-nom" name="nom" autocomplete="name" required></div>
        <div class="champ"><label for="m-email">${t('email')}</label><input id="m-email" name="email" type="email" autocomplete="email" required></div>
      </div>
      <div class="champ"><label for="m-message">${t('message')}</label><textarea id="m-message" name="message" rows="4"></textarea></div>
      <p class="mention-donnees">${t('donnees')}</p>
      <button type="submit" class="bouton">${t('envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>

<section class="mesure-etapes conteneur" id="etapes">
  <h2 data-anime="lignes">${t('etapesTitre')}</h2>
  <svg class="etapes-fil" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M10 40 C 200 0, 300 60, 500 30 S 800 0, 990 30" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="1 0" stroke-linecap="round"/></svg>
  <ol class="etapes etapes--ligne" data-anime="cascade">
    ${[1, 2, 3, 4].map((n) => html`<li class="etape"><span class="etape-num">${n}</span><h3>${c.t(`accueil.mesure.e${n}t`)}</h3><p>${c.t(`accueil.mesure.e${n}`)}</p></li>`)}
  </ol>
  ${c.media({ nom: 'grok/emballage-cadeau', alt: c.s('accueil.livraison.alt'), classe: 'etapes-media', sizes: '(max-width: 760px) 100vw, 70vw', attrs: 'data-fx="parallaxe"' })}
</section>

<section class="prenoms fond-sombre" id="realisations">
  <div class="conteneur prenoms-grille">
    <div class="prenoms-texte">
      <h2 data-anime="lignes">${t('realTitre')}</h2>
      <p data-anime>${t('realTexte')}</p>
      <ul class="prenoms-liste" data-anime="cascade">${PRENOMS.map((p) => html`<li>${p}</li>`)}</ul>
    </div>
    ${c.media({ nom: 'chambre-paul', alt: c.s('mesure.realAlt'), classe: 'prenoms-media', sizes: '(max-width: 760px) 100vw, 50vw', cadrage: '40% 35%', legende: c.s('commun.situation'), attrs: 'data-fx="zoom"' })}
  </div>
</section>

<section class="faq conteneur" id="faq">
  <h2 data-anime="lignes">${t('faqTitre')}</h2>
  <div class="faq-liste" data-anime="cascade">${c.donnees.faq.map((f) => html`<details class="faq-item"><summary>${f.q}</summary><p>${f.r}</p></details>`)}</div>
</section>

<section class="fin fin--photo fond-sombre" id="fin">
  ${c.media({ nom: 'grok/pinceaux', alt: '', classe: 'fin-fond', sizes: '100vw', cadrage: '75% 50%', attrs: 'data-fx="parallaxe"' })}
  <div class="conteneur fin-texte">
    <h2 data-anime="lignes">${t('finTitre')}</h2>
    <p data-anime>${t('finTexte')}</p>
    <p class="fin-actions" data-anime>${c.lien('contact', { params: 'sujet=mesure', classe: 'bouton', texte: t('finAction') })}</p>
  </div>
</section>
`;
};
