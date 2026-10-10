# ZASS
## Zero-to-Architecture Structured Sprint

> **Think once. Keep the decisions. Continue with any AI.**

AI is great at thinking with you.

The problem starts when you change chats, change models, return a week later, or ask another AI to continue the same project.

You repeat the context. Old decisions return. Rejected ideas come back. AI suggestions get mistaken for decisions. Architecture slowly drifts away from what you actually agreed.

**ZASS gives your project a memory outside the AI.**

It keeps the important thinking, decisions, evidence, and architecture in portable Markdown â€” with humans retaining control over what becomes authoritative.

```text
Think anywhere
      â†“
Capture what matters
      â†“
Human-approved decisions
      â†“
GitHub Source of Truth
      â†“
Continue with any AI
```

**Any AI can think. One trusted writer saves. GitHub remembers.**

---

# ZASS SYSTEM

The locked product entry model is:

> **DUMP / DECIDE / DESIGN**

```text
ZASS SYSTEM
    â†“
What do you need right now?
    â”‚
    â”œâ”€â”€ DUMP   â†’ ZASSPILL
    â”œâ”€â”€ DECIDE â†’ ZASSELECTION
    â””â”€â”€ DESIGN â†’ ZASSIMPLE â†’ Full ZASS when needed
```

The system is designed around two complementary first-class surfaces:

```text
LOCAL CORE / CLI  â†â†’  AI-SYNC WEB
          â†“
  GitHub Source of Truth
```

Local tooling stays independently useful. AI-SYNC Web is the future UX / automation layer: conversational DUMP-first workspace, progressive disclosure, contextual decision/design/task cards, factual Git-backed SAVE receipts, and review/history when needed.

**Primary UX rule:** show the user the **next meaningful human action**, not all internal framework complexity.

**Human presentation rule:** structured output follows the [ZASS Human Presentation Contract (HPC)](docs/ZASS_HUMAN_PRESENTATION_CONTRACT.md): **same truth, clearest faithful representation available**. Architecture/process flows should prefer a supported rendered/structured representation; wide ASCII art is not the default conceptual-diagram fallback.

See [ZASS SYSTEM UI/UX Contract](docs/ZASS_SYSTEM_UI_UX_CONTRACT.md).

**Freeze boundary:** AISYNC/CrossAI runtime, human beta, provider continuity, and downstream Bootstrap Core consumption are owned downstream and do not keep ZASS SYSTEM development open. See [ZASS ↔ AISYNC Downstream Handoff Boundary](docs/ZASS_AISYNC_DOWNSTREAM_HANDOFF_BOUNDARY.md).

**ZASSCODE execution boundary:** projects may explicitly adopt the separate ZASSCODE module after the applicable PRE-ARCH approval and basic ACTION_PLAN handoff. ZASS retains architecture/decision authority; detailed coding and field-delivery mechanics remain downstream. See [ZASS ↔ ZASSCODE Downstream Handoff Boundary](docs/ZASS_ZASSCODE_DOWNSTREAM_HANDOFF_BOUNDARY.md).

**Global language UX:** ordinary conversation may follow the user, but structured method surfaces follow the active method file language. If a user speaks Bahasa Melayu while an English method file is active, ZASS notifies once that the matching Malay file is available; it never switches files automatically.

**System versioning rule:** user-visible ZASS SYSTEM routing, UI/UX, product-surface, or integration-contract changes bump the ZASS SYSTEM version even when individual method semantics do not change.

**AI-SYNC Method Gateway:** cross-AI method readability is a locked transport responsibility of AI-SYNC. GitHub remains the authoritative method Source of Truth. AI-SYNC T-013A and T-013B have passed: protected GitHubâ†’METHODS snapshot sync is operational, and the public read-only Method Gateway has passed anonymous-browser, Gemini, and Copilot direct-read proof. Receiver guardrail remains strict: use the exact gateway URL, and if a receiver cannot fetch it, report the failure rather than substituting another source as method authority.


