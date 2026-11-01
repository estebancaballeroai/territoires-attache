/* Full click-driven campaign test in an emulated DOM; visual verification is separate. */
import {test} from 'node:test';import assert from 'node:assert/strict';
import {DIALOGUES,DOCUMENTS,KNOWLEDGE,NOTE} from '../content.js';
import {OCTOBRE_TALKS,OCTOBRE_DOCS,OCTOBRE_KNOWLEDGE} from '../episode2-content.js';
const nodes=new Map(),handlers={};const storage=new Map();
class FakeNode{constructor(){this.innerHTML='';this.textContent='';this.open=false;this.returnValue='';this.value='';this.style={};this.classList={add(){},remove(){},toggle(){}};this.listeners={};}addEventListener(k,fn){this.listeners[k]=fn;}showModal(){this.open=true;}close(v){this.open=false;this.returnValue=v;this.listeners.close?.();}}
for(const key of ['#topbar','#navigation','#app','#toast','#restartDialog','#playerName','#importFile'])nodes.set(key,new FakeNode());
globalThis.document={body:new FakeNode(),querySelector:q=>nodes.get(q)||null,addEventListener:(k,fn)=>{handlers[k]=fn}};
globalThis.window={scrollTo(){},addEventListener(){}};Object.defineProperty(globalThis,'navigator',{configurable:true,value:{}});
globalThis.localStorage={getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v)),removeItem:k=>storage.delete(k)};
await import('../app.js?october-smoke=1');
const screen=()=>nodes.get('#app').innerHTML;
const click=(action,id='',extra={})=>{assert(handlers.click);handlers.click({target:{closest:()=>({dataset:{action,id,...extra}})}});};
const saved=()=>JSON.parse(storage.get('territoires.v2.pilot.v1'));
function talkSeptember(id,choice){click('talk',id);for(let i=0;i<DIALOGUES[id].intro.length;i++)click('talk-next');assert(screen().includes('data-action="talk-choose"'),id);click('talk-choose',choice);click('view','hub');}
function talkOctober(id,choice){click('ep2-talk',id);for(let i=0;i<OCTOBRE_TALKS[id].intro.length;i++)click('ep2-talk-next');assert(screen().includes('data-action="ep2-talk-choice"'),id);click('ep2-talk-choice',choice);click('view','ep2');}
test('une seule campagne septembre-octobre, suite des choix et sauvegarde complète',()=>{
 for(let i=0;i<3;i++)click('intro-next');click('start');
 talkSeptember('marianne','method');talkSeptember('lucie','respect');talkSeptember('etienne','honest');
 click('document-list');for(const doc of DOCUMENTS){click('doc',doc.id);click('evidence',doc.id,{choice:doc.correct});click('document-list');}
 click('view','knowledge');for(const k of KNOWLEDGE.slice(0,2)){click('knowledge',k.id);click('mark-knowledge',k.id);click('knowledge-index');}
 click('view','note');for(const field of ['qualification','delegation'])click('note-choice',NOTE[field].find(x=>x.correct).id,{field});click('note-choice','promise',{field:'communication'});click('finish');
 assert(saved().completed);assert(screen().includes('Le poids d’une promesse'));assert(screen().includes('ep2-begin'));
 click('ep2-begin');assert(screen().includes('Les partenaires du territoire'));for(let i=0;i<3;i++)click('ep2-prologue-next');click('ep2-prologue-end');
 assert(screen().includes('Une date a circulé trop vite')||screen().includes('une date a circulé trop vite'));
 click('ep2-location','reunion');assert(screen().includes('Salomé Marchand'));
 for(const [id,choice] of [['marianne','method'],['lucie','respect'],['nora','clarify'],['salome','statutes'],['karim','budget']])talkOctober(id,choice);
 click('view','ep2-files');for(const d of OCTOBRE_DOCS){click('ep2-doc',d.id);assert(screen().includes(d.title));click('ep2-evidence',d.id,{choice:d.correct});assert(screen().includes('Fait établi.'));click('view','ep2-files');}
 click('view','ep2-knowledge');for(const k of OCTOBRE_KNOWLEDGE.slice(0,2)){click('ep2-read',k.id);assert(screen().includes(k.title));click('ep2-mark',k.id);click('view','ep2-knowledge');}
 click('view','ep2-note');for(const [field,choice] of [['role','clarify-state'],['competence','verify-statutes'],['method','cooperate']])click('ep2-note-choice',choice,{field});
 assert(screen().includes('Remettre la recommandation à la DGS'));
 click('ep2-finish');assert(screen().includes('Une table autour de la manufacture'));
 assert(saved().episode2.completed);assert.equal(saved().events[0].value,'promise');assert.equal(saved().episode2.events[0].value,'cooperate');
 click('view','journal');assert(screen().includes('Les partenaires du territoire'));
 click('view','profile');assert(screen().includes('Nora Vidal'));assert(screen().includes('Salomé Marchand'));
 click('reset');assert(nodes.get('#restartDialog').open);nodes.get('#restartDialog').close('confirm');assert(!saved().completed);assert(!saved().episode2.started);
});