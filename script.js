// Galería deslizante
const gallerySlider = document.getElementById('gallerySlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const galleryItems = document.querySelectorAll('.gallery-item');
const itemWidth = galleryItems[0].offsetWidth + 32; // Ancho + margen

let currentPosition = 0;
const maxPosition = -(galleryItems.length * itemWidth - gallerySlider.offsetWidth);

nextBtn.addEventListener('click', () => {
    currentPosition -= itemWidth * 3; // Desplaza 3 elementos a la vez
    if (currentPosition < maxPosition) {
        currentPosition = maxPosition;
    }
    gallerySlider.style.transform = `translateX(${currentPosition}px)`;
});

prevBtn.addEventListener('click', () => {
    currentPosition += itemWidth * 3; // Desplaza 3 elementos a la vez
    if (currentPosition > 0) {
        currentPosition = 0;
    }
    gallerySlider.style.transform = `translateX(${currentPosition}px)`;
});

// Animación de scroll suave para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de carga para elementos
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.room-card, .map-wrapper, .gallery-section').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});