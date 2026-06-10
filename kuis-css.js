// --- KONFIGURASI ---
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxiCEWM4DVf3PUpE5FXv6AAn_5yKQUaJb2g_xhCqlmFqamYcaC_U67H3uQNTPovA49AtA/exec";

// Daftar 10 Soal HOTS CSS
const questions = [
  {
    text: "Sebuah elemen <div> memiliki inline style color:red, ID selector color:blue, dan class selector color:green. Warna apa yang akan muncul pada teks?",
    options: ["Merah (Red)", "Biru (Blue)", "Hijau (Green)", "Hitam (Default)"],
    correct: 0,
    explanation: "Inline style memiliki spesifisitas tertinggi dibandingkan ID, Class, maupun Element selector.",
  },
  {
    text: "Anda mengatur width: 200px, padding: 20px, dan border: 5px pada sebuah elemen. Jika menggunakan 'box-sizing: border-box', berapa lebar total elemen tersebut?",
    options: ["250px", "225px", "200px", "150px"],
    correct: 2,
    explanation: "Dengan 'border-box', padding dan border dimasukkan ke dalam perhitungan width, sehingga lebar total tetap sesuai nilai width yang ditentukan (200px).",
  },
  {
    text: "Manakah cara terbaik untuk membuat sebuah elemen benar-benar berada di tengah (vertikal & horizontal) di dalam kontainer menggunakan Flexbox?",
    options: ["text-align: center; vertical-align: middle;", "justify-content: center; align-items: center; display: flex;", "margin: auto; display: block;", "position: absolute; top: 50%; left: 50%;"],
    correct: 1,
    explanation: "Kombinasi justify-content (horizontal) dan align-items (vertikal) pada kontainer 'display: flex' adalah standar modern untuk centering.",
  },
  {
    text: "Apa perbedaan utama antara unit 'em' dan 'rem' dalam penentuan ukuran font?",
    options: ["'em' relatif terhadap parent elemen, 'rem' relatif terhadap root (html)", "'em' untuk mobile, 'rem' untuk desktop", "'em' bersifat absolut, 'rem' bersifat relatif", "Tidak ada perbedaan, keduanya berfungsi sama"],
    correct: 0,
    explanation: "'rem' (Root EM) selalu mengacu pada ukuran font pada elemen <html>, sehingga lebih mudah dikontrol untuk desain responsif yang konsisten.",
  },
  {
    text: "Seorang developer ingin mengubah warna link yang sudah pernah dikunjungi oleh pengguna. Selector pseudo-class mana yang harus digunakan?",
    options: [":hover", ":active", ":visited", ":focus"],
    correct: 2,
    explanation: "Pseudo-class ':visited' khusus digunakan untuk memberikan gaya pada link yang riwayatnya sudah ada di browser pengguna.",
  },
  {
    text: "Dalam CSS Grid, apa fungsi dari 'grid-template-areas'?",
    options: [
      "Menghitung otomatis jumlah kolom yang dibutuhkan",
      "Membuat layout visual dengan mereferensikan nama area yang diberikan pada elemen anak",
      "Mengatur jarak antar sel dalam grid",
      "Menentukan warna latar belakang area tertentu",
    ],
    correct: 1,
    explanation: "Grid-template-areas memungkinkan kita mendesain layout secara visual menggunakan kata kunci nama area, yang membuat kode lebih mudah dibaca.",
  },
  {
    text: "Anda memberikan properti 'position: absolute' pada sebuah elemen. Agar elemen tersebut posisinya relatif terhadap kontainer induknya, apa yang harus diberikan pada induk tersebut?",
    options: ["position: static", "position: relative", "display: block", "float: left"],
    correct: 1,
    explanation: "Elemen 'absolute' akan mencari induk terdekat yang memiliki posisi selain 'static'. Properti 'relative' pada induk adalah cara yang paling umum.",
  },
  {
    text: "Properti CSS mana yang paling efektif digunakan untuk mengoptimalkan performa animasi (seperti pergerakan elemen) agar diproses oleh GPU?",
    options: ["margin-left", "left / top", "transform: translate()", "width / height"],
    correct: 2,
    explanation: "Transform tidak memicu 'reflow' atau 'repaint' pada layout utama, sehingga animasi jauh lebih halus karena diproses oleh hardware acceleration (GPU).",
  },
  {
    text: "Apa dampak dari penggunaan selector universal (*) secara berlebihan dalam file CSS yang besar?",
    options: ["Mempercepat loading website", "Dapat memperlambat waktu rendering browser karena harus mengecek setiap elemen", "Memperbaiki semua bug tampilan secara otomatis", "Meningkatkan skor SEO di mesin pencari"],
    correct: 1,
    explanation: "Selector '*' memaksa browser menghitung gaya untuk setiap elemen di halaman, yang bisa menurunkan performa pada halaman web yang sangat kompleks.",
  },
  {
    text: "Bagaimana cara membuat teks di dalam elemen <div> tidak keluar (overflow) dan otomatis berubah menjadi titik-titik (...) jika terlalu panjang?",
    options: ["overflow: hidden; white-space: nowrap; text-overflow: ellipsis;", "display: none;", "word-wrap: break-word;", "text-align: justify;"],
    correct: 0,
    explanation: "Kombinasi tiga properti tersebut wajib digunakan untuk memotong teks secara rapi dengan indikator ellipsis (...).",
  },
];

