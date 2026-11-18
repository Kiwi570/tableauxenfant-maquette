# Rapport d’audit

Projet : `tableauxenfant-maquette` · 18/11/2026 12:29:31 · 16 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/boutique,/sur-mesure,/artiste,/contact,/404

## Résumé

- Statut : **377 échec(s)**
- Passe : `20261118-111304-rapide-cible` · version ?v=1
- Échecs : **377**
- À regarder : **35**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (1), mesures (36), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (8), liens vers la page en cours (5), changements de hauteur (4), tient dans l’écran (2), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (6), souris immobile (2), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur / |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### langues (346)

- **langues** — texte manquant en en : commun.panier
- **langues** — texte manquant en en : commun.ecrire
- **langues** — texte manquant en en : commun.mentions
- **langues** — texte manquant en en : commun.confidentialite
- **langues** — texte manquant en en : commun.cgv
- **langues** — texte manquant en en : commun.piedAccroche
- **langues** — texte manquant en en : commun.piedAtelier
- **langues** — texte manquant en en : commun.piedHoraires
- **langues** — texte manquant en en : commun.piedLegal
- **langues** — texte manquant en en : commun.situation
- **langues** — texte manquant en en : commun.epuise
- **langues** — texte manquant en en : commun.disponible
- **langues** — texte manquant en en : commun.ajouter
- **langues** — texte manquant en en : commun.voir
- **langues** — texte manquant en en : commun.euros
- **langues** — texte manquant en en : pages.boutique.titre
- **langues** — texte manquant en en : pages.boutique.description
- **langues** — texte manquant en en : pages.boutique.nav
- **langues** — texte manquant en en : pages.boutique.partageAlt
- **langues** — texte manquant en en : pages.boutique.accroche
- **langues** — texte manquant en en : pages.sur-mesure.titre
- **langues** — texte manquant en en : pages.sur-mesure.description
- **langues** — texte manquant en en : pages.sur-mesure.nav
- **langues** — texte manquant en en : pages.sur-mesure.partageAlt
- **langues** — texte manquant en en : pages.sur-mesure.accroche
- **langues** — texte manquant en en : pages.artiste.titre
- **langues** — texte manquant en en : pages.artiste.description
- **langues** — texte manquant en en : pages.artiste.nav
- **langues** — texte manquant en en : pages.artiste.partageAlt
- **langues** — texte manquant en en : pages.artiste.accroche
- **langues** — texte manquant en en : pages.contact.titre
- **langues** — texte manquant en en : pages.contact.description
- **langues** — texte manquant en en : pages.contact.nav
- **langues** — texte manquant en en : pages.contact.partageAlt
- **langues** — texte manquant en en : pages.contact.accroche
- **langues** — texte manquant en en : accueil.ouverture.surtitre
- **langues** — texte manquant en en : accueil.ouverture.titre1
- **langues** — texte manquant en en : accueil.ouverture.titre2
- **langues** — texte manquant en en : accueil.ouverture.texte
- **langues** — texte manquant en en : accueil.ouverture.action
- … et 306 autres (rapport.json)

### contraste insuffisant (1)

- **contraste insuffisant** — `/` — section#sur-mesure > div.conteneur.mesure-grille > div.mesure-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « Le sur-mesure, 185 € » — 4.37:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### élément sans nom accessible (6)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/404` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal)_
- **élément sans nom accessible** — `/artiste` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/boutique` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/contact` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal)_
- **élément sans nom accessible** — `/sur-mesure` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_

### image non chargée (7)

