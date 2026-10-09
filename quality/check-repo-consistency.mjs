import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const errors = [];
const passes = [];

async function read(rel) {
  return fs.readFile(path.join(root, rel), 'utf8');
}

function capture(text, regex, label) {
  const match = text.match(regex);
  if (!match) {
    errors.push(`${label}: expected metadata not found`);
    return null;
  }
  return match[1];
}

function equal(label, values) {
  const present = values.filter((value) => value !== null);
  if (present.length !== values.length) return;
  if (new Set(present).size !== 1) {
    errors.push(`${label}: mismatch -> ${present.join(' | ')}`);
    return;
  }
  passes.push(`${label}: ${present[0]}`);
}

function requireText(label, text, pattern) {
  if (!pattern.test(text)) {
    errors.push(`${label}: required current-state marker missing`);
    return;
  }
  passes.push(`${label}: present`);
}

function rejectText(label, text, pattern) {
  if (pattern.test(text)) {
    errors.push(`${label}: stale/forbidden current-state marker found`);
    return;
  }
  passes.push(`${label}: clean`);
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await walk(full));
      continue;
    }

    if (/\.(?:md|js|mjs|json|ya?ml)$/i.test(entry.name)) files.push(full);
  }

  return files;
}

const [
  zassEn,
  zassMy,
  rootReadme,
  uiContract,
  zassimpleEn,
  zassimpleMy,
  zassimpleReadme,
  selectionEn,
  selectionMy,
  zasspillEn,
  zasspillMy,
  zasspillReadme,
  wikiHome,
  wikiZasspill,
  productRoadmap,
  productWiki,
  gatewayReference,
  hpcContract,
  ciContract,
  ciWorkflow
] = await Promise.all([
  read('ZASS.md'),
  read('ZASS_MY.md'),
  read('README.md'),
  read('docs/ZASS_SYSTEM_UI_UX_CONTRACT.md'),
  read('ZASSIMPLE/ZASSIMPLE_EN.md'),
  read('ZASSIMPLE/ZASSIMPLE_MY.md'),
  read('ZASSIMPLE/README.md'),
  read('ZASSELECTION/ZASSELECTION_EN.md'),
  read('ZASSELECTION/ZASSELECTION_MY.md'),
  read('ZASSPILL/ZASSPILL_EN.md'),
  read('ZASSPILL/ZASSPILL_MY.md'),
  read('ZASSPILL/README.md'),
  read('wiki/Home.md'),
  read('wiki/ZASSPILL.md'),
  read('docs/PRODUCTIZATION_ROADMAP.md'),
  read('wiki/Productization-and-zass-check.md'),
  read('ZASS_AI_SYNC_GOOGLE_DASHBOARD.md'),
  read('docs/ZASS_HUMAN_PRESENTATION_CONTRACT.md'),
  read('docs/ZASS_GITHUB_CI_CONTRACT.md'),
  read('.github/workflows/zass-ci.yml')
]);

