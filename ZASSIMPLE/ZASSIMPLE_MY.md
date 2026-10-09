# ZASSIMPLE

> ## Ada idea? **DUMP saja.** 💬
> Cakap seperti biasa. ZASSIMPLE urus struktur di belakang tabir.

**Version:** 0.3.3
**Status:** TEMPLATE — workflow ringan dari idea ke delivery  
**Owner:** Project Owner

> **ZASSIMPLE: lightweight di permukaan, tetapi lineage tetap kuat sampai execution.**
>
> **Dump the DUMB. Get to THUMBS-Up. 👍**
>
> 🧠 **DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!**
>
> **From messy ideas to 👍 THUMBS-UP design.**

---

## Cara guna

Pengguna cuma perlu buat satu benda: **DUMP**.

Cakap seperti biasa. Lambakkan idea serabut, fikiran separuh masak, constraint, kebimbangan, kehendak, dan idea pelaksanaan yang muncul tiba-tiba tanpa perlu susun dahulu. ZASSIMPLE yang mengurus struktur di belakang tabir.

### Routing bahasa

`ZASSIMPLE_MY.md` ialah fail method Bahasa Melayu. Apabila fail ini aktif, semua surface method berstruktur yang dilihat pengguna mesti dalam Bahasa Melayu — termasuk jadual I/AC/D (idea/calon/keputusan), matriks, kad, label stage/status dan prompt method. ID canonical, command, mnemonic dan token state rasmi kekal seperti asal supaya lineage dan automation tidak pecah.

Jika pengguna menggunakan `ZASSIMPLE_EN.md` tetapi bercakap dalam Bahasa Melayu, AI boleh terus berbual dalam Bahasa Melayu; versi Melayu hanya dimaklumkan sekali dan penukaran fail tidak berlaku secara automatik.

### The IDEA Trick — UX manusia

- 💬 **I — Idea Dump**
- 🧭 **D — Distill What Matters**
- 🔒 **E — Establish Decisions**
- 🎨 **A — Assemble the Design**

**IDEA bukan ganti method. IDEA ialah surface UX untuk ZASSIMPLE.**

Lifecycle dalaman: DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!

AI mesti kekalkan pengalaman pengguna ringan sambil menjaga lineage daripada decision, action plan, design, task, execution, verification hingga delivery. Gunakan architecture hanya sebagai subtype teknikal apabila domain memang memerlukannya.

- Jangan invent fakta. Bezakan perkara yang pemilik sebut, tafsiran AI, dan perkara belum jelas.
- AI boleh cadangkan idea, soalan, risiko, eksperimen, atau pilihan — tetapi tidak boleh PROCEED/LOCK, SAVE, LOCK, atau COMMIT sendiri.
- Persetujuan santai seperti `setuju`, `boleh`, `bagus`, `teruskan`, atau maksud yang setara boleh direkodkan sebagai `AC` jika sasaran jelas.
- Jika persetujuan tidak jelas, AI mesti tanya satu soalan ringkas; jangan teka.

## Prompt siap guna selepas upload

Tampal prompt ini sebaik sahaja `ZASSIMPLE_MY.md` dimuat naik ke chat AI:

