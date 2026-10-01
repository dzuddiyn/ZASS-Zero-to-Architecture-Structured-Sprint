# ZASS Wiki

> **Think once. Keep the decisions. Continue with any AI.**

ZASS — Zero-to-Architecture Structured Sprint — is a decision-control layer for AI-assisted work.

It helps preserve useful thinking across chats and AI tools while keeping authority clear:

```text
AI explores possibilities
        ↓
Human reviews and decides
        ↓
LOCKED decisions
        ↓
GitHub Source of Truth
        ↓
Architecture follows decisions
```

The core invariant is:

```text
AI suggestion ≠ Owner decision ≠ Git change
```

## Start here

- [Quick Start](Quick-Start.md) — begin with almost no setup.
- [ZASSIMPLE](ZASSIMPLE.md) — the default lightweight method.
- [Full ZASS](Full-ZASS.md) — decision, evidence, risk and architecture governance.
- [ZASS Convergence Loop](Convergence-Loop.md) — capture broadly, form candidates, then research and cross-check before LOCK.
- [Architecture & Evidence](Architecture-and-Evidence.md) — ZERO → ARCHITECTURE and Evidence Confidence.
- [ACTION PLAN](ACTION-PLAN.md) — execution without creating a second decision ledger.
- [Cross-AI Handoff](Cross-AI-Handoff.md) — use many AIs while keeping one authoritative project state.
- [ZASSELECTION](ZASSELECTION.md) — structured choice when the problem is selecting, not architecture.
- [Advanced Reviews](Advanced-Reviews.md) — optional lenses for challenging an idea.
- [Productization & zass check](Productization-and-zass-check.md) — current tooling roadmap.
- [Infographics](Infographics.md) — archived visual references.
- [Bahasa Melayu](Bahasa-Melayu.md) — ringkasan BM.

Language UX is global: conversation may follow the user, while structured method surfaces follow the active EN/MY file. English-file users who speak Malay get a one-time companion-file notice; no automatic switching.

## ZASS Convergence Loop

> **Capture broadly, converge deliberately. Form candidates first; research only what can change the choice.**

```text
CAPTURE → MATCH → SYNTHESIZE → RESEARCH → CROSS-CHECK → LOCK → ARCHITECTURE
```

Research follows candidate formation, not idea capture. Research findings return to the matrix/candidate state before the owner LOCKs decisions and architecture is built.

[Read the full Convergence Loop guide](Convergence-Loop.md).

## Current versions

| Component | Current state |
|---|---|
| ZASS SYSTEM | v0.1.2 |
| Full ZASS | v0.3.9 |
| ZASSIMPLE | v0.2.5 |
| ZASSELECTION | v0.2.1 |
| `zass check` | Local v0.2 implemented; v0.3 plan locked/not started |
| CLI bootstrap | Specification locked; not released |
| License | MIT |

## Which method should I use?

| Need | Use |
|---|---|
| Start casually and preserve important decisions | **ZASSIMPLE** |
| Deep decision/evidence/architecture governance | **Full ZASS** |
| Choose between alternatives | **ZASSELECTION** |
| Track persistent implementation work | **ACTION PLAN** |

Most users should start with **ZASSIMPLE**, not Full ZASS.

## Source of Truth

For a Git-backed project:

> **GitHub is the Source of Truth.**

Chat history, AI memory and handoff files are working context. They do not silently override the repository.

A practical operating rule:

> **Any AI can think. One trusted writer saves. GitHub remembers.**

## Current productization focus

Core methodology is temporarily feature-frozen while work focuses on:

```text
Consistency
→ Validator
→ Automation
→ Real-world evidence
```

The authoritative method files remain in the main repository. This Wiki is the long-form reference and onboarding layer.

---

Repository: [ZASS-Zero-to-Architecture-Structured-Sprint](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint)