**ZASSPILL:** the v1.0.0 **method/protocol contract is PRODUCTION READY** after Phase 1â€“6 proof. Runtime persistence, retrieval, authorization, and transport remain AI-SYNC/ASC responsibilities. **DUMP / DECIDE / DESIGN** is the released global ZASS SYSTEM entry model: DUMP â†’ ZASSPILL, DECIDE â†’ ZASSELECTION, DESIGN â†’ ZASSIMPLE.

---

# Start ZASS your way

You do not need to learn the whole framework before using it.

## 1. Just brainstorm â€” zero setup

Already discussing an idea somewhere else?

Keep going. No setup required.

When something becomes worth preserving:

```text
useful conversation
       â†“
copy / paste
       â†“
trusted GitHub-writer AI
       â†“
ZASS
       â†“
review / decide
       â†“
COMMIT
```

**Start structured, or start messy. ZASS can capture it later.**

---

## 2. Public project â€” paste the link

If your ZASS project is public, paste the repository URL into another AI that can read public links.

Example:

```text
Read this public ZASS project first:

[PROJECT URL]

Treat the repository as the Source of Truth.
Respect all existing LOCKED decisions.

Continue brainstorming with me naturally.
Challenge assumptions and surface useful ideas, questions,
risks and alternatives, but do not silently change LOCKED decisions.

At the end of the session, export a Markdown handoff
containing useful findings and proposed changes.

The handoff is NOT the Source of Truth.
```

Bring the resulting `ZASS_HANDOFF.md` back to your trusted writer.

```text
Another AI
    â†“
brainstorm / challenge / review
    â†“
ZASS_HANDOFF.md
    â†“
trusted writer checks latest repo
    â†“
human approval
    â†“
COMMIT
```

---

## 3. CLI â€” available now

**Bootstrap status: `create-zass-project@0.1.0` PUBLISHED / VERIFIED â€” public npm bootstrap is live.**

Target experience:

```bash
npm create zass-project@latest my-project
```

If method/language flags are not supplied, the interactive bootstrap asks the user to choose:

```text
Method:
  ZASSPILL
  ZASSELECTION
  ZASSIMPLE
  FULL ZASS

Language:
  English
  Bahasa Melayu
```

There is **no silent npm method default**.

Automation may be explicit:

```bash
npm create zass-project@latest my-project -- --method zassimple --lang en
```

Public npm `latest` remains `create-zass-project@0.1.0`, which creates the historical v0.1 three-artifact bootstrap.

Repository source has advanced to the next `create-zass-project@0.2.0` candidate, which is **not yet published**. Source-generated projects now add `.zass/project.json` CR-011 machine metadata; Full ZASS source generation also carries `docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md` so its canonical local reference is self-contained.

Full ZASS always uses `ZASS.md` as the generated project authority filename so current `zass check/status/diff` discovery remains compatible.

> **The project-bootstrap CLI is published as `create-zass-project@0.1.0`. The public command `npm create zass-project@latest` has passed fresh-registry smoke verification. The original `create-zass` identity was rejected by npm's similarity policy and is historical only.**
>
> Contract: [`docs/ZASS_NPM_BOOTSTRAP_CLI_V01.md`](docs/ZASS_NPM_BOOTSTRAP_CLI_V01.md)
>
> **Developer tooling:** CR-010 is **CLOSED** at **zass-cli v0.4.0** under [`cli/`](cli/README.md): `zass check`, `zass status`, and `zass diff`. CR-011 repository source now adds optional `.zass/project.json` machine-metadata validation while Markdown remains semantic authority. See [`docs/CR011_MACHINE_METADATA_GUIDE.md`](docs/CR011_MACHINE_METADATA_GUIDE.md).

---

## 4. File â€” start now

Download or copy:

**[ZASSIMPLE_EN.md](ZASSIMPLE/ZASSIMPLE_EN.md)**

Give it to your AI and talk normally.

You do not need to fill forms or memorize IDs.

When you want the conversation organized, say:

```text
ZASS
```

When a decision is final:

```text
LOCK DECISION
```

