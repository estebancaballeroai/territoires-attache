/* Node-based DOM event smoke test; does not claim browser layout verification. */
import {test} from 'node:test';import assert from 'node:assert/strict';
const nodes=new Map(),handlers={};const storage=new Map();
class FakeNode{constructor(){this.innerHTML='';this.textContent='';this.open=false;this.returnValue='';this.value='';this.style={};this.classList={add(){},remove(){},toggle(){}};this.listeners={};}addEventListener(k,fn){this.listeners[k]=fn;}showModal(){this.open=true;}close(v){this.open=false;this.returnValue=v;this.listeners.close?.();}}
for(const key of ['#topbar','#navigation','#app','#toast','#restartDialog','#playerName','#importFile'])nodes.set(key,new FakeNode());
globalThis.document={body:new FakeNode(),querySelector:q=>nodes.get(q)||null,addEventListener:(k,fn)=>{handlers[k]=fn}};
globalThis.window={scrollTo(){},addEventListener(){}};Object.defineProperty(globalThis,"navigator",{configurable:true,value:{}});
globalThis.localStorage={getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v)),removeItem:k=>storage.delete(k)};
await import('../app.js?mock=1');
const screen=()=>nodes.get('#app').innerHTML;
function click(action,id='',extra={}){assert(handlers.click,'click handler');handlers.click({target:{closest:()=>({dataset:{action,id,...extra}})}});}
const choose=(person,answer,lines)=>{click('talk',person);for(let i=0;i<lines;i++)click('talk-next');assert(screen().includes('data-action="talk-choose"'),person+' options missing');click('talk-choose',answer);click('view','hub');};
test('single integrated episode: prologue, locations, files, law, dialogues and outcome',()=>{
 assert(screen().includes('Une année pour faire ses preuves'));
 for(let i=0;i<3;i++)click('intro-next');click('start');
 assert(screen().includes('Explorer Valrivière'));
 choose('marianne','method',5);
 click('location','secretariat');choose('lucie','respect',4);
 click('document-list');
 for(const [id,choice] of [['invitation','b'],['note','c'],['delegation','b']]){
  click('doc',id);assert(screen().includes('data-action="evidence"'));click('evidence',id,{choice});
  assert(screen().includes('Fait établi.'));click('document-list');
 }
 click('view','knowledge');
 for(const k of ['conseil','maire']){click('knowledge',k);assert(screen().includes('Entraînement raisonné'));click('mark-knowledge',k);click('knowledge-index');}
 click('view','hub');click('location','maire');choose('etienne','honest',4);
 click('location','cour');choose('jeanne','dialogue',4);
 click('view','note');click('note-choice','intent',{field:'qualification'});click('note-choice','check',{field:'delegation'});click('note-choice','transparent',{field:'communication'});
 assert(screen().includes('Présenter la note à la DGS'));click('finish');
 assert(screen().includes('Une parole qui engage sans tromper'));
 const state=JSON.parse(storage.get('territoires.v2.pilot.v1'));assert(state.completed);assert.equal(state.events[0].value,'transparent');
 click('view','journal');assert(screen().includes('Octobre'));
 click('view','profile');assert(screen().includes('Recommencer à zéro'));
 click('reset');assert(nodes.get('#restartDialog').open);
 nodes.get('#restartDialog').close('confirm');assert(screen().includes('Une année pour faire ses preuves'));
 assert(!JSON.parse(storage.get('territoires.v2.pilot.v1')).completed);
 assert(storage.get('territoires.v2.pilot.v1.backup'));
});