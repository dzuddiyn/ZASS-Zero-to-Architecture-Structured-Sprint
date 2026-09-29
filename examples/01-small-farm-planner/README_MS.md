# Contoh 01 — Small Farm Planner

**Kaedah:** Full ZASS v0.3.4  
**Jenis:** Fixture pengajaran fiksyen  
**Tujuan:** Menunjukkan aliran penuh idea → keputusan → architecture.

🌐 Bahasa: [English](README.md) | **Bahasa Melayu**

> Ini bukan perisian ladang yang telah divalidasi atau kajian pasaran sebenar. Senario dan keputusan pemilik sengaja dibentuk untuk menunjukkan semantics ZASS dengan jelas.

## Senario

Seorang pembangun solo mempunyai idea untuk planner ringan yang membantu petani kecil melihat tugasan tanaman hari ini melalui telefon Android, termasuk ketika sambungan internet tidak stabil.

Idea awal sengaja kabur:

> “Saya mahu sistem mudah yang membantu petani kecil menjejak kerja tanaman tanpa platform pengurusan ladang yang rumit.”

Contoh ini menunjukkan bagaimana ZASS memisahkan:

- perkara yang benar-benar disebut pemilik;
- tafsiran AI;
- soalan terbuka;
- pilihan yang bersaing;
- cadangan keputusan;
- approval pemilik;
- keputusan LOCKED;
- execution;
- confirmation architecture.

## Fail

| Fail | Fungsi |
|---|---|
| [ZASS.md](ZASS.md) | Authority keputusan dan architecture projek |
| [ACTION_PLAN.md](ACTION_PLAN.md) | Status execution dan kerja/evidence |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Architecture yang disahkan daripada keputusan LOCKED |
| [WALKTHROUGH.md](WALKTHROUGH.md) | Walkthrough manusia dari perbualan hingga architecture |

## Perkara utama

**Cadangan AI bukan keputusan.** AI boleh mencadangkan PWA, native Android atau chat bot, tetapi semuanya kekal calon sehingga diluluskan pemilik.

**PROCEED ialah approval pemilik dalam full ZASS.** ZASS mesti memaparkan set `PROPOSED FOR PROCEED` terlebih dahulu. PROCEED meluluskan tepat item yang disenaraikan; item tersenarai yang ditanda untuk LOCK menjadi LOCKED.

**COMMIT berasingan daripada approval.** Ia menyimpan state yang telah diluluskan ke GitHub.

**Architecture mempunyai gate sendiri.**

    DRAFT ARCH
    → BUILD ARCHITECTURE
    → semakan pemilik
    → YA, CONFIRM ARCHITECTURE
    → ARCHITECTURE CONFIRMED

## Kenapa contoh ini menggunakan full ZASS?

Apabila idea masih sangat awal, ia boleh bermula dalam **ZASSIMPLE**. Full ZASS menjadi berguna apabila pilihan architecture, trade-off dan keputusan saling bergantung mula muncul.

Baca [WALKTHROUGH.md](WALKTHROUGH.md) dahulu, kemudian lihat [ZASS.md](ZASS.md).
