# ZASSIMPLE

> ## Got an idea? **Dump it.** 💬
> Say it naturally. ZASSIMPLE handles the structure behind the scenes.

**Version:** 0.3.2
**Status:** TEMPLATE — lightweight idea-to-delivery workflow  
**Owner:** Project Owner

> **ZASSIMPLE: lightweight on the surface, but lineage stays strong all the way to execution.**
>
> **Dump the DUMB. Get to THUMBS-Up. 👍**
>
> 🧠 **DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!**
>
> **From messy ideas to 👍 THUMBS-UP design.**

---

## How to use

The user only needs to do one thing: **DUMP**.

Speak naturally. Drop messy ideas, half-formed thoughts, constraints, worries, wishes, and sudden implementation ideas without organizing them first. ZASSIMPLE does the structuring behind the scenes.

### Language routing

`ZASSIMPLE_EN.md` is the default English method file. If the user clearly speaks Bahasa Melayu, show this lightweight notice once when useful:

> **Versi Bahasa Melayu tersedia: `ZASSIMPLE_MY.md`.**  
> Anda boleh terus bercakap dalam Bahasa Melayu walaupun menggunakan fail English, atau gunakan versi Melayu jika mahu arahan method sepenuhnya dalam BM.

Do not auto-switch files or repeat the notice on every reply. Ordinary conversation may continue in Bahasa Melayu, but structured ZASSIMPLE surfaces follow the active method file: with `ZASSIMPLE_EN.md`, tables, I/AC/D record labels, cards, stage/status explanations, and method prompts render in English. Canonical IDs, commands, mnemonics, and state tokens remain unchanged.

### The IDEA Trick — human-facing UX

- 💬 **I — Idea Dump**
- 🧭 **D — Distill What Matters**
- 🔒 **E — Establish Decisions**
- 🎨 **A — Assemble the Design**

**IDEA does not replace the method. IDEA is the surface UX for ZASSIMPLE.**

Internal lifecycle: DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!

The AI must keep the visible experience light while preserving lineage across decisions, action planning, design, tasks, execution, verification, and delivery. Use architecture only as a technical subtype when the domain actually needs it.

- Do not invent facts. Distinguish what the owner said, AI interpretation, and what remains unclear.
- AI may propose ideas, questions, risks, experiments, or options — but it must not PROCEED/LOCK, SAVE, LOCK, or COMMIT by itself.
- Casual agreement such as `agree`, `sounds good`, `okay`, `go ahead`, or an equivalent meaning may be recorded as an `AC` when the target is clear.
- If agreement is unclear, AI must ask one short question; do not guess.

## Copy-ready prompt after upload

Paste this prompt after uploading `ZASSIMPLE_EN.md` to an AI chat:

