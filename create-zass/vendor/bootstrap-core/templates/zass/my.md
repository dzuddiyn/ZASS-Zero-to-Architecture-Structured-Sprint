# ZASS — Zero-to-Architecture Structured Sprint

**Version:** 0.3.11 (architecture-to-execution challenge dan atomic-task contract; decision authority teras tidak berubah)
**ZASS SYSTEM:** v0.2.4
**Language:** Bahasa Melayu — localization of the default `ZASS.md` English method

**Status:** BASELINE LOCKED  
**Owner:** Project Owner  
**Locked date:** 2026-09-26

> **ZASS Principle #1 — Bukan potong fikir; potong ulang fikir.**
>
> **ZASS Principle #2 — Fikir bebas. Rekod keputusan. Kunci yang pasti. Bina dari yang terkunci.**
>
> **ZASS Principle #3 — AI menghasilkan kemungkinan. Evidence menguji. Manusia memutuskan. Architecture mematuhi keputusan.**
>
> **ZASS Principle #4 — Tangkap luas, tumpu dengan sengaja: jangan tapis idea terlalu awal. Bentuk candidate dahulu, kemudian research hanya soalan yang boleh mengubah pilihan; silang evidence, LOCK keputusan, dan biarkan architecture muncul daripada keputusan itu.**

---

# ZASS SYSTEM SURFACE ALIGNMENT — ZASS SYSTEM v0.2.4

Full ZASS kini selari dengan **ZASS SYSTEM v0.2.4** supaya pengguna dan AI boleh mengesan perubahan routing/UI/UX sistem tanpa mengubah semantics keputusan Full ZASS.

Apabila Full ZASS digunakan melalui ZASS SYSTEM:

- entry utama sistem ialah **DUMP / DECIDE / DESIGN**;
- DUMP route ke ZASSPILL untuk continuity-first conversation tanpa memaksa struktur terlalu awal;
- DECIDE route ke ZASSELECTION;
- DESIGN bermula dengan ZASSIMPLE dan naik ke Full ZASS hanya apabila governance lebih kuat diperlukan;
- pengalaman pengguna mesti menggunakan **progressive disclosure** dan tidak memaparkan semua ID/ledger secara default;
- UI/AI perlu **present only the next meaningful human action**;
- output berstruktur yang dilihat manusia mesti ikut **ZASS Human Presentation Contract (HPC)** shared;
- SAVE/sync hanya dianggap berjaya apabila persistence sebenar berlaku dan receipt/commit sebenar tersedia;
- local CLI dan AI-SYNC Web mesti berkongsi semantics validator/core yang sama, bukan dua rule engine berasingan.

Perubahan ini ialah **surface/system alignment**. Authority Full ZASS, human LOCK, Evidence Confidence, convergence loop, dan architecture confirmation gate kekal seperti sebelumnya.

Pelaksanaan downstream pilihan: `docs/ZASS_ZASSCODE_DOWNSTREAM_HANDOFF_BOUNDARY.md`. Penggunaan ZASSCODE mesti dinyatakan bagi projek; modul ini menggunakan kontrak pelaksanaan sedia ada dan mengekalkan kuasa keputusan/seni bina ZASS.

# LANGUAGE ROUTING — BAHASA MELAYU

`ZASS_MY.md` ialah versi Bahasa Melayu untuk Full ZASS. Fail default Full ZASS ialah `ZASS.md` dalam English.

Jika pengguna menggunakan `ZASS.md` English tetapi bercakap dalam Bahasa Melayu, AI boleh meneruskan perbualan dalam Bahasa Melayu tanpa menukar authority file secara automatik.

**Surface method berstruktur ikut bahasa fail method aktif, bukan bahasa perbualan.** Dengan `ZASS_MY.md`, semua jadual dan label yang dilihat pengguna — termasuk rekod I/AC/D (idea/calon/keputusan), kad, tajuk matriks, penerangan stage/status dan prompt method — mesti dipaparkan dalam Bahasa Melayu. ID canonical, command dan token state rasmi kekal seperti asal supaya lineage dan automation tidak pecah.

Pilihan bahasa ini merujuk kepada **method template**. Project state berasaskan Git kekal menggunakan `ZASS.md` sebagai fail canonical kecuali projek menetapkan contract lain secara eksplisit, supaya validator/discovery sedia ada kekal serasi.

# HUMAN PRESENTATION — SHARED HPC

Output berstruktur Full ZASS yang dilihat manusia mesti ikut contract shared canonical: `docs/ZASS_HUMAN_PRESENTATION_CONTRACT.md`.

> **Same truth, clearest faithful representation available.**

Guna representation paling jelas dan faithful yang memang diketahui disokong oleh client semasa. Jika capability rich-render tidak diketahui, utamakan structured Markdown; jika tidak sesuai, guna hierarchy text menegak yang ringkas. Jangan default architecture/process/decision flow kepada ASCII-art lebar dalam code block. ASCII/monospace kekal sesuai untuk repo tree, terminal/CLI output, log, command dan protocol/wire format.

HPC hanya mengubah presentation. Ia tidak boleh mengubah evidence, decision authority, LOCKED state, acceptance, PASS/FAIL atau semantics architecture.

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

## ZASS CONVERGENCE LOOP

