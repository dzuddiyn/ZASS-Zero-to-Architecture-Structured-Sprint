# TRACK E — Aggregation & Case-Study Contract v0.1

**Status:** FROZEN — TRACK E ARCHITECTURE v0.1  
**Date:** 2026-10-08  
**Track:** TRACK E — FIELD EVIDENCE & SCALE VALIDATION  
**Task:** E2-T05

## 1. Purpose

This contract defines how valid Track E receipts may be aggregated into factual summaries and then transformed through human review into case-study evidence.

It locks aggregation meaning, lineage, confidence handling, insufficiency rules, case-study structure, and privacy/publication boundaries.

It does **not** implement an aggregator, select a UI/dashboard, create a central service, or publish any case study.

## 2. Aggregation source boundary

Aggregation may read only:

- valid v0.1 Track E local receipts;
- bounded fields defined by locked Track E contracts;
- explicit evidence references already produced by those receipts.

Aggregation must not crawl arbitrary project Markdown, chats, provider memory, Git history, or unrelated repository content merely to enrich summaries.

## 3. Aggregation outputs

A factual aggregate may contain only deterministic summaries such as:

- receipt count;
- evidence-record count;
- count by evidenceClass;
- count by Q1–Q10 coverage;
- PASS / FAIL / WARN / FRICTION / OBSERVED counts where applicable;
- diagnostic-code frequency;
- observation-code frequency;
- OS/runtime/tool-version coverage;
- projectShape/method/language coverage;
- rating count and 1–5 distribution;
- rating median;
- rating arithmetic mean with sample size;
- count by ratingTarget;
- count by feedbackCategory;
- reproducibility/severity counts when present.

Every aggregate must preserve the source evidence class and sample size needed to interpret the number.

## 4. Prohibited aggregation behavior

The aggregator must not:

- convert USER-FEEDBACK into AUTOMATED fact;
- convert INFERRED interpretation into FIELD-OBSERVED fact;
- treat missing ratings as zero/neutral/negative ratings;
- create hidden weighting or proprietary satisfaction scores;
- merge unrelated evidence through inferred identity;
- deduplicate by project/user identity that was never explicitly captured;
- invent denominator values;
- suppress failed/malformed receipt coverage without disclosure;
- infer semantic conclusions such as 'ZASS is successful' from counts alone.

## 5. Coverage and completeness

Every aggregate summary must state enough coverage truth to avoid false confidence.

Minimum coverage fields/concepts:

- receipts considered;
- valid receipts included;
- invalid/unreadable receipts excluded;
- evidence records included;
- evidence classes represented;
- Track E questions represented;
- rating sample size when ratings are summarized.

If malformed/unreadable receipts exist, the aggregate must be marked as incomplete coverage rather than silently presenting itself as complete.

## 6. Evidence confidence for reviewed findings

Human-reviewed findings use one qualitative evidence-confidence level:

- LOW
- MEDIUM
- HIGH

Guidance:

### LOW

- one-off anecdote or narrow fixture;
- weak reproducibility;
- important evidence classes/questions missing;
- conflicting signals unresolved.

### MEDIUM

- more than one supporting observation or one strong reproducible field result;
- relevant factual evidence exists;
- remaining gaps are known and do not overturn the finding.

### HIGH

- repeated/reproducible evidence across representative cases or a very strong deterministic contract reproduction;
- evidence classes and coverage are sufficient for the decision risk;
- material contradictions have been investigated.

Confidence is reviewer-assigned and therefore belongs to reviewed findings, not raw automated receipts.

## 7. Finding structure

Every Track E reviewed finding must include:

- findingId — opaque/review-local identifier;
- outcome — one locked E2-T01 outcome;
- questions — relevant Q1–Q10 IDs;
- evidenceRefs — receipt/evidence references or aggregate references;
- evidenceClasses — classes used;
- confidence — LOW, MEDIUM, or HIGH;
- rationale — concise human-reviewed explanation;
- limitations — known gaps or conflicting evidence;
- nextAction — optional bounded next step; it must not imply authorization beyond the reviewed outcome.

Locked outcomes remain:

- KEEP CURRENT
- DOCUMENT / ONBOARD
- CORRECTIVE DEFECT
- CANDIDATE IMPROVEMENT
- SCALE-OUT CANDIDATE
- REJECT / NO ACTION

## 8. Evidence sufficiency / insufficiency

A review must explicitly use `INSUFFICIENT EVIDENCE` when the evidence cannot responsibly support a Track E finding.

Typical triggers:

