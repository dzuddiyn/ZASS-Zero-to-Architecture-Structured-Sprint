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
- **Plan mode:** [PRE-ARCH EVIDENCE / RELEASE BUILD / ORDINARY EXECUTION]
- **Execution baseline:** [not applicable / PRE-ARCH not locked / PRE-ARCH locked]
- **PRE-ARCH version/reference:** [reference]
- **Execution Reality Check:** [NOT STARTED / ACTIVE / PASS / NOT APPLICABLE]
- **Real artifact/sample pack:** [references / unavailable + reason / not applicable]
- **Execution surface map:** [reference / summary / not applicable]
- **Evidence required before final architecture confirmation:** [list / none justified]
- **Rule:** ZASS remains authoritative for questions, risks, candidates, decisions, LOCKED decisions, and architecture readiness.
- **Planning feedback rule:** ACTION_PLAN may surface implementation findings that require architecture review, but it cannot decide architecture or change a LOCKED decision.

## 🏗️ ZERO → ARCHITECTURE SNAPSHOT

- **Progress:** [░░░░░░░░░░] 0%
- **Status:** RAW
- **Source:** `ZASS.md` v[version] — same Git commit
- **Last assessed:** [YYYY-MM-DD]
- **Next threshold:** 20% — EXPLORING

**Critical blockers:**

- None currently identified.

> This snapshot copies the official score from ZASS; ACTION_PLAN does not calculate it. Update ZASS and this snapshot in the same atomic commit. GitHub Actions obtains the real SHA from the commit event for mirrors such as Notion.

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

## 2A. EXECUTION REALITY CHECK

> Before detailed task slicing for work that touches real-world inputs/outputs, check execution reality. Real samples are architecture + execution evidence.

| Surface / artifact | Real evidence | Architecture expects | Gap / assumption | Execution need | Status |
|---|---|---|---|---|---|
| [message / file / API / form / log / workflow / other] | [sanitized ref] | [expected behavior] | [unknown / contradiction / none] | [build / test / prove] | [OBSERVED / PROVISIONAL / NOT APPLICABLE] |

**Minimum rule:**
- use real artifacts as early as reasonably and safely obtainable;
- one real sample on day one is better than waiting for a large corpus;
- synthetic fixtures must be labelled **PROVISIONAL / SYNTHETIC** when real evidence is not yet available;
- if the domain genuinely has no real-world surface, record **NOT APPLICABLE** + reason;
- preserve and reuse the same fixture/corpus so later tasks reuse evidence instead of recreating assumptions.

## 3. NEXT ACTIONS

**Work-item status:** \`OPEN\` · \`NEXT\` · \`ACTIVE\` · \`BLOCKED\` · \`DONE\` · \`PARKED\` · \`CANCELLED\`

| Action ID | Priority | Status | Action | Done when | Related ZASS IDs |
|---|---|---|---|---|---|
| A-001 | P0 | NEXT | [small action] | [observable acceptance criteria] | [Q-xxx / E-xxx] |

## 3A. IMPLEMENTATION PLANNING / ARCHITECTURE FEEDBACK

> Do not hide an architecture flaw inside a task. Record it here and return it to architecture/design authority.

For substantial technical architecture, detailed planning is built against the owner-approved `PRE-ARCH BASELINE — LOCKED FOR EXECUTION`. PRE-ARCH is a versioned execution hypothesis, not final architecture confirmation.

Planning may capture implementation sequence, dependencies, feasibility, migration, test gates/regressions, rollback points, security/privacy checks, integration checkpoints, unresolved implementation questions, and evidence required before the next gate.

| Finding ID | Type | Finding / evidence | Architecture impact | Required response | Related IDs |
|---|---|---|---|---|---|
| APF-001 | [DEPENDENCY / FEASIBILITY / MIGRATION / TEST / ROLLBACK / SECURITY / INTEGRATION / OPERABILITY / OTHER] | [...] | [NONE / REVIEW REQUIRED / REVISION PROPOSED / OWNER DECISION REQUIRED] | [...] | [D-xxx / E-xxx / architecture section] |

If impact is `OWNER DECISION REQUIRED`, stop before execution changes the affected boundary.

## 3B. DERIVED ATOMIC TASK PACKET

> This is a derived execution packet, not a second planning authority.

```text
Task ID:
PRE-ARCH version/reference:
Primary outcome:
Source / lineage:
Dependencies:
Inputs:
Real fixture / artifact reference:
Expected real outcome:
Execution surface:
Assumption status: OBSERVED / PROVISIONAL / NOT APPLICABLE
Allowed scope:
Allowed files/modules:
Forbidden scope:
Acceptance criteria:
Tests:
Regression requirements:
Evidence required:
Commit expectation:
STOP & ESCALATE:
Result:
Architecture impact: NO ARCH IMPACT / TASK-PLAN ISSUE / PRE-ARCH REVIEW REQUIRED / LOCKED DECISION IMPACT
Reviewer disposition: PENDING / PASS / REWORK / REVISE PRE-ARCH / BLOCK OWNER DECISION
```

A task is READY only when no unresolved architecture judgment remains. See `docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md`.

## 3C. TASK RESULT → PRE-ARCH REVIEW

For substantial technical architecture, every completed atomic task returns evidence to a reviewer before the next task is automatically eligible.

```text
NO ARCH IMPACT
→ PASS → update ACTION_PLAN
→ DELTA PLAN against current PRE-ARCH + receipts + real-sample corpus
→ NEXT unresolved task only

TASK-PLAN ISSUE
→ REWORK → task/ACTION_PLAN

PRE-ARCH REVIEW REQUIRED
→ capable reasoner reviews evidence
→ revise/supersede PRE-ARCH if justified
→ re-plan/re-slice affected work

LOCKED DECISION IMPACT
→ STOP → OWNER DECISION GATE
```

Do not let a coding worker silently revise PRE-ARCH.

## 3D. POST-CONFIRMATION RELEASE REPLAN

After material technical architecture is `ARCHITECTURE CONFIRMED`, do not blindly continue the PRE-ARCH evidence task queue.

Rebuild/rebase ACTION_PLAN from current truth:

- confirmed architecture reference;
- current repository/product state;
- accepted first-release scope;
- remaining dependencies/migrations;
- integration checkpoints;
- release test/regression gates;
- security/operability/reliability gates due;
- deployment/rollback requirements;
- documentation/durable-state updates;
- release acceptance criteria.

Then slice a fresh RELEASE BUILD atomic task set.

If release work reveals a material architecture defect, STOP normal release flow and return it to governed architecture review. Do not let a worker silently mutate confirmed architecture.

`DELIVERED !!` is allowed only after applicable release acceptance checks are factually satisfied.

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

Use only one `Progress` value and one `Status` in the ZERO → ARCHITECTURE snapshot. `Next threshold` must name the next percentage and status. If there is no blocker, write `None currently identified`. Do not change the snapshot merely because an ordinary task is complete; change it only after a ZASS assessment. `DRAFT ARCH UNDER REVIEW` requires an actual draft under review, not the number 85% alone.
