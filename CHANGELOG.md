# Changelog

All notable changes to ZASS are recorded here.

## [ZASSIMPLE dedicated folder migration] — 2026-10-01

- Moved the official ZASSIMPLE method into a dedicated `ZASSIMPLE/` folder.
- `ZASSIMPLE/ZASSIMPLE_EN.md` is the default landing and `ZASSIMPLE/ZASSIMPLE_MY.md` is the Bahasa Melayu companion.
- Added first-class `ACTION_PLAN.md`, `ARCHITECTURE.md`, and `TASKS.md` artifacts plus a local `README.md`.
- Moved ZASSIMPLE-specific design documents into `ZASSIMPLE/docs/` and updated repository/Wiki links.
- Removed root-level ZASSIMPLE method files as competing authorities.

## [ZASSIMPLE v0.2 UX working direction] — 2026-10-01

- LOCKED DUMP-first UX, The IDEA Trick, the 6D lifecycle, and the principle: lightweight on the surface while lineage stays strong through execution.
- Added compact Stage Pulse plus criteria-based Architecture Progress and Action Detail Progress.
- Kept ACTION PLAN internal by default, with bidirectional feedback between planning and architecture.
- After confirmed architecture, ZASSIMPLE re-plans, slices work into tasks, and presents one tutorial-like task at a time.
- Kept the footer fixed and simple for cross-AI consistency.
- Added `ZASSIMPLE/docs/ZASSIMPLE_V02_WORKING_DIRECTION.md` and updated both English and Malay templates to v0.2.0.

## [ZASS SYSTEM DECIDE or BUILD entry model] — 2026-10-01

- LOCKED **DECIDE or BUILD?** as the ZASS SYSTEM entry mental model.
- LOCKED intent-based routing: **DECIDE → ZASSELECTION** and **BUILD → ZASSIMPLE**.
- Kept Full ZASS out of the primary landing choice; it remains an escalation path from BUILD/ZASSIMPLE when observed project complexity justifies stronger governance.
- Kept ZASSIMPLE as the default method inside the BUILD path and preserved the planned Temaya field test before defining the escalation notification contract.
- This is a product-routing working direction only; no landing page implementation or method-version bump was performed.

## [ZASS SYSTEM default landing direction] — 2026-10-01

- LOCKED ZASSIMPLE as the default landing method for the ZASS SYSTEM.
- LOCKED Full ZASS as an escalation path rather than the default entry burden; migration remains a human choice.
- LOCKED Temaya as the planned real-project field test after ZASSIMPLE stabilizes, with escalation signals to be derived from observed project complexity rather than invented thresholds.
- Deferred the final notification/escalation contract until field evidence exists.
- Kept CR-010 v0.3 as the next validator implementation task when development resumes; implementation remains NOT STARTED.
- No Full ZASS or ZASSIMPLE semantics/version changed.

## [ZASSIMPLE default landing language lock] — 2026-10-01

- LOCKED `ZASSIMPLE_EN.md` as the default ZASSIMPLE landing/template.
- Renamed the Bahasa Melayu template from `ZASSIMPLE.md` to `ZASSIMPLE_MY.md`.
- Updated README, onboarding guidance, and Wiki artifact links so English is the default while Bahasa Melayu remains explicitly available.
- This naming change does not alter ZASSIMPLE method semantics.

## [CR-010 v0.3 plan locked] — 2026-10-01

- LOCKED `docs/CR010_V03_ACTION_PLAN_CONSISTENCY_SPEC.md` as the implementation plan for ACTION_PLAN consistency validation.
- v0.3 scope covers ACTION_PLAN discovery, readiness snapshot consistency, source/version drift, explicit referenced ZASS IDs, conservative blocker consistency, and optional atomic-sync warnings.
- `ACTION_PLAN.md` remains optional and `ZASS.md` remains authoritative; v0.3 does not create a second decision authority.
- Kept `zass status`, `zass diff`, automatic repair, GitHub Actions, npm publication, remote URL checks, mandatory `.zass/schema.yml`, and AI semantic comparison out of scope.
- Implementation remains **NOT STARTED** pending the v0.2 field gate. Full ZASS remains **v0.3.6**.