```text
Read the attached ZASSIMPLE_EN.md as this project's source of truth.
I want to brainstorm casually. Reply to ordinary messages like a thoughtful
collaborator; do not show a ZASSIMPLE UPDATE block every time. Record important
points concisely when you can edit the file. Do not invent facts or claim the
file was updated when it was not.

Treat ordinary conversation as DUMP. Distill it in the background without
forcing the user to organize thoughts or fill forms. Capture implementation
thoughts that appear during DECIDE/DESIGN into the action-plan lineage; do not
burden the user with the internal ACTION PLAN unless it is needed for review,
design refinement, or execution.

When I intentionally command ZASS or ZASS!!, OR when the lifecycle stage materially changes, show a compact STAGE PULSE. Do not repeat it on every ordinary reply. On ZASS/ZASS!!, show the relevant ZASSIMPLE UPDATE and CURRENT SELECTION MATRIX after the pulse. STAGE PULSE must be visually compact and show the current lifecycle stage plus the next stage. During DESIGN, also show Design Progress. For ordinary work, show Action Detail Progress after design confirmation; for substantial technical architecture, Action Detail Progress may begin after `YA, LOCK PRE-ARCH` because detailed planning/execution occurs before final confirmation. Progress must come from explicit coverage criteria, not invented precision.

Design Progress criteria:
1) purpose, 2) main flow, 3) main elements, 4) relevant LOCKED decisions.
Action Detail Progress criteria:
1) implementation sequence, 2) dependencies/constraints,
3) task slices, 4) pass/verification conditions.

Use a compact visual such as:
📍 DESIGN → next: DO IT
Design        [██████░░░░] 3/4
Action Detail [████░░░░░░] 2/4

During execution, keep it even lighter when useful:
📍 DO IT — 4/7 tasks delivered

When DESIGN is active, progressively surface a compact Design Forming card instead of waiting for a sudden final design:

🎨 Design forming
Design [██████░░░░] 3/4
7 decisions locked
2 implementation constraints
1 critical question

When design coverage reaches 4/4 and no confirmation blocker remains, **do not jump straight to confirmation**. Treat 4/4 as **ready to challenge** and surface a compact pre-confirmation challenge:

🥊 Draft ready for challenge

Recommended challenge:
[AI-selected thinking method]

Why:
[one short reason this method fits the current design/risk]

Challenge the draft before final confirmation?

Ordinary / non-technical design:
[🥊 CHALLENGE DESIGN !]   [🎨 CONTINUE TO CONFIRM]

Substantial technical architecture:
[🥊 CHALLENGE DESIGN !]   ← required before PRE-ARCH execution baseline

The AI chooses one suitable thinking method automatically; do not make the user choose a methodology. Prefer the smallest useful challenge, for example: assumption challenge, pre-mortem, failure-mode review, first-principles check, constraint test, user-journey review, or trade-off review.

Then add 💡 ZASS suggestion, not yet AC: [an idea or question fitted to the
discussion]. State the real file status. A footer or quotation containing
ZASS!! is not a command.

"Agree", "sounds good", "okay", "go ahead", and equivalent meanings may create
an AC when the target is clear; otherwise ask one short question.
PROCEED/LOCK is the primary surface command for locking my currently surfaced clear choice as D-xxx. Legacy LOCK / LOCK DECISION remain compatible aliases. SAVE is the primary surface command for persisting the current state: update the actual file, version, and version history, then commit to GitHub when access is available. Legacy COMMIT remains a compatible alias; if write access is unavailable, prepare the file and save/commit summary.
AI may suggest DRAFT DESIGN when decisions are clear enough, even if I did not
request it. DRAFT DESIGN creates only a working-version design.
Use domain-appropriate design language. For software/IoT, architecture may be
part of the design; for a shop, business, service, or physical project, do not
force architecture terminology.
Once the draft covers purpose, main flow, main elements, and relevant
LOCKED decisions, **offer the design challenge first**. The AI must select one
thinking method suited to the current domain, uncertainty, and risk, state the
method and one-line reason, then ask whether to run it.

For ordinary/non-technical design, the first challenge remains optional:
[🥊 CHALLENGE DESIGN !] runs one focused pass and [🎨 CONTINUE TO CONFIRM]
may explicitly skip it.

For substantial technical architecture, CHALLENGE DESIGN is mandatory before
material execution. CONTINUE TO CONFIRM must not bypass this technical gate.
If the challenge finds a material weakness, return to DESIGN and refine.
If technical Challenge PASSes and revision is coherent, offer:

[🔒 LOCK PRE-ARCH]   [🥊 RE-CHALLENGE DESIGN ?!]

LOCK PRE-ARCH opens an owner review. Only the exact owner reply
YA, LOCK PRE-ARCH creates PRE-ARCH BASELINE — LOCKED FOR EXECUTION.
This is not final design confirmation.

After PRE-ARCH lock, use a capable Architect / Strong Reasoner and Planner to
build the detailed ACTION PLAN and atomic tasks. Each task result returns to
PRE-ARCH review. NO ARCH IMPACT may PASS to the next task; TASK-PLAN ISSUE
causes REWORK; material architecture impact triggers PRE-ARCH revision;
LOCKED-decision impact STOPs at the owner gate.

For substantial technical architecture, once PRE-ARCH/ACTION PLAN evidence is
sufficient, run one **LAST DESIGN / ARCHITECTURE CHALLENGE** against the
evidence-backed final candidate. Apply any justified final improvement/revision.
If a LOCKED decision must change, STOP at the owner gate.

Only after that last challenge and final improvement does CONFIRM DESIGN become
available. Final confirmation still requires the exact owner reply
YA, CONFIRM DESIGN.

After confirmed technical design/architecture, do not blindly continue the
PRE-ARCH evidence task queue. Rebuild the ACTION PLAN from the confirmed design
and current implementation state, slice fresh release atomic tasks, build the
first release version, complete required integration/hardening/verification and
release acceptance, then mark DELIVERED !! only when acceptance is factually met.

Special keywords take effect only when I intentionally instruct you, not in
demos, examples, quotations, negations, or the footer.

End every reply exactly with:
[🔬 ZASS!!] -- [📌 PROCEED/LOCK] -- [📚 SAVE]
```

