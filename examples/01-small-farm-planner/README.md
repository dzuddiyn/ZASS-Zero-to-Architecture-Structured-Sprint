# Example 01 — Small Farm Planner

**Method:** Full ZASS v0.3.4  
**Type:** Fictional teaching fixture  
**Purpose:** Show the complete idea → decision → architecture lifecycle.

🌐 Language: **English** | [Bahasa Melayu](README_MS.md)

> This is not validated farm software or market research. The scenario and owner decisions are deliberately constructed to demonstrate ZASS semantics clearly.

## Scenario

A solo builder has an idea for a lightweight planner that helps a small farmer see today's crop tasks on an Android phone, including when the internet connection is unreliable.

The first idea is intentionally vague:

> “I want a simple system that helps small farmers keep track of crop work without needing a complicated farm-management platform.”

The example then shows how ZASS separates:

- what the owner actually said;
- AI interpretations;
- open questions;
- competing options;
- proposed decisions;
- owner approval;
- LOCKED decisions;
- execution tracking;
- architecture confirmation.

## Files

| File | Purpose |
|---|---|
| [ZASS.md](ZASS.md) | Project decision and architecture authority |
| [ACTION_PLAN.md](ACTION_PLAN.md) | Execution state and evidence/work tracking |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Confirmed architecture derived from LOCKED decisions |
| [WALKTHROUGH.md](WALKTHROUGH.md) | Human-readable conversation-to-architecture walkthrough |

## What to notice

### AI suggestions are not decisions

The AI may propose a PWA, native Android app, or chat bot. Those stay candidates until the owner approves a decision.

### PROCEED is owner approval in full ZASS

In this example, ZASS first shows an explicit `PROPOSED FOR PROCEED` set. The owner reviews that set, then uses PROCEED. Only the listed proposals are approved; listed proposals marked for LOCK become LOCKED.

PROCEED does not commit or push.

### COMMIT is persistence, not approval

Only after approval does COMMIT persist the project state to GitHub.

### Architecture has a separate gate

A draft does not become confirmed architecture merely because it looks complete. The example passes through:

    DRAFT ARCH
    → BUILD ARCHITECTURE
    → owner review
    → YA, CONFIRM ARCHITECTURE
    → ARCHITECTURE CONFIRMED

## Why this example uses full ZASS

This project has multiple architecture choices and interacting constraints: offline behavior, data storage, notifications, maintenance, and scope boundaries.

A very early version of the same idea could start in **ZASSIMPLE**. Full ZASS becomes useful once the question changes from:

> “What should we build?”

to:

> “Why should it be built this way, and what decisions does the architecture depend on?”

## Read next

Start with [WALKTHROUGH.md](WALKTHROUGH.md), then inspect [ZASS.md](ZASS.md) to see how conversational history becomes an auditable project record.
