# TRACK E — Rating & Feedback Contract v0.1

**Status:** FROZEN — TRACK E ARCHITECTURE v0.1  
**Date:** 2026-10-08  
**Track:** TRACK E — FIELD EVIDENCE & SCALE VALIDATION  
**Task:** E2-T03

## 1. Purpose

This contract defines the minimum explicit user-rating and short-feedback mechanism for TRACK E.

It enables USER-RATED and USER-FEEDBACK evidence under the E2-T02 local receipt contract without turning ratings into hidden telemetry, objective product truth, or a broad survey system.

It does **not** choose UI, CLI syntax, network submission, aggregation service, dashboard, or publication mechanism.

## 2. Rating question

Canonical question:

> How useful was ZASS for this work?

The rating applies to the specific work/session/case being intentionally reviewed, not to the user's entire history with ZASS.

## 3. Rating scale

TRACK E v0.1 uses an integer 1–5 scale:

- 1 — Not useful
- 2 — Slightly useful
- 3 — Mixed / somewhat useful
- 4 — Useful
- 5 — Very useful

No half-points, percentages, stars with hidden weighting, or inferred score are part of v0.1.

## 4. Rating targets

A USER-RATED record must include one bounded ratingTarget:

- overall-workflow
- tooling
- continuation-handoff
- scale-out-experiment

`overall-workflow` is the default target when the review is about the whole ZASS usage case.

New targets require a later contract update; arbitrary free-text targets are not allowed.

## 5. USER-RATED receipt shape

A USER-RATED evidence record must contain:

- evidenceClass: USER-RATED
- questions: includes Q9 and may include other relevant Q IDs
- result: integer 1, 2, 3, 4, or 5
- ratingTarget: one locked target
- consent: true

It may include privacy-safe common metadata from E2-T02 when factually relevant.

Example:

```json
{
  "evidenceId": "e-010",
  "evidenceClass": "USER-RATED",
  "questions": ["Q9"],
  "result": 4,
  "ratingTarget": "overall-workflow",
  "consent": true
}
```

## 6. Feedback prompt

Canonical optional prompt:

> What helped most, or what got in the way?

The user may skip feedback without affecting the validity of the rating or field test.

## 7. Feedback categories

A USER-FEEDBACK record may include one optional bounded feedbackCategory:

- context-continuity
- decision-clarity
- tooling
- friction-ceremony
- scale-navigation
- documentation-onboarding
- other

The category may be selected by the user or assigned during explicit human review. If assigned by a reviewer rather than the user, that fact must not be represented as user-supplied categorization.

## 8. USER-FEEDBACK receipt shape

A USER-FEEDBACK evidence record must contain:

- evidenceClass: USER-FEEDBACK
- questions: includes Q9 and/or another relevant Track E question
- result: intentionally submitted short feedback text
- consent: true

Optional:

- feedbackCategory: one locked category
- relatedRatingEvidenceId: opaque evidenceId of the associated USER-RATED record

v0.1 feedback text is limited to 500 characters per event.

Example:

```json
{
  "evidenceId": "e-011",
  "evidenceClass": "USER-FEEDBACK",
  "questions": ["Q5", "Q9"],
  "result": "The handoff saved me from explaining the project again, but the status wording was confusing.",
  "feedbackCategory": "context-continuity",
  "relatedRatingEvidenceId": "e-010",
  "consent": true
}
```

## 9. Consent contract

Rating and feedback are explicit opt-in events.

Valid consent requires an intentional action that clearly submits that rating or feedback for Track E evidence.

The following do **not** count as consent:

- ordinary conversation sentiment;
- praise or criticism elsewhere in chat;
- an AI's guess about satisfaction;
- silence;
- continued product use;
- existing project text;
- provider memory/profile;
- prior consent for a different rating/feedback event.

Each USER-RATED and USER-FEEDBACK record must carry `consent: true` because the submission event itself provided that consent.

## 10. Privacy guidance at capture

When asking for optional feedback, the capture surface should tell the user not to include secrets or unnecessary private project details.

Feedback is still user-authored text and may contain material the user chooses to provide. Therefore:

- it remains local under the E2-T02 contract unless a later explicit submission action is approved;
- it must not be auto-published;
- it must not be silently copied into public case studies;
- later aggregation should prefer category/count summaries over quoting raw feedback.

## 11. Interpretation rules

A 1–5 rating is USER-PERCEIVED VALUE, not objective product quality.

Therefore:

- no single rating can trigger a ZASS method or architecture change;
- averages alone cannot establish a defect or scale-out need;
- low ratings should be reviewed alongside FIELD-OBSERVED/AUTOMATED evidence and optional feedback;
- high ratings do not override reproducible defects;
- missing ratings are not negative ratings;
- skipped feedback is not evidence of satisfaction or dissatisfaction.

## 12. Aggregation-safe statistics

If later aggregation is approved, v0.1 ratings may support only straightforward factual summaries such as:

- count of submitted ratings;
- distribution across 1–5;
- median;
- arithmetic mean when sample size is shown;
- count by ratingTarget;
- count by feedbackCategory.

Do not manufacture a proprietary satisfaction score, weighted hidden score, NPS-like transformation, or benchmark claim from this contract.

Small sample sizes must be shown as small sample sizes; they must not be presented as representative population evidence.

## 13. Relationship to Track E decisions

USER-RATED and USER-FEEDBACK evidence primarily answer Q9 and may help Q1, Q2, Q5, Q6, Q7, Q8, and Q10 when linked to the relevant case.

Promotion decisions still follow E2-T01:

- structural/method changes require repeated stronger evidence;
- a reproducible contract defect can outweigh positive ratings;
- documentation/onboarding problems should not be misclassified as product defects merely because a rating is low.

## 14. No engagement manipulation

The rating/feedback mechanism must not:

- repeatedly nag the user;
- require a rating to continue using ZASS;
- preselect a favorable score;
- hide the skip option;
- reward high ratings;
- make low ratings harder to submit;
- solicit positive public reviews as a substitute for field evidence.

Exact prompt timing/cadence is deferred to later implementation design, but it must remain lightweight and non-blocking.

## 15. Acceptance criteria for E2-T03

E2-T03 passes when:

- one unambiguous 1–5 rating scale is locked;
- rating target meaning is bounded;
- optional short feedback has a bounded format;
- consent is event-specific and explicit;
- chat sentiment/provider memory cannot be converted into ratings;
- interpretation and aggregation limits prevent rating misuse;
- no UI/network implementation is selected.

## 16. Locked decision

TRACK E v0.1 uses an explicit opt-in 1–5 usefulness rating plus optional short feedback of up to 500 characters.

Ratings and feedback are supporting evidence only. They never replace factual field evidence, do not authorize hidden telemetry, and cannot by themselves change ZASS.
