# ZASS
## Zero-to-Architecture Structured Sprint

> **Think once. Keep the decisions. Continue with any AI.**

AI is great at thinking with you.

The problem starts when you change chats, change models, return a week later, or ask another AI to continue the same project.

You repeat the context. Old decisions return. Rejected ideas come back. AI suggestions get mistaken for decisions. Architecture slowly drifts away from what you actually agreed.

**ZASS gives your project a memory outside the AI.**

It keeps the important thinking, decisions, evidence, and architecture in portable Markdown — with humans retaining control over what becomes authoritative.

```text
Think anywhere
      ↓
Capture what matters
      ↓
Human-approved decisions
      ↓
GitHub Source of Truth
      ↓
Continue with any AI
```

**Any AI can think. One trusted writer saves. GitHub remembers.**

---

# ZASS SYSTEM

The locked product entry model is:

> **DUMP / DECIDE / DESIGN**

```text
ZASS SYSTEM
    ↓
What do you need right now?
    │
    ├── DUMP   → ZASSPILL
    ├── DECIDE → ZASSELECTION
    └── DESIGN → ZASSIMPLE → Full ZASS when needed
```

The system is designed around two complementary first-class surfaces:

```text
LOCAL CORE / CLI  ←→  AI-SYNC WEB
          ↓
  GitHub Source of Truth
```

Local tooling stays independently useful. AI-SYNC Web is the future UX / automation layer: conversational DUMP-first workspace, progressive disclosure, contextual decision/design/task cards, factual Git-backed SAVE receipts, and review/history when needed.

**Primary UX rule:** show the user the **next meaningful human action**, not all internal framework complexity.

See [ZASS SYSTEM UI/UX Contract](docs/ZASS_SYSTEM_UI_UX_CONTRACT.md).

**Global language UX:** ordinary conversation may follow the user, but structured method surfaces follow the active method file language. If a user speaks Bahasa Melayu while an English method file is active, ZASS notifies once that the matching Malay file is available; it never switches files automatically.

**System versioning rule:** user-visible ZASS SYSTEM routing, UI/UX, product-surface, or integration-contract changes bump the ZASS SYSTEM version even when individual method semantics do not change.

**AI-SYNC Method Gateway:** cross-AI method readability is a locked transport responsibility of AI-SYNC. GitHub remains the authoritative method Source of Truth. AI-SYNC T-013A and T-013B have passed: protected GitHub→METHODS snapshot sync is operational, and the public read-only Method Gateway has passed anonymous-browser, Gemini, and Copilot direct-read proof. Receiver guardrail remains strict: use the exact gateway URL, and if a receiver cannot fetch it, report the failure rather than substituting another source as method authority.


**ZASSPILL:** the v1.0.0 **method/protocol contract is PRODUCTION READY** after Phase 1–6 proof. Runtime persistence, retrieval, authorization, and transport remain AI-SYNC/ASC responsibilities. **DUMP / DECIDE / DESIGN** is the released global ZASS SYSTEM entry model: DUMP → ZASSPILL, DECIDE → ZASSELECTION, DESIGN → ZASSIMPLE.

---

# Start ZASS your way

You do not need to learn the whole framework before using it.

## 1. Just brainstorm — zero setup

Already discussing an idea somewhere else?

Keep going. No setup required.

When something becomes worth preserving:

```text
useful conversation
       ↓
copy / paste
       ↓
trusted GitHub-writer AI
       ↓
ZASS
       ↓
review / decide
       ↓
COMMIT
```

**Start structured, or start messy. ZASS can capture it later.**

---

## 2. Public project — paste the link

If your ZASS project is public, paste the repository URL into another AI that can read public links.

Example:

```text
Read this public ZASS project first:

[PROJECT URL]

Treat the repository as the Source of Truth.
Respect all existing LOCKED decisions.

Continue brainstorming with me naturally.
Challenge assumptions and surface useful ideas, questions,
risks and alternatives, but do not silently change LOCKED decisions.

At the end of the session, export a Markdown handoff
containing useful findings and proposed changes.

The handoff is NOT the Source of Truth.
```

Bring the resulting `ZASS_HANDOFF.md` back to your trusted writer.

```text
Another AI
    ↓
brainstorm / challenge / review
    ↓
ZASS_HANDOFF.md
    ↓
trusted writer checks latest repo
    ↓
human approval
    ↓
COMMIT
```

---

## 3. CLI — coming soon

**Bootstrap status: Specification locked — implementation pending.**

Target experience:

```bash
npm create zass@latest my-project
```

Target minimal project:

