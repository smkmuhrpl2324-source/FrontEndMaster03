/**
 * script-html.js
 * HTML-Penjelasan HTML dengan bahasa yang mudah untuk siswa
 */

function renderPenjelasanSimpel() {
  const container = document.getElementById("technical-doc-container");

  const dataMateri = {
    judul: "Bagaimana Web Bekerja? (Analogi Rumah)",
    cerita: "Bayangkan kamu sedang membangun sebuah rumah. Agar tukang bangunan tahu apa yang harus dilakukan, kamu memberikan coretan rencana:",
    poin: [
      {
        judul: "1. HTML adalah Kerangkanya",
        isi: "HTML itu seperti pondasi dan tiang-tiang rumah. Dia menentukan di mana letak pintu, jendela, dan atap. Tapi, rumahnya masih polos, belum dicat.",
      },
      {
        judul: "2. Browser adalah Tukangnya",
        isi: "Saat kamu membuat file .html, browser (seperti Chrome atau Edge) bertugas membaca instruksi kamu. Dia melihat kode <code>&lt;h1&gt;</code> dan berkata: 'Oh, ini judul besar, saya taruh di paling atas!'",
      },
      {
        judul: "3. Tag adalah Perintahnya",
        isi: "Tanda <code>&lt;</code> dan <code>&gt;</code> adalah cara kita 'mengurung' teks agar komputer tahu itu perintah. Tanpa kurung itu, komputer cuma menganggapnya tulisan biasa.",
      },
    ],
    pesan: "Jadi, belajar HTML itu cuma belajar cara memberi instruksi yang benar ke komputer!",
  };

  const content = `
        <div style="background: #ffffff; border: 2px solid #2563eb; padding: 25px; border-radius: 12px; margin-top: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); animation: fadeIn 0.5s;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="color: #2563eb; margin: 0;">🏠 Penjelasan</h3>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #64748b; color: white; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer;">Tutup</button>
            </div>
            
            <p style="margin-top: 15px; color: #4b5563;">${dataMateri.cerita}</p>
            
            <div style="margin: 20px 0;">
                ${dataMateri.poin
                  .map(
                    (item) => `
                    <div style="margin-bottom: 15px;">
                        <strong style="display: block; color: #1e3a8a;">${item.judul}</strong>
                        <p style="font-size: 0.95rem; color: #374151;">${item.isi}</p>
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; border: 1px solid #bbf7d0; color: #166534;">
                <strong>💡 Intinya:</strong> ${dataMateri.pesan}
            </div>
        </div>
    `;

  container.innerHTML = content;
  container.scrollIntoView({ behavior: "smooth", block: "center" });
}

/**
 * HTML-Fungsi untuk merender penjelasan BAB 2: Formatting Teks
 */
function renderPenjelasanTeks() {
  const container = document.getElementById("formatting-doc-container");

  const dataMateri = {
    judul: "Seni Menghias Tulisan di HTML",
    cerita: "Kadang kita ingin teks kita terlihat tebal, miring, atau seperti distabilo. Inilah caranya:",
    poin: [
      {
        judul: "1. Membuat Teks Tebal (Strong)",
        isi: "Gunakan tag <code>&lt;strong&gt;</code>. Selain membuat tulisan jadi tebal, ini memberitahu komputer bahwa kata tersebut sangat penting.",
      },
      {
        judul: "2. Membuat Teks Miring (Emphasis)",
        isi: "Gunakan tag <code>&lt;em&gt;</code>. Biasanya digunakan untuk istilah asing atau kata yang ingin ditekankan nadanya.",
      },
      {
        judul: "3. Garis Baru (Break)",
        isi: "Jika ingin pindah baris tanpa membuat paragraf baru, gunakan tag <code>&lt;br&gt;</code>. Tag ini unik karena tidak perlu penutup.",
      },
    ],
    pesan: "Ingat! Jangan gunakan tag Heading (h1) hanya karena ingin tulisan tebal. Gunakan tag formatting yang sesuai ya!",
  };

  const content = `
        <div style="background: #ffffff; border: 2px solid #22c55e; padding: 25px; border-radius: 12px; margin-top: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); animation: slideDown 0.5s;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="color: #166534; margin: 0;">📝 Penjelasan</h3>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #64748b; color: white; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer;">Tutup</button>
            </div>
            
            <p style="margin-top: 15px; color: #4b5563;">${dataMateri.cerita}</p>
            
            <div style="margin: 20px 0;">
                ${dataMateri.poin
                  .map(
                    (item) => `
                    <div style="margin-bottom: 15px;">
                        <strong style="display: block; color: #14532d;">${item.judul}</strong>
                        <p style="font-size: 0.95rem; color: #374151;">${item.isi}</p>
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <div style="background: #fffbeb; padding: 15px; border-radius: 8px; border: 1px solid #fef3c7; color: #92400e;">
                <strong>💡 Tips Guru:</strong> ${dataMateri.pesan}
            </div>
        </div>
    `;

  container.innerHTML = content;
  container.scrollIntoView({ behavior: "smooth", block: "center" });
}

/**
 * HTML-Fungsi untuk merender penjelasan BAB 3: Media & Multimedia
 */
function renderPenjelasanMedia() {
  const container = document.getElementById("media-doc-container");

  const dataMateri = {
    judul: "Mengenal Media di Website",
    cerita: "Memasukkan gambar atau video itu seperti memberikan alamat kepada kurir. Jika alamatnya salah, media tidak akan muncul!",
    poin: [
      {
        judul: "1. Apa itu 'src'?",
        isi: "<code>src</code> adalah singkatan dari <i>Source</i> (Sumber). Ini adalah 'alamat' di mana file gambar atau video kamu disimpan. Bisa di folder yang sama, atau link dari internet.",
      },
      {
        judul: "2. Pentingnya 'alt' pada Gambar",
        isi: "<code>alt</code> adalah teks cadangan. Jika internet lemot dan gambar gagal muncul, teks ini yang akan dibaca orang. Ini juga membantu teman-teman tuna netra memahami gambar lewat suara komputer.",
      },
      {
        judul: "3. Atribut 'controls'",
        isi: "Saat memasang video atau audio, jangan lupa tambahkan kata <code>controls</code> agar tombol Play, Pause, dan Volume muncul secara otomatis.",
      },
    ],
    pesan: "Tips: Gunakan format gambar yang ringan seperti .jpg atau .png agar website kamu tidak berat saat dibuka di HP!",
  };

  const content = `
        <div style="background: #ffffff; border: 2px solid #e11d48; padding: 25px; border-radius: 12px; margin-top: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); animation: fadeIn 0.5s;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="color: #e11d48; margin: 0;">🎬 Penjelasan</h3>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #64748b; color: white; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer;">Tutup</button>
            </div>
            
            <p style="margin-top: 15px; color: #4b5563;">${dataMateri.cerita}</p>
            
            <div style="margin: 20px 0;">
                ${dataMateri.poin
                  .map(
                    (item) => `
                    <div style="margin-bottom: 15px;">
                        <strong style="display: block; color: #881337;">${item.judul}</strong>
                        <p style="font-size: 0.95rem; color: #374151;">${item.isi}</p>
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <div style="background: #fff1f2; padding: 15px; border-radius: 8px; border: 1px solid #fecdd3; color: #9f1239;">
                <strong>💡 Ingat:</strong> ${dataMateri.pesan}
            </div>
        </div>
    `;

  container.innerHTML = content;
  container.scrollIntoView({ behavior: "smooth", block: "center" });
}

/**
 *HTML-Fungsi untuk merender penjelasan BAB 4: Tabel & List
 */
function renderPenjelasanTabel() {
  const container = document.getElementById("table-doc-container");

  const dataMateri = {
    judul: "Mengatur Data Agar Rapi",
    cerita: "Membuat tabel dan list itu seperti menyusun rak buku. Kita harus tahu di mana meletakkan barisnya agar isinya tidak tumpah.",
    poin: [
      {
        judul: "1. List: UL vs OL",
        isi: "Ingat saja: <b>UL</b> = <i>Unordered</i> (Urutan tidak penting/pakai simbol). <b>OL</b> = <i>Ordered</i> (Urutan penting/pakai angka 1, 2, 3).",
      },
      {
        judul: "2. Tabel: TR dan TD",
        isi: "Agar tidak bingung: <b>TR</b> (<i>Table Row</i>) adalah barisnya (mendatar). <b>TD</b> (<i>Table Data</i>) adalah kotak kecil di dalam baris tersebut.",
      },
      {
        judul: "3. Tag TH (Table Head)",
        isi: "Gunakan <code>&lt;th&gt;</code> sebagai ganti <code>&lt;td&gt;</code> untuk baris paling atas. Hasilnya tulisan otomatis jadi tebal, cocok untuk judul kolom.",
      },
    ],
    pesan: "Tips: Jangan gunakan tabel untuk mengatur tata letak (layout) website. Gunakan tabel hanya untuk data yang memang butuh baris dan kolom!",
  };

  const content = `
        <div style="background: #ffffff; border: 2px solid #eab308; padding: 25px; border-radius: 12px; margin-top: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); animation: fadeIn 0.5s;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="color: #854d0e; margin: 0;">📊 Penjelasan</h3>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #64748b; color: white; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer;">Tutup</button>
            </div>
            
            <p style="margin-top: 15px; color: #4b5563;">${dataMateri.cerita}</p>
            
            <div style="margin: 20px 0;">
                ${dataMateri.poin
                  .map(
                    (item) => `
                    <div style="margin-bottom: 15px;">
                        <strong style="display: block; color: #713f12;">${item.judul}</strong>
                        <p style="font-size: 0.95rem; color: #374151;">${item.isi}</p>
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <div style="background: #fefce8; padding: 15px; border-radius: 8px; border: 1px solid #fef08a; color: #854d0e;">
                <strong>💡 Catatan:</strong> ${dataMateri.pesan}
            </div>
        </div>
    `;

  container.innerHTML = content;
  container.scrollIntoView({ behavior: "smooth", block: "center" });
}

/**
 * HTML-Fungsi untuk merender penjelasan BAB 5: Form & Input
 */
function renderPenjelasanForm() {
  const container = document.getElementById("form-doc-container");

  const dataMateri = {
    judul: "Cara Membuat Form yang Pintar",
    cerita: "Membuat form itu seperti membuat formulir pendaftaran sekolah. Kita harus memberikan label yang jelas agar orang tidak salah isi.",
    poin: [
      {
        judul: "1. Type Text vs Password",
        isi: "Gunakan <code>type='text'</code> untuk input biasa. Tapi untuk sandi, wajib pakai <code>type='password'</code> agar ketikan berubah jadi titik-titik (demi keamanan!).",
      },
      {
        judul: "2. Apa itu Placeholder?",
        isi: "<code>placeholder</code> adalah tulisan bayangan di dalam kotak input. Gunanya untuk memberi petunjuk ke user tanpa harus mengetik label yang panjang.",
      },
      {
        judul: "3. Atribut Required",
        isi: "Jika kamu ingin sebuah kotak wajib diisi (tidak boleh kosong), cukup tambahkan kata <code>required</code> di dalam tag inputnya.",
      },
    ],
    pesan: "Penting: Selalu gunakan tag <label> untuk menjelaskan setiap input, agar website kamu mudah diakses oleh semua orang!",
  };

  const content = `
        <div style="background: #ffffff; border: 2px solid #0ea5e9; padding: 25px; border-radius: 12px; margin-top: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); animation: fadeIn 0.5s;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="color: #0369a1; margin: 0;">⌨️ Penjelasan</h3>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #64748b; color: white; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer;">Tutup</button>
            </div>
            
            <p style="margin-top: 15px; color: #4b5563;">${dataMateri.cerita}</p>
            
            <div style="margin: 20px 0;">
                ${dataMateri.poin
                  .map(
                    (item) => `
                    <div style="margin-bottom: 15px;">
                        <strong style="display: block; color: #0c4a6e;">${item.judul}</strong>
                        <p style="font-size: 0.95rem; color: #374151;">${item.isi}</p>
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border: 1px solid #bae6fd; color: #0369a1;">
                <strong>💡 Rahasia:</strong> ${dataMateri.pesan}
            </div>
        </div>
    `;

  container.innerHTML = content;
  container.scrollIntoView({ behavior: "smooth", block: "center" });
}

/**
 * HTML-Fungsi untuk merender penjelasan BAB 6: Semantik
 */
function renderPenjelasanSemantik() {
  const container = document.getElementById("semantic-doc-container");

  const dataMateri = {
    judul: "Analogi Surat Kabar (Koran) dalam HTML5",
    cerita: "Bayangkan kamu sedang membaca koran. Tanpa melihat isinya, kamu sudah tahu di mana letak nama koran, berita utama, dan iklan sampingan karena strukturnya jelas.",
    poin: [
      { t: "tag header", d: "Ibarat 'Nama Koran' dan 'Edisi'. Berisi identitas utama agar pembaca tahu mereka sedang membuka website apa." },
      { t: "tag nav", d: "Ibarat 'Daftar Isi'. Memandu pembaca untuk melompat ke halaman Olahraga, Ekonomi, atau Hiburan dengan cepat." },
      { t: "tag main", d: "Ibarat 'Berita Utama'. Bagian paling penting yang dicari orang. Dalam satu halaman, hanya boleh ada satu <main>." },
      { t: "tag aside", d: "Ibarat 'Kolom Iklan' atau 'Berita Populer' di pinggir. Isinya tambahan dan tidak berhubungan langsung dengan berita utama." },
      { t: "tag footer", d: "Ibarat 'Info Redaksi' di bagian paling bawah koran. Berisi alamat kantor, nomor telepon, dan info hak cipta." },
    ],
  };

  const htmlContent = `
        <div style="background: #ffffff; border: 2px solid #a855f7; border-radius: 15px; padding: 25px; margin-top: 25px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); font-family: 'Segoe UI', sans-serif; text-align: left; color: #1e293b;">
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="color: #7e22ce; margin: 0; font-size: 1.25rem;">🗞️ Penjelasan</h3>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #64748b; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">Tutup</button>
            </div>
            
            <p style="margin-bottom: 20px; color: #475569; font-size: 0.95rem; line-height: 1.5; background: #f3f4f6; padding: 10px; border-radius: 8px;">${dataMateri.cerita}</p>
            
            <div style="display: flex; flex-direction: column; gap: 12px;">
                ${dataMateri.poin
                  .map(
                    (item, index) => `
                    <div style="border-left: 4px solid #9333ea; background: #faf5ff; padding: 12px 15px; border-radius: 0 10px 10px 0;">
                        <span style="color: #7e22ce; font-weight: bold; font-size: 1rem; display: block;">
                            ${item.t}
                        </span>
                        <span style="color: #334155; font-size: 0.9rem;">
                            ${item.d}
                        </span>
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <div style="margin-top: 20px; padding: 15px; background: #fff7ed; border-radius: 10px; border: 1px solid #fed7aa; color: #9a3412; font-size: 0.85rem;">
                <strong>📌 Mengapa Google suka ini?</strong> Karena Google (seperti pembaca koran) ingin langsung tahu mana berita utamanya tanpa harus bingung mencari di antara ribuan kode <code>&lt;div&gt;</code>.
            </div>
        </div>
    `;

  container.innerHTML = htmlContent;
  container.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Fungsi untuk mendeteksi elemen saat scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1, // Animasi jalan saat 10% bagian elemen muncul di layar
  },
);

// Pilih semua elemen dengan class reveal
const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach((el) => observer.observe(el));
