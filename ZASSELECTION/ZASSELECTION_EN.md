# ZASSELECTION — Zero-to-Answer Structured Selection

**Version:** 0.2.3  
**Status:** UX FLOW LOCKED — DEFAULT METHOD  
**Owner:** User / Decision Owner  
**Locked date:** 2026-10-07

> **AI compares. You decide, AI saves.**

ZASSELECTION is an AI-assisted selection method for comparing options, continuously updating a Selection Matrix, giving a concise AI recommendation, and preserving the user's final choice.

Core principle:

> **AI compares. AI recommends. You decide. AI records.**

Surface complexity stays low. Parsing, versioning, event logs, sync, and persistence belong behind the user path.

---

## 1. One method file

English is the default ZASSELECTION method.

For normal English use, the user only needs:

```text
ZASSELECTION_EN.md
```

The Malay companion is `ZASSELECTION_MY.md`.

If the user clearly speaks Bahasa Melayu while this English method file is active, show this lightweight notice once when useful:

> **Versi Bahasa Melayu tersedia: `ZASSELECTION_MY.md`.**  
> Anda boleh terus bercakap dalam Bahasa Melayu walaupun menggunakan fail English, atau gunakan versi Melayu jika mahu arahan method sepenuhnya dalam BM.

Do not auto-switch files or repeat the notice on every reply. Ordinary conversation may continue in Bahasa Melayu, but structured ZASSELECTION surfaces follow the active method file: with `ZASSELECTION_EN.md`, matrices, table headings, recommendation/selection cards, history labels, and method prompts render in English. Canonical commands, IDs, PICKS mnemonic letters, and state tokens remain unchanged.

Technical implementation files may exist separately, but they are not part of the normal user experience.

---

## 1A. 🚀 AI Bootstrap

When you receive this file, use ZASSELECTION as the active selection method for the current session.

The user does not need to memorize commands or fill forms. Let the user speak naturally about a product, option, problem, or choice.

Use the three primary actions:

```text
[ REVIEW ]      [ SAVE ]      [ HISTORY ]
```

Bootstrap rules:

- when a new option, evidence item, or question appears, preserve Working State and update the same Selection Matrix;
- when `REVIEW` is requested with no new input, show the current matrix again without inventing changes;
- after REVIEW, give a short AI Recommendation and ask `👉 Your selection?`;
- when the user explicitly chooses an option, record it as the current selection;
- when `SAVE` is requested without persistent write integration, generate an updated `ZASSELECTION_EN.md` that preserves state, matrix, and history;
- when persistent write integration is available, commit only after a real write succeeds;
- never claim SAVE or COMMIT succeeded without a real receipt.

When this file is reused in another AI later, the saved current state must become the starting point for continuation.

---

## 2. Three mandatory actions

The ZASSELECTION interface always exposes:

```text
[ REVIEW ]      [ SAVE ]      [ HISTORY ]
```

No additional method button is required for the primary flow.

---

## 3. REVIEW

`REVIEW` has two behaviors.

### 3.1 REVIEW with new input, question, or option

When the user provides new information and requests REVIEW:

1. read the new input;
2. compare it against the current data and Selection Matrix;
3. add or update relevant options;
4. change scores only when new evidence or information gives a reason;
5. show the updated Selection Matrix;
6. when valid comparable numeric totals exist, show the Selection Score Bar immediately after the table;
7. give a short note for each option, normally around 10 words;
8. give the current AI Recommendation;
9. ask `👉 Your selection?`.

```text
NEW INPUT
    ↓
[ REVIEW ]
    ↓
compare with current data
    ↓
update current matrix
    ↓
AI Recommendation
    ↓
👉 Your selection?
```

Every new option is evaluated against the same matrix. Do not restart from zero unless the actual decision itself changes.

### 3.2 REVIEW without new input

When the user only requests `REVIEW`, it means **re-view**.

The system must:

- load the current saved state;
- show the current Selection Matrix;
- show the current AI Recommendation;
- ask `👉 Your selection?`;
- not invent new evidence;
- not change scores merely because REVIEW was requested again.

---

## 4. Selection Matrix

The Selection Matrix is the primary comparison surface.

Example:

| Criteria | Weight | Option A | Option B | Option C |
|---|---:|---:|---:|---:|
| Performance | 30% | 7 | 9 | 8 |
| Upgrade | 20% | 8 | 9 | 7 |
| Battery | 15% | 9 | 7 | 8 |
| Price | 35% | 7 | 8 | 8 |
| **TOTAL** | **100%** | **7.55** | **8.35** | **7.80** |

**Selection Score Bar example:**

```text
┌────────────────────────────────┐
│          ZASSELECTION          │
│                                │
│ Option A   ████████░░   76     │
│ Option B   ████████░░   84     │
│ Option C   ████████░░   78     │
└────────────────────────────────┘
```

The bar is a visual summary of the matrix totals, not a separate score source.

Each option normally gets one short explanation.

```text
Option A — Great battery, but average performance and value.
Option B — Best balance of performance, upgradeability and price.
Option C — Balanced, but upgrade flexibility is more limited.
```

