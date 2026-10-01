# ZASS SYSTEM — Default Landing & Escalation Working Direction

**Status:** LOCKED WORKING DIRECTION  
**Date:** 2026-10-01  
**Owner:** Project Owner  
**Scope:** Product entry flow and future ZASSIMPLE → Full ZASS escalation contract

> **ZASSIMPLE is the front door. Full ZASS is an escalation path, not the default burden.**

## 1. Default landing

The default landing method for the ZASS SYSTEM is **ZASSIMPLE**.

A new user should not be required to understand or choose Full ZASS before starting ordinary project work.

Default path:

```text
ZASS SYSTEM
    ↓
DEFAULT LANDING
    ↓
ZASSIMPLE
```

## 2. Full ZASS is not the default

Full ZASS remains available for deeper decision, evidence, risk, and architecture governance.

It is not the default starting burden for every project.

The expected progression is:

```text
ZASSIMPLE
    ↓
natural project use
    ↓
complexity becomes materially harder to control
    ↓
escalation notice
    ↓
human decides
   ├─ STAY ZASSIMPLE
   └─ MOVE TO FULL ZASS
```

No automatic migration is authorized.

## 3. Temaya field test

After ZASSIMPLE is stable, **Temaya** will be used as a real-project field test for escalation behavior.

The purpose is to observe real signals rather than invent a theoretical threshold first.

Potential signals to study include:

- important decisions becoming interdependent;
- multiple active experiments or evidence loops;
- meaningful architecture trade-offs;
- several architecture candidates;
- conflicting constraints;
- rising risk or operational impact;
- decision lineage becoming difficult to preserve in ZASSIMPLE alone.

These are research candidates, not yet a locked escalation formula.

## 4. Notification contract

After Temaya field evidence exists, define a formal notification contract for when the system should tell the user that Full ZASS may now provide meaningful value.

The notification must:

- explain the observed reason for escalation;
- remain advisory rather than authoritative;
- avoid implying that the user must migrate;
- allow the user to stay in ZASSIMPLE;
- allow the user to explicitly choose Full ZASS;
- preserve project lineage during any approved transition.

Example interaction direction:

```text
ZASS complexity notice

This project now has several interdependent decisions,
active evidence loops, or architecture trade-offs.

ZASSIMPLE can still continue.
Full ZASS can provide stronger traceability.

[ STAY ZASSIMPLE ]   [ MOVE TO FULL ZASS ]
```

The exact wording, thresholds, and trigger rules remain future contract work.

## 5. Product principle

LOCKED product direction:

> **Start simple by default. Escalate governance only when observed project complexity justifies it.**

This keeps ZASS lightweight at entry while preserving a clear path to stronger governance.

## 6. Current sequencing

Current sequence is:

```text
stabilize ZASSIMPLE
        ↓
field-test ZASSIMPLE on Temaya
        ↓
observe escalation signals
        ↓
define notification / escalation contract
        ↓
validate transition UX to Full ZASS
```

Separately, CR-010 v0.3 ACTION_PLAN consistency remains a locked implementation plan and is the next validator implementation task when development resumes.

For now, **CR-010 v0.3 implementation is deferred / not started**.

## 7. Authority boundary

This document locks a product working direction only.

It does not:

- change Full ZASS semantics;
- change ZASSIMPLE semantics;
- define final escalation thresholds;
- authorize automatic migration;
- start CR-010 v0.3 implementation;
- bump Full ZASS or ZASSIMPLE versions.

Future escalation rules must be based on field evidence and explicitly locked before implementation.
