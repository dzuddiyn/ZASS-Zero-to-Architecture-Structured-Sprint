# ZASS Lessons Management — Proposal v0.1

**Status:** PROPOSED — NOT ACTIVE / NOT LOCKED  
**Change class:** Documentation proposal only  
**Authority:** No change to current ZASS method authority until explicit owner approval  
**Baseline reviewed:** ZASS SYSTEM v0.2.6 / Full ZASS v0.3.11  
**Baseline commit:** `dd7e9b4dacd1aaa21591de62bc423ac3a9904f91`

> Audit what exists. Preserve what works. Improve only what is missing.

## 1. Purpose

This proposal defines a small, evidence-led way to recognise, review, preserve, and retrieve reusable learning that already emerges from ZASS experiments and project execution.

It does **not** introduce a new project lifecycle, operational/post-mortem framework, knowledge database, CLI schema, or new top-level knowledge classification.

The immediate objective is to make existing learning easier to distinguish from raw references, ideas, and interpretations—and safer to reuse when a similar decision or execution problem appears again.

## 2. Existing mechanisms to preserve

The following mechanisms already exist and remain authoritative for their current purposes:

- `E-xxx` Experiment records capture a hypothesis/question, pass/fail signal, observed result, learning, and impact.
- ACTION_PLAN Section 8, **FAILURES / LESSONS**, captures failures, evidence, learning, a non-repeat guardrail, and related ZASS IDs.
- ACTION_PLAN Section 11, **ZASS FEED**, returns findings for ZASS review; it does not create decisions.
- Track E evidence receipts preserve bounded evidence classes, results, and evidence references.
- The Track E Case Study contract supports reviewed evidence synthesis.
- Git history, commits, source artifacts, and existing ZASS IDs preserve lineage.

These are complementary mechanisms, not duplicate systems. This proposal adds a conceptual review/reuse discipline around them; it does not replace or duplicate their evidence records.

## 3. Distinguish the four terms

These are **working distinctions**, not four new top-level ZASS knowledge categories.

| Term | Meaning | What it is not |
|---|---|---|
| **Reference** | A source or artifact that can support later reasoning; provenance belongs here. | A conclusion merely because it was saved. |
| **Idea** | A possible action, explanation, or direction; existing `I-xxx` remains the Idea record. | An approved decision or proven learning. |
| **Insight** | An interpretation or pattern inferred from evidence, analysis, or experience. | An established fact or automatically reusable rule. |
| **Lesson** | A reviewed, evidence-supported learning from actual experience, observation, or experiment, with an explicit applicability scope and a useful future implication. | An article summary, an AI opinion, an unsupported causal claim, or a universal rule inferred from one event. |

A source may lead to an Idea or Insight. An actual experiment or experience may support an Insight. Only a reviewed and sufficiently supported Insight should be promoted as a reusable Lesson.

A Lesson may be valid only within one project or environment. Cross-project applicability must be demonstrated, not assumed.

## 4. Lesson qualification and promotion

A proposed Lesson should meet all of the following before it is treated as reusable guidance:

1. **Experience basis:** it comes from an actual observation, experiment, field interaction, or execution outcome—not solely from an article, hypothetical scenario, or AI suggestion.
2. **Specific learning:** it states what was learned in a clear, testable or actionable way.
3. **Observed outcome:** it records what actually happened. If there was an original target or hypothesis, preserve the expected outcome as well.
4. **Traceable support:** it links to the evidence already held in an `E-xxx`, ACTION_PLAN entry, evidence receipt, reviewed case study, source artifact, or commit. Do not copy evidence into a second store.
5. **Context and scope:** it states where the learning applies, including relevant environment, version, workflow, constraints, or project boundary.
6. **Bounded interpretation:** it separates observed facts from interpretation. A root cause is recorded only when supported; otherwise use `UNKNOWN` or `HYPOTHESIS`.
7. **Future value:** it explains the principle, guardrail, or decision cue that may help in a future comparable situation.

A single failure can justify a **project-scoped** Lesson when the observation and corrective action are clear. It does not, by itself, justify a universal or cross-project rule.

For cross-project reuse, require evidence that the mechanism or applicability extends beyond the originating context—normally through an independent second context or other direct evidence of shared conditions. Otherwise retain the Lesson as project-scoped.

## 5. Proposed validation states

