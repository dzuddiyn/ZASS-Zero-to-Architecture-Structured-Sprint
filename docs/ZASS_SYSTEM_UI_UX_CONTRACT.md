# ZASS SYSTEM — UI/UX & Product Surface Contract

**Status:** LOCKED WORKING CONTRACT  
**Date:** 2026-10-01  
**Owner:** Project Owner  
**Scope:** ZASS SYSTEM local/core boundary, AI-SYNC Web presentation, and human-facing UX

> **Present only the next meaningful human action.**

## 1. System architecture boundary

ZASS SYSTEM has two first-class product surfaces over one authoritative project state:

```text
                    ZASS SYSTEM
                         │
              ┌──────────┴──────────┐
              │                     │
       LOCAL FIRST-CLASS        AI-SYNC WEB
              │                     │
         zass CLI              human UX
         validator             automation
         parser                sync / handoff
         bootstrap             GitHub bridge
              │                     │
              └──────────┬──────────┘
                         ↓
                      GitHub
                  Source of Truth
```

LOCKED rules:

- Local tooling must remain first-class and useful without AI-SYNC Web.
- AI-SYNC Web is the product UX / automation layer, not the authority layer.
- GitHub-backed project files and their Git history remain the engineering Source of Truth.
- AI-SYNC must reuse the same validator/core semantics rather than reimplementing rule logic independently.
- A web outage must not make the project state unrecoverable or invalidate local tooling.
- AI-SYNC may simplify presentation, but it must not silently change ZASS authority rules.

## 2. Entry model

The system landing mental model is:

> **DECIDE or BUILD?**

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

Users route by intent, not by framework knowledge.

Full ZASS is not a primary first-screen choice. It is an escalation path from the BUILD flow when stronger governance is justified.

## 3. DUMP-first BUILD UX

The primary BUILD workspace starts from natural conversation.

Do not lead with forms, ledgers, IDs, architecture diagrams, or configuration pages.

Preferred first interaction:

```text
💬 Tell me your idea
```

The system may structure state behind the scenes, but the user should be able to begin by speaking naturally.

## 4. Progressive disclosure

Internal complexity must not be mirrored directly into the UI.

Hide by default unless useful for review/audit:

- `D-xxx`, `AC-xxx`, `AP-xxx`, `E-xxx`, and other lineage IDs;
- full ACTION PLAN contents;
- full TASKS backlog;
- full decision ledger;
- all lifecycle stages at once;
- validator rule codes when a plain-language summary is sufficient.

Expose details when:

- the user requests review/audit;
- a protected decision needs confirmation;
- an error/warning needs technical diagnosis;
- traceability materially helps the current task.

## 5. Five primary product surfaces

AI-SYNC Web should prefer five stable surfaces.

### 5.1 Landing

`DECIDE or BUILD?` routes to ZASSELECTION or ZASSIMPLE.

### 5.2 Workspace

Chat / DUMP is the main working surface. The workspace should remain conversational and should not become a permanent dashboard wall.

### 5.3 Contextual Cards

Cards appear only when a human action is useful.

Core cards:

- **Ready to Lock** — a mature decision needs owner approval.
- **Architecture Forming** — architecture coverage is becoming coherent.
- **Escalation Notice** — ZASSIMPLE may benefit from Full ZASS.
- **Current Task** — one executable task is active.
- **Delivered** — the intended outcome is actually built, verified, and recorded.

### 5.4 Project Pulse

Show only the state needed to orient the user:

- current stage;
- next stage;
- factual progress when measurable;
- save/sync health.

Do not show the entire lifecycle permanently.

Example:

```text
📍 DESIGN → next: DO IT
Architecture 3/4
Saved at abc1234
```

### 5.5 Review / History

Advanced state belongs here:

- decisions;
- selection matrix;
- architecture;
- lineage;
- validator detail;
- commits;
- version history;
- audit trail.

This surface is available without burdening normal conversation.

## 6. Contextual card contracts

### Ready to Lock

```text
🔒 Ready to lock

[plain-language decision]

Why:
[one short reason]

[ PROCEED / LOCK ]
```

The system must not lock automatically.

### Architecture Forming

