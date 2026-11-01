import {PEOPLE,DIALOGUES,DOCUMENTS,KNOWLEDGE,NOTE,AFTER,EPISODE} from './content.js';
import * as E2 from './episode2-engine.js';
export const SAVE_KEY='territoires.v2.pilot.v1';
export const VERSION='2.1.0-alpha.2';
export const DOCUMENT_IDS=DOCUMENTS.map(x=>x.id);
export const KNOWLEDGE_IDS=KNOWLEDGE.map(x=>x.id);
const OBJECT=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
const text=x=>String(x||'').replace(/[\u0000-\u001f\u007f]/g,' ').trim();
const unique=(v,valid)=>Array.isArray(v)?[...new Set(v.filter(x=>valid.includes(x)))]:[];
export const emptyRelations=()=>Object.fromEntries(Object.keys(PEOPLE).map(k=>[k,0]));
export function newGame(name='Camille'){
 return {schema:2,version:VERSION,player:{name:text(name).slice(0,36)||'Camille'},intro:0,started:false,
  location:'bureau',visited:[],dialogue:{},relations:emptyRelations(),knowledge:[],evidence:{},openDoc:null,
  note:{qualification:null,delegation:null,communication:null},errors:0,insights:[],completed:false,finishedAt:null,
  events:[],episode2:E2.newEpisode(),xp:0,skill:{legal:0,governance:0,relations:0},lastActive:'intro',settings:{motion:true,large:false}}
}
export function restore(input){
 if(!OBJECT(input)||input.schema!==2)throw Error('Format de sauvegarde V2 non reconnu');
 const s=newGame(input.player?.name);s.intro=Math.max(0,Math.min(4,Number.isInteger(input.intro)?input.intro:0));s.started=input.started===true;
 const locations=EPISODE.locations.map(l=>l.id);
 s.location=locations.includes(input.location)?input.location:'bureau';s.visited=unique(input.visited,locations);
 s.knowledge=unique(input.knowledge,KNOWLEDGE_IDS);s.openDoc=DOCUMENT_IDS.includes(input.openDoc)?input.openDoc:null;
 for(const [id,person] of Object.entries(DIALOGUES))if(person.choices.some(c=>c.id===input.dialogue?.[id]))s.dialogue[id]=input.dialogue[id];
 for(const d of DOCUMENTS)if(d.choices.some(c=>c.id===input.evidence?.[d.id]))s.evidence[d.id]=input.evidence[d.id];
 for(const field of ['qualification','delegation','communication'])if(NOTE[field].some(x=>x.id===input.note?.[field]))s.note[field]=input.note[field];
 if(OBJECT(input.relations))for(const id of Object.keys(s.relations))s.relations[id]=Math.max(-5,Math.min(5,Number.isFinite(input.relations[id])?input.relations[id]:0));
 s.errors=Math.max(0,Math.min(999,Number.isInteger(input.errors)?input.errors:0));
 s.insights=unique(input.insights,['council','mayor','delegations','communication']);
 s.completed=input.completed===true&&noteReady(s);
 s.finishedAt=s.completed&&Number.isFinite(input.finishedAt)?input.finishedAt:null;
 s.events=s.completed&&Array.isArray(input.events)?input.events.filter(x=>OBJECT(x)&&['promise_september','jeanne_memory','trust_marianne'].includes(x.id)).slice(0,6):[];
 s.episode2=s.completed?E2.restoreEpisode(input.episode2):E2.newEpisode();
 s.xp=computeXP(s);
 s.skill=computeSkills(s);
 s.lastActive=['intro','hub','doc','knowledge','note','ending','journal','profile','ep2','ep2-prologue','ep2-files','ep2-doc','ep2-dialogue','ep2-knowledge','ep2-note','ep2-ending'].includes(input.lastActive)?input.lastActive:'hub';
 s.settings={motion:input.settings?.motion!==false,large:input.settings?.large===true};return s;
}
export const documentCorrect=(s,id)=>{const doc=DOCUMENTS.find(x=>x.id===id);return !!doc&&s.evidence?.[id]===doc.correct;};
export function progress(s){const facts=DOCUMENTS.filter(d=>documentCorrect(s,d.id)).length;
 const talks=Object.keys(DIALOGUES).filter(x=>!!s.dialogue?.[x]).length;
 return {facts,totalFacts:DOCUMENTS.length,talks,totalTalks:Object.keys(DIALOGUES).length,knowledge:s.knowledge.length,totalKnowledge:KNOWLEDGE.length,done:s.completed,ready:noteReady(s)};
}
export function computeXP(s){return s.knowledge.length*10+DOCUMENTS.filter(d=>documentCorrect(s,d.id)).length*20+Object.keys(s.dialogue).length*5+(s.completed?90:0)+E2.xp(s.episode2||E2.newEpisode());}
export function computeSkills(s){const a=E2.skills(s.episode2||E2.newEpisode());return {legal:DOCUMENTS.filter(d=>documentCorrect(s,d.id)).length*2+s.knowledge.length*2+(s.completed?2:0)+a.legal,governance:(documentCorrect(s,'invitation')?2:0)+a.governance,relations:Object.keys(s.dialogue).length+(s.completed?2:0)+a.relations};}
export function visit(s,id){if(!EPISODE.locations.some(x=>x.id===id))return false;s.location=id;s.lastActive='hub';if(!s.visited.includes(id))s.visited.push(id);return true;}
export function readKnowledge(s,id){if(!KNOWLEDGE_IDS.includes(id))return false;if(!s.knowledge.includes(id))s.knowledge.push(id);s.xp=computeXP(s);s.skill=computeSkills(s);return true;}
export function answerEvidence(s,docId,choice){let d=DOCUMENTS.find(x=>x.id===docId);if(!d||!d.choices.some(x=>x.id===choice)||s.completed)return false;s.evidence[docId]=choice;if(choice!==d.correct)s.errors++;s.xp=computeXP(s);s.skill=computeSkills(s);return true;}
export function answerDialogue(s,id,choice){const item=DIALOGUES[id];if(!item||!item.choices.some(c=>c.id===choice)||s.completed)return false;
 const before=s.dialogue[id], old=item.choices.find(x=>x.id===before),fresh=item.choices.find(x=>x.id===choice);
 s.dialogue[id]=choice;
 s.relations[item.person]=Math.min(5,Math.max(-5,s.relations[item.person]-(old?.trust||0)+(fresh.trust||0)));
 s.xp=computeXP(s);s.skill=computeSkills(s);return true;
}
export function chooseNote(s,field,id){if(s.completed||!NOTE[field]?.some(x=>x.id===id))return false;s.note[field]=id;return true;}
export function noteErrors(s){return ['qualification','delegation'].filter(field=>{
 const item=NOTE[field].find(x=>x.id===s.note[field]);return item&&!item.correct;
 });}
