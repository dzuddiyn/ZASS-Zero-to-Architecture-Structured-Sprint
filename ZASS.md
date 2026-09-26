# ZASS — Zero-to-Architecture Structured Sprint

**Version:** 0.1.2 (panduan pengguna dipermudah; baseline keputusan v0.1 kekal)  
**Status:** BASELINE LOCKED  
**Owner:** Project Owner  
**Locked date:** 2026-09-26

> **ZASS Principle #1 — Bukan potong fikir; potong ulang fikir.**
>
> **ZASS Principle #2 — Fikir bebas. Rekod keputusan. Kunci yang pasti. Bina dari yang terkunci.**
>
> **ZASS Principle #3 — AI menghasilkan kemungkinan. Evidence menguji. Manusia memutuskan. Architecture mematuhi keputusan.**

---

# QUICK MANUAL — CARA GUNA ZASS

ZASS ialah workflow untuk membawa idea mentah kepada architecture dengan cepat tanpa kehilangan konteks, mengulang perbincangan lama, atau membiarkan AI mengubah keputusan secara senyap.

Fail ini ialah **source of truth** untuk proses idea → decision → architecture.

## CARA GUNA HARIAN — CAKAP SAHAJA

Berikan AI **fail ZASS projek terkini**, kemudian bercakap seperti biasa. Abang tidak perlu hafal kod, isi borang, memilih metodologi atau menyunting jadual. AI mengurus struktur fail dan mencadangkan kemas kini; abang menyemak maksudnya dan memilih keputusan.

| Bila | Apa boleh abang cakap |
|---|---|
| Idea baru muncul | “Aku ada idea begini...” Cerita bebas, walaupun belum tersusun. |
| Tamat berbincang | “Masukkan isi penting perbincangan ini ke ZASS. Asingkan fakta, tafsiran dan perkara yang belum diketahui. Tunjukkan apa yang berubah.” |
| Mahu sudut lain | “Semak bahagian kos idea ini,” atau “Cuba cari cara rancangan ini boleh gagal.” |
| Mahu membuat keputusan | “Apa pilihan yang masih perlu aku putuskan? Terangkan trade-off dalam bahasa mudah, satu demi satu.” |
| Sudah yakin | “Saya pilih pilihan ini: [keputusan]. Kunci keputusan ini dalam ZASS dan tunjukkan kesannya.” |
| Mahu architecture | “Adakah keputusan penting sudah cukup untuk bina architecture? Jika belum, beritahu apa yang menghalang.” |

AI mesti mencari entri yang berkaitan, mengurus ID dan status di belakang tabir, serta meminta kepastian jika arahan “ini” merujuk lebih daripada satu keputusan. **Hanya arahan jelas daripada pemilik projek boleh LOCK keputusan.** Sebelum menulis atau commit, AI tunjukkan ringkasan perubahan termasuk apa-apa percanggahan dengan keputusan terkunci.

## PROMPT SIAP GUNA — RUJUKAN PILIHAN

Prompt di bawah membantu apabila bertukar AI, mahu review yang tepat, atau AI tersalah faham. Abang tidak wajib menyalinnya untuk penggunaan harian. Ubah bahagian dalam `[ ]` sahaja jika perlu.

### A. Sembang bebas → kemas kini ZASS projek

```text
Baca ZASS.md terkini untuk projek [NAMA PROJEK]. Extract perbincangan kita ke dalam format ZASS.
Jangan invent fakta yang saya tak beri. Tandakan setiap perkara yang relevan sebagai
EXPLICIT (saya nyatakan), INFERRED (tafsiran AI, perlu disahkan), atau UNKNOWN.
Kekalkan kata-kata idea asal saya di RAW IDEA; asingkan WHY, GOALS, NON-GOALS,
CONSTRAINTS, idea baharu, soalan dan risiko. Jangan overwrite maklumat sedia ada
tanpa menunjukkan percanggahan. Jangan ubah LOCKED decisions.
Tunjukkan ringkasan perubahan dan bahagian yang perlu saya sahkan.
Jika ini projek baharu, namakan fail ZASS_[NAMA_PROJEK].md.
Jika projek ini sudah ada fail ZASS, kemas kini fail yang sama; jangan cipta v2/final.
Urus ID, status dan hubungan antara entri sendiri; saya tidak perlu menghafalnya.
```

