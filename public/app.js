"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#image-slider img');
    const totalImages = images.length;
    let currentIndex = 0;
    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index ? 'block' : 'none';
        });
    }
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
    // Show the first image initially
    showImage(currentIndex);
});
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
