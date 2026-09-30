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

**Status: Specification locked — implementation pending.**

Target experience:

```bash
npm create zass@latest my-project
```

Target minimal project:

```text
my-project/
├── ZASSIMPLE.md
├── README.md
└── .gitignore
```

ZASSIMPLE is the default. No method-selection wizard.

> **The CLI is not released yet. The command above is the locked target UX, not a currently available package.**

---

## 4. File — start now

Download or copy:

**[ZASSIMPLE.md](ZASSIMPLE.md)**

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

**Start here:** [ZASSIMPLE.md](ZASSIMPLE.md)  
**English ZASSIMPLE:** [ZASSIMPLE_EN.md](ZASSIMPLE_EN.md)  
**Full method:** [ZASS.md](ZASS.md)  
**English Full method:** [ZASS_EN.md](ZASS_EN.md)

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

**[ZASSELECTION.md](ZASSELECTION.md)**  
**[ZASSELECTION_EN.md](ZASSELECTION_EN.md)**

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
| Start casually and preserve important decisions | **ZASSIMPLE** |
| Deep decision / evidence / architecture governance | **Full ZASS** |
| Choose between alternatives | **ZASSELECTION** |
| Track persistent implementation work | **ACTION PLAN** |

You normally do **not** need all of them at the beginning.

---

# Current status

**Full ZASS:** v0.3.5  
**ZASSIMPLE:** v0.1.6  
**ZASSELECTION:** v0.1.0  
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

Detailed documentation is moving to the **GitHub Wiki** so this README can remain a fast landing page.

The Wiki/reference layer will contain:

- Full ZASS guide
- ZASSIMPLE guide
- ZASSELECTION guide
- architecture workflow
- ZERO → ARCHITECTURE
- Evidence Confidence
- ACTION PLAN
- cross-AI handoff
- advanced review methods
- diagrams and infographics
- implementation and integration notes

Until that migration is complete, the authoritative method files remain in this repository.

---

# The principle

> **Don't shortcut thinking. Eliminate repeated thinking.**

Think freely.

Let AI challenge you.

Keep the useful state.

Make the decision yourself.

Then let architecture follow what you actually decided.
