# Rapport d’audit

Projet : `tableauxenfant-maquette` · 18/11/2026 12:50:18 · 16 min · 6 page(s) · audit standard

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261118-113425-standard` · version ?v=1
- Échecs : **1**
- À regarder : **21**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (66), balayage (5), films d’ouverture (8), films de transition (8), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (6), liens vers la page en cours (5), changements de hauteur (3), tient dans l’écran (5), films des épinglages (1), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (6), souris immobile (2), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /boutique |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261118-111304-rapide-cible | rapide | /,/boutique,/sur-mesure,/artiste,/contact,/404 | toutes | 377 | 35 | 1 | échecs |
| **20261118-113425-standard** (celle-ci) | standard | toutes | toutes | 1 | 21 | 1 | échecs |

## Échecs

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/boutique` — section#catalogue.cff.catalogue — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `sur-mesure.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

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

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/boutique` — 205 × 52 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (8)

- **section sans visuel** — `/` — section#sur-mesure « uni uni rayures pois quadrillage Le sur-mesure, 18 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +4)_
- **section sans visuel** — `/` — section#avis « Ils se sont reconnus Les mots des parents, tels qu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/` — section#sur-mesure « quadrillage uni rayures pois quadrillage Le sur-me » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1920×1080 normal)_
- **section sans visuel** — `/artiste` — section#histoire « Une émotion souvenir Chez Sevb, une toile part tou » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/artiste` — section#avis « Ce qu'en disent les parents Ravie de cette toile s » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/boutique` — section#bon-a-savoir « Bon à savoir Emballage soigné Protection plastique » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **section sans visuel** — `/sur-mesure` — section#inclus « Ce qui est compris 01 Toile 50 × 50 cm Lin et coto » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/sur-mesure` — section#faq « Vos questions Combien de temps faut-il pour une to » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

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
- Journal v1 : 5 étape(s) notée(s), 53 min de travail pour 115 min de budget, 19 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /artiste, /boutique, /sur-mesure.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2718 ms depuis le premier octet
- Ouverture /artiste (1366×768) : 2580 ms depuis le premier octet
- Ouverture /boutique (1366×768) : 2576 ms depuis le premier octet
- Ouverture /sur-mesure (1366×768) : 2534 ms depuis le premier octet
- Ouverture / (390×844) : 2664 ms depuis le premier octet
- Ouverture /artiste (390×844) : 2544 ms depuis le premier octet
- Ouverture /boutique (390×844) : 2547 ms depuis le premier octet
- film de l'ouverture /boutique 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /sur-mesure (390×844) : 2622 ms depuis le premier octet
- Bords de l’écran : 284 images d’intro, 27 de voile et 152 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /boutique : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /artiste : aucune section épinglée ou plein écran.
- Tient dans l'écran /boutique : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /sur-mesure : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 535, tâche la plus longue 0 ms
- Fluidité /artiste 1366×768 (molette) : 0 % d'images lentes sur 239, tâche la plus longue 0 ms
- Fluidité /boutique 1366×768 (molette) : 0 % d'images lentes sur 465, tâche la plus longue 0 ms
- Fluidité /sur-mesure 1366×768 (molette) : 0 % d'images lentes sur 355, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1414, tâche la plus longue 0 ms
- Fluidité /artiste 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /boutique 390×844 (doigt) : 0 % d'images lentes sur 1374, tâche la plus longue 64 ms
- Fluidité /sur-mesure 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse / : 0.77 s de calcul au chargement (téléphone ralenti).
- Vitesse /artiste : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /boutique : 0.61 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /sur-mesure : 0.46 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/boutique --seulement=fichiers,mouvement
```
