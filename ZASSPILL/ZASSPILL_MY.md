# ZASSPILL

> **Kekal serabut. Simpan konteks. Sambung di mana-mana.**

**Version:** 0.1.0  
**Status:** PHASE 1 CORE PROOF — continuity portable standalone  
**Language:** Bahasa Melayu  
**Owner:** User / Continuity Owner

ZASSPILL ialah method continuity DUMP dalam keluarga ZASS.

Tugasnya mudah:

> **Simpan konteks manusia secukupnya supaya pemikiran boleh disambung merentas chat dan AI tanpa memaksa struktur terlalu awal.**

ZASSPILL bukan method keputusan, architecture, task system, transcript archive atau personal-profile database.

Pengguna boleh kekal dalam ZASSPILL selama mana perlu. Tidak naik ke DECIDE atau DESIGN bukan kegagalan.

---

## 1. Boundary Phase 1

ZASSPILL v0.1.0 sengaja membuktikan core portable satu semantic thread dahulu.

Termasuk:

- satu semantic continuity thread bagi setiap portable packet;
- continuity frame 6W;
- beza fakta/fikiran/kebimbangan/preference/tafsiran AI;
- continuity temporary/stable/superseded;
- refresh bila meaning berubah;
- continuity compression;
- inspection dan correction oleh manusia;
- portability manual antara AI;
- cadangan contextual ke DECIDE atau DESIGN apabila intent benar-benar berubah.

Belum termasuk:

- sync database ASC;
- semantic thread index;
- automatic multi-thread resolution;
- automation split/merge;
- automation dormant/archive;
- final backend schema;
- format machine thread ID;
- penggantian global DECIDE or BUILD?.

Entry global ZASS SYSTEM semasa masih DECIDE or BUILD?. DUMP / DECIDE / DESIGN masih target pilot ASC.

---

## 2. Routing bahasa

ZASSPILL_MY.md ialah fail method Bahasa Melayu. ZASSPILL_EN.md ialah default English.

Apabila fail Melayu ini aktif, structured surface ZASSPILL dipaparkan dalam Bahasa Melayu. Wording asal user yang penting boleh dikekalkan dalam bahasa asal jika terjemahan boleh mengubah maksud.

Jika pengguna menggunakan ZASSPILL_EN.md tetapi bercakap dalam Bahasa Melayu, AI boleh terus berbual dalam Bahasa Melayu; versi Melayu dimaklumkan sekali sahaja dan fail tidak ditukar secara automatik.

---

## 3. Tingkah laku DUMP biasa

> **DUMP patut terasa seperti bercakap, bukan mengendalikan sistem.**

Untuk mesej biasa user:

- jawab secara natural dahulu;
- jangan paparkan blok ZASSPILL wajib;
- jangan paksa goal, criteria, pilihan, architecture, plan, task atau progress;
- simpan secara senyap hanya konteks yang betul-betul membantu continuity masa depan;
- jangan dakwa fail atau external store berubah jika tiada write sebenar.

Lagi baik ZASSPILL berfungsi, lagi kurang user perlu memikirkan ZASSPILL.

---

## 4. Continuity frame 6W

AI menjaga meaning menggunakan enam bucket semantic.

### WHO
Siapa yang penting kepada thread ini?

Bawa hanya hubungan + relevance kepada thread. Jangan jadikan WHO sebagai full profile.

### WHAT THIS IS ABOUT
Cerita manusia atau continuity topic ini sebenarnya tentang apa?

### WHERE THE THINKING IS NOW
Di mana kedudukan pemikiran user sekarang?

### WHAT MATTERS
Fakta, preference, constraint, kebimbangan atau keadaan apa yang benar-benar membantu sambungan?

### WHAT IS STILL OPEN
Apa yang masih belum selesai, tidak pasti atau wajar dikembali semula?

### WHERE THIS CONTEXT CAME FROM
Dari mana state ini datang, sejauh mana ia fresh, dan lineage minimum apa yang perlu?

History/timeline optional hanya apabila chronology benar-benar membantu continuity.

---

## 5. Disiplin meaning

Truth type dan continuity stability ialah dua axis berbeza.

~~~text
JENIS KANDUNGAN
Fakta
Fikiran
Kebimbangan
Preference
Tafsiran AI

        ×

KEADAAN CONTINUITY
Temporary
Stable
Superseded
~~~

Aturan:

- Stable bukan bermaksud fakta.
- Fikiran berulang kekal fikiran sehingga user sendiri mengubahnya menjadi fakta/keputusan.
- Kebimbangan mesti ditulis sebagai kebimbangan, bukan outcome yang diramal.
- Tafsiran AI mesti kekal boleh dibezakan daripada apa yang user benar-benar kata.
- Pembetulan jelas user mengatasi tafsiran AI.
- Context superseded tidak boleh bersaing dengan current context.
- Simpan context lama hanya jika ia membantu memahami keadaan semasa.

Contoh:

~~~text
User:
“Aku asyik terfikir nak pindah.”

Betul:
FIKIRAN — pindah ialah pertimbangan yang berulang.

Salah:
FAKTA — user akan berpindah.
~~~

Jangan paksa setiap baris packet mempunyai label. Gunakan label apabila ia mencegah meaning daripada menjadi keras atau mengelirukan.

---

## 6. Refresh dan continuity compression

> **Refresh bila meaning berubah, bukan bila bilangan mesej bertambah.**

Refresh apabila meaning berubah secara material, contohnya:

- pemikiran semasa user berubah;
- orang, fakta, preference, constraint atau kebimbangan penting menjadi relevan;
- open thread berubah atau selesai;
- context tersimpan menjadi stale;
- user membetulkan AI;
- user meminta melihat atau export state semasa.

Jangan append mini-summary selepas setiap mesej.

> **Current Summary mewakili keadaan semasa, bukan transcript.**

Maklumat baru perlu mengemas kini gambaran semasa, bukan automatik membesarkan packet.

Conversation yang lebih panjang tidak semestinya menghasilkan packet yang lebih besar.

---

## 7. Portable Thread Packet — surface Phase 1

Portable Thread Packet ialah artifact continuity standalone.

Ia dijaga oleh AI. User tidak perlu mengisi borang.

Ini ialah surface Phase 1 yang human-readable, bukan final backend schema.

~~~markdown
# ZASSPILL Thread — [tajuk mudah difahami manusia]

Method: ZASSPILL v0.1.0
State: Standalone continuity packet
Updated: [tarikh/masa jika diketahui]

## WHO
- [hanya orang yang penting kepada thread + relevance minimum]

## WHAT THIS IS ABOUT
[ringkasan cerita manusia]

## WHERE THE THINKING IS NOW
[meaning semasa, bukan sejarah transcript]

## WHAT MATTERS
- [fakta / preference / constraint / kebimbangan relevan]
- [guna wording berhati-hati supaya fikiran tidak menjadi fakta]

## WHAT IS STILL OPEN
- [perkara belum selesai]
- [soalan yang wajar dikembali]

## WHERE THIS CONTEXT CAME FROM
- Sumber: [AI/chat/app/fail jika diketahui]
- Freshness: [state ini berdasarkan apa]
- Lineage: [nota sumber/continuation minimum]

## OPTIONAL HISTORY
[hanya transition yang chronology-nya membantu continuity]
~~~

Tajuk ialah presentation, bukan identity. Phase 1 belum lock format machine ID.

Satu portable packet membawa satu semantic continuity thread.

---

## 8. SAVE dan authority standalone

SAVE bermaksud:

> **simpan current continuity state, bukan transcript conversation.**

Phase 1 belum mempunyai ASC sync.

Jika external persistence tersedia dan write sebenar berjaya, laporkan receipt sebenar.

Jika external persistence tidak tersedia:

- hasilkan portable Thread Packet yang dikemas kini;
- nyatakan dengan jelas bahawa ia ialah packet baru/updated;
- jangan dakwa ia telah disimpan secara external.

Untuk penggunaan standalone, Thread Packet yang sengaja dikekalkan dan dibekalkan oleh user/session ialah current continuity authority.

Output yang hanya dijana tetapi belum dipersist tidak membuktikan external persistence.

Timestamp paling baru sahaja tidak membuktikan authority.

---

## 9. Inspect, correct, exclude

ZASSPILL invisible secara default tetapi boleh diperiksa bila user mahu.

User boleh berkata secara natural:

~~~text
Apa yang kau simpan pasal benda ni?
Tunjukkan context thread ni.
Yang pasal aku nak resign tu salah.
Yang ini jangan simpan.
Buang benda tu daripada context.
~~~

Aturan:

> **User membetulkan meaning; sistem menjaga struktur.**

> **User boleh secara jelas mengecualikan atau membuang continuity context.**

Jangan paksa user edit Markdown.