```text
🏗️ Architecture forming
Architecture 3/4
7 decisions locked
2 implementation constraints
1 critical question

[ REVIEW ]
```

When confirmation readiness is reached, surface the protected architecture confirmation flow.

### Escalation Notice

```text
ZASS complexity notice

This project now has decision/evidence complexity
that may benefit from stronger governance.

[ STAY ZASSIMPLE ]   [ MOVE TO FULL ZASS ]
```

No automatic migration is allowed.

### Current Task

```text
🚀 STEP 1 / N — [task]

Do:
[one concrete action]

Pass:
[observable success condition]

Then:
[next task label]
```

One-task-at-a-time is the default execution UX.

### Delivered

```text
✅ DELIVERED !!

[result]

✓ Built
✓ Verified
✓ Matches architecture
✓ Recorded
```

Do not show DELIVERED if any required closure condition is false.

## 7. Artifact projection contract

The project files remain first-class. The web UI projects useful views from them.

```text
ACTION_PLAN.md
      ↓
Current focus / next action / blockers

ARCHITECTURE.md
      ↓
Architecture Forming / confirmation state

TASKS.md
      ↓
Current Task / execution progress
```

The user should not need to manually browse or edit all three files just to work normally.

The UI is a projection of authoritative state, not a replacement authority.

## 8. SAVE / sync truth contract

Persistence must be factual.

The UI may show states such as:

```text
UNSAVED
SYNCING
SAVED
FAILED
STALE
```

A successful authoritative save must be tied to a real Git result.

When GitHub is the authority:

- show a real commit SHA or traceable commit receipt;
- never claim SAVED merely because Markdown was generated;
- distinguish authoritative commit success from mirror/sync success;
- expose failure without pretending a partial operation succeeded.

## 9. One engine, two presentations

The local CLI is engineering-first.

```text
zass check
PASS Z001
PASS Z003
PASS Z101
WARNING Z205
exit 0
```

AI-SYNC Web translates the same underlying result into human-facing UX.

```text
✅ Project state healthy

1 warning needs attention:
ACTION PLAN may be behind the current ZASS state.

[ REVIEW ]
```

> **Do not duplicate validator semantics in the web application. Reuse one validation engine / rule source wherever practical.**

## 10. What not to copy literally from chat UX

Do not mechanically reproduce every ZASSIMPLE chat convention in the web UI.

Specifically:

- do not require the literal fixed footer on every web interaction;
- do not show every internal ID by default;
- do not display the full 6D lifecycle permanently;
- do not show a full selection matrix unless comparison/review is useful;
- do not make the first screen a large dashboard;
- do not expose multiple competing save/write paths.

Web controls should replace repeated chat commands where a persistent/contextual control is clearer.

## 11. Primary UX principle

> **Present only the next meaningful human action.**

The system may know far more than it shows.

Preferred sequence:

```text
💬 Tell me your idea
        ↓
📍 DESIGN
        ↓
🔒 Ready to lock
        ↓
🏗️ Confirm architecture
        ↓
🚀 Current task
        ↓
✅ DELIVERED !!
```

## 12. Full-ZASS escalation

Full ZASS is an escalation capability, not a default burden.

The escalation contract is still future work and must be informed by the planned Temaya field test.

Until that contract is locked:

- no automatic migration;
- no invented complexity score;
- no forced Full-ZASS upgrade;
- preserve lineage if the owner chooses to escalate.

## 13. Engineering sequence

```text
finish local first-class tooling
        ↓
stabilize validator/core contracts
        ↓
AI-SYNC Web uses the same semantics
        ↓
implement DECIDE or BUILD? landing
        ↓
project workspace + contextual cards
        ↓
factual SAVE/sync receipts
        ↓
review/history projection
        ↓
automation and product adoption UX
```

CR-010 v0.3 remains a locked implementation plan but is currently deferred.

## 14. Authority boundary

This contract upgrades ZASS SYSTEM product direction. It does not by itself:

- change Full ZASS method semantics;
- change ZASSIMPLE method semantics;
- change ZASSELECTION method semantics;
- implement AI-SYNC Web;
- implement the landing page;
- publish the CLI;
- start CR-010 v0.3;
- authorize automatic Full-ZASS migration.

No method version bump is required solely for this system/UI contract.