export function noteReady(s){return DOCUMENTS.every(x=>documentCorrect(s,x.id)) && !!s.dialogue.marianne && !!s.dialogue.etienne && !!s.dialogue.lucie &&
 s.knowledge.length>=2 && ['qualification','delegation','communication'].every(field=>!!NOTE[field].find(x=>x.id===s.note[field]));}
export function mayFinish(s){if(s.completed)return {ok:false,message:'Cet épisode est déjà terminé.'};
 const p=progress(s);if(p.facts!==DOCUMENTS.length)return {ok:false,message:'Il reste des faits à vérifier dans les pièces du dossier.'};
 if(!s.dialogue.marianne||!s.dialogue.etienne||!s.dialogue.lucie)return {ok:false,message:'Il faut encore entendre les services et le maire.'};
 if(s.knowledge.length<2)return {ok:false,message:'Étudie au moins deux fiches du carnet juridique pour fonder ton analyse.'};
 if(!s.note.qualification||!s.note.delegation||!s.note.communication)return {ok:false,message:'La note comporte trois décisions à préparer.'};
 const errors=noteErrors(s);if(errors.length)return {ok:false,message:'La qualification juridique doit être corrigée avant transmission : '+errors.join(', ')+'.'};
 return {ok:true,message:'La note est juridiquement prudente et peut être présentée.'};
}
export function finish(s,now=Date.now()){
 let ready=mayFinish(s);if(!ready.ok)return ready;
 s.completed=true;s.finishedAt=now;
 const communication=s.note.communication;
 const mem={id:'promise_september',value:communication,month:'Septembre',effectMonth:'Juin'};
 s.events=[mem,{id:'jeanne_memory',value:s.dialogue.jeanne||'absent',month:'Septembre',effectMonth:'Juin'},
 {id:'trust_marianne',value:s.relations.marianne,month:'Septembre',effectMonth:'Janvier'}];
 s.lastActive='ending';s.xp=computeXP(s);s.skill=computeSkills(s);
 return {ok:true,message:AFTER[communication].title};
}
export function refresh(s){s.xp=computeXP(s);s.skill=computeSkills(s);return s;}
export function earnedBadge(s){const z=s.skill.legal;if(z>=13)return 'Conseiller';if(z>=9)return 'Analyste';if(z>=4)return 'Explorateur';return 'Éclaireur';}
export function reportText(s){if(!s.completed)throw Error('La note n’a pas encore été présentée');
 const choice=NOTE.communication.find(x=>x.id===s.note.communication),a=AFTER[s.note.communication];
 return ['TERRITOIRES 2.0 — VALRIVIÈRE','NOTE DE SYNTHÈSE — MANUFACTURE DES TILLEULS','Auteur (fiction) : '+s.player.name,'Date : septembre — exercice pédagogique','',
 '1. CONTEXTE','La municipalité souhaite réaffecter la manufacture des Tilleuls. Le dossier ne comporte pas d’acte établissant une décision d’ouverture à une date déterminée.','',
 '2. FAITS VÉRIFIÉS',...DOCUMENTS.map(d=>'- '+d.title+' : '+d.why),'',
 '3. COMPÉTENCES ET AUTORITÉS','Le conseil municipal règle par ses délibérations les affaires de la commune (CGCT L. 2121-29). Le maire exécute en principe les décisions de l’assemblée (L. 2122-21). Les délégations doivent être vérifiées selon leur objet et leur fondement (L. 2122-22 et L. 2122-18).','',
 '4. RECOMMANDATION',choice.label,'',
 '5. POINTS À CONFIRMER','Nature et contenu des décisions déjà adoptées ; périmètre du projet ; délégations applicables ; financements ; calendrier ; communication aux usagers.','',
 '6. CONSÉQUENCES NARRATIVES',a.later,'',
 'Documents fictifs ; ce texte ne vaut pas décision, avis juridique opposable ni autorisation administrative.','Références : https://www.legifrance.gouv.fr/'].join('\n');
}