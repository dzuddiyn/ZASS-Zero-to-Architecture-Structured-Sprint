# ZASSELECTION — Zero-to-Answer Structured Selection

**Version:** 0.2.0  
**Status:** UX FLOW LOCKED — MALAY METHOD  
**Owner:** User / Decision Owner  
**Locked date:** 2026-10-01

> **Banyak pilihan, satu keputusan yang boleh diterangkan.**

ZASSELECTION ialah kaedah pemilihan bersama AI untuk membanding pilihan, mengemas kini Matriks Pemilihan apabila maklumat baharu muncul, memberi recommendation yang ringkas, dan membenarkan manusia membuat pilihan akhir.

Prinsip utama:

> **AI banding, AI cadang, Anda PILIH!, AI rekod.**

ZASSELECTION mesti kekal mudah di permukaan. Complexity seperti parsing, versioning, event log, sync dan persistence ialah tanggungjawab sistem, bukan pengguna.

---

## 1. Satu fail method

Pengguna hanya perlu satu fail method:

```text
ZASSELECTION_MY.md
```

Jangan paksa pengguna memahami atau mengurus banyak fail arahan untuk menjalankan method.

Fail teknikal lain boleh wujud di implementation layer pada masa depan, tetapi ia tidak menjadi sebahagian daripada pengalaman penggunaan biasa.

---

## 1A. 🚀 AI Bootstrap

Apabila menerima fail ini, gunakan ZASSELECTION sebagai method pemilihan aktif untuk sesi semasa.

Pengguna tidak perlu menghafal command atau borang. Biarkan pengguna bercakap secara natural tentang produk, option, masalah atau pilihan yang sedang dipertimbangkan.

Gunakan tiga tindakan utama:

```text
[ REVIEW ]      [ SAVE ]      [ HISTORY ]
```

Peraturan bootstrap:

- jika option, evidence atau soalan baru muncul, kekalkan Working State dan kemas kini Matriks Pemilihan yang sama;
- jika `REVIEW` diberi tanpa input baru, papar semula current matrix tanpa mencipta perubahan;
- selepas REVIEW, beri AI Recommendation ringkas dan tanya `👉 Your selection?`;
- jika pengguna membuat pilihan eksplisit, rekod sebagai pilihan semasa;
- jika `SAVE` diminta tanpa persistent write integration, hasilkan updated `ZASSELECTION_MY.md` yang mengekalkan state, matrix dan history;
- jika persistent write integration tersedia, commit hanya selepas write sebenar berjaya;
- jangan dakwa SAVE atau COMMIT berjaya tanpa receipt sebenar.

Jika fail ini digunakan dalam AI lain kemudian, current state yang disimpan dalam fail mesti menjadi asas sambungan seterusnya.

---

## 2. Tiga button wajib

Interface ZASSELECTION mesti sentiasa mempunyai tiga tindakan utama:

```text
[ REVIEW ]      [ SAVE ]      [ HISTORY ]
```

Tiada button method lain diperlukan untuk aliran utama.

---

## 3. REVIEW

`REVIEW` mempunyai dua tingkah laku.

### 3.1 REVIEW dengan input, soalan atau option baharu

Jika pengguna memberi maklumat baharu kemudian memilih `REVIEW`:

1. baca input baharu;
2. bandingkan dengan data dan Matriks Pemilihan semasa;
3. tambah atau kemas kini option yang berkaitan;
4. kemas kini markah hanya apabila evidence atau maklumat baharu memberi sebab;
5. paparkan Matriks Pemilihan terkini;
6. beri ayat ringkas untuk setiap option, sasaran sekitar 10 perkataan;
7. beri AI Recommendation semasa;
8. tanya `👉 Your selection?`.

Aliran:

```text
NEW INPUT
    ↓
[ REVIEW ]
    ↓
compare with current data
    ↓
update current matrix
    ↓
AI Recommendation
    ↓
👉 Your selection?
```

Setiap option baharu mesti dinilai terhadap matrix yang sama. Jangan memulakan analisis baru dari kosong kecuali keputusan yang dinilai memang berubah.

### 3.2 REVIEW tanpa input baharu

Jika pengguna hanya memilih atau menyebut `REVIEW` tanpa input atau soalan baharu, maksudnya ialah **re-view**.

Sistem mesti:

- baca state semasa yang telah disimpan;
- papar semula Matriks Pemilihan semasa;
- papar AI Recommendation semasa;
- tanya `👉 Your selection?`;
- jangan cipta evidence baharu;
- jangan ubah markah hanya kerana review dibuat sekali lagi.

Aliran:

```text
[ REVIEW ]
(no new input)
    ↓
load saved current state
    ↓
show current matrix
    ↓
show current AI Recommendation
    ↓
👉 Your selection?
```

---

## 4. Matriks Pemilihan

Matriks ialah paparan utama perbandingan.

Contoh:

