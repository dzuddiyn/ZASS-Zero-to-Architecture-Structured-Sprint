# CR-010 v0.4b — `zass diff` Behavioral Contract

**Status:** LOCKED — IMPLEMENTATION NOT STARTED  
**Date:** 2026-10-07  
**Owner:** Project Owner  
**Track:** ZASS TRACK B  
**Scope:** Read-only ZASS-aware working-tree delta against local Git `HEAD`

> **`zass diff` explains what changed in the local ZASS project. It does not decide whether the change is valid.**

## 1. Purpose

`zass status` answers the current factual state.

`zass diff` answers a different question:

> What changed in this ZASS project compared with the local committed baseline?

The command must provide a compact ZASS-aware summary, not merely reprint raw `git diff`.

Validation authority remains with:

```text
zass check
```

`zass diff` must not duplicate validator rules such as Z101 LOCKED-decision drift.

## 2. Command

Initial v0.4b command:

```bash
zass diff
```

v0.4b accepts no arguments.

The only baseline in v0.4b is local Git `HEAD`.

Custom baselines, commit ranges, raw patch output and remote comparison require a later explicit contract.

## 3. Supported surface

v0.4b is limited to the same Full ZASS project surface as v0.4a:

```text
ZASS.md
ACTION_PLAN.md
ARCHITECTURE.md
```

Do not detect or compare ZASSIMPLE, ZASSELECTION, ZASSPILL or other method surfaces in this slice.

## 4. Baseline model

The comparison is:

```text
local Git HEAD
      ↓
current working project state
```

The implementation must establish:

- a local Git repository;
- a valid local `HEAD` commit;
- the project-relative location of the three Full ZASS files.

Unlike the existing LOCKED-drift helper, the diff baseline must be able to read each primary file independently.

A primary file may legitimately be absent from `HEAD` and present now, or present in `HEAD` and absent now.

Therefore these are valid delta cases:

- new uncommitted ZASS project files inside an existing Git repository;
- deletion of a previously committed optional file;
- deletion of `ZASS.md` from the current working tree;
- unchanged files.

GitHub or a remote repository is not required.

## 5. File change states

For each primary file, report exactly one factual state:

- `UNCHANGED`
- `MODIFIED`
- `ADDED`
- `DELETED`

Definitions:

```text
baseline absent + current absent  → UNCHANGED
baseline absent + current present → ADDED
baseline present + current absent → DELETED
baseline present + current present:
    identical content             → UNCHANGED
    different content             → MODIFIED
```

Example:

```text
Files:
  ZASS.md          MODIFIED
  ACTION_PLAN.md   UNCHANGED
  ARCHITECTURE.md  ADDED
```

This is a content comparison for the ZASS project files, not a wrapper around raw `git status`.

## 6. Overall diff state

When a baseline is available:

- `NO_CHANGE` — all three primary files are `UNCHANGED`;
- `CHANGED` — at least one primary file is `ADDED`, `MODIFIED` or `DELETED`.

Example:

```text
Diff:        CHANGED
Baseline:    HEAD
```

Do not use project-health language such as PASS, FAIL, GOOD or BAD.

## 7. ZASS identity delta

When either baseline or current `ZASS.md` is available, compare the canonical ZASS record identity sets using existing parser semantics.

Report:

- canonical IDs added;
- canonical IDs removed.

Example:

```text
ZASS IDs:
  Added:     D-014, R-009
  Removed:   R-003
```

When there is no change:

```text
ZASS IDs:
  Added:     NONE
  Removed:   NONE
```

This reports identity-set changes only.

It must not claim that an unchanged ID has unchanged semantic content.

File-level `ZASS.md MODIFIED` remains the factual signal when content changes without an ID-set change.

## 8. Decision-state delta

Reuse existing `extractDecisionState()` semantics.

Compare the baseline/current sets for:

### LOCKED

- IDs newly declared/recognized as LOCKED;
- IDs no longer declared/recognized as LOCKED.

### SUPERSEDED

- IDs newly declared/recognized as SUPERSEDED;
- IDs no longer declared/recognized as SUPERSEDED.

Example:

```text
Decision state:
  LOCKED added:        D-014
  LOCKED removed:      NONE
  SUPERSEDED added:    D-008
  SUPERSEDED removed:  NONE
```

This is a factual state-set delta.

It is NOT a validation decision.

For example:

```text
LOCKED removed: D-004
```

does not itself say the removal is allowed or forbidden.

`zass check` remains responsible for Z101 and other validation outcomes.

## 9. Declared readiness delta

Reuse existing `extractZassProjectSnapshot()` semantics.

When parseable, compare these declared snapshot fields:

- progress;
- readiness/status text;
- ZASS method/version;
- critical blocker ID set.

Example:

```text
Declared readiness:
  Progress:          70% → 80%
  Status:            READY FOR DRAFT ARCH → DRAFT ARCH UNDER REVIEW
  Version:           0.3.9 → 0.4.0
  Blockers added:    R-009
  Blockers removed:  R-003
```

If a value is absent on one side, render it as `N/A`.

If a scalar value is unchanged, either display `UNCHANGED` or omit the scalar line consistently; implementation must choose one deterministic presentation and test it.

This section reports what the files declare.

It must not infer that the declared progress/status is correct.

## 10. ACTION_PLAN and ARCHITECTURE scope

v0.4b reports file-level delta for:

- `ACTION_PLAN.md`;
- `ARCHITECTURE.md`.

