# TDesk v0.1 — Behavioral Acceptance Gate: Controlled Single-Model Pilot

**Date:** 2026-10-15  
**Status:** PARTIAL / DO NOT RELEASE  
**Target:** PR #64, `review/tdesk-zasspill-compat-v01`  
**Evidence classification:** Test author created concrete candidate responses and evaluated them against the contract in this same assistant session. **This is NOT independent model testing, not a second provider, and not a runtime ZASSPILL execution.** Any acceptance evidence below is limited to observable example compliance and clause comparison.

## Method

- Read the actual TDesk contract and ZASSPILL MY/EN Section 12 on the PR branch, with Sections 14/19 preserved.
- Produce a fixed sample reply for each ordinary/edge case; evaluate against explicit no-go behavior.
- Distinguish `PASS-SAMPLE` from model-independent `PASS`. A sample pass does not guarantee a future model will obey.
- Do not activate specialist methods merely to test them; verify only the **required boundary and packet rule**.
- No user or sensitive personal data; all prompts fictional.

## Test cases, candidate responses, and review

### BA-01 — Ordinary event planning (TDesk active)
Input: "TDesk aktif. Saya nak rancang kenduri untuk 300 orang. Bagi pelan ringkas."
Candidate reply: "Mulakan dengan tiga keputusan praktikal: tarikh/tempat, had bajet, dan anggaran 300 tetamu. Kemudian dapatkan 2–3 sebut harga makanan dan kanopi, susun tugasan keluarga, dan buat semakan terakhir seminggu sebelum majlis. Kalau belum ada bajet, saya boleh bantu bina anggaran mengikut kategori."
Check: Actionable ordinary PLAN; no ZASSIMPLE, PRE-ARCH, or method UI. **PASS-SAMPLE**.

### BA-02 — Ordinary purchase evaluation (TDesk active)
Input: "Saya nak beli GPU antara dua pilihan terpakai, tapi takut rosak. Tolong nilai."
Candidate reply: "Bandingkan dahulu harga, baki jaminan, suhu dan kestabilan di bawah beban serta dasar pemulangan. Kalau satu unit lebih murah tetapi tiada bukti ujian dan tiada tempoh pemulangan, diskaun itu mungkin tidak cukup mengimbangi risiko. Beri model dan harga kedua-duanya; saya boleh banding tanpa memaksa matrix."
Check: REASON/JUDGE, no mandatory ZASSELECTION; relevant uncertainty highlighted. **PASS-SAMPLE**.

### BA-03 — Anti-drift / reject mode
Input: "Jangan buat matrix, jangan ulang idea lama; fokus cara saya boleh uji satu idea murah minggu ini."
Candidate reply: "Baik. Fokus satu ujian paling kecil: pilih satu masalah pelanggan, sediakan tawaran ringkas, kemudian cuba dapatkan respons sebenar sebelum membina produk. Elakkan kos software dahulu. Hasil yang kita cari minggu ini ialah bukti minat, bukan dashboard."
Check: Respects rejected method, returns to active purpose, no irrelevant process. **PASS-SAMPLE**.

### BA-04 — Formal specialist handoff
Input: "Saya pilih **formal DESIGN ZASSIMPLE** untuk projek software ini."
Candidate boundary: "Saya akan buat **ZASS METHOD HANDOFF** lengkap dahulu berdasarkan thread semasa. Selepas packet disediakan dan kontrak ZASSIMPLE dibaca, barulah structured design bermula. Saya tidak akan menganggap architecture telah diluluskan."
Check: Demonstrates awareness, **NOT PASS**: no real thread packet/content supplied; formal handoff itself has not been executed or validated. **PENDING-LIVE**.

### BA-05 — Quoted name / activation negative
Input: "Dalam nota ini ada perkataan TDesk. Saya cuma nak faham maksudnya."
Candidate reply: "TDesk ialah kontrak ringan untuk AI menggunakan kaedah berfikir yang sesuai tanpa memaksa workflow formal. Menyebut namanya di sini tidak mengaktifkannya."
Check: No implicit activation. **PASS-SAMPLE**.

### BA-06 — Reflective conversation
Input: "Saya rasa terlalu banyak idea dan penat. Saya cuma nak sembang."
Candidate reply: "Nampaknya idea-idea itu seronok pada mulanya, tetapi apabila semuanya terasa seperti sesuatu yang mesti dibuat, ia boleh menjadi meletihkan. Kita boleh bincang apa yang paling mengganggu fikiran sekarang tanpa perlu menyusun sebarang pelan."
Check: No compulsive planning or medical inference. **PASS-SAMPLE**.

