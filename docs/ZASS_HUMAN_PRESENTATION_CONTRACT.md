# ZASS Human Presentation Contract (HPC)

**Version:** 0.1  
**Status:** LOCKED — shared human-presentation governance  
**Date:** 2026-10-09  
**Applies to:** ZASS SYSTEM human-facing structured output; mandatory for Full ZASS and ZASSIMPLE; inherited by other ZASS methods where compatible with their method-specific contracts  
**Authority type:** presentation-layer contract, not semantic authority

> **Same truth, clearest faithful representation available.**

## 1. Purpose

ZASS already governs reasoning, evidence, decisions, architecture, execution, lineage, and authority. HPC governs how that state is presented to a human so that the same semantic truth remains readable, understandable, mobile-friendly, and consistent across capable AI/client surfaces.

Observed field evidence motivating this contract:

- OPSLOOP architecture was easier to understand when presented with boxes, hierarchy, arrows, spacing, and clear visual grouping.
- Another architecture discussion presented a Cloudflare design primarily as wide ASCII/code-block art, which preserved content but was materially harder to read on a phone.

This is therefore not a cosmetic style guide. It is **human-interface governance**.

## 2. Architecture decision

HPC is a **shared mandatory presentation-layer contract**.

It is not:

- a new ZASS reasoning method;
- a renderer;
- a UI framework;
- a design system;
- a requirement to use Mermaid, React, HTML, or any particular client technology;
- a second Source of Truth.

Canonical artifacts remain authoritative according to their existing contracts. Human presentation is a projection of that truth.

## 3. Authority boundary

Presentation must never:

- create a decision;
- promote a proposal to LOCKED;
- hide a material caveat;
- change evidence, confidence, acceptance, PASS/FAIL, blocker, or completion state;
- imply owner approval that did not occur;
- omit a material dependency merely to make a diagram cleaner.

When presentation and semantic authority appear to conflict, **semantic authority wins**.

Rendered diagrams, cards, tables, and summaries are projections. They do not replace the canonical artifact.

## 4. Representation selection

Choose the highest-quality **faithful representation that the current environment is known to support**.

Capability rule:

- **Known rich capability:** prefer an accessible native/rich representation when it materially improves comprehension.
- **Capability unknown:** prefer structured Markdown; do not gamble on unsupported rich syntax.
- **Known text-only capability:** use structured text hierarchy and concise vertical flow.

Do not require pixel-identical rendering across clients. Reproducibility means the same semantic output should map to the same **representation class** where capability is equivalent.

## 5. Fallback hierarchy

Generic fallback order:

1. **Native rendered UI / accessible visual diagram**
2. **Structured Markdown** — cards, headings, concise tables, grouped sections, indentation
3. **Simple text hierarchy** — short vertical flow, numbered/layered structure

ASCII/monospace is a separate exception path, not the generic fourth level.

Use ASCII/monospace when the information is naturally technical and monospace-native, such as:

- repository/file trees;
- terminal or CLI output;
- logs and traces;
- commands;
- protocol/wire formats;
- literal source snippets.

Do **not** default architecture, business process, decision flow, lifecycle, or conceptual relationship diagrams to wide ASCII art merely because code blocks are available.

## 6. Output class → preferred presentation

| Semantic output | Preferred presentation |
|---|---|
| Architecture / system relationships | rendered/layered diagram; otherwise structured layered Markdown |
| Process / lifecycle / workflow | flow diagram; otherwise vertical structured flow |
| Comparison / selection | concise matrix/table; cards if a wide table would be harder to read |
| Decision | compact decision card with reason and explicit state |
| Action plan | staged plan, milestones, checklist, or grouped workstreams |
| Atomic task | one bounded task card with outcome/pass condition |
| Project status | compact pulse/progress summary |
| Evidence | evidence table or evidence cards with traceable source/reference |
| Risks / blockers | concise severity/state table or cards |
| Repo/file tree | monospace tree allowed |
| Logs / terminal / commands | code block allowed |
| Protocol/wire format | monospace/code block allowed |

