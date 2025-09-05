/* ==========================================
   ADVANCED ANIMATIONS & INTERACTIONS
   Scroll-triggered animations and micro-interactions
   ========================================== */

// Animation controller
class AnimationController {
    constructor() {
        this.observers = new Map();
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupParallaxEffects();
        this.setupCounterAnimations();
        this.setupTimelineAnimations();
    }

    setupScrollAnimations() {
        const elements = document.querySelectorAll('[data-animate]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.dataset.animate;
                    const delay = element.dataset.delay || 0;

                    setTimeout(() => {
                        this.triggerAnimation(element, animationType);
                    }, delay);

                    observer.unobserve(element);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-50px'
        });

        elements.forEach(el => observer.observe(el));
    }

    triggerAnimation(element, type) {
        element.classList.add('animate-in');

        switch (type) {
            case 'fade-up':
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
                break;
            case 'fade-right':
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
                break;
            case 'fade-left':
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
                break;
            case 'scale-in':
                element.style.transform = 'scale(1)';
                element.style.opacity = '1';
                break;
            case 'rotate-in':
                element.style.transform = 'rotate(0deg) scale(1)';
                element.style.opacity = '1';
                break;
        }
    }

    setupHoverEffects() {
        // Enhanced button hover effects
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
            button.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });

            button.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Gallery item sophisticated hover
        document.querySelectorAll('.gallery-item').forEach(item => {
            const img = item.querySelector('img');
            const overlay = item.querySelector('.gallery-overlay');

            item.addEventListener('mouseenter', function () {
                if (img) img.style.transform = 'scale(1.1) rotate(2deg)';
                if (overlay) overlay.style.transform = 'translateY(0)';
            });

            item.addEventListener('mouseleave', function () {
                if (img) img.style.transform = 'scale(1) rotate(0deg)';
                if (overlay) overlay.style.transform = 'translateY(100%)';
            });
        });

        // Weaver card magnetic effect
        document.querySelectorAll('.weaver-card').forEach(card => {
            card.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                this.style.transform = `perspective(1000px) rotateY(${x / 20}deg) rotateX(${-y / 20}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', function () {
                this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)';
            });
        });
    }

    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(element => {
                const rate = scrolled * (element.dataset.parallax || 0.5);
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number');

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.textContent);
                    this.animateCounter(counter, target);
                    counterObserver.unobserve(counter);
                }
            });
        });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.ceil(current) + (element.textContent.includes('+') ? '+' : '');
            }
        }, 40);
    }

    setupTimelineAnimations() {
        const timelineItems = document.querySelectorAll('.timeline-item');

        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const item = entry.target;
                    const index = Array.from(timelineItems).indexOf(item);

                    setTimeout(() => {
                        item.classList.add('animate');
                        this.animateTimelineIcon(item.querySelector('.timeline-icon'));
                    }, index * 200);
                }
            });
        }, { threshold: 0.3 });

        timelineItems.forEach(item => timelineObserver.observe(item));
    }

    animateTimelineIcon(icon) {
        if (!icon) return;

        icon.style.animation = 'bounceIn 0.6s ease-out';
        setTimeout(() => {
            icon.style.animation = '';
        }, 600);
    }
}

// Text animation effects
class TextAnimations {
    static typeWriter(element, text, speed = 50) {
        element.textContent = '';
        let i = 0;

        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    static revealText(element) {
        const text = element.textContent;
        element.innerHTML = '';

        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${index * 0.05}s`;
            span.classList.add('char-reveal');
            element.appendChild(span);
        });
    }

    static morphText(element, texts, interval = 3000) {
        let currentIndex = 0;

        setInterval(() => {
            element.style.opacity = '0';

            setTimeout(() => {
                element.textContent = texts[currentIndex];
                element.style.opacity = '1';
                currentIndex = (currentIndex + 1) % texts.length;
            }, 300);
        }, interval);
    }
}

// Scroll-triggered animations
class ScrollAnimations {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        this.setupElements();
        this.bindEvents();
    }

    setupElements() {
        // Add scroll animations to various elements
        document.querySelectorAll('.section-title').forEach(el => {
            this.elements.push({
                element: el,
                animation: 'fadeInUp',
                offset: 100
            });
        });

        document.querySelectorAll('.feature').forEach((el, index) => {
            this.elements.push({
                element: el,
                animation: 'fadeInLeft',
                offset: 50,
                delay: index * 100
            });
        });
    }

    bindEvents() {
        window.addEventListener('scroll', this.throttle(this.checkElements.bind(this), 16));
    }

    checkElements() {
        this.elements.forEach(item => {
            if (this.isElementInViewport(item.element, item.offset)) {
                setTimeout(() => {
                    item.element.classList.add('animated', item.animation);
                }, item.delay || 0);
            }
        });
    }

    isElementInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Particle effects for hero section