Contoh nama projek baharu: `ZASS_Produk_Jus_TimunHalia.md`. Satu projek mempunyai satu fail ZASS utama; sejarah perubahan disimpan oleh Git. Lampirkan atau beri AI kandungan fail terkini setiap kali bertukar chat/model. Salinan dalam chat bukan versi autoritatif.

### B. Saya sudah ada idea berstruktur → tampal dan minta AI semak

```text
RAW IDEA
Produk minuman berasaskan timun + halia menggunakan timun reject.

WHY I WANT THIS
- Kurangkan waste timun.
- Cari produk value-added.

GOALS
- Produk mudah dihasilkan.
- Boleh diuji pada skala kecil.

NON-GOALS
- Belum mahu bina kilang besar.

CONSTRAINTS
- Modal awal rendah.
- Shelf life belum diketahui.

Masukkan ke ZASS projek ini. Anggap contoh di atas sebagai input idea sahaja,
bukan keputusan LOCKED. Tandakan fakta EXPLICIT, tafsiran INFERRED, dan perkara
UNKNOWN sebagai soalan. Jangan invent angka atau spesifikasi.
```

Contoh ini **bukan kandungan sebenar projek** dan tidak mengisi bahagian 1–4 di bawah secara automatik. Jika idea baru masih dalam projek yang sama, minta AI mencadangkan pindaan pada fail sedia ada, menjaga ID dan keputusan terdahulu.

### C. Blast dari satu perspektif

```text
ZASSS
Mode: Industrial product thinking
Scope: RAW IDEA
Cari kemungkinan, soalan dan risiko. Label sebagai calon; jangan LOCK keputusan.
```

### D. Review idea yang masih awal

```text
ZASS REVIEW
Method: Constraints + Quality Attributes
Scope: RAW IDEA / Whole system
Focus: [contoh: kos, pengguna, penyelenggaraan]
Do not modify LOCKED decisions.
Return only: findings, contradictions, risks, questions, candidate experiments,
and candidate decisions.
```

### E. Review sasaran khusus

```text
ZASS REVIEW
Method: Hacker / assumption breaking
Scope: [terangkan topik, bahagian, atau ID jika tahu]
Goal: Cari failure mode, hidden assumption dan edge case.
Focus: [contoh: input berulang, rangkaian terputus, salah izin]
Do not modify LOCKED decisions.
Return only:
- findings
- contradictions
- risks
- questions
- candidate experiments
- candidate decisions
```

Jika mahu, skop boleh ditulis secara biasa, contohnya “proses approval claim”. AI yang mencari ID sebenar dalam fail. `Scope: AC-001, AC-005–AC-011` hanya sesuai jika calon itu sudah direkodkan. `ATAM` lebih berguna untuk menilai candidate architecture yang cukup matang; pada tahap idea mentah gunakan BLAST atau review constraints dahulu.

`AC` bermaksud **calon cara sistem dibina**; `D` bermaksud **perkara yang abang putuskan** selepas menimbang pilihan. Butiran ID untuk AI ada di hujung fail.

Sebelum menyimpan pindaan AI, semak `diff`: apa yang ditambah, dibuang atau diubah; khususnya ID, fakta EXPLICIT/INFERRED, dan keputusan LOCKED.

### Melalui telefon sahaja

**Untuk edit ringkas dengan aplikasi GitHub Mobile:** pasang aplikasi GitHub rasmi dan log masuk. Buka repository → **Browse code** → buka fail ZASS projek → menu **⋯** di penjuru kanan atas → **Edit File** → ubah teks → **Commit**. Pilih branch yang sedang dibuka jika mahu perubahan terus pada branch itu. Commit dalam aplikasi sudah menyimpan perubahan pada GitHub; tiada `git push` tambahan. Semak nama branch sebelum commit.

