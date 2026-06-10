// =========================================================================
// 1. DATA PETUNJUK DAN KISI-KISI GABUNGAN UTUH TIAP BAGIAN
// =========================================================================
const dataLangkah = {
  1: {
    instruksi:
      "<strong>Langkah 1: Struktur Dasar & Header</strong><br><br>Buat kerangka dokumen HTML lengkap wajib ada <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, dan <code>&lt;body&gt;</code>.<br><br>Di dalam body, buat elemen semantik <code>&lt;header&gt;</code> dan di dalamnya berikan elemen <code>&lt;nav&gt;</code> sebagai wadah navigasi menu.",
    kisiKisi: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>PPDB SMK Hebat</title>
</head>
<body>

    <header>
        <nav>Beranda | Jurusan | Kontak</nav>
    </header>

</body>
</html>`,
  },
  2: {
    instruksi:
      '<strong>Langkah 2: Formulir Pendaftaran (Form & Input)</strong><br><br>Di bawah elemen header, buatlah area utama menggunakan tag <code>&lt;main&gt;</code>. Di dalamnya, buat sebuah formulir menggunakan tag <code>&lt;form id="form-ppdb"&gt;</code>.<br><br>Di dalam form tersebut, tambahkan sebuah input teks untuk nama calon siswa dengan atribut <code>id="input-nama"</code> dan wajib ditambahkan atribut <code>required</code> agar tidak boleh kosong. Terakhir, buat tombol pengirim dengan tag <code>&lt;button type="submit"&gt;Daftar Sekarang&lt;/button&gt;</code>, serta pasang elemen <code>&lt;footer&gt;</code> di bawah elemen main.',
    kisiKisi: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>PPDB SMK Hebat</title>
</head>
<body>

    <header>
        <nav>Beranda | Jurusan | Kontak</nav>
    </header>

    <main style="padding: 40px; text-align: center;">
        <h1>Formulir Pendaftaran PPDB</h1>
        <p>Isi data di bawah ini untuk melakukan pendaftaran.</p>
        
        <form id="form-ppdb" style="max-width: 300px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px;">
            <input type="text" id="input-nama" placeholder="Masukkan Nama Lengkap Anda" required style="padding: 8px;" />
            <button type="submit" style="padding: 10px; cursor: pointer;">Daftar Sekarang</button>
        </form>
    </main>

    <footer>
        <p style="text-align: center;">&copy; 2026 SMK Hebat - Hak Cipta Dilindungi.</p>
    </footer>

</body>
</html>`,
  },
  3: {
    instruksi:
      "<strong>Langkah 3: Menghias Desain (CSS)</strong><br><br>Mari buat tampilan proyek menjadi menarik. Di dalam elemen <code>&lt;head&gt;</code>, buatlah tag <code>&lt;style&gt;</code>.<br><br>Ketikkan aturan CSS di dalamnya untuk mengubah warna latar belakang halaman menggunakan properti <code>background</code> atau <code>background-color</code>.",
    kisiKisi: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>PPDB SMK Hebat</title>
    
    <style>
        body {
            background: #f0fdf4; /* Mengubah latar belakang */
            color: #0f172a;
            font-family: sans-serif;
        }
    </style>
</head>
<body>

    <header>
        <nav>Beranda | Jurusan | Kontak</nav>
    </header>

    <main style="padding: 40px; text-align: center;">
        <h1>Formulir Pendaftaran PPDB</h1>
        <p>Isi data di bawah ini untuk melakukan pendaftaran.</p>
        
        <form id="form-ppdb" style="max-width: 300px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px;">
            <input type="text" id="input-nama" placeholder="Masukkan Nama Lengkap Anda" required style="padding: 8px;" />
            <button type="submit" style="padding: 10px; cursor: pointer;">Daftar Sekarang</button>
        </form>
    </main>

    <footer>
        <p style="text-align: center;">&copy; 2026 SMK Hebat - Hak Cipta Dilindungi.</p>
    </footer>

</body>
</html>`,
  },
  4: {
    instruksi:
      "<strong>Langkah 4: Logika Submit JavaScript</strong><br><br>Buatlah tag <code>&lt;script&gt;</code> tepat sebelum penutup <code>&lt;/body&gt;</code>.<br><br>Gunakan JavaScript untuk menangkap elemen form menggunakan <code>document.getElementById('form-ppdb')</code>, lalu tambahkan event listener <code>'submit'</code>.<br><br>Di dalam fungsi submit, panggil <code>e.preventDefault()</code> untuk mencegah halaman memuat ulang, ambil nilai dari input nama, lalu tampilkan pop-up pesan <code>alert()</code> yang menyertakan variabel nama dengan kalimat penutup <code>Pendaftaran Berhasil!</code>.",
    kisiKisi: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>PPDB SMK Hebat</title>
    <style>
        body { background: #f0fdf4; color: #0f172a; font-family: sans-serif; }
    </style>
</head>
<body>

    <header>
        <nav>Beranda | Jurusan | Kontak</nav>
    </header>

    <main style="padding: 40px; text-align: center;">
        <h1>Formulir Pendaftaran PPDB</h1>
        <p>Isi data di bawah ini untuk melakukan pendaftaran.</p>
        
        <form id="form-ppdb" style="max-width: 300px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px;">
            <input type="text" id="input-nama" placeholder="Masukkan Nama Lengkap Anda" required style="padding: 8px;" />
            <button type="submit" style="padding: 10px; cursor: pointer;">Daftar Sekarang</button>
        </form>
    </main>

    <footer>
        <p style="text-align: center;">&copy; 2026 SMK Hebat - Hak Cipta Dilindungi.</p>
    </footer>

    <script>
        document.getElementById("form-ppdb").addEventListener("submit", function(event) {
            event.preventDefault(); // Mencegah reload halaman
            
            const namaSiswa = document.getElementById("input-nama").value;
            alert("Halo " + namaSiswa + ", Pendaftaran Berhasil!");
        });
    </script>

</body>
</html>`,
  },
};

