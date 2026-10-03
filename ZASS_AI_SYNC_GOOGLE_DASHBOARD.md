# ZASS AI Sync and Google Dashboard

**Status:** Integration reference; AI-SYNC Web direction locked; Public Method Gateway T-013A/T-013B proof passed in AISYNC

**Pilot scope:** Full ZASS workflow first

**Document version:** 0.4

**Date:** 2026-10-02

> **Current system direction (2026-10-01):** AI-SYNC Web is now the locked ZASS SYSTEM product UX / automation layer over a first-class local core. The Google Sheets / Sites / Notion material in this document remains an integration/reference path, not the required primary product surface. See [docs/ZASS_SYSTEM_UI_UX_CONTRACT.md](docs/ZASS_SYSTEM_UI_UX_CONTRACT.md).

```text
LOCAL FIRST-CLASS CORE  ←→  AI-SYNC WEB
             ↓
      GitHub Source of Truth
```

The local CLI/validator must remain useful without AI-SYNC. AI-SYNC must reuse core validation/authority semantics rather than becoming a second independent rule engine.

> **Bukan potong fikir; potong ulang fikir.**

## 1. Purpose

This document describes a practical way for an AI conversation to produce a traceable ZASS update and later synchronize attractive read-only views to Google Sheets, Google Sites, and Notion.

The first pilot uses full ZASS because GitHub already provides the authoritative file, commit history, versioning, rollback, and a familiar owner-controlled approval gate.

The target experience is similar to a Git commit:

```text
Discuss with AI
→ Preview proposed changes
→ Owner confirms
→ One authoritative commit
→ Receive commit/version receipt
→ Dashboards refresh from that commit
```

This design does not treat AI memory, chat history, Google Sheets, Google Sites, or Notion as the engineering source of truth.

---

## 2. Locked authority boundary for the pilot

| System | Authority | Responsibility |
|---|---|---|
| Project `ZASS.md` in GitHub | **Authoritative** | Ideas, questions, risks, experiments, decisions, LOCKED state, readiness, and architecture |
| Project `ACTION_PLAN.md` in GitHub | **Authoritative when adopted** | Live execution, progress, evidence, blockers, lessons, and ZASS FEED |
| Git commit history | **Authoritative history** | Version, author, timestamp, diff, rollback, and audit trail |
| Google Sheets | Mirror / structured projection | Machine-readable records, progress calculations, filters, and dashboard data |
| Google Sites | Read-only presentation | Attractive owner dashboard built from Google data |
| Notion | Read-only mirror | Phase A mirror of the complete `ACTION_PLAN.md`; compact dashboard deferred |
| AI chat | Working space | Exploration, review, drafting, and proposed changes only |

If any mirror conflicts with GitHub, **GitHub wins**. Do not edit the same authoritative project state independently in GitHub, Sheets, and Notion.

---

## 3. Important capability boundary

A prompt or shared link alone does not grant an AI permission to edit Google Drive or GitHub.

Direct sync requires the chat environment to expose at least one write-capable mechanism:

- a connected app with write actions;
- a custom Action or external API;
- an MCP/tool connector;
- a controlled browser or coding agent; or
- a custom application using model function calling.

If the current AI environment has no approved write tool, it must say that direct sync is unavailable. It must never pretend that a file was committed or synchronized.

Gemini API function calling can select a function and prepare its arguments, but the host application still executes the real operation. Similarly, a ChatGPT Action can call an external API only after the action and its authentication have been configured.

---

## 4. Locked full-ZASS pilot architecture

```text
AI discussion
    ↓
ZASS change proposal
    ↓
SYNC / COMMIT PREVIEW
    ↓
Owner confirmation
    ↓
GitHub authoritative commit
    ↓
GitHub Actions
    ↓
Notion read-only mirror of the complete ACTION_PLAN.md
```

The first pilot mirrors the complete `ACTION_PLAN.md`, not a compact dashboard. The authoritative commit happens once. Notion must derive from that commit rather than accepting unrelated edits. A compact dashboard, Google Sheets projection, and Google Sites display are deferred until the full-file Notion mirror is stable.

