# ACTION PLAN

**Status:** TEMPLATE  
**Execution authority:** \`ACTION_PLAN.md\`  
**ZASS authority:** [relative path to ZASS.md]  
**Last updated:** [YYYY-MM-DD]

> ZASS menentukan arah dan keputusan. ACTION_PLAN menggerakkan kerja.

## 0. CONTROL

- **Current phase:** [discovery / validation / build / operate / other]
- **Current focus:** [satu fokus utama]
- **Execution backend:** \`ACTION_PLAN.md\` / [GitHub Issues atau backend dinamakan]
- **Architecture status:** [not started / draft / confirmed reference]
- **Plan mode:** [PRE-ARCH EVIDENCE / RELEASE BUILD / ORDINARY EXECUTION]
- **Execution baseline:** [not applicable / PRE-ARCH not locked / PRE-ARCH locked]
- **PRE-ARCH version/reference:** [reference]
- **Execution Reality Check:** [NOT STARTED / ACTIVE / PASS / NOT APPLICABLE]
- **Real artifact/sample pack:** [references / unavailable + reason / not applicable]
- **Execution surface map:** [reference / summary / not applicable]
- **Evidence required sebelum final architecture confirmation:** [list / none justified]
- **Rule:** ZASS kekal authoritative untuk questions, risks, candidates, decisions, LOCKED decisions dan architecture readiness.
- **Planning feedback rule:** ACTION_PLAN boleh surface implementation finding yang memerlukan architecture review, tetapi ia tidak boleh menentukan architecture atau mengubah keputusan LOCKED.

## 🏗️ ZERO → ARCHITECTURE SNAPSHOT

- **Progress:** [░░░░░░░░░░] 0%
- **Status:** RAW
- **Source:** `ZASS.md` v[version] — same Git commit
- **Last assessed:** [YYYY-MM-DD]
- **Next threshold:** 20% — EXPLORING

**Critical blockers:**

- None currently identified.

> Snapshot ini menyalin skor rasmi daripada ZASS; ACTION_PLAN tidak mengiranya. Kemas kini ZASS dan snapshot ini dalam commit atomik yang sama. GitHub Actions mengambil SHA sebenar daripada event commit untuk mirror seperti Notion.

## 1. PROJECT SNAPSHOT

| Milestone / outcome | Status | Progress / evidence | Related ZASS IDs |
|---|---|---|---|
| [what matters now] | [OPEN / ACTIVE / DONE / BLOCKED] | [short evidence] | [Q-xxx / R-xxx / D-xxx / E-xxx] |

## 2. TOP PRIORITIES

> P0 mesti sedikit. Turunkan atau buang item yang tidak lagi menghalang milestone semasa.

| Priority | What matters now | Why | Related ZASS IDs |
|---|---|---|---|
| P0 | [current blocker] | [blocks milestone / experiment / readiness] | [...] |
| P1 | [important next] | [...] | [...] |
| P2 | [useful later] | [...] | [...] |
| P3 | [parked / optional] | [...] | [...] |

## 2A. EXECUTION REALITY CHECK

> Sebelum detailed task slicing bagi kerja yang menyentuh real-world input/output, semak realiti execution. Real sample ialah architecture + execution evidence.

| Surface / artifact | Real evidence | Architecture expects | Gap / assumption | Execution need | Status |
|---|---|---|---|---|---|
| [message / file / API / form / log / workflow / other] | [sanitized ref] | [expected behavior] | [unknown / contradiction / none] | [build / test / prove] | [OBSERVED / PROVISIONAL / NOT APPLICABLE] |

**Minimum rule:**
- guna real artifacts seawal yang munasabah dan selamat;
- satu real sample pada hari pertama lebih baik daripada menunggu corpus besar;
- synthetic fixture mesti dilabel **PROVISIONAL / SYNTHETIC** jika real evidence belum ada;
- jika domain benar-benar tiada real-world surface, rekod **NOT APPLICABLE** + sebab;
- simpan fixture/corpus yang sama supaya task berikutnya reuse evidence, bukan cipta semula andaian.

## 3. NEXT ACTIONS

**Work-item status:** \`OPEN\` · \`NEXT\` · \`ACTIVE\` · \`BLOCKED\` · \`DONE\` · \`PARKED\` · \`CANCELLED\`

| Action ID | Priority | Status | Action | Done when | Related ZASS IDs |
|---|---|---|---|---|---|
| A-001 | P0 | NEXT | [small action] | [observable acceptance criteria] | [Q-xxx / E-xxx] |

## 3A. IMPLEMENTATION PLANNING / ARCHITECTURE FEEDBACK

> Jangan sembunyikan architecture flaw di dalam task. Rekod di sini dan pulangkan kepada authority design/architecture.

Untuk substantial technical architecture, detailed planning dibina terhadap `PRE-ARCH BASELINE — LOCKED FOR EXECUTION` yang diluluskan owner. PRE-ARCH ialah execution hypothesis berversi, bukan final architecture confirmation.

Planning boleh menyimpan implementation sequence, dependencies, feasibility, migration, test gates/regressions, rollback points, security/privacy checks, integration checkpoints, unresolved implementation questions, dan evidence required sebelum next gate.

| Finding ID | Type | Finding / evidence | Architecture impact | Required response | Related IDs |
|---|---|---|---|---|---|
| APF-001 | [DEPENDENCY / FEASIBILITY / MIGRATION / TEST / ROLLBACK / SECURITY / INTEGRATION / OPERABILITY / OTHER] | [...] | [NONE / REVIEW REQUIRED / REVISION PROPOSED / OWNER DECISION REQUIRED] | [...] | [D-xxx / E-xxx / architecture section] |

Jika impact ialah `OWNER DECISION REQUIRED`, STOP sebelum execution mengubah boundary berkaitan.

## 3B. DERIVED ATOMIC TASK PACKET

> Ini execution packet derived, bukan planning authority kedua.

```text
Task ID:
PRE-ARCH version/reference:
Primary outcome:
Source / lineage:
Dependencies:
Inputs:
Real fixture / artifact reference:
Expected real outcome:
Execution surface:
Assumption status: OBSERVED / PROVISIONAL / NOT APPLICABLE
Allowed scope:
Allowed files/modules:
Forbidden scope:
Acceptance criteria:
Tests:
Regression requirements:
Evidence required:
Commit expectation:
STOP & ESCALATE:
Result:
Architecture impact: NO ARCH IMPACT / TASK-PLAN ISSUE / PRE-ARCH REVIEW REQUIRED / LOCKED DECISION IMPACT
Reviewer disposition: PENDING / PASS / REWORK / REVISE PRE-ARCH / BLOCK OWNER DECISION
```

Task hanya READY apabila tiada unresolved architecture judgment. Rujuk `docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md`.

## 3C. TASK RESULT → PRE-ARCH REVIEW

Untuk substantial technical architecture, setiap atomic task yang siap mesti pulangkan evidence kepada reviewer sebelum task seterusnya menjadi eligible secara automatik.

```text
NO ARCH IMPACT
→ PASS → update ACTION_PLAN
→ DELTA PLAN against current PRE-ARCH + receipts + real-sample corpus
→ NEXT unresolved task only