## [CR-010 v0.2] — 2026-10-01

- Implemented Git-aware LOCKED-decision drift validation in local `zass check` v0.2.0.
- Added read-only Git baseline discovery and historical `ZASS.md` loading without checkout/reset/stash/clean operations.
- Added Z100 warnings when Git history or a committed ZASS baseline is unavailable, while preserving v0.1 current-file checks.
- Added Z101 errors for substantive modification, removal, or unauthorized unlocking of decisions that were LOCKED at Git `HEAD`.
- Added deterministic `Supersedes: D-xxx` handling when the old decision record is preserved, plus formatting normalization to avoid cosmetic drift false positives.
- Added temporary-Git automated tests; the full suite passed **17/17** tests, `npm link` worked, and linked checks returned **0 errors / 0 warnings** at the repository root and Small Farm Planner example.
- Kept `zass status`, `zass diff`, ACTION_PLAN snapshot consistency, GitHub Actions, npm publication, remote URL checking, mandatory `.zass/schema.yml`, and AI semantic comparison out of scope.
- Full ZASS remains **v0.3.6**; CR-010 v0.3 is not started.

## [ZASSELECTION visual PICKS lock] — 2026-10-01

- LOCKED the visual PICKS labels as 🎯 P, 🚧 I, 📊 C, ⭐ K, and 💾 S.
- LOCKED review-end labels as 🤖 AI Recommendation and 👉 Your selection?.
- Applied the presentation convention to English and Malay ZASSELECTION methods, README, and Wiki without changing selection logic, scoring, authority, or v0.2.0 semantics.

## [GitHub Wiki published] — 2026-10-01

- Published the version-controlled `wiki/` Markdown source to the real GitHub Wiki repository.
- The main repository `wiki/` directory remains the reviewable/version-controlled source for future Wiki updates.
- The GitHub Wiki is a documentation/reference layer; authoritative method semantics remain in the main repository.
- Published 14 Wiki pages, including the current `Convergence-Loop.md` page; no infographic binary assets were added.
- Full ZASS remains **v0.3.6**; Wiki publication does not change method semantics or version.

## [ZASSELECTION language-file default] — 2026-10-01

- LOCKED `ZASSELECTION/ZASSELECTION_EN.md` as the default ZASSELECTION method file.
- Renamed the Malay method to `ZASSELECTION/ZASSELECTION_MY.md`.
- Updated English onboarding/prompts to reference `ZASSELECTION_EN.md` and Malay onboarding/prompts to reference `ZASSELECTION_MY.md`.
- Aligned the English default method with the locked ZASSELECTION v0.2.0 REVIEW / SAVE / HISTORY workflow.
- Updated README, Wiki, supporting architecture, and method-authority references without changing Full ZASS or ZASSIMPLE semantics.

## [zass check local test guide] — 2026-10-01

- Added `docs/ZASS_CHECK_LOCAL_TEST_GUIDE.md` with the recommended Windows/PowerShell validation flow for CR-010 v0.1.
- Documented automated tests, `npm link`, the Small Farm Planner known-good check, failing fixtures Z001–Z005, direct execution fallback, exit codes, and real-project false-positive review.
- Linked the guide from `cli/README.md`.
- Kept CR-010 v0.2 implementation gated on v0.1 testing against 1–2 real ZASS projects; no validator semantics changed.

## [v0.3.6] — 2026-10-01

