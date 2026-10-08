# zass-cli@0.4.0 npm Publication Receipt

**Status:** PUBLISHED / VERIFIED / CLOSED  
**Date:** 2026-10-08  
**Track:** TRACK D — A4 Public zass-cli publication  
**Package:** `zass-cli@0.4.0`

## 1. Source identity

- Repository: `dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint`
- Branch: `main`
- Published source SHA: `eb7e86e88d3a8dd1310400263497ac996057fe34`
- CLI package version: `0.4.0`
- Public executable: `zass`
- Executable target: `bin/zass.js`

## 2. Release workflow evidence

Manual publication workflow:

- Workflow: `Publish zass-cli`
- Workflow file: `.github/workflows/publish-zass-cli.yml`
- Run ID: `37747575173`
- Trigger: `workflow_dispatch`
- Exact owner authorization target: `zass-cli@0.4.0`
- Workflow conclusion: **SUCCESS**

Release gates that passed in the workflow:

1. exact release confirmation;
2. repository checkout;
3. Node/npm release setup;
4. package identity and public metadata verification;
5. npm publish credential verification;
6. npm registry-state verification;
7. complete zass-cli release tests;
8. npm publish dry-run;
9. actual `npm publish --provenance --access public`.

The actual publish step completed successfully and npm recorded signed GitHub Actions provenance.

## 3. Registry verification

Fresh registry verification after npm processing confirmed:

- `zass-cli@0.4.0` resolves publicly;
- npm `latest` dist-tag resolves to `0.4.0`;
- public registry contains the published `0.4.0` release.

During post-publish processing npm temporarily exposed `0.0.0-stage`. This was a transient processing state; the final verified public state is `latest = 0.4.0`.

## 4. Fresh public consumer smoke

A disposable external project installed the package directly from the public npm registry:

```text
npm install zass-cli@0.4.0
```

Observed:

- install exit code `0`;
- resolved package `zass-cli@0.4.0`;
- installed executable `node_modules/.bin/zass` / `zass.cmd` present;
- no monorepo-local package path was used.

The registry-installed executable then passed:

```text
zass check   → exit 0
zass status  → exit 0
zass diff    → exit 0
```

The smoke project reported:

- `zass check`: 0 errors, 0 warnings;
- `zass status`: Full ZASS project detected, validation PASS;
- `zass diff`: NO_CHANGE against local HEAD.

## 5. Cross-platform release evidence

Before publication:

- Linux GitHub Actions packed-artifact regression: PASS;
- Windows packed-artifact regression: PASS;
- clean external install of packed artifact: PASS;
- installed `zass check/status/diff`: PASS;
- npm publish dry-run: PASS;
- npm bin normalization warning: absent.

No CR-010 validator semantics were changed by the publication work.

## 6. A4 closure

TRACK D A4 is closed as:

```text
A4 public zass-cli publication
→ PUBLISHED / VERIFIED / CLOSED
```

This closure does not open or modify AISYNC/CrossAI runtime work and does not change CR-010 behavior.

Next TRACK D phase remains A5 — CR-011 `.zass/` machine-readable companion layer.
