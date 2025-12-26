// Game Data
const LEVELS = [
    {
        id: 1,
        title: "Level 1: Dasar Pemrograman",
        description: "Mengenal variabel, tipe data, dan output.",
        questions: [
            {
                type: "mc",
                q: "Apa itu 'Variabel' dalam pemrograman?",
                options: ["Wadah untuk menyimpan data", "Layar monitor", "Jenis keyboard", "Internet"],
                answer: 0,
                essayAnswer: ["wadah", "tempat data", "penyimpan"],
                explanation: "Variabel adalah tempat di memori komputer untuk menyimpan nilai atau data."
            },
            {
                type: "mc",
                q: "Manakah yang merupakan tipe data angka bulat?",
                options: ["String", "Integer", "Boolean", "Float"],
                answer: 1,
                essayAnswer: ["integer", "int"],
                explanation: "Integer (int) adalah tipe data untuk angka bulat tanpa desimal."
            },
            {
                type: "mc",
                q: "Perintah umum untuk menampilkan teks ke layar adalah...",
                options: ["input()", "print() / console.log()", "scan()", "get()"],
                answer: 1,
                essayAnswer: ["print", "console.log", "output"],
                explanation: "print() atau console.log() digunakan untuk mencetak output ke layar."
            },
            {
                type: "mc",
                q: "Tipe data 'String' ditandai dengan...",
                options: ["Kurung kurawal {}", "Tanda kutip ''", "Tanda pagar #", "Titik koma ;"],
                answer: 1,
                essayAnswer: ["tanda kutip", "kutip"],
                explanation: "String adalah teks yang diapit oleh tanda kutip tunggal atau ganda."
            },
            {
                type: "mc",
                q: "Apa nilai dari tipe data Boolean?",
                options: ["Angka 1-10", "Huruf A-Z", "True atau False", "Kosong"],
                answer: 2,
                essayAnswer: ["true false", "benar salah"],
                explanation: "Boolean hanya memiliki dua nilai: True (Benar) atau False (Salah)."
            },
            {
                type: "mc",
                q: "Simbol '=' biasanya digunakan untuk...",
                options: ["Membandingkan", "Assignment (Pemberian nilai)", "Menghapus", "Looping"],
                answer: 1,
                essayAnswer: ["assignment", "pemberian nilai", "assign"],
                explanation: "Tanda '=' digunakan untuk memasukkan nilai ke dalam variabel (Assignment)."
            },
            {
                type: "mc",
                q: "Komentar dalam kode berfungsi untuk...",
                options: ["Dijalankan komputer", "Catatan untuk programmer", "Membuat error", "Menghapus file"],
                answer: 1,
                essayAnswer: ["catatan", "dokumentasi", "penjelas"],
                explanation: "Komentar diabaikan oleh komputer dan hanya untuk dibaca manusia."
            }
        ]
    },
    {
        id: 2,
        title: "Level 2: Logika & Kondisi",
        description: "IF-ELSE dan operator logika.",
        questions: [
            {
                type: "mc",
                q: "Apa fungsi dari 'IF'?",
                options: ["Mengulang kode", "Membuat keputusan", "Menghapus data", "Menyimpan file"],
                answer: 1,
                essayAnswer: ["keputusan", "kondisi", "percabangan"],
                explanation: "IF digunakan untuk menjalankan kode hanya jika kondisi tertentu terpenuhi."
            },
            {
                type: "mc",
                q: "Operator '==' digunakan untuk...",
                options: ["Assignment", "Perbandingan sama dengan", "Perbandingan lebih besar", "Logika AND"],
                answer: 1,
                essayAnswer: ["perbandingan", "sama dengan", "banding"],
                explanation: "'==' membandingkan apakah dua nilai sama."
            },
            {
                type: "mc",
                q: "Jika (5 > 3) maka hasilnya adalah...",
                options: ["False", "True", "Error", "Null"],
                answer: 1,
                essayAnswer: ["true", "benar"],
                explanation: "5 memang lebih besar dari 3, jadi hasilnya True."
            },
            {
                type: "mc",
                q: "'ELSE' dijalankan ketika...",
                options: ["Kondisi IF benar", "Kondisi IF salah", "Selalu dijalankan", "Tidak pernah dijalankan"],
                answer: 1,
                essayAnswer: ["salah", "if salah", "false"],
                explanation: "Blok ELSE dieksekusi jika kondisi IF sebelumnya bernilai False."
            },
            {
                type: "mc",
                q: "Operator logika 'AND' bernilai True jika...",
                options: ["Salah satu benar", "Semua salah", "Semua benar", "Hanya satu benar"],
                answer: 2,
                essayAnswer: ["semua benar", "keduanya benar"],
                explanation: "AND hanya True jika semua kondisi yang diuji bernilai True."
            },
            {
                type: "mc",
                q: "Simbol untuk 'Tidak Sama Dengan' adalah...",
                options: ["==", "!=", "<>", "><"],
                answer: 1,
                essayAnswer: ["!=", "tidak sama"],
                explanation: "'!=' adalah simbol umum untuk ketidaksamaan."
            },
            {
                type: "mc",
                q: "Struktur 'Switch-Case' mirip dengan...",
                options: ["Looping", "If-Else bertingkat", "Array", "Fungsi"],
                answer: 1,
                essayAnswer: ["if else", "percabangan"],
                explanation: "Switch-Case adalah alternatif rapi untuk banyak kondisi IF-ELSE."
            }
        ]
    },
    {
        id: 3,
        title: "Level 3: Perulangan (Loop)",
        description: "For, While, dan iterasi.",
        questions: [
            {
                type: "mc",
                q: "Tujuan utama 'Looping' adalah...",
                options: ["Menghenti program", "Menjalankan kode berulang kali", "Membuat variabel", "Matematika"],
                answer: 1,
                essayAnswer: ["berulang", "ulang", "repetisi"],
                explanation: "Looping digunakan untuk mengulangi eksekusi blok kode."
            },
            {
                type: "mc",
                q: "Loop yang berjalan selama kondisi benar disebut...",
                options: ["For Loop", "While Loop", "If Loop", "End Loop"],
                answer: 1,
                essayAnswer: ["while", "while loop"],
                explanation: "While loop terus berjalan selama kondisinya True."
            },
            {
                type: "mc",
                q: "Apa itu 'Infinite Loop'?",
                options: ["Loop yang cepat", "Loop yang tidak pernah berhenti", "Loop satu kali", "Loop error"],
                answer: 1,
                essayAnswer: ["tak berhenti", "selamanya", "infinite"],
                explanation: "Infinite loop terjadi jika kondisi berhenti tidak pernah tercapai."
            },
            {
                type: "mc",
                q: "Dalam 'For i = 1 to 5', berapa kali loop berjalan?",
                options: ["1 kali", "4 kali", "5 kali", "Tak hingga"],
                answer: 2,
                essayAnswer: ["5", "5 kali", "lima"],
                explanation: "Loop akan berjalan untuk nilai i: 1, 2, 3, 4, 5."
            },
            {
                type: "mc",
                q: "'Break' digunakan untuk...",
                options: ["Melanjutkan loop", "Memulai loop", "Menghentikan loop paksa", "Menghapus loop"],
                answer: 2,
                essayAnswer: ["henti", "stop", "keluar"],
                explanation: "Break menghentikan perulangan seketika itu juga."
            },
            {
                type: "mc",
                q: "'Continue' digunakan untuk...",
                options: ["Stop loop", "Lewati sisa kode & lanjut putaran berikut", "Keluar program", "Cetak nilai"],
                answer: 1,
                essayAnswer: ["lewati", "lanjut", "skip"],
                explanation: "Continue melewati sisa kode di iterasi saat ini dan lanjut ke iterasi berikutnya."
            },
            {
                type: "mc",
                q: "Manakah yang cocok untuk meloop data Array?",
                options: ["If-Else", "For / Foreach", "Switch", "Variable"],
                answer: 1,
                essayAnswer: ["for", "foreach"],
                explanation: "For atau Foreach loop paling umum digunakan untuk memproses setiap item array."
            }
        ]
    },
    {
        id: 4,
        title: "Level 4: Fungsi & Array",
        description: "Struktur data list dan modularitas.",
        questions: [
            {
                type: "mc",
                q: "Array adalah...",
                options: ["Satu data tunggal", "Kumpulan data dalam satu variabel", "Fungsi matematika", "Loop"],
                answer: 1,
                essayAnswer: ["kumpulan data", "list", "himpunan"],
                explanation: "Array menyimpan banyak nilai dalam satu variabel tunggal."
            },
            {
                type: "mc",
                q: "Indeks array biasanya dimulai dari...",
                options: ["1", "0", "-1", "10"],
                answer: 1,
                essayAnswer: ["0", "nol"],
                explanation: "Dalam kebanyakan bahasa (JS, Python, C), indeks dimulai dari 0."
            },
            {
                type: "mc",
                q: "Fungsi (Function) berguna untuk...",
                options: ["Mempersulit kode", "Reuse (menggunakan kembali) kode", "Membuat virus", "Menambah memori"],
                answer: 1,
                essayAnswer: ["reuse", "ulang pakai", "modular"],
                explanation: "Fungsi membungkus kode agar bisa dipanggil berkali-kali tanpa menulis ulang."
            },
            {
                type: "mc",
                q: "Nilai yang dikirim ke dalam fungsi disebut...",
                options: ["Parameter / Argumen", "Variabel", "Output", "Return"],
                answer: 0,
                essayAnswer: ["parameter", "argumen"],
                explanation: "Parameter adalah input yang diterima oleh fungsi."
            },
            {
                type: "mc",
                q: "Kata kunci untuk mengembalikan nilai dari fungsi adalah...",
                options: ["send", "back", "return", "output"],
                answer: 2,
                essayAnswer: ["return"],
                explanation: "Return mengakhiri fungsi dan mengirimkan nilai kembali ke pemanggil."
            },
            {
                type: "mc",
                q: "Array arr = [10, 20, 30]. Berapa nilai arr[1]?",
                options: ["10", "20", "30", "Error"],
                answer: 1,
                essayAnswer: ["20"],
                explanation: "Indeks ke-1 adalah elemen kedua, yaitu 20."
            },
            {
                type: "mc",
                q: "Cara memanggil fungsi 'sapa'?",
                options: ["call sapa", "sapa()", "run sapa", "sapa"],
                answer: 1,
                essayAnswer: ["sapa()"],
                explanation: "Tanda kurung () digunakan untuk mengeksekusi/memanggil fungsi."
            }
        ]
    },
    {
        id: 5,
        title: "Level 5: Konsep Lanjut",
        description: "OOP dasar dan konsep web.",
        questions: [
            {
                type: "mc",
                q: "Apa itu 'Object'?",
                options: ["Hanya teks", "Entitas dengan properti dan method", "Angka saja", "Looping"],
                answer: 1,
                essayAnswer: ["properti method", "data dan fungsi"],
                explanation: "Objek membungkus data (properti) dan perilaku (method) menjadi satu kesatuan."
            },
            {
                type: "mc",
                q: "HTML adalah singkatan dari...",
                options: ["Hyper Text Markup Language", "High Tech Multi Language", "Home Tool Markup", "None"],
                answer: 0,
                essayAnswer: ["hyper text markup language"],
                explanation: "HTML adalah bahasa markup standar untuk dokumen web."
            },
            {
                type: "mc",
                q: "CSS digunakan untuk...",
                options: ["Logika program", "Styling / Desain tampilan", "Menyimpan database", "Server"],
                answer: 1,
                essayAnswer: ["style", "desain", "tampilan", "gaya"],
                explanation: "CSS (Cascading Style Sheets) mengatur tampilan elemen HTML."
            },
            {
                type: "mc",
                q: "DOM adalah singkatan dari...",
                options: ["Data Objects Model", "Document Object Model", "Disk Operating Mode", "Digital O"],
                answer: 1,
                essayAnswer: ["document object model"],
                explanation: "DOM adalah representasi struktur halaman web yang bisa diubah oleh JS."
            },
            {
                type: "mc",
                q: "Event Listener berfungsi untuk...",
                options: ["Mendengarkan musik", "Mendeteksi interaksi user (klik/ketik)", "Mengirim email", "Sleep"],
                answer: 1,
                essayAnswer: ["interaksi", "deteksi input", "respons"],
                explanation: "Event listener menunggu kejadian tertentu (seperti klik) lalu menjalankan kode."
            },
            {
                type: "mc",
                q: "Bug adalah...",
                options: ["Serangga", "Fitur tambahan", "Kesalahan dalam kode", "Virus"],
                answer: 2,
                essayAnswer: ["error", "kesalahan", "masalah"],
                explanation: "Bug adalah istilah untuk error atau perilaku yang tidak diinginkan dalam software."
            },
            {
                type: "mc",
                q: "Algoritma adalah...",
                options: ["Bahasa pemrograman", "Urutan langkah penyelesaian masalah", "Hardware", "Internet"],
                answer: 1,
                essayAnswer: ["langkah", "urutan", "step by step"],
                explanation: "Algoritma adalah langkah-langkah logis untuk menyelesaikan suatu tugas."
            }
        ]
    }
];

