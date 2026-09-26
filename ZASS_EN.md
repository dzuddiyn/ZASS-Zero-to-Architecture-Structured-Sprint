# ZASS — Zero-to-Architecture Structured Sprint

**Version:** 0.1.2 (simplified owner guide; baseline decisions v0.1 remain unchanged)  
**Status:** BASELINE LOCKED  
**Owner:** Project Owner  
**Locked date:** 2026-09-26

> **ZASS Principle #1 — Don't shortcut thinking; eliminate repeated thinking.**
>
> **ZASS Principle #2 — Think freely. Record decisions. Lock what is certain. Build from what is locked.**
>
> **ZASS Principle #3 — AI produces possibilities. Evidence tests them. Humans decide. Architecture follows the decisions.**

---

# QUICK MANUAL — HOW TO USE ZASS

ZASS is a workflow for taking raw ideas to architecture quickly without losing context, repeating old discussions, or allowing AI to silently change decisions.

This file is the **source of truth** for the idea → decision → architecture process.

## DAILY USE — JUST SPEAK NORMALLY

Give the AI the **latest ZASS file for the project**, then speak normally. You do not need to memorize IDs, fill forms, choose a methodology, or edit tables. The AI manages the file structure and proposes updates; you review the meaning and choose the decisions.

| When | What you can say |
|---|---|
| A new idea appears | “I have an idea like this…” Tell the story freely, even if it is still unstructured. |
| The discussion ends | “Put the important parts of this discussion into ZASS. Separate facts, inferences, and unknowns. Show me what changed.” |
| You want a different perspective | “Review the cost of this idea,” or “Try to find how this plan could fail.” |
| You want to decide | “What choices still need my decision? Explain the trade-offs in plain language, one at a time.” |
| You are confident | “I choose this option: [decision]. Lock this decision in ZASS and show its impact.” |
| You want architecture | “Are the important decisions ready to build the architecture? If not, tell me what is blocking it.” |

The AI must find the relevant entries, manage IDs and states behind the scenes, and ask for clarification if “this” could refer to more than one decision. **Only an explicit instruction from the project owner can LOCK a decision.** Before writing or committing, AI must show a summary of changes, including any conflict with locked decisions.

## READY-TO-USE PROMPTS — OPTIONAL REFERENCE

The prompts below help when changing AI models, requesting a precise review, or correcting an AI that misunderstood the task. You do not have to copy them for daily use. Change only the parts in `[ ]` when needed.

### A. Free conversation → update the project ZASS

```text
Read the latest ZASS.md for project [PROJECT NAME]. Extract our discussion into the ZASS format.
Do not invent facts that I did not provide. Label each relevant item as
EXPLICIT (I stated it), INFERRED (AI interpretation that needs confirmation), or UNKNOWN.
Keep my original wording in RAW IDEA; separate WHY, GOALS, NON-GOALS,
CONSTRAINTS, new ideas, questions, and risks. Do not overwrite existing information
without showing the contradiction. Do not change LOCKED decisions.
Show a summary of changes and the parts I need to confirm.
If this is a new project, name the file ZASS_[PROJECT_NAME].md.
If the project already has a ZASS file, update the same file; do not create v2/final files.
Manage IDs, states, and links between entries yourself; I do not need to memorize them.
```

Example name for a new project: `ZASS_Cucumber_Ginger_Drink.md`. One project has one main ZASS file; Git stores its history. Attach or provide the latest file contents whenever you change chat or model. A copy in a chat is not the authoritative version.

### B. I already have a structured idea → paste it and ask AI to review

```text
RAW IDEA
A cucumber and ginger drink using rejected cucumbers.

WHY I WANT THIS
- Reduce cucumber waste.
- Explore a value-added product.

GOALS
- A product that is easy to produce.
- Can be tested at small scale.

NON-GOALS
- Do not build a large factory yet.

CONSTRAINTS
- Low initial capital.
- Shelf life is still unknown.

Put this into the project ZASS. Treat the example above as idea input only,
not a LOCKED decision. Label explicit facts, AI inferences, and unknown items
as questions. Do not invent numbers or specifications.
```

This is **not actual project content** and does not automatically fill sections 1–4 below. If the new idea belongs to the same project, ask the AI to propose an update to the existing file while preserving earlier IDs and decisions.

### C. Blast from one perspective

