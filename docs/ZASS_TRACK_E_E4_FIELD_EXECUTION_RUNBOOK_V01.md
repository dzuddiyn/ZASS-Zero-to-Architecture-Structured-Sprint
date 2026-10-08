# TRACK E — E4 Representative Field Execution Matrix & Runbook v0.1

**Status:** LOCKED FOR E4 EXECUTION  
**Date:** 2026-10-08  
**Track:** TRACK E — FIELD EVIDENCE & SCALE VALIDATION  
**Task:** E4-T01  
**Architecture baseline:** TRACK E architecture v0.1 FROZEN  
**Implementation baseline:** E3 CLOSED / PASS / FROZEN FOR E4

## 1. Purpose

This runbook defines the bounded field-execution matrix that E4 must follow before any Track E conclusion is made.

It separates four different evidence purposes:

```text
A. tooling baseline
B. representative real-use single-file case
C. reproducible large single-file fixture
D. paired CR-006 experimental scale-out comparison
```

The matrix exists to prevent mixing tooling reliability, user usefulness, scale pain and scale-out preference into one ambiguous result.

E4-T01 defines the protocol only. It does **not** collect field evidence.

## 2. E4 execution principles

Every E4 run must preserve:

- frozen E2 architecture;
- frozen E3 implementation baseline;
- semantic-authority separation;
- local-only evidence storage;
- explicit consent for USER-RATED / USER-FEEDBACK;
- same-work comparison for CR-006;
- factual evidence before reviewer interpretation;
- `INSUFFICIENT EVIDENCE` as a valid result.

No E4 run may silently modify product architecture to make the test easier.

## 3. Representative execution matrix

| Case | Purpose | Shape | Minimum type | Primary questions | CR focus |
|---|---|---|---|---|---|
| **E4-A** | Tooling baseline | canonical supported project | controlled fixture / clean project | Q3, Q4, Q8 | CR-015 recorder/tooling reliability |
| **E4-B** | Real-use usefulness + friction | canonical single-file ZASS | real or realistically representative project | Q1, Q2, Q3, Q5, Q8, Q9, Q10 | CR-014 case-study evidence |
| **E4-C** | Reproducible scale-threshold baseline | large canonical single-file fixture | reproducible large fixture | Q4, Q5, Q6, Q8, Q10 | CR-006 trigger proof |
| **E4-D** | Experimental multi-file value | paired experimental scale-out derived from E4-C and/or qualifying E4-B | controlled paired comparison | Q4, Q5, Q6, Q7, Q8, Q9, Q10 | CR-006 scale-out test |

E4-D is not allowed unless E4-B or E4-C exposes at least one observable CR-006 trigger.

## 4. Case E4-A — tooling baseline

### Objective

Verify that the evidence machinery and existing ZASS local tooling behave predictably in a bounded canonical project before interpreting real-use evidence.

### Minimum setup

Use a clean controlled project with:

- valid canonical ZASS structure appropriate to current tooling;
- Git repository where relevant;
- CR-011 metadata state deliberately known;
- no private semantic content required;
- explicit Track E `prepare` action if local evidence storage is used.

### Required operations

At minimum:

1. run existing `zass check`;
2. run existing `zass status`;
3. run existing `zass diff`;
4. record bounded AUTOMATED evidence;
5. record at least one bounded FIELD-OBSERVED record about operator friction or absence of friction;
6. run local projection.

### Required evidence

Record where applicable:

- command;
- exit code;
- diagnostic codes;
- OS family;
- runtime/tool version;
- projectShape;
- machineMetadataState;
- duration if measured consistently.

### PASS intent

E4-A is not a product-quality verdict.

It establishes whether later field evidence can trust the local execution path.

If E4-A exposes a deterministic implementation/tooling defect, stop before interpreting E4-B/C/D and classify it for corrective review.

## 5. Case E4-B — representative real-use single-file case

### Objective

Measure current ZASS usefulness, continuation quality, decision-control clarity and real friction in one real or realistically representative project.

### Selection criteria

Prefer a project that:

- has non-trivial decisions/history;
- has been continued across sessions, AI interactions or maintainers;
- contains enough current state to require real orientation;
- can be used without exposing private semantic content in receipts;
- remains canonical single-file for this case.

A project should not be selected merely because it makes ZASS look good or bad.

### Required task set

Use at least five bounded tasks:

1. identify current project state;
2. locate one specific LOCKED/accepted decision;
3. identify one open risk, unresolved point or experiment if present;
4. perform a continuation/handoff-style orientation task;
5. determine the next authorized action without resurfacing a rejected decision.

