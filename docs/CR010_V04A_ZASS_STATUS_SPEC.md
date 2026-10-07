# CR-010 v0.4a — `zass status` Behavioral Contract

**Status:** LOCKED — IMPLEMENTATION NOT STARTED  
**Date:** 2026-10-07  
**Owner:** Project Owner  
**Track:** ZASS TRACK B  
**Scope:** Read-only factual local project status for Full ZASS projects

> **`zass status` reports what can be proven from the current local project state. It does not infer what the project should be doing next.**

## 1. Purpose

`zass check` already provides detailed validation results.

`zass status` has a different purpose: provide a compact, deterministic factual snapshot answering:

- is this a detectable Full ZASS project;
- which primary ZASS files are present;
- what is the current validator summary;
- is the local Git working state clean, changed, or unavailable;
- what local baseline is relevant where it can be proven.

It must not become a project-management inference engine.

## 2. Command

Initial v0.4a command:

```bash
zass status
```

v0.4a accepts no command arguments.

Additional arguments/options require a later explicit contract change.

## 3. Supported surface

v0.4a recognizes only the existing Full ZASS CLI surface:

```text
ZASS.md
ACTION_PLAN.md
ARCHITECTURE.md
```

When `ZASS.md` is found:

```text
Project: DETECTED
Surface: FULL ZASS
```

When `ZASS.md` is not found:

```text
Project: NOT_DETECTED
```

Do not infer ZASSIMPLE, ZASSELECTION, ZASSPILL, or other method surfaces in v0.4a. Their detection requires separate design.

## 4. File presence

Report the three existing project files factually:

```text
Files:
  ZASS.md          FOUND
  ACTION_PLAN.md   FOUND
  ARCHITECTURE.md  FOUND
```

Allowed states:

- `FOUND`
- `MISSING`

`ZASS.md` remains required by the existing CLI contract.

`ACTION_PLAN.md` and `ARCHITECTURE.md` remain optional; their absence alone is not a validation error.

## 5. Validation summary

`zass status` must reuse the existing `zass check` validation engine. It must not create a second implementation of validator rules.

Summary states:

- `PASS` — zero errors and zero warnings;
- `WARNING` — zero errors and one or more warnings;
- `ERROR` — one or more validation errors.

Example:

```text
Validation:  PASS
Errors:      0
Warnings:    0
```

or:

```text
Validation:  ERROR
Errors:      2
Warnings:    1
```

Detailed rule output remains the responsibility of `zass check`.

## 6. Git working state

v0.4a reports one compact local Git state:

- `CLEAN` — Git is available for the project and the working tree has no tracked or untracked changes;
- `CHANGED` — Git is available and modified, added, deleted, renamed, or untracked working-tree content exists;
- `UNKNOWN` — Git repository/history/state cannot be established reliably.

Example:

```text
Git:         CHANGED
Baseline:    HEAD
```

If Git is unavailable:

```text
Git:         UNKNOWN
Baseline:    N/A
```

`Git: UNKNOWN` alone must not cause exit code 1.

A valid ZASS project does not require Git or GitHub.

## 7. Baseline

v0.4a exposes only:

- `HEAD` when the current local Git baseline is available;
- `N/A` when it is not.

v0.4a does not accept a custom baseline argument.

Custom-baseline behavior remains outside this contract.

## 8. Output contract

Representative detected-project output:

```text
ZASS STATUS

Project:     DETECTED
Surface:     FULL ZASS

Files:
  ZASS.md          FOUND
  ACTION_PLAN.md   FOUND
  ARCHITECTURE.md  FOUND

Validation:  PASS
Errors:      0
Warnings:    0

Git:         CHANGED
Baseline:    HEAD
```

Representative non-Git output:

```text
ZASS STATUS

Project:     DETECTED
Surface:     FULL ZASS

Files:
  ZASS.md          FOUND
  ACTION_PLAN.md   MISSING
  ARCHITECTURE.md  MISSING

Validation:  WARNING
Errors:      0
Warnings:    1

Git:         UNKNOWN
Baseline:    N/A
```

Exact spacing may vary during implementation, but labels and semantic states must remain deterministic and understandable.

## 9. Exit codes

Reuse the established CLI exit-code meaning:

- `0` — project detected and no validation errors; warnings are permitted;
- `1` — required `ZASS.md` is missing or one or more validation errors exist;
- `2` — CLI/runtime/system error.

Git `UNKNOWN` does not by itself produce exit code 1.

## 10. Hard guardrails

`zass status` is READ ONLY.

It must not:

- write or modify project files;
- SAVE semantic state;
- create Git commits;
- stage files;
- contact remote services;
- validate remote URLs;
- modify architecture;
- infer progress percentage;
- infer current lifecycle stage;
- infer next action;
- invent project health/readiness beyond the factual validator summary.

It must not silently turn operational uncertainty into a positive state.

## 11. Reuse boundary

Preferred implementation composition:

```text
             existing local core
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
     zass check          zass status
 detailed results       compact summary
```

v0.4a should reuse:

- existing project discovery;
- existing `runCheck()` validator semantics;
- existing local Git utilities where appropriate.

Only deterministic Git working-state reading and status formatting should be added as new behavior where required.

## 12. Smallest implementation slice

After this contract is LOCKED, implementation should remain bounded to:

1. add a status module;
2. reuse `discoverProject()`;
3. reuse `runCheck()`;
4. add deterministic local Git working-state detection;
5. add `formatStatus()`;
6. wire `zass status` into the CLI;
7. add focused tests.

Do not implement `zass diff` in the v0.4a slice.

## 13. Acceptance requirements

Before v0.4a implementation may be called PASS:

- command runs locally;
- existing `zass check` behavior remains unchanged;
- tests cover DETECTED and NOT_DETECTED;
- tests cover FOUND/MISSING optional files;
- tests cover PASS/WARNING/ERROR validation summaries;
- tests cover Git CLEAN/CHANGED/UNKNOWN;
- tests prove Git UNKNOWN alone does not fail the command;
- tests prove the command performs no project mutation;
- at least one real ZASS project is used at the later CR-010 v0.4 field-test stage.

## 14. Deferred to later v0.4 work

Not part of v0.4a:

- `zass diff`;
- ZASSIMPLE/ZASSELECTION/ZASSPILL surface detection;
- custom baseline arguments;
- remote repository status;
- progress/stage inference;
- next-action recommendation;
- dashboards or SaaS state;
- npm publication;
- Project Bootstrap Core implementation.
