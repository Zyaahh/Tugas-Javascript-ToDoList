console.log("Bismillah Tugas Promnet Kelar");


// AKTIVITAS 1 : DOM SELECTION

const InputTugas = document.getElementById("input-tugas");
const BtnTambah = document.getElementById("btn-tambah");
const DaftarTugas = document.getElementById("daftar-tugas");
const JumlahTugas = document.getElementById("jumlah-tugas");
const TugasTersisa = document.getElementById("tugas-tersisa");
const PesanKosong = document.getElementById("pesan-kosong");


// AKTIVITAS 2 : TO-DO LIST

function TambahTugas() {

    const TeksInput = InputTugas.value.trim();

    if (TeksInput === "") {
        alert("Silakan masukkan teks terlebih dahulu!");
        console.log("Tugas tidak boleh kosong.");
        return;
    }


    // A. MENAMBAHKAN TUGAS

    const TugasBaru = document.createElement("li");
    TugasBaru.classList.add("item-tugas");

    const BagianKiri = document.createElement("div");
    BagianKiri.classList.add("bagian-kiri");

    const TombolSelesai = document.createElement("button");
    TombolSelesai.classList.add("tombol-selesai");

    const TeksTugas = document.createElement("span");
    TeksTugas.classList.add("teks-tugas");
    TeksTugas.textContent = TeksInput;

    const TombolHapus = document.createElement("button");
    TombolHapus.classList.add("tombol-hapus");
    TombolHapus.textContent = "Hapus";


    BagianKiri.appendChild(TombolSelesai);
    BagianKiri.appendChild(TeksTugas);

    TugasBaru.appendChild(BagianKiri);
    TugasBaru.appendChild(TombolHapus);

    DaftarTugas.appendChild(TugasBaru);

    InputTugas.value = "";
    InputTugas.focus();

    PerbaruiJumlah();

    console.log(`Tugas berhasil ditambahkan: "${TeksInput}"`);


    // B. MENANDAI TUGAS SELESAI

    TombolSelesai.addEventListener("click", function() {
        TugasBaru.classList.toggle("sudah");
        PerbaruiJumlah();
        console.log(" tugas sudah selesai diubah!");
    });


    TeksTugas.addEventListener("click", function() {
        TugasBaru.classList.toggle("sudah");
        PerbaruiJumlah();
        console.log("tugas baru berhasil diubah!");
    });


    // C. MENGHAPUS TUGAS

    TombolHapus.addEventListener("click", function() {
        TugasBaru.remove();
        PerbaruiJumlah();
        console.log("Tugas berhasil dihapus!");
    });
}


// AKTIVITAS 3 : MEMPERBARUI JUMLAH TUGAS

function PerbaruiJumlah() {
    const SemuaTugas = DaftarTugas.children;
    const Jumlah = SemuaTugas.length;

    JumlahTugas.textContent = "(" + Jumlah + ")";

    let BelumSelesai = 0;
    for (let i = 0; i < SemuaTugas.length; i++) {
        if (!SemuaTugas[i].classList.contains("sudah")) {
            BelumSelesai++;
        }
    }

    TugasTersisa.textContent = BelumSelesai;
    if (Jumlah === 0) {
        PesanKosong.style.display = "block";
    } else {
        PesanKosong.style.display = "none";
    }

    console.log(`Total tugas: ${Jumlah} | Belum selesai: ${BelumSelesai}`);
}


// AKTIVITAS 4 : EVENT TOMBOL TAMBAH

BtnTambah.addEventListener("click", function() {
    console.log(" Menambahkan Tugas.");
    TambahTugas();
});


// AKTIVITAS 5 : EVENT KEYBOARD ENTER

InputTugas.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log("Menambahkan Tugas-Enter");
        TambahTugas();
    }
});

// AKTIVITAS 6 : KONDISI AWAL

PerbaruiJumlah();

console.log("Alhamdulillah, Tugas To-Do List Promnet Selesai!");