// Script sederhana untuk interaksi website perpustakaan keliling

function ranggaKirimForm(event, pesanSukses) {
    event.preventDefault();
    alert(pesanSukses);
    event.target.reset();
}

function ranggaCariBuku() {
    var input = document.getElementById("rangga_input_cari");
    if (!input) return;

    var kataKunci = input.value.toLowerCase();
    var daftarBuku = document.getElementsByClassName("rangga_item_buku");

    for (var i = 0; i < daftarBuku.length; i++) {
        var teksBuku = daftarBuku[i].innerText.toLowerCase();
        if (teksBuku.indexOf(kataKunci) > -1) {
            daftarBuku[i].style.display = "flex";
        } else {
            daftarBuku[i].style.display = "none";
        }
    }
}
function ranggaCekJatuhTempo() {
    var input = document.getElementById("rangga_cek_pinjam");
    var hasil = document.getElementById("rangga_hasil_cek");
    if (!input || !hasil) return;

    var nilai = input.value.trim();
    hasil.style.display = "block";

    if (nilai === "") {
        hasil.innerHTML = "<strong>Info:</strong> Silakan isi nama atau nomor HP terlebih dahulu.";
        return;
    }

    hasil.innerHTML = "<strong>Status (" + nilai + "):</strong> Buku <em>Seporsi Mie Ayam Sebelum Mati</em> — Jatuh tempo: <strong>20 November 2026</strong> (Harap dikembalikan tepat waktu agar bisa dibaca pembaca lain).";
}

function ranggaFilterNotif(tipe) {
    var daftar = document.getElementsByClassName("rangga_item_notif");
    for (var i = 0; i < daftar.length; i++) {
        var tipeItem = daftar[i].getAttribute("data-tipe");
        if (tipe === "semua" || tipeItem === tipe) {
            daftar[i].style.display = "block";
        } else {
            daftar[i].style.display = "none";
        }
    }
}

function ranggaTandaiBaca(tombol) {
    tombol.innerText = "Sudah Dibaca";
    tombol.disabled = true;
}