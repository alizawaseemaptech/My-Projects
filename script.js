// Scroll to top button
const btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
