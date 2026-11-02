import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {NOVEMBRE,NOVEMBRE_KNOWLEDGE} from '../episode3-content.js';
const root=fileURLToPath(new URL('../',import.meta.url));
test('La V2.2 integre vraiment les nouvelles illustrations et le code au cache offline',()=>{
 const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8'),app=fs.readFileSync(path.join(root,'app.js'),'utf8');
 for(const x of ['episode3-content.js','episode3-engine.js','episode3-ui.js','archives-v22.webp','conseil-v22.webp']){
  assert(sw.includes(x),x+' not in offline cache');
  const filepath=x.endsWith('.webp')?path.join(root,'assets',x):path.join(root,x);
  assert(fs.statSync(filepath).size>2000,filepath+' missing');
 }
 assert(sw.includes('territoires-v2-pilot-4'));
 assert(app.includes('ep3-begin')&&app.includes('ep3-finish'));
 assert(NOVEMBRE.locations.every(loc=>fs.existsSync(path.join(root,'assets',loc.image))));
});
test('References legales: chaque cours renvoie a Legifrance et au bon article',()=>{
 assert.equal(NOVEMBRE_KNOWLEDGE.length,4);
 for(const k of NOVEMBRE_KNOWLEDGE){assert(k.url.startsWith('https://www.legifrance.gouv.fr/codes/article_lc/'));assert(k.paragraphs.length>=4);}
 assert(NOVEMBRE_KNOWLEDGE.some(k=>k.article.includes('R2131-1')&&k.url.includes('LEGIARTI000049906655')));
});