equal('Full ZASS version', [
  capture(zassEn, /\*\*Version:\*\*\s*([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASS.md version'),
  capture(zassMy, /\*\*Version:\*\*\s*([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASS_MY.md version'),
  capture(rootReadme, /\*\*Full ZASS:\*\*\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'README Full ZASS version'),
  capture(uiContract, /\*\*Full ZASS surface alignment:\*\*\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'UI contract Full ZASS version'),
  capture(wikiHome, /\|\s*Full ZASS\s*\|\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'Wiki Full ZASS version')
]);

equal('ZASS SYSTEM version', [
  capture(zassEn, /\*\*ZASS SYSTEM:\*\*\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASS.md system version'),
  capture(zassMy, /\*\*ZASS SYSTEM:\*\*\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASS_MY.md system version'),
  capture(rootReadme, /\*\*ZASS SYSTEM:\*\*\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'README system version'),
  capture(uiContract, /\*\*System version:\*\*\s*([0-9]+\.[0-9]+\.[0-9]+)/, 'UI contract system version'),
  capture(wikiHome, /\|\s*ZASS SYSTEM\s*\|\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'Wiki system version')
]);

equal('ZASSIMPLE version', [
  capture(zassimpleEn, /\*\*Version:\*\*\s*([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASSIMPLE_EN version'),
  capture(zassimpleMy, /\*\*Version:\*\*\s*([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASSIMPLE_MY version'),
  capture(zassimpleReadme, /\*\*Current version:\*\*\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASSIMPLE README version'),
  capture(rootReadme, /\*\*ZASSIMPLE:\*\*\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'README ZASSIMPLE version'),
  capture(wikiHome, /\|\s*ZASSIMPLE\s*\|\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'Wiki ZASSIMPLE version')
]);

requireText('HPC canonical LOCKED', hpcContract, /\*\*Status:\*\*\s*LOCKED/i);
requireText('HPC fallback hierarchy', hpcContract, /Native rendered UI[\s\S]*Structured Markdown[\s\S]*Simple text hierarchy/i);
requireText('Full ZASS EN HPC inheritance', zassEn, /ZASS_HUMAN_PRESENTATION_CONTRACT\.md/);
requireText('Full ZASS MY HPC inheritance', zassMy, /ZASS_HUMAN_PRESENTATION_CONTRACT\.md/);
requireText('ZASSIMPLE EN HPC inheritance', zassimpleEn, /ZASS_HUMAN_PRESENTATION_CONTRACT\.md/);
requireText('ZASSIMPLE MY HPC inheritance', zassimpleMy, /ZASS_HUMAN_PRESENTATION_CONTRACT\.md/);
requireText('UI contract HPC inheritance', uiContract, /ZASS_HUMAN_PRESENTATION_CONTRACT\.md/);
requireText('README HPC discoverability', rootReadme, /ZASS Human Presentation Contract/);
equal('ZASSELECTION version', [
  capture(selectionEn, /\*\*Version:\*\*\s*([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASSELECTION_EN version'),
  capture(selectionMy, /\*\*Version:\*\*\s*([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASSELECTION_MY version'),
  capture(rootReadme, /\*\*ZASSELECTION:\*\*\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'README ZASSELECTION version'),
  capture(wikiHome, /\|\s*ZASSELECTION\s*\|\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'Wiki ZASSELECTION version')
]);

equal('ZASSPILL version', [
  capture(zasspillEn, /\*\*Version:\*\*\s*([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASSPILL_EN version'),
  capture(zasspillMy, /\*\*Version:\*\*\s*([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASSPILL_MY version'),
  capture(zasspillReadme, /\*\*Current version:\*\*\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASSPILL README version'),
  capture(rootReadme, /\*\*ZASSPILL:\*\*[^\n]*?v([0-9]+\.[0-9]+\.[0-9]+)/, 'README ZASSPILL version'),
  capture(wikiHome, /\|\s*ZASSPILL\s*\|\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'Wiki ZASSPILL version'),
  capture(wikiZasspill, /\*\*Current version:\*\*\s*v([0-9]+\.[0-9]+\.[0-9]+)/, 'ZASSPILL Wiki version')
]);

for (const [label, text] of [
  ['README ZASSPILL scope', rootReadme],
  ['ZASSPILL README scope', zasspillReadme],
  ['ZASSPILL EN scope', zasspillEn],
  ['ZASSPILL MY scope', zasspillMy],
  ['ZASSPILL Wiki scope', wikiZasspill],
  ['Productization roadmap ZASSPILL scope', productRoadmap],
  ['Wiki Home ZASSPILL scope', wikiHome]
]) {
  requireText(label, text, /method\s*\/\s*protocol contract[^\n]*production ready|method\/protocol contract[^\n]*production-ready/i);
}

requireText('README Method Gateway PASS', rootReadme, /T-013A and T-013B have passed/);
requireText('UI contract T-013A PASS', uiContract, /T-013A\s*[—-]\s*PASS/);
requireText('UI contract T-013B PASS', uiContract, /T-013B\s*[—-]\s*PASS/);
requireText('Integration reference Gateway PASS', gatewayReference, /T-013A and T-013B have passed|T-013A\/T-013B proof passed/i);

rejectText('Integration reference stale gateway status', gatewayReference, /not yet accepted as operational|T-013A implementation has started/i);
rejectText('UI contract stale gateway status', uiContract, /Until the public gateway is deployed and cross-AI readability is proven/i);
rejectText('README stale gateway status', rootReadme, /Implementation is in progress in the AI-SYNC workstream \(T-013A → T-013B\)/i);

requireText('CI workflow identity', ciWorkflow, /^name:\s*ZASS CI\s*$/m);
requireText('CI workflow validator step', ciWorkflow, /Run ZASS validator/);
requireText('CI contract operational', ciContract, /^Status:\s*OPERATIONAL\s*$/m);
requireText('Roadmap GitHub Action DONE', productRoadmap, /Add a GitHub Action that runs the same validator\. \*\*DONE/i);
requireText('Wiki shared validator operational', productWiki, /The same validator now powers both:/);

const scannedFiles = await walk(root);
const localExecutionMarker = '[executed on ' + 'device:';
const markerHits = [];
for (const file of scannedFiles) {
  const text = await fs.readFile(file, 'utf8');
  if (text.includes(localExecutionMarker)) {
    markerHits.push(path.relative(root, file));
  }
}
if (markerHits.length > 0) {
  errors.push(`Public execution metadata marker found in: ${markerHits.join(', ')}`);
} else {
  passes.push('Public execution metadata markers: 0');
}

console.log('ZASS REPOSITORY CONSISTENCY');
for (const item of passes) console.log(`PASS — ${item}`);

if (errors.length > 0) {
  for (const item of errors) console.error(`ERROR — ${item}`);
  console.error(`\n${errors.length} consistency error(s)`);
  process.exit(1);
}

console.log('\n0 consistency error(s)');
