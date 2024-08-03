// scripts.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image gallery lightbox functionality (optional example)
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        const src = img.src;
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `<div class="lightbox-content"><img src="${src}" /><span class="close">&times;</span></div>`;
        document.body.appendChild(lightbox);
        document.querySelector('.lightbox .close').addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});
