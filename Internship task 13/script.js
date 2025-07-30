const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');

  question.addEventListener('click', () => {
    // Close all other answers
    faqItems.forEach(i => {
      if (i !== item) {
        i.querySelector('.faq-answer').classList.remove('open');
        i.querySelector('.faq-icon').textContent = '+';
      }
    });

    // Toggle current
    const isOpen = answer.classList.contains('open');
    answer.classList.toggle('open', !isOpen);
    icon.textContent = isOpen ? '+' : '−';
  });
});