These states are a **proposal for Lesson validation only**. They do not modify the existing Decision Status lifecycle (`Draft`, `Review`, `Approved`, `Locked`, `Superseded`).

| Proposed state | Meaning | Retrieval behaviour |
|---|---|---|
| `CANDIDATE` | Captured learning awaiting adequate review or evidence. | May be shown as an unverified candidate, never as established guidance. |
| `REVIEWED` | Context, evidence links, interpretation, and scope have been checked; validation may still be limited. | Show with its limitations; do not imply broad validation. |
| `VALIDATED` | Evidence supports reuse within the stated scope. | Eligible for relevant retrieval within that scope. |
| `SUPERSEDED` | New evidence, context, or version has replaced or materially contradicted the Lesson. | Exclude from active guidance; retain for history and conflict explanation. |
| `REJECTED` | Review found the proposed learning unsupported or incorrect. | Do not retrieve as guidance; retain the reason and provenance where useful. |

There is no Lesson state called `LOCKED`. A Lesson is learning, not an owner decision. If it leads to a policy, architecture, or project choice, that choice must still pass through the existing Decision and owner-approval process.

## 6. Minimum Lesson information

When a Lesson is promoted, the following information should be available. Existing evidence must be linked, not duplicated.

| Information | Requirement |
|---|---|
| Learning statement | Required |
| Context / situation | Required |
| Actual observation or outcome | Required |
| Evidence/source references | Required for `REVIEWED` and `VALIDATED` |
| Applicability scope | Required |
| Validation state | Required |
| Reusable principle / future implication | Required for `VALIDATED` |
| Related project and ZASS IDs | Where applicable |
| Expected outcome / original hypothesis | When one existed |
| Root cause | Only when supported; otherwise `UNKNOWN` or `HYPOTHESIS` |
| Review trigger | Required when a version, environment, dependency, or operating condition can make the Lesson stale |

This is a content checklist, not a new machine-readable schema. No new ID namespace is introduced by this proposal. In particular, `L-xxx` remains reserved for **Locked Decision**. Do not repurpose it for Lessons.

## 7. Proposed workflow

1. **Capture:** keep the source, experiment result, field observation, failure, or execution artifact in its existing location.
2. **Classify the material:** identify whether it is a Reference, Idea, Insight, or a potential Lesson. Do not force every item into a Lesson.
3. **Distil:** state the observed outcome separately from interpretation, uncertainty, and any proposed action.
4. **Propose:** record useful project-specific learning in the existing ACTION_PLAN Section 8 or the relevant `E-xxx` Learning field.
5. **Review:** check evidence, context, causal claims, applicability, repeatability, and possible counter-evidence.
6. **Validate within scope:** mark the Lesson `VALIDATED` only for the scope actually supported. Keep it project-scoped when wider applicability is not established.
7. **Feed back:** when the Lesson may affect ZASS decisions or architecture, submit the implication through the existing ZASS FEED and normal ZASS review. Do not auto-create or auto-change a decision.
8. **Reassess:** revisit the Lesson when its review trigger occurs, new evidence conflicts with it, or relevant versions, dependencies, environments, or constraints change. Mark it `SUPERSEDED` rather than silently deleting its history.

## 8. AI retrieval and safe reuse

AI should look for relevant Lessons only when they can materially help a current review, decision, architecture challenge, experiment, or ACTION_PLAN.

Retrieval should consider:

- problem/domain similarity;
- project and applicability scope;
- environment, workflow, tool, and version;
- relevant constraints and dependencies;
- validation state and evidence quality;
- freshness and known review triggers;
- contradictory or superseding evidence.

When presenting a retrieved Lesson, AI should show its validation state, scope, evidence/source references, and why it is relevant to the current situation.

Rules:

1. Prefer `VALIDATED` Lessons whose scope matches the current context.
2. Present `CANDIDATE` or `REVIEWED` items only with an explicit limitation label.
3. Do not use `SUPERSEDED` or `REJECTED` items as active guidance; surface them only when history or a conflict investigation makes them relevant.
4. If a Lesson is stale or the current context does not match its scope, warn or exclude it.
5. If Lessons conflict, surface both with their contexts and evidence. Do not silently choose one or resolve the conflict by recency alone.
6. If no relevant Lesson is found, say so. Do not invent one.
7. A retrieved Lesson is advisory evidence. It cannot override Facts, Constraints, existing Decisions, owner-approved/LOCKED decisions, or the normal ZASS authority gates.
8. AI must not promote its own suggestion or interpretation into a Lesson without the required experience basis, evidence, and review.

