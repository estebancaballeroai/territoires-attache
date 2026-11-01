"""TERRITOIRES V2 — end-to-end in real Chromium on emulated mobile viewports."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright
BASE='http://127.0.0.1:8765/'
OUT=Path('/mnt/data/territoires-v2-pilot/test-artifacts');OUT.mkdir(parents=True,exist_ok=True)

def first(page, action, id=None):
 sel=f'button[data-action="{action}"]'+(f'[data-id="{id}"]' if id is not None else '')
 assert page.locator(sel).count()>0, f'Missing {action}/{id}'
 page.locator(sel).first.click()

def talk(page, person, choice):
 first(page,'talk',person)
 for n in range(12):
  nxt=page.locator('button[data-action="talk-next"]')
  if not nxt.count():break
  nxt.first.click()
 assert page.locator(f'button[data-action="talk-choose"][data-id="{choice}"]').count()>0, f'Conversation choices {person}'
 first(page,'talk-choose',choice)
 assert page.locator('.speech').count()>0
 first(page,'view','hub')

with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 context=browser.new_context(viewport={'width':390,'height':844},is_mobile=True,device_scale_factor=1,has_touch=True,accept_downloads=True)
 page=context.new_page();errors=[];page.on('pageerror',lambda error: errors.append(str(error)))
 page.goto(BASE,wait_until='networkidle')
 assert 'Une année pour faire ses preuves' in page.locator('#app').inner_text()
 page.screenshot(path=str(OUT/'intro-390.png'))
 for n in range(3):first(page,'intro-next')
 first(page,'start');assert 'La porte de la mairie' in page.locator('#app').inner_text()
 page.screenshot(path=str(OUT/'hub-390.png'))
 for w in (320,390,768):
  page.set_viewport_size({'width':w,'height':844});page.wait_for_timeout(160)
  dim=page.evaluate('({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth})')
  assert dim['scroll']<=dim['width']+1, f'Horizontal overflow {w}: {dim}'
  page.screenshot(path=str(OUT/f'hub-{w}.png'))
 page.set_viewport_size({'width':390,'height':844})
 talk(page,'marianne','method')
 first(page,'location','secretariat');talk(page,'lucie','respect')
 first(page,'document-list')
 for d,answer in [('invitation','b'),('note','c'),('delegation','b')]:
  first(page,'doc',d)
  assert page.locator('.sheet-prose p').count()==4
  first(page,'evidence',d) if False else None
  page.locator(f'button[data-action="evidence"][data-id="{d}"][data-choice="{answer}"]').click()
  assert 'Fait établi.' in page.locator('.question-box').inner_text()
  if d=='invitation':page.screenshot(path=str(OUT/'document-390.png'))
  first(page,'document-list')
 first(page,'view','knowledge')
 for k in ('conseil','maire'):
  first(page,'knowledge',k)
  assert page.locator('.knowledge-article .prose p').count()>=4
  first(page,'mark-knowledge',k)
  first(page,'knowledge-index')
 first(page,'view','hub');first(page,'location','maire');talk(page,'etienne','honest')
 first(page,'location','cour');talk(page,'jeanne','dialogue')
 first(page,'view','note')
 for field,option in [('qualification','intent'),('delegation','check'),('communication','transparent')]:
  page.locator(f'button[data-action="note-choice"][data-field="{field}"][data-id="{option}"]').click()
 page.screenshot(path=str(OUT/'note-390.png'))
 first(page,'finish')
 assert 'Une parole qui engage sans tromper' in page.locator('#app').inner_text()
 save=page.evaluate('JSON.parse(localStorage.getItem("territoires.v2.pilot.v1"))')
 assert save['completed'] is True and save['events'][0]['value']=='transparent'
 page.screenshot(path=str(OUT/'ending-390.png'),full_page=True)
 page.reload(wait_until='networkidle');assert 'Une parole qui engage sans tromper' in page.locator('#app').inner_text()
 # Separate offline validation after all cached assets loaded
 page.evaluate('navigator.serviceWorker.ready');page.wait_for_timeout(1000)
 context.set_offline(True)
 page.reload(wait_until='domcontentloaded')
 assert 'Une parole qui engage sans tromper' in page.locator('#app').inner_text(), 'offline reload failed'
 context.set_offline(False)
 first(page,'view','profile');first(page,'reset')
 assert page.locator('#restartDialog').evaluate('(el)=>el.open')
 page.locator('#restartDialog button[value="confirm"]').click()
 assert 'Une année pour faire ses preuves' in page.locator('#app').inner_text()
 assert page.evaluate('JSON.parse(localStorage.getItem("territoires.v2.pilot.v1")).completed') is False
 assert not errors, 'JavaScript errors: '+json.dumps(errors)
 print(json.dumps({'result':'PASS','views':[320,390,768], 'facts':3,'conversations':4,'knowledge':2,'ending':'transparent','persisted':True,'offline':True,'reset':True,'js_errors':errors, 'screenshots':sorted(x.name for x in OUT.iterdir())},ensure_ascii=False,indent=2))
 context.close();browser.close()