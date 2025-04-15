/**
 * Customer Service Tab System
 * Handles the interactive tabs for customer service pages
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize service tabs
    initServiceTabs();

    // Initialize FAQ accordions
    initFaqAccordion();
});

/**
 * Initialize interactive service tabs
 */
function initServiceTabs() {
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceContents = document.querySelectorAll('.service-tab-content');

    if (serviceTabs.length === 0) return;

    // Add click event to each tab
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            serviceTabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all content sections
            serviceContents.forEach(content => {
                content.classList.remove('active');
            });

            // Show the relevant content
            const targetId = tab.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.classList.add('active');

                // Smooth scroll to content on mobile
                if (window.innerWidth < 768) {
                    targetContent.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // Add animation effect
                targetContent.style.animation = 'none';
                setTimeout(() => {
                    targetContent.style.animation = 'fadeIn 0.5s ease';
                }, 10);
            }
        });
    });

    // Activate first tab by default
    if (serviceTabs.length > 0) {
        serviceTabs[0].click();
    }
}

/**
 * Initialize FAQ accordion functionality
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const questionContainer = item.querySelector('.faq-question-container');

        if (questionContainer) {
            questionContainer.addEventListener('click', () => {
                // Check if current item is already active
                const isActive = item.classList.contains('active');

                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });

                // If clicked item wasn't active before, make it active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // Auto-open first FAQ item
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
}

/**
 * Create a customer service tab interface
 * @param {string} containerId - The ID of the container element
 * @param {Array} tabs - Array of tab objects with title, icon, and content properties
 */
function createServiceTabs(containerId, tabs) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Create tab navigation
    const tabNav = document.createElement('div');
    tabNav.className = 'service-tabs';

    // Create content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'service-tab-contents';

    // Add tabs and content
    tabs.forEach((tab, index) => {
        // Create tab button
        const tabBtn = document.createElement('button');
        tabBtn.className = 'service-tab';
        tabBtn.setAttribute('data-target', `service-content-${index}`);
        tabBtn.innerHTML = `<i class="${tab.icon}"></i> ${tab.title}`;
        tabNav.appendChild(tabBtn);

        // Create content section
        const content = document.createElement('div');
        content.className = 'service-tab-content';
        content.id = `service-content-${index}`;
        content.innerHTML = tab.content;
        contentContainer.appendChild(content);
    });

    // Add elements to container
    container.appendChild(tabNav);
    container.appendChild(contentContainer);

    // Initialize tab functionality
    initServiceTabs();
}

// Enhance customer interaction with subtle animations
function enhanceCustomerExperience() {
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        });
    });

    // Add subtle animations to icons
    const serviceIcons = document.querySelectorAll('.service-icon');
    serviceIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'rotate(15deg) scale(1.1)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'rotate(0) scale(1)';
        });
    });
}

// Initialize everything when loaded
window.addEventListener('load', function () {
    enhanceCustomerExperience();
});
