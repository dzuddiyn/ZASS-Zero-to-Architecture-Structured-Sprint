# ZASS HPC — Implementation Action Plan

**Status:** IMPLEMENTED — VERIFICATION PENDING  
**Date:** 2026-10-09  
**Decision:** LOCKED by Project Owner after architecture challenge  
**Scope:** presentation governance only; no redesign of core ZASS reasoning/decision logic

## Architecture decision

Create **ZASS Human Presentation Contract (HPC)** as the single shared presentation-layer authority.

HPC is mandatory for Full ZASS and ZASSIMPLE human-facing structured output and is inherited by other ZASS methods where compatible. It governs representation selection, fallback, mobile readability, accessibility, and authority fidelity. It does not become a renderer, design system, or second semantic authority.

## Implementation tasks

| Task | Outcome | Status |
|---|---|---|
| HPC-T01 | Create canonical `docs/ZASS_HUMAN_PRESENTATION_CONTRACT.md` | DONE |
| HPC-T02 | Reference HPC from Full ZASS EN/MY without changing Full ZASS method version | DONE |
| HPC-T03 | Reference HPC from ZASSIMPLE EN/MY without changing ZASSIMPLE method version | DONE |
| HPC-T04 | Align ZASS SYSTEM UI/UX contract and bump ZASS SYSTEM to v0.2.3 | DONE |
| HPC-T05 | Update README/Wiki/CHANGELOG current-facing truth | DONE |
| HPC-T06 | Add repository consistency guards for canonical HPC inheritance | DONE |
| HPC-T07 | Run complete ZASS CI on implementation commit | PENDING |
| HPC-T08 | Close receipt, rerun final CI, create refreeze reference | PENDING |

## Acceptance

PASS requires:

- canonical HPC exists and is LOCKED;
- Full ZASS and ZASSIMPLE reference the same canonical contract;
- fallback hierarchy is explicit;
- ASCII is an exception path, not the default architecture fallback;
- mobile and accessibility rules are explicit;
- semantic authority remains unchanged;
- repository consistency detects missing HPC inheritance;
- complete ZASS CI passes;
- final refreeze reference points to the accepted closure SHA.
