/* TERRITOIRES v1.3 — scenario and documents are entirely fictional. No legal advice. */
export const scenarios = [
 {id:'phase',name:'Ouverture progressive',investment:2400000,annual:195000,grant:600000,open:'Ouverture de l’accueil et de la bibliothèque, puis ateliers lors d’une seconde étape.',outcome:'Marianne retient une trajectoire progressive. Jeanne demande un calendrier public pour les ateliers. Karim peut poursuivre l’étude du fonctionnement.'},
 {id:'full',name:'Ouverture complète',investment:3200000,annual:315000,grant:600000,open:'Accueil, bibliothèque et ateliers ouvriraient simultanément.',outcome:'Le maire apprécie l’ambition, mais Karim demande des marges de fonctionnement et une confirmation écrite des financements avant toute décision.'},
 {id:'study',name:'Étudier et différer',investment:180000,annual:45000,grant:0,open:'Études et sécurité du site avant toute décision de travaux.',outcome:'Le calendrier est décalé. Jeanne craint le report, mais la collectivité dispose de temps pour consolider les études et le financement.'}
];
export const documents = [
 {id:'budget',name:'01 · Tableau financier',issuer:'Karim Benali · Direction des finances',body:'Enveloppe municipale indicative d’investissement : 1 850 000 €. Aide envisagée : 600 000 €, en attente d’une décision de l’organisme financeur. Les estimations varient selon le périmètre retenu. Aucun montant ne constitue une autorisation de dépense.',question:'Quel fait doit figurer dans la note à Marianne ?',options:[
  {id:'a',text:'La subvention est acquise dès lors que le projet est annoncé.'},
  {id:'b',text:'La subvention demeure incertaine et nécessite une hypothèse sans aide.'},
  {id:'c',text:'La différence entre les montants suffit à démontrer l’équilibre réel du budget.'}
 ],correct:'b',explanation:'Une aide envisagée n’est pas une recette définitivement attribuée. Le tableau doit afficher un scénario sans aide et ne remplace pas les actes budgétaires.'},
 {id:'agents',name:'02 · Note des services',issuer:'Claire et Karim · Ressources humaines et finances',body:'Le coût des travaux ne couvre ni l’entretien, ni l’énergie, ni la présence des agents. Les charges annuelles estimées sont de 195 000 € pour une ouverture progressive et de 315 000 € pour une ouverture complète. Les effectifs et cycles de travail doivent être instruits avec les services.',question:'Que faut-il vérifier avant l’annonce du calendrier ?',options:[
  {id:'a',text:'Le seul prix des travaux, les charges annuelles pouvant être couvertes automatiquement.'},
  {id:'b',text:'Une réduction automatique du nombre d’agents quelle que soit l’ouverture.'},
  {id:'c',text:'La soutenabilité des charges récurrentes et l’organisation réelle du service.'}
 ],correct:'c',explanation:'L’investissement initial et le fonctionnement ne répondent pas aux mêmes enjeux. Les effectifs, horaires et charges pérennes doivent être évalués.'},
 {id:'habitants',name:'03 · Courrier de Jeanne',issuer:'Jeanne Perrin · Association Les Passerelles',body:'Les familles attendent une bibliothèque ouverte à des horaires utiles et des ateliers accessibles. Une ouverture par étapes peut être entendue, mais les habitants veulent connaître les critères de choix, les dates envisagées et les suites données à leurs remarques.',question:'Quel engagement crédible proposer ?',options:[
  {id:'a',text:'Expliquer les marges de décision et rendre compte du suivi des contributions.'},
  {id:'b',text:'Garantir immédiatement toutes les demandes formulées par les participants.'},
  {id:'c',text:'Supprimer la concertation dès que les estimations financières existent.'}
 ],correct:'a',explanation:'La participation n’oblige pas à suivre toutes les propositions. Elle suppose cependant de clarifier le cadre et d’expliquer les suites.'},
 {id:'juridique',name:'04 · Note de méthode',issuer:'Marianne Delmas · Direction générale',body:'Le chargé de mission prépare une analyse et des options. La collectivité ne peut être engagée par ce seul exercice. Il faudra vérifier les compétences, les délibérations, les procédures applicables, la sincérité des prévisions et les règles de l’équilibre réel au moment de la décision.',question:'Quelle est la portée juridique de votre note ?',options:[
  {id:'a',text:'Elle suffit pour passer les marchés et autoriser les travaux.'},
  {id:'b',text:'Elle éclaire une décision ultérieure des autorités compétentes.'},
  {id:'c',text:'Elle se substitue au vote du budget et au contrôle de légalité.'}
 ],correct:'b',explanation:'Le joueur exerce un rôle de conseil. Les validations administratives, budgétaires et contractuelles restent du ressort des autorités et services compétents.'}
 ];
