# ZASSIMPLE v0.2 — Structure Renewal Plan

**Status:** HISTORICAL v0.2 STRUCTURE PLAN — IMPLEMENTED; SEMANTICS SUPERSEDED BY v0.3  
**Date:** 2026-10-01  
**Owner:** Project Owner  
**Current baseline:** ZASSIMPLE v0.3.1 in dedicated `ZASSIMPLE/` folder

> **ZASSIMPLE: lightweight di permukaan, tetapi lineage tetap kuat sampai execution.**

This document records the v0.2 structural renewal plan. The structure was implemented. Its architecture-centric surface terminology is superseded by the locked v0.3 DESIGN-first working direction in `ZASSIMPLE_V03_WORKING_DIRECTION.md`: DESIGN is universal; architecture is an optional technical subtype.

---

## 1. Locked identity

### The IDEA Trick with ZASSIMPLE

- 💬 **I — Idea Dump**
- 🧭 **D — Distill What Matters**
- 🔒 **E — Establish Decisions**
- 🏗️ **A — Architecture**

> **IDEA does not replace the method. IDEA is the surface UX for ZASSIMPLE.**

### Main identity

> 🧠 **DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!**
>
> **From messy ideas to 👍 THUMBS-UP architecture.**

### Playful principle

> **Dump the DUMB. Get to THUMBS-Up. 👍**

### Serious principle

> **Dump first.**  
> **Structure the mess.**  
> **Decide wise.**  
> **Architect the rest.**  
> **Execute fast.**  
> **Deliver the best.**

---

## 2. Locked lifecycle

The official ZASSIMPLE lifecycle becomes:

```text
DUMP
  ↓
DISTILL
  ↓
DECIDE
  ↓
DESIGN
  ↓
DO IT
  ↓
DELIVERED !!
```

ZASSIMPLE no longer conceptually ends at architecture. Architecture is the bridge between a sound decision set and fast execution.

---

## 3. Target repository structure

ZASSIMPLE moves into its own dedicated folder inside the same ZASS SYSTEM repository.

```text
ZASS-Zero-to-Architecture-Structured-Sprint/
│
├── ZASS.md
├── ZASS_EN.md
│
├── ZASSIMPLE/
│   ├── README.md
│   ├── ZASSIMPLE_EN.md      ← default landing
│   ├── ZASSIMPLE_MY.md      ← Bahasa Melayu
│   ├── ACTION_PLAN.md
│   ├── DESIGN.md
│   ├── TASKS.md
│   └── docs/
│       ├── ZASSIMPLE_V02_STRUCTURE_RENEWAL_PLAN.md
│       └── ZASSIMPLE_V03_WORKING_DIRECTION.md
│
├── ZASSELECTION/
│   └── ...
│
├── docs/
├── wiki/
└── ...
```

The folder boundary prevents ZASSIMPLE execution artifacts from being mixed with Full ZASS or ZASSELECTION artifacts.

---

## 4. Artifact authority and responsibility

### `ZASSIMPLE_EN.md` / `ZASSIMPLE_MY.md`

Purpose: lightweight reasoning and authoritative ZASSIMPLE method/project-state template. `ZASSIMPLE_EN.md` is the default landing; `ZASSIMPLE_MY.md` is the Bahasa Melayu companion. Structured method UI follows the active file language; conversation language may differ without forcing a file switch.

Contains primarily:

- idea capture;
- distilled goals, constraints, assumptions, questions, and risks;
- agreed candidates when still useful;
- LOCKED decisions;
- current lifecycle stage;
- concise lineage references to Action Plan / Architecture / Tasks.

It must remain readable and conversational rather than becoming a large execution ledger.

### `ACTION_PLAN.md`

Purpose: first-class implementation-planning artifact.

Implementation thoughts that appear while decisions or architecture are being formed must be captured here rather than lost in chat.

Typical content:

- implementation approaches;
- sequencing;
- dependencies;
- feasibility findings;
- experiments;
- constraints discovered during planning;
- next executable slices;
- pass/fail or stop conditions.

**Locked relationship:**

```text
Decisions
    ↓
ACTION PLAN
    ↕
ARCHITECTURE
```

`ACTION_PLAN.md` is not merely downstream from architecture.

Practical execution thinking may reveal constraints, dependencies, feasibility problems, or simpler approaches that **feed back into architecture construction**.

Architecture may in turn reshape the action plan.

Neither file may silently override a LOCKED owner decision.

### `DESIGN.md`

Purpose: architecture artifact separated from conversational reasoning.

Contains:

- purpose;
- major components;
- system/workflow relationships;
- constraints inherited from LOCKED decisions;
- architecture assumptions that remain explicitly open;
- draft and confirmed architecture state.

Architecture must retain lineage back to relevant decisions and action-plan findings.

### `TASKS.md`

Purpose: executable work sliced from the Action Plan.

```text
ACTION PLAN
     ↓
SLICE
     ↓
TASKS
     ↓
DO IT
```

Each meaningful task should preserve enough lineage to identify:

- its originating Action Plan item;
- relevant decision(s), when applicable;
- relevant architecture element(s), when applicable;
- expected result / verification condition;
- execution status.

Tasks execute the current plan. They do not gain authority to rewrite LOCKED decisions.

If execution discovers a structural problem:

```text
TASK finding
    ↓
ACTION_PLAN.md
    ↕
DESIGN.md
    ↓
owner decision if a LOCKED decision must change
```

---

## 5. DELIVERED !! gate

