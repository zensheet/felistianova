document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true
    });

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.height = '80px';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
            navbar.style.background = 'rgba(253, 251, 247, 0.98)';
        } else {
            navbar.style.height = '100px';
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(253, 251, 247, 0.9)';
        }
    });

    // Smooth Anchor Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target);
            }
        });
    });

    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#fdfbf7';
            navLinks.style.padding = '40px';
            navLinks.style.textAlign = 'center';
            navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        });
    }
});
