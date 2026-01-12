// 01-portfolio-landing/script.js

// Auto set current year if you add: <span data-year></span> in footer
const yearEl = document.querySelector("[data-year]");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Optional: smooth scroll for in-page anchor links (e.g., <a href="#projects">)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    const target = id ? document.querySelector(id) : null;
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