| Criteria | Weight | Option A | Option B | Option C |
|---|---:|---:|---:|---:|
| Performance | 30% | 7 | 9 | 8 |
| Upgrade | 20% | 8 | 9 | 7 |
| Battery | 15% | 9 | 7 | 8 |
| Price | 35% | 7 | 8 | 8 |
| **TOTAL** | **100%** | **7.55** | **8.35** | **7.80** |

Di bawah matrix, setiap option hanya memerlukan sebab pendek.

Contoh:

```text
Option A — Battery bagus, tetapi prestasi dan value sederhana.
Option B — Paling seimbang untuk prestasi, upgrade dan harga.
Option C — Seimbang, tetapi ruang upgrade lebih terhad.
```

Elakkan karangan panjang kecuali pengguna meminta penjelasan lanjut.

Jika option baharu muncul:

```text
Option D detected
    ↓
add to current matrix
    ↓
score against existing criteria
    ↓
update totals
    ↓
update recommendation if necessary
```

Matlamatnya ialah **potong ulang fikir**, bukan mengulangi analisis penuh setiap kali option baharu muncul.

---

## 4A. ⚡ Gaya visual PICKS

Apabila memaparkan flow pantas PICKS, gunakan label ini secara konsisten:

- 🎯 **P — Pin the Problem**
- 🚧 **I — Identify Must-Haves**
- 📊 **C — Compare Options**
- ⭐ **K — Keep the Best Candidate**
- 💾 **S — Select & Save**

Ikon ini ialah gaya paparan standard untuk memudahkan scanning tanpa mengubah logic method.

---

## 5. AI Recommendation

Selepas setiap REVIEW, paparkan:

```text
🤖 AI Recommendation:
Option X

Why:
[ayat pendek]

👉 Your selection?
```

Recommendation AI dan pilihan pengguna mesti sentiasa dipisahkan.

```text
AI Recommendation ≠ Your Selection
```

AI boleh mengubah recommendation apabila evidence atau option berubah.

AI tidak boleh menukar pilihan pengguna secara automatik.

---

## 6. User membuat pilihan

Jika selepas soalan `👉 Your selection?` pengguna menjawab secara eksplisit, contohnya:

```text
Laptop B
```

jawapan itu dianggap sebagai pilihan akhir semasa.

Sistem mesti terus commit pilihan tersebut tanpa meminta pengguna menekan SAVE sekali lagi.

Paparkan:

```text
✓ Pilihan anda telah disimpan.

Laptop kerja → Laptop B
```

Aliran:

```text
👉 Your selection?
    ↓
user explicitly chooses Option B
    ↓
COMMIT
    ↓
Pilihan anda telah disimpan.
```

---

## 7. Jika pengguna belum memilih

Jika pengguna tidak menjawab `👉 Your selection?` dan sebaliknya terus bertanya, memberi evidence atau menambah option:

- jangan paksa pilihan;
- kekalkan current selection sebagai belum diputuskan;
- simpan keadaan aktif dalam **Working State**;
- teruskan perbincangan;
- apabila REVIEW dibuat, kemas kini matrix semasa.

Contoh:

```text
👉 Your selection?
    ↓
"Bagaimana kalau ada Laptop D?"
    ↓
keep Working State
    ↓
add Laptop D
    ↓
[ REVIEW ]
    ↓
update matrix
    ↓
AI Recommendation
    ↓
👉 Your selection?
```

Working State ialah state sementara sesi aktif. Ia tidak boleh bergantung pada long-term memory sesuatu platform AI sebagai satu-satunya storage.

---

## 8. SAVE

`SAVE` ialah explicit manual commit untuk keadaan semasa.

### Jika sudah ada Your Selection

Commit:

- pilihan pengguna;
- Matriks Pemilihan semasa;
- AI Recommendation semasa;
- data penting yang membentuk keputusan.

Status:

```text
COMMITTED SELECTION
```

### Jika belum ada Your Selection

Tetap commit:

- maklumat semasa;
- option semasa;
- Matriks Pemilihan semasa;
- AI Recommendation semasa.

Tetapi jangan cipta pilihan palsu.

Status:

```text
UNFINISHED / DRAFT
```

Aliran:

```text
[ SAVE ]
   │
   ├── Your Selection exists
   │       ↓
   │   COMMITTED SELECTION
   │
   └── no selection
           ↓
       UNFINISHED / DRAFT
```

SAVE membolehkan pengguna berhenti pada bila-bila masa dan sambung kemudian tanpa kehilangan kerja.

---

## 9. HISTORY

`HISTORY` membuka:

```text
MY SELECTIONS HISTORY

Laptop kerja          → Laptop B
AI subscription       → ChatGPT Plus
Software citation     → Mendeley
Rumah Kulai           → Taman Putri unit A
PC baru               → Draft
```

History mesti kekal ringkas. Ia bukan dashboard kompleks.

