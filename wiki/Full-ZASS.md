# Full ZASS

**Current version:** v0.3.10<br>
**ZASS SYSTEM:** v0.2.1

Full ZASS is the deeper decision-control method for projects where decisions, evidence, risks and architecture interact.

Global ZASS SYSTEM routing is now **DUMP / DECIDE / DESIGN**: DUMP → ZASSPILL, DECIDE → ZASSELECTION, DESIGN → ZASSIMPLE. Full ZASS remains an escalation path when stronger governance is needed.

v0.3.10 keeps the global EN/MY surface contract and adds the canonical technical flow: Architecture Challenge → owner-approved PRE-ARCH execution baseline → capable-reasoner detailed ACTION PLAN → atomic evidence loop → PRE-ARCH review/revision → last evidence-backed architecture challenge → final improvement/revision → owner architecture confirmation → rebuilt release Action Plan → first-release atomic build → DELIVERED !!. Core owner decision authority remains unchanged.

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
ARCHITECTURE CHALLENGE
    ↓
CONTROLLED REVISION
    ↓
OWNER REVIEW
    ↓
YA, LOCK PRE-ARCH
    ↓
PRE-ARCH BASELINE — LOCKED FOR EXECUTION
    ↓
CAPABLE REASONER / DETAILED ACTION PLAN
    ↓
ATOMIC TASKS
    ↓
RESULT / EVIDENCE
    ↓
PRE-ARCH REVIEW / REVISION
    ↓
SUFFICIENT IMPLEMENTATION EVIDENCE
    ↓
LAST ARCHITECTURE CHALLENGE
    ↓
FINAL IMPROVE / REVISION
    ↓
YA, CONFIRM ARCHITECTURE
    ↓
REBUILD RELEASE ACTION PLAN
    ↓
RELEASE ATOMIC TASKS
    ↓
BUILD / TEST / INTEGRATE / HARDEN / VERIFY
    ↓
RELEASE ACCEPTANCE
    ↓
DELIVERED !!
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

### ARCHITECTURE CHALLENGE

Before major implementation/final confirmation of a material technical architecture, challenge the mature draft using the smallest useful review set. Classify findings as `KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED`. If a LOCKED decision would need to change, stop at the owner decision gate.

For complex/high-impact review, prefer a stronger reasoning capability or Work-style analysis environment when available; ZASS remains tool-agnostic.

### LOCK PRE-ARCH

After challenge/revision coherence, the owner may approve the current technical draft as `PRE-ARCH BASELINE — LOCKED FOR EXECUTION` with `YA, LOCK PRE-ARCH`. This is a versioned execution hypothesis, not final architecture confirmation.

A capable reasoner/planner then creates the detailed ACTION PLAN and atomic tasks. Task results are reviewed against PRE-ARCH; material architecture findings revise/supersede PRE-ARCH, while LOCKED-decision impact stops at the owner gate.

### LAST ARCHITECTURE CHALLENGE

After PRE-ARCH evidence is sufficient, run one last evidence-backed architecture challenge focused on what the implementation revealed. Apply justified final improvement/revision; if a LOCKED decision must change, stop at the owner gate.

### BUILD ARCHITECTURE

Open the final confirmation gate only after the evidence required by PRE-ARCH/ACTION_PLAN is sufficient, the LAST ARCHITECTURE CHALLENGE is resolved, and any required final revision is incorporated. Show the final candidate, relevant LOCKED decisions, readiness, challenge history, implementation evidence, planning findings, and accepted/deferred unknowns.

If ready, request the exact owner confirmation:

```text
YA, CONFIRM ARCHITECTURE
```

### BUILD FIRST RELEASE

After `ARCHITECTURE CONFIRMED`, rebuild/rebase ACTION PLAN from confirmed architecture and current implementation state. Slice fresh RELEASE BUILD atomic tasks, build the first release version, complete required tests/integration/hardening/verification and release acceptance, then mark `DELIVERED !!`. PRE-ARCH evidence tasks are not automatically the release queue. Material architecture defects found during release work reopen governed architecture review.

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

With the Malay method active, structured tables/cards/I-AC-D labels render in Bahasa Melayu. With the English method active, those structured surfaces remain English even if ordinary conversation continues in Malay.

## Architecture to execution

For material technical architecture, atomic tasks are derived **after PRE-ARCH lock and detailed planning, before final confirmation**. Coding workers execute bounded tasks only; reviewers feed results back to PRE-ARCH until sufficient evidence exists for final architecture confirmation. See [Architecture-to-Execution](Architecture-to-Execution.md).
