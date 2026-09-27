# ZASS — Zero-to-Architecture Structured Sprint

**A structured brainstorming method**

**Blast an idea. Let AI organize it. Save its evolution on GitHub.**

> **Don't shortcut thinking; eliminate repeated thinking.**

ZASS is a Markdown framework for developing raw ideas into tested options, decisions locked by the project owner, and traceable architecture. It works across ChatGPT, Gemini, Claude, Perplexity, and other AI models. AI helps explore and organize; the project owner makes the decisions.

## Two ways to start

- [`ZASS.md`](ZASS.md) — the full structured framework for evidence, experiments, decisions, and traceable architecture.
- [`ZASSIMPLE.md`](ZASSIMPLE.md) — **ZASSIMPLE**, a lighter conversational template: AI responds naturally; an intentional `ZASS` or `ZASS!!` shows the structured update and contextual AI suggestion. Clear agreement becomes an agreed candidate, while `LOCK`, `COMMIT`, and the draft/build confirmation gate remain explicit safeguards.
- [`ZASSIMPLE_EN.md`](ZASSIMPLE_EN.md) — the English companion template for the same lighter conversational workflow.

## Prompt ZASSIMPLE selepas upload

Selepas upload [`ZASSIMPLE.md`](ZASSIMPLE.md) ke chat AI, tampal prompt ini:

```text
Baca fail ZASSIMPLE.md yang dilampirkan sebagai source of truth projek ini.
Brainstorm dengan saya secara santai. Jawab mesej biasa secara natural tanpa
blok ZASSIMPLE UPDATE. Rekod perkara penting apabila boleh mengubah fail,
tetapi jangan dakwa fail sudah dikemas kini jika belum. Jangan invent fakta.

Jika saya sengaja arahkan ZASS atau ZASS!!, jawab secara natural dahulu,
kemudian tunjuk ZASSIMPLE UPDATE, 💡 Cadangan ZASS, belum AC yang sesuai
dengan perbincangan, dan status fail sebenar. Sebutan dalam footer, petikan,
contoh atau demo bukan arahan.

Persetujuan yang jelas boleh jadi AC. LOCK / LOCK DECISION mengunci pilihan
saya sebagai D-xxx. COMMIT mengemas kini fail, versi dan sejarah versi,
lalu commit ke GitHub (atau sediakan fail dan ringkasan jika tiada akses).
AI boleh cadangkan DRAFT ARCH apabila keputusan cukup jelas. DRAFT ARCH hanya
menghasilkan draf. Selepas draf mencukupi, AI cadangkan BUILD ARCHITECTURE;
arahan itu menyemak keputusan LOCKED dan meminta balasan YA, CONFIRM
ARCHITECTURE sebelum mengesahkan architecture.

Akhiri setiap balasan tepat dengan:
[🧠 ZASS !!] -- [🔒 LOCK DECISION] -- [📦 COMMIT] -- [🏗️ DRAFT ARCH]
```

Versi English tersedia dalam [`ZASSIMPLE_EN.md`](ZASSIMPLE_EN.md). Draf architecture boleh diberi versi kerja; setelah tujuan, aliran utama, komponen utama dan keputusan LOCKED berkaitan dijelaskan, AI membentangkan **“Sedia untuk BUILD ARCHITECTURE?”** bersama andaian kritikal sebelum pintu pengesahan.

Dalam ZASS penuh, arahan sengaja `ZASS` atau `ZASS!!` membuka penerokaan penuh, rumusan, tindakan esok dan PARK / PROCEED / PIVOT. Mesej biasa menerima balasan natural dengan footer yang sama; `ZASS REVIEW` tetap menjalankan kaedah review tersendiri.

## Get started in 3 steps

1. Copy [`ZASS.md`](ZASS.md) into a new project folder. Keep one main ZASS file per project.
2. Give the latest file to an AI and describe your idea in ordinary language. For example: **“I have an idea for a cucumber and ginger drink. Brainstorm with me, then capture the important points in ZASS. Separate what I stated from your inferences and what we still don't know.”**
3. Review the AI's summary of proposed changes. Save the latest version on GitHub so the next session or AI model can read the same decisions.

You don't need to memorize IDs such as `I-001` or `D-001`. The AI manages IDs, statuses, and links between entries. See **Daily Use** near the top of [`ZASS.md`](ZASS.md) for simple instructions and optional prompts. The template's user guide is currently in Malay; the framework can be used in any language.

## Versioning

