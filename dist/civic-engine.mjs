/* TERRITOIRES V1.4 — Fictions municipales, repères officiels vérifiés le 1 novembre 2026. */
export const cases = [
  {
    "id": "inst-1",
    "title": "La porte de la mairie",
    "subtitle": "Qui peut décider ?",
    "time": "Acte I · Première semaine",
    "image": "civic-briefing.webp",
    "heroAlt": "Marianne, directrice générale, discute avec le maire devant des dossiers à la mairie",
    "lead": "Le maire veut annoncer la future manufacture devant les associations. Marianne vous confie une fiche de répartition des responsabilités, car une intention politique n'est pas encore une décision administrative.",
    "objective": "Préparer une fiche fiable : quels rôles pour le conseil, le maire, les services et les délégations ?",
    "closing": "La première fiche circule entre le cabinet et les services. Le maire peut exposer une ambition sans prétendre qu'une délibération ou un financement existe déjà.",
    "facts": [
      {
        "id": "assembly",
        "title": "01 · Courriel du cabinet",
        "sender": "Cabinet du maire · Pièce fictive",
        "body": "Le maire envisage de présenter vendredi une nouvelle utilisation de l'ancienne manufacture communale. Le dossier n'indique pas encore de délibération portant sur les orientations du projet. Le cabinet demande au service juridique si une annonce suffit pour considérer l'opération décidée. Le chargé de mission doit distinguer la proposition politique, l'instruction par les services et une éventuelle décision de l'assemblée, en vérifiant les compétences et délégations applicables.",
        "question": "Quel document vérifier avant d'affirmer que le conseil a décidé du projet ?",
        "options": [
          {
            "id": "press",
            "text": "Le discours préparé pour la réunion publique."
          },
          {
            "id": "delib",
            "text": "Une délibération ou une délégation couvrant précisément la décision envisagée."
          },
          {
            "id": "mail",
            "text": "Un courriel du cabinet demandant d'aller vite."
          }
        ],
        "correct": "delib",
        "explain": "Le conseil municipal règle les affaires de la commune par ses délibérations (CGCT L2121-29). Pour une décision susceptible d'être déléguée, il faut vérifier les textes et délégations applicables."
      },
      {
        "id": "mayor",
        "title": "02 · Note de l'administration",
        "sender": "Marianne Delmas · Direction générale · Pièce fictive",
        "body": "Les services instruisent les besoins, le coût et les conditions d'ouverture de la manufacture. Marianne rappelle que le maire prépare et exécute les décisions du conseil dans le cadre de ses attributions et délégations. Les agents proposent une analyse, sans se substituer aux autorités compétentes. Les étapes de préparation, décision et exécution doivent être présentées sans les confondre.",
        "question": "Qui est généralement chargé d'exécuter les décisions du conseil municipal ?",
        "options": [
          {
            "id": "dgs",
            "text": "La DGS, qui peut décider seule à la place du conseil."
          },
          {
            "id": "maire",
            "text": "Le maire, dans ses attributions et dans le cadre légal."
          },
          {
            "id": "prefet",
            "text": "Le préfet, puisqu'il est représentant de l'État."
          }
        ],
        "correct": "maire",
        "explain": "Le CGCT L2122-21 charge, de manière générale, le maire d'exécuter les décisions du conseil. La DGS prépare et coordonne l'instruction administrative."
      },
      {
        "id": "deleg",
        "title": "03 · Mention de signature",
        "sender": "Secrétariat général · Pièce fictive",
        "body": "Un projet de lettre comporte déjà une signature au nom d'une adjointe. La nature et la portée de la lettre restent à qualifier. Le dossier ne contient pas l'arrêté ou la délibération définissant le périmètre de la délégation invoquée. Avant de renseigner le circuit, le service doit vérifier la personne compétente, la nature de l'acte et les habilitations en vigueur.",
        "question": "Quel contrôle est professionnellement nécessaire ?",
        "options": [
          {
            "id": "title",
            "text": "Considérer que le seul titre d'adjointe suffit pour signer tout acte."
          },
          {
            "id": "advice",
            "text": "Demander uniquement l'accord verbal de la DGS."
          },
          {
            "id": "scope",
            "text": "Vérifier l'acte de délégation applicable, son champ et la nature du document."
          }
        ],
        "correct": "scope",
        "explain": "Les délégations ne se présument pas : vérifier leur fondement, leur portée et les compétences concernées, plutôt qu'assimiler une fonction à un pouvoir illimité."
      }
    ],
    "dialogues": [
      {
        "id": "etienne",
        "name": "Étienne Roussel",
        "role": "Maire",
        "opening": "« Les habitants attendent du concret. Puis-je leur dire que l'ouverture est décidée vendredi ? »",
        "choices": [
          {
            "id": "conditional",
            "text": "Présenter une ambition politique, préciser les validations restant à obtenir.",
            "reply": "« Je peux défendre une ambition sans annoncer des actes qui n'existent pas encore », convient le maire.",
            "memo": "Annonce politique conditionnée aux décisions futures."
          },
          {
            "id": "affirm",
            "text": "Annoncer que tous les crédits et signatures sont déjà acquis.",
            "reply": "Marianne vous interrompt : « Le dossier ne permet pas une telle affirmation. Il faut corriger la communication. »",
            "memo": "Annonce prématurée à rectifier."
          }
        ]
      },
      {
        "id": "marianne",
        "name": "Marianne Delmas",
        "role": "DGS",
        "opening": "« Que remettez-vous aux élus : une décision déjà prête ou des options juridiquement situées ? »",
        "choices": [
          {
            "id": "options",
            "text": "Une fiche distinguant organes, compétences, délégations et points restant à instruire.",
            "reply": "« Très bien. C'est cela, éclairer la décision », répond Marianne.",
            "memo": "Fiche de compétences et de délégations à instruire."
          },
          {
            "id": "fast",
            "text": "Une signature type, avant de vérifier les pouvoirs de chacun.",
            "reply": "« La vitesse n'efface pas la compétence », rappelle Marianne.",
            "memo": "Circuit de signature insuffisamment vérifié."
          }
        ]
      }
    ],
    "decisions": [
      {
        "id": "secure",
        "name": "Rédiger une fiche de compétences",
        "detail": "Identifier les organes, vérifier les délégations et préparer une présentation conditionnelle.",
        "outcome": "Marianne obtient une fiche utile pour la réunion. Le maire évite d'annoncer une décision déjà acquise."
      },
      {
        "id": "listen",
        "name": "Associer les services et habitants",
        "detail": "Organiser un échange préalable sur les usages, sans préjuger de la décision compétente.",
        "outcome": "La consultation apporte des besoins concrets. Marianne rappelle cependant qu'elle ne remplace pas la délibération ou la vérification des pouvoirs."
      },
      {
        "id": "announce",
        "name": "Accélérer l'annonce publique",
        "detail": "Proposer l'annonce immédiate, sous réserve de régulariser le dossier ensuite.",
        "outcome": "L'annonce provoque des attentes. Marianne demande de clarifier publiquement que les validations ne sont pas encore acquises."
      }
    ],
    "sources": [
      {
        "label": "CGCT · L2121-29 (conseil municipal)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006389895"
      },
      {
        "label": "CGCT · L2122-21 (maire)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033035595"
      },
      {
        "label": "CGCT · L2122-22 (délégations du conseil)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045212383"
      }
    ]
  },
  {
    "id": "inst-2",
    "title": "Les partenaires du territoire",
    "subtitle": "Qui représente qui ?",
    "time": "Acte I · Deuxième semaine",
    "image": "meeting.webp",
    "heroAlt": "Réunion entre plusieurs collègues dans les services municipaux de Valrivière",
    "lead": "Une réunion est prévue avec la préfecture et des partenaires territoriaux. Les badges préparés par Lucie mélangent « services de l'État », « collectivités » et « intercommunalité ». Le plan de réunion risque d'attribuer les mauvaises compétences à chacun.",
    "objective": "Construire une carte des acteurs, distinguer déconcentration et décentralisation et qualifier les compétences à vérifier.",
    "facts": [
      {
        "id": "prefecture",
        "title": "01 · Invitation de la préfecture",
        "sender": "Préfecture · Document fictif",
        "body": "Le courrier propose un échange avec des services représentant l'État dans le département afin de clarifier des sujets réglementaires et des interlocuteurs. Il ne dit pas que la préfecture devient maître d'ouvrage du projet municipal ni qu'elle vote le budget de la commune. La réunion doit identifier qui agit au nom de l'État et qui agit au nom d'une personne morale décentralisée.",
        "question": "Comment classer la préfecture dans la carte des acteurs ?",
        "options": [
          {
            "id": "decentral",
            "text": "Une collectivité territoriale autonome dotée d'un conseil élu."
          },
          {
            "id": "state",
            "text": "Une structure territoriale de l'État : la déconcentration."
          },
          {
            "id": "epci",
            "text": "Un établissement de coopération intercommunale."
          }
        ],
        "correct": "state",
        "explain": "La déconcentration rapproche l'administration de l'État des territoires, sans créer une collectivité territoriale autonome."
      },
      {
        "id": "commune",
        "title": "02 · Note de cadrage communale",
        "sender": "Direction générale de Valrivière · Document fictif",
        "body": "La commune dispose d'organes élus et agit dans son cadre légal propre. Les décisions relatives au projet doivent être instruites par les services et prises par les autorités compétentes. La présence de l'État dans la réunion ne transforme pas les élus municipaux en agents hiérarchiquement subordonnés à la préfecture dans leurs compétences décentralisées.",
        "question": "Quel principe éclaire la place de la commune ?",
        "options": [
          {
            "id": "central",
            "text": "La commune est un simple bureau de la préfecture."
          },
          {
            "id": "private",
            "text": "La commune agit toujours comme un organisme privé."
          },
          {
            "id": "autonomy",
            "text": "La commune est une collectivité territoriale administrée par un conseil élu, dans les conditions légales."
          }
        ],
        "correct": "autonomy",
        "explain": "La libre administration (Constitution art. 72) n'est pas une indépendance à l'égard de la loi ; la commune exerce des compétences propres."
      },
      {
        "id": "epci",
        "title": "03 · Courriel de la coopération",
        "sender": "Service intercommunal · Document fictif",
        "body": "Un collègue évoque une participation intercommunale, car le projet pourrait intéresser plusieurs communes. Aucune pièce du dossier ne précise encore de compétence transférée dans ce domaine, ni le statut juridique des espaces concernés. Il serait donc prématuré de supposer qu'un projet d'une certaine taille relève automatiquement de l'établissement public de coopération intercommunale.",
        "question": "Quel document doit guider l'analyse intercommunale ?",
        "options": [
          {
            "id": "size",
            "text": "La taille du bâtiment, qui suffit à prouver une compétence communautaire."
          },
          {
            "id": "transfer",
            "text": "Les textes et actes définissant les compétences de l'EPCI et leurs transferts."
          },
          {
            "id": "habitants",
            "text": "Un sondage local, qui attribue juridiquement la compétence."
          }
        ],
        "correct": "transfer",
        "explain": "Les EPCI exercent les compétences qui leur sont attribuées ou transférées selon les textes et leurs dispositions applicables."
      }
    ],
    "dialogues": [
      {
        "id": "lucie",
        "name": "Lucie Morel",
        "role": "Accueil municipal",
        "opening": "« J'avais écrit “collectivité partenaire” sur le badge de la préfecture. Je corrige comment ? »",
        "choices": [
          {
            "id": "badge",
            "text": "Distinguer « services de l'État » et « collectivités territoriales » sur la carte.",
            "reply": "Lucie corrige les badges : « Voilà qui évitera déjà une confusion à l'accueil. »",
            "memo": "Carte d'acteurs distinguant collectivités et services de l'État."
          },
          {
            "id": "same",
            "text": "Conserver les mêmes badges, tous les acteurs étant des services municipaux.",
            "reply": "Lucie fronce les sourcils : « On risque de ne pas adresser les demandes au bon interlocuteur. »",
            "memo": "Classification initiale erronée, à corriger."
          }
        ]
      },
      {
        "id": "marianne",
        "name": "Marianne Delmas",
        "role": "DGS",
        "opening": "« Faut-il demander aujourd'hui à l'EPCI de reprendre la manufacture ? »",
        "choices": [
          {
            "id": "check",
            "text": "Vérifier d'abord les compétences de chaque personne publique et les actes applicables.",
            "reply": "« Exactement : le périmètre du projet ne détermine pas à lui seul la compétence », précise Marianne.",
            "memo": "Vérification préalable des compétences et transferts."
          },
          {
            "id": "shortcut",
            "text": "Déduire de l'envergure du projet qu'il relève nécessairement de l'EPCI.",
            "reply": "« Ce serait une supposition, pas une analyse juridique », corrige Marianne.",
            "memo": "Hypothèse intercommunale non démontrée."
          }
        ]
      }
    ],
    "decisions": [
      {
        "id": "map",
        "name": "Établir une carte des acteurs",
        "detail": "Distinguer État, commune et EPCI, avec les pièces à demander.",
        "outcome": "La carte aide à orienter les demandes et évite de confondre autorités de l'État et institutions décentralisées."
      },
      {
        "id": "meet",
        "name": "Convoquer une réunion de clarification",
        "detail": "Réunir les partenaires autour des compétences encore à vérifier.",
        "outcome": "Les interlocuteurs acceptent de préciser leur rôle. L'ordre du jour mentionne les questions juridiques non tranchées."
      },
      {
        "id": "hurry",
        "name": "Annoncer un pilote unique immédiatement",
        "detail": "Proposer d'attribuer la conduite du projet avant d'examiner les transferts.",
        "outcome": "Marianne demande une vérification préalable des compétences, afin de ne pas fonder le projet sur une attribution supposée."
      }
    ],
    "sources": [
      {
        "label": "Constitution · article 72",
        "url": "https://www.elysee.fr/la-presidence/la-constitution-de-la-cinquieme-republique"
      },
      {
        "label": "Vie publique · la déconcentration",
        "url": "https://www.vie-publique.fr/fiches/20167-quest-ce-que-la-deconcentration"
      },
      {
        "label": "DGCL · guide de l'intercommunalité",
        "url": "https://www.collectivites-locales.gouv.fr/connaitre-les-acteurs-et-les-institutions/structures-territoriales/les-intercommunalites-et-groupements-de-collectivites"
      }
    ]
  },
  {
    "id": "inst-3",
    "title": "Le dossier prêt à partir",
    "subtitle": "Un acte est-il exécutoire ?",
    "time": "Acte I · Troisième semaine",
    "image": "archive.webp",
    "heroAlt": "Dossier de délibération et boîtes d'archives dans une salle de consultation municipale",
    "lead": "Le conseil municipal a adopté une délibération de principe relative à la manufacture. Le secrétariat l'a fait signer, mais les formalités de publicité et de transmission doivent encore être vérifiées. Le texte fictif est ici expressément supposé relever des actes soumis à transmission.",
    "objective": "Rassembler les vérifications de publicité et de transmission, puis qualifier le rôle du contrôle de légalité.",
    "facts": [
      {
        "id": "signature",
        "title": "01 · Bordereau de séance",
        "sender": "Secrétariat des assemblées · Document fictif",
        "body": "La délibération de principe a été adoptée puis signée. La mention « signé » est portée sur le projet de bordereau, mais aucune pièce ne démontre encore que l'acte a été porté à la connaissance du public dans les conditions applicables ou transmis lorsque requis. Le dossier ne doit pas assimiler la signature à l'ensemble des formalités conditionnant le caractère exécutoire.",
        "question": "Peut-on dire que la signature suffit, à elle seule, à rendre cet acte exécutoire ?",
        "options": [
          {
            "id": "yes",
            "text": "Oui, toute délibération signée est immédiatement exécutoire."
          },
          {
            "id": "no",
            "text": "Non, il faut encore vérifier la publicité et, le cas échéant, la transmission."
          },
          {
            "id": "prefect",
            "text": "Oui, dès que le préfet reçoit un courriel sans contenu."
          }
        ],
        "correct": "no",
        "explain": "CGCT L2131-1 : publicité ou notification selon l'acte et transmission pour les actes visés à L2131-2."
      },
      {
        "id": "publicite",
        "title": "02 · Liste des formalités",
        "sender": "Service juridique · Document fictif",
        "body": "Pour cet acte de portée générale, qui n'est pas une décision individuelle, le service prépare une publication selon le régime légal applicable. Ce scénario ne préjuge ni les dérogations prévues pour certaines communes ni les modalités particulières d'autres catégories d'actes. La preuve et la date des formalités réalisées seront à conserver au dossier.",
        "question": "Que faut-il contrôler pour cet acte de portée générale ?",
        "options": [
          {
            "id": "notification",
            "text": "Une notification individuelle à chaque habitant de la ville, systématiquement."
          },
          {
            "id": "publication",
            "text": "La publication dans les formes légalement applicables à l'acte."
          },
          {
            "id": "noform",
            "text": "Aucune publicité, puisque le conseil est élu."
          }
        ],
        "correct": "publication",
        "explain": "L2131-1 distingue notamment notification des décisions individuelles et publication des actes réglementaires ou non individuels ; les modalités peuvent varier."
      },
      {
        "id": "transmission",
        "title": "03 · Suivi de transmission",
        "sender": "Secrétariat général · Document fictif",
        "body": "Le document de travail indique expressément que cette délibération relève de l'article L2131-2 et doit être transmise au représentant de l'État. L'agent propose de classer une simple capture d'écran non datée comme preuve, avant même de vérifier la transmission effective. Le service doit documenter la procédure et les éléments permettant d'établir la réception.",
        "question": "Quelle vérification assurer dans le dossier ?",
        "options": [
          {
            "id": "imagine",
            "text": "Présumer la transmission dès que la délibération est signée."
          },
          {
            "id": "transmit",
            "text": "Constater la transmission requise et conserver les éléments qui en attestent."
          },
          {
            "id": "approve",
            "text": "Attendre une approbation écrite du préfet pour tout acte."
          }
        ],
        "correct": "transmit",
        "explain": "Pour les actes concernés par L2131-2, la transmission est une condition. L'accusé de réception peut servir de preuve, mais n'est pas lui-même une condition du caractère exécutoire."
      },
      {
        "id": "contentieux",
        "title": "04 · Note de contrôle de légalité",
        "sender": "Service juridique · Document fictif",
        "body": "Un collègue écrit : « Si la préfecture estime l'acte irrégulier, elle l'annulera directement. » Cette formulation confond l'appréciation du représentant de l'État et le pouvoir du juge. Le représentant de l'État peut exercer un déféré devant le tribunal administratif, dans les conditions et délais légaux ; l'annulation contentieuse relève du juge.",
        "question": "Qui prononce l'annulation contentieuse dans ce cadre ?",
        "options": [
          {
            "id": "judge",
            "text": "Le tribunal administratif compétent."
          },
          {
            "id": "prefecture",
            "text": "Le préfet seul, sans intervention d'une juridiction."
          },
          {
            "id": "dgs",
            "text": "La DGS par une simple note interne."
          }
        ],
        "correct": "judge",
        "explain": "CGCT L2131-6 : le représentant de l'État peut déférer l'acte au tribunal administratif ; le contrôle juridictionnel appartient au juge."
      }
    ],
    "dialogues": [
      {
        "id": "marianne",
        "name": "Marianne Delmas",
        "role": "DGS",
        "opening": "« On me dit que la délibération est signée. Puis-je annoncer qu'elle est nécessairement exécutoire ? »",
        "choices": [
          {
            "id": "verify",
            "text": "Demander la preuve des formalités de publicité et de transmission applicables.",
            "reply": "« Nous annoncerons les étapes réelles, pas des formalités présumées », confirme Marianne.",
            "memo": "Contrôle du caractère exécutoire avant toute annonce."
          },
          {
            "id": "assume",
            "text": "Ranger le dossier : la seule signature suffit.",
            "reply": "« Ce n'est pas ce que prévoit le régime des actes », répond Marianne.",
            "memo": "Risque de conclusion prématurée sur le caractère exécutoire."
          }
        ]
      },
      {
        "id": "etienne",
        "name": "Étienne Roussel",
        "role": "Maire",
        "opening": "« Si le préfet conteste la délibération, a-t-il le pouvoir de la supprimer lui-même ? »",
        "choices": [
          {
            "id": "judge",
            "text": "Expliquer le déféré possible devant le tribunal administratif et les autres voies de traitement.",
            "reply": "« Très bien, nous suivrons les observations de l'État et les voies juridiques prévues », répond le maire.",
            "memo": "Présentation du contrôle juridictionnel et du rôle du préfet."
          },
          {
            "id": "prefect",
            "text": "Répondre que le préfet annule automatiquement les actes qu'il critique.",
            "reply": "« Revenons sur ce point avec le service juridique », demande le maire.",
            "memo": "Confusion entre contrôle de légalité et annulation juridictionnelle."
          }
        ]
      }
    ],
    "decisions": [
      {
        "id": "checklist",
        "name": "Constituer un circuit de vérification",
        "detail": "Documenter publicité, transmission si requise et éventuel risque de déféré.",
        "outcome": "Le secrétariat reconstitue les formalités accomplies. La DGS dispose d'une situation factuelle sans supposer d'approbation préfectorale."
      },
      {
        "id": "brief",
        "name": "Préparer une note au maire",
        "detail": "Expliquer les conditions d'entrée en vigueur et le contrôle du juge.",
        "outcome": "Le maire reçoit une note intelligible sur les étapes et les risques. Les formalités concrètes restent à achever et documenter."
      },
      {
        "id": "rush",
        "name": "Communiquer sans vérifier la transmission",
        "detail": "Proposer l'annonce immédiate du caractère exécutoire sans pièce de preuve.",
        "outcome": "La communication crée une incertitude. Marianne réclame un correctif fondé sur les formalités effectivement accomplies."
      }
    ],
    "sources": [
      {
        "label": "CGCT · L2131-1 (publicité)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044190563"
      },
      {
        "label": "CGCT · L2131-2 (actes transmis)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044190560"
      },
      {
        "label": "CGCT · L2131-6 (déféré)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044190539"
      }
    ]
  }
];

