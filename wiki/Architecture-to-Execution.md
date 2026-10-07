# Architecture-to-Execution

**Status:** LOCKED — shared tool-agnostic execution contract  
**Date:** 2026-10-07  
**Applies to:** Full ZASS and ZASSIMPLE technical/execution workflows

> Strong reasoning challenges the design. Planning turns it into bounded work. Coding workers execute bounded work. Human authority remains explicit.

## 1. Purpose

Large projects become fragile when a conversational AI moves directly from a plausible architecture draft into broad implementation. Context can drift, hidden coupling can survive, implementation choices can silently become architecture decisions, and autonomous coding can broaden beyond the intended boundary.

This standard strengthens the handoff from architecture/design into execution without replacing the existing ZASS decision model.

```text
DUMP / DISCOVERY
→ DECIDE / LOCK
→ DRAFT DESIGN / ARCHITECTURE
→ ARCHITECTURE CHALLENGE
→ CONTROLLED REVISION
→ OWNER REVIEW
→ LOCK PRE-ARCH BASELINE
→ CAPABLE REASONER / PLANNER
→ DETAILED ACTION PLAN ↔ PRE-ARCH
→ DETAILED ATOMIC TASK SLICING
→ EXECUTE ONE ATOMIC TASK
→ RESULT / EVIDENCE
→ PRE-ARCH REVIEW
   ├─ PASS → NEXT TASK
   ├─ REWORK → TASK / ACTION PLAN
   ├─ ARCH FINDING → REVISE PRE-ARCH
   └─ LOCKED-DECISION IMPACT → STOP → OWNER
→ SUFFICIENT IMPLEMENTATION EVIDENCE
→ FINAL ARCHITECTURE REVIEW
→ LAST ARCHITECTURE CHALLENGE
→ FINAL IMPROVE / REVISION
→ BUILD ARCHITECTURE
→ OWNER CONFIRMATION
→ ARCHITECTURE CONFIRMED
→ REBASE ACTION PLAN FROM CONFIRMED ARCHITECTURE
→ RELEASE ACTION PLAN
→ RELEASE ATOMIC TASKS
→ BUILD FIRST RELEASE VERSION
→ TEST / INTEGRATE / HARDEN / VERIFY
→ RELEASE ACCEPTANCE
→ DELIVERED !!
```

Planning and implementation evidence deliberately feed back into the **PRE-ARCH BASELINE**. Final architecture confirmation is intentionally later: after the relevant bounded implementation evidence is strong enough for the owner and reviewer to judge the architecture as more than an untested paper design. If a LOCKED decision is affected at any point, return to an explicit owner decision gate.

## 2. Capability roles

ZASS is tool-agnostic. Roles are capabilities, not product names.

### Human Owner
- owns consequential decisions;
- is the only authority that may approve a change to a LOCKED decision;
- authorizes destructive, irreversible, production, money, security/privacy, or external-authority gates where required.

### Architect / Strong Reasoner
- challenges a mature draft before major implementation;
- searches for hidden coupling, contradiction, missing boundaries, weak assumptions, failure modes and operational/testability problems;
- proposes revisions only when justified;
- never silently changes a LOCKED decision.

### Planner
- turns accepted design direction into implementation sequence, dependencies, experiments, gates and rollback points;
- keeps ACTION_PLAN bidirectional with DESIGN / ARCHITECTURE;
- slices only work that no longer requires an architecture decision.

### Coding Worker
- executes one bounded atomic task;
- edits only inside permitted scope;
- tests and debugs within that task;
- does not make a new architecture decision;
- stops and escalates when the task boundary is insufficient.

### Reviewer
- evaluates result evidence against acceptance criteria, architecture/design, regressions and LOCKED decisions;
- returns PASS, REWORK or BLOCK with evidence.

One agent may perform several roles when appropriate, but the authority boundaries still apply.

## 3. Reasoning escalation rule

For architecture challenges involving complex coupling, trust/security boundaries, migration, distributed state, reliability, costly commitments, difficult reversibility, or broad operational impact, prefer a **more capable reasoning environment** than the ordinary execution worker when available.