### Why GitHub comes first

- ZASS already uses Markdown and Git history.
- An owner can inspect the exact diff before accepting it.
- A failed dashboard sync does not damage the project record.
- Mirrors can be rebuilt from the repository.
- GitHub provides a natural version and rollback boundary.

---

## 5. Owner-facing command flow

The intended conversation is deliberately simple.

### Step 1 — User requests synchronization

```text
[SYNC ZASS]
```

The AI prepares a concise preview. It does not write yet.

### Step 2 — AI shows a preview

```text
📤 ZASS SYNC PREVIEW

Project: [project name]
Operation: UPDATE
Current version/commit: [known value]

Proposed changes:
- [changed decision, question, risk, experiment, or action]
- [status transition]
- [new evidence or revisit trigger]

Files affected:
- ZASS.md
- ACTION_PLAN.md (only when adopted and affected)

CONFIRM SYNC?
```

### Step 3 — Owner confirms explicitly

```text
CONFIRM SYNC
```

### Step 4 — AI performs the authorized write

The write-capable tool updates the authoritative file, creates one atomic commit, pushes it, and waits for a real response.

### Step 5 — AI returns a receipt

```text
✅ ZASS SYNCED

Version: [version]
Commit: [SHA]
Files: [changed files]
Mirror status: pending / success / failed
Dashboard: [link when available]
```

If the write or push fails:

```text
❌ SYNC FAILED

No successful authoritative commit was recorded.
Reason: [factual error]
```

The AI must not report success merely because it generated suitable Markdown.

---

## 6. Proposed AI sync protocol

Add the following behavior to the full ZASS workflow only after implementation is ready:

```text
When the owner writes [SYNC ZASS]:

1. Read the current authoritative ZASS.md and, when adopted, ACTION_PLAN.md.
2. Convert only accepted discussion outcomes into proposed file changes.
3. Preserve EXPLICIT, INFERRED, and UNKNOWN distinctions.
4. Do not modify LOCKED decisions without explicit owner authorization.
5. Show a concise SYNC PREVIEW and ask CONFIRM SYNC?
6. Do not write until the owner replies CONFIRM SYNC.
7. Apply all related changes as one atomic commit.
8. Report success only after the repository returns a real commit SHA.
9. Report downstream mirror status separately from commit success.
10. If no write-capable tool is available, state that direct sync is unavailable.
11. Never simulate a commit, version, mirror update, or dashboard link.
```

`LOCK`, `CONFIRM ARCHITECTURE`, and other protected ZASS transitions retain their existing gates. `SYNC ZASS` records an already authorized change; it does not silently authorize one.

---

## 7. Structured commit event

After a successful GitHub commit, the automation should generate or extract a normalized event for downstream mirrors.

Example:

```json
{
  "schema_version": "1.0",
  "project_id": "kerani-core",
  "source": "github",
  "commit_sha": "<real-sha>",
  "zass_version": "<visible-version>",
  "operation": "UPDATE",
  "changed_files": ["ZASS.md", "ACTION_PLAN.md"],
  "zero_to_architecture": {
    "percentage": 72,
    "basis": "derived from explicit readiness criteria"
  },
  "counts": {
    "open_questions": 4,
    "active_risks": 3,
    "locked_decisions": 8,
    "active_experiments": 1
  },
  "current_focus": "<short factual summary>",
  "next_action": "<one current action>",
  "timestamp": "<ISO-8601>"
}
```

Rules:

- Never invent a percentage. Derive it from the documented ZASS readiness formula or explicit checklist.
- `commit_sha` must come from GitHub, not from the language model.
- A repeated delivery of the same commit must update nothing twice.
- The mirror should store the source commit so staleness is visible.

---

## 8. Google Sheets mirror design

Recommended workbook: **ZASS Project Dashboard Data**

