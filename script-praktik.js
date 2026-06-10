/* ======================================================
   1. DATA TUGAS (HTML, CSS, JS)
   ====================================================== */
const materi = {
  html: {
    level1: { judul: "🏗️ Struktur Artikel", deskripsi: "Buatlah judul (h1) dan paragraf (p).", hint: "Gunakan <h1> dan <p>.", default: "<h1>Judul Berita</h1>\n<p>Isi berita...</p>" },
    level2: { judul: "🍴 List Minuman", deskripsi: "Buat daftar (ul) berisi kopi dan teh (li).", hint: "Gunakan <ul> sebagai pembungkus.", default: "<ul>\n  <li>Kopi</li>\n  <li>Teh</li>\n</ul>" },
    level3: { judul: "🖼️ Multimedia", deskripsi: "Tampilkan gambar.", hint: "Gunakan <img src='...'>.", default: "<img src='https://picsum.photos/200'>" },
    level4: { judul: "📊 Tabel Data", deskripsi: "Buat tabel sederhana.", hint: "Struktur: table > tr > td.", default: "<table border='1'>\n  <tr><td>Data</td></tr>\n</table>" },
    level5: { judul: "📝 Form Input", deskripsi: "Buat input email.", hint: "Gunakan <input type='email'>.", default: "<form>\n  <input type='email'>\n</form>" },
  },
  css: {
    level1: { judul: "🎨 Warna Teks", targetHTML: "<h1>Ubah Warna Saya</h1>", hint: "h1 { color: red; }", default: "h1 {\n  color: red;\n}" },
    level2: {
      judul: "📦 Box Model",
      targetHTML: "<div class='box'>Kotak</div>",
      hint: ".box { width: 100px; height: 100px; background: blue; }",
      default: ".box {\n  width: 100px;\n  height: 100px;\n  background: blue;\n  color: white;\n}",
    },
    level3: { judul: "📐 Border Radius", targetHTML: "<img src='https://picsum.photos/200' width='200'>", hint: "img { border-radius: 50%; }", default: "img {\n  border-radius: 50%;\n}" },
    /* FIX FLEXBOX: Memberikan ruang tinggi pada container agar align-items bekerja secara visual */
    level4: {
      judul: "🔀 Flexbox",
      targetHTML: "<div class='flex' style='height: 150px; background: #e2e8f0; border: 2px dashed #cbd5e1; padding: 10px;'><div>1</div><div>2</div></div>",
      hint: ".flex { display: flex; }",
      default: ".flex {\n  display: flex;\n  gap: 10px;\n}",
    },
    level5: { judul: "✨ Hover Effect", targetHTML: "<button class='btn'>Sentuh Saya</button>", hint: ".btn:hover { background: orange; }", default: ".btn:hover {\n  background: orange;\n}" },
  },
  js: {
    level1: { judul: "🚨 Alert Dasar", deskripsi: "Munculkan pesan pop-up.", hint: "alert('Halo');", targetHTML: "<p>Klik jalankan.</p>", default: "alert('Halo Dunia');" },
    level2: {
      judul: "🖱️ Click Event",
      deskripsi: "Ganti isi HTML saat tombol diklik.",
      hint: "onclick='alert(1)'",
      targetHTML: "<div id='app'></div>",
      default: "document.getElementById('app').innerHTML = '<button onclick=\"alert(1)\">Klik</button>';",
    },
    level3: { judul: "🌓 Dark Mode", deskripsi: "Ubah background jadi hitam.", hint: "style.backgroundColor = 'black'", targetHTML: "<h1>Tema Gelap</h1>", default: "document.body.style.backgroundColor = 'black';" },
    level4: { judul: "➕ Kalkulator", deskripsi: "Isi teks id 'hasil' dengan 10 + 5.", hint: ".innerText = 10 + 5;", targetHTML: "<h2>Hasil: <span id='hasil'>?</span></h2>", default: "document.getElementById('hasil').innerText = 10 + 5;" },
    level5: {
      judul: "🎮 Logika If",
      deskripsi: "Cek jika usia > 17.",
      hint: "if(usia > 17)",
      targetHTML: "<div id='status'>...</div>",
      default: "let usia = 20;\nif(usia > 17) {\n  document.getElementById('status').innerText = 'Dewasa';\n}",
    },
  },
};

/* ======================================================
   2. LOGIKA NAVIGASI & START GAME
   ====================================================== */
let kategoriAktif = "html";

function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("main-lab").style.display = "block";
  updateDropdown();
  loadTugas();
}

function pilihKategori(k) {
  kategoriAktif = k;

  const semuaTombol = document.querySelectorAll(".tab-btn");

  /* FIX TYPO: Mengubah semuorTombol menjadi semuaTombol */
  semuaTombol.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.innerText.toLowerCase().includes(k)) {
      btn.classList.add("active");
    }
  });

  updateDropdown();
  loadTugas();
}