```text
ZASS BLAST
Mode: Industrial product thinking
Scope: RAW IDEA
Find possibilities, questions, and risks. Label them as candidates; do not LOCK decisions.
```

### D. Review an early-stage idea

```text
ZASS REVIEW
Method: Constraints + Quality Attributes
Scope: RAW IDEA / Whole system
Focus: [example: cost, users, maintenance]
Do not modify LOCKED decisions.
Return only: findings, contradictions, risks, questions, candidate experiments,
and candidate decisions.
```

### E. Review a specific target

```text
ZASS REVIEW
Method: Hacker / assumption breaking
Scope: [describe a topic, area, or an ID if known]
Goal: Find failure modes, hidden assumptions, and edge cases.
Focus: [example: duplicate inputs, network loss, incorrect permissions]
Do not modify LOCKED decisions.
Return only:
- findings
- contradictions
- risks
- questions
- candidate experiments
- candidate decisions
```

You may write the scope in plain language, for example, “the claim approval process.” The AI finds the actual IDs in the file. A scope such as `AC-001, AC-005–AC-011` is suitable only after those candidates have been recorded. ATAM is more useful when evaluating mature architecture candidates; use BLAST or a constraints review for a raw idea.

`AC` means a **candidate way to build a system**; `D` means a **matter you decide** after considering options. The detailed ID conventions for AI appear at the end of this file.

Before saving an AI change, review the diff: what was added, removed, or changed; especially IDs, EXPLICIT/INFERRED facts, and LOCKED decisions.

### Using only a phone

**For a quick edit in the official GitHub Mobile app:** install the GitHub app and sign in. Open the repository → **Browse code** → open the project ZASS file → tap the **⋯** menu in the top-right → **Edit File** → change the text → **Commit**. Select the branch you are currently browsing if the change should go directly to that branch. A commit in the app saves the change to GitHub; no additional `git push` is needed. Check the branch name before committing.

**For a new file produced by AI:** open `github.com` in your phone browser → repository → **Add file → Upload files** → choose the downloaded `.md` file → commit. Check the name and folder. If a ZASS file already exists for that project, do not upload a second version; open the existing file and update its contents after comparing the changes.

Before the next AI session, open or download the latest version from the repository. If a PC has a copy of the repository, run `git pull` on the PC before editing again. Large changes to a long file are easier to review on a PC.

---

## 1. Start with a raw idea

If you want, fill in these sections yourself. If you only tell a story, AI must separate them:

- `RAW IDEA`
- `WHY I WANT THIS`
- `GOALS`
- `NON-GOALS`
- `CONSTRAINTS`

Do not think about technology or architecture yet.

Example instruction to AI:

> ZASS BLAST. Read ZASS.md. Do not change LOCKED decisions. Find ideas, possibilities, questions, risks, and alternatives that have not yet been explored.

---

## 2. Blast ideas freely

Use any AI:

- ChatGPT
- Gemini
- Claude
- Perplexity / PCom
- IDE agents
- other models

AI may add:

- IDEA
- QUESTION
- RISK
- OPTION
- CANDIDATE DECISION

AI may not turn a suggestion directly into a decision.

---

## 3. Change perspective or methodology

Use `METHOD REVIEWS` to examine an idea from different perspectives.

Example:

> ZASS REVIEW  
> Method: Industrial / ATAM  
> Scope: whole system  
> Do not change LOCKED decisions.  
> Return findings, contradictions, risks, experiments, and candidate decisions only.

Possible methodologies or perspectives:

- Industrial / C4 / arc42 / ATAM
- Academic / DSRM / GQM
- Hacker / failure injection / assumption breaking
- Security
- Cost
- Maintainability
- Operations
- Scalability
- Crazy / unconstrained brainstorming
- User experience / workflow
- Single-maintainer perspective

A methodology has no authority to change architecture directly.

---

## 4. Use many AI models without voting

If multiple AI models agree, that is **not evidence**.

If AI models disagree, turn the difference into:

- QUESTION
- EXPERIMENT
- TRADE-OFF
- CANDIDATE DECISION

Example:

Gemini: PostgreSQL  
Claude: SQLite  
GPT: Firestore

Do not vote.

Instead, ask questions such as:

- How many concurrent writers?
- Is offline operation needed?
- What is the expected data size?
- Is relational integrity required?
- What is the operational cost?
- Who will maintain it?

