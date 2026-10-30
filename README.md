# Territoires — Objectif Attaché 1.0.0

RPG pédagogique en français pour apprendre un premier socle de culture territoriale. Parcours externe prioritaire et troisième concours alternatif. Bibliothèque, sacoche, repères de codes, lectures essentielles et facultatives, QCM corrigés, quêtes secondaires et progression conservée.

## Jouer
Ouvrir la version hébergée. Commencer par « Entrer à Valrivière », ouvrir la lecture essentielle puis la marquer terminée. Traiter les trois questions, consulter au besoin les livres et les repères de codes, et valider le dossier. Les lieux sont accessibles dès le début; les dossiers d'un même lieu suivent une progression.

## Contenu livré
- 6 chapitres, 18 dossiers, 6 quêtes secondaires.
- 24 lectures originales, 60 QCM uniques et expliqués.
- 10 repères de codes et 34 références officielles.
- 7 ressources ImageGen intégrées : six décors et un portrait.
- Bibliothèque filtrable, révisions espacées et défi de dix questions.
- Ateliers d'autoévaluation adaptés à externe ou troisième concours.
- Police réglable, sauvegarde JSON exportable/importable et téléchargement hors ligne.

La version constitue une base introductive de préparation. Elle ne remplace pas les annales, les lectures approfondies, les entraînements longs et la correction humaine. La langue vivante n'est pas enseignée dans cette édition. Les QCM sont des créations originales, jamais des annales officielles prétendues.

## Déployer sur GitHub Pages
Le jeu est statique, sans dépendance ni API payante. Publier **le contenu du dossier `dist`** à la racine de la branche servie par GitHub Pages, ou configurer une action de déploiement de ce dossier. Tous les chemins sont relatifs pour les Pages de projet. Le fichier `index.html` doit être à la racine du dossier publié. Aucun secret n'est nécessaire.

Le jeu nécessite un serveur HTTP(S), plutôt qu'un double-clic en `file://`, pour charger ses modules et son contenu. Le service worker nécessite HTTPS ou un contexte local sécurisé.

## Vérifier
`npm test` exécute les tests sans installation. `npm run check` vérifie la syntaxe. Voir `docs/QA.md` pour la portée réelle des essais et leurs limites.

## Données et mises à jour
Stockage local sous `territoires.save.v1`, schéma 1. Exporter sa sauvegarde avant changement d'appareil. Les identifiants des livres, questions et missions sont stables. Les versions sont conservées dans l'historique Git (v0.1 à v1.0).

## Crédits
Conception et corpus : ELC Studio. Illustrations créées avec ImageGen à partir d'une direction artistique originale. Sources institutionnelles accessibles depuis les ouvrages; aucune illustration tierce copiée. Les textes générés sont des synthèses pédagogiques vérifiées sur les références listées, datées du 30 octobre 2026.
