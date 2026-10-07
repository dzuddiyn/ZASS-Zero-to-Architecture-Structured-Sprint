# ZASS PERSONAL WORKFLOW TEMPLATE
## From Messy Idea → Confident Execution

**Type:** Personal/shareable operating pattern built on ZASS / ZASSIMPLE  
**Purpose:** brainstorming, architecture, planning and execution for AI/software/system projects  
**Principle:** **lightweight di permukaan, lineage kuat sampai execution.**

> This is a practical workflow pattern, not a replacement for the canonical ZASS/ZASSIMPLE method.

---

# 1. CORE LOOP

```text
DUMP
  ↓
SAVE
  ↓
DUMP MORE
  ↓
DISTILL / PADANKAN
  ↓
OPEN WIDE
  ↓
NARROW DOWN
  ↓
DECIDE / LOCK
  ↓
PRE-DESIGN / PRE-ARCH DRAFT
  ↓
ACTION PLAN v0
  ↓
ARCHITECTURE / PLAN CHALLENGE
  ↓
CONTROLLED REVISION
  ↓
OWNER REVIEW
  ↓
LOCK PRE-ARCH BASELINE
  ↓
CAPABLE REASONER / PLANNER
  ↓
DETAILED ACTION PLAN ↔ PRE-ARCH
  ↓
PRE-EXECUTION AUDIT
  ↓
SLICE ATOMIC TASKS
  ↓
EXECUTE ONE TASK
  ↓
TEST + VERIFY + RESULT
  ↓
PRE-ARCH REVIEW
  ↙       ↓        ↘
REWORK  NEXT TASK  REVISE PRE-ARCH
  ↓
SUFFICIENT IMPLEMENTATION EVIDENCE
  ↓
FINAL DESIGN / ARCHITECTURE REVIEW
  ↓
LAST ARCHITECTURE CHALLENGE
  ↓
FINAL IMPROVE / REVISION
  ↓
CONFIRM DESIGN / ARCHITECTURE
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

The repeated **OPEN WIDE → NARROW DOWN** loops are intentional. Each loop answers a different question.

---

# 2. PHASE A — DUMP WITHOUT PREMATURE ARCHITECTURE

## DUMP

Put everything down:
- problem;
- wish;
- rough idea;
- feature;
- technology;
- screenshot/link;
- external AI proposal;
- random thought;
- concern;
- future dream.

Rules:
- do not force structure too early;
- do not promote suggestions into architecture automatically;
- label provenance: owner idea / inference / external proposal / research;
- preserve contradictions instead of hiding them.

## SAVE

Save a checkpoint before continuing to brainstorm.

Why:
- prevents useful ideas from disappearing;
- creates lineage;
- allows later comparison against changed thinking.

## DUMP MORE

Continue until the idea space feels sufficiently explored.

A useful signal to stop dumping:
> “I am now repeating themes more than discovering genuinely new areas.”

---

# 3. PHASE B — DISTILL / PADANKAN

Group the dump into:
- goals;
- users;
- must-haves;
- constraints;
- authority boundaries;
- capabilities;
- integrations;
- future ideas;
- risks;
- open questions;
- explicit decisions.

Do not choose technology merely because it appeared in the dump.

Output:
- clean problem map;
- candidate domains;
- conflicts/gaps;
- decision candidates.

---

# 4. PHASE C — OPEN WIDE #1

Now deliberately widen the search.

Ask:
- what other architectures solve this?
- what native capabilities already exist?
- what official plugins/integrations exist?
- what mature open-source projects can be reused?
- what would a first-principles design look like?
- what are the 2–4 genuinely different approaches?

Useful tools:
- web/research;
- reference projects;
- plugin/capability inventory;
- expert critique;
- ZASSELECTION candidate matrix.

Rule:
**Reuse → Integrate → Adapt → Build Custom only after a proven gap.**

---

# 5. PHASE D — NARROW DOWN #1

Eliminate options that:
- violate must-haves;
- conflict with locked principles;
- duplicate authority;
- introduce unnecessary maintenance;
- create premature complexity;
- have weak migration/exit paths.

Use ZASSELECTION when multiple viable options remain.

Output:
- preferred direction;
- explicit unknowns;
- decisions ready to LOCK;
- items intentionally DEFERRED.

---

# 6. PHASE E — DECIDE / LOCK

LOCK only what is mature enough.

Good things to LOCK early:
- purpose;
- authority boundaries;
- privacy principles;
- modularity;
- data ownership;
- safety constraints;
- non-negotiable UX.

Avoid prematurely LOCKING:
- exact library/package;
- model version;
- database;
- message broker;
- hardware tier;
- file schema;
- exact implementation mechanism;
unless the requirement genuinely depends on it.

Preserve decision lineage:
```text
D-xxx | LOCKED
→ DRAFT DESIGN / ARCHITECTURE
→ ARCHITECTURE CHALLENGE
→ REVISION
→ LOCKED PRE-ARCH BASELINE
→ DETAILED ACTION_PLAN ↔ PRE-ARCH
→ ATOMIC TASK
→ RESULT / EVIDENCE
→ PRE-ARCH REVIEW
→ FINAL CONFIRMATION
→ DELIVERED
```

If a LOCKED decision later needs changing, reopen/supersede it explicitly. Never silently rewrite history.

---

# 7. PHASE F — PRE-DESIGN / PRE-ARCH

Create a working map before claiming final architecture.

A good pre-design answers:
- what are the main domains?
- who owns each authority?
- what talks to what?
- what must remain independent?
- what data is canonical vs derived?
- what fails if one subsystem dies?
- what is NOW vs LATER?

Label it clearly:
**WORKING / NOT CONFIRMED**.

Architecture is only a technical subtype of DESIGN; do not force every project into a giant architecture document.

---

# 8. PHASE G — ACTION PLAN v0

Translate design intent into an ordered path.

For each milestone:
- goal;
- prerequisite;
- build scope;
- explicit exclusions;
- pass condition;
- failure/stop condition;
- evidence required;
- next gate.

Prefer one **critical path** over many parallel branches.

Example:
```text
Foundation
→ Minimum Useful Product/System
→ advanced capability
→ stabilization
→ hardening / scale
```

---

# 9. PHASE H — ARCHITECTURE / PLAN CHALLENGE

Before real execution, challenge the mature design/architecture and the plan. Classify material findings as KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED. If a LOCKED decision must change, stop at the owner gate.

Use:
- capability/reuse inventory;
- Event Storming / real-event walkthrough;
- threat/privacy review;
- pre-mortem / FMEA;
- graceful-degradation test;
- restart/retry/idempotency review;
- migration/exit-path test;
- dependency analysis;
- cost/maintenance review;
- reference-project comparison.

Question:
> “If I execute this Action Plan exactly as written, where am I likely to regret the architecture later?”

---

# 10. PHASE I — NARROW DOWN #2 + REPLAN

Resolve only what is actually due.

Do **not** answer every open question upfront.

Give each open item a due gate:
- NOW;
- after foundation evidence;
- before privacy;
- before external integration;
- before hardware;
- Stage 2;
- Stage 3.

Then:
- remake/refine PRE-DESIGN or DESIGN;
- resolve material challenge findings;
- obtain owner approval to `LOCK PRE-ARCH` when the technical baseline is coherent enough for bounded execution;
- after PRE-ARCH lock, let the capable reasoner/planner build the **detailed** ACTION_PLAN against that baseline;
- keep deferred items deferred.

This is the main anti-overengineering mechanism.

---

# 11. PHASE J — PRE-EXECUTION AUDIT

Before touching real systems, audit:

- unresolved blocker;
- permissions;
- hardware/resource facts;
- backups;
- secrets/security;
- destructive risk;
- account/money gate;
- dependencies;
- open decisions due now;
- pass/rollback criteria.

Output:
```text
READY
BLOCKED
DEFERRED
NEED TEST
```

Only **NOW** blockers must be closed before execution.

---

# 12. PHASE K — SLICE TASKS

Do not turn the entire Action Plan into a giant task list.

Promote only:
- the current eligible task;
- its immediate blocked successors.

Each atomic task should contain:
- one primary outcome;
- source/lineage;
- dependencies and inputs;
- allowed files/modules and forbidden scope;
- do / why;
- acceptance criteria;
- tests and regression requirements;
- evidence required;
- commit expectation;
- STOP & ESCALATE rules;
- next.

Prefer:
**one small vertical slice → evidence → PRE-ARCH review → next slice.**

---

# 13. PHASE L — START SMALL WITH CONFIDENCE

A reversible FOUNDATION / EXPERIMENT / POC can begin before the full design is confirmed when it:
- does not silently lock unresolved architecture;
- is cheap/reversible;
- produces real evidence;
- cannot harm important state.

This is especially useful when the architecture depends on understanding a real tool/runtime first.

---

# 14. PHASE M — EXECUTE → TEST → VERIFY → SAVE

Default execution loop:

```text
PLAN briefly
→ INSPECT real state
→ EXECUTE
→ TEST
→ VERIFY independently
→ SAVE evidence/state
→ CONTINUE
```

Never equate:
```text
code written = done
command sent = success
API said success = verified
```

Use factual states:
- IMPLEMENTED;
- LOCAL PASS;
- INTEGRATION PASS;
- LIVE PASS;
- MERGED;
- DEPLOYED;
- VERIFIED;
- DELIVERED.

---

# 15. PHASE N — FEEDBACK LOOP

Implementation teaches architecture.

Feed discoveries back:

```text
task RESULT / real evidence
→ reviewer compares against current PRE-ARCH + ACTION_PLAN
→ NO ARCH IMPACT: PASS → next task
→ TASK/PLAN ISSUE: REWORK
→ ARCH IMPACT: revise/supersede PRE-ARCH with capable review
→ LOCKED DECISION IMPACT: STOP → owner
```

If evidence conflicts with a LOCKED decision:
**STOP → explicit decision gate.**

Do not silently change the decision.

---

# 16. CONFIRM DESIGN AT THE RIGHT TIME

Do not confirm merely because the diagram looks complete.

A strong final confirmation point for substantial technical architecture is when:
- the challenged draft was owner-approved as a PRE-ARCH execution baseline;
- the detailed Action Plan was built against that baseline;
- required atomic-task implementation evidence has been reviewed;
- material architecture findings have been fed back into the latest PRE-ARCH;
- major authority/privacy boundaries and dependencies are supported by evidence appropriate to the scope;
- blockers due at this stage are closed;
- future details can safely remain deferred.

`CONFIRM DESIGN` opens the final review.
Actual confirmation follows the project's explicit confirmation rule.

---

# 17. DO IT → DELIVERED

After design confirmation where required:

```text
DO IT
→ replan from current evidence
→ slice next task
→ execute automatically
→ verify
→ record evidence
→ continue until a real human gate
```

DELIVERED requires:
- built;
- verified;
- matches design;
- recorded.

---

# 18. PRACTICAL COMMANDS

- **ZASS / ZASS!!** — show current status, unresolved selection and recommended next move.
- **PROCEED / LOCK** — accept the ready recommendation/decision and lock it.
- **SAVE** — persist the current agreed state.
- **DRAFT DESIGN** — produce/update working design.
- **CONFIRM DESIGN** — open final design review.
- **DO IT** — begin execution after the applicable gate.
- **PIVOT / PARK** — deliberately change direction or defer an item.

---

# 19. THE PERSONAL SHORT FORM

For everyday use:

```text
DUMP
→ SAVE
→ DUMP MORE
→ PADANKAN
→ BUKA LUAS
→ SEMPITKAN
→ LOCK YANG MATANG
→ PRE-DESIGN
→ ACTION PLAN
→ CABAR PLAN / BUKA LUAS LAGI
→ SEMPITKAN LAGI
→ REMAKE DESIGN
→ REPLAN ACTION
→ AUDIT BLOCKER
→ SLICE
→ START SMALL
→ BUKTIKAN
→ CONFIRM BILA DUE
→ EXECUTE
→ VERIFY
→ DELIVERED !!
```

Or even shorter:

> **Explore wide. Decide late. Start small. Verify everything. Feed reality back into the plan.**

---

# 20. ANTI-PATTERNS

Avoid:
- architecture before enough DUMP;
- LOCKING product names too early;
- solving every OPEN item before it is due;
- Action Plan with ten parallel branches;
- building custom code before checking native/plugin/OSS options;
- letting an LLM become permission/security authority;
- adding infrastructure because it is fashionable;
- rewriting LOCKED history silently;
- declaring PASS without independent evidence;
- continuing through a human gate automatically.

---

# 21. SHAREABLE PROJECT STARTER

When starting a new project, tell the AI:

> Use ZASS as an execution-oriented discovery-to-delivery workflow. Let me DUMP first. Save checkpoints. Distill only after enough ideas exist. Then widen options and research before narrowing. Lock principles/authority before implementation details. Build a working pre-design, then Action Plan. Challenge the plan using reuse inventory, failure/privacy analysis and real-event walkthroughs. Replan from findings. Close only blockers that are due. Slice one current task. Start with the smallest reversible proof. Execute, test, independently verify and save evidence. Feed implementation findings back into DESIGN ↔ ACTION_PLAN. Never silently change LOCKED decisions. Continue automatically until a genuine human gate.

## Final challenge and release build

The last architecture challenge occurs **after** PRE-ARCH evidence is sufficient and before final confirmation. It must inspect what implementation evidence actually revealed, then apply justified final improvement/revision.

After architecture/design is confirmed, rebuild the ACTION PLAN from confirmed architecture/design plus the current implementation state. PRE-ARCH evidence tasks are not automatically release tasks. Slice a fresh RELEASE BUILD queue and continue until release acceptance is factually satisfied.

If a release task exposes a material architecture defect, STOP normal release flow and reopen governed architecture/design review.

## Shared execution contract

For Architect/Strong Reasoner, Planner, Coding Worker, Reviewer, atomic task/result handoff, reasoning escalation, and STOP & ESCALATE rules, use `docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md`. Tool names are examples only; capability roles are authoritative.