function updateDropdown() {
  const dropdown = document.getElementById("level-dropdown");
  dropdown.innerHTML = "";
  Object.keys(materi[kategoriAktif]).forEach((lvl) => {
    let opt = document.createElement("option");
    opt.value = lvl;
    opt.innerText = "Level " + lvl.replace("level", "");
    dropdown.appendChild(opt);
  });
}

function loadTugas() {
  const level = document.getElementById("level-dropdown").value || "level1";
  const data = materi[kategoriAktif][level];

  document.getElementById("judul-tugas").innerText = data.judul;
  document.getElementById("deskripsi-tugas").innerText = data.deskripsi || "Praktikkan kode di editor.";
  document.getElementById("hint-tugas").innerText = data.hint;
  document.getElementById("kode-user").value = data.default;

  const up = document.getElementById("container-upload");
  if (up) up.style.display = kategoriAktif === "html" && level === "level3" ? "flex" : "none";

  resetPreview();
}

function resetPreview() {
  const iframe = document.getElementById("frame-preview").contentWindow.document;
  iframe.open();
  iframe.write("");
  iframe.close();
}

/* ======================================================
   3. SISTEM VALIDASI ERROR (HTML, CSS, JS)
   ====================================================== */
function validasiKode(kode) {
  if (kategoriAktif === "html") {
    const validTags = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "span",
      "div",
      "section",
      "article",
      "aside",
      "header",
      "footer",
      "nav",
      "ul",
      "li",
      "ol",
      "dl",
      "dt",
      "dd",
      "table",
      "tr",
      "td",
      "th",
      "thead",
      "tbody",
      "tfoot",
      "img",
      "video",
      "audio",
      "source",
      "iframe",
      "canvas",
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "option",
      "label",
      "form",
      "fieldset",
      "legend",
      "b",
      "i",
      "strong",
      "em",
      "mark",
      "small",
      "br",
      "hr",
      "code",
      "pre",
      "style",
      "script",
    ];

    const jmlBuka = (kode.match(/</g) || []).length;
    const jmlTutup = (kode.match(/>/g) || []).length;
    if (jmlBuka !== jmlTutup) {
      alert("❌ ERROR HTML: Kurung sudut < > tidak seimbang!\nPeriksa apakah kamu lupa menutup tag dengan '>'");
      return false;
    }

    const selfClosingTags = ["img", "input", "br", "hr"];
    const stack = [];
    const tagRegex = /<\/?([a-z1-6]+)[^>]*>/gi;
    let match;

    while ((match = tagRegex.exec(kode)) !== null) {
      const fullTag = match[0];
      const tagName = match[1].toLowerCase();

      if (selfClosingTags.includes(tagName)) continue;

      if (fullTag.startsWith("</")) {
        if (stack.length === 0 || stack.pop() !== tagName) {
          alert(`❌ ERROR HTML: Tag penutup </${tagName}> tidak memiliki pasangan pembuka, atau urutannya salah!`);
          return false;
        }
      } else if (!fullTag.endsWith("/>")) {
        stack.push(tagName);
      }
    }

    if (stack.length > 0) {
      alert(`❌ ERROR HTML: Tag <${stack[stack.length - 1]}> belum ditutup dengan </${stack[stack.length - 1]}>`);
      return false;
    }
  } else if (kategoriAktif === "css") {
    const b = (kode.match(/{/g) || []).length;
    const t = (kode.match(/}/g) || []).length;

    if (b === 0 && kode.trim().length > 0) {
      alert("❌ ERROR CSS: Kamu belum menuliskan kurung kurawal { }.");
      return false;
    }
    if (b !== t) {
      alert("❌ ERROR CSS: Kurung kurawal { } tidak seimbang. Pastikan setiap '{' ditutup dengan '}'.");
      return false;
    }

    const isiKurung = kode.match(/{([^}]+)}/g);

    if (isiKurung) {
      for (let deklarasi of isiKurung) {
        const bersih = deklarasi.replace(/{|}/g, "").trim();

        if (bersih.length > 0) {
          const baris = bersih.split("\n");
          for (let b of baris) {
            const line = b.trim();
            if (line === "") continue;

            if (line.includes(":") && !line.endsWith(";")) {
              alert(`❌ ERROR CSS: Kurang titik koma (;) pada baris:\n"${line}"\n\nSistem tidak akan menjalankan kode sampai titik koma ditambahkan.`);
              return false;
            }

            if (line.includes(";") && !line.includes(":")) {
              alert(`❌ ERROR CSS: Penulisan properti salah pada:\n"${line}"\n\nFormat yang benar adalah 'properti: nilai;'`);
              return false;
            }
          }
        }
      }
    }

    if (kode.includes("{}")) {
      alert("⚠️ PERINGATAN CSS: Ada selector yang kosong (tidak punya isi properti).");
    }
  } else if (kategoriAktif === "js") {
    const pairs = {
      "(": (kode.match(/\(/g) || []).length === (kode.match(/\)/g) || []).length,
      "{": (kode.match(/{/g) || []).length === (kode.match(/}/g) || []).length,
      "[": (kode.match(/\[/g) || []).length === (kode.match(/\]/g) || []).length,
    };

    if (!pairs["("]) {
      alert("❌ ERROR JS: Tanda kurung ( ) tidak seimbang. Periksa kembali fungsi atau operator kamu.");
      return false;
    }
    if (!pairs["{"]) {
      alert("❌ ERROR JS: Kurung kurawal { } tidak seimbang. Pastikan blok kode tertutup.");
      return false;
    }

    const quotes = (kode.match(/['"`]/g) || []).length;
    if (quotes % 2 !== 0) {
      alert("❌ ERROR JS: Tanda kutip tidak berpasangan. Pastikan semua teks diapit dua tanda kutip.");
      return false;
    }

    try {
      new Function(kode);
    } catch (e) {
      alert(`❌ ERROR JS (Syntax): ${e.message}\n\nPeriksa kembali penulisan variabel atau simbol kamu.`);
      return false;
    }

    const lines = kode.split("\n").filter((l) => l.trim().length > 0);
    for (let line of lines) {
      const l = line.trim();
      if (!l.endsWith(";") && !l.endsWith("{") && !l.endsWith("}") && !l.startsWith("if") && !l.startsWith("for") && !l.startsWith("while")) {
        alert(`❌ ERROR JS: Kamu lupa titik koma (;) di akhir baris:\n"${l}"\n\nKetikkan ";" untuk dapat menjalankan kode.`);
        return false;
      }
    }
  }

  return true;
}

/* ======================================================
   4. UPDATE LIVE PREVIEW & RUNTIME ERROR
   ====================================================== */
function updateLivePreview() {
  const editor = document.getElementById("kode-user");
  const kode = editor.value;
  const level = document.getElementById("level-dropdown").value || "level1";
  const iframe = document.getElementById("frame-preview").contentWindow.document;

  iframe.open();
  iframe.write("");
  iframe.close();

  if (!validasiKode(kode)) return;

  iframe.open();
  if (kategoriAktif === "html") {
    iframe.write(kode);
  } else if (kategoriAktif === "css") {
    const target = materi.css[level].targetHTML;
    iframe.write(`<style>body{padding:20px;font-family:sans-serif;}${kode}</style>${target}`);
  } else if (kategoriAktif === "js") {
    const target = materi.js[level].targetHTML;
    iframe.write(`${target}<script>try { ${kode} } catch (err) { parent.alert("❌ JS ERROR: " + err.message); }</script>`);
  }
  iframe.close();
}

/* ======================================================
   5. FITUR UPLOAD GAMBAR (DENGAN LOADING)
   ====================================================== */
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const btnJalankan = document.getElementById("btn-jalankan");
  const editor = document.getElementById("kode-user");
  const reader = new FileReader();

  const teksAsli = btnJalankan.innerText;
  btnJalankan.innerText = "⏳ SEDANG MENGUPLOAD...";
  btnJalankan.style.background = "#64748b";
  btnJalankan.disabled = true;

  reader.onload = function (e) {
    const base64Image = e.target.result;

    setTimeout(() => {
      editor.value = `<img src="${base64Image}" style="max-width: 100%;">`;

      btnJalankan.innerText = teksAsli;
      btnJalankan.style.background = "#22c55e";
      btnJalankan.disabled = false;

      alert("✅ Gambar berhasil dimuat ke editor! Sekarang klik tombol 'Jalankan Kode'.");
    }, 100);
  };

  reader.onerror = function () {
    alert("❌ Gagal membaca file gambar.");
    btnJalankan.innerText = teksAsli;
    btnJalankan.disabled = false;
  };

  reader.readAsDataURL(file);
}

/* ======================================================
   6. INISIALISASI EVENT LISTENERS
   ====================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const btnStart = document.getElementById("btn-start");
  if (btnStart) btnStart.onclick = startGame;

  const btnJalankan = document.getElementById("btn-jalankan");
  if (btnJalankan) btnJalankan.onclick = updateLivePreview;

  const dropLevel = document.getElementById("level-dropdown");
  if (dropLevel) dropLevel.onchange = loadTugas;

  const inputGambar = document.getElementById("input-gambar");
  if (inputGambar) inputGambar.onchange = handleImageUpload;

  updateDropdown();
  loadTugas();
});
