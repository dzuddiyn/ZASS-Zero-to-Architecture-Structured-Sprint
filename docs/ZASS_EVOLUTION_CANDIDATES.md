# ZASS Evolution Candidates

**Status:** CANDIDATE REGISTER — NOT LOCKED  
**Purpose:** Keep potentially useful ZASS evolution ideas without changing the current method prematurely.  
**Authority:** This file is an idea register only. It does not override `ZASS.md`, `ZASSIMPLE.md`, `ZASSELECTION.md`, or any LOCKED decision.

> New ideas about improving ZASS should be recorded here first unless the project owner explicitly decides otherwise.

## Rules

- Adding an item here does **not** mean the idea is approved.
- `COMMIT` records the candidate in Git history; it does **not** make the candidate `LOCKED`.
- Do not bump the ZASS version merely because a candidate is added here.
- Do not update `CHANGELOG.md` unless an actual method/documentation change is implemented.
- Prefer evidence from real ZASS use cases before promoting a candidate into the method.
- Avoid adding ceremony unless it clearly reduces repeated thinking, decision drift, lost assumptions, or traceability problems.
- When a candidate is accepted, rejected, superseded, or deferred, update its status here and link the resulting ZASS decision or commit when relevant.

## Candidate Statuses

- `CANDIDATE` — worth retaining for future consideration.
- `TEST` — should be evaluated through a real project or controlled example.
- `TEST WHEN NEEDED` — useful only when a triggering complexity appears.
- `PARKED` — retained but not currently worth testing.
- `DEFERRED` — valid idea, intentionally postponed.
- `SCALE-OUT CANDIDATE` — relevant only when project/team size exceeds the current single-file model.
- `OUT OF CURRENT SCOPE` — not part of the present Zero-to-Architecture purpose.
- `ACCEPTED` — approved for implementation, but implementation may still be pending.
- `REJECTED` — explicitly not adopted.
- `SUPERSEDED` — replaced by a newer candidate or decision.

---

## CR-001 — First-class Critical Assumption Ledger

**Status:** TEST  
**Source:** External Copilot review  
**Problem observed:** ZASS already records assumptions inside experiments and architecture readiness, but important assumptions that have not yet become experiments may remain implicit between questions, risks, and decisions.

### Candidate shape

Use a dedicated assumption identifier that does not conflict with ACTION PLAN `A-xxx` action IDs.

Example:

```text
AS-001 | OPEN

Assumption:
Users are willing to perform manual backup.

Why it matters:
If false, a local-only architecture may create unacceptable data-loss risk.

Confidence:
LOW

Validation:
E-003

Affected decisions:
D-002, D-003
```

### Why test it

Potential benefit:

- makes hidden assumptions visible;
- improves traceability between assumptions, experiments, and decisions;
- may reduce architecture decisions based on untested beliefs.

Potential cost:

- adds another first-class ID and ledger;
- may duplicate questions or experiment hypotheses;
- may increase ceremony for small projects.

### Test question

> Does a first-class `AS-xxx` assumption record prevent meaningful assumptions from being lost better than the current ZASS structure?

Do not add this to the core template until real usage shows clear value.

---

## CR-002 — Decision Dependency Metadata

**Status:** TEST WHEN NEEDED  
**Source:** External Copilot review

Candidate optional fields:

```text
Depends On:
Affected By:
```

Possible use:

- decisions with many upstream dependencies;
- architecture decisions where changing one LOCKED decision has a visible impact on others;
- larger projects where decision traceability becomes hard to follow manually.

Do not require these fields by default. Test only when a real decision graph becomes difficult to understand.

---

## CR-003 — Decision Type

**Status:** PARKED  
**Source:** External Copilot review

Candidate categories:

```text
STRATEGIC
TACTICAL
OPERATIONAL
```

Potential value:

- distinguishes high-impact architecture/business choices from routine decisions;
- may help review or filtering in larger projects.

Concern:

- may add classification work without improving the actual decision;
- boundaries between categories can be subjective.

Keep parked until a real use case shows a clear need.

---

## CR-004 — Stakeholder Ledger

**Status:** PARKED  
**Source:** External Copilot review

Possible model:

```text
S-001 — Customer
S-002 — Owner
S-003 — Supplier
```

Current ZASS already considers stakeholders through architecture readiness and stakeholder/conflict review lenses.

A dedicated ledger should only be added if repeated real projects show that stakeholder identity, responsibility, or conflicts are being lost.

---

## CR-005 — Metrics Ledger

**Status:** DEFERRED  
**Source:** External Copilot review

Possible examples:

```text
M-001 — Weekly Sales
M-002 — Conversion Rate
M-003 — Gross Margin
```

Current ZASS already supports measurable experiment signals through pass/fail criteria, observed results, and experiment evidence.

A general metrics ledger could push ZASS beyond Zero-to-Architecture into product operations. Reconsider only if architecture decisions repeatedly depend on persistent project-level metrics that do not fit experiments.

---

## CR-006 — Scale-out Multi-file Structure

**Status:** SCALE-OUT CANDIDATE  
**Source:** External Copilot review

Possible future structure:

```text
decisions/
risks/
experiments/
architecture/
```

Potential trigger:

- very large decision count;
- multiple contributors;
- difficult file navigation;
- complex decision dependency graph.

Current default remains a portable single project ZASS file because that simplicity is valuable for solo builders and cross-AI handoff.

Do not fragment the default workflow merely to prepare for hypothetical scale.

---

## CR-007 — Operation / Post-mortem Lifecycle

**Status:** OUT OF CURRENT SCOPE  
**Source:** External Copilot review

Proposed extended lifecycle:

```text
Zero
→ Validation
→ Decision
→ Architecture
→ Operation
→ Learning
```

This is conceptually useful, but it changes the scope from **Zero-to-Architecture** toward a complete product/operations lifecycle framework.

For now:

- ZASS remains focused on discovery, evidence, decisions, and architecture.
- ACTION PLAN handles execution.
- Operational/post-mortem methodology should not be added without a separate scope decision.

---

## Existing Capability Notes

The external review also suggested several capabilities that already exist in current ZASS-related files:

### Priority

ACTION PLAN already uses:

```text
P0
P1
P2
P3
```

Therefore, priority should not be duplicated across every ZASS question, risk, or decision unless real evidence shows a need.

### Assumptions inside experiments

Current ZASS experiment discipline already includes:

```text
Assumption
Pass/fail signal
Observed result
Learning
Impact
```

CR-001 is specifically about assumptions that exist **before** or **outside** a defined experiment.

### Stakeholder awareness

Current ZASS includes stakeholder-oriented architecture readiness and optional stakeholder/conflict review lenses.

CR-004 concerns whether a persistent first-class stakeholder ledger is ever necessary.

---

## Evaluation Principle

When considering any future ZASS feature, ask:

> Does this reduce repeated thinking, decision drift, hidden assumptions, or lost traceability — or does it merely add framework ceremony?

The core differentiation to protect is:

> **Externalized decision memory + human-controlled LOCKED decisions.**

---

## Register Policy

Use this file as the default holding area for future ZASS evolution ideas.

New ideas may be appended as `CR-xxx` entries.

They remain candidates until the project owner explicitly approves a change through the appropriate ZASS decision process.
