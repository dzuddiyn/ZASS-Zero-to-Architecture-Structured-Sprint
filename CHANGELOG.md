## 2026-10-07 — Full ZASS v0.3.10 / ZASSIMPLE v0.3.2 Architecture-to-Execution

- LOCKED Architecture Challenge as a pre-confirmation **gate/review mode** for mature material technical architecture rather than a new top-level lifecycle stage.
- Standardized challenge findings as `KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED`; any required LOCKED-decision change returns to an explicit owner gate.
- Added the canonical **PRE-ARCH BASELINE — LOCKED FOR EXECUTION** state. `YA, LOCK PRE-ARCH` approves a challenged/revised architecture hypothesis for detailed planning and bounded implementation; it is not final architecture confirmation.
- Moved final Full-ZASS architecture confirmation to **after** the PRE-ARCH evidence loop and a **LAST ARCHITECTURE CHALLENGE**: capable-reasoner detailed ACTION PLAN → atomic evidence tasks → task result/evidence → PRE-ARCH review/revision → sufficient implementation evidence → last challenge → final improve/revision → BUILD ARCHITECTURE → `YA, CONFIRM ARCHITECTURE`.
- Strengthened ACTION_PLAN as a first-class implementation-planning/execution authority that can feed material findings back to PRE-ARCH/design without becoming decision or architecture authority.
- Added derived **atomic task packets** for Full ZASS and upgraded ZASSIMPLE `TASKS.md` with PRE-ARCH lineage, bounded scope, tests/regressions, evidence, commit expectations, architecture-impact classification, reviewer disposition, and STOP & ESCALATE.
- Canonicalized task feedback: `NO ARCH IMPACT → PASS/NEXT`; task-plan issue → REWORK; material architecture finding → capable PRE-ARCH review/revision; LOCKED-decision impact → STOP → owner.
- Added a distinct post-confirmation **RELEASE BUILD** phase: rebuild/rebase ACTION PLAN from confirmed architecture + current implementation state, slice fresh release atomic tasks, build/test/integrate/harden/verify the first release, pass release acceptance, then mark `DELIVERED !!`. PRE-ARCH evidence tasks are not automatically reused as release tasks.
- Added the shared tool-agnostic `docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md` covering Human Owner, Architect/Strong Reasoner, Planner, Coding Worker and Reviewer roles; durable task/result handoff; PRE-ARCH feedback loops; and deterministic escalation rules.
- Added a reasoning-escalation guideline: complex/high-impact architecture challenge/planning/review should prefer a stronger reasoning capability, higher-reasoning model, Work-style analysis environment or specialist reviewer when available, without locking ZASS to a vendor/tool.
- ZASSIMPLE remains lightweight: ordinary/non-technical design may use the direct confirmation path, while substantial technical architecture uses the PRE-ARCH evidence loop before final CONFIRM DESIGN.
- Preserved Full ZASS owner-only LOCK authority, Evidence Confidence, ZERO → ARCHITECTURE and ZASS FEED semantics; PRE-ARCH never overrides a `D-xxx | LOCKED` decision.
- Synchronized Bootstrap Core method templates with the upgraded canonical Full ZASS and ZASSIMPLE method files.

## 2026-10-07 — Bootstrap Core v0.1 public API freeze PASS

- Closed the Bootstrap Core v0.1 STOP / REVIEW gate as **PASS / FROZEN** after the pre-freeze deterministic API correction.
- Removed public template-loader injection from `buildBootstrapPlan({ projectName, method, language })`.
- Frozen the supported root consumer API to: `CORE_CONTRACT_VERSION`, `METHOD_CHOICES`, `LANGUAGE_CHOICES`, `getBootstrapDescriptor`, `buildBootstrapPlan`, and `verifyBootstrapSnapshot`.
- Kept validators, template loading, support helpers, and catalog predicates internal; repository-internal consumers import those modules directly rather than expanding the public contract.
- Synchronized bundled ZASSIMPLE and Full-ZASS EN/MY templates with their canonical source files before freeze.
- Verified post-merge `main` at `a9fd887070b692313ddae4ecb0ab43b02fb1933e` with **ZASS CI #171 PASS** across CLI tests, Bootstrap Core tests, create-zass tests, repository consistency, historical baseline resolution, and the ZASS validator.
- Closure receipt: `docs/ZASS_BOOTSTRAP_CORE_STOP_REVIEW.md`.
- npm publication and CrossAI/AISYNC consumption remain separate gates.

## 2026-10-07 — ZASS SYSTEM v0.2.1 / ZASSIMPLE v0.3.1 Challenge loop

- LOCKED the pre-confirmation Challenge / Re-challenge loop for ZASSIMPLE.
- Design 4/4 now means **ready to challenge**, not automatically ready to confirm.
- Surface action is `[🥊 CHALLENGE DESIGN !]`; AI chooses one suitable thinking method automatically based on the draft's current weakness/risk.
- `REFINE` returns to DESIGN. `PASS` must not auto-advance.
- After every PASS, show exactly: `Ready to confirm design? or Re-challenge?!` with `[🥊 RE-CHALLENGE DESIGN ?!]` and `[🎨 CONFIRM DESIGN]`.
- Re-challenge selects the next most valuable thinking method for residual risk and may repeat until the owner chooses CONFIRM DESIGN.
- `[🎨 CONTINUE TO CONFIRM]` remains the explicit owner-controlled skip for the optional first challenge.
- Updated ZASSIMPLE EN/MY, DESIGN.md, locked v0.3 working direction, Wiki, and ZASS SYSTEM UI/UX contract.

## 2026-10-07 — Bootstrap Core v0.1 STOP / REVIEW HOLD

- Reviewed contract fidelity, implementation evidence, Windows/CI regression, field behavior, second-consumer verification, and Core/consumer boundaries.
- Functional and field behavior remain PASS.
- Stable API freeze is HOLD because exported `buildBootstrapPlan(input, dependencies)` exposes a template-loader override that can violate the locked same-input/same-release deterministic plan invariant.
- The current broad root export surface is acceptable while private/provisional but must be made explicit before stable freeze.
- No CrossAI integration, npm publication, or methodology expansion is authorized by this review.
- NEXT: correct the public deterministic API seam, run targeted regression/CI, repeat STOP/REVIEW, then freeze only if PASS.
- Receipt: docs/ZASS_BOOTSTRAP_CORE_STOP_REVIEW.md.

## 2026-10-07 — ZASS Project Bootstrap Core v0.1 field test PASS

