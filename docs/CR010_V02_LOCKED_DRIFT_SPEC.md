# CR-010 v0.2 — Git-aware LOCKED Drift Specification

**Status:** IMPLEMENTED — FIELD GATE PASSED (CLI v0.2.2)
**Date:** 2026-10-01  
**Owner:** Project Owner  
**Depends on:** CR-010 v0.1 `zass check`

> Detect silent changes to LOCKED decisions by comparing the current `ZASS.md` with the version stored at Git `HEAD`.

## 1. Goal

Extend the existing `zass check` command without adding a new user command.

```text
git HEAD:ZASS.md
        │
        ▼
parse LOCKED decisions
        │
        │ compare
        ▼
current ZASS.md
        │
        ▼
detect LOCKED drift
```

The validator must remain deterministic. It must not use AI semantic similarity to decide whether a LOCKED decision "means the same thing."

## 2. Step 0 — v0.1 field gate

Before implementing v0.2, run the existing v0.1 validator against at least **1–2 real ZASS projects**.

Proceed only if:

- current v0.1 output is understandable;
- no unacceptable false-positive pattern is discovered;
- any v0.1 defect found is fixed or explicitly accepted first.

Locking this v0.2 plan does **not** automatically authorize skipping this gate.

## 3. Git discovery

Add a small Git helper, for example:

```text
cli/src/git.js
```

Use Git read-only commands such as:

```bash
git rev-parse --show-toplevel
git rev-parse HEAD
```

Do not checkout, reset, stash, clean, or modify the working tree.

### Z100 — Git history unavailable

If the project is not a Git repository, or no usable HEAD exists:

```text
WARNING Z100 — Git history unavailable; LOCKED drift check skipped
```

The current-file v0.1 checks must still run.

Z100 alone must not make `zass check` fail.

## 4. Read historical ZASS state

Read the committed version using:

```bash
git show HEAD:ZASS.md
```

Compare it with the current working-tree `ZASS.md`.

Do not create temporary checkouts.

If `HEAD:ZASS.md` does not exist because the project has not committed ZASS yet, report a conservative warning/skip rather than a runtime crash.

## 5. Parse LOCKED decisions

Extract LOCKED decision records from both HEAD and current state.

The parser should support canonical Full-ZASS decision forms used by real projects, including:

- `D-xxx` decision records whose explicit Status contains a supported state token such as `LOCKED` or compound `DECIDED / LOCKED`;
- explicit `LOCKED DECISIONS` or `LOCKED RECORDS` sections/lists that reference `D-xxx`;
- `L-xxx / D-xxx — LOCKED`, `L-xxx → D-xxx`, and explicit `L-xxx: Locks D-xxx` records inside those authority sections.

State recognition must remain contextual. Ordinary prose or a Status line describing other decision IDs must not silently LOCK the current record.

The validator must correlate LOCKED state to the underlying decision ID.

If a record cannot be parsed reliably, prefer an explicit warning/skip over guessing.

## 6. Normalize before comparing

Do not compare raw Markdown byte-for-byte.

Normalize only presentation differences such as:

- CRLF vs LF;
- leading/trailing blank space;
- repeated insignificant whitespace;
- Markdown decoration that does not alter the decision fields.

The comparison must preserve substantive fields such as:

- decision ID and semantic heading/title;
- decision statement;
- explicit state;
- decision drivers/reason where they are part of the canonical record;
- consequences/revisit trigger when present.

The heading/title is authority-bearing because it is part of the visible decision record. Presentation-only title formatting may be normalized, but a semantic title change must trigger the same Z101 protection as a substantive body change.

Do not normalize away wording that could change the meaning.

## 7. Z101 — silent LOCKED drift

Raise an error when a decision that was LOCKED at HEAD is substantively changed or removed from the current project without an explicit superseding path.

Examples:

```text
ERROR Z101 — LOCKED decision modified: D-004
```

```text
ERROR Z101 — LOCKED decision removed: D-004
```

A Z101 error returns normal validation exit code `1`.

The output should identify the decision ID and a concise summary of what changed. Do not dump an unnecessarily large decision block.

## 8. Explicit superseding path

v0.2 may recognize an explicit relation:

```text
Supersedes: D-004
```

as a deterministic signal that a **new decision** replaces an older LOCKED decision.

Rules:

1. Create a new decision ID for the replacement.
2. The new record explicitly names the old decision via `Supersedes: D-xxx`.
3. Preserve the old decision record/history; do not delete its substantive content.
4. The old record may be marked `SUPERSEDED` only when the explicit relation exists.
5. Without that explicit relation, changing/removing the old LOCKED decision remains Z101.

This is a validator relation convention for v0.2; it is not a new ZASS command and does not create owner approval by itself.

## 9. Automated Git tests

Do not commit nested `.git/` fixture directories.

Tests should create temporary Git repositories during the test run:

```text
temporary directory
    ↓
git init
    ↓
write ZASS.md
    ↓
git add + git commit
    ↓
modify working ZASS.md
    ↓
run zass check
```

Minimum test cases:

- LOCKED decision unchanged → PASS;
- formatting-only change → PASS;
- LOCKED decision modified → Z101 ERROR;
- LOCKED decision removed → Z101 ERROR;
- explicit superseding decision → PASS for drift relation;
- non-Git directory → Z100 WARNING, v0.1 checks still run;
- Git repository with no committed `ZASS.md` → warning/skip, no crash.

## 10. Implementation order

```text
Step 0  field-test v0.1 on 1–2 real projects
Step 1  add Git discovery
Step 2  read HEAD:ZASS.md
Step 3  extract LOCKED decisions
Step 4  normalize decision records
Step 5  compare HEAD vs working tree
Step 6  implement Z100 / Z101
Step 7  explicit Supersedes handling
Step 8  temporary-Git automated tests
Step 9  test on real ZASS projects
Step 10 STOP and review
```

## 11. Explicitly out of scope

Do not add in v0.2:

- `zass status`;
- `zass diff`;
- ACTION_PLAN snapshot consistency;
- GitHub Actions;
- npm publication;
- remote URL checking;
- mandatory `.zass/schema.yml`;
- AI/LLM semantic comparison;
- automatic rewriting or repair of LOCKED decisions.

## 12. Stop rule

Do not move to CR-010 v0.3 until v0.2:

- distinguishes formatting-only changes from substantive drift reliably;
- passes all temporary-Git fixtures;
- has been run on real ZASS projects;
- does not produce unacceptable false positives;
- never modifies the user's working tree while checking.

If formatting-vs-substance cannot be distinguished reliably, stop and improve the parser before proceeding.

## 13. v0.2 implementation receipt

Implemented under `cli/` on 2026-10-01 without changing Full ZASS method semantics.

Verification before commit:

- Node.js syntax checks passed for the Git helper, parser, drift rule, check engine and Git-drift tests;
- Node.js built-in test runner: **17/17 tests passed**;
- temporary-Git tests cover unchanged LOCKED decisions, formatting-only changes, modification, removal, explicit superseding, non-Git projects, and Git HEAD without committed `ZASS.md`;
- `npm link` worked with CLI package version **0.2.0**;
- linked `zass check` returned **0 errors / 0 warnings** at the ZASS repository root;
- linked `zass check` returned **0 errors / 0 warnings** against `examples/01-small-farm-planner`, including its canonical LOCKED decision ledger;
- v0.2 performs read-only Git inspection and does not checkout, reset, stash, clean, or repair project files.

### v0.2.2 real-project field compatibility proof — 2026-10-03

Field testing against the real `dzuddiyn/Kerani_Core` project exposed two compatibility gaps and one genuine project-data defect:

- Z001 originally treated bold summary/index/ledger bullets as additional record definitions, creating 38 false duplicate errors. v0.2.2 restricts Z001 primary definitions to heading/table definition positions while keeping authority parsing separate.
- The real `D-037` state `Status: DECIDED / LOCKED` was not recognized by the narrower status parser. v0.2.2 recognizes deterministic slash-separated explicit state tokens.
- A remaining duplicate `R-035` was a genuine project defect, not a validator false positive; the later SuperBasic risk was corrected to `R-040` in Kerani_Core.

Final field proof against corrected Kerani_Core `main`:
- unchanged project: **0 errors / 0 warnings**;
- deliberate semantic mutation of LOCKED `D-037`: **Z101 ERROR**;
- automated CLI suite after patch: **36/36 PASS**.

CR-010 v0.2 field gate is therefore **PASSED**.

CR-010 v0.3 is **not started**.

## 14. Implementation authority

This file originally locked the **plan and scope**. The plan is now implemented and verified locally.

CR-010 v0.2 is **IMPLEMENTED**. Do not start v0.3 automatically; review v0.2 field behavior first.
