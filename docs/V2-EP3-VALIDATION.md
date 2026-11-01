# TERRITOIRES 2.2 — Episode 3 « Le dossier prêt à partir »

## Périmètre

- Troisième épisode de l'acte I directement relié à septembre et octobre dans la même sauvegarde (`territoires.v2.pilot.v1`).
- Quatre lieux réels dans le moteur : archives, salle du conseil, bureau de Marianne, échange avec Nora.
- Quatre pièces fictives vérifiables, cinq conversations développées, quatre fiches de culture territoriale, trois questions de circuit obligatoires, trois stratégies finales.
- Le moteur exige les constats fondés avant remise de la fiche ; la stratégie de communication a un effet narratif, non sur la légalité de l'acte.
- Conséquences mémorisées dans le carnet, XP et confiance cumulés ; ancien JSON V2.1 restauré sans effacer les deux premiers épisodes.
- Assets WebP originaux : `archives-v22.webp` et `conseil-v22.webp` (salle vide pour éviter les anomalies anatomiques).

## Fondements juridiques

- CGCT L2131-1 : publicité adaptée, décisions individuelles notifiées, transmission supplémentaire pour les catégories concernées ; Valrivière est fictivement >3 500 habitants.
- CGCT L2131-2 : délibération du conseil incluse dans la transmission dans cet exercice, hors exceptions ; accusé de réception utilisable comme preuve mais pas condition autonome du caractère exécutoire.
- CGCT R2131-1 : publication électronique du texte intégral, téléchargement, intégrité, mentions de l'auteur et date de mise en ligne.
- CGCT L2131-6 : contrôle de légalité et déféré du préfet devant le tribunal administratif, délai ordinaire de deux mois à compter de la transmission pour ces actes.
- Liens directs vers Légifrance présents dans les lectures. Sources consultées le 1er novembre 2026.

## Tests

- `node --test v2/tests/*.test.mjs` : 30 tests passants (comprend moteur ancien et nouveau, anti-régression, restauration, fin, échec, XP, sources et assets).
- `python v2/tests/visual_qa_inline.py` : simulation Chromium en DOM local (sans navigation réseau), clics septembre → octobre → dernier dossier, captures 320 / 390 / 768 px, erreurs JS, note finale, export TXT, reset.
- Pas de débordement horizontal dans les trois largeurs ; ressources graphiques chargées dans le DOM simulé.
- Essai de navigation HTTP vers 127.0.0.1 refusé par l'environnement (`ERR_BLOCKED_BY_ADMINISTRATOR`) ; cela n'indique pas une panne du jeu lui-même, et ne constitue pas un test HTTP réussi.
- Pas de test physique sur ancienne tablette Android ; service worker inclus et liste de fichiers vérifiée statiquement, mais comportement offline à confirmer via navigateur réseau réel.

## Publication et stabilité

- Branche de sauvegarde V2.1 conservée avant modifications ; V1.4.1 reste publiée à la racine.
- Publication isolée dans GitHub Pages `/v2/` uniquement après succès de GitHub Actions.
- Ce jalon achève l'acte I : 3 épisodes sur 18 ; l'acte II reste à concevoir et à produire.
