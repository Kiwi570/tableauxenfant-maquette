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
      <svg class="carte" viewBox="0 0 300 240" role="img" aria-label="${c.s('contact.carteAlt')}" data-fx="trace">
        <path data-fx-trait d="M70 30 L120 18 L170 34 L205 28 L240 60 L262 108 L248 150 L270 190 L220 214 L170 206 L120 220 L86 190 L60 150 L40 112 L52 70 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
        <path data-fx-trait d="M40 120 C 90 110, 130 130, 170 112 S 240 100, 262 108" fill="none" stroke="#7FA7B5" stroke-width="2" stroke-dasharray="1 0"/>
        <circle cx="110" cy="70" r="4" fill="currentColor"/><text x="118" y="66" class="carte-ville">Vendôme</text>
        <circle cx="140" cy="118" r="4" fill="currentColor"/><text x="148" y="114" class="carte-ville">Blois</text>
        <circle cx="200" cy="172" r="8" fill="#C2304F" data-repere/><text x="146" y="198" class="carte-ville carte-ville--atelier">Romorantin-Lanthenay</text>
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