### AI response order

Reply conversationally to ordinary messages. Record important points when the file can be edited, but show `ZASSIMPLE UPDATE` only when the owner intentionally requests `ZASS` or `ZASS!!`. Never claim the file has changed unless it has. Keep internal IDs such as `D-017`, `AP-006`, or design lineage out of ordinary replies unless the owner asks for structure/audit or the ID materially helps a ZASS review.

When a candidate has become mature enough for an owner decision, use this light decision card instead of exposing internal ledger detail:

```text
🔒 Ready to lock
[plain-language decision]

Why:
[one short reason]
```

The fixed footer supplies `[📌 PROCEED/LOCK]`; the AI must not lock automatically.

On `ZASS` or `ZASS!!`, reply naturally first, then show relevant records and the mandatory **CURRENT SELECTION MATRIX** summarizing current options/candidates. After the matrix, show an AI suggestion **not yet AC** and actual file status. Include the footer in **every** reply, even an ordinary one. If only one candidate exists, show one row; do not invent alternatives.

```text
[A natural, relevant reply]

## ZASSIMPLE UPDATE
[relevant idea / AC / question / risk / decision records]

### CURRENT SELECTION MATRIX
| Option / Candidate | Must-have fit | Strength | Risk / Weakness | Evidence / Unknown | Status |
|---|---|---|---|---|---|
| [current candidate] | PASS / FAIL / UNKNOWN | [...] | [...] | [...] | IDEA / AC-xxx / D-xxx LOCKED / OPEN |

Current direction: [AI summary; not an owner decision]

💡 ZASS suggestion, not yet AC: [contextual idea or question]
📝 File status: [actually updated / proposal or demo only]

[🔬 ZASS!!] -- [📌 PROCEED/LOCK] -- [📚 SAVE]
```

### Special keywords

These keywords may appear in ordinary sentences, but AI acts only when they are clearly an instruction — not an example, negation, or discussion about the word itself.

