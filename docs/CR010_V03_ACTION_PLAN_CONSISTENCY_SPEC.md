# CR-010 v0.3 — ACTION_PLAN Consistency Specification

**Status:** LOCKED IMPLEMENTATION PLAN — NOT STARTED
**Date:** 2026-10-01
**Owner:** Project Owner
**Depends on:** CR-010 v0.2 `zass check`

> Validate that `ACTION_PLAN.md` remains a faithful execution snapshot of authoritative ZASS project state without creating a second decision authority.

## 1. Goal

Extend the existing `zass check` command without adding a new user command.

```text
ZASS.md
   │
   ├─ Architecture Readiness
   ├─ Status
   ├─ Critical blockers
   └─ ZASS record IDs / experiments
           │
           ▼
        compare
           │
           ▼
ACTION_PLAN.md
   ├─ ZERO → ARCHITECTURE snapshot
   ├─ Status
   ├─ Source/version
   ├─ Critical blockers
   └─ Related ZASS IDs / E-xxx
```

`ZASS.md` remains authoritative. `ACTION_PLAN.md` is an execution/progress snapshot and must not become a second decision ledger.

## 2. Step 0 — v0.2 field gate

Before implementing v0.3, run the current v0.2 validator against at least one real ZASS project that contains LOCKED decisions.

Proceed only if:

- Z101 does not create unacceptable false positives;
- ordinary formatting changes are ignored as intended;
- explicit `Supersedes: D-xxx` behavior is understandable;
- any v0.2 parser defect found is fixed or explicitly accepted first.

Locking this plan does not bypass that field gate.

## 3. Scope

v0.3 adds ACTION_PLAN consistency checks only.

Included:

- detect `ACTION_PLAN.md` when present;
- parse its ZERO → ARCHITECTURE snapshot;
- compare readiness progress with ZASS;
- compare readiness status with ZASS;
- validate the ACTION_PLAN source/version reference;
- detect stale ACTION_PLAN snapshot state;
- validate explicit references to ZASS record IDs and experiment IDs;
- conservatively flag blocker inconsistencies;
- optionally warn about likely atomic-sync drift.

Explicitly out of scope:

- `zass status`;
- `zass diff`;
- task-progress scoring;
- automatic ACTION_PLAN repair;
- GitHub Actions;
- npm publication;
- remote URL checking;
- mandatory `.zass/schema.yml`;
- AI/LLM semantic comparison.

## 4. ACTION_PLAN remains optional

If no `ACTION_PLAN.md` exists, v0.3 must not fail the project.

Expected behavior:

```text
PASS Z200 — ACTION_PLAN.md not present; consistency checks skipped
```

or equivalent concise PASS/skip wording.

## 5. Parse ACTION_PLAN snapshot

Parse the canonical snapshot block:

```markdown
## 🏗️ ZERO → ARCHITECTURE SNAPSHOT

- **Progress:** [███████░░░] 70%
- **Status:** READY FOR DRAFT ARCH
- **Source:** `ZASS.md` v0.3.9 — same Git commit
- **Last assessed:** 2026-10-01
- **Next threshold:** 85% — DRAFT ARCH UNDER REVIEW
```

Normalize into deterministic fields such as:

```text
progress
status
source file
source version
same-commit claim
critical blockers
related ZASS IDs
```

Do not infer unstated values.

## 6. Parse authoritative ZASS project state

Extract the current explicit project-state values from `ZASS.md`.

At minimum:

- ZERO → ARCHITECTURE progress percentage when explicitly present;
- corresponding readiness status when explicitly present;
- current ZASS version;
- explicit ZASS IDs referenced by ACTION_PLAN;
- explicitly identified critical blockers where parseable.

Do not recompute Architecture Readiness from the entire method. v0.3 compares an existing project-state snapshot; it does not implement a second readiness calculator.

## 7. Z201 — readiness progress mismatch

When both files explicitly contain current readiness progress and they disagree:

```text
ERROR Z201 — ACTION_PLAN readiness snapshot is stale
```

Example:

```text
ZASS.md:       85%
ACTION_PLAN:   70%
```

Z201 returns validation exit code `1`.

## 8. Z202 — readiness status mismatch

When both files explicitly contain current readiness status and they disagree:

```text
ERROR Z202 — ACTION_PLAN readiness status does not match ZASS
```

Use deterministic text matching against the canonical readiness labels.

Do not aggressively infer `DRAFT ARCH UNDER REVIEW` from percentage alone because that state also requires a real draft under review.

If the state cannot be determined reliably, prefer a warning/skip over guessing.

## 9. Z203 — stale ZASS source/version

The ACTION_PLAN snapshot may declare a source such as:

```text
Source: ZASS.md v0.3.9 — same Git commit
```

