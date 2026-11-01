# TERRITOIRES V2.1 — Épisode 2 : contrôle de qualité

Date : 1er novembre 2026. Version expérimentale v2/ intégrée à la campagne, sans toucher à la version historique V1.4.1.

## Fonctionnalités livrées

- Fin de l'épisode 1 → lancement en octobre ; pas de deuxième jeu ou de système QCM indépendant.
- 4 lieux (bureau, secrétariat, salle des partenaires, manufacture), 5 conversations (Marianne, Lucie, Karim, Nora, Salomé), 4 documents, 3 lectures approfondies, un dossier de recommandation unique et trois conclusions.
- Le souvenir du choix de septembre modifie le texte d'ouverture d'octobre. Décisions et relations persistent dans la même sauvegarde et contribuent à la progression globale ; pas d'attribution infinie de points.
- Illustrations originales en WebP : réunion d'automne et portraits de Nora et Salomé. Vérification visuelle des mains et corps ; pas de doublons manifestes constatés à l'inspection.
- Textes de référence fiables : Constitution art. 72, Vie-publique « Qu'est-ce que la déconcentration ? » et portails DGCL sur les compétences intercommunales. L'épisode ne prétend pas que l'État autorise toute décision communale ou qu'une subvention vaut transfert.

## Tests exécutés

- Tests Node historiques et nouveaux (`node --test v2/tests/*.test.mjs`) : contrôles de logique, import V2 existant, choix, 3 branches, non-régression des XP, sauvegarde, reset et scénario complet simulé.
- Contrôle avec Chromium via injection locale sans navigation réseau : captures d'écran de 320/390/768 pixels, contrôles de débordement, images chargées, aucun JS pageerror, parcours septembre → octobre, note exportée TXT et reset.
- **Limite** : l'environnement bloque les navigations Chromium vers HTTP, même en localhost. Impossible de revendiquer un test end-to-end réseau / service worker ou une validation sur tablette Android physique ; ce contrôle est à faire après publication par l'utilisateur ou environnement navigateur autorisé.

## Continuité / sécurité

- Branche `backup/v2.0-alpha.1` à conserver comme point de retour de la V2 précédente.
- Branche de développement `experimental/v2.1-octobre` ; ne mettre à jour `/v2/` sur gh-pages qu'après GitHub Actions vert.
- Le chemin racine GitHub Pages (V1.4.1) et la clé historique `territoires.save.v1` restent intacts.
- Le parcours V2 n'est pas une migration de V1.4.1 ; les deux sauvegardes sont indépendantes.
- Les actions restent des exercices fictionnels et n'ont aucune portée juridique.

## Suite

Épisode 3 : formalités de publicité, transmission et contrôle de légalité, avec mise en situation détaillée ; puis les cinq actes ultérieurs en conservant le moteur narratif commun. Priorité aux personnages récurrents et à l'apprentissage en profondeur.