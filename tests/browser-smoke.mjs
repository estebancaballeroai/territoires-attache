/* Real Chromium smoke test via Chrome DevTools Protocol, no NPM dependencies. */
import assert from 'node:assert/strict';
import {spawn,spawnSync} from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..','dist');
const allowed={'.html':'text/html','.mjs':'application/javascript','.js':'application/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json','.webp':'image/webp','.png':'image/png'};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function browserBinary(){for(const n of [process.env.CHROME_BIN,'google-chrome','google-chrome-stable','chromium','chromium-browser'].filter(Boolean)){if(n.includes('/')&&fs.existsSync(n))return n;const r=spawnSync('which',[n],{encoding:'utf8'});if(r.status===0)return r.stdout.trim();}throw Error('Chrome/Chromium unavailable: browser validation not performed');}
function staticServer(){return http.createServer((req,res)=>{let loc;try{loc=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}const file=path.resolve(root,'.'+loc.replace(/\/$/,'/index.html'));if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}fs.readFile(file,(err,body)=>{if(err){res.writeHead(404).end('missing '+loc);return;}res.writeHead(200,{'Content-Type':allowed[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}).end(body);});});}
async function connectChrome(wsURL){const ws=new WebSocket(wsURL);const pending=new Map();const errors=[];let seq=0;await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true});});ws.addEventListener('message',e=>{const msg=JSON.parse(e.data);if(msg.method==='Runtime.exceptionThrown')errors.push(JSON.stringify(msg.params.exceptionDetails?.exception?.description||msg.params.exceptionDetails));if(msg.id&&pending.has(msg.id)){const {resolve,reject}=pending.get(msg.id);pending.delete(msg.id);if(msg.error)reject(Error(msg.error.message));else resolve(msg.result||{});}});
 const call=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));setTimeout(()=>{if(pending.has(id)){pending.delete(id);reject(Error('CDP timeout '+method));}},15000).unref();});
 const evaluate=async expression=>{const res=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(res.exceptionDetails)throw Error('Browser JS exception: '+(res.exceptionDetails.exception?.description||res.exceptionDetails.text));return res.result?.value;};
 return {call,evaluate,errors,close:()=>ws.close()};}
async function run(){const browser=browserBinary(),server=staticServer();let child,session,profile;
 try{await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const appURL='http://127.0.0.1:'+server.address().port+'/#budget';profile=fs.mkdtempSync(path.join(os.tmpdir(),'territoires-smoke-'));child=spawn(browser,['--headless=new','--no-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-first-run','--no-default-browser-check','--user-data-dir='+profile,'--remote-debugging-port=0','about:blank'],{stdio:'ignore'});
  let port;const dbgFile=path.join(profile,'DevToolsActivePort');for(let i=0;i<120;i++){if(fs.existsSync(dbgFile)){port=fs.readFileSync(dbgFile,'utf8').split('\n')[0];break;}if(child.exitCode!==null)throw Error('Chromium exited with '+child.exitCode);await sleep(100);}assert(port,'Chrome DevTools endpoint did not start');let pages=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json();const tab=pages.find(p=>p.type==='page');assert(tab,'No Chromium page');session=await connectChrome(tab.webSocketDebuggerUrl);const {call,evaluate,errors}=session;
  await call('Page.enable');await call('Runtime.enable');await call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,isMobile:true});await call('Page.navigate',{url:appURL});
  async function eventually(expression,reason){for(let i=0;i<90;i++){try{if(await evaluate(expression))return;}catch{}await sleep(120);}throw Error('Timed out: '+reason);}
  const click=async(action,id)=>{const exp=`(()=>{const el=[...document.querySelectorAll('button[data-action]')].find(x=>x.dataset.action===${JSON.stringify(action)}&&x.dataset.id===${JSON.stringify(id)});if(!el||el.disabled)return false;el.click();return true})()`;assert(await evaluate(exp),`button ${action}/${id} available`);await sleep(75);};
  await eventually("document.querySelector('.budget-v13-hero')!==null",'budget screen');
  assert(await evaluate("document.querySelector('.budget-v13-hero img').naturalWidth>0"),'RPG asset image loaded');
  for(const width of [320,390,768]){await call('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,isMobile:true});await sleep(130);let dims=await evaluate("({scroll:document.documentElement.scrollWidth,width:document.documentElement.clientWidth,viewport:innerWidth})");assert(dims.scroll<=dims.width+1,`responsive overflow ${width}px: ${JSON.stringify(dims)}`);}
  await call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,isMobile:true});
  for(const [doc,option] of [['budget','b'],['agents','c'],['habitants','a'],['juridique','b']]){await click('budget-doc',doc);await click('budget-evidence',doc+':'+option);}
  for(const person of ['karim','jeanne','marianne']){await click('budget-dialogue',person+':'+({karim:'reserve',jeanne:'followup',marianne:'conditional'}[person]));}
  assert(await evaluate("document.querySelector('[data-action=budget-diagnosis][data-id=uncertain]')?.disabled===false"),'diagnosis unlocked');
  await click('budget-diagnosis','uncertain');await click('budget-choice','phase');await click('budget-priority','finance');await click('budget-brief','');
  assert(await evaluate("document.querySelector('[data-action=budget-export]')!==null"),'report available');
  let saved=await evaluate("JSON.parse(localStorage.getItem('territoires.budget.v1'))");assert(saved.v13Brief&&Object.keys(saved.evidence).length===4,'save has completed budget');
  await call('Page.reload',{ignoreCache:true});await eventually("document.querySelector('[data-action=budget-export]')!==null",'saved report after reload');
  const shot=(await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false,fromSurface:true})).data;const folder=path.resolve(root,'..','test-artifacts');fs.mkdirSync(folder,{recursive:true});fs.writeFileSync(path.join(folder,'mobile-390.png'),Buffer.from(shot,'base64'));
  assert.equal(errors.length,0,'No JS exceptions: '+errors.join('; '));console.log('Browser smoke OK: mobile 320/390/768, image, four evidence choices, 3 dialogues, decision, save/reload; screenshot saved.');
 }finally{session?.close();if(child&&!child.killed)child.kill('SIGKILL');if(profile)fs.rmSync(profile,{recursive:true,force:true});await new Promise(r=>server.close(r));}}
run().catch(e=>{console.error(e.stack||e);process.exitCode=1;});