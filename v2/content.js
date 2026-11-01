/* TERRITOIRES 2.0 — épisode pilote : fiction originale, ressources légales distinctes. */
export const EPISODE={
  id:'acte-1-episode-1',season:'Septembre',date:'Lundi 7 septembre · 8 h 18',act:'Acte I · Les premières promesses',title:'La porte de la mairie',
  subtitle:'« On peut annoncer une ambition sans annoncer une décision. »',
  locations:[
    {id:'bureau',name:'Bureau de Marianne',where:'1er étage · Direction générale',image:'bureau.webp',description:'Des courriers annotés, une maquette de la manufacture et l’agenda de la semaine. Marianne attend une réponse précise.'},
    {id:'secretariat',name:'Secrétariat des assemblées',where:'Couloir des délibérations',image:'secretariat.webp',description:'Lucie a réuni les pièces disponibles : le discours, le projet de note et un ancien relevé de délégations.'},
    {id:'maire',name:'Cabinet du maire',where:'Salle de réunion municipale',image:'mairie.webp',description:'Étienne Roussel prépare sa prise de parole de vendredi. Les associations ont déjà été invitées.'},
    {id:'cour',name:'La manufacture',where:'Dossier de terrain',image:'plan-manufacture.webp',description:'Une vue du site à travers les plans. Jeanne, l’association Les Passerelles et les habitants attendent des réponses.'}
  ]
};
export const OPENING=[
 {speaker:'Narrateur',text:'Le premier lundi de septembre, Valrivière semble déjà pressée. Devant les fenêtres de la mairie, les feuilles rougissent. À quelques rues, la manufacture des Tilleuls demeure silencieuse depuis des années. Elle fut l’un des poumons de la ville ; ses grandes portes sont maintenant fermées.'},
 {speaker:'Narrateur',text:'La commune souhaite transformer ce bâtiment en bibliothèque, ateliers associatifs et espace d’accompagnement des habitants. Sur le papier, tout le monde approuve. Mais les services n’ont ni le même calendrier, ni les mêmes certitudes, ni parfois les mêmes mots.'},
 {speaker:'Lucie Morel · Accueil',text:'« Vous êtes la nouvelle recrue de Marianne ? Vous avez de la chance : le café est encore chaud. Pour le reste… le maire a fixé une réunion publique vendredi et plusieurs habitants croient que le chantier commence lundi. Vous verrez, ici, les rumeurs prennent le bus avant les notes de service. »'},
 {speaker:'Narrateur',text:'Vous montez l’escalier. Sur votre téléphone, un message de la DGS : « Passez me voir avant de rencontrer le maire. Apportez votre carnet. » La journée commence.'}
];
export const PEOPLE={
 marianne:{name:'Marianne Delmas',role:'Directrice générale des services',portrait:'marianne.webp',traits:['Exigeante','protectrice','pragmatique']},
 etienne:{name:'Étienne Roussel',role:'Maire de Valrivière',portrait:'etienne.webp',traits:['Volontaire','impatient','sensible aux habitants']},
 lucie:{name:'Lucie Morel',role:'Agente d’accueil',portrait:'lucie.webp',traits:['Franche','observatrice','solidaire']},
 jeanne:{name:'Jeanne Perrin',role:'Présidente des Passerelles',portrait:'jeanne.webp',traits:['Combative','lucide','attachée au lieu']},
 karim:{name:'Karim Benali',role:'Direction des finances',portrait:'karim.webp',traits:['Prudent','méthodique','tenace']}
};
export const DIALOGUES={
 marianne:{person:'marianne',intro:[
 '« Entrez. Refermez la porte, s’il vous plaît. Vous avez eu le temps de voir la manufacture ? »',
 '« Le maire y tient beaucoup. Jeanne Perrin aussi, mais pas pour les mêmes raisons. Lui voit une ville qui avance ; elle voit des familles qui attendent depuis dix ans un lieu où se retrouver. »',
 '« Vendredi, il veut dire que l’ouverture est décidée. Je ne veux ni briser son élan ni laisser croire que les actes sont déjà pris. »',
 '« Vous êtes chargé de mission, pas élu et pas directeur de cabinet. Ce que j’attends, ce n’est pas que vous ayez toujours raison : c’est que vous sachiez distinguer ce que nous savons de ce que nous supposons. »',
 '« Avant de lui parler, allez voir Lucie au secrétariat. Relisez l’invitation, les notes, les délégations. Et revenez avec des faits. »'
 ],prompt:'Que réponds-tu à Marianne ?',choices:[
 {id:'method',label:'« Je vais vérifier les pièces avant de proposer une formulation. »',reply:'« Bien. Et quand vous trouverez une incertitude, écrivez-la. Les mauvaises surprises commencent souvent par une réserve oubliée. »',trust:2},
 {id:'speed',label:'« Il faut rassurer le maire : préparons l’annonce d’abord. »',reply:'Marianne relève les yeux. « Vous comprendrez vite qu’une annonce mal qualifiée demande ensuite dix explications. Je vous laisse constater pourquoi. »',trust:-1},
 {id:'listen',label:'« J’aimerais comprendre ce que les habitants attendent réellement. »',reply:'Elle acquiesce. « C’est utile. Mais les attentes ne remplacent pas les compétences. Commencez par les pièces ; vous rencontrerez Jeanne. »',trust:1}
 ]},
 lucie:{person:'lucie',intro:[
 '« Ah, vous voilà. La DGS m’a demandé de vous confier le classeur vert. Enfin… les trois feuilles qui ont réussi à survivre à la photocopieuse. »',
 '« Les habitants m’appellent déjà pour les inscriptions à la bibliothèque. Je ne sais même pas si un calendrier a été voté. »',
 '« J’aimerais pouvoir leur dire quelque chose de vrai, même si c’est juste : nous examinons le projet, voilà les prochaines étapes. »',
 '« Regardez bien la date du relevé des délégations. Et ne confondez pas “le maire propose” avec “le conseil a décidé”. Je n’ai pas fait d’études de droit, mais je vois la différence au guichet. »'
 ],prompt:'Comment accueilles-tu son alerte ?',choices:[
 {id:'respect',label:'« Vous avez raison : le langage administratif doit être compréhensible. »',reply:'Lucie sourit. « Ça paraît évident, mais on l’oublie derrière nos tampons. Si vous écrivez une note claire, je veux bien la relire. »',trust:2},
 {id:'technical',label:'« Les formalités relèvent des services, pas de l’accueil. »',reply:'« Sans doute. Mais c’est à moi que les gens demanderont pourquoi on leur a promis une ouverture. »',trust:-1}
 ]},
 etienne:{person:'etienne',intro:[
 '« Entrez ! Vous êtes le nouveau chargé de mission. Marianne vous a déjà demandé de me ralentir, je suppose ? »',
 '« J’ai grandi près de la manufacture. Mon père y travaillait. Ce bâtiment a besoin de gens, pas d’un nouveau dossier sous une pile. »',
 '« On a parfois l’impression que la mairie sait mieux expliquer ce qu’elle ne peut pas faire que ce qu’elle veut faire. Vendredi, je veux une annonce qui donne envie. »',
 '« Mais j’ai aussi promis aux habitants de ne pas leur raconter des histoires. Alors dites-moi franchement : qu’est-ce qui peut être annoncé aujourd’hui ? »'
 ],prompt:'Quelle posture adoptes-tu face au maire ?',choices:[
 {id:'honest',label:'« Présentons le projet, le travail à accomplir et les décisions restant à prendre. »',reply:'Il marque une pause. « Ce sera moins spectaculaire. Mais nous éviterons une fausse promesse. Trouvez-moi des mots qui donnent confiance sans masquer le travail. »',trust:2},
 {id:'commit',label:'« Annonçons une ouverture ferme ; nous sécuriserons ensuite. »',reply:'Il sourit d’abord, puis se reprend. « Voilà qui me tente… Marianne va me demander sur quoi nous nous appuyons. Vérifiez donc vos pièces avant de rédiger. »',trust:-1},
 {id:'silence',label:'« Ne disons rien tant que chaque décision n’a pas été prise. »',reply:'« Impossible. Je dois parler aux habitants. Notre devoir, c’est aussi de rendre compte d’un projet en préparation. »',trust:0}
 ]},
 jeanne:{person:'jeanne',intro:[
 '« Vous avez vu les portes ? Mon grand-père y entrait chaque matin. J’ai appris à lire dans la bibliothèque de quartier qui a fermé après. »',
 '« Je n’ai pas besoin que le maire coupe un ruban devant des murs vides. J’ai besoin d’un endroit où les familles puissent venir sans avoir à remplir trois formulaires. »',
 '« Si la commune n’a pas encore décidé comment faire, je peux l’entendre. Ce que je refuse, c’est d’être invitée à applaudir une décision déjà écrite. »',
 '« Écoutez nos demandes, et quand vous ne pourrez pas tout retenir, dites-nous pourquoi. Nous saurons au moins que nous avons été entendus. »'
 ],prompt:'Quelle réponse proposes-tu à Jeanne ?',choices:[
 {id:'dialogue',label:'« Nous devons expliquer les étapes et revenir vers vous avec des réponses. »',reply:'« D’accord. Mais que cela ne reste pas une phrase de plus dans un compte rendu. Je vous le rappellerai. »',trust:2},
 {id:'promise',label:'« Je vous garantis que toutes vos propositions seront retenues. »',reply:'Elle secoue la tête. « Ne me promettez pas ce que vous ne pouvez pas décider. C’est justement ce que je vous reproche. »',trust:-2}
 ]}
};
export const DOCUMENTS=[
 {id:'invitation',title:'Invitation à la réunion publique',from:'Cabinet du maire',date:'Valrivière, 4 septembre — brouillon non validé',category:'Courrier',
 paragraphs:[
 'Madame, Monsieur, la commune vous convie vendredi à une présentation du projet de transformation de la manufacture des Tilleuls. Ce site constitue une pièce importante du patrimoine social de Valrivière. La municipalité souhaite lui donner une nouvelle vocation : bibliothèque de proximité, ateliers collectifs et espace d’accompagnement aux démarches quotidiennes.',
 'Le projet nécessite la mobilisation de services municipaux, d’associations et de partenaires financiers. Les études préalables, les conditions de financement, le calendrier et les procédures administratives doivent encore être arrêtés. Le dossier actuel ne comporte ni décision de lancement des travaux ni date d’ouverture validée.',
 'Une version du communiqué préparée par le cabinet contient pourtant la phrase : « Le conseil municipal a décidé l’ouverture de la manufacture au printemps prochain. » Aucun procès-verbal ni extrait de délibération correspondant à cette affirmation ne figure dans les pièces communiquées au chargé de mission.',
 'Le cabinet demande un retour pour mercredi à midi, afin de pouvoir publier l’invitation et préparer les réponses aux habitants. Une correction du langage utilisé n’empêcherait pas de présenter l’ambition et les étapes à venir.'
 ],question:'Quel est le fait décisif pour qualifier l’annonce ?',choices:[
  {id:'a',label:'Le cabinet a préparé une invitation : cela vaut décision du conseil.'},
  {id:'b',label:'Aucune délibération établissant la décision annoncée n’est jointe au dossier.'},
  {id:'c',label:'La réunion est vendredi : il faut donc promettre une ouverture.'}
 ],correct:'b',why:'Une invitation, une intention et une décision d’assemblée ne sont pas équivalentes. Le conseil municipal règle les affaires de la commune par ses délibérations (CGCT L. 2121-29). Il convient de vérifier le contenu exact des décisions existantes avant d’en faire état.',tag:'Compétence et preuve'},
 {id:'note',title:'Note interne de la direction générale',from:'Marianne Delmas · DGS',date:'Valrivière, 7 septembre — instruction provisoire',category:'Note',
 paragraphs:[
 'Objet : clarifier les étapes de décision de la manufacture des Tilleuls. À ce stade, les services travaillent sur plusieurs configurations d’accueil des habitants, une estimation des usages et les premières questions relatives aux coûts. Les informations remontées ne constituent ni un programme définitivement arrêté ni une autorisation d’engager les opérations correspondantes.',
 'Le conseil municipal dispose de compétences de principe pour régler les affaires de la commune, dans les limites fixées par les textes et sous réserve des compétences attribuées à d’autres personnes publiques. Le maire conduit l’administration communale et met en œuvre les décisions relevant de ses attributions. Ses pouvoirs propres et les décisions prises sur délégation ne doivent pas être confondus.',
 'Le chargé de mission est invité à préciser, pour chaque étape envisagée, l’autorité compétente, la nature de l’acte, les consultations et formalités nécessaires. Il ne lui est pas demandé de rédiger un acte définitif, ni de se substituer au service juridique, aux finances ou aux élus.',
 'Le résultat attendu est une note d’aide à la décision de deux pages au maximum : faits constatés, points à vérifier, pistes de présentation publique et risques associés. Les choix d’opportunité appartiennent aux élus dans le respect des règles applicables.'
 ],question:'Quelle posture correspond au rôle du chargé de mission ?',choices:[
  {id:'a',label:'Remplacer le vote du conseil par une note du chargé de mission.'},
  {id:'b',label:'Présumer que tout projet communal relève directement du préfet.'},
  {id:'c',label:'Qualifier les compétences, exposer les incertitudes et éclairer les décisions à venir.'}
 ],correct:'c',why:'La note d’aide à la décision prépare le travail des organes compétents, elle ne les remplace pas. Il faut distinguer instruction administrative, décision politique et mise en œuvre.',tag:'Rôle administratif'},
 {id:'delegation',title:'Relevé des délégations',from:'Secrétariat des assemblées',date:'Valrivière, 15 juin — état partiel à confirmer',category:'Acte / délégation',
 paragraphs:[
 'Le secrétariat a retrouvé un tableau de suivi des délégations adopté plusieurs mois auparavant. Il indique que le conseil municipal a délégué au maire certaines décisions prévues par le Code général des collectivités territoriales. Le document est une synthèse de travail : il ne comporte ni les annexes ni la version consolidée des décisions et modifications éventuellement intervenues depuis.',
 'Il serait erroné de considérer que toute compétence du conseil peut être exercée par le maire sur simple demande du cabinet. Les délégations du conseil au maire ne sont possibles que dans les matières prévues par les textes et dans les limites effectivement fixées par l’assemblée. Les délégations de fonctions du maire à un adjoint relèvent par ailleurs d’un mécanisme distinct, par arrêté, sous la surveillance et la responsabilité du maire.',
 'Une mention manuscrite suggère de faire signer « l’adjointe compétente » sur une future communication. Le tableau ne permet pas de vérifier l’existence, la portée ou le maintien d’un arrêté de délégation de fonction ou de signature pertinent pour le document envisagé.',
 'Avant toute validation, il faut consulter les actes originaux, leur date, leur publication et, selon leur nature, les formalités requises. Dans le cadre de ce premier exercice, il suffit d’identifier ce contrôle à réaliser : le jeu ne présume pas qu’une délégation valide ou invalide existe.'
 ],question:'Quel contrôle formuler à Marianne ?',choices:[
  {id:'a',label:'Une adjointe peut toujours signer dès lors qu’elle porte ce titre.'},
  {id:'b',label:'Vérifier les actes de délégation, leur fondement, leur champ et leur validité.'},
  {id:'c',label:'Considérer la délégation permanente et illimitée depuis l’élection.'}
 ],correct:'b',why:'Distinguer délégation du conseil au maire (CGCT L. 2122-22) et délégation du maire à un élu (L. 2122-18). Les actes et leurs limites doivent être vérifiés, plutôt que présumés.',tag:'Délégations'}
 ];
