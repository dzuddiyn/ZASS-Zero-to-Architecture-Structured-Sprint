# Three-Layer ZASS & Agentic Coding Principle

**Principle lock:** v1.0  
**Status:** LOCKED — owner-approved  
**Owner decision date:** 2026-11-11 (Asia/Kuala_Lumpur)  
**Scope:** ZASS SYSTEM, ZASSCODE and agentic-coding practice  
**Canonical authority:** This document in the ZASS SYSTEM repository

> **Think with ZASS. Manage execution with ZASSCODE. Respect provider capacity.**

## 1. Core rule

Agentic coding must keep three different responsibilities separate:

1. **Thinking & Governance** — decide what should be built, why, within which boundaries, and how acceptance is judged.
2. **Execution Management** — turn approved intent into bounded work, manage progress, verify outcomes and preserve continuity.
3. **AI Provider Capacity** — the external resources and constraints under which reasoning and execution happen.

These are three responsibility layers, not three mandatory agents, products, services or task queues.

## 2. The three layers

### Layer 1 — Thinking & Governance | ZASS SYSTEM

ZASS SYSTEM owns the project's thinking and governance authority:

- structure exploration and reasoning;
- preserve requirements, decisions and rejected alternatives;
- govern scope, exclusions and boundaries;
- challenge and govern design/architecture;
- define the applicable acceptance criteria and owner-approval gates.

**Authority rule:** AI may propose and challenge. The owner decides and LOCKs. Architecture must follow approved decisions. An executor or provider must never silently change a LOCKED decision or confirmed architecture.

### Layer 2 — Execution Management | ZASSCODE

ZASSCODE owns downstream execution management within the approved ZASS baseline:

- intake the approved PRE-ARCH/design baseline and basic ACTION_PLAN;
- perform the Execution Reality Check and prepare bounded, evidence-oriented tasks;
- manage task state, dependencies, attempt history and handoffs;
- coordinate execution, review, verification and evidence;
- preserve checkpoints and recovery/continuity;
- reduce repeated reading, repeated analysis and repeated work;
- return results, unknowns, defects and material architecture findings to ZASS.

**Boundary rule:** ZASSCODE does not become a second decision authority or a competing canonical task queue. It projects bounded work from the selected project's existing ACTION_PLAN/task backend. Material architecture or LOCKED-decision impact returns to ZASS for governed review before dependent execution continues.

### Layer 3 — AI Provider Capacity | External constraint

The AI provider, model and execution surface supply capacity; they do not own project decisions.

This layer includes:

- context-window and token capacity;
- model capability and reasoning depth;
- rate limits, usage windows and plan allowances;
- API or subscription costs and other usage charges;
- availability and operational constraints of the selected provider/tool.

**Constraint rule:** capacity and limits vary by provider, plan, model, task and time. Do not assume unlimited usage or treat an illustrative message/token estimate as a guaranteed task budget. Provider/model choice remains replaceable where practical; project decisions, state and evidence must remain portable.

## 3. Agentic-coding operating principles

1. **Govern before execution.** Establish the approved scope, relevant decisions, target and acceptance criteria before consequential implementation.
2. **Execute from the approved baseline.** A challenge result or AI suggestion alone is not execution approval.
3. **Slice work into bounded, verifiable tasks.** Each task has a clear target, expected outcome, checks, evidence and stop condition.
4. **Keep one canonical project record.** Preserve the active ZASS authority, ACTION_PLAN/task backend and repository Source of Truth; do not create a rival queue or decision ledger.
5. **Verify outcomes, not claims.** Generated code, a confident response or a green-looking summary is not proof. Use actual diffs, test output, target read-back and relevant runtime evidence.
6. **Persist state for recovery.** Record what changed, what was checked, what remains unknown, the current task state and the exact next action. Resume from that checkpoint instead of reconstructing the whole session.
7. **Use context deliberately.** Read targeted files and relevant ranges, reuse verified evidence and prior decisions, and avoid broad repository rereads or repeated analysis without a concrete reason.
8. **Bound retries and escalate.** Repeated failure, missing authority, unknown target identity, unsafe mutation or material architecture impact triggers STOP/REVIEW rather than an endless repair loop.
9. **Keep human authority explicit.** Consequential scope, architecture, data, cost, deployment and release decisions remain subject to the applicable owner mandate and ZASS gates.
10. **Keep providers replaceable.** Do not bind project truth to a model's hidden context or a provider-specific session. Export the state, evidence and handoff in portable records.

