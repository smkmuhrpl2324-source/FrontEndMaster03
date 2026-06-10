/**
 * JavaScript Learning Logic
 */

function expandJS(type) {
  const detailVar = document.getElementById("detail-var");
  const detailIf = document.getElementById("detail-if");
  const detailDom = document.getElementById("detail-dom");

  if (type === "var") {
    detailVar.innerHTML = `
            <div style="background: #fffbe6; border: 2px solid #f7df1e; padding: 20px; border-radius: 10px; margin-top: 15px; animation: fadeIn 0.4s;">
                <h4>📦 Kotak vs Lem Besi</h4>
                <p><b>let:</b> Seperti kotak kardus. Isinya bisa kamu buka dan ganti kapan saja.</p>
                <p><b>const:</b> Seperti barang yang dilem besi ke lantai. Sekali dipasang, nilainya tidak bisa diubah-ubah lagi.</p>
                <button onclick="this.parentElement.remove()">Tutup</button>
            </div>
        `;
  }

  if (type === "if") {
    detailIf.innerHTML = `
            <div style="background: #f0fdf4; border: 2px solid #22c55e; padding: 20px; border-radius: 10px; margin-top: 15px; animation: fadeIn 0.4s;">
                <h4>🚦 Analogi Lampu Lalu Lintas</h4>
                <p>Jika (Lampu == "Hijau") maka "Jalan".</p>
                <p>Jika (Lampu == "Kuning") maka "Hati-hati".</p>
                <p>Selain itu (Lampu == "Merah") maka "Berhenti".</p>
                <p><i>Komputer membaca kondisi ini satu per satu dari atas ke bawah.</i></p>
                <button onclick="this.parentElement.remove()">Tutup</button>
            </div>
        `;
  }

  if (type === "dom") {
    detailDom.innerHTML = `
            <div style="background: #eff6ff; border: 2px solid #2563eb; padding: 20px; border-radius: 10px; margin-top: 15px; animation: fadeIn 0.4s;">
                <h4>🏗️ Menghubungkan JS ke HTML</h4>
                <p>DOM (Document Object Model) adalah cara JavaScript "melihat" struktur HTML sebagai sebuah pohon keluarga.</p>
                <p>Dengan DOM, JS bisa: 
                    <ul>
                        <li>Menambah/menghapus teks.</li>
                        <li>Mengubah warna CSS secara otomatis.</li>
                        <li>Menghapus elemen saat tombol 'Delete' diklik.</li>
                    </ul>
                </p>
                <button onclick="this.parentElement.remove()">Tutup</button>
            </div>
        `;
  }
}

/**
 * Lanjutan Logic Penjelasan JavaScript
 */