Then make a decision based on evidence.

---

## 5. Create architecture candidates only when needed

If there are genuinely different architectural approaches, use:

- `AC-001`
- `AC-002`
- `AC-003`

Example:

- AC-001 Modular Monolith
- AC-002 Microservices
- AC-003 Event-driven Hybrid

Compare all candidates against the same criteria.

Do not let every AI produce its own uncontrolled Plan A/B/C.

---

## 6. Turn an issue into a decision

Every important decision goes into the `DECISION LEDGER`.

Standard states:

`RAW → CANDIDATE → TESTING → DECIDED → LOCKED`

Additional states:

- `REJECTED`
- `DEFERRED`
- `SUPERSEDED`

AI may propose a `CANDIDATE`.

Only the project owner may change a decision to `LOCKED`.

---

## 7. Lock a decision

A normal instruction is: “I choose [option] for [topic]. Lock this decision.” AI finds the matching ID and confirms the target if it is unclear. You may use `LOCK D-012` if you already know the ID, but it is not required.

Before locking, check:

- Is the problem clear?
- Have alternatives been considered?
- Are the trade-offs understood?
- Is the evidence sufficient?
- Is the impact on the system understood?

A LOCKED decision becomes authoritative.

AI may not change it silently.

---

## 8. Do not delete rejected ideas

Keep them in `REJECTED IDEAS`.

This prevents future AI from repeatedly suggesting ideas that have already been evaluated and rejected.

---

## 9. Generate architecture only when READY

Architecture may be generated only when `ARCHITECTURE READINESS = READY`.

Example instruction:

> ZASS ARCHITECT. Generate architecture strictly from LOCKED decisions, goals, constraints, workflows, and known risks. Return ARCHITECTURE BLOCKER for unresolved major assumptions.

Architecture may not silently introduce new major decisions.

---

## 10. After architecture exists

Every new idea must pass through:

`New Idea → CANDIDATE → Impact Analysis → DECISION → Human Approval → LOCK → Architecture Update`

Do not edit architecture first and then attempt to fit the decision afterward.

---

# ZASS MENTAL MODEL

```text
                 ZASS

          💥 DIVERGE
       IDEA / BLAST / VIEWS
                │
                ▼
          🔬 CHALLENGE
      METHODS / MODELS / TESTS
                │
                ▼
          ⚖️ CONVERGE
       OPTIONS / TRADE-OFFS
                │
                ▼
           👤 DECIDE
             HUMAN
                │
                ▼
            🔒 LOCK
                │
                ▼
         🏗 ARCHITECTURE
```

Three core zones:

```text
DISCOVERY ZONE
RAW / IDEA / QUESTION / RISK
        ↓
DECISION ZONE
OPTION → TEST → DECIDE → LOCK
        ↓
ARCHITECTURE ZONE
Consume LOCKED decisions only
```

Discovery can be chaotic.  
Decisions must be controlled.  
Architecture must be disciplined.

---

# 0. AI OPERATING RULES

This file is the source of truth for this project.

AI may:

- Generate new ideas
- Challenge assumptions
- Identify risks
- Suggest alternatives
- Compare approaches
- Propose experiments
- Produce candidate decisions
- Review architecture candidates

AI may NOT:

- Treat a suggestion as a decision
- Modify a LOCKED decision silently
- Invent requirements
- Generate final architecture from unresolved critical decisions
- Treat agreement between AI models as evidence
- Override the project owner
- Remove rejected decisions without explicit approval
- Hide trade-offs or unresolved assumptions

Only the project owner may change a decision to `LOCKED`.

Decision states:

`RAW → CANDIDATE → TESTING → DECIDED → LOCKED`

Other states:

`REJECTED`  
`DEFERRED`  
`SUPERSEDED`

---

# 1. RAW IDEA

Write freely.

No architecture required.  
No technology selection required.  
No need to be correct.

### Original Idea

> [Write the original idea here.]

### Why I Want This

-
-
-

---

# 2. GOALS

What must this system achieve?

-
-
-

---

# 3. NON-GOALS

Things intentionally excluded.

-
-
-

---

# 4. CONSTRAINTS

## Budget

-

## Time

-

## Skills

-

## Existing Infrastructure

-

## Operational Constraints

-

## Security / Privacy

-

## Maintenance

-

---

# 5. IDEA BLAST

Anything may enter this section.

