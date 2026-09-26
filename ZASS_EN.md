# ZASS — Zero-to-Architecture Structured Sprint

**Version:** 0.1.11 (simplified owner guide; baseline decisions v0.1 remain unchanged)  
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
ZASSS
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

> ZASSS. Read ZASS.md. Do not change LOCKED decisions. Find ideas, possibilities, questions, risks, and alternatives that have not yet been explored.

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

Methods and perspectives you can use:

| Method | Brief review |
|---|---|
| **Industrial / C4 / arc42 / ATAM** | Structure components, responsibilities, flows, and trade-offs; assess whether the design meets real operational quality requirements. |
| **Academic / DSRM / GQM** | Turn an idea into a problem, questions, method, measures, and evidence; ensure claims can be tested or defended. |
| **Hacker / failure injection / assumption breaking** | Break system assumptions creatively through unusual inputs, unexpected conditions, network loss, and incorrect action sequences. |
| **Security / threat modelling** | Identify important assets, possible attackers, attack paths, damage impact, and the controls that need to exist. |
| **Abuse / Scammer mindset** | Imagine users seeking unfair advantage through false claims, duplicate accounts, or price manipulation; record prevention, not tricks. |
| **Cost / unit economics** | Calculate build, running, and maintenance costs; identify hidden costs, budget limits, and the break-even point. |
| **Maintainability** | Assess whether a future person can read, repair, upgrade, and recover the system without relying on its original creator. |
| **Operations / reliability** | Focus on daily work: monitoring, alerts, handover, backup, recovery, capacity, and what happens when people are unavailable. |
| **Scalability** | Test what changes when users, data, instructions, or integrations grow by ten to one hundred times. |
| **Crazy / unconstrained brainstorming** | Temporarily suspend limits of technology, cost, and convention; find unexpected possibilities before filtering through real constraints. |
| **User-experience / workflow** | Follow the user journey from intent to outcome; find confusion, unnecessary steps, risky decisions, and waiting points. |
| **Single-maintainer perspective** | Assess everything through one system caretaker's time, energy, skills, documentation, cost, and risk of exhaustion. |
| **Artist / emotional experience** | Assess the felt experience: does the system make people feel relief, confidence, enjoyment, calm, or meaning? |
| **First-principles thinking** | Break assumptions into basic facts; rebuild options from what is truly needed instead of customary practice. |
| **Systems thinking** | Examine feedback loops, side effects, delays, and related parties; avoid fixing one part while damaging another. |
| **Product / market lens** | Ask who will willingly use it, which problem hurts enough, the alternatives available, and why people would choose this solution. |
| **Legal / compliance lens** | Check legal duties, data privacy, records, consent, liability, and industry requirements before remediation becomes expensive. |
| **Ethics / harm lens** | Find who may be harmed, excluded, or disadvantaged; set decision boundaries even when an option appears profitable. |
| **Accessibility / inclusion lens** | Test whether people with different abilities, languages, devices, connectivity, or literacy can still use the system safely. |
| **Data / evidence lens** | Define which data must be trusted, its source and quality, who can change it, and how audit proves truth. |
| **Privacy / trust lens** | Minimize collected data; make purpose, access, retention, and the user's ability to regain control clear. |
| **Resilience / offline lens** | Imagine loss of internet, AI providers, or integrations; define minimum function, queues, retries, and recovery after return. |
| **Red team / adversarial review** | Search for weaknesses from an opposing party's perspective, but produce only risks, evidence, and defensive controls. |
| **Reverse planning / pre-mortem** | Assume the project failed a year later; list likely reasons and create early actions to reduce them. |
| **Analogy / cross-domain lens** | Borrow patterns from hospitals, banks, factories, games, or farms to find solutions not yet considered. |
| **Minimal viable experiment** | Avoid long debate by creating the smallest test that can reject or support the central assumption. |
| **Future-back / scenario planning** | Imagine several plausible futures; check whether today's decision remains useful as conditions change. |
| **Stakeholder / conflict lens** | Map who benefits, who carries work or risk, and conflicts of interest that need early management. |

For **Abuse / Scammer mindset**, output must remain limited to risks, evidence, detection, and preventive controls. Do not record bypass, deception, or illegal monetization steps.

A methodology has no authority to change architecture directly.

## PRESET REVIEW — THREE MINDS

Use this preset when an idea needs three complementary perspectives:

**External name:** when describing this method outside ZASS, use **Abuse Red Teaming** or **Product Safety Red Teaming**. `Victim-Abuser Red Team` is the ZASS-specific preset name.

| Role | Core question | Output sought |
|---|---|---|
| **Engineer** | Can this be built, maintained, and operated within the real constraints? | Requirements, modules, data, cost, limits, and technical tests. |
| **Artist** | How will this experience feel to a human being? | Journey, language, story, confidence, relief, enjoyment, or meaning. |
| **Victim-Abuser Red Team** | Who could be confused, harmed, or exploit the system, and how would that be detected? | Risks, human impact, evidence, detection signals, and preventive controls. |

