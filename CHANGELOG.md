# Changelog

All notable changes to ZASS are recorded here.

## [v0.3.3] — 2026-09-30

- Removed the dedicated Full-ZASS `PARK` command and footer action; the Full-ZASS command surface is now `ZASS!! / PROCEED / PIVOT / COMMIT`. The `PARKED` state remains available for deferred execution/history.
- Locked the semantic separation `AI suggestion ≠ Owner decision ≠ Git change` without requiring a new mandatory response layout.
- Added qualitative **Evidence Confidence** (`UNVALIDATED / LOW / MEDIUM / HIGH`) as a separate axis from ZERO → ARCHITECTURE readiness; the readiness formula is unchanged and 100% readiness does not imply empirical validation.
- Recorded the Small Farm Planner teaching fixture as a PASS test for the readiness-vs-confidence distinction: it has confirmed architecture readiness while empirical validation experiments remain planned.
- Accepted future implementation candidates for `zass check / status / diff` and an optional machine-readable `.zass/` layer; rejected the proposed mandatory “one primary action per response” rule.
- Accepted real-world case studies as an evidence priority for future method evolution.
- Locked `L-DOC-001`: the root README will become a lightweight landing/onboarding page, while the previous long-form README material and detailed infographics move to GitHub Wiki/reference material. The Wiki migration itself is not claimed complete in this commit.

## [Onboarding baseline] — 2026-09-30

- LOCKED problem-first onboarding with ZASSIMPLE as the default first-use method and progressive disclosure for Full ZASS, ZASSELECTION, ACTION PLAN, and advanced governance.
- LOCKED GitHub as the Source of Truth with one trusted write-capable client for persistence while any AI may be used for brainstorming, challenge, or review.
- LOCKED four official entry paths: CLI, manual ZASSIMPLE file, public-project link handoff, and zero-setup ad-hoc brainstorming returned to a trusted writer.
- LOCKED public-project cross-AI handoff through a non-authoritative `ZASS_HANDOFF.md` that must be compared with the latest repository state before approved changes are committed.
- LOCKED the CLI as an official onboarding mechanism with target command `npm create zass@latest my-project` and a minimal `ZASSIMPLE.md + README.md + .gitignore` default.
- Promoted CR-008 “One Writer, Many Brainstormers” from TEST to ACCEPTED.
- Method version remains v0.3.2 in this commit; this baseline records onboarding/productization decisions and does not alter core ZASS or ZASSIMPLE decision semantics. README and CLI implementation remain separate follow-up work.

## [v0.3.2] — 2026-09-29

- Folded full-ZASS owner approval for proposed LOCK transitions into `PROCEED`: all proposals in the latest ZASS mapping are accepted unless the owner explicitly rejects or changes them.
- Removed the separate LOCK command from the full-ZASS footer; the footer is now `[🧠 ZASS!!] -- [▶️ PROCEED] -- [🔄 PIVOT] -- [🅿️ PARK] -- [📦 COMMIT]`.
- Defined full-ZASS `COMMIT` as one atomic versioned commit followed by a push to the GitHub source of truth; `PROCEED` never commits or pushes.
- Kept ZASSIMPLE, ZASSELECTION, ACTION PLAN, architecture readiness, and the existing architecture confirmation gate unchanged.

## [ZASS AI Sync report v0.2] — 2026-09-28

- Locked the implementation order: full ZASS → ACTION PLAN → complete read-only Notion mirror, followed by version/progress/failure testing and stabilization of confirmation and factual sync receipts.
- Deferred compact dashboards, Google Sheets, and Google Sites until the complete ACTION PLAN mirror is stable.
- Reserved reuse of the proven pattern for ZASSELECTION before confirming its separate Google Sheets / Google Sites architecture candidate.
- Updated the pilot phases, acceptance criteria, first-pilot exclusions, current decision status, and README summary without claiming the integration is already built.

## [ZASSELECTION v0.1.0] — 2026-09-28