Examples may include a higher-reasoning model, a Work-style research/analysis environment, or a specialist reviewer.

These examples are non-normative. ZASS locks the **capability role**, not ChatGPT Work, Copilot, Aider, Qoder, a particular model, or any other vendor/tool.

## 4. Architecture Challenge gate

Run Architecture Challenge when a technical architecture/design draft is mature enough to drive material implementation, before major implementation or final architecture confirmation.

Use the smallest useful challenge set:
- red-team review;
- pre-mortem;
- assumption challenge;
- failure-mode analysis;
- dependency/coupling review;
- trust/security boundary review;
- operability/testability review;
- portability/vendor-lock-in review;
- feasibility/dependency review.

Classify material findings as:

```text
KEEP
REVISE
QUESTION
EXPERIMENT
OWNER DECISION REQUIRED
```

- **KEEP** — challenged element remains justified.
- **REVISE** — bounded revision is justified without changing a LOCKED decision.
- **QUESTION** — material uncertainty stays explicit.
- **EXPERIMENT** — evidence is required before the relevant gate.
- **OWNER DECISION REQUIRED** — resolution would create/change a consequential or LOCKED decision.

If revision requires changing a LOCKED decision:

```text
STOP
→ show conflict and evidence
→ return to owner decision authority
→ revise only after explicit approval
```

Do not hide unresolved challenge findings inside implementation tasks.

## 5. PRE-ARCH baseline gate

After Architecture Challenge and justified revision, the owner reviews the current draft before detailed execution planning.

For material technical work, the next state is:

```text
PRE-ARCH BASELINE — LOCKED FOR EXECUTION
```

The contextual owner approval may be expressed as:

```text
YA, LOCK PRE-ARCH
```

This **does not** mean `ARCHITECTURE CONFIRMED`.

It means:

- the challenged draft is coherent enough to become the bounded planning/execution baseline;
- detailed planning and evidence-producing implementation may proceed against this version;
- the baseline is versioned and traceable;
- implementation evidence may revise/supersede the PRE-ARCH baseline;
- no PRE-ARCH revision may silently change a LOCKED decision.

PRE-ARCH locking freezes the current architectural hypothesis for controlled execution; it does not create a new decision authority and does not guarantee final correctness.

If challenge findings still contain an unresolved `OWNER DECISION REQUIRED`, critical architecture contradiction, or evidence gate that must be closed before bounded implementation, PRE-ARCH is **NOT READY**.

## 6. Detailed ACTION_PLAN after PRE-ARCH

After PRE-ARCH is locked, the capable Architect / Strong Reasoner and Planner build or refine a **detailed ACTION PLAN** against that baseline.

The plan must make explicit where relevant:

- implementation sequence;
- dependencies and ordering;
- feasibility assumptions/findings;
- experiments;
- migration steps;
- integration checkpoints;
- security/privacy checks;
- test gates and regression gates;
- rollback points;
- evidence needed before the next architecture review;
- unresolved implementation questions and their due gate.

Relationship:

```text
LOCKED decisions
      ↓
LOCKED PRE-ARCH BASELINE
      ↕
DETAILED ACTION PLAN
      ↓
ATOMIC TASKS
```

ACTION_PLAN may expose a PRE-ARCH flaw and request revision. It does not decide or silently revise architecture.

## 7. ACTION_PLAN authority

ACTION_PLAN is a first-class planning/execution artifact. It is **not** a second decision ledger and does not decide architecture.

It may contain:
- implementation sequence;
- dependencies;
- feasibility findings;
- experiments;
- migration steps;
- test gates;
- rollback points;
- security checks;
- integration checkpoints;
- unresolved implementation questions;
- evidence required before the next gate.

```text
Decisions → ACTION_PLAN → implementation feasibility
                  ↕
          DESIGN / ARCHITECTURE
```

DESIGN / ARCHITECTURE constrains ACTION_PLAN. ACTION_PLAN findings may request review. ACTION_PLAN never applies an architecture decision by itself.