// App State
let currentState = {
    levelIdx: 0,
    currentLevel: null,
    score: 0,
    qIdx: 0,
    mode: 'multiple-choice', // 'multiple-choice' or 'essay'
    maxUnlockedLevel: 1
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    level: document.getElementById('level-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen')
};

const modals = {
    mode: document.getElementById('mode-modal')
};

// Navigation Functions
function showScreen(screenName) {
    Object.values(screens).forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    screens[screenName].classList.remove('hidden');
    // Force reflow for animation
    void screens[screenName].offsetWidth; 
    screens[screenName].classList.add('active');
}

// Initial Setup
document.getElementById('btn-start').addEventListener('click', () => {
    renderLevelGrid();
    showScreen('level');
});

document.querySelector('.back-home').addEventListener('click', () => {
    showScreen('welcome');
});

// Level Selection Logic
function renderLevelGrid() {
    const grid = document.querySelector('.level-grid');
    grid.innerHTML = '';
    
    LEVELS.forEach((level, idx) => {
        const isLocked = (idx + 1) > currentState.maxUnlockedLevel;
        const card = document.createElement('div');
        card.className = `level-card ${isLocked ? 'locked' : ''}`;
        
        card.innerHTML = `
            <div class="level-info">
                <h3>${level.title}</h3>
                <p>${level.description}</p>
            </div>
            <div class="level-status">
                ${isLocked ? '🔒' : '▶'}
            </div>
        `;
        
        if (!isLocked) {
            card.addEventListener('click', () => openModeSelection(idx));
        }
        
        grid.appendChild(card);
    });
}