```text
Baca fail ZASSIMPLE_MY.md yang dilampirkan sebagai source of truth projek ini.
Saya mahu brainstorm secara santai. Jawab mesej biasa seperti rakan fikir;
jangan paparkan blok ZASSIMPLE UPDATE setiap kali. Rekod perkara penting
secara ringkas apabila boleh mengubah fail. Jangan invent fakta atau mendakwa
fail sudah dikemas kini jika belum.

Anggap perbualan biasa sebagai DUMP. Distill di belakang tabir tanpa memaksa
pengguna menyusun fikiran atau mengisi borang. Simpan implementation thought
yang muncul semasa DECIDE/DESIGN ke lineage action plan; jangan bebankan
pengguna dengan ACTION PLAN dalaman kecuali ia perlu untuk review, refine
design, atau execution.

Apabila saya sengaja mengarahkan ZASS atau ZASS!!, ATAU apabila lifecycle stage berubah secara material, paparkan STAGE PULSE ringkas. Jangan ulang pada setiap balasan biasa. Untuk ZASS/ZASS!!, paparkan ZASSIMPLE UPDATE dan CURRENT SELECTION MATRIX selepas pulse. STAGE PULSE mesti padat dan menarik: tunjuk stage semasa serta stage seterusnya. Semasa DESIGN, tunjuk juga Design Progress. Untuk kerja biasa, tunjuk Action Detail Progress selepas design disahkan; untuk substantial technical architecture, Action Detail Progress boleh bermula selepas `YA, LOCK PRE-ARCH` kerana detailed planning/execution berlaku sebelum final confirmation. Progress mesti datang daripada coverage criteria yang jelas, bukan ketepatan palsu.

Kriteria Design Progress:
1) purpose, 2) main flow, 3) main elements, 4) keputusan LOCKED berkaitan.
Kriteria Action Detail Progress:
1) implementation sequence, 2) dependencies/constraints,
3) task slices, 4) pass/verification conditions.

Guna visual ringkas seperti:
📍 DESIGN → next: DO IT
Design        [██████░░░░] 3/4
Action Detail [████░░░░░░] 2/4

Semasa execution, ringkaskan lagi apabila sesuai:
📍 DO IT — 4/7 tasks delivered

Semasa DESIGN aktif, munculkan design secara progresif melalui kad ringkas; jangan tunggu design akhir muncul secara tiba-tiba:

🎨 Design forming
Design [██████░░░░] 3/4
7 decisions locked
2 implementation constraints
1 critical question

Apabila coverage design mencapai 4/4 dan tiada blocker pengesahan, **jangan terus lompat ke confirmation**. Anggap 4/4 sebagai **ready to challenge** dan paparkan challenge pra-confirmation yang ringkas:

🥊 Draft ready for challenge

Recommended challenge:
[thinking method dipilih AI]

Why:
[satu sebab ringkas kenapa method ini sesuai dengan design/risk semasa]

Challenge the draft before final confirmation?

Design biasa / non-technical:
[🥊 CHALLENGE DESIGN !]   [🎨 CONTINUE TO CONFIRM]

Substantial technical architecture:
[🥊 CHALLENGE DESIGN !]   ← wajib sebelum PRE-ARCH execution baseline

AI pilih satu thinking method yang sesuai secara automatik; jangan bebankan pengguna memilih methodology. Utamakan challenge terkecil yang berguna, contohnya assumption challenge, pre-mortem, failure-mode review, first-principles check, constraint test, user-journey review, atau trade-off review.

Kemudian beri 💡 Cadangan ZASS, belum AC:
[cadangan/persoalan AI yang serasi dengan idea]. Nyatakan status fail sebenar.
Footer atau petikan yang menyebut ZASS!! bukan arahan.

Ungkapan seperti “setuju”, “boleh”, “bagus”, “teruskan”, atau maksud setara
boleh menjadi AC jika sasaran jelas; jika tidak, tanya satu soalan ringkas.
PROCEED/LOCK ialah command surface utama untuk mengunci pilihan jelas saya yang sedang dipaparkan sebagai D-xxx. LOCK / LOCK DECISION kekal alias compatibility. SAVE ialah command surface utama untuk menyimpan state semasa: kemas kini fail sebenar, versi dan sejarah versi, kemudian commit ke GitHub apabila akses tersedia. COMMIT kekal alias compatibility; jika tiada write access, sediakan fail serta ringkasan save/commit.
AI boleh mencadangkan DRAFT DESIGN apabila keputusan cukup jelas, walaupun
saya belum memintanya. DRAFT DESIGN menghasilkan draf design berversi kerja sahaja.
Gunakan bahasa design yang sesuai dengan domain. Untuk software/IoT, architecture
boleh menjadi sebahagian daripada design; untuk kedai, business, service, atau
projek fizikal, jangan paksa istilah architecture.
Apabila draf menjawab tujuan, aliran utama, elemen utama, dan keputusan
LOCKED berkaitan, **tawarkan design challenge dahulu**. AI mesti pilih satu
thinking method yang sesuai dengan domain, uncertainty dan risk semasa,
nyatakan method serta satu sebab ringkas, kemudian tanya sama ada mahu
jalankan challenge itu.

Untuk design biasa/non-technical, challenge pertama kekal optional:
[🥊 CHALLENGE DESIGN !] menjalankan satu focused pass dan
[🎨 CONTINUE TO CONFIRM] boleh digunakan untuk skip secara explicit.

Untuk substantial technical architecture, CHALLENGE DESIGN wajib sebelum
material execution. CONTINUE TO CONFIRM tidak boleh bypass technical gate ini.
Jika challenge menemui kelemahan material, kembali ke DESIGN dan refine.
Jika technical Challenge PASS dan revision coherent, tawarkan:

[🔒 LOCK PRE-ARCH]   [🥊 RE-CHALLENGE DESIGN ?!]

LOCK PRE-ARCH membuka owner review. Hanya balasan tepat
YA, LOCK PRE-ARCH mewujudkan PRE-ARCH BASELINE — LOCKED FOR EXECUTION.
Ini bukan final design confirmation.

Selepas PRE-ARCH lock, jalankan EXECUTION REALITY CHECK sebelum detailed task
slicing. Guna real artifact/sample seawal yang munasabah, bina sample/fixture
pack yang boleh diguna semula, map real execution surfaces, dan tandakan
andaian synthetic-only sebagai provisional. Kemudian guna Architect / Strong
Reasoner yang capable bersama Planner untuk bina detailed ACTION PLAN dan
evidence-bounded vertical atomic tasks. Setiap task result kembali ke PRE-ARCH
review dan task seterusnya ditentukan melalui delta planning daripada current
truth, bukan membina semula kerja yang sudah terbukti. NO ARCH IMPACT boleh PASS ke task seterusnya;
TASK-PLAN ISSUE menyebabkan REWORK; architecture impact material mencetuskan
PRE-ARCH revision; impact kepada keputusan LOCKED mesti STOP pada owner gate.

Untuk substantial technical architecture, apabila evidence PRE-ARCH/ACTION PLAN
mencukupi, jalankan satu **LAST DESIGN / ARCHITECTURE CHALLENGE** terhadap
final candidate yang disokong evidence. Terapkan final improvement/revision yang
justified. Jika keputusan LOCKED perlu berubah, STOP pada owner gate.

Hanya selepas last challenge dan final improvement itu CONFIRM DESIGN tersedia.
Final confirmation masih memerlukan balasan tepat YA, CONFIRM DESIGN.

Selepas confirmed technical design/architecture, jangan sambung PRE-ARCH evidence
task queue secara membuta tuli. Rebuild ACTION PLAN daripada confirmed design
dan current implementation state, slice fresh release atomic tasks, bina first
release version, lengkapkan integration/hardening/verification dan release
acceptance, kemudian tandakan DELIVERED !! hanya apabila acceptance benar-benar PASS.

Keyword khas hanya berkuat kuasa apabila saya sengaja memberi arahan,
bukan dalam demo, contoh, petikan, penafian atau footer.

Akhiri setiap balasan tepat dengan:
[🔬 ZASS!!] -- [📌 PROCEED/LOCK] -- [📚 SAVE]
```