When approved project state should be saved:

```text
COMMIT
```

---

# The core idea

ZASS separates three things that AI conversations often blur together:

```text
AI suggestion
      â‰ 
Owner decision
      â‰ 
Git change
```

AI can propose.

Humans decide.

Git records what actually became project state.

A suggestion never becomes a decision merely because an AI wrote it. A decision never becomes a Git change merely because someone discussed it.

---

# ZASS Convergence Loop

> **Capture broadly, converge deliberately. Form candidates first; research only what can change the choice.**

```text
CAPTURE
  â†“
MATCH
  â†“
SYNTHESIZE
  â†“
RESEARCH
  â†“
CROSS-CHECK
  â†“
LOCK
  â†“
ARCHITECTURE
```

The practical rule is simple:

> **Research follows candidate formation, not idea capture.**

ZASS can collect many raw ideas, constraints, risks, evidence, test results and existing LOCKED decisions without forcing an early choice. Once enough material exists, it matches complementary ideas, synthesizes coherent candidates, removes candidates that fail must-haves, and researches only the questions that can actually change the shortlist or decision.

Research findings return to the candidate/matrix state first. They do not jump directly into architecture. The owner still LOCKs decisions; architecture follows what was genuinely decided.

**[Read the full Convergence Loop guide](wiki/Convergence-Loop.md)**

---

# From idea to architecture

```text
RAW IDEA
    â†“
EXPLORE
    â†“
QUESTIONS / RISKS / OPTIONS
    â†“
TEST when needed
    â†“
HUMAN DECISION
    â†“
LOCKED
    â†“
DRAFT ARCHITECTURE
    â†“
ARCHITECTURE CHALLENGE
    â†“
CONTROLLED REVISION
    â†“
OWNER REVIEW
    â†“
LOCK PRE-ARCH BASELINE
    â†“
CAPABLE REASONER / DETAILED ACTION PLAN
    â†“
ATOMIC TASKS
    â†“
EXECUTION / RESULT
    â†“
PRE-ARCH REVIEW / REVISION
    â†“
SUFFICIENT IMPLEMENTATION EVIDENCE
    â†“
LAST ARCHITECTURE CHALLENGE
    â†“
FINAL IMPROVE / REVISION
    â†“
YA, CONFIRM ARCHITECTURE
    â†“
REBUILD RELEASE ACTION PLAN
    â†“
RELEASE ATOMIC TASKS
    â†“
BUILD / TEST / INTEGRATE / HARDEN / VERIFY
    â†“
RELEASE ACCEPTANCE
    â†“
DELIVERED !!
```

ZASS does not ask AI to invent architecture first and justify it later.

Architecture must follow the decisions that were actually accepted. For material technical architecture, the challenged/revised draft becomes an owner-approved **PRE-ARCH execution baseline** before detailed planning. A capable reasoner/planner then builds the detailed Action Plan and atomic evidence tasks; results feed back through PRE-ARCH review. When evidence is sufficient, one **last evidence-backed architecture challenge** and any final improvement/revision happen before owner confirmation. After architecture is confirmed, ZASS rebuilds the release Action Plan and fresh atomic tasks to build, integrate, harden and verify the first release through `DELIVERED !!`.

**[Read the Architecture-to-Execution Standard](docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md)**

---

# A 2-minute example

You start naturally:

```text
I want to build a simple app that helps small farmers
remember daily crop tasks.
```

Ask:

```text
ZASS
```

The AI organizes what matters:

```text
Idea
Goals
Unknowns
Risks
Options
Possible decisions
```

After discussion, you choose:

```text
Use a PWA for v0.1.
Keep data local.
Provide export/import backup.
```

Those choices become explicit project decisions.

Later:

```text
DRAFT ARCH
```

ZASS builds a working architecture draft from what is known and LOCKED.

For material technical architecture, the next steps are:

```text
ARCHITECTURE CHALLENGE
→ YA, LOCK PRE-ARCH
→ detailed ACTION PLAN
→ evidence atomic tasks
→ result/evidence
→ PRE-ARCH review
→ sufficient evidence
→ LAST ARCHITECTURE CHALLENGE
→ final improve/revision
```