**Untuk fail baharu yang AI hasilkan:** buka `github.com` dalam pelayar telefon → repository → **Add file → Upload files** → pilih `.md` yang dimuat turun → commit. Pastikan nama dan folder betul. Jika ZASS untuk projek itu sudah wujud, jangan upload satu lagi fail versi baharu; buka fail sedia ada dan kemas kini kandungannya selepas membandingkan perubahan.

Sebelum sesi AI seterusnya, buka atau muat turun versi terkini dari repo. Jika PC mempunyai salinan repo, jalankan `git pull` di PC sebelum menyunting lagi. Pindaan besar pada fail panjang lebih mudah disemak di PC.

Jika pilihan GitHub sukar kelihatan pada skrin kecil, cuba **Desktop site** dalam menu pelayar. Jangan letakkan rahsia, kata laluan atau token dalam ZASS yang akan di-commit.

---

## 1. Mulakan dengan idea mentah

Jika mahu, isi bahagian berikut sendiri. Jika abang hanya bercerita, AI mesti mengasingkannya:

- `RAW IDEA`
- `WHY I WANT THIS`
- `GOALS`
- `NON-GOALS`
- `CONSTRAINTS`

Tidak perlu fikir teknologi atau architecture dahulu.

Contoh arahan kepada AI:

> ZASSS. Baca ZASS.md. Jangan ubah LOCKED decisions. Cari idea, kemungkinan, persoalan, risiko dan alternatif yang belum diteroka.

---

## 2. Blast idea dengan bebas

Gunakan mana-mana AI:

- ChatGPT
- Gemini
- Claude
- Perplexity / PCom
- IDE agent
- model lain

AI boleh menambah:

- IDEA
- QUESTION
- RISK
- OPTION
- CANDIDATE DECISION

AI tidak boleh terus menjadikan cadangan sebagai keputusan.

---

## 3. Tukar sudut pandangan / metodologi

Gunakan `METHOD REVIEWS` untuk menguji idea dari perspektif berbeza.

Contoh:

> ZASS REVIEW  
> Method: Industrial / ATAM  
> Scope: whole system  
> Do not change LOCKED decisions.  
> Return findings, contradictions, risks, experiments and candidate decisions only.

Kaedah atau perspektif yang boleh digunakan:

| Kaedah | Ulasan ringkas |
|---|---|
| **Industrial / C4 / arc42 / ATAM** | Susun komponen, tanggungjawab, aliran dan trade-off; nilai sama ada reka bentuk memenuhi kualiti operasi sebenar. |
| **Academic / DSRM / GQM** | Tukar idea menjadi masalah, soalan, kaedah, ukuran dan bukti; pastikan tuntutan boleh diuji atau dipertahankan. |
| **Hacker / failure injection / assumption breaking** | Pecahkan andaian sistem secara kreatif: input pelik, keadaan luar jangka, gangguan rangkaian dan urutan tindakan yang salah. |
| **Security / threat modelling** | Kenal pasti aset penting, pihak yang boleh menyerang, laluan serangan, kesan kerosakan dan kawalan yang perlu diwujudkan. |
| **Abuse / Scammer mindset** | Bayangkan pengguna berniat mengambil kesempatan: tuntutan palsu, akaun berganda atau manipulasi harga; rekod pencegahan, bukan trik. |
| **Cost / unit economics** | Kira kos membina, menjalankan dan menyelenggara; kenal pasti kos tersembunyi, had bajet dan titik pulang modal. |
| **Maintainability** | Nilai sama ada seorang manusia masa depan boleh membaca, membaiki, menaik taraf dan memulihkan sistem tanpa pencipta asal. |
| **Operations / reliability** | Fokus kepada kerja harian: pemantauan, alert, handover, backup, recovery, kapasiti dan apa berlaku apabila manusia tidak tersedia. |
| **Scalability** | Uji apa berubah apabila pengguna, data, arahan atau integrasi meningkat sepuluh hingga seratus kali ganda. |
| **Crazy / unconstrained brainstorming** | Tangguhkan had teknologi, kos dan kebiasaan sementara; cari kemungkinan luar jangka sebelum menapisnya melalui constraints sebenar. |
| **User-experience / workflow** | Ikut perjalanan pengguna dari niat hingga hasil; cari kekeliruan, langkah berlebihan, keputusan berisiko dan titik menunggu. |
| **Single-maintainer perspective** | Nilai semuanya melalui mata seorang penjaga sistem: masa, tenaga, kemahiran, dokumentasi, kos dan risiko keletihan. |
| **Artist / emotional experience** | Nilai rasa pengalaman: adakah sistem memberi lega, yakin, seronok, tenang atau bermakna kepada manusia yang menggunakannya? |
| **First-principles thinking** | Pecahkan andaian kepada fakta asas; bina semula pilihan daripada apa yang benar-benar diperlukan, bukan amalan biasa. |
| **Systems thinking** | Lihat gelung sebab-akibat, kesan sampingan, kelewatan dan pihak berkaitan; elak membaiki satu bahagian sambil merosakkan yang lain. |
| **Product / market lens** | Tanya siapa pengguna sanggup guna, masalah apa cukup sakit, apa alternatifnya dan sebab mereka memilih penyelesaian ini. |
| **Legal / compliance lens** | Semak kewajipan undang-undang, privasi data, rekod, persetujuan, liabiliti dan syarat industri sebelum kos pembaikan meningkat. |
| **Ethics / harm lens** | Cari siapa mungkin terjejas, dipinggirkan atau dirugikan; tetapkan batas keputusan walaupun pilihan itu kelihatan menguntungkan. |
| **Accessibility / inclusion lens** | Uji sama ada pengguna dengan kemampuan, bahasa, peranti, internet atau literasi berbeza masih boleh menggunakan sistem dengan selamat. |
| **Data / evidence lens** | Tentukan data yang perlu dipercayai, sumbernya, kualitinya, siapa boleh mengubahnya dan bagaimana audit membuktikan kebenaran. |
| **Privacy / trust lens** | Minimakan data yang dikumpul; jelas tentang tujuan, akses, tempoh simpanan dan cara pengguna mendapatkan semula kawalan. |
| **Resilience / offline lens** | Bayangkan internet, AI provider atau integrasi hilang; tentukan fungsi minimum, queue, retry dan pemulihan apabila sambungan kembali. |
| **Red team / adversarial review** | Cari kelemahan melalui peranan pihak yang bermusuh, tetapi hasilkan hanya risiko, bukti dan cadangan kawalan pertahanan. |
| **Reverse planning / pre-mortem** | Anggap projek gagal setahun kemudian; senaraikan sebab paling munasabah dan bina tindakan awal untuk mengurangkannya. |
| **Analogy / cross-domain lens** | Pinjam corak daripada hospital, bank, kilang, permainan atau kebun untuk mencari penyelesaian yang belum terfikir. |
| **Minimal viable experiment** | Elak debat panjang dengan mencipta ujian paling kecil yang boleh menolak atau menyokong andaian utama. |
| **Future-back / scenario planning** | Bayangkan beberapa masa depan yang munasabah; semak sama ada keputusan hari ini masih berguna apabila keadaan berubah. |
| **Stakeholder / conflict lens** | Petakan siapa mendapat manfaat, siapa menanggung kerja atau risiko, dan konflik kepentingan yang perlu diurus awal. |

Untuk **Abuse / Scammer mindset**, output mestilah risiko, bukti, pengesanan dan kawalan pencegahan. Jangan merekod langkah bypass, penipuan atau monetisasi haram.

Methodology tidak mempunyai kuasa untuk mengubah architecture secara langsung.

## PRESET REVIEW — 3-OTAK

Gunakan preset ini apabila idea memerlukan tiga sudut yang saling melengkapi:

**Nama luaran:** apabila menerangkan kaedah ini kepada pihak luar, gunakan **Abuse Red Teaming** atau **Product Safety Red Teaming**. `Victim-Abuser Red Team` ialah nama preset khas ZASS.

| Peranan | Soalan utama | Hasil yang dicari |
|---|---|---|
| **Engineer** | Bolehkah ia dibina, dijaga dan dijalankan dalam constraints sebenar? | Keperluan, modul, data, kos, had dan ujian teknikal. |
| **Artist** | Bagaimanakah pengalaman itu dirasa oleh manusia? | Journey, bahasa, cerita, rasa yakin, lega, seronok atau bermakna. |
| **Victim-Abuser Red Team** | Siapa boleh keliru, tercedera atau mengambil kesempatan, dan bagaimana dikesan? | Risiko, kesan manusia, evidence, detection signal dan preventive control. |