- Field-tested four real Windows bootstrap projects: ZASSPILL/English, ZASSELECTION/Bahasa Melayu, ZASSIMPLE/English, and Full ZASS/Bahasa Melayu.
- Each local materialization produced exactly one selected method file plus README.md and .gitignore.
- Generated README files were understandable, localized, consumer-neutral, and free of Git/GitHub/CrossAI/Drive state claims.
- Full-ZASS Bahasa Melayu generated canonical ZASS.md and passed zass check with 0 errors / 1 expected no-baseline warning / exit 0.
- Ran a second consumer-style in-memory adapter using buildBootstrapPlan → write/read-back Map → verifyBootstrapSnapshot, independent of the create-zass filesystem path.
- Second-consumer plans were deterministic, verified successfully, and deliberate content tampering was rejected with B205.
- No field defect requiring corrective Core implementation was found.
- Receipt: docs/ZASS_BOOTSTRAP_CORE_FIELD_TEST.md.
- NEXT: STOP/REVIEW. Stable external Core contract is not frozen yet; CrossAI integration and npm publication remain separately gated.

## 2026-10-07 — ZASS Project Bootstrap Core v0.1 implementation

- Implemented private `zass-bootstrap-core@0.1.0` under `bootstrap-core/`.
- Moved the shared four-method/two-language catalog and all eight bootstrap templates into the Core; removed the duplicate `create-zass` template source.
- Implemented deterministic `buildBootstrapPlan()`, plan/input validation, localized consumer-neutral README generation, gitignore safety baseline, and materialized snapshot verification.
- Refactored `create-zass` to consume Core semantics while retaining CLI prompts, target refusal, local filesystem materialization, cleanup, and console receipts.
- Windows evidence: Bootstrap Core 26/26 PASS + create-zass 24/24 PASS = 50/50 combined.
- PR #44 ZASS CI PASS across zass-cli, Bootstrap Core, create-zass, repository consistency, historical baseline, and validator.
- Stable external Core API is not frozen yet. NEXT: bootstrap field test, then STOP/REVIEW, then stable Core freeze.
- CrossAI integration and npm publication remain separately gated.

## 2026-10-07 — ZASS Project Bootstrap Core v0.1 contract LOCKED

- LOCKED the shared Bootstrap Core implementation contract for `create-zass` and future CrossAI Create Project.
- Separated shared project semantics from consumer-specific materialization: Core owns method/language mapping, templates, minimal artifact plan, README/gitignore semantics, metadata, validation and snapshot verification; consumers own filesystem/Drive/GitHub/registration behavior.
- Locked deterministic plan semantics: same project name + method + language + Core release produces the same three-artifact bootstrap plan.
- Locked Full-ZASS authority mapping to `ZASS.md` for both English and Bahasa Melayu.
- Locked consumer-neutral localized README generation and safe secret-oriented `.gitignore` baseline.
- Locked migration of bootstrap template ownership out of `create-zass` into the shared Core so there is one template/catalog source.
- CrossAI integration, Drive adapter, Git/GitHub adapter, public npm distribution strategy and stable external API freeze remain deferred until implementation + field test.
- NEXT TRACK B step: implement shared Bootstrap Core and refactor `create-zass` to consume it.

## 2026-10-07 — npm Bootstrap CLI v0.1 implementation

- Implemented private `create-zass@0.1.0` under `create-zass/`; it is not published to npm.
- Added interactive no-default method/language prompts plus explicit non-interactive `--method` / `--lang` behavior.
- Implemented all 4 × 2 method/language combinations with Full ZASS always generating canonical `ZASS.md`.
- Added create-new-only preflight, existing-target refusal, safe partial cleanup, structural validation, factual success receipts, and no implicit external side effects.
- Bundled all eight canonical method/language templates as versioned package assets and added template-sync regression tests.
- Windows evidence: 32/32 create-zass tests PASS.
- PR #42 ZASS CI PASS including both existing zass-cli tests and new create-zass tests.
- A Windows `npm pack --dry-run` attempt did not produce usable evidence and was terminated; no publication/package-artifact proof is claimed.
- ZASS Project Bootstrap Core is the next TRACK B phase; npm publication remains separately gated.

## 2026-10-07 — npm Bootstrap CLI v0.1 contract LOCKED

- SUPERSEDED the earlier npm-only onboarding default that silently generated ZASSIMPLE/English with no method-selection question.
- LOCKED `npm create zass@latest <project>` as an explicit four-method bootstrap: ZASSPILL, ZASSELECTION, ZASSIMPLE, or Full ZASS.
- Interactive use asks for method and language; non-interactive use must provide `--method` and `--lang` rather than guessing.
- Full ZASS bootstrap preserves `ZASS.md` as the generated project authority filename for both English and Bahasa Melayu so current zass-cli discovery remains compatible.
- v0.1 remains local-first, create-new-only, and performs no implicit Git, GitHub, CrossAI, Drive, AI API, telemetry, or runtime-template-download side effects.
- The npm package is not implemented or published by this lock; implementation is the next TRACK B step.

## 2026-10-07 — CR-010 STOP / REVIEW PASS — CLOSED

- Ran the explicit CR-010 STOP/REVIEW after v0.4 implementation and real-project field validation.
- Review criteria all PASS: local execution, passing/failing fixtures, understandable command output, real-project behavior, and no remaining unacceptable tested false positive after the Windows EOL correction.
- STOP/REVIEW caught and corrected one closure-hygiene gap: package/docs still identified the implemented v0.4 CLI as v0.3.0 / status-diff deferred.
- Aligned the private local package and active docs to `zass-cli v0.4.0`; no behavior or method semantics changed.
- **CR-010 is CLOSED.** Final local commands: `zass check`, `zass status`, `zass diff`.
- npm bootstrap CLI and ZASS Project Bootstrap Core remain separate next TRACK B work.

## 2026-10-07 — CR-010 v0.4 real-project field gate PASS

- Completed real-project field testing of `zass status` and `zass diff` against Kerani_Core on Windows.
- Clean Kerani_Core returned validator 0/0, status PASS/CLEAN, and diff NO_CHANGE.
- Deliberate D-037 and readiness mutations proved the intended command separation: diff reports factual change, check owns validation, status summarizes current validation/Git state.
- Field testing exposed the Windows EOL false positive fixed in PR #38 before the gate was accepted.
- Secondary Kerani_Core_SuperBasic sampling confirmed diff NO_CHANGE on a clean working tree while status truthfully projected its existing validator findings.
- CR-010 v0.4 field gate is PASS; STOP/REVIEW remains before CR-010 closure.

## 2026-10-07 — CR-010 v0.4b Windows field correction

- Real-project field testing exposed a Windows EOL false positive in `zass diff`: clean CRLF working files differed byte-for-byte from LF `git show` baseline blobs.
- Fixed file comparison by normalizing line-ending representation only before UNCHANGED/MODIFIED classification.
- Added an explicit CRLF/LF regression test; no whitespace trimming or semantic normalization was added.

## 2026-10-07 — CR-010 v0.4b implementation

- Implemented `zass diff` under the locked v0.4b read-only local-HEAD contract.
- Added deterministic primary-file ADDED/MODIFIED/DELETED/UNCHANGED states plus canonical ID, LOCKED/SUPERSEDED, declared readiness and critical-blocker deltas using existing parser semantics.
- Added focused tests for baseline/current file absence, ZASS add/delete, non-Git behavior, read-only proof, CLI routing and argument rejection.
- ZASS CI passed all workflow steps on PR #37; the real-project field-test gate remains pending and is not claimed here.
- Did not add custom baselines, raw patch mode, remote comparison, npm publication, or Bootstrap Core work.

