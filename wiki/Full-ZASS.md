# Full ZASS

**Current version:** v0.3.8<br>
**ZASS SYSTEM:** v0.1.1

Full ZASS is the deeper decision-control method for projects where decisions, evidence, risks and architecture interact.

v0.3.8 keeps that UI/UX alignment and makes English the default Full ZASS language: progressive disclosure, next-meaningful-action UX, factual SAVE/sync receipts, and shared local/Web core semantics. Core decision semantics remain unchanged.

Core principles:

> **Don't shortcut thinking; eliminate repeated thinking.**

> **AI produces possibilities. Evidence tests them. Humans decide. Architecture follows the decisions.**

> **Capture broadly, converge deliberately. Form candidates first; research only what can change the choice.**

## ZASS Convergence Loop

```text
CAPTURE → MATCH → SYNTHESIZE → RESEARCH → CROSS-CHECK → LOCK → ARCHITECTURE
```

Research follows candidate formation, not idea capture. Capture ideas, constraints, risks, evidence and existing LOCKs without filtering too early; match complementary ideas; synthesize coherent candidates; shortlist against must-haves; research only decision-changing uncertainties; cross-check against real capabilities and evidence; update the matrix/candidate state; then let the owner LOCK decisions before architecture.

See [ZASS Convergence Loop](Convergence-Loop.md) for the expanded workflow.

## Mental model

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

## The authority boundary

```text
AI suggestion
      ≠
Owner decision
      ≠
Git change
```

AI may propose.

Only the owner approves decisions.

A Git change is real only after it is actually persisted.

## Main project records

Full ZASS can track:

- RAW IDEA
- GOALS
- NON-GOALS
- CONSTRAINTS
- IDEA candidates
- QUESTIONS
- RISKS
- METHOD REVIEWS
- OPTIONS
- ARCHITECTURE CANDIDATES
- DECISION LEDGER
- LOCKED DECISIONS
- REJECTED ideas
- DEFERRED items
- OPEN LOOPS
- EXPERIMENTS / EVIDENCE
- ARCHITECTURE READINESS
- EVIDENCE CONFIDENCE

The owner should not have to memorize these IDs during normal conversation.

## Main commands

### ZASS / ZASS!!

Map and explore the relevant discussion without silently changing LOCKED decisions.

### PROCEED

Full ZASS v0.3.5 uses an explicit approval set.

Before offering PROCEED, AI must show:

```text
PROPOSED FOR PROCEED
- [ID / action / change]
- [ID / action / change]
```

`PROCEED` approves **exactly** that set.

Unlisted suggestions are not approved.

If the set changes, conflicts or becomes ambiguous, the AI must show the revised set and wait for a new PROCEED.

PROCEED does **not** commit or push.

### PIVOT

Explore a different direction while preserving history.

### COMMIT

Persist already-approved changes as an atomic Git commit and push to the GitHub Source of Truth.

Do not report success before the real commit/push succeeds.

### DRAFT ARCH

Prepare or revise a working architecture draft from the authoritative state.

### BUILD ARCHITECTURE

Show the draft, relevant LOCKED decisions, readiness, critical assumptions and blockers.

If ready, request the exact owner confirmation:

```text
YA, CONFIRM ARCHITECTURE
```

## PARK

`PARK` is no longer a Full-ZASS command.

`PARKED` remains a valid internal/execution state for deferred work.

## IDs

Common Full-ZASS IDs include:

```text
I-xxx   Idea
Q-xxx   Question
R-xxx   Risk
MR-xxx  Method Review
AC-xxx  Architecture Candidate
D-xxx   Decision
L-xxx   Locked Decision
E-xxx   Experiment
```

## Source of Truth

For Git-backed work:

> **GitHub is authoritative.**

Do not silently replace the latest repository state with an older chat, memory or handoff.

Authoritative files:

- [ZASS.md](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ZASS.md) — default English Full ZASS
- [ZASS_MY.md](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ZASS_MY.md) — Bahasa Melayu localization