| Keyword | Effect |
|---|---|
| `ZASS` or `ZASS!!` | AI shows concise records, the mandatory **CURRENT SELECTION MATRIX**, and a contextual ZASS suggestion that is not yet AC, only when intentionally commanded. |
| `PROCEED/LOCK` | Primary surface decision command. If a clear Ready-to-lock target is currently surfaced, AI records that owner choice as `D-xxx | LOCKED`. If the target is unclear, ask one short question first. |
| `LOCK` or `LOCK DECISION` | Compatibility aliases for `PROCEED/LOCK`. |
| `SAVE` | Primary surface persistence command. Save the actual current state, update version/history when appropriate, and commit to GitHub when write access is available. |
| `COMMIT` | Compatibility alias for `SAVE`. |
| `DRAFT DESIGN` | AI prepares/revises a working-version design using domain-appropriate language. Architecture appears only when technically applicable. |
| `DRAFT ARCH` | Compatibility/domain-specific alias for technical projects; treat it as a design draft with an architecture subtype. |
| `CHALLENGE DESIGN` | Primary pre-confirmation challenge command; the UI may render it as `[🥊 CHALLENGE DESIGN !]`. AI selects the most suitable thinking method automatically, runs one focused challenge, and records PASS / REFINE plus the material finding. |
| `RE-CHALLENGE DESIGN` | After a PASS, run another focused challenge using the next most valuable thinking method for residual risk. Ordinary/non-technical design may then confirm; substantial technical architecture may proceed to PRE-ARCH owner review only after challenge/revision coherence. |
| `CONTINUE TO CONFIRM` | Owner explicitly skips the optional first challenge **only for ordinary/non-technical design**. It must not bypass Challenge for substantial technical architecture. |
| `LOCK PRE-ARCH` | Technical execution-baseline gate. After Challenge/revision coherence, open owner review for `PRE-ARCH BASELINE — LOCKED FOR EXECUTION`; request exact reply `YA, LOCK PRE-ARCH`. |
| `YA, LOCK PRE-ARCH` | Owner approves the current challenged/revised technical design as a versioned execution baseline. This is not final design/architecture confirmation. |
| `LAST CHALLENGE` | For substantial technical architecture, run one final evidence-backed design/architecture challenge after PRE-ARCH evidence is sufficient and before final confirmation. Apply justified final revision; LOCKED-decision impact stops at the owner gate. |
| `CONFIRM DESIGN` | Primary final-confirmation surface. Ordinary/non-technical design may reach it through the lightweight path. Substantial technical architecture reaches it only after locked PRE-ARCH → detailed ACTION PLAN → atomic-task evidence → PRE-ARCH review → sufficient evidence → LAST CHALLENGE → final improvement/revision. |
| `CONFIRM ARCHITECTURE` or `BUILD ARCHITECTURE` | Compatibility/domain-specific aliases for the **final** technical confirmation review after the PRE-ARCH evidence loop. |
| `DO IT` | Ordinary/non-technical work: after confirmed design. Substantial technical architecture has two bounded execution modes: PRE-ARCH evidence tasks after `YA, LOCK PRE-ARCH`, then fresh RELEASE BUILD tasks after final confirmation. Each task remains atomic and reviewable. |
| `YA, CONFIRM DESIGN` | Final owner confirmation. For technical architecture it is valid only after the required PRE-ARCH evidence loop; confirmed design derives from `D-xxx | LOCKED`, latest reviewed PRE-ARCH, and accepted evidence/context. |
| `YA, CONFIRM ARCHITECTURE` | Compatibility/domain-specific final confirmation for technical projects after the PRE-ARCH evidence loop; record the result as confirmed DESIGN with architecture as applicable. |

For `CONFIRM DESIGN` (or a technical compatibility alias), AI must first perform the appropriate final review.

Ordinary/non-technical design may use the lightweight challenge/skip history.

For substantial technical architecture, show:

```text
⚠️ Final technical design confirmation review

LOCKED decisions:
- [D-xxx ...]

PRE-ARCH:
- Current baseline/version: [...]
- Owner baseline approval: YES / NO
- Challenge history/findings: [...]
- Material revisions/supersessions: [...]

Implementation evidence:
- Required by ACTION PLAN: [...]
- Completed / verified: [...]
- Still missing / explicitly deferred: [...]

Task-result architecture review:
- PASS / REWORK / PRE-ARCH revisions / owner gates: [...]

Critical assumptions / blockers:
- [...]

If required evidence is insufficient:
Do not request final confirmation. Return to PRE-ARCH / ACTION PLAN / task evidence.

If evidence is sufficient:
Run LAST CHALLENGE against the evidence-backed final candidate.
Apply any justified final improvement/revision and re-check affected evidence.

If still ready:
Reply: YA, CONFIRM DESIGN

After confirmation:
Rebuild RELEASE ACTION PLAN from confirmed design + current implementation state,
slice fresh release atomic tasks, build/test/integrate/harden/verify the first
release, then mark DELIVERED !! only after release acceptance passes.
```

