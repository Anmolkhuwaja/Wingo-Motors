function pageOne() {
    window.location.href = 'desktop1.html';
}

function pageTwo() {
    window.location.href = 'desktop2.html';
}

function pageThree() {
    window.location.href = 'desktop3.html';
}

function pageFour() {
    window.location.href = 'desktop4.html';
}

function pageFive() {
    window.location.href = 'desktop5.html';
}

function pageSix() {
    window.location.href = 'card6.html';
}

function build() {
    window.location.href = 'dealer.html';
}
// Slider for buttons
const sliderContainer = document.querySelector('.scroll-buttons');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const scrollAmount = 150;

leftArrow.addEventListener('click', () => {
    sliderContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
    sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});


