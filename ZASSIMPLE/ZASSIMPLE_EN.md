# ZASSIMPLE

> ## Got an idea? **Dump it.** 💬
> Say it naturally. ZASSIMPLE handles the structure behind the scenes.

**Version:** 0.2.4  
**Status:** TEMPLATE — lightweight idea-to-delivery workflow  
**Owner:** Project Owner

> **ZASSIMPLE: lightweight on the surface, but lineage stays strong all the way to execution.**
>
> **Dump the DUMB. Get to THUMBS-Up. 👍**
>
> 🧠 **DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!**
>
> **From messy ideas to 👍 THUMBS-UP architecture.**

---

## How to use

The user only needs to do one thing: **DUMP**.

Speak naturally. Drop messy ideas, half-formed thoughts, constraints, worries, wishes, and sudden implementation ideas without organizing them first. ZASSIMPLE does the structuring behind the scenes.

### The IDEA Trick — human-facing UX

- 💬 **I — Idea Dump**
- 🧭 **D — Distill What Matters**
- 🔒 **E — Establish Decisions**
- 🏗️ **A — Architecture**

**IDEA does not replace the method. IDEA is the surface UX for ZASSIMPLE.**

Internal lifecycle: DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!

The AI must keep the visible experience light while preserving lineage across decisions, action planning, architecture, tasks, execution, verification, and delivery.

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
architecture refinement, or execution.

When I intentionally command ZASS or ZASS!!, OR when the lifecycle stage materially changes, show a compact STAGE PULSE. Do not repeat it on every ordinary reply. On ZASS/ZASS!!, show the relevant ZASSIMPLE UPDATE and CURRENT SELECTION MATRIX after the pulse. STAGE PULSE must be visually compact and show the current lifecycle stage plus the next stage. During DESIGN, also show Architecture Progress. Once architecture is confirmed, show Action Detail Progress. Progress must come from explicit coverage criteria, not invented precision.

Architecture Progress criteria:
1) purpose, 2) main flow, 3) main components, 4) relevant LOCKED decisions.
Action Detail Progress criteria:
1) implementation sequence, 2) dependencies/constraints,
3) task slices, 4) pass/verification conditions.

Use a compact visual such as:
📍 DESIGN → next: DO IT
Architecture  [██████░░░░] 3/4
Action Detail [████░░░░░░] 2/4

During execution, keep it even lighter when useful:
📍 DO IT — 4/7 tasks delivered

When DESIGN is active, progressively surface a compact Architecture Forming card instead of waiting for a sudden final architecture:

🏗️ Architecture forming
Architecture [██████░░░░] 3/4
7 decisions locked
2 implementation constraints
1 critical question

When architecture coverage reaches 4/4 and no confirmation blocker remains, ask:
Ready to build architecture?
[🏗️ CONFIRM ARCHITECTURE]

Then add 💡 ZASS suggestion, not yet AC: [an idea or question fitted to the
discussion]. State the real file status. A footer or quotation containing
ZASS!! is not a command.

"Agree", "sounds good", "okay", "go ahead", and equivalent meanings may create
an AC when the target is clear; otherwise ask one short question.
PROCEED/LOCK is the primary surface command for locking my currently surfaced clear choice as D-xxx. Legacy LOCK / LOCK DECISION remain compatible aliases. SAVE is the primary surface command for persisting the current state: update the actual file, version, and version history, then commit to GitHub when access is available. Legacy COMMIT remains a compatible alias; if write access is unavailable, prepare the file and save/commit summary.
AI may suggest DRAFT ARCH when decisions are clear enough, even if I did not
request it. DRAFT ARCH creates only a working-version draft.
Once the draft covers purpose, main flow, main components, and relevant
LOCKED decisions, ask “Ready to build architecture?” and surface
[🏗️ CONFIRM ARCHITECTURE]. CONFIRM ARCHITECTURE opens the final confirmation
review: show relevant LOCKED decisions, critical assumptions, and blockers.
It does not confirm automatically. Confirm architecture only after the owner
replies exactly YA, CONFIRM ARCHITECTURE.

Special keywords take effect only when I intentionally instruct you, not in
demos, examples, quotations, negations, or the footer.

