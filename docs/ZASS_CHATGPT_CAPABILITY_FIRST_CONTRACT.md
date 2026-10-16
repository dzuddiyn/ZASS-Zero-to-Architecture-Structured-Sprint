# ZASS SYSTEM — ChatGPT Capability-First / Plugin-First Contract

**ZASS SYSTEM version:** v0.2.6
**Status:** OWNER-DIRECTED / LOCKED SYSTEM-LEVEL WORKING RULE
**Date:** 2026-10-16
**Scope:** ZASS SYSTEM, Full ZASS, ZASSIMPLE and relevant ChatGPT-assisted planning, design, prototyping and delivery recommendations
**Authority boundary:** Workflow/tool-selection guidance only. No change to human decision authority, Source of Truth, evidence gates or method semantics.

> **Before proposing that the user build something, discover what ChatGPT and its available apps/plugins can already do.**
>
> **Reuse capable tools. Prototype quickly. Build only the missing part.**

## 1. Non-negotiable default

Do not default to writing a portal, dashboard, drawing environment, automation, connector, document editor, or other software from scratch without checking whether existing ChatGPT-native capabilities, connected plugins/apps, suitable services, templates, or reusable components can accomplish the objective more simply.

The user should not be required to know the plugin directory or name a tool first. The AI must proactively identify and recommend a relevant shortcut when it would materially reduce effort, cost, time or cognitive load.

This is **capability-first, not plugin-only**: if a plugin is unsuitable, unavailable, expensive, unsafe or incapable of completing the goal, use the next simplest valid route. Do not invent an integration to justify a preferred tool.

## 2. Required lightweight routing before a substantial build recommendation

1. **Clarify the real outcome:** distinguish visual exploration, clickable prototype, working internal tool, or production-ready system. Honor existing LOCKED requirements and explicit project boundaries.
2. **Check what's already available:** review useful first-party ChatGPT capabilities and the available/connected plugin, app or connector tools. Discover other suitable plugins when relevant; do not claim an app is installed or functional without evidence. Consider existing code/templates/low-code products as well.
3. **Verify the actual fit:** what the tool demonstrably does, data access, pricing/quotas, export or handoff path, user permissions, vendor lock-in and security/privacy implications.
4. **Recommend the shortest safe path:** prefer direct supported output or a ready tool, then a prototype, then integration/configuration, then minimal custom coding, reserving full custom development for a demonstrated gap.
5. **Explain the residual work:** be explicit about mock versus real data; prototype versus production; authentication, storage, security, deployment, verification and maintenance still needed. Do not imply that a visual prototype is production software.
6. **Obtain normal approvals:** read-only exploration is not permission to send private data to external services, make external writes, deploy, pay or change authoritative project state. Preserve approval, SAVE receipts, version history and evidence requirements.

Perform this check internally and briefly. Normally surface only the most useful shortcut, one relevant alternative if necessary, and the next practical action. Avoid a long plugin catalogue unless requested.

## 3. Concrete examples

### Digital Library (DL) web portal

**Avoid:** instructing the user to implement an entire front end from zero as the default first step.

**Prefer:** inspect existing DL architecture, requirements and permitted read-only data; check whether **MagicPath** can provide a compelling interactive portal prototype quickly; verify real-data access and permission before using DL information; review the prototype with the owner; then identify only the backend/auth/data integration and production hardening that remain. A MagicPath preview alone is not a deployed, production-verified DL portal.

### Visual brainstorming and architecture communication

**Avoid:** forcing the user to infer a proposed interface or architecture from long ASCII diagrams or prose when a sketch would be clearer.

**Prefer:** offer **tldraw** (or another available drawing/design tool) to sketch flows, screens, blocks, arrows and architecture relationships, or use a native rich representation supported by the current client. Visual outputs remain projections; include a concise textual interpretation and preserve the canonical decisions and evidence.

### Connected work

Before suggesting custom synchronization, file-processing or operations software, check whether connected GitHub, Google Drive/Docs/Sheets, native ChatGPT artifacts and suitable existing tools already cover the needed subset. Prefer configuration/reuse over new infrastructure when constraints permit.

Examples are **illustrative**, not a claim of verified access to every feature, account, project or dataset.

## 4. Honest fallback and safety boundary

- No silent assumption that a specific plugin works for every user, client, plan, country, or account.
- If a tool is absent, unconnected or blocked, say so and give the next workable option; optional install/connect always needs the user's action.
- Validate capability and cost rather than promoting a tool for its brand.
- Never expose project secrets, personally sensitive data, or proprietary DL data to a new service without appropriate authorization.
- Read-only research, a visual mockup, a functional prototype, a code export, real integration and production deployment are distinct evidence states.
- Preserve ZASS's authority chain: AI proposes, owner decides, verified evidence supports claims, authorized writer saves, GitHub remains the engineering Source of Truth when applicable.
- Do not let tool convenience override LOCKED architecture decisions, security boundaries, acceptance tests or the owner's explicit scope.

## 5. Minimal decision test

Before proposing new custom work, ask:

1. Can an available ChatGPT capability or verified plugin produce the useful result now?
2. Can an existing tool/template/reusable component solve most of it?
3. What exact unsolved gap requires code?
4. What is the smallest safe action that demonstrably moves the user closer to the outcome?

**Default recommendation:** use the easiest capable route, with truthful scope and evidence, then build only what cannot reasonably be reused.

## 6. Relationship to existing contracts

- [ZASS SYSTEM UI/UX Contract](ZASS_SYSTEM_UI_UX_CONTRACT.md) remains the product-interaction and versioning authority.
- [ZASS Human Presentation Contract](ZASS_HUMAN_PRESENTATION_CONTRACT.md) governs faithful, mobile-friendly visual representation.
- This contract governs **capability discovery and tool-route selection before unnecessary custom construction**; it does not alter DUMP / DECIDE / DESIGN, ZASS decision/LOCK gates, ZASSIMPLE lineage, ZASSCODE authority, or actual SAVE/COMMIT semantics.