ZASS tidak perlu memaksa setiap idea menjadi keputusan ketika idea itu muncul. Tangkap dahulu idea, constraint, risk, evidence dan LOCKED decision yang relevan; kemudian cari **convergence** apabila bahan sudah cukup untuk membentuk candidate yang coherent.

> **Research dibuat selepas candidate terbentuk, bukan semasa idea baru dikumpul.**

Canonical loop:

```text
CAPTURE → MATCH → SYNTHESIZE → RESEARCH → CROSS-CHECK → LOCK → ARCHITECTURE
```

Expanded working flow:

```text
LAMBAK IDEA
    ↓
CAPTURE
jangan tapis terlalu awal
    ↓
MATRIX
satukan idea + constraint + risk + evidence + LOCK lama
    ↓
MATCH
cari idea yang saling melengkapi
    ↓
SYNTHESIZE
bentuk 2–3 candidate yang coherent apabila berguna
    ↓
SHORTLIST
buang candidate yang gagal must-have / constraint
    ↓
DEEP RESEARCH
research hanya soalan yang boleh mengubah pilihan
    ↓
CROSS-CHECK
official docs + existing projects + real limitation + evidence
    ↓
UPDATE MATRIX
apa yang research sahkan / patahkan?
    ↓
LOCK DECISIONS
    ↓
DRAFT ARCH
    ↓
ARCHITECTURE CHALLENGE
    ↓
CONTROLLED REVISION
    ↓
LOCK PRE-ARCH
    ↓
EXECUTION REALITY CHECK
    ↓
REAL ARTIFACT / SAMPLE PACK + EXECUTION SURFACE MAP
    ↓
DETAILED ACTION PLAN ↔ PRE-ARCH
    ↓
EVIDENCE-BOUNDED VERTICAL ATOMIC TASK LOOP
    ↓
BUILD / CONFIRM ARCHITECTURE
```

Aturan convergence:

- **CAPTURE luas, jangan tapis terlalu awal.** Idea AI, idea pemilik, constraint, risk, evidence, hasil test dan LOCK lama boleh dikumpulkan dahulu dengan provenance/status yang jelas.
- **MATCH sebelum memilih.** Cari idea yang saling melengkapi; candidate terbaik boleh menjadi gabungan beberapa idea, bukan semestinya satu idea yang “menang”.
- **SYNTHESIZE candidate yang coherent.** Bentuk beberapa candidate hanya apabila bahan mencukupi; jangan cipta alternatif palsu untuk cukupkan bilangan.
- **SHORTLIST melalui must-have dan constraint.** Candidate yang jelas gagal syarat wajib tidak perlu dibawa ke deep research.
- **RESEARCH mesti tajam.** Research hanya persoalan yang hasilnya boleh mengubah shortlist, trade-off atau keputusan. Jangan research semua teknologi sebelum candidate terbentuk.
- **CROSS-CHECK sebelum LOCK.** Silangkan candidate dengan official capability/docs, existing project/pattern, known limitation dan evidence sebenar.
- **UPDATE MATRIX selepas research.** Finding research kembali ke matrix/candidate state dahulu; ia tidak terus mengubah architecture.
- **Human LOCK sebelum architecture.** Research memberi evidence; manusia membuat keputusan; architecture dibina daripada keputusan yang benar-benar LOCKED.

Trigger untuk beralih daripada CAPTURE kepada convergence bukan bilangan idea tertentu. Triggernya ialah apabila bahan sudah cukup untuk membentuk sekurang-kurangnya satu candidate yang coherent dan ada persoalan evidence tertentu yang boleh mengubah keputusan.

## MOD BALASAN ZASS PENUH

Mesej biasa dijawab secara natural. AI boleh merekod perkara penting dalam fail projek apabila boleh mengubahnya, tetapi tidak memaparkan blok penakulan, ID atau borang ZASS kecuali diminta. Jangan mendakwa fail berubah jika belum. AI boleh mencadangkan `DRAFT ARCH` apabila keputusan cukup jelas; cadangan itu tidak menghasilkan architecture secara automatik.

Arahan sengaja `ZASS` atau `ZASS!!` menggantikan arahan penerokaan lama: jalankan penerokaan penuh, tunjuk rekod yang relevan dan status fail, diikuti ✨ RUMUSAN dan CADANGAN oleh AI, 🧭 NEXT-DAY ACTION PROPOSAL, serta PROCEED / PIVOT. `ZASS REVIEW` mengekalkan kaedah dan skop review tersendiri. `PROCEED` meluluskan **hanya** proposal set yang disenaraikan secara eksplisit dalam pemetaan ZASS terakhir di bawah `PROPOSED FOR PROCEED`. Item yang tidak disenaraikan tidak diluluskan. Jika set berubah, bercanggah, atau tidak jelas, AI mesti paparkan semula set sebelum PROCEED. Proposal yang jelas ditanda untuk LOCK menjadi LOCKED; PROCEED tidak commit atau push. Arahan `COMMIT` dan architecture mendapat jawapan tindakan yang jelas walaupun tanpa arahan `ZASS`. Perkataan dalam contoh, petikan, demo, penafian atau footer bukan arahan.

Akhiri **setiap** balasan AI dengan:

```text
[🧠 ZASS!!]--[▶️ PROCEED]--[📦 COMMIT]

🏗️ ZERO → ARCHITECTURE: [███████░░░] 70% — READY FOR DRAFT ARCH
🔬 EVIDENCE CONFIDENCE: UNVALIDATED — [sebab ringkas berdasarkan evidence sebenar]

⬆️ UPDATE ZASS? now v0.3.9 / latest v0.3.10
```

Footer ialah peringatan, bukan arahan automatik. Gantikan progress bar, peratus, status, Evidence Confidence dan versi contoh dengan keadaan sebenar. Jika baris ZERO → ARCHITECTURE ialah assessment sebenar, baris Evidence Confidence wajib dipaparkan bersama mengikut rule di bahagian Evidence Confidence. Pada mesej biasa, footer dan progress bar tetap kelihatan tetapi semakan versi hanya wajib apabila pengguna sengaja memberi arahan `ZASS` atau `ZASS!!`. `AC-xxx` dalam ZASS penuh kekal bermaksud **Architecture Candidate**, bukan calon persetujuan ZASSIMPLE.

Maksud arahan footer:

- `ZASS!!` — jalankan penerokaan penuh mengikut format ZASS.
- `PROCEED` — luluskan tepat proposal set yang dipaparkan di bawah `PROPOSED FOR PROCEED` dalam pemetaan ZASS terakhir. Item lain tidak termasuk. Jika set berubah atau ambigu, AI mesti paparkan semula set sebelum bertindak. Proposal yang ditanda untuk LOCK menjadi LOCKED. PROCEED tidak commit atau push.
- `PIVOT` — cadangkan arah alternatif berdasarkan kelemahan, bukti atau kekangan semasa.
- `COMMIT` — selepas perubahan diluluskan melalui PROCEED atau arahan pemilik yang setara, kemas kini fail berkaitan, versi dan changelog sebagai satu commit atomik, push ke GitHub, kemudian laporkan SHA sebenar. Jangan laporkan kejayaan jika commit atau push belum berlaku.

Apabila pengguna sengaja memberi arahan `ZASS` atau `ZASS!!`, bandingkan versi fail projek dengan versi terkini repo rasmi jika akses tersedia. Jika berlainan, paparkan `⬆️ UPDATE ZASS? now v<old> / latest v<new>`. Jika sama, paparkan `✅ ZASS UP TO DATE — v<version>`. Jika semakan tidak boleh dibuat, paparkan `⚠️ VERSION CHECK UNAVAILABLE — current file v<version>`; jangan reka nombor versi.

## ACTION PLAN — GERAKKAN KERJA TANPA MENJADI DECISION LEDGER KEDUA

Gunakan `ACTION_PLAN.md` untuk projek yang mempunyai kerja berbilang langkah atau perlu menyimpan progress antara sesi. Ia pilihan; projek idea kecil atau projek lama yang hanya mempunyai `ZASS.md` kekal sah.

| Fail | Authority |
|---|---|
| `ZASS.md` | Discovery, questions, risks, candidates, decisions, LOCKED decisions, experiment requirement, readiness dan perubahan keputusan. |
| `ACTION_PLAN.md` | Implementation planning + execution/progress state: PRE-ARCH reference, sequence, dependencies, feasibility, experiments, migration/integration/security/test/rollback gates, atomic-task planning, evidence/results, blocker, lesson, kerja siap dan PARKED. |
| `ARCHITECTURE.md` | Representasi architecture yang berasal daripada state ZASS yang telah disahkan. Ia hanya diperlukan apabila architecture dibina. |

`ACTION_PLAN.md` tidak boleh LOCK atau mengubah keputusan ZASS, menentukan architecture, atau menjadikan eksperimen PASS sebagai keputusan secara automatik. Ia **boleh** merekod finding implementation-planning yang memerlukan architecture review. Finding itu mesti feed balik secara explicit kepada ZASS/ARCHITECTURE; ACTION_PLAN tidak mengaplikasikan perubahan architecture dengan sendiri.

`ZERO → ARCHITECTURE` dikira dan direkod secara rasmi dalam `ZASS.md`. Jika `ACTION_PLAN.md` digunakan, ia menyimpan **snapshot** nilai rasmi itu untuk execution dan dashboard; ia tidak mengira, menaikkan atau menurunkan skor sendiri. Setiap perubahan skor mesti mengemas kini ZASS dan snapshot ACTION PLAN dalam commit atomik yang sama. Gunakan `Source: ZASS.md v<version> — same Git commit`; jangan cuba menulis SHA commit itu ke dalam fail kerana SHA hanya wujud selepas commit. GitHub Actions mengambil SHA sebenar daripada event commit dan menambahkannya pada mirror seperti Notion.

```text
LOCKED PRE-ARCH baseline
                  ↓
DETAILED ACTION_PLAN
                  ↓
ATOMIC TASK
                  ↓
RESULT / EVIDENCE
                  ↓
PRE-ARCH REVIEW
                  ├─ NO ARCH IMPACT → PASS → NEXT TASK
                  ├─ TASK-PLAN ISSUE → REWORK
                  ├─ ARCH IMPACT → REVISE / SUPERSEDE PRE-ARCH
                  └─ LOCKED DECISION IMPACT → STOP → OWNER

Finding keputusan/evidence yang menyentuh authority masih kembali melalui ZASS FEED / ZASS REVIEW.
```

