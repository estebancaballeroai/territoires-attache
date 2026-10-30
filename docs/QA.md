# Vérifications — édition 1.0

## Automatisation
11 tests Node réussis. Validation des identifiants, liens internes, sources associées, 60 énoncés uniques et 4 choix distincts par QCM; existence des fichiers graphiques. Simulation des 18 dossiers et 6 quêtes secondaires avec lectures et corrections, sauvegarde/recharge après chaque dossier. Second parcours sans erreur, passage du temps et consolidation des 54 questions principales. Vérification des prérequis, absence de récompenses répétées, import invalide, conservation de dossiers terminés après une erreur en révision. Service worker testé dans un environnement simulé avec réseau coupé et ressources en cache.

## Navigateur réel disponible
Chrome distant : accueil, mission initiale complète, mauvaise réponse puis correction, consultation du livre pendant un QCM, bilan, validation et ouverture du dossier suivant. Quête secondaire jouée, code consulté depuis la question, récompense. Bibliothèque, recherche « budget », sacoche et repères juridiques. Changement de parcours externe vers troisième concours. Export JSON téléchargé puis réimport confirmé avec conservation de la progression.

## Affichage
Contrôle visuel desktop et vues intégrées de 390 puis 320 pixels. Police à 130 %. Un débordement à 320 pixels a été identifié dans les réglages puis corrigé. Largeur de document vérifiée égale à la largeur disponible (305 pixels hors barre de défilement) dans réglages, bibliothèque et sacoche. Lecteur modal sans dépassement horizontal, texte défilant et commandes accessibles.

## Limites
Les cadres de test vérifient les largeurs CSS, pas les moteurs ou performances d'appareils physiques Android anciens ou iOS. Aucun essai physique effectué. Le fonctionnement hors ligne a d'abord été testé par simulation; l'essai de téléchargement HTTPS est indiqué dans le compte rendu de livraison selon son résultat. Un nombre de tests réussi ne garantit pas l'exhaustivité pédagogique ou juridique du concours.

## Corrections de recette
- Options administratives plausibles à la place des distracteurs manifestement absurdes.
- Précision « susceptible de compromettre gravement » pour l'obéissance hiérarchique.
- Lien direct vers L1612-4 pour le repère d'équilibre réel.
- Accès contextualisé aux repères de codes depuis les QCM.
- Réglages, lecteurs et titres adaptés aux petites largeurs et grands caractères.
- Retour de navigation et URL mal formée gérés.