This mapping is a preference contract, not a rigid renderer. Fidelity and readability outrank format loyalty.

## 7. Mobile-first rules

Human presentation should minimize unnecessary width.

Prefer:

- vertical hierarchy when it reduces horizontal scrolling;
- logical layers rather than one giant architecture canvas;
- several small diagrams/cards rather than one unreadably wide diagram;
- short labels with supporting detail below;
- split tables/cards when a table becomes too wide for ordinary phone reading.

Avoid:

- long left-to-right chains;
- deep nested boxes that require horizontal panning;
- wide multi-column tables when equivalent grouped cards are clearer;
- decorative density that hides the actual state.

Mobile-first does not mean every graph must be vertical. It means width is treated as a real usability constraint.

## 8. Accessibility rules

Visual clarity must not depend on vision-specific cues alone.

Minimum rules:

- colour must not be the only signal;
- critical state must have a text label, e.g. **BLOCKED**, **PASS**, **PROPOSED**, **LOCKED**;
- icons/emoji may support meaning but cannot carry unique meaning alone;
- diagram nodes and relationships require meaningful text labels;
- a complex visual must have a concise text-readable summary or equivalent;
- presentation order should remain understandable when read linearly;
- do not hide evidence/status only in hover, colour, or spatial position.

## 9. ZASSIMPLE presentation principle

ZASSIMPLE remains lightweight in visible process complexity.

That does **not** permit low-quality presentation.

Locked principle:

> **Lightweight di permukaan, lineage kuat sampai execution, presentation tetap kemas.**

ZASSIMPLE should hide unnecessary framework mechanics while still applying the same readability, mobile, accessibility, fallback, and authority-fidelity rules.

## 10. Full ZASS presentation principle

Full ZASS may expose more evidence, challenge, architecture, and execution state than ZASSIMPLE, but increased governance must not become unnecessary visual clutter.

Use progressive disclosure:

- show the current reasoning/result clearly;
- expose detailed lineage/evidence when materially useful or requested;
- decompose complex architecture into logical layers;
- keep proposal, decision, evidence, and execution states visually distinguishable without altering their semantics.

## 11. Source vs projection

Examples:

```text
ARCHITECTURE.md / ZASS.md / ACTION_PLAN.md
              ↓
     canonical semantic state
              ↓
              HPC
              ↓
best supported faithful human representation
```

A repository may store Markdown, YAML, JSON, Mermaid source, text, or another technical representation. The human-facing answer does not need to reproduce that storage format literally when a clearer faithful projection is available.

## 12. Consistency and precedence

HPC is shared system-level governance.

Precedence:

1. semantic/authority contract;
2. method-specific contract;
3. HPC representation rules;
4. client-specific styling.

A client may render HPC differently, but it may not weaken authority fidelity.

CrossAI may eventually implement richer native HPC rendering. CrossAI is **not** a prerequisite for HPC compliance.

## 13. Minimum compliance check

Before presenting a structured ZASS result, ask:

1. What semantic output class is this?
2. What representation capability is actually known?
3. Is the chosen format readable on a phone?
4. Would a narrower/vertical decomposition be clearer?
5. Does the presentation preserve proposal/decision/evidence/acceptance state exactly?
6. Is there a text-readable equivalent for important visual meaning?
7. Am I using ASCII because it is semantically appropriate, or merely because it is easy?

If capability is uncertain, use structured Markdown.

## 14. Non-goals

HPC v0.1 does not define:

- exact colours;
- typography;
- spacing tokens;
- icon libraries;
- CSS;
- breakpoints;
- diagram engine;
- card component APIs;
- animation;
- branding themes.

Those may belong to a future client/product design system and must not be confused with ZASS semantic governance.

## 15. Versioning

HPC is versioned independently as a presentation contract.

A material user-visible change to system-level presentation governance may bump the **ZASS SYSTEM** version even when Full ZASS or ZASSIMPLE method semantics do not change.

HPC changes must not silently change decision authority or method semantics.