TASK-PLAN ISSUE
→ REWORK → task/ACTION_PLAN

PRE-ARCH REVIEW REQUIRED
→ capable reasoner review evidence
→ revise/supersede PRE-ARCH jika justified
→ re-plan/re-slice kerja terjejas

LOCKED DECISION IMPACT
→ STOP → OWNER DECISION GATE
```

Coding worker tidak boleh revise PRE-ARCH secara senyap.

## 3D. POST-CONFIRMATION RELEASE REPLAN

Selepas technical architecture yang material menjadi `ARCHITECTURE CONFIRMED`, jangan sambung PRE-ARCH evidence task queue secara membuta tuli.

Rebuild/rebase ACTION_PLAN daripada current truth:

- confirmed architecture reference;
- current repository/product state;
- accepted first-release scope;
- remaining dependencies/migrations;
- integration checkpoints;
- release test/regression gates;
- security/operability/reliability gates due;
- deployment/rollback requirements;
- documentation/durable-state updates;
- release acceptance criteria.

Kemudian slice fresh RELEASE BUILD atomic task set.

Jika release work mendedahkan architecture defect material, STOP normal release flow dan pulangkan kepada governed architecture review. Worker tidak boleh mutate confirmed architecture secara senyap.

`DELIVERED !!` hanya dibenarkan selepas applicable release acceptance checks benar-benar dipenuhi.

## 4. EXPERIMENTS

> Kekalkan ID \`E-xxx\` yang sama jika eksperimen datang daripada ZASS. ACTION_PLAN merekod pelaksanaan, bukan authority eksperimen kedua.

**Experiment status:** \`PLANNED\` · \`READY\` · \`RUNNING\` · \`PASS\` · \`FAIL\` · \`INCONCLUSIVE\` · \`BLOCKED\` · \`CANCELLED\`

### E-xxx — [experiment title]

- **Hypothesis:** [testable claim]
- **Status:** [PLANNED]
- **PASS criteria:** [what would support the hypothesis]
- **FAIL criteria:** [what would reject it]
- **Execution / evidence:** [link, note, measurement, commit, artefact]
- **Observed result:** [PENDING / actual result]
- **Learning:** [PENDING / what changed in understanding]
- **Impact:** [PENDING / candidate action for ZASS]
- **Related ZASS:** [Q-xxx / R-xxx / D-xxx]
- **ZASS FEED readiness:** [not ready / ready for review]

## 5. OPEN CANDIDATES

| Candidate | Why useful | Evidence missing | Next action | Related ZASS IDs |
|---|---|---|---|---|
| [candidate] | [value] | [unknown] | [small next step] | [...] |

## 6. OPEN QUESTIONS

| Question | Why actionable now | Next action / owner | Related ZASS ID |
|---|---|---|---|
| [question] | [reason] | [action] | Q-xxx |

## 7. BLOCKED

| What is blocked | Why | Dependency | Unblock condition | Related ZASS IDs |
|---|---|---|---|---|
| [item] | [reason] | [person / evidence / access] | [clear condition] | [...] |

## 8. FAILURES / LESSONS

| What failed | Evidence | Learning | Do not repeat without new diagnosis | Related ZASS IDs |
|---|---|---|---|---|
| [failure] | [what happened] | [lesson] | [guardrail] | [...] |

## 9. COMPLETED

| Completed work | Evidence / commit / artefact | Result | Related ZASS IDs |
|---|---|---|---|
| [work] | [reference] | [outcome] | [...] |

## 10. PARKED

| Item | Why parked | Revisit trigger | Related ZASS IDs |
|---|---|---|---|
| [item] | [reason] | [condition] | [...] |

## 11. ZASS FEED

> Findings di sini sedia dibawa kembali ke ZASS untuk review. Ia belum menjadi decision sehingga ZASS review dan tindakan owner.

| Finding / evidence | Implication | Suggested ZASS action | Related IDs |
|---|---|---|---|
| [finding] | [what it may change] | [review / test more / decide / reject / pivot] | [...] |

## 12. CHANGE LOG

| Date | Change |
|---|---|
| [YYYY-MM-DD] | [short factual update] |

---

## AI OPERATING RULE

Apabila mengemas kini fail ini, kekalkan authority ZASS. Jangan ubah LOCKED decision atau architecture secara senyap. Jangan jadikan PASS sebagai decision secara automatik. Elakkan duplicate action: kemas kini action, experiment, PARKED item atau ZASS FEED yang sudah berkaitan.

Gunakan satu nilai `Progress` dan satu `Status` sahaja dalam ZERO → ARCHITECTURE snapshot. `Next threshold` mesti menyatakan peratus dan status seterusnya. Jika tiada blocker, tulis `None currently identified`. Jangan ubah snapshot kerana task biasa selesai; ubah hanya selepas penilaian ZASS. Status `DRAFT ARCH UNDER REVIEW` memerlukan draf sebenar yang sedang direview, bukan angka 85% sahaja.