let langkahAktif = 1;

function gantiLangkah(nomorLangkah) {
  langkahAktif = nomorLangkah;

  const tabs = document.querySelectorAll(".step-tab");
  tabs.forEach((tab, index) => {
    if (index === nomorLangkah - 1) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  document.getElementById("konten-instruksi").innerHTML = dataLangkah[nomorLangkah].instruksi;
  document.getElementById("box-kisi-kisi").textContent = dataLangkah[nomorLangkah].kisiKisi;
  document.getElementById("status-validasi").innerHTML = "";

  const iframe = document.getElementById("frame-preview");
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(`
    <div style="font-family: 'Segoe UI', sans-serif; text-align: center; padding: 40px; color: #64748b;">
      <div style="font-size: 3rem; margin-bottom: 10px;">💻</div>
      <h4 style="margin: 0 0 8px 0; color: #334155;">Workspace Bagian Ke-${nomorLangkah} Siap</h4>
      <p style="font-size: 0.85rem; margin: 0;">Silakan ikuti petunjuk struktur di sebelah kiri, ketik kode di editor, lalu klik tombol <strong>"UJI KODE DAN RENDER PREVIEW"</strong>.</p>
    </div>
  `);
  doc.close();
}

function toggleInstruksi() {
  const boxInstruksi = document.getElementById("konten-instruksi");
  const btnText = document.getElementById("toggle-btn-text");
  const icon = document.getElementById("toggle-icon");

  if (boxInstruksi.style.display === "none") {
    boxInstruksi.style.display = "block";
    btnText.innerText = "Sembunyikan Instruksi";
    icon.className = "fas fa-eye-slash";
  } else {
    boxInstruksi.style.display = "none";
    btnText.innerText = "Tampilkan Instruksi";
    icon.className = "fas fa-eye";
  }
}

window.onload = function () {
  gantiLangkah(1);
};

// =========================================================================
// 3. LOGIKA VALIDASI SUPER TOLERAN (ANTI-ERROR SALAH DETEKSI)
// =========================================================================
function jalankanValidasiProyek() {
  let kodeUser = document.getElementById("kode-user").value;
  const iframe = document.getElementById("frame-preview");
  const statusLabel = document.getElementById("status-validasi");

  let listError = [];

  // Pengecekan Kerangka Dasar menggunakan pola fleksibel (mengabaikan spasi/baris baru)
  const adaDoctype = /<!DOCTYPE\s+html>/i.test(kodeUser);
  const adaHtmlOpen = /<html[^>]*>/i.test(kodeUser);
  const adaHtmlClose = /<\/html>/i.test(kodeUser);
  const adaHeadOpen = /<head[^>]*>/i.test(kodeUser);
  const adaHeadClose = /<\/head>/i.test(kodeUser);
  const adaBodyOpen = /<body[^>]*>/i.test(kodeUser);
  const adaBodyClose = /<\/body>/i.test(kodeUser);

  if (!adaDoctype || !adaHtmlOpen || !adaHtmlClose || !adaHeadOpen || !adaHeadClose || !adaBodyOpen || !adaBodyClose) {
    listError.push("Kerangka dasar dokumen belum lengkap. Pastikan Anda menulis: &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt;, dan &lt;body&gt; beserta penutupnya dengan benar.");
  }

  // VALIDASI STRUKTUR - BAGIAN 1
  if (langkahAktif >= 1) {
    if (!/<header[^>]*>/i.test(kodeUser) || !/<\/header>/i.test(kodeUser)) listError.push("[Bagian 1] Elemen pembungkus &lt;header&gt;&lt;/header&gt; belum dibuat.");
    if (!/<nav[^>]*>/i.test(kodeUser) || !/<\/nav>/i.test(kodeUser)) listError.push("[Bagian 1] Elemen navigasi menu &lt;nav&gt;&lt;/nav&gt; di dalam header belum ditemukan.");
  }

  // VALIDASI STRUKTUR - BAGIAN 2
  if (langkahAktif >= 2) {
    if (!/<main[^>]*>/i.test(kodeUser)) listError.push("[Bagian 2] Elemen area utama &lt;main&gt; belum ditambahkan.");
    if (!/id=["']form-ppdb["']/i.test(kodeUser)) listError.push('[Bagian 2] Elemen &lt;form&gt; dengan atribut id="form-ppdb" tidak ditemukan.');
    if (!/id=["']input-nama["']/i.test(kodeUser)) listError.push('[Bagian 2] Elemen &lt;input&gt; pengisian nama dengan atribut id="input-nama" belum dibuat.');
    if (!/type=["']submit["']/i.test(kodeUser)) listError.push('[Bagian 2] Tombol pengirim formulir harus memiliki atribut type="submit".');
    if (!/<footer[^>]*>/i.test(kodeUser)) listError.push("[Bagian 2] Elemen penutup halaman &lt;footer&gt; belum dibuat.");
  }

  // VALIDASI STRUKTUR - BAGIAN 3
  if (langkahAktif >= 3) {
    if (!/<style[^>]*>/i.test(kodeUser)) {
      listError.push("[Bagian 3] Blok penulisan gaya CSS internal &lt;style&gt; belum disiapkan.");
    } else if (!/background/i.test(kodeUser)) {
      listError.push("[Bagian 3] Aturan CSS Anda belum mengonfigurasi properti 'background'.");
    }
  }

  // VALIDASI STRUKTUR - BAGIAN 4
  if (langkahAktif >= 4) {
    if (!/<script[^>]*>/i.test(kodeUser)) {
      listError.push("[Bagian 4] Tag pemrograman interaktif &lt;script&gt; belum disisipkan.");
    } else {
      if (!/form-ppdb/i.test(kodeUser) || !/submit/i.test(kodeUser)) listError.push("[Bagian 4] Logika JavaScript harus mendengarkan event 'submit' pada 'form-ppdb'.");
      if (!/preventdefault/i.test(kodeUser)) listError.push("[Bagian 4] Pastikan memanggil fungsi e.preventDefault() agar form tidak reload.");
      if (!/input-nama/i.test(kodeUser)) listError.push("[Bagian 4] Ambil nilai teks nama dengan membaca data .value dari id 'input-nama'.");
      if (!/alert\s*\(/i.test(kodeUser) || !/berhasil/i.test(kodeUser)) listError.push("[Bagian 4] Fungsi alert() harus disiapkan untuk memicu pesan 'Berhasil!'.");
    }
  }

  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();

  if (listError.length > 0) {
    statusLabel.innerHTML = "<span style='color: #ef4444;'><i class='fas fa-times-circle'></i> Uji Coba Gagal</span>";

    let htmlLaporanError = `
      <div style="font-family: 'Segoe UI', sans-serif; padding: 25px; background: #fff5f5; border: 3px dashed #f87171; border-radius: 8px; color: #991b1b;">
        <h3 style="margin-top: 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
          <span>🚨</span> Hasil Analisis Kode (Bagian Ke-${langkahAktif})
        </h3>
        <p style="font-size: 0.9rem; color: #7f1d1d;">Sistem mendeteksi kode Anda belum melengkapi kriteria pada instruksi yang diminta:</p>
        <ul style="padding-left: 20px; line-height: 1.6; font-size: 0.85rem; font-weight: 600;">
    `;

    listError.forEach(function (err) {
      htmlLaporanError += `<li style="margin-bottom: 6px;">${err}</li>`;
    });

    htmlLaporanError += `
        </ul>
        <p style="margin-bottom: 0; margin-top: 15px; font-size: 0.8rem; color: #b91c1c; font-style: italic;">💡 Tips: Perbaiki poin di atas atau intip kisi-kisi kode di panel kiri.</p>
      </div>
    `;

    doc.write(htmlLaporanError);
  } else {
    statusLabel.innerHTML = "<span style='color: #22c55e;'><i class='fas fa-check-circle'></i> Bagian " + langkahAktif + " Lolos!</span>";
    doc.write(kodeUser);
  }

  doc.close();
}
