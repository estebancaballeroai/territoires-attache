/** TERRITOIRES 2.2 - Episode 3, fiction pedagogique, references CGCT verifiees en novembre 2026. */
export const NOVEMBRE={
 id:'inst-3',title:'Le dossier pret a partir',month:'Fin octobre',act:'Acte I - Les premières promesses',
 lead:'La commune vient d adopter une délibération de principe sur la manufacture. Mais un document signé n\'est pas nécessairement un acte exécutoire. Marianne te confié la vérification des formalités et une note lisible pour les élus.',
 locations:[
  {id:'archives',name:'Le bureau des actes',where:'Hotel de ville - archives des assemblees',image:'archives-v22.webp',description:'Lucie cherche les traces de publication et la preuve de la transmission.',actions:['lucie']},
  {id:'conseil',name:'La salle du conseil',where:'Hotel de ville - premier etage',image:'conseil-v22.webp',description:'Les conseillers ont debattu de la manufacture. La portée exacte du vote reste a clarifier.',actions:['etienne','jeanne']},
  {id:'bureau',name:'Le bureau de Marianne',where:'Annexe administrative',image:'bureau.webp',description:'La DGS veut une analyse factuelle et un circuit de contrôle utilisable.',actions:['marianne']},
  {id:'prefecture',name:'Le rendez-vous avec Nora',where:'Salle des partenaires',image:'reunion-automne.webp',description:'Nora rappelle ce que la préfecture peut, et ne peut pas, faire lors du contrôle de légalité.',actions:['nora']}
 ],
 prologue:[
  {speaker:'Narrateur',text:'Fin octobre. Les feuilles collent aux marches de la mairie. Dans la salle du conseil, les chaises ont retrouve leur place ; il reste des verres d eau, quelques notes et les mots que chacun a cru entendre.'},
  {speaker:'Lucie Morel',text:'Le conseil a voté hier. Le cabinet veut dire que la manufacture est officiellement ouverte. J\'ai une délibération signée, mais pas la même version sur le site de la ville. Et je ne vois aucun justificatif de transmission dans le dossier.'},
  {speaker:'Marianne Delmas',text:'La signature ne suffit pas a répondre a toutes les questions. Je veux distinguer ce qui a été décidé, les formalités accomplies et ce qui reste seulement prevu. Pas de raccourci.'},
  {speaker:'Narrateur',text:'Tu repenses aux promesses de septembre et aux partenaires rencontres en octobre. Dans les deux cas, un mot trop rapide avait suffi a brouiller la réalité.'},
  {speaker:'Marianne Delmas',text:'Avant midi, tu verras Lucie, Nora et le maire. Puis tu me remettras une fiche de contrôle. Si nous devons reprendre une étape, nous le ferons sans dissimuler notre retard.'}
 ],
 september:{
  transparent:'En septembre, vous aviez pris soin de présenter le projet comme une intention a instruire. Marianne te dit : « Cette prudence nous permet maintenant de dire precisement ce que le vote change. »',
  promise:'En septembre, une date d\'ouverture avait été annoncee trop vite. Marianne regarde la note du cabinet : « La confusion risque de devenir publique. Nous devons la rectifier sans humilier personne. »',
  silent:'En septembre, la commune avait peu explique ses intentions. Jeanne attend toujours une parole claire : un acte signé risque, pour elle, de devenir encore un secret administratif.'
 },
 october:{
  matrix:'La matrice des responsabilités établie en octobre permet d\'identifier rapidement qui doit publier, qui doit transmettre et qui conserve les preuves.',
  cooperate:'La réunion de cooperation d\'octobre a ouvert un dialogue : Nora accepte de préciser le role de son service, sans valider à la place de la commune.',
  announce:'La communication d\'octobre presentait trop vite un partenariat comme acquis. Nora insiste pour que la délibération de la commune ne soit pas confondue avec un accord des autres acteurs.'
 },
 sceneLabel:'Le conseil s est prononce sur un lancement d\'études, pas sur une ouverture immédiate.',
 people:{
  marianne:{name:'Marianne Delmas',portrait:'marianne.webp',role:'DGS - exige des preuves, non des intentions'},
  lucie:{name:'Lucie Morel',portrait:'lucie.webp',role:'Secrétariat général - gardienne des actes'},
  etienne:{name:'Etienne Roussel',portrait:'etienne.webp',role:'Maire - veut expliquer le vote aux habitants'},
  nora:{name:'Nora Vidal',portrait:'nora.webp',role:'Préfecture - contrôle de légalité'},
  jeanne:{name:'Jeanne Perrin',portrait:'jeanne.webp',role:'Association - attend une information honnete'}
 }
};
export const NOVEMBRE_DOCS=[
 {id:'deliberation',category:'Acte du conseil - fiction',title:'Délibération n 2026-108 : l étude des Tilleuls',from:'Secrétariat des assemblees',date:'27 octobre 2026',paragraphs:[
 'Extrait fictif du registre des délibérations. Le conseil municipal de Valrivière, après en avoir délibéré, approuve le principe de poursuivre les études relatives à la reconversion de la manufacture des Tilleuls en équipement public et demande la préparation de scénarios techniques, d\'une estimation financière et d\'un programme de concertation avec les habitants.',
 'Le texte charge le maire de préparer les actes nécessaires a cette phase d étude, dans les limites des compétences et délégations applicables. Il ne vote ni le programme definitif des travaux, ni un calendrier ferme d\'ouverture, ni un contrat de travaux, ni un budget specifique pour exploiter le futur équipement.',
 'La délibération est signée par les personnes habilitées et comporte la date de la séance. Le dossier du secrétariat comporte un original numérisé, un projet de communiqué et un relevé d échanges des conseillers. Aucun document ne doit être lu comme allant au-dela de son dispositif.',
 'Le cabinet a pourtant rédigé une proposition de message : « Le conseil a autorisé l\'ouverture integrale de la manufacture des l été prochain. » Ton travail consiste à vérifier la portée de l\'acte et a distinguer un accord pour etudier d\'une décision de construire, de financer ou d ouvrir.'
 ],question:'Quelle portée peut-on légalement attribuer à ce vote ?',choices:[
  {id:'opened',label:'Il rend immédiate et automatique l\'ouverture du batiment.'},
  {id:'study',label:'Il lance la phase d\'études et de concertation, sans décider des travaux ni de l\'ouverture.'},
  {id:'project',label:'Il attribué automatiquement le projet et toutes ses depenses à la préfecture.'}
 ],correct:'study',why:'Le dispositif du texte approuvé uniquement les études et la concertation ; la signature ne vaut ni ouverture ni autorisation financière générale.',hint:'Relis les verbes du dispositif : approuver un principe, demander des études, charger le maire de préparer.'},
 {id:'publication',category:'Publication - fiction',title:'L écran du site municipal',from:'Service communication et secrétariat',date:'28 octobre 2026',paragraphs:[
 'Une capture du gestionnaire de contenu montre la délibération n 2026-108 parmi les fichiers prepares pour le site. Son État est « brouillon », avec une mise en ligne programmee mais aucune date de diffusion effective. Le fichier comporte le texte du vote et une ancienne version du nom de l\'auteur de l\'acte.',
 'La ville compte plus de 3 500 habitants dans l\'univers du jeu et dispose d\'un site institutionnel. Pour cet acte ni individuel ni purement interne, la publication électronique constitue donc la modalité de droit commun. Le service doit veiller à la mise en ligne effective dans les conditions réglementaires, à l\'intégrité du fichier, à sa mise à disposition durable et à la présence des mentions légales requises.',
 'Lucie tient un tableau des operations, mais la case « publication réalisée » n\'est pas cochee. Une capture du brouillon atteste de l intention de publier ; elle ne prouve pas que les habitants pouvaient déjà consulter le document.',
 'La distinction importe : lorsque les formalités de publicité sont exigees, elles contribuent au caractère exécutoire de l\'acte. Le secrétariat doit conserver les éléments factuels permettant d établir la date de publication réelle, sans fabriquer une date rétroactive.'
 ],question:'Quelle constatation et quelle action sont les plus fiables ?',choices:[
  {id:'draft',label:'Le simple brouillon suffit a prouver la publication.'},
  {id:'post',label:'Vérifier la publication électronique effective, ses mentions et sa date ; conserver une trace.'},
  {id:'paper',label:'Tout acte communal peut être seulement affiche sur une porte, quelle que soit la commune.'}
 ],correct:'post',why:'Un brouillon ne vaut pas publication ; pour une commune de plus de 3 500 habitants, la publication électronique de droit commun s applique ici.',hint:'La fiche R2131-1 précise les exigences du site web, et L2131-1 les régimes differencies.'},
 {id:'transmission',category:'Transmission - fiction',title:'Le journal du parapheur et de la teletransmission',from:'Secrétariat general',date:'29 octobre 2026',paragraphs:[
 'Le registre local mentionne un dossier préparé pour l\'application de teletransmission des actes au représentant de l\'État. La ligne associee à la délibération est marquee « en attente de validation de l envoi ». Aucune confirmation d envoi ni trace de réception n\'est jointe.',
 'Dans cette simulation, la délibération n 2026-108 entre dans la catégorie des actes soumis a transmission mentionnee au 1 de l\'article L2131-2 du CGCT ; elle ne correspond pas aux exceptions légales. Cette qualification doit être établie selon la nature du document et non par la seule présence d\'un numero ou d\'un logo.',
 'Le service de teletransmission dispose d\'un brouillon, du texte signé et d\'un bordereau. La preuve de réception peut, en droit, être apportee par tout moyen. L accusé de réception facilite cette preuve, mais ne constitue pas, a lui seul, une condition materielle supplementaire du caractère exécutoire.',
 'Il faut vérifier la transmission effective, enregistrer les informations de réception et les articuler avec la date de publication. Ni une signature, ni une saisie incomplete dans le logiciel ne suffisent a demontrer le respect du régime applicable.'
 ],question:'Que doit-on vérifier avant de dire cet acte exécutoire ?',choices:[
  {id:'signature',label:'La signature seule et la présence d\'un numero d acte.'},
  {id:'waitjudge',label:'L approbation expresse du préfecture sur le fond, pour tout acte.'},
  {id:'both',label:'La publication requise et la transmission effective au représentant de l\'État, avec des preuves.'}
 ],correct:'both',why:'Les deux catégories de formalités se cumulent pour cet acte transmissible : publicité applicable et transmission effectivement réalisée.',hint:'L2131-1 vise la publicité et, pour les actes de L2131-2, la transmission.'},
 {id:'defer',category:'Contrôle de légalité - fiction',title:'Le message alarmant du cabinet',from:'Cabinet du maire',date:'29 octobre 2026',paragraphs:[
 'Le maire recoit un message : « Si le préfet refusé notre délibération, il l annule immédiatement et le projet s arrete. » La formule circule parmi les élus avant même la fin des formalités du secrétariat. Nora Vidal a déjà explique en octobre que l\'État contrôle la légalité des actes dans le cadre de ses attributions, sans se substituer à l\'assemblee municipale.',
 'Le représentant de l\'État peut adresser des observations, demander des explications et, pour les actes concernes et dans les conditions légales, saisir le tribunal administratif par un déféré préfectoral. Le délai ordinaire pour les actes de L2131-2 est de deux mois suivant leur transmission. Le contrôle du juge est distinct de la discussion administrative avec la préfecture.',
 'Un déféré ne vaut pas, a lui seul, annulation automatique. Une suspension peut être demandee dans les conditions du CGCT ; elle suppose notamment une appreciation juridictionnelle, sous reserve des mecanismes speciaux prevus par les textes. Pour un acte qui n\'est pas transmis faute d obligation, un autre régime de communication peut s appliquer.',
 'Le service doit donc corriger la formule alarmiste, ne pas annoncer une approbation administrative générale et préparer une documentation accessible sur le role respectif du représentant de l\'État et du juge.'
 ],question:'Qui prononce une eventuelle annulation contentieuse ?',choices:[
  {id:'prefect',label:'Le préfet seul, par courriel, sans intervention du juge.'},
  {id:'tribunal',label:'La juridiction administrative competente, à la suite du recours selon le régime applicable.'},
  {id:'dgs',label:'La DGS, car elle suit la phase d étude.'}
 ],correct:'tribunal',why:'Le préfet peut exercer un déféré, mais l\'annulation juridictionnelle appartient au juge administratif.',hint:'L2131-6 organise le déféré préfectoral et ses conditions.'}
 ];