Gunakan ID `E-xxx` yang sama apabila eksperimen datang daripada ZASS. ZASS memegang tujuan dan requirement evidence eksperimen; ACTION_PLAN merekod pelaksanaan, bukti dan hasil. `ZASS FEED` membawa finding matang kembali untuk dinilai, bukan mencipta decision automatik.

**State tidak bercampur:** ZASS menggunakan state discovery/decision seperti `RAW → CANDIDATE → TESTING → DECIDED → LOCKED`. ACTION_PLAN menggunakan state execution: `OPEN`, `NEXT`, `ACTIVE`, `BLOCKED`, `DONE`, `PARKED`, `CANCELLED`. Eksperimen ACTION_PLAN menggunakan `PLANNED`, `READY`, `RUNNING`, `PASS`, `FAIL`, `INCONCLUSIVE`, `BLOCKED`, `CANCELLED`.

Salin `ACTION_PLAN_TEMPLATE.md` menjadi `ACTION_PLAN.md` dalam repo projek apabila execution mula berpanjangan. Guna `ACTION_PLAN_TEMPLATE_EN.md` jika projek menggunakan English. Jangan cipta serentak `progress.md`, `tasks.md`, `tasks.json` atau todo lain sebagai authority tambahan.

**AI behaviour:** Dalam sembang biasa, AI hanya menyebut atau mengemas kini action yang relevan; jangan paparkan seluruh templat. Apabila pengguna berkata `ZASS`, AI rujuk bukti execution yang relevan jika ACTION_PLAN wujud, dan jangan anggap status ACTION_PLAN sebagai LOCKED decision. Apabila pengguna meminta `ACTION PLAN` atau maksud setara, tunjuk current focus, P0/P1, action ACTIVE/NEXT, eksperimen, blocker, recent learning dan ZASS FEED yang berkaitan.

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
ZASS
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

> ZASS. Baca ZASS.md. Jangan ubah LOCKED decisions. Cari idea, kemungkinan, persoalan, risiko dan alternatif yang belum diteroka.

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
Return findings, contradictions, risks, candidate decisions, and the NEXT-DAY ACTION PROPOSAL.
```

## MAKLUM BALAS SELEPAS KEMAS KINI

Selepas AI benar-benar mengemas kini entri dalam fail ZASS, ia mesti memaklumkan:

> **ZASS telah dikemas kini mengikut format ZASS dan sedia untuk brainstorming berstruktur.**

Jika AI hanya menunjukkan cadangan dan belum mengemas kini fail, ia mesti menyatakan perkara itu dengan jelas dan tidak mendakwa fail sudah dikemas kini.

## OUTPUT DEFAULT — CADANGAN TINDAKAN ESOK

Selepas setiap `ZASS` atau `ZASS REVIEW`, AI mesti menghasilkan cadangan ini. Ia ialah cadangan kerja kecil untuk mengukur kos dan nilai idea; ia bukan arahan automatik untuk membina projek.

AI mesti memberi ruang respons yang pendek dan mudah dibaca sebelum cadangan tindakan esok:

```text
## ✨ RUMUSAN dan CADANGAN oleh AI

[AI menulis 1–3 perenggan pendek secara bebas dan natural. Ia boleh merumus findings,
menyambung corak yang AI nampak, atau memberi cadangan kreatif yang jelas sebagai calon.]
```

Rumusan ini mesti jelas sebagai cadangan AI, bukan keputusan; ia tidak boleh mengubah mana-mana `LOCKED` decision atau mencipta fakta.

------------------------

```text
## 🧭 NEXT-DAY ACTION PROPOSAL

Esok — Sahkan satu andaian paling kritikal
Tindakan: [satu tindakan paling kecil yang boleh dibuat esok]
Output: [bukti / jawapan / data kecil yang boleh dinilai]