| Tab | Purpose |
|---|---|
| `PROJECT` | Project identity, source repository, current commit, visible version, and last sync |
| `READINESS` | Zero-to-Architecture criteria, calculation, progress bar, and blockers |
| `DECISIONS` | Decision ID, status, drivers, consequences, revisit trigger, and source commit |
| `QUESTIONS` | Open/answered questions and relationships |
| `RISKS` | Risk, impact, early warning signal, mitigation, and state |
| `EXPERIMENTS` | Assumption, pass/fail signal, observed result, learning, and impact |
| `ACTION_PLAN` | Current focus, ACTIVE/NEXT actions, blockers, and recent evidence |
| `_SYNC_LOG` | Append-only delivery log and error record |

### Dashboard fields

The first view should show only what helps the owner act:

```text
Project
Current ZASS version
Source commit
Last successful sync
Zero → Architecture progress bar
Current state
Open critical assumptions
Architecture blockers
Current focus
Next action
Recent LOCKED decisions
Active risks
Mirror health
```

Detailed IDs and long text remain available in lower tabs. Use progressive disclosure so the owner does not face a wall of records.

---

## 9. Google Sites dashboard

Google Sites is a presentation layer, not a database and not an authority.

It can embed the relevant Google Sheet ranges, charts, Forms, or a custom Apps Script web interface.

Suggested layout:

```text
🏠 PROJECT OVERVIEW

Zero → Architecture       [███████---] 72%
ZASS version              vX.Y.Z
Source commit             abc1234
Last sync                 [timestamp]
Mirror health             ✅ Current

🎯 CURRENT FOCUS
[one short statement]

🚧 ARCHITECTURE BLOCKERS
[critical unresolved items]

🔒 RECENT LOCKED DECISIONS
[short list]

⚠️ ACTIVE RISKS
[short list]

🧭 NEXT ACTION
[one action]
```

If embedded Sheets looks too much like a spreadsheet, use Apps Script HTML Service to render a responsive Decision/Project Card and embed that web app in Google Sites.

---

## 10. Notion mirror

Notion is the locked Phase A presentation target and remains read-only. It mirrors the **complete `ACTION_PLAN.md`** as a readable operational page. A compact project overview or selected-field dashboard is deferred until the complete-file mirror is stable.

Do not manually update project state or authoritative decisions in Notion. The mirror must show or retain traceability to its GitHub source commit and last-sync timestamp. If Notion and GitHub differ, GitHub wins and the Notion page is stale.

---

## 11. Apps Script and Gemini API roles

### Apps Script

Apps Script is suitable for:

- receiving an authenticated or controlled sync request;
- validating a structured payload;
- writing rows and cells in Google Sheets;
- preventing simultaneous write collisions;
- storing sync receipts and errors;
- rendering an HTML dashboard component; and
- calling other HTTPS services when necessary.

### Gemini API

Gemini API is optional in the full-ZASS pilot. Do not ask Gemini to reinterpret a commit that already contains structured ZASS data unless a specific transformation genuinely requires model reasoning.

Useful later:

- turning raw Google Form submissions into `PENDING REVIEW` candidates;
- producing a human-readable summary from structured data;
- classifying unstructured evidence; or
- suggesting questions without modifying authority.

Do not let a second AI silently rewrite the meaning of an owner-approved Git commit.

---

## 12. Security and integrity controls

Minimum controls:

1. Keep repository and Google credentials out of Markdown, prompts, logs, screenshots, and commit messages.
2. Store secrets in GitHub Secrets, Apps Script Properties, or an appropriate secret manager.
3. Grant the minimum required permissions.
4. Require an explicit owner confirmation before an authoritative write.
5. Make downstream delivery idempotent using `commit_sha` as a unique key.
6. Record the source commit in every mirror.
7. Validate field names, types, lengths, and allowed status transitions.
8. Never evaluate spreadsheet formulas supplied by AI as ordinary user text.
9. Use a write lock while updating shared Sheets.
10. Keep `_SYNC_LOG` append-only.
11. Do not expose delete operations in the first pilot.
12. Rotate credentials immediately if exposed.
13. Treat mirror failure and authoritative commit failure as different states.

