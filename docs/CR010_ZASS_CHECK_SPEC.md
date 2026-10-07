# CR-010 — `zass check` Implementation Specification

**Status:** CLOSED — v0.1 through v0.4 IMPLEMENTED / FIELD-VALIDATED — zass-cli v0.4.0
**Date:** 2026-09-30  
**Owner:** Project Owner  
**Scope:** First productized validator for ZASS

> Build one small validator first. Reuse the same engine locally and in GitHub Actions.

## 1. MVP command contract

Initial public command:

```bash
zass check
```

Input:

- current project directory;
- `ZASS.md` required;
- `ACTION_PLAN.md` optional;
- `ARCHITECTURE.md` optional.

Output classes:

- `PASS`
- `WARNING`
- `ERROR`

Exit codes:

- `0` — validation passes; warnings may exist;
- `1` — one or more validation errors;
- `2` — CLI/runtime/system error.

The check engine is stable through v0.3. CR-010 v0.4a `zass status` and v0.4b `zass diff` are now implemented and real-project field-validated under their locked contracts. The explicit CR-010 STOP/REVIEW gate remains before closure.

## 2. Initial repository structure

```text
cli/
├── package.json
├── bin/
│   └── zass.js
├── src/
│   ├── check.js
│   ├── discover.js
│   ├── parser.js
│   └── rules/
└── test/
    └── fixtures/
```

Implementation language: Node.js.

Local development starts with `npm link`. Publishing to npm is explicitly deferred until the validator is proven on real projects.

## 3. Locked build sequence

### Step 1 — Bootstrap the CLI

Create `cli/`, `package.json`, and `bin/zass.js`.

Acceptance:

```bash
zass check
```

prints a minimal `ZASS CHECK` response locally after `npm link`.

### Step 2 — File discovery

Detect:

- `ZASS.md` — required;
- `ACTION_PLAN.md` — optional;
- `ARCHITECTURE.md` — optional.

Missing `ZASS.md` is an error. Missing optional files is not an error.

### Step 3 — MVP validation rules

Implement one rule at a time:

1. duplicate IDs;
2. malformed IDs;
3. broken local Markdown references;
4. Evidence Confidence pairing rules;
5. obvious secret/sensitive-value pattern warnings.

Do not check remote URLs in the first MVP.

### Step 4 — Test fixtures

Create fixtures such as:

```text
cli/test/fixtures/
├── valid/
├── duplicate-id/
├── malformed-id/
├── missing-evidence/
├── broken-reference/
└── possible-secret/
```

Each rule must have at least one passing and one failing fixture before the rule is considered stable.

### Step 5 — Git-aware LOCKED drift

After the current-file MVP is stable, compare the working tree with Git `HEAD` to detect silent modification of LOCKED decisions.

Example failure:

```text
ERROR Z101
LOCKED decision D-004 changed without a superseding decision.
```

This is Phase 2, not part of the first parser MVP.

### Step 6 — ACTION_PLAN consistency

After Git-aware checks are stable, validate consistency such as:

- ZASS readiness snapshot versus ACTION_PLAN snapshot;
- stale architecture/readiness references.

This is Phase 3.

### Step 7 — GitHub Actions

Only after local `zass check` is stable:

```text
Local PC ─────────┐
                  ├── zass check engine
GitHub Action ────┘
```

GitHub Actions must call the same validator. It must not maintain a duplicate rule implementation.

## 4. MVP rule behavior

### Duplicate ID

Z001 validates **primary record-definition positions**, not every formatted ID mention.

Primary definitions currently include canonical record headings and ID-first table rows. Bold list bullets may be summaries, indexes, ledgers, or D→L references in real Full-ZASS project files, so they are not treated as duplicate record definitions merely because they repeat an existing ID. LOCKED authority remains validated separately by the explicit decision-state parser.

Example:

```text
## D-004 — First definition
...
## D-004 — Duplicate definition
```

Result:

```text
ERROR Z001 — Duplicate ID: D-004
```

### Malformed ID

Canonical examples include:

```text
I-001
Q-001
R-001
E-001
D-001
L-001
AC-001
MR-001
```

Malformed forms such as `D004`, `D_004`, or `D-4` may be reported when they occur in an ID position the parser recognizes. Avoid broad regex rules that create obvious false positives in ordinary prose.

### Broken local reference

Check relative Markdown/file references that point inside the project. Z003 covers ordinary inline links plus reference-style links whose local target is defined in the same Markdown file, including explicit/collapsed and shortcut usages when a matching definition exists. Remote HTTP/HTTPS link checking is deferred.

### Evidence Confidence pairing

In Full ZASS, Evidence Confidence must be present when:

1. a real/current `ZERO → ARCHITECTURE` assessment is shown;
2. `DRAFT ARCH` readiness is evaluated;
3. `BUILD ARCHITECTURE` is run;
4. architecture is `CONFIRMED` while validation/experiments remain open.

