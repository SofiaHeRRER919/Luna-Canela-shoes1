// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .cta-button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                if (history.pushState) {
                    history.pushState(null, null, this.getAttribute('href'));
                } else {
                    window.location.hash = this.getAttribute('href');
                }
            }
        }
    });
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-item, .value-item, .mission, .vision');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-item, .value-item, .mission, .vision').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    // Trigger first animation check
    animateOnScroll();
});

// Add event listeners
window.addEventListener('scroll', animateOnScroll);

// Product hover effects
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('img').style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('img').style.transform = 'scale(1)';
    });
});

// Mobile menu toggle (for future implementation)
const setupMobileMenu = () => {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
};

// Check if mobile and setup menu
if (window.innerWidth <= 768) {
    setupMobileMenu();
}