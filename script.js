document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const root = document.documentElement;

    // Define color schemes
    const lightMode = {
        '--background-color': '#f4f6f7',
        '--text-color': '#2c3e50',
        '--primary-color': '#3498db',
        '--secondary-color': '#2ecc71',
        '--card-bg': '#ffffff',
        '--footer-bg': '#2c3e50',
        '--footer-text': '#ecf0f1'
    };

    const darkMode = {
        '--background-color': '#1a1a1a',
        '--text-color': '#e0e0e0',
        '--primary-color': '#4fa3d1',
        '--secondary-color': '#2ecc71',
        '--card-bg': '#2c2c2c',
        '--footer-bg': '#111111',
        '--footer-text': '#f0f0f0'
    };

    function setTheme(theme) {
        for (let [property, value] of Object.entries(theme)) {
            root.style.setProperty(property, value);
        }
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="ri-moon-line"></i>';
            setTheme(darkMode);
        } else {
            themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
            setTheme(lightMode);
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky Header
    const header = document.querySelector('.modern-header');
    const sticky = header.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });

    // Animate on Scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('animate');
            }
        });
    });
});
