# ZASSIMPLE v0.3 Working Direction

**Current method version:** v0.3.2
**Status:** LOCKED — DESIGN-first semantic model + pre-confirmation Challenge / Re-challenge gate + architecture-to-execution atomic-task contract
**Date:** 2026-10-02  
**Owner:** Project Owner

## Core principle

> **ZASSIMPLE: lightweight on the surface, but lineage stays strong all the way to execution.**

The user should not need to learn internal method terminology before getting value.

## Main identity

> 🧠 **DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!**

> **From messy ideas to 👍 THUMBS-UP design.**

Playful principle:

> **Dump the DUMB. Get to THUMBS-Up. 👍**

Serious principle:

> Dump first.  
> Structure the mess.  
> Decide wise.  
> Design the rest.  
> Execute fast.  
> Deliver the best.
## Human-facing UX: The IDEA Trick

- 💬 **I — Idea Dump**
- 🧭 **D — Distill What Matters**
- 🔒 **E — Establish Decisions**
- 🎨 **A — Assemble the Design**

**IDEA does not replace the method. IDEA is the surface UX for ZASSIMPLE.**

The user only needs to **DUMP**. AI performs distillation, lineage capture, planning, and state management behind the scenes.

The default landing should lead with:

> ## Got an idea? **Dump it.** 💬
>
> Say it naturally. ZASSIMPLE handles the structure behind the scenes.

## DESIGN is universal

DESIGN is the universal ZASSIMPLE surface/output. Architecture is only a technical subtype when it actually applies.

Examples:
- shop / service → layout, customer-flow, service, operating design;
- business → operating model / process design;
- product → product design;
- software / IoT → system design, with architecture where useful;
- personal / practical project → plan, structure, workflow, or arrangement.

Do **not** force architecture language onto a non-technical project.
## Stage Pulse

Show a compact Stage Pulse when `ZASS/ZASS!!` is intentionally requested or when the lifecycle stage materially changes. Do not repeat it on every ordinary reply.

```text
📍 DESIGN → next: DO IT
Design        [██████░░░░] 3/4
Action Detail [████░░░░░░] 2/4
```

During execution:

```text
📍 DO IT — 4/7 tasks delivered
```

For ordinary work, Action Detail execution follows confirmed design. For substantial technical architecture, Action Detail execution begins after the owner locks the PRE-ARCH baseline; final design confirmation remains later, after sufficient evidence.

Design Progress uses explicit coverage:
1. purpose;
2. main flow;
3. main elements;
4. relevant LOCKED decisions.

Action Detail Progress uses:
1. implementation sequence;
2. dependencies / constraints;
3. task slices;
4. pass / verification conditions.

During DESIGN, progressively surface:

```text
🎨 Design forming
Design [██████░░░░] 3/4
7 decisions locked
2 implementation constraints
1 critical question
```
When design reaches 4/4 with no confirmation blocker, **4/4 means ready to challenge, not automatically ready to confirm**.

Surface a lightweight pre-confirmation challenge:

```text
🥊 Draft ready for challenge

Recommended challenge:
[AI-selected thinking method]

Why:
[one short reason]

Challenge the draft before final confirmation?

Ordinary / non-technical:
[🥊 CHALLENGE DESIGN !]   [🎨 CONTINUE TO CONFIRM]

Substantial technical architecture:
[🥊 CHALLENGE DESIGN !]   ← required before PRE-ARCH execution baseline
```

The AI selects **one** suitable thinking method automatically from the smallest useful set for the current context. Do not make the user choose the methodology.

Method-selection rule:
- unclear or fragile assumptions → **Assumption Challenge**;
- unclear fundamentals / overcomplicated concept → **First-Principles Check**;
- reliability, safety, operational failure, or “what could go wrong?” → **Pre-mortem / Failure-Mode Review**;
- hard resource, cost, space, dependency, or implementation limits → **Constraint Test**;
- customer/user/service flow → **User-Journey Review**;
- competing benefits with meaningful downsides → **Trade-off Review**;
- implementation practicality or dependency ordering → **Feasibility / Dependency Review**.

