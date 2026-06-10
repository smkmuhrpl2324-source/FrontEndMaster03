// =========================================
// 1. KONFIGURASI FIREBASE
// =========================================
const firebaseConfig = {
  apiKey: "AIzaSyAP-NQW8h9LMh_EuWeQyGrCTwGJCRA4pT4",
  authDomain: "frontendmaster-dab8d.firebaseapp.com",
  projectId: "frontendmaster-dab8d",
  storageBucket: "frontendmaster-dab8d.firebasestorage.app",
  messagingSenderId: "157276945128",
  appId: "1:157276945128:web:8235086cf59261b4b9675d",
  measurementId: "G-CY4NZ6MRX9"
};

// Inisialisasi Firebase (Hanya jika belum ada)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// =========================================
// 2. LOGIKA UTAMA (DOM CONTENT LOADED)
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- A. TOGGLE MENU MOBILE (HAMBURGER) ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation(); // Mencegah klik tembus ke elemen di bawahnya
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });

        // Tutup menu otomatis saat link navigasi diklik
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                mobileMenu.classList.remove('is-active');
            });
        });

        // Tutup menu jika pengguna mengklik di luar area menu
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
                mobileMenu.classList.remove('is-active');
            }
        });
    }

    // --- B. SCROLL REVEAL ANIMATION ---
    const observerOptions = { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Ambil semua elemen yang punya class reveal
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    // --- C. GOOGLE LOGIN & AUTHENTICATION ---
    const btnLogin = document.getElementById('btn-login');
    const userInfo = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const btnLogout = document.getElementById('btn-logout');

    // Proses Login
    if (btnLogin) {
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault();
            auth.signInWithPopup(provider)
                .then((result) => {
                    console.log("User logged in:", result.user.displayName);
                })
                .catch((error) => {
                    console.error("Login Error:", error.message);
                    alert("Gagal login: " + error.message);
                });
        });
    }

    // Proses Logout
    if (btnLogout) {
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            auth.signOut().then(() => {
                console.log("User signed out");
            });
        });
    }

    // Pantau Perubahan Status Login (Realtime)
    auth.onAuthStateChanged((user) => {
        if (user) {
            // Jika User Login: Sembunyikan tombol login, tampilkan info profil
            if (btnLogin) btnLogin.style.setProperty('display', 'none', 'important');
            if (userInfo) {
                userInfo.style.setProperty('display', 'flex', 'important');
                userInfo.classList.add('active'); // Tambah class active jika perlu
                userName.textContent = user.displayName;
            }
        } else {
            // Jika User Logout: Tampilkan tombol login, sembunyikan info profil
            if (btnLogin) btnLogin.style.setProperty('display', 'flex', 'important');
            if (userInfo) {
                userInfo.style.setProperty('display', 'none', 'important');
                userInfo.classList.remove('active');
            }
        }
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 5px 25px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
    }
});