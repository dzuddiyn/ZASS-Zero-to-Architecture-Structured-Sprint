# TRACK E — Minimal Evidence Model & Local Receipt Contract v0.1

**Status:** LOCKED FOR E2 DESIGN  
**Date:** 2026-10-08  
**Track:** TRACK E — FIELD EVIDENCE & SCALE VALIDATION  
**Task:** E2-T02

## 1. Purpose

This contract defines the smallest evidence record and local receipt boundary needed to answer the E2-T01 evidence questions without collecting raw semantic project content.

It locks data meaning and local receipt behavior only. It does **not** choose the implementation command, package boundary, UI, network transport, database, dashboard, or aggregation service.

## 2. Design principles

- collect only fields that answer one or more locked Track E questions;
- prefer factual workflow/tool metadata over semantic project content;
- local-first by default;
- explicit opt-in for user rating and free-text feedback;
- no hidden telemetry;
- no automatic upload;
- preserve evidence-class separation;
- reviewer interpretation must not be stored as direct fact.

## 3. Minimal record envelope

Each receipt contains one or more evidence records under one receipt envelope.

Required envelope fields:

- receiptVersion — exact schema version for this receipt contract; v0.1 uses `0.1`.
- receiptId — locally generated opaque identifier; must not encode username, machine name, project name, repository URL, or other private identifier.
- createdAt — timestamp of local receipt generation.
- source — bounded producer identity such as `manual`, `zass-cli`, `bootstrap-test`, or another later approved producer.

Optional envelope fields:

- notes — local human note for the receipt itself; must remain optional and should not be required for automated use.

## 4. Minimal evidence record

Every evidence record must include:

- evidenceId — receipt-local opaque record identifier.
- evidenceClass — one of AUTOMATED, FIELD-OBSERVED, USER-RATED, USER-FEEDBACK, CASE-STUDY, INFERRED.
- questions — one or more Track E question IDs from Q1–Q10 that this record helps answer.
- result — bounded factual outcome appropriate to the evidence class.

## 5. Common factual metadata

These fields are optional unless the producing event can provide them factually:

- os — normalized operating-system family, not device name.
- runtimeVersion — relevant runtime version such as Node.js version.
- zassCliVersion — exact zass-cli version if involved.
- createZassVersion — exact create-zass-project version if involved.
- method — one of the supported ZASS method identifiers when relevant.
- language — supported method language when relevant.
- projectShape — bounded non-sensitive shape label, not real project name.
- machineMetadataState — bounded .zass metadata state when relevant.
- command — bounded command/event name, not arbitrary shell text.
- exitCode — factual process exit code when relevant.
- diagnosticCodes — list of diagnostic identifiers only, without diagnostic prose copied from private project content.
- durationMs — optional measured duration when technically available and useful.

These metadata fields primarily support Q4, Q6, Q7 and Q8.

## 6. Bounded result shapes by evidence class

### AUTOMATED

Minimum:

- result: PASS, FAIL, WARN, or NOT_APPLICABLE.

May include common factual metadata.

### FIELD-OBSERVED

Minimum:

- result: PASS, FAIL, FRICTION, or OBSERVED.

Optional bounded fields:

- observationCode — short controlled label for recurring patterns;
- severity — LOW, MEDIUM, HIGH, or CRITICAL when explicitly assessed by the field protocol;
- reproducible — YES, NO, or UNKNOWN.

Free-form raw project detail is not part of the minimal record.

### USER-RATED

Minimum:

- result: explicit rating value under the later locked rating scale;
- consent: true.

Until a rating scale is locked, USER-RATED records must not be generated.

### USER-FEEDBACK

Minimum:

- result: short user-provided feedback text;
- consent: true.

Feedback must be optional and intentionally submitted. It must not be scraped from ordinary chat/project content.

### CASE-STUDY

Minimum:

- result: REVIEWED or INSUFFICIENT;
- evidenceRefs — references to evidence IDs/receipts used in the reviewed synthesis.