Freshness should be trigger-based rather than governed by an arbitrary universal expiry date. A Lesson may remain valid for years in a stable context, or become stale immediately after a material version or environment change.

## 9. Fit with current ZASS architecture

| Existing location | Continue using it for |
|---|---|
| `E-xxx` | Experiment purpose, evidence requirement, observed result, and initial learning. |
| ACTION_PLAN Section 8 | Project-level failure and learning capture. |
| ACTION_PLAN Section 11 / ZASS FEED | Findings proposed for ZASS review. |
| Track E evidence receipts | Evidence provenance and bounded factual results. |
| Track E Case Study | Human-reviewed synthesis when a case study is justified. |
| ZASS Decisions / architecture | Only the decisions or architecture changes accepted through existing governance. |
| Git history | Durable change lineage and review history. |

Do not create a separate database, CLI command, mandatory Lesson index, or duplicate evidence store now. If cross-project retrieval later proves difficult, evaluate a **derived, read-only index** as a separate proposal with demonstrated need.

## 10. Scope boundaries and explicit non-goals

This proposal does not:

- create an Operations or Post-mortem lifecycle inside ZASS;
- reopen CR-007 or move ZASS beyond its Zero-to-Architecture scope;
- replace ACTION_PLAN execution responsibility;
- add a new top-level Facts/Decisions/Constraints/Working Context category;
- change the existing Decision Status lifecycle;
- redefine `I-xxx`, `D-xxx`, `L-xxx`, or `E-xxx`;
- introduce a new Lesson ID, database, CLI schema, automated promotion, or automatic decision update;
- authorize changes to frozen method files or templates.

Operational/post-production post-mortem processes remain outside ZASS under the existing CR-007 boundary. Only a bounded learning that is relevant to an in-scope experiment, decision, or architecture may be fed back through existing ZASS mechanisms.

## 11. Existing example — OpsMate execution lesson

The controlled post-freeze patch dated 2026-10-09 records an actual execution lesson: real operational samples should be brought in early because they can reveal architecture and task-slicing assumptions before a large atomic-task queue is built.

The resulting correction added an Execution Reality Check and early real-artifact/sample review before detailed task decomposition. This is an example of experience informing a governed method correction; this proposal does not create a duplicate Lesson record or reopen that already-accepted correction.

Reference: `docs/ZASS_SYSTEM_POST_FREEZE_PATCH_2026-10-09.md`.

## 12. Acceptance criteria for any future activation

A future implementation or method change should not be approved until it can demonstrate:

- AI distinguishes Reference, Idea, Insight, and Lesson without treating them as new top-level knowledge categories.
- Articles, saved links, and AI-generated opinions are not automatically promoted to Lessons.
- A `VALIDATED` Lesson has traceable evidence, actual outcome, context, scope, and a useful future implication.
- Root cause is not fabricated when evidence is insufficient.
- A project-scoped Lesson is not presented as a universal rule.
- AI can retrieve a relevant Lesson from another project and explain both relevance and scope limits.
- Stale, superseded, rejected, or conflicting Lessons are handled explicitly.
- Lessons never override Facts, Constraints, Decisions, or owner-locked authority.
- Existing evidence records are linked rather than duplicated.
- CR-007 remains outside ZASS scope.

Suggested verification cases: false promotion from a reference; unsupported AI inference; project-only versus cross-project retrieval; version-triggered staleness; contradictory Lessons; and a Lesson that suggests—but cannot automatically change—a Decision.

## 13. Implementation decision requested

**Recommended disposition:** accept or revise this proposal as a documentation-only contract before any active method/template integration.

Until the owner explicitly approves activation:

- this document remains a proposal only;
- existing ZASS methods and templates remain unchanged;
- current Lessons capture continues through existing ACTION_PLAN and experiment fields;
- no new Lesson IDs, states, schemas, or retrieval obligations are active;
- ZASS remains FEATURE FROZEN / STABLE.

**Owner decision required:** approve, revise, or reject this proposal. A later activation must follow the applicable freeze governance and versioning rules.
