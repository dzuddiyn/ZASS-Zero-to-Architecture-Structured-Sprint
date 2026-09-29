# ZASS Onboarding & Productization Direction

**Status:** CANDIDATE — NOT LOCKED  
**Scope:** Onboarding, CLI bootstrap, README simplification  
**Purpose:** Reduce first-use friction for solo builders

> This document records a candidate product/onboarding direction for field testing. It does not change ZASS, ZASSIMPLE, or ZASSELECTION semantics.

## Problem

Current onboarding can ask a new user to understand ZASS, ZASSIMPLE, ZASSELECTION, and several supporting concepts before they experience the core benefit.

Candidate hypothesis:

> Users should experience the benefit first, then learn the framework.

Primary pain:

> Stop repeating the same project context to every AI.

## Candidate Direction

Default onboarding should begin with **ZASSIMPLE**.

New users should not need to choose a method before starting.

Proposed experience:

```text
Idea
→ Start ZASS
→ Talk naturally
→ AI records important state
→ Continue with another AI using the same file
```

Full ZASS becomes available when decision complexity, evidence, risks, trade-offs, or architecture dependencies increase.

ZASSELECTION is introduced when the primary problem is choosing between alternatives.

## Candidate CLI

Possible command:

```bash
npm create zass@latest my-project
```

Alternative:

```bash
npx create-zass@latest my-project
```

Default generated project:

```text
my-project/
├── ZASSIMPLE.md
├── README.md
└── .gitignore
```

The initial CLI should not ask the user to choose between ZASS methods.

Default:

- English
- ZASSIMPLE
- minimal project structure

## Generated README

Keep the generated project README extremely short.

The user only needs to know:

1. Give `ZASSIMPLE.md` to an AI.
2. Talk normally.
3. Use `ZASS` when the conversation should be organized.
4. Use `LOCK DECISION` for a final decision.
5. Use `COMMIT` when approved state should be saved.
6. Give the same file to another AI to continue.

## README Product Positioning

Lead with the problem, not the methodology.

Candidate headline:

> **Think once. Keep the decisions. Continue with any AI.**

Alternative:

> **Stop repeating your project to every AI.**

Suggested onboarding order:

1. Pain / value proposition
2. Simple 4-step visual
3. Start command
4. 2-minute demo
5. Complete example
6. How it works
7. When to move from ZASSIMPLE to Full ZASS
8. ZASSELECTION
9. Advanced documentation

## Hero Mental Model

```text
RAW IDEA
    ↓
EXPLORE WITH AI
    ↓
HUMAN-APPROVED DECISIONS
    ↓
TRACEABLE ARCHITECTURE
```

Supporting idea:

> **Same file. Same decisions. Different AI.**

## 2-Minute Demo Candidate

### 0:00–0:20 — Raw idea

Example:

> “Cucumber-ginger juice from rejected cucumbers.”

### 0:20–0:55 — Organize the discussion

User says:

```text
ZASS
```

AI organizes:

- RAW IDEA
- WHY
- GOALS
- QUESTIONS
- RISKS

### 0:55–1:20 — Lock a clear decision

User answers several questions, then issues:

```text
LOCK DECISION
```

A clear decision becomes:

```text
D-001 | LOCKED
```

### 1:20–1:45 — Move to another AI

Give the same `ZASSIMPLE.md` to another AI.

Prompt:

```text
Continue this project.
```

The new AI should continue from the project state without requiring the project story to be repeated.

### 1:45–2:00 — Draft architecture

Show:

```text
DRAFT ARCH
```

Then explain the final confirmation gate:

```text
BUILD ARCHITECTURE
        ↓
YA, CONFIRM ARCHITECTURE
```

## ZASSIMPLE → Full ZASS Boundary

Stay with ZASSIMPLE while discovering **what to build**.

Move to Full ZASS when the project must explain or prove **why it should be built that way**.

Strong migration triggers:

- decisions become interdependent;
- evidence or experiments are needed;
- multiple architecture candidates require trade-off analysis;
- privacy, security, money, data-loss, or operational risk becomes significant;
- decision traceability becomes difficult to maintain conversationally.

The project size alone is not the trigger. The important factor is **decision complexity**.

## Candidate Security Default

Generated `.gitignore` should ignore common secret files:

```gitignore
.env
.env.*
!.env.example
.secrets/
*.key
*.pem
```

Documentation must also state:

> Never place passwords, API keys, tokens, or sensitive personal data inside tracked ZASS Markdown files.

A `.gitignore` does not protect secrets already pasted into a tracked file.

## Validation Before LOCK

Do not make this direction official yet.

Test through real usage first.

Suggested experiment:

1. Build the smallest `create-zass` prototype.
2. Give it to a new user without explaining ZASS.
3. Measure whether they can start a project and continue it in a second AI without help.
4. Record confusion and friction.
5. Revise onboarding.
6. Only then consider LOCKING the direction.

## Candidate Success Signals

- A new user starts without reading advanced documentation.
- A new user understands the core ZASS value within a few minutes.
- No method-selection question is required at first use.
- The same project file can be handed to another AI successfully.
- The user understands the distinction between conversation and LOCKED decisions.
- Advanced complexity remains discoverable without blocking onboarding.

## Decision Status

No decision in this document is LOCKED.

This document records a **candidate product/onboarding direction** for field testing.

Git history preserves this proposal without making it part of the locked ZASS baseline.
