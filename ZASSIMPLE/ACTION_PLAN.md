# ZASSIMPLE ACTION PLAN

**Status:** INTERNAL WORKING ARTIFACT  
**Authority:** Planning artifact only. It must not override LOCKED owner decisions.

## Purpose

Capture implementation thinking that appears during DECIDE and DESIGN without burdening the user.

## Plan mode

- **Mode:** PRE-ARCH EVIDENCE / RELEASE BUILD / ORDINARY EXECUTION
- **Rule:** PRE-ARCH EVIDENCE tasks prove/de-risk the architecture. After final technical design/architecture confirmation, rebuild/rebase the plan into RELEASE BUILD mode instead of blindly continuing the old evidence queue.

## PRE-ARCH planning source

- **Execution baseline:** NOT APPLICABLE / NOT LOCKED / PRE-ARCH LOCKED
- **PRE-ARCH version/reference:** ...
- **Evidence required before final design/architecture confirmation:** ...
- **Rule:** For substantial technical architecture, detailed execution planning starts from the owner-approved PRE-ARCH baseline. Planning may request PRE-ARCH revision but cannot revise it silently.

## Release planning source

Use after final technical design/architecture confirmation:

- **Confirmed design/architecture reference:** ...
- **Current implementation/repository state:** ...
- **First release scope:** ...
- **Release acceptance criteria:** ...
- **Required integrations / migrations:** ...
- **Release test/regression gates:** ...
- **Security / operability / reliability gates due:** ...
- **Deployment / rollback evidence required:** ...
- **Documentation / durable-state updates required:** ...

The release plan must be rebuilt from current truth. PRE-ARCH evidence tasks may inform it, but do not automatically become release tasks.

## Current plan

<!--
AP-001 | OPEN
Source: D-xxx / ARCH-xxx / finding
Action: ...
Dependencies: ...
Constraint / feasibility note: ...
Pass / stop condition: ...
Feeds design: YES / NO
-->

## Planning findings

Practical implementation findings may refine `DESIGN.md`, but ACTION PLAN does not decide design/architecture.

Track relevant findings such as dependency/coupling, feasibility, migration, testability, rollback, security/privacy, integration, operability, and evidence required before the next gate.

<!--
APF-001 | OPEN
Type: DEPENDENCY / FEASIBILITY / MIGRATION / TEST / ROLLBACK / SECURITY / INTEGRATION / OPERABILITY / OTHER
Finding: ...
Evidence: ...
Architecture impact: NONE / REVIEW REQUIRED / REVISION PROPOSED / OWNER DECISION REQUIRED
Required response: ...
Related: D-xxx / DESIGN section / task
-->

If planning reveals a design/architecture flaw, mark it explicitly and feed it back to DESIGN. Do not hide it inside a task.

## PRE-ARCH evidence review

<!--
After each technical task result:
Task: T-xxx
Result evidence: ...
Architecture impact: NO ARCH IMPACT / TASK-PLAN ISSUE / PRE-ARCH REVIEW REQUIRED / LOCKED DECISION IMPACT
Reviewer disposition: PASS / REWORK / REVISE PRE-ARCH / BLOCK OWNER DECISION
Affected PRE-ARCH version: ...
Action Plan impact: ...
Next eligible task: ...
-->

`NO ARCH IMPACT` may continue to the next eligible task. Material architecture impact must be reviewed by a capable reasoner before PRE-ARCH is revised/superseded. LOCKED-decision impact stops at the owner gate.

## Execution gates

<!--
For each active milestone record when relevant:
- Sequence:
- Dependencies:
- Migration step:
- Test gate:
- Rollback point:
- Security check:
- Integration checkpoint:
- Unresolved implementation question:
- Evidence required before next gate:
-->

