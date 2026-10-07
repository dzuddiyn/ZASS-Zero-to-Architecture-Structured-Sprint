# ACTION PLAN

ACTION PLAN is the optional execution companion to Full ZASS.

> **ZASS sets direction and decisions. ACTION PLAN moves the work.**

Use it when a project has multi-step implementation, experiments, blockers or progress that must survive across sessions.

## Authority split

| File | Authority |
|---|---|
| `ZASS.md` | discovery, questions, risks, candidates, decisions, LOCKED decisions, experiment requirements, readiness, architecture |
| `ACTION_PLAN.md` | implementation planning + current execution state, dependencies, feasibility findings, actions, gates, evidence, blockers, lessons, completed work |
| `ARCHITECTURE.md` | confirmed architecture derived from the approved ZASS state |

ACTION PLAN may surface an implementation finding that requires architecture review; that is feedback, not architecture authority.

ACTION PLAN must not:

- silently change a LOCKED decision;
- decide architecture;
- turn experiment PASS/FAIL into a decision automatically.

## Execution loop

```text
LOCKED PRE-ARCH baseline
                    ↓
DETAILED ACTION PLAN
                    ↓
ATOMIC TASK
                    ↓
RESULT / EVIDENCE
                    ↓
PRE-ARCH REVIEW

NO ARCH IMPACT → PASS → NEXT TASK
TASK-PLAN ISSUE → REWORK
ARCH IMPACT → REVISE / SUPERSEDE PRE-ARCH
LOCKED DECISION IMPACT → STOP → OWNER

Mature decision/evidence findings still return through ZASS FEED / ZASS REVIEW when decision authority is involved.
```

## Work-item states

```text
OPEN
NEXT
ACTIVE
BLOCKED
DONE
PARKED
CANCELLED
```

## Experiment states

```text
PLANNED
READY
RUNNING
PASS
FAIL
INCONCLUSIVE
BLOCKED
CANCELLED
```

Keep the same `E-xxx` ID when the experiment originated in ZASS.

## ZERO → ARCHITECTURE snapshot

If ACTION PLAN is used, it may carry a snapshot of the official ZASS readiness state.

It does not calculate the score itself.

When readiness changes, update the authoritative ZASS state and ACTION PLAN snapshot in the same logical change.

Example:

```text
Progress: 72%
Status: READY FOR DRAFT ARCH
Source: ZASS.md v0.3.5 — same Git commit
```

Do not invent a commit SHA inside the commit that is still being created.

## ZASS FEED

ZASS FEED is a return channel for mature findings.

It may contain:

- observed experiment results;
- failures;
- operational lessons;
- new blockers;
- evidence that may affect an existing decision.

A ZASS FEED item is **not automatically a decision**.

## When not to create ACTION PLAN

Do not create it merely because ZASS exists.

A small idea or short exploration can remain a single ZASS/ZASSIMPLE file until persistent execution state is genuinely useful.

Templates:

- [ACTION_PLAN_TEMPLATE.md](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ACTION_PLAN_TEMPLATE.md)
- [ACTION_PLAN_TEMPLATE_EN.md](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ACTION_PLAN_TEMPLATE_EN.md)

## Two technical plan modes

```text
PRE-ARCH EVIDENCE
→ prove / de-risk / validate architecture
→ task results feed PRE-ARCH review

ARCHITECTURE CONFIRMED
→ rebuild ACTION PLAN
→ RELEASE BUILD
→ build / integrate / harden / verify first release
→ release acceptance
→ DELIVERED !!
```

If release work reveals a material architecture defect, stop normal release flow and reopen governed architecture review.

## Architecture feedback and atomic tasks

If planning finds a dependency, feasibility, migration, testability, rollback, security, integration or operability issue that materially affects architecture, record it as an architecture-impact finding and return it for review. Do not bury it inside a task.

For substantial technical architecture, the initial detailed ACTION PLAN is built against an owner-approved `PRE-ARCH BASELINE — LOCKED FOR EXECUTION` and drives evidence/de-risking tasks. Every result is classified for PRE-ARCH impact before the next task proceeds. After the last evidence-backed challenge and final architecture confirmation, **rebuild/rebase ACTION PLAN** from confirmed architecture plus current implementation state, then slice a fresh RELEASE BUILD queue. PRE-ARCH evidence tasks do not automatically become release tasks. See [Architecture-to-Execution](Architecture-to-Execution.md).
