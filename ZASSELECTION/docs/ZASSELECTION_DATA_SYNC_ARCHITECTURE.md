# ZASSELECTION — Data, Sync and Display Architecture

**Document version:** 0.1.0  
**Status:** SUPPORTING DESIGN — NOT CONFIRMED ARCHITECTURE  
**Method authority:** `ZASSELECTION_EN.md` v0.2.0 (default); `ZASSELECTION_MY.md` is the Malay companion  
**Date:** 2026-09-28

> This document supports the method. It does not replace or silently extend the locked ZASSELECTION method baseline.

## 1. Purpose

Define a future write-capable path that feels as simple as a Git commit while giving ZASSELECTION a structured and attractive decision display.

The method remains usable without this system. Until implementation passes its acceptance criteria, `SAVE` means only that the current AI environment has truthfully recorded the result somewhere it can actually write.

## 2. Candidate target architecture

```text
AI conversation
→ SAVE / SYNC PREVIEW
→ owner CONFIRM SYNC
→ authenticated write action
→ Apps Script endpoint
→ Google Sheets event log and current state
→ Google Sites read-only Decision Cards
```

Optional later inputs:

```text
Google Form
→ raw submission
→ Gemini API classification
→ PENDING REVIEW candidate
→ owner acceptance
```

Gemini API is unnecessary when the originating AI conversation already supplies a validated structured payload.

## 3. Proposed authority boundary

This boundary remains an architecture candidate until confirmed:

| System | Proposed role |
|---|---|
| Google Sheets event log | Selection decision authority |
| Google Sheets current-state tabs | Derived operational view |
| Google Sites | Read-only presentation |
| AI chat | Discussion and proposed updates |
| Google Forms | Optional raw input |
| Gemini API | Optional transformation of raw input |
| GitHub | Method template, documentation, code, and history—not personal selection authority |

If adopted, a conflict is resolved in this order:

```text
Validated event log
→ derived Sheet state
→ Google Sites mirror
→ AI chat memory
```

## 4. Why event-based storage

An append-only event log preserves:

- the original dilemma;
- each comparison revision;
- option elimination and its reason;
- owner `SELECT`;
- `PARK`, `REFRAME`, and `REVISIT` events;
- who acted and when;
- sync receipts and failures.

The current Decision Card is reconstructed from accepted events. Version history is not dependent on an AI remembering earlier discussion.

## 5. Candidate data model

### `DECISIONS`

| Field | Meaning |
|---|---|
| `decision_id` | Stable ID such as `SEL-001` |
| `revision` | Monotonic revision number |
| `title` | Short decision title |
| `question` | What must be chosen |
| `mode` | `QUICK` or `DEEP` |
| `status` | `OPEN`, `COMPARING`, `TESTING`, `SELECTED`, `PARKED`, `REVISIT_REQUIRED`, `CANCELLED` |
| `selected_option_id` | Owner-selected option |
| `recommendation` | AI recommendation, kept separate from selection |
| `confidence` | `LOW`, `MEDIUM`, `HIGH` |
| `reason` | Owner decision rationale |
| `consequences` | Accepted effects |
| `revisit_trigger` | Condition for reconsideration |
| `updated_at` | Trusted server timestamp |

### `OPTIONS`

| Field | Meaning |
|---|---|
| `decision_id` | Parent decision |
| `option_id` | Stable option ID |
| `name` | Option label |
| `status` | `ACTIVE`, `ELIMINATED`, `SHORTLISTED`, `SELECTED`, `REJECTED` |
| `must_have_result` | `PASS`, `FAIL`, `UNKNOWN` |
| `elimination_reason` | Why the option left the shortlist |
| `reversibility` | `EASY`, `COSTLY`, `HARD` |

### `CRITERIA`

| Field | Meaning |
|---|---|
| `decision_id` | Parent decision |
| `criterion_id` | Stable criterion ID |
| `name` | Criterion name |
| `type` | `MUST_HAVE` or `PREFERENCE` |
| `weight` | Optional; total weighted preferences must equal 100 |
| `evidence_quality` | `LOW`, `MEDIUM`, `HIGH` |

### `_EVENT_LOG`

| Field | Meaning |
|---|---|
| `event_id` | Unique idempotency key |
| `decision_id` | Target decision |
| `base_revision` | Revision expected by the writer |
| `new_revision` | Revision after acceptance |
| `event_type` | `CREATE`, `COMPARE`, `TEST`, `SELECT`, `PARK`, `REFRAME`, `REVISIT`, `CANCEL` |
| `actor` | Owner or authorized integration |
| `payload_hash` | Integrity/deduplication aid |
| `created_at` | Trusted server timestamp |
| `receipt_status` | `ACCEPTED`, `REJECTED`, `DUPLICATE`, `CONFLICT` |

## 6. Candidate sync protocol

### Step 1 — request

```text
[SYNC SELECTION]
```

### Step 2 — preview

```text
💾 ZASSELECTION SYNC PREVIEW

Decision: [title]
Operation: CREATE / UPDATE / SELECT / PARK / REFRAME / REVISIT
Current revision: [number]

Proposed changes:
- [...]

CONFIRM SYNC?
```

