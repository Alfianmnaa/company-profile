// sidenav inisialisasi
const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

// slider inisialisasi
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  interval: 4000,
  height: 450,
});

// parallax clients inisialisasi
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

// munculkan gambar portfolio inisialisasi
const materialBox = document.querySelectorAll(".responsive-img");
M.Materialbox.init(materialBox);

// scroll transisi inisialisasi
const scrollSpy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollSpy);