- Added `ZASSELECTION.md` and `ZASSELECTION_EN.md` as a separate selection method without replacing ZASSIMPLE or producing architecture.
- Locked Quick and Deep Selection, MUST-HAVE filtering before optional scoring, evidence/feeling separation, cheapest tie-breakers, clear AI recommendations, owner-only `SELECT`, and rationale/consequence/revisit records.
- Added the selection footer and copy-ready post-upload prompts in Malay and English.
- Added `ZASSELECTION_DATA_SYNC_ARCHITECTURE.md` as a separate, unconfirmed supporting design for a future Google Sheets event log, Apps Script direct sync, Google Sites Decision Cards, security controls, and acceptance criteria.
- Updated README method navigation while keeping ZASS and ZASSELECTION version lines independent.

## [v0.3.1] — 2026-09-28

- Added the ZERO → ARCHITECTURE snapshot block to the Malay and English ACTION PLAN templates.
- Kept ZASS authoritative for score calculation while ACTION PLAN stores only one progress/status snapshot, source version, assessment date, next gated threshold, and critical blockers.
- Required ZASS and its ACTION PLAN snapshot to change in the same atomic commit; GitHub Actions supplies the real event SHA to read-only mirrors rather than attempting to embed a commit's own SHA in that commit.
- Clarified that `DRAFT ARCH UNDER REVIEW` requires an actual draft under review, not merely a numeric score of 85%.

## [v0.3.0] — 2026-09-28

- Replaced the full-ZASS footer with `ZASS!! / PROCEED / PIVOT / PARK / LOCK / COMMIT GIT` and defined each command's scope.
- Added a weighted, evidence-explained ZERO → ARCHITECTURE readiness score, visible progress bar, status bands, and a 70% threshold for suggesting—but not automatically creating—an architecture draft.
- Reserved 100% for architecture confirmed through the existing two-step gate and exact `YA, CONFIRM ARCHITECTURE` response.
- Added factual template-version checks on intentional `ZASS` / `ZASS!!`, including current, mismatch, and unavailable states without invented version numbers.
- Updated the Malay and English full templates and README; ZASSIMPLE remains unchanged.

## [v0.2.1] — 2026-09-28

- Added `ZASS_AI_SYNC_GOOGLE_DASHBOARD.md`, a full-ZASS-first pilot design for commit-like AI synchronization, Google Sheets projection, Google Sites presentation, and optional Notion mirroring.
- Preserved GitHub as the authoritative ZASS/ACTION PLAN record and defined mirrors, confirmation gates, real sync receipts, structured commit events, security controls, failure behavior, implementation phases, and acceptance criteria.
- Added the report to README and synchronized visible documentation versions without changing the locked ZASS baseline authority rules.

## [v0.2.0] — 2026-09-28

- Added optional ACTION_PLAN companion templates in Malay and English for persistent execution/progress state in active ZASS projects.
- Defined the authority boundary: ZASS owns discovery, decisions, LOCKED state, experiment requirements, readiness, and architecture; ACTION_PLAN owns live execution, evidence, blockers, lessons, and progress.
- Added the ZASS ↔ ACTION_PLAN workflow, shared E-xxx experiment identity, ZASS FEED, action and experiment states, NEXT-DAY integration, AI behavior, project structure, and ACTION PLAN command.
- Existing projects with only ZASS.md remain valid.

## [v0.1.18] — 2026-09-27

- Replaced `ZASSS` with intentional `ZASS` / `ZASS!!` for full idea exploration; ordinary replies stay conversational with the shared footer.
- Unified full ZASS and ZASSIMPLE on `DRAFT ARCH`, proactive draft/BUILD suggestions, and a `BUILD ARCHITECTURE` confirmation gate ending with `YA, CONFIRM ARCHITECTURE`.
- Updated both language templates, README, and release versions without changing the full ZASS meaning of `AC`.

## [v0.1.17] — 2026-09-27

- Locked ZASSIMPLE's architecture-draft completion rule: drafts may use working versions, and AI must ask “Ready to confirm?” after covering purpose, main flow, main components, and relevant LOCKED decisions, while listing open critical assumptions.
- Updated Malay and English templates and README; confirmation still requires the existing two-step gate.

