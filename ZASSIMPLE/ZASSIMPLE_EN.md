# ZASSIMPLE

**Version:** 0.2.1  
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
- AI may propose ideas, questions, risks, experiments, or options — but it must not LOCK or COMMIT by itself.
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

When I intentionally command ZASS or ZASS!!, show a compact STAGE PULSE first,
then the relevant ZASSIMPLE UPDATE and CURRENT SELECTION MATRIX. STAGE PULSE
must be visually compact and show the current lifecycle stage plus the next
stage. During DESIGN, also show Architecture Progress. Once architecture is
confirmed, show Action Detail Progress. Progress must come from explicit
coverage criteria, not invented precision.

Architecture Progress criteria:
1) purpose, 2) main flow, 3) main components, 4) relevant LOCKED decisions.
Action Detail Progress criteria:
1) implementation sequence, 2) dependencies/constraints,
3) task slices, 4) pass/verification conditions.

Use a compact visual such as:
📍 DESIGN → next: DO IT
Architecture  [██████░░░░] 3/4
Action Detail [████░░░░░░] 2/4

Then add 💡 ZASS suggestion, not yet AC: [an idea or question fitted to the
discussion]. State the real file status. A footer or quotation containing
ZASS!! is not a command.

"Agree", "sounds good", "okay", "go ahead", and equivalent meanings may create
an AC when the target is clear; otherwise ask one short question.
LOCK / LOCK DECISION locks my clear choice as D-xxx. COMMIT updates the actual
file, version, and version history, then commits to GitHub; if access is
unavailable, prepare the file and commit summary.
AI may suggest DRAFT ARCH when decisions are clear enough, even if I did not
request it. DRAFT ARCH creates only a working-version draft.
Once the draft covers purpose, main flow, main components, and relevant
LOCKED decisions, suggest “Ready to BUILD ARCHITECTURE?” with remaining
critical assumptions. BUILD ARCHITECTURE lists D-xxx | LOCKED and asks for
final confirmation; confirm architecture only after YA, CONFIRM ARCHITECTURE.

Special keywords take effect only when I intentionally instruct you, not in
demos, examples, quotations, negations, or the footer.

End every reply exactly with:
[🧠 ZASS !!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ CONFIRM ARCHITECTURE]
```

### AI response order

Reply conversationally to ordinary messages. Record important points when the file can be edited, but show `ZASSIMPLE UPDATE` only when the owner intentionally requests `ZASS` or `ZASS!!`. Never claim the file has changed unless it has.

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

[🧠 ZASS !!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ CONFIRM ARCHITECTURE]
```

### Special keywords

These keywords may appear in ordinary sentences, but AI acts only when they are clearly an instruction — not an example, negation, or discussion about the word itself.

| Keyword | Effect |
|---|---|
| `ZASS` or `ZASS!!` | AI shows concise records, the mandatory **CURRENT SELECTION MATRIX**, and a contextual ZASS suggestion that is not yet AC, only when intentionally commanded. |
| `LOCK` or `LOCK DECISION` | AI records the owner’s choice as `D-xxx | LOCKED`. If the target is unclear, ask first. |
| `COMMIT` | AI saves actual changes to GitHub in one commit, bumps the version, and adds a change note. |
| `DRAFT ARCH` | AI prepares/revises a working-version draft; it may suggest this when decisions are clear enough without confirming it. |
| `BUILD ARCHITECTURE` | AI reviews the draft and LOCKED decisions, then asks for final confirmation; it does not build immediately. |
| `YA, CONFIRM ARCHITECTURE` | AI builds or updates architecture only from `D-xxx | LOCKED` decisions. |

For `BUILD ARCHITECTURE`, AI must first reply:

```text
⚠️ BUILD ARCHITECTURE requested. Confirmation review:

Architecture will use these LOCKED decisions:
- [D-xxx ...]

Critical assumptions and decisions not yet LOCKED:
- [if any]

Do you really want to confirm and create/update the architecture?
Reply: YA, CONFIRM ARCHITECTURE
```

### Required AI footer

Every AI reply in this project must end with:

```text
[🧠 ZASS !!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ CONFIRM ARCHITECTURE]
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
```

Execution discoveries that materially affect the design must feed back into DESIGN. Never silently rewrite a LOCKED decision.

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
- Do not add a `SELECT` command to ZASSIMPLE. Final decisions still require the owner's `LOCK` / `LOCK DECISION`.
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

**Draft completion rule:** Once those four areas are covered, AI must present **“Ready to BUILD ARCHITECTURE?”** together with any remaining critical assumptions. The owner may request a specific revision or start the `BUILD ARCHITECTURE` gate. Architecture becomes confirmed only after `YA, CONFIRM ARCHITECTURE`; it must derive from `D-xxx | LOCKED` decisions, not AI assumptions or `AC` records alone.

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

AI may recommend `LOCK` when an `AC` has become clear or is supported by repeated agreement. AI may recommend `COMMIT` when changes are meaningful enough to become a checkpoint. Both still require clear owner instruction.

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]