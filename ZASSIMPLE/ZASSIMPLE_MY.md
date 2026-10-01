# ZASSIMPLE

**Version:** 0.2.1  
**Status:** TEMPLATE — workflow ringan dari idea ke delivery  
**Owner:** Project Owner

> **ZASSIMPLE: lightweight di permukaan, tetapi lineage tetap kuat sampai execution.**
>
> **Dump the DUMB. Get to THUMBS-Up. 👍**
>
> 🧠 **DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!**
>
> **From messy ideas to 👍 THUMBS-UP architecture.**

---

## Cara guna

Pengguna cuma perlu buat satu benda: **DUMP**.

Cakap seperti biasa. Lambakkan idea serabut, fikiran separuh masak, constraint, kebimbangan, kehendak, dan idea pelaksanaan yang muncul tiba-tiba tanpa perlu susun dahulu. ZASSIMPLE yang mengurus struktur di belakang tabir.

### The IDEA Trick — UX manusia

- 💬 **I — Idea Dump**
- 🧭 **D — Distill What Matters**
- 🔒 **E — Establish Decisions**
- 🏗️ **A — Architecture**

**IDEA bukan ganti method. IDEA ialah surface UX untuk ZASSIMPLE.**

Lifecycle dalaman: DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!

AI mesti kekalkan pengalaman pengguna ringan sambil menjaga lineage daripada decision, action plan, architecture, task, execution, verification hingga delivery.

- Jangan invent fakta. Bezakan perkara yang pemilik sebut, tafsiran AI, dan perkara belum jelas.
- AI boleh cadangkan idea, soalan, risiko, eksperimen, atau pilihan — tetapi tidak boleh LOCK atau COMMIT sendiri.
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
architecture, atau execution.

Apabila saya sengaja mengarahkan ZASS atau ZASS!!, paparkan STAGE PULSE ringkas
dahulu, kemudian ZASSIMPLE UPDATE dan CURRENT SELECTION MATRIX. STAGE PULSE
mesti padat dan menarik: tunjuk stage semasa serta stage seterusnya. Semasa
DESIGN, tunjuk juga Architecture Progress. Selepas architecture disahkan,
tunjuk Action Detail Progress. Progress mesti datang daripada coverage criteria
yang jelas, bukan ketepatan palsu.

Kriteria Architecture Progress:
1) purpose, 2) main flow, 3) main components, 4) keputusan LOCKED berkaitan.
Kriteria Action Detail Progress:
1) implementation sequence, 2) dependencies/constraints,
3) task slices, 4) pass/verification conditions.

Guna visual ringkas seperti:
📍 DESIGN → next: DO IT
Architecture  [██████░░░░] 3/4
Action Detail [████░░░░░░] 2/4

Kemudian beri 💡 Cadangan ZASS, belum AC:
[cadangan/persoalan AI yang serasi dengan idea]. Nyatakan status fail sebenar.
Footer atau petikan yang menyebut ZASS!! bukan arahan.

Ungkapan seperti “setuju”, “boleh”, “bagus”, “teruskan”, atau maksud setara
boleh menjadi AC jika sasaran jelas; jika tidak, tanya satu soalan ringkas.
LOCK / LOCK DECISION hanya mengunci pilihan saya yang jelas sebagai D-xxx.
COMMIT mengemas kini fail sebenar, versi dan sejarah versi, lalu commit ke
GitHub; jika tiada akses, sediakan fail serta ringkasan commit.
AI boleh mencadangkan DRAFT ARCH apabila keputusan cukup jelas, walaupun
saya belum memintanya. DRAFT ARCH menghasilkan draf berversi kerja sahaja.
Apabila draf menjawab tujuan, aliran utama, komponen utama, dan keputusan
LOCKED berkaitan, cadangkan “Sedia untuk BUILD ARCHITECTURE?” bersama andaian
kritikal yang masih terbuka. BUILD ARCHITECTURE menyenaraikan D-xxx | LOCKED
dan meminta pengesahan akhir; bina architecture yang disahkan hanya selepas
YA, CONFIRM ARCHITECTURE.

Keyword khas hanya berkuat kuasa apabila saya sengaja memberi arahan,
bukan dalam demo, contoh, petikan, penafian atau footer.

Akhiri setiap balasan tepat dengan:
[🧠 ZASS !!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ CONFIRM ARCHITECTURE]
```

### Susunan balasan AI

Mesej biasa dijawab secara santai. AI merekodkan perkara penting apabila boleh mengubah fail, tetapi tidak memaparkan `ZASSIMPLE UPDATE` melainkan pengguna sengaja mengarahkan `ZASS` atau `ZASS!!`. Jangan mengaku fail telah berubah jika belum.

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

[🧠 ZASS !!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ CONFIRM ARCHITECTURE]
```

### Keyword khas

Keyword ini boleh muncul dalam ayat biasa, tetapi AI hanya bertindak apabila jelas ia arahan — bukan contoh, penafian, atau perbincangan tentang perkataan itu.