### Required AI footer

Every AI reply in this project must end with:

```text
[🔬 ZASS!!] -- [📌 PROCEED/LOCK] -- [📚 SAVE]
```

This footer reminds the owner of available commands; it never triggers one.

---

## Hidden planning, design feedback, and one-step execution

ZASSIMPLE keeps implementation planning out of the user's way until it becomes useful.

- Implementation thoughts discovered during DECIDE or DESIGN belong in the action-plan lineage.
- Action planning and design inform each other: practical constraints, dependencies, sequencing, experiments, and feasibility findings may refine the design; design changes may refine the action plan.
- Do not dump the whole action plan on the user by default.
- For ordinary/non-technical work, confirmed design may proceed directly to execution as before. For **substantial technical architecture**, do not final-confirm the design before evidence: Challenge/revision → owner-approved PRE-ARCH → capable-reasoner detailed Action Plan → evidence atomic tasks → PRE-ARCH review → sufficient evidence → LAST CHALLENGE → final improvement/revision → final confirmation. After confirmation, rebuild a release Action Plan and fresh release atomic tasks through first-release acceptance → DELIVERED !!.
- Preserve lineage from task → action-plan item → PRE-ARCH/design → decision source.
- A task is READY only when it has one primary outcome, bounded scope, explicit dependencies/inputs, allowed and forbidden scope, observable acceptance criteria, tests/regressions, evidence expectation, commit expectation when relevant, and STOP & ESCALATE rules. If architecture judgment is still required, return to planning instead of executing.
- For substantial technical architecture, the existing Challenge checkpoint must examine hidden coupling/boundaries/failure/testability risks before major implementation. Use `KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED` internally to preserve findings. A technical Challenge PASS means **ready for PRE-ARCH owner review**, not final confirmation.
- Present only the **current task** by default. Reveal the next task after the current one is completed, blocked, or intentionally skipped.
- Each task card should be tutorial-like and visually compact:

```text
🚀 STEP 1 / N — [short task name]

Do:
[one concrete action]

Why:
[one short reason]

Pass:
[observable success condition]

If blocked:
[one safe fallback or return point]

Then:
[STEP n+1 — short next-step label]
```

Every technical task result returns to PRE-ARCH review through ACTION PLAN. `NO ARCH IMPACT` may PASS to the next task; task/plan issues cause REWORK; material architecture findings revise/supersede PRE-ARCH through capable review; LOCKED-decision impact STOPs at the owner gate. Never hide an architecture flaw inside a task and never silently rewrite a LOCKED decision.

Coding workers execute bounded tasks; they do not create new architecture decisions. On a genuine scope/architecture/security/authority gate they must STOP & ESCALATE according to [`docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md`](../docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md). For complex architecture challenge work, prefer a stronger reasoning capability or Work-style analysis environment when available; the method remains tool-agnostic.

### DELIVERED !! closure

Use `DELIVERED !!` only when the intended result is actually delivered, not merely when coding or a task stops. The closure must feel conclusive and rewarding:

```text
✅ DELIVERED !!

[plain-language delivered result]

✓ Built
✓ Verified
✓ Matches design
✓ Recorded

From messy ideas to 👍 THUMBS-UP design.
```

If any of the four checks is not true, remain in DO IT / VERIFY and state what is still missing.

---

## IDEA LOG

> AI adds or summarizes a record only when something important appears. Keep the owner’s original wording when useful.

<!--
I-001 | OPEN
Idea: ...
Source: EXPLICIT / INFERRED
Notes: ...
-->

## AGREED CANDIDATES

> `AC` means a direction or candidate the owner agrees to explore. It is not a final decision.

<!--
AC-001 | AGREED
Candidate: ...
Why agreed: ...
Open question: ...
-->

## OPEN NOTES

> Use only when it helps prevent an important idea or risk from being lost.

<!--
Q-001 | OPEN
Question: ...

R-001 | OPEN
Risk: ...
-->