If planning reveals an architecture flaw, record the finding explicitly and feed it back. Do not bury it inside a task.

## 8. Atomic task readiness

A task is READY only when:
- one primary outcome;
- bounded scope;
- dependencies are explicit;
- inputs are known;
- allowed files/modules or change surface are clear;
- forbidden scope is clear;
- acceptance criteria are observable;
- required tests/regressions are known;
- evidence expectation is known;
- no unresolved architecture judgment is required.

If the worker still needs to choose between materially different designs, the item is not executable. Return it to planning.

## 9. Atomic task packet

A derived atomic task should carry:

```text
Task ID
Primary outcome
Source / lineage
Dependencies
Inputs
Allowed scope
Allowed files/modules
Forbidden scope
Acceptance criteria
Tests
Regression requirements
Evidence required
Commit expectation
STOP & ESCALATE rules
Result
```

Full ZASS may store the current packet in ACTION_PLAN or another explicitly named execution backend. It does not require a competing `TASKS.md` authority.

ZASSIMPLE may use its existing `TASKS.md` queue.

## 10. Worker implementation-local choices

A coding worker may make ordinary implementation-local choices when they do not change:
- a LOCKED decision;
- architecture/design contract;
- public interface/contract;
- trust/security/privacy boundary;
- task acceptance criteria;
- allowed scope.

Choosing a materially different architecture requires escalation.

## 11. STOP & ESCALATE

A coding worker MUST stop when:
1. a LOCKED decision must change;
2. design/architecture sources conflict;
3. consequential requirement or data is ambiguous;
4. out-of-scope access is required;
5. production access is required without explicit authorization;
6. required secrets/credentials are unavailable;
7. more than one materially different design is viable;
8. the same failure repeats three times without a new diagnosis;
9. success would require weakening/removing a valid test;
10. the fix requires broader Core/module change outside task scope;
11. human/uncommitted work risks being overwritten or conflicted;
12. a destructive, irreversible, security, privacy or authority boundary is encountered.

On stop:

```text
DO NOT improvise
DO NOT broaden scope
DO NOT redesign architecture

REPORT
- current state
- evidence
- unknown
- affected lineage
- one precise question / decision needed
```

Options may be shown, but the worker must not choose an owner-level architecture decision.

## 12. Durable handoff and result feedback

For large projects, chat is working context, not the primary execution state.

```text
Architect / Strong Reasoner + Planner
→ detailed ACTION PLAN against LOCKED PRE-ARCH
→ atomic task packet
→ Coding Worker
→ edit / test / debug / commit when authorized
→ structured result
→ Planner / Reviewer
→ PRE-ARCH impact classification
→ PASS / REWORK / ARCH FINDING / BLOCK
→ next eligible task or PRE-ARCH revision
```

`TASK.md` and `RESULT.md` are useful examples, not mandatory filenames or new authorities. GitHub Issues, a repo queue, an orchestrator, or another explicit backend may carry the same contract.

A result should report:
- task ID;
- outcome;
- files/modules changed;
- tests run and factual results;
- regression evidence;
- commit/PR/deployment evidence when applicable;
- deviations;
- unresolved risks/unknowns;
- whether architecture/action-plan feedback is required.

## 13. PRE-ARCH review and result feedback

```text
RESULT / EVIDENCE
→ Reviewer compares task outcome with PRE-ARCH + ACTION_PLAN
→ classify architecture impact

NO ARCH IMPACT
→ PASS
→ update ACTION_PLAN
→ NEXT ATOMIC TASK

TASK / PLAN ISSUE
→ REWORK
→ revise task or ACTION_PLAN
→ re-run bounded work

ARCHITECTURE IMPACT
→ PRE-ARCH REVIEW REQUIRED
→ capable reasoner revises/supersedes PRE-ARCH when justified
→ re-plan / re-slice affected tasks

LOCKED DECISION IMPACT
→ STOP
→ OWNER DECISION GATE
```

Never allow a worker result to silently become a decision.

## 14. Final architecture confirmation

