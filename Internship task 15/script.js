<<<<<<< HEAD
// Scroll animation
const milestones = document.querySelectorAll('.milestone');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.3 });

milestones.forEach(milestone => {
  observer.observe(milestone);
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
=======
// Scroll to top button
const btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
>>>>>>> 1b274234ac734043dffd10dd9cb22f602f870878
