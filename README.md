# TERRITOIRES — Objectif Attaché · V1.2

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

Modifier les fichiers dans dist. Exécuter `npm run check` puis `npm test` (18 tests). Aucun service payant ni appel IA pendant le jeu. Les tests sont désormais exécutés par GitHub Actions à chaque push et pull request.

- [Bible de campagne](docs/CAMPAGNE.md)
- [Ressources graphiques](docs/ASSETS.md)
- [Vérification et limites](docs/V1.2-VALIDATION.md)

Les sauvegardes V1 sont conservées et démarrent en exploration libre. Le carnet permet de revenir au parcours chronologique. Les nouveaux joueurs commencent en mode campagne.

Les tests mobiles ont été réalisés dans le navigateur ; pas de validation sur une ancienne tablette physique. Les liens juridiques externes nécessitent une connexion.


## V1.2 — Enquête financière interactive

Mission spéciale accessible depuis l'accueil ou l'acte III (`fin-2`). Quatre pièces fictives, diagnostic, trois scénarios chiffrés, restitution à la DGS et conséquences narratives. Sauvegarde séparée `territoires.budget.v1`, sans modification des progressions V1.

## V1.3 — Le dossier vivant

Quatre pièces à analyser, trois dialogues à embranchements courts, diagnostic, scénarios, restitution et export TXT. Illustration dédiée WebP. Sauvegardes V1/V1.2 conservées. Tests Chromium en CI.

## V1.4 — Institutions en action

Trois dossiers vivants : organes municipaux, acteurs de l'État et des collectivités, publicité/transmission/contrôle de légalité. Dix pièces fictives, six dialogues, neuf stratégies. Sauvegarde autonome `territoires.civic.v1`. Ancienne campagne et QCM conservés.

## V1.4.1 — Introduction et nouvelle partie

Une introduction présente Valrivière, la manufacture et la mission du joueur avant une première campagne. Les joueurs existants ne sont pas interrompus. Depuis Paramètres : relire l’introduction ou, après confirmation, recommencer à zéro. Avant suppression, une sauvegarde d'urgence locale est stockée sous `territoires.reset.backup.v1`. L'export JSON manuel reste recommandé. La remise à zéro porte sur la campagne, les modules financiers et institutionnels, les brouillons et les paramètres; le cache applicatif et les ressources téléchargeables restent présents.
