# TRACK E — Field Evidence Questions & Decision Criteria v0.1

**Status:** LOCKED FOR E2 DESIGN  
**Date:** 2026-10-08  
**Track:** TRACK E — FIELD EVIDENCE & SCALE VALIDATION  
**Task:** E2-T01

## 1. Purpose

This contract defines the questions TRACK E evidence must answer and the criteria used to decide what the evidence means.

It does **not** choose the recorder implementation, evidence file schema, upload mechanism, rating UI, aggregation engine, or scale-out architecture.

## 2. Core evidence questions

TRACK E must answer these questions.

### Q1 — Current usefulness

Does ZASS materially reduce repeated thinking, repeated context retelling, resurfacing of rejected ideas, decision drift, or rework in real use?

### Q2 — Continuation quality

Can another session, AI, or maintainer understand the current project state with less manual explanation than without ZASS?

### Q3 — Decision-control integrity

Do users remain able to distinguish AI suggestion, owner decision, and actual Git/project state, and are unauthorized/unexplained decision changes detectable?

### Q4 — Tooling reliability

Do bootstrap, zass check, zass status, zass diff, and optional .zass/ metadata behave consistently across representative project shapes and supported environments?

### Q5 — Friction / ceremony

Where does ZASS create unnecessary effort, confusion, duplicate recording, or maintenance overhead?

### Q6 — Scale threshold

At what observable point, if any, does the current single-file ZASS model become materially harder to navigate, review, validate, hand off, or maintain?

### Q7 — Multi-file value

When a scale trigger is present, does an experimental split/multi-file model measurably improve usability or maintainability enough to justify its added portability and authority cost?

### Q8 — Failure patterns

Which failures recur across projects or users rather than appearing as one-off project-specific problems?

### Q9 — User-perceived value

When users explicitly opt in to feedback, how useful do they rate the workflow/tooling, and what short reason do they give for that rating?

### Q10 — Improvement priority

Which observed problems have enough frequency, severity, and confidence to justify a future ZASS change rather than documentation, onboarding, or no action?

## 3. Evidence classes

Evidence should be classified before interpretation:

- AUTOMATED — factual tool/test output such as exit code, diagnostic code, version or platform.
- FIELD-OBSERVED — factual result from a real or representative project run.
- USER-RATED — explicit opt-in rating supplied by the user.
- USER-FEEDBACK — explicit opt-in short qualitative feedback.
- CASE-STUDY — reviewed synthesis across one real usage case.
- INFERRED — reviewer interpretation derived from evidence; never stored as if it were direct fact.

## 4. Minimum decision dimensions

Every proposed product change emerging from TRACK E must be judged on:

- Frequency
- Severity
- Reproducibility
- User impact
- Authority risk
- Privacy risk
- Portability impact
- Complexity / ceremony cost
- Evidence confidence

No single rating or anecdote is sufficient by itself to change ZASS.

## 5. Decision criteria

### KEEP CURRENT

Use when evidence shows the current behavior is working adequately and observed issues are rare, low-impact, non-reproducible, or cheaper to solve through documentation/onboarding.

### DOCUMENT / ONBOARD

Use when the product behavior is correct but users repeatedly misunderstand setup, terminology, commands, or boundaries.

### CORRECTIVE DEFECT

Use when a reproducible behavior violates an already locked contract, causes factual falsehood, breaks portability, or creates incorrect authority/state behavior.

A corrective defect may open a bounded corrective task without treating the defect as a new feature request.

### CANDIDATE IMPROVEMENT

Use when repeated field evidence shows meaningful user/product friction, but the solution would alter behavior, method structure, workflow, or product surface.

This requires a separate decision/design gate.

### SCALE-OUT CANDIDATE

Use only when evidence shows that the current single-file model has crossed an observable scale threshold and the experimental split model produces a meaningful net improvement.

CR-006 must **not** be promoted merely because a multi-file layout looks cleaner.

### REJECT / NO ACTION

Use when evidence shows the proposed change adds more ceremony, risk, fragmentation, or maintenance cost than the problem warrants.

## 6. Scale-out promotion criteria

CR-006 can move beyond TEST only if the evidence shows all of the following:

1. Observable trigger — navigation/review/handoff/maintenance difficulty is actually present.
2. Reproducible pain — the difficulty appears across more than one representative case or can be reliably reproduced in a large fixture.
3. Material impact — the pain causes meaningful time loss, missed context, review difficulty, validation difficulty, or contributor friction.
4. Experimental improvement — a bounded split model improves the measured pain.
5. Authority preserved — the split model does not create unclear ownership or competing Sources of Truth.
6. Portability preserved enough — cross-AI/manual/file portability does not regress beyond an explicitly accepted trade-off.
7. Complexity justified — added structure/ceremony is lower than the problem it solves.

If any of these are missing, canonical single-file ZASS remains the default.

## 7. Field-evidence recorder promotion criteria

CR-015 can move from candidate to implementation only if:

- assembling evidence manually is demonstrably repetitive or error-prone;
- useful evidence can be projected from existing factual records or minimal opt-in input;
- the recorder avoids raw semantic content by default;
- it does not become a second Source of Truth;
- local-first collection is sufficient for the initial implementation;
- the evidence model answers at least several core Track E questions;
- maintenance cost remains small.

A broad analytics/telemetry platform is not justified by this contract.

## 8. Real-world case-study criteria

CR-014 case-study evidence is useful when a case contains enough reviewed evidence to explain:

- starting context;
- ZASS method/tooling used;
- relevant workflow events;
- observed benefits;
- observed friction/failures;
- user rating/feedback if explicitly provided;
- factual evidence references;
- reviewer interpretation clearly separated from facts;
- improvement candidates or explicit no-action decision.

A case study must not expose private project semantics merely to make the report more interesting.

## 9. Evidence sufficiency

TRACK E may make a decision when evidence is sufficient for the decision's risk.

General rule:

- low-risk documentation change → lighter evidence acceptable;
- method / authority / portability change → stronger, repeated evidence required.

For structural changes such as CR-006 promotion, one anecdote is insufficient.

For a reproducible contract defect, one strong reproduction may be sufficient to open a corrective task.

## 10. Rating role

If a rating mechanism is later approved:

- it must be explicit opt-in;
- it is a user-perceived-value signal, not objective product truth;
- rating should be interpreted together with factual evidence and short optional feedback;
- exact scale is deferred to later E2 design.

No hidden satisfaction score is authorized.

## 11. Privacy / evidence boundary

Evidence questions must be answerable without default collection of:

- raw ZASS/Markdown content;
- chat transcript;
- LOCKED decision text;
- architecture text;
- provider memory/profile;
- secrets/tokens;
- private repository URLs;
- personal identifiers not required by an explicitly approved study.

Prefer metadata about workflow/tool behavior over semantic project content.

## 12. Final Track E review outputs

At STOP / REVIEW, findings should be grouped into:

- KEEP CURRENT
- DOCUMENT / ONBOARD
- CORRECTIVE DEFECT
- CANDIDATE IMPROVEMENT
- SCALE-OUT CANDIDATE
- REJECT / NO ACTION

Each finding must cite the evidence class and confidence.

## 13. Locked decision

TRACK E will collect evidence to answer defined product questions first.

It will **not** collect data merely because the data is easy to collect.

Architecture and implementation in later E2/E3 tasks must justify every captured field by one or more questions in this contract.