- **image non chargée** — `/` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal)_
- **image non chargée** — `/404` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **image non chargée** — `/artiste` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **image non chargée** — `/boutique` — div.fiche-panneau:nth-of-type(2) > div.fiche-corps > figure.fiche-media > img _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/boutique` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl)_
- **image non chargée** — `/contact` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **image non chargée** — `/sur-mesure` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/` — div.conteneur.sevb-grille > figure.media.sevb-media > picture > img « Sevb dans son atelier, pinceau à la main, devant u » — sevb-atelier (5/5, faible, 49 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/artiste` — div.ouv-artiste-portrait:nth-of-type(1) > figure.media.portrait-media > picture > img « Sevb dans son atelier, pinceau à la main, devant u » — sevb-atelier (5/5, faible, 35 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) « Toiles originales 145 € · sur mesure 185 € · affic » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/artiste` — div.conteneur.ouv-artiste-grille > div.ouv-artiste-texte:nth-of-type(2) > p.ouv-actions:nth-of-type(3) > span.ouv-info « Romorantin-Lanthenay · Loir-et-Cher » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ouv-contact-texte.conteneur > p.ouv-actions:nth-of-type(4) > span.ouv-info « Atelier à Romorantin-Lanthenay, Loir-et-Cher » _(844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/sur-mesure` — section#debut > div.conteneur.ouv-mesure-texte > p.ouv-prix:nth-of-type(3) « 185 € livraison en plus · 3 à 4 semaines » _(320×568 sansJs)_

### élément recouvert (2)

- **élément recouvert** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(3) > a.bouton.bouton--contour:nth-of-type(2) « Voir la boutique » — par section#debut > div.ouv-scene:nth-of-type(2) > div.toile.est-peinte:nth-of-type(2) > span.toile-fils _(390×844 normal)_
- **élément recouvert** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) « Toiles originales 145 € · sur mesure 185 € · affic » — par div.toile-cadre > figure.media.toile-media > picture > img « Petite fée Zébulon coccinelle, toile originale de  » _(390×844 normal)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/` — li[data-fond-repere="rayures"] ; li[data-fond-repere="pois"] ; li[data-fond-repere="quadrillage"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/` — li[data-fond-repere="uni"] ; li[data-fond-repere="rayures"] ; li[data-fond-repere="pois"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### contraste sur image (1)

- **contraste sur image** — `/artiste` — section#debut > div.conteneur.ouv-artiste-grille > div.ouv-artiste-portrait:nth-of-type(1) > span.portrait-signature « Sevb » — 1.54:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/contact` — section#debut > div.ouv-contact-texte.conteneur > p.ouv-email:nth-of-type(3) > a « sevb@atelierattitude.com » — 274 × 29 px _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/sur-mesure` — section#debut > div.conteneur.ouv-mesure-texte > p.ouv-actions:nth-of-type(4) > a.bouton « Composer sa toile » _(390×844 sansJs, 320×568 sansJs)_

### clavier (1)

- **clavier** — `/sur-mesure` — input «  » — le focus arrive sur un élément caché _(1366×768)_

### lien profond (1)

- **lien profond** — `/sur-mesure → /boutique#catalogue` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_

### épinglage : image isolée différente (flash) (1)

- **épinglage : image isolée différente (flash)** — `/` — à 3167 ms (films/epinglage-1.png) _(1366×768)_

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/boutique` — section#catalogue.cff.catalogue — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `sur-mesure.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 1 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (4)

- **grille : objet d’ouverture hors du premier écran** — `/boutique` — 0 × 214 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_
- **grille : objet d’ouverture hors du premier écran** — `/contact` — 450 × 48 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(1366×768)_
- **grille : objet d’ouverture hors du premier écran** — `/contact` — 274 × 29 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_
- **grille : objet d’ouverture hors du premier écran** — `/sur-mesure` — 133 × 54 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (7)

- **section sans visuel** — `/` — section#sur-mesure « uni uni rayures pois quadrillage Le sur-mesure, 18 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#avis « Ils se sont reconnus Les mots des parents, tels qu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/artiste` — section#histoire « Une émotion souvenir Chez Sevb, une toile part tou » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/artiste` — section#avis « Ce qu'en disent les parents Ravie de cette toile s » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/boutique` — section#bon-a-savoir « Bon à savoir Emballage soigné Protection plastique » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/sur-mesure` — section#inclus « Ce qui est compris 01 Toile 50 × 50 cm Lin et coto » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/sur-mesure` — section#faq « Vos questions Combien de temps faut-il pour une to » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (10)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.mur-corps:nth-of-type(2) > div.mur-scene:nth-of-type(1) > figure.media.mur-photo:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#plus > div.conteneur.plus-grille:nth-of-type(2) > figure.media.plus-media > figcaption.media-legende « Mise en situation » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.ouv-404-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/artiste` — section#atelier > figure.media.atelier-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — section#fin > div.conteneur.fin-grille > figure.media.fin-media > figcaption.media-legende « Mise en situation » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.ouv-contact-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/sur-mesure` — section#debut > figure.media.ouv-mesure-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/sur-mesure` — section#etapes > figure.media.etapes-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/sur-mesure` — section#realisations > div.conteneur.prenoms-grille > figure.media.prenoms-media > figcaption.media-legende « Mise en situation » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/sur-mesure` — section#fin > figure.media.fin-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### typographie française (2)

- **typographie française** — `/` — div.conteneur.sevb-grille > div.sevb-texte > blockquote.sevb-citation > p « « Chaque tableau raconte son histoire, une émotion » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/artiste` — div.conteneur.histoire-grille > div.histoire-texte > blockquote.histoire-citation > p « « Rien n'est standardisé. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (7.0 %), voir comparaisons/rechargement-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/sur-mesure` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — div.mesure-toile — fonds : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Audit rapide : étapes lourdes sur /, /artiste, /boutique, /contact, /sur-mesure.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2710 ms depuis le premier octet
- Ouverture /artiste (1366×768) : 2534 ms depuis le premier octet
- Ouverture /boutique (1366×768) : 2594 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2550 ms depuis le premier octet
- Ouverture /sur-mesure (1366×768) : 2577 ms depuis le premier octet
- film de l'ouverture /sur-mesure 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2705 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /artiste (390×844) : 2510 ms depuis le premier octet
- Ouverture /boutique (390×844) : 2575 ms depuis le premier octet
- Ouverture /contact (390×844) : 2538 ms depuis le premier octet
- Ouverture /sur-mesure (390×844) : 2544 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /artiste 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /boutique 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 316 images d’intro, 31 de voile et 157 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /boutique : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /artiste : aucune section épinglée ou plein écran.
- Tient dans l'écran /boutique : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /sur-mesure : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 533, tâche la plus longue 62 ms
- Fluidité /artiste 1366×768 (molette) : 0 % d'images lentes sur 236, tâche la plus longue 0 ms
- Fluidité /boutique 1366×768 (molette) : 0 % d'images lentes sur 453, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 136, tâche la plus longue 0 ms
- Fluidité /sur-mesure 1366×768 (molette) : 0 % d'images lentes sur 336, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1406, tâche la plus longue 0 ms
- Fluidité /artiste 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /boutique 390×844 (doigt) : 0 % d'images lentes sur 1366, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /sur-mesure 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Vitesse / : 0.72 s de calcul au chargement (téléphone ralenti).
- Vitesse /artiste : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /boutique : 0.64 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /sur-mesure : 0.41 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours,ecran,mouvement
```
