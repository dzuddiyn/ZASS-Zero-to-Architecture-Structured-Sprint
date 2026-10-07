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
CR-010 v0.4 ✅
→ real-project field test ✅
→ CR-010 CLOSED — zass-cli v0.4.0 ✅
→ npm bootstrap CLI v0.1 contract ✅ LOCKED
→ npm bootstrap CLI v0.1 implementation ✅ Windows + CI PASS
→ Bootstrap Core v0.1 contract ✅ LOCKED
→ shared Bootstrap Core implementation ✅ Windows + CI PASS
→ field-test bootstrap ✅ PASS
→ STOP / REVIEW corrective gate ✅
→ public deterministic API seam corrected ✅
→ repeat STOP / REVIEW ✅ PASS
→ stable Bootstrap Core public API FROZEN ✅
→ stale docs/status cleanup ✅
→ npm publication readiness / packaging-boundary remediation ← NEXT
→ npm pack + clean-install smoke test
→ publish create-zass@0.1.0 if PASS
→ fresh registry verification
→ publication receipt + CHANGELOG
→ CrossAI Bootstrap Core consumption gate
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
→ design/LOCK zass diff contract ✅
→ implement zass diff ✅
→ regression tests ✅
→ real-project field test ✅ PASS
→ STOP / REVIEW ✅ PASS
→ CLOSE CR-010 ✅ CLOSED — zass-cli v0.4.0
```

Do not implement v0.4 commands before the behavioral contract is explicit.

`zass status` and `zass diff` must add deterministic ZASS-relevant meaning and must not merely rebrand raw Git output.

The CR-010 v0.4a contract for `zass status` is LOCKED, implemented and field-validated in [`CR010_V04A_ZASS_STATUS_SPEC.md`](CR010_V04A_ZASS_STATUS_SPEC.md).

The CR-010 v0.4b contract for `zass diff` is LOCKED, implemented and field-validated in [`CR010_V04B_ZASS_DIFF_SPEC.md`](CR010_V04B_ZASS_DIFF_SPEC.md). The field receipt is [`CR010_V04_REAL_PROJECT_FIELD_TEST.md`](CR010_V04_REAL_PROJECT_FIELD_TEST.md). STOP/REVIEW passed and CR-010 is CLOSED. See [`CR010_STOP_REVIEW_CLOSURE.md`](CR010_STOP_REVIEW_CLOSURE.md). The npm Bootstrap CLI v0.1 contract is LOCKED in [`ZASS_NPM_BOOTSTRAP_CLI_V01.md`](ZASS_NPM_BOOTSTRAP_CLI_V01.md). It supersedes the earlier npm-only ZASSIMPLE default/no-wizard assumption. The private `create-zass@0.1.0` implementation is complete with Windows + CI PASS. Bootstrap Core v0.1 is now field-tested and **PUBLIC API FROZEN / PASS**. The next TRACK B gate is npm publication readiness for `create-zass@0.1.0`, including standalone package-boundary remediation and packed-artifact smoke testing.

## 5. Bootstrap boundary

After CR-010 closure:

```text
npm bootstrap CLI v0.1 contract ✅
        ↓
npm bootstrap CLI v0.1 implementation ✅
        ↓
Bootstrap Core v0.1 contract ✅
        ↓
shared Bootstrap Core implementation ✅
        ↓
field-test bootstrap ✅ PASS
        ↓
STOP / REVIEW corrective gate ✅
        ↓
public deterministic API seam corrected ✅
        ↓
repeat STOP / REVIEW ✅ PASS
        ↓
stable Bootstrap Core public API FROZEN ✅
        ↓
npm publication readiness / packaging boundary ← NEXT
        ↓
npm pack + clean-install smoke test
        ↓
publish + fresh registry verification if PASS
        ↓
publication closure
        ↓
CrossAI Bootstrap Core consumption gate
```

The Bootstrap Core owns ZASS project bootstrap semantics. Its v0.1 implementation contract is LOCKED in [`ZASS_PROJECT_BOOTSTRAP_CORE_V01.md`](ZASS_PROJECT_BOOTSTRAP_CORE_V01.md).

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