Static documentation examples do not trigger this requirement.

### Possible secret warning

Warn on high-signal patterns such as likely API tokens or private-key blocks. This is a defensive warning, not proof that a detected value is a valid secret.

## 5. Deferred features

Not part of the first MVP:

- npm publication;
- `zass status`;
- `zass diff`;
- remote-link validation;
- mandatory `.zass/schema.yml`;
- Git-aware LOCKED drift;
- ACTION_PLAN snapshot drift;
- GitHub Action;
- dashboards or SaaS services.

## 6. Implementation phases

```text
v0.1  current-file validator
      ├── discovery
      ├── IDs
      ├── local references
      ├── Evidence Confidence
      └── secret warnings

v0.2  Git-aware LOCKED drift

v0.3  ACTION_PLAN consistency — IMPLEMENTED / FIELD-VALIDATED

v0.4a `zass status` — IMPLEMENTED / FIELD-VALIDATED

v0.4b `zass diff` — IMPLEMENTED / FIELD-VALIDATED
```

## 7. Stop rule

Do not add the next phase until the current phase:

- runs locally;
- has passing/failing fixtures;
- produces understandable output;
- has been tested against at least one real ZASS project without unacceptable false positives.

## 8. Implementation handoff

This specification is intentionally suitable for implementation in ChatGPT Work or another coding agent.

The agent should:

1. read this file and the current Full ZASS method;
2. implement only the current phase;
3. run tests locally;
4. show the diff and test result;
5. avoid npm publication or GitHub Action setup unless that phase has been explicitly authorized.


## 9. v0.1 implementation receipt

Implemented under `cli/` on 2026-09-30 without changing Full ZASS method semantics.

Verification performed before commit:

- Node.js built-in test runner: **10/10 tests passed**;
- syntax checks passed for CLI, source, rules, and tests;
- `npm link`: **worked** in the implementation environment;
- linked `zass check` against `examples/01-small-farm-planner`: **0 errors, 0 warnings**;
- secret-warning output redacts the matching value;
- no npm publication, GitHub Action, `zass status`, `zass diff`, Git-aware LOCKED drift, or ACTION_PLAN snapshot drift was added.

CR-010 v0.2 is **implemented**. Its locked specification is in [`CR010_V02_LOCKED_DRIFT_SPEC.md`](CR010_V02_LOCKED_DRIFT_SPEC.md).

CR-010 v0.3 is now **implemented and field-validated**. Its locked specification and implementation receipt are in [`CR010_V03_ACTION_PLAN_CONSISTENCY_SPEC.md`](CR010_V03_ACTION_PLAN_CONSISTENCY_SPEC.md).


CR-010 v0.4a is now behaviorally LOCKED. Its specification is in [`CR010_V04A_ZASS_STATUS_SPEC.md`](CR010_V04A_ZASS_STATUS_SPEC.md).

The v0.4a contract is read-only and factual: Full ZASS detection, primary file presence, reuse of the existing validator summary, compact local Git working state, and established exit-code semantics. It explicitly prohibits progress/lifecycle/next-action inference and does not implement `zass diff`.


CR-010 v0.4b is now behaviorally LOCKED. Its specification is in [`CR010_V04B_ZASS_DIFF_SPEC.md`](CR010_V04B_ZASS_DIFF_SPEC.md).

The v0.4b contract defines a read-only ZASS-aware working-tree delta against local `HEAD`: primary-file ADDED/MODIFIED/DELETED/UNCHANGED states, canonical ZASS ID set changes, LOCKED/SUPERSEDED decision-state deltas, and declared readiness/blocker changes using existing parser semantics. It does not validate the change; `zass check` retains that authority.


CR-010 v0.4 field validation is **PASS**. See [`CR010_V04_REAL_PROJECT_FIELD_TEST.md`](CR010_V04_REAL_PROJECT_FIELD_TEST.md).

The field gate included clean real-project behavior, deliberate LOCKED-decision and readiness-drift mutations, and a Windows EOL false-positive discovered and corrected before the gate was accepted.

CR-010 STOP/REVIEW subsequently PASSED and CR-010 is CLOSED. See [`CR010_STOP_REVIEW_CLOSURE.md`](CR010_STOP_REVIEW_CLOSURE.md).


## 10. CR-010 closure

CR-010 is **CLOSED** at `zass-cli v0.4.0`.

The explicit STOP/REVIEW gate passed after implementation, CI, real-project field validation, the Windows EOL correction, and final package/documentation reconciliation.

Closure receipt: [`CR010_STOP_REVIEW_CLOSURE.md`](CR010_STOP_REVIEW_CLOSURE.md).

Future npm bootstrap/onboarding and the shared ZASS Project Bootstrap Core are separate TRACK B work, not CR-010.