// Mode Selection Logic
let pendingLevelIdx = 0;

function openModeSelection(levelIdx) {
    pendingLevelIdx = levelIdx;
    document.getElementById('selected-level-display').textContent = levelIdx + 1;
    modals.mode.classList.remove('hidden');
}

document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        startLevel(pendingLevelIdx, mode);
        modals.mode.classList.add('hidden');
    });
});

document.querySelector('.close-modal').addEventListener('click', () => {
    modals.mode.classList.add('hidden');
});

// Game Logic
function startLevel(levelIdx, mode) {
    currentState.levelIdx = levelIdx;
    currentState.currentLevel = LEVELS[levelIdx];
    currentState.mode = mode;
    currentState.score = 0;
    currentState.qIdx = 0;
    
    // Shuffle questions? Requirement says "7 soal acak".
    // Let's shuffle a copy of questions
    currentState.questions = [...currentState.currentLevel.questions]
        .sort(() => 0.5 - Math.random())
        .slice(0, 7); // Take 7 questions
        
    updateGameHeader();
    showScreen('game');
    loadQuestion();
}

function updateGameHeader() {
    document.getElementById('game-level-num').textContent = currentState.levelIdx + 1;
    document.getElementById('total-q-num').textContent = currentState.questions.length;
    document.getElementById('current-score').textContent = 0;
    updateProgress();
}