Do not confirm a material technical architecture merely because the challenged diagram and plan look coherent.

Move to final architecture review when the evidence required by the PRE-ARCH/ACTION_PLAN is sufficient for the current scope.

Final review asks:

- did bounded implementation validate the important dependencies and boundaries?
- did tests/regressions support the intended contracts?
- did integration/security/operability evidence reveal hidden coupling?
- were PRE-ARCH revisions recorded rather than hidden in tasks?
- are material unknowns either closed or explicitly accepted/deferred?
- does the final architecture still comply with LOCKED decisions?

Then run one **last architecture challenge** against the evidence-backed final candidate. This is not a ceremonial repeat of the first challenge. It must focus on what the PRE-ARCH implementation actually revealed: surviving assumptions, hidden coupling, runtime/deployment behavior, reliability/retry/idempotency, security/trust boundaries, operability/observability, migration/rollback, portability, and architecture debt.

Classify the last-challenge findings using the same canonical set:

```text
KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED
```

If material revision is justified, improve the final architecture candidate and re-check affected evidence. If a LOCKED decision must change, STOP at the owner decision gate.

Only after the last challenge and any required final improvement/revision:

```text
SUFFICIENT IMPLEMENTATION EVIDENCE
→ FINAL ARCHITECTURE REVIEW
→ LAST ARCHITECTURE CHALLENGE
→ FINAL IMPROVE / REVISION
→ BUILD ARCHITECTURE
→ OWNER CONFIRMATION
→ ARCHITECTURE CONFIRMED
```

Final confirmation does **not** mean the product/release is delivered. It means the architecture for the stated scope has passed initial challenge, PRE-ARCH planning/evidence, final challenge, final revision and owner confirmation.

## 15. Post-confirmation release planning

PRE-ARCH atomic tasks are primarily **evidence/de-risking work**. Do not blindly continue that task queue as the release build plan after architecture confirmation.

After `ARCHITECTURE CONFIRMED`:

```text
ARCHITECTURE CONFIRMED
→ REBASE / REBUILD ACTION PLAN FROM CURRENT TRUTH
→ RELEASE ACTION PLAN
→ RELEASE ATOMIC TASK SLICING
→ BUILD FIRST RELEASE VERSION
→ TEST / INTEGRATE / HARDEN / VERIFY
→ RELEASE ACCEPTANCE
→ DELIVERED !!
```

The release ACTION PLAN must derive from:

- confirmed architecture;
- current repository/product state;
- accepted release scope;
- remaining dependencies/migrations;
- integration and security gates;
- release tests/regressions;
- deployment/rollback needs;
- documentation/state updates required for acceptance.

Release tasks use the same atomic-task and STOP & ESCALATE contract, but their primary purpose changes from **prove/de-risk architecture** to **build/integrate/stabilize the release**.

If a release task reveals a material architecture defect:

```text
RELEASE TASK RESULT
→ ARCHITECTURE IMPACT
→ STOP NORMAL RELEASE FLOW
→ ARCHITECTURE REVIEW
→ governed revision / owner gate as required
→ rebase affected release plan/tasks
```

A coding worker must never silently mutate confirmed architecture.

## 16. DELIVERED !! gate

A project/release becomes `DELIVERED !!` only when the intended release acceptance criteria are factually satisfied.

For a technical first release, this normally includes where applicable:

- confirmed architecture exists;
- release scope is built;
- required integrations are complete;
- required tests and regressions pass;
- security/operability/reliability gates due for this release are satisfied;
- deployment/release evidence exists when deployment is part of scope;
- rollback/recovery requirement due for this release is satisfied;
- required documentation and durable project state are updated;
- no unresolved blocker prevents the accepted release outcome.

`ARCHITECTURE CONFIRMED`, `code complete`, or `all planned tasks attempted` is not by itself `DELIVERED !!`.

## 17. Automation direction

This contract can later be automated with repository task queues, structured result files, lifecycle hooks, GitHub events/webhooks, or orchestration systems.

Automation must preserve the same authority, lineage, stop gates and factual verification rules.