## 2026-10-07 — CR-010 v0.4b contract

- LOCKED the CR-010 v0.4b `zass diff` behavioral contract; implementation has not started.
- Defined a ZASS-aware local-HEAD comparison over primary-file states, canonical ID additions/removals, LOCKED/SUPERSEDED state-set deltas, and declared readiness/blocker changes using existing parser semantics.
- Preserved command separation: `status` = current factual state, `diff` = factual change summary, `check` = validation authority.
- Explicitly excluded raw unrestricted patch output, remote comparison, custom baselines, lifecycle inference, and validator-rule duplication.

## 2026-10-07 — CR-010 v0.4a implementation

- Implemented `zass status` under the locked v0.4a read-only factual contract.
- Added Full ZASS detection, primary file FOUND/MISSING reporting, existing-validator PASS/WARNING/ERROR summary, local Git CLEAN/CHANGED/UNKNOWN state, and HEAD/N/A baseline.
- Added focused tests including non-Git behavior, read-only proof, CLI routing, and argument rejection.
- ZASS CI passed all workflow steps on PR #35; later real-project field testing remains pending and is not claimed here.
- Did not implement `zass diff`, publish npm, or touch Bootstrap Core/CrossAI runtime.

## 2026-10-07 — CR-010 v0.4a contract

- LOCKED the CR-010 v0.4a `zass status` behavioral contract; implementation has not started.
- Locked a read-only factual snapshot over Full ZASS detection, primary file presence, existing validator summary, local Git CLEAN/CHANGED/UNKNOWN state, and HEAD/N/A baseline.
- Locked guardrails against project mutation, remote access, progress/lifecycle inference, and next-action invention.
- Split later `zass diff` work into v0.4b; no `zass diff` semantics were silently designed in this change.

## 2026-10-07 — TRACK B activation

- Activated isolated parallel ZASS TRACK B before AISYNC T-020/T-021 completion.
- Superseded only the old sequencing assumption; existing architecture remains unchanged.
- Locked TRACK B order: CR-010 v0.4 → field test → close CR-010 → npm bootstrap → ZASS Project Bootstrap Core → bootstrap field test → stable core contract.
- Locked isolation guardrail: TRACK B must not modify AISYNC runtime, Apps Script production, Gate 6 acceptance, or T-020/T-021 criteria.

## 2026-10-07

- Reconciled the post-Production-v1 bootstrap roadmap with the locked Drive-first optional-GitHub architecture.
- Updated ZASS Project Bootstrap Core so a valid project no longer requires GitHub by default; GitHub creation/linking is an explicit optional path.
- Preserved the locked CR-010 v0.4 → field test → close → npm bootstrap → shared bootstrap-core sequence without activating it ahead of the current Gate 6/T-020 critical path.

# Changelog

All notable changes to ZASS are recorded here.

## [ZASSELECTION v0.2.4] — 2026-10-07

- LOCKED a cleaner **Selection Score Bar** presentation after visual review.
- Replaced block/filler bars such as `████░░` with a lightweight solid-line `━` bar and space padding.
- Removed the decorative outer box from the standard score-bar presentation.
- Kept v0.2.3 semantics unchanged: the bar remains display-only, uses existing valid scores, preserves provisional labels, and never creates evidence or false precision.

## [ZASSELECTION v0.2.3] — 2026-10-07

- LOCKED the **Selection Score Bar** as the compact visual summary shown immediately after a comparison table when valid comparable numeric totals exist.
- The bar may normalize existing totals to a 0–100 display scale, while preserving the underlying matrix score unchanged.
- Provisional / AI-proposed numeric scores must display `PROVISIONAL / AI-PROPOSED`; if numeric scoring has no valid basis, the numeric bar is omitted.
- The Selection Score Bar is display-only and does not replace the Selection Matrix, AI Recommendation, or owner selection.
- Preserved the v0.2.2 evidence-discipline rule: the bar summarizes existing evidence and must never create false precision.


## [Project Bootstrap future direction lock] — 2026-10-05

- LOCKED the future ZASS Project Bootstrap Core shared by the npm onboarding CLI and AISYNC Create Project.
- Locked the boundary: ZASS owns bootstrap structure/metadata/validation; AISYNC owns Create Project UX, GitHub repository creation integration, registration, and projection.
- Locked explicit owner confirmation before GitHub repository creation; entering DESIGN alone must never create a repository.
- Locked GitHub as the canonical project Source of Truth so projects remain independently usable outside AISYNC.
- Locked the post-Production v1 sequence through CR-010 v0.4 closure, npm bootstrap, shared bootstrap core, and AISYNC Create New Project → GitHub.
- Locked a focused post-polish UX regression using two returning beta participants plus one fresh user, with desktop/mobile coverage.
- This is future productization direction only; no current Gate 6 task, method semantics, validator rules, or ZASS SYSTEM version changed.


## [ZASS SYSTEM Gate 6 acceptance lock] — 2026-10-05

- LOCKED the Gate 6 — Automation + adoption UX acceptance contract in `docs/ZASS_SYSTEM_GATE6_AUTOMATION_ADOPTION_ACCEPTANCE.md`.
- Locked G6-01 through G6-09 covering authority preservation, integrated ordinary-user journey, progressive-disclosure UX, bounded beta access, truthful automation, continuity/privacy, minimum three distinct non-developer beta participants, factual recovery evidence, and final ZASS acceptance.
- Locked the cross-repository sequence: AISYNC primary implementation → ZASS SYSTEM audit → ZASS-owned gap fix where applicable → AISYNC integration/re-audit → ZASS final acceptance.
- Locked the UX direction: Simple View remains default; Guided Journey / Workflow Navigator is secondary progressive disclosure driven only by factual project state/evidence.
- Recorded that full visual polish is not a prerequisite for functional closed beta; minimum ordinary-user usability is required before counted beta journeys.
- Recorded current implementation input: AISYNC T-019 PASS; T-020 CURRENT but external beta not yet counted because readiness findings remain.
- No ZASS method semantics, validator rules, command surface, or ZASS SYSTEM version changed.


## [ZASS SYSTEM Gate 5 CLOSED / PASS] — 2026-10-04

- Completed final owner-visible production acceptance for Review / History projection.
- Verified Workspace remains compact/default and does not expose advanced audit sections by default.
- Verified Review clearly presents read-only indexed evidence with explicit STALE caveat.
- Verified factual commit-linked ZASS CI presentation, including a truthful NOT_FOUND result for the stale indexed commit with no false PASS claim.
- Verified separate Decisions projection.
- Verified neutral Design / architecture absence and neutral Selection-state absence for the current AISYNC index.
- Verified Action Plan, readable Lineage / sources, and Commit / version trail on demand.
- Verified History separately presents factual audit events, compact receipt truth, visible failures, and raw receipt JSON behind details.
- Verified NO_CHANGE receipts do not invent commits.
- Recorded AISYNC final owner-visible closure receipt PR #32, merge `81d53f9a04b1b015e6750f9d5df12ee51179ea90`.
- Gate 5 is now CLOSED / PASS.
- Promoted Gate 6 — Automation + adoption UX — to CURRENT.
- No ASC DB schema, ZASS method, validator, or ZASS SYSTEM version change.


