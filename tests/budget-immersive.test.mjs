import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as B from '../dist/budget-engine.mjs';
import {budgetPage} from '../dist/budget-ui.mjs';

const fill=()=>{
 const s=B.freshBudget();
 s.seen=B.documents.map(d=>d.id);
 for(const d of B.documents)s.evidence[d.id]=d.correct;
 for(const d of B.dialogues)s.dialogue[d.id]=d.choices[0].id;
 s.diagnosis='uncertain';s.choice='phase';s.priority='finance';
 return s;
};
test('24 options cohérentes, quatre pièces originales et trois personnages',()=>{
 assert.equal(B.documents.length,4);assert.equal(B.dialogues.length,3);assert.equal(B.scenarios.length,3);
 assert.equal(new Set(B.documents.map(d=>d.id)).size,4);
 for(const d of B.documents){assert(d.options.length>=3);assert(d.options.some(x=>x.id===d.correct));assert(d.body.length>110);}
 for(const d of B.dialogues){assert(d.choices.length>=2);assert(d.choices.every(x=>x.reply&&x.note));}
});
test('progression complète et scénarios chiffrés',()=>{
 const s=fill();assert.equal(B.review(s).facts,4);assert(B.canPublish(s).ok);
 assert.equal(B.evaluate(s).gap,-50000);assert.equal(B.evaluate(s).withoutGrant,550000);
 s.choice='full';assert.equal(B.evaluate(s).gap,750000);assert.equal(B.evaluate(s).withoutGrant,1350000);
 s.choice='study';assert.equal(B.evaluate(s).gap,-1670000);
 const report=B.reportText(s,'Camille');assert.match(report,/NOTE DE CADRAGE/);assert.match(report,/SUBVENTION|Aide uniquement envisagée/);
 assert.match(report,/Charges annuelles estimées/);assert.match(report,/VALRIVIÈRE/);
});
test('un fait faux, une absence de dialogue ou de priorité bloque la note',()=>{
 const s=fill();s.evidence.budget='a';assert.equal(B.review(s).facts,3);assert(!B.canPublish(s).ok);
 s.evidence.budget='b';delete s.dialogue.jeanne;assert(!B.canPublish(s).ok);
 s.dialogue.jeanne='followup';s.priority=null;assert(!B.canPublish(s).ok);
 s.priority='finance';s.diagnosis='loan';assert(!B.canPublish(s).ok);
});
test('restauration stricte, sauvegardes V1.2 préservées',()=>{
 const legacy=B.restoreBudget({seen:B.documents.map(d=>d.id),diagnosis:'uncertain',choice:'phase',brief:true});
 assert(legacy.brief);assert.deepEqual(legacy.legacyReport,{choice:'phase'});assert(!legacy.v13Brief);
 const s=fill();s.v13Brief=true;s.openDoc='budget';let copied=B.restoreBudget(JSON.parse(JSON.stringify(s)));
 assert.deepEqual(copied,s);assert(copied.v13Brief);assert(B.canPublish(copied).ok);
 copied=B.restoreBudget({seen:['bad','budget','budget'],evidence:{budget:'z',bad:'c'},dialogue:{karim:'invalid'},priority:'hack',v13Brief:true});
 assert.deepEqual(copied.seen,['budget']);assert.equal(copied.v13Brief,false);assert.equal(copied.priority,null);assert.deepEqual(copied.evidence,{});
});
test('interface avec ressources réelles, choix accessibles, injection échappée',()=>{
 const s=fill();s.v13Brief=true;
 const html=budgetPage(s,'<script>alert(1)</script>');
 assert(!html.includes('<script>'));assert(html.includes('&lt;script&gt;'));
 assert(html.includes('./assets/budget-office.webp'));
 for(const d of B.documents)assert(html.includes('id="piece-'+d.id+'"')===false); // closed by default
 for(const d of B.dialogues)assert(html.includes(d.name));
 assert(html.includes('budget-export'));
 s.openDoc='budget';const opened=budgetPage(s,'Camille');
 assert(opened.includes('id="piece-budget"'));assert(opened.includes('budget-evidence'));
 assert(opened.includes('data-action="budget-doc"'));
});
test('narration réactive aux échanges et aux décisions',()=>{
 const s=fill();const good=B.finalOutcome(s);assert(good.includes('Jeanne accepte'));
 s.dialogue.jeanne='promise';s.dialogue.karim='assume';const altered=B.finalOutcome(s);
 assert.notEqual(good,altered);assert(altered.includes('demande une clarification'));
});