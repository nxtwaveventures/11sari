/* ==========================================
   BANARASI HERITAGE - MAIN JAVASCRIPT
   Modern interactions and animations
   ========================================== */

/* ==========================================
   BANARASI HERITAGE - MAIN JAVASCRIPT
   Clean functionality without animations
   ========================================== */

// Global variables
let currentTestimonial = 0;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeGalleryFilter();
    initializeFormHandling();
    initializeTestimonialCarousel();
    preloadImages();
});

/* ==========================================
   NAVIGATION FUNCTIONALITY
   ========================================== */

function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ==========================================
   GALLERY FILTERING
   ========================================== */

function initializeGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================
   FORM HANDLING
   ========================================== */

function initializeFormHandling() {
    const reservationForm = document.getElementById('reservation-form');
    const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

    // Form label animation
    inputs.forEach(input => {
        // Check if field has value on load
        if (input.value) {
            input.classList.add('has-value');
        }

        input.addEventListener('focus', function () {
            this.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            this.classList.remove('focused');
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });

    // Form submission
    if (reservationForm) {
        reservationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Basic validation
            const requiredFields = ['name', 'email', 'phone', 'budget', 'event-date'];
            let isValid = true;

            requiredFields.forEach(field => {
                if (!formObject[field]) {
                    isValid = false;
                    const input = document.getElementById(field);
                    input.classList.add('error');
                }
            });

            if (isValid) {
                // Create WhatsApp message
                const message = `Hello! I'd like to request a private consultation for a Banarasi saree.\n\nName: ${formObject.name}\nEmail: ${formObject.email}\nPhone: ${formObject.phone}\nInvestment Range: ${formObject.budget}\nEvent Date: ${formObject['event-date']}\nVision: ${formObject.message || 'Not specified'}\n\nLooking forward to hearing from you!`;

                openWhatsApp(message);
                showNotification('Thank you! Redirecting to WhatsApp...', 'success');

                // Reset form
                this.reset();
                inputs.forEach(input => {
                    input.classList.remove('has-value', 'focused', 'error');
                });
            } else {
                showNotification('Please fill in all required fields', 'error');
            }
        });
    }
}

/* ==========================================
   TESTIMONIAL CAROUSEL
   ========================================== */

function initializeTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-slide');

    if (testimonials.length === 0) return;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Initialize first testimonial
    showTestimonial(0);

    // Auto-rotate every 5 seconds
    setInterval(nextTestimonial, 5000);
}

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function openWhatsApp(message = '') {
    const phoneNumber = '919876543210'; // Replace with actual number
    const defaultMessage = message || 'Hi! I\'m interested in your custom Banarasi sarees. Could you please share more details?';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappURL, '_blank');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function preloadImages() {
    const imageUrls = [
        './assets/images/gallery-1.jpg',
        './assets/images/gallery-2.jpg',
        './assets/images/gallery-3.jpg',
        './assets/images/gallery-4.jpg',
        './assets/images/gallery-5.jpg',
        './assets/images/gallery-6.jpg',
        './assets/images/weaver-1.jpg',
        './assets/images/weaver-2.jpg',
        './assets/images/weaver-3.jpg'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Error handling for images
document.addEventListener('error', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect fill="#f0f0f0" width="300" height="200"/><text x="150" y="100" font-family="Arial" font-size="14" text-anchor="middle" fill="#666">Image not available</text></svg>';
    }
}, true);

/* ==========================================
   NAVIGATION FUNCTIONALITY
   ========================================== */

function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================
   SCROLL ANIMATIONS
   ========================================== */

function initializeScrollAnimations() {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');

                // Special animations for specific elements
                if (entry.target.classList.contains('timeline-item')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, 200);
                }

                if (entry.target.classList.contains('weaver-card')) {
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 200;
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, delay);
                }

                if (entry.target.classList.contains('gallery-item')) {
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, delay);
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .timeline-item, .weaver-card, .gallery-item');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

/* ==========================================
   GALLERY FILTERING
   ========================================== */

function initializeGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // Filter gallery items
            galleryItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 100);
                } else {
                    item.classList.remove('show');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ==========================================
   FORM HANDLING
   ========================================== */

function initializeFormHandling() {
    const form = document.getElementById('reservation-form');
    const inputs = form.querySelectorAll('input, select, textarea');

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        handleFormSubmission(this);
    });

    // Input validation and styling
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateInput(this);
        });

        input.addEventListener('input', function () {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
            }
        });
    });

    // Date input minimum date (today)
    const eventDate = document.getElementById('event-date');
    if (eventDate) {
        const today = new Date();
        const minDate = new Date(today.getTime() + (90 * 24 * 60 * 60 * 1000)); // 90 days from now
        eventDate.min = minDate.toISOString().split('T')[0];
    }
}

function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;

    switch (input.type) {
        case 'email':
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            break;
        case 'tel':
            isValid = /^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/\s/g, ''));
            break;
        case 'text':
            isValid = value.length >= 2;
            break;
        default:
            isValid = value !== '';
    }

    if (!isValid) {
        input.classList.add('error');
        showInputError(input);
    } else {
        input.classList.remove('error');
        hideInputError(input);
    }

    return isValid;
}