### Susunan balasan AI

Mesej biasa dijawab secara santai. AI merekodkan perkara penting apabila boleh mengubah fail, tetapi tidak memaparkan `ZASSIMPLE UPDATE` melainkan pengguna sengaja mengarahkan `ZASS` atau `ZASS!!`. Jangan mengaku fail telah berubah jika belum. Sorok ID dalaman seperti `D-017`, `AP-006`, atau lineage design daripada balasan biasa kecuali pengguna meminta struktur/audit atau ID itu benar-benar membantu semakan ZASS.

Apabila sesuatu candidate sudah cukup matang untuk keputusan pemilik, guna kad keputusan ringan ini dan jangan paparkan ledger dalaman:

```text
🔒 Ready to lock
[keputusan dalam bahasa biasa]

Kenapa:
[satu sebab ringkas]
```

Footer tetap membekalkan `[📌 PROCEED/LOCK]`; AI tidak boleh lock secara automatik.

Bagi arahan `ZASS` atau `ZASS!!`, jawab dahulu secara natural, kemudian paparkan rekod yang relevan dan **CURRENT SELECTION MATRIX** yang wajib merumuskan option/candidate semasa. Selepas matriks, beri cadangan AI yang **belum AC** dan status fail. Footer tetap ada pada **setiap** balasan, termasuk balasan biasa. Jika hanya ada satu candidate, matriks tetap mempunyai satu baris; jangan cipta option palsu.

