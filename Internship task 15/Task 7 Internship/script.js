document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name === "" || email === "" || message === "") {
    alert("Please fill in all required fields!");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thanks for reaching out!");

  document.getElementById('contactForm').reset();
});
