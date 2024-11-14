// script.js
function scrollCarousel(direction) {
    const carousel = document.querySelector('.news-carousel');
    const scrollAmount = 320; // Ширина одного элемента + отступы

    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