If the explicit ACTION_PLAN ZASS version differs from the actual ZASS version:

```text
ERROR Z203 — ACTION_PLAN references stale ZASS version
```

This check is deterministic and should not depend on semantic interpretation.

## 10. Z204 — missing referenced ZASS ID

When ACTION_PLAN explicitly references ZASS IDs in fields such as `Related ZASS IDs`, `Related ZASS`, experiment links, or equivalent canonical fields, verify that those IDs exist in `ZASS.md`.

Relevant ID families may include:

```text
Q-xxx
R-xxx
D-xxx
L-xxx
E-xxx
AC-xxx
MR-xxx
I-xxx
```

Example:

```text
ERROR Z204 — ACTION_PLAN references missing ZASS ID: E-003
```

Do not semantic-match titles to guess replacement IDs.

## 11. Shared experiment identity

If an experiment originates in ZASS, ACTION_PLAN must reuse the same `E-xxx` ID.

v0.3 should validate explicit ID references only.

Do not infer that two differently numbered experiments are duplicates merely because their titles look similar.

## 12. Z205 — blocker inconsistency

Use conservative blocker validation.

Initial safe case:

- ZASS explicitly contains one or more parseable current critical blocker IDs;
- ACTION_PLAN explicitly says `None currently identified`.

Then report:

```text
WARNING Z205 — ACTION_PLAN says no blockers while ZASS has open critical blockers
```

Do not perform broad semantic comparison of arbitrary blocker prose in v0.3.

## 13. Z206 — possible atomic-sync drift

The ACTION_PLAN template says the readiness snapshot should be updated with ZASS in the same atomic commit.

An optional final v0.3 check may inspect Git state and warn when ZASS and ACTION_PLAN appear unsynchronized in the working tree.

Example:

```text
WARNING Z206 — ZASS.md and ACTION_PLAN.md may not be synchronized in the current working tree
```

This should remain a warning because an in-progress working tree can legitimately contain only one side of an atomic update before commit.

Do not auto-edit, stash, reset, checkout, or otherwise modify the worktree.

## 14. Rule set

| Code | Rule | Severity |
|---|---|---|
| Z200 | ACTION_PLAN discovery / parser availability | PASS or WARNING |
| Z201 | Readiness progress mismatch | ERROR |
| Z202 | Readiness status mismatch | ERROR or conservative WARNING when ambiguous |
| Z203 | Stale ZASS source/version | ERROR |
| Z204 | Missing explicitly referenced ZASS ID | ERROR |
| Z205 | Conservative blocker inconsistency | WARNING |
| Z206 | Possible atomic-sync drift | WARNING |

The smallest acceptable v0.3 MVP is Z201 + Z203 + Z204 after ACTION_PLAN parsing is stable.

## 15. Automated tests

Use ordinary temporary directories for most v0.3 fixtures. Use temporary Git repositories only when testing Z206 or other Git-specific behavior.

Minimum test cases:

- no ACTION_PLAN → PASS/skip;
- matching readiness snapshot → PASS;
- stale readiness progress → Z201 ERROR;
- stale readiness status → Z202 ERROR;
- stale ZASS version → Z203 ERROR;
- explicit missing related ZASS ID → Z204 ERROR;
- shared valid E-xxx reference → PASS;
- ZASS critical blocker vs ACTION_PLAN `None currently identified` → Z205 WARNING;
- atomic-sync warning behavior if Z206 is implemented.

## 16. Implementation order

```text
Step 0  field-test v0.2 on a real ZASS project
Step 1  add ACTION_PLAN parser
Step 2  parse authoritative ZASS snapshot fields
Step 3  implement Z201 readiness progress mismatch
Step 4  implement Z203 source/version mismatch
Step 5  implement Z204 referenced-ID validation
Step 6  implement Z202 status mismatch
Step 7  add conservative Z205 blocker check
Step 8  optionally add Z206 atomic-sync warning
Step 9  automated fixtures
Step 10 test Small Farm Planner
Step 11 test at least one real ZASS + ACTION_PLAN project
Step 12 STOP and review
```

## 17. Stop rule

Do not move to CR-010 v0.4 until v0.3:

- has deterministic ACTION_PLAN parsing;
- passes its automated fixtures;
- produces understandable output;
- has been tested on at least one real project with ACTION_PLAN;
- does not create unacceptable false positives;
- never modifies the user's worktree while checking.

If ACTION_PLAN and ZASS project-state fields cannot be compared reliably, stop and improve the parser rather than widening the rule set.

## 18. Implementation authority

This file locks the **plan and scope**, not implementation completion.

CR-010 v0.3 remains **NOT STARTED** until the v0.2 field gate is satisfied and implementation is explicitly begun.