function showInputError(input) {
    let errorMsg = input.parentElement.querySelector('.error-message');
    if (!errorMsg) {
        errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        input.parentElement.appendChild(errorMsg);
    }

    switch (input.type) {
        case 'email':
            errorMsg.textContent = 'Please enter a valid email address';
            break;
        case 'tel':
            errorMsg.textContent = 'Please enter a valid phone number';
            break;
        default:
            errorMsg.textContent = 'This field is required';
    }
}

function hideInputError(input) {
    const errorMsg = input.parentElement.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

function handleFormSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Validate all inputs
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isFormValid = true;

    inputs.forEach(input => {
        if (!validateInput(input)) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        showNotification('Please correct the errors and try again', 'error');
        return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Show success message
        showNotification('🎉 Your reservation request has been submitted! We\'ll contact you within 24 hours.', 'success');

        // Optional: Send WhatsApp message
        const message = `New Reservation Request:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Budget: ${data.budget}
Event Date: ${data['event-date']}
Message: ${data.message}`;

        setTimeout(() => {
            openWhatsApp(message);
        }, 2000);

    }, 2000);
}

/* ==========================================
   TESTIMONIAL CAROUSEL
   ========================================== */

function initializeTestimonialCarousel() {
    const testimonials = [
        {
            text: "The most beautiful saree I've ever owned. The weaver's story made it even more special.",
            author: "Priya Sharma",
            location: "Mumbai",
            image: "./assets/images/testimonial-1.jpg"
        },
        {
            text: "Worth every penny! The craftsmanship is absolutely stunning and the journey was magical.",
            author: "Deepika Verma",
            location: "Delhi",
            image: "./assets/images/testimonial-2.jpg"
        },
        {
            text: "My dream saree became reality. The personal connection with the weaver was incredible.",
            author: "Anjali Gupta",
            location: "Bangalore",
            image: "./assets/images/testimonial-3.jpg"
        }
    ];

    function updateTestimonial() {
        const testimonialCard = document.querySelector('.testimonial-content');
        if (!testimonialCard) return;

        const testimonial = testimonials[currentTestimonial];

        testimonialCard.innerHTML = `
            <p>"${testimonial.text}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.author}" onerror="this.src='data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><circle cx=\\"50\\" cy=\\"50\\" r=\\"40\\" fill=\\"#ddd\\"/></svg>'">
                <div>
                    <span class="name">${testimonial.author}</span>
                    <span class="location">${testimonial.location}</span>
                </div>
            </div>
        `;

        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }

    // Update testimonial every 5 seconds
    setInterval(updateTestimonial, 5000);
}

/* ==========================================
   SMOOTH SCROLLING
   ========================================== */

function initializeSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/* ==========================================
   PROGRESS TRACKING
   ========================================== */

function initializeProgressTracking() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="progress-fill"></div>';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function () {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.querySelector('.progress-fill').style.width = scrolled + '%';
    });
}

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */

function openWhatsApp(message = '') {
    const phoneNumber = '919876543210'; // Replace with actual number
    const defaultMessage = message || 'Hi! I\'m interested in your custom Banarasi sarees. Could you please share more details?';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappURL, '_blank');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function preloadImages() {
    const imageUrls = [
        './assets/images/gallery-1.jpg',
        './assets/images/gallery-2.jpg',
        './assets/images/gallery-3.jpg',
        './assets/images/gallery-4.jpg',
        './assets/images/gallery-5.jpg',
        './assets/images/gallery-6.jpg',
        './assets/images/weaver-1.jpg',
        './assets/images/weaver-2.jpg',
        './assets/images/weaver-3.jpg'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading for images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Performance optimization
window.addEventListener('load', function () {
    initializeLazyLoading();

    // Remove loading class from body
    document.body.classList.remove('loading');

    // Track page load time for analytics
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page loaded in:', loadTime, 'ms');
});

// Error handling for images
document.addEventListener('error', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect fill="#f0f0f0" width="300" height="200"/><text x="150" y="100" font-family="Arial" font-size="14" text-anchor="middle" fill="#666">Image not available</text></svg>';
    }
}, true);

/* ==========================================
   ANALYTICS & TRACKING
   ========================================== */

function trackEvent(action, category = 'User Interaction', label = '') {
    // Google Analytics tracking (add your GA code)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }

    // Console log for development
    console.log('Event tracked:', { action, category, label });
}

// Track important interactions
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-primary')) {
        trackEvent('CTA Click', 'Conversion', e.target.textContent);
    }

    if (e.target.classList.contains('whatsapp-float')) {
        trackEvent('WhatsApp Click', 'Contact', 'Float Button');
    }

    if (e.target.classList.contains('filter-btn')) {
        trackEvent('Gallery Filter', 'Gallery', e.target.textContent);
    }
});

// Track scroll depth
let maxScrollDepth = 0;
window.addEventListener('scroll', debounce(function () {
    const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        if (maxScrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
            trackEvent('Scroll Depth', 'Engagement', `${maxScrollDepth}%`);
        }
    }
}, 500));