```text
my-project/
├── ZASSIMPLE_EN.md
├── README.md
└── .gitignore
```

ZASSIMPLE is the default. No method-selection wizard.

> **The project-bootstrap CLI is not released yet. The command above is the locked target UX, not a currently available package.**
>
> **Developer validator:** CR-010 `zass check` **v0.3.0** is implemented locally under [`cli/`](cli/README.md), including Git-aware LOCKED-decision drift and ACTION_PLAN consistency checks. It is not published to npm; use `npm link` for local development.

---

## 4. File — start now

Download or copy:

**[ZASSIMPLE_EN.md](ZASSIMPLE/ZASSIMPLE_EN.md)**

Give it to your AI and talk normally.

You do not need to fill forms or memorize IDs.

When you want the conversation organized, say:

```text
ZASS
```

When a decision is final:

```text
LOCK DECISION
```

When approved project state should be saved:

```text
COMMIT
```

---

# The core idea

ZASS separates three things that AI conversations often blur together:

```text
AI suggestion
      ≠
Owner decision
      ≠
Git change
```

AI can propose.

Humans decide.

Git records what actually became project state.

A suggestion never becomes a decision merely because an AI wrote it. A decision never becomes a Git change merely because someone discussed it.

---

# ZASS Convergence Loop

> **Capture broadly, converge deliberately. Form candidates first; research only what can change the choice.**

```text
CAPTURE
  ↓
MATCH
  ↓
SYNTHESIZE
  ↓
RESEARCH
  ↓
CROSS-CHECK
  ↓
LOCK
  ↓
ARCHITECTURE
```

The practical rule is simple:

> **Research follows candidate formation, not idea capture.**

ZASS can collect many raw ideas, constraints, risks, evidence, test results and existing LOCKED decisions without forcing an early choice. Once enough material exists, it matches complementary ideas, synthesizes coherent candidates, removes candidates that fail must-haves, and researches only the questions that can actually change the shortlist or decision.

Research findings return to the candidate/matrix state first. They do not jump directly into architecture. The owner still LOCKs decisions; architecture follows what was genuinely decided.

**[Read the full Convergence Loop guide](wiki/Convergence-Loop.md)**

---

# From idea to architecture

```text
RAW IDEA
    ↓
EXPLORE
    ↓
QUESTIONS / RISKS / OPTIONS
    ↓
TEST when needed
    ↓
HUMAN DECISION
    ↓
LOCKED
    ↓
DRAFT ARCHITECTURE
    ↓
REVIEW
    ↓
YA, CONFIRM ARCHITECTURE
    ↓
CONFIRMED ARCHITECTURE
```

ZASS does not ask AI to invent architecture first and justify it later.

Architecture must follow the decisions that were actually accepted.

---

# A 2-minute example

You start naturally:

```text
I want to build a simple app that helps small farmers
remember daily crop tasks.
```

Ask:

```text
ZASS
```

The AI organizes what matters:

```text
Idea
Goals
Unknowns
Risks
Options
Possible decisions
```

After discussion, you choose:

```text
Use a PWA for v0.1.
Keep data local.
Provide export/import backup.
```

Those choices become explicit project decisions.

Later:

```text
DRAFT ARCH
```

ZASS builds a working architecture draft from what is known and LOCKED.

Before final confirmation:

```text
BUILD ARCHITECTURE
```

The AI shows the decisions, assumptions, and blockers being used.

Only the project owner can finally confirm:

```text
YA, CONFIRM ARCHITECTURE
```

A complete fictional walkthrough is available here:

**[Small Farm Planner example](examples/01-small-farm-planner/README.md)**

---

# ZASSIMPLE first. Full ZASS when needed.

Most projects should start with **ZASSIMPLE**.

Use it while you are mainly figuring out:

> **What should I build?**

Move to **Full ZASS** when you increasingly need to explain or prove:

> **Why should it be built this way?**

Full ZASS becomes useful when:

- important decisions depend on each other;
- evidence or experiments are needed;
- several architecture options have meaningful trade-offs;
- privacy, security, money, data loss, or operational risk matters;
- decision history becomes difficult to track conversationally.

You do not migrate because a project becomes “big”.

You migrate because the **decision complexity** becomes important.

**Start here (default, English):** [ZASSIMPLE_EN.md](ZASSIMPLE/ZASSIMPLE_EN.md)  
**Bahasa Melayu:** [ZASSIMPLE_MY.md](ZASSIMPLE/ZASSIMPLE_MY.md)  
**Full ZASS (default, English):** [ZASS.md](ZASS.md)  
**Bahasa Melayu Full ZASS:** [ZASS_MY.md](ZASS_MY.md)

