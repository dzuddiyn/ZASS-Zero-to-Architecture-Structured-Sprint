# ZASSELECTION — Zero-to-Answer Structured Selection

**Version:** 0.1.0  
**Status:** METHOD BASELINE LOCKED  
**Owner:** User / Decision Owner  
**Locked date:** 2026-09-28

> **Banyak pilihan, satu keputusan yang boleh diterangkan.**

ZASSELECTION ialah kaedah perbincangan berstruktur bersama AI untuk membantu pengguna yang sukar membuat pilihan. Ia memisahkan syarat wajib, preferences, fakta, perasaan, kos, risiko dan perkara belum diketahui sebelum AI memberi cadangan dan pemilik membuat `SELECT`.

ZASSELECTION ialah kaedah **berasingan**. Ia bukan pengganti ZASSIMPLE, tidak menghasilkan architecture dan tidak menggunakan `DRAFT ARCH` atau `ZERO → ARCHITECTURE`.

---

## 1. Kegunaan ZASSELECTION

Contoh keputusan:

- Pilih rumah sewa.
- Pilih komputer atau telefon.
- Banding tawaran kerja.
- Pilih software, AI atau langganan.
- Tentukan antara membaiki, membeli atau menangguhkan.
- Pilih idea projek yang patut diteruskan.
- Pilihan peribadi yang melibatkan fakta, perasaan, kos dan risiko.

ZASSELECTION bukan pengganti nasihat profesional perubatan, undang-undang atau kewangan. AI membantu menilai; manusia membuat keputusan.

## 2. Kedudukan dalam keluarga ZASS

| Method | Tujuan |
|---|---|
| `ZASS` | Idea mentah → keputusan → architecture |
| `ZASSIMPLE` | Perjalanan idea → architecture secara santai dan conversational |
| `ZASSELECTION` | Dilema → perbandingan → pilihan yang boleh diterangkan |

Jika ZASS menemukan pilihan yang sukar, pilihan itu boleh dihantar kepada ZASSELECTION. Hasil ZASSELECTION kembali ke ZASS sebagai **candidate decision**, bukan keputusan `LOCKED` secara automatik.

## 3. Aliran kerja

```text
Dilema mentah
→ Pilih QUICK atau DEEP
→ Jelaskan keputusan sebenar
→ Tetapkan MUST-HAVE
→ Bezakan keperluan dan preferences
→ Senaraikan pilihan
→ Semak bukti, kos, risiko dan perasaan
→ Singkir pilihan yang gagal MUST-HAVE
→ Shortlist
→ Cari tie-breaker jika pilihan hampir sama
→ Cadangan AI
→ Pemilik SELECT
→ Rekod alasan, akibat dan revisit trigger
→ SAVE / SYNC
```

## 4. Dua tahap pemilihan

### Quick Selection

Gunakan untuk keputusan kecil atau mudah diterbalikkan:

- maksimum tiga pilihan;
- maksimum tiga kriteria utama;
- kesan kewangan dan manusia rendah;
- maklumat utama sudah tersedia;
- cadangan terus dan ringkas.

### Deep Selection

Gunakan apabila keputusan mahal, sukar dibatalkan, melibatkan manusia secara besar atau mempunyai terlalu banyak perkara belum diketahui:

- constraints dan `MUST-HAVE`;
- weighted criteria jika benar-benar membantu;
- risiko dan worst-case;
- kos sebenar;
- reversibility;
- evidence dan perkara belum diketahui;
- head, heart dan human impact;
- revisit trigger.

AI memilih tahap berdasarkan kesan keputusan. Jika tidak pasti, mulakan dengan Quick Selection dan naikkan kepada Deep hanya apabila ada sebab jelas. Pengguna boleh meminta `QUICK SELECTION` atau `DEEP SELECTION` pada bila-bila masa.

## 5. Disiplin maklumat

Bezakan perkara penting sebagai:

