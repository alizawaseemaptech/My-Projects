document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields!");
      } else {
        alert("Message sent successfully!");
        form.reset();
      }
    });
  }
});

// Scroll To Top Button
window.addEventListener("scroll", function() {
  const btn = document.getElementById("topBtn");
  if (btn) {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

if (document.getElementById("topBtn")) {
  document.getElementById("topBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
