# ACTION PLAN

**Status:** TEMPLATE  
**Execution authority:** \`ACTION_PLAN.md\`  
**ZASS authority:** [relative path to ZASS.md]  
**Last updated:** [YYYY-MM-DD]

> ZASS sets direction and decisions. ACTION_PLAN moves the work.

## 0. CONTROL

- **Current phase:** [discovery / validation / build / operate / other]
- **Current focus:** [one main focus]
- **Execution backend:** \`ACTION_PLAN.md\` / [GitHub Issues or another named backend]
- **Architecture status:** [not started / draft / confirmed reference]
- **Rule:** ZASS remains authoritative for questions, risks, candidates, decisions, LOCKED decisions, and architecture readiness.

## 1. PROJECT SNAPSHOT

| Milestone / outcome | Status | Progress / evidence | Related ZASS IDs |
|---|---|---|---|
| [what matters now] | [OPEN / ACTIVE / DONE / BLOCKED] | [short evidence] | [Q-xxx / R-xxx / D-xxx / E-xxx] |

## 2. TOP PRIORITIES

> Keep P0 small. Downgrade or remove items that no longer block the current milestone.

| Priority | What matters now | Why | Related ZASS IDs |
|---|---|---|---|
| P0 | [current blocker] | [blocks milestone / experiment / readiness] | [...] |
| P1 | [important next] | [...] | [...] |
| P2 | [useful later] | [...] | [...] |
| P3 | [parked / optional] | [...] | [...] |

## 3. NEXT ACTIONS

**Work-item status:** \`OPEN\` · \`NEXT\` · \`ACTIVE\` · \`BLOCKED\` · \`DONE\` · \`PARKED\` · \`CANCELLED\`

| Action ID | Priority | Status | Action | Done when | Related ZASS IDs |
|---|---|---|---|---|---|
| A-001 | P0 | NEXT | [small action] | [observable acceptance criteria] | [Q-xxx / E-xxx] |

## 4. EXPERIMENTS

> Reuse the same \`E-xxx\` when the experiment originates in ZASS. ACTION_PLAN records execution and does not create a second experiment authority.

**Experiment status:** \`PLANNED\` · \`READY\` · \`RUNNING\` · \`PASS\` · \`FAIL\` · \`INCONCLUSIVE\` · \`BLOCKED\` · \`CANCELLED\`

### E-xxx — [experiment title]

- **Hypothesis:** [testable claim]
- **Status:** [PLANNED]
- **PASS criteria:** [what would support the hypothesis]
- **FAIL criteria:** [what would reject it]
- **Execution / evidence:** [link, note, measurement, commit, artefact]
- **Observed result:** [PENDING / actual result]
- **Learning:** [PENDING / what changed in understanding]
- **Impact:** [PENDING / candidate action for ZASS]
- **Related ZASS:** [Q-xxx / R-xxx / D-xxx]
- **ZASS FEED readiness:** [not ready / ready for review]

## 5. OPEN CANDIDATES

| Candidate | Why useful | Evidence missing | Next action | Related ZASS IDs |
|---|---|---|---|---|
| [candidate] | [value] | [unknown] | [small next step] | [...] |

## 6. OPEN QUESTIONS

| Question | Why actionable now | Next action / owner | Related ZASS ID |
|---|---|---|---|
| [question] | [reason] | [action] | Q-xxx |

## 7. BLOCKED

| What is blocked | Why | Dependency | Unblock condition | Related ZASS IDs |
|---|---|---|---|---|
| [item] | [reason] | [person / evidence / access] | [clear condition] | [...] |

## 8. FAILURES / LESSONS

| What failed | Evidence | Learning | Do not repeat without new diagnosis | Related ZASS IDs |
|---|---|---|---|---|
| [failure] | [what happened] | [lesson] | [guardrail] | [...] |

## 9. COMPLETED

| Completed work | Evidence / commit / artefact | Result | Related ZASS IDs |
|---|---|---|---|
| [work] | [reference] | [outcome] | [...] |

## 10. PARKED

| Item | Why parked | Revisit trigger | Related ZASS IDs |
|---|---|---|---|
| [item] | [reason] | [condition] | [...] |

## 11. ZASS FEED

> Findings here are ready to bring back into ZASS for review. They are not decisions until ZASS review and owner action.

| Finding / evidence | Implication | Suggested ZASS action | Related IDs |
|---|---|---|---|
| [finding] | [what it may change] | [review / test more / decide / reject / pivot] | [...] |

## 12. CHANGE LOG

| Date | Change |
|---|---|
| [YYYY-MM-DD] | [short factual update] |

---

## AI OPERATING RULE

When updating this file, preserve ZASS authority. Do not silently change a LOCKED decision or architecture. Do not turn PASS into a decision automatically. Avoid duplicate actions: update the existing related action, experiment, PARKED item, or ZASS FEED entry when one already exists.