export const dialogues = [
 {id:'karim',name:'Karim Benali',role:'Directeur des finances',opening:'« Je ne veux pas que les 600 000 € envisagés deviennent, dans la présentation au maire, une recette tenue pour acquise. Comment l’écrivez-vous ? »',choices:[
  {id:'reserve',text:'Présenter deux trajectoires : avec et sans aide, puis vérifier les charges annuelles.',reply:'Karim acquiesce : « C’est ce qu’il faut. Il reste à établir des pièces fiables. »',note:'Hypothèses de financement présentées avec et sans subvention.'},
  {id:'assume',text:'Retenir l’aide dans le tableau principal et renvoyer la réserve en note.',reply:'Karim fronce les sourcils : « Le risque serait invisible à la première lecture. Je veux un scénario sans aide. »',note:'Alerte financière : présentation trop optimiste de l’aide envisagée.'}
 ]},
 {id:'jeanne',name:'Jeanne Perrin',role:'Association Les Passerelles',opening:'« Les familles ne veulent pas être consultées pour la forme. Que leur dire si les ateliers doivent attendre ? »',choices:[
  {id:'followup',text:'Publier des étapes et expliquer ce qui pourra être discuté avec les habitants.',reply:'Jeanne répond : « Si nous savons quand revenir et comment nos remarques sont examinées, ce sera déjà un progrès. »',note:'Concertation assortie d’un calendrier et d’un retour sur les contributions.'},
  {id:'promise',text:'Promettre que toutes les propositions seront retenues malgré les contraintes.',reply:'Jeanne hésite : « Une promesse impossible serait pire qu’une explication franche. »',note:'Engagement de concertation à clarifier : ne pas promettre une adoption intégrale.'}
 ]},
 {id:'marianne',name:'Marianne Delmas',role:'Directrice générale des services',opening:'« Le maire voudrait une annonce dès demain. Quelle posture d’attaché proposez-vous ? »',choices:[
  {id:'conditional',text:'Présenter une ambition et ses conditions, sans préjuger des décisions à venir.',reply:'Marianne conclut : « Nous pouvons éclairer une orientation politique, pas signer à la place du conseil. »',note:'Communication conditionnelle, sous réserve des décisions et contrôles requis.'},
  {id:'announce',text:'Annoncer une date définitive pour mobiliser les équipes.',reply:'Marianne corrige : « Sans calendrier validé, nous prendrions un engagement fragile. Retravaillons la formulation. »',note:'Alerte sur une annonce prématurée du calendrier.'}
 ]}
];
export const priorities=[
 {id:'service',label:'Accès des habitants',detail:'Souligner les besoins des usagers et l’accessibilité du service.'},
 {id:'finance',label:'Soutenabilité',detail:'Insister sur les coûts récurrents, les ressources et les marges de sécurité.'},
 {id:'transparency',label:'Transparence',detail:'Clarifier les étapes, les compétences et les suites de la participation.'}
];
const docIds=documents.map(d=>d.id),dialogueIds=dialogues.map(d=>d.id);
const isObj=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
export function freshBudget(){return {seen:[],diagnosis:null,choice:null,brief:false,legacyReport:null,evidence:{},dialogue:{},priority:null,v13Brief:false,openDoc:null};}
export function restoreBudget(v){const s=freshBudget();if(!isObj(v))return s;
 s.seen=[...new Set((Array.isArray(v.seen)?v.seen:[]).filter(id=>docIds.includes(id)))];
 s.diagnosis=['uncertain','all-clear','loan'].includes(v.diagnosis)?v.diagnosis:null;
 s.choice=scenarios.some(c=>c.id===v.choice)?v.choice:null;
 s.brief=v.brief===true&&s.seen.length===4&&s.diagnosis==='uncertain'&&!!s.choice;
 s.legacyReport=v.legacyReport&&isObj(v.legacyReport)&&scenarios.some(x=>x.id===v.legacyReport.choice)?{choice:v.legacyReport.choice}:s.brief?{choice:s.choice}:null;
 for(const d of documents){const val=v.evidence?.[d.id];if(d.options.some(x=>x.id===val))s.evidence[d.id]=val;}
 for(const d of dialogues){const val=v.dialogue?.[d.id];if(d.choices.some(x=>x.id===val))s.dialogue[d.id]=val;}
 s.priority=priorities.some(p=>p.id===v.priority)?v.priority:null;
 s.openDoc=docIds.includes(v.openDoc)?v.openDoc:null;
 s.v13Brief=v.v13Brief===true&&canPublish(s).ok;
 return s;}
