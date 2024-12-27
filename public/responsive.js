document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
     if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
     // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });
     // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });
     // Add touch feedback
    const touchElements = document.querySelectorAll('a, button');
    touchElements.forEach(elem => {
        elem.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        elem.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
 });
 