The full case-study narrative belongs in a human-reviewed document, not inside the minimal receipt.

### INFERRED

Minimum:

- result: short reviewer interpretation;
- evidenceRefs — supporting evidence IDs/receipts.

INFERRED records must never impersonate AUTOMATED or FIELD-OBSERVED facts.

## 7. Project-shape vocabulary

To avoid leaking real project identity, projectShape should use bounded labels such as:

- legacy-no-machine-metadata
- generated-with-machine-metadata
- full-zass-single-file
- experimental-scale-out
- fixture
- other-non-sensitive

Exact vocabulary may be extended later only through a contract update.

## 8. Local receipt format

Canonical v0.1 serialization is JSON.

Canonical filename pattern:

`zass-evidence-<receiptId>.json`

Canonical recommended local directory:

`.zass/evidence/`

The directory is a local evidence artifact location only. It is **not** semantic authority and does not change the CR-011 rule:

`Markdown = semantic authority`

Receipts may be Git-ignored by default in a later implementation decision. This contract does not yet lock ignore behavior.

## 9. Example receipt

```json
{
  "receiptVersion": "0.1",
  "receiptId": "r-01JABCDEF123",
  "createdAt": "2026-10-08T19:10:00+08:00",
  "source": "zass-cli",
  "records": [
    {
      "evidenceId": "e-001",
      "evidenceClass": "AUTOMATED",
      "questions": ["Q4", "Q8"],
      "result": "PASS",
      "os": "windows",
      "zassCliVersion": "0.4.0",
      "projectShape": "full-zass-single-file",
      "method": "zass",
      "language": "my",
      "machineMetadataState": "VALID",
      "command": "check",
      "exitCode": 0,
      "diagnosticCodes": ["Z003"]
    }
  ]
}
```

The example is illustrative only. Diagnostic codes must reflect the actual event; implementations must not invent codes merely to fill fields.

## 10. Prohibited default fields

The minimal receipt must not include by default:

- raw ZASS/Markdown content;
- chat transcript;
- LOCKED decision text;
- architecture text;
- real project name;
- private repository URL or remote;
- local filesystem path;
- username, hostname, device name, email, account ID or IP address;
- provider-held memory/profile/persona;
- API keys, tokens, credentials, secrets;
- arbitrary environment dumps;
- full diagnostic prose if it may contain semantic project content.

## 11. Consent boundary

AUTOMATED and FIELD-OBSERVED local records may be created as part of an explicitly started Track E field/test action.

USER-RATED and USER-FEEDBACK require explicit user action/consent for each submitted rating or feedback event.

No receipt may be transmitted off-device or off-repository automatically under this contract.

## 12. Local ownership and authority

Receipts are evidence artifacts, not project authority.

They may support later review, but they cannot:

- LOCK decisions;
- modify ZASS state;
- override Markdown;
- certify a case study without review;
- claim user consent that did not occur;
- auto-promote CR-006, CR-014 or CR-015.

## 13. Evidence linkage

Cross-receipt linkage may use opaque receiptId/evidenceId references only.

Do not use private repository names, project names or user identity as the linkage key.

## 14. Retention and publication

Retention policy, Git tracking, cleanup command, aggregation location and any opt-in submission/publishing mechanism are deferred.

Local existence of a receipt does not authorize publication.

## 15. Acceptance criteria for E2-T02

E2-T02 passes when:

- every required field maps to one or more E2-T01 questions or evidence-integrity needs;
- semantic/private content is excluded by default;
- USER-RATED and USER-FEEDBACK are explicitly opt-in;
- JSON/local receipt behavior is deterministic enough for later implementation;
- receipts cannot become a second Source of Truth;
- no network/upload architecture is implied;
- no exact recorder implementation is chosen.

## 16. Locked decision

TRACK E v0.1 will use a minimal local JSON receipt model centered on opaque IDs, evidence class, Track E question linkage, bounded factual outcomes and non-sensitive tooling/workflow metadata.

Any future field added to the recorder must justify which locked Track E question it answers or which evidence-integrity property it protects.
