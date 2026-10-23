// ========== SLIDESHOW ==========
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

// Tự động chạy slideshow mỗi 5 giây
function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
}

// Click vào dots
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        clearInterval(slideInterval);
        showSlide(parseInt(this.getAttribute('data-slide')));
        startSlideshow();
    });
});

startSlideshow();

// ========== MENU MOBILE ==========
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// Đóng menu khi click vào link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
