# ZASS — Zero-to-Architecture Structured Sprint

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