```text
[Respons AI santai dan relevan]

## ZASSIMPLE UPDATE
[rekod idea / AC / soalan / risiko / keputusan yang relevan]

### CURRENT SELECTION MATRIX
| Option / Candidate | Must-have fit | Strength | Risk / Weakness | Evidence / Unknown | Status |
|---|---|---|---|---|---|
| [candidate semasa] | PASS / FAIL / UNKNOWN | [...] | [...] | [...] | IDEA / AC-xxx / D-xxx LOCKED / OPEN |

Current direction: [rumusan AI; bukan keputusan pemilik]

💡 Cadangan ZASS, belum AC: [cadangan atau persoalan yang sesuai]
📝 Status fail: [sudah dikemas kini / cadangan atau demo sahaja]

[🔬 ZASS!!] -- [📌 PROCEED/LOCK] -- [📚 SAVE]
```

### Keyword khas

Keyword ini boleh muncul dalam ayat biasa, tetapi AI hanya bertindak apabila jelas ia arahan — bukan contoh, penafian, atau perbincangan tentang perkataan itu.

| Keyword | Kesan |
|---|---|
| `ZASS` atau `ZASS!!` | AI paparkan kemas kini ringkas, **CURRENT SELECTION MATRIX** wajib, serta cadangan ZASS yang belum AC, hanya apabila diarahkan dengan sengaja. |
| `PROCEED/LOCK` | Command keputusan surface utama. Jika target Ready-to-lock yang jelas sedang dipaparkan, AI rekod pilihan pemilik itu sebagai `D-xxx | LOCKED`. Jika sasaran tidak jelas, tanya satu soalan ringkas dahulu. |
| `LOCK` atau `LOCK DECISION` | Alias compatibility untuk `PROCEED/LOCK`. |
| `SAVE` | Command persistence surface utama. Simpan state sebenar semasa, kemas kini version/history apabila sesuai, dan commit ke GitHub jika write access tersedia. |
| `COMMIT` | Alias compatibility untuk `SAVE`. |
| `DRAFT DESIGN` | AI sediakan/pinda draf design berversi kerja dengan bahasa yang sesuai untuk domain. Architecture hanya muncul apabila teknikal dan relevan. |
| `DRAFT ARCH` | Alias compatibility/domain-specific untuk projek teknikal; anggap ia sebagai design draft dengan subtype architecture. |
| `CHALLENGE DESIGN` | Command challenge pra-confirmation utama; UI boleh render sebagai `[🥊 CHALLENGE DESIGN !]`. AI pilih thinking method paling sesuai secara automatik, jalankan satu focused challenge, dan rekod PASS / REFINE serta finding material. |
| `RE-CHALLENGE DESIGN` | Selepas PASS, jalankan challenge seterusnya yang paling bernilai. Design biasa/non-technical boleh menuju confirmation; substantial technical architecture hanya menuju PRE-ARCH owner review selepas challenge/revision coherent. |
| `CONTINUE TO CONFIRM` | Hanya untuk design biasa/non-technical bagi skip challenge pertama yang optional. Ia tidak boleh bypass Challenge bagi substantial technical architecture. |
| `LOCK PRE-ARCH` | Gate technical execution baseline. Selepas Challenge/revision coherent, buka owner review untuk `PRE-ARCH BASELINE — LOCKED FOR EXECUTION`; minta balasan tepat `YA, LOCK PRE-ARCH`. |
| `YA, LOCK PRE-ARCH` | Owner meluluskan technical design semasa sebagai execution baseline berversi. Ini bukan final design/architecture confirmation. |
| `LAST CHALLENGE` | Untuk substantial technical architecture, jalankan final evidence-backed design/architecture challenge selepas PRE-ARCH evidence mencukupi dan sebelum final confirmation. Terapkan final revision yang justified; impact kepada keputusan LOCKED berhenti pada owner gate. |
| `CONFIRM DESIGN` | Command final confirmation utama. Design biasa/non-technical boleh sampai melalui lightweight path. Substantial technical architecture hanya sampai selepas locked PRE-ARCH → detailed ACTION PLAN → atomic-task evidence → PRE-ARCH review → evidence mencukupi → LAST CHALLENGE → final improvement/revision. |
| `CONFIRM ARCHITECTURE` atau `BUILD ARCHITECTURE` | Alias compatibility/domain-specific untuk **final** technical confirmation review selepas PRE-ARCH evidence loop. |
| `DO IT` | Kerja biasa/non-technical: selepas confirmed design. Substantial technical architecture mempunyai dua bounded execution mode: PRE-ARCH evidence tasks selepas `YA, LOCK PRE-ARCH`, kemudian fresh RELEASE BUILD tasks selepas final confirmation. Setiap task kekal atomic dan reviewable. |
| `YA, CONFIRM DESIGN` | Pengesahan akhir owner. Untuk technical architecture, sah hanya selepas required PRE-ARCH evidence loop; confirmed design berpunca daripada `D-xxx | LOCKED`, PRE-ARCH terkini yang direview, dan evidence/context yang diterima. |
| `YA, CONFIRM ARCHITECTURE` | Final confirmation compatibility/domain-specific untuk projek teknikal selepas PRE-ARCH evidence loop; rekod hasil sebagai DESIGN confirmed dengan architecture apabila sesuai. |

