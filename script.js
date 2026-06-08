// === 1. KONFIGURASI FIREBASE ===
const firebaseConfig = {
    apiKey: "AIzaSyAhqtWWz8nFEqJ6Tu8uuoMrBJsn_xwjB-Q",
    authDomain: "exambroypkkp.firebaseapp.com",
    databaseURL: "https://exambroypkkp-default-rtdb.asia-southeast1.firebasedatabase.app", 
    projectId: "exambroypkkp",
    storageBucket: "exambroypkkp.firebasestorage.app",
    messagingSenderId: "503584110015",
    appId: "1:503584110015:web:ef038b13eb6d053b0b1d0a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// === 2. DATABASE JADWAL UJIAN PSAJ 2026 ===
const databaseUjian = [
    // KELAS 7
    { tingkat: ["7A", "7B", "7C"], mapel: "PAI-BP", link: "https://bit.ly/4uivjrP", tgl: "2026-06-03", durasi: 90, token: "SAYAJUJUR" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Bahasa Indonesia", link: "https://forms.gle/XqWryHkcxdyRSEC99", tgl: "2026-06-03", durasi: 120, token: "AYEKAPTEN!" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Pendidikan Pancasila", link: "https://forms.gle/VYZx8Po9N7WbAaDk8", tgl: "2026-06-03", durasi: 90, token: "SAYASISWABERKARAKTER" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Bahasa Inggris", link: "https://bit.ly/PSAT7English", tgl: "2026-06-03", durasi: 120, token: "ENG72526" },
    { tingkat: ["7A", "7B", "7C"], mapel: "SBDP", link: "https://bit.ly/PSAT_Senbud726", tgl: "2026-06-08", durasi: 90, token: "YAKINBISASENDIRI" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Matematika", link: "https://forms.gle/FubLCoW98DS1mZCNA", tgl: "2026-06-08", durasi: 120, token: "MATEMATIKAMUDAH!" },
    { tingkat: ["7A", "7B", "7C"], mapel: "IPA", link: "https://forms.gle/3ZiAZa9jC3EXYKEj6", tgl: "2026-06-08", durasi: 120, token: "BISMILLAHIPALULUS" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Informatika", link: "https://bit.ly/PSAT_Informatika726", tgl: "2026-06-08", durasi: 90, token: "PERSIBBANDUNG" },
    { tingkat: ["7A", "7B", "7C"], mapel: "IPS", link: "https://forms.gle/9BUjkMmXfHNwFMuS9", tgl: "2026-06-08", durasi: 90, token: "LITERASIKEUANGAN" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Bahasa Sunda", link: "https://forms.gle/NKfxpkok1yYKQd1NA", tgl: "2026-06-09", durasi: 90, token: "SUNDAGAMPANG26" },
    { tingkat: ["7A", "7B", "7C"], mapel: "PJOK", link: "https://forms.gle/gxZg21mxoanjVNGHA", tgl: "2026-06-09", durasi: 90, token: "HIDUPSEHAT" },

    // KELAS 8
    { tingkat: ["8A", "8B", "8C"], mapel: "PAI-BP", link: "https://forms.gle/mTqueURApFrS3YSBA", tgl: "2026-06-03", durasi: 90, token: "SAYAANAKJUJUR" },
    { tingkat: ["8A", "8B"], mapel: "Bahasa Indonesia", link: "https://forms.gle/YaPELxt9tMnsJM7v7", tgl: "2026-06-03", durasi: 120, token: "AYEKAPTEN!" },
    { tingkat: ["8C"], mapel: "Bahasa Indonesia", link: "https://forms.gle/DYZBhzh6aLmgohYdA", tgl: "2026-06-03", durasi: 120, token: "SEMANGAT8C" },
    { tingkat: ["8A", "8B", "8C"], mapel: "Pendidikan Pancasila", link: "https://forms.gle/6uro2TGaogn5BF3P8", tgl: "2026-06-03", durasi: 90, token: "SAYASISWABERKARAKTER " },
    { tingkat: ["8A", "8B", "8C"], mapel: "Bahasa Inggris", link: "https://forms.gle/JTHZsYMbuz2Kk9Ne9", tgl: "2026-06-03", durasi: 120, token: "SAVEOURWORLD!" },
    { tingkat: ["8A", "8B", "8C"], mapel: "SBDP", link: "https://bit.ly/Senbud8_PSAT26", tgl: "2026-06-08", durasi: 90, token: "PASTINAIKKELAS" },
    { tingkat: ["8B", "8C"], mapel: "Matematika", link: "https://docs.google.com/forms/d/e/1FAIpQLSfcgWckXWfByn1YXDQ26daB4H1fUuk2Yd8HIfS7uOF63ADSyg/viewform?usp=publish-editor", tgl: "2026-06-08", durasi: 120, token: "PSAT2026" },
    { tingkat: ["8A"], mapel: "Matematika", link: "https://forms.gle/EKnBG1eyY4hcz8D37", tgl: "2026-06-08", durasi: 120, token: "MATEMATIKAASYIK!" },
    { tingkat: ["8B", "8C"], mapel: "IPA", link: "https://forms.gle/uTBkYMzcexhttwHH9", tgl: "2026-06-08", durasi: 120, token: "PSATIPA8BC26" },
    { tingkat: ["8A"], mapel: "IPA", link: "https://forms.gle/FtDi4K2EmWAk2Pg49", tgl: "2026-06-08", durasi: 120, token: "BISMILLAHIPALULUS" },
    { tingkat: ["8A", "8B", "8C"], mapel: "Informatika", link: "https://forms.gle/rV12cSqWj7p4fDjC8", tgl: "2026-06-08", durasi: 90, token: "PSAT-8" },
    { tingkat: ["8A", "8B", "8C"], mapel: "IPS", link: "https://forms.gle/3aTxJspuZFTXDM34A", tgl: "2026-06-08", durasi: 90, token: "PEREKONOMIANINDONESIA" },
    { tingkat: ["8A", "8B", "8C"], mapel: "Bahasa Sunda", link: "https://forms.gle/qSU8YhPewaEpm8LQ7", tgl: "2026-06-09", durasi: 90, token: "BISABASASUNDA26" },
    { tingkat: ["8A", "8B", "8C"], mapel: "PJOK", link: "https://forms.gle/yyAFwFufCjuVEipq7", tgl: "2026-06-09", durasi: 90, token: "BUTUHSEHAT" },

    // KELAS 9
    { tingkat: ["9A", "9B", "9C"], mapel: "PABP", link: "https://bit.ly/PSAJPAIBP2526", tgl: "2026-05-07", durasi: 90, token: "ALLAHBANTUSAYALULUS" },
    { tingkat: ["9A", "9B", "9C"], mapel: "Pend. Pancasila", link: "https://forms.gle/tJFuapRJCFbJGws17", tgl: "2026-05-04", durasi: 90, token: "PSAJ2526PP9" },
    { tingkat: ["9A", "9B", "9C"], mapel: "Bahasa Indonesia", link: "https://forms.gle/SVkAADCiiNjXqW3Q9", tgl: "2026-05-06", durasi: 90, token: "PSAJBI2026" },
    { tingkat: ["9A", "9B", "9C"], mapel: "Bahasa Inggris", link: "https://bit.ly/PSAJ_English2526", tgl: "2026-05-05", durasi: 120, token: "ENG2526" },
    { tingkat: ["9A", "9B", "9C"], mapel: "IPA", link: "https://forms.gle/Fm26nSSpXEvFERaAA", tgl: "2026-05-05", durasi: 90, token: "IPAUS26" },
    { tingkat: ["9A", "9B", "9C"], mapel: "IPS", link: "https://bit.ly/PSAJ_IPS_9_2026", tgl: "2026-05-06", durasi: 90, token: "MINIMALTAUSEJARAH" },
    { tingkat: ["9A", "9B", "9C"], mapel: "Matematika", link: "https://docs.google.com/forms/d/e/1FAIpQLScUL0P-yN3jQQHbhmmPfn-s9zJeywKM4d-jCbVi2d851IGYlg/viewform?usp=header", tgl: "2026-05-04", durasi: 90, token: "SMPYPKKP2026" },
    { tingkat: ["9A", "9B", "9C"], mapel: "PJOK", link: "https://forms.gle/rcrBqkYLEbKqrmgE9", tgl: "2026-05-07", durasi: 60, token: "PASSWORDNYAAPA" },
    { tingkat: ["9A", "9B", "9C"], mapel: "SBDP", link: "https://bit.ly/ASAJSBDP2526", tgl: "2026-05-07", durasi: 60, token: "BACAYANGBENER" },
    { tingkat: ["9A", "9B", "9C"], mapel: "Informatika", link: "https://bit.ly/PSAJ_Informatika_Agung26", tgl: "2026-05-08", durasi: 90, token: "SAYAPASTILULUS" },
    { tingkat: ["9A", "9B", "9C"], mapel: "Bahasa Sunda", link: "https://forms.gle/4NxzRsnbhrToniEq5", tgl: "2026-05-08", durasi: 90, token: "SUNDATEUHESE" }
];

let isExamActive = false;
let systemReady = false; 
let isWarningShowing = false; // Flag status overlay sedang aktif/tidak
let timerInterval;
let currentSiswaKey = '';

// --- NAVIGASI TAB MENU ---
function showTab(t) {
    document.getElementById('tab-jadwal').style.display = t === 'jadwal' ? 'block' : 'none';
    document.getElementById('tab-manual').style.display = t === 'manual' ? 'block' : 'none';
    document.getElementById('btn-tab-jadwal').className = t === 'jadwal' ? 'active' : '';
    document.getElementById('btn-tab-manual').className = t === 'manual' ? 'active' : '';
}

// --- FILTER MATA PELAJARAN BERDASARKAN KELAS ARRAYS ---
function filterMapel() {
    const tkt = document.getElementById('select-tingkat').value;
    const sel = document.getElementById('select-mapel');
    sel.innerHTML = '<option value="">-- Pilih Mata Pelajaran --</option>';
    
    databaseUjian.forEach((m, idx) => {
        if (Array.isArray(m.tingkat) && m.tingkat.includes(tkt)) {
            let opt = document.createElement('option');
            opt.value = idx; 
            opt.innerHTML = `${m.mapel} (${m.tgl})`;
            sel.appendChild(opt);
        }
    });
}

// --- AKSI MEMULAI JENDELA UJIAN KETAT ---
async function startExam(type) {
    const nama = document.getElementById('siswa-nama').value.trim();
    if (!nama) return alert("Masukkan Nama Anda!");

    let link, durasi, mapel, kelasInfo;

    if (type === 'jadwal') {
        const tkt = document.getElementById('select-tingkat').value;
        const idx = document.getElementById('select-mapel').value;
        const tokenIn = document.getElementById('psaj-token').value.toUpperCase().trim();

        if (!tkt || idx === "") return alert("Pilih Mata Pelajaran!");
        const data = databaseUjian[idx];

        // Validasi Tanggal
        const today = new Date().toISOString().split('T')[0];
        if (today !== data.tgl) return alert(`Ujian hanya aktif pada tanggal resmi: ${data.tgl}`);
        
        if (tokenIn !== data.token.trim()) return alert("TOKEN UJIAN SALAH!");

        link = data.link; 
        durasi = data.durasi; 
        mapel = data.mapel;
        kelasInfo = tkt;
    } else {
        link = document.getElementById('manual-url').value.trim();
        durasi = parseInt(document.getElementById('manual-timer').value) || 0;
        mapel = "Ujian Manual Guru";
        kelasInfo = "Umum";
        if (!link.startsWith('http')) return alert("Tautan Google Form tidak valid!");
    }

    // Inisialisasi Firebase Push Monitoring
    currentSiswaKey = nama.replace(/[.#$/\[\]]/g, "_") + "_" + Math.floor(Math.random() * 1000);
    db.ref('monitoring/' + currentSiswaKey).set({
        nama: nama,
        mapel: `${mapel} (${kelasInfo})`,
        status: "aktif",
        waktu: new Date().toLocaleTimeString()
    });

    isExamActive = true;
    systemReady = false; 
    isWarningShowing = false;

    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('exam-header').style.display = 'block';
    document.getElementById('display-nama').innerText = nama;
    document.getElementById('display-mapel').innerText = `${mapel} - [${kelasInfo}]`;
    document.getElementById('exam-frame').src = link;
    
    // Request Fullscreen
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
    }

    // BERI JEDA INTEGRITAS (2 Detik): Mengatasi lag inisiasi browser & penyesuaian fokus iframe
    setTimeout(() => {
        systemReady = true;
    }, 2000);

    if (durasi > 0) startTimer(durasi);
    else document.getElementById('timer-display').innerText = "Tanpa Batas";
}

// --- PENGATUR HITUNG MUNDUR WAKTU ---
function startTimer(min) {
    let t = min * 60;
    const display = document.getElementById('timer-display');
    const alertSound = document.getElementById('alert-sound');

    timerInterval = setInterval(() => {
        let h = Math.floor(t / 3600);
        let m = Math.floor((t % 3600) / 60);
        let s = t % 60;
        display.innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;

        if (t === 300) {
            if(alertSound) alertSound.play().catch(()=>{});
            alert("Sisa waktu pengerjaan 5 menit lagi!");
        }

        if (t <= 60 && t > 0) {
            display.parentElement.classList.add('timer-critical');
            if (t === 60 && alertSound) alertSound.play().catch(()=>{});
        }

        if (--t < 0) {
            clearInterval(timerInterval);
            autoSubmitAction();
        }
    }, 1000);
}

function autoSubmitAction() {
    isExamActive = false;
    systemReady = false;
    document.getElementById('exam-header').style.display = 'none';
    document.getElementById('exam-frame').src = "";
    if (currentSiswaKey) db.ref('monitoring/' + currentSiswaKey).update({ status: "waktu habis" });
    if (document.fullscreenElement) document.exitFullscreen().catch(()=>{});
    alert("Waktu Ujian Telah Habis! Halaman ditutup.");
    location.reload();
}

// --- LOGIKA SISTEM PROTEKSI & DETEKSI PELANGGARAN ---

function eksekusiPelanggaran(jenis) {
    // BLOKIR FALSE ALARM: jika ujian belum aktif, sistem belum siap, atau kotak peringatan sudah terbuka, abaikan!
    if (!isExamActive || !systemReady || isWarningShowing) return;

    isWarningShowing = true;
    const sound = document.getElementById('alert-sound');
    if(sound) sound.play().catch(()=>{});
    
    document.getElementById('violation-msg').innerText = `Jenis Pelanggaran: ${jenis}`;
    document.getElementById('warning-overlay').style.display = 'flex';

    if (currentSiswaKey) {
        db.ref('monitoring/' + currentSiswaKey).update({ 
            status: `PELANGGARAN: ${jenis}` 
        });
    }
}

function returnToFullscreen() {
    systemReady = false; 
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().then(() => {
            setTimeout(() => { 
                systemReady = true; 
                isWarningShowing = false;
            }, 1500);
        }).catch(() => {
            isWarningShowing = false;
        });
    }
    document.getElementById('warning-overlay').style.display = 'none';
}

// SOLUSI: Deteksi Blur khusus jika fokus berpindah keluar dari objek window, bukan berpindah ke elemen iframe internal.
window.addEventListener('blur', (e) => {
    if (isExamActive && systemReady) {
        // Cek apakah elemen aktif yang mencuri fokus saat ini adalah iframe soal
        if (document.activeElement && document.activeElement.tagName === "IFRAME") {
            // Pengguna sedang mengklik/memulai soal di dalam iframe Google Form. Abaikan peringatan!
            return;
        }
        eksekusiPelanggaran("KELUAR APLIKASI / SPLIT SCREEN / HOME");
    }
});

// 2. Deteksi Perpindahan Tab Jendela Browser
document.addEventListener("visibilitychange", () => {
    if (document.hidden && isExamActive && systemReady) {
        eksekusiPelanggaran("PINDAH TAB / MINIMIZE");
    }
});

// 3. Deteksi Keluar Dari Mode Layar Penuh (Fullscreen)
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && isExamActive && systemReady) {
        eksekusiPelanggaran("KELUAR MODE LAYAR PENUH");
    }
});

// 4. Kunci Tindakan Copy-Paste-Select Tingkat Dokumen Utama
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('copy', e => { if(isExamActive) e.preventDefault(); });
document.addEventListener('paste', e => { if(isExamActive) e.preventDefault(); });
document.addEventListener('selectstart', e => { if(isExamActive) e.preventDefault(); });

// 5. Kunci Shortcuts Keyboard Penting (F12, Inspect, dll)
document.addEventListener('keydown', e => {
    if (!isExamActive) return;

    if (
        e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'u')
    ) {
        e.preventDefault();
        eksekusiPelanggaran("MENCOBA AKSES DEVTOOLS (INSPECT)");
    }
    
    if (e.ctrlKey && ['c', 'v', 's', 'p', 'a'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
});

// 6. Pembersihan Clipboard Otomatis Berkala
setInterval(() => {
    if (isExamActive && navigator.clipboard && systemReady && !isWarningShowing) {
        navigator.clipboard.writeText("Akses Dilarang!").catch(() => {});
    }
}, 3500);

function exitApp() {
    if (confirm("Pastikan Anda sudah menekan tombol KIRIM di Google Form sebelum mengakhiri sesi. Keluar?")) {
        db.ref('monitoring/' + currentSiswaKey).update({ status: "selesai" });
        setTimeout(() => { 
            isExamActive = false; 
            systemReady = false;
            location.reload(); 
        }, 800);
    }
}

// --- MODUL DASHBOARD PANEL OPERATOR/PROKTOR ---
function openAdminPanel() {
    const pw = prompt("Masukkan Kata Sandi Proktor:");
    if (pw === "ypkkp2026") {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('admin-screen').style.display = 'block';
        initAdminDashboard();
    } else {
        alert("Sandi Salah!");
    }
}

function initAdminDashboard() {
    db.ref('monitoring').on('value', snapshot => {
        const list = document.getElementById('admin-list');
        list.innerHTML = '';
        let total = 0, aktif = 0, langgar = 0;
        
        snapshot.forEach(child => {
            const data = child.val();
            total++;
            
            let badge = `<span class="status-badge badge-gray">${data.status.toUpperCase()}</span>`;
            if(data.status === "aktif") { aktif++; badge = `<span class="status-badge badge-green">AKTIF</span>`; }
            else if(data.status.includes("PELANGGARAN")) { langgar++; badge = `<span class="status-badge" style="background:#fee2e2; color:#991b1b; border:1px solid #fca5a5;">${data.status}</span>`; }
            
            let row = `<tr>
                <td><b>${data.nama}</b></td>
                <td>${data.mapel}</td>
                <td>${badge}</td>
                <td><button onclick="hapusLog('${child.key}')" style="background:#ef4444; color:white; border:none; padding:5px 10px; border-radius:6px; cursor:pointer; font-size:11px;">Hapus</button></td>
            </tr>`;
            list.innerHTML += row;
        });
        
        document.getElementById('stat-total').innerText = total;
        document.getElementById('stat-aktif').innerText = aktif;
        document.getElementById('stat-langgar').innerText = langgar;
    });
}

function hapusLog(key) {
    if(confirm("Hapus catatan data siswa ini dari list monitoring?")) {
        db.ref('monitoring/' + key).remove();
    }
}

function searchSiswa() {
    let input = document.getElementById('admin-search').value.toLowerCase();
    let rows = document.getElementById('admin-list').getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        let nameTxt = rows[i].getElementsByTagName('td')[0]?.innerText.toLowerCase() || '';
        rows[i].style.display = nameTxt.includes(input) ? '' : 'none';
    }
}