## 4. Capacity-aware execution

The objective is not to minimize tokens at any cost. It is to maximize **accepted, evidence-backed outcomes per available provider capacity** without weakening quality, safety or governance.

Practical controls:

- select model/reasoning depth according to task risk and difficulty;
- provide only the project context needed for the current bounded task;
- reuse approved plans, fixtures, decisions, test results and prior evidence;
- checkpoint after meaningful changes and before a likely usage/session boundary;
- avoid blind retries, repeated full-repository scans and unnecessary re-explanation;
- treat usage estimates as observations, not guaranteed allowances;
- when capacity is exhausted or uncertain, preserve state and resume later or use an explicitly approved alternative—never fabricate completion or silently incur additional cost.

**ZASS does not increase AI quota. ZASS and ZASSCODE make available capacity go further by reducing repeated thinking, repeated context loading and unverified rework.**

## 5. Authority, evidence and escalation

| Situation | Required response |
|---|---|
| Normal task within approved scope and baseline | ZASSCODE may plan, execute and verify within the recorded mandate |
| No approved baseline, unclear scope or missing target/permission | Remain `PLANNING_ONLY` or STOP; obtain the specific missing approval/evidence |
| Task result has no material architecture impact | Record evidence and continue only under the canonical task backend and acceptance rules |
| Material architecture or LOCKED-decision impact | STOP dependent work; return the finding and evidence to ZASS |
| Provider limit, context loss or interrupted session | Persist checkpoint and resume from the last verified state |
| Repeated failed attempts or unverified result | Mark `BLOCKED`/`UNKNOWN` as appropriate; do not claim PASS |

## 6. Non-goals and compatibility

This principle does not create a new agent, controller, provider, orchestration service, task backend or mandatory coding tool. It does not require Codex, Claude Code, a local runner or any specific model. It applies across supported Chat, Work and agentic execution surfaces according to the actual project mandate and available tools.

It does not reopen unrelated ZASS feature work, change DUMP / DECIDE / DESIGN, alter Full ZASS or ZASSIMPLE method semantics, or change the existing ZASS ↔ ZASSCODE handoff gates. It is a cross-layer governance and operating principle.

---

## 7. Ringkasan Bahasa Melayu — prinsip yang dikunci

### Tiga lapisan asas

| Lapisan | Pemilik peranan | Tanggungjawab |
|---|---|---|
| **1 — Thinking & Governance** | **ZASS System** | Struktur pemikiran, keputusan, skop, sempadan kerja, seni bina dan acceptance criteria |
| **2 — Execution Management** | **ZASSCODE** | Pengurusan tugasan, task state, verification/evidence, recovery, kesinambungan dan pengurangan kerja berulang |
| **3 — AI Provider Capacity** | **Kekangan luaran** | Token/context, model/reasoning, had penggunaan, tingkap masa, kuota dan kos |

### Prinsip operasi Agentic Coding

- Asingkan peranan **fikir, urus dan laksana**. Jangan campurkan kuasa membuat keputusan dengan kerja pelaksanaan.
- Tetapkan skop, sasaran dan acceptance criteria sebelum coding.
- Pecahkan kerja kepada tugasan kecil yang mempunyai hasil dan evidence yang boleh disahkan.
- Kekalkan satu Source of Truth dan satu task backend canonical.
- Simpan state, diff, keputusan, test result dan evidence supaya kerja boleh disambung tanpa mengulang keseluruhan analisis.
- Baca fail/range yang relevan; jangan scan atau muat semula seluruh repository tanpa sebab.
- Kod yang dijana bukan bukti siap. Sahkan perubahan dan hasil sebenar.
- Jika berlaku kegagalan berulang, target tidak jelas atau architecture terjejas, STOP dan eskalasi mengikut authority ZASS.
- Provider/model boleh berubah; keputusan, state dan evidence projek mesti kekal portable.

> **ZASS tidak menambah kuota AI. ZASS memastikan keputusan tidak perlu difikir semula; ZASSCODE memastikan kerja tidak perlu dibuat semula; kedua-duanya membantu kapasiti AI yang tersedia digunakan dengan lebih cekap.**

**Ukuran kejayaan:** hasil yang diterima dan disokong evidence bagi kapasiti yang digunakan — bukan bilangan mesej atau token semata-mata.

**Status:** LOCKED — Principle v1.0 — 11 November 2026.