- Locked **ZASS Principle #4 — ZASS Convergence Loop**: capture broadly, converge deliberately; form candidates before deep research, research only questions that can change the choice, cross-check evidence, then LOCK before architecture.
- Locked the canonical loop: `CAPTURE → MATCH → SYNTHESIZE → RESEARCH → CROSS-CHECK → LOCK → ARCHITECTURE`.
- Added the expanded flow through MATRIX, SHORTLIST, DEEP RESEARCH, UPDATE MATRIX, DRAFT ARCH, and BUILD ARCHITECTURE.
- Locked the rule **Research follows candidate formation, not idea capture** to reduce premature technology rabbit holes.
- Clarified that the strongest candidate may synthesize several ideas; research findings return to the matrix/candidate state before owner decisions change.
- Added the Convergence Loop prominently to the README and Wiki, including a dedicated `wiki/Convergence-Loop.md` page.
- Added no new command or mandatory ZASS state; the authority invariant remains `AI suggestion ≠ Owner decision ≠ Git change`.
- Synced the Wiki Home status table with current ZASSIMPLE v0.1.7, ZASSELECTION v0.2.0, and local `zass check` v0.1 implementation.

## [CR-010 v0.2 plan] — 2026-10-01

- Locked the CR-010 v0.2 **Git-aware LOCKED drift** implementation plan in `docs/CR010_V02_LOCKED_DRIFT_SPEC.md`.
- Kept the user command surface unchanged: v0.2 extends `zass check` rather than adding a new command.
- Planned read-only Git discovery, `HEAD:ZASS.md` comparison, deterministic LOCKED-decision extraction/normalization, Z100 warning behavior, and Z101 errors for silent LOCKED modification/removal.
- Locked explicit `Supersedes: D-xxx` as the deterministic v0.2 replacement relation; old decision history must be preserved.
- Locked temporary-Git automated fixtures instead of committed nested `.git/` fixtures.
- Kept ACTION_PLAN consistency, `zass status`, `zass diff`, GitHub Actions, npm publication, mandatory `.zass/schema.yml`, and AI semantic comparison out of v0.2.
- v0.2 implementation is **NOT STARTED** and remains gated by v0.1 field testing on 1–2 real ZASS projects. Full ZASS remains **v0.3.5**.

## [ZASSIMPLE v0.1.7] — 2026-10-01

- Required a **CURRENT SELECTION MATRIX** whenever the owner deliberately commands `ZASS` or `ZASS!!` in ZASSIMPLE.
- Locked the matrix columns as Option/Candidate, Must-have fit, Strength, Risk/Weakness, Evidence/Unknown, and Status.
- Kept the matrix lightweight: no mandatory weighted score, no invented alternatives, and one candidate may appear as one row.
- Preserved ZASSIMPLE authority semantics: the matrix and `Current direction` are summaries/suggestions; no `SELECT` command is added, and final decisions still require owner `LOCK` / `LOCK DECISION`.
- Full ZASS remains **v0.3.5**.

## [CR-010 v0.1] — 2026-09-30

- Implemented the first local Node.js `zass check` validator under `cli/`.
- Added Z000–Z005 checks for required `ZASS.md` discovery, duplicate IDs, malformed IDs, broken local references, Evidence Confidence pairing, and high-signal possible-secret warnings with redacted output.
- Added fixture-driven tests for valid, duplicate-ID, malformed-ID, missing-evidence, broken-reference, possible-secret, missing-ZASS, CLI exit-code, and repeated-reference behavior; **10/10 tests passed** before commit.
- Verified `npm link` and the linked `zass check` command against the Small Farm Planner teaching project with **0 errors / 0 warnings**.
- Kept npm publication, `zass status`, `zass diff`, Git-aware LOCKED drift, ACTION_PLAN snapshot consistency, remote URL validation, `.zass/schema.yml`, and GitHub Actions out of scope.
- Full ZASS remains **v0.3.5**; CR-010 v0.2 is not started.

## [Wiki source] — 2026-09-30

- Generated a version-controlled Wiki source under `wiki/` with Home, Quick Start, ZASSIMPLE, Full ZASS, Architecture & Evidence, ACTION PLAN, Cross-AI Handoff, ZASSELECTION, Advanced Reviews, Productization/`zass check`, Bahasa Melayu, Infographics, and `_Sidebar` pages.
- Updated the root README to link directly to the Wiki source.
- Added `docs/WIKI_PUBLISHING.md` describing how to publish the versioned source into GitHub's separate `.wiki.git` repository.
- The archived infographic page records the four existing v0.3.2 visual assets as historical references and warns that current v0.3.5 semantics override them.
- Full ZASS remains **v0.3.5**; this is documentation/productization work, not a method-semantics change.

