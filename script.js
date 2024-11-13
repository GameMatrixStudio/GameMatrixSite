// Анимация появления секций при скролле
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const showSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    };

    const observer = new IntersectionObserver(showSection, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


