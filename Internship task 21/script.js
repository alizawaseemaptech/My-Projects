const faqs = document.querySelectorAll(".faq");
const scrollBtn = document.getElementById("scrollTopBtn");
const toggleMode = document.getElementById("toggleMode");
const expandAll = document.getElementById("expandAll");
const collapseAll = document.getElementById("collapseAll");

// Accordion logic
faqs.forEach(faq => {
  faq.querySelector(".question").addEventListener("click", () => {
    faqs.forEach(f => {
      if (f !== faq) f.classList.remove("active");
    });
    faq.classList.toggle("active");
  });
});

// Scroll-to-top logic
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark mode toggle
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Expand all
expandAll.addEventListener("click", () => {
  faqs.forEach(faq => faq.classList.add("active"));
});

// Collapse all
collapseAll.addEventListener("click", () => {
  faqs.forEach(faq => faq.classList.remove("active"));
});