End every reply exactly with:
[🔬 ZASS!!] -- [📌 PROCEED/LOCK] -- [📚 SAVE]
```

### AI response order

Reply conversationally to ordinary messages. Record important points when the file can be edited, but show `ZASSIMPLE UPDATE` only when the owner intentionally requests `ZASS` or `ZASS!!`. Never claim the file has changed unless it has. Keep internal IDs such as `D-017`, `AP-006`, or architecture lineage out of ordinary replies unless the owner asks for structure/audit or the ID materially helps a ZASS review.

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
| `DRAFT ARCH` | AI prepares/revises a working-version draft; it may suggest this when decisions are clear enough without confirming it. |
| `CONFIRM ARCHITECTURE` | Primary surface command. AI opens the final confirmation review; it does not confirm automatically. If blockers remain, stay in DESIGN. If ready, request the exact reply `YA, CONFIRM ARCHITECTURE`. |
| `BUILD ARCHITECTURE` | Compatibility/advanced alias for the same confirmation review as `CONFIRM ARCHITECTURE`; do not surface it as the primary footer button. |
| `DO IT` | After architecture is confirmed, re-plan from the latest state, slice the Action Plan, and present/resume only the current executable task. |
| `YA, CONFIRM ARCHITECTURE` | Final owner confirmation. AI builds or updates confirmed architecture only from `D-xxx | LOCKED` decisions and accepted context. |

For `CONFIRM ARCHITECTURE` (or legacy `BUILD ARCHITECTURE`), AI must first reply:

```text
⚠️ Architecture confirmation review

Architecture will use these LOCKED decisions:
- [D-xxx ...]

Critical assumptions / blockers:
- [if any]

Architecture Progress: [x/4]

If blockers remain:
Stay in DESIGN and state the next thing needed.

If ready:
Reply: YA, CONFIRM ARCHITECTURE
```

### Required AI footer

Every AI reply in this project must end with:

```text
[🔬 ZASS!!] -- [📌 PROCEED/LOCK] -- [📚 SAVE]
```

This footer reminds the owner of available commands; it never triggers one.

---

## Hidden planning, architecture feedback, and one-step execution

ZASSIMPLE keeps implementation planning out of the user's way until it becomes useful.

- Implementation thoughts discovered during DECIDE or DESIGN belong in the action-plan lineage.
- Action planning and architecture inform each other: practical constraints, dependencies, sequencing, experiments, and feasibility findings may refine the architecture; architecture changes may refine the action plan.
- Do not dump the whole action plan on the user by default.
- Once architecture is confirmed, re-plan from the latest confirmed state, slice the action plan into executable tasks, and preserve lineage from task → action-plan item → decision/architecture source.
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

Execution discoveries that materially affect the design must feed back into DESIGN. Never silently rewrite a LOCKED decision.

### DELIVERED !! closure

Use `DELIVERED !!` only when the intended result is actually delivered, not merely when coding or a task stops. The closure must feel conclusive and rewarding:

```text
✅ DELIVERED !!

[plain-language delivered result]

✓ Built
✓ Verified
✓ Matches architecture
✓ Recorded

From messy ideas to 👍 THUMBS-UP architecture.
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

> Only the owner may create a `LOCKED` record through a clear `LOCK` keyword.

<!--
D-001 | LOCKED
Decision: ...
Reason: ...
Locked by: Project Owner
-->

## ARCHITECTURE

**Status:** PENDING CONFIRMATION

AI may suggest `DRAFT ARCH` when decisions are clear enough, even without a request. `DRAFT ARCH` prepares a working-version architecture draft such as `Draft 0.1` without changing the status of confirmed architecture. The draft covers purpose, main flow, main components, and relevant `D-xxx | LOCKED` decisions. Critical assumptions remain explicitly open rather than silently becoming decisions.

**Draft completion rule:** Once those four areas are covered, AI must present **“Ready to build architecture?”** together with any remaining critical assumptions and surface `[🏗️ CONFIRM ARCHITECTURE]`. That command opens the confirmation review; it does not confirm automatically. Architecture becomes confirmed only after `YA, CONFIRM ARCHITECTURE`; it must derive from `D-xxx | LOCKED` decisions, not AI assumptions or `AC` records alone.

<!--
### Confirmed architecture

- Purpose: ...
- Components / workflow: ...
- Constraints from locked decisions: ...
- Open boundaries: ...
-->

## VERSION HISTORY

| Version | Date | Change |
|---|---|---|
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

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]