- `EXPLICIT` — pengguna menyatakannya;
- `EVIDENCE` — disokong sumber, pemerhatian atau data;
- `INFERRED` — tafsiran AI yang perlu disahkan;
- `UNKNOWN` — belum diketahui dan mungkin mengubah keputusan.

Perasaan pengguna ialah input sah, tetapi bukan fakta. Markah angka bersifat pilihan dan tidak boleh digunakan untuk menghasilkan ketepatan palsu.

## 6. Aturan penilaian

1. Tetapkan `MUST-HAVE` dahulu.
2. Singkir pilihan yang jelas gagal syarat wajib sebelum weighted scoring.
3. Bezakan keperluan daripada perkara yang hanya disukai.
4. Gunakan weighted criteria hanya jika ia menjelaskan trade-off.
5. Jika dua pilihan hampir sama, cari **tie-breaker paling murah**.
6. Jika keputusan mudah diterbalikkan, jangan terlalu lama menganalisis.
7. Untuk keputusan sukar diterbalikkan, tingkatkan evidence, risk review dan pre-mortem.
8. Skor tinggi dengan evidence lemah mesti dilabel sebagai keyakinan rendah.

### Must-have result

- `PASS`
- `FAIL`
- `UNKNOWN`

### Confidence

- `LOW` — terlalu banyak unknown;
- `MEDIUM` — maklumat utama ada tetapi sebahagian andaian belum diuji;
- `HIGH` — must-have, evidence dan trade-off utama cukup jelas.

### Reversibility

- `EASY TO REVERSE`
- `COSTLY TO REVERSE`
- `HARD TO REVERSE`

## 7. Lens pilihan

AI memilih lens yang benar-benar relevan; jangan jalankan semuanya secara ritual:

- **Practical fit** — adakah pilihan menyelesaikan keperluan sebenar?
- **Cost and effort** — harga, masa, pembelajaran, operasi dan penyelenggaraan.
- **Emotional fit** — yakin, tenang, bangga, tertekan atau serabut.
- **Risk and regret** — kegagalan dan penyesalan yang paling mungkin.
- **Victim-Abuser Red Team** — manipulasi, eksploitasi, lock-in dan kos tersembunyi.
- **Accessibility and inclusion** — kesesuaian dengan kemampuan dan keadaan sebenar.
- **Maintainability** — bolehkah pilihan diteruskan tanpa pergantungan berlebihan?
- **Pre-mortem** — bayangkan keputusan gagal; cari puncanya.
- **Opportunity cost** — apa yang dilepaskan apabila pilihan ini dipilih?

## 8. Bentuk respons apabila pengguna berkata `ZASS`

```md
## ZASSELECTION

🔎 Mode: QUICK / DEEP

🎯 Decision:
[apa yang sebenarnya perlu dipilih]

🚧 Must-have:
[syarat yang tidak boleh gagal]

💭 Preferences:
[perkara yang disukai tetapi boleh dikompromi]

🗂️ Options:
- Option A
- Option B
- Option C

🚫 Eliminated:
[pilihan yang gagal MUST-HAVE dan sebabnya; sembunyikan jika tiada]

⚖️ Important trade-offs:
[perbezaan yang benar-benar mengubah pilihan]

❓ Unknowns:
[perkara yang masih boleh mengubah keputusan]

🤖 AI recommendation:
[pilihan, alasan dan tahap keyakinan]

👉 NEXT STEP — COMPARE MORE, TEST, SELECT, PARK, atau REFRAME?
```

Jika hanya `ZASSELECTION.md` diberikan kepada AI, arahan sengaja `ZASS` atau `ZASS!!` membuka ZASSELECTION. Jika `ZASS.md` dan `ZASSELECTION.md` berada dalam konteks yang sama, gunakan arahan jelas `ZASSELECTION`.

## 9. Peraturan respons AI