| Keyword | Kesan |
|---|---|
| `ZASS` atau `ZASS!!` | AI paparkan kemas kini ringkas, **CURRENT SELECTION MATRIX** wajib, serta cadangan ZASS yang belum AC, hanya apabila diarahkan dengan sengaja. |
| `LOCK` atau `LOCK DECISION` | AI jadikan pilihan pemilik sebagai `D-xxx | LOCKED`. Jika sasaran tidak jelas, tanya dahulu. |
| `COMMIT` | AI simpan perubahan sebenar ke GitHub sebagai satu commit, naikkan versi, dan tambah nota perubahan. |
| `DRAFT ARCH` | AI sediakan/pinda draf berversi kerja; boleh dicadangkan apabila keputusan cukup jelas tanpa mengesahkannya. |
| `BUILD ARCHITECTURE` | AI semak draf dan keputusan LOCKED, kemudian minta pengesahan akhir; tidak membina terus. |
| `YA, CONFIRM ARCHITECTURE` | AI bina atau kemas kini architecture hanya daripada keputusan `D-xxx | LOCKED`. |

Untuk `BUILD ARCHITECTURE`, AI mesti menjawab dahulu:

```text
⚠️ BUILD ARCHITECTURE diminta. Semakan pengesahan:

Architecture akan menggunakan keputusan LOCKED berikut:
- [D-xxx ...]

Andaian kritikal dan keputusan yang masih belum LOCK:
- [jika ada]

Betul mahu sahkan dan hasilkan/update architecture?
Balas: YA, CONFIRM ARCHITECTURE
```

### Footer wajib AI

Setiap balasan AI dalam projek ini mesti berakhir dengan:

```text
[🧠 ZASS !!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ CONFIRM ARCHITECTURE]
```

Footer ini ialah peringatan pengguna, bukan arahan automatik.

---

## Planning tersembunyi, feedback architecture, dan execution satu-per-satu

ZASSIMPLE menyimpan implementation planning daripada membebankan pengguna sehingga ia benar-benar berguna.

- Implementation thought yang ditemui semasa DECIDE atau DESIGN masuk ke lineage action plan.
- Action planning dan architecture saling memberi feed: constraint praktikal, dependency, sequencing, experiment, dan feasibility finding boleh refine architecture; perubahan architecture pula boleh refine action plan.
- Jangan lambakkan keseluruhan action plan kepada pengguna secara default.
- Selepas architecture disahkan, rancang semula daripada state terbaru, slice action plan menjadi task executable, dan kekalkan lineage task → action-plan item → decision/architecture source.
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
```

Penemuan semasa execution yang memberi kesan material kepada design mesti feed balik ke DESIGN. Jangan ubah keputusan LOCKED secara senyap.

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
- Jangan tambah command `SELECT` ke ZASSIMPLE. Keputusan muktamad kekal melalui arahan pemilik `LOCK` / `LOCK DECISION`.
- Apabila fail boleh dikemas kini, simpan snapshot matriks terkini di bahagian ini supaya sesi/AI seterusnya dapat melihat perbandingan semasa.

## DECISIONS

> Hanya pemilik boleh mewujudkan rekod `LOCKED` melalui keyword `LOCK` yang jelas.

<!--
D-001 | LOCKED
Decision: ...
Reason: ...
Locked by: Project Owner
-->

## ARCHITECTURE

**Status:** PENDING CONFIRMATION

AI boleh mencadangkan `DRAFT ARCH` apabila keputusan cukup jelas, walaupun belum diminta. `DRAFT ARCH` menyediakan draf architecture dengan versi kerja seperti `Draft 0.1`, tanpa mengubah status architecture yang telah disahkan. Draf menjelaskan tujuan, aliran utama, komponen utama dan keputusan `D-xxx | LOCKED` yang berkaitan. Andaian kritikal ditandakan sebagai terbuka, bukan dijadikan keputusan secara senyap.

**Aturan tamat draf:** Setelah keempat-empat perkara itu dijawab, AI mesti membentangkan **“Sedia untuk BUILD ARCHITECTURE?”** bersama andaian kritikal yang masih terbuka. Pemilik boleh meminta pindaan khusus atau memulakan pintu `BUILD ARCHITECTURE`. Hanya selepas `YA, CONFIRM ARCHITECTURE` architecture menjadi versi yang disahkan; ia mesti berpunca daripada keputusan `D-xxx | LOCKED`, bukan sekadar andaian AI atau `AC`.

<!--
### Confirmed architecture

- Purpose: ...
- Components / workflow: ...
- Constraints from locked decisions: ...
- Open boundaries: ...
-->

## VERSION HISTORY

| Version | Date | Change |
|---|---|---|
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

AI boleh mencadangkan `LOCK` apabila sesuatu `AC` telah menjadi jelas atau disokong oleh persetujuan berulang. AI boleh mencadangkan `COMMIT` apabila perubahan sudah cukup bermakna untuk menjadi checkpoint. Kedua-duanya kekal memerlukan arahan jelas daripada pemilik.

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]