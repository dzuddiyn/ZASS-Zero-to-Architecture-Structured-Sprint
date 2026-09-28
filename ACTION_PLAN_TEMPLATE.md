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
- **Rule:** ZASS kekal authoritative untuk questions, risks, candidates, decisions, LOCKED decisions dan architecture readiness.

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

## 3. NEXT ACTIONS

**Work-item status:** \`OPEN\` · \`NEXT\` · \`ACTIVE\` · \`BLOCKED\` · \`DONE\` · \`PARKED\` · \`CANCELLED\`

| Action ID | Priority | Status | Action | Done when | Related ZASS IDs |
|---|---|---|---|---|---|
| A-001 | P0 | NEXT | [small action] | [observable acceptance criteria] | [Q-xxx / E-xxx] |

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