---

# When the problem is choosing

Sometimes you do not need architecture.

You simply need to make a difficult choice.

That is what **ZASSELECTION** is for.

It separates:

```text
must-haves
preferences
evidence
unknowns
cost
risk
feelings
reversibility
human impact
```

AI may compare and recommend. Only the human selects.

**Default ZASSELECTION (English):** [ZASSELECTION_EN.md](ZASSELECTION/ZASSELECTION_EN.md)  
**Bahasa Melayu:** [ZASSELECTION_MY.md](ZASSELECTION/ZASSELECTION_MY.md)

---

# Architecture readiness is not evidence confidence

ZASS keeps these separate.

```text
Architecture Readiness
= Are we clear enough to build the architecture?

Evidence Confidence
= How strongly is the project supported by observed evidence?
```

A project can have:

```text
Architecture Readiness: 100%
Evidence Confidence: LOW
```

That means the architecture is internally clear enough to confirm, but important real-world assumptions may still need validation.

ZASS currently uses:

```text
UNVALIDATED
LOW
MEDIUM
HIGH
```

for Evidence Confidence.

In Full ZASS, Evidence Confidence is mandatory whenever a real `ZERO → ARCHITECTURE` assessment is shown, DRAFT ARCH readiness is evaluated, BUILD ARCHITECTURE runs, or a confirmed architecture still has open validation/experiments.

---

# One Source of Truth

For a Git-backed ZASS project:

> **GitHub is the Source of Truth.**

Not the chat. Not AI memory. Not whichever model you used last.

```text
GitHub
  ↑
trusted writer
  ↑
human approval
  ↑
ideas from any AI
```

This makes cross-AI work practical.

Different AI tools do not all need the same integrations. They only need a way to understand the project state and return useful thinking.

---

# What ZASS is not

ZASS is not:

- an AI model;
- a project-management replacement;
- a requirement to document every thought;
- a voting system between multiple AIs;
- permission for AI to silently change earlier decisions.

ZASS is a **decision-control layer for AI-assisted work**.

Its job is simple:

> **Preserve the thinking that matters, keep decisions human-controlled, and make the resulting architecture traceable.**

---

# Current methods

| Need | Use |
|---|---|
| Start casually and turn ideas into domain-appropriate design | **ZASSIMPLE** |
| Deep decision / evidence / architecture governance | **Full ZASS** |
| Choose between alternatives | **ZASSELECTION** |
| Portable DUMP continuity across chats/AIs | **ZASSPILL** |
| Track persistent implementation work | **ACTION PLAN** |

You normally do **not** need all of them at the beginning.

---

# Current status

**ZASS SYSTEM:** v0.2.0 — global DUMP / DECIDE / DESIGN routing + global EN/MY method-surface routing + AI-SYNC integration contract  
**Full ZASS:** v0.3.9 — structured surfaces follow `ZASS.md` English / `ZASS_MY.md` Malay<br>
**ZASSIMPLE:** v0.3.0  
**ZASSELECTION:** v0.2.4  
**ZASSPILL:** v1.0.0 method/protocol contract — PRODUCTION READY; global DUMP continuity route  
**License:** [MIT](LICENSE)

Current Full-ZASS commands:

```text
ZASS!!
PROCEED
PIVOT
COMMIT
```

`PROCEED` approves exactly the explicitly listed `PROPOSED FOR PROCEED` set from the latest ZASS mapping. It does not approve unlisted suggestions and does not commit or push.

`PARKED` remains a project state, but `PARK` is no longer a Full-ZASS command.

---

# Learn more

The long-form Wiki/reference is now published on GitHub:

**[Open the ZASS Wiki](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/wiki)**

Version-controlled Wiki source: [wiki/Home.md](wiki/Home.md)

It includes:

- Quick Start
- ZASSIMPLE
- Full ZASS
- Architecture Readiness + Evidence Confidence
- ACTION PLAN
- cross-AI handoff
- ZASSELECTION
- ZASSPILL v1.0 continuity
- advanced review methods
- productization and `zass check`
- Bahasa Melayu summary
- historical infographic index

The GitHub Wiki is published from the version-controlled `wiki/` source into GitHub's separate `.wiki.git` repository. The authoritative method files remain in this main repository.

---

# The principle

> **Don't shortcut thinking. Eliminate repeated thinking.**

Think freely.

Let AI challenge you.

Keep the useful state.

Make the decision yourself.

Then let architecture follow what you actually decided.




