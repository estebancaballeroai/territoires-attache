export const DAY=86400000;
export function fresh(){return {schema:1,profile:{name:'Camille',path:'externe'},read:[],collected:[],answers:{},completed:[],side:[],settings:{font:1,motion:true},drafts:{},lastMission:null,narrative:{started:false,mode:'campaign',dialogues:{},documents:[]}};}
export function index(data){const missions=data.chapters.flatMap(c=>c.missions.map(m=>({...m,chapterId:c.id,domain:c.domain})));return {missions,questions:missions.flatMap(m=>m.questions).concat((data.sideQuests||[]).map(s=>s.question))};}
export function getMission(data,id){return index(data).missions.find(m=>m.id===id);}
export function unlocked(data,s,id){if(data.campaign&&s.narrative?.mode==='campaign'){const ms=index(data).missions,i=ms.findIndex(m=>m.id===id);return i>=0&&(s.completed.includes(id)||i===0||ms.slice(0,i).every(m=>s.completed.includes(m.id)));}const c=data.chapters.find(c=>c.missions.some(m=>m.id===id));if(!c)return false;const i=c.missions.findIndex(m=>m.id===id);return i===0||s.completed.includes(c.missions[i-1].id);}
export function collect(data,s,id){if(!data.books.some(b=>b.id===id))throw Error('Livre inconnu');if(!s.collected.includes(id))s.collected.push(id);return s;}
export function markRead(data,s,id){collect(data,s,id);if(!s.read.includes(id))s.read.push(id);return s;}
export function answer(data,s,id,choice,now=Date.now()){
 const q=index(data).questions.find(q=>q.id===id);if(!q||!Number.isInteger(choice)||choice<0||choice>=q.choices.length)throw Error('Réponse invalide');
 const prev=s.answers[id],ok=choice===q.answer;
 const separated=!prev||now-prev.last>=DAY;
 const streak=ok?(!prev||!prev.correct?1:prev.streak+(separated?1:0)):0;
 const interval=[1,3,7,14,30][Math.min(Math.max(streak-1,0),4)];
 s.answers[id]={attempts:(prev?.attempts||0)+1,correct:ok,firstCorrect:prev?prev.firstCorrect:ok,last:now,due:now+(ok?interval*DAY:10*60000),streak,choice};return ok;
}
export function canComplete(data,s,id){const m=getMission(data,id);return !!m&&unlocked(data,s,id)&&m.requiredBooks.every(b=>s.read.includes(b))&&m.questions.every(q=>s.answers[q.id]?.correct);}
export function complete(data,s,id){if(!canComplete(data,s,id))throw Error('Lecture et réponses nécessaires');if(!s.completed.includes(id))s.completed.push(id);return s;}
export function completeSide(data,s,id){const x=(data.sideQuests||[]).find(x=>x.id===id);if(!x||!s.read.includes(x.bookId)||!s.answers[x.question.id]?.correct)throw Error('Lecture et réponse nécessaires');if(!s.side.includes(id))s.side.push(id);return s;}
export function xp(s){return s.collected.length*5+Object.values(s.answers).filter(a=>a.firstCorrect).length*10+s.completed.length*60+s.side.length*30;}
export function rank(s){return ['Éclaireur','Explorateur','Analyste','Conseiller','Stratège','Passeur de savoirs'][Math.min(5,Math.floor(xp(s)/300))];}
export function due(data,s,now=Date.now()){return index(data).questions.filter(q=>s.answers[q.id]&&s.answers[q.id].due<=now).sort((a,b)=>s.answers[a.id].due-s.answers[b.id].due);}
export function stats(data,s,domain){const ms=index(data).missions.filter(m=>!domain||m.domain===domain),qs=ms.flatMap(m=>m.questions),a=qs.map(q=>s.answers[q.id]);return {total:qs.length,discovered:a.filter(Boolean).length,correct:a.filter(x=>x?.correct).length,consolidated:a.filter(x=>x?.correct&&x.streak>=2).length,first:a.filter(x=>x?.firstCorrect).length,finished:ms.filter(m=>s.completed.includes(m.id)).length};}
export function restore(data,input){
 if(!input||typeof input!=='object'||input.schema!==1||Array.isArray(input))throw Error('Format de sauvegarde non reconnu');
 const s=fresh(),mi=index(data).missions,qs=index(data).questions,valid=(arr,ids)=>Array.isArray(arr)?[...new Set(arr.filter(x=>typeof x==='string'&&ids.includes(x)))]:[];
 s.profile.name=typeof input.profile?.name==='string'?input.profile.name.trim().slice(0,40)||'Camille':'Camille';s.profile.path=input.profile?.path==='troisieme'?'troisieme':'externe';
 const n=input.narrative;s.narrative.mode=n?.mode==='campaign'?'campaign':'free';s.narrative.started=n?.started===true;for(const m of mi){const count=n?.dialogues?.[m.id];if(Number.isInteger(count)&&count>=0)s.narrative.dialogues[m.id]=Math.min(count,data.campaign?.missions[m.id]?.opening.length||0);}s.narrative.documents=valid(n?.documents,mi.map(m=>m.id));
 const bookIds=data.books.map(b=>b.id);s.read=valid(input.read,bookIds);s.collected=valid(input.collected,bookIds);s.read.forEach(id=>{if(!s.collected.includes(id))s.collected.push(id);});
 const records=input.answers&&typeof input.answers==='object'&&!Array.isArray(input.answers)?input.answers:{};
 for(const q of qs){const a=records[q.id];if(!a||typeof a!=='object')continue;if(!Number.isInteger(a.attempts)||a.attempts<1||typeof a.correct!=='boolean'||typeof a.firstCorrect!=='boolean'||!Number.isFinite(a.last)||!Number.isFinite(a.due)||!Number.isInteger(a.streak)||a.streak<0||!Number.isInteger(a.choice)||a.choice<0||a.choice>=q.choices.length)continue;s.answers[q.id]={attempts:Math.min(a.attempts,100000),correct:a.correct&&a.choice===q.answer,firstCorrect:a.firstCorrect,last:a.last,due:a.due,streak:Math.min(99,a.streak),choice:a.choice};}
 const storyMode=s.narrative.mode;s.narrative.mode='free';
 for(const m of mi){if(Array.isArray(input.completed)&&input.completed.includes(m.id)&&canComplete(data,s,m.id))s.completed.push(m.id);}
 // A later revision may be wrong without undoing a dossier already resolved.
 for(const c of data.chapters)for(const m of c.missions){if(s.completed.includes(m.id))continue;if(Array.isArray(input.completed)&&input.completed.includes(m.id)&&unlocked(data,s,m.id)&&m.requiredBooks.every(b=>s.read.includes(b))&&m.questions.every(q=>s.answers[q.id]?.attempts))s.completed.push(m.id);}
 s.narrative.mode=storyMode;
 s.side=valid(input.side,(data.sideQuests||[]).filter(x=>s.read.includes(x.bookId)&&s.answers[x.question.id]).map(x=>x.id));
 s.settings.font=[1,1.15,1.3].includes(input.settings?.font)?input.settings.font:1;s.settings.motion=input.settings?.motion!==false;
 if(input.drafts&&typeof input.drafts==='object')for(const k of ['note','composition','rapport','oral'])if(typeof input.drafts[k]==='string')s.drafts[k]=input.drafts[k].slice(0,30000);
 s.lastMission=mi.some(m=>m.id===input.lastMission)?input.lastMission:null;return s;
}
