# TD-DIST-06 — No-Upload Contract Distribution (Review Proposal)

**Status:** PROPOSED / REVIEW ONLY; not a TDesk or ZASSPILL normative amendment, not LOCKED, not released.  
**Date:** 2026-10-16  
**Location:** Draft PR #64 / `review/tdesk-zasspill-compat-v01`  
**Scope:** Access to version-pinned method contracts without manual upload, file attachment or repeatedly pasting contract bodies.

## 1. Goal and boundary

- Desired experience: user requests TDesk, an authorized loading tool obtains the applicable versioned contract, verifies what it read, then TDesk may be activated **only** under the existing activation rule. A mention, link or automated fetch alone is not activation.
- **No manual file upload or contract copy/paste as a required recovery path.** Tool setup/connection may be needed once. When no readable authorized tool exists, report the limitation rather than quietly ask for an upload.
- GitHub remains canonical for method source and release authority. WordPress, Cloudflare and other public URLs are optional **transport mirrors**, never decision or persistence authorities.
- This proposal changes neither `TDesk/TDESK.md`, frozen ZASSPILL semantics/Sections 14 and 19, specialist gates, Portable Packet v2 nor any current runtime. It does not restart AISYNC/CrossAI.

## 2. Field evidence (scope-limited)

| Path | Reported external results | Interpretation |
| --- | --- | --- |
| GitHub connector to pinned TDesk | 2/4 reports ACCESSIBLE with correct SHA/content evidence; 2/4 say connector absent | Feasible where the connector is truly available; not universal. External tool-use claims were not independently captured. |
| New WordPress public TDesk page | 1/4 reports content-access PASS; 3/4 fail | Useful optional mirror, **not** a universal loader. |
| GitHub Raw/Pages and Cloudflare public text | Cross-provider fetch failures despite independent HTTP/source verification | HTTP 200 from one host does not imply a target AI can fetch or fully read. |

The WordPress mirror at `https://dzuddiyn.wordpress.com/tdesk-thinking-contract-v01-review-candidate/` is a *pilot snapshot*, not a release endpoint. Do not convert a claimed full read or provider narrative into independently verified behavioral compliance.

## 3. Source-selection and version contract

For this **review pilot only**:

- Repository: `dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint`
- GitHub path: `TDesk/TDESK.md`
- Exact commit: `4b8c3493354c55cbdeb80addd91517589b2c302f`
- Expected Git blob SHA: `5f64c62d9d1bedb3677a5ede7fffdef19356a0bd`
- Expected candidate: `TDesk v0.1 (Review Candidate)`, final section `Release gate`

Production configuration must point to an explicitly owner-approved release/tag/commit, **not automatically switch to `main`, the newest branch or an unapproved draft**. Source provenance is reported with repository/path/ref/commit, source version, SHA when available and verification limitations. A mirror must identify the **same** approved source revision; otherwise treat it as potentially stale.

## 4. Minimal loading procedure (no implementation implied)

1. Check **actual tool availability in this conversation/provider**, not claims made by another AI or another session.
2. Prefer an authorized **GitHub connector/MCP** capable of fetching file contents at an explicit commit. Use read-only operations for loading.
3. Require the complete contract body, not a search snippet, title, excerpt or cached answer. Verify repository, path, pinned revision and Git blob SHA if the connector provides it (or independently calculate it from full bytes where supported). Check the expected document boundary/sections as an additional guard; this is not a substitute for SHA verification.
4. If connector loading is unavailable, an explicitly allowed URL/mirror reader **may be tried**. Confirm full text and pinned provenance; when trusted SHA verification is impossible, explicitly report **content read, integrity not verified**. Do not present it as verified canonical loading.
5. If neither tool can load complete, sufficiently trustworthy content, state **loading blocked** and continue only as ordinary assistance if helpful. Do not fabricate loaded-contract status, ask for manual upload as a default, invent a commit, or silently apply TDesk from memory.
6. After successful loading, obey the existing **explicit/authorized activation boundary**. If formal DECIDE/DESIGN is subsequently selected, separately load the applicable ZASSPILL/specialist source and preserve formal Sections 14/19, owner gates and handoff obligations. TDesk alone does not prove ZASSPILL or a specialist was loaded.

**Reporting vocabulary** (descriptive diagnostics only; NOT new ZASSPILL protocol states):
`READ_VERIFIED`, `READ_UNVERIFIED`, `TOOL_UNAVAILABLE`, `FETCH_FAILED`, `INCOMPLETE`, `REVISION_MISMATCH`, `NOT_ACTIVATED`.
Never claim successful persistence or release from any read result. GitHub/DL writes remain separate, authorized actions requiring actual write evidence and read-back.

## 5. Minimal adapter options, strictly deferred

- **ChatGPT TDesk plugin/skill:** future UX entry point; must prove connector access and exact source loading in the installed environment. Merely installing a plugin does not grant universal GitHub access.
- **GitHub MCP adapter for other providers:** only where supported, connected and authorized. No new mandatory gateway server.
- **WordPress public mirror:** optional coverage for AI browser tools, not guaranteed; source refresh only after release approval and verified publication.
- **No third hosting rebuild or automatic CI publisher** is part of TD-DIST-06. Future publishing must be release-gated with source-to-mirror read-back.

Privacy: public mirrors contain only deliberately public method contracts, never personal context, private memory, credentials, canonical thread state or unapproved artifacts.

## 6. Acceptance gates and honest failure

| ID | Required proof | Current status |
| --- | --- | --- |
| DL-01 | One target provider actually reads full pinned file by GitHub connector and reports exact SHA | **REPORTED PASS**, external tool trace not independently reviewed |
| DL-02 | A provider lacking a connector says it is unavailable without pretending to load TDesk | **REPORTED PASS** |
| DL-03 | Wrong commit, partial body, or stale mirror is rejected/labeled unverified | **NOT TESTED** |
| DL-04 | Link/mention alone does not activate TDesk; authorized activation after verified load behaves correctly | **NOT TESTED** |
| DL-05 | Formal ZASSPILL/specialist handoff preserves existing authority and required source loads | **NOT TESTED in this pilot** |
| DL-06 | End user requires no manual upload, paste or file management in supported provider flow | **NOT YET END-TO-END PROVEN** |
| DL-07 | Approved release publication and mirror provenance can be read back without silent version drift | **DEFERRED** |

**Disposition:** APPROACH FEASIBLE FOR CONNECTOR-CAPABLE SESSIONS; overall no-upload cross-provider distribution **NOT YET ACCEPTED**. Keep PR #64 Draft. No merge, LOCK, release, production claim or autonomous deployment.

**Historical note:** `TDesk/tests/INDEPENDENT_PROVIDER_PILOT_V01.md` still documents its original paste/upload fallback as historical test instructions. Those historical instructions are **not** the accepted UX for this new no-upload distribution proposal; do not rewrite past evidence.

**Related future-work:** `TD-PLUGIN-001` (TDesk plugin after method release) remains a proposal, not an implemented dependency.
