// Dynamic year update
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll to top button
document.getElementById("scrollTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