- sample too small for the claimed scope;
- key evidence source is malformed/missing;
- only user rating exists for a structural claim;
- evidence conflicts materially and cannot be reconciled;
- CR-006 promotion criteria are not all evidenced;
- privacy constraints prevent collection of necessary proof without a separate decision.

`INSUFFICIENT EVIDENCE` is not failure and must not be converted into KEEP CURRENT or REJECT merely to force a conclusion.

## 9. Case-study purpose

A CR-014 case study is a reviewed learning artifact showing what happened in one bounded real/representative use case and what the evidence does or does not support.

It is not:

- marketing proof;
- a testimonial generator;
- a public analytics report;
- a replacement for raw receipts;
- permission to disclose project semantics.

## 10. Minimum case-study structure

Each case study should contain:

1. Case ID / non-sensitive label
2. Scope and starting context
3. ZASS method/tooling used
4. Evidence coverage
5. Observed benefits
6. Observed friction/failures
7. User rating/feedback summary, if explicitly provided
8. Reviewed findings
9. Evidence confidence and limitations
10. Decision / no-decision outcome
11. Referenced receipt/evidence IDs

The starting context must be summarized at a level that does not require copying raw private project content.

## 11. Facts vs interpretation

Case studies must visibly separate:

### FACTUAL EVIDENCE

Deterministic or directly observed facts from receipts.

### USER-PROVIDED SIGNAL

Explicit rating/feedback.

### REVIEWER INTERPRETATION

Human reasoning based on cited evidence.

### TRACK E DECISION

The resulting KEEP / DOCUMENT / DEFECT / IMPROVEMENT / SCALE-OUT / REJECT / INSUFFICIENT outcome.

No layer may be presented as another.

## 12. Feedback quotation boundary

Default case studies should summarize feedback categories/themes rather than quote raw text.

Raw feedback may be quoted only with explicit permission for that quotation/publication context.

Local consent to store USER-FEEDBACK is **not** consent to quote or publish it.

## 13. Publication boundary

Case studies are local/private review artifacts by default.

Publication requires a separate explicit action and must verify:

- no private semantic project content is disclosed;
- no private identifiers/repository URLs/paths appear;
- user feedback quotation has separate permission if quoted;
- evidence confidence/limitations remain visible;
- the case is not misleadingly presented as representative beyond its evidence.

No automatic publication is authorized.

## 14. Cross-case aggregation

Multiple case studies may later be summarized across cases using only non-sensitive reviewed fields and factual aggregate counts.

Cross-case review must not silently collapse:

- different evidence classes;
- different project shapes;
- different methods/languages;
- different rating targets;
- experimental scale-out vs canonical single-file cases.

Cross-case patterns may support Q8/Q10, but pattern recognition remains a human-reviewed conclusion with evidence references.

## 15. CR-006 scale-out comparison

For CR-006, aggregation should keep baseline and experimental-scale-out evidence separable.

Minimum comparison dimensions should include, when measured:

- navigation/review friction;
- handoff/continuation friction;
- validation/tooling reliability;
- portability impact;
- authority/source-of-truth clarity;
- maintenance/ceremony cost;
- user rating target `scale-out-experiment`, if explicitly submitted.

A SCALE-OUT CANDIDATE finding still requires all E2-T01 promotion criteria; aggregate improvements in one metric are insufficient.

## 16. CR-015 recorder relationship

CR-015 may automate factual projection and summary generation only.

It must not automatically:

- assign final evidence confidence;
- classify product outcomes;
- declare a case study reviewed;
- promote CR-006;
- open implementation work.

Those remain human-review responsibilities.

## 17. Retention / source linkage

Case-study summaries and reviewed findings should reference receipt/evidence IDs rather than duplicate raw receipts.

If a source receipt is deleted under a future retention policy, a reviewed artifact must not pretend the source is still verifiable. Future retention design must define how broken references are surfaced.

Exact retention and Git-tracking policy remain deferred.

## 18. Acceptance criteria

E2-T05 passes when:

- allowed aggregation outputs are deterministic and bounded;
- coverage/incomplete-data truth is explicit;
- confidence and insufficiency rules prevent forced conclusions;
- reviewed findings have traceable evidence lineage;
- case-study facts/user signals/inference/decision are separated;
- publication and feedback-quotation consent are separate from local capture consent;
- CR-006/CR-014/CR-015 responsibilities remain distinct;
- no implementation or publication occurs.

## 19. Locked decision

TRACK E v0.1 uses deterministic local aggregation for factual summaries and human review for interpretation, confidence, findings, and case studies.

Every reviewed conclusion must preserve lineage back to evidence and must be allowed to end in `INSUFFICIENT EVIDENCE` rather than forcing a product decision.