It does not attempt a second semantic parser for these files in v0.4b.

ACTION_PLAN consistency remains the responsibility of existing `zass check` rules.

Architecture semantic interpretation is outside this contract.

## 11. Baseline unavailable

If local Git history or `HEAD` cannot be established:

```text
ZASS DIFF

Diff:        UNAVAILABLE
Baseline:    N/A
Reason:      Local Git HEAD unavailable
```

No comparison result may be invented.

A valid non-Git ZASS project may still use `zass status` and `zass check`; only `zass diff` is unavailable because its v0.4b contract is explicitly Git-baseline based.

## 12. No ZASS surface

If neither baseline nor current state contains `ZASS.md`:

```text
Diff:        NOT_APPLICABLE
Baseline:    HEAD
Reason:      No Full ZASS surface found in baseline or current project state
```

Do not fabricate an empty Full ZASS project.

If `ZASS.md` exists on either side, the diff is applicable even if it is being added or deleted.

## 13. Representative output

Example changed project:

```text
ZASS DIFF

Diff:        CHANGED
Baseline:    HEAD

Files:
  ZASS.md          MODIFIED
  ACTION_PLAN.md   UNCHANGED
  ARCHITECTURE.md  ADDED

ZASS IDs:
  Added:           D-014, R-009
  Removed:         R-003

Decision state:
  LOCKED added:        D-014
  LOCKED removed:      NONE
  SUPERSEDED added:    D-008
  SUPERSEDED removed:  NONE

Declared readiness:
  Progress:          70% → 80%
  Status:            READY FOR DRAFT ARCH → DRAFT ARCH UNDER REVIEW
  Version:           0.3.9 → 0.4.0
  Blockers added:    R-009
  Blockers removed:  R-003
```

Example no-change project:

```text
ZASS DIFF

Diff:        NO_CHANGE
Baseline:    HEAD

Files:
  ZASS.md          UNCHANGED
  ACTION_PLAN.md   UNCHANGED
  ARCHITECTURE.md  UNCHANGED

ZASS IDs:
  Added:           NONE
  Removed:         NONE

Decision state:
  LOCKED added:        NONE
  LOCKED removed:      NONE
  SUPERSEDED added:    NONE
  SUPERSEDED removed:  NONE
```

## 14. Exit codes

v0.4b exit codes are informational-command semantics:

- `0` — comparison was successfully produced, whether `NO_CHANGE` or `CHANGED`;
- `1` — no Full ZASS surface exists in either baseline or current state, so the command is `NOT_APPLICABLE`;
- `2` — comparison cannot be performed because local Git `HEAD` is unavailable, an argument is unsupported, or a CLI/runtime/system error occurs.

A changed project is not an error.

A deleted current `ZASS.md` is not automatically an exit-code 1 if baseline `ZASS.md` exists; the command can still factually report the deletion.

Validation errors are not represented by the `zass diff` exit code.

## 15. Hard guardrails

`zass diff` is READ ONLY.

It must not:

- write or modify project files;
- stage files;
- create commits;
- SAVE semantic state;
- contact GitHub or other remote services;
- run remote diff;
- change architecture;
- judge whether a change should be accepted;
- duplicate Z101 or other validator rules;
- infer progress beyond the explicitly declared snapshot;
- infer current lifecycle stage;
- infer next action;
- display secrets from raw changed content;
- print an unrestricted raw patch.

## 16. Relationship to existing commands

```text
zass status
→ What is true now?

zass diff
→ What changed from local HEAD?

zass check
→ Is the current state valid under ZASS rules?
```

These commands must remain conceptually separate.

A future higher-level UI may compose their results, but the CLI commands retain their own authority boundaries.

## 17. Smallest implementation slice

After this contract is LOCKED, implementation should remain bounded to:

1. add a generic local baseline-file reader for the three primary files;
2. add `diff.js`;
3. compare file contents deterministically;
4. reuse `extractZassProjectSnapshot()`;
5. reuse `extractDecisionState()`;
6. compute set deltas;
7. add `formatDiff()`;
8. wire `zass diff` with no arguments;
9. add focused tests.

Do not add custom baselines or raw patch mode in this slice.

## 18. Acceptance requirements

Before v0.4b implementation may be called PASS, tests must cover:

- all four file states: UNCHANGED / MODIFIED / ADDED / DELETED;
- overall NO_CHANGE and CHANGED;
- canonical ID added/removed;
- LOCKED added/removed;
- SUPERSEDED added/removed;
- declared readiness scalar changes;
- critical blocker added/removed;
- baseline missing one or more primary files;
- current missing one or more primary files;
- current `ZASS.md` deleted while baseline has it;
- newly added `ZASS.md` when HEAD did not contain it;
- local Git/HEAD unavailable;
- no ZASS surface on either side;
- read-only behavior;
- argument rejection;
- existing `zass check` and `zass status` regressions remain PASS.

The later CR-010 real-project field test remains a separate gate after v0.4b implementation.

## 19. Deferred

Not part of v0.4b:

- custom `--baseline`;
- commit-to-commit ranges;
- branch comparisons;
- remote Git/GitHub comparison;
- raw unified patch mode;
- line-level semantic explanations;
- generic content-change detection for every ZASS record type;
- ZASSIMPLE/ZASSELECTION/ZASSPILL diff;
- ACTION_PLAN semantic diff beyond existing validator behavior;
- ARCHITECTURE semantic diff;
- npm publication;
- Project Bootstrap Core implementation.