const validObj=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
export const caseIds=cases.map(c=>c.id);
export function getCase(id){return cases.find(c=>c.id===id)||null;}
const blank=()=>({seen:[],evidence:{},dialogue:{},decision:null,completed:false,openDoc:null});
export function freshCivic(){return {schema:1,active:'inst-1',dossiers:Object.fromEntries(caseIds.map(id=>[id,blank()]))};}
export function readStatus(s,id){
 const c=getCase(id);if(!c)return {seen:0,facts:0,talks:0,decision:false,ready:false,completed:false};
 const d=s?.dossiers?.[id]||blank();
 const seen=c.facts.filter(x=>d.seen.includes(x.id)).length;
 const facts=c.facts.filter(x=>d.evidence[x.id]===x.correct).length;
 const talks=c.dialogues.filter(x=>x.choices.some(o=>o.id===d.dialogue[x.id])).length;
 const decision=c.decisions.some(x=>x.id===d.decision);
 return {seen,facts,talks,decision,ready:seen===c.facts.length&&facts===c.facts.length&&talks===c.dialogues.length&&decision,completed:d.completed===true,totals:{facts:c.facts.length,dialogues:c.dialogues.length}};
}
export function restoreCivic(v){
 const s=freshCivic();if(!validObj(v))return s;
 if(caseIds.includes(v.active))s.active=v.active;
 for(const c of cases){
   const old=v.dossiers?.[c.id];if(!validObj(old))continue;
   const d=s.dossiers[c.id];
   d.seen=[...new Set((Array.isArray(old.seen)?old.seen:[]).filter(id=>c.facts.some(f=>f.id===id)))];
   for(const f of c.facts){
     const choice=old.evidence?.[f.id];
     if(d.seen.includes(f.id)&&f.options.some(o=>o.id===choice))d.evidence[f.id]=choice;
   }
   for(const talk of c.dialogues){const choice=old.dialogue?.[talk.id];if(talk.choices.some(o=>o.id===choice))d.dialogue[talk.id]=choice;}
   d.decision=c.decisions.some(x=>x.id===old.decision)?old.decision:null;
   d.openDoc=c.facts.some(x=>x.id===old.openDoc)?old.openDoc:null;
   d.completed=old.completed===true&&readStatus(s,c.id).ready;
 }
 return s;
}
export function chooseCase(s,id){if(!getCase(id))return false;s.active=id;return true;}
export function toggleDocument(s,caseId,docId){const c=getCase(caseId);if(!c||!c.facts.some(x=>x.id===docId))return false;const d=s.dossiers[caseId];if(!d.seen.includes(docId))d.seen.push(docId);d.openDoc=d.openDoc===docId?null:docId;return true;}
export function answerFact(s,caseId,docId,choice){
 const c=getCase(caseId);const d=s.dossiers?.[caseId],f=c?.facts.find(x=>x.id===docId);
 if(!d||!f||!d.seen.includes(docId)||!f.options.some(x=>x.id===choice))return false;
 d.evidence[docId]=choice;d.completed=false;return true;
}
export function answerDialogue(s,caseId,talkId,choice){
 const c=getCase(caseId);const d=s.dossiers?.[caseId],talk=c?.dialogues.find(x=>x.id===talkId);
 if(!d||!talk||!talk.choices.some(x=>x.id===choice))return false;
 d.dialogue[talkId]=choice;d.completed=false;return true;
}
export function chooseDecision(s,caseId,decisionId){
 const c=getCase(caseId);const d=s.dossiers?.[caseId];
 if(!d||!c?.decisions.some(x=>x.id===decisionId))return false;
 d.decision=decisionId;d.completed=false;return true;
}
export function finishCase(s,caseId){const stat=readStatus(s,caseId);if(!stat.ready)return false;s.dossiers[caseId].completed=true;return true;}
export function allProgress(s){return {completed:caseIds.filter(id=>readStatus(s,id).completed).length,total:caseIds.length,facts:caseIds.reduce((n,id)=>n+readStatus(s,id).facts,0),totalFacts:cases.reduce((n,c)=>n+c.facts.length,0)};}
export function dialogueChoice(s,caseId,talkId){const c=getCase(caseId);const t=c?.dialogues.find(x=>x.id===talkId);return t?.choices.find(o=>o.id===s.dossiers?.[caseId]?.dialogue[talkId])||null;}
export function outcome(s,caseId){
 const c=getCase(caseId),d=s.dossiers?.[caseId];if(!c||!d?.completed)return null;
 const decision=c.decisions.find(x=>x.id===d.decision);
 return [c.closing,decision?.outcome,...c.dialogues.map(x=>dialogueChoice(s,caseId,x.id)?.memo)].filter(Boolean).join(' ');
}
function cleanName(name){return String(name).replace(/[\u0000-\u001f\u007f]/g,' ').slice(0,40);}
export function reportCivic(s,caseId,name='Camille'){
 const c=getCase(caseId);if(!c||!s.dossiers?.[caseId]?.completed||!readStatus(s,caseId).ready)throw Error('Dossier non validé');
 const d=s.dossiers[caseId],decision=c.decisions.find(x=>x.id===d.decision);
 return [
  'TERRITOIRES — VALRIVIÈRE','DOSSIER INSTITUTIONNEL : '+c.title,
  'Exercice pédagogique fictif · V1.4 · Auteur : '+cleanName(name),'',
  'CONTEXTE',c.lead,'','FAITS DOCUMENTÉS',
  ...c.facts.map(f=>'- '+f.title+' : '+f.explain),'',
  'ÉCHANGES',...c.dialogues.map(t=>'- '+t.name+' : '+dialogueChoice(s,caseId,t.id).memo),'',
  'RECOMMANDATION',decision.name+' : '+decision.detail,'',
  'CONSÉQUENCES NARRATIVES',outcome(s,caseId),'',
  'RÉFÉRENCES À CONSULTER',...c.sources.map(x=>'- '+x.label+' : '+x.url),'',
  'Limite : aucune note de jeu ne constitue une délibération, un acte exécutoire ou un avis juridique opposable.'
 ].join('\n');
}
