# ACTION PLAN

ACTION PLAN is the optional execution companion to Full ZASS.

> **ZASS sets direction and decisions. ACTION PLAN moves the work.**

Use it when a project has multi-step implementation, experiments, blockers or progress that must survive across sessions.

## Authority split

| File | Authority |
|---|---|
| `ZASS.md` | discovery, questions, risks, candidates, decisions, LOCKED decisions, experiment requirements, readiness, architecture |
| `ACTION_PLAN.md` | current execution state, actions, experiment execution, evidence, blockers, lessons, completed work |
| `ARCHITECTURE.md` | confirmed architecture derived from the approved ZASS state |

ACTION PLAN must not:

- silently change a LOCKED decision;
- decide architecture;
- turn experiment PASS/FAIL into a decision automatically.

## Execution loop

```text
ZASS: question / risk / candidate / experiment need
                    ↓
ACTION PLAN: execute action or experiment
                    ↓
observed evidence
                    ↓
ZASS FEED
                    ↓
ZASS REVIEW
                    ↓
DECIDE / LOCK / REJECT / TEST MORE / PIVOT
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