Recommended mirror states:

```text
CURRENT
PENDING
STALE
FAILED
DISABLED
```

---

## 13. Failure behavior

| Failure | Required behavior |
|---|---|
| AI cannot access current ZASS | Stop; request the current authoritative file or repository access |
| Proposed change conflicts with LOCKED decision | Show contradiction; do not write |
| Git commit succeeds but mirror fails | GitHub remains valid; mark mirror `FAILED` or `STALE` and retry safely |
| Duplicate webhook/action delivery | Ignore after matching the same commit SHA/idempotency key |
| Sheet schema mismatch | Stop projection; retain raw sync event and report error |
| Google Sites unavailable | No authority impact; Sheets and GitHub remain intact |
| Notion unavailable | No authority impact; GitHub remains intact |
| Authentication fails | Write nothing and report factual failure |
| Partial multi-file update before commit | Abort the commit; do not present success |

---

## 14. Locked implementation order

### Phase 0 — Document and fixture

- Choose one real ZASS project as the test fixture.
- Confirm that the project contains the current `ZASS.md` and an adopted `ACTION_PLAN.md`.
- Confirm the ZERO → ARCHITECTURE snapshot contract and version fields.
- Create a non-sensitive test repository or branch if required.

### Phase 1 — Full ZASS to ACTION PLAN to Notion

```text
GitHub push to main
→ GitHub Actions reads ACTION_PLAN.md
→ complete Markdown file is mirrored
→ Notion read-only page is updated
→ sync receipt recorded
```

GitHub remains authoritative. Phase 1 does not build Google Sheets, Google Sites, a compact dashboard, two-way sync, or Gemini processing.

### Phase 2 — Test the mirror contract

- Test template-version handling.
- Test the ZERO → ARCHITECTURE progress snapshot.
- Test success, stale, failure, retry, and unavailable-Notion behavior.
- Confirm the complete Notion page matches the source `ACTION_PLAN.md`.
- Confirm GitHub remains sufficient when Notion is unavailable or deleted.

### Phase 3 — Stabilize confirmation and receipts

- Add a write-capable Action/tool.
- Implement SYNC PREVIEW → CONFIRM SYNC.
- Require a real commit SHA before reporting success.
- Report authoritative commit success separately from Notion mirror success.
- Test conflict, stale version, duplicate request, authentication failure, and partial failure.

### Phase 4 — Reuse the proven pattern for ZASSELECTION

- Reuse confirmation gates, factual receipts, idempotency, failure states, and version checks.
- Do not copy the ZASS authority boundary: ZASSELECTION has its own candidate authority model.
- Keep ZASSELECTION method behavior separate from storage architecture.

### Phase 5 — Confirm ZASSELECTION Google architecture

- Decide whether Google Sheets Event Log becomes ZASSELECTION authority.
- Confirm Google Sites as read-only Decision Card presentation if appropriate.
- Confirm the write-capable integration, authentication, privacy model, and revision rules.
- Build only after the ZASSELECTION architecture candidate passes review.

---

## 15. Pilot acceptance criteria

The pilot passes only if:

- [ ] one owner-confirmed operation creates one atomic Git commit;
- [ ] the AI returns the real commit SHA;
- [ ] LOCKED decisions are not changed silently;
- [ ] Notion mirrors the complete `ACTION_PLAN.md`, not an independently edited summary;
- [ ] the mirror exposes or can be traced to the same source commit;
- [ ] repeated delivery does not duplicate records;
- [ ] a failed mirror does not damage GitHub state;
- [ ] a stale mirror is visibly marked;
- [ ] no secret appears in repository files or workflow logs;
- [ ] the complete Notion mirror is readable on a phone;
- [ ] GitHub alone remains sufficient to reconstruct project state;
- [ ] rollback to an earlier Git commit can rebuild the mirror;
- [ ] the AI never claims sync success when its write tool is unavailable.

---

## 16. What not to build in the first pilot

- Two-way Notion ↔ GitHub synchronization.
- A compact Notion dashboard before the complete ACTION PLAN mirror is stable.
- Google Sheets or Google Sites as part of the first ZASS pilot.
- Manual editing of authoritative decisions in Google Sheets.
- Automatic architecture confirmation.
- AI-generated percentages without fixed criteria.
- Multiple independent writers updating the same state.
- Delete or destructive endpoints.
- Gemini re-analysis of every Git commit.
- A public multi-user product before the personal workflow is proven.

---

## 17. Relationship to future ZASSELECTION

The same commit-like experience can later support ZASSELECTION, but its authority can be different:

```text
ZASSELECTION
Google Sheets Event Log = authority
Google Sites            = display
AI chat                 = discussion and proposed update
```

For ZASS full, the authority remains:

```text
ZASS.md / ACTION_PLAN.md in GitHub = authority
Google Sheets / Sites / Notion     = mirrors
```

Do not merge these authority rules accidentally. Reuse the sync protocol, receipts, version checks, and dashboard ideas—not the wrong source of truth.

---

## 18. Locked first implementation decision

Start with the complete ACTION PLAN mirror:

```text
ZASS.md = decision and architecture authority
        ↓
ZERO → ARCHITECTURE score
        ↓
ACTION_PLAN.md = complete execution state and score snapshot
        ↓
GitHub authoritative commit
→ GitHub Actions
→ Notion complete read-only mirror
```

This proves version handling, progress snapshots, failure behavior, mirror accuracy, and rebuild behavior before adding a compact dashboard or reusing the pattern elsewhere.

The locked implementation sequence is:

1. Build the full-ZASS → ACTION PLAN → Notion pilot.
2. Test version handling, progress snapshot, failure behavior, and mirror accuracy.
3. Stabilize owner confirmation and factual sync receipts.
4. Reuse the proven pattern for ZASSELECTION.
5. Confirm the Google Sheets / Google Sites architecture for ZASSELECTION only afterward.

This order prevents an attractive dashboard or second storage system from becoming a conflicting authority before the basic synchronization contract is proven.

---

## 19. Public Method Gateway — locked transport direction

Cross-AI field tests on 2026-10-02 showed that public method URLs hosted through GitHub raw, GitHub browser pages, jsDelivr, and Jina Reader are not reliably readable by every AI receiver. This is a transport/readability problem, not a reason to expand the ZASS method semantics.

The locked responsibility boundary is:

```text
GitHub
= authoritative source of truth for ZASS method files
        ↓ sync
AI-SYNC
= public read/transport gateway and method mirror
        ↓ portable method URL carried by
ZASSPILL / ZASSELECTION / ZASSIMPLE
        ↓
receiving AI
```

### Locked rules

- GitHub remains the authoritative source of truth for method content and history.
- AI-SYNC is the portable read/transport layer, not a second method authority.
- The public Method Gateway must serve the Markdown content itself. It must not merely redirect or wrap a GitHub URL.
- Public method reads must not require login.
- Sync configuration, publishing, administrative actions, and writes remain protected.
- A gateway snapshot must retain enough metadata to identify its GitHub source, including method, language, version, source repository/path, source commit, and sync time.
- If AI-SYNC content conflicts with the referenced GitHub source, GitHub wins.
- ZASSPILL, ZASSELECTION, and ZASSIMPLE remain method-layer components. They may carry the portable AI-SYNC URL, but they do not own transport implementation.
- Direct GitHub URLs may remain visible as authority/reference links, but they are not the preferred cross-AI transport once the Method Gateway is available.
- Until the Method Gateway is implemented and proven, existing GitHub-based links remain a temporary bootstrap path; no nonexistent AI-SYNC URL may be presented as operational.

### Target public routes

Exact production URLs are not locked yet. The intended shape is equivalent to:

```text
/method/zasspill/my
/method/zassimple/my
/method/zasselection/my
```

The endpoint response should be clean Markdown/plain text that an AI receiver can read directly.

### v0.1 proof scope

Start with Bahasa Melayu and only these three methods:

- `ZASSPILL_MY.md`
- `ZASSIMPLE_MY.md`
- `ZASSELECTION_MY.md`

The proof passes when:

1. GitHub remains the method source of truth.
2. AI-SYNC stores or can serve an identifiable snapshot tied to a real GitHub commit/version.
3. The public endpoint serves the Markdown itself without redirecting to GitHub.
4. Gemini and Copilot can read the public endpoint.
5. A GitHub update can synchronize to the gateway without manual copy-paste.
6. ZASSPILL can carry the gateway URL during DECIDE/DESIGN handoff without changing ZASSPILL method semantics.

This Method Gateway is a transport capability of AI-SYNC and is being implemented in the Multi AI-SYNC / ASC workstream.

### Current implementation checkpoint

As of 2026-10-02, the owner has promoted the Method Gateway proof into implementation.

Locked implementation topology:

```text
Official ZASS GitHub
        ↓ resolve exact main HEAD
protected AI-SYNC sync app
        ↓
ASC DB / METHODS snapshot registry
        ↓
separate public read-only app
        ↓
plain Markdown / text
        ↓
Gemini / Copilot / other receiver AI
```

Current AI-SYNC execution sequence:

```text
T-013A
METHODS registry + protected GitHub sync
        ↓
T-013B
public Method Gateway + cross-AI proof
        ↓
resume ASC front-door / routing / handoff work
```

Implementation rules now locked in AI-SYNC:

- the existing 8-field ASC Write Contract remains unchanged;
- the read plane uses a separate Method Snapshot Record;
- v0.1 uses one lightweight `METHODS` registry for the three Malay methods;
- protected sync and public read use separate Apps Script surfaces;
- one sync run pins all three method snapshots to one exact GitHub commit;
- no manual Markdown copy-paste is accepted as the normal sync flow;
- the proven v0.1 public receiver surface is the AI-SYNC GitHub Pages Method Gateway; any future production-domain change remains a transport implementation concern.

The v0.1 public Method Gateway is **operational for the proven read path**: T-013A protected GitHub→METHODS sync and T-013B public readability proof have passed, including direct Gemini/Copilot reads. GitHub remains the authoritative method Source of Truth, and receivers must use the exact gateway URL; if that URL cannot be fetched, they must report the failure rather than substitute another source as method authority.

---

## 20. References

- Google Apps Script web apps: <https://developers.google.com/apps-script/guides/web>
- Google Apps Script `doGet` / `doPost`: <https://developers.google.com/apps-script/guides/triggers>
- Google Apps Script Content Service: <https://developers.google.com/apps-script/guides/content>
- Google Apps Script Spreadsheet Service: <https://developers.google.com/apps-script/reference/spreadsheet>
- Google Apps Script Lock Service: <https://developers.google.com/apps-script/reference/lock/lock>
- Google Apps Script quotas: <https://developers.google.com/apps-script/guides/services/quotas>
- Google Sites embeds: <https://support.google.com/sites/answer/90569>
- Gemini API function calling: <https://ai.google.dev/gemini-api/docs/function-calling>
- ChatGPT GPT Actions overview: <https://help.openai.com/en/articles/8554397-creating-and-editing-gpts>
- ChatGPT Google app data controls: <https://help.openai.com/en/articles/10408842-google-app-for-chatgpt-data-controls-faq>

---

## 21. Current decision status

The full-ZASS-first direction, implementation order, and complete `ACTION_PLAN.md` Notion mirror for Phase A are owner-locked. GitHub remains authoritative and Notion remains read-only. Google Sheets / Google Sites for ZASSELECTION remain an architecture candidate to confirm only after the ZASS pilot is stable. The AI-SYNC Public Method Gateway direction and smallest implementation topology are owner-locked; T-013A and T-013B have passed for the v0.1 public read path. This document does not claim that the broader dashboard, Action, automation, private continuity transport, or any future production-domain migration is complete.