Example instruction:

```text
ZASS REVIEW
Method: Three Minds
Scope: [idea or project area]
Run Engineer, Artist, and Victim-Abuser Red Team perspectives.
Do not change LOCKED decisions.
Return findings, contradictions, risks, candidate decisions, and the NEXT-DAY ACTION PROPOSAL.
```

## STATUS AFTER AN UPDATE

After AI has actually updated entries in the ZASS file, it must state:

> **ZASS has been updated in the ZASS format and is ready for structured brainstorming.**

If AI has only shown a proposed change and has not updated the file, it must state that clearly and must not claim that the file has been updated.

## DEFAULT OUTPUT — NEXT-DAY ACTION PROPOSAL

After every `ZASSS` or `ZASS REVIEW`, AI must produce this proposal. It is a small work plan that measures the cost and value of an idea; it does not automatically authorize building the project.

AI must provide a short, readable response space before the next-day action proposal:

```text
## ✨ AI SUMMARY AND SUGGESTIONS

[AI writes 1–3 short natural paragraphs freely. It may summarize findings, connect patterns
it notices, or offer creative suggestions clearly labeled as candidates.]
```

This summary must be clearly presented as AI advice, not a decision; it may not modify any `LOCKED` decision or invent facts.

------------------------

```text
## 🧭 NEXT-DAY ACTION PROPOSAL

Tomorrow — Verify one critical assumption
Action: [one smallest action that can be taken tomorrow]
Output: [evidence / answer / small evaluable data point]

💰 Cost: RM___
⏱️ Time: ___ hours
🛑 Stop rule: Stop the action if [condition].
```

------------------------

AI must then close the output with a clear question:

**👉 NEXT STEP — PARK 🅿️, PROCEED ▶️, or PIVOT 🔄?**

- **PARK 🅿️** — After AI has actually updated the file, state dynamically that **[idea name/summary]** has been safely saved in ZASS format, including relevant records. Recommend **GitHub** or **Notion** as the best place to preserve the idea's history and start or resume the project when the owner is ready. If the file has not been updated, clearly state that this is only a proposed PARK record.

---

- **PROCEED ▶️** — AI recommends only the most relevant next action from these choices:
  - **🧪 Run an experiment** — test an assumption or `E-xxx` with small evidence.
  - **🔍 ZASS REVIEW** — state the **Method**, **Scope**, **Focus**, and a short reason.
  - **🛠️ Build a mini-prototype** — create a small artifact or simulation to test.
  - **⚖️ Propose a decision** — compare options, evidence, and trade-offs in `D-xxx`; it is not LOCKED.
  - **🔒 LOCK a decision** — only when the owner states the decision clearly.
  - **📦 COMMIT to GitHub** — only after the explicit instruction **“LOCK dan COMMIT”**; save one traceable versioned commit.

---

- **PIVOT 🔄** — AI searches for another direction that still solves the original problem and preserves earlier candidates in the record.
  - **🔀 Pivot candidate:** [an alternative direction appropriate to current evidence].


## LIGHTWEIGHT EVIDENCE AND DECISION DISCIPLINE

These additions sharpen ZASS without adding states or IDs. Use them when there is an experiment, risk, or candidate decision; never fill fields with invented facts.

**Problem being tested:** [one candidate sentence about the user or operational problem to validate].

### Experiment record (`E-xxx`)

```text
🔗 Goal/Question tested: [GOAL or Q-xxx]
🧠 Assumption: [what is being treated as true]
🎯 Pass/fail signal: [evidence or threshold that determines the result]
👀 Observed result: [what actually happened / PENDING]
📚 Learning: [what is known after observing the result / PENDING]
➡️ Impact: PARK / PROCEED / PIVOT — [reason]
```

### Risk record (`R-xxx`)

```text
🚨 Early warning signal: [sign that the risk is beginning to occur]
```

### Decision record (`D-xxx`)

```text
🧭 Decision drivers: [criteria that truly matter]
🗂️ Options considered: [alternatives compared]
✅ Decision: [owner choice / PENDING when not yet decided]
🔄 Consequences: [what changes or must be accepted]
🔁 Revisit trigger: [evidence or condition requiring review]
```

For multi-owner projects only, AI may suggest **DACI** roles (Driver, Approver, Contributors, Informed). It is optional; the project owner remains the party that LOCKS decisions in ZASS.

### Optional modes, not mandatory flow

- **Cynefin triage** — match work to the issue: clear → checklist; complicated → expert analysis; complex → small experiment; chaotic → stabilize first.
- **Design Sprint mode** — use when the user challenge is clear and a team wants to prototype and test quickly.
- **Wardley Mapping** — use outside the default output for large projects with many components, dependencies, vendors, or build-vs-buy choices.

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

### ZASSS

Capture and explore a raw idea without modifying LOCKED decisions. Return the NEXT-DAY ACTION PROPOSAL and ask whether to PARK, PROCEED, or PIVOT.

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
