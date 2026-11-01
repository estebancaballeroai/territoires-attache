/** TERRITOIRES V2.1 — Épisode 2, fiction pédagogique. Sources vérifiées novembre 2026. */
export const OCTOBRE={
  id:'inst-2',title:'Les partenaires du territoire',month:'Octobre',act:'Acte I · Les premières promesses',
  lead:'Un courrier de la préfecture arrive à Valrivière. En voulant aider la manufacture, plusieurs partenaires s’attribuent des responsabilités qui ne sont pas forcément les leurs. Tu dois distinguer les rôles avant que le maire ne promette un montage impossible.',
  locations:[
    {id:'bureau',name:'Bureau de Marianne',where:'Annexe administrative',image:'bureau.webp',description:'La DGS a réuni les échanges reçus depuis la première annonce.',actions:['marianne','karim']},
    {id:'secretariat',name:'Secrétariat général',where:'Hôtel de ville',image:'secretariat.webp',description:'Lucie a classé les courriers. Une erreur de destinataire fait déjà perdre du temps.',actions:['lucie']},
    {id:'reunion',name:'Salle des partenaires',where:'Hôtel de ville · premier étage',image:'reunion-automne.webp',description:'Nora représente les services de l’État ; Salomé intervient pour la communauté de communes.',actions:['nora','salome']},
    {id:'manufacture',name:'Aux Tilleuls',where:'Devant la manufacture',image:'plan-manufacture.webp',description:'Derrière les débats de compétences, les habitants attendent des réponses concrètes.',actions:[]}
  ],
  prologue:[
    {speaker:'Narrateur',text:'Octobre. Le vent soulève les feuilles sur les marches de la mairie. Depuis l’annonce de septembre, la manufacture des Tilleuls a cessé d’être un bâtiment oublié : elle est devenue une promesse dont tout le monde parle.'},
    {speaker:'Lucie Morel',text:'« J’ai préparé la réunion avec les partenaires. Mais regarde : la préfecture a été rangée dans les collectivités et le service intercommunal dit qu’il “reprend” la manufacture. Personne ne m’a donné de texte qui permette de le dire. »'},
    {speaker:'Marianne Delmas',text:'« Il faut corriger cela sans humilier nos interlocuteurs. Une coopération ne se commande pas par un courriel ; elle se construit sur des compétences réelles et des responsabilités clairement identifiées. »'},
    {speaker:'Narrateur',text:'Ton téléphone vibre. Le cabinet demande une réponse avant la réunion de vendredi. À toi de comprendre qui est qui — et de trouver une solution qui ne réduise pas tout le projet à une querelle de sigles.'}
  ],
  memory:{
    transparent:'Marianne déplie l’annonce prudente de septembre. « Nous avions dit que le projet était encore à instruire. Nous pouvons prendre le temps de clarifier les partenariats sans nous dédire. »',
    promise:'Marianne relit la promesse de septembre. « Une date a circulé trop vite. Si nous ajoutons maintenant un partenaire présenté comme responsable sans le vérifier, la difficulté sera double. »',
    silent:'Marianne remarque que les associations attendent toujours une information précise. « Nous avons été trop silencieux. Il faudra expliquer les étapes et les responsabilités, pas simplement afficher une nouvelle liste de partenaires. »'
  },
  characters:{
    nora:{name:'Nora Vidal',role:'Chargée de mission en préfecture',portrait:'nora.webp',description:'Précise, réservée, attachée à distinguer accompagnement de l’État et choix de la commune.'},
    salome:{name:'Salomé Marchand',role:'Responsable du pôle coopération intercommunale',portrait:'salome.webp',description:'Franche et engagée. Elle apprécie les projets communs, mais refuse qu’on lui attribue une compétence par convenance.'}
  }
};
export const OCTOBRE_TALKS={
  marianne:{person:'marianne',place:'bureau',title:'Le mot « partenariat » ne suffit pas',intro:[
    {who:'Marianne',text:'« Nous avons trois courriers, deux logos et une date de réunion. Le cabinet pense que tout est réglé : il suffit de réunir tout le monde dans une salle. »'},
    {who:'Vous',text:'« Vous n’êtes pas convaincue. »'},
    {who:'Marianne',text:'« Une réunion peut clarifier un malentendu, mais ne déplace pas une compétence. La commune et la communauté ne peuvent pas simplement s’en remettre au préfet pour décider à leur place. »'},
    {who:'Marianne',text:'« J’ai aussi entendu qu’un financement départemental éventuel suffirait à qualifier le projet de “départemental”. C’est un raccourci fréquent. L’aide financière et l’exercice d’une compétence ne sont pas la même question. »'},
    {who:'Vous',text:'« Notre première démarche serait de demander les textes, puis de construire une carte des responsabilités. »'},
    {who:'Marianne',text:'« Exactement. Et je veux une note que le maire puisse lire sans dictionnaire administratif. Pas une page de sigles qui lui permettraient de croire, à tort, que les difficultés sont réglées. »'},
    {who:'Marianne',text:'« Enfin, souvenez-vous des associations. Elles ne parlent pas en termes de spécialité fonctionnelle ; elles veulent savoir qui répond à leurs besoins. Notre réponse doit être aussi humaine que juridiquement exacte. »'}
  ],choices:[
    {id:'method',label:'Je distinguerai personnes publiques, compétences et engagements, avec une pièce justificative pour chacun.',trust:2,reply:'Marianne hoche la tête. « Voilà une méthode d’attaché territorial : ni affirmation péremptoire ni immobilisme. Apportez-moi une cartographie lisible. »'},
    {id:'shortcut',label:'Nous pourrions annoncer l’EPCI chef de file, puis demander les statuts après la réunion.',trust:-1,reply:'Marianne referme son dossier. « Un partenaire peut coordonner sans être compétent pour tout. Nous ne construirons pas une compétence à partir d’un communiqué. »'}
  ]},
  lucie:{person:'lucie',place:'secretariat',title:'Le badge au mauvais endroit',intro:[
    {who:'Lucie',text:'« J’ai fait les chevalets de table. Tu vas rire : sur celui de Nora Vidal, j’ai écrit “collectivité territoriale”. Nora m’a répondu très gentiment que son service représentait l’État. »'},
    {who:'Vous',text:'« On rectifie les badges. Ce n’est pas qu’une question de protocole. »'},
    {who:'Lucie',text:'« Je sais. Les habitants nous demandent souvent de “faire remonter au préfet” ce qui relève d’une décision de la commune. Mais je ne veux pas leur dire une bêtise en les redirigeant. »'},
    {who:'Lucie',text:'« Hier, une dame m’a demandé si la préfecture pouvait ouvrir la bibliothèque contre l’avis du maire. J’ai répondu que j’allais vérifier. Elle avait l’air déçue. »'},
    {who:'Vous',text:'« Vous avez bien fait : il vaut mieux reconnaître ce qu’on ignore. »'},
    {who:'Lucie',text:'« C’est parfois moins spectaculaire qu’un grand discours, mais plus utile. J’aimerais qu’on me donne une fiche de deux colonnes, avec les bons interlocuteurs. »'},
    {who:'Lucie',text:'« Et si vous arrivez à convaincre le cabinet que je ne suis pas une imprimante de badges, j’offre le prochain café. »'}
  ],choices:[
    {id:'respect',label:'Corrigeons ensemble les intitulés et ajoutons des explications utilisables à l’accueil.',trust:2,reply:'Lucie sourit. « Un document qui sert aussi aux habitants, voilà une bonne idée ! »'},
    {id:'ignore',label:'Les intitulés sont secondaires ; la priorité est de tenir la réunion.',trust:-1,reply:'Lucie range les chevalets en silence. « Je corrigerai quand même. Une erreur sur la table peut devenir une erreur dans le compte rendu. »'}
  ]},
  nora:{person:'nora',place:'reunion',title:'Le rôle des services de l’État',intro:[
    {who:'Nora Vidal',text:'« Merci de nous recevoir. J’ai lu votre invitation. Il y est écrit que la préfecture aurait donné son accord de principe à l’ouverture. Or aucun acte ne dit cela. »'},
    {who:'Vous',text:'« Le cabinet a interprété votre proposition de réunion comme une autorisation. »'},
    {who:'Nora Vidal',text:'« Une réunion, c’est un échange. Dans notre organisation administrative, le préfet représente l’État dans le département. Il exerce notamment les missions que les textes lui confient. Cela ne transforme pas ses services en conseil municipal de substitution. »'},
    {who:'Nora Vidal',text:'« Il faut distinguer la décentralisation, qui concerne des personnes publiques dotées de compétences propres, et la déconcentration, qui organise territorialement l’action de l’État. »'},
    {who:'Nora Vidal',text:'« Pour le contrôle de légalité des actes communaux soumis à transmission, le préfet peut, dans les conditions légales, saisir le juge administratif. Mais il ne donne pas une approbation générale à chaque opération communale. »'},
    {who:'Vous',text:'« Et pour la manufacture ? »'},
    {who:'Nora Vidal',text:'« Nous pouvons vous orienter vers les bonnes procédures, vérifier la compétence de nos services et identifier les demandes de subventions pertinentes. Mais votre commune doit documenter ses propres décisions. »'},
    {who:'Nora Vidal',text:'« Je préfère un compte rendu qui liste trois vérifications à un communiqué qui annonce trois décisions inexistantes. »'}
  ],choices:[
    {id:'clarify',label:'Je corrigerai le compte rendu : le dialogue avec l’État ne vaut ni compétence transférée ni autorisation du projet.',trust:2,reply:'Nora acquiesce. « Nous pourrons alors discuter des étapes réellement utiles. C’est une base de coopération loyale. »'},
    {id:'approve',label:'Je laisserai l’idée d’une autorisation préfectorale pour rassurer le public.',trust:-2,reply:'Nora reste calme. « Ce serait précisément trompeur. Je demanderai une rectification écrite avant diffusion. »'}
  ]},
  salome:{person:'salome',place:'reunion',title:'À l’intercommunalité, pas de compétence magique',intro:[
    {who:'Salomé Marchand',text:'« J’ai entendu que notre communauté reprendrait la manufacture. C’est une jolie idée, mais aucun des documents que vous m’avez envoyés ne montre un tel transfert. »'},
    {who:'Vous',text:'« Nos collègues ont évoqué votre réseau de lecture publique. »'},
    {who:'Salomé Marchand',text:'« Nous animons bien un réseau et coordonnons certains événements. Mais organiser une animation avec les bibliothèques ne veut pas dire devenir propriétaire de leurs bâtiments ou gestionnaire de tous les équipements culturels. »'},
    {who:'Salomé Marchand',text:'« Un EPCI fonctionne selon les compétences que lui donnent les textes et les transferts. Selon le type d’établissement et la compétence, l’intérêt communautaire peut aussi entrer en jeu. »'},
    {who:'Salomé Marchand',text:'« Nos statuts et la liste des équipements d’intérêt communautaire sont disponibles. La manufacture n’y figure pas à ce jour. Mais nous pouvons examiner ce que nos services pourraient apporter, chacun dans son périmètre. »'},
    {who:'Vous',text:'« Vous ne refusez donc pas toute intervention. »'},
    {who:'Salomé Marchand',text:'« Au contraire. Je refuse qu’on confonde une compétence, un partenariat et un souhait politique. Je veux qu’on puisse se reparler dans six mois sans que l’un accuse l’autre d’avoir promis à sa place. »'},
    {who:'Salomé Marchand',text:'« Si vous préparez un tableau clair, nous verrons ensemble les actions possibles et leurs bases juridiques. »'}
  ],choices:[
    {id:'statutes',label:'Je vérifierai vos statuts à jour, les listes pertinentes et les possibilités de coopération sans annoncer de transfert.',trust:2,reply:'Salomé retrouve le sourire. « Parfait. Je peux mobiliser nos équipes sur des actions concrètes, sans leur faire endosser une responsabilité fictive. »'},
    {id:'automatic',label:'Puisque la manufacture est grande, la communauté est forcément responsable.',trust:-2,reply:'Salomé secoue la tête. « La superficie ne crée pas une compétence. Nous avons besoin de textes, pas d’un jugement sur la taille du bâtiment. »'}
  ]},
  karim:{person:'karim',place:'bureau',title:'Un financeur n’est pas nécessairement maître d’ouvrage',intro:[
    {who:'Karim Benali',text:'« J’ai vu passer une note où l’on additionne un soutien de l’EPCI, une subvention éventuelle de l’État et une aide du département. Et on conclut que les trois partenaires géreront le projet. C’est inquiétant. »'},
    {who:'Vous',text:'« Les financements et les compétences sont distincts. »'},
    {who:'Karim',text:'« Exact. Une contribution ne fait pas automatiquement de son auteur l’autorité compétente pour tout organiser. Et, avant d’inscrire une recette comme assurée, il faut une décision attributive ou une preuve suffisante selon le stade de l’instruction. »'},
    {who:'Karim',text:'« Nous allons aussi devoir examiner le fonctionnement futur : agents, chauffage, entretien, médiation. Le financement des travaux ne résout pas ces charges annuelles. »'},
    {who:'Vous',text:'« Je l’indiquerai à Marianne. »'},
    {who:'Karim',text:'« Vous me faciliterez la vie. Les montages se terminent souvent mal quand on change les mots pour masquer l’absence de pièces. »'},
    {who:'Karim',text:'« Et n’écrivez pas que je suis contre les Tilleuls. Je demande seulement qu’ils puissent rester ouverts après la cérémonie d’inauguration. »'}
  ],choices:[
    {id:'budget',label:'Je séparerai compétence, financement d’investissement et charges de fonctionnement dans la note.',trust:2,reply:'Karim pose son stylo. « Là, nous parlons la même langue. »'},
    {id:'blend',label:'Pour simplifier, présentons tout engagement financier comme une responsabilité de gestion.',trust:-1,reply:'Karim grimace. « Ce serait raccourcir la note en allongeant la liste des futurs problèmes. »'}
  ]}
};
export const OCTOBRE_DOCS=[
  {id:'prefecture',title:'Courrier de la préfecture',category:'Échanges institutionnels',date:'4 octobre · Fiction',from:'Nora Vidal · Préfecture',location:'secretariat',paragraphs:[
    'Madame la Directrice générale, à la suite de l’annonce relative à la manufacture des Tilleuls, nos services proposent une réunion de clarification. Les usages du bâtiment envisagés peuvent appeler plusieurs consultations et démarches distinctes ; nos services pourront identifier celles qui relèvent de l’État, sans préjuger des décisions municipales.',
    'Cette proposition de réunion ne constitue ni une autorisation d’ouverture de l’équipement, ni une validation de sa programmation financière. Le projet doit être apprécié au regard des compétences des personnes publiques concernées et des actes qui seront régulièrement pris.',
    'La préfecture pourra rappeler les procédures relevant de ses attributions. Pour les actes locaux soumis à transmission, le contrôle de légalité s’exerce selon les conditions prévues par les textes ; le représentant de l’État n’exerce pas une tutelle générale d’opportunité sur les décisions communales.',
    'Afin d’éviter toute erreur d’interprétation, nous vous invitons à distinguer dans le compte rendu les observations de nos services, les hypothèses de travail et les décisions relevant des autorités compétentes. Notre réunion n’emportera pas transfert de responsabilité.'
  ],question:'Le cabinet veut écrire « la préfecture a autorisé la reconversion ». Quelle mention peux-tu établir à partir du courrier ?',choices:[
    {id:'approval',label:'La préfecture a approuvé la reconversion et son budget.'},
    {id:'meeting',label:'La préfecture a proposé une réunion technique sans valider l’opération.'},
    {id:'transfer',label:'La préfecture devient l’autorité de gestion de la manufacture.'}
  ],correct:'meeting',why:'Une proposition de réunion n’est pas une autorisation, et le préfet ne remplace pas le conseil municipal.',knowledge:'deconcentration'},
  {id:'statuts',title:'Extrait des statuts et liste des équipements',category:'Statuts communautaires fictifs',date:'Mis à jour en septembre · Fiction',from:'Communauté des Rives de Valrivière',location:'reunion',paragraphs:[
    'La Communauté des Rives de Valrivière est un établissement public de coopération intercommunale à fiscalité propre. Ses compétences sont déterminées par la loi, ses statuts et les actes de transfert applicables. Le présent extrait est un document fictif utilisé pour la formation.',
    'Parmi ses actions, la communauté organise l’animation du réseau de lecture publique et certaines manifestations culturelles. Ses statuts prévoient par ailleurs, dans les conditions applicables, la gestion d’équipements culturels reconnus d’intérêt communautaire. La définition des équipements concernés figure dans des délibérations annexées.',
    'La liste communiquée à ce jour mentionne le conservatoire communautaire et le centre culturel des Rives. La manufacture des Tilleuls, qui appartient à Valrivière, n’y figure pas. Aucun document versé au dossier ne fait état d’un transfert de la gestion de cet immeuble.',
    'Les partenaires peuvent discuter d’animations, d’achats communs ou d’une assistance technique si les conditions juridiques le permettent, mais une collaboration n’emporte pas, par elle-même, transfert de compétence ou de propriété. Les services doivent encore vérifier les dernières versions des actes et déterminer le circuit de décision pertinent.'
  ],question:'Quelle conclusion peut être présentée sans transformer une hypothèse en fait juridique ?',choices:[
    {id:'size',label:'Un bâtiment important relève automatiquement de l’EPCI.'},
    {id:'none',label:'La communauté ne peut jamais coopérer avec la commune.'},
    {id:'verify',label:'La gestion n’est pas démontrée comme transférée ; vérifier les statuts et envisager une coopération dans les compétences de chacun.'}
  ],correct:'verify',why:'L’EPCI agit dans son champ de compétence et les transferts ne se présument pas.',knowledge:'epci'},
  {id:'subventions',title:'Tableau des partenaires et financements envisagés',category:'Note financière de travail',date:'8 octobre · Fiction',from:'Karim Benali · Finances',location:'bureau',paragraphs:[
    'Le tableau distingue les collectivités et organismes pouvant intervenir sur le projet : commune propriétaire, communauté de communes pour les actions qu’elle exerce, État pour les dispositifs d’accompagnement éventuellement mobilisables et département pour des dispositifs de soutien susceptibles d’intéresser le projet.',
    'Les services disposent à ce stade d’intentions et de pistes d’aide, mais pas de décisions attributives confirmant toutes les recettes envisagées. Aucun financement annoncé ne constitue en soi un transfert de compétence, une délégation de maîtrise d’ouvrage ou un engagement définitif sur les dépenses futures.',
    'Les travaux, l’entretien annuel, l’énergie, l’accueil et les personnels doivent être chiffrés séparément. Une participation à l’investissement ne finance pas automatiquement le fonctionnement. Les conventions, les compétences et les inscriptions budgétaires devront être instruits dans leurs cadres propres.',
    'Le responsable des finances attire également l’attention du chargé de mission sur les risques de double comptabilisation : la même subvention potentielle ne peut servir à équilibrer plusieurs scénarios de dépenses comme si elle était certaine et acquise à chacun.'
  ],question:'Que dois-tu écrire dans le volet financier de la note à Marianne ?',choices:[
    {id:'assured',label:'Les soutiens évoqués sont des recettes acquises et rendent les charges futures sans objet.'},
    {id:'distinguish',label:'Séparer compétence, aides envisagées, preuves de financement et coûts récurrents.'},
    {id:'owner',label:'Chaque financeur potentiel devient automatiquement co-gestionnaire.'}
  ],correct:'distinguish',why:'Financer et exercer une compétence sont deux analyses distinctes, et les recettes incertaines ne sont pas acquises.',knowledge:'cooperation'},
  {id:'accueil',title:'Feuille de route du secrétariat des assemblées',category:'Projet de compte rendu',date:'10 octobre · Fiction',from:'Lucie Morel · Secrétariat',location:'secretariat',paragraphs:[
    'Version 0.3 — Réunion du 12 octobre : « La préfecture, collectivité territoriale, valide le projet de réhabilitation. La Communauté des Rives, du fait de la taille de l’immeuble, en devient automatiquement responsable. » Les deux phrases sont signalées en marge par Lucie : « Source ? Acte ? Compétence ? »',
    'Les intervenants devront être désignés de façon exacte. Les services déconcentrés de l’État ne sont pas des collectivités territoriales. La communauté de communes est un établissement public de coopération intercommunale, distinct de ses communes membres et compétent dans le champ légalement établi.',
    'Le compte rendu pourra distinguer les accords de méthode, les documents demandés, les interlocuteurs et les échéances de vérification. Il ne devra pas faire passer de simples échanges ou intentions pour des décisions exécutoires ni confondre l’intervention technique d’un service avec l’exercice d’une compétence.',
    'Lucie propose un tableau contenant quatre colonnes : interlocuteur ; objet de la demande ; fondement juridique ou document à produire ; date de réponse souhaitée. Ce tableau pourrait également servir aux agents d’accueil afin de renseigner les usagers sur les étapes réelles.'
  ],question:'Comment corriger le projet de compte rendu ?',choices:[
    {id:'omit',label:'Effacer tous les partenaires du compte rendu pour éviter les questions.'},
    {id:'assume',label:'Laisser les deux phrases telles quelles et attendre des réactions.'},
    {id:'matrix',label:'Reclasser les acteurs et inscrire des vérifications documentées plutôt que des compétences supposées.'}
  ],correct:'matrix',why:'Une clarification factuelle des acteurs et des actes à obtenir évite les transferts et autorisations fictifs.',knowledge:'deconcentration'}
];
export const OCTOBRE_KNOWLEDGE=[
  {id:'deconcentration',title:'Décentralisation et déconcentration : deux logiques distinctes',subtitle:'Comprendre qui agit au nom de l’État et qui décide comme collectivité',article:'Constitution, art. 72 · Déconcentration',url:'https://www.vie-publique.fr/fiches/20167-quest-ce-que-la-deconcentration',paragraphs:[
    'La France est un État unitaire dont l’organisation territoriale conjugue décentralisation et déconcentration. Ces deux notions n’ont pas le même objet. La décentralisation consiste à reconnaître des collectivités territoriales dotées de la personnalité morale, d’organes élus et de compétences exercées dans le cadre fixé par la loi. L’article 72 de la Constitution affirme notamment leur libre administration par des conseils élus.',
    'La déconcentration organise au contraire l’action de l’État dans les territoires. Les services déconcentrés demeurent dans l’organisation administrative de l’État ; ils ne deviennent pas des collectivités locales autonomes. Les préfets représentent l’État au niveau territorial, aux côtés d’autres autorités et services déconcentrés. Il faut donc éviter de dessiner une carte des acteurs où la préfecture serait une collectivité territoriale similaire à la commune.',
    'La libre administration ne signifie ni souveraineté locale ni absence de contrôle. Les collectivités agissent sous l’empire de la loi, dans leurs compétences, et les actes peuvent être soumis aux formalités et contrôles prévus par les textes. Le représentant de l’État veille notamment aux intérêts nationaux et au respect des lois. Il ne dirige pas pour autant la gestion communale ordinaire par une tutelle générale d’opportunité.',
    'L’administration locale comprend également des établissements publics de coopération intercommunale. Un EPCI n’est pas une collectivité territoriale au sens de l’énumération constitutionnelle de l’article 72 ; il possède un statut propre d’établissement public et exerce des compétences attribuées ou transférées. Les appeler indistinctement « collectivité », « État » ou « service municipal » crée des erreurs de raisonnement.',
    'Dans une épreuve du concours d’attaché, cette distinction permet de structurer des sujets sur la proximité de l’action publique, la libre administration, les relations entre État et collectivités ou la cohérence des politiques territoriales. Une bonne composition distingue les catégories juridiques, illustre leurs coopérations et reconnaît les contraintes financières et administratives.',
    'Application aux Tilleuls : un courrier de la préfecture annonçant une réunion de travail n’est pas la décision de la commune. La démarche raisonnable consiste à préciser ce que la préfecture est invitée à traiter et quelles décisions restent du ressort des organes locaux compétents.'
  ],pitfall:'Confondre contrôle de légalité et autorisation générale du préfet ; croire que la déconcentration crée une collectivité.',exercise:'Le maire dit : « La préfecture s’associe à la réunion, donc elle approuve le projet ». Explique en deux paragraphes pourquoi l’inférence est erronée.'},
  {id:'epci',title:'L’EPCI : compétences attribuées, spécialité et transferts',subtitle:'La taille d’un équipement ne détermine pas la personne publique compétente',article:'CGCT · compétences des EPCI et statuts',url:'https://www.collectivites-locales.gouv.fr/connaitre-les-acteurs-et-les-institutions/structures-territoriales/les-intercommunalites-et-groupements-de-collectivites/les-groupements-intercommunaux',paragraphs:[
    'Un établissement public de coopération intercommunale permet à plusieurs communes d’exercer ensemble certaines compétences. Il se distingue juridiquement de la commune membre et ses attributions sont définies par la loi, ses statuts et les actes applicables. Il n’est pas compétent pour tout ce qui dépasse une frontière communale ou paraît trop important pour la mairie.',
    'Le principe de spécialité fonctionnelle signifie qu’un EPCI agit dans le champ des compétences qu’il détient effectivement. Les transferts suivent des règles légales ; ils ne se déduisent pas d’une habitude de coopération, d’un logo apposé sur une affiche ou d’un financement envisagé. Selon les compétences et les catégories d’EPCI, les conditions d’exercice peuvent également dépendre de la reconnaissance de l’intérêt communautaire.',
    'Le transfert de compétence produit en principe un effet sur la capacité de la commune à exercer cette même compétence dans le périmètre transféré : on parle souvent de dessaisissement et de principe d’exclusivité, sous réserve des dispositions et mécanismes particuliers prévus par les textes. Il faut donc éviter les deux excès : prétendre que la commune demeure compétente dans toute hypothèse ou que l’EPCI devient compétent dès qu’un projet présente une dimension communautaire.',
    'Une bonne méthode d’instruction commence par la catégorie de l’EPCI, la liste de ses compétences, les statuts et leurs modifications, les arrêtés et délibérations correspondants et, lorsque nécessaire, les actes définissant l’intérêt communautaire. Viennent ensuite les questions de propriété, de gestion, de conventions, de mise à disposition et de financement, qui ne doivent pas être confondues.',
    'La coopération peut prendre des formes diverses : échange d’informations, animation de réseaux, conventions compatibles avec les compétences de chacun, études communes ou aides permises par la réglementation. La démarche ne consiste pas à choisir une personne publique supposée responsable puis à chercher un texte qui la justifierait, mais à partir des textes pour envisager les formes de partenariat possibles.',
    'Dans le cas fictif des Tilleuls, les statuts communautaires mentionnent un réseau de lecture publique et certains équipements d’intérêt communautaire, mais la manufacture n’apparaît pas dans la liste communiquée. La conclusion prudente est que la gestion par l’EPCI n’est pas démontrée et doit être vérifiée ; un soutien ou une coordination possible ne suffit pas à prouver un transfert.'
  ],pitfall:'Croire qu’une subvention, une grande superficie ou un partenariat suffit à transférer une compétence.',exercise:'Établis une liste des documents nécessaires pour vérifier si un équipement culturel communal relève de l’EPCI, puis distingue gestion, propriété, animation et financement.'},
  {id:'cooperation',title:'Coopération publique, financement et responsabilités',subtitle:'Un partenaire peut aider sans devenir automatiquement décideur',article:'Constitution, art. 72 · principes intercommunaux',url:'https://www.collectivites-locales.gouv.fr/gerer-les-finances-publiques-locales/execution-des-recettes-et-des-depenses-locales/depenses-locales/fonds-de-concours-intercommunaux',paragraphs:[
    'La conduite d’une politique territoriale associe fréquemment plusieurs acteurs : commune, EPCI, département, région, État, établissements publics et organismes privés. Cette pluralité ne dispense jamais de vérifier le fondement d’intervention de chacun. Les objectifs peuvent être partagés alors que les compétences, le financement et les responsabilités opérationnelles restent distincts.',
    'Recevoir ou demander un soutien financier ne transfère pas automatiquement la compétence de gérer un équipement. Une aide envisagée peut dépendre de critères, d’une décision attributive ou d’une convention. La soutenabilité du projet exige aussi d’examiner les dépenses d’investissement et les charges annuelles de fonctionnement, qui peuvent peser sur des acteurs différents selon le montage juridique retenu.',
    'Il est utile d’établir une matrice : pour chaque action, identifier l’autorité compétente, le texte applicable, le responsable de l’instruction, les partenaires consultés, le coût et les pièces encore nécessaires. La matrice réduit les confusions entre information, concertation, concours technique, financement et décision.',
    'Certaines formes de coopération sont strictement encadrées : les transferts de compétences, les mises à disposition de services, certains fonds de concours ou les conventions de partenariat ne sont pas interchangeables. Un chargé de mission doit repérer ces distinctions et solliciter l’expertise financière et juridique lorsque le dossier devient complexe.',
    'Dans une note d’aide à la décision, le raisonnement gagne à être présenté en trois volets : ce qui est certain, ce qui est plausible mais non confirmé, et ce qui nécessite une décision ou un acte complémentaire. Le décideur dispose ainsi d’une vision honnête des risques et des options. Cela vaut mieux qu’un tableau qui affiche tous les partenaires comme déjà engagés.',
    'Pour le concours, cet exemple permet de mobiliser la transversalité : organisation territoriale, déontologie de l’agent, soutenabilité financière, articulation élus/services et lisibilité pour les usagers. Une recommandation solide est compréhensible, juridiquement conditionnée et accompagnée d’un calendrier de vérifications.'
  ],pitfall:'Écrire qu’un financeur devient automatiquement maître d’ouvrage ou que des sommes simplement sollicitées sont déjà acquises.',exercise:'Prépare une matrice à quatre colonnes : acteur ; compétence et texte ; rôle envisagé ; pièce à obtenir, puis une explication compréhensible par les habitants.'}
];
export const OCTOBRE_NOTE={
  role:[
    {id:'prefet-validates',label:'Le préfet approuve la réhabilitation et peut se substituer au conseil.',correct:false,why:'Les échanges avec la préfecture ne prouvent pas une approbation générale ou un pouvoir de décision communale.'},
    {id:'clarify-state',label:'Les services de l’État accompagnent et contrôlent selon leurs attributions, sans décider à la place de la commune.',correct:true,why:'La déconcentration n’équivaut pas à la décentralisation et n’instaure pas une tutelle générale.'},
    {id:'no-state',label:'La préfecture ne peut avoir aucun rôle dans un projet municipal.',correct:false,why:'L’État peut exercer des fonctions prévues par la loi, accompagner ou contribuer selon les dispositifs applicables.'}
  ],
  competence:[
    {id:'automatic',label:'Le projet est intercommunal parce que le bâtiment est important.',correct:false,why:'Une taille importante n’établit pas un transfert de compétence.'},
    {id:'verify-statutes',label:'Vérifier le champ de compétence de l’EPCI et les statuts avant de conclure sur la gestion de la manufacture.',correct:true,why:'Le principe de spécialité impose de fonder l’attribution de compétence sur les textes et actes applicables.'},
    {id:'never',label:'Aucune forme de coopération avec l’EPCI n’est juridiquement envisageable.',correct:false,why:'Certaines collaborations peuvent être organisées dans les compétences des parties.'}
  ],
  method:[
    {id:'matrix',label:'Présenter une matrice des acteurs, pièces manquantes, responsabilités et dates de vérification.',impact:'Un compte rendu lisible clarifie les engagements. Lucie peut répondre précisément aux habitants ; Salomé accepte une réunion technique ciblée.'},
    {id:'cooperate',label:'Proposer un atelier de coopération avec toutes les réserves juridiques explicitées.',impact:'Les partenaires travaillent sur leurs contributions possibles. Le calendrier s’allonge légèrement, mais des solutions partagées émergent.'},
    {id:'announce',label:'Diffuser rapidement une annonce très ambitieuse en précisant seulement en bas de page les réserves.',impact:'Le cabinet apprécie la rapidité, mais les habitants retiennent surtout la promesse. Jeanne demande des actes écrits et une nouvelle réunion.'}
  ]
};
export const OCTOBRE_ENDINGS={
  matrix:{title:'Les responsabilités prennent forme',summary:'Le maire reçoit une matrice claire et le secrétariat sait à qui adresser chaque demande. Le projet reste communal dans les limites documentées ; les possibilités de coopération sont examinées sans promesses indémontrées.',marianne:'« C’est un dossier que je peux défendre : on voit ce qui est acquis et ce qui reste à vérifier. »',salome:'« Je préfère une demande précise à une responsabilité attribuée d’office. Nous pourrons agir ensemble. »',june:'En juin, Lucie ressortira le tableau rédigé en octobre : il permettra de répondre aux associations sans confondre les responsabilités des partenaires.'},
  cooperate:{title:'Une table autour de la manufacture',summary:'Un atelier réunira les interlocuteurs. Le dialogue demande plus de temps, mais chacun repart avec des questions précises et un champ d’action à confirmer.',marianne:'« L’échange est utile à condition que les réunions produisent des décisions identifiées, pas seulement des comptes rendus. »',salome:'« Nous pouvons proposer une solution adaptée si personne ne nous demande de promettre à la place des autres. »',june:'Au printemps, l’atelier d’octobre aura facilité une coopération ponctuelle sur les usages ; la question de la gestion restera instruite séparément.'},
  announce:{title:'Une coopération annoncée trop vite',summary:'La communication donne de l’élan au projet, mais elle laisse une ambiguïté sur les rôles. Marianne prévoit une rectification pédagogique avant que les habitants n’y voient un engagement de gestion.',marianne:'« À force de mettre les réserves en petits caractères, on finit par créer une promesse publique trop grande. »',salome:'« J’espère que le communiqué rectificatif dira exactement ce que nous pouvons faire. »',june:'En juin, Jeanne présentera l’annonce d’octobre à une réunion publique et demandera ce qu’elle engageait réellement.'}
};