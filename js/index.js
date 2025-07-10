document.addEventListener('DOMContentLoaded', function () {
  const nav1 = document.getElementById('nav1');
  const nav2 = document.getElementById('nav2');

  function toggleNav() {
    if (window.scrollY >= 100) {
      if (nav1) nav1.style.display = 'none';
      if (nav2) nav2.style.display = 'block';
    } else {
      if (nav1) nav1.style.display = 'block';
      if (nav2) nav2.style.display = 'none';
    }
  }

  // Inisialisasi tampilan sesuai posisi scroll saat halaman dimuat
  toggleNav();

  window.addEventListener('scroll', toggleNav);
});