💰 Cost: RM___
⏱️ Time: ___ jam
🛑 Stop rule: Hentikan tindakan jika [syarat].
```

------------------------

AI mesti kemudian menutup output dengan soalan yang jelas:

Sebelum menawarkan `PROCEED`, AI mesti menunjukkan set yang akan diluluskan:

```text
PROPOSED FOR PROCEED
- [ID / tindakan / perubahan]
- [ID / tindakan / perubahan]
```

**👉 NEXT STEP — PROCEED ▶️ atau PIVOT 🔄?**

- **PROCEED ▶️** — AI mencadangkan hanya langkah yang paling relevan daripada pilihan berikut:
  - **🧪 Jalankan eksperimen** — uji andaian atau `E-xxx` dengan bukti kecil.
  - **🔍 ZASS REVIEW** — nyatakan **Method**, **Scope**, **Focus**, dan sebab ringkas.
  - **🛠️ Bina mini-prototype** — hasilkan artefak atau simulasi kecil untuk diuji.
  - **⚖️ Cadangkan keputusan** — banding pilihan, bukti dan trade-off dalam `D-xxx`; belum LOCK.
  - **▶️ PROCEED** — pemilik menerima tepat item dalam `PROPOSED FOR PROCEED`; item yang tidak disenaraikan tidak diluluskan. Cadangan yang jelas ditanda untuk LOCK menjadi LOCKED. Jika proposal set berubah atau ambigu, paparkan semula set dahulu. PROCEED tidak commit atau push.
  - **📦 COMMIT** — commit dan push perubahan yang telah diluluskan ke GitHub sebagai satu commit ber-versi yang boleh dijejak; laporkan SHA sebenar hanya selepas push berjaya.

---

- **PIVOT 🔄** — AI mencari arah lain yang masih menyelesaikan masalah asal dan mengekalkan calon terdahulu dalam rekod.
  - **🔀 Cadangan pivot:** [arah alternatif yang sesuai dengan evidence semasa].

Jika `ACTION_PLAN.md` wujud, NEXT-DAY ACTION PROPOSAL mesti rujuk action atau `E-xxx` yang sedia ada dahulu. `PROCEED` hanya mengemas kini atau mencipta action yang disenaraikan dalam `PROPOSED FOR PROCEED`; `PIVOT` merekod perubahan arah. Jika pemilik secara biasa meminta kerja ditangguh atau dihentikan, action boleh dipindahkan ke state `PARKED`; tiada command `PARK` khusus. Jangan mencipta duplicate task pada setiap perbualan. Jika tiada ACTION_PLAN, ZASS terus berfungsi seperti biasa.


## DISIPLIN BUKTI DAN KEPUTUSAN RINGAN

Tambahan ini menjadikan ZASS lebih tajam tanpa menambah state atau ID baharu. Ia digunakan apabila ada eksperimen, risiko, atau candidate decision; jangan isi medan dengan fakta rekaan.

**Masalah yang sedang diuji:** [satu ayat calon tentang masalah pengguna/operasi yang mahu disahkan].

### Rekod eksperimen (`E-xxx`)

```text
🔗 Goal/Question tested: [GOAL atau Q-xxx]
🧠 Assumption: [perkara yang dianggap benar]
🎯 Pass/fail signal: [bukti atau ambang yang menentukan hasil]
👀 Observed result: [apa yang benar-benar berlaku / PENDING]
📚 Learning: [apa yang diketahui selepas hasil diperhatikan / PENDING]
➡️ Impact: DEFER / PROCEED / PIVOT — [alasan]
```

### Rekod risiko (`R-xxx`)

```text
🚨 Early warning signal: [tanda awal risiko mula berlaku]
```

### Rekod keputusan (`D-xxx`)

```text
🧭 Decision drivers: [kriteria yang benar-benar penting]
🗂️ Options considered: [pilihan yang dibandingkan]
✅ Decision: [pilihan pemilik / PENDING jika belum diputuskan]
🔄 Consequences: [apa yang berubah atau perlu diterima]
🔁 Revisit trigger: [bukti atau keadaan yang memerlukan semakan semula]
```

Untuk projek berpasukan sahaja, AI boleh mencadangkan peranan **DACI** (Driver, Approver, Contributors, Informed). Ia pilihan; pemilik projek kekal pihak yang LOCK keputusan dalam ZASS.

### Mode pilihan, bukan aliran wajib

- **Cynefin triage** — pilih cara kerja mengikut sifat isu: jelas → checklist; rumit → analisis pakar; kompleks → eksperimen kecil; kacau-bilau → stabilkan dahulu.
- **Design Sprint mode** — gunakan apabila cabaran pengguna sudah jelas dan pasukan mahu prototype serta uji dengan pengguna dalam masa singkat.
- **Wardley Mapping** — gunakan di luar output default bagi projek besar yang mempunyai banyak komponen, kebergantungan, vendor, atau keputusan build-vs-buy.

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

## 9. Draf → challenge → lock PRE-ARCH → confirm selepas evidence

`DRAFT ARCH` menghasilkan draf architecture berversi kerja walaupun readiness belum READY. Asaskan draf pada keputusan LOCKED, goals, constraints, workflows dan risiko yang diketahui; labelkan andaian serta ARCHITECTURE BLOCKER. Jangan memperkenalkan keputusan besar secara senyap.

Apabila draf menjawab tujuan, aliran utama, komponen utama dan keputusan LOCKED berkaitan, AI mesti bertanya **“Sedia untuk ARCHITECTURE CHALLENGE?”** bersama andaian kritikal yang masih terbuka. AI juga boleh mencadangkan `DRAFT ARCH` lebih awal apabila keputusan cukup jelas.

Untuk technical architecture yang material, `BUILD ARCHITECTURE` ialah gate pengesahan **akhir** dan hanya berlaku selepas PRE-ARCH evidence loop mencukupi, final architecture candidate telah melalui **LAST ARCHITECTURE CHALLENGE**, dan sebarang final improvement/revision yang justified telah dimasukkan. Pada final review, tunjuk PRE-ARCH lineage terkini, keputusan LOCKED, ARCHITECTURE READINESS, finding challenge awal dan terakhir, implementation evidence, feedback ACTION_PLAN, unknown yang diterima/defer, dan impak. Jika READY, minta balasan tepat `YA, CONFIRM ARCHITECTURE`. Hanya selepas balasan itu architecture disahkan.

**Architecture Challenge ialah gate/review mode, bukan stage lifecycle top-level baharu.** Guna review engine sedia ada dengan set method paling kecil yang berguna: red-team, pre-mortem, assumption challenge, failure-mode analysis, dependency/coupling, trust/security boundary, operability/testability, portability/vendor-lock-in, atau feasibility/dependency review. Klasifikasikan finding material sebagai `KEEP`, `REVISE`, `QUESTION`, `EXPERIMENT`, atau `OWNER DECISION REQUIRED`. Finding `REVISE` hanya boleh mengemas kini draf jika ia tidak mengubah keputusan LOCKED. Jika keputusan LOCKED perlu berubah, STOP dan kembali kepada owner decision gate.

Untuk challenge kompleks/berimpak tinggi, utamakan capability Architect / Strong Reasoner dengan reasoning lebih tinggi atau Work-style research/analysis environment jika tersedia. Ini cadangan capability, bukan requirement tool/vendor tertentu.

---

## 9A. Kontrak architecture → execution

Selepas draf architecture cukup matang untuk memacu implementation material:

```text
DRAFT ARCHITECTURE
→ ARCHITECTURE CHALLENGE
→ CONTROLLED REVISION
→ OWNER REVIEW
→ YA, LOCK PRE-ARCH
→ PRE-ARCH BASELINE — LOCKED FOR EXECUTION
→ CAPABLE REASONER / PLANNER
→ DETAILED ACTION PLAN ↔ PRE-ARCH
→ DETAILED ATOMIC TASK SLICING
→ EXECUTE ONE TASK
→ RESULT / EVIDENCE
→ PRE-ARCH REVIEW
   ├─ PASS → NEXT TASK
   ├─ REWORK → TASK / ACTION PLAN
   ├─ ARCH FINDING → REVISE / SUPERSEDE PRE-ARCH
   └─ LOCKED-DECISION IMPACT → STOP → OWNER
