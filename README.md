# TERRITOIRES — Objectif Attaché · V1.1

Jeu narratif de culture territoriale pour préparer le concours externe ou le troisième concours d’attaché territorial.

## Publication GitHub Pages

Dans **Settings → Pages**, sélectionner **Deploy from a branch**, branche **gh-pages**, dossier **/(root)** puis **Save**, si la publication n’est pas déjà activée. La branche gh-pages contient directement les fichiers du jeu. Pour une mise à jour, synchroniser cette branche avec le contenu de dist.

## Contenu

Six actes, 18 dossiers, six quêtes secondaires, 24 lectures, 60 QCM expliqués et 12 illustrations. Prologue, personnages récurrents, pièces à collectionner, carnet de campagne, sauvegardes exportables et révisions espacées.

Cette édition constitue un socle introductif, pas une préparation exhaustive au concours.

## Versions conservées

- backup/v1.0 : version précédente.
- experimental/v1.1-campagne : campagne narrative validée.
- main : sources de la dernière version.
- gh-pages : fichiers du site.

## Développement

Modifier les fichiers dans dist. Exécuter `npm run check` puis `npm test` (15 tests). Aucun service payant ni appel IA pendant le jeu.

- [Bible de campagne](docs/CAMPAGNE.md)
- [Ressources graphiques](docs/ASSETS.md)
- [Vérification et limites](docs/V1.1-VALIDATION.md)

Les sauvegardes V1 sont conservées et démarrent en exploration libre. Le carnet permet de revenir au parcours chronologique. Les nouveaux joueurs commencent en mode campagne.

Les tests mobiles ont été réalisés dans le navigateur ; pas de validation sur une ancienne tablette physique. Les liens juridiques externes nécessitent une connexion.