export const KNOWLEDGE=[
 {id:'conseil',title:'Qui décide dans une commune ?',subtitle:'Conseil municipal, intérêt communal et rôle de l’assemblée',article:'CGCT · article L. 2121-29',url:'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006389895',tags:['Institutions','Compétences'],paragraphs:[
 'Le conseil municipal est l’assemblée délibérante de la commune. Le principe posé à l’article L. 2121-29 du CGCT est que le conseil règle, par ses délibérations, les affaires de la commune. Cette formule attribue une compétence de principe, mais ne dispense pas de vérifier les domaines dans lesquels la loi confie une attribution à un autre acteur ou une autre personne publique.',
 'Le conseil fixe les grandes orientations des services municipaux, examine notamment les décisions budgétaires qui lui reviennent et exerce les attributions que le droit lui donne. Il ne faut pas en déduire que chaque courrier ou chaque acte d’exécution nécessite une délibération : les pouvoirs propres du maire et les délégations légalement attribuées doivent être distingués.',
 'Une délibération est un acte de l’assemblée adoptée selon des règles de préparation, de convocation, de vote et de formalisation. Un projet de délibération est un document de travail ; un discours du maire ou une invitation n’est pas la preuve qu’une délibération a été votée. Pour savoir ce qui a été décidé, on doit identifier l’acte, son objet, sa date et la compétence mobilisée.',
 'Dans le dossier de la manufacture, la municipalité peut exprimer une ambition de réutilisation du bâtiment. Mais annoncer « le conseil a décidé l’ouverture » suppose de vérifier qu’un acte existe et couvre réellement ce que l’on affirme. Selon le montage, les études, le budget, la programmation et les actes d’exécution peuvent nécessiter plusieurs décisions distinctes.',
 'Pour le concours d’attaché, savoir réciter l’article ne suffit pas : il faut expliquer l’articulation entre compétence de principe, autorités exécutives, droits des habitants et contrôle de légalité. Dans une composition, cet exemple permet de montrer comment une politique publique naît d’une ambition, puis se transforme en actes administratifs contrôlables.'
 ],pitfall:'Confondre intention politique, délibération et mise en œuvre matérielle.',exercise:'Un maire annonce un centre social ; aucun acte n’est fourni. Quelle pièce demandes-tu avant de dire que l’assemblée a autorisé le projet ?'},
 {id:'maire',title:'Que fait le maire ?',subtitle:'Exécutif local, administration et réalisation des décisions',article:'CGCT · article L. 2122-21',url:'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033035595',tags:['Institutions','Exécution'],paragraphs:[
 'Le maire est à la fois une autorité de la commune et, pour certaines attributions, un agent de l’État. Dans la gestion communale, il prépare, conduit et exécute des décisions dans les limites de ses compétences. L’article L. 2122-21 du CGCT énonce notamment que le maire est chargé, de manière générale, d’exécuter les décisions du conseil municipal.',
 'Cette fonction exécutive est essentielle : l’assemblée délibère sur des orientations et des actes de sa compétence ; l’administration municipale prépare les analyses et assure l’exécution, sous l’autorité du maire. Mais les services ne sont pas eux-mêmes une assemblée délibérante. Une DGS et un chargé de mission peuvent proposer une solution, instruire sa faisabilité et rédiger une note : ce travail ne vaut pas décision du conseil.',
 'L’exécution d’un projet peut recouvrir la gestion du patrimoine, la préparation budgétaire, la mise en œuvre de marchés publics ou l’organisation de services. Pour chaque opération, on identifie les actes nécessaires et l’autorité compétente. Le maire dispose aussi de pouvoirs propres dans certaines matières : il faut éviter d’écrire qu’il n’agit jamais sans délibération.',
 'Dans la situation des Tilleuls, une communication de la commune peut présenter le projet et son état de préparation. Il serait en revanche risqué de laisser croire que le maire peut, par une simple annonce, sécuriser les décisions financières ou les procédures ultérieures. Le rôle du chargé de mission est d’aider à présenter une information exacte et à préparer un calendrier de décisions.',
 'Au concours, cette notion est mobilisable dans les sujets de gouvernance locale, la distinction organes délibérants / exécutifs, les relations entre élus et agents, et la responsabilité de la décision publique. L’analyse doit rester juridique, mais aussi pratique : qui prépare, qui décide, qui contrôle, qui exécute, et avec quels documents ?'
 ],pitfall:'Présenter le maire comme un simple porte-parole du conseil ou, à l’inverse, comme une autorité pouvant tout décider seul.',exercise:'Une décision du conseil doit être exécutée : quel acteur porte en principe l’exécution et quels services l’accompagnent ?'},
 {id:'delegations',title:'Délégations : ne rien présumer',subtitle:'Deux mécanismes qu’un attaché doit savoir différencier',article:'CGCT · articles L. 2122-22 et L. 2122-18',url:'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045212383',tags:['Délégations','Contrôle'],paragraphs:[
 'Le mot « délégation » recouvre plusieurs mécanismes distincts. L’article L. 2122-22 du CGCT permet au conseil municipal de déléguer au maire, en tout ou partie et pour la durée du mandat, certaines matières limitativement énumérées par la loi. La délibération doit préciser le cadre applicable, et des décisions prises sur délégation doivent pouvoir être rattachées à cette habilitation.',
 'L’article L. 2122-18 concerne une autre situation : le maire peut déléguer, sous sa surveillance et sa responsabilité, une partie de ses fonctions à des adjoints ou à certains membres du conseil municipal, par arrêté. Les personnes, la portée et les conditions de ces délégations sont à examiner. Le fait d’être adjoint ne crée pas par lui-même un pouvoir illimité de signer tout acte.',
 'Il existe également des règles particulières de délégation de signature aux agents de l’administration communale, avec des conditions propres. Il serait dangereux de confondre ces catégories dans un tableau de suivi : compétence transférée par l’assemblée au maire, délégation de fonctions à un élu et délégation de signature à un agent ne répondent pas à la même logique.',
 'Dans la pratique, un service contrôle la base légale, l’acte formel, sa date, son périmètre, son éventuelle modification ou retrait, la personne habilitée et les formalités applicables. On ne peut pas conclure à la validité d’une délégation sur un simple organigramme ou un tableau non daté. Il faut aussi identifier le type d’acte que l’on projette de prendre : une lettre d’information n’a pas la même portée qu’un engagement juridique.',
 'Au concours, une bonne réponse reconnaît d’abord l’incertitude factuelle : aucune pièce versée dans l’exercice n’établit l’existence d’un arrêté pertinent. L’attaché doit donc demander l’acte original et proposer une méthode de vérification, plutôt que déduire une signature régulière ou irrégulière sans fondement.'
 ],pitfall:'Mélanger les délégations du conseil, les délégations de fonction du maire et les délégations de signature.',exercise:'Une adjointe reçoit un projet à signer ; l’arrêté de délégation manque. Quelles vérifications proposes-tu avant de finaliser le circuit ?'}
];
export const NOTE={
 qualification:[
  {id:'deliberation',label:'Le conseil a décidé la réouverture : une annonce suffit pour le prouver.',correct:false,why:'Une annonce ne prouve pas la délibération nécessaire. Les pièces ne démontrent pas cette décision.'},
  {id:'intent',label:'Le projet est en instruction : aucune délibération d’ouverture n’est démontrée à ce stade.',correct:true,why:'C’est la qualification la plus prudente au regard des documents disponibles.'},
  {id:'prefet',label:'La préfecture a nécessairement autorisé la réouverture.',correct:false,why:'Aucun élément du dossier ne l’établit et l’autorisation préfectorale n’est pas présumée.'}
 ],
 delegation:[
  {id:'title',label:'La qualité d’adjointe suffit pour autoriser toute signature.',correct:false,why:'Une qualité élective ne vaut pas délégation générale et illimitée.'},
  {id:'check',label:'Vérifier les décisions du conseil et, s’il y a lieu, les arrêtés de délégation et leur champ.',correct:true,why:'Distinguer les compétences, les délégations et le document à signer.'},
  {id:'later',label:'La délégation pourra toujours être régularisée après publication.',correct:false,why:'Une régularisation hypothétique ne dispense pas du contrôle préalable.'}
 ],
 communication:[
  {id:'transparent',label:'Expliquer l’ambition, les études et les décisions restant à prendre.',risk:'low',summary:'Communication conditionnelle et transparente ; les étapes sont annoncées sans garantie prématurée.'},
  {id:'promise',label:'Promettre une ouverture au printemps pour mobiliser la ville.',risk:'high',summary:'Une date ferme crée une attente que le dossier actuel ne permet pas de sécuriser.'},
  {id:'silent',label:'Suspendre toute information publique jusqu’à la fin de toutes les procédures.',risk:'medium',summary:'L’absence de communication laisse les habitants sans information sur un projet qui les concerne.'}
 ]
};
export const AFTER={
 transparent:{title:'Une parole qui engage sans tromper',marianne:'« Nous n’avons rien à cacher et rien à prétendre acquis. J’aime cette méthode. »',mayor:'« Ce n’est pas exactement le discours dont je rêvais. Mais au moins je pourrai le défendre les yeux ouverts. »',jeanne:'« Pour une fois, on me dit ce qui reste à faire. Je vérifierai si vous tenez parole. »',later:'Au mois de juin, lors d’une réunion agitée, Jeanne rappellera que la commune avait annoncé ses incertitudes dès le départ. Ce souvenir facilite le dialogue, sans le garantir.'},
 promise:{title:'Le poids d’une promesse',marianne:'« Vous avez choisi un effet d’annonce. Les pièces ne soutiennent pas cette date, et je devrai en porter le risque avec les services. »',mayor:'« Je vous ai demandé de l’ambition, pas un calendrier inventé. Nous devrons expliquer la différence. »',jeanne:'« Vous avez dit printemps. Nous allons noter la date. »',later:'En juin, si le calendrier dérape, Jeanne produira la première invitation et demandera pourquoi l’ouverture annoncée n’a pas eu lieu.'},
 silent:{title:'La prudence qui laisse un vide',marianne:'« Vous avez voulu éviter l’erreur, mais le silence nourrit aussi les rumeurs. »',mayor:'« Nous avons une responsabilité d’information envers les habitants. Ce projet doit rester visible. »',jeanne:'« J’aurais préféré un calendrier imparfait mais sincère à cette absence de nouvelles. »',later:'Plus tard, Jeanne rappellera le silence de la mairie. Le joueur pourra corriger cette distance par une concertation suivie.'}
};
export const FUTURE=[
 {month:'Octobre',label:'Les partenaires du territoire',topic:'Décentralisation, préfet et compétences intercommunales',status:'À développer en V2' },
 {month:'Novembre',label:'À qui appartient cette maison ?',topic:'Égalité, neutralité et adaptabilité du service public',status:'À développer en V2'},
 {month:'Janvier',label:'Le prix des ambitions',topic:'M57, budget, financement et dépenses',status:'À développer en V2'},
 {month:'Mars',label:'Ceux qui feront vivre le projet',topic:'Fonction publique et management',status:'À développer en V2'},
 {month:'Mai',label:'La ville sous tension',topic:'Transition écologique, intercommunalité et participation',status:'À développer en V2'},
 {month:'Juillet',label:'Ouvrir les portes',topic:'RGPD, inclusion numérique, évaluation',status:'À développer en V2'}
];