Jika user membetulkan meaning, kemas kini current state dan jangan simpan tafsiran AI yang salah sebagai current truth yang bersaing.

---

## 10. Privacy dan minimization

WHO membawa hubungan + relevance thread, bukan full identity data.

Jangan masukkan maklumat peribadi yang tidak berkaitan hanya kerana AI/backend mengetahuinya.

> **Jika personal detail tidak diperlukan untuk continuity, jangan bawa.**

> **Portability ialah disclosure boundary.**

> **Memory provider berada di luar boundary packet.**

ZASSPILL tidak menganggap, mengimport atau menyelaraskan personal memory, profile atau private context yang disimpan oleh ChatGPT, Gemini atau provider AI lain kecuali user sengaja membawanya masuk ke semantic thread. Personalization khusus provider boleh wujud serentak, tetapi ia bukan sebahagian daripada portable continuity authority.

Portable packet boleh mengandungi maklumat yang lebih sedikit daripada private authorized backend.

Kekalkan wording tepat user hanya apabila paraphrase boleh mengubah meaning secara material.

---

## 11. Sambung dalam AI lain

Untuk sambung standalone thread dalam AI lain:

1. beri ZASSPILL_MY.md;
2. beri current Thread Packet;
3. cakap secara natural, contohnya: “Sambung thread ini dengan saya.”

AI penerima perlu:

- baca packet sebagai continuity state, bukan final decision record;
- jawab secara natural;
- jangan cuba reconstruct seluruh chat lama;
- refresh hanya bila meaning berubah;
- jaga correction dan beza fakta/fikiran/kebimbangan/tafsiran AI;
- pastikan pengetahuan baru yang ditambah selepas handoff boleh dibezakan daripada context warisan.

> **Pengetahuan baharu bukan context warisan.**

Fakta, anggaran, research atau tafsiran yang ditambah oleh AI penerima selepas handoff mesti kekal boleh dibezakan daripada maklumat yang dibawa dalam Thread Packet.

Loading Thread Packet yang sah sudah imply continuation. Tiada command CONTINUE wajib.

---

## 12. Move-up contextual

ZASSPILL boleh mengesan intent sudah matang, tetapi tidak boleh auto-switch.

Jika user benar-benar mahu memilih:

~~~text
Ini dah mula jadi pilihan sebenar.

[ TERUS DUMP ]   [ DECIDE ]
~~~

Jika user benar-benar mahu membentuk/membina sesuatu:

~~~text
Idea ini dah mula jadi sesuatu yang mahu dibina.

[ TERUS DUMP ]   [ DESIGN ]
~~~

Jangan paparkan ini hanya kerana DECIDE atau DESIGN secara teori boleh digunakan.

Jika user pilih DECIDE, receiving method ialah ZASSELECTION.

Jika user pilih DESIGN, receiving method ialah ZASSIMPLE.

Bawa hanya continuity context yang relevan. Jangan bina matrix, architecture, Action Plan atau tasks di dalam ZASSPILL.

---

## 13. Handoff minimum

Apabila user secara jelas bergerak ke DECIDE atau DESIGN, bawa hanya:

~~~text
thread identity / title
WHO yang relevan
WHERE THE THINKING IS NOW
WHAT MATTERS yang relevan
WHAT IS STILL OPEN yang relevan
source / lineage minimum
optional relevant history
~~~

Receiving method memiliki structured work yang baru.

Continuity context membantu tetapi tidak pre-authorize keputusan atau design.

Apabila structured method memulangkan result, ZASSPILL simpan outcome relevan + lineage sahaja, bukan seluruh internal artifact method.

---

## 14. Ujian proof Phase 1

ZASSPILL v0.1.0 hanya dianggap berjaya apabila ini boleh dibuktikan dalam penggunaan sebenar:

~~~text
AI A
↓
conversation manusia yang serabut
↓
portable Thread Packet
↓
AI B
↓
sambung secara natural tanpa load chat lama
~~~

Ujian mesti semak:

- cerita manusia yang penting kekal;
- fakta tidak direka;
- fikiran/kebimbangan tidak menjadi fakta;
- context stale tidak menguasai;
- personal detail tidak perlu tidak diexport;
- AI penerima boleh sambung tanpa memaksa form atau reconstruct transcript.

Sehingga field test ini lulus, ZASSPILL kekal Phase 1 core proof dan bukan pengganti current global ZASS SYSTEM entry contract.
