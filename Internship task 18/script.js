// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const viewBtns = document.querySelectorAll(".view-btn");

viewBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const imgSrc = card.getAttribute("data-image");
    const title = card.getAttribute("data-title");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    caption.innerText = title;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
