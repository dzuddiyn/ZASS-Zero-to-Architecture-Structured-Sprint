import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const MAP = [
  ['../templates/zasspill/en.md', '../../ZASSPILL/ZASSPILL_EN.md'],
  ['../templates/zasspill/my.md', '../../ZASSPILL/ZASSPILL_MY.md'],
  ['../templates/zasselection/en.md', '../../ZASSELECTION/ZASSELECTION_EN.md'],
  ['../templates/zasselection/my.md', '../../ZASSELECTION/ZASSELECTION_MY.md'],
  ['../templates/zassimple/en.md', '../../ZASSIMPLE/ZASSIMPLE_EN.md'],
  ['../templates/zassimple/my.md', '../../ZASSIMPLE/ZASSIMPLE_MY.md'],
  ['../templates/zass/en.md', '../../ZASS.md'],
  ['../templates/zass/my.md', '../../ZASS_MY.md'],
  [
    '../templates/shared/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md',
    '../../docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md'
  ]
];

for (const [template, canonical] of MAP) {
  test(`Core template stays synchronized with ${canonical}`, async () => {
    const bundled = await fs.readFile(new URL(template, import.meta.url), 'utf8');
    const source = await fs.readFile(new URL(canonical, import.meta.url), 'utf8');
    assert.equal(bundled, source);
  });
}
