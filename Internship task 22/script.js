// — Simple interactive features: cart, form validation, smooth scroll, scroll-top

// CART COUNTER
let count = 0;
const cartCountEl = document.getElementById('cart-count');
document.querySelectorAll('.add-to-cart').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    count++;
    cartCountEl.textContent = count;
    // quick feedback
    btn.textContent = 'Added ✓';
    btn.disabled = true;
    setTimeout(()=>{ btn.textContent = 'Add to Cart'; btn.disabled = false; }, 900);
  });
});

// CONTACT FORM VALIDATION
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMessage');
form.addEventListener('submit', e=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailOk = /^\S+@\S+\.\S+$/.test(email);

  if(!name || !email || !message){
    formMsg.style.color = 'crimson'; formMsg.textContent = 'Please fill all fields.';
    return;
  }
  if(!emailOk){
    formMsg.style.color = 'crimson'; formMsg.textContent = 'Enter a valid email.';
    return;
  }

  formMsg.style.color = 'green'; formMsg.textContent = 'Thanks! Message sent.';
  form.reset();
  setTimeout(()=> formMsg.textContent = '', 2500);
});

// SMOOTH ANCHOR SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = a.getAttribute('href');
    if(target.length>1){
      e.preventDefault();
      document.querySelector(target).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// SCROLL TO TOP
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', ()=>{
  scrollBtn.style.display = window.scrollY > 220 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