export const NOVEMBRE_TALKS={
 marianne:{person:'marianne',title:'Ne pas confondre vote et effet juridique',intro:[
  {who:'Marianne',text:'« J\'ai relu la note du cabinet. Elle est brève, enthousiaste et fausse sur un point essentiel : le conseil n\'a pas voté l\'ouverture de la manufacture. »'},
  {who:'Vous',text:'« Il a choisi d avancer sur les études. Ce n\'est pas rien, mais ce n\'est pas l autorisation de tout faire. »'},
  {who:'Marianne',text:'« Exactement. Un acte peut être adopté sans être encore exécutoire, et être exécutoire sans avoir l\'effet politique qu\'on lui prete. Trois questions différentes. »'},
  {who:'Marianne',text:'« Lucie me signale un brouillon sur le site. La transmission n apparait pas non plus au registre. Je préfère expliquer ce que nous ignorons plutôt que d inventer des dates. »'},
  {who:'Vous',text:'« Je vais réunir les traces, puis distinguer ce qui manque de ce qui est fait. »'},
  {who:'Marianne',text:'« Et n oubliez pas que les habitants ne raisonnent pas en articles de code. Jeanne nous demandera ce que le vote change demain matin, pas la difference entre un acte non réglementaire et une décision individuelle. »'},
  {who:'Marianne',text:'« Votre note doit être lisible, complète et prudente. Un bon juriste n\'est pas celui qui ralentit tout ; c\'est celui qui permet de décider sans se raconter d histoire. »'},
  {who:'Marianne',text:'« Nous devons garder un cap humain. Sans cela, notre excellence administrative n aura guere de sens pour la manufacture. »'}
 ],choices:[
  {id:'proof',label:'Je separerai la portée du vote, la publicité, la transmission et les suites ouvertes.',trust:2,reply:'Marianne pose son stylo. « Vous avez compris : quatre sujets, quatre preuves possibles. »'},
  {id:'reassure',label:'Je vais plutôt rassurer le cabinet en parlant d\'un acte déjà valide.',trust:-2,reply:'« Non. Notre role n\'est pas de produire une assurance sans fondement », repond-elle calmement.'}
 ]},
 lucie:{person:'lucie',title:'La trace qui manque',intro:[
  {who:'Lucie',text:'« Vous voyez cet onglet ? Brouillon. Le cabinet a déjà capture la page comme si elle était publique. Je sais que cela parait minuscule, mais je suis la personne que les habitants appellent quand le lien ne marche pas. »'},
  {who:'Vous',text:'« Et la transmission ? »'},
  {who:'Lucie',text:'« Le parapheur était pret. Puis quelqu un a oublie de valider l envoi. Je n\'ai pas de réception. Et j\'ai refusé de cocher la case publication avant de voir la vraie page sur notre site. »'},
  {who:'Vous',text:'« Vous avez bien fait de ne pas inventer la preuve. »'},
  {who:'Lucie',text:'« C\'est étrange, hein ? On me demande d aller vite, mais quand une date est fausse, personne ne vient expliquer au public pourquoi. On me laisse seule avec les coups de fil. »'},
  {who:'Lucie',text:'« Je voudrais un circuit simple : qui depose, qui vérifié, qui conserve la preuve ? Et que chacun puisse dire ce qui bloque. »'},
  {who:'Vous',text:'« Nous pouvons le proposer dans la note, avec un responsable par étape. »'},
  {who:'Lucie',text:'« Si vous obtenez cela, je ne dirai plus que les juristes ne voient jamais les personnes derriere leurs tableaux. »'}
 ],choices:[
  {id:'listen',label:'On documente chaque étape et on partage la responsabilité du suivi avec le secrétariat.',trust:2,reply:'« Merci. Avec un suivi commun, je pourrai expliquer sans me retrouver devant un écran vide. »'},
  {id:'pressure',label:'Cochez les cases maintenant ; on retrouvera les justificatifs après.',trust:-2,reply:'Lucie secoue la tête. « Une case cochee ne transforme pas un brouillon en publication. »'}
 ]},
 etienne:{person:'etienne',title:'Le poids d\'une annonce',intro:[
  {who:'Etienne Roussel',text:'« Il y a six semaines, personne ne parlait plus des Tilleuls. Depuis le conseil, les habitants s y interessent. Je ne veux pas les decevoir avec une guerre de dates et de formalités. »'},
  {who:'Vous',text:'« La delibération décidé les études ; elle ne fixé pas une ouverture. Nous pouvons expliquer cette avancee réelle. »'},
  {who:'Etienne Roussel',text:'« Nora m avait dit qu\'une réunion avec la préfecture ne valait pas accord. Et aujourd hui on me parle de transmission. On me reprochera encore de n avoir rien fait. »'},
  {who:'Vous',text:'« Les formalités ne retirent rien au vote. Elles permettent de savoir ou en est juridiquement la décision. »'},
  {who:'Etienne Roussel',text:'« J\'ai promis un projet utile. Je veux que la communaute et les associations aient confiance. Mais comment parler de succès si nous annoncons que le document n\'est pas encore public ? »'},
  {who:'Vous',text:'« En disant ce qui est vote, ce qui reste à faire et quand nous communiquerons les informations confirmees. »'},
  {who:'Etienne Roussel',text:'« Donc il faudrait un calendrier d\'études et une explication claire, plutôt qu\'un grand titre sur une ouverture que nous ne pouvons pas garantir. »'},
  {who:'Etienne Roussel',text:'« Je n aime pas renoncer à une belle phrase. Mais j\'aime encore moins que les habitants me citent un mensonge. »'}
 ],choices:[
  {id:'precise',label:'Nous pouvons annoncer le lancement des études, puis publier une feuille de route verifiable.',trust:2,reply:'Le maire soupire puis sourit. « Vous ne m offrez pas une victoire facile, mais une parole que je pourrai tenir. »'},
  {id:'grand',label:'Nous dirons que le vote suffit pour ouvrir les portes des maintenant.',trust:-2,reply:'« Je vous ai demande une aide à la décision, pas un slogan. Marianne ne laissera pas passer cela. »'}
 ]},
 nora:{person:'nora',title:'Le contrôle ne remplace pas la commune',intro:[
  {who:'Nora Vidal',text:'« Le cabinet m a demande si le préfet allait approuver votre délibération. Ce n\'est pas ainsi que fonctionne le contrôle de légalité. »'},
  {who:'Vous',text:'« Nous devons transmettre cet acte, mais il nous manque une trace de réception. »'},
  {who:'Nora Vidal',text:'« Pour les actes vises à l\'article L2131-2, il faut distinguer les obligations de la collectivité et notre role de contrôle. L accusé de réception est utile comme preuve, mais le texte dit bien qu\'il ne constitue pas une condition du caractère exécutoire. »'},
  {who:'Nora Vidal',text:'« La transmission n\'effacé pas non plus l exigence de publicité. Et elle ne transforme pas un acte illegal en acte légal. »'},
  {who:'Vous',text:'« Si le représentant de l\'État estime le texte illegal, il peut saisir le tribunal administratif ? »'},
  {who:'Nora Vidal',text:'« Oui, suivant les conditions du déféré. Une annulation par le juge n\'est pas la même chose qu\'une remarque dans un courrier. »'},
  {who:'Nora Vidal',text:'« Nous pourrons signaler les points d attention. Mais votre secrétariat doit accomplir ses formalités, et vos élus doivent prendre leurs décisions. La préfecture ne leur sert pas de stylo. »'},
  {who:'Nora Vidal',text:'« J apprécie une collectivité qui nous communiqué un dossier exact. Cela nous permet de discuter du fond plutôt que de corriger des malentendus. »'}
 ],choices:[
  {id:'roles',label:'Je preciserai que la transmission n\'est pas une approbation, et que le juge statue sur une annulation.',trust:2,reply:'Nora acquiesce. « C\'est la distinction la plus importante aujourd hui. »'},
  {id:'approve',label:'Nous presenterons l accusé de réception comme la validation juridique du préfet.',trust:-2,reply:'« Il faudra corriger. Une preuve de réception n\'est pas un certificat de légalité », rappelle Nora.'}
 ]},
 jeanne:{person:'jeanne',title:'Ce que les habitants ont entendu',intro:[
  {who:'Jeanne Perrin',text:'« Depuis septembre on entend trois choses : une ouverture bientot, un accord de la préfecture et maintenant un vote. Lequel est vrai ? »'},
  {who:'Vous',text:'« Le conseil a lance des études et demande une concertation. Les travaux et l\'ouverture ne sont pas decides. »'},
  {who:'Jeanne Perrin',text:'« Au moins c\'est une phrase que je comprends. Mais j aimerais que la mairie la dise avec la même clarte aux parents qui attendent une bibliotheque et aux associations qui ont besoin de salles. »'},
  {who:'Vous',text:'« Nous allons vérifier les formalités avant de communiquer le contenu effectif de la délibération. »'},
  {who:'Jeanne Perrin',text:'« La plupart des gens ne savent pas ce qu est un acte exécutoire. Moi non plus il y à un an. Mais ils comprennent très bien quand ils ont l impression qu\'on leur cache une date. »'},
  {who:'Jeanne Perrin',text:'« J\'ai une idee : au prochain rendez-vous public, affichez non seulement les étapes du projet mais aussi les questions auxquelles vous n avez pas encore repondu. »'},
  {who:'Vous',text:'« Cela serait une vraie transparence, pas seulement une communication. »'},
  {who:'Jeanne Perrin',text:'« Alors je viendrai. Même si je ne suis pas toujours d\'accord avec vous. »'}
 ],choices:[
  {id:'explain',label:'Je vous remettrai un calendrier distingué entre décisions prises et points encore a instruire.',trust:2,reply:'Jeanne replie ses notes. « Je préfère une incertitude reconnue à une certitude inventee. »'},
  {id:'delay',label:'Vous aurez les informations quand tout sera termine ; il est inutile de vous expliquer les étapes.',trust:-2,reply:'« Je vois. Encore une réunion sans les habitants », dit-elle avant de partir.'}
 ]}
};
export const NOVEMBRE_KNOWLEDGE=[
 {id:'entree',title:'Quand un acte communal devient-il exécutoire ?',article:'CGCT L2131-1',url:'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044190563',tags:['actes locaux','entree en vigueur','publicite'],paragraphs:[
 'En droit des collectivités territoriales, il faut distinguer quatre notions proches mais différentes : l\'adoption de l\'acte, sa signature, sa publicité et son caractère exécutoire. Une délibération peut être adoptée régulièrement sans être encore en état de produire pleinement les effets juridiques attendus si les formalités d\'entrée en vigueur applicables n\'ont pas été accomplies. La signature permet notamment d\'identifier un acte, mais elle ne remplace pas les conditions imposées par le code.',
 'L article L2131-1 du CGCT organise le régime des actes communaux. Les décisions individuelles sont notifiées à leurs destinataires. Les actes réglementaires et les décisions ni réglementaires ni individuelles sont, par principe, publies sous forme électronique, dans des conditions destinées a garantir leur authenticite et leur accès permanent et gratuit. Pour les actes mentionnes à l2131-2, s ajoute la transmission au représentant de l\'État ou à son délégué. Ce sont des formalités distinctes : publier n équivaut pas à transmettre et transmettre n équivaut pas à publier.',
 'Les communes de moins de 3 500 habitants disposent d\'une dérogation : leur conseil peut choisir affichage, papier ou électronique pour les actes concernes. A defaut de délibération sur ce choix, la publication électronique reste applicable. La ville fictive de Valrivière compte davantage de 3 500 habitants ; le dossier traite donc une délibération publiee electroniquement.',
 'Le maire peut certifier sous sa responsabilité le caractère exécutoire. Cela ne transforme pas la certification en moyen de dispenser la commune de formalités qui n\'auraient pas été effectuees. Dans la pratique, un circuit interne doit relier l\'acte signé, la preuve de la mise en ligne ou de la notification et, lorsque nécessaire, la transmission. Le dossier doit dater precisement ces événements et identifier les agents qui les ont realises.',
 'Pour un concours d attache, une bonne copie peut expliquer la hierarchie logique : qualifier l\'acte, identifier son auteur, determiner son régime de publicité, vérifier son caractère transmissible, établir les dates et proposer une procédure de contrôle. L erreur frequente consiste à dire que tous les actes sont transmissibles ou qu\'un simple document signé est forcement exécutoire.'
 ],pitfall:'La signature, la date de séance ou un projet de publication ne suffisent pas, a eux seuls, a demontrer l\'entrée en vigueur.',exercise:'On vous remet une délibération signée, un brouillon sur le site et un fichier non transmis. Dans quel ordre demandez-vous les preuves avant d annoncer son caractère exécutoire ?'},
 {id:'publication',title:'Publier sur le site de la commune : quelles exigences ?',article:'CGCT R2131-1 et L2131-1',url:'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049906655',tags:['publicite','dematerialisation','preuve'],paragraphs:[
 'Depuis le 1er juillet 2022, la publication sous forme électronique constitue le principe pour les actes réglementaires et les décisions ni réglementaires ni individuelles des communes, avec des exceptions pour certains organismes et les communes de moins de 3 500 habitants. La publication n\'est pas un simple geste de communication. Elle participe au régime juridique de l\'acte et doit permettre aux destinataires et au public de le connaitre dans les conditions légales.',
 'L article R2131-1 du CGCT précise notamment que l\'acte publie electroniquement doit être disponible dans son intégralité sur le site de la commune, sous un format non modifiable, dans des conditions garantissant sa conservation, son intégrité et son telechargement. La version électronique comporte les mentions légales de l\'auteur de l\'acte et la date de sa mise en ligne. Ces exigences ne se confondent pas avec la mise en page d\'un communiqué politique.',
 'Dans la manufacture des Tilleuls, le secrétariat a dispose d\'une version dite « prete à publier ». Le fichier se trouve encore dans le gestionnaire de contenu, à l\'État de brouillon. La seule capture du brouillon prouve au mieux que la publication était envisagee ; elle ne prouve pas la mise à disposition effective du texte. Un contrôle operatoire consiste a ouvrir l URL publique, vérifier le contenu exact, l\'identité de l\'auteur, la date de publication, puis enregistrer les éléments attestant de la mise en ligne.',
 'Pour apprendre les institutions, il faut remarquer que la publicité des actes et l\'information des habitants sont liees mais distinctes. Un document légalement publie peut être difficile a comprendre. La mairie peut donc ajouter une explication pedagogique, mais le résumé n\'a pas vocation a modifier ou remplacer le texte officiel.',
 'Au concours, on peut proposer un circuit de validation par le secrétariat des assemblees et les services numeriques, avec responsabilités identifiees, archivage et contrôle de l accessibilite. Attention a ne pas generaliser le seul affichage a toutes les communes, ni a affirmer que les modalités de publicité des décisions individuelles sont identiques a celles des délibérations de portée générale.'
 ],pitfall:'Une capture d écran de brouillon et une publication officielle sur le site ne sont pas equivalentes.',exercise:'Rédigé trois contrôles concrets pour une publication numérique fiable, puis explique a Jeanne la difference entre acte publie et communiqué de presse.'},
 {id:'transmission',title:'Quels actes transmet-on au représentant de l\'État ?',article:'CGCT L2131-2',url:'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044190560',tags:['transmission','actes transmissibles','preuve'],paragraphs:[
 'La transmission au contrôle de légalité ne concerne pas indistinctement chaque courrier et chaque document emis par une commune. L article L2131-2 du CGCT dresse une liste de catégories d\'actes transmis au représentant de l\'État : notamment des délibérations du conseil municipal, sous reserve d exceptions, certaines décisions prises par délégation, des actes de police, des conventions et marches concernes, ou des décisions individuelles identifiees par le texte.',
 'Dans le cas des délibérations du conseil municipal, la loi prévoit des exceptions explicites, par exemple certains actes de voirie ou de stationnement et certaines décisions de gestion du personnel. Une copie qui affirme « toute délibération est transmise sans exception » serait donc imprecise. Dans notre affaire fictive, la délibération portant sur les études de la manufacture entre dans le champ du premier alinea de L2131-2 et ne correspond pas aux exceptions de l\'exercice.',
 'Le texte autorisé la transmission par voie électronique selon des modalités réglementaires. Pour les communes de plus de 50 000 habitants, la voie électronique est imposee. Un logiciel de teletransmission peut faciliter le processus, mais une ligne marquee « en attente » ne suffit pas a prouver que le représentant de l\'État a reçu l\'acte.',
 'L article L2131-2 prévoit que la preuve de réception peut être apportee par tout moyen. Un accusé de réception, lorsqu il est delivre, constitue un élément pratique de preuve ; son existence ne doit pas être présentée comme une condition juridique supplementaire du caractère exécutoire. Il faut distinguer la réception effectivement réalisée du moyen retenu pour la prouver.',
 'Pour un concours d attache, l approche professionnelle consiste a qualifier l\'acte, trouver la base juridique, vérifier une eventuelle exception, organiser la transmission, puis conserver des traces contrôlées. Sur le fond, transmettre un acte ne signifie pas qu\'il est approuvé par l\'État ni qu\'il est nécessairement légal. L\'information du représentant de l\'État et la validite de la décision sont deux problemes distincts.'
 ],pitfall:'Un numero d enregistrement ou une saisie dans un parapheur n etablit pas forcement la réception ; l accusé de réception est une preuve, pas une validation du fond.',exercise:'Expliquez pourquoi une délibération portant sur la manufacture doit être examinee au regard de L2131-2, puis donnez un exemple de catégorie d acte exceptée.'},
 {id:'defer',title:'Contrôle de légalité, déféré et juge administratif',article:'CGCT L2131-6',url:'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044190539',tags:['defere','juge administratif','controle'],paragraphs:[
 'L article 72 de la Constitution confié au représentant de l\'État le contrôle administratif et le respect des lois dans les collectivités territoriales. Le préfet, dans les conditions prevues par le CGCT, peut contester la légalité de certains actes et les déférer au tribunal administratif. Il n\'est pas, pour autant, le supérieur hiérarchique du conseil municipal dans l\'exercice de ses compétences décentralisées.',
 'Pour les actes mentionnes à l2131-2, l\'article L2131-6 prévoit que le représentant de l\'État peut saisir le tribunal administratif dans les deux mois suivant leur transmission. Une demande d\'explication, une observation ou un echange contradictoire avec la préfecture ne correspond pas, a elle seule, à une annulation. C\'est au juge qu\'il appartient de statuer sur le contentieux. Le préfet peut assortir son recours d\'une demande de suspension soumise à des conditions particulières.',
 'Il est tout aussi inexact de croire que l\'absence de critique immédiate du préfet produit une approbation générale de la légalité ou de l opportunite politique d\'un projet. La transmission ne purge pas automatiquement tous les vices de compétence, de procédure ou de fond. Le travail des services reste de construire des actes juridiquement solides avant leur adoption et d examiner les observations lorsqu elles surviennent.',
 'Les actes non soumis a transmission ne sont pas pour autant exempts de toute vigilance. Le CGCT prévoit notamment un mecanisme de demande de communication par le représentant de l\'État dans certaines conditions. Il faut toujours commencer par qualifier la catégorie d acte avant de choisir le régime de contrôle.',
 'Au concours, une réponse construite distinguera donc le contrôle administratif par le représentant de l\'État, le contrôle juridictionnel par le tribunal administratif, les délais et les voies de recours, la suspension eventuelle et les responsabilités locales. L argumentation doit rester intelligible aux élus : « ce que nous avons vote », « ce que nous avons rendu public », « ce que nous avons transmis » et « ce qui pourrait être conteste » forment quatre colonnes différentes.'
 ],pitfall:'Le préfet ne prononce pas directement l\'annulation contentieuse de toute délibération qu\'il critique.',exercise:'Racontez en quatre phrases à un maire la difference entre transmission, observations préfectorales, déféré et annulation par le juge.'}
];
export const NOVEMBRE_CHECKS={
 publication:[
  {id:'draft',label:'Considérer le brouillon du site comme une publication officielle.',correct:false,why:'Un brouillon non visible du public ne prouve pas une publication.'},
  {id:'verify',label:'Faire publier le texte integral selon le régime applicable, contrôler et archiver la preuve.',correct:true,why:'Il faut vérifier les conditions de publicité et conserver la date effective.'}
 ],
 transmission:[
  {id:'pending',label:'S en tenir à la mention « en attente » du parapheur.',correct:false,why:'L\'enregistrement local ne garantit pas une transmission effectuée.'},
  {id:'send',label:'Organiser la transmission effective puis conserver les éléments permettant d établir sa réception.',correct:true,why:'La preuve de réception peut être apportee par tout moyen.'}
 ],
 control:[
  {id:'approval',label:'Attendre une validation politique systematique du préfet avant toute action.',correct:false,why:'La transmission ne constitue pas une autorisation générale.'},
  {id:'judge',label:'Expliquer le contrôle de légalité et l eventuel déféré devant le juge administratif.',correct:true,why:'Le juge administratif statue sur l\'annulation contentieuse.'}
 ]
};
export const NOVEMBRE_STRATEGIES=[
 {id:'method',label:'Faire un point de méthode public : vote réel, formalités a achever, calendrier de vérification.',summary:'Une communication précise est préparée. Lucie obtient un circuit de vérification et Jeanne comprend ce qui change maintenant.',marianne:'« Nous avons un document utile et un cap. Rien d annonce ne depasse les pieces. »',jeanne:'« Au moins, on sait ce qui a été décidé et ce qui reste à faire. »',june:'En juin, Jeanne se souvient de la fiche publique d\'octobre : elle accepte davantage les délais parce que les étapes ont été expliquees.'},
 {id:'workshop',label:'Réunir les services et associations autour du suivi des formalités et du calendrier des études.',summary:'La mairie associé les partenaires à un suivi des études. Les formalités restent à réaliser par les services competents.',marianne:'« Une cooperation bien suivie peut être aussi solide qu\'une note. Mais nos obligations restent les notres. »',jeanne:'« Nous viendrons participer si nos remarques sont visibles dans le compte rendu. »',june:'Au printemps puis en juin, Jeanne et Lucie utilisent le tableau commun pour demander des réponses precises sur les horaires futurs.'},
 {id:'press',label:'Preferer une communication enthousiaste immedate, sans attribuer à l\'acte plus qu\'il ne décidé.',summary:'Le cabinet privilegie une annonce rapide. Le joueur a du rappeler les limites du vote pour ne pas induire les habitants en erreur.',marianne:'« Nous n avons pas le droit de laisser une formule politique remplacer le dispositif du conseil. »',jeanne:'« Je lirai le texte, cette fois. Je veux savoir si le calendrier engage vraiment la ville. »',june:'En juin, les associations demandent de confronter les premières annonces au texte de la délibération ; la transparence sera decisive.'}
];
