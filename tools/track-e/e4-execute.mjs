import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// E4 bounded execution harness v0.1
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const cli = path.join(repoRoot, 'cli', 'bin', 'zass.js');
const runner = path.join(repoRoot, 'tools', 'track-e', 'runner.js');

function runNode(file, args, cwd) {
  const r = spawnSync(process.execPath, [file, ...args], { cwd, encoding: 'utf8' });
  return { exitCode: r.status ?? 99, stdout: r.stdout, stderr: r.stderr };
}
function git(args, cwd) {
  return execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8', windowsHide: true });
}
async function initRepo(dir) {
  git(['init'], dir);
  git(['config','user.email','track-e@example.invalid'], dir);
  git(['config','user.name','Track E'], dir);
  git(['add','.'], dir);
  git(['commit','-m','baseline'], dir);
}
async function copyExample(dir) {
  const src=path.join(repoRoot,'examples','01-small-farm-planner');
  for (const name of ['ZASS.md','ACTION_PLAN.md','ARCHITECTURE.md']) {
    await fs.copyFile(path.join(src,name),path.join(dir,name));
  }
}
async function record(project, kind, args) {
  const r=runNode(runner,[kind,'--project',project,...args],repoRoot);
  if(r.exitCode!==0) throw new Error(`runner ${kind} failed: ${r.stdout||r.stderr}`);
}
async function projection(project){
  const r=runNode(runner,['project','--project',project],repoRoot);
  if(r.exitCode!==0) throw new Error(r.stdout||r.stderr);
  return JSON.parse(r.stdout);
}
async function caseA() {
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),'zass-e4-a-'));
  try{
    await copyExample(dir); await initRepo(dir);
    const commands={};
    for(const cmd of ['check','status','diff']){
      const r=runNode(cli,[cmd],dir); commands[cmd]={exitCode:r.exitCode};
      await record(dir,'automated',['--result',r.exitCode===0?'PASS':'FAIL','--questions','Q3,Q4,Q8','--command',cmd,'--exitCode',String(r.exitCode),'--projectShape','fixture','--machineMetadataState','ABSENT','--os',process.platform,'--runtimeVersion',process.versions.node,'--zassCliVersion','0.4.0']);
    }
    await record(dir,'observed',['--result','OBSERVED','--questions','Q4,Q5,Q8','--observationCode','baseline-run-complete','--severity','LOW','--reproducible','YES','--projectShape','fixture']);
    return {id:'E4-A-01',commands,projection:await projection(dir)};
  } finally { await fs.rm(dir,{recursive:true,force:true}); }
}
async function caseB() {
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),'zass-e4-b-'));
  try{
    await copyExample(dir); await initRepo(dir);
    const z=await fs.readFile(path.join(dir,'ZASS.md'),'utf8');
    const a=await fs.readFile(path.join(dir,'ACTION_PLAN.md'),'utf8');
    const arch=await fs.readFile(path.join(dir,'ARCHITECTURE.md'),'utf8');
    const tasks={
      state:/ARCHITECTURE CONFIRMED/.test(z)&&/100%/.test(a),
      lockedDecision:/L-001 \/ D-001 — LOCKED/.test(z),
      openExperiment:/E-001/.test(z)&&/PLANNED/.test(a),
      handoff:/Current focus/.test(a)&&/Decision authority/.test(a),
      nextAuthorized:/A-006 \| P1 \| PARKED/.test(a),
      architecture:/Status:\*\* ARCHITECTURE CONFIRMED/.test(arch)
    };
    for(const [name,ok] of Object.entries(tasks)){
      await record(dir,'observed',['--result',ok?'PASS':'FAIL','--questions','Q1,Q2,Q3,Q5,Q8,Q10','--observationCode',name,'--severity',ok?'LOW':'HIGH','--reproducible','YES','--projectShape','full-zass-single-file']);
    }
    const commands={};
    for(const cmd of ['check','status','diff']){
      const r=runNode(cli,[cmd],dir); commands[cmd]={exitCode:r.exitCode};
      await record(dir,'automated',['--result',r.exitCode===0?'PASS':'FAIL','--questions','Q3,Q4,Q8','--command',cmd,'--exitCode',String(r.exitCode),'--projectShape','full-zass-single-file']);
    }
    return {id:'E4-B-01',fixture:'existing fictional teaching fixture',tasks,commands,userSignal:'NOT COLLECTED',projection:await projection(dir)};
  } finally { await fs.rm(dir,{recursive:true,force:true}); }
}
function makeLargeZass() {
  const lines=['# ZASS — Large Scale Fixture','','**Status:** TEST FIXTURE','','# DECISIONS'];
  for(let i=1;i<=180;i++) lines.push(`## D-${String(i).padStart(3,'0')} — Decision ${i}\n\n**Decision:** bounded fixture decision ${i}.\n\n- **L-${String(i).padStart(3,'0')} / D-${String(i).padStart(3,'0')} — LOCKED:** fixture decision ${i}.`);
  lines.push('# RISKS');
  for(let i=1;i<=90;i++) lines.push(`- **R-${String(i).padStart(3,'0')}:** fixture risk ${i}`);
  lines.push('# EXPERIMENTS');
  for(let i=1;i<=45;i++) lines.push(`- **E-${String(i).padStart(3,'0')}:** PLANNED fixture experiment ${i}`);
  lines.push('# ARCHITECTURE STATE','ARCHITECTURE CONFIRMED','# OPEN LOOPS','- E-045 remains PLANNED.');
  return lines.join('\n\n')+'\n';
}
async function caseC() {
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),'zass-e4-c-'));
  try{
    const z=makeLargeZass();
    await fs.writeFile(path.join(dir,'ZASS.md'),z);
    await fs.writeFile(path.join(dir,'ACTION_PLAN.md'),'# ACTION PLAN\n\nCurrent focus: execute E-045.\n');
    await fs.writeFile(path.join(dir,'ARCHITECTURE.md'),'# ARCHITECTURE\n\n**Status:** ARCHITECTURE CONFIRMED\n');
    await initRepo(dir);
    const lines=z.split(/\r?\n/);
    const targets=['L-180 / D-180','R-090','E-045','ARCHITECTURE CONFIRMED'];
    const locations=Object.fromEntries(targets.map(t=>[t,lines.findIndex(x=>x.includes(t))+1]));
    const counts={lines:lines.length,decisions:180,risks:90,experiments:45,majorSections:5};
    for(const [name,line] of Object.entries(locations)){
      await record(dir,'observed',['--result',line>0?'PASS':'FAIL','--questions','Q4,Q5,Q6,Q8,Q10','--observationCode','locate-'+name.replace(/[^A-Za-z0-9]+/g,'-').toLowerCase(),'--severity','LOW','--reproducible','YES','--projectShape','full-zass-single-file']);
    }
    const r=runNode(cli,['check'],dir);
    await record(dir,'automated',['--result',r.exitCode===0?'PASS':'FAIL','--questions','Q4,Q6,Q8','--command','check','--exitCode',String(r.exitCode),'--projectShape','full-zass-single-file']);
    return {id:'E4-C-01',counts,targetLineLocations:locations,tooling:{checkExitCode:r.exitCode},qualifyingHumanFrictionObserved:false,projection:await projection(dir)};
  } finally { await fs.rm(dir,{recursive:true,force:true}); }
}
const A=await caseA();
const B=await caseB();
const C=await caseC();
const trigger={
  observableScaleTrigger:false,
  reason:'Large fixture reproduced size/deep target locations, but automated execution did not establish material human navigation/review/handoff friction. Size alone is not a locked CR-006 trigger.'
};
const result={
  schema:'track-e-e4-automation-v0.1',
  cases:{A,B,C},
  triggerReview:trigger,
  D:{status:'NOT RUN — TRIGGER NOT MET'},
  coverage:{
    Q1:'PARTIAL factual task completion only; no human usefulness judgement',
    Q2:'PARTIAL factual orientation checks only; no human handoff judgement',
    Q3:'COVERED',
    Q4:'COVERED',
    Q5:'PARTIAL automated/field-observed fixture evidence',
    Q6:'PARTIAL fixture scale context; no material human pain proven',
    Q7:'NOT COVERED — E4-D not authorized',
    Q8:'COVERED across A/B/C factual runs',
    Q9:'NOT COVERED — no explicit user signal collected',
    Q10:'PARTIAL — requires human review'
  }
};
process.stdout.write('E4_RESULT_JSON_START\n'+JSON.stringify(result,null,2)+'\nE4_RESULT_JSON_END\n');
