# ZASS TRACK B — Parallel Tooling & Bootstrap Development

**Status:** LOCKED  
**Date:** 2026-10-07  
**Owner:** Project Owner  
**Scope:** Isolated ZASS tooling/productization work that may proceed in parallel with AISYNC/CrossAI Production v1 delivery

## 1. Sequencing refinement

LOCKED:

> **ZASS tooling/productization work may proceed as an isolated parallel TRACK B before AISYNC T-020/T-021 completes, provided it does not modify or interrupt the active AISYNC runtime, Gate 6 acceptance, or CrossAI Production v1 critical path.**

This supersedes only the previous timing assumption that CR-010 v0.4 and later ZASS tooling must wait until AISYNC Production v1 is DELIVERED.

It does not reopen or change existing architecture.

## 2. Parallel tracks

```text
TRACK A — AISYNC / CrossAI
T-020 Human Closed Beta
→ Final ZASS Gate 6 acceptance
→ Gate 6 PASS / CLOSED
→ visual polish + Guided Journey
→ focused UX regression
→ T-021 Production v1 release acceptance
→ DELIVERED !!

TRACK B — ZASS tooling/productization
CR-010 v0.4
→ real-project field test
→ CLOSE CR-010
→ npm bootstrap CLI
→ ZASS Project Bootstrap Core
→ field-test bootstrap
→ freeze stable Bootstrap Core contract
```

TRACK B does not technically depend on T-020/T-021 completion.

## 3. Isolation guardrails

TRACK B MUST NOT:

- modify AISYNC runtime;
- modify Apps Script production;
- alter T-020/T-021 acceptance criteria;
- interfere with Gate 6 evidence/adoption work;
- reopen ZASS methodology without evidence;
- add new methods or governance layers unnecessarily;
- duplicate CrossAI runtime semantics;
- make GitHub mandatory again;
- implement CrossAI Create Project.

TRACK B MAY:

- change the ZASS repository;
- specify and implement CLI behavior;
- add regression tests;
- run real-project field tests;
- prepare npm onboarding;
- implement the shared ZASS Project Bootstrap Core;
- improve tooling/productization documentation.

## 4. CR-010 v0.4 order

```text
LOCK zass status contract ✅
→ implement zass status ✅ (CI PASS; field test later)
→ design/LOCK zass diff contract
→ implement zass diff
→ regression tests
→ real-project field test
→ STOP / REVIEW
→ CLOSE CR-010
```

Do not implement v0.4 commands before the behavioral contract is explicit.

`zass status` and `zass diff` must add deterministic ZASS-relevant meaning and must not merely rebrand raw Git output.

The CR-010 v0.4a contract for `zass status` is LOCKED and implemented in [`CR010_V04A_ZASS_STATUS_SPEC.md`](CR010_V04A_ZASS_STATUS_SPEC.md). Repository CI passes; the later real-project field-test gate remains pending.

## 5. Bootstrap boundary

After CR-010 closes:

```text
npm bootstrap CLI
        ↓
ZASS Project Bootstrap Core
        ↓
field test
        ↓
stable core contract
```

The Bootstrap Core owns ZASS project bootstrap semantics.

It must support a valid project without GitHub.

CrossAI may later consume the frozen core after its own implementation gate is open.

## 6. Track convergence

TRACK A and TRACK B remain independent until CrossAI begins consuming the shared Bootstrap Core.

```text
TRACK A DELIVERED ───────────────┐
                                 ├→ CrossAI Create Project vNext
TRACK B Bootstrap Core stable ───┘
```

CrossAI consumption must not begin merely because TRACK B finishes early.

## 7. Working discipline

Important changes follow:

```text
DUMP
→ DISTILL
→ DECIDE
→ LOCK
→ DESIGN
→ IMPLEMENT
```

Use small branches/PRs, run relevant tests, and do not claim PASS without evidence.