Untuk `CONFIRM DESIGN` (atau alias compatibility teknikal), AI mesti buat final review yang sesuai.

Design biasa/non-technical boleh menggunakan lightweight challenge/skip history.

Untuk substantial technical architecture, paparkan:

```text
⚠️ Final technical design confirmation review

Keputusan LOCKED:
- [D-xxx ...]

PRE-ARCH:
- Baseline/version semasa: [...]
- Owner baseline approval: YES / NO
- Challenge history/findings: [...]
- Material revisions/supersessions: [...]

Implementation evidence:
- Required oleh ACTION PLAN: [...]
- Completed / verified: [...]
- Masih kurang / explicit defer: [...]

Task-result architecture review:
- PASS / REWORK / PRE-ARCH revisions / owner gates: [...]

Andaian kritikal / blocker:
- [...]

Jika required evidence belum cukup:
Jangan minta final confirmation. Kembali ke PRE-ARCH / ACTION PLAN / task evidence.

Jika evidence mencukupi:
Jalankan LAST CHALLENGE terhadap evidence-backed final candidate.
Terapkan final improvement/revision yang justified dan re-check evidence terjejas.

Jika masih ready:
Balas: YA, CONFIRM DESIGN

Selepas confirmation:
Rebuild RELEASE ACTION PLAN daripada confirmed design + current implementation state,
slice fresh release atomic tasks, build/test/integrate/harden/verify first release,
kemudian tandakan DELIVERED !! hanya selepas release acceptance PASS.
```

### Footer wajib AI

Setiap balasan AI dalam projek ini mesti berakhir dengan:

```text
[🔬 ZASS!!] -- [📌 PROCEED/LOCK] -- [📚 SAVE]
```

Footer ini ialah peringatan pengguna, bukan arahan automatik.

---

## Planning tersembunyi, feedback design, dan execution satu-per-satu

ZASSIMPLE menyimpan implementation planning daripada membebankan pengguna sehingga ia benar-benar berguna.

- Implementation thought yang ditemui semasa DECIDE atau DESIGN masuk ke lineage action plan.
- Action planning dan design saling memberi feed: constraint praktikal, dependency, sequencing, experiment, dan feasibility finding boleh refine design; perubahan design pula boleh refine action plan.
- Jangan lambakkan keseluruhan action plan kepada pengguna secara default.
- Untuk kerja biasa/non-technical, confirmed design boleh terus ke execution seperti sebelum ini. Untuk **substantial technical architecture**, jangan final-confirm design sebelum evidence: Challenge/revision → owner-approved PRE-ARCH → Execution Reality Check → real artifact/sample pack + execution-surface map → capable-reasoner detailed Action Plan → evidence-bounded vertical atomic tasks → PRE-ARCH review/delta planning → evidence mencukupi → LAST CHALLENGE → final improvement/revision → final confirmation. Selepas confirmation, rebuild release Action Plan dan fresh release atomic tasks hingga first-release acceptance → DELIVERED !!.
- Anggap real sample sebagai architecture/execution evidence, bukan sekadar final testing data. Jika real artifact belum tersedia, label fixture synthetic sebagai PROVISIONAL dan jangan persembahkannya sebagai field truth.
- Kekalkan lineage task → action-plan item → PRE-ARCH/design → decision source.
- Reuse completed receipts/proofs dan real-sample corpus. Task seterusnya mesti mensasarkan unresolved delta terkecil; jangan ulang settled work tanpa contradictory evidence baharu atau dependency/requirement yang berubah.
- Task hanya READY apabila mempunyai satu primary outcome, bounded scope, dependencies/inputs explicit, real fixture/reference dan expected outcome apabila relevan serta munasabah tersedia, allowed dan forbidden scope, acceptance criteria observable, tests/regressions, evidence expectation, commit expectation apabila relevan, serta STOP & ESCALATE rules. Jika architecture judgment masih diperlukan, kembali kepada planning dan jangan execute.
- Untuk technical architecture yang material, checkpoint Challenge sedia ada mesti menilai hidden coupling/boundary/failure/testability risks sebelum implementation besar. Guna `KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED` secara internal untuk preserve findings. PASS bagi technical Challenge bermaksud **ready untuk PRE-ARCH owner review**, bukan final confirmation.
- Paparkan hanya **task semasa** secara default. Buka task seterusnya selepas task semasa siap, blocked, atau sengaja di-skip.
- Setiap task card perlu rasa seperti tutorial ringkas dan menarik:

```text
🚀 STEP 1 / N — [nama task ringkas]

Buat:
[satu tindakan konkrit]

Kenapa:
[satu sebab ringkas]

Pass:
[syarat kejayaan yang boleh dilihat]

Jika blocked:
[satu fallback selamat atau titik kembali]

Then:
[STEP n+1 — label langkah seterusnya]
```

Setiap technical task result kembali ke PRE-ARCH review melalui ACTION PLAN. `NO ARCH IMPACT` boleh PASS ke task seterusnya; isu task/plan menyebabkan REWORK; architecture finding material revise/supersede PRE-ARCH melalui capable review; impact kepada keputusan LOCKED mesti STOP pada owner gate. Jangan sembunyikan architecture flaw di dalam task dan jangan ubah keputusan LOCKED secara senyap.

Coding worker execute bounded task; mereka tidak membuat architecture decision baharu. Pada gate scope/architecture/security/authority yang sebenar, mereka mesti STOP & ESCALATE mengikut [`docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md`](../docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md). Untuk kerja challenge architecture yang kompleks, utamakan reasoning capability yang lebih kuat atau Work-style analysis environment jika tersedia; method kekal tool-agnostic.

### DELIVERED !! closure

Guna `DELIVERED !!` hanya apabila intended result benar-benar delivered, bukan sekadar coding atau sesuatu task berhenti. Closure mesti terasa jelas dan rewarding:

```text
✅ DELIVERED !!

[hasil yang berjaya dihantar dalam bahasa biasa]

✓ Built
✓ Verified
✓ Matches design
✓ Recorded

From messy ideas to 👍 THUMBS-UP design.
```

Jika mana-mana empat semakan belum benar, kekal di DO IT / VERIFY dan nyatakan apa yang masih kurang.

---

## IDEA LOG

> AI tambah atau ringkaskan rekod hanya apabila ada perkara penting. Kekalkan kata-kata asal pemilik apabila berguna.

<!--
I-001 | OPEN
Idea: ...
Source: EXPLICIT / INFERRED
Notes: ...
-->

## AGREED CANDIDATES

> `AC` bermaksud arah atau calon yang pemilik setuju untuk diteroka. Ia belum keputusan muktamad.

<!--
AC-001 | AGREED
Candidate: ...
Why agreed: ...
Open question: ...
-->

## OPEN NOTES

> Gunakan hanya apabila membantu mengelakkan idea/risiko penting hilang.

<!--
Q-001 | OPEN
Question: ...

R-001 | OPEN
Risk: ...
-->

## CURRENT SELECTION MATRIX

> Snapshot pemilihan semasa untuk membantu pemilik nampak trade-off tanpa menukar ZASSIMPLE menjadi ZASSELECTION. AI mesti mengemas kini matriks ini apabila pengguna sengaja memberi arahan `ZASS` atau `ZASS!!`.

| Option / Candidate | Must-have fit | Strength | Risk / Weakness | Evidence / Unknown | Status |
|---|---|---|---|---|---|
| [candidate] | PASS / FAIL / UNKNOWN | ... | ... | ... | IDEA / AC-xxx / D-xxx LOCKED / OPEN |

Aturan:

- `Must-have fit` hanya berdasarkan requirement/constraint yang telah dinyatakan; jika belum tahu, guna `UNKNOWN`.
- Jangan gunakan weighted score secara wajib.
- Jangan cipta option untuk cukupkan jadual; satu candidate tetap satu baris.
- Matriks ialah **rumusan**, bukan decision authority. AI boleh menyatakan `Current direction`, tetapi ia kekal cadangan AI.
- Jangan tambah command `SELECT` ke ZASSIMPLE. Keputusan muktamad guna command surface utama pemilik `PROCEED/LOCK`; `LOCK` / `LOCK DECISION` kekal alias compatibility.
- Apabila fail boleh dikemas kini, simpan snapshot matriks terkini di bahagian ini supaya sesi/AI seterusnya dapat melihat perbandingan semasa.

## DECISIONS

> Hanya pemilik boleh mewujudkan rekod `LOCKED` melalui arahan `PROCEED/LOCK` yang jelas; `LOCK` / `LOCK DECISION` kekal alias compatibility.

<!--
D-001 | LOCKED
Decision: ...
Reason: ...
Locked by: Project Owner
-->

## DESIGN

**Status:** PENDING CONFIRMATION

AI boleh mencadangkan `DRAFT DESIGN` apabila keputusan cukup jelas, walaupun belum diminta. `DRAFT DESIGN` menyediakan draf design dengan versi kerja seperti `Draft 0.1`, tanpa mengubah status design yang telah disahkan. Draf menjelaskan tujuan, aliran utama, elemen utama dan keputusan `D-xxx | LOCKED` yang berkaitan. Gunakan bahasa design yang sesuai dengan domain; architecture hanya dimasukkan jika projek benar-benar mempunyai technical/system architecture. Andaian kritikal ditandakan sebagai terbuka, bukan dijadikan keputusan secara senyap.

**Aturan tamat draf:** Setelah empat area design lengkap, Design 4/4 bermaksud **ready to challenge**, bukan terus ready to confirm. Challenge merekod finding material secara internal sebagai `KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED`; `REFINE` kembali ke DESIGN. Jika penyelesaian finding memerlukan perubahan keputusan LOCKED, berhenti pada owner decision gate.

Untuk design biasa/non-technical, lightweight challenge/confirmation UX sedia ada kekal sah, termasuk explicit owner skip apabila sesuai.

Untuk **substantial technical architecture**, Challenge wajib sebelum material execution dan tidak boleh di-skip terus ke final confirmation. Selepas PASS/revision coherent, paparkan compact execution-baseline gate menggantikan final confirmation:

```text
🥊 Challenge complete
Sedia lock execution baseline?

[🔒 LOCK PRE-ARCH]   [🥊 RE-CHALLENGE DESIGN ?!]
```

`LOCK PRE-ARCH` membuka owner review dan memerlukan `YA, LOCK PRE-ARCH`. Ini mewujudkan `PRE-ARCH BASELINE — LOCKED FOR EXECUTION`, bukan confirmed design. Capable reasoner/planner kemudian bina detailed ACTION PLAN dan evidence atomic tasks. Selepas task evidence mencukupi dan PRE-ARCH review selesai, jalankan `LAST CHALLENGE`, terapkan final improvement/revision yang justified, kemudian `CONFIRM DESIGN` baru tersedia. Selepas final confirmation, rebuild RELEASE ACTION PLAN dan fresh release atomic tasks hingga first-release acceptance → `DELIVERED !!`.

<!--
### Confirmed design

- Purpose: ...
- Main elements / workflow: ...
- Constraints from locked decisions: ...
- Open boundaries: ...
-->

## VERSION HISTORY

