// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const success = document.getElementById("successMessage");

  if (!name || !email || !message) {
    success.textContent = "Please fill all fields correctly!";
    success.style.color = "red";
    return;
  }

  success.textContent = "Thank you! Your message has been sent.";
  success.style.color = "green";
  this.reset();
});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
