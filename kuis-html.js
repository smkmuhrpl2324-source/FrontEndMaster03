// --- KONFIGURASI ---
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxiCEWM4DVf3PUpE5FXv6AAn_5yKQUaJb2g_xhCqlmFqamYcaC_U67H3uQNTPovA49AtA/exec";

// Daftar 10 Soal HOTS HTML
const questions = [
  {
    text: "Sebuah artikel berita memiliki judul utama, nama penulis, dan isi konten. Manakah struktur semantik yang paling tepat untuk meningkatkan SEO?",
    options: ["<section> untuk membungkus semuanya", "<article> berisi <header> (judul & penulis) dan isi konten", "<div> dengan class='article' agar mudah diatur CSS", "<main> untuk setiap artikel yang muncul di halaman"],
    correct: 1,
    explanation: "Menggunakan <article> secara semantik menandakan konten mandiri, dan <header> di dalamnya membantu mesin pencari memahami struktur hierarki informasi artikel tersebut.",
  },
  {
    text: "Anda ingin menyisipkan gambar dekoratif yang tidak menambah informasi penting bagi pembaca layar (screen reader). Atribut 'alt' mana yang terbaik?",
    options: ["alt='gambar dekoratif'", "alt=''", "Tidak perlu menuliskan atribut alt sama sekali", "alt='logo-hiasan.png'"],
    correct: 1,
    explanation: "alt='' (kosong) memberi tahu screen reader untuk melewati gambar tersebut. Jika atribut alt dihapus, screen reader justru akan membacakan nama file gambarnya.",
  },
  {
    text: "Manakah perbedaan mendasar antara tag <section> dan <div> dalam HTML5?",
    options: [
      "<section> memiliki margin otomatis, <div> tidak",
      "<section> bermakna tematik (bagian dari konten), <div> hanya kontainer generik",
      "<section> khusus untuk sidebar, <div> untuk konten utama",
      "Tidak ada perbedaan, keduanya hanya untuk pengelompokan CSS",
    ],
    correct: 1,
    explanation: "<section> adalah elemen semantik untuk mengelompokkan konten yang berkaitan secara tema, sedangkan <div> tidak memiliki arti apa pun (hanya untuk styling).",
  },
  {
    text: "Dalam form input, mengapa penggunaan tag <label> dengan atribut 'for' sangat krusial meskipun tanpa CSS tampilannya sama saja?",
    options: ["Agar data input otomatis tersimpan di database", "Hanya untuk validasi HTML agar tidak error", "Meningkatkan aksesibilitas (klik label akan fokus ke input) dan membantu screen reader", "Mempercepat loading halaman web"],
    correct: 2,
    explanation: "Atribut 'for' menghubungkan label ke ID input. Ini memungkinkan pengguna mengklik teks label untuk mengaktifkan input, sangat membantu bagi pengguna dengan motorik terbatas.",
  },
  {
    text: "Seorang developer menuliskan <a href='#'>Klik Disini</a> untuk sebuah tombol fungsi JavaScript. Apa dampak buruk dari praktik ini?",
    options: ["Link tidak akan berfungsi di browser lama", "Buruk bagi aksesibilitas dan menyebabkan halaman 'lompat' ke atas saat diklik", "Membuat ukuran file HTML menjadi jauh lebih besar", "Menyebabkan error pada eksekusi JavaScript"],
    correct: 1,
    explanation: "Tag <a> adalah untuk navigasi. Jika digunakan untuk tombol trigger JS dengan href='#', browser akan mencoba kembali ke atas halaman. Sebaiknya gunakan tag <button>.",
  },
  {
    text: "Kapan waktu yang paling tepat menggunakan elemen <aside>?",
    options: [
      "Setiap kali ingin membuat sidebar di sebelah kiri halaman",
      "Untuk konten yang berkaitan secara tidak langsung dengan konten utama (seperti iklan atau kutipan)",
      "Untuk membungkus navigasi utama (menu)",
      "Untuk meletakkan informasi hak cipta di bagian bawah",
    ],
    correct: 1,
    explanation: "<aside> digunakan untuk konten pendukung atau informasi tambahan yang jika dihapus tidak merusak alur informasi utama.",
  },
  {
    text: "Manakah urutan hierarki heading yang benar sesuai standar aksesibilitas jika halaman memiliki judul utama dan dua sub-topik?",
    options: ["<h1>, <h3>, <h3>", "<h1>, <h2>, <h2>", "<h2>, <h3>, <h3>", "<h1>, <h2>, <h3>"],
    correct: 1,
    explanation: "Hierarki harus berurutan. Judul utama <h1> diikuti oleh sub-topik level berikutnya yaitu <h2>. Jangan melompati level (seperti h1 langsung ke h3).",
  },
  {
    text: "Tag <iframe> sering digunakan untuk menyisipkan konten eksternal. Apa risiko keamanan terbesar jika tidak menggunakan atribut 'sandbox'?",
    options: [
      "Loading halaman menjadi sangat lambat",
      "Konten luar dapat menjalankan script berbahaya atau mengalihkan halaman utama (clickjacking)",
      "Warna website akan berubah mengikuti website luar",
      "Iframe tidak akan muncul di perangkat mobile",
    ],
    correct: 1,
    explanation: "Atribut 'sandbox' membatasi kemampuan konten di dalam iframe untuk menjalankan script atau mengakses cookie halaman utama Anda.",
  },
  {
    text: "Dalam pembuatan tabel data yang kompleks, apa fungsi atribut 'scope' pada elemen <th>?",
    options: ["Menentukan warna latar belakang sel", "Membantu screen reader memahami apakah sel header berlaku untuk baris atau kolom", "Menyatukan dua sel menjadi satu bagian", "Mengatur lebar kolom secara otomatis"],
    correct: 1,
    explanation: "Atribut scope='col' atau scope='row' sangat membantu tunanetra mengetahui data di sel tersebut merujuk pada judul baris atau kolom yang mana.",
  },
  {
    text: "Penggunaan tag <meta name='viewport' content='width=device-width, initial-scale=1.0'> bertujuan untuk...",
    options: [
      "Menentukan judul website di hasil pencarian Google",
      "Memastikan website tampil proporsional dan tidak 'zoom out' di perangkat mobile",
      "Menghubungkan file HTML dengan file CSS eksternal",
      "Menyimpan data cache website agar loading lebih cepat",
    ],
    correct: 1,
    explanation: "Tanpa tag ini, browser mobile akan merender halaman pada lebar desktop standar dan mengecilkannya (zoom out), sehingga teks menjadi sangat kecil dan sulit dibaca.",
  },
];