## [ZASS SYSTEM Gate 5 production deployment receipt] — 2026-10-04

- Recorded AISYNC Gate 5 Review/History merge `56f3430f6e0718d21e0b8f63e59dfabd325731d3`.
- Recorded all 27 AISYNC repository test files PASS and `git diff --check` PASS.
- Recorded Review projection for freshness, commit-linked CI, Decisions, Design/architecture, Selection state, Action Plan, readable lineage/source metadata, Commit/version trail, and raw project records behind details.
- Recorded History projection for factual audit events, compact receipt truth, visible failures, and raw receipt JSON behind details.
- Recorded positive automated fixtures for decision/design/selection/lineage/commit/history paths plus neutral absence behavior.
- Recorded protected production Apps Script v27, built from production v26 plus exactly `Dashboard.html` and `DashboardClient.html`.
- Recorded independent post-deploy source match and non-Gate-5 production-file parity with v26.
- Gate 5 implementation + deployment evidence is PASS; owner-visible production verification remains before formal closure.
- No ASC DB schema, ZASS method, validator, or ZASS SYSTEM version change.


## [ZASS SYSTEM Gate 4 CLOSED / PASS] — 2026-10-04

- Completed final owner-visible production acceptance for Factual SAVE / sync.
- Verified a valid pending request visibly showed `UNSAVED`.
- Verified explicit `CONFIRM & SYNC` visibly transitioned through `SYNCING`.
- Verified factual final receipt rendered `SAVED / NO_CHANGE / verified=true` with `write_performed=false` and no invented commit.
- Verified Workspace Project Pulse showed `Save / sync health: STALE` while the prior SAVE receipt was successful, proving persistence success and index freshness remain distinct.
- Retained D-030 user-activated `Return to main ASC UI` as the guaranteed post-SAVE return path.
- Recorded AISYNC final owner-visible closure receipt PR #29, merge `715000c5b9416fa40eb05855a8f751816e29f16a`.
- Gate 4 is now CLOSED / PASS.
- Promoted Gate 5 — Review / History projection — to CURRENT.
- No ZASS method, validator, or ZASS SYSTEM version change.


## [ZASS SYSTEM Gate 4 live proof + D-030 compatibility fix] — 2026-10-04

- Recorded owner-visible factual `SAVED / NO_CHANGE / verified=true` proof for request `ASC-G4-NOCHANGE-20261004013025`.
- Recorded that no new commit was created because authoritative target content already matched.
- Recorded live UX defect: empty protected page displayed `UNSAVED`; fixed to neutral `NO REQUEST`.
- Recorded live platform finding: timer-driven top-level auto-return did not navigate from the Apps Script/browser sandbox.
- Confirmed D-030 already makes the user-activated `Return to main ASC UI` control the guaranteed v0.1 return path and automatic navigation optional.
- Recorded AISYNC PR #25 (`75a76bd0...`) and PR #26 (`9abddcfd...`) bounded fixes.
- Recorded protected production Apps Script v26, `Gate4-D030-return-control-fix`, with independent source verification and no unrelated production drift.
- Gate 4 owner-visible SAVED proof is PASS; final closure still requires visible UNSAVED/SYNCING for a valid request and Workspace Save / sync health proof.
- No ZASS method, validator, or ZASS SYSTEM version change.


## [ZASS SYSTEM Gate 4 production deployment receipt] — 2026-10-04

- Recorded AISYNC Gate 4 factual SAVE/sync merge `c4ab3e2be49a295e741f5a35ac0bde1667bd1a06`.
- Recorded all 26 AISYNC repository test files PASS and `git diff --check` PASS.
- Recorded protected Confirm & Sync product states UNSAVED → SYNCING → SAVED / FAILED.
- Recorded factual receipt handling for VERIFIED_WRITE, NO_CHANGE, and VERIFIED_WRITE_RECONCILED without inventing commit SHAs.
- Recorded Project Pulse Save / sync health with STALE precedence over historical SAVE success.
- Recorded protected production Apps Script version 24, built from production v23 plus exactly `Index.html`, `Client.html`, and `DashboardClient.html`.
- Recorded independent post-deploy source match, non-Gate-4 production-file parity with v23, and restoration of the separate T-017 development HEAD.
- Gate 4 implementation + deployment evidence is PASS; owner-visible production verification remains before formal closure.
- No ZASS method, validator, or ZASS SYSTEM version change.


## [ZASS SYSTEM Gate 3 CLOSED / PASS] — 2026-10-04

- Completed final owner-visible production acceptance for Project Workspace + Contextual Cards on protected Apps Script v23.
- Verified project opens on Workspace by default.
- Verified compact Project Pulse with current stage, next stage, factual progress state, STALE index freshness, and latest update.
- Verified STALE state suppresses stale Current Task / decision-currentness claims and surfaces `Project state needs refresh`.
- Verified Continue naturally / ASC Front Door is visible without implying SAVE.
- Verified Review exposes commit-linked CI, current-state evidence, Action Plan, and ZASS/project records on demand.
- Verified History exposes the factual audit trail separately.
- Verified the default Workspace no longer exposes the previous full technical wall.
- Observed factual `READ_ERROR / GITHUB_READ_FAILED` in Review for the stale indexed commit; this was correctly surfaced as an error rather than a PASS.
- Gate 3 is now CLOSED / PASS.
- Promoted Gate 4 — Factual SAVE / sync — to CURRENT.
- No ZASS method, validator, or ZASS SYSTEM version change.


## [ZASS SYSTEM Gate 3 production deployment receipt] — 2026-10-04

- Recorded AISYNC Gate 3 workspace/contextual-cards merge `3d006eb4bde64ab9cca9878c0ca4e9c69db4dbf9`.
- Recorded all 26 AISYNC repository test files PASS from the T-017-inclusive baseline and `git diff --check` PASS.
- Recorded Workspace default, Project Pulse, natural continuation action, deterministic contextual-card projection, Review/History progressive disclosure, STALE-state suppression, and hidden default lineage IDs.
- Recorded protected production Apps Script version 23, built from production v21 plus exactly `Dashboard.html` and `DashboardClient.html`.
- Recorded independent post-deploy source match, non-Gate-3 production-file parity with v21, and restoration of the separate T-017 development HEAD.
- Gate 3 implementation + deployment evidence is PASS; owner-visible production UI verification remains before formal closure.
- No ZASS method, validator, or ZASS SYSTEM version change.


## [ZASS SYSTEM Gate 2 CLOSED / PASS] — 2026-10-04

