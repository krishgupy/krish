// Adding 3D effect on scroll
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
  