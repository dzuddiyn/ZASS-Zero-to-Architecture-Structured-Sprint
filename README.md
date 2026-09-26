# ZASS — Zero-to-Architecture Structured Sprint

**A structured brainstorming method**

**Blast an idea. Let AI organize it. Save its evolution on GitHub.**

> **Don't shortcut thinking; eliminate repeated thinking.**

ZASS is a Markdown framework for developing raw ideas into tested options, decisions locked by the project owner, and traceable architecture. It works across ChatGPT, Gemini, Claude, Perplexity, and other AI models. AI helps explore and organize; the project owner makes the decisions.

## Get started in 3 steps

1. Copy [`ZASS.md`](ZASS.md) into a new project folder. Keep one main ZASS file per project.
2. Give the latest file to an AI and describe your idea in ordinary language. For example: **“I have an idea for a cucumber and ginger drink. Brainstorm with me, then capture the important points in ZASS. Separate what I stated from your inferences and what we still don't know.”**
3. Review the AI's summary of proposed changes. Save the latest version on GitHub so the next session or AI model can read the same decisions.

You don't need to memorize IDs such as `I-001` or `D-001`. The AI manages IDs, statuses, and links between entries. See **Daily Use** near the top of [`ZASS.md`](ZASS.md) for simple instructions and optional prompts. The template's user guide is currently in Malay; the framework can be used in any language.

## The ZASS flow

`Explore freely → Challenge assumptions → Compare options → Test when needed → Owner decides → Lock → Build architecture`

- AI suggestions are **candidates**, not decisions.
- Agreement between AI models is not evidence. Disagreement becomes a question, experiment, or trade-off to resolve.
- Only the project owner can explicitly **LOCK** a decision.
- Locked decisions must never be changed silently.
- Architecture is generated when critical decisions and readiness conditions are satisfied.

## Using this file

The `ZASS.md` in this repository is a **base template**, not a shared decision record for every project. For a new project, copy it into that project's repository (for example, `Kerani-Core/ZASS.md` or `ZASS_Cucumber_Ginger_Drink.md`). Keep updating **the same project file** as the discussion evolves; Git preserves its history. Don't rely on AI memory or chat as the only record.

**Status:** ZASS baseline v0.1 is locked; the template's user guide was updated to v0.1.2.

---------------------------------------------------------------------------------------------------------



# ZASS — Zero-to-Architecture Structured Sprint

just BLAST an IDEA, AI & GitHub save it!

**Bukan potong fikir; potong ulang fikir.**

ZASS ialah rangka kerja Markdown untuk mematangkan idea mentah menjadi pilihan yang diuji, keputusan yang dikunci oleh pemilik projek, dan architecture yang boleh dijejak. Ia boleh dibawa antara ChatGPT, Gemini, Claude, Perplexity dan AI lain. AI membantu meneroka dan menyusun; pemilik projek menentukan keputusan.

## Mula dalam 3 langkah

1. Salin [`ZASS.md`](ZASS.md) ke folder projek baharu. Gunakan satu fail ZASS utama bagi setiap projek.
2. Berikan fail terkini itu kepada AI dan cerita idea dalam bahasa biasa. Contoh: **“Aku ada idea untuk produk jus timun halia. Tolong brainstorm, kemudian susun isi penting dalam ZASS. Bezakan fakta, tafsiran dan perkara yang belum diketahui.”**
3. Semak ringkasan perubahan yang AI cadangkan. Simpan versi terkini dalam GitHub supaya sesi atau model AI seterusnya membaca keputusan yang sama.

Abang tidak perlu menghafal kod seperti `I-001` atau `D-001`. AI mengurus ID, status dan hubungan antara entri. Lihat bahagian **Cara Guna Harian** di atas fail [`ZASS.md`](ZASS.md) untuk contoh arahan ringkas dan prompt pilihan.

## Aliran ZASS

`Idea bebas → Cabar andaian → Banding pilihan → Uji bila perlu → Pemilik putuskan → Lock → Bina architecture`

- Cadangan AI ialah **calon**, bukan keputusan.
- Persetujuan beberapa AI bukan bukti; perbezaan pandangan menjadi soalan, eksperimen atau trade-off.
- Hanya pemilik projek boleh **LOCK** keputusan secara jelas.
- Keputusan terkunci tidak boleh diubah secara senyap.
- Architecture dijana apabila keputusan penting dan syarat kesediaan telah dipenuhi.

## Cara guna fail ini

Fail `ZASS.md` dalam repo ini ialah **template asas**, bukan rekod keputusan untuk semua projek. Untuk projek baharu, salin fail tersebut ke repo projek berkenaan (contohnya `Kerani-Core/ZASS.md` atau `ZASS_Produk_Jus_TimunHalia.md`). Kemas kini **fail projek yang sama** sepanjang perbincangan; Git menyimpan sejarah versinya. Jangan jadikan memori AI atau chat sebagai satu-satunya rekod.

**Status:** ZASS baseline v0.1 dikunci; panduan pengguna dalam template telah dikemas kini ke v0.1.2.

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
ZASS BLAST
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

