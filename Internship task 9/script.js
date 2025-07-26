// Modal functions
function openModal(name) {
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('modal-name').textContent = name;
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');

// Show button when scrolled down
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

// Scroll smoothly to top when button is clicked
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