- Completed the final owner-visible production acceptance check for the DUMP / DECIDE / DESIGN landing gate.
- Verified on the Google Sites ASC production surface that DUMP / DECIDE / DESIGN are visibly present.
- Verified on the protected Apps Script production dashboard that the same three routes are visibly present.
- Verified DUMP visibly renders `DUMP → ZASSPILL` plus the ASC Front Door action.
- Verified DECIDE can be selected without error.
- Verified DESIGN can be selected and renders the AISYNC project view without error.
- Gate 2 is now CLOSED / PASS.
- Promoted Gate 3 — Project Workspace + Contextual Cards — to CURRENT.
- No ZASS method, validator, or ZASS SYSTEM version change.


## [ZASS SYSTEM Gate 2 production deployment receipt] — 2026-10-04

- Recorded AISYNC Gate 2 three-route integration merge `f515a7d1379534501cd7a032563bfa968f8012ae`.
- Recorded 24/24 AISYNC repository test files PASS and no-write/regression boundaries.
- Recorded live ASC DB `PROJECTS.ui_entry` validation migration to DUMP / DECIDE / DESIGN.
- Recorded protected production Apps Script version 21, built from production v17 plus exactly three Gate 2 dashboard files.
- Recorded independent post-deploy source match and restoration of the separate T-017 development HEAD.
- Gate 2 implementation + deployment evidence is PASS; only owner-visible production UI verification remains before formal closure.
- No ZASS method, validator, or ZASS SYSTEM version change.


## [ZASS SYSTEM Gate 2 acceptance lock] — 2026-10-04

- Locked the production acceptance contract for the DUMP / DECIDE / DESIGN product gate.
- Confirmed from canonical AISYNC main that the front-door routing proof already implements DUMP → ZASSPILL, DECIDE → ZASSELECTION, DESIGN → ZASSIMPLE, visible override, exact Method Gateway handoff, and no-write routing behavior.
- Identified the current product-integration gap: the main ASC dashboard/read model and ASC DB `ui_entry` contract still expose only DECIDE / DESIGN.
- Gate 2 remains NOT YET PASS until the production-facing journey is coherent across the front door and main product surface.
- AISYNC runtime implementation remains outside this repository; T-017/private continuity is not a Gate 2 prerequisite.
- No ZASS method, validator, or ZASS SYSTEM version change.


## [CR-010 v0.3 STOP / REVIEW gate] — 2026-10-03

- Completed the required post-implementation review of zass-cli v0.3.0 before any v0.4 work.
- Re-ran the canonical 46-test suite and repository consistency guard successfully.
- Reconfirmed Small Farm Planner and Kerani_Core current-state checks at 0 errors / 0 warnings.
- Reconfirmed real-project mutation behavior for Z201, Z202, Z203, and Z204; isolated fixture behavior for conservative Z205.
- Confirmed conservative non-inference when progress/status/source fields are absent and when blocker prose lacks parseable IDs.
- Found no material false positive or false negative requiring a v0.3.x patch.
- CR-010 v0.3 is CLOSED / PASS at its STOP/review gate.
- Optional Z206 remains deferred; CR-010 v0.4 is NOT STARTED and requires a separate explicit implementation decision.


## [ZASS CLI v0.3.0 — CR-010 ACTION_PLAN consistency] — 2026-10-03

- Implemented the locked CR-010 v0.3 ACTION_PLAN consistency phase without changing ZASS method or ZASS SYSTEM semantics.
- Added Z200 optional ACTION_PLAN discovery/snapshot availability.
- Added Z201 readiness-progress mismatch, Z202 readiness-status mismatch, Z203 stale source-version, Z204 explicit related-ZASS-ID existence, and conservative Z205 blocker inconsistency.
- Kept ZASS.md authoritative: the validator compares explicit snapshot values only and does not recalculate architecture readiness or infer semantic equivalence.
- Added compatibility for real project surfaces, including two-line readiness scores, alternate project ZASS source filenames, and explicit legacy Decision Ledger / LOCKED Records IDs for Z204 existence checks.
- Automated suite: **46/46 PASS**.
- Field validation: Small Farm Planner **0 errors / 0 warnings**; Kerani_Core **0 errors / 0 warnings**.
- Deferred optional Z206 working-tree atomic-sync heuristic to avoid adding noisy Git-state inference before evidence justifies it.
- CR-010 v0.3 stop gate reached; v0.4 is not started automatically.


## [ZASS CLI v0.2.2 — CR-010 field compatibility] — 2026-10-03

- Field-use patch triggered by the required CR-010 v0.2 real-project gate; no ZASS method or ZASS SYSTEM version change.
- Fixed Z001 false positives where bold summary/index/ledger list entries repeated IDs that were already defined by canonical headings/tables.
- Preserved real duplicate detection: field testing exposed a genuine duplicate `R-035` in Kerani_Core, corrected separately to `R-040` rather than weakening Z001.
- Extended explicit decision-state parsing to deterministic compound forms such as `Status: DECIDED / LOCKED`.
- Extended explicit authority-section support to `LOCKED RECORDS` plus `L-xxx → D-xxx` and `L-xxx: Locks D-xxx` forms while keeping ordinary prose non-authoritative.
- Added real-project-shaped parser and Git-drift regressions.
- Automated suite: **36/36 PASS**.
- Final field proof against corrected Kerani_Core `main`: unchanged project **0 errors / 0 warnings**; deliberate semantic mutation of LOCKED `D-037` produces **Z101 ERROR**.
- CR-010 v0.2 field gate is PASSED; CR-010 v0.3 ACTION_PLAN consistency is now the next implementation gate but remains NOT STARTED.


## [QA-008 — repository consistency guard] — 2026-10-03

- Quality-track preventive guard; no ZASS method or ZASS SYSTEM version bump.
- Added `quality/check-repo-consistency.mjs` as a repository-maintenance check separate from `zass check`.
- Guarded current Full ZASS / ZASS SYSTEM / ZASSIMPLE / ZASSELECTION / ZASSPILL version parity across selected current-facing surfaces.
- Guarded ZASSPILL method/protocol production-readiness wording, AI-SYNC Method Gateway T-013A/T-013B current-state agreement, GitHub CI operational-state agreement, and accidental local execution metadata.
- Added the consistency guard as a separate GitHub Actions step; Z001–Z101 semantics remain owned by the CLI validator.
- Closed remaining broad ZASSPILL production wording in root/Wiki current-status surfaces discovered while constructing the guard.
- No routing, method semantics, or architecture boundaries changed.


## [QA-007 — reference-style Markdown link validation] — 2026-10-03

- Quality-track validator robustness update; no ZASS method or ZASS SYSTEM version bump.
- Extended Z003 local-reference validation beyond inline links to reference-style Markdown links with local definitions.
- Added explicit-reference and shortcut-reference regression coverage, including broken-target detection.
- Preserved existing inline-link behavior, including balanced-parentheses support from QA-003.
- Updated CLI and CR-010 documentation to state the supported Markdown reference scope.
- No routing or architecture boundaries changed.


