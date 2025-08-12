const slider = document.querySelector(".slider-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const totalCards = document.querySelectorAll(".testimonial-card").length;
const visibleCards = window.innerWidth >= 768 ? 2 : 1;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
    } else {
        currentIndex = 0; // loop back
    }
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - visibleCards;
    }
    updateSlider();
});

// Optional: Auto slide every 4 seconds
setInterval(() => {
    nextBtn.click();
}, 4000);