Where the project structure supports it, also run:

6. `zass check`;
7. `zass status`;
8. `zass diff`.

### Evidence targets

Primarily:

- Q1 — usefulness;
- Q2 — continuation quality;
- Q3 — decision-control integrity;
- Q5 — friction/ceremony;
- Q8 — recurring failure signals;
- Q9 — explicit optional user rating/feedback;
- Q10 — improvement priority.

### User signal

At the end of the bounded case, the operator may explicitly request:

> How useful was ZASS for this work?

Rating remains optional.

Feedback remains optional.

No rating/feedback record is created if the user skips.

## 6. Case E4-C — reproducible large single-file fixture

### Objective

Reproduce scale pain independently of one real project and establish whether a CR-006 trigger actually exists.

### Fixture requirements

The fixture must be large enough to reproduce one or more observable scale triggers.

Record non-sensitive complexity indicators where available:

- approximate line count;
- decision count;
- risk count;
- experiment count;
- major-section count;
- contributor count if relevant.

These indicators are descriptive context only, never automatic thresholds.

### Required task set

At minimum:

1. locate a named LOCKED decision;
2. identify current open risk/experiment;
3. identify current architecture state;
4. trace one decision/context relationship;
5. perform a handoff/continuation orientation;
6. update one bounded item;
7. verify source-of-truth clarity after the update;
8. run applicable tooling.

### Trigger rule

E4-C qualifies CR-006 for paired experimental testing only if at least one observable trigger is recorded, such as:

- repeated navigation/search;
- wrong-section navigation;
- material review friction;
- handoff difficulty;
- source-of-truth confusion risk;
- maintenance ceremony caused materially by scale.

If no trigger is reproduced:

```text
CR-006 paired experiment is not justified by E4-C.
```

## 7. Case E4-D — paired CR-006 experimental scale-out comparison

### Entry gate

E4-D may run only when E4-B and/or E4-C records at least one observable CR-006 trigger.

### Experimental shape

Use the frozen bounded shape:

```text
ZASS.md
decisions/
risks/
experiments/
architecture/
```

`ZASS.md` remains the top-level entrypoint/index.

The experiment must not create competing semantic authorities.

### Comparison rule

Compare:

```text
full-zass-single-file
vs
experimental-scale-out
```

using the same or functionally equivalent state and task sequence.

### Required same-work task set

At minimum:

1. locate the same decision;
2. locate the same risk/experiment;
3. identify the same architecture state;
4. perform the same continuation/handoff orientation;
5. update the same bounded logical item;
6. verify authority clarity;
7. run applicable tooling;
8. record setup/maintenance overhead.

### Measurement dimensions

Record where practical:

- task completion time;
- navigation/search steps;
- wrong-location events;
- manual explanation required;
- source-of-truth ambiguity;
- files touched;
- index/reference upkeep;
- tooling pass/fail;
- portability/handoff burden;
- optional explicit `scale-out-experiment` user rating.

### Fairness rule

Do not:

- intentionally cripple the single-file baseline;
- improve the experiment after each baseline weakness without recording the change;
- compare different tasks;
- ignore experiment setup cost;
- treat subjective preference as measured performance.

## 8. Execution order

Canonical E4 order:

```text
E4-A tooling baseline
        ↓
E4-B representative real-use case
        ↓
E4-C reproducible large single-file fixture
        ↓
trigger exists?
  ├── NO → do not run E4-D from that evidence path
  └── YES
        ↓
E4-D paired CR-006 experiment
        ↓
local projection
        ↓
human review
        ↓
case-study / findings
```

E4-A must complete before interpreting evidence from later cases.

E4-D must never be run merely because it is the next row in the matrix.

## 9. Per-run operator checklist

Before each run:

- identify case ID: E4-A/B/C/D;
- identify project/fixture using a non-sensitive label;
- confirm intended projectShape;
- confirm frozen E3 implementation is unchanged;
- explicitly run `prepare` if evidence ignore hygiene is desired;
- confirm no prohibited/private metadata will be recorded;
- confirm task set before execution;
- confirm measurement method if timing/steps are recorded.

During each run:

- do the pre-declared task set;
- record factual evidence only;
- preserve failed/friction events;
- do not repair architecture mid-run;
- do not infer rating/feedback;
- note any material deviation.

After each run:

- project local evidence;
- confirm considered/included/excluded coverage;
- confirm malformed/invalid receipts are visible;
- record limitations;
- separate factual result from reviewer interpretation;
- do not delete inconvenient evidence.

## 10. Run identity and labels

Use non-sensitive run labels such as:

```text
E4-A-01
E4-B-01
E4-C-01
E4-D-01
```

Do not encode:

- project names;
- usernames;
- organizations;
- repository names/URLs;
- machine identity;
- customer/client names.

Run labels are review aids only and are not user identity keys.

## 11. Evidence coverage target

E4 as a whole should attempt to cover:

| Question | Minimum intended source |
|---|---|
| Q1 | E4-B |
| Q2 | E4-B |
| Q3 | E4-A + E4-B |
| Q4 | E4-A + E4-C/D |
| Q5 | E4-B + E4-C/D |
| Q6 | E4-C |
| Q7 | E4-D only if trigger exists |
| Q8 | cross-case review |
| Q9 | optional explicit signal in E4-B/D |
| Q10 | human review after accumulated evidence |

Missing coverage must be reported as missing, not inferred.

## 12. Minimum evidence sufficiency before E5

Before E5 final STOP / REVIEW, E4 should have at least:

- one completed E4-A tooling baseline;
- one completed E4-B real/representative case;
- one completed E4-C large reproducible fixture;
- E4-D only if a scale trigger justifies it;
- local projection after each execution group;
- one human-reviewed case-study artifact or explicit `INSUFFICIENT EVIDENCE` decision;
- documented limitations and evidence references.

If these cannot be obtained responsibly:

```text
E4 may close with INSUFFICIENT EVIDENCE.
```

Do not fabricate a fourth case merely to fill the matrix.

## 13. STOP conditions

Immediately stop the affected run if:

- private/raw semantic content would need to be captured outside contract;
- evidence machinery would need frozen architecture modification;
- baseline and experiment are no longer comparable;
- competing Sources of Truth appear;
- measurement method changes materially mid-comparison;
- evidence receipts cannot be captured truthfully;
- a deterministic tooling defect invalidates downstream interpretation;
- experiment scope becomes product migration work.

Record the STOP reason factually.

## 14. Corrective-defect handling

If field execution exposes a real implementation defect:

1. stop the affected interpretation;
2. record the factual defect evidence;
3. classify it for human review;
4. do **not** silently patch during the same comparison;
5. open a separate corrective task only after explicit decision;
6. rerun affected evidence after the corrective baseline is frozen.

This prevents moving-target evidence.

## 15. Case-study boundary

CR-014 case-study work occurs only after factual receipts/projection exist.

A reviewed case-study must still separate:

```text
FACTUAL EVIDENCE
USER-PROVIDED SIGNAL
REVIEWER INTERPRETATION
TRACK E DECISION
```

Case-study material remains local/private by default.

## 16. E4 atomic execution queue

E4-T01 locks this matrix/runbook.

Proposed canonical execution queue after T01:

```text
E4-T02  Execute tooling baseline E4-A
E4-T03  Execute representative real-use case E4-B
E4-T04  Build + execute reproducible large single-file fixture E4-C
E4-T05  STOP / trigger review for CR-006
E4-T06  Execute paired scale-out experiment E4-D if authorized
E4-T07  Aggregate/project E4 evidence + coverage audit
E4-T08  Produce human-reviewed CR-014 case study / findings
E4-T09  E4 STOP / REVIEW → handoff to E5
```

E4-T06 is conditional. If E4-T05 finds no qualifying scale trigger, it must be marked `NOT RUN — TRIGGER NOT MET`, not forced.

## 17. E4-T01 acceptance criteria

E4-T01 passes when:

- representative cases are separated by evidence purpose;
- E4-A/B/C are mandatory minimum paths;
- E4-D is trigger-gated;
- each case has a bounded task set;
- Q1–Q10 intended coverage is explicit;
- operator checklist is explicit;
- privacy/authority/failure boundaries are preserved;
- STOP/corrective-defect rules prevent moving-target evidence;
- minimum sufficiency before E5 is explicit;
- no field evidence has been collected by E4-T01.

## 18. Locked decision

TRACK E E4 uses the four-case matrix:

```text
E4-A tooling baseline
E4-B representative real-use single-file
E4-C reproducible large single-file fixture
E4-D paired experimental scale-out — only when trigger-gated
```

Evidence collection begins only after this runbook is locked.

**NEXT after E4-T01 PASS:** `E4-T02 — Execute tooling baseline E4-A`.
