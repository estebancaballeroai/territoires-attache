"""Chromium tests without navigation: page.set_content + local JS bundle.
This is intentionally an offline DOM and layout QA, not a successful navigation test.
"""
import base64, json, re
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT.parent/'visual-checks';OUT.mkdir(exist_ok=True)

def strip(path):
 s=(ROOT/path).read_text(encoding='utf-8')
 s=re.sub(r'^import\s+.*?;\s*$', '',s,flags=re.MULTILINE)
 s=re.sub(r'\bexport\s+(?=(?:const|function))','',s)
 return s

def wrap(title,script,prefix,returns):
 return f'const {title}=(()=>{{\n{prefix}\n{strip(script)}\nreturn {{{returns}}};\n}})();\n'

C1='EPISODE,OPENING,PEOPLE,DIALOGUES,DOCUMENTS,KNOWLEDGE,NOTE,AFTER,FUTURE'
C2='OCTOBRE,OCTOBRE_TALKS,OCTOBRE_DOCS,OCTOBRE_KNOWLEDGE,OCTOBRE_NOTE,OCTOBRE_ENDINGS'
E2='newEpisode,restoreEpisode,factCorrect,progress,relationEffects,xp,skills,visit,evidence,dialogue,study,chooseNote,canFinish,finish,report'
C3='NOVEMBRE,NOVEMBRE_DOCS,NOVEMBRE_TALKS,NOVEMBRE_KNOWLEDGE,NOVEMBRE_CHECKS,NOVEMBRE_STRATEGIES'
E3='newEpisode,restoreEpisode,factCorrect,relationEffects,coreReady,canFinish,progress,xp,skills,visit,evidence,dialogue,study,chooseCheck,chooseStrategy,finish,report'
E1='SAVE_KEY,VERSION,DOCUMENT_IDS,KNOWLEDGE_IDS,emptyRelations,newGame,restore,documentCorrect,progress,computeXP,computeSkills,visit,readKnowledge,answerEvidence,answerDialogue,chooseNote,noteErrors,noteReady,mayFinish,finish,earnedBadge,reportText,refresh'
js=wrap('C1','content.js','',C1)+wrap('C2','episode2-content.js','',C2)+wrap('C3','episode3-content.js','',C3)
js+=wrap('E3NS','episode3-engine.js',f'const {{{C3}}}=C3;',E3)
js+=wrap('E2NS','episode2-engine.js',f'const {{{C2}}}=C2;',E2)
js+=wrap('E1NS','engine.js',f'const {{{C1}}}=C1;const E2=E2NS;const E3=E3NS;',E1)
js+=wrap('UI2','episode2-ui.js',f'const {{{C2}}}=C2;const E2=E2NS;', 'octoberUI')
js+=wrap('UI3','episode3-ui.js',f'const {{{C3}}}=C3;const E3=E3NS;', 'novemberUI')
js+=f'''(()=>{{
const {{{C1}}}=C1;
const {{{C2}}}=C2;
const {{{C3}}}=C3;
const E=E1NS;const E2=E2NS;const E3=E3NS;const {{octoberUI}}=UI2;const {{novemberUI}}=UI3;
const localStorage=window.__ls;
{strip('app.js')}
}})();'''

source=(ROOT/'index.html').read_text(encoding='utf-8')
source=re.sub(r'<link rel="stylesheet"[^>]*>', '',source)
source=re.sub(r'<script type="module"[^>]*></script>', '',source)
source=source.replace('</head>',f'<style>{(ROOT/"styles.css").read_text(encoding="utf-8")}</style></head>')
images={p.name:'data:image/'+('png' if p.suffix=='.png' else 'webp')+';base64,'+base64.b64encode(p.read_bytes()).decode('ascii') for p in (ROOT/'assets').glob('*') if p.suffix.lower() in ['.png','.webp']}
pre='''window.__ls=(()=>{const items=new Map();return {getItem:k=>items.get(k)??null,setItem:(k,v)=>items.set(k,String(v)),removeItem:k=>items.delete(k),entries:()=>Object.fromEntries(items)};})();
window.__images='''+json.dumps(images)+''';
const patchImages=()=>document.querySelectorAll('img[src^="./assets/"]').forEach(img=>{let name=img.getAttribute('src').split('/').pop();if(window.__images[name])img.src=window.__images[name];});
new MutationObserver(patchImages).observe(document.documentElement,{childList:true,subtree:true});
'''

