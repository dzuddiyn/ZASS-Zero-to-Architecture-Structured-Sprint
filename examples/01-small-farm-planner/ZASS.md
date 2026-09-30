# ZASS — Small Farm Planner

**Project:** Small Farm Planner  
**ZASS method:** v0.3.5  
**Example status:** ARCHITECTURE CONFIRMED — FICTIONAL TEACHING FIXTURE  
**Authority:** This file is the decision/readiness authority for this example.

> Everything below is example scenario data. It demonstrates method mechanics; it is not a claim of real user research.

---

# 1. RAW IDEA

### Original Idea

**EXPLICIT — fictional owner statement**

> I want a simple system that helps small farmers keep track of crop work without needing a complicated farm-management platform.

### Why I Want This

- **EXPLICIT:** daily farm work can be forgotten when it is spread across paper notes and chat messages.
- **EXPLICIT:** the first version should be simple enough for one maintainer.

# 2. GOALS

- Show today's crop tasks clearly on a phone.
- Allow tasks to be created, completed, and reviewed.
- Keep the core workflow usable when internet access is unavailable.
- Keep v0.1 small enough for a solo maintainer.

# 3. NON-GOALS

- Full farm ERP.
- Accounting.
- IoT device control.
- Agronomic recommendation engine.
- Multi-company administration.
- App-store distribution in v0.1.

# 4. CONSTRAINTS

- Low initial cost.
- Web development preferred over separate native-mobile maintenance.
- Android phones with a modern browser.
- Internet may be intermittent.
- No cloud backend for v0.1.
- No passwords, financial information, or health data.
- Single-maintainer friendly.

# 5. IDEA BLAST

| ID | Candidate idea | State |
|---|---|---|
| I-001 | Installable Progressive Web App | CANDIDATE |
| I-002 | Native Android application | CANDIDATE |
| I-003 | WhatsApp/Telegram task bot | CANDIDATE |
| I-004 | Browser-local data with manual export/import | CANDIDATE |

# 6. QUESTIONS / UNKNOWNS

| ID | Question | Resolution |
|---|---|---|
| Q-001 | Must v0.1 work without internet? | Yes — owner constraint |
| Q-002 | Is multi-device cloud sync required in v0.1? | No |
| Q-003 | Are push notifications required? | No — deferred |
| Q-004 | Is an account/login required? | No for v0.1 |

# 7. RISKS & FAILURE SCENARIOS

| ID | Risk | Early warning | Treatment |
|---|---|---|---|
| R-001 | Local data is cleared | device change / cleared site data | manual export/import backup |
| R-002 | Offline behavior fails | app cannot reopen after network loss | cache app shell; test before release |
| R-003 | Scope expands into farm ERP | accounting/inventory/IoT requests appear early | enforce NON-GOALS |
| R-004 | Notifications create maintenance burden | background delivery needs extra services | defer notifications |

# 8. METHOD REVIEW

## MR-001 — Single-maintainer + failure-mode review

### Findings

- A backend is not required to prove the daily-task workflow.
- Native Android adds release/maintenance work that is unnecessary for v0.1.
- A chat bot is convenient for input but weak as the sole task overview.
- Local-only data needs an explicit backup path.

### Candidate Decisions

- Use a PWA for v0.1.
- Keep data local in v0.1.
- Include manual export/import backup.
- Defer push notifications and cloud sync.

# 9. MULTI-AI REVIEW RULE

No AI agreement is treated as evidence in this example. The owner decisions below are explicit fixture decisions.

# 10. OPTIONS

## Decision Topic: v0.1 delivery model

| Option | Strengths | Weaknesses |
|---|---|---|
| PWA | one web codebase, installable, offline-capable shell | browser/storage differences |
| Native Android | strongest device integration | higher maintenance/release overhead |
| Chat bot | fast conversational input | weak overview; platform dependency |

## Decision Topic: v0.1 storage

| Option | Strengths | Weaknesses |
|---|---|---|
| Browser-local | no backend, low cost, offline | device-local; backup required |
| Cloud backend | multi-device sync | auth, hosting, privacy, maintenance |
| Spreadsheet backend | simple admin visibility | weak offline UX; external-service coupling |

# 11. ARCHITECTURE CANDIDATES

## AC-001 — Local-first PWA

PWA + local structured storage + manual export/import. No backend in v0.1.

## AC-002 — PWA + cloud API

PWA + account + cloud database + sync API.

## AC-003 — Native Android

Native client with local database and future sync.

### Candidate Comparison

AC-001 best matches the explicit v0.1 constraints. AC-002 and AC-003 are deferred rather than declared universally inferior.