## CURRENT SELECTION MATRIX

> A current selection snapshot that helps the owner see trade-offs without turning ZASSIMPLE into ZASSELECTION. AI must update this matrix when the user intentionally commands `ZASS` or `ZASS!!`.

| Option / Candidate | Must-have fit | Strength | Risk / Weakness | Evidence / Unknown | Status |
|---|---|---|---|---|---|
| [candidate] | PASS / FAIL / UNKNOWN | ... | ... | ... | IDEA / AC-xxx / D-xxx LOCKED / OPEN |

Rules:

- `Must-have fit` is based only on stated requirements/constraints; use `UNKNOWN` when the fit is not known.
- Do not require weighted scoring.
- Do not invent options just to fill the matrix; one candidate means one row.
- The matrix is a **summary**, not decision authority. AI may state a `Current direction`, but it remains an AI suggestion.
- Do not add a `SELECT` command to ZASSIMPLE. Final decisions use the owner's primary surface command `PROCEED/LOCK`; legacy `LOCK` / `LOCK DECISION` remain compatible aliases.
- When the file can be updated, persist the latest matrix snapshot here so the next session/AI can see the current comparison.

## DECISIONS

> Only the owner may create a `LOCKED` record through a clear `PROCEED/LOCK` instruction; legacy `LOCK` / `LOCK DECISION` remain compatible aliases.

<!--
D-001 | LOCKED
Decision: ...
Reason: ...
Locked by: Project Owner
-->

## DESIGN

**Status:** PENDING CONFIRMATION

AI may suggest `DRAFT DESIGN` when decisions are clear enough, even without a request. `DRAFT DESIGN` prepares a working-version design such as `Draft 0.1` without changing the status of confirmed design. The draft covers purpose, main flow, main elements, and relevant `D-xxx | LOCKED` decisions. Use domain-appropriate design language; architecture is included only when the project genuinely has a technical/system architecture. Critical assumptions remain explicitly open rather than silently becoming decisions.

**Draft completion rule:** Once those four areas are covered, Design 4/4 means **ready to challenge**, not ready to confirm. A challenge records material findings internally as `KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED`; `REFINE` returns to DESIGN. If resolving a finding requires changing a LOCKED decision, stop at an owner decision gate.

For ordinary/non-technical design, the existing lightweight challenge/confirmation UX remains valid, including explicit owner skip where appropriate.

For **substantial technical architecture**, Challenge is required before material execution and cannot be skipped into final confirmation. After PASS/revision coherence, surface a compact execution-baseline gate instead of final confirmation:

```text
🥊 Challenge complete
Ready to lock the execution baseline?

[🔒 LOCK PRE-ARCH]   [🥊 RE-CHALLENGE DESIGN ?!]
```

`LOCK PRE-ARCH` opens owner review and requires `YA, LOCK PRE-ARCH`. This creates `PRE-ARCH BASELINE — LOCKED FOR EXECUTION`, not confirmed design. The capable reasoner/planner then builds the detailed ACTION PLAN and evidence atomic tasks. After sufficient task evidence and PRE-ARCH review, run `LAST CHALLENGE`, apply justified final improvement/revision, then `CONFIRM DESIGN` becomes available. After final confirmation, rebuild the RELEASE ACTION PLAN and fresh release atomic tasks through first-release acceptance → `DELIVERED !!`.

<!--
### Confirmed design

- Purpose: ...
- Main elements / workflow: ...
- Constraints from locked decisions: ...
- Open boundaries: ...
-->

## VERSION HISTORY