Each owner-locked template update is one logical Git commit covering every affected file. Record the change in [`CHANGELOG.md`](CHANGELOG.md), bump the visible version, and tag meaningful releases (for example, `v0.1.5`). Commits preserve detailed history; tags mark stable versions that are easy to return to.

## Evidence and decision discipline

ZASS v0.1.5 adds lightweight evidence fields without new states or IDs: a one-sentence **problem being tested**, an experiment's **assumption**, **pass/fail signal**, **observed result**, **learning**, and **PARK / PROCEED / PIVOT impact**. Risks can carry an **early warning signal**; decisions can record drivers, alternatives, consequences, and a revisit trigger.

Cynefin triage, DACI roles, Design Sprint mode, and Wardley Mapping remain optional tools for the right context—not default ceremony.

## Prompt for AI commits

Use this prompt with another AI chat that will update this repository:

```text
Read the latest `ZASS.md`, `ZASS_EN.md`, `README.md`, and `CHANGELOG.md`
in this repository before changing anything.

Whenever you make a change that I LOCK and ask you to commit:

1. Treat every affected file as one logical change.
2. Update all related files in ONE atomic Git commit, not one commit per file.
3. Bump the visible ZASS version:
   - PATCH (`v0.1.x`) for fixes, clarifications, or small template changes.
   - MINOR (`v0.x.0`) for a meaningful new capability or flow.
   - MAJOR (`v1.0.0`) only for a breaking change to the basic workflow.
4. Update `CHANGELOG.md` with the new version, date, and a concise factual summary.
5. Update the same visible version in `ZASS.md`, `ZASS_EN.md`, and `README.md` where shown.
6. Use a clear commit message, for example: `Release ZASS v0.1.5`.
7. After committing, report the new version, commit SHA, changed files, and changelog summary.
8. Do not change LOCKED decisions or baselines without my explicit instruction.
9. If I ask to publish a GitHub release, create a matching tag, for example `v0.1.5`.

Do not commit when I only ask for a demo, suggestion, or review. Wait for an explicit
instruction such as “LOCK dan COMMIT”.
```

## The ZASS flow

`Explore freely → Challenge assumptions → Compare options → Test when needed → Owner decides → Lock → Build architecture`

- AI suggestions are **candidates**, not decisions.
- Agreement between AI models is not evidence. Disagreement becomes a question, experiment, or trade-off to resolve.
- Only the project owner can explicitly **LOCK** a decision.
- Locked decisions must never be changed silently.
- Architecture is generated when critical decisions and readiness conditions are satisfied.

## Using this file

The `ZASS.md` in this repository is a **base template**, not a shared decision record for every project. For a new project, copy it into that project's repository (for example, `Kerani-Core/ZASS.md` or `ZASS_Cucumber_Ginger_Drink.md`). Keep updating **the same project file** as the discussion evolves; Git preserves its history. Don't rely on AI memory or chat as the only record.

**Status:** ZASS baseline v0.1 is locked; the template's user guide was updated to v0.1.5.

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

**Status:** ZASS baseline v0.1 dikunci; panduan pengguna dalam template telah dikemas kini ke v0.1.5.

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

## Brainstorming Methods and Perspectives

| Method | Brief review |
|---|---|
| **Industrial / C4 / arc42 / ATAM** | Structure components, responsibilities, flows, and trade-offs; assess whether the design meets real operational quality requirements. |
| **Academic / DSRM / GQM** | Turn an idea into a problem, questions, method, measures, and evidence; ensure claims can be tested or defended. |
| **Hacker / failure injection / assumption breaking** | Break system assumptions creatively through unusual inputs, unexpected conditions, network loss, and incorrect action sequences. |
| **Security / threat modelling** | Identify important assets, possible attackers, attack paths, damage impact, and the controls that need to exist. |
| **Abuse / Scammer mindset** | Imagine users seeking unfair advantage through false claims, duplicate accounts, or price manipulation; record prevention, not tricks. |
| **Cost / unit economics** | Calculate build, running, and maintenance costs; identify hidden costs, budget limits, and the break-even point. |
| **Maintainability** | Assess whether a future person can read, repair, upgrade, and recover the system without relying on its original creator. |
| **Operations / reliability** | Focus on daily work: monitoring, alerts, handover, backup, recovery, capacity, and what happens when people are unavailable. |
| **Scalability** | Test what changes when users, data, instructions, or integrations grow by ten to one hundred times. |
| **Crazy / unconstrained brainstorming** | Temporarily suspend limits of technology, cost, and convention; find unexpected possibilities before filtering through real constraints. |
| **User-experience / workflow** | Follow the user journey from intent to outcome; find confusion, unnecessary steps, risky decisions, and waiting points. |
| **Single-maintainer perspective** | Assess everything through one system caretaker's time, energy, skills, documentation, cost, and risk of exhaustion. |
| **Artist / emotional experience** | Assess the felt experience: does the system make people feel relief, confidence, enjoyment, calm, or meaning? |
| **First-principles thinking** | Break assumptions into basic facts; rebuild options from what is truly needed instead of customary practice. |
| **Systems thinking** | Examine feedback loops, side effects, delays, and related parties; avoid fixing one part while damaging another. |
| **Product / market lens** | Ask who will willingly use it, which problem hurts enough, the alternatives available, and why people would choose this solution. |
| **Legal / compliance lens** | Check legal duties, data privacy, records, consent, liability, and industry requirements before remediation becomes expensive. |
| **Ethics / harm lens** | Find who may be harmed, excluded, or disadvantaged; set decision boundaries even when an option appears profitable. |
| **Accessibility / inclusion lens** | Test whether people with different abilities, languages, devices, connectivity, or literacy can still use the system safely. |
| **Data / evidence lens** | Define which data must be trusted, its source and quality, who can change it, and how audit proves truth. |
| **Privacy / trust lens** | Minimize collected data; make purpose, access, retention, and the user's ability to regain control clear. |
| **Resilience / offline lens** | Imagine loss of internet, AI providers, or integrations; define minimum function, queues, retries, and recovery after return. |
| **Red team / adversarial review** | Search for weaknesses from an opposing party's perspective, but produce only risks, evidence, and defensive controls. |
| **Reverse planning / pre-mortem** | Assume the project failed a year later; list likely reasons and create early actions to reduce them. |
| **Analogy / cross-domain lens** | Borrow patterns from hospitals, banks, factories, games, or farms to find solutions not yet considered. |
| **Minimal viable experiment** | Avoid long debate by creating the smallest test that can reject or support the central assumption. |
| **Future-back / scenario planning** | Imagine several plausible futures; check whether today's decision remains useful as conditions change. |
| **Stakeholder / conflict lens** | Map who benefits, who carries work or risk, and conflicts of interest that need early management. |

For **Abuse / Scammer mindset**, output must remain limited to risks, evidence, detection, and preventive controls. Do not record bypass, deception, or illegal monetization steps.

---

## Status after an update

After AI actually updates the ZASS file, it should state: **“ZASS has been updated in the ZASS format and is ready for structured brainstorming.”** If it only proposes changes, it must say that the file has not yet been updated.

## Default next action

Every `ZASS` and `ZASS REVIEW` starts its closing section with **✨ AI Summary and Suggestions**: 1–3 short natural paragraphs that may summarize findings, connect patterns, or offer clearly-labelled candidate ideas. It remains advice, not a decision. This is followed by a **🧭 Next-Day Action Proposal**: one small action for tomorrow with its expected output, **💰 cost**, **⏱️ time**, and **🛑 stop rule**. Visual separators keep the summary, action, and next-step choice easy to scan.

It then asks:

**👉 NEXT STEP — PARK 🅿️, PROCEED ▶️, or PIVOT 🔄?**

- `PARK 🅿️` — After an actual file update, AI dynamically confirms that the named idea has been safely saved in ZASS format with its relevant records, and recommends **GitHub** or **Notion** to preserve its history and begin or resume the project when ready. If no file was updated, AI clearly says this is only a proposed PARK record.

---

- `PROCEED ▶️` — AI recommends only the relevant next action: **🧪 experiment**, **🔍 ZASS REVIEW**, **🛠️ mini-prototype**, **⚖️ candidate decision**, **🔒 LOCK** (owner decision only), or **📦 COMMIT** (only after “LOCK dan COMMIT”).

---

- `PIVOT 🔄` — AI preserves the earlier candidates and suggests a **🔀 pivot candidate** that addresses the same underlying problem.

### Naming

**ZASS** is the framework's official name. **ZASS** is the action that opens and explores an idea. `Victim-Abuser Red Team` is the ZASS preset name; use **Abuse Red Teaming** or **Product Safety Red Teaming** when explaining the method outside ZASS.

### Three Minds review preset

- **Engineer** — feasibility, modules, data, cost, constraints, and technical tests.
- **Artist** — human journey, language, story, and emotional experience.
- **Victim-Abuser Red Team** — human harm, misuse, detection signals, and preventive controls.

Use it with: `ZASS REVIEW — Method: Three Minds`.
