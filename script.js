// =============================
// Mobile Menu Toggle
// =============================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// =============================
// Navbar Scroll Effect
// =============================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// =============================
// Smooth Scroll for Anchor Links
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =============================
// Intersection Observer for Fade-in Animations
// =============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements that should fade in
const fadeElements = document.querySelectorAll('.feature-card, .experience-item, .gallery-item, .contact-item');
fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// =============================
// Add Parallax Effect to Hero Section
// =============================
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (hero) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// =============================
// Active Navigation Link on Scroll
// =============================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// =============================
// Gallery Hover Effect Enhancement
// =============================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// =============================
// Lazy Loading for Future Images
// =============================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    // When you add images later, use data-src instead of src
    // and uncomment the following lines:
    // const lazyImages = document.querySelectorAll('img[data-src]');
    // lazyImages.forEach(img => imageObserver.observe(img));
}

// =============================
// Add Loading Animation
// =============================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// =============================
// Dynamic Year in Footer
// =============================
const copyrightYear = document.querySelector('.footer-copyright p');
if (copyrightYear) {
    const currentYear = new Date().getFullYear();
    copyrightYear.innerHTML = `&copy; ${currentYear} The LV Insiders Table. All rights reserved.`;
}

// =============================
// Scroll Progress Indicator (Optional)
// =============================
function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.style.position = 'fixed';
    indicator.style.top = '0';
    indicator.style.left = '0';
    indicator.style.height = '3px';
    indicator.style.backgroundColor = 'var(--accent-color)';
    indicator.style.zIndex = '9999';
    indicator.style.transition = 'width 0.1s ease';
    document.body.appendChild(indicator);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        indicator.style.width = scrolled + '%';
    });
}

// Uncomment to enable scroll progress indicator
// createScrollIndicator();

// =============================
// Prevent Default Link Behavior for Empty Anchors
// =============================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// =============================
// Console Welcome Message
// =============================
console.log('%c Welcome to The LV Insiders Table ', 'background: #d4af37; color: #1a1a1a; font-size: 20px; padding: 10px;');
console.log('%c Where exceptional cuisine meets extraordinary minds ', 'color: #d4af37; font-size: 14px;');