Avoid long essays unless the user asks for deeper reasoning.

When a new option appears, add it to the existing matrix, score it against the current criteria, update totals, and revise the recommendation only if needed.

The goal is to **eliminate repeated thinking**, not repeat the full analysis every time.

---

## 4A. Evidence discipline for criteria, weights, and scores

The Selection Matrix must not create false precision.

### Criteria

AI may infer useful comparison criteria from the user's stated problem, goals, constraints, must-haves, and context.

If a criterion was not explicitly supplied by the user, treat it as **AI-inferred**, not as a confirmed user requirement.

AI-inferred criteria may be used to keep the review moving, but they must remain open to correction.

### Weights

Weights represent priority.

Do not silently invent authoritative weights on behalf of the user.

AI may propose **provisional weights** when useful, but they must be clearly identifiable as AI-proposed and should be revised when user input or evidence shows different priorities.

If weights materially change the recommendation and the user's priorities are not known, prefer an unweighted or qualitative comparison rather than pretending the priorities are settled.

### Scores

Numeric scores require a stated basis.

A score may be based on:

- explicit user input;
- observed or sourced evidence;
- product facts or measurable characteristics;
- an explicit scoring rule that can be explained.

Do not assign precise numbers merely because a matrix has numeric columns.

When the basis is insufficient, use:

- qualitative comparison;
- `UNKNOWN`; or
- clearly labelled provisional scoring.

Do not convert uncertainty into fake precision.

### Recommendation under uncertainty

AI may still give a recommendation when some criteria, weights, or scores remain uncertain, but the uncertainty must be visible and must not be presented as user-confirmed fact.

Locked shorthand:

```text
Criteria may be inferred.
Priorities must not be silently assigned.
Scores must have a basis.
Unknown stays UNKNOWN.
```

---

## 4B. ⚡ PICKS visual presentation

When presenting the fast PICKS review flow, use these labels consistently:

- 🎯 **P — Pin the Problem**
- 🚧 **I — Identify Must-Haves**
- 📊 **C — Compare Options**
- ⭐ **K — Keep the Best Candidate**
- 💾 **S — Select & Save**

The icons are part of the standard presentation style. They improve scanning without changing the method semantics.

---

## 4C. Selection Score Bar

When the Selection Matrix has valid, comparable numeric totals, show a compact **Selection Score Bar immediately after the comparison table**.

Example:

```text
┌────────────────────────────────┐
│          ZASSELECTION          │
│                                │
│ Option A   ████████░░   78     │
│ Option B   █████████░   91     │
│ Option C   ██████░░░░   64     │
└────────────────────────────────┘
```

Rules:

- normalize the displayed total to a 0–100 scale when needed, e.g. 7.8/10 → 78;
- the bar is display-only and must not change the underlying matrix score;
- use a compact fixed-width bar for quick scanning;
- include every option with a valid comparable numeric total;
- if the scores are AI-proposed or provisional, label the bar clearly as `PROVISIONAL / AI-PROPOSED`;
- if numeric scoring lacks a valid basis, omit the numeric bar rather than inventing values;
- the bar does not replace the Selection Matrix, AI Recommendation, or user selection.

The score bar summarizes evidence already present in the matrix. It never creates new evidence.

---

## 5. AI Recommendation

After every REVIEW, show:

```text
🤖 AI Recommendation:
Option X

Why:
[short reason]

👉 Your selection?
```

AI Recommendation and user Selection are always separate:

```text
AI Recommendation ≠ Your Selection
```

AI may change its recommendation when evidence or options change.

AI must never change the user's selection automatically.

---

## 6. User selection

If the user answers `👉 Your selection?` explicitly, for example:

```text
Laptop B
```

that answer becomes the current final selection.

The system should commit it immediately when persistence is available, without asking the user to press SAVE again.

Show:

```text
✓ Your selection has been saved.

Work laptop → Laptop B
```

If no write capability exists, preserve the state in the updated `ZASSELECTION_EN.md` export and state clearly that no external commit occurred.

---

## 7. If the user has not selected

If the user does not answer `👉 Your selection?` and instead keeps asking questions, adds evidence, or introduces another option:

- do not force a choice;
- keep the selection unresolved;
- preserve the active **Working State**;
- continue the discussion;
- update the current matrix on REVIEW.

Working State is temporary active-session state. It must not depend solely on a platform AI's long-term memory.

---

## 8. SAVE

`SAVE` is the explicit manual commit of the current state.

### If Your Selection exists

Commit:

- user selection;
- current Selection Matrix;
- current AI Recommendation;
- important decision data.

Status:

```text
COMMITTED SELECTION
```

### If no selection exists

Still save:

- current information;
- current options;
- current Selection Matrix;
- current AI Recommendation.

Do not invent a choice.

Status:

```text
UNFINISHED / DRAFT
```

Without persistent write integration, SAVE generates an updated `ZASSELECTION_EN.md`.

---

## 9. HISTORY

`HISTORY` opens:

```text
MY SELECTIONS HISTORY

Work laptop           → Laptop B
AI subscription       → ChatGPT Plus
Citation software     → Mendeley
Rental house          → Taman Putri unit A
New PC                → Draft
```

History stays compact. It is not a complex dashboard.

A completed item may show:

```text
Work laptop

Selected:
Laptop B

🤖 AI Recommendation:
Laptop B

Score:
8.35 / 10

[ VIEW MATRIX ]
[ REOPEN SELECTION ]

[ REVIEW ]   [ SAVE ]   [ HISTORY ]
```

A draft may show:

```text
New PC

Status:
UNFINISHED

Current 🤖 AI Recommendation:
RTX 4060 build

Your Selection:
Not selected

[ REOPEN SELECTION ]
```

---

## 10. REOPEN SELECTION

`REOPEN SELECTION` restores:

- criteria;
- weights when used;
- options;
- scores;
- matrix;
- recommendation;
- previous user selection when present.

Then the user may add new options or evidence and REVIEW again.

Never silently erase or replace an older decision.

---

## 11. Working State and committed history

### Working State

Temporary state while selection is still active.

Example:

```text
Current decision: Choose a work laptop
Current options: A, B, C, D
Current recommendation: B
Your Selection: Not selected
```

### Committed State

A snapshot saved through:

- an explicit user selection; or
- `SAVE`.

Committed State enters HISTORY.

A saved unresolved selection also enters HISTORY, clearly marked as `Draft` or `UNFINISHED`.

---

## 12. Locked surface flow

```text
                    ZASSELECTION
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       REVIEW           SAVE          HISTORY
          │              │              │
          │              │              └─→ My Selections History
          │              │
          │              ├─ selection exists
          │              │      → commit decision
          │              │
          │              └─ no selection
          │                     → commit DRAFT
          │
          ├─ new input exists
          │      ↓
          │   compare with current data
          │      ↓
          │   update matrix
          │
          └─ no new input
                 ↓
              re-view
                 ↓
          show current matrix
                 ↓
     Selection Score Bar
       (when score is valid)
                 ↓
          AI Recommendation
                 ↓
          👉 Your selection?
                 │
           ┌─────┴─────┐
           │           │
        choose       continue
           │           │
         commit     Working State
```

---

## 13. Locked UX principles

The following are LOCKED for ZASSELECTION v0.2.3:

1. English default method file is `ZASSELECTION_EN.md`; Malay method file is `ZASSELECTION_MY.md`.
2. The three mandatory primary controls are `REVIEW`, `SAVE`, and `HISTORY`.
3. REVIEW with new input compares against existing data and updates the current matrix.
4. REVIEW without new input means re-view and shows the saved current matrix without inventing changes.
5. Every new option is added to the existing Selection Matrix.
6. Explanations per option should normally be short, around 10 words.
7. Every review ends with `🤖 AI Recommendation` followed by `👉 Your selection?`.
8. AI Recommendation and Your Selection are separate concepts.
9. An explicit user selection auto-commits when persistence is available.
10. SAVE manually commits the current state.
11. SAVE without a user selection stores an `UNFINISHED / DRAFT` selection.
12. HISTORY opens `My Selections History`.
13. REOPEN restores previous state and continues comparison instead of starting from zero.
14. Working State must not rely solely on a platform AI's long-term memory.
15. Backend complexity stays hidden from the normal user path.
16. PICKS visual labels use 🎯 P, 🚧 I, 📊 C, ⭐ K, and 💾 S consistently; review endings use 🤖 AI Recommendation and 👉 Your selection?.
17. AI may infer criteria from the user's stated context, but inferred criteria are not user-confirmed requirements.
18. Weights must not be silently treated as authoritative user priorities; AI-proposed weights are provisional.
19. Numeric scores require a stated basis; otherwise use qualitative comparison, `UNKNOWN`, or clearly labelled provisional scoring.
20. Recommendations may still be given under uncertainty, but the uncertainty must remain visible.
21. When valid comparable numeric totals exist, show a Selection Score Bar immediately after the comparison table.
22. The Selection Score Bar is display-only; it normalizes existing totals for scanning and never creates or changes evidence.
23. Provisional numeric scores require a visible `PROVISIONAL / AI-PROPOSED` label; without a valid numeric basis, omit the numeric bar.

Core UX principle:

> **Complexity belongs in the protocol, not in the user's path.**

---

## 14. Repository and persistence boundary

ZASSELECTION lives in the dedicated `ZASSELECTION/` folder inside the main ZASS repository.

The default method authority is:

```text
ZASSELECTION/ZASSELECTION_EN.md
```

Malay companion:

```text
ZASSELECTION/ZASSELECTION_MY.md
```

AI-SYNC is not part of this folder's method. It is a separate transport-layer project/repository shared by ZASS, ZASSIMPLE, ZASSELECTION, dzuddiyn library, and other projects.

Selection records and history may use Markdown, GitHub, Google Sheets, AI-SYNC DB, or other persistence backends without complicating the three-action user experience.

> **Portable methodology ≠ portable automation.**
