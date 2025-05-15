document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const animateElements = document.querySelectorAll('[data-animate]');
        
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
        
        // Card animations
        const cards = document.querySelectorAll('.animate-card');
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardPosition < windowHeight - 100) {
                setTimeout(() => {
                    card.classList.add('in-view');
                }, index * 200);
            }
        });
    };
    
    // Initialize animations on load
    animateOnScroll();
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            item.classList.toggle('active');
            
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Water Ripple Effect
    const buttons = document.querySelectorAll('.btn, .card, .project-card');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove any existing ripple
            const existingRipple = this.querySelector('.ripple-effect');
            if (existingRipple) {
                existingRipple.remove();
            }
            
            // Get click position
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Add ripple to button
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
    
    // Add ripple effect styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize water drop animation
    const initWaterDrop = function() {
        const waterDrop = document.querySelector('.water-drop-animation');
        if (waterDrop) {
            // Create multiple ripples
            for (let i = 0; i < 3; i++) {
                const ripple = document.createElement('div');
                ripple.classList.add('ripple');
                waterDrop.appendChild(ripple);
            }
        }
    };
    
    initWaterDrop();
    
    // Parallax effect for hero sections
    const parallaxElements = document.querySelectorAll('.page-hero, .hero');
    window.addEventListener('scroll', function() {
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            element.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    });
    
    // Text wave animation on hover
    const textWaveElements = document.querySelectorAll('.text-wave');
    textWaveElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            span.style.transitionDelay = `${index * 0.05}s`;
            element.appendChild(span);
        });
    });
    
    // Gradient text animation
    const gradientTextElements = document.querySelectorAll('.gradient-text');
    gradientTextElements.forEach(element => {
        element.innerHTML = element.textContent.split('').map(char => 
            `<span style="transition-delay: ${Math.random() * 0.5}s">${char}</span>`
        ).join('');
    });
});