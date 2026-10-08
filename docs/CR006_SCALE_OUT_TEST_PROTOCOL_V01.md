# TRACK E — CR-006 Scale-out TEST Protocol v0.1

**Status:** LOCKED FOR E2 DESIGN  
**Date:** 2026-10-08  
**Track:** TRACK E — FIELD EVIDENCE & SCALE VALIDATION  
**Task:** E2-T06  
**Candidate:** CR-006 — Scale-out Multi-file Structure

## 1. Purpose

This protocol defines how to test whether canonical single-file ZASS actually reaches a scale threshold where an experimental split/multi-file structure produces a meaningful net improvement.

It does not authorize canonical migration, default multi-file ZASS, method-version change, or production use of the experimental structure.

## 2. Core test question

> When single-file ZASS reaches a real or reproducible scale pain point, does a bounded multi-file experimental shape improve navigation/review/handoff/maintenance enough to justify added complexity, portability cost, and authority risk?

## 3. Baseline and experiment

### Baseline

Canonical current single-file ZASS remains the control.

### Experimental shape

Use a bounded split model only for test comparison.

Minimum experimental shape:

```text
ZASS.md
decisions/
risks/
experiments/
architecture/
```

`ZASS.md` remains the obvious top-level entrypoint/index for the experiment.

The exact file partition may be refined inside the test fixture if needed, but the experiment must not create multiple competing semantic authorities.

## 4. Trigger to run CR-006 test

Run the scale-out comparison only when at least one observable trigger exists:

- navigation difficulty in one large ZASS file;
- review difficulty locating current decisions/risks/experiments;
- handoff/continuation requires excessive manual searching;
- contributor coordination becomes difficult;
- validation or maintenance friction appears because the file is materially large/complex;
- decision/experiment count is high enough that section navigation becomes unreliable.

Do not run CR-006 merely because multi-file organization looks cleaner.

## 5. Representative test cases

E4 execution must use at least:

- one reproducible large fixture;
- one real or realistically representative project case if available.

Promotion beyond TEST requires pain reproduced across more than one representative case or one strong real case plus a reproducible large fixture.

If only one narrow fixture exists, result confidence cannot exceed LOW for scale-out promotion.

## 6. Same-work comparison rule

Baseline and experimental shape must be tested against equivalent work.

Use the same or functionally equivalent tasks, for example:

- locate a specific LOCKED decision;
- identify current open risk/experiment;
- determine current architecture status;
- perform a handoff/continuation task;
- review a changed decision and its context;
- run available validator/tooling checks;
- update one bounded item and verify authority clarity.

Do not compare different workloads and call the difference architectural.

## 7. Measurement dimensions

Collect evidence where practical for:

### Navigation / review friction

- time or steps to locate required information;
- wrong-section/wrong-file navigation events;
- reviewer confusion or repeated searching;
- FIELD-OBSERVED friction severity.

### Handoff / continuation

- amount of manual explanation needed;
- ability to identify current state;
- missed or resurfaced decisions;
- explicit user rating target `scale-out-experiment` if submitted.

### Tooling reliability

- zass check/status/diff behavior where applicable;
- broken local references;
- metadata/loader behavior if relevant;
- validation regressions introduced by the experimental shape.

### Portability

- ease of manual copy/file transfer;
- number of files required to preserve usable context;
- risk of partial/stale handoff;
- receiver ability to identify the entrypoint.

### Authority clarity

- whether one semantic authority remains obvious;
- whether duplicate/conflicting state appears;
- whether owner decision vs AI suggestion vs Git state remains clear.

### Maintenance / ceremony cost

- extra files touched for one bounded change;
- duplicated metadata/index maintenance;
- additional sync/reference upkeep;
- user/reviewer friction caused by fragmentation.

## 8. Evidence recording

Both baseline and experimental runs must emit Track E evidence using the locked E2-T02/E2-T04 contracts.

Recommended `projectShape` values:

- `full-zass-single-file`
- `experimental-scale-out`

Relevant evidence should link primarily to:

- Q4 — tooling reliability
- Q5 — friction / ceremony
- Q6 — scale threshold
- Q7 — multi-file value
- Q8 — failure patterns
- Q9 — user-perceived value when explicitly rated
- Q10 — improvement priority

## 9. Controlled comparison rule

Keep these conditions equivalent where possible:

- same content/state baseline;
- same task sequence;
- same operator/reviewer or documented operator difference;
- same tool versions;
- same environment;
- same time-measurement method;
- same evidence capture rules.

Any material mismatch must be recorded as a limitation.

## 10. Scale-out promotion gate

A `SCALE-OUT CANDIDATE` finding is allowed only if **all** E2-T01 criteria are supported:

1. observable trigger;
2. reproducible pain;
3. material impact;
4. experimental improvement;
5. authority preserved;
6. portability preserved enough;
7. complexity justified.

Failure to satisfy even one criterion means canonical single-file ZASS remains the default.

## 11. Outcome rules

After human review, CR-006 test outcome must be one of:

- `KEEP SINGLE-FILE` — current model remains preferable;
- `DOCUMENT / ONBOARD` — pain is mainly discoverability/usage education;
- `CORRECTIVE DEFECT` — tooling/contract defect exists independently of scale-out;
- `SCALE-OUT CANDIDATE` — all promotion criteria supported;
- `REJECT SCALE-OUT` — experimental structure adds more cost/risk than value;
- `INSUFFICIENT EVIDENCE` — no responsible conclusion yet.

Do not map a prettier file tree directly to `SCALE-OUT CANDIDATE`.

## 12. STOP conditions

Stop the experiment and record the reason if:

- experimental shape creates competing Sources of Truth;
- canonical/experimental content drifts so comparison is no longer valid;
- privacy boundary would require raw/private content collection outside Track E contract;
- validator/tooling behavior becomes undefined and would require changing CR-010/CR-011 semantics during the test;
- evidence cannot be captured comparably;
- test scope starts expanding into a canonical migration project.

STOP does not equal failure; it may produce `INSUFFICIENT EVIDENCE` or a separate corrective finding.

## 13. Fairness / anti-bias rules

- Do not optimize the experimental shape after seeing every baseline weakness without documenting the change.
- Do not intentionally cripple the single-file baseline.
- Do not score subjective preference as objective performance.
- Do not hide portability/authority regressions behind faster navigation.
- Do not use user rating alone to prove scale-out value.
- Do not count experimental setup work as zero-cost.

## 14. Fixture size

E2-T06 does not lock one arbitrary line-count threshold because file length alone is not the product problem.

The E4 test fixture should be large enough to reproduce one or more locked trigger pains.

Record observable complexity indicators where available, such as:

- decision count;
- risk count;
- experiment count;
- major section count;
- approximate file size/line count;
- contributor count if relevant.

These are context indicators, not automatic promotion thresholds.

## 15. Tooling compatibility rule

The experimental shape may use temporary test-only adapters/helpers if required to make the comparison measurable, but:

- canonical `zass check/status/diff` semantics must not be silently redefined;
- any unsupported behavior must be reported as unsupported/test limitation;
- CR-010/CR-011 frozen contracts remain authoritative;
- no test-only behavior may leak into canonical ZASS without a separate decision.

## 16. Test report minimum

Each CR-006 comparison report must include:

1. case/fixture label;
2. trigger(s) that justified running the test;
3. baseline shape;
4. experimental shape;
5. equivalent task set;
6. evidence coverage;
7. baseline findings;
8. experimental findings;
9. portability/authority/ceremony trade-offs;
10. rating/feedback summary if explicitly provided;
11. limitations;
12. reviewed confidence;
13. one locked outcome from Section 11;
14. evidence references.

## 17. Non-goals

This protocol does not authorize:

- canonical multi-file migration;
- default folder changes;
- new mandatory metadata;
- new semantic Source of Truth;
- method-version bump;
- production packaging for multi-file ZASS;
- remote telemetry;
- AISYNC/CrossAI integration.

## 18. Acceptance criteria for E2-T06

E2-T06 passes when:

- baseline and experimental shapes are explicit;
- test is trigger-based, not aesthetic;
- same-work comparison is required;
- measurement dimensions cover navigation, handoff, tooling, portability, authority and ceremony;
- evidence flows through existing Track E contracts;
- promotion requires every E2-T01 scale-out criterion;
- STOP and INSUFFICIENT rules prevent forced migration;
- no canonical structure change is implemented.

## 19. Locked decision

CR-006 remains a TEST-only candidate.

Canonical single-file ZASS stays the default unless a future executed CR-006 protocol produces sufficient reviewed evidence for `SCALE-OUT CANDIDATE` and the owner separately authorizes a design change.
