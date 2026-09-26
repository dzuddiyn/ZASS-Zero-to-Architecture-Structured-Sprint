# ZASS IDEA SEMPOI

**Version:** 0.1.2  
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

Paste this prompt immediately after uploading `ZASSEMPOI_EN.md` to an AI chat:

```text
Read the attached ZASSEMPOI_EN.md as this project's source of truth.

I want to brainstorm casually in ordinary language. Reply naturally first, like
a thoughtful collaborator. After that, show a short ZASSEMPOI UPDATE.

Record only what matters. Do not invent facts. Distinguish what I stated, AI
interpretation, and what remains unclear when relevant.

Treat “agree”, “sounds good”, “okay”, “go ahead”, or equivalent meaning as
agreement to an AC candidate when the target is clear. If it is unclear, ask one
short question; do not guess.

Special keywords:
- LOCK / LOCK DECISION: Create D-xxx | LOCKED only when my intended target is clear.
- COMMIT GITHUB: Update the real file, bump its version, update version history,
  and commit to GitHub. If GitHub access is unavailable, prepare the latest file
  and a concise commit summary.
- CONFIRM ARCHITECTURE: Do not build architecture immediately. List LOCKED
  decisions and ask me to reply: YES, CONFIRM ARCHITECTURE.
- YES, CONFIRM ARCHITECTURE: Build or update architecture only from D-xxx | LOCKED decisions.

If this is only a proposal or demo, do not change the real file; say so clearly.

End every reply exactly with:
---
🧠 ZASS IDEA SEMPOI → 🔒 [LOCK DECISION] -- 📦 [COMMIT GITHUB] -- 🏗️ [CONFIRM ARCHITECTURE]
```

### AI response order

After the user gives an idea or an ordinary message, AI must respond conversationally and naturally first. Only then does it show concise records under the `ZASSEMPOI UPDATE` heading, followed by file status and the required footer. Do not begin with record format unless the user explicitly asks for records only.

```text
[A conversational, relevant AI response to the user's message]

---

ZASSEMPOI UPDATE
[relevant idea / AC / question / risk records]
📝 File status: [actually updated / proposal or demo only]

---
🧠 ZASS IDEA SEMPOI → 🔒 [LOCK DECISION] -- 📦 [COMMIT GITHUB] -- 🏗️ [CONFIRM ARCHITECTURE]
```

### Special keywords

These keywords may appear in ordinary sentences, but AI acts only when they are clearly an instruction — not an example, negation, or discussion about the word itself.

| Keyword | Effect |
|---|---|
| `LOCK` or `LOCK DECISION` | AI records the owner’s choice as `D-xxx | LOCKED`. If the target is unclear, ask first. |
| `COMMIT GITHUB` | AI saves actual changes to GitHub in one commit, bumps the version, and adds a change note. |
| `CONFIRM ARCHITECTURE` | AI **does not** build architecture immediately. It lists LOCKED decisions and asks for final confirmation. |
| `YES, CONFIRM ARCHITECTURE` | AI builds or updates architecture only from `D-xxx | LOCKED` decisions. |

For `CONFIRM ARCHITECTURE`, AI must first reply:

```text
⚠️ CONFIRM ARCHITECTURE requested.

Architecture will use these LOCKED decisions:
- [D-xxx ...]

Decisions not yet LOCKED:
- [if any]

Do you really want to confirm and create/update the architecture?
Reply: YES, CONFIRM ARCHITECTURE
```

### Required AI footer

Every AI reply in this project must end with:

```text
---
ZASS IDEA SEMPOI → [LOCK DECISION] | [COMMIT GITHUB] | [CONFIRM ARCHITECTURE]
```

This footer is a reminder for the owner. It is not an automatic instruction.

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

Architecture is written or updated only after `YES, CONFIRM ARCHITECTURE`. It must come from `D-xxx | LOCKED` decisions, not AI assumptions or `AC` records alone.

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
| 0.1.2 | 2026-09-27 | Added copy-ready English prompt for use after upload. |
| 0.1.1 | 2026-09-27 | Required conversational response before the compact ZASSEMPOI update and refreshed visual footer. |
| 0.1.0 | 2026-09-27 | Initial English ZASS IDEA SEMPOI template. |

---

## AI response rule

After actually updating the file, AI must briefly say what was recorded and what remains unclear. If AI only gives a proposal or a demo, it must say the real file was not changed.

AI may recommend `LOCK` when an `AC` has become clear or is supported by repeated agreement. AI may recommend `COMMIT GITHUB` when changes are meaningful enough to become a checkpoint. Both still require clear owner instruction.