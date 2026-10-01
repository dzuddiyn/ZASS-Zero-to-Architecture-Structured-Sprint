# ZASS SYSTEM — Default Landing & Escalation Working Direction

**ZASS SYSTEM version:** 0.1.2  
**Status:** LOCKED WORKING DIRECTION  
**Date:** 2026-10-01  
**Owner:** Project Owner  
**Scope:** Product entry flow and future ZASSIMPLE → Full ZASS escalation contract

> **DECIDE or BUILD?** is the ZASS SYSTEM entry mental model. ZASSELECTION handles DECIDE; ZASSIMPLE is the default BUILD entry; Full ZASS is an escalation path, not the default burden.

## 1. Default landing mental model — DECIDE or BUILD?

The locked entry mental model for the ZASS SYSTEM is:

> **DECIDE or BUILD?**

The landing page should ask what the user is trying to do, rather than asking them to choose a ZASS method by name.

```text
ZASS SYSTEM
    ↓
DECIDE or BUILD?
    │
    ├── DECIDE
    │      ↓
    │  ZASSELECTION
    │
    └── BUILD
           ↓
       ZASSIMPLE
           ↓
    Full ZASS when needed
```

**DECIDE** is for selecting between alternatives or making a structured life/product choice.

**BUILD** is for creating a system, project, product, workflow, automation, or architecture.

Within the BUILD path, **ZASSIMPLE remains the default landing method**. A new user should not be required to understand or choose Full ZASS before starting ordinary project work.

Full ZASS does not need to appear as a primary first-screen choice. It remains available later through the escalation path.

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

## 5. Product principles

LOCKED product direction:

> **DECIDE or BUILD?**

> **Route by user intent, not by framework knowledge.**

> **Start simple by default. Escalate governance only when observed project complexity justifies it.**

> **Language routing:** conversation language may follow the user, while structured method UI follows the active EN/MY method file. Malay availability is notified once from English files; switching is never automatic.

This keeps ZASS lightweight at entry: DECIDE routes to ZASSELECTION, BUILD routes to ZASSIMPLE, and Full ZASS appears only when stronger governance is justified.

## 6. Current sequencing

Current sequence is:

```text
lock DECIDE or BUILD? entry model
        ↓
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

The future landing-page implementation itself is not started by this decision. This document only locks the product routing model.

Separately, CR-010 v0.3 ACTION_PLAN consistency remains a locked implementation plan and is the next validator implementation task when development resumes.

For now, **CR-010 v0.3 implementation is deferred / not started**.

## 7. System architecture boundary

The ZASS SYSTEM now locks a two-surface architecture:

```text
LOCAL FIRST-CLASS CORE  ←→  AI-SYNC WEB
             ↓
      GitHub Source of Truth
```

Local tooling remains independently useful. AI-SYNC Web provides human-facing UX, automation, sync, and projection without becoming a second decision authority.

The detailed locked UI/UX contract is documented in [ZASS_SYSTEM_UI_UX_CONTRACT.md](ZASS_SYSTEM_UI_UX_CONTRACT.md).

## 8. ZASSIMPLE UX promoted to system-level rules

The following lessons are promoted from ZASSIMPLE into ZASS SYSTEM product direction:

- DUMP/chat-first entry for BUILD;
- progressive disclosure of internal lineage;
- compact current-stage + next-stage Project Pulse;
- contextual Ready-to-Lock, Architecture Forming, Escalation, Current Task, and Delivered cards;
- one-task-at-a-time execution;
- factual SAVE/sync states backed by real commit receipts;
- web projection of ACTION_PLAN / ARCHITECTURE / TASKS instead of forcing users to browse internal artifacts;
- one validator/core semantics source with separate CLI and Web presentation;
- the primary UI rule: **present only the next meaningful human action**.

The literal ZASSIMPLE chat footer is not a required web UI pattern. Persistent/contextual controls may replace repeated chat commands.

## 9. Authority boundary

This document locks a product working direction only.

It does not:

- change Full ZASS semantics;
- change ZASSIMPLE semantics;
- change ZASSELECTION semantics;
- implement a landing page yet;
- define final escalation thresholds;
- authorize automatic migration;
- start CR-010 v0.3 implementation;
- bump Full ZASS, ZASSIMPLE, or ZASSELECTION versions.

Future escalation rules must be based on field evidence and explicitly locked before implementation.