with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
 page=browser.new_page(viewport={'width':390,'height':844},device_scale_factor=1,has_touch=True,is_mobile=True,accept_downloads=True)
 errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.set_content(source)
 page.add_script_tag(content=pre)
 page.add_script_tag(content=js)
 assert page.locator('#app').get_by_text('Une année pour faire ses preuves').count()>0
 for width in [320,390,768]:
  page.set_viewport_size({'width':width,'height':844})
  page.wait_for_timeout(250)
  dims=page.evaluate('({w:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth})')
  assert dims['scroll']<=dims['w']+1,f'Overflow intro {width} {dims}'
  page.screenshot(path=str(OUT/f'intro-{width}.png'),full_page=False)
 page.set_viewport_size({'width':390,'height':844})
 def click(action,id=None,extra=None):
  query=f'button[data-action="{action}"]'
  if id is not None:query+=f'[data-id="{id}"]'
  if extra:
   for k,v in extra.items():query+=f'[data-{k}="{v}"]'
  loc=page.locator(query);assert loc.count(),query
  loc.first.click(timeout=5000)
 def ep1talk(person,choice,lines):
  click('talk',person)
  for _ in range(lines):click('talk-next')
  click('talk-choose',choice)
  click('view','hub')
 for _ in range(3):click('intro-next')
 click('start')
 page.screenshot(path=str(OUT/'september-390.png'))
 ep1talk('marianne','method',5)
 click('location','secretariat');ep1talk('lucie','respect',4)
 click('location','maire');ep1talk('etienne','honest',4)
 for doc,ans in [('invitation','b'),('note','c'),('delegation','b')]:
  click('doc',doc);click('evidence',doc,{'choice':ans});click('document-list')
 click('view','knowledge')
 for k in ['conseil','maire']:
  click('knowledge',k);click('mark-knowledge',k);click('knowledge-index')
 click('view','note')
 for field,ans in [('qualification','intent'),('delegation','check'),('communication','promise')]:
  click('note-choice',ans,{'field':field})
 click('finish')
 click('ep2-begin')
 page.screenshot(path=str(OUT/'october-prologue-390.png'))
 for _ in range(3):click('ep2-prologue-next')
 click('ep2-prologue-end')
 for width in [320,390,768]:
  page.set_viewport_size({'width':width,'height':844})
  page.wait_for_timeout(200)
  dims=page.evaluate('({w:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth})')
  assert dims['scroll']<=dims['w']+1,f'Overflow October {width} {dims}'
  page.screenshot(path=str(OUT/f'october-hub-{width}.png'),full_page=False)
 page.set_viewport_size({'width':390,'height':844})
 click('ep2-doc','prefecture')
 page.screenshot(path=str(OUT/'october-document-390.png'))
 click('ep2-evidence','prefecture',{'choice':'meeting'})
 click('ep2-read','deconcentration')
 page.screenshot(path=str(OUT/'october-knowledge-390.png'))
 click('ep2-mark','deconcentration')
 click('view','ep2')
 click('ep2-location','reunion')
 click('ep2-talk','nora')
 page.screenshot(path=str(OUT/'october-dialogue-390.png'))
 for _ in range(8):click('ep2-talk-next')
 click('ep2-talk-choice','clarify');click('view','ep2')
 click('ep2-talk','salome')
 for _ in range(8):click('ep2-talk-next')
 click('ep2-talk-choice','statutes');click('view','ep2')
 click('ep2-location','bureau');click('ep2-talk','marianne')
 for _ in range(7):click('ep2-talk-next')
 click('ep2-talk-choice','method');click('view','ep2')
 click('view','ep2-files')
 for doc,choice in [('statuts','verify'),('subventions','distinguish'),('accueil','matrix')]:
  click('ep2-doc',doc);click('ep2-evidence',doc,{'choice':choice});click('view','ep2-files')
 click('view','ep2-knowledge');click('ep2-read','epci');click('ep2-mark','epci');click('view','ep2-note')
 for field,choice in [('role','clarify-state'),('competence','verify-statutes'),('method','matrix')]:click('ep2-note-choice',choice,{'field':field})
 assert page.locator('button[data-action="ep2-finish"]').count()
 page.screenshot(path=str(OUT/'october-note-390.png'))
 click('ep2-finish');assert 'Les responsabilités prennent forme' in page.locator('#app').inner_text()
 page.screenshot(path=str(OUT/'october-ending-390.png'),full_page=False)
 saved=json.loads(page.evaluate('window.__ls.getItem("territoires.v2.pilot.v1")'))
 assert saved['completed'] and saved['episode2']['completed'] and saved['episode2']['events'][0]['value']=='matrix'
 with page.expect_download() as dl:click('ep2-export')
 assert dl.value.suggested_filename.endswith('.txt')
 click('ep3-begin')
 assert 'Le dossier prêt à partir' in page.locator('#app').inner_text()
 for _ in range(4):click('ep3-prologue-next')
 click('ep3-prologue-end')
 for width in [320,390,768]:
  page.set_viewport_size({'width':width,'height':844})
  page.wait_for_timeout(180)
  dims=page.evaluate('({w:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth})')
  assert dims['scroll']<=dims['w']+1,f'Overflow act I {width} {dims}'
  page.screenshot(path=str(OUT/f'act1-archives-{width}.png'),full_page=False)
 page.set_viewport_size({'width':390,'height':844})
 click('ep3-location','conseil')
 click('ep3-talk','etienne');page.screenshot(path=str(OUT/'act1-mayor-dialogue-390.png'),full_page=False)
 for _ in range(8):click('ep3-talk-next')
 click('ep3-talk-choice','precise');click('view','ep3')
 for location,person,choice in [('bureau','marianne','proof'),('archives','lucie','listen'),('prefecture','nora','roles'),('conseil','jeanne','explain')]:
  click('ep3-location',location)
  click('ep3-talk',person)
  for _ in range(8):click('ep3-talk-next')
  click('ep3-talk-choice',choice);click('view','ep3')
 click('view','ep3-files')
 for doc,choice in [('deliberation','study'),('publication','post'),('transmission','both'),('defer','tribunal')]:
  click('ep3-doc',doc)
  if doc=='publication':page.screenshot(path=str(OUT/'act1-document-390.png'),full_page=False)
  click('ep3-evidence',doc,{'choice':choice});click('view','ep3-files')
 click('view','ep3-knowledge')
 for k in ['entree','publication']:
  click('ep3-read',k)
  if k=='entree':page.screenshot(path=str(OUT/'act1-knowledge-390.png'),full_page=False)
  click('ep3-mark',k);click('view','ep3-knowledge')
 click('view','ep3-note')
 for field,choice in [('publication','verify'),('transmission','send'),('control','judge')]:click('ep3-check',choice,{'field':field})
 click('ep3-strategy','method');assert page.locator('button[data-action="ep3-finish"]').count()
 for width in [320,390,768]:
  page.set_viewport_size({'width':width,'height':844})
  page.wait_for_timeout(120)
  dims=page.evaluate('({w:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth})')
  assert dims['scroll']<=dims['w']+1,f'Overflow note {width} {dims}'
  page.screenshot(path=str(OUT/f'act1-note-{width}.png'),full_page=False)
 page.set_viewport_size({'width':390,'height':844})
 click('ep3-finish');assert 'ACTE I ACHEV' in page.locator('#app').inner_text().upper()
 page.screenshot(path=str(OUT/'act1-ending-390.png'),full_page=False)
 saved=json.loads(page.evaluate('window.__ls.getItem("territoires.v2.pilot.v1")'))
 assert saved['episode3']['completed'] and saved['episode2']['completed'] and saved['completed']
 assert saved['episode3']['events'][0]['value']=='method'
 with page.expect_download() as dl:click('ep3-export')
 assert dl.value.suggested_filename.endswith('.txt')
 click('view','profile');click('reset')
 assert page.locator('#restartDialog').evaluate('(el)=>el.open')
 page.locator('#restartDialog button[value="confirm"]').click()
 page.wait_for_timeout(180)
 reset=json.loads(page.evaluate('window.__ls.getItem("territoires.v2.pilot.v1")'))
 assert not reset['completed'] and not reset['episode2']['started'] and not reset['episode3']['started']
 # Browser cannot load HTTP endpoints here; network and physical-device checks remain separate.
 assert not errors,errors
 count=page.evaluate('document.querySelectorAll("img").length')
 broken=page.evaluate('[...document.images].filter(x=>!x.complete||x.naturalWidth===0).map(x=>x.alt)')
 assert not broken,broken
 assert page.locator('#app').is_visible()
 print(json.dumps({'result':'PASS','viewports':[320,390,768],'screenshots':sorted(x.name for x in OUT.glob('*.png')),'images':count,'errors':errors},ensure_ascii=False,indent=2))
 browser.close()