Only after the required evidence, last challenge and final revision are resolved does `BUILD ARCHITECTURE` open the final owner confirmation gate:

```text
YA, CONFIRM ARCHITECTURE
```

After confirmation, rebuild the release plan from current truth:

```text
ARCHITECTURE CONFIRMED
→ RELEASE ACTION PLAN
→ fresh atomic tasks
→ build first release
→ test / integrate / harden / verify
→ release acceptance
→ DELIVERED !!
```

A complete fictional walkthrough is available here:

**[Small Farm Planner example](examples/01-small-farm-planner/README.md)**

---

# ZASSIMPLE first. Full ZASS when needed.

Most projects should start with **ZASSIMPLE**.

Use it while you are mainly figuring out:

> **What should I build?**

Move to **Full ZASS** when you increasingly need to explain or prove:

> **Why should it be built this way?**

Full ZASS becomes useful when:

- important decisions depend on each other;
- evidence or experiments are needed;
- several architecture options have meaningful trade-offs;
- privacy, security, money, data loss, or operational risk matters;
- decision history becomes difficult to track conversationally.

You do not migrate because a project becomes â€œbigâ€.

You migrate because the **decision complexity** becomes important.

**Start here (default, English):** [ZASSIMPLE_EN.md](ZASSIMPLE/ZASSIMPLE_EN.md)
**Bahasa Melayu:** [ZASSIMPLE_MY.md](ZASSIMPLE/ZASSIMPLE_MY.md)
**Full ZASS (default, English):** [ZASS.md](ZASS.md)
**Bahasa Melayu Full ZASS:** [ZASS_MY.md](ZASS_MY.md)

---

# When the problem is choosing

Sometimes you do not need architecture.

You simply need to make a difficult choice.

That is what **ZASSELECTION** is for.

It separates:

```text
must-haves
preferences
evidence
unknowns
cost
risk
feelings
reversibility
human impact
```

AI may compare and recommend. Only the human selects.

**Default ZASSELECTION (English):** [ZASSELECTION_EN.md](ZASSELECTION/ZASSELECTION_EN.md)
**Bahasa Melayu:** [ZASSELECTION_MY.md](ZASSELECTION/ZASSELECTION_MY.md)

---

# Architecture readiness is not evidence confidence

ZASS keeps these separate.

```text
Architecture Readiness
= Are we clear enough to build the architecture?

Evidence Confidence
= How strongly is the project supported by observed evidence?
```

A project can have:

```text
Architecture Readiness: 100%
Evidence Confidence: LOW
```

That means the architecture is internally clear enough to confirm, but important real-world assumptions may still need validation.

ZASS currently uses:

```text
UNVALIDATED
LOW
MEDIUM
HIGH
```

for Evidence Confidence.

In Full ZASS, Evidence Confidence is mandatory whenever a real `ZERO â†’ ARCHITECTURE` assessment is shown, DRAFT ARCH readiness is evaluated, BUILD ARCHITECTURE runs, or a confirmed architecture still has open validation/experiments.

---

# One Source of Truth

For a Git-backed ZASS project:

> **GitHub is the Source of Truth.**

Not the chat. Not AI memory. Not whichever model you used last.

```text
GitHub
  â†‘
trusted writer
  â†‘
human approval
  â†‘
ideas from any AI
```

This makes cross-AI work practical.

Different AI tools do not all need the same integrations. They only need a way to understand the project state and return useful thinking.

---

# What ZASS is not

ZASS is not:

- an AI model;
- a project-management replacement;
- a requirement to document every thought;
- a voting system between multiple AIs;
- permission for AI to silently change earlier decisions.

ZASS is a **decision-control layer for AI-assisted work**.

Its job is simple:

> **Preserve the thinking that matters, keep decisions human-controlled, and make the resulting architecture traceable.**

---

# Current methods

