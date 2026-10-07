# ZASSIMPLE TASKS

**Status:** EXECUTION QUEUE  
**Authority:** Tasks execute the plan. They do not rewrite LOCKED decisions.

## Current task

<!--
T-001 | READY
Phase: PRE-ARCH EVIDENCE / RELEASE BUILD / ORDINARY EXECUTION
Primary outcome: ...
Source / lineage: AP-xxx / D-xxx / DESIGN section
Dependencies: ...
Inputs: ...
Allowed scope: ...
Allowed files/modules: ...
Forbidden scope: ...
Do: ...
Why: ...
Acceptance criteria: ...
Tests: ...
Regression requirements: ...
Evidence required: ...
Commit expectation: ...
STOP & ESCALATE: use shared standard + task-specific gates
Then: T-xxx / next-step label
Result: ...
Architecture impact: NO ARCH IMPACT / TASK-PLAN ISSUE / PRE-ARCH REVIEW REQUIRED / LOCKED DECISION IMPACT
Reviewer disposition: PENDING / PASS / REWORK / REVISE PRE-ARCH / BLOCK OWNER DECISION
-->

## Atomic readiness

A task is READY only when it has one primary outcome, bounded scope, explicit dependencies/inputs, clear allowed/forbidden scope, observable acceptance criteria, tests/regressions, evidence expectations and no unresolved architecture judgment.

If the worker must choose between materially different designs, return the item to ACTION PLAN / DESIGN.

Coding workers follow [`docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md`](../docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md), including mandatory STOP & ESCALATE rules.

## Queue

<!-- Keep future tasks concise. Surface one current task to the user by default. -->

## Result → PRE-ARCH review rule

For substantial technical architecture, completion of a task does not automatically authorize the next task. The result first receives reviewer disposition against the current PRE-ARCH baseline and ACTION PLAN. Only `PASS / NO ARCH IMPACT` proceeds directly. Architecture-impact results return to capable review; LOCKED-decision impact returns to the owner.

## Release-build rule

After confirmed technical design/architecture, create a fresh RELEASE BUILD queue from the rebuilt Action Plan. Release tasks still use the same atomic readiness and STOP & ESCALATE contract.

If a RELEASE BUILD result reveals a material architecture defect:
- stop normal release sequencing;
- report the evidence;
- reopen governed design/architecture review;
- rebase affected release planning after resolution.

Do not mark `DELIVERED !!` merely because all tasks were attempted.

## Delivered evidence

<!--
Record verified outcomes that support DELIVERED !!
Required closure checks:
- Confirmed design/architecture available when applicable: YES / NO / N/A
- First release scope built: YES / NO
- Required integrations complete: YES / NO / N/A
- Required tests/regressions PASS: YES / NO
- Required hardening/security/operability gates PASS: YES / NO / N/A
- Deployment/release evidence complete: YES / NO / N/A
- Rollback/recovery requirement satisfied: YES / NO / N/A
- Documentation/durable state recorded: YES / NO
- Acceptance criteria satisfied: YES / NO
Do not mark DELIVERED !! until every applicable closure check is satisfied.
-->

