// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Pricing toggle
const pricingToggle = document.getElementById("pricingToggle");
const prices = document.querySelectorAll(".price");

pricingToggle.addEventListener("change", () => {
  prices.forEach((cell) => {
    cell.textContent = pricingToggle.checked
      ? cell.getAttribute("data-yearly")
      : cell.getAttribute("data-monthly");
  });
});
