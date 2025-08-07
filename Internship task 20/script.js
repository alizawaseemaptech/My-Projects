// Scroll to top button
const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const msg = document.getElementById("formMessage");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name.value && email.value && message.value) {
    if (email.value.match(emailPattern)) {
      msg.textContent = "Message sent successfully!";
      msg.style.color = "green";
      this.reset();
    } else {
      msg.textContent = "Please enter a valid email address.";
      msg.style.color = "red";
    }
  } else {
    msg.textContent = "All fields are required.";
    msg.style.color = "red";
  }
});