export function assess(s){if(s.seen.length!==4)return {ok:false,reason:'Consulter les quatre pièces avant de préparer le diagnostic.'};if(s.diagnosis!=='uncertain')return {ok:false,reason:'Le financement annoncé n’est pas acquis et les charges de fonctionnement doivent être prises en compte.'};return {ok:true,reason:'Diagnostic prudent : la recette annoncée reste incertaine. Les scénarios sont des hypothèses, pas une autorisation de dépense.'};}
export function evaluate(s){const pre=assess(s);if(!pre.ok||!s.choice)return {...pre,ok:false};const c=scenarios.find(x=>x.id===s.choice);return {ok:true,scenario:c,investmentNeed:c.investment-c.grant,municipalEnvelope:1850000,gap:c.investment-c.grant-1850000,annual:c.annual,withoutGrant:c.investment-1850000};}
export function evidenceStatus(s,id){const d=documents.find(x=>x.id===id);if(!d)return {valid:false,selected:null};return {valid:s.evidence?.[id]===d.correct,selected:s.evidence?.[id]??null};}
export function review(s){const seen=docIds.filter(id=>s.seen.includes(id)).length;const facts=docIds.filter(id=>evidenceStatus(s,id).valid).length;const heard=dialogueIds.filter(id=>!!s.dialogue?.[id]).length;return {seen,facts,heard,diagnosed:s.diagnosis==='uncertain',chosen:scenarios.some(x=>x.id===s.choice),priority:priorities.some(x=>x.id===s.priority),ready:seen===4&&facts===4&&heard===3&&s.diagnosis==='uncertain'&&!!s.choice&&!!s.priority};}
export function canPublish(s){const r=review(s);return {ok:r.ready,reason:!r.facts||r.facts<4?'Identifier les quatre faits déterminants dans les pièces.':r.heard<3?'Échanger avec Karim, Jeanne et Marianne.':!r.diagnosed?'Établir le diagnostic financier prudent.':!r.chosen?'Choisir une trajectoire.':!r.priority?'Préciser votre priorité de conseil.':'Prêt à présenter la note.'};}
export function dialogueReply(s,id){const d=dialogues.find(x=>x.id===id);return d?.choices.find(x=>x.id===s.dialogue?.[id])||null;}
export function finalOutcome(s){const c=scenarios.find(x=>x.id===s.choice);if(!c)return '';const j=dialogueReply(s,'jeanne')?.id==='followup'?'Jeanne accepte de participer au prochain point d’étape.':'Jeanne demande une clarification sur les engagements annoncés.';const k=dialogueReply(s,'karim')?.id==='reserve'?'Karim confirme que les hypothèses sont présentées sans masquer l’incertitude.':'Karim demande de renforcer la réserve concernant l’aide envisagée.';return c.outcome+' '+k+' '+j;}
export function reportText(s,playerName='Chargé de mission'){const check=canPublish(s);if(!check.ok)throw Error(check.reason);const ev=evaluate(s),c=ev.scenario;
 const euros=n=>new Intl.NumberFormat('fr-FR').format(n)+' EUR';
 const name=String(playerName).replace(/[\u0000-\u001f\u007f]/g,' ').slice(0,40);
 const priority=priorities.find(x=>x.id===s.priority);
 return [
  'TERRITOIRES — VALRIVIÈRE',
  'NOTE DE CADRAGE — MANUFACTURE DES TILLEULS',
  'Auteur (fiction) : '+name,'Version : exercice pédagogique v1.3','',
  '1. OBJET','Éclairer l’arbitrage sur le rythme d’ouverture de la manufacture, sans se substituer aux décisions de la commune.','',
  '2. FAITS RELEVÉS',...documents.map(d=>'- '+d.name+' : '+d.explanation),'',
  '3. DIALOGUES DE SERVICE',...dialogues.map(d=>'- '+d.name+' : '+(dialogueReply(s,d.id)?.note||'Non renseigné')),'',
  '4. OPTION PROPOSÉE',c.name+' — '+c.open,
  'Investissement estimé : '+euros(c.investment),
  'Aide uniquement envisagée : '+euros(c.grant),
  'Enveloppe municipale indicative : '+euros(ev.municipalEnvelope),
  'Écart sans aide : '+euros(ev.withoutGrant),
  'Écart avec aide hypothétique : '+euros(ev.gap),
  'Charges annuelles estimées : '+euros(ev.annual),'',
  '5. PRIORITÉ DE CONSEIL',priority.label+' — '+priority.detail,'',
  '6. SUITES À INSTRUIRE','Confirmer les engagements de financement, les compétences, la soutenabilité du fonctionnement, les procédures et la suite de la consultation des habitants.','',
  '7. LIMITES','Simulation entièrement fictive : les calculs rapprochent des montants, sans vérifier l’équilibre réel, la disponibilité de crédits ou la légalité d’un montage.',
  'Aucun document ne vaut délibération, marché, acte d’engagement ni autorisation de travaux.','',
  'Suite narrative : '+finalOutcome(s)
 ].join('\n');}