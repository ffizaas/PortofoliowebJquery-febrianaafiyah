function scrollToContact() {
  // Mendapatkan elemen dengan id 'contact'
  const contactSection = document.getElementById("contact");

  // Menggunakan scrollIntoView untuk menggulir ke bagian kontak
  contactSection.scrollIntoView({
    behavior: "smooth", // Animasi scroll halus
    block: "start", // Menempatkan bagian atas elemen di atas viewport
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  // Menambahkan event listener untuk hamburger menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // Menampilkan menu
    hamburger.classList.toggle("active"); // Animasi ikon hamburger
  });

  // Menutup menu ketika link diklik
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active"); // Menyembunyikan menu
      hamburger.classList.remove("active"); // Menghilangkan animasi hamburger
    });
  });
});