Contoh arahan:

```text
ZASS REVIEW
Method: 3-Otak
Scope: [idea atau bahagian projek]
Run Engineer, Artist, and Victim-Abuser Red Team perspectives.
Do not change LOCKED decisions.
Return findings, contradictions, risks, candidate decisions, and the NEXT 3-DAY ACTION PROPOSAL.
```

## MAKLUM BALAS SELEPAS KEMAS KINI

Selepas AI benar-benar mengemas kini entri dalam fail ZASS, ia mesti memaklumkan:

> **ZASS telah dikemas kini mengikut format ZASS dan sedia untuk brainstorming berstruktur.**

Jika AI hanya menunjukkan cadangan dan belum mengemas kini fail, ia mesti menyatakan perkara itu dengan jelas dan tidak mendakwa fail sudah dikemas kini.

## OUTPUT DEFAULT — CADANGAN TINDAKAN 3 HARI

Selepas setiap `ZASSS` atau `ZASS REVIEW`, AI mesti menghasilkan cadangan ini. Ia ialah cadangan kerja kecil untuk mengukur kos dan nilai idea; ia bukan arahan automatik untuk membina projek.

```text
## 🧭 NEXT 3-DAY ACTION PROPOSAL

Day 1 — Verify the problem
Output: [bukti / contoh pengguna / data kecil]

Day 2 — Test one critical assumption
Output: [hasil ujian yang boleh dinilai]

Day 3 — Make a visible prototype or decision
Output: [demo kecil / keputusan / alasan untuk PARK]

Cost: RM___
Time: ___ jam
Stop rule: Hentikan cadangan tindakan jika [syarat].
```

Selepas pelan tiga hari, AI mesti memberi ruang respons yang pendek dan mudah dibaca:

```text
## ✨ RUMUSAN AI — Apa yang paling penting sekarang

[AI menulis rumusan bebas yang berpunca daripada hasil ZASSS atau ZASS REVIEW.]

🌱 Peluang paling menarik: [peluang / arah yang patut diberi perhatian]
🧩 Perkara yang masih kabur: [andaian atau soalan paling penting]
⚠️ Jangan buat dulu: [tindakan yang patut dielakkan sehingga ada bukti]
💡 Cadangan kecil AI: [langkah paling ringan yang berbaloi dicuba]
```

Rumusan ini mesti jelas sebagai cadangan AI, bukan keputusan; ia tidak boleh mengubah mana-mana `LOCKED` decision atau mencipta fakta.

AI mesti kemudian menutup output dengan soalan yang jelas:

**👉 NEXT STEP — PARK, PROCEED, atau PIVOT?**

- **PARK** — AI masukkan rekod itu dalam `ZASS.md`; simpan di GitHub/Notion, selamat dan sedia diteruskan pada bila-bila masa.
- **PROCEED** — AI cadangkan `ZASS REVIEW` yang paling sesuai dengan idea semasa. Nyatakan **Method**, **Scope**, **Focus**, dan satu sebab ringkas mengapa review itu relevan; AI juga boleh perincikan ujian Hari 1 jika itu langkah yang lebih sesuai.
- **PIVOT** — AI cari penggunaan atau arah lain bagi idea dan bahan mentah asal dahulu, bukan terus membina arah lama.

---

## 4. Gunakan banyak AI tanpa voting

Jika beberapa AI bersetuju, itu **bukan evidence**.

Jika AI tidak bersetuju, tukarkan perbezaan itu kepada:

- QUESTION
- EXPERIMENT
- TRADE-OFF
- CANDIDATE DECISION

Contoh:

Gemini: PostgreSQL  
Claude: SQLite  
GPT: Firestore

Jangan buat voting.

Sebaliknya hasilkan soalan seperti:

