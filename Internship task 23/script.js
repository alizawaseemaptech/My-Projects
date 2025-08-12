// Toggle Monthly/Yearly
document.getElementById('billingToggle').addEventListener('change', function() {
  const prices = document.querySelectorAll('.price');
  prices.forEach(price => {
    price.textContent = this.checked ? price.dataset.year : price.dataset.month;
  });
});

// Modal
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const selectedPlan = document.getElementById('selectedPlan');

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    selectedPlan.textContent = this.dataset.plan;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
