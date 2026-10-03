# ZASS SYSTEM — UI/UX & Product Surface Contract

**System version:** 0.2.0  
**Full ZASS surface alignment:** v0.3.9<br>
**Status:** LOCKED WORKING CONTRACT  
**Date:** 2026-10-03  
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

### 1.1 AI-SYNC Method Gateway / public read transport

ZASS SYSTEM now recognizes a separate AI-SYNC **public method-read transport** for cross-AI portability.

```text
Official ZASS GitHub repo
= authoritative method Source of Truth
        ↓ protected sync
AI-SYNC Method Registry / snapshot
        ↓ public read-only gateway
receiver AI
```

LOCKED system-level boundary:

- GitHub remains authoritative for method content, version history, and commit lineage.
- AI-SYNC may hold identifiable snapshots for transport/readability, but does not become a second method authority.
- The public Method Gateway must serve the synced Markdown itself; a redirect/wrapper back to GitHub does not satisfy the transport contract.
- Public method reads require no login; sync/admin/write actions remain protected.
- Snapshot provenance must identify the source method, language, version, repository/path, Git commit, and sync time.
- ZASSPILL / ZASSELECTION / ZASSIMPLE remain method-layer components; transport implementation belongs to AI-SYNC.
- The existing ASC Write Contract remains a separate protected write-plane contract and is not expanded for public method distribution.
- The v0.1 public Method Gateway has passed T-013A/T-013B sync/readability proof. Receivers must use the exact published gateway URL; on fetch failure they must report failure rather than substitute repository search, raw GitHub, or another source as method authority.

Current implementation checkpoint:

```text
AI-SYNC T-013A/T-013B — PASS
public method-read transport operational for the proven v0.1 path

ZASS CI + AISYNC T-012 — PASS
ASC consumes factual commit-linked validator/CI status
without duplicating ZASS rule semantics

AISYNC T-016 — PASS
production GitHub write boundary + factual verified SAVE/NO_CHANGE receipts
```

These proofs do not by themselves complete the integrated ZASS SYSTEM product UX. They satisfy core dependencies for the product delivery gates tracked in `PRODUCTIZATION_ROADMAP.md`.

This is a system/integration-contract update. It does not alter ZASSPILL, ZASSELECTION, or ZASSIMPLE semantics.

## 2. Entry model

The system landing mental model is:

> **DUMP / DECIDE / DESIGN**

~~~text
ZASS SYSTEM
    ↓
What do you need right now?
    │
    ├── DUMP
    │      ↓
    │  ZASSPILL
    │
    ├── DECIDE
    │      ↓
    │  ZASSELECTION
    │
    └── DESIGN
           ↓
       ZASSIMPLE
           ↓
    Full ZASS when needed
~~~

Users route by intent, not by framework knowledge.

**DUMP** is the continuity-first route for open-ended thinking, messy context, and conversations that are not yet ready to become a choice or design.

**DECIDE** is the structured choice route.

**DESIGN** is the creation/design route and starts with ZASSIMPLE; Full ZASS remains an escalation path when stronger governance is justified.

## 3. DUMP-first continuity UX

The primary DUMP workspace is ZASSPILL and starts from natural conversation. DESIGN may also begin conversationally in ZASSIMPLE; users are not required to pre-structure their input.

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

`DUMP / DECIDE / DESIGN` routes DUMP → ZASSPILL, DECIDE → ZASSELECTION, and DESIGN → ZASSIMPLE.

### 5.2 Workspace

Chat / DUMP is the main working surface. The workspace should remain conversational and should not become a permanent dashboard wall.

### 5.3 Contextual Cards

Cards appear only when a human action is useful.

Core cards:

- **Ready to Lock** — a mature decision needs owner approval.
- **Design Forming** — design coverage is becoming coherent; technical architecture appears only when applicable.
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

### Design Forming

```text
🎨 Design forming
Design 3/4
7 decisions locked
2 implementation constraints
1 critical question

[ REVIEW ]
```

When confirmation readiness is reached, surface the protected design confirmation flow. Technical architecture appears only when the domain needs it.

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
✓ Matches design
✓ Recorded
```

Do not show DELIVERED if any required closure condition is false.

## 7. Artifact projection contract

The project files remain first-class. The web UI projects useful views from them.

```text
ACTION_PLAN.md
      ↓
Current focus / next action / blockers

DESIGN.md
      ↓
Design Forming / confirmation state

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
implement DUMP / DECIDE / DESIGN landing
        ↓
project workspace + contextual cards
        ↓
factual SAVE/sync receipts
        ↓
review/history projection
        ↓
automation and product adoption UX
```

CR-010 v0.3 is implemented, field-validated, and closed at its STOP/review gate as zass-cli v0.3.0. Optional Z206 and CR-010 v0.4 remain deferred/not started.

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

## 15. Versioning contract

`ZASS SYSTEM` has its own version independent of Full ZASS, ZASSIMPLE, and ZASSELECTION.

Current baseline:

```text
ZASS SYSTEM v0.2.0
DUMP / DECIDE / DESIGN
Local First-Class Core + AI-SYNC Web
UI/UX Product Surface Contract
```

Bump the **ZASS SYSTEM version** whenever a user-visible system-level contract changes materially, including:

- landing/routing behavior;
- primary UI/UX interaction model;
- product-surface structure;
- local-core ↔ AI-SYNC integration contract;
- save/sync user-visible semantics;
- escalation UX;
- system-level automation behavior.

Do not require a Full ZASS/ZASSIMPLE/ZASSELECTION version bump when their own method semantics are unchanged.

### Global method-language routing

ZASS SYSTEM applies the same language behavior to Full ZASS, ZASSIMPLE, and ZASSELECTION.

- English method files are the default distribution surface.
- If a user speaks Bahasa Melayu while an English method file is active, notify them once, lightly, that the matching Malay file exists.
- Use this wording pattern: **`Versi Bahasa Melayu tersedia: <Malay file>.`** Then: **`Anda boleh terus bercakap dalam Bahasa Melayu walaupun menggunakan fail English, atau gunakan versi Melayu jika mahu arahan method sepenuhnya dalam BM.`**
- Do not auto-switch files and do not repeat the notice on every reply.
- Ordinary conversation may follow the user's language, but **structured method surfaces follow the active method file language**.
- English method file active → tables, cards, matrices, I/AC/D record labels, stage/status explanations, and method prompts render in English.
- Malay method file active → those same structured surfaces render in Bahasa Melayu.
- Canonical IDs, commands, branded mnemonics, and state tokens may remain unchanged when translation would break lineage, automation, or a locked command contract.
- Language choice does not change decision authority or project state.

Current mapping:

| Method | English/default | Bahasa Melayu |
|---|---|---|
| Full ZASS | `ZASS.md` | `ZASS_MY.md` |
| ZASSIMPLE | `ZASSIMPLE_EN.md` | `ZASSIMPLE_MY.md` |
| ZASSELECTION | `ZASSELECTION_EN.md` | `ZASSELECTION_MY.md` |

This separation lets users and AI detect a ZASS SYSTEM upgrade without falsely claiming that an individual method changed.
