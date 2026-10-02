# ZASSIMPLE v0.3 Working Direction

**Status:** LOCKED — DESIGN-first semantic model  
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
When design reaches 4/4 with no confirmation blocker:

```text
Ready to confirm design?
[🎨 CONFIRM DESIGN]
```

`CONFIRM DESIGN` opens the final confirmation review; it does **not** confirm automatically. Final confirmation requires the exact owner reply `YA, CONFIRM DESIGN`.

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

Practical constraints, sequencing, dependencies, experiments, feasibility findings, and execution discoveries may refine DESIGN. Design changes may refine the Action Plan.

Do not silently change a LOCKED decision.

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

Once design is confirmed:

```text
CONFIRMED DESIGN
      ↓
RE-PLAN
      ↓
SLICE ACTION PLAN
      ↓
TASKS
      ↓
DO IT
      ↓
VERIFY
      ↓
DELIVERED !!
```

Present only one current task by default. Do not confront the user with the entire Action Plan unless review is needed.

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

Each task preserves lineage back to its Action Plan item and relevant decision / design source.
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

> **DECIDE or DESIGN?**

- **DECIDE → ZASSELECTION**
- **DESIGN → ZASSIMPLE**
- **Need deeper reasoning/governance → Full ZASS**

## Future escalation contract

After ZASSIMPLE is field-tested in Temaya, define a formal notification contract for when Full ZASS may be useful.

Escalation remains advisory, not forced. The user retains the choice to continue in ZASSIMPLE or move a decision set into Full ZASS.

## Authority boundary

This v0.3 direction supersedes architecture-centric ZASSIMPLE surface terminology from v0.2. Historical changelog entries remain historical. Architecture still exists when technically applicable, but it no longer defines the universal ZASSIMPLE UX.
