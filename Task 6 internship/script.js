const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

 
  document.getElementById('nameError').classList.add('hidden');
  document.getElementById('emailError').classList.add('hidden');
  document.getElementById('messageError').classList.add('hidden');

  let valid = true;

  if (nameInput.value.trim() === '') {
    document.getElementById('nameError').classList.remove('hidden');
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    document.getElementById('emailError').classList.remove('hidden');
    valid = false;
  }

  if (messageInput.value.trim() === '') {
    document.getElementById('messageError').classList.remove('hidden');
    valid = false;
  }

  if (valid) {
    successMessage.classList.remove('hidden');
    form.reset();

    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 3000);
  }
});