- Berapa concurrent writers?
- Perlu offline?
- Berapa saiz data?
- Perlu relational integrity?
- Berapa kos operasi?
- Siapa akan maintain?

Kemudian buat keputusan berdasarkan evidence.

---

## 5. Bentuk candidate architecture hanya bila perlu

Jika benar-benar ada pendekatan architecture berlainan, gunakan:

- `AC-001`
- `AC-002`
- `AC-003`

Contoh:

- AC-001 Modular Monolith
- AC-002 Microservices
- AC-003 Event-driven Hybrid

Bandingkan semua candidate menggunakan kriteria yang sama.

Jangan biarkan setiap AI mencipta pelan A/B/C sendiri tanpa kawalan.

---

## 6. Tukarkan isu kepada keputusan

Semua keputusan penting masuk ke `DECISION LEDGER`.

State standard:

`RAW → CANDIDATE → TESTING → DECIDED → LOCKED`

State tambahan:

- `REJECTED`
- `DEFERRED`
- `SUPERSEDED`

AI boleh mencadangkan `CANDIDATE`.

Hanya project owner boleh menukar keputusan kepada `LOCKED`.

---

## 7. Lock keputusan

Contoh arahan biasa: “Saya pilih [pilihan] untuk [topik]. Kunci keputusan ini.” AI mencari ID yang sepadan dan mengesahkan sasaran jika tidak jelas. `LOCK D-012` boleh digunakan jika abang sudah tahu ID, tetapi tidak wajib.

Sebelum lock, semak:

- masalah jelas?
- alternatif telah dipertimbangkan?
- trade-off diketahui?
- evidence mencukupi?
- kesan terhadap sistem difahami?

LOCKED decision menjadi authoritative.

AI tidak boleh mengubahnya secara senyap.

---

## 8. Jangan buang rejected idea

Simpan di `REJECTED IDEAS`.

Tujuannya supaya AI masa depan tidak mengulangi idea yang sudah dinilai dan ditolak.

---

## 9. Generate architecture hanya bila READY

Architecture hanya boleh dijana apabila `ARCHITECTURE READINESS = READY`.

Contoh arahan:

> ZASS ARCHITECT. Generate architecture strictly from LOCKED decisions, goals, constraints, workflows and known risks. Return ARCHITECTURE BLOCKER for unresolved major assumptions.

Architecture tidak boleh memperkenalkan keputusan besar baru secara senyap.

---

## 10. Selepas architecture wujud

Sebarang idea baru mesti melalui:

`New Idea → CANDIDATE → Impact Analysis → DECISION → Human Approval → LOCK → Architecture Update`

Jangan edit architecture dahulu kemudian cuba menyesuaikan decision kemudian.

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

Tiga zone utama:

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

Discovery boleh chaos.  
Decision mesti terkawal.  
Architecture mesti disiplin.

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

Use evidence, constraints and project-owner decisions.

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

Tangkap dan teroka idea mentah tanpa mengubah LOCKED decisions. Hasilkan NEXT 3-DAY ACTION PROPOSAL dan tanya sama ada pengguna mahu PARK, PROCEED atau PIVOT.

### ZASS REVIEW

Challenge the project using a named methodology or perspective.

### ZASS CHALLENGE

Attack assumptions, edge cases, failure modes and contradictions.

### ZASS DECIDE

Return unresolved decision candidates and their trade-offs.

### LOCK D-XXX

Project owner approves and locks a decision.

### ZASS ARCHITECT

Generate architecture from the authoritative locked state.

### ZASS AUDIT

Audit an existing architecture against ZASS decisions, risks and constraints.

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
| `D-xxx` | Decision | Decision topic, options, trade-offs, evidence and status. |
| `L-xxx` | Locked Decision | Authoritative record referencing an owner-locked D entry. |
| `E-xxx` | Experiment | Test and evidence relevant to a question or decision. |

Example: `AC-001 = modular monolith` and `AC-002 = microservices` are alternatives. `D-008 = select system approach` records the selection and rationale. When the owner clearly locks D-008, update its status and create an `L-xxx` record that references it. Do not create an independent, conflicting decision. A small decision can be a D entry without an AC entry.

---

# END OF ZASS BASELINE