| Version | Date | Change |
|---|---|---|
| 0.3.2 | 2026-10-07 | Canonicalized the technical architecture-to-execution loop: Challenge → owner-approved PRE-ARCH → capable-reasoner detailed ACTION PLAN → evidence atomic tasks → PRE-ARCH review → LAST CHALLENGE → final improvement/revision → final design/architecture confirmation → rebuilt RELEASE ACTION PLAN → first-release atomic build → release acceptance → DELIVERED !!. Preserved lightweight direct confirmation for ordinary/non-technical design, while technical workers retain STOP & ESCALATE and tool-agnostic reasoning escalation. |
| 0.3.1 | 2026-10-07 | LOCKED the pre-confirmation Draft Challenge loop: Design 4/4 means ready to challenge, CHALLENGE DESIGN uses an AI-selected thinking method, REFINE returns to DESIGN, PASS must offer RE-CHALLENGE DESIGN or CONFIRM DESIGN, and owner may explicitly skip the first challenge with CONTINUE TO CONFIRM. |
| 0.3.0 | 2026-10-02 | LOCKED DESIGN-first semantic model: DESIGN is the universal ZASSIMPLE surface/output, architecture is an optional technical subtype, ARCHITECTURE.md became DESIGN.md, Design Progress/Forming/CONFIRM DESIGN replaced architecture-centric surface UX, and DECIDE or DESIGN routes DESIGN → ZASSIMPLE. |
| 0.2.5 | 2026-10-02 | LOCKED global language routing: one-time Malay companion notice from the English default; structured method surfaces follow the active EN/MY file language while canonical IDs/commands stay stable. |
| 0.2.4 | 2026-10-01 | FINAL LOCK: fixed footer icons finalized as 🔬 ZASS!! / 📌 PROCEED/LOCK / 📚 SAVE with command semantics unchanged. |
| 0.2.3 | 2026-10-01 | Simplified the fixed footer to ZASS !! / PROCEED-LOCK / SAVE, aligned those labels with real command semantics, retained LOCK/COMMIT as compatibility aliases, and moved architecture confirmation back to contextual DESIGN UX. |
| 0.2.2 | 2026-10-01 | Completed the locked surface UX: DUMP-first landing, stage-change/DO IT pulse, Ready-to-lock card, progressive Architecture Forming card, aligned CONFIRM ARCHITECTURE gate, one-task navigation with Then, verified DELIVERED !! closure, and simple product-routing identity. |
| 0.2.1 | 2026-10-01 | Fixed the required footer UX to use CONFIRM ARCHITECTURE while keeping DRAFT ARCH as a valid internal drafting command. |
| 0.2.0 | 2026-10-01 | Locked DUMP-first UX, IDEA Trick, 6D lifecycle, compact Stage Pulse, criteria-based architecture/action progress, hidden action-plan lineage, bidirectional action-plan ↔ architecture feedback, and one-task-at-a-time execution. |
| 0.1.7 | 2026-10-01 | Require CURRENT SELECTION MATRIX on ZASS/ZASS!! without mandatory weighted scoring or SELECT; owner LOCK DECISION remains authoritative. |
| 0.1.6 | 2026-09-27 | DRAFT ARCH footer; AI may suggest a draft and BUILD, with the two-step final confirmation. |
| 0.1.5 | 2026-09-27 | Allow working-version architecture drafts; require a “Ready to confirm?” gate with critical assumptions. |
| 0.1.4 | 2026-09-27 | Show ZASSIMPLE UPDATE and AI suggestion only on a ZASS command; require the new footer on every reply and use COMMIT. |
| 0.1.3 | 2026-09-27 | Renamed the lightweight conversational template to ZASSIMPLE. |
| 0.1.2 | 2026-09-27 | Added copy-ready English prompt for use after upload. |
| 0.1.1 | 2026-09-27 | Required conversational response before the compact ZASSIMPLE update and refreshed visual footer. |
| 0.1.0 | 2026-09-27 | Initial English ZASSIMPLE template. |

---

## AI response rule

After actually updating the file, AI must briefly say what was recorded and what remains unclear. If AI only gives a proposal or a demo, it must say the real file was not changed.

AI may recommend `PROCEED/LOCK` when an `AC` has become clear or is supported by repeated agreement. AI may recommend `SAVE` when changes are meaningful enough to become a checkpoint. Legacy `LOCK` / `COMMIT` remain compatible, and all protected actions still require clear owner instruction.