# 12. DECISION LEDGER

## D-001 — Delivery model

**Decision:** Use an installable Progressive Web App for v0.1.  
**Drivers:** one web codebase, low maintenance, Android browser access, offline-capable shell.  
**Options considered:** PWA, native Android, chat bot.  
**Consequence:** native-only capabilities are deferred.  
**Revisit trigger:** a validated requirement cannot be met reliably by the PWA.

## D-002 — Storage model

**Decision:** v0.1 stores task data locally on the device; no account or cloud sync.  
**Drivers:** low cost, offline requirement, smallest useful architecture.  
**Consequence:** data is not automatically shared across devices.  
**Revisit trigger:** multi-device sync becomes a validated requirement.

## D-003 — Backup

**Decision:** Provide explicit export/import backup in v0.1.  
**Drivers:** mitigate local-storage loss without adding a backend.  
**Consequence:** backup is user-initiated.  
**Revisit trigger:** manual backup proves unreliable in real use.

## D-004 — Notifications

**Decision:** Do not implement push notifications in v0.1. Use the daily task view as the primary reminder surface.  
**Drivers:** avoid background-service complexity before core workflow validation.  
**Revisit trigger:** real users repeatedly miss tasks despite using the app.

# 13. LOCKED DECISIONS

> In the walkthrough, these were listed explicitly under `PROPOSED FOR PROCEED`, reviewed by the fictional owner, and accepted through PROCEED.

- **L-001 / D-001 — LOCKED:** v0.1 is a PWA.
- **L-002 / D-002 — LOCKED:** v0.1 is local-only; no account/cloud sync.
- **L-003 / D-003 — LOCKED:** v0.1 includes manual export/import backup.
- **L-004 / D-004 — LOCKED:** push notifications are deferred.

# 14. REJECTED IDEAS

None permanently rejected. Native Android and chat-bot delivery remain possible future directions.

# 15. DEFERRED ITEMS

- Cloud sync.
- Authentication.
- Push notifications.
- Multi-farm / multi-user administration.
- IoT integration.

# 16. OPEN LOOPS

- Real-user usability testing.
- Browser/device compatibility testing.
- Whether cloud sync becomes necessary after v0.1 use.

These are validation loops, not blockers to the documented v0.1 architecture.

# 17. EXPERIMENTS / EVIDENCE

No empirical experiment result is invented in this teaching fixture.

Planned post-architecture experiments:

- **E-001:** offline reopen and task-edit test on representative Android browsers.
- **E-002:** export → clear local data → import recovery test.
- **E-003:** short real-user task-completion usability test.

# 18. ARCHITECTURE READINESS

| Criterion | Score | Reason |
|---|---:|---|
| Purpose/problem clear | 10/10 | core daily-task problem explicit |
| Users/outcomes clear | 10/10 | small farmer + daily task visibility |
| Scope/non-goals clear | 10/10 | ERP, accounting, IoT, cloud sync excluded |
| Constraints/quality attributes clear | 10/10 | offline, low cost, single maintainer |
| Options/trade-offs compared | 10/10 | delivery and storage patterns compared |
| Critical assumptions closed or experiments exist | 15/15 | remaining validation loops have named experiments and do not alter the v0.1 boundary |
| Major risks addressed | 10/10 | data loss, offline failure, scope creep, notification burden |
| Main system flow clear | 10/10 | create/view/complete/export/import |
| Major decisions LOCKED | 10/10 | D-001 through D-004 |
| No critical architecture blocker | 5/5 | no unresolved contradiction blocks v0.1 |

**ZERO → ARCHITECTURE:** [██████████] 100% — ARCHITECTURE CONFIRMED

**Evidence Confidence:** UNVALIDATED — this teaching fixture intentionally invents no empirical experiment results; E-001, E-002 and E-003 remain planned validation loops.

### Confirmation record

For this fictional teaching fixture, the two-step gate is represented as completed:

1. BUILD ARCHITECTURE reviewed the draft, LOCKED decisions, remaining assumptions and blockers.
2. Fictional project owner response: YA, CONFIRM ARCHITECTURE.

The confirmed representation is stored in [ARCHITECTURE.md](ARCHITECTURE.md).

# 19. CHANGE CONTROL

Any future architecture change that conflicts with D-001 through D-004 requires a new decision. Do not silently rewrite a LOCKED decision.

# 20. PROJECT FILE AUTHORITY

- ZASS.md — decisions, risks, readiness.
- ACTION_PLAN.md — execution and experiments.
- ARCHITECTURE.md — confirmed architecture.
- Git history — authoritative change history.
