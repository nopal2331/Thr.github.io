function klaimTHR() {
    let nama = document.getElementById("nama").value;
    let pesan = document.getElementById("pesan");

    if (nama.trim() === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    pesan.innerHTML = `🎉 Selamat, ${nama}! THR kamu sedang dikirim via DANA! 🎁`;
    pesan.classList.remove("hidden");

    // Redirect ke DANA setelah 3 detik
    setTimeout(function () {
        window.location.href = "https://link.dana.id/transfer"; // Ganti dengan link DANA kamu
    }, 3000);
}
