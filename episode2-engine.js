import {OCTOBRE,OCTOBRE_TALKS,OCTOBRE_DOCS,OCTOBRE_KNOWLEDGE,OCTOBRE_NOTE,OCTOBRE_ENDINGS} from './episode2-content.js';
const valid=x=>x&&typeof x==='object'&&!Array.isArray(x);
const ids=a=>a.map(x=>x.id);
const locations=ids(OCTOBRE.locations),docs=ids(OCTOBRE_DOCS),knowledge=ids(OCTOBRE_KNOWLEDGE);
export const newEpisode=()=>({schema:1,started:false,location:'bureau',visited:[],dialogue:{},relations:{},evidence:{},knowledge:[],note:{role:null,competence:null,method:null},errors:0,completed:false,events:[],finishedAt:null});
export function restoreEpisode(input){
 const s=newEpisode();if(!valid(input))return s;
 s.started=input.started===true;
 s.location=locations.includes(input.location)?input.location:'bureau';
 s.visited=Array.isArray(input.visited)?[...new Set(input.visited.filter(x=>locations.includes(x)))]:[];
 for(const [id,d] of Object.entries(OCTOBRE_TALKS))if(d.choices.some(c=>c.id===input.dialogue?.[id]))s.dialogue[id]=input.dialogue[id];
 for(const d of OCTOBRE_DOCS)if(d.choices.some(c=>c.id===input.evidence?.[d.id]))s.evidence[d.id]=input.evidence[d.id];
 s.knowledge=Array.isArray(input.knowledge)?[...new Set(input.knowledge.filter(x=>knowledge.includes(x)))]:[];
 for(const field of ['role','competence','method'])if(OCTOBRE_NOTE[field].some(x=>x.id===input.note?.[field]))s.note[field]=input.note[field];
 s.errors=Number.isInteger(input.errors)?Math.min(999,Math.max(0,input.errors)):0;
 s.relations=relationEffects(s);
 if(input.completed===true&&canFinish(s).ok){
  s.completed=true;s.finishedAt=Number.isFinite(input.finishedAt)?input.finishedAt:null;
  s.events=[{id:'october_partners',month:'Octobre',effectMonth:'Juin',value:s.note.method}];
 }
 return s;
}
export const factCorrect=(s,id)=>{const d=OCTOBRE_DOCS.find(x=>x.id===id);return !!d&&s.evidence?.[id]===d.correct;};
export function progress(s){return {facts:OCTOBRE_DOCS.filter(d=>factCorrect(s,d.id)).length,totalFacts:OCTOBRE_DOCS.length,talks:Object.keys(s.dialogue).length,totalTalks:Object.keys(OCTOBRE_TALKS).length,knowledge:s.knowledge.length,totalKnowledge:OCTOBRE_KNOWLEDGE.length,done:s.completed,ready:canFinish(s).ok};}
export function relationEffects(s){const result={};for(const [id,item] of Object.entries(OCTOBRE_TALKS)){const chosen=item.choices.find(x=>x.id===s.dialogue[id]);if(chosen)result[item.person]=chosen.trust||0;}return result;}
export function xp(s){const p=progressWithoutReady(s);return p.facts*18+p.knowledge*12+p.talks*6+(s.completed?110:0);}
const progressWithoutReady=s=>({facts:OCTOBRE_DOCS.filter(d=>factCorrect(s,d.id)).length,talks:Object.keys(s.dialogue).length,knowledge:s.knowledge.length});
export function skills(s){const p=progressWithoutReady(s);return {legal:p.facts*2+p.knowledge+(s.completed?2:0),governance:p.facts*2+(s.completed?3:0),relations:p.talks+(s.completed?2:0)};}
export function visit(s,id){if(!s.started||!locations.includes(id))return false;s.location=id;if(!s.visited.includes(id))s.visited.push(id);return true;}
export function evidence(s,docId,choice){const d=OCTOBRE_DOCS.find(x=>x.id===docId);if(!s.started||s.completed||!d||!d.choices.some(x=>x.id===choice))return false;s.evidence[docId]=choice;if(choice!==d.correct)s.errors++;return true;}
export function dialogue(s,id,choice){const d=OCTOBRE_TALKS[id];if(!s.started||s.completed||!d||!d.choices.some(x=>x.id===choice))return false;s.dialogue[id]=choice;s.relations=relationEffects(s);return true;}
export function study(s,id){if(!s.started||!knowledge.includes(id))return false;if(!s.knowledge.includes(id))s.knowledge.push(id);return true;}
export function chooseNote(s,field,choice){if(!s.started||s.completed||!OCTOBRE_NOTE[field]?.some(x=>x.id===choice))return false;s.note[field]=choice;return true;}
export function canFinish(s){
 if(!s.started)return {ok:false,message:'L’épisode d’octobre n’a pas commencé.'};
 if(OCTOBRE_DOCS.some(d=>!factCorrect(s,d.id)))return {ok:false,message:'Il reste des documents à examiner ou des conclusions à corriger.'};
 if(!s.dialogue.marianne||!s.dialogue.nora||!s.dialogue.salome)return {ok:false,message:'Il faut entendre Marianne, Nora et Salomé pour comprendre leurs rôles.'};
 if(s.knowledge.length<2)return {ok:false,message:'Consulte au moins deux fiches de fond pour expliquer ta recommandation.'};
 for(const field of ['role','competence','method']){
  const c=OCTOBRE_NOTE[field].find(x=>x.id===s.note[field]);if(!c)return {ok:false,message:'La note comporte trois parties à compléter.'};
  if(c.correct===false)return {ok:false,message:'Une affirmation juridique doit être rectifiée dans la partie « '+field+' ».'};
 }
 return {ok:true,message:'La note identifie les responsabilités et les engagements sans présumer de transferts.'};
}
export function finish(s,now=Date.now()){
 if(s.completed)return {ok:false,message:'La note a déjà été remise.'};
 const v=canFinish(s);if(!v.ok)return v;
 s.completed=true;s.finishedAt=now;s.events=[{id:'october_partners',value:s.note.method,month:'Octobre',effectMonth:'Juin'}];return {ok:true,message:OCTOBRE_ENDINGS[s.note.method].title};
}
export function report(s,name='Camille'){
 if(!s.completed||!canFinish(s).ok)throw Error('La note n’est pas validée');
 const safe=String(name).replace(/[\u0000-\u001f\u007f]/g,' ').slice(0,36),outcome=OCTOBRE_ENDINGS[s.note.method];
 return ['TERRITOIRES 2.1 — VALRIVIÈRE','NOTE À LA DIRECTION GÉNÉRALE · OCTOBRE','Auteur : '+safe,'Simulation pédagogique fictive','',
  'OBJET','Répartir les rôles et responsabilités pour la manufacture des Tilleuls','',
  'ÉLÉMENTS DOCUMENTÉS',...OCTOBRE_DOCS.map(d=>'- '+d.title+' : '+d.why),'',
  'RÔLE DE L’ÉTAT',OCTOBRE_NOTE.role.find(c=>c.id===s.note.role)?.label||'','',
  'COMPÉTENCES INTERCOMMUNALES',OCTOBRE_NOTE.competence.find(c=>c.id===s.note.competence)?.label||'','',
  'MÉTHODE PROPOSÉE',OCTOBRE_NOTE.method.find(c=>c.id===s.note.method)?.label||'','',
  'CONSÉQUENCES À SUIVRE',outcome.summary,outcome.june,'',
  'TEXTES À CONSULTER',...OCTOBRE_KNOWLEDGE.map(k=>'- '+k.article+' : '+k.url),'',
  'Limite : note fictive de jeu ; elle ne valide ni transfert de compétence ni financement et n’engage aucune autorité.'].join('\n');
}