## [v0.1.16] — 2026-09-27

- Locked ZASSIMPLE's conversational flow: ordinary replies omit the update block; intentional `ZASS` or `ZASS!!` shows relevant records, a contextual AI suggestion not yet AC, and actual file status.
- Required `[🧠 ZASS!!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ CONFIRM ARCHITECTURE]` on every reply and shortened the explicit GitHub command to `COMMIT` in both language templates and README.

## [v0.1.15] — 2026-09-27

- Removed the remaining legacy brand mention from the active changelog so all active documentation now uses ZASSIMPLE.

## [v0.1.14] — 2026-09-27

- Renamed the lightweight conversational mode to ZASSIMPLE across its files, prompts, response-update label, footer, README, and change history.
- Replaced the legacy template filename pair with `ZASSIMPLE.md` and `ZASSIMPLE_EN.md`.

## [v0.1.13] — 2026-09-27

- Added copy-ready post-upload prompts: Bahasa Melayu in ZASSIMPLE and README, with a matching English prompt in ZASSIMPLE_EN.
- Prompts preserve the conversational-first response order and explicit LOCK, COMMIT GITHUB, and architecture-confirmation safeguards.

## [v0.1.12] — 2026-09-27

- Updated ZASSIMPLE in Malay and English: AI responds conversationally before its compact ZASSIMPLE UPDATE, then shows file status and the visual action footer.
- Updated the footer to use icons and visible -- separators for LOCK DECISION, COMMIT GITHUB, and CONFIRM ARCHITECTURE.

## [v0.1.11] — 2026-09-27

- Added `ZASSIMPLE_EN.md`, an English companion for the ZASSIMPLE conversational template.
- Added the English template link to the README.

## [v0.1.10] — 2026-09-27

- Added `ZASSIMPLE.md`, the ZASSIMPLE conversational template with agreement-to-AC capture, explicit LOCK/COMMIT safeguards, and an architecture confirmation gate.
- Added links explaining when to choose the full ZASS template or the lighter ZASSIMPLE mode.

## [v0.1.9] — 2026-09-27

- Replaced the subtle blank-line spacing between PARK, PROCEED, and PIVOT with visible Markdown separators for reliable visual grouping.

## [v0.1.8] — 2026-09-27

- Added blank-line spacing between PARK, PROCEED, and PIVOT in the default closing flow for easier scanning across Markdown readers.

## [v0.1.7] — 2026-09-27

- Made PARK confirmations dynamic: actual updates name the saved idea and its ZASS records, recommend GitHub or Notion for durable history and future project work, and distinguish proposals from saved records.

## [v0.1.6] — 2026-09-27

- Made the default NEXT STEP prompts more scannable with PARK 🅿️, PROCEED ▶️, and PIVOT 🔄 icons.
- Expanded PROCEED into context-selected actions: experiment, review, mini-prototype, candidate decision, owner LOCK, or GitHub commit.
- Clarified that LOCK requires an explicit owner decision and COMMIT requires the explicit instruction “LOCK dan COMMIT”; added a visible pivot-candidate prompt.

## [v0.1.5] — 2026-09-27

- Added lightweight evidence fields for experiments, early warning signals for risks, and decision drivers/consequences/revisit triggers with visual icons.
- Added a one-sentence problem framing and optional Cynefin, DACI, Design Sprint, and Wardley Mapping guidance without adding mandatory states.

## [v0.1.4] — 2026-09-27

- Added a reusable prompt that requires atomic commits, visible version bumps, and factual changelog entries for owner-locked changes.

## [v0.1.3] — 2026-09-27

- Established release-versioning: one logical locked change is committed once across all affected files.
- Added the default closing flow: free-form AI summary and suggestions, one next-day action, and owner choice of PARK, PROCEED, or PIVOT.
- Added readable separators and icons for cost, time, and stop rule.
- Added idea-specific PROCEED recommendations instead of a fixed review preset.

## [v0.1.2]

- Simplified the user guide while keeping the v0.1 baseline decisions locked.