Jika pengguna membuka selection yang telah selesai:

```text
Laptop kerja

Selected:
Laptop B

🤖 AI Recommendation:
Laptop B

Score:
8.35 / 10

[ VIEW MATRIX ]
[ REOPEN SELECTION ]

[ REVIEW ]   [ SAVE ]   [ HISTORY ]
```

Jika pengguna membuka draft:

```text
PC baru

Status:
UNFINISHED

Current 🤖 AI Recommendation:
RTX 4060 build

Your Selection:
Not selected

[ REOPEN SELECTION ]
```

---

## 10. REOPEN SELECTION

`REOPEN SELECTION` memulihkan state keputusan lama:

- criteria;
- weights jika digunakan;
- option;
- scores;
- matrix;
- recommendation;
- selection terdahulu jika ada.

Kemudian pengguna boleh memberi option atau evidence baharu dan menjalankan REVIEW semula.

Keputusan lama tidak boleh dipadam atau ditukar secara senyap.

Reopen bermaksud:

```text
restore old state
    ↓
accept new input
    ↓
[ REVIEW ]
    ↓
update matrix
    ↓
new AI Recommendation
    ↓
👉 Your selection?
```

---

## 11. Current State dan committed history

ZASSELECTION membezakan dua jenis state:

### Working State

State sementara semasa sesi pemilihan masih berjalan.

Contoh:

```text
Current decision: Pilih laptop kerja
Current options: A, B, C, D
Current recommendation: B
Your Selection: Not selected
```

### Committed State

Snapshot yang telah disimpan melalui:

- pilihan eksplisit pengguna; atau
- `SAVE`.

Committed State masuk ke history.

Draft yang disimpan juga masuk ke history tetapi mesti ditanda jelas sebagai `Draft` atau `UNFINISHED`.

---

## 12. Surface UX yang LOCKED

Aliran utama:

```text
                    ZASSELECTION
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       REVIEW           SAVE          HISTORY
          │              │              │
          │              │              └─→ My Selections History
          │              │
          │              ├─ selection exists
          │              │      → commit decision
          │              │
          │              └─ no selection
          │                     → commit DRAFT
          │
          ├─ new input exists
          │      ↓
          │   compare with current data
          │      ↓
          │   update matrix
          │
          └─ no new input
                 ↓
              re-view
                 ↓
          show current matrix
                 ↓
          AI Recommendation
                 ↓
          👉 Your selection?
                 │
           ┌─────┴─────┐
           │           │
        choose       continue
           │           │
         commit     Working State
```

---

## 13. Locked UX principles

The following decisions are LOCKED for ZASSELECTION v0.2.0:

1. English default method file is `ZASSELECTION_EN.md`; Malay method file is `ZASSELECTION_MY.md`.
2. The three mandatory primary controls are `REVIEW`, `SAVE`, and `HISTORY`.
3. REVIEW with new input compares against existing data and updates the current matrix.
4. REVIEW without new input means re-view and must show the saved current matrix without inventing changes.
5. Every new option is added to the existing selection matrix.
6. Explanations per option should normally be short, around 10 words.
7. Every review ends with `🤖 AI Recommendation` followed by `👉 Your selection?`.
8. AI Recommendation and Your Selection are separate concepts.
9. An explicit user selection auto-commits immediately.
10. After auto-commit, show `Pilihan anda telah disimpan.`.
11. SAVE manually commits the current state.
12. SAVE without a user selection stores an `UNFINISHED / DRAFT` selection.
13. HISTORY opens `My Selections History`.
14. History remains simple and allows a previous selection or draft to be reopened.
15. REOPEN restores the previous matrix/state and continues comparison instead of starting from zero.
16. Working State must not rely solely on a platform AI's long-term memory.
17. Backend complexity must remain hidden from the normal user path.
18. Gaya visual PICKS menggunakan 🎯 P, 🚧 I, 📊 C, ⭐ K, dan 💾 S secara konsisten; hujung review menggunakan 🤖 AI Recommendation dan 👉 Your selection?.

Core UX principle:

> **Complexity belongs in the protocol, not in the user's path.**

---

## 14. Repository and persistence boundary

ZASSELECTION lives in the dedicated `ZASSELECTION/` folder inside the main ZASS repository.

This folder is the Source of Truth for:

- ZASSELECTION method;
- ZASSELECTION-specific documentation;
- ZASSELECTION-specific implementation or schema if required.

AI-SYNC is **not** part of this folder. It is a separate transport-layer project/repository shared by ZASS, ZASSIMPLE, ZASSELECTION, dzuddiyn library, and other projects.

Selection records and history may use a persistence backend such as Google Sheets, but that implementation detail must not complicate the three-button user experience.

The current method file remains portable Markdown so it can be read by different AI systems.

Portable methodology does not imply portable automation.

> **AI produces meaning. System owns transport. Owner owns the decision. History preserves the record.**