Nothing here is automatically approved.

| ID | Idea | Source | Status |
|---|---|---|---|
| I-001 | | Human/AI | RAW |

---

# 6. QUESTIONS / UNKNOWNS

| ID | Question | Why It Matters | Status |
|---|---|---|---|
| Q-001 | | | OPEN |

---

# 7. RISKS & FAILURE SCENARIOS

Examples:

- What if the AI provider is unavailable?
- What if the same request is received twice?
- What if data is corrupted?
- What if a user gives contradictory instructions?
- What if the system grows 100×?
- What if an integration becomes unavailable?
- What if the maintainer leaves?
- What if a model hallucinates?
- What if a retry produces duplicate actions?

| ID | Failure / Risk | Impact | Possible Mitigation | Status |
|---|---|---|---|---|
| R-001 | | | | OPEN |

---

# 8. METHOD REVIEWS

Method reviews challenge the project from different perspectives.

They do not directly change LOCKED decisions.

## MR-001 — [Review title]

**Method:**  
**Scope:**  
**Reviewer / Model:**  
**Date:**

### Findings

-

### Contradictions

-

### New Questions

-

### New Risks

-

### Experiments Suggested

-

### Candidate Decisions

-

---

# 9. MULTI-AI REVIEW RULES

Agreement between AI models is not evidence.

Disagreement between AI models must be converted into one or more of:

- Question
- Experiment
- Trade-off
- Candidate decision

No AI model has authority to LOCK a decision.

Record significant model disagreement here when useful.

| ID | Topic | Model / Reviewer Views | What Must Be Resolved | Result |
|---|---|---|---|---|
| MA-001 | | | | OPEN |

---

# 10. OPTIONS

Use this section when one decision has several viable approaches.

## Decision Topic: [Example: AI Provider Architecture]

### Option A

**Description:**

**Advantages:**

**Disadvantages:**

**Risks:**

**Evidence:**

### Option B

**Description:**

**Advantages:**

**Disadvantages:**

**Risks:**

**Evidence:**

---

# 11. ARCHITECTURE CANDIDATES

Create architecture candidates only when there are genuinely different architectural approaches.

## AC-001 — [Candidate name]

**Summary:**

**Key characteristics:**

**Dependencies:**

**Advantages:**

**Trade-offs:**

**Critical risks:**

### Candidate Comparison

| Criterion | AC-001 | AC-002 | AC-003 |
|---|---|---|---|
| Maintainability | | | |
| Cost | | | |
| Complexity | | | |
| Reliability | | | |
| Offline resilience | | | |
| AI portability | | | |
| Scalability | | | |
| Security | | | |
| Observability | | | |
| Single-maintainer suitability | | | |

Do not select a candidate by AI vote.

Use evidence, constraints, and project-owner decisions.

---

# 12. DECISION LEDGER

Every important architectural decision must appear here.

## D-001 — [Decision title]

**Status:** CANDIDATE

**Problem:**

**Options considered:**

**Decision:**

**Reason:**

**Trade-offs:**

**Evidence / experiment:**

**Affected modules:**

**Related risks:**

**Related questions:**

---

# 13. LOCKED DECISIONS

This section is authoritative.

Architecture MUST follow these decisions.

## L-001

**Source Decision:** D-___

**Decision:**

**Reason:**

**Locked by:** Project Owner

**Date:**

**Supersedes:** None

---

# 14. REJECTED IDEAS

Rejected ideas remain recorded so future AI does not repeatedly suggest them.

| ID | Idea | Reason Rejected | Related Decision |
|---|---|---|---|
| | | | |

---

# 15. DEFERRED ITEMS

Items intentionally postponed.

| ID | Item | Why Deferred | Revisit Trigger |
|---|---|---|---|
| | | | |

---

# 16. OPEN LOOPS

Items preventing architecture freeze.

- [ ]
- [ ]
- [ ]

---

# 17. EXPERIMENTS / EVIDENCE

Use experiments when discussion alone cannot resolve a decision.

## E-001 — [Experiment title]

**Question being tested:**

**Hypothesis:**

**Method:**

**Success criteria:**

**Result:**

**Conclusion:**

**Affected decisions:**

---

# 18. ARCHITECTURE READINESS

Architecture generation is allowed only when:

- [ ] Core problem is clear
- [ ] Primary users are known
- [ ] Goals are defined
- [ ] Non-goals are defined
- [ ] Important constraints are known
- [ ] Critical workflows are understood
- [ ] Major failure scenarios have been considered
- [ ] Critical decisions are LOCKED
- [ ] No unresolved contradiction affects the core architecture
- [ ] Major candidate architectures have been resolved or intentionally deferred
- [ ] Known blockers are documented

**Readiness:**

`NOT READY / READY`

---

# 19. ARCHITECTURE GENERATION INSTRUCTION

When Architecture Readiness = READY:

Generate architecture using ONLY:

1. Goals
2. Constraints
3. LOCKED decisions
4. Required workflows
5. Known risks
6. Validated evidence
7. Explicitly accepted trade-offs

Do not introduce major architectural decisions without explicitly flagging them.

Generate:

- System Context
- Major Components
- Component Responsibilities
- Data Flow
- Control Flow
- Trust Boundaries
- Human Approval Boundaries
- External Integrations
- Storage Architecture
- Failure Handling
- Retry / Idempotency Strategy
- Observability
- Security Considerations
- Deployment Model
- C4 Diagrams
- ADR Mapping
- Testing Strategy
- Operational Considerations

Any missing architectural decision must be returned as:

`ARCHITECTURE BLOCKER`

rather than silently assumed.

---

# 20. CHANGE CONTROL

After architecture is generated:

```text
New idea
↓
CANDIDATE
↓
Impact analysis
↓
DECISION
↓
Human approval
↓
LOCK
↓
Architecture update
```

LOCKED decisions must never be silently overwritten.

If a LOCKED decision must change:

1. Create a new decision entry.
2. Explain why the previous decision is no longer valid.
3. Perform impact analysis.
4. Mark the old decision `SUPERSEDED`.
5. LOCK the replacement decision.
6. Update architecture only after the new decision is locked.

---

# 21. RECOMMENDED PROJECT STRUCTURE

```text
PROJECT/
│
├── ZASS.md
├── ARCHITECTURE.md
├── README.md
│
├── docs/
│   ├── adr/
│   ├── experiments/
│   └── reviews/
│
└── src/
```

Recommended authority hierarchy:

```text
1. GitHub repository     ← authoritative
2. Local repository      ← working copy
3. AI project workspace  ← working context
4. AI memory             ← preferences/context only
5. Chat                  ← temporary thinking space
```

The engineering source of truth must not live only inside an AI conversation.

---

# 22. STANDARD ZASS COMMANDS

These are optional human-readable conventions, not software commands. The owner may use ordinary language instead; AI resolves the relevant entries and maintains IDs.

### ZASS BLAST

Explore new possibilities without modifying LOCKED decisions.

### ZASS REVIEW

Challenge the project using a named methodology or perspective.

### ZASS CHALLENGE

Attack assumptions, edge cases, failure modes, and contradictions.

### ZASS DECIDE

Return unresolved decision candidates and their trade-offs.

### LOCK D-XXX

The project owner approves and locks a decision.

### ZASS ARCHITECT

Generate architecture from the authoritative locked state.

### ZASS AUDIT

Audit an existing architecture against ZASS decisions, risks, and constraints.

### ZASS IMPACT

Analyze the impact of a proposed change before modifying architecture.

## AI REFERENCE — ID CONVENTIONS

AI assigns and maintains these IDs consistently. The owner does not need to remember them.

| ID | Meaning | Use |
|---|---|---|
| `I-xxx` | Idea | Possibility, not approved. |
| `Q-xxx` | Question | Unknown to resolve. |
| `R-xxx` | Risk | Possible failure and impact. |
| `MR-xxx` | Method Review | Findings from a named perspective. |
| `AC-xxx` | Architecture Candidate | Alternative arrangement of components and flows for a stated scope. |
| `D-xxx` | Decision | Decision topic, options, trade-offs, evidence, and status. |
| `L-xxx` | Locked Decision | Authoritative record referencing an owner-locked D entry. |
| `E-xxx` | Experiment | Test and evidence relevant to a question or decision. |

Example: `AC-001 = modular monolith` and `AC-002 = microservices` are alternatives. `D-008 = select system approach` records the selection and rationale. When the owner clearly locks D-008, update its status and create an `L-xxx` record that references it. Do not create an independent, conflicting decision. A small decision can be a D entry without an AC entry.

---

# END OF ZASS BASELINE