class ParticleEffect {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.init();
    }

    init() {
        this.createParticles();
        this.animate();
    }

    createParticles() {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 215, 0, 0.6);
                border-radius: 50%;
                pointer-events: none;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${3 + Math.random() * 4}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;

            this.container.appendChild(particle);
            this.particles.push(particle);
        }
    }

    animate() {
        this.particles.forEach(particle => {
            const speed = 0.5 + Math.random() * 0.5;
            let y = parseFloat(particle.style.top);

            y -= speed;
            if (y < -10) {
                y = 110;
                particle.style.left = Math.random() * 100 + '%';
            }

            particle.style.top = y + '%';
        });

        requestAnimationFrame(this.animate.bind(this));
    }
}

// Mouse trail effect
class MouseTrail {
    constructor() {
        this.trail = [];
        this.init();
    }

    init() {
        document.addEventListener('mousemove', this.createTrail.bind(this));
    }

    createTrail(e) {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, rgba(255,215,0,0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX - 3}px;
            top: ${e.clientY - 3}px;
            animation: fadeTrail 0.6s ease-out forwards;
        `;

        document.body.appendChild(trail);

        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 600);
    }
}

// Loading animations
class LoadingAnimations {
    static showPageLoader() {
        const loader = document.createElement('div');
        loader.id = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner"></div>
                <p>Weaving your experience...</p>
            </div>
        `;
        document.body.appendChild(loader);
    }

    static hidePageLoader() {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }
    }

    static animateImageLoad(img) {
        img.style.opacity = '0';
        img.style.transform = 'scale(1.1)';

        img.addEventListener('load', function () {
            this.style.transition = 'all 0.6s ease-out';
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    }
}

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Show loading animation
    LoadingAnimations.showPageLoader();

    // Initialize animation controllers
    new AnimationController();
    new ScrollAnimations();

    // Add particle effect to hero
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        new ParticleEffect(heroBackground);
    }

    // Add mouse trail effect (optional - can be disabled for performance)
    if (window.innerWidth > 768) {
        new MouseTrail();
    }

    // Animate text elements
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const texts = [
            'Your Heritage, Your Story',
            'Crafted with Love',
            'Woven with Tradition'
        ];
        setTimeout(() => {
            TextAnimations.morphText(heroTitle, texts, 4000);
        }, 2000);
    }

    // Hide loader when everything is ready
    window.addEventListener('load', function () {
        setTimeout(() => {
            LoadingAnimations.hidePageLoader();
        }, 1000);
    });

    // Fallback to hide loader after 3 seconds regardless
    setTimeout(() => {
        LoadingAnimations.hidePageLoader();
    }, 3000);
});

// Add CSS for additional animations
const additionalCSS = `
    .char-reveal {
        display: inline-block;
        opacity: 0;
        animation: charReveal 0.6s ease-out forwards;
    }

    @keyframes charReveal {
        from {
            opacity: 0;
            transform: translateY(20px) rotate(10deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
        }
    }

    @keyframes fadeTrail {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0);
        }
    }

    @keyframes bounceIn {
        0% {
            transform: scale(0.3);
            opacity: 0;
        }
        50% {
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    #page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #8B0000, #B22222);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease-out;
    }

    .loader-content {
        text-align: center;
        color: white;
    }

    .loader-spinner {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 215, 0, 0.3);
        border-top: 3px solid #FFD700;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .particle {
        animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        25%, 75% {
            transform: translateY(-20px) rotate(180deg);
        }
    }

    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: rgba(255, 215, 0, 0.2);
        z-index: 9999;
    }

    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #FFD700, #DAA520);
        width: 0%;
        transition: width 0.25s ease;
    }

    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        color: #333;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10001;
        animation: slideInRight 0.5s ease-out;
        display: flex;
        align-items: center;
        gap: 1rem;
        min-width: 300px;
    }

    .notification.success {
        border-left: 4px solid #4CAF50;
    }

    .notification.error {
        border-left: 4px solid #f44336;
    }

    .notification button {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: #999;
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .error-message {
        color: #f44336;
        font-size: 0.8rem;
        margin-top: 0.25rem;
        display: block;
    }

    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #f44336;
        background-color: rgba(244, 67, 54, 0.05);
    }
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);
