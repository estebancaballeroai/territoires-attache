import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('V1.1.1: retour de mission, cache actualisé, icône et CI cohérents',()=>{
 const app=fs.readFileSync(new URL('../dist/app.mjs',import.meta.url),'utf8');
 const sw=fs.readFileSync(new URL('../dist/sw.js',import.meta.url),'utf8');
 const manifest=JSON.parse(fs.readFileSync(new URL('../dist/manifest.webmanifest',import.meta.url),'utf8'));
 const pkg=JSON.parse(fs.readFileSync(new URL('../package.json',import.meta.url),'utf8'));
 assert.equal(pkg.version,'1.1.1');
 assert.match(app,/const VERSION='1\.1\.1'/);
 assert.match(sw,/territoires-v1\.1\.1/);
 assert.match(app,/state\.completed\.includes\(quiz\.id\)\?'Revenir au dossier'/);
 assert.match(app,/case'return-mission':quiz=null;nav\('mission',id\)/);
 assert.match(app,/navigator\.serviceWorker\.register\('\.\/sw\.js'\)/);
 assert.equal(manifest.icons[0].sizes,'192x192');
 const icon=new URL('../dist/assets/icon-192.png',import.meta.url);
 assert(fs.statSync(icon).size>1000);
 assert(sw.includes("'./assets/icon-192.png'"));
});
