# Tableaux Enfant · maquette v1

Maquette du futur site de **Tableaux Enfant** (Séverine Bisson, dite Sevb, artiste peintre à Romorantin-Lanthenay).
Adresse prévue : https://tableauxenfant-maquette.vercel.app · site actuel : tableauxenfant.fr (WordPress, Elementor, WooCommerce).

Direction « L'atelier tendre » : crème, rose poudré, encre verte du logo, accent framboise, or de la couronne ;
Fraunces (titres, un mot en italique) et Figtree (texte). Accroche reprise du logo : « petits héros, grandes histoires ».

## Pages de la v1

| Page | Ouverture | Contenu |
|---|---|---|
| Accueil `/` | Texte à gauche, une vraie toile accrochée sur un mur à pois, révélée par trois coups de pinceau | Trois façons d'offrir, toiles originales en galerie, voir au mur, le sur-mesure en 4 étapes, Sevb, affiches et séries limitées, avis, appel final |
| Boutique `/boutique` | Grand titre, bandeau de vraies créations qui défile, filtres tout de suite | 59 créations filtrables (catégorie, pour, budget, tri, recherche), fiche en tiroir (`?produit=…`), panier en tiroir, commande simulée |
| Sur mesure `/sur-mesure` | Photo pleine page de la toile vierge, 185 € en très grand | Ce qui est compris, composeur (fond, couleur, univers, prénom, demande simulée), 4 étapes, prénoms déjà peints, FAQ |
| L'artiste `/artiste` | Portrait de Sevb d'un côté, texte de l'autre | Son histoire, l'atelier, ce qui l'inspire, avis |
| Contact `/contact` | Bureau près de la fenêtre, e-mail en grand | Formulaire simulé (`?sujet=mesure`), horaires, carte du Loir-et-Cher, livraison et retours |
| 404 | Chevalet et toile vierge | Retour à l'accueil ou à la boutique |

Pages du site actuel non reprises en v1 (possibles en v2) : Tableaux originaux à part, Livraison, Avis clients (repris sur l'accueil et L'artiste), Galerie sur commande (reprise en prénoms sur Sur mesure), CGV, compte client.

## À fournir par le client (à compléter)

- Mentions légales : raison sociale « SEVB – Atelier Attitude », statut, adresse complète, **SIRET**, directeur de la publication.
- Hébergeur : Vercel Inc. (adresse à vérifier sur vercel.com au moment de la mise en ligne).
- Politique de confidentialité (RGPD) et conditions générales de vente à jour.
- Assurances éventuelles.
- **Dimensions des toiles originales** « Grand format » (non indiquées sur le site : la maquette dit « dimensions précisées sur demande »).
- **Frais de livraison** : la page Livraison parle de frais selon le poids, les CGV d'une livraison offerte dès 50 € en France métropolitaine. La maquette affiche « frais calculés selon le poids » ; à trancher.
- **Téléphone** : le Pack Web parle d'un premier contact « par e-mail ou téléphone », mais aucun numéro n'est publié. La maquette ne parle que d'e-mail.
- **Photos des réalisations sur commande** (Côme, Mya, Léonie, Mattéo, Théo, Charlène, Rose, Caroline, Adélie) : non récupérables (galerie chargée en JavaScript). La maquette affiche leurs prénoms et la toile « Paul ».
- Photos des **échelles porte-photo** seules (la maquette recadre un bandeau).
- Comptes réels des réseaux sociaux (les liens actuels mènent aux pages d'accueil de Facebook, X, Instagram, Twitch).
- Texte de l'avis d'Emilie (seule sa phrase d'en-tête existe sur le site).

## Crédits des images

- Toiles, affiches, coussins, cartes, portrait de Sevb, mises en situation : site actuel du client.
- Images marquées « Illustration générée » (chambres du « voir au mur », toile vierge, table de l'atelier, colis cadeau, pinceaux, bureau du contact, chevalet de la 404) : créées par intelligence artificielle (Grok). **Garder la mention sur le site final.**

## Incohérences relevées sur le site actuel

Compteurs de catégories doublés (« 2121 », « 1919 », « 3838 ») · frais de livraison contradictoires (page Livraison et CGV) · « contact par téléphone » sans numéro · couleurs incohérentes sur la fiche du Pack Web (« GARÇON MODÈLE », « BLEU MARINE ») · liens de réseaux sociaux génériques · avis d'Emilie sans texte · un « cadre déco » dont l'adresse dit « échelle porte-photo » · pages panier et caisse en double.

## À retirer ou remplacer à la mise en ligne définitive

- `noindex` dans chaque page (`source/gabarits/commun.mjs`) et l'en-tête `X-Robots-Tag` de `vercel.json`.
- Panier, paiement, formulaires et demande sur mesure **simulés** (rien n'est envoyé) : à relier à WooCommerce ou à un vrai service.
- Mentions « à compléter » du pied de page : remplacer par de vraies pages.
- Phrases d'attente : « dimensions précisées sur demande », « frais calculés selon le poids ».
- Garder : la mention « Illustration générée ».

## Technique

Site statique (HTML, CSS, JavaScript), sans étape de construction sur Vercel. Les pages sont générées depuis `donnees/` et `source/` :
`node outils/generer.mjs` (jamais de modification à la main des `.html`). Images : `plan-images.json` puis le pipeline de la bibliothèque.
Modules de la bibliothèque repris : panier en tiroir, envol vers le panier, catalogue filtré avec Flip (recherche ajoutée).
Effets propres : `toile-peinte`, `fonds`, `voir-au-mur`, `composeur`, `ruban-produits`, `portrait-cadre`.
Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/rapport.md`).
