/**
 * Penjelasan Detail Bab 1: Filosofi CSS
 */
function renderCSSIntro() {
  const container = document.getElementById("css-intro-container");
  const html = `
        <div style="background: #f1f5f9; border-left: 5px solid #2563eb; padding: 20px; margin-top: 15px; border-radius: 0 10px 10px 0;">
            <h4 style="margin-top:0;">💡 Mengapa CSS Cascading (Bertingkat)?</h4>
            <p>Kata 'Cascading' berarti jika ada dua aturan yang berbenturan, browser akan memilih yang paling spesifik atau yang paling bawah. 
            Contoh: Jika kamu bilang semua teks berwarna hitam, tapi di bawahnya kamu bilang paragraf berwarna biru, maka paragraf akan jadi biru.</p>
            <button onclick="this.parentElement.remove()" style="cursor:pointer">Tutup</button>
        </div>
    `;
  container.innerHTML = html;
}

/**
 * Penjelasan Detail Bab 3: Analogi Jaket
 */
function renderBoxModel() {
  const container = document.getElementById("box-model-container");
  const html = `
        <div style="background: #fff7ed; border-left: 5px solid #ea580c; padding: 20px; margin-top: 15px; border-radius: 0 10px 10px 0;">
            <h4 style="margin-top:0;">🧥 Analogi Pakaian</h4>
            <ul>
                <li><b>Content:</b> Tubuh Anda.</li>
                <li><b>Padding:</b> Jaket tebal (jarak antara kulit dan kain luar).</li>
                <li><b>Border:</b> Permukaan luar jaket.</li>
                <li><b>Margin:</b> Jarak aman agar tidak bersenggolan dengan orang lain di antrean.</li>
            </ul>
            <button onclick="this.parentElement.remove()" style="cursor:pointer">Tutup</button>
        </div>
    `;
  container.innerHTML = html;
}

/**
 * Penjelasan Detail Bab 4: Tips Tipografi
 */
function renderTypography() {
  const container = document.getElementById("typography-container");
  const html = `
        <div style="background: #f0fdf4; border-left: 5px solid #22c55e; padding: 20px; margin-top: 15px; border-radius: 0 10px 10px 0;">
            <h4 style="margin-top:0;">✍️ Tips Keterbacaan</h4>
            <p>1. Gunakan <b>Sans-serif</b> (Arial, Roboto) untuk layar digital karena lebih mudah dibaca.</p>
            <p>2. Atur <b>line-height</b> minimal 1.5 agar mata tidak cepat lelah membaca baris teks yang rapat.</p>
            <button onclick="this.parentElement.remove()" style="cursor:pointer">Tutup</button>
        </div>
    `;
  container.innerHTML = html;
}

/**
 * Penjelasan Detail Bab 5: Flexbox
 */
function renderFlexbox() {
  const container = document.getElementById("flexbox-container");
  const html = `
        <div style="background: #faf5ff; border-left: 5px solid #a855f7; padding: 20px; margin-top: 15px; border-radius: 0 10px 10px 0;">
            <h4 style="margin-top:0;">👫 Analogi Baris Antrean</h4>
            <p>Bayangkan Anda adalah ketua barisan. Dengan Flexbox, Anda bisa berteriak:</p>
            <p><i>"Semua kumpul di tengah!"</i> (center), <i>"Kasih jarak yang sama antar orang!"</i> (space-around), atau <i>"Berbaris tegak ke bawah!"</i> (column).</p>
            <button onclick="this.parentElement.remove()" style="cursor:pointer">Tutup</button>
        </div>
    `;
  container.innerHTML = html;
}

/**
 * Penjelasan Detail Bab 6: Breakpoints
 */
function renderResponsive() {
  const container = document.getElementById("responsive-container");
  const html = `
        <div style="background: #fff1f2; border-left: 5px solid #e11d48; padding: 20px; margin-top: 15px; border-radius: 0 10px 10px 0;">
            <h4 style="margin-top:0;">📐 Apa itu Breakpoint?</h4>
            <p>Breakpoint adalah titik angka (pixel) di mana tampilan web berubah. Umumnya:</p>
            <ul>
                <li><b>600px:</b> Untuk HP.</li>
                <li><b>768px:</b> Untuk Tablet.</li>
                <li><b>1024px:</b> Untuk Desktop/Laptop.</li>
            </ul>
            <button onclick="this.parentElement.remove()" style="cursor:pointer">Tutup</button>
        </div>
    `;
  container.innerHTML = html;
}

/**
 * Master Script for CSS Course
 */

function expandDetail(type) {
  const containerIntro = document.getElementById("detail-intro");
  const containerBox = document.getElementById("detail-box");

  if (type === "intro") {
    containerIntro.innerHTML = `
            <div style="background: #f8fafc; border: 2px solid #2563eb; padding: 25px; border-radius: 12px; margin-top: 20px; animation: slideIn 0.4s ease;">
                <h4 style="margin-top:0; color:#1e40af;">🔍 Mengapa Urutan CSS Penting?</h4>
                <p>Browser membaca CSS dari <b>Atas ke Bawah</b>. Jika ada dua kode:</p>
                <code style="display:block; background:#e2e8f0; padding:10px; border-radius:5px;">
                    p { color: red; }<br>
                    p { color: blue; }
                </code>
                <p>Maka teks akan berwarna <b>Biru</b> karena kode terakhir yang menang. Inilah yang disebut "Cascading".</p>
                <button onclick="this.parentElement.remove()" style="padding:5px 10px; cursor:pointer;">Tutup</button>
            </div>
        `;
    containerIntro.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (type === "box") {
    containerBox.innerHTML = `
            <div style="background: #fff7ed; border: 2px solid #ea580c; padding: 25px; border-radius: 12px; margin-top: 20px; animation: slideIn 0.4s ease;">
                <h4 style="margin-top:0; color:#9a3412;">📏 Detail Perbedaan Margin & Padding</h4>
                <table style="width:100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #fdba74;">
                        <th style="text-align:left; padding:10px;">Fitur</th>
                        <th style="text-align:left; padding:10px;">Padding</th>
                        <th style="text-align:left; padding:10px;">Margin</th>
                    </tr>
                    <tr>
                        <td style="padding:10px;">Letak</td>
                        <td style="padding:10px;">Di DALAM garis tepi (border)</td>
                        <td style="padding:10px;">Di LUAR garis tepi (border)</td>
                    </tr>
                    <tr>
                        <td style="padding:10px;">Warna</td>
                        <td style="padding:10px;">Ikut warna background elemen</td>
                        <td style="padding:10px;">Selalu transparan</td>
                    </tr>
                </table>
                <p style="font-size:0.9rem; margin-top:15px;"><i>Gunakan Padding untuk memberi nafas pada teks, gunakan Margin untuk menjauhkan kotak satu dengan kotak lainnya.</i></p>
                <button onclick="this.parentElement.remove()" style="padding:5px 10px; cursor:pointer;">Tutup</button>
            </div>
        `;
    containerBox.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
