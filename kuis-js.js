// --- KONFIGURASI ---
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxiCEWM4DVf3PUpE5FXv6AAn_5yKQUaJb2g_xhCqlmFqamYcaC_U67H3uQNTPovA49AtA/exec";

// Daftar 10 Soal HOTS JavaScript
const questions = [
  {
    text: "Diberikan kode: let x = '5' + 5; let y = '5' - 5; Apa hasil nilai x dan y secara berturut-turut?",
    options: ["10 dan 0", "'55' dan 0", "'55' dan NaN", "Error karena tipe data berbeda"],
    correct: 1,
    explanation: "Operator '+' pada string mengakibatkan konkatenasi ('55'), sedangkan operator '-' memaksa string menjadi angka sehingga terjadi operasi matematika (0).",
  },
  {
    text: "Manakah cara yang paling tepat dan efisien untuk mengambil elemen <div id='main'> menggunakan JavaScript modern?",
    options: ["document.getElementsByTagName('div')", "document.getElementById('main')", "document.querySelector('#main')", "Semua benar, tetapi querySelector paling fleksibel"],
    correct: 2,
    explanation: "querySelector('#main') adalah metode modern yang sangat fleksibel karena mendukung selector CSS yang kompleks.",
  },
  {
    text: "Apa perbedaan utama antara variabel yang dideklarasikan dengan 'const' dan 'let'?",
    options: [
      "'const' tidak bisa diubah nilainya sama sekali, 'let' bisa",
      "'let' bersifat global, 'const' bersifat lokal",
      "'const' mengharuskan inisialisasi nilai saat deklarasi, 'let' tidak harus",
      "'const' hanya untuk angka, 'let' untuk string",
    ],
    correct: 2,
    explanation: "Variabel 'const' harus langsung diberi nilai (inisialisasi) dan nilainya tidak dapat di-reassign (diisi ulang), berbeda dengan 'let'.",
  },
  {
    text: "Mengapa penggunaan '===' lebih disarankan daripada '==' dalam pembandingan di JavaScript?",
    options: ["'===' lebih cepat performanya", "'===' membandingkan nilai saja tanpa tipe data", "'===' membandingkan nilai sekaligus tipe data secara ketat", "'==' sudah tidak didukung di browser modern"],
    correct: 2,
    explanation: "Strict equality (===) memastikan kedua data memiliki tipe yang sama, mencegah perilaku aneh akibat konversi tipe data otomatis (type coercion).",
  },
  {
    text: "Sebuah fungsi didefinisikan sebagai: const greet = name => `Hello ${name}`; Ini merupakan contoh dari...",
    options: ["Function Declaration", "Arrow Function", "Anonymous Function", "Method"],
    correct: 1,
    explanation: "Ini adalah Arrow Function, sintaks ringkas yang diperkenalkan di ES6 untuk menulis fungsi.",
  },
  {
    text: "Bagaimana cara menghentikan eksekusi sebuah fungsi dan mengembalikan nilai tertentu ke pemanggilnya?",
    options: ["Menggunakan kata kunci stop", "Menggunakan kata kunci return", "Menggunakan break", "Menggunakan exit()"],
    correct: 1,
    explanation: "Kata kunci 'return' berfungsi untuk mengembalikan nilai dan seketika mengakhiri eksekusi fungsi tersebut.",
  },
  {
    text: "Apa hasil dari console.log(typeof []) di JavaScript?",
    options: ["'array'", "'list'", "'object'", "'undefined'"],
    correct: 2,
    explanation: "Di JavaScript, secara teknis Array adalah tipe data khusus yang berbasis 'object'.",
  },
  {
    text: "Method DOM manakah yang digunakan untuk mendengarkan sebuah kejadian (seperti klik tombol) pada suatu elemen?",
    options: ["element.onClick()", "element.listenEvent()", "element.addEventListener()", "element.trigger()"],
    correct: 2,
    explanation: "addEventListener() adalah cara standar untuk menangani event tanpa menimpa handler event lainnya.",
  },
  {
    text: "Diberikan array: const fruits = ['apel', 'mangga']. Manakah cara menambahkan 'jeruk' ke akhir array?",
    options: ["fruits.add('jeruk')", "fruits.push('jeruk')", "fruits.append('jeruk')", "fruits[end] = 'jeruk'"],
    correct: 1,
    explanation: "Method .push() digunakan untuk menambahkan satu atau lebih elemen ke posisi paling akhir dari sebuah array.",
  },
  {
    text: "Apa fungsi dari perintah 'JSON.stringify()'?",
    options: ["Mengubah string menjadi object JavaScript", "Mengubah object JavaScript menjadi format string JSON", "Menghapus data JSON dari memori", "Mengirim data langsung ke database"],
    correct: 1,
    explanation: "stringify digunakan untuk mengonversi data object/array menjadi format teks string agar bisa dikirim melalui jaringan (API) atau disimpan.",
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

  allBtns.forEach((b) => (b.disabled = true));

  let isCorrect = idx === q.correct;

  if (isCorrect) {
    clickedBtn.classList.add("correct-answer");
    score += 100 / questions.length;
    correctCount++;

    explBox.classList.remove("hidden");
    // Menggunakan warna Amber/Yellow (identitas JS) sebagai pengganti Emerald
    explIcon.innerHTML = `<i data-lucide="check-circle" class="text-yellow-400 w-6"></i>`;
    explTitle.innerText = "Jawaban Kamu Benar!";
    explTitle.className = "font-bold text-yellow-400 mb-1";
    explText.innerText = q.explanation;
  } else {
    clickedBtn.classList.add("wrong-answer");
    explBox.classList.remove("hidden");
    explIcon.innerHTML = `<i data-lucide="x-circle" class="text-red-400 w-6"></i>`;
    explTitle.innerText = "Oops, Jawaban Belum Tepat!";
    explTitle.className = "font-bold text-red-400 mb-1";
    explText.innerText = "Pelajari lagi logika JavaScript-nya dan coba lebih teliti di soal berikutnya.";
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
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      // MATERI DIUBAH MENJADI JS
      body: JSON.stringify({ nama, kelas, skor: finalScore, waktu, benar: correctCount, materi: "JS" }),
    });
    document.getElementById("save-status").innerHTML = `<i data-lucide="check-circle" class="text-yellow-400 w-4"></i> Berhasil disimpan!`;
  } catch (e) {
    document.getElementById("save-status").innerText = "⚠️ Gagal mengirim data.";
  }
  lucide.createIcons();
}
