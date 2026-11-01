import {NOVEMBRE,NOVEMBRE_DOCS,NOVEMBRE_TALKS,NOVEMBRE_KNOWLEDGE,NOVEMBRE_CHECKS,NOVEMBRE_STRATEGIES} from './episode3-content.js';
const isObj=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
const unique=(input,items)=>Array.isArray(input)?[...new Set(input.filter(x=>items.includes(x)))]:[];
const locations=NOVEMBRE.locations.map(x=>x.id),knowledge=NOVEMBRE_KNOWLEDGE.map(x=>x.id);
export const newEpisode=()=>({schema:1,started:false,location:'archives',visited:[],dialogue:{},relations:{},evidence:{},knowledge:[],checks:{publication:null,transmission:null,control:null},strategy:null,errors:0,completed:false,events:[],finishedAt:null});
export const factCorrect=(s,id)=>{const d=NOVEMBRE_DOCS.find(x=>x.id===id);return !!d&&s.evidence[id]===d.correct;};
export const relationEffects=s=>{const result={};for(const [id,item] of Object.entries(NOVEMBRE_TALKS)){const choice=item.choices.find(x=>x.id===s.dialogue[id]);if(choice)result[item.person]=(result[item.person]||0)+(choice.trust||0);}return result;};
export const coreReady=s=>NOVEMBRE_DOCS.every(d=>factCorrect(s,d.id))&&['marianne','lucie','nora','etienne'].every(x=>!!s.dialogue[x])&&s.knowledge.length>=2&&Object.keys(NOVEMBRE_CHECKS).every(field=>NOVEMBRE_CHECKS[field].some(x=>x.id===s.checks[field]&&x.correct))&&NOVEMBRE_STRATEGIES.some(x=>x.id===s.strategy);
export function canFinish(s){
 if(!s.started)return {ok:false,message:'La fin d octobre n a pas encore commence.'};
 if(NOVEMBRE_DOCS.some(x=>!factCorrect(s,x.id)))return {ok:false,message:'Les quatre pieces doivent etre analysees et les erreurs de qualification corrigees.'};
 if(['marianne','lucie','nora','etienne'].some(x=>!s.dialogue[x]))return {ok:false,message:'Marianne, Lucie, Nora et le maire doivent avoir ete entendus.'};
 if(s.knowledge.length<2)return {ok:false,message:'Lis deux fiches juridiques de fond pour justifier le circuit de verification.'};
 for(const key of Object.keys(NOVEMBRE_CHECKS)){
  const o=NOVEMBRE_CHECKS[key].find(x=>x.id===s.checks[key]);
  if(!o)return {ok:false,message:'Le circuit de controle comporte trois decisions a documenter.'};
  if(!o.correct)return {ok:false,message:'La formalite « '+key+' » reste erronee ; relis les pieces et rectifie ton choix.'};
 }
 if(!NOVEMBRE_STRATEGIES.some(x=>x.id===s.strategy))return {ok:false,message:'Il te reste a proposer une strategie de dialogue avec les habitants.'};
 return {ok:true,message:'La note distingue bien la portee du vote, les formalites et le controle de legalite.'};
}
export function restoreEpisode(input){
 const s=newEpisode();if(!isObj(input))return s;
 s.started=input.started===true;s.location=locations.includes(input.location)?input.location:'archives';s.visited=unique(input.visited,locations);
 for(const [id,t] of Object.entries(NOVEMBRE_TALKS))if(t.choices.some(x=>x.id===input.dialogue?.[id]))s.dialogue[id]=input.dialogue[id];
 for(const d of NOVEMBRE_DOCS)if(d.choices.some(x=>x.id===input.evidence?.[d.id]))s.evidence[d.id]=input.evidence[d.id];
 s.knowledge=unique(input.knowledge,knowledge);
 for(const [id,options] of Object.entries(NOVEMBRE_CHECKS))if(options.some(x=>x.id===input.checks?.[id]))s.checks[id]=input.checks[id];
 s.strategy=NOVEMBRE_STRATEGIES.some(x=>x.id===input.strategy)?input.strategy:null;
 s.errors=Number.isInteger(input.errors)?Math.max(0,Math.min(999,input.errors)):0;
 s.relations=relationEffects(s);
 if(s.started&&input.completed===true&&coreReady(s)){
  s.completed=true;s.finishedAt=Number.isFinite(input.finishedAt)?input.finishedAt:null;
  s.events=[{id:'act_one_closure',value:s.strategy,month:'Octobre',effectMonth:'Juin'},
   {id:'formalities_checked',value:true,month:'Octobre',effectMonth:'Mars'}];
 }
 return s;
}
export const progress=s=>({facts:NOVEMBRE_DOCS.filter(d=>factCorrect(s,d.id)).length,totalFacts:NOVEMBRE_DOCS.length,talks:Object.keys(s.dialogue).length,totalTalks:Object.keys(NOVEMBRE_TALKS).length,knowledge:s.knowledge.length,totalKnowledge:NOVEMBRE_KNOWLEDGE.length,checks:Object.keys(NOVEMBRE_CHECKS).filter(key=>NOVEMBRE_CHECKS[key].some(x=>x.id===s.checks[key]&&x.correct)).length,totalChecks:3,done:s.completed,ready:canFinish(s).ok});
export function xp(s){const p=progress(s);return p.facts*19+p.knowledge*12+p.talks*7+p.checks*10+(s.completed?120:0);}
export function skills(s){const p=progress(s);return {legal:p.facts*2+p.knowledge*2+p.checks*2+(s.completed?4:0),governance:p.facts+(s.completed?2:0),relations:p.talks+(s.completed?2:0)};}
export function visit(s,id){if(!s.started||!locations.includes(id))return false;s.location=id;if(!s.visited.includes(id))s.visited.push(id);return true;}
export function evidence(s,id,choice){const d=NOVEMBRE_DOCS.find(x=>x.id===id);if(!s.started||s.completed||!d||!d.choices.some(x=>x.id===choice))return false;s.evidence[id]=choice;if(choice!==d.correct)s.errors++;return true;}
export function dialogue(s,id,choice){const d=NOVEMBRE_TALKS[id];if(!s.started||s.completed||!d||!d.choices.some(x=>x.id===choice))return false;s.dialogue[id]=choice;s.relations=relationEffects(s);return true;}
export function study(s,id){if(!s.started||!knowledge.includes(id))return false;if(!s.knowledge.includes(id))s.knowledge.push(id);return true;}
export function chooseCheck(s,field,id){if(!s.started||s.completed||!NOVEMBRE_CHECKS[field]?.some(x=>x.id===id))return false;s.checks[field]=id;return true;}
export function chooseStrategy(s,id){if(!s.started||s.completed||!NOVEMBRE_STRATEGIES.some(x=>x.id===id))return false;s.strategy=id;return true;}
export function finish(s,now=Date.now()){if(s.completed)return {ok:false,message:'Ce dossier est deja termine.'};const r=canFinish(s);if(!r.ok)return r;s.completed=true;s.finishedAt=now;s.events=[{id:'act_one_closure',value:s.strategy,month:'Octobre',effectMonth:'Juin'},{id:'formalities_checked',value:true,month:'Octobre',effectMonth:'Mars'}];return {ok:true,message:NOVEMBRE_STRATEGIES.find(x=>x.id===s.strategy).summary};}
export function report(s,name='Camille',prior={}){
 if(!s.completed||!coreReady(s))throw Error('Le rapport ne peut pas etre exporte avant sa validation');
 const author=String(name).replace(/[\u0000-\u001f\u007f]/g,' ').slice(0,36),strategy=NOVEMBRE_STRATEGIES.find(x=>x.id===s.strategy);
 return ['TERRITOIRES 2.2 - VALRIVIERE','FICHE DE CONTROLE - ACTE I','Fin octobre - Simulation pedagogique','Redacteur : '+author,'',
 'I. PORTEE DE LA DELIBERATION','La deliberation fictive 2026-108 approuve le principe d etudes et une concertation, pas des travaux finances ni une ouverture a date fixe.',
 '', 'II. CONSTATS ET PIECES',...NOVEMBRE_DOCS.map(d=>'- '+d.title+' : '+d.why),'',
 'III. FORMALITES A VERIFIER','Publication electronique applicable : verifier la mise en ligne effective (CGCT L2131-1 et R2131-1).',
 'Transmission de cet acte : effectuer et attester la reception selon L2131-2.','Se souvenir : l accuse de reception constitue un mode de preuve, pas une approbation du fond.',
 'Controle de legalite : le prefet peut saisir le tribunal administratif ; l annulation contentieuse appartient au juge (L2131-6).',
 '', 'IV. STRATEGIE RETENUE',strategy.label,'', 'V. CONTINUITE DES DECISIONS',
 'Septembre : '+(prior.september||'non renseigne'), 'Octobre, partenaires : '+(prior.october||'non renseigne'),'',
 'VI. ETAPES A PROPOSER','Qualifier et dater les formalites reelles, archiver les preuves, corriger toute communication excessive, puis partager un calendrier d etudes.',
 '', 'REFERENCES',...NOVEMBRE_KNOWLEDGE.map(k=>'- '+k.article+' : '+k.url),
 'Exercice fictif. Ce document ne vaut ni acte executoire ni certificat de legalite ni avis juridique opposable.'].join('\n');
}
