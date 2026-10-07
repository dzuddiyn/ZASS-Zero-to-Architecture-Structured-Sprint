# Architecture & Evidence

Full ZASS deliberately separates two questions:

```text
Architecture Readiness
= Are we clear enough to build or confirm the architecture?

Evidence Confidence
= How strongly are important assumptions, risks and decisions
  supported by observed evidence?
```

They are related, but they are not the same measurement.

## ZERO → ARCHITECTURE

Current weighted criteria:

| Criterion | Weight |
|---|---:|
| Purpose / problem | 10 |
| Users / stakeholders / outcomes | 10 |
| Scope / non-goals | 10 |
| Constraints / quality | 10 |
| Options / trade-offs | 10 |
| Critical assumptions closed / experiments | 15 |
| Major risks | 10 |
| Main flow | 10 |
| Major decisions LOCKED | 10 |
| No critical blocker | 5 |

Each criterion may be scored `0`, `0.5` or `1` according to the documented state.

## Readiness bands

| Score | State |
|---:|---|
| 0–19% | RAW |
| 20–39% | EXPLORING |
| 40–59% | SHAPING |
| 60–69% | DECIDING |
| 70–84% | READY FOR DRAFT ARCH |
| 85–99% | DRAFT ARCH UNDER REVIEW — only if an actual draft exists and is under review |
| 100% | ARCHITECTURE CONFIRMED |

Important:

- 70% may justify suggesting a draft.
- 85% does not automatically mean a draft exists.
- 100% is reserved for architecture confirmed through the owner gate.
- A score is architecture readiness, not coding progress.

## Evidence Confidence

Use a qualitative label:

### UNVALIDATED

No observed empirical evidence for the relevant critical assumptions.

### LOW

Evidence is limited or indirect, or major critical assumptions remain untested.

### MEDIUM

Relevant evidence exists, but coverage or real-world validation remains incomplete.

### HIGH

Strong direct evidence covers the relevant critical assumptions and major risks.

Do not create a second percentage.

## Mandatory display rule — Full ZASS v0.3.10

Evidence Confidence must be shown when:

1. a real/current `ZERO → ARCHITECTURE` assessment is shown;
2. readiness for `DRAFT ARCH` is evaluated;
3. `BUILD ARCHITECTURE` is run;
4. architecture is already `CONFIRMED` while validation or experiments remain incomplete.

Example:

```text
🏗️ ZERO → ARCHITECTURE: 82% — READY FOR DRAFT ARCH
🔬 EVIDENCE CONFIDENCE: LOW

Reason:
Major decisions are clear, but important real-world assumptions
still have limited observed evidence.
```

If there is no observed empirical evidence for the relevant critical assumptions, report `UNVALIDATED`.

Never invent evidence.

Static documentation/template examples do not trigger the mandatory display rule.

## Confirmed architecture can still have low evidence confidence

This is valid:

```text
Architecture Readiness: 100%
Architecture: CONFIRMED
Evidence Confidence: LOW
```

It means the architecture is internally clear and approved, while real-world validation is still incomplete.

That is not a contradiction.

## Confirmation gate

```text
DRAFT ARCH
    ↓
ARCHITECTURE CHALLENGE
    ↓
KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED
    ↓
CONTROLLED REVISION
    ↓
YA, LOCK PRE-ARCH
    ↓
PRE-ARCH BASELINE — LOCKED FOR EXECUTION
    ↓
DETAILED ACTION PLAN + ATOMIC TASKS
    ↓
RESULT / EVIDENCE
    ↓
PRE-ARCH REVIEW / REVISION
    ↓
SUFFICIENT IMPLEMENTATION EVIDENCE
    ↓
LAST ARCHITECTURE CHALLENGE
    ↓
FINAL IMPROVE / REVISION
    ↓
BUILD ARCHITECTURE
    ↓
YA, CONFIRM ARCHITECTURE
    ↓
ARCHITECTURE CONFIRMED
    ↓
REBUILD RELEASE ACTION PLAN
    ↓
FIRST-RELEASE BUILD / VERIFY
    ↓
RELEASE ACCEPTANCE
    ↓
DELIVERED !!
```

Architecture must follow owner-approved decisions. Missing major architectural decisions should be surfaced as blockers rather than silently assumed.

For complex/high-impact architecture challenge, prefer a stronger reasoning capability or Work-style analysis/research environment when available. The rule is capability-based and tool-agnostic. For material technical architecture, bounded execution evidence is intentionally gathered **before** final confirmation against a locked PRE-ARCH baseline; then a last evidence-backed challenge is resolved before confirmation. Confirmation starts the release-build planning phase; it is not `DELIVERED !!`. See [Architecture-to-Execution](Architecture-to-Execution.md).
