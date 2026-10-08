# TRACK E — E3 Operator Guide v0.1

**Status:** E3-T10 OPERATOR DOCUMENTATION  
**Date:** 2026-10-08  
**Track:** TRACK E — FIELD EVIDENCE & SCALE VALIDATION  
**Audience:** Track E field/test operator  
**Execution surface:** repo-local `tools/track-e/runner.js`

## 1. Purpose

This guide explains how to operate the E3 evidence implementation during controlled Track E field work.

The implementation is intentionally local and narrow:

```text
bounded field/test event
→ repo-local Track E runner
→ strict evidence validation
→ local JSON receipt
→ deterministic factual projection
→ human review
```

It is not a telemetry platform, not a public analytics API, and not a semantic authority for ZASS.

## 2. Public-product boundary

The Track E field runner is **repo-local / test-only**.

It is not:

- a public `zass` subcommand;
- declared in the npm `bin` surface;
- a replacement for `zass check`, `zass status`, or `zass diff`;
- a network uploader;
- a background agent;
- an automatic product-decision engine.

The published CLI surface remains:

```text
zass check
zass status
zass diff
```

There is no public `zass evidence` command in E3 v0.1.

## 3. Local receipt location

Canonical local evidence receipts are written beneath the explicitly selected project root:

```text
.zass/evidence/zass-evidence-<receiptId>.json
```

Receipt version:

```text
0.1
```

Receipts are append-oriented local evidence artifacts. They do not replace:

- `ZASS.md`;
- LOCKED decisions;
- architecture documents;
- Git history;
- canonical project evidence;
- AISYNC HISTORY.

A receipt cannot lock or alter a ZASS decision.

## 4. Explicit preparation

For a chosen Track E test project:

```bash
node tools/track-e/runner.js prepare --project .
```

This explicitly ensures the project `.gitignore` contains:

```text
.zass/evidence/
```

Properties:

- preserves existing `.gitignore` content;
- idempotent;
- does not create the evidence directory by itself;
- does not delete or expire receipts;
- is never run automatically by recording/projecting commands.

## 5. Recording factual evidence

### AUTOMATED

Example:

```bash
node tools/track-e/runner.js automated \
  --project . \
  --result PASS \
  --questions Q4,Q8 \
  --command check \
  --exitCode 0
```

Use for bounded factual tool/test outcomes.

### FIELD-OBSERVED

Example:

```bash
node tools/track-e/runner.js observed \
  --project . \
  --result FRICTION \
  --questions Q5,Q8 \
  --observationCode navigation-repeat \
  --severity MEDIUM \
  --reproducible YES
```

Use for bounded factual field observations.

Do not insert raw ZASS semantic content merely to make an observation richer.

## 6. Rating and feedback consent

USER-RATED and USER-FEEDBACK evidence are explicit opt-in only.

### Rating

```bash
node tools/track-e/runner.js rate \
  --project . \
  --rating 4 \
  --consent true \
  --target overall-workflow
```

The rating is an integer from 1–5 and represents user-perceived usefulness for the reviewed work/session/case.

### Feedback

```bash
node tools/track-e/runner.js feedback \
  --project . \
  --feedback "Useful, but setup wording was confusing." \
  --consent true \
  --category documentation-onboarding
```

Feedback is optional and capped at 500 characters.

The literal flag:

```text
--consent true
```

is required for rating/feedback.

The following are **not consent**:

- silence;
- continued product use;
- praise/criticism elsewhere;
- ordinary chat text;
- provider memory/profile;
- AI inference;
- prior consent for another event.

## 7. Privacy boundary

Receipts are designed to hold bounded workflow evidence, not raw project content.

Default prohibited structural surfaces include:

- real project/repository identifiers;
- private repository URLs/remotes;
- filesystem paths;
- username/hostname/device identity;
- email/account/IP identifiers;
- provider memory/profile/persona;
- API keys/tokens/credentials/secrets;
- arbitrary environment dumps.

Also excluded by design:

- raw ZASS Markdown;
- chat transcripts;
- LOCKED decision text;
- architecture content as analytics payload.

The validator is strict and fail-closed. Unknown/private contract fields are rejected rather than silently accepted.

Allowed user-authored feedback text is not heuristically mined or rewritten. The operator should still avoid entering secrets or unnecessary private details.

## 8. Projection

To print the local factual projection:

```bash
node tools/track-e/runner.js project --project .
```

Projection may summarize:

- receipt coverage;
- evidence-class counts;
- Q1–Q10 coverage;
- bounded result counts;
- diagnostic/observation-code counts;
- environment/tool-version coverage;
- project-shape/method/language coverage;
- severity/reproducibility counts;
- rating sample size/distribution/median/arithmetic mean;
- rating-target counts;
- feedback-category counts.

Projection is deterministic for the same valid receipt set.

Malformed/invalid receipts are isolated and surfaced through incomplete-coverage information rather than silently ignored.

## 9. Projection limitations

The projector does **not** decide:

- evidence confidence;
- final product finding;
- CR promotion;
- Track E outcome;
- whether a case study is publishable;
- whether multi-file ZASS should become canonical.

Those remain human-review decisions under the frozen E2 aggregation/case-study contract.

A rating average is not product quality proof. A single anecdote is not sufficient evidence for CR-006 promotion.

## 10. Failure truthfulness

Receipt write states are factual:

```text
SAVED
INVALID
COLLISION
WRITE_FAILED
```

Important guarantees:

- invalid receipt → no write;
- collision → existing receipt is not overwritten;
- write failure → never reported as SAVED;
- malformed receipt → excluded from projection and coverage marked incomplete;
- semantic ZASS files are not mutated by evidence operations.

## 11. Local retention

E3 v0.1 has no automatic deletion, expiry, cleanup, or remote backup.

Receipts remain local until explicitly removed by the operator/user.

The local-first model is deliberate: E3 authorizes no network submission mechanism.

## 12. Cross-platform verification

The implementation is continuously regression-tested through:

```text
zass-check
cli-cross-platform (ubuntu-latest)
cli-cross-platform (windows-latest)
```

The full CLI suite includes packed-artifact clean-install verification, existing `check/status/diff` behavior, CR-011 machine metadata, and Track E evidence tests.

## 13. E4 usage boundary

E3 prepares the machinery only.

E4 may use this machinery for controlled field execution and evidence collection after E3-T11 STOP / REVIEW returns:

```text
PASS / OPEN E4
```

Until that review passes, this guide does not itself authorize E4 field execution.