`DONE` is not the lifecycle end-state.

The final state is:

> **DELIVERED !!**

Minimum semantics:

```text
Built
  +
Checked
  +
Intended result works
  +
Result / lineage recorded
        ↓
DELIVERED !!
```

A task may be done while the intended outcome is still not delivered.

---

## 6. Surface UX vs internal structure

ZASSIMPLE remains deliberately simple for the user.

The user should normally experience:

```text
talk naturally
    ↓
AI distills
    ↓
owner decides
    ↓
architecture forms
    ↓
action is sliced
    ↓
work executes
    ↓
result delivered
```

The user should not be required to manually maintain every file or understand the internal artifact model before starting.

Core design principle:

> **Simple on the surface. Structured underneath. Traceable through delivery.**

Official locked phrasing remains:

> **ZASSIMPLE: lightweight di permukaan, tetapi lineage tetap kuat sampai execution.**

---

## 7. Core command continuity

Existing human-authority rules remain.

Core user controls remain centered on:

```text
[ 🧠 ZASS ]
[ 🔒 LOCK DECISION ]
[ 📦 COMMIT ]
[ 🏗️ CONFIRM ARCHITECTURE ]
```

Implementation may retain intermediate draft/build architecture gates where useful, but must not weaken owner confirmation or allow AI to silently LOCK, COMMIT, or confirm architecture.

Task slicing and execution must not introduce a second decision authority.

---

## 8. Migration plan from current v0.1.7 structure

### Phase 0 — reference audit

Before moving files:

- inventory all references to root `ZASSIMPLE_EN.md`, `ZASSIMPLE_MY.md`, and historical `ZASSIMPLE.md` paths;
- inventory README, Wiki, docs, examples, CLI/bootstrap, and validator assumptions;
- record current live HEAD before implementation.

### Phase 1 — create dedicated ZASSIMPLE folder

Create:

```text
ZASSIMPLE/
├── README.md
├── ZASSIMPLE_EN.md
├── ZASSIMPLE_MY.md
├── ACTION_PLAN.md
├── DESIGN.md
├── TASKS.md
└── docs/
```

Move the current language templates into the folder while preserving their semantics before applying the v0.2 renewal.

### Phase 2 — separate concerns

Refactor the current single-file ZASSIMPLE model:

- conversational reasoning / decisions stay in the selected language template (`ZASSIMPLE_EN.md` default, or `ZASSIMPLE_MY.md`);
- implementation thinking moves to `ACTION_PLAN.md`;
- design now lives in `DESIGN.md`; technical architecture is included there only when applicable;
- sliced execution work moves to `TASKS.md`.

Avoid duplicating the same authority in multiple files.

### Phase 3 — implement IDEA + 6D lifecycle

Update ZASSIMPLE prompts and response rules to support:

```text
DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!
```

The IDEA Trick is the surface UX. The 6D flow is the project lifecycle.

### Phase 4 — implement lineage rules

Add explicit cross-file references sufficient to trace:

```text
Idea
→ distilled item
→ decision
→ action-plan item
↔ architecture element
→ task
→ execution evidence/result
→ DELIVERED !!
```

Do not require heavyweight identifiers where simple links are sufficient, but lineage must survive cross-AI handoff and later review.

### Phase 5 — update all repository references atomically

Update affected:

- root README;
- Wiki pages;
- docs;
- examples;
- onboarding guidance;
- CLI/bootstrap specification or implementation;
- validators/tests that assume root ZASSIMPLE paths.

No release should intentionally leave documentation pointing to deleted paths.

### Phase 6 — validation

Verify at minimum:

1. a new messy idea can start without setup friction;
2. decisions remain owner-controlled;
3. implementation thoughts are preserved in Action Plan;
4. Action Plan can refine Architecture and vice versa;
5. Action Plan slices cleanly into Tasks;
6. task findings can feed back without silently changing LOCKED decisions;
7. confirmed architecture remains explicitly owner-confirmed;
8. a second AI can reconstruct lineage from repository files;
9. `DELIVERED !!` means the intended result was verified, not merely that work stopped;
10. no broken repository links or stale ZASSIMPLE paths remain.

### Phase 7 — release

The structural renewal landed in **ZASSIMPLE v0.2.0**; global language routing reached **v0.2.5**; the current DESIGN-first semantics are **v0.3.0**.

The structure and UX contract are now implemented and validated against the locked requirements.

---

## 9. Stop rules

Stop the migration and fix consistency before release if:

- root/folder ZASSIMPLE copies become competing authorities;
- Action Plan starts acting as a second decision ledger;
- Architecture silently overrides LOCKED decisions;
- Tasks lose lineage to their source plan;
- task findings can mutate architecture without review;
- normal users must understand the multi-file model just to brainstorm;
- documentation or CLI points to stale file locations;
- cross-AI continuation becomes harder instead of easier.

---

## 10. Locked outcome

The intended renewal is:

```text
MESSY IDEA
    ↓
DUMP
    ↓
DISTILL
    ↓
DECIDE
    ↓
ACTION PLAN ↔ ARCHITECTURE
    ↓
SLICE INTO TASKS
    ↓
DO IT
    ↓
VERIFY
    ↓
DELIVERED !!
```

The method remains lightweight to use while preserving durable lineage from the first idea through the delivered result.

**Implementation status:** IMPLEMENTED AND VALIDATED — current ZASSIMPLE v0.3.1.
**Plan status:** HISTORICAL; v0.3 DESIGN-first semantics supersede architecture-centric surface terminology.



