# TERRITOIRES 2.0 — prototype vertical jouable

**Statut : épisode 1 jouable ; les 17 autres épisodes ne sont pas encore développés.**

Cette version est une branche expérimentale, indépendante de la V1.4.1 publiée. Le joueur rejoint Valrivière en septembre, rencontre Marianne, Lucie, Étienne et Jeanne, instruit trois documents, consulte trois lectures juridiques approfondies et rédige une note de conseil qui débouche sur l'un de trois épilogues et un souvenir mémorisé pour juin.

## Lancer

Depuis la racine du dépôt : `python3 -m http.server 8000 --directory v2`, puis ouvrir `http://localhost:8000`. Pas de compilation, dépendances ni abonnement.

## Parcours

Prologue → carte de la mairie (quatre lieux) → rencontres / documents → carnet juridique → note (trois arbitrages) → épilogue différencié → carnet de campagne. Les QCM ne forment pas un second chemin : ils sont des constats intégrés aux documents.

## Contrôles

- `node --check v2/app.js && node --check v2/engine.js && node --check v2/content.js`
- `node --test v2/tests/*.test.mjs`
- Scénarios Playwright : `python v2/tests/mobile_qa.py` (nécessite Chromium/Playwright local). Le Chromium installé dans cet environnement refuse toute navigation (`ERR_BLOCKED_BY_ADMINISTRATOR`) ; ce test reste non validé. Le parcours a été simulé via les événements DOM et le moteur Node.

## Sauvegarde et migration

La clé `territoires.v2.pilot.v1` ne touche pas aux trois sauvegardes de V1. Les imports JSON V2 sont validés par le moteur ; le reset demande confirmation et conserve une copie locale de secours. Pas d'import automatique V1 → V2 pendant le pilote. Exporter la progression V1 avant une migration future.

## Sources

CGCT L2121-29, L2122-21, L2122-22, L2122-18, vérifiés au 1er novembre 2026 via Légifrance ; liens inclus dans le carnet. Les actes et montants sont fictifs.

## Graphismes

Décors WebP issus des créations graphiques TERRITOIRES précédentes, portraits découpés d'illustrations créées pour ce projet ; source PNG conservée localement. Les dessins n'ont pas été remplacés par des formes CSS. Interface mobile-first et mode hors ligne via service worker.

## Limites

Ce pilote ne couvre pas encore toutes les disciplines du concours, ne propose ni déplacements libres de personnage ni mémorisation opérationnelle inter-épisodes (les événements sont sauvegardés mais les autres épisodes restent à construire). Les lectures sont des synthèses pédagogiques, non des reproductions exhaustives des codes. Tests navigateur en émulation Android et non sur tablette physique.