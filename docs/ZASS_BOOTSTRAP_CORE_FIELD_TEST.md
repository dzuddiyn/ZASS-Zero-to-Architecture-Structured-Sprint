# ZASS Project Bootstrap Core v0.1 — Field Test Receipt

**Status:** PASS — HISTORICAL FIELD TEST / STOP-REVIEW LATER PASSED  
**Date:** 2026-10-07  
**Owner:** Project Owner  
**Core implementation under test:** `87b2a21e8fe05a9568811fe26399708eb596aca7`

## 1. Field-test scope

The locked field gate required at least:

- one ZASSPILL project;
- one ZASSELECTION project;
- one ZASSIMPLE project;
- one Full-ZASS project;
- both English and Bahasa Melayu represented;
- Windows local materialization;
- at least one second consumer-style adapter/snapshot simulation distinct from the CLI filesystem path;
- evidence that generated artifacts are understandable;
- evidence that Core/consumer boundaries remain truthful.

This receipt records that gate only.

It does not freeze the stable external Core API and does not integrate CrossAI.

## 2. Environment

Field testing used Windows on `LAPTOP-DBGSGIEI`.

A temporary clone of the repository was created under the Windows temporary directory at exact main commit:

```text
87b2a21e8fe05a9568811fe26399708eb596aca7
```

The temporary clone was used only for disposable bootstrap projects and adapter simulations.

## 3. CLI/filesystem materialization cases

Four real local bootstrap projects were generated through `create-zass`.

### ZASSPILL / English

Input:

```text
projectName = spill-en
method      = zasspill
language    = en
```

Materialized:

```text
spill-en/
├── ZASSPILL_EN.md
├── README.md
└── .gitignore
```

Receipt truthfully reported:

```text
Git:      not initialized
GitHub:   not connected
CrossAI:  not registered
```

README:

- identified ZASSPILL;
- identified English;
- named `ZASSPILL_EN.md` as the active method file;
- provided one clear start action;
- included the secret/data-safety warning;
- contained no Git/GitHub/CrossAI/Drive state claim.

### ZASSELECTION / Bahasa Melayu

Input:

```text
projectName = selection-my
method      = zasselection
language    = my
```

Materialized:

```text
selection-my/
├── ZASSELECTION_MY.md
├── README.md
└── .gitignore
```

README was correctly localized in Bahasa Melayu and remained consumer-neutral.

### ZASSIMPLE / English

Input:

```text
projectName = simple-en
method      = zassimple
language    = en
```

Materialized:

```text
simple-en/
├── ZASSIMPLE_EN.md
├── README.md
└── .gitignore
```

README was understandable, method-aware, and consumer-neutral.

### Full ZASS / Bahasa Melayu

Input:

```text
projectName = full-my
method      = zass
language    = my
```

Materialized:

```text
full-my/
├── ZASS.md
├── README.md
└── .gitignore
```

The generated authority filename remained canonical `ZASS.md` while the method content was Bahasa Melayu.

This preserves current local validator discovery behavior.

## 4. Method-content checks

The generated method files were inspected directly.

Observed headers confirmed the intended method/language pairing:

```text
spill-en
→ ZASSPILL / English

selection-my
→ ZASSELECTION / Malay method

simple-en
→ ZASSIMPLE / English

full-my
→ Full ZASS / Bahasa Melayu
```

The terminal display showed ordinary Windows console rendering noise for some Unicode punctuation/emoji, but the bundled-template synchronization tests already prove byte-for-byte template equality with the canonical repository method files. No bootstrap content corruption was observed.

## 5. Full-ZASS compatibility check

The generated `full-my/ZASS.md` was checked with the existing local validator.

Result:

```text
PASS Z000 — ZASS.md found
PASS Z001 — No duplicate record IDs found
PASS Z002 — No malformed record IDs found
PASS Z003 — Local Markdown references resolve
PASS Z004 — No current architecture assessment requires Evidence Confidence
PASS Z005 — No high-signal secret patterns detected
WARNING Z100 — Baseline HEAD has no committed ZASS.md; LOCKED drift check skipped
PASS Z200 — ACTION_PLAN.md not present; consistency checks skipped

0 error(s), 1 warning(s)
exit 0
```

The warning is expected because the disposable generated project was not a Git repository with a committed baseline.

This confirms that the Full-ZASS bootstrap authority filename remains compatible with current `zass check` discovery.

## 6. Second-consumer-style adapter

A second consumer-style simulation was run without the create-zass filesystem path.

The adapter:

1. called `buildBootstrapPlan(...)`;
2. wrote the plan into an in-memory `Map`;
3. read the artifacts back from that in-memory store;
4. constructed a snapshot;
5. called `verifyBootstrapSnapshot(...)`.

Two representative cases were used:

```text
memory-selection
method   = zasselection
language = en

memory-full-my
method   = zass
language = my
```

For both cases:

```text
deterministic = true
verified      = true
```

Observed plan paths were exactly:

```text
[selected method file]
README.md
.gitignore
```

For Full ZASS / Bahasa Melayu:

```text
methodFile = ZASS.md
```

## 7. Tamper detection

The in-memory consumer simulation deliberately changed the materialized method content before verification.

Result:

```text
tamperRejected = true
diagnostic     = B205 — Materialized content mismatch
```

This proves that the Core does not merely trust a consumer's claim that materialization succeeded.

The read-back snapshot must match the approved plan.

## 8. Consumer-boundary truthfulness

Field evidence confirms the intended separation.

### Durable generated README

The README contains only shared project meaning:

- project name;
- method;
- language;
- active method file;
- one start action;
- safety warning.

It does not claim consumer-specific state.

### create-zass receipt

The CLI receipt contains local consumer facts:

```text
Git not initialized
GitHub not connected
CrossAI not registered
```

This state is correctly kept outside the durable common README.

### Core

The Core creates a deterministic plan and verifies materialized artifacts.

It does not:

- create a local directory;
- initialize Git;
- create/link GitHub;
- register CrossAI;
- call Drive;
- infer lifecycle progress.

The field behavior therefore matches the locked ownership boundary.

## 9. Test-harness note

The first second-consumer harness attempt used the wrong relative import path from the temporary `_field/` directory.

Node reported `ERR_MODULE_NOT_FOUND`.

The harness path was corrected from:

```text
./bootstrap-core/src/index.js
```

to:

```text
../bootstrap-core/src/index.js
```

and the simulation then passed.

No product code or Bootstrap Core behavior was changed. This was a disposable field-script path error, not a Core defect.

## 10. Field-test verdict

```text
ZASSPILL project                     PASS
ZASSELECTION project                 PASS
ZASSIMPLE project                    PASS
Full-ZASS project                    PASS
English represented                  PASS
Bahasa Melayu represented            PASS
Windows local materialization        PASS
second consumer-style adapter        PASS
deterministic plan                    PASS
snapshot verification                PASS
tamper rejection                      PASS
README understandability              PASS
consumer-neutral durable artifacts    PASS
CLI-specific factual receipt          PASS
Full-ZASS zass-check compatibility    PASS
```

**Bootstrap Core v0.1 field test = PASS.**

No field defect requiring a corrective implementation patch was found.

## 11. Next gate

The stable external Core contract is still NOT frozen.

Next:

```text
STOP / REVIEW
→ decide whether any corrective work is required
→ if PASS, freeze stable Bootstrap Core contract
```

CrossAI consumption and npm publication remain separately gated.