### Step 3 — explicit confirmation

```text
CONFIRM SYNC
```

### Step 4 — validated write

The write-capable tool sends a structured payload. Apps Script validates authentication, schema, revision, event ID, allowed transitions, lengths, formulas, and timestamps before writing.

### Step 5 — factual receipt

```text
✅ ZASSELECTION SYNCED

Decision ID: SEL-001
Revision: 4
Status: SELECTED
Event ID: [...]
Dashboard: [verified link]
```

If a real write receipt is absent, AI must report failure or lack of write capability. Generated Markdown is not a successful sync.

## 7. Example payload

```json
{
  "schema_version": "1.0",
  "event_id": "<unique-id>",
  "decision_id": "SEL-001",
  "base_revision": 3,
  "event_type": "SELECT",
  "mode": "DEEP",
  "selected_option_id": "OPT-B",
  "reason": "Meets every must-have with acceptable cost and lower operational risk.",
  "consequences": ["Higher initial price", "Lower maintenance burden"],
  "confidence": "HIGH",
  "revisit_trigger": "Price rises more than 20% before purchase"
}
```

The host application executes the write. Model function calling alone does not grant access or perform the operation.

## 8. Decision Card display

Google Sites should show a compact mobile-first card:

```text
🎯 DECISION
[question]

🔎 MODE                 DEEP
📌 STATUS               SELECTED
✅ SELECTED OPTION      [option]
🤖 AI RECOMMENDATION    [same / different]
📊 CONFIDENCE           HIGH

🚧 MUST-HAVES
[summary]

⚖️ KEY TRADE-OFFS
[summary]

💭 HUMAN FACTOR
[summary]

🔁 REVISIT TRIGGER
[condition]

Revision [n] · Last synced [timestamp]
```

Detailed evidence and scoring remain behind progressive disclosure. The first screen must help the owner understand and act, not expose a wall of fields.

## 9. Security and integrity controls

- Require explicit owner confirmation before authoritative writes.
- Store credentials in Apps Script Properties, an appropriate secret store, or configured action authentication—not prompts or Sheets.
- Scope permissions to the required spreadsheet and deployment.
- Use `event_id` for idempotency.
- Reject stale `base_revision` updates.
- Keep `_EVENT_LOG` append-only.
- Do not provide delete operations in the first release.
- Escape or reject untrusted spreadsheet formulas.
- Validate status transitions and `SELECT` ownership.
- Use a write lock to avoid concurrent Sheet corruption.
- Separate AI recommendation from owner selection.
- Do not publish sensitive personal decisions on a public Google Site.
- Record failure without partially updating derived state.

## 10. Failure behavior

| Failure | Required behavior |
|---|---|
| No write-capable tool | Explain that direct sync is unavailable; do not pretend |
| Duplicate event | Return the existing receipt without duplicating data |
| Stale revision | Reject with `CONFLICT`; request refreshed state |
| Invalid transition | Reject without modifying authority |
| Apps Script/Sheets failure | Report failure; no success receipt |
| Sites display stale | Authority remains valid; mark the display stale |
| Gemini unavailable | Raw candidate remains pending; no decision effect |
| Authentication failure | Write nothing |

## 11. Implementation phases

### Phase 1 — Confirm architecture

- Confirm authority boundary.
- Confirm schemas and event types.
- Confirm privacy model and dashboard audience.
- Produce acceptance fixtures for Quick and Deep decisions.

### Phase 2 — Sheets and Apps Script

- Create the workbook and validation rules.
- Implement the append-only event endpoint.
- Implement current-state projections.
- Test idempotency, conflict, and failure handling.

### Phase 3 — Direct AI sync

- Connect a write-capable Action, MCP/tool, or application.
- Enforce preview → `CONFIRM SYNC`.
- Return factual receipts.

### Phase 4 — Google Sites display

- Build mobile Decision Cards.
- Show revision, status, and last sync.
- Verify private sharing and stale-state behavior.

### Phase 5 — Optional raw input

- Add Google Forms if useful.
- Use Gemini API only for raw-input transformation.
- Keep transformed output `PENDING REVIEW` until accepted.

## 12. Acceptance criteria

The architecture passes only if:

- one confirmation produces one accepted event;
- the owner selection cannot be created by AI recommendation alone;
- duplicate delivery does not duplicate state;
- stale revisions are rejected;
- failed writes never return success receipts;
- a Decision Card can be rebuilt from the event log;
- Google Sites shows the same revision as Sheets;
- Quick Selection remains quick;
- Deep Selection preserves evidence, risk, feelings, and revisit trigger;
- secrets do not appear in prompts, logs, repository files, or public pages;
- the system remains usable on a phone.

## 13. Decisions still required before confirmation

1. Is Google Sheets event log the final selection authority?
2. Is the dashboard private to one Google account, a family, or a team?
3. Which write-capable AI integration is used first?
4. What authentication mechanism protects the Apps Script endpoint?
5. Which decision fields may contain sensitive personal information?
6. Should selected decisions be editable through an admin Sheet, or only through validated events?

Until these are decided and the acceptance criteria are tested, this document remains a supporting architecture candidate.
