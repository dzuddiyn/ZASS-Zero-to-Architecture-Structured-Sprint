# ZASS Convergence Loop

> **Capture broadly, converge deliberately: do not filter ideas too early. Form candidates first, then research only questions that can change the choice; cross-check evidence, LOCK decisions, and let architecture emerge from those decisions.**

The core rule:

> **Research follows candidate formation, not idea capture.**

## Canonical loop

```text
CAPTURE → MATCH → SYNTHESIZE → RESEARCH → CROSS-CHECK → LOCK → ARCHITECTURE
```

## Expanded working flow

```text
IDEA DUMP
    ↓
CAPTURE
do not filter too early
    ↓
MATRIX
ideas + constraints + risks + evidence + existing LOCKs
    ↓
MATCH
find ideas that complement one another
    ↓
SYNTHESIZE
form 2–3 coherent candidates when useful
    ↓
SHORTLIST
remove candidates that fail must-haves / constraints
    ↓
DEEP RESEARCH
research only questions that can change the choice
    ↓
CROSS-CHECK
official docs + existing projects + real limitations + evidence
    ↓
UPDATE MATRIX
what did research confirm or break?
    ↓
LOCK DECISIONS
    ↓
DRAFT ARCH
    ↓
BUILD ARCHITECTURE
```

## Why this exists

ZASS is meant to reduce repeated thinking without cutting off exploration.

Early filtering can discard a useful idea before it has a chance to combine with another idea, constraint, or existing decision. Researching everything too early creates the opposite problem: the project gets buried under technologies, alternatives, and information before a meaningful candidate exists.

The Convergence Loop separates those phases.

### CAPTURE

Collect useful raw material with provenance and status:

- owner ideas;
- AI ideas;
- constraints;
- risks;
- evidence;
- test results;
- existing LOCKED decisions;
- relevant external patterns.

Do not force every new idea into a choice.

### MATRIX

Bring the current material into a comparison surface when useful. A matrix can expose:

- must-have fit;
- strengths;
- risks/weaknesses;
- evidence;
- unknowns;
- current status.

The matrix is a reasoning surface, not decision authority.

### MATCH

Look for ideas that reinforce or complement one another.

The strongest candidate may be:

```text
Idea A
+ Idea C
+ Constraint X
+ proven external pattern
- weakness from Idea B
= Candidate AC-002
```

The goal is not merely to find which raw idea “wins”.

### SYNTHESIZE

Turn useful combinations into coherent candidates.

Use 2–3 candidates when that improves comparison, but do not invent alternatives just to reach a quota.

### SHORTLIST

Remove candidates that clearly fail stated must-haves or constraints.

Do not spend deep-research effort on an option already ruled out by the project.

### RESEARCH

Research only the uncertainties whose answers could change:

- the shortlist;
- a trade-off;
- a major risk;
- a decision;
- architecture feasibility.

Bad research question:

> “Research everything about Home Assistant, MCP, ESPHome, voice, and OpenClaw.”

Better research question:

> “This candidate depends on room-aware device context through Home Assistant MCP. Is that capability supported, what are its limitations, and what proven implementation pattern should we reuse?”

### CROSS-CHECK

Cross-check the candidate against the strongest available sources:

- official documentation;
- current capabilities;
- existing projects;
- implementation patterns;
- known limitations;
- observed evidence.

External projects are patterns to learn from, not automatic authority.

### UPDATE MATRIX

Research results return to the candidate/matrix state first.

```text
RESEARCH
   ↓
finding
   ↓
matrix / candidate changes
   ↓
owner can see why
   ↓
LOCK
```

Research must not silently rewrite LOCKED decisions or jump directly into architecture.

### LOCK

AI may recommend.

Evidence may strengthen or weaken a candidate.

Only the owner authorizes the final LOCKED decision.

### ARCHITECTURE

Architecture follows the decisions that survived capture, matching, synthesis, research, cross-checking, and owner approval.

## Convergence trigger

Do not wait for an arbitrary number of ideas.

Move from CAPTURE toward convergence when both are true:

1. enough material exists to form at least one coherent candidate; and
2. there is a specific evidence question whose answer could change the decision.

This lets four strong ideas converge quickly while thirty disconnected ideas can remain in capture until they become structurally useful.

## Relationship to ZASSIMPLE

ZASSIMPLE v0.2.5 uses the **CURRENT SELECTION MATRIX** as a lightweight convergence surface.

It does not add mandatory weighted scoring or a `SELECT` command. Final authority remains `LOCK DECISION`.

## Relationship to Full ZASS

Full ZASS uses the same convergence principle with richer records for risks, experiments, evidence, architecture candidates, decisions, and LOCKED history.

The Convergence Loop adds no new command and no new mandatory state. It is an operating principle governing **when to keep exploring and when to focus research toward a decision**.

## Authority invariant

```text
AI suggestion ≠ Owner decision ≠ Git change
```

Convergence does not weaken this boundary.

Research informs.

Humans decide.

Git records what was actually approved.
