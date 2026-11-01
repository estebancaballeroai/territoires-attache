import {test} from 'node:test';
import assert from 'node:assert/strict';
import {DOCUMENTS,DIALOGUES,KNOWLEDGE,NOTE} from '../content.js';
import {OCTOBRE_DOCS,OCTOBRE_TALKS,OCTOBRE_KNOWLEDGE,OCTOBRE_NOTE} from '../episode2-content.js';
import {NOVEMBRE_DOCS,NOVEMBRE_TALKS,NOVEMBRE_KNOWLEDGE,NOVEMBRE_CHECKS} from '../episode3-content.js';
const elements=new Map(),events={};const store=new Map();
class Node{constructor(){this.innerHTML='';this.textContent='';this.open=false;this.returnValue='';this.value='';this.style={};this.classList={add(){},remove(){},toggle(){}};this.listeners={};}addEventListener(type,fn){this.listeners[type]=fn;}showModal(){this.open=true;}close(v){this.open=false;this.returnValue=v;this.listeners.close?.();}}
for(const key of ['#topbar','#navigation','#app','#toast','#restartDialog','#playerName','#importFile'])elements.set(key,new Node());
globalThis.document={body:new Node(),querySelector:q=>elements.get(q)||null,addEventListener:(t,fn)=>events[t]=fn};
globalThis.window={scrollTo(){},addEventListener(){}};
Object.defineProperty(globalThis,'navigator',{configurable:true,value:{}});
globalThis.localStorage={getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,String(v)),removeItem:k=>store.delete(k)};
await import('../app.js?episode3=1');
const screen=()=>elements.get('#app').innerHTML;
const state=()=>JSON.parse(store.get('territoires.v2.pilot.v1'));
const click=(action,id='',extra={})=>events.click({target:{closest:()=>({dataset:{action,id,...extra}})}});
function talk1(id,choice){click('talk',id);for(let i=0;i<DIALOGUES[id].intro.length;i++)click('talk-next');click('talk-choose',choice);click('view','hub');}
function talk2(id,choice){click('ep2-talk',id);for(let i=0;i<OCTOBRE_TALKS[id].intro.length;i++)click('ep2-talk-next');click('ep2-talk-choice',choice);click('view','ep2');}
function talk3(id,choice){click('ep3-talk',id);for(let i=0;i<NOVEMBRE_TALKS[id].intro.length;i++)click('ep3-talk-next');assert(screen().includes('ep3-talk-choice'));click('ep3-talk-choice',choice);click('view','ep3');}
test('Parcours UI integre des trois episodes et reinitialisation',()=>{
 for(let i=0;i<3;i++)click('intro-next');click('start');
 talk1('marianne','method');talk1('lucie','respect');talk1('etienne','honest');
 for(const d of DOCUMENTS){click('doc',d.id);click('evidence',d.id,{choice:d.correct});click('document-list');}
 for(const k of KNOWLEDGE.slice(0,2)){click('knowledge',k.id);click('mark-knowledge',k.id);click('knowledge-index');}
 click('view','note');for(const field of ['qualification','delegation'])click('note-choice',NOTE[field].find(x=>x.correct).id,{field});click('note-choice','promise',{field:'communication'});click('finish');
 click('ep2-begin');for(let i=0;i<3;i++)click('ep2-prologue-next');click('ep2-prologue-end');
 for(const [id,choice] of [['marianne','method'],['lucie','respect'],['nora','clarify'],['salome','statutes'],['karim','budget']])talk2(id,choice);
 for(const d of OCTOBRE_DOCS){click('ep2-doc',d.id);click('ep2-evidence',d.id,{choice:d.correct});click('view','ep2-files');}
 for(const k of OCTOBRE_KNOWLEDGE.slice(0,2)){click('ep2-read',k.id);click('ep2-mark',k.id);click('view','ep2-knowledge');}
 click('view','ep2-note');for(const [field,choice] of [['role','clarify-state'],['competence','verify-statutes'],['method','cooperate']])click('ep2-note-choice',choice,{field});click('ep2-finish');
 assert(screen().includes('ep3-begin'),screen().slice(-700));
 click('ep3-begin');assert(screen().includes('Le dossier prêt à partir'));
 for(let i=0;i<4;i++)click('ep3-prologue-next');click('ep3-prologue-end');
 assert(screen().includes('Les paroles')||screen().includes('Le dossier')||screen().includes('Le classeur'));
 click('ep3-location','conseil');assert(screen().includes('Etienne Roussel')||screen().includes('Le conseil')||screen().includes('Parler'));
 for(const [id,choice] of [['marianne','proof'],['lucie','listen'],['etienne','precise'],['nora','roles'],['jeanne','explain']])talk3(id,choice);
 click('view','ep3-files');for(const d of NOVEMBRE_DOCS){click('ep3-doc',d.id);assert(screen().includes(d.title));click('ep3-evidence',d.id,{choice:d.correct});click('view','ep3-files');}
 click('view','ep3-knowledge');for(const k of NOVEMBRE_KNOWLEDGE.slice(0,2)){click('ep3-read',k.id);assert(screen().includes(k.title));click('ep3-mark',k.id);click('view','ep3-knowledge');}
 click('view','ep3-note');for(const [field,options] of Object.entries(NOVEMBRE_CHECKS))click('ep3-check',options.find(x=>x.correct).id,{field});click('ep3-strategy','method');
 assert(screen().includes('ep3-finish'),screen().slice(-350));click('ep3-finish');assert(screen().includes('Acte I achevé'));let s=state();assert(s.completed&&s.episode2.completed&&s.episode3.completed);assert.equal(s.episode3.events[0].value,'method');
 click('view','journal');assert(screen().includes('Le dossier prêt à partir'));click('view','profile');assert(screen().includes('Savoir')||screen().includes('Progression'));
 click('reset');assert(elements.get('#restartDialog').open);elements.get('#restartDialog').close('confirm');s=state();assert(!s.completed&&!s.episode2.started&&!s.episode3.started);assert.equal(s.xp,0);
});