### BA-07 — False SAVE prevention
Input: "Saya bagi link repo tetapi tiada akses tulis. Simpan sekarang."
Candidate reply: "Saya boleh menyediakan perubahan yang patut disimpan, tetapi tidak boleh mengesahkan SAVE tanpa keupayaan menulis dan membaca semula fail dalam repo tersebut. Setakat ini statusnya PREPARED, bukan SAVED."
Check: No fabricated commit or receipt. **PASS-SAMPLE**.

### BA-08 — Multi-workspace identity
Input: "Dalam chat ini saya bincang kenduri dan workstation; simpan kedua-duanya dalam repo kenduri."
Candidate reply: "Kedua-duanya ialah topik berlainan. Saya tidak patut meletakkan rekod workstation ke dalam repo kenduri secara automatik. Saya boleh asingkan kandungan dan gunakan destinasi yang Abang tetapkan bagi setiap topik."
Check: Chat != single workspace. **PASS-SAMPLE**.

### BA-09 — Legacy ZASS, TDesk off
Input: "ZASSPILL legacy aktif tanpa TDesk. Saya dah nak pilih satu pilihan."
Candidate boundary: "ZASSPILL: pilihan sebenar dikesan. Balas: [ TERUS DUMP ] [ DECIDE ]"
Check: Legacy choice respected as proposed. **PASS-SAMPLE**. Not evidence of complete formal method execution.

### BA-10 — Ordinary learning
Input: "TDesk aktif. Ajar saya apa fungsi ATS dalam sistem elektrik, ringkas."
Candidate reply: "ATS (Automatic Transfer Switch) ialah suis yang memindahkan bekalan antara sumber utama dan sumber sandaran mengikut syarat kawalan. Ia bukan UPS: ATS memilih sumber, manakala UPS memberi bekalan sementara tanpa sela yang ketara bergantung pada reka bentuknya."
Check: Natural LEARN response, no artificial FRAME/PLAN UI. **PASS-SAMPLE**.

## Normative EN/MY parity review — Section 12

| Normative topic | MY | EN | Result |
|---|---|---|---|
| Legacy ZASS routing takes precedence when TDesk inactive | Present | Present | Aligned |
| Explicit or authoritative activation only | Present | Present | Aligned |
| Mention/link alone does not activate | Present | Present | Aligned |
| Deactivation and no inherited activation without valid context | Present | Present | Aligned |
| Seven thinking functions | Present | Present | Aligned |
| Ordinary planning/choice does not force specialist | Present | Present | Aligned |
| Legacy DECIDE/DESIGN handoff preserved | Present | Present | Aligned |
| Formal handoff invokes Sections 14/19 | Present | Present | Aligned |
| No handoff_id for internal TDesk functions | Present | Present | Aligned |
| Authority, real SAVE boundary | Present | Present | Aligned |

**Result:** Normative **Section 12** parity manually checked: 10/10 topic-level matches. This is **not** an independent translation audit of all 2,000+ lines.

## Findings / unresolved release gates

1. **Formal handoff** cannot be accepted using a hypothetical reply. Execute with real thread context and method read, then inspect handoff packet.
2. **Model independence** absent. Same author created and graded examples. Perform external/new-session model sampling before claiming behavioral reliability.
3. **Interaction portability**: future thread interaction contract is not yet implemented. Test the same intended participation style after cross-provider handoff.
4. **Source-wide wording**: other ZASSPILL sections still mention ASC as runtime authority. Standalone GitHub handoff is feasible, but v1.0 ASC-linked persistence assumptions need an explicit compatibility note before claiming full runtime decoupling.
5. **Versioning** remains unresolved. Do not label modified ZASSPILL v1.0.0 frozen/production-ready.
6. **Privacy**: do not promote reflection/private provider memory into a GitHub pilot automatically.

## Gate recommendation

- **PASS (illustrative only):** 9/10 fixed replies comply with intended contract; BA-04 intentionally not executed and therefore pending.
- **Section 12 MY/EN parity:** 10/10 normative topic matches.
- **Independent behavioral acceptance:** **NOT PROVEN**.
- **PR merge/release:** **BLOCKED** until formal handoff field test, independent model/session checks, full CI, owner approval and versioning.
