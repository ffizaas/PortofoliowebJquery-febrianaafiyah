document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("kontakForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const hp = document.getElementById("hp").value.trim();
      const pesan = document.getElementById("pesan").value.trim();
      const errorElement = document.getElementById("error");

      errorElement.textContent = "";

      // Validasi
      if (!nama || !email || !hp || !pesan) {
        errorElement.textContent = "Semua kolom wajib diisi!";
        return; // Berhenti jika ada yang kosong
      }

      // Validasi lainnya (email, hp, dll)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errorElement.textContent = "Email tidak valid!";
        return;
      }

      const phonePattern = /^08[0-9]{8,11}$/;
      if (!phonePattern.test(hp)) {
        errorElement.textContent = "Nomor HP harus 08 + 8-11 digit!";
        return;
      }

      // Jika semua validasi lolos, tampilkan popup
      alert("Pesan terkirim!");
      this.reset(); // Reset form
    });
});