let currentQuestion = 0;
let score = 0;
let correctCount = 0;
let startTime;
let timerInterval;

lucide.createIcons();

document.getElementById("student-form").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("screen-form").classList.add("hidden");
  document.getElementById("screen-quiz").classList.remove("hidden");
  startTime = new Date();
  startTimer();
  showQuestion();
};

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

function checkAnswer(idx, clickedBtn) {
  const q = questions[currentQuestion];
  const allBtns = document.querySelectorAll(".option-btn");
  const explBox = document.getElementById("explanation-box");
  const explIcon = document.getElementById("expl-icon");
  const explTitle = document.getElementById("expl-title");
  const explText = document.getElementById("expl-text");

  allBtns.forEach((b) => (b.disabled = true));

  let isCorrect = idx === q.correct;

  if (isCorrect) {
    clickedBtn.classList.add("correct-answer");
    score += 100 / questions.length;
    correctCount++;

    explBox.classList.remove("hidden");
    explIcon.innerHTML = `<i data-lucide="check-circle" class="text-sky-400 w-6"></i>`;
    explTitle.innerText = "Jawaban Kamu Benar!";
    explTitle.className = "font-bold text-sky-400 mb-1";
    explText.innerText = q.explanation;
  } else {
    clickedBtn.classList.add("wrong-answer");
    explBox.classList.remove("hidden");
    explIcon.innerHTML = `<i data-lucide="x-circle" class="text-red-400 w-6"></i>`;
    explTitle.innerText = "Oops, Jawaban Belum Tepat!";
    explTitle.className = "font-bold text-red-400 mb-1";
    explText.innerText = "Pelajari lagi konsep CSS ini dan coba lebih teliti di soal berikutnya.";
  }

  lucide.createIcons();
  document.getElementById("next-btn").classList.remove("hidden");
}

document.getElementById("next-btn").onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
};

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
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      // DI SINI MATERI DIUBAH MENJADI CSS
      body: JSON.stringify({ nama, kelas, skor: finalScore, waktu, benar: correctCount, materi: "CSS" }),
    });
    document.getElementById("save-status").innerHTML = `<i data-lucide="check-circle" class="text-sky-400 w-4"></i> Berhasil disimpan!`;
  } catch (e) {
    document.getElementById("save-status").innerText = "⚠️ Gagal mengirim data.";
  }
  lucide.createIcons();
}