Choose the method that is most likely to expose a material weakness **before confirmation**. Do not turn ZASSIMPLE into a review-methodology menu.

`CHALLENGE DESIGN` runs one focused challenge pass:
- **PASS** → that challenge found no material weakness;
- **REFINE** → material weakness found; return to DESIGN and refine;
- classify material findings internally as `KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED`;
- record the selected method and material finding in the design state;
- if resolving a finding requires changing a LOCKED decision, stop at an explicit owner decision gate.

For ordinary/non-technical design, the existing lightweight PASS → RE-CHALLENGE / CONFIRM path remains valid, and the owner may explicitly skip the optional first challenge where appropriate.

For **substantial technical architecture**, Challenge is mandatory before material execution. A PASS/revision-coherent result opens the PRE-ARCH owner gate instead of final confirmation:

```text
🥊 Challenge complete
Ready to lock the execution baseline?

[🔒 LOCK PRE-ARCH]   [🥊 RE-CHALLENGE DESIGN ?!]
```

`LOCK PRE-ARCH` requires the exact owner reply `YA, LOCK PRE-ARCH` and creates `PRE-ARCH BASELINE — LOCKED FOR EXECUTION`. It is not final confirmation. Detailed planning, atomic tasks and result evidence then feed PRE-ARCH review.

When the evidence required by PRE-ARCH/ACTION_PLAN is sufficient, run one **LAST DESIGN / ARCHITECTURE CHALLENGE** against the evidence-backed final candidate, then apply any justified final improvement/revision. `CONFIRM DESIGN` is surfaced only after that last challenge is resolved. Final confirmation still requires the exact owner reply `YA, CONFIRM DESIGN`.

After confirmed technical design/architecture, rebuild the ACTION PLAN from the confirmed design and current implementation state. Slice fresh release atomic tasks, build the first release, complete required test/integration/hardening/verification and release acceptance, then mark `DELIVERED !!`. Do not reuse the PRE-ARCH evidence queue blindly as the release plan.

For technical projects, legacy/domain-specific architecture commands may remain compatible aliases, but the universal surface stays DESIGN.

## Hidden planning and design feedback

Implementation thinking discovered during DECIDE or DESIGN must be preserved in action-plan lineage without burdening the user.

```text
DECISIONS
    ↓
ACTION PLAN
    ↕
DESIGN
```

Practical constraints, sequencing, dependencies, experiments, feasibility findings, migration, testability, rollback, security/integration checkpoints and execution discoveries may refine DESIGN. Design changes may refine the Action Plan.

ACTION PLAN may request DESIGN/architecture review but is not design/architecture authority. Do not hide an architecture flaw inside a task and do not silently change a LOCKED decision.

## Lightweight decision UX

Ordinary conversation should not expose ledger IDs unless the owner asks for structure/audit or the ID materially helps a ZASS review.

```text
🔒 Ready to lock
[plain-language decision]

Why:
[one short reason]
```

The fixed footer provides `[📌 PROCEED/LOCK]`. AI never locks automatically.
## Execution UX

For ordinary/non-technical work, confirmed design may proceed directly to DO IT.

For substantial technical architecture:

```text
CHALLENGED / REVISED DESIGN
      ↓
YA, LOCK PRE-ARCH
      ↓
PRE-ARCH BASELINE — LOCKED FOR EXECUTION
      ↓
CAPABLE REASONER / PLANNER
      ↓
DETAILED ACTION PLAN ↔ PRE-ARCH
      ↓
ATOMIC TASKS
      ↓
DO IT — ONE TASK
      ↓
RESULT / VERIFY
      ↓
PRE-ARCH REVIEW
      ├─ PASS → NEXT TASK
      ├─ REWORK → TASK / ACTION PLAN
      ├─ ARCH FINDING → REVISE PRE-ARCH
      └─ LOCKED DECISION IMPACT → OWNER
      ↓
SUFFICIENT EVIDENCE
      ↓
LAST DESIGN / ARCHITECTURE CHALLENGE
      ↓
FINAL IMPROVE / REVISION
      ↓
CONFIRM DESIGN
      ↓
YA, CONFIRM DESIGN
      ↓
CONFIRMED DESIGN
      ↓
REBUILD RELEASE ACTION PLAN
      ↓
RELEASE ATOMIC TASKS
      ↓
BUILD FIRST RELEASE
      ↓
TEST / INTEGRATE / HARDEN / VERIFY
      ↓
RELEASE ACCEPTANCE
      ↓
DELIVERED !!
```

Present only one current task by default. Do not confront the user with the entire Action Plan unless review is needed.

Keep PRE-ARCH evidence tasks and post-confirmation RELEASE BUILD tasks distinguishable. If a release task reveals a material architecture defect, stop normal release flow and reopen governed design/architecture review; the coding worker must not silently change confirmed architecture.

```text
🚀 STEP 1 / N — [short task name]

Do:
[one concrete action]

Why:
[one short reason]

Pass:
[observable success condition]

If blocked:
[one safe fallback or return point]

Then:
[STEP n+1 — short next-step label]
```

Each task preserves lineage back to its Action Plan item, current PRE-ARCH/design baseline, and relevant decision source. Each technical task result must also record architecture impact and reviewer disposition before the next task becomes eligible.

A task becomes READY only after atomic readiness is satisfied: one primary outcome, bounded scope, dependencies/inputs, allowed/forbidden scope, acceptance criteria, tests/regressions, evidence, commit expectation where relevant, and STOP & ESCALATE rules. If architecture judgment remains, return to planning.

Coding workers execute bounded tasks only. They follow the shared [`ZASS Architecture-to-Execution Standard`](../../docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md). Complex architecture challenges should prefer a stronger reasoning capability or Work-style analysis environment when available, while remaining tool-agnostic.
## DELIVERED !! closure

Use `DELIVERED !!` only when the intended result is actually delivered:

```text
✅ DELIVERED !!

[plain-language delivered result]

✓ Built
✓ Verified
✓ Matches design
✓ Recorded

From messy ideas to 👍 THUMBS-UP design.
```

If any check is false, remain in DO IT / VERIFY and state what is missing.

## Footer rule

Keep the footer fixed and simple:

```text
[🔬 ZASS!!] -- [📌 PROCEED/LOCK] -- [📚 SAVE]
```

- `🔬 ZASS!!` → open the current structured view/status when intentionally invoked.
- `📌 PROCEED/LOCK` → owner confirms the currently surfaced Ready-to-lock decision.
- `📚 SAVE` → persist current project state, update version/history when appropriate, and commit when write access is available.

Contextual actions such as `[🎨 CONFIRM DESIGN]` appear only when their stage requires them; they do not occupy the fixed footer.
## Product identity

> **ZASS SYSTEM starts simple.**

> **DUMP / DECIDE / DESIGN**

- **DUMP → ZASSPILL**
- **DECIDE → ZASSELECTION**
- **DESIGN → ZASSIMPLE**
- **Need deeper reasoning/governance → Full ZASS**

## Future escalation contract

After ZASSIMPLE is field-tested in Temaya, define a formal notification contract for when Full ZASS may be useful.

Escalation remains advisory, not forced. The user retains the choice to continue in ZASSIMPLE or move a decision set into Full ZASS.

## Authority boundary

This v0.3 direction supersedes architecture-centric ZASSIMPLE surface terminology from v0.2. Historical changelog entries remain historical. Architecture still exists when technically applicable, but it no longer defines the universal ZASSIMPLE UX.