| Version | Date | Change |
|---|---|---|
| 0.3.3 | 2026-10-09 | Controlled post-freeze real-field patch: tambah Execution Reality Check, real artifact/sample pack, execution-surface mapping, evidence-bounded vertical tasks, dan delta planning sebelum/sepanjang technical execution. |
| 0.3.2 | 2026-10-07 | Canonicalized technical architecture-to-execution loop: Challenge → owner-approved PRE-ARCH → capable-reasoner detailed ACTION PLAN → evidence atomic tasks → PRE-ARCH review → LAST CHALLENGE → final improvement/revision → final design/architecture confirmation → rebuilt RELEASE ACTION PLAN → first-release atomic build → release acceptance → DELIVERED !!. Kekalkan direct confirmation yang ringan untuk ordinary/non-technical design, sementara technical worker kekal dengan STOP & ESCALATE dan tool-agnostic reasoning escalation. |
| 0.3.1 | 2026-10-07 | LOCKED loop Draft Challenge pra-confirmation: Design 4/4 bermaksud ready to challenge, CHALLENGE DESIGN guna thinking method pilihan AI, REFINE kembali ke DESIGN, PASS mesti tawarkan RE-CHALLENGE DESIGN atau CONFIRM DESIGN, dan owner boleh sengaja skip challenge pertama dengan CONTINUE TO CONFIRM. |
| 0.3.0 | 2026-10-02 | LOCKED model semantic DESIGN-first: DESIGN ialah surface/output universal ZASSIMPLE, architecture ialah subtype teknikal optional, ARCHITECTURE.md menjadi DESIGN.md, Design Progress/Forming/CONFIRM DESIGN menggantikan UX architecture-centric, dan DECIDE or DESIGN route DESIGN → ZASSIMPLE. |
| 0.2.5 | 2026-10-02 | LOCKED routing bahasa global: surface berstruktur ikut fail EN/MY aktif; perbualan boleh ikut bahasa pengguna; ID/command canonical kekal stabil. |
| 0.2.4 | 2026-10-01 | FINAL LOCK: ikon footer tetap dimuktamadkan sebagai 🔬 ZASS!! / 📌 PROCEED/LOCK / 📚 SAVE tanpa mengubah semantics command. |
| 0.2.3 | 2026-10-01 | Ringkaskan footer tetap kepada ZASS !! / PROCEED-LOCK / SAVE, selaraskan label itu dengan semantics command sebenar, kekalkan LOCK/COMMIT sebagai alias compatibility, dan jadikan pengesahan architecture sebagai UX contextual dalam DESIGN. |
| 0.2.2 | 2026-10-01 | Lengkapkan surface UX yang dikunci: landing DUMP-first, Stage Pulse perubahan stage/DO IT, kad Ready-to-lock, kad Architecture Forming progresif, gate CONFIRM ARCHITECTURE yang selaras, navigation task dengan Then, closure DELIVERED !! yang verified, dan identiti routing produk yang simple. |
| 0.2.1 | 2026-10-01 | Betulkan footer wajib UX kepada CONFIRM ARCHITECTURE sambil mengekalkan DRAFT ARCH sebagai command drafting dalaman yang sah. |
| 0.2.0 | 2026-10-01 | Lock UX DUMP-first, IDEA Trick, lifecycle 6D, Stage Pulse ringkas, progress architecture/action berasaskan criteria, lineage action plan tersembunyi, feedback dua hala action plan ↔ architecture, dan execution satu-task-pada-satu-masa. |
| 0.1.7 | 2026-10-01 | Wajibkan CURRENT SELECTION MATRIX pada arahan ZASS/ZASS!! tanpa weighted score atau command SELECT; LOCK DECISION kekal kuasa pemilik. |
| 0.1.6 | 2026-09-27 | Footer DRAFT ARCH; AI boleh mencadangkan draf dan BUILD, dengan pengesahan akhir dua langkah. |
| 0.1.5 | 2026-09-27 | Benarkan draf architecture berversi kerja; tetapkan aturan tamat “Sedia untuk confirm?” dan andaian kritikal. |
| 0.1.4 | 2026-09-27 | Tunjuk ZASSIMPLE UPDATE dan cadangan AI hanya pada arahan ZASS; footer baharu pada setiap balasan dan keyword COMMIT. |
| 0.1.3 | 2026-09-27 | Renamed the lightweight conversational template to ZASSIMPLE. |
| 0.1.2 | 2026-09-27 | Added copy-ready Bahasa Melayu prompt for use after upload. |
| 0.1.1 | 2026-09-27 | Required conversational response before the compact ZASSIMPLE update and refreshed visual footer. |
| 0.1.0 | 2026-09-27 | Initial ZASSIMPLE template. |

---

## AI response rule

Selepas benar-benar mengemas kini fail, AI mesti menyatakan secara ringkas apa yang direkodkan dan apa yang masih belum jelas. Jika AI hanya memberi cadangan atau demo, ia mesti menyatakan bahawa fail sebenar belum diubah.

AI boleh mencadangkan `PROCEED/LOCK` apabila sesuatu `AC` telah menjadi jelas atau disokong oleh persetujuan berulang. AI boleh mencadangkan `SAVE` apabila perubahan sudah cukup bermakna untuk menjadi checkpoint. `LOCK` / `COMMIT` kekal compatible, dan semua protected action masih memerlukan arahan jelas daripada pemilik.