→ SUFFICIENT IMPLEMENTATION EVIDENCE
→ FINAL ARCHITECTURE REVIEW
→ LAST ARCHITECTURE CHALLENGE
→ FINAL IMPROVE / REVISION
→ BUILD ARCHITECTURE
→ YA, CONFIRM ARCHITECTURE
→ ARCHITECTURE CONFIRMED
→ REBUILD RELEASE ACTION PLAN
→ RELEASE ATOMIC TASKS
→ BUILD FIRST RELEASE VERSION
→ TEST / INTEGRATE / HARDEN / VERIFY
→ RELEASE ACCEPTANCE
→ DELIVERED !!
```

`PRE-ARCH BASELINE — LOCKED FOR EXECUTION` ialah architectural hypothesis berversi yang diluluskan owner. Ia cukup stabil untuk detailed planning dan bounded evidence-producing implementation, tetapi **bukan** `ARCHITECTURE CONFIRMED` dan tidak mengatasi mana-mana keputusan `D-xxx | LOCKED`.

Selepas PRE-ARCH lock, Architect / Strong Reasoner yang capable bersama Planner mesti menghasilkan atau refine detailed ACTION PLAN: sequence, dependencies, feasibility, experiments, migration, integration/security checks, test/regression gates, rollback points, dan evidence required sebelum final architecture review.

Hanya selepas itu derive detailed atomic task packets. Task hanya READY apabila satu primary outcome, scope, dependencies, inputs, allowed/forbidden change surface, acceptance criteria, tests/regressions, evidence dan escalation rules jelas. Jika coding worker masih memerlukan architecture judgment, pulangkan item kepada planning.

Setiap PRE-ARCH task result kembali ke review. `NO ARCH IMPACT` boleh PASS ke evidence task seterusnya; masalah task/plan menyebabkan REWORK; architecture finding material mencetuskan PRE-ARCH review/revision; sebarang impact kepada keputusan LOCKED berhenti pada owner gate.

Sebelum detailed task slicing selepas PRE-ARCH lock, jalankan **EXECUTION REALITY CHECK** shared apabila real-world artifact wujud atau boleh diperoleh secara munasabah. Mesej/fail/payload/log/workflow trace sebenar ialah architecture dan execution evidence, bukan sekadar test data di hujung. Bina sample/fixture pack kecil yang boleh diguna semula, map execution surfaces, tandakan andaian synthetic-only sebagai provisional, kemudian slice evidence-bounded vertical tasks. Selepas setiap result direview, guna **delta planning** daripada PRE-ARCH + ACTION_PLAN + receipts + real-sample corpus semasa; jangan rediscover atau ulang kerja yang sudah terbukti tanpa evidence baharu.

Apabila PRE-ARCH evidence mencukupi, jalankan **last architecture challenge** yang fokus pada apa yang implementation evidence benar-benar dedahkan: surviving assumptions, hidden coupling, runtime/deployment behavior, reliability/retry/idempotency, security/trust boundaries, operability/observability, migration/rollback, portability, dan architecture debt. Terapkan final improvement/revision yang justified sebelum `BUILD ARCHITECTURE`.

Selepas `ARCHITECTURE CONFIRMED`, jangan sambung PRE-ARCH evidence task queue secara membuta tuli. Rebuild/rebase ACTION_PLAN daripada confirmed architecture dan state repo/product semasa, slice release atomic tasks yang baharu, bina first release version, kemudian test/integrate/harden/verify sehingga release acceptance. Hanya selepas itu projek/release boleh ditanda `DELIVERED !!`. Jika release work menemui architecture defect yang material, STOP normal release flow dan buka semula architecture melalui governed review.

ACTION_PLAN kekal planning/execution authority sahaja. Ia boleh meminta PRE-ARCH review tetapi tidak boleh menentukan architecture atau mengubah keputusan LOCKED.

Guna kontrak shared: [`docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md`](docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md).

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

**Falsafah pemisahan:** `AI suggestion ≠ Owner decision ≠ Git change`. Cadangan AI kekal calon sehingga pemilik membuat keputusan; keputusan hanya menjadi state Git sebenar selepas perubahan berjaya disimpan/di-commit. Jangan mendakwa mana-mana lapisan telah berlaku jika ia belum berlaku.

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

Use experiments when discussion alone cannot resolve a decision. If `ACTION_PLAN.md` exists, it executes the same `E-xxx` and stores live evidence/result; bring mature findings back through ZASS FEED for review.

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

`ZERO → ARCHITECTURE` mengukur kematangan idea untuk dijadikan architecture. Ia **bukan** ukuran kemajuan coding, execution atau keseluruhan projek.

Gunakan skor telus berikut:

| Kriteria | Berat |
|---|---:|
| Tujuan atau masalah jelas | 10% |
| Pengguna/stakeholder dan hasil yang dikehendaki jelas | 10% |
| Scope dan non-goals jelas | 10% |
| Constraints dan quality attributes penting diketahui | 10% |
| Pilihan serta trade-off telah dibandingkan | 10% |
| Andaian kritikal telah ditutup atau mempunyai eksperimen | 15% |
| Risiko utama telah ditangani | 10% |
| Aliran utama sistem jelas | 10% |
| Keputusan utama sudah `LOCKED` | 10% |
| Tiada blocker architecture yang kritikal | 5% |

Nilai setiap kriteria sebagai `0 = belum ada`, `0.5 = separa`, atau `1 = lengkap`, kemudian darabkan dengan beratnya. AI mesti menyatakan sebab ringkas bagi markah dan blocker utama; jangan cipta ketepatan palsu atau menaikkan markah kerana perbincangan panjang.

Status:

| Skor | Status |
|---:|---|
| 0–19% | `RAW` |
| 20–39% | `EXPLORING` |
| 40–59% | `SHAPING` |
| 60–69% | `DECIDING` |
| 70–84% | `READY FOR DRAFT ARCH` |
| 85–99% + draf wujud dan sedang direview | `DRAFT ARCH UNDER REVIEW` |
| 100% | `ARCHITECTURE CONFIRMED` |

Apabila skor mencapai sekurang-kurangnya 70%, AI mesti **mencadangkan** draf architecture tetapi tidak membinanya secara automatik. Status tidak naik kepada `DRAFT ARCH UNDER REVIEW` hanya kerana skor mencapai 85%; draf mesti benar-benar wujud dan sedang direview. PRE-ARCH baseline boleh di-lock ketika skor masih di bawah 100%; PRE-ARCH ialah execution baseline, bukan final architecture confirmation. Skor 100% hanya diberi selepas final evidence-backed confirmation gate selesai dan pemilik menjawab tepat `YA, CONFIRM ARCHITECTURE`.

Selain skor, confirmed architecture dibenarkan hanya apabila:

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
- [ ] Untuk technical architecture yang material, Architecture Challenge selesai dan PRE-ARCH baseline semasa telah diluluskan owner
- [ ] Required implementation evidence daripada PRE-ARCH/ACTION_PLAN telah direview
- [ ] Material task findings telah dimasukkan atau ditolak secara explicit daripada PRE-ARCH terkini
- [ ] Tiada unresolved PRE-ARCH finding yang memerlukan owner decision sebelum final confirmation

**ZERO → ARCHITECTURE score:**

`[░░░░░░░░░░] 0% — RAW`

**Readiness gate:**

`NOT READY / READY`

### EVIDENCE CONFIDENCE — paksi berasingan

`Architecture Readiness` menjawab: **adakah projek cukup jelas untuk membina atau mengesahkan architecture?**

`Evidence Confidence` menjawab: **sejauh mana andaian, risiko dan keputusan penting disokong oleh bukti yang diperhatikan?**

Kedua-duanya **tidak boleh dicampurkan**. `100% Architecture Readiness` tidak bermaksud produk atau architecture telah tervalidasi secara empirikal.

Gunakan label kualitatif berikut, tanpa peratus kedua:

- `UNVALIDATED` — tiada bukti empirikal diperhatikan untuk andaian kritikal yang relevan.
- `LOW` — bukti masih sedikit, tidak langsung, atau andaian kritikal utama belum diuji.
- `MEDIUM` — terdapat bukti relevan tetapi coverage atau validation dunia sebenar masih tidak lengkap.
- `HIGH` — bukti langsung yang kuat meliputi andaian kritikal dan risiko utama yang relevan.

**Evidence Confidence wajib dipaparkan** apabila salah satu keadaan berikut berlaku:

1. `ZERO → ARCHITECTURE` score dipaparkan sebagai assessment sebenar/current project state.
2. Readiness untuk `DRAFT ARCH` sedang dinilai.
3. `BUILD ARCHITECTURE` dijalankan.
4. Architecture sudah `CONFIRMED` tetapi validation atau experiment masih berjalan / belum selesai.

Apabila dipaparkan, sertakan sebab ringkas berdasarkan evidence yang benar-benar tersedia. Jika tiada bukti empirikal diperhatikan untuk andaian kritikal yang relevan, gunakan `UNVALIDATED`. Jangan reka evidence.

Jika `ZERO → ARCHITECTURE` hanya muncul sebagai contoh statik dalam dokumentasi/template dan bukan assessment projek sebenar, rule paparan wajib ini tidak terpakai.

Architecture boleh berstatus `CONFIRMED` dengan Evidence Confidence yang rendah jika syarat readiness dan pintu pengesahan telah dipenuhi; status confidence yang rendah mesti kekal kelihatan bersama validation loops yang masih terbuka.

**Evidence Confidence:**

`UNVALIDATED / LOW / MEDIUM / HIGH`

---

# 19. ARCHITECTURE GENERATION INSTRUCTION

When Architecture Readiness = READY and the owner replies `YA, CONFIRM ARCHITECTURE` after the BUILD gate:

Confirm architecture using ONLY:

1. Goals
2. Constraints
3. LOCKED decisions
4. Required workflows
5. Known risks
6. Latest reviewed PRE-ARCH baseline dan supersession history
7. Validated implementation / experiment evidence yang diperlukan ACTION PLAN
8. Unknown/trade-off yang diterima atau defer secara explicit

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
├── ACTION_PLAN.md        ← optional; planning + live execution/progress authority
├── ARCHITECTURE.md       ← only after architecture is built
├── [derived task packets]← optional backend; bukan planning authority kedua
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

### ZASS

Tangkap dan teroka idea mentah tanpa mengubah LOCKED decisions. Hasilkan NEXT-DAY ACTION PROPOSAL dan tanya sama ada pengguna mahu PROCEED atau PIVOT.

### ZASS REVIEW

Challenge the project using a named methodology or perspective.

### ACTION PLAN

Show or update the relevant execution state: current focus, P0/P1 priorities, ACTIVE/NEXT actions, experiments, blockers, recent lessons and ZASS FEED. This command never LOCKS a decision.

### ZASS CHALLENGE

Attack assumptions, edge cases, failure modes and contradictions.

### ZASS DECIDE

Return unresolved decision candidates and their trade-offs.

### PROCEED

Pemilik projek meluluskan **tepat** proposal set yang disenaraikan di bawah `PROPOSED FOR PROCEED` dalam pemetaan ZASS terakhir. Item yang tidak disenaraikan tidak diluluskan. Mana-mana proposal yang jelas ditanda untuk LOCK menjadi LOCKED. Jika proposal set telah berubah, bercanggah atau ambigu sejak pemetaan itu, AI mesti memaparkan set baharu dan menunggu arahan PROCEED sekali lagi. PROCEED tidak commit atau push.

### COMMIT

Commit perubahan yang telah diluluskan sebagai satu commit atomik ber-versi dan push ke GitHub source of truth. Laporkan kejayaan hanya selepas push berjaya dan pulangkan commit SHA sebenar.

### DRAFT ARCH

Prepare or revise a working-version architecture draft from the authoritative locked state. This does not confirm it.

### LOCK PRE-ARCH

Selepas Architecture Challenge dan revision yang justified, buka owner review untuk execution baseline. Jika cukup coherent untuk bounded planning/implementation, minta `YA, LOCK PRE-ARCH`. Ini mewujudkan `PRE-ARCH BASELINE — LOCKED FOR EXECUTION`; ia **bukan** architecture confirmation. Revision material selepas itu mesti traceable, dan conflict dengan keputusan LOCKED kembali kepada owner.

### LAST ARCHITECTURE CHALLENGE

Apabila PRE-ARCH evidence mencukupi, jalankan satu final evidence-backed architecture challenge sebelum `BUILD ARCHITECTURE`. Guna kelas `KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED` yang sama. Terapkan final improvement/revision yang justified; jika keputusan LOCKED perlu berubah, STOP pada owner gate.

### BUILD ARCHITECTURE

Buka final confirmation gate hanya selepas locked PRE-ARCH melalui detailed ACTION PLAN, atomic-task evidence, PRE-ARCH review, LAST ARCHITECTURE CHALLENGE dan final improvement/revision yang diperlukan. Tunjuk final architecture candidate, readiness, keputusan LOCKED, challenge findings, implementation evidence, ACTION_PLAN architecture-impact findings, serta unknown yang diterima/defer. Jika READY, minta `YA, CONFIRM ARCHITECTURE` sebelum confirm.

### BUILD FIRST RELEASE

Selepas `ARCHITECTURE CONFIRMED`, rebuild ACTION PLAN daripada confirmed architecture/current implementation state, slice fresh release atomic tasks, dan execute first-release build. Lengkapkan integration, hardening, verification dan release acceptance yang diperlukan sebelum mengisytiharkan `DELIVERED !!`. Architecture defect material yang ditemui semasa release work mesti membuka governed architecture review semula, bukan dipatch senyap.

### ARCHITECTURE CHALLENGE

Jalankan pre-confirmation architecture review menggunakan set challenge method paling kecil yang berguna. Pulangkan finding material sebagai `KEEP / REVISE / QUESTION / EXPERIMENT / OWNER DECISION REQUIRED`. Jangan ubah keputusan LOCKED secara senyap.

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
