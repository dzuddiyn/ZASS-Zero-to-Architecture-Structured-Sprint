# ZASSIMPLE

**Version:** 0.1.6  
**Status:** TEMPLATE — architecture not yet confirmed  
**Owner:** Project Owner

> Think casually. Record what matters. Agreement becomes a candidate. Lock becomes a decision. Architecture only appears when confirmed.

---

## How to use

Attach this file to an AI and speak normally. The AI must document important things concisely without forcing a long form.

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

When I intentionally command ZASS or ZASS!!, show the relevant ZASSIMPLE
UPDATE (ideas, ACs, questions, risks, or decisions). Then add:
💡 ZASS suggestion, not yet AC: [an idea or question fitted to the discussion].
State the real file status. A footer or quotation containing ZASS!! is not
a command.

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
[🧠 ZASS !!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ DRAFT ARCH]
```

### AI response order

Reply conversationally to ordinary messages. Record important points when the file can be edited, but show `ZASSIMPLE UPDATE` only when the owner intentionally requests `ZASS` or `ZASS!!`. Never claim the file has changed unless it has.

On `ZASS` or `ZASS!!`, reply naturally first, then show relevant records, an AI suggestion **not yet AC**, and actual file status. Include the footer in **every** reply, even an ordinary one.

```text
[A natural, relevant reply]

## ZASSIMPLE UPDATE
[relevant idea / AC / question / risk / decision records]
💡 ZASS suggestion, not yet AC: [contextual idea or question]
📝 File status: [actually updated / proposal or demo only]

[🧠 ZASS !!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ DRAFT ARCH]
```

### Special keywords

These keywords may appear in ordinary sentences, but AI acts only when they are clearly an instruction — not an example, negation, or discussion about the word itself.

| Keyword | Effect |
|---|---|
| `ZASS` or `ZASS!!` | AI shows concise records and a contextual ZASS suggestion that is not yet AC, only when intentionally commanded. |
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
[🧠 ZASS !!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ DRAFT ARCH]
```

This footer reminds the owner of available commands; it never triggers one.

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
