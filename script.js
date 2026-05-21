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

// === 2. DATABASE UJIAN (KONFIGURASI MULTI-GURU) ===
const databaseUjian = [
   // Contoh IPS: Kelas 7A & 7B Link sama (Guru A), Kelas 7C Link beda (Guru B)
    { tingkat: ["7A", "7B", "7C"], mapel: "PAI-BP", link: "https://bit.ly/4uivjrP", tgl: "2026-06-02", durasi: 90, token: "SAYAJUJUR" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Bahasa Indonesia", link: "https://forms.gle/XqWryHkcxdyRSEC99", tgl: "2026-06-02", durasi: 120, token: "AYEKAPTEN!" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Pendidikan Pancasila", link: "https://forms.gle/VYZx8Po9N7WbAaDk8 ", tgl: "2026-06-03", durasi: 90, token: "SAYASISWABERKARAKTER" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Bahasa Inggris", link: "https://bit.ly/PSAT7English", tgl: "2026-06-03", durasi: 120, token: "ENG72526" },
    { tingkat: ["7A", "7B", "7C"], mapel: "SBDP", link: "https://bit.ly/PSAT_Senbud726", tgl: "2026-06-04", durasi: 90, token: "YAKINBISASENDIRI" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Matematika", link: "https://forms.gle/FubLCoW98DS1mZCNA", tgl: "2026-06-04", durasi: 120, token: "MATEMATIKAMUDAH!" },
    { tingkat: ["7A", "7B", "7C"], mapel: "IPA", link: "https://forms.gle/3ZiAZa9jC3EXYKEj6", tgl: "2026-06-05", durasi: 120, token: "BISMILLAHIPALULUS" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Informatika", link: "https://forms.gle/LinkIPS_GuruA", tgl: "2026-06-08", durasi: 90, token: "IPSJAYA" },
    { tingkat: ["7A", "7B", "7C"], mapel: "IPS", link: "https://forms.gle/9BUjkMmXfHNwFMuS9", tgl: "2026-06-08", durasi: 90, token: "LITERASIKEUANGAN" },
    { tingkat: ["7A", "7B", "7C"], mapel: "Bahasa Sunda", link: "https://forms.gle/NKfxpkok1yYKQd1NA", tgl: "2026-06-09", durasi: 90, token: "SUNDAGAMPANG26" },
    { tingkat: ["7A", "7B", "7C"], mapel: "PJOK", link: "https://forms.gle/gxZg21mxoanjVNGHA", tgl: "2026-06-09", durasi: 90, token: "HIDUPSEHAT" },

    // Contoh IPS: Kelas 88 & 8B Link sama (Guru A), Kelas 8C Link beda (Guru B)
    { tingkat: ["8A", "8B", "8C"], mapel: "PAI-BP", link: "https://forms.gle/mTqueURApFrS3YSBA", tgl: "2026-06-02", durasi: 90, token: "SAYAANAKJUJUR" },
    { tingkat: ["8A", "8B"], mapel: "Bahasa Indonesia", link: "https://forms.gle/YaPELxt9tMnsJM7v7", tgl: "2026-06-02", durasi: 120, token: "AYEKAPTEN!" },
    { tingkat: ["8C"], mapel: "Bahasa Indonesia", link: "https://forms.gle/YaPELxt9tMnsJM7v7", tgl: "2026-06-02", durasi: 120, token: "AYEKAPTEN!" },
    { tingkat: ["8A", "8B", "8C"], mapel: "Pendidikan Pancasila", link: "https://forms.gle/6uro2TGaogn5BF3P8 ", tgl: "2026-06-03", durasi: 90, token: "SAYASISWABERKARAKTER " },
    { tingkat: ["8A", "8B", "8C"], mapel: "Bahasa Inggris", link: "https://forms.gle/JTHZsYMbuz2Kk9Ne9", tgl: "2026-06-03", durasi: 120, token: "SAVEOURWORLD!" },
    { tingkat: ["8A", "8B", "8C"], mapel: "SBDP", link: "https://bit.ly/Senbud8_PSAT26", tgl: "2026-06-04", durasi: 90, token: "PASTINAIKKELAS" },
    { tingkat: ["8B", "8C"], mapel: "Matematika", link: "https://docs.google.com/forms/d/e/1FAIpQLSfcgWckXWfByn1YXDQ26daB4H1fUuk2Yd8HIfS7uOF63ADSyg/viewform?usp=publish-editor", tgl: "2026-06-04", durasi: 120, token: "PSAT2026" },
    { tingkat: ["8A"], mapel: "Matematika", link: "https://forms.gle/EKnBG1eyY4hcz8D37", tgl: "2026-06-04", durasi: 120, token: "MATEMATIKAASYIK!" },
    { tingkat: ["8B", "8C"], mapel: "IPA", link: "https://forms.gle/uTBkYMzcexhttwHH9", tgl: "2026-06-05", durasi: 120, token: "PSATIPA8BC26" },
    { tingkat: ["8A"], mapel: "IPA", link: "https://forms.gle/FtDi4K2EmWAk2Pg49", tgl: "2026-06-05", durasi: 120, token: "BISMILLAHIPALULUS" },
    { tingkat: ["8A", "8B", "8C"], mapel: "Informatika", link: "https://forms.gle/rV12cSqWj7p4fDjC8", tgl: "2026-06-08", durasi: 90, token: "PSAT-8" },
    { tingkat: ["8A", "8B", "8C"], mapel: "IPS", link: "https://forms.gle/3aTxJspuZFTXDM34A", tgl: "2026-06-08", durasi: 90, token: "PEREKONOMIANINDONESIA" },
    { tingkat: ["8A", "8B", "8C"], mapel: "Bahasa Sunda", link: "https://forms.gle/qSU8YhPewaEpm8LQ7", tgl: "2026-06-09", durasi: 90, token: "BISABASASUNDA26" },
    { tingkat: ["8A", "8B", "8C"], mapel: "PJOK", link: "https://forms.gle/yyAFwFufCjuVEipq7", tgl: "2026-06-09", durasi: 90, token: "BUTUHSEHAT" },

    
    // Mapel lain yang linknya sama untuk satu angkatan
    { tingkat: ["9A", "9B", "9C"], mapel: "PABP", link: "https://bit.ly/PSAJPAIBP2526", tgl: "2026-05-07", durasi: 90, token: "PABP9" },
    { tingkat: ["9A", "9B", "9C"], mapel: "Matematika", link: "https://forms.gle/MTK9", tgl: "2026-05-04", durasi: 90, token: "MTK9" }
];

let isExamActive = false;
let currentSiswaKey = null;
let timerInterval;

// === 3. FUNGSI ADMIN / OPERATOR ===
function openAdminPanel() {
    const pw = prompt("Masukkan Password Operator:");
    if (pw === "admin123") {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('admin-screen').style.display = 'block';
        startMonitoring();
    } else {
        alert("Password Salah!");
    }
}

function startMonitoring() {
    const list = document.getElementById('admin-list');
    const statCount = document.getElementById('stat-count');

    db.ref('monitoring').on('value', (snapshot) => {
        list.innerHTML = "";
        let total = 0;
        snapshot.forEach((child) => {
            const data = child.val();
            total++;
            const badgeColor = data.status === 'mengerjakan' ? 'badge-green' : 'badge-gray';
            
            const row = `<tr>
                <td>${data.nama}</td>
                <td>${data.mapel}</td>
                <td><span class="status-badge ${badgeColor}">${data.status.toUpperCase()}</span></td>
                <td><button class="btn-del" onclick="hapusAktivitas('${child.key}')">Hapus</button></td>
            </tr>`;
            list.insertAdjacentHTML('beforeend', row);
        });
        statCount.innerText = total;
    });
}

function searchSiswa() {
    let input = document.getElementById("admin-search").value.toLowerCase();
    let table = document.querySelector("#admin-screen table");
    let tr = table.getElementsByTagName("tr");
    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            tr[i].style.display = txtValue.toLowerCase().indexOf(input) > -1 ? "" : "none";
        }
    }
}

function hapusAktivitas(key) {
    if(confirm("Hapus data aktivitas ini?")) { db.ref('monitoring/' + key).remove(); }
}

// === 4. FUNGSI SISWA & UJIAN ===
function showTab(t) {
    document.getElementById('tab-jadwal').style.display = t === 'jadwal' ? 'block' : 'none';
    document.getElementById('tab-manual').style.display = t === 'manual' ? 'block' : 'none';
    document.getElementById('btn-tab-jadwal').className = t === 'jadwal' ? 'active' : '';
    document.getElementById('btn-tab-manual').className = t === 'manual' ? 'active' : '';
}

function filterMapel() {
    const kls = document.getElementById('select-tingkat').value;
    const sel = document.getElementById('select-mapel');
    sel.innerHTML = '<option value="">-- Pilih Mata Pelajaran --</option>';
    
    databaseUjian.forEach((m, index) => {
        if (m.tingkat.includes(kls)) { // Cek apakah kelas ada di dalam array tingkat
            let opt = document.createElement('option');
            opt.value = index;
            opt.innerHTML = `${m.mapel} (${m.tgl})`;
            sel.appendChild(opt);
        }
    });
}

async function startExam(type) {
    const nama = document.getElementById('siswa-nama').value;
    const kelas = document.getElementById('select-tingkat').value;
    if (!nama) return alert("Harap isi Nama Lengkap!");

    let link, durasi, mapel;
    if (type === 'jadwal') {
        const idx = document.getElementById('select-mapel').value;
        const tokenInput = document.getElementById('psaj-token').value.toUpperCase();
        if (idx === "") return alert("Pilih Mata Pelajaran!");
        const data = databaseUjian[idx];
        if (tokenInput !== data.token) return alert("TOKEN SALAH!");
        link = data.link; durasi = data.durasi; mapel = data.mapel;
    } else {
        link = document.getElementById('manual-url').value;
        durasi = document.getElementById('manual-timer').value || 60;
        mapel = "Ulangan Harian";
        if (!link.startsWith('http')) return alert("Link soal tidak valid!");
    }

    currentSiswaKey = db.ref('monitoring').push().key;
    db.ref('monitoring/' + currentSiswaKey).set({
        nama: nama, 
        mapel: mapel + " (" + kelas + ")", 
        status: "mengerjakan", 
        last_seen: Date.now()
    });

    db.ref('monitoring/' + currentSiswaKey).onDisconnect().remove();

    isExamActive = true;
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('exam-header').style.display = 'block';
    document.getElementById('display-nama').innerText = nama;
    document.getElementById('display-mapel').innerText = mapel + " - " + kelas;
    document.getElementById('exam-frame').src = link;
    
    document.documentElement.requestFullscreen().catch(() => {});
    startTimer(durasi);
}

function startTimer(minutes) {
    let time = minutes * 60;
    const display = document.getElementById('timer-display');
    timerInterval = setInterval(() => {
        let h = Math.floor(time / 3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;
        display.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        if (time <= 300) display.parentElement.classList.add('timer-critical');
        if (--time < 0) { clearInterval(timerInterval); autoSubmit(); }
    }, 1000);
}

function autoSubmit() {
    db.ref('monitoring/' + currentSiswaKey).update({ status: "waktu habis" });
    location.reload();
}

function exitApp() {
    if (confirm("Pastikan sudah menekan tombol KIRIM di Form. Keluar?")) {
        db.ref('monitoring/' + currentSiswaKey).update({ status: "selesai" });
        setTimeout(() => { isExamActive = false; location.reload(); }, 1000);
    }
}

// Keamanan
document.addEventListener("visibilitychange", () => {
    if (document.hidden && isExamActive) {
        document.getElementById('alert-sound').play();
        document.getElementById('warning-overlay').style.display = 'flex';
        db.ref('monitoring/' + currentSiswaKey).update({ status: "pelanggaran tab" });
    }
});

function returnToFullscreen() {
    document.documentElement.requestFullscreen().catch(() => {});
    document.getElementById('warning-overlay').style.display = 'none';
    if (currentSiswaKey) { db.ref('monitoring/' + currentSiswaKey).update({ status: "mengerjakan" }); }
}

window.onbeforeunload = function() { if (isExamActive) return "Yakin ingin keluar?"; };