## [QA-006 — LOCKED decision title semantics] — 2026-10-03

- Quality-track validator contract clarification; no ZASS method or ZASS SYSTEM version bump.
- Defined the semantic decision heading/title as part of the authority-bearing LOCKED decision record.
- Z101 now compares normalized title + normalized body, so semantic title-only changes are detected while presentation-only title formatting remains allowed.
- Added regression coverage for semantic title drift and formatting-only title changes.
- Updated the CR-010 v0.2 specification and CLI documentation to match the implemented contract.
- No routing or architecture boundaries changed.


## [QA-005 — current truth and claim precision] — 2026-10-03

- Quality-track documentation/claim synchronization only; no ZASS method or ZASS SYSTEM version bump.
- Aligned the older AI-SYNC integration reference and UI/UX contract with the proven T-013A/T-013B public Method Gateway state while preserving GitHub method authority and exact-URL receiver guardrails.
- Marked the GitHub Actions roadmap item DONE and retained later validator phases as separate future work.
- Corrected Full ZASS surface alignment metadata to current v0.3.9.
- Qualified ZASSPILL `PRODUCTION READY` wording across current surfaces: it refers to the v1.0.0 method/protocol contract, while runtime persistence/retrieval/authorization/transport remain AI-SYNC/ASC responsibilities.
- No routing, method semantics, validator rules, or architecture boundaries changed.


## [QA-004 — public metadata cleanup] — 2026-10-03

- Quality-track repository hygiene only; no ZASS method or ZASS SYSTEM version bump.
- Removed accidental local execution/device markers from public Markdown artifacts after repository-wide enumeration.
- Preserved product, release, Git, and CI provenance; only generated local-device execution residue was removed.
- No method semantics, parser behavior, routing, or architecture boundaries changed.


## [QA-003 — parser robustness] — 2026-10-03

- Quality-track parser hardening only; no ZASS method or ZASS SYSTEM version bump.
- Fixed fenced-code handling so a shorter fence cannot close a longer opening fence; closing fences must use the same marker and at least the opening length.
- Fixed local Markdown-link extraction for balanced parentheses in valid targets such as `docs/file_(draft).md`.
- Added adversarial regression tests for both cases.
- Local verification: 24/24 CLI tests PASS; root `zass check` returns 0 errors.
- No validation-rule semantics or architecture boundaries changed.


## [QA-002 — current documentation truth] — 2026-10-03

- Quality-track documentation alignment only; no ZASS method or ZASS SYSTEM version bump.
- Corrected ZASSELECTION Wiki fallback export wording to the active EN/MY method-file contract.
- Updated Productization Wiki wording to reflect that GitHub Actions already uses the shared ZASS validator/CLI semantics.
- Updated the root README to reflect AISYNC T-013A/T-013B PASS and the proven public Method Gateway, while preserving the exact-URL receiver guardrail.
- No method semantics, routing, validator rules, or architecture boundaries changed.


## [QA-001 — authority parser hardening] — 2026-10-03

- Quality-track fix only; no ZASS method or ZASS SYSTEM version bump.
- Fixed false authority classification where arbitrary visible prose containing both `D-xxx` and `LOCKED` / `SUPERSEDED` could affect Z101 state.
- Decision-level state metadata is now recognized only from explicit `Status:` metadata, while ledger state is recognized from explicit `LOCKED DECISIONS` / `SUPERSEDED DECISIONS` list sections.
- Preserved canonical `L-xxx / D-xxx — LOCKED` and explicit `Supersedes: D-xxx` behavior.
- Added adversarial regression coverage for explanatory prose, canonical ledger state, and explicit status metadata.
- Local verification: 22/22 CLI tests PASS; root `zass check` returns 0 errors.


## [ZASS GitHub CI operational proof] — 2026-10-03

- LIVE PASS confirmed for `ZASS CI / zass-check` on merged `main` commit `13b9b267372ef9d18329ed5f88858dc04da3dfdc`.
- GitHub Actions run `37084654404` completed successfully, including checkout, Node.js 20 setup, CLI tests, historical-baseline resolution, and the ZASS validator.
- The external CI dependency required by AISYNC T-012 is now satisfied.
- Validation authority remains unchanged: ZASS Core/CLI/CI own rule semantics; ASC may only consume/display commit-linked results.


## [ZASS CLI v0.2.1 / GitHub CI gate] — 2026-10-03

- Added an optional `zass check --baseline <git-ref>` path so CI can compare a committed candidate against the correct historical Git baseline while reusing the existing Z001–Z101 validator semantics.
- Preserved local behavior: without `--baseline`, Z101 still compares the working tree against `HEAD`.
- Added the first repository GitHub Actions workflow, `ZASS CI / zass-check`, using full Git history, Node.js 20, the existing CLI test suite, and the same CLI validator.
- Kept workflow permissions read-only and added no destination credentials or duplicate validation logic.
- Added `docs/ZASS_GITHUB_CI_CONTRACT.md` as the cross-system boundary for future AISYNC T-012 consumption.
- This change creates the CI candidate only; AISYNC T-012 remains blocked until a real commit-linked GitHub Actions run passes.


## [ZASS SYSTEM v0.2.0 / ZASSPILL v1.0.0 global DUMP promotion] — 2026-10-03

- PROMOTED the released global ZASS SYSTEM entry model to **DUMP / DECIDE / DESIGN**.
- LOCKED routing as **DUMP → ZASSPILL**, **DECIDE → ZASSELECTION**, **DESIGN → ZASSIMPLE**, with Full ZASS remaining an escalation path from DESIGN when stronger governance is needed.
- Promoted ZASSPILL v1.0.0 as **PRODUCTION READY** after Phase 1–6 proofs: core continuity, multi-thread continuity, persistence/ASC contract, retrieval intelligence, cross-method continuity, and production reliability.
- Updated the root README, Full-ZASS EN/MY system alignment metadata, landing direction, UI/UX contract, productization roadmap, ZASSPILL README/Wiki, Wiki home, and ZASSIMPLE working direction to the three-intent model.
- Kept historical ZASSPILL v0.1 design assumptions as historical context and marked the original promotion gate as completed.
- This is a ZASS SYSTEM routing/product-surface release; it does not change Full ZASS decision authority or silently alter ZASSELECTION/ZASSIMPLE method semantics.

## [ZASS SYSTEM v0.1.3 / ZASSIMPLE v0.3.0 DESIGN-first] — 2026-10-02