function updateProgress() {
    document.getElementById('current-q-num').textContent = currentState.qIdx + 1;
    const pct = ((currentState.qIdx) / currentState.questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${pct}%`;
}

function loadQuestion() {
    const qData = currentState.questions[currentState.qIdx];
    const container = document.getElementById('answers-container');
    const qText = document.getElementById('question-text');
    const feedback = document.getElementById('feedback-area');
    const nextBtn = document.getElementById('btn-next-q');
    
    qText.textContent = qData.q;
    container.innerHTML = '';
    feedback.className = 'feedback hidden'; // Reset classes
    feedback.classList.add('hidden');
    nextBtn.classList.add('hidden');
    
    if (currentState.mode === 'multiple-choice') {
        qData.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => checkAnswerMC(idx, btn);
            container.appendChild(btn);
        });
    } else {
        const input = document.createElement('textarea');
        input.className = 'essay-input';
        input.placeholder = "Ketik jawabanmu di sini...";
        input.rows = 2;
        
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn primary';
        submitBtn.textContent = 'Jawab';
        submitBtn.style.marginTop = '10px';
        submitBtn.onclick = () => checkAnswerEssay(input.value);
        
        container.appendChild(input);
        container.appendChild(submitBtn);
    }
}

function checkAnswerMC(selectedIndex, btnElement) {
    // Disable all buttons
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    const qData = currentState.questions[currentState.qIdx];
    const isCorrect = (selectedIndex === qData.answer);
    
    if (isCorrect) {
        btnElement.classList.add('correct');
        handleCorrect();
    } else {
        btnElement.classList.add('wrong');
        // Highlight correct one
        buttons[qData.answer].classList.add('correct');
        handleWrong();
    }
}

function checkAnswerEssay(userAnswer) {
    const qData = currentState.questions[currentState.qIdx];
    const possibleAnswers = qData.essayAnswer;
    
    // Simple normalization: lowercase and trim
    const normalizedMap = val => val.toLowerCase().trim();
    const userNorm = normalizedMap(userAnswer);
    
    const isCorrect = possibleAnswers.some(ans => userNorm.includes(normalizedMap(ans)));
    
    if (isCorrect) {
        handleCorrect();
    } else {
        handleWrong();
    }
    
    // Disable input
    const input = document.querySelector('.essay-input');
    const btn = document.querySelector('#answers-container button');
    if(input) input.disabled = true;
    if(btn) btn.disabled = true;
}

function handleCorrect() {
    currentState.score += (100 / currentState.questions.length);
    showFeedback(true);
}

function handleWrong() {
    showFeedback(false);
}

function showFeedback(isCorrect) {
    const feedback = document.getElementById('feedback-area');
    const msg = document.getElementById('feedback-message');
    const nextBtn = document.getElementById('btn-next-q');
    
    feedback.classList.remove('hidden', 'is-correct', 'is-wrong');
    feedback.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
    
    const qData = currentState.questions[currentState.qIdx];
    
    msg.innerHTML = `<strong>${isCorrect ? 'Benar!' : 'Salah!'}</strong> <br> ${qData.explanation}`;
    
    // Update score display
    document.getElementById('current-score').textContent = Math.round(currentState.score);
    
    nextBtn.classList.remove('hidden');
    
    // Scroll to bottom if needed
    feedback.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('btn-next-q').addEventListener('click', () => {
    currentState.qIdx++;
    if (currentState.qIdx < currentState.questions.length) {
        updateProgress();
        loadQuestion();
    } else {
        endLevel();
    }
});

function endLevel() {
    showScreen('result');
    const finalScore = Math.round(currentState.score);
    const passed = finalScore >= 70;
    
    document.getElementById('final-score').textContent = finalScore;
    document.getElementById('result-title').textContent = passed ? "Lulus!" : "Belum Lulus";
    document.getElementById('result-message').textContent = passed 
        ? "Hebat! Kamu sudah menguasai materi level ini." 
        : "Jangan menyerah! Coba lagi untuk memahami materi.";
        
    const nextLevelBtn = document.getElementById('btn-next-level');
    
    if (passed) {
        // Unlock next level if available and not already unlocked
        if (currentState.levelIdx + 1 < LEVELS.length) {
            // Check if we are at the max unlocked level
            if (currentState.levelIdx + 1 >= currentState.maxUnlockedLevel) {
                currentState.maxUnlockedLevel = currentState.levelIdx + 2;
            }
            nextLevelBtn.classList.remove('hidden');
        } else {
            nextLevelBtn.classList.add('hidden'); // End of game
            document.getElementById('result-message').textContent += " Kamu telah menamatkan semua level!";
        }
    } else {
        nextLevelBtn.classList.add('hidden');
    }
}

// Result Screen Actions
document.getElementById('btn-retry').addEventListener('click', () => {
    // Retry same level, same mode (or could ask mode again, but usually retry implies same settings)
    startLevel(currentState.levelIdx, currentState.mode);
});

document.getElementById('btn-next-level').addEventListener('click', () => {
    const nextIdx = currentState.levelIdx + 1;
    if (nextIdx < LEVELS.length) {
        // Default to MC or ask mode? Let's ask mode for next level
        // But the flow is easier if we just go to level selection or open mode modal
        // Let's open mode modal for next level
        openModeSelection(nextIdx);
    }
});

document.getElementById('btn-home').addEventListener('click', () => {
    showScreen('welcome');
});
