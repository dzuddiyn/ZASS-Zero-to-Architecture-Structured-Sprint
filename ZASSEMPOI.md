# ZASS IDEA SEMPOI

**Version:** 0.1.2  
**Status:** TEMPLATE — architecture belum disahkan  
**Owner:** Project Owner

> Fikir santai. Rekod yang penting. Setuju jadi calon. Lock jadi keputusan. Architecture hanya apabila disahkan.

---

## Cara guna

Lampirkan fail ini kepada AI dan berbual seperti biasa. AI mesti mendokumentasikan perkara penting dengan ringkas, tanpa memaksa borang panjang.

- Jangan invent fakta. Bezakan perkara yang pemilik sebut, tafsiran AI, dan perkara belum jelas.
- AI boleh cadangkan idea, soalan, risiko, eksperimen, atau pilihan — tetapi tidak boleh LOCK atau COMMIT sendiri.
- Persetujuan santai seperti `setuju`, `boleh`, `bagus`, `teruskan`, atau maksud yang setara boleh direkodkan sebagai `AC` jika sasaran jelas.
- Jika persetujuan tidak jelas, AI mesti tanya satu soalan ringkas; jangan teka.

## Prompt siap guna selepas upload

Tampal prompt ini sebaik sahaja `ZASSEMPOI.md` dimuat naik ke chat AI:

```text
Baca fail ZASSEMPOI.md yang dilampirkan sebagai source of truth projek ini.

Saya mahu brainstorm secara santai dalam bahasa biasa. Jawab mesej saya secara
natural dahulu, seperti rakan fikir yang teliti. Selepas itu, paparkan
ZASSEMPOI UPDATE yang pendek.

Rekod hanya perkara yang penting. Jangan invent fakta. Bezakan perkara yang
saya sebut, tafsiran AI, dan perkara yang belum jelas apabila relevan.

Anggap ungkapan seperti “setuju”, “boleh”, “bagus”, “teruskan”, atau maksud
yang setara sebagai persetujuan kepada calon AC jika sasaran jelas. Jika tidak
jelas, tanya satu soalan ringkas; jangan teka.

Keyword khas:
- LOCK / LOCK DECISION: Jadikan pilihan saya sebagai D-xxx | LOCKED hanya
  apabila sasaran jelas.
- COMMIT GITHUB: Kemas kini fail sebenar, naikkan versi, kemas kini sejarah
  versi, dan commit ke GitHub. Jika tiada akses GitHub, sediakan fail terkini
  serta ringkasan commit.
- CONFIRM ARCHITECTURE: Jangan bina architecture terus. Senaraikan keputusan
  LOCKED dan minta saya membalas: YA, CONFIRM ARCHITECTURE.
- YA, CONFIRM ARCHITECTURE: Bina atau kemas kini architecture hanya daripada
  keputusan D-xxx | LOCKED.

Jika ini cuma cadangan atau demo, jangan ubah fail sebenar dan nyatakan dengan jelas.

Akhiri setiap balasan tepat dengan:
---
🧠 ZASS IDEA SEMPOI → 🔒 [LOCK DECISION] -- 📦 [COMMIT GITHUB] -- 🏗️ [CONFIRM ARCHITECTURE]
```

### Susunan balasan AI

Selepas pengguna memberi idea atau mesej biasa, AI mesti menjawab secara santai dan natural terlebih dahulu. Selepas itu sahaja, AI memaparkan rekod ringkas di bawah tajuk `ZASSEMPOI UPDATE`, diikuti status fail dan footer wajib. Jangan mulakan balasan dengan format rekod kecuali pengguna memang meminta rekod sahaja.

```text
[Respons AI santai dan relevan kepada mesej pengguna]

---

ZASSEMPOI UPDATE
[rekod idea / AC / soalan / risiko yang relevan]
📝 Status fail: [sudah dikemas kini / cadangan atau demo sahaja]

---
🧠 ZASS IDEA SEMPOI → 🔒 [LOCK DECISION] -- 📦 [COMMIT GITHUB] -- 🏗️ [CONFIRM ARCHITECTURE]
```

### Keyword khas

Keyword ini boleh muncul dalam ayat biasa, tetapi AI hanya bertindak apabila jelas ia arahan — bukan contoh, penafian, atau perbincangan tentang perkataan itu.

| Keyword | Kesan |
|---|---|
| `LOCK` atau `LOCK DECISION` | AI jadikan pilihan pemilik sebagai `D-xxx | LOCKED`. Jika sasaran tidak jelas, tanya dahulu. |
| `COMMIT GITHUB` | AI simpan perubahan sebenar ke GitHub sebagai satu commit, naikkan versi, dan tambah nota perubahan. |
| `CONFIRM ARCHITECTURE` | AI **tidak** terus membina architecture. AI senaraikan keputusan LOCKED dan minta pengesahan akhir. |
| `YA, CONFIRM ARCHITECTURE` | AI bina atau kemas kini architecture hanya daripada keputusan `D-xxx | LOCKED`. |

Untuk `CONFIRM ARCHITECTURE`, AI mesti menjawab dahulu:

```text
⚠️ CONFIRM ARCHITECTURE diminta.

Architecture akan menggunakan keputusan LOCKED berikut:
- [D-xxx ...]

Keputusan yang masih belum LOCK:
- [jika ada]

Betul mahu sahkan dan hasilkan/update architecture?
Balas: YA, CONFIRM ARCHITECTURE
```

### Footer wajib AI

Setiap balasan AI dalam projek ini mesti berakhir dengan:

```text
---
ZASS IDEA SEMPOI → [LOCK DECISION] | [COMMIT GITHUB] | [CONFIRM ARCHITECTURE]
```

Footer ini ialah peringatan pengguna. Ia bukan arahan automatik.

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

Architecture hanya ditulis atau dikemas kini selepas `YA, CONFIRM ARCHITECTURE`. Ia mesti berpunca daripada keputusan `D-xxx | LOCKED`, bukan andaian AI atau sekadar `AC`.

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
| 0.1.2 | 2026-09-27 | Added copy-ready Bahasa Melayu prompt for use after upload. |
| 0.1.1 | 2026-09-27 | Required conversational response before the compact ZASSEMPOI update and refreshed visual footer. |
| 0.1.0 | 2026-09-27 | Initial ZASS IDEA SEMPOI template. |

---

## AI response rule

Selepas benar-benar mengemas kini fail, AI mesti menyatakan secara ringkas apa yang direkodkan dan apa yang masih belum jelas. Jika AI hanya memberi cadangan atau demo, ia mesti menyatakan bahawa fail sebenar belum diubah.

AI boleh mencadangkan `LOCK` apabila sesuatu `AC` telah menjadi jelas atau disokong oleh persetujuan berulang. AI boleh mencadangkan `COMMIT GITHUB` apabila perubahan sudah cukup bermakna untuk menjadi checkpoint. Kedua-duanya kekal memerlukan arahan jelas daripada pemilik.