let currentQuestion = 0;
let score = 0;
let correctCount = 0;
let startTime;
let timerInterval;

// Inisialisasi Lucide Icons
lucide.createIcons();

// --- LOGIKA FORM LOGIN ---
document.getElementById("student-form").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("screen-form").classList.add("hidden");
  document.getElementById("screen-quiz").classList.remove("hidden");
  startTime = new Date();
  startTimer();
  showQuestion();
};

// --- LOGIKA TIMER ---
function startTimer() {
  timerInterval = setInterval(() => {
    let diff = Math.floor((new Date() - startTime) / 1000);
    let m = Math.floor(diff / 60)
      .toString()
      .padStart(2, "0");
    let s = (diff % 60).toString().padStart(2, "0");
    document.getElementById("timer-text").innerText = `${m}:${s}`;
  }, 1000);
}

// --- TAMPILKAN SOAL ---
function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("q-counter").innerText = `Soal ${currentQuestion + 1}/${questions.length}`;
  document.getElementById("q-text").innerText = q.text;
  document.getElementById("explanation-box").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");

  const optionsContainer = document.getElementById("q-options");
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i, btn);
    optionsContainer.appendChild(btn);
  });
}

// --- CEK JAWABAN ---
function checkAnswer(idx, clickedBtn) {
  const q = questions[currentQuestion];
  const allBtns = document.querySelectorAll(".option-btn");
  const explBox = document.getElementById("explanation-box");
  const explIcon = document.getElementById("expl-icon");
  const explTitle = document.getElementById("expl-title");
  const explText = document.getElementById("expl-text");

  // Kunci semua tombol agar tidak bisa klik ulang
  allBtns.forEach((b) => (b.disabled = true));

  let isCorrect = idx === q.correct;

  if (isCorrect) {
    // JIKA BENAR: Tampilkan hijau, beri skor, dan tampilkan penjelasan
    clickedBtn.classList.add("correct-answer");
    score += 100 / questions.length;
    correctCount++;

    explBox.classList.remove("hidden");
    explIcon.innerHTML = `<i data-lucide="check-circle" class="text-emerald-400 w-6"></i>`;
    explTitle.innerText = "Jawaban Kamu Benar!";
    explTitle.className = "font-bold text-emerald-400 mb-1";
    explText.innerText = q.explanation; // Tampilkan penjelasan hanya jika benar
  } else {
    // JIKA SALAH: Hanya tandai tombol yang diklik dengan warna merah
    clickedBtn.classList.add("wrong-answer");

    // Tampilkan box status tanpa memberitahu jawaban benar & tanpa explanation
    explBox.classList.remove("hidden");
    explIcon.innerHTML = `<i data-lucide="x-circle" class="text-red-400 w-6"></i>`;
    explTitle.innerText = "Oops, Jawaban Belum Tepat!";
    explTitle.className = "font-bold text-red-400 mb-1";
    explText.innerText = "Pelajari lagi materinya dan coba lebih teliti di soal berikutnya.";
    // Teks di atas menggantikan isi q.explanation agar jawaban benar tetap rahasia
  }

  lucide.createIcons();
  document.getElementById("next-btn").classList.remove("hidden");
}

// --- NAVIGASI NEXT ---
document.getElementById("next-btn").onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
};

// --- SELESAI & KIRIM DATA ---
async function finishQuiz() {
  clearInterval(timerInterval);
  document.getElementById("screen-quiz").classList.add("hidden");
  document.getElementById("screen-result").classList.remove("hidden");

  const finalScore = Math.round(score);
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const waktu = document.getElementById("timer-text").innerText;

  document.getElementById("result-name").innerText = `${nama} • ${kelas}`;
  document.getElementById("result-score").innerText = finalScore;

  try {
    // Mode POST dengan format text/plain agar menghindari isu CORS di Apps Script
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ nama, kelas, skor: finalScore, waktu, benar: correctCount, materi: "HTML" }),
    });
    document.getElementById("save-status").innerHTML = `<i data-lucide="check-circle" class="text-emerald-400 w-4"></i> Berhasil disimpan!`;
  } catch (e) {
    document.getElementById("save-status").innerText = "⚠️ Gagal mengirim data.";
  }
  lucide.createIcons();
}