| Need | Use |
|---|---|
| Start casually and turn ideas into domain-appropriate design | **ZASSIMPLE** |
| Deep decision / evidence / architecture governance | **Full ZASS** |
| Choose between alternatives | **ZASSELECTION** |
| Portable DUMP continuity across chats/AIs | **ZASSPILL** |
| Track persistent implementation work | **ACTION PLAN** |

You normally do **not** need all of them at the beginning.

---

# Current status

**Development posture:** ZASS SYSTEM is **FEATURE FROZEN / STABLE**. TRACK F final hygiene is CLOSED / PASS. New methodology/product work is not active; reopen only for a critical defect, material real field evidence, or explicit owner decision.


**ZASS SYSTEM:** v0.2.5 â€” ZASSIMPLE challenge/re-challenge gate + global DUMP / DECIDE / DESIGN routing + global EN/MY method-surface routing + AI-SYNC integration contract + ZASSCODE stage-project-factory handoff
**Full ZASS:** v0.3.11 â€” challenge → PRE-ARCH → Execution Reality Check → real-sample evidence loop → LAST CHALLENGE → final architecture confirmation → rebuilt release plan → first release → DELIVERED !!<br>
**ZASSIMPLE:** v0.3.3
**ZASSELECTION:** v0.2.4
**ZASSPILL:** v1.0.0 method/protocol contract â€” PRODUCTION READY; global DUMP continuity route

> **2026-10-09 controlled post-freeze patch:** real-field OpsMate execution exposed repeated-work risk when real artifacts arrive only after task slicing. Full ZASS and ZASSIMPLE now require an Execution Reality Check, early real-sample/fixture reuse, execution-surface mapping, evidence-bounded vertical tasks, and delta planning for applicable technical work. Core decision authority is unchanged.

**Previous refinement receipt:** [ZASS SYSTEM HPC Presentation Governance Refinement](docs/ZASS_SYSTEM_HPC_REFINEMENT_2026-10-09.md)

**Current integration receipt:** [ZASSCODE integration and refreeze gate](docs/ZASS_SYSTEM_ZASSCODE_INTEGRATION_2026-10-10.md). The bounded bridge is merged and its complete CI passed. The separate module bootstrap is verified; application intake and all application stages remain NOT_RUN.

**License:** [MIT](LICENSE)

Current Full-ZASS commands:

```text
ZASS!!
PROCEED
PIVOT
COMMIT
```

`PROCEED` approves exactly the explicitly listed `PROPOSED FOR PROCEED` set from the latest ZASS mapping. It does not approve unlisted suggestions and does not commit or push.

`PARKED` remains a project state, but `PARK` is no longer a Full-ZASS command.

---

## Final freeze

Original final-freeze receipt: [ZASS SYSTEM Final Freeze](docs/ZASS_SYSTEM_FINAL_FREEZE.md). Current bounded integration closure and exact refreeze gate: [ZASSCODE integration receipt](docs/ZASS_SYSTEM_ZASSCODE_INTEGRATION_2026-10-10.md). Historical freeze references are retained.

# Learn more

The long-form Wiki/reference is now published on GitHub:

**[Open the ZASS Wiki](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/wiki)**

Version-controlled Wiki source: [wiki/Home.md](wiki/Home.md)

It includes:

- Quick Start
- ZASSIMPLE
- Full ZASS
- Architecture Readiness + Evidence Confidence
- ACTION PLAN
- Architecture-to-Execution Standard
- Human Presentation Contract (HPC)
- cross-AI handoff
- ZASSELECTION
- ZASSPILL v1.0 continuity
- advanced review methods
- productization and `zass check`
- Bahasa Melayu summary
- historical infographic index

The GitHub Wiki is published from the version-controlled `wiki/` source into GitHub's separate `.wiki.git` repository. The authoritative method files remain in this main repository.

---

# The principle

> **Don't shortcut thinking. Eliminate repeated thinking.**

Think freely.

Let AI challenge you.

Keep the useful state.

Make the decision yourself.

Then let architecture follow what you actually decided.




