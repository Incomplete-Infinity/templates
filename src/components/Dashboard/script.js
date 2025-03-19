let currentSlide = 0;

function toggleSlide() {
    const slider = document.querySelector('.slider');
    currentSlide = currentSlide === 0 ? -100 : 0;
    slider.style.transform = `translateX(${currentSlide}%)`;
}