## [CR-010 Work handoff] — 2026-09-30

- Locked a copy-ready ChatGPT Work implementation prompt in `docs/WORK_PROMPT_CR010.md`.
- The prompt constrains Work to CR-010 v0.1 only: local Node.js `zass check`, fixture-driven tests, conservative validation, no npm publishing, no GitHub Actions, and no methodology expansion.
- Added explicit pre-edit HEAD/worktree checks, test-before-commit requirements, real-project validation, compact final reporting, and a stop rule preventing automatic progression to v0.2.
- Full ZASS remains **v0.3.5**; this is an implementation handoff artifact, not a method-semantics change.

## [CR-010 implementation plan] — 2026-09-30

- Locked the step-by-step `zass check` implementation plan in `docs/CR010_ZASS_CHECK_SPEC.md`.
- Defined the first MVP as local Node.js CLI + project discovery + duplicate/malformed IDs + local-reference checks + Evidence Confidence pairing + defensive secret-pattern warnings.
- Deferred Git-aware LOCKED drift, ACTION_PLAN consistency, `zass status`, `zass diff`, npm publication, and GitHub Actions until the earlier validator phase is stable.
- Locked a fixture-driven stop rule and one shared validation engine for local CLI and future GitHub Actions.
- Full ZASS method remains **v0.3.5**; this commit records productization implementation steps rather than changing method semantics.

## [v0.3.5] — 2026-09-30

- Locked mandatory **Evidence Confidence** display rules for Full ZASS: show it whenever a real ZERO → ARCHITECTURE assessment is shown, DRAFT ARCH readiness is evaluated, BUILD ARCHITECTURE runs, or confirmed architecture still has open validation/experiments.
- Updated the Full-ZASS footer example to pair Architecture Readiness with Evidence Confidence when reporting current project state.
- Clarified that static documentation/template examples are exempt from the mandatory pairing rule and that evidence must never be invented.
- Updated the Small Farm Planner teaching fixture references to Full ZASS v0.3.5; its `Evidence Confidence: UNVALIDATED` remains intentional because its empirical validation loops are still only planned.

## [Repository license] — 2026-09-30

- Owner explicitly selected the **MIT License** for the ZASS repository.
- Added the root `LICENSE` file and updated README/productization documentation accordingly.
- Full ZASS method version remains **v0.3.4** because this is a repository licensing/productization change, not a method-semantics change.

## [v0.3.4] — 2026-09-30

- Tightened Full-ZASS `PROCEED`: it now approves exactly the explicitly listed `PROPOSED FOR PROCEED` set from the latest mapping; unlisted suggestions are excluded, and a changed or ambiguous set must be shown again before approval.
- Locked a temporary methodology feature freeze with productization priority: **Consistency → Validator → Automation → Real-world evidence**.
- Locked one shared validation-engine direction: future local CLI validation and GitHub Actions must both use `zass check` rather than maintain duplicate rule implementations.
- Removed the placeholder Hello-World GitHub Actions workflow; a real workflow will return when it can execute the shared validator.
- Clarified CLI presentation as **Specification locked — implementation pending**; the target `npm create zass@latest my-project` command is not presented as an already released package.
- Updated the Small Farm Planner teaching fixture to Full ZASS v0.3.4 semantics and made its lack of empirical validation explicit with `Evidence Confidence: UNVALIDATED`.
- Locked the direction to slim Full `ZASS.md` by moving long-form reference/manual material to Wiki/docs while preserving the portable single-file project-state default.
- Recorded license selection as an explicit open owner decision; no license was added or implied in this release.

## [v0.3.3] — 2026-09-30

- Implemented the new lightweight root README landing page and locked the **Start ZASS Your Way** presentation order as **Just Brainstorm → Public Project → CLI → File**; this is a presentation change only and does not change onboarding authority semantics.
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

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]