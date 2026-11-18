# Rapport d’audit

Projet : `tableauxenfant-maquette` · 18/11/2026 12:57:06 · 7 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261118-115018-complet-partiel` · version ?v=1
- Échecs : **4**
- À regarder : **11**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (8), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261118-111304-rapide-cible | rapide | /,/boutique,/sur-mesure,/artiste,/contact,/404 | toutes | 377 | 35 | 1 | échecs |
| 20261118-113425-standard | standard | toutes | toutes | 1 | 21 | 1 | échecs |
| **20261118-115018-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 4 | 11 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) « Toiles originales 145 € · sur mesure 185 € · affic » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/artiste` — div.conteneur.ouv-artiste-grille > div.ouv-artiste-texte:nth-of-type(2) > p.ouv-actions:nth-of-type(3) > span.ouv-info « Romorantin-Lanthenay · Loir-et-Cher » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ouv-contact-texte.conteneur > p.ouv-actions:nth-of-type(4) > span.ouv-info « Atelier à Romorantin-Lanthenay, Loir-et-Cher » _(1000×560 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/artiste` — div.conteneur.ouv-artiste-grille > div.ouv-artiste-texte:nth-of-type(2) > p.ouv-actions:nth-of-type(3) > a.bouton « Lui confier une toile » _(1000×560 sansJs)_

## À regarder

### section sans visuel (9)

- **section sans visuel** — `/` — section#sur-mesure « uni uni rayures pois quadrillage Le sur-mesure, 18 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, +21)_
- **section sans visuel** — `/` — section#avis « Ils se sont reconnus Les mots des parents, tels qu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#sur-mesure « quadrillage uni rayures pois quadrillage Le sur-me » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1024×768 normal, 1000×560 normal, 1280×720 normal, 1728×1000 normal, 1920×1080 normal, 1024×768 sansWebgl, +4)_
- **section sans visuel** — `/` — section#sur-mesure « rayures uni rayures pois quadrillage Le sur-mesure » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1440×900 normal, 1440×900 sansWebgl)_
- **section sans visuel** — `/artiste` — section#histoire « Une émotion souvenir Chez Sevb, une toile part tou » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/artiste` — section#avis « Ce qu'en disent les parents Ravie de cette toile s » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/boutique` — section#bon-a-savoir « Bon à savoir Emballage soigné Protection plastique » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/sur-mesure` — section#inclus « Ce qui est compris 01 Toile 50 × 50 cm Lin et coto » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/sur-mesure` — section#faq « Vos questions Combien de temps faut-il pour une to » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### typographie française (2)

- **typographie française** — `/` — div.conteneur.sevb-grille > div.sevb-texte > blockquote.sevb-citation > p « « Chaque tableau raconte son histoire, une émotion » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/artiste` — div.conteneur.histoire-grille > div.histoire-texte > blockquote.histoire-citation > p « « Rien n'est standardisé. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /artiste : aucune section épinglée ou plein écran.
- Tient dans l'écran /boutique : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /sur-mesure : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/artiste,/contact --seulement=fichiers,mesures
```