function expandJS(type) {
  // Ambil semua container detail
  const detailFunc = document.getElementById("detail-func");
  const detailEvent = document.getElementById("detail-event");
  // ... container sebelumnya (var, if, dom) tetap ada ...
  // 1. Tentukan target container berdasarkan tipe
  let containerId = "";
  let title = "";
  let content = "";
  let bgColor = "";

  if (type === "func") {
    detailFunc.innerHTML = `
            <div style="background: #faf5ff; border: 2px solid #a855f7; padding: 20px; border-radius: 12px; margin-top: 15px; animation: fadeIn 0.4s;">
                <h4 style="margin-top:0; color: #6b21a8;">🥤 Analogi Mesin Jus</h4>
                <p>Function itu seperti mesin jus:</p>
                <ul>
                    <li><b>Input (Parameter):</b> Buah Jeruk.</li>
                    <li><b>Proses (Isi Fungsi):</b> Mesin memeras dan menyaring.</li>
                    <li><b>Output (Return):</b> Segelas air jeruk.</li>
                </ul>
                <p>Kamu cukup buat satu mesin, lalu bisa masukkan buah apa saja kapan pun kamu mau!</p>
                <button onclick="this.parentElement.remove()" style="cursor:pointer">Tutup</button>
            </div>
        `;
  }

  if (type === "event") {
    detailEvent.innerHTML = `
            <div style="background: #fff1f2; border: 2px solid #e11d48; padding: 20px; border-radius: 12px; margin-top: 15px; animation: fadeIn 0.4s;">
                <h4 style="margin-top:0; color: #9f1239;">🚨 Analogi Alarm Rumah</h4>
                <p>Event Listener bekerja seperti sensor keamanan:</p>
                <p>1. <b>Target:</b> Pintu Rumah (Elemen HTML).<br>
                   2. <b>Event:</b> Ada yang mencoba membuka (Klik).<br>
                   3. <b>Action:</b> Bunyikan sirine (Jalankan Fungsi).</p>
                <p>Tanpa Event Listener, tombol di web hanyalah gambar mati yang tidak bisa melakukan apa-apa.</p>
                <button onclick="this.parentElement.remove()" style="cursor:pointer">Tutup</button>
            </div>
        `;
  }

  // Tambahkan kondisi ini di dalam function expandJS(type)

  if (type === "datatype") {
    const target = document.getElementById("detail-datatype");
    target.innerHTML = `
        <div style="background: #faf5ff; border: 2px solid #a855f7; padding: 25px; border-radius: 12px; margin-top: 15px; animation: fadeIn 0.4s;">
            <h4 style="margin-top:0; color: #6b21a8;">📚 Tipe Data Kompleks</h4>
            
            <div style="margin-bottom: 15px;">
                <strong style="color: #7e22ce;">1. Array (Daftar Antrean)</strong>
                <p style="font-size: 0.9rem;">Digunakan untuk menyimpan banyak data dalam satu variabel. Ditandai dengan kurung siku <code>[ ]</code>.</p>
                <code style="display:block; background:#f3e8ff; padding:8px; border-radius:5px;">
                    let siswa = ["Andi", "Budi", "Caca"];
                </code>
            </div>

            <div style="margin-bottom: 15px;">
                <strong style="color: #7e22ce;">2. Object (Identitas Lengkap)</strong>
                <p style="font-size: 0.9rem;">Digunakan untuk menyimpan data yang memiliki label (properti). Ditandai dengan kurung kurawal <code>{ }</code>.</p>
                <code style="display:block; background:#f3e8ff; padding:8px; border-radius:5px;">
                    let mobil = { merek: "Toyota", warna: "Hitam" };
                </code>
            </div>

            <p style="font-size: 0.85rem; color: #6b7280; font-style: italic;">
                Tips: Gunakan <b>typeof</b> untuk mengecek tipe data di console. Contoh: <code>console.log(typeof 10);</code>
            </p>
            <button onclick="this.parentElement.remove()" style="cursor:pointer; padding: 5px 12px;">Tutup</button>
        </div>
    `;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (type === "dom_action") {
    const target = document.getElementById("detail-dom-action");
    target.innerHTML = `
        <div style="background: #f0f9ff; border: 2px solid #0ea5e9; padding: 25px; border-radius: 12px; margin-top: 15px; animation: slideIn 0.4s;">
            <h4 style="margin-top:0; color: #0369a1;">🛠️ Alur Kerja Manipulasi DOM</h4>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid #bae6fd;">
                    <small><b>Input (HTML):</b></small><br>
                    <code>&lt;p id="teks"&gt;Halo&lt;/p&gt;</code>
                </div>
                <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid #bae6fd;">
                    <small><b>Proses (JS):</b></small><br>
                    <code>el.style.color = "blue"</code>
                </div>
            </div>

            <p style="font-size: 0.9rem;"><b>Kenapa ini penting?</b></p>
            <ul style="font-size: 0.85rem; padding-left: 20px;">
                <li>Membuat fitur <b>Dark Mode</b> (mengubah warna seluruh halaman).</li>
                <li>Membuat <b>Validasi Form</b> (memunculkan pesan merah jika password salah).</li>
                <li>Membuat <b>Animasi</b> sederhana saat elemen diklik.</li>
            </ul>

            <div style="background: #e0f2fe; padding: 10px; border-radius: 5px; border-left: 4px solid #0ea5e9; font-size: 0.85rem;">
                ⚠️ <b>Peringatan:</b> JavaScript hanya bisa memanipulasi elemen yang <u>sudah muncul</u> di HTML. Jika script diletakkan di atas tag HTML, JS tidak akan menemukan elemennya!
            </div>
            
            <button onclick="this.parentElement.remove()" style="margin-top: 15px; cursor:pointer;">Tutup Penjelasan</button>
        </div>
    `;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  // Tambahkan kondisi ini di dalam function expandJS(type)

  if (type === "event_easy") {
    const target = document.getElementById("detail-event-easy");
    target.innerHTML = `
        <div style="background: #fff1f2; border: 2px solid #e11d48; padding: 25px; border-radius: 12px; margin-top: 15px; animation: popIn 0.4s ease-out;">
            <h4 style="margin-top:0; color: #9f1239;">🍎 Contoh Kejadian Nyata</h4>
            
            <table style="width: 100%; font-size: 0.9rem; border-collapse: collapse; margin-bottom: 15px;">
                <tr style="background: #fb7185; color: white;">
                    <th style="padding: 8px;">Situasi</th>
                    <th style="padding: 8px;">Event</th>
                    <th style="padding: 8px;">Hasil (Action)</th>
                </tr>
                <tr style="border-bottom: 1px solid #fecdd3;">
                    <td style="padding: 8px;">Tombol Like</td>
                    <td style="padding: 8px;"><code>click</code></td>
                    <td style="padding: 8px;">Ikon jadi Merah</td>
                </tr>
                <tr style="border-bottom: 1px solid #fecdd3;">
                    <td style="padding: 8px;">Kotak Password</td>
                    <td style="padding: 8px;"><code>keyup</code></td>
                    <td style="padding: 8px;">Cek panjang sandi</td>
                </tr>
                <tr>
                    <td style="padding: 8px;">Menu Navigasi</td>
                    <td style="padding: 8px;"><code>mouseover</code></td>
                    <td style="padding: 8px;">Muncul dropdown</td>
                </tr>
            </table>

            

            <p style="font-size: 0.85rem; color: #4b5563; background: white; padding: 10px; border-radius: 8px;">
                💡 <b>Ingat:</b> Tanpa <code>addEventListener</code>, website kita hanyalah "poster mati". Kita butuh ini agar user bisa berkomunikasi dengan sistem.
            </p>
            
            <button onclick="this.parentElement.remove()" style="margin-top: 10px; padding: 8px 15px; background: #9f1239; color: white; border: none; border-radius: 5px; cursor: pointer;">Tutup Simulasi</button>
        </div>
    `;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (type === "var") {
    containerId = "detail-var";
    title = "📦 Kotak vs Lem Besi";
    bgColor = "#fffbe6";
    content = `
            <p><b>let:</b> Seperti kotak kardus. Isinya bisa kamu buka dan ganti kapan saja.</p>
            <p><b>const:</b> Seperti barang yang dilem besi. Sekali dipasang, nilainya tidak bisa diubah.</p>`;
  } else if (type === "if") {
    containerId = "detail-if";
    title = "🚦 Analogi Lampu Lalu Lintas";
    bgColor = "#f0fdf4";
    content = `
            <p>Jika (Hijau) -> Jalan. Jika (Kuning) -> Hati-hati. Jika (Merah) -> Berhenti.</p>
            <p>JavaScript mengecek kondisi ini satu per satu!</p>`;
  } else if (type === "dom") {
    containerId = "detail-dom";
    title = "🏗️ Cara Kerja DOM";
    bgColor = "#eff6ff";
    content = `
            <p>DOM adalah jembatan. JavaScript menggunakan DOM untuk 'menangkap' elemen HTML dan mengubah warnanya, teksnya, atau menghapusnya.</p>`;
  }

  if (type === "demo_project") {
    const target = document.getElementById("detail-demo-project");
    target.innerHTML = `
        <div style="background: #27272a; color: white; padding: 30px; border-radius: 15px; margin-top: 20px; text-align: center; animation: zoomIn 0.3s ease;">
            <h4 style="color: #f7df1e; margin-top: 0;">🔦 Demo Saklar Digital</h4>
            
            <div id="lampu-visual" style="width: 80px; height: 80px; background: #444; margin: 20px auto; border-radius: 50%; border: 4px solid #666; transition: 0.3s;"></div>
            
            <p id="status-teks" style="color: #a1a1aa;">Status: MATI</p>
            
            <button id="btn-demo" style="background: #f7df1e; border: none; padding: 10px 20px; border-radius: 5px; font-weight: bold; cursor: pointer;">TEKAN SAKLAR</button>

            <div style="margin-top: 20px; text-align: left; font-size: 0.85rem; border-top: 1px solid #444; padding-top: 15px;">
                <p>🟢 <b>Yang Terjadi di Balik Layar:</b></p>
                <ol>
                    <li>Browser mendeteksi <code>click</code> pada tombol.</li>
                    <li>JS memeriksa variabel <code>let status</code>.</li>
                    <li>JS mengubah <code>style.backgroundColor</code> si bulat menjadi kuning.</li>
                </ol>
            </div>
            
            <button onclick="this.parentElement.remove()" style="margin-top: 15px; background: transparent; color: #666; border: 1px solid #666; cursor: pointer;">Tutup Demo</button>
        </div>
    `;

    // Menambahkan Logika Demo Langsung (Tanpa perlu refresh)
    const btnDemo = document.getElementById("btn-demo");
    const visual = document.getElementById("lampu-visual");
    const teks = document.getElementById("status-teks");
    let isOn = false;

    btnDemo.addEventListener("click", () => {
      isOn = !isOn; // Membalikkan nilai boolean
      if (isOn) {
        visual.style.backgroundColor = "#f7df1e";
        visual.style.boxShadow = "0 0 30px #f7df1e";
        teks.innerText = "Status: NYALA";
        teks.style.color = "#f7df1e";
      } else {
        visual.style.backgroundColor = "#444";
        visual.style.boxShadow = "none";
        teks.innerText = "Status: MATI";
        teks.style.color = "#a1a1aa";
      }
    });
  }

  // 2. Render ke HTML
  const target = document.getElementById(containerId);
  if (target) {
    target.innerHTML = `
            <div style="background: ${bgColor}; border: 2px solid gold; padding: 20px; border-radius: 10px; margin-top: 15px; position: relative; animation: fadeIn 0.3s;">
                <h4 style="margin-top:0;">${title}</h4>
                ${content}
                <button onclick="this.parentElement.remove()" style="margin-top:10px; cursor:pointer;">Tutup</button>
            </div>
        `;
    // Scroll otomatis agar penjelasan terlihat
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    console.error("Target container " + containerId + " tidak ditemukan!");
  }
}