- LOCKED **DECIDE or DESIGN?** as the released ZASS SYSTEM entry model: DECIDE → ZASSELECTION, DESIGN → ZASSIMPLE.
- LOCKED **DESIGN** as the universal ZASSIMPLE surface/output; architecture remains an optional technical subtype when the domain needs it.
- Renamed `ZASSIMPLE/ARCHITECTURE.md` to `ZASSIMPLE/DESIGN.md` and aligned ACTION_PLAN/TASK lineage with DESIGN.
- Replaced architecture-centric surface UX with `Design Progress`, `🎨 Design forming`, `Ready to confirm design?`, `[🎨 CONFIRM DESIGN]`, and final `YA, CONFIRM DESIGN`.
- Added domain-adaptive design language so shop/service, business, product, workflow and physical projects are not forced into software-architecture terminology.
- Updated the IDEA Trick to `A — Assemble the Design` and the tagline to `From messy ideas to 👍 THUMBS-UP design.`
- Preserved v0.2.5 global EN/MY language routing and architecture commands as compatibility/domain-specific aliases for technical projects.
- Promoted `ZASSIMPLE/docs/ZASSIMPLE_V03_WORKING_DIRECTION.md` as the active working direction; the v0.2 structure plan remains historical context.

## [ZASSELECTION v0.2.2] — 2026-10-02

- LOCKED matrix evidence discipline after the ZASSPILL → DECIDE → ZASSELECTION field-test finding.
- Criteria may be inferred from user-stated context, but inferred criteria are not user-confirmed requirements.
- Weights represent priorities and must not be silently invented as authoritative; AI-proposed weights are provisional.
- Numeric scores now require a stated basis from user input, evidence, measurable facts, or an explicit scoring rule.
- When a numeric basis is insufficient, ZASSELECTION uses qualitative comparison, `UNKNOWN`, or clearly labelled provisional scoring instead of false precision.
- AI may still recommend under uncertainty, but uncertainty must remain visible.
- ZASSPILL Field Test 10 remains an END-TO-END PASS; this downstream matrix finding is scoped to ZASSELECTION only.

## [ZASSPILL v0.1.0 — Phase 1 Core Proof] — 2026-10-02

- Added the minimum ZASSPILL method package: `ZASSPILL/README.md`, `ZASSPILL_EN.md`, and `ZASSPILL_MY.md`.
- Implemented the standalone single-thread Phase 1 behavior from the locked design direction: 6W continuity, truth-type vs continuity-stability discipline, meaning-change refresh, continuity compression, inspection/correction, privacy minimization, portable Thread Packet rendering, manual cross-AI continuation, and contextual DECIDE/DESIGN suggestions.
- Kept Thread Packet rendering human-readable and intentionally non-final; no separate schema authority, machine thread-ID format, semantic index, split/merge automation, or ASC sync was introduced.
- Kept the released global ZASS SYSTEM entry contract unchanged at `DECIDE or BUILD?`; `DUMP / DECIDE / DESIGN` remains an ASC target/pilot.
- Kept the ZASSIMPLE `DUMP` → `IDEA DUMP` rename as a locked future direction; it is not implemented in this release.
- No ZASS SYSTEM version bump was made because global routing and system contracts remain unchanged.
- Next gate: field-test AI A → portable packet → AI B and verify natural continuation without the old chat.

## [ZASSPILL Design Direction v0.1] — 2026-10-02

- LOCKED the pre-implementation design checkpoint for **ZASSPILL**, a portable DUMP continuity method/layer that preserves messy human context across chats and AIs without forcing premature structure.
- LOCKED the ASC pilot target DUMP / DECIDE / DESIGN with DUMP → ZASSPILL, DECIDE → ZASSELECTION, DESIGN → ZASSIMPLE. The current global DECIDE or BUILD? contract remains unchanged until explicit promotion gates pass.
- LOCKED the target migration intent: after a successful pilot, promote DUMP / DECIDE / DESIGN to global ZASS SYSTEM, retire DECIDE or BUILD?, and replace user-facing BUILD with DESIGN.
- LOCKED the ZASSIMPLE naming mitigation direction: its first lifecycle stage should become IDEA DUMP to distinguish raw build ideas from system-level DUMP continuity; this rename is not implemented by this checkpoint.
- LOCKED the 6W continuity frame, truth-type vs continuity-stability separation, meaning-change refresh, continuity compression, hybrid semantic-thread model, thread retrieval/maintenance principles, Index vs Thread Packet boundary, and minimal handoff semantics.
- LOCKED continuity authority rules: standalone packet authority before ASC linking; latest successfully synchronized ASC state for ASC-linked threads; external AI edits remain working changes until successful sync; revision conflicts must reconcile instead of silently overwrite.
- LOCKED human-control and privacy principles: invisible by default but inspectable/correctable on demand, WHO carries only relationship + thread relevance, portability is a disclosure boundary, and user statements remain distinguishable from AI inference.
- LOCKED phased implementation: Core proof → ASC authority/sync → semantic thread intelligence → full three-intent ASC pilot.
- No ZASS SYSTEM or method version was bumped. No final schema, runtime contract, ZASSPILL_EN.md, ZASSPILL_MY.md, or global routing replacement is released by this checkpoint.

## [ZASS SYSTEM v0.1.2 / Full ZASS v0.3.9 / ZASSIMPLE v0.2.5 / ZASSELECTION v0.2.1] — 2026-10-02

- LOCKED global EN/MY language routing across Full ZASS, ZASSIMPLE, and ZASSELECTION.
- English method files remain the default distribution surfaces. When an English file is active and the user speaks Bahasa Melayu, AI shows one light Malay-companion notice and never switches files automatically.
- LOCKED the shared notice wording: `Anda boleh terus bercakap dalam Bahasa Melayu walaupun menggunakan fail English, atau gunakan versi Melayu jika mahu arahan method sepenuhnya dalam BM.`
- LOCKED separation between conversation language and structured method-surface language: conversation may follow the user, while tables, matrices, I/AC/D record labels, cards, stage/status explanations, history labels, and method prompts follow the active EN/MY method file.
- Malay method files render human-facing structured surfaces in Bahasa Melayu; English method files render them in English. Canonical IDs, protected commands, mnemonics, and state tokens stay stable when translation would break lineage or automation.
- Localized the key ZASSIMPLE Malay I/AC/D and matrix surfaces and the key ZASSELECTION Malay matrix/recommendation/history surfaces.
- Core decision authority and method logic are unchanged; this release is a presentation-language and discoverability contract.

## [v0.3.8 consistency follow-up] — 2026-10-02

- Fixed remaining Wiki-source inconsistencies after the English-default Full ZASS migration.
- Updated the Bahasa Melayu Wiki summary from Full ZASS v0.3.5 to v0.3.8 and added a direct `ZASS_MY.md` link.
- Updated the Wiki sidebar to expose both `ZASS.md` default English and `ZASS_MY.md` Bahasa Melayu.
- Updated the Architecture & Evidence Wiki display-rule label to Full ZASS v0.3.8.
- Teaching fixtures intentionally pinned to older project-state versions were not changed.

## [v0.3.8 / ZASS SYSTEM v0.1.1] — 2026-10-02

- LOCKED `ZASS.md` as the default **English** Full ZASS method.
- Renamed the Bahasa Melayu Full ZASS authority file to `ZASS_MY.md` and removed `ZASS_EN.md` as a competing English filename.
- LOCKED lightweight Malay-language discovery from the English default: `Versi Bahasa Melayu tersedia: ZASS_MY.md.` Users may continue speaking Bahasa Melayu while using `ZASS.md`, or switch to the Malay method file; no automatic file switch is allowed.
- Harmonized one small language inconsistency: the Malay mobile-use section already warned about Desktop site visibility and committing secrets/tokens; the equivalent safety guidance is now present in English.
- Clarified that `ZASS.md` / `ZASS_MY.md` are method-language entry files while Git-backed project state keeps canonical `ZASS.md`, preserving validator/discovery compatibility; corrected surface metadata to Full ZASS v0.3.8 / ZASS SYSTEM v0.1.1.
- Updated current README, Wiki source, system contracts, roadmap, CR-010 examples, and active implementation references to the new filenames and versions.
- Core decision semantics remain unchanged; this is a language-routing, discoverability, and authority-filename normalization release.

## [v0.3.7] — 2026-10-01

- Bumped Full ZASS to **v0.3.7** so existing Full-ZASS users and AI version checks can detect the new ZASS SYSTEM UI/UX/product-surface alignment.
- Added explicit **ZASS SYSTEM v0.1.0** compatibility metadata to both Full ZASS language files.
- Added a compact system-surface alignment section covering `DECIDE or BUILD?`, ZASSIMPLE-first BUILD routing, progressive disclosure, next-meaningful-action UX, factual SAVE/sync receipts, and one-engine/two-presentations.
- Core Full ZASS decision semantics remain unchanged: human LOCK authority, Evidence Confidence, convergence, Git authority, and architecture confirmation gates are preserved.
- Updated README, Wiki source, Wiki publishing reference, and CR-010 v0.3 source-version examples to the current versions.
## [ZASS SYSTEM v0.1.0] — 2026-10-01

- Established independent **ZASS SYSTEM versioning** so users and AI can detect product-level UI/UX and integration-contract upgrades even when method semantics remain unchanged.
- Released **ZASS SYSTEM v0.1.0** as the first system baseline covering `DECIDE or BUILD?`, Local First-Class Core + AI-SYNC Web, the locked system UI/UX contract, factual SAVE/sync receipts, progressive disclosure, contextual cards, Project Pulse, and one-engine/two-presentations.
- Added the rule that material user-visible system routing, UI/UX, product-surface, integration, escalation, sync, or automation changes must bump the ZASS SYSTEM version.
- Kept Full ZASS v0.3.6, ZASSIMPLE v0.2.4, and ZASSELECTION v0.2.0 unchanged because their method semantics were not changed by this system release.

## [ZASS SYSTEM UI/UX contract] — 2026-10-01

- LOCKED the first-class system split: local ZASS core/CLI remains independently usable while AI-SYNC Web becomes the UX / automation / projection layer over the same authority.
- LOCKED **DECIDE or BUILD?** as the top-level entry, with DECIDE → ZASSELECTION and BUILD → ZASSIMPLE → Full ZASS when needed.
- Promoted ZASSIMPLE UX lessons to system level: DUMP-first workspace, progressive disclosure, compact Project Pulse, contextual Ready-to-Lock / Architecture Forming / Escalation / Current Task / Delivered cards, and one-task-at-a-time execution.
- LOCKED factual SAVE/sync states backed by real Git receipts; AI-SYNC must not claim persistence from generated Markdown alone.
- LOCKED artifact projection: ACTION_PLAN → current focus, ARCHITECTURE → architecture state, TASKS → current task; users need not browse all internal files during normal work.
- LOCKED **one engine, two presentations**: engineering-first local CLI output and human-facing AI-SYNC Web output must reuse the same validator/core semantics rather than duplicate rules.
- LOCKED the primary UX principle: **Present only the next meaningful human action.**
- Reframed current productization priority around local first-class tooling → AI-SYNC automation → product UX; real-world evidence remains useful but is not a current engineering gate.
- Added `docs/ZASS_SYSTEM_UI_UX_CONTRACT.md`; no Full ZASS, ZASSIMPLE, or ZASSELECTION method-version bump was made.

## [ZASSIMPLE v0.2.4 final footer lock] — 2026-10-01

- FINAL LOCKED the fixed footer as `[🔬 ZASS!!] -- [📌 PROCEED/LOCK] -- [📚 SAVE]`.
- The command semantics from v0.2.3 are unchanged; this release finalizes the visual icon set and exact `ZASS!!` label.
- Updated EN/MY templates, working direction, and current-version references. ZASSIMPLE is now v0.2.4.

## [ZASSIMPLE v0.2.3 simplified footer] — 2026-10-01

- LOCKED the fixed footer as `[🧠⚡ ZASS !!] -- [🔐 PROCEED/LOCK] -- [💾 SAVE]`.
- `PROCEED/LOCK` is now the primary surface decision command; legacy `LOCK` / `LOCK DECISION` remain compatibility aliases.
- `SAVE` is now the primary surface persistence command; legacy `COMMIT` remains a compatibility alias.
- `CONFIRM ARCHITECTURE` remains a protected contextual DESIGN-stage gate and no longer occupies the fixed footer.
- Updated EN/MY templates and the locked v0.2 working direction. ZASSIMPLE is now v0.2.3.

## [ZASSIMPLE v0.2.2 UX completion] — 2026-10-01

- LOCKED the true DUMP-first landing: `Got an idea? Dump it.` / `Ada idea? DUMP saja.` before method explanation.
- Stage Pulse now appears on intentional ZASS/ZASS!! **or** a material lifecycle-stage change, without repeating on every ordinary reply.
- Added the lightweight `🔒 Ready to lock` decision card and hid internal lineage IDs from ordinary conversation by default.
- Added progressive `🏗️ Architecture forming` UX with Architecture Progress, counts, and the visible `CONFIRM ARCHITECTURE` action.
- Aligned `CONFIRM ARCHITECTURE` as the primary surface command for the final review; `BUILD ARCHITECTURE` remains a compatibility/advanced alias and final confirmation still requires exact `YA, CONFIRM ARCHITECTURE`.
- Added `DO IT` execution semantics, one-task-at-a-time navigation with `Then`, the compact `📍 DO IT — x/y tasks delivered` pulse, and the verified `✅ DELIVERED !!` closure card.
- LOCKED product identity: **ZASS SYSTEM starts simple** — Default: ZASSIMPLE; deeper reasoning: Full ZASS; choosing: ZASSELECTION.
- Updated EN/MY templates and the locked v0.2 working direction. ZASSIMPLE is now v0.2.2.

## [ZASSIMPLE v0.2.1 footer UX fix] — 2026-10-01

- Fixed the required ZASSIMPLE footer to end with `[🏗️ CONFIRM ARCHITECTURE]` instead of `[🏗️ DRAFT ARCH]`.
- Kept `DRAFT ARCH` as a valid internal command for producing/revising a working architecture draft.
- Updated English/Malay templates and the v0.2 working direction; ZASSIMPLE version is now v0.2.1.

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




