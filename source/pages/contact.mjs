/* Contact : photo du bureau (Grok) et l'e-mail en grand, formulaire simulé (sujet prérempli par ?sujet=), horaires,
   carte du Loir-et-Cher dessinée en SVG, livraison et retours en bref. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-lettre-1280.webp' };

export default (c) => {
  const t = (k) => c.t(`contact.${k}`);
  return html`
<section class="ouv ouv-contact" id="debut">
  <div class="ouv-contact-texte conteneur">
    <p class="surtitre" data-anime="gsap">${t('surtitre')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${t('titre1')}</span></span> <span class="ligne-masque"><span class="ouv-ligne"><em data-iris-centre>${t('titre2')}</em></span></span></h1>
    <p class="ouv-intro masque-ecran-tres-bas" data-anime="gsap">${t('texte')}</p>
    <p class="ouv-email" data-anime="gsap"><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
    <p class="ouv-actions" data-anime="gsap"><a class="bouton" href="#message" data-action-principale data-sans-transition>${t('action')}</a> <span class="ouv-info" data-info-cle>${t('info')}</span></p>
  </div>
  ${c.media({ nom: 'grok/contact-lettre', alt: c.s('contact.alt'), priorite: true, classe: 'ouv-contact-media', sizes: '(max-width: 760px) 100vw, 50vw', cadrage: '70% 50%', attrs: 'data-fx="zoom" data-fx-force="10"' })}
</section>

<section class="contact-corps conteneur" id="message">
  <form class="formulaire" data-formulaire novalidate>
    <h2 data-anime="lignes">${t('formTitre')}</h2>
    <p class="mention-donnees">${t('formTexte')}</p>
    <div class="composer-champs">
      <div class="champ"><label for="f-nom">${t('nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="f-email">${t('email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
    </div>
    <div class="champ"><label for="f-sujet">${t('sujet')}</label>
      <select id="f-sujet" name="sujet">
        <option value="mesure">${t('sMesure')}</option>
        <option value="commande">${t('sCommande')}</option>
        <option value="affiche">${t('sAffiche')}</option>
        <option value="autre" selected>${t('sAutre')}</option>
      </select></div>
    <div class="champ"><label for="f-message">${t('message')}</label><textarea id="f-message" name="message" rows="6" required></textarea></div>
    <p class="mention-donnees">${t('donnees')}</p>
    <button type="submit" class="bouton">${t('envoyer')}</button>
    <p data-message-envoi role="status" tabindex="-1" hidden></p>
  </form>
  <aside class="contact-infos">
    <div class="horaires" data-anime>
      <h2>${t('horairesTitre')}</h2>
      <dl><div><dt>${t('h1j')}</dt><dd>${t('h1')}</dd></div><div><dt>${t('h2j')}</dt><dd>${t('h2')}</dd></div></dl>
    </div>
    <div class="carte-bloc">
      <h2 data-anime="lignes">${t('ouSommes')}</h2>
      <svg class="carte" viewBox="0 0 320 250" data-fx="trace" role="img" aria-label="${c.s('contact.carteAlt')}">
        <path class="carte-dep" data-superpose d="M86 22 L132 14 L170 30 L206 22 L236 44 L262 70 L274 112 L262 146 L282 184 L248 214 L204 206 L166 226 L120 214 L92 186 L62 160 L40 122 L48 82 L64 52 Z"/>
        <path class="carte-loire" data-fx-trait d="M44 132 C 80 124, 110 142, 146 126 S 214 104, 270 108" />
        <g class="carte-ville"><circle cx="112" cy="66" r="4"/><text x="121" y="62">Vendôme</text></g>
        <g class="carte-ville"><circle cx="146" cy="128" r="4"/><text x="155" y="146">Blois</text></g>
        <g class="carte-ville carte-ville--atelier" data-repere><circle cx="212" cy="176" r="15" class="halo"/><circle cx="212" cy="176" r="7"/><text x="168" y="206">Romorantin-Lanthenay</text></g>
        <text x="226" y="96" class="carte-legende">la Loire</text>
        <text x="64" y="232" class="carte-legende">Loir-et-Cher · Sologne</text>
      </svg>
      <p>${t('carteTexte')}</p>
    </div>
    <div class="livraison-bref" data-anime>
      <h2>${t('livraisonTitre')}</h2>
      <ul class="coches">${[1, 2, 3].map((n) => html`<li>${t(`liv${n}`)}</li>`)}</ul>
    </div>
  </aside>
</section>
`;
};
