# TERRITOIRES 2.2 — premier acte jouable

**Statut : acte I jouable (3 épisodes continus) ; 15 autres épisodes sont encore à développer.**

Cette version est une branche expérimentale, indépendante de la V1.4.1 publiée. Le joueur rejoint Valrivière en septembre, rencontre Marianne, Lucie, Étienne et Jeanne, instruit trois documents, consulte trois lectures juridiques approfondies et rédige une note de conseil qui débouche sur l'un de trois épilogues et un souvenir mémorisé pour juin.

## Lancer

Depuis la racine du dépôt : `python3 -m http.server 8000 --directory v2`, puis ouvrir `http://localhost:8000`. Pas de compilation, dépendances ni abonnement.

## Parcours

Prologue → carte de la mairie (quatre lieux) → rencontres / documents → carnet juridique → note (trois arbitrages) → épilogue différencié → carnet de campagne. Les QCM ne forment pas un second chemin : ils sont des constats intégrés aux documents.

## Contrôles

- `node --check v2/app.js && node --check v2/engine.js && node --check v2/content.js`
- `node --test v2/tests/*.test.mjs`
- Scénarios Playwright : `python v2/tests/mobile_qa.py` (nécessite Chromium/Playwright local).

## Sauvegarde et migration

La clé `territoires.v2.pilot.v1` ne touche pas aux trois sauvegardes de V1. Les imports JSON V2 sont validés par le moteur ; le reset demande confirmation et conserve une copie locale de secours. Pas d'import automatique V1 → V2 pendant le pilote. Exporter la progression V1 avant une migration future.

## Sources

CGCT L2121-29, L2122-21, L2122-22, L2122-18, vérifiés au 1er novembre 2026 via Légifrance ; liens inclus dans le carnet. Les actes et montants sont fictifs.

## Graphismes

Décors WebP issus des créations graphiques TERRITOIRES précédentes, portraits découpés d'illustrations créées pour ce projet ; source PNG conservée localement. Les dessins n'ont pas été remplacés par des formes CSS. Interface mobile-first et mode hors ligne via service worker.

## Limites

Ce pilote ne couvre pas encore toutes les disciplines du concours, ne propose ni déplacements libres de personnage ni histoire complète de novembre à août (les choix de septembre et octobre sont utilisés dans les scènes suivantes et les autres actes restent à développer). Les lectures sont des synthèses pédagogiques, non des reproductions exhaustives des codes. Tests navigateur en émulation Android et non sur tablette physique.


## Version 2.1 — Octobre : Les partenaires du territoire

La campagne continue désormais en une seule sauvegarde : septembre (conseil, maire et délégations) conduit directement à octobre (État déconcentré, commune, EPCI et coopération). Les souvenirs de septembre modifient les dialogues d'octobre et les nouvelles décisions seront réutilisables dans la suite de l'année.

Octobre contient cinq conversations approfondies, quatre pièces fictives à vérifier, trois lectures de fond, une note à présenter à la DGS et trois conclusions qui auront un écho en juin. L'interface affiche des décors WebP et les portraits de deux nouveaux interlocuteurs, Nora Vidal et Salomé Marchand.

**Continuité :** même clé de sauvegarde `territoires.v2.pilot.v1`, restauration des anciennes parties V2 de septembre, export et remise à zéro communs aux deux épisodes. La V1.4.1 reste indépendante dans la racine GitHub Pages.

**Tests :** depuis le dossier `v2`, exécuter `node --test tests/*.test.mjs`. Le script `python tests/visual_qa_inline.py` permet le contrôle Chromium sans navigation réseau (test du DOM, clics, captures, 320/390/768 px, export, reset). La navigation réelle par HTTP et le service worker ne sont pas validés par ce test.

**Références officielles :** article 72 de la Constitution (Légifrance), Vie-publique sur la déconcentration, DGCL sur les compétences des EPCI et les fonds de concours. Les textes applicables doivent être vérifiés pour toute situation réelle.

## V2.2 - Le dossier prêt à partir / clôture de l'acte I

- Trois épisodes continus sous une seule sauvegarde locale, sans QCM parallele.
- Nouvel episode fin octobre : archives, salle du conseil, bureau de la DGS et service de l Etat.
- Quatre pièces administratives, cinq dialogues à huit répliques, quatre cours de fond d environ 330 à 350 mots, trois vérifications de circuit et trois stratégies narratives.
- Souvenirs de septembre et d octobre intégrés au prologue et au bilan.
- Nouvelles illustrations WebP : archives et salle du conseil.
- La version publiee V1.4.1 reste distincte de ce prototype.

**Validation V2.2 :** 30 tests Node réussis, simulation complète de l acte I sous Chromium à 320/390/768 px sans débordement ni erreur JavaScript ; la navigation HTTP est bloquée par l environnement de test et un essai physique Android/iOS reste nécessaire.
