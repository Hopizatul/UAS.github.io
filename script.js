// Game Data
const LEVELS = [
    {
        id: 1,
        title: "Level 1: Pengenalan Pemrograman",
        description: "Konsep dasar: program, input, dan output.",
        questions: [
            {
                type: "mc",
                q: "Apa itu 'Program' komputer?",
                options: ["Kumpulan instruksi untuk komputer", "Alat pembersih virus", "Bagian dari hardware monitor", "Game online saja"],
                answer: 0,
                essayAnswer: ["instruksi", "kumpulan instruksi", "kode"],
                explanation: "Program adalah serangkaian instruksi yang ditulis untuk memberitahu komputer apa yang harus dilakukan."
            },
            {
                type: "mc",
                q: "Perintah untuk menampilkan output ke layar disebut...",
                options: ["Input", "Output / Print", "Process", "Delete"],
                answer: 1,
                essayAnswer: ["output", "print", "console.log"],
                explanation: "Output adalah hasil pemrosesan yang ditampilkan, seringkali menggunakan perintah print atau console.log."
            },
            {
                type: "mc",
                q: "Data yang dimasukkan pengguna ke dalam program disebut...",
                options: ["Output", "Input", "Loop", "Bug"],
                answer: 1,
                essayAnswer: ["input"],
                explanation: "Input adalah data atau informasi yang diterima program dari pengguna atau sumber lain."
            },
            {
                type: "mc",
                q: "Manakah contoh bahasa pemrograman?",
                options: ["HTML", "Microsoft Word", "Python", "Google Chrome"],
                answer: 2,
                essayAnswer: ["python", "java", "cpp", "javascript"],
                explanation: "Python, Java, C++, dan JavaScript adalah contoh bahasa pemrograman. HTML adalah bahasa markup."
            },
            {
                type: "mc",
                q: "Langkah pertama dalam membuat program biasanya adalah...",
                options: ["Menulis kode langsung", "Memahami masalah & Algoritma", "Mendesain logo", "Merakit komputer"],
                answer: 1,
                essayAnswer: ["algoritma", "paham masalah", "desain logika"],
                explanation: "Sebelum menulis kode (coding), programmer harus memahami masalah dan merancang algoritma."
            },
            {
                type: "mc",
                q: "Kode sumber (Source Code) ditulis menggunakan...",
                options: ["Teks Editor / IDE", "Paint", "Calculator", "Music Player"],
                answer: 0,
                essayAnswer: ["teks editor", "ide", "editor"],
                explanation: "Programmer menulis kode di Text Editor (seperti Notepad++, VS Code) atau IDE."
            },
            {
                type: "mc",
                q: "Apa tugas dari 'Compiler' atau 'Interpreter'?",
                options: ["Menerjemahkan kode ke bahasa mesin", "Menghapus kode", "Memperbaiki komputer rusak", "Menyimpan file"],
                answer: 0,
                essayAnswer: ["terjemah", "translator", "kompilasi"],
                explanation: "Mereka menerjemahkan kode yang ditulis manusia menjadi instruksi yang dimengerti mesin (biner)."
            }
        ]
    },
    {
        id: 2,
        title: "Level 2: Variabel & Tipe Data",
        description: "Integer, string, boolean, deklarasi variabel.",
        questions: [
            {
                type: "mc",
                q: "Apa itu 'Variabel'?",
                options: ["Wadah penyimpanan data", "Nilai tetap", "Fungsi matematika", "Perulangan"],
                answer: 0,
                essayAnswer: ["wadah", "penyimpan data", "tempat data"],
                explanation: "Variabel ibarat wadah atau kotak untuk menyimpan nilai data di memori."
            },
            {
                type: "mc",
                q: "Manakah yang merupakan tipe data bilangan bulat?",
                options: ["String", "Integer", "Float", "Boolean"],
                answer: 1,
                essayAnswer: ["integer", "int"],
                explanation: "Integer (int) digunakan untuk menyimpan bilangan bulat (contoh: 5, -10, 100)."
            },
            {
                type: "mc",
                q: "Tipe data 'String' digunakan untuk...",
                options: ["Angka desimal", "Teks / Karakter", "Kondisi Benar/Salah", "List data"],
                answer: 1,
                essayAnswer: ["teks", "karakter", "tulisan"],
                explanation: "String adalah tipe data untuk teks, biasanya diapit tanda kutip (contoh: 'Halo')."
            },
            {
                type: "mc",
                q: "Nilai dari tipe data Boolean adalah...",
                options: ["1 sampai 10", "A sampai Z", "True atau False", "Positif atau Negatif"],
                answer: 2,
                essayAnswer: ["true false", "benar salah"],
                explanation: "Boolean hanya memiliki dua kemungkinan nilai: True (Benar) atau False (Salah)."
            },
            {
                type: "mc",
                q: "Contoh penulisan String yang benar adalah...",
                options: ["Hello", "'Hello'", "123", "True"],
                answer: 1,
                essayAnswer: ["'hello'", "\"hello\""],
                explanation: "String harus diapit oleh tanda kutip tunggal ('...') atau ganda (\"...\")."
            },
            {
                type: "mc",
                q: "Untuk menyimpan nilai 3.14, tipe data yang cocok adalah...",
                options: ["Integer", "String", "Float / Double", "Boolean"],
                answer: 2,
                essayAnswer: ["float", "double", "desimal"],
                explanation: "Float atau Double digunakan untuk bilangan pecahan/desimal."
            },
            {
                type: "mc",
                q: "Proses pembuatan variabel disebut...",
                options: ["Deklarasi", "Iterasi", "Kompilasi", "Eksekusi"],
                answer: 0,
                essayAnswer: ["deklarasi", "inisialisasi"],
                explanation: "Mengenalkan nama variabel ke program disebut deklarasi."
            }
        ]
    },
    {
        id: 3,
        title: "Level 3: Operator & Ekspresi",
        description: "Aritmatika, perbandingan, dan logika dasar.",
        questions: [
            {
                type: "mc",
                q: "Simbol '*' dalam pemrograman biasanya berarti...",
                options: ["Kali", "Bagi", "Tambah", "Pangkat"],
                answer: 0,
                essayAnswer: ["kali", "perkalian"],
                explanation: "Tanda bintang (*) adalah operator untuk perkalian."
            },
            {
                type: "mc",
                q: "Hasil dari 10 % 3 (Modulus) adalah...",
                options: ["3", "1", "0", "3.33"],
                answer: 1,
                essayAnswer: ["1", "satu"],
                explanation: "Modulus (%) mencari sisa bagi. 10 dibagi 3 adalah 3 sisa 1."
            },
            {
                type: "mc",
                q: "Operator perbandingan '==' artinya...",
                options: ["Sama dengan", "Lebih besar", "Tidak sama", "Penugasan"],
                answer: 0,
                essayAnswer: ["sama dengan", "setara"],
                explanation: "'==' digunakan untuk membandingkan apakah dua nilai sama."
            },
            {
                type: "mc",
                q: "Operator Logika 'AND' (&&) bernilai True jika...",
                options: ["Salah satu benar", "Semua salah", "Semua kondisi benar", "Tidak ada yang benar"],
                answer: 2,
                essayAnswer: ["semua benar", "keduanya benar"],
                explanation: "Logika AND hanya menghasilkan True jika SEMUA kondisi yang diuji bernilai True."
            },
            {
                type: "mc",
                q: "Manakah operator 'Tidak Sama Dengan'?",
                options: ["==", "=", "!=", "<>"],
                answer: 2,
                essayAnswer: ["!=", "tidak sama"],
                explanation: "'!=' (atau <> di beberapa bahasa) berarti tidak sama dengan."
            },
            {
                type: "mc",
                q: "Jika A = True dan B = False, maka A OR B adalah...",
                options: ["True", "False", "Error", "Null"],
                answer: 0,
                essayAnswer: ["true", "benar"],
                explanation: "Logika OR (||) bernilai True jika SALAH SATU atau KEDUANYA benar."
            },
            {
                type: "mc",
                q: "Operator assignment dasar adalah...",
                options: ["=", "==", "+", ":"],
                answer: 0,
                essayAnswer: ["=", "sama dengan"],
                explanation: "Tanda '=' digunakan untuk memberi nilai ke variabel (Assignment)."
            }
        ]
    },
    {
        id: 4,
        title: "Level 4: Percabangan (IF-ELSE)",
        description: "Pengambilan keputusan dalam program.",
        questions: [
            {
                type: "mc",
                q: "Struktur IF digunakan untuk...",
                options: ["Mengulang kode", "Membuat keputusan berdasarkan kondisi", "Menyimpan data", "Keluar aplikasi"],
                answer: 1,
                essayAnswer: ["keputusan", "kondisi", "percabangan"],
                explanation: "IF mengecek kondisi, jika benar maka blok kode dijalankan."
            },
            {
                type: "mc",
                q: "Bagian 'ELSE' akan dijalankan jika...",
                options: ["Kondisi IF benar", "Kondisi IF salah", "Selalu dijalankan", "Tidak ada kondisi"],
                answer: 1,
                essayAnswer: ["if salah", "salah", "false"],
                explanation: "ELSE menangani skenario ketika kondisi IF tidak terpenuhi (False)."
            },
            {
                type: "mc",
                q: "Apa output jika: Nilai = 80. IF (Nilai > 70) print 'Lulus' ELSE print 'Gagal'?",
                options: ["Lulus", "Gagal", "Error", "Tidak ada output"],
                answer: 0,
                essayAnswer: ["lulus"],
                explanation: "Karena 80 > 70 bernilai True, maka program mencetak 'Lulus'."
            },
            {
                type: "mc",
                q: "Untuk mengecek banyak kondisi bertingkat, kita gunakan...",
                options: ["IF-ELSE IF-ELSE", "Looping", "Function", "Array"],
                answer: 0,
                essayAnswer: ["else if", "elif", "bertingkat"],
                explanation: "ELSE IF memungkinkan kita mengecek kondisi baru jika kondisi sebelumnya salah."
            },
            {
                type: "mc",
                q: "Struktur pengganti IF-ELSE yang membaca nilai variabel tertentu adalah...",
                options: ["Switch-Case", "For Loop", "While Loop", "Do-While"],
                answer: 0,
                essayAnswer: ["switch case", "switch"],
                explanation: "Switch-Case digunakan untuk memilih satu dari banyak blok kode berdasarkan nilai variabel."
            },
            {
                type: "mc",
                q: "Kondisi dalam IF harus menghasilkan nilai...",
                options: ["Integer", "String", "Boolean (True/False)", "Array"],
                answer: 2,
                essayAnswer: ["boolean", "true false"],
                explanation: "Percabangan bergantung pada nilai kebenaran (Boolean) dari suatu kondisi."
            },
            {
                type: "mc",
                q: "Apa simbol untuk blok kode dalam banyak bahasa (seperti JS/C++)?",
                options: ["()", "[]", "{}", "<>"],
                answer: 2,
                essayAnswer: ["kurung kurawal", "curly braces", "{}"],
                explanation: "Kurung kurawal {} menandai awal dan akhir dari blok kode instruksi."
            }
        ]
    },
    {
        id: 5,
        title: "Level 5: Perulangan (Loop)",
        description: "For, While, dan konsep iterasi.",
        questions: [
            {
                type: "mc",
                q: "Fungsi utama Looping adalah...",
                options: ["Membuat keputusan", "Menjalankan kode berulang kali", "Menyimpan file", "Matematika"],
                answer: 1,
                essayAnswer: ["ulang", "repetisi", "berulang"],
                explanation: "Looping mengotomatiskan tugas yang perlu dilakukan berkali-kali."
            },
            {
                type: "mc",
                q: "Loop yang jumlah perulangannya sudah diketahui pasti biasanya menggunakan...",
                options: ["For Loop", "While Loop", "If statement", "Switch"],
                answer: 0,
                essayAnswer: ["for", "for loop"],
                explanation: "For Loop ideal untuk iterasi dengan jumlah yang pasti (misal: 1 sampai 10)."
            },
            {
                type: "mc",
                q: "Loop yang berjalan terus SELAMA kondisi belum terpenuhi biasanya menggunakan...",
                options: ["For Loop", "While Loop", "If statement", "Array"],
                answer: 1,
                essayAnswer: ["while", "while loop"],
                explanation: "While Loop mengecek kondisi dulu, dan terus berjalan selama kondisinya True."
            },
            {
                type: "mc",
                q: "Apa itu 'Infinite Loop'?",
                options: ["Loop super cepat", "Loop yang tidak pernah berhenti", "Loop sekali jalan", "Loop kosong"],
                answer: 1,
                essayAnswer: ["tak berhenti", "loop abadi", "error"],
                explanation: "Infinite loop terjadi jika tidak ada kondisi yang menghentikan perulangan."
            },
            {
                type: "mc",
                q: "Perintah 'Break' dalam loop berfungsi untuk...",
                options: ["Lanjut ke putaran berikut", "Menghentikan loop seketika", "Menghapus loop", "Mempercepat loop"],
                answer: 1,
                essayAnswer: ["henti", "keluar", "stop"],
                explanation: "Break memaksa program keluar dari dalam loop."
            },
            {
                type: "mc",
                q: "Dalam 'for (i=0; i<5; i++)', loop berjalan berapa kali?",
                options: ["4", "5", "6", "0"],
                answer: 1,
                essayAnswer: ["5", "lima"],
                explanation: "Loop berjalan untuk i = 0, 1, 2, 3, 4. Total 5 kali."
            },
            {
                type: "mc",
                q: "Variabel 'i' dalam loop sering disebut sebagai...",
                options: ["Index / Counter", "Input", "Output", "Constant"],
                answer: 0,
                essayAnswer: ["counter", "penghitung", "index"],
                explanation: "Variabel ini menghitung sudah berapa kali loop berjalan."
            }
        ]
    },
    {
        id: 6,
        title: "Level 6: Array & List",
        description: "Penyimpanan banyak data dan akses indeks.",
        questions: [
            {
                type: "mc",
                q: "Apa itu Array?",
                options: ["Satu variabel untuk satu nilai", "Satu variabel untuk banyak nilai", "Fungsi matematika", "Looping"],
                answer: 1,
                essayAnswer: ["banyak nilai", "kumpulan data", "list"],
                explanation: "Array adalah struktur data yang dapat menyimpan sekumpulan nilai dalam satu nama variabel."
            },
            {
                type: "mc",
                q: "Indeks pertama dalam Array biasanya dimulai dari...",
                options: ["1", "0", "-1", "10"],
                answer: 1,
                essayAnswer: ["0", "nol"],
                explanation: "Dalam bahasa pemrograman populer (C, Java, JS, Python), indeks array dimulai dari 0."
            },
            {
                type: "mc",
                q: "Jika arr = [10, 20, 30], berapakah arr[2]?",
                options: ["10", "20", "30", "Error"],
                answer: 2,
                essayAnswer: ["30", "tiga puluh"],
                explanation: "Indeks: 0->10, 1->20, 2->30. Jadi arr[2] adalah 30."
            },
            {
                type: "mc",
                q: "Untuk mengetahui jumlah data dalam Array, kita gunakan properti...",
                options: ["size", "length", "width", "count"],
                answer: 1,
                essayAnswer: ["length", "panjang"],
                explanation: "Property .length (di JS/Java) atau len() (di Python) memberi tahu jumlah item."
            },
            {
                type: "mc",
                q: "Menambah data baru ke dalam Array disebut...",
                options: ["Push / Insert", "Pop", "Delete", "Loop"],
                answer: 0,
                essayAnswer: ["push", "insert", "tambah"],
                explanation: "Push (JS) atau Append (Python) digunakan untuk memasukkan data baru ke array."
            },
            {
                type: "mc",
                q: "Array dapat menampung tipe data...",
                options: ["Hanya Integer", "Hanya String", "Berbagai tipe data", "Tidak bisa simpan data"],
                answer: 2,
                essayAnswer: ["berbagai", "semua", "campuran"],
                explanation: "Di banyak bahasa dinamis (seperti JS/Python), array bisa diisi campuran tipe data."
            },
            {
                type: "mc",
                q: "Apa itu Array Multidimensi?",
                options: ["Array di dalam Array", "Array kosong", "Array error", "Array satu data"],
                answer: 0,
                essayAnswer: ["array dalam array", "matriks", "tabel"],
                explanation: "Array multidimensi (seperti matriks) adalah array yang elemennya juga berupa array."
            }
        ]
    },
    {
        id: 7,
        title: "Level 7: Fungsi (Function)",
        description: "Parameter, return value, modularisasi kode.",
        questions: [
            {
                type: "mc",
                q: "Apa kegunaan utama Fungsi?",
                options: ["Memperlambat program", "Menggunakan kembali kode (Reuse)", "Memenuhi memori", "Membuat error"],
                answer: 1,
                essayAnswer: ["reuse", "penggunaan ulang", "modular"],
                explanation: "Fungsi memungkinkan kita menulis kode sekali dan memanggilnya berkali-kali."
            },
            {
                type: "mc",
                q: "Data yang dikirimkan ke dalam fungsi disebut...",
                options: ["Parameter / Argumen", "Variabel Lokal", "Output", "Return"],
                answer: 0,
                essayAnswer: ["parameter", "argumen"],
                explanation: "Parameter adalah variabel input yang diterima oleh fungsi."
            },
            {
                type: "mc",
                q: "Perintah 'Return' digunakan untuk...",
                options: ["Mengulang fungsi", "Mengembalikan nilai output", "Menghapus fungsi", "Print ke layar"],
                answer: 1,
                essayAnswer: ["kembali", "return value", "output"],
                explanation: "Return mengakhiri eksekusi fungsi dan memberikan hasil (output) ke pemanggil."
            },
            {
                type: "mc",
                q: "Apa itu fungsi 'Void'?",
                options: ["Fungsi yang mengembalikan angka", "Fungsi yang tidak mengembalikan nilai", "Fungsi error", "Fungsi utama"],
                answer: 1,
                essayAnswer: ["tidak mengembalikan nilai", "tanpa return", "no return"],
                explanation: "Fungsi void menjalankan aksi (seperti print) tetapi tidak menghasilkan nilai return."
            },
            {
                type: "mc",
                q: "Pemanggilan fungsi dilakukan dengan tanda...",
                options: ["[]", "{}", "()", "<>"],
                answer: 2,
                essayAnswer: ["()", "kurung"],
                explanation: "Tanda kurung () digunakan untuk memanggil (invoke) sebuah fungsi."
            },
            {
                type: "mc",
                q: "Variabel yang hanya dikenal di dalam fungsi disebut...",
                options: ["Variabel Global", "Variabel Lokal", "Konstanta", "Parameter"],
                answer: 1,
                essayAnswer: ["lokal", "local"],
                explanation: "Variabel lokal hanya hidup di dalam scope fungsi tersebut."
            },
            {
                type: "mc",
                q: "Konsep memecah program besar menjadi fungsi-fungsi kecil disebut...",
                options: ["Modularisasi", "Komplikasi", "Duplikasi", "Looping"],
                answer: 0,
                essayAnswer: ["modular", "modularisasi"],
                explanation: "Modularisasi membuat kode lebih rapi, mudah dibaca, dan mudah dikelola."
            }
        ]
    },
    {
        id: 8,
        title: "Level 8: Object & OOP Dasar",
        description: "Class, object, properti, dan method.",
        questions: [
            {
                type: "mc",
                q: "OOP adalah singkatan dari...",
                options: ["Object Oriented Programming", "Only One Program", "Object Over Process", "Organization of Program"],
                answer: 0,
                essayAnswer: ["object oriented programming"],
                explanation: "OOP adalah paradigma pemrograman berbasis objek."
            },
            {
                type: "mc",
                q: "Blueprint atau cetakan untuk membuat objek disebut...",
                options: ["Class", "Method", "Variable", "Array"],
                answer: 0,
                essayAnswer: ["class", "kelas"],
                explanation: "Class adalah definisi/cetakan, sedangkan Object adalah wujud nyatanya (instance)."
            },
            {
                type: "mc",
                q: "Data/ciri-ciri yang dimiliki oleh objek disebut...",
                options: ["Method", "Properti / Atribut", "Function", "Loop"],
                answer: 1,
                essayAnswer: ["properti", "atribut"],
                explanation: "Contoh: Objek Mobil punya properti warna, merk, jumlah roda."
            },
            {
                type: "mc",
                q: "Perilaku atau aksi yang bisa dilakukan objek disebut...",
                options: ["Properti", "Method", "Background", "String"],
                answer: 1,
                essayAnswer: ["method", "metode"],
                explanation: "Method adalah fungsi yang menempel pada objek (contoh: mobil.maju())."
            },
            {
                type: "mc",
                q: "Konsep 'Inheritance' dalam OOP berarti...",
                options: ["Pewarisan sifat dari Parent ke Child", "Objek yang banyak", "Menghapus objek", "Polimorfisme"],
                answer: 0,
                essayAnswer: ["pewarisan", "turunan"],
                explanation: "Inheritance memungkinkan class baru mewarisi properti/method dari class yang sudah ada."
            },
            {
                type: "mc",
                q: "Membuat objek baru dari sebuah class disebut...",
                options: ["Instansiasi", "Deklarasi", "Looping", "Inheritance"],
                answer: 0,
                essayAnswer: ["instansiasi", "instance"],
                explanation: "Instansiasi adalah proses penciptaan objek (instance) dari sebuah class."
            },
            {
                type: "mc",
                q: "Dalam JS, objek biasanya ditulis dengan kurung...",
                options: ["()", "[]", "{}", "<>"],
                answer: 2,
                essayAnswer: ["{}", "kurawal"],
                explanation: "Objek literal di JS ditulis dengan { update: '...' }."
            }
        ]
    },
    {
        id: 9,
        title: "Level 9: Logika Algoritma",
        description: "Studi kasus sederhana dan pemecahan masalah.",
        questions: [
            {
                type: "mc",
                q: "Algoritma untuk menukar isi dua gelas (A dan B) membutuhkan...",
                options: ["Gelas C (cadangan)", "Langsung tuang A ke B", "Pecahkan gelas", "Minum isinya"],
                answer: 0,
                essayAnswer: ["gelas c", "temp", "variabel sementara"],
                explanation: "Kita butuh variabel sementara (temp) untuk menampung isi A sebelum A diisi B."
            },
            {
                type: "mc",
                q: "Apa itu 'Pseudocode'?",
                options: ["Kode palsu / Rancangan kode", "Kode yang error", "Bahasa mesin", "Komentar"],
                answer: 0,
                essayAnswer: ["rancangan", "kode semu", "deskripsi"],
                explanation: "Pseudocode adalah deskripsi algoritma yang mirip kode tapi untuk dibaca manusia."
            },
            {
                type: "mc",
                q: "Flowchart menggunakan simbol 'Belah Ketupat' untuk...",
                options: ["Start/End", "Process", "Keputusan / Decision", "Input/Output"],
                answer: 2,
                essayAnswer: ["keputusan", "decision", "kondisi"],
                explanation: "Belah ketupat melambangkan percabangan (Ya/Tidak) dalam diagram alir."
            },
            {
                type: "mc",
                q: "Algoritma pengurutan data dari kecil ke besar disebut...",
                options: ["Sorting Ascending", "Sorting Descending", "Search", "Looping"],
                answer: 0,
                essayAnswer: ["ascending", "sort ascending"],
                explanation: "Ascending (menanjak) berarti urut dari kecil ke besar."
            },
            {
                type: "mc",
                q: "Pencarian data dengan mengecek satu persatu disebut...",
                options: ["Binary Search", "Linear / Sequential Search", "Google Search", "Quick Sort"],
                answer: 1,
                essayAnswer: ["linear", "sequential", "berurutan"],
                explanation: "Linear search mengecek setiap elemen dari awal sampai ketemu."
            },
            {
                type: "mc",
                q: "Looping bersarang (Nested Loop) sering digunakan untuk...",
                options: ["Memproses matriks / pola", "Menghitung 1+1", "Membuat variabel", "Input data"],
                answer: 0,
                essayAnswer: ["matriks", "pola", "nested"],
                explanation: "Loop di dalam loop diperlukan untuk akses data 2 dimensi (baris & kolom)."
            },
            {
                type: "mc",
                q: "Jika algoritma tidak pernah berhenti (infinite loop), itu adalah...",
                options: ["Fitur", "Logical Error", "Syntax Error", "Hardware Error"],
                answer: 1,
                essayAnswer: ["logical error", "kesalahan logika"],
                explanation: "Kesalahan logika menyebabkan program jalan tapi hasilnya salah/macet."
            }
        ]
    },
    {
        id: 10,
        title: "Level 10: Konsep Pemrograman Web",
        description: "Dasar HTML, CSS, JavaScript, dan alur kerja web.",
        questions: [
            {
                type: "mc",
                q: "Tiga pilar utama web frontend adalah...",
                options: ["HTML, CSS, JavaScript", "Java, C++, Python", "Word, Excel, PPT", "Wifi, Browser, Mouse"],
                answer: 0,
                essayAnswer: ["html css javascript", "html css js"],
                explanation: "HTML untuk struktur, CSS untuk gaya, JS untuk interaksi."
            },
            {
                type: "mc",
                q: "Fungsi utama 'Browser' adalah...",
                options: ["Mengedit foto", "Menerjemahkan kode web & menampilkannya", "Membuat server", "Database"],
                answer: 1,
                essayAnswer: ["render", "menampilkan web"],
                explanation: "Browser (Chrome, Firefox) merender kode HTML/CSS/JS menjadi tampilan visual."
            },
            {
                type: "mc",
                q: "Di mana biasanya file website disimpan agar bisa diakses internet?",
                options: ["Harddisk pribadi", "Web Server / Hosting", "Flashdisk", "Printer"],
                answer: 1,
                essayAnswer: ["server", "hosting", "web server"],
                explanation: "Website di-hosting di server yang selalu online agar bisa diakses siapa saja."
            },
            {
                type: "mc",
                q: "CSS adalah singkatan dari...",
                options: ["Computer Style Sheet", "Cascading Style Sheets", "Creative Style System", "Code Style Source"],
                answer: 1,
                essayAnswer: ["cascading style sheets"],
                explanation: "Cascading Style Sheets mengatur tampilan halaman web."
            },
            {
                type: "mc",
                q: "Apa fungsi JavaScript di website?",
                options: ["Membuat struktur", "Mewarnai teks", "Membuat interaksi & logika dinamis", "Menyimpan gambar"],
                answer: 2,
                essayAnswer: ["interaksi", "dinamis", "logika"],
                explanation: "JS membuat web 'hidup' (slider, validasi form, game, dll)."
            },
            {
                type: "mc",
                q: "Apa itu 'Responsive Design'?",
                options: ["Desain yang merespon suara", "Tampilan menyesuaikan ukuran layar (HP/PC)", "Desain mahal", "Web lambat"],
                answer: 1,
                essayAnswer: ["menyesuaikan layar", "responsif", "mobile friendly"],
                explanation: "Web responsif terlihat bagus di berbagai ukuran perangkat (Desktop, Tablet, HP)."
            },
            {
                type: "mc",
                q: "Full-Stack Developer adalah...",
                options: ["Ahli Frontend & Backend", "Hanya bisa HTML", "Pembuat Database saja", "Teknisi jaringan"],
                answer: 0,
                essayAnswer: ["frontend backend", "semuanya", "fullstack"],
                explanation: "Full-Stack menguasai sisi klien (frontend) dan sisi server (backend)."
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
    mode: 'multiple-choice', // 'multiple-choice' or 'essay'
    maxUnlockedLevel: 1,
    levelProgress: {} // { levelId: { score: 0, stars: 0 } }
};

// Persistence Logic
function loadProgress() {
    const saved = localStorage.getItem('pemrogramanQuizProgress');
    if (saved) {
        const parsed = JSON.parse(saved);
        currentState.maxUnlockedLevel = parsed.maxUnlockedLevel || 1;
        currentState.levelProgress = parsed.levelProgress || {};
    }
}

function saveProgress() {
    const dataToSave = {
        maxUnlockedLevel: currentState.maxUnlockedLevel,
        levelProgress: currentState.levelProgress
    };
    localStorage.setItem('pemrogramanQuizProgress', JSON.stringify(dataToSave));
}

// Sound Effects
// --- WEB AUDIO API SOUND SYSTEM ---
const AudioEngine = {
    ctx: null,
    bgmOscillators: [],
    bgmGain: null,
    isPlayingBGM: false,

    init: function () {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },

    playTone: function (freq, type, duration, startTime = 0, volume = 0.1) {
        if (!this.ctx) this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

        gain.gain.setValueAtTime(volume, this.ctx.currentTime + startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + startTime);
        osc.stop(this.ctx.currentTime + startTime + duration);
    },

    // SFX: Click
    click: function () {
        // Short high blip
        this.playTone(600, 'sine', 0.1, 0, 0.1);
    },

    // SFX: Correct (Ding-Dong)
    correct: function () {
        // C5 then E5
        this.playTone(523.25, 'sine', 0.3, 0, 0.1); // C
        this.playTone(659.25, 'sine', 0.4, 0.2, 0.1); // E
    },

    // SFX: Wrong (Low Buzz)
    wrong: function () {
        // Low Sawtooth
        this.playTone(150, 'sawtooth', 0.3, 0, 0.15);
        this.playTone(130, 'sawtooth', 0.3, 0.1, 0.15);
    },

    // SFX: Level Up (Fanfare)
    levelup: function () {
        const now = 0;
        // C - E - G - C(high)
        this.playTone(523.25, 'square', 0.2, now, 0.1);
        this.playTone(659.25, 'square', 0.2, now + 0.15, 0.1);
        this.playTone(783.99, 'square', 0.2, now + 0.30, 0.1);
        this.playTone(1046.50, 'square', 0.6, now + 0.45, 0.1);
    },

    // BGM: Simple Ambient Loop using Oscillator scheduling is complex for infinite loop without checking time.
    // Instead, we'll use a simple "tick" interval for a sequence.
    bgmInterval: null,
    bgmNoteIndex: 0,
    bgmNotes: [261.63, 329.63, 392.00, 329.63], // C-E-G-E Arpeggio background

    startBGM: function () {
        // Disabled
    },

    stopBGM: function () {
        this.isPlayingBGM = false;
        if (this.bgmInterval) {
            clearInterval(this.bgmInterval);
            this.bgmInterval = null;
        }
    }
};

function playSound(type) {
    // Map old calls to new engine
    if (type === 'click') AudioEngine.click();
    if (type === 'correct') AudioEngine.correct();
    if (type === 'wrong') AudioEngine.wrong();
    if (type === 'levelup') AudioEngine.levelup();
}

function playBGM() {
    AudioEngine.startBGM();
}

function stopBGM() {
    AudioEngine.stopBGM();
}

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
// Initial Setup
document.getElementById('btn-start').addEventListener('click', () => {
    playSound('click');
    // playBGM(); // Disabled
    loadProgress(); // Load before showing grid
    renderLevelGrid();
    showScreen('level');
});

document.querySelector('.back-home').addEventListener('click', () => {
    playSound('click');
    showScreen('welcome');
    // playBGM(); // Disabled
});

// Try to autoplay BGM on load (might be blocked)
window.addEventListener('click', () => {
    if (document.getElementById('welcome-screen').classList.contains('active')) {
        // playBGM(); // Disabled
    }
}, { once: true });

// Level Selection Logic
function renderLevelGrid() {
    const grid = document.querySelector('.level-grid');
    grid.innerHTML = '';

    LEVELS.forEach((level, idx) => {
        const isLocked = (idx + 1) > currentState.maxUnlockedLevel;
        const progress = currentState.levelProgress[level.id]; // Access by ID (1-based)
        const stars = progress ? progress.stars : 0;

        const card = document.createElement('div');
        card.className = `level-card ${isLocked ? 'locked' : ''}`;

        // Generate stars HTML
        let starsHtml = '';
        if (stars > 0) {
            starsHtml = `<div class="card-stars">` + '★'.repeat(stars) + '☆'.repeat(3 - stars) + `</div>`;
        }

        card.innerHTML = `
            <div class="level-info">
                <h3>${level.title}</h3>
                <p>${level.description}</p>
                ${starsHtml}
            </div>
            <div class="level-status">
                ${isLocked ? '🔒' : '▶'}
            </div>
        `;

        if (!isLocked) {
            card.addEventListener('click', () => {
                playSound('click');
                openModeSelection(idx);
            });
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
        playSound('click');
        const mode = btn.dataset.mode;
        startLevel(pendingLevelIdx, mode);
        modals.mode.classList.add('hidden');
    });
});

document.querySelector('.close-modal').addEventListener('click', () => {
    playSound('click');
    modals.mode.classList.add('hidden');
});

// Helper: Fisher-Yates Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Game Logic
function startLevel(levelIdx, mode) {
    currentState.levelIdx = levelIdx;
    currentState.currentLevel = LEVELS[levelIdx];
    currentState.mode = mode;
    currentState.score = 0;
    currentState.qIdx = 0;

    // Use robust shuffle for questions
    // Copy the original questions array to avoid modifying the const data directly (though usually safe if just sorting user copy)
    // Then shuffle and slice
    const allQuestions = [...currentState.currentLevel.questions];
    currentState.questions = shuffleArray(allQuestions).slice(0, 7);

    updateGameHeader();
    showScreen('game');

    // Stop BGM when game starts (as per requirement for BGM on main/level screens only)
    stopBGM();

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
            btn.onclick = () => {
                playSound('click');
                checkAnswerMC(idx, btn);
            };
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
        submitBtn.onclick = () => {
            playSound('click');
            checkAnswerEssay(input.value);
        };

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
    if (input) input.disabled = true;
    if (btn) btn.disabled = true;
}

function handleCorrect() {
    currentState.score += (100 / currentState.questions.length);
    playSound('correct');
    showFeedback(true);
}

function handleWrong() {
    playSound('wrong');
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
    playSound('click');
    currentState.qIdx++;
    if (currentState.qIdx < currentState.questions.length) {
        updateProgress();
        loadQuestion();
    } else {
        endLevel();
    }
});

function getStarRating(score) {
    if (score >= 80) return 3;
    if (score >= 60) return 2;
    return 1;
}

function getBadge(levelIdx) {
    // Level is 0-indexed in code (0-9), user sees 1-10
    const userLevel = levelIdx + 1;
    if (userLevel <= 3) return { title: "Beginner Coder", icon: "🎖️" };
    if (userLevel <= 6) return { title: "Junior Programmer", icon: "🏅" };
    if (userLevel <= 9) return { title: "Advanced Coder", icon: "🥇" };
    return { title: "Coding Master", icon: "👑" };
}

// Back Button Logic
document.getElementById('btn-back-quiz').addEventListener('click', () => {
    playSound('click');
    if (confirm("Apakah kamu yakin ingin kembali? Progres soal pada level ini akan diulang.")) {
        showScreen('level');
        // playBGM(); // Disabled
        // Reset game state slightly so if they re-enter it starts fresh
        currentState.qIdx = 0;
        currentState.score = 0;
    }
});

function endLevel() {
    showScreen('result');
    const finalScore = Math.round(currentState.score);
    const passed = finalScore >= 60; // Adjusted threshold per star requirements (60 is 1 star)

    // Update Score Circle
    document.getElementById('final-score').textContent = finalScore;

    // Update Stars
    const starCount = getStarRating(finalScore);
    const starsContainer = document.getElementById('stars-display');
    starsContainer.innerHTML = '';

    // Create animated stars
    for (let i = 1; i <= 3; i++) {
        const star = document.createElement('span');
        star.className = `star ${i <= starCount ? 'active' : ''}`;
        star.innerHTML = '★';
        star.style.animationDelay = `${i * 0.2}s`;
        starsContainer.appendChild(star);
    }

    // Update Badge
    const badgeContainer = document.getElementById('badge-display');
    if (passed) {
        playSound('levelup');

        // SAVE PROGRESS
        const levelId = currentState.currentLevel.id;
        // Only update if new score is better or first time
        const currentBest = currentState.levelProgress[levelId];
        if (!currentBest || finalScore > currentBest.score) {
            currentState.levelProgress[levelId] = {
                score: finalScore,
                stars: starCount
            };
        }

        // Unlock next level logic
        if (currentState.levelIdx + 1 < LEVELS.length) {
            if (currentState.levelIdx + 1 >= currentState.maxUnlockedLevel) {
                currentState.maxUnlockedLevel = currentState.levelIdx + 2; // Unlock next (+2 because idx is 0-based, levels are 1-based, and we want NEXT level)
            }
        }

        saveProgress();
        // END SAVE PROGRESS

        const badgeData = getBadge(currentState.levelIdx);
        document.getElementById('badge-icon').textContent = badgeData.icon;
        document.getElementById('badge-name').textContent = badgeData.title;
        badgeContainer.classList.remove('hidden');

        document.getElementById('result-title').textContent = "Lulus!";
        document.getElementById('result-message').innerHTML = `
            Hebat! Kamu mendapatkan <strong>${starCount} Bintang</strong>.<br>
            Ayo lanjut ke level berikutnya!
        `;
    } else {
        badgeContainer.classList.add('hidden');
        document.getElementById('result-title').textContent = "Belum Lulus";
        document.getElementById('result-message').textContent = "Nilai kamu masih dibawah 60. Yuk coba lagi!";
    }

    const nextLevelBtn = document.getElementById('btn-next-level');

    if (passed) {
        if (currentState.levelIdx + 1 < LEVELS.length) {
            nextLevelBtn.classList.remove('hidden');
        } else {
            nextLevelBtn.classList.add('hidden');
            document.getElementById('result-message').innerHTML += "<br><strong>Kamu telah menamatkan semua level!</strong>";
        }
    } else {
        nextLevelBtn.classList.add('hidden');
    }
}

// Result Screen Actions
document.getElementById('btn-retry').addEventListener('click', () => {
    playSound('click');
    startLevel(currentState.levelIdx, currentState.mode);
});

document.getElementById('btn-next-level').addEventListener('click', () => {
    playSound('click');
    const nextIdx = currentState.levelIdx + 1;
    if (nextIdx < LEVELS.length) {
        // Default to MC or ask mode? Let's ask mode for next level
        // But the flow is easier if we just go to level selection or open mode modal
        // Let's open mode modal for next level
        openModeSelection(nextIdx);
    }
});

document.getElementById('btn-home').addEventListener('click', () => {
    playSound('click');
    showScreen('welcome');
    // playBGM(); // Disabled
});
