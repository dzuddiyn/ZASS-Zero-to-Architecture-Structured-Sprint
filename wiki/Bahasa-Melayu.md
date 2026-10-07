# ZASS — Ringkasan Bahasa Melayu

> **Fikir sekali. Simpan keputusan. Sambung dengan mana-mana AI.**

ZASS ialah lapisan kawalan keputusan untuk kerja yang dibantu AI.

Masalah yang cuba diselesaikan:

```text
tukar chat / tukar AI
        ↓
ulang konteks
        ↓
idea lama muncul semula
        ↓
cadangan AI bercampur dengan keputusan
        ↓
architecture drift
```

ZASS memisahkan:

```text
Cadangan AI
    ≠
Keputusan pemilik
    ≠
Perubahan Git
```

## Mula paling mudah

Kebanyakan projek patut bermula dengan **ZASSIMPLE**.

Cakap seperti biasa.

Bila mahu AI susun perbincangan:

```text
ZASS
```

Bila keputusan sudah jelas:

```text
LOCK DECISION
```

Bila state yang sudah diluluskan mahu disimpan:

```text
COMMIT
```

## Bila guna Full ZASS?

Naik ke Full ZASS apabila:

- keputusan mula saling bergantung;
- evidence / experiment diperlukan;
- architecture mempunyai trade-off penting;
- risiko security, privasi, kos, data loss atau operasi menjadi penting;
- sejarah keputusan susah dijejak melalui chat sahaja.

## Full ZASS v0.3.10

Command utama:

```text
ZASS!!
PROCEED
PIVOT
COMMIT
```

`PROCEED` hanya meluluskan set yang ditunjukkan secara jelas:

```text
PROPOSED FOR PROCEED
- ...
- ...
```

Ia bukan approval kosong untuk semua perkara yang baru dibincangkan.

`PARK` bukan lagi command Full ZASS. `PARKED` masih boleh digunakan sebagai state kerja yang ditangguh.

## Architecture

```text
idea
→ pilihan
→ keputusan
→ LOCKED
→ DRAFT ARCH
→ ARCHITECTURE CHALLENGE
→ revision
→ YA, LOCK PRE-ARCH
→ detailed ACTION PLAN ↔ PRE-ARCH
→ ATOMIC TASK
→ RESULT / EVIDENCE
→ PRE-ARCH REVIEW
→ cukup implementation evidence
→ LAST ARCHITECTURE CHALLENGE
→ final improve / revision
→ BUILD ARCHITECTURE
→ YA, CONFIRM ARCHITECTURE
→ rebuild RELEASE ACTION PLAN
→ release atomic tasks
→ build / test / integrate / harden / verify
→ release acceptance
→ DELIVERED !!
```

## Evidence Confidence

Architecture Readiness dan Evidence Confidence ialah dua perkara berbeza.

```text
Architecture Readiness
= cukup jelas untuk bina architecture?

Evidence Confidence
= sekuat mana andaian/risiko penting disokong bukti?
```

Label Evidence Confidence:

```text
UNVALIDATED
LOW
MEDIUM
HIGH
```

Dalam Full ZASS v0.3.10, Evidence Confidence wajib dipaparkan apabila readiness architecture benar-benar dinilai pada titik yang ditetapkan.

## Source of Truth

Untuk projek Git-backed:

> **GitHub ialah Source of Truth.**

AI lain boleh brainstorm atau challenge.

Satu trusted writer menyimpan perubahan yang sudah diluluskan.

## Baca seterusnya

- [Quick Start](Quick-Start.md)
- [ZASSIMPLE](ZASSIMPLE.md)
- [Full ZASS](Full-ZASS.md)
- [ZASS_MY.md — Full ZASS Bahasa Melayu](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ZASS_MY.md)
- [Architecture & Evidence](Architecture-and-Evidence.md)
- [Architecture-to-Execution](Architecture-to-Execution.md)
- [Cross-AI Handoff](Cross-AI-Handoff.md)
- [Productization & zass check](Productization-and-zass-check.md)