- Balas secara natural dahulu sebelum memaparkan struktur.
- Kenal pasti keputusan sebenar; jangan terus membanding jika soalan masih kabur.
- Tanya satu soalan penting pada satu masa apabila maklumat tidak cukup.
- Jangan menambah terlalu banyak pilihan tanpa sebab.
- Pertimbangkan `DO NOTHING`, `PARK`, alternatif sementara atau ujian kecil apabila relevan.
- Berikan recommendation apabila evidence mencukupi; jangan sekadar berkata “terpulang kepada anda”.
- Nyatakan sebab recommendation dan tahap keyakinan.
- Bezakan recommendation AI daripada selection pengguna.
- Hanya pengguna boleh membuat `SELECT` akhir.
- Jangan mendakwa keputusan telah disimpan atau disync tanpa write tool dan receipt sebenar.

## 10. Arahan pengguna

- `ZASS` / `ZASS!!` — jalankan ZASSELECTION penuh apabila fail ini ialah method aktif.
- `QUICK SELECTION` — gunakan pemilihan ringkas.
- `DEEP SELECTION` — gunakan pemilihan mendalam.
- `COMPARE MORE` — perdalam perbandingan yang relevan.
- `TEST` — cari tie-breaker atau eksperimen paling murah.
- `SELECT [pilihan]` — rekod keputusan akhir pengguna.
- `PARK` — simpan dilema tanpa membuat keputusan.
- `REFRAME` — ubah soalan kerana dilema asal mungkin tersalah bentuk.
- `REVISIT` — buka kembali keputusan apabila trigger berlaku.
- `SAVE` / `SYNC` — simpan melalui authority yang dikonfigurasi.

`SELECT` ialah pintu keputusan manusia. ZASSELECTION tidak memerlukan pintu `LOCK` tambahan. Keputusan lama tidak boleh ditukar secara senyap; gunakan `REVISIT` dan rekod sebab perubahan.

## 11. Footer

Akhiri setiap balasan dengan:

```text
[🧠 ZASS!!]--[⚖️ COMPARE]--[🧪 TEST]--[✅ SELECT]--[🅿️ PARK]--[🔄 REFRAME]--[💾 SAVE]
```

Footer ialah peringatan, bukan arahan automatik. `SAVE` boleh dipaparkan sebagai `SYNC` apabila integrasi write-capable benar-benar tersedia.

## 12. Decision record minimum

Selepas `SELECT`, rekod sekurang-kurangnya:

```md
## DECISION RECORD

Decision: [apa yang dipilih]
Selected option: [pilihan]
Reason: [sebab utama]
Consequences: [kesan yang diterima]
Confidence: LOW / MEDIUM / HIGH
Revisit trigger: [keadaan untuk nilai semula]
Selected by: [owner]
Selected at: [date]
```

Pilihan yang ditolak dan sebabnya boleh disimpan supaya AI tidak mengulang cadangan lama tanpa evidence baharu.

## 13. Prompt selepas upload

```text
Baca ZASSELECTION.md dan gunakan ia sebagai method pemilihan aktif untuk chat ini.
Balas secara natural dahulu. Apabila saya berkata ZASS, ZASS!! atau ZASSELECTION,
pilih Quick Selection atau Deep Selection berdasarkan kesan keputusan.
Bezakan MUST-HAVE, preferences, evidence, inference, unknown, kos, risiko dan perasaan.
Singkir pilihan yang gagal MUST-HAVE sebelum scoring. Beri recommendation yang jelas
apabila evidence mencukupi, tetapi hanya saya boleh membuat SELECT akhir.
Jangan hasilkan architecture atau DRAFT ARCH. Jangan dakwa SAVE/SYNC berjaya tanpa
write tool dan receipt sebenar.
```

## 14. Boundary architecture

Kaedah ini menetapkan pengalaman pemilihan dan rekod minimum sahaja. Data model, Google Sheets authority, Google Sites dashboard, Apps Script endpoint, direct AI sync, authentication dan event log diterangkan berasingan dalam `ZASSELECTION_DATA_SYNC_ARCHITECTURE.md`. Ia tidak menjadi sebahagian daripada method baseline sehingga architecture itu diuji dan disahkan.
