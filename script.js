// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth reveal for sections and cards
const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-group, .education-item, .experience-item, .certificate-grid > div, .achievement-grid article"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.12 });

revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});

// Gentle stagger for project/skill cards.

document.querySelectorAll(".projects-grid .project-card, .skills-grid .skill-group, .achievement-grid article").forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 80, 240)}ms`;
});
