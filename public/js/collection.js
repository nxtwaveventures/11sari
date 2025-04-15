// Collection Page Enhancements

document.addEventListener('DOMContentLoaded', function () {
    // Add Quick View buttons to all product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        // Add Quick View button
        const quickViewBtn = document.createElement('button');
        quickViewBtn.className = 'quick-view-btn';
        quickViewBtn.innerHTML = 'Quick View';
        card.appendChild(quickViewBtn);

        // Add Wishlist button
        const wishlistBtn = document.createElement('button');
        wishlistBtn.className = 'wishlist-btn';
        wishlistBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
        card.appendChild(wishlistBtn);

        // Add ready-to-wear badge to all products
        const readyBadge = document.createElement('div');
        readyBadge.className = 'ready-to-wear-badge';
        readyBadge.textContent = 'Ready in 60s';
        card.appendChild(readyBadge);

        // Add discount badge to random products (for demo purposes)
        if (Math.random() > 0.7) {
            const discount = Math.floor(Math.random() * 30) + 10; // Random discount between 10% and 40%
            const discountBadge = document.createElement('div');
            discountBadge.className = 'discount-badge';
            discountBadge.textContent = `-${discount}%`;
            card.appendChild(discountBadge);
        }

        // Handle Quick View button click
        quickViewBtn.addEventListener('click', function (e) {
            e.preventDefault();
            openQuickView(card);
        });

        // Handle Wishlist button click
        wishlistBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(wishlistBtn);
        });
    });

    // Filter functionality
    const collectionFilter = document.getElementById('collection-filter');
    const healingFilter = document.getElementById('healing-filter');
    const sortSelect = document.getElementById('sort-select');

    if (collectionFilter && healingFilter) {
        collectionFilter.addEventListener('change', filterProducts);
        healingFilter.addEventListener('change', filterProducts);
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }

    // Add animation delay to product cards for staggered entrance
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Initialize image zoom effect
    initImageZoom();

    // Add scroll animation to categories
    const categories = document.querySelectorAll('.collection-category');
    observeElements(categories);

    // Handle collection badge hover effects
    const badges = document.querySelectorAll('.collection-badge, .ready-to-wear-badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });

        badge.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // Add Ready-to-Wear notice at the top of categories
    const categoryHeaders = document.querySelectorAll('.collection-category');
    categoryHeaders.forEach(header => {
        const readyNotice = document.createElement('div');
        readyNotice.className = 'ready-to-wear-notice';
        readyNotice.innerHTML = '<span class="ready-to-wear-icon">⏱️</span> All sarees in this collection can be made ready-to-wear in 60 seconds for free!';

        // Add styles for the notice
        const style = document.createElement('style');
        style.textContent = `
            .ready-to-wear-notice {
                background: rgba(212, 175, 55, 0.1);
                border-left: 3px solid var(--accent);
                padding: 0.75rem 1rem;
                margin-bottom: 1.5rem;
                font-size: 0.95rem;
                border-radius: 4px;
                display: flex;
                align-items: center;
            }
            
            .ready-to-wear-icon {
                margin-right: 0.5rem;
                font-size: 1.2rem;
            }
        `;
        document.head.appendChild(style);

        // Insert after the category description
        const categoryDesc = header.querySelector('.category-description');
        if (categoryDesc) {
            categoryDesc.parentNode.insertBefore(readyNotice, categoryDesc.nextSibling);
        } else {
            header.appendChild(readyNotice);
        }
    });
});

// Filter products based on selections
function filterProducts() {
    const collectionValue = document.getElementById('collection-filter').value;
    const healingValue = document.getElementById('healing-filter').value;
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const property = card.getAttribute('data-property');

        const collectionMatch = collectionValue === 'all' || category === collectionValue;
        const healingMatch = healingValue === 'all' || property === healingValue;

        if (collectionMatch && healingMatch) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });

    // Update category visibility
    const categories = document.querySelectorAll('.collection-category');
    categories.forEach(category => {
        const categoryName = category.classList[1]?.replace('-collection', '');
        if (!categoryName) return;

        const hasVisibleProducts = Array.from(
            category.nextElementSibling.querySelectorAll('.product-card')
        ).some(card => card.style.display !== 'none');

        if (collectionValue === 'all' || collectionValue === categoryName || hasVisibleProducts) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });
}

// Sort products by price or newest
function sortProducts() {
    const sortValue = document.getElementById('sort-select').value;
    const productGrids = document.querySelectorAll('.product-grid');

    productGrids.forEach(grid => {
        const products = Array.from(grid.querySelectorAll('.product-card'));

        products.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.product-price').textContent.replace(/[^\d]/g, ''));
            const priceB = parseInt(b.querySelector('.product-price').textContent.replace(/[^\d]/g, ''));

            if (sortValue === 'price-low') {
                return priceA - priceB;
            } else if (sortValue === 'price-high') {
                return priceB - priceA;
            } else {
                // For "newest" or "popular", we'd normally have a data attribute
                // Here we'll just use the current order as a fallback
                return 0;
            }
        });

        // Re-append sorted products
        products.forEach(product => {
            grid.appendChild(product);
        });
    });
}

// Toggle wishlist state
function toggleWishlist(button) {
    button.classList.toggle('active');
    button.querySelector('svg').style.fill = button.classList.contains('active') ? 'currentColor' : 'none';

    // Animate heart when added to wishlist
    if (button.classList.contains('active')) {
        button.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.3)' },
            { transform: 'scale(1)' }
        ], {
            duration: 500,
            easing: 'ease'
        });
    }

    // Here you would normally update the wishlist in localStorage or send to server
    const productName = button.closest('.product-card').querySelector('.product-title').textContent;
    console.log(`${button.classList.contains('active') ? 'Added' : 'Removed'} ${productName} ${button.classList.contains('active') ? 'to' : 'from'} wishlist`);
}

// Open Quick View modal
function openQuickView(productCard) {
    // Get product details
    const productTitle = productCard.querySelector('.product-title').textContent;
    const productPrice = productCard.querySelector('.product-price').textContent;
    const productDesc = productCard.querySelector('.product-description').textContent;
    const productImage = productCard.querySelector('.product-image').src;

    // Create modal if it doesn't exist
    let modal = document.querySelector('.quick-view-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        document.body.appendChild(modal);
    }

    // Populate modal
    modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal">&times;</button>
      <div class="modal-body">
        <div class="product-gallery">
          <img src="${productImage}" alt="${productTitle}">
        </div>
        <div class="product-info">
          <h2>${productTitle}</h2>
          <div class="product-price">${productPrice}</div>
          <p>${productDesc}</p>
          <div class="product-options">
            <div class="size-options">
              <h4>Select Size</h4>
              <div class="option-buttons">
                <button class="option-btn active">5.5m</button>
                <button class="option-btn">6m</button>
                <button class="option-btn">6.5m</button>
              </div>
            </div>
            <div class="color-options">
              <h4>Select Border Color</h4>
              <div class="option-buttons">
                <button class="color-btn" style="background-color: var(--primary)"></button>
                <button class="color-btn" style="background-color: var(--accent)"></button>
                <button class="color-btn" style="background-color: var(--sea-green)"></button>
              </div>
            </div>
            <div class="ready-toggle">
              <h4>Make Ready-to-Wear (FREE)</h4>
              <div class="toggle-switch">
                <input type="checkbox" id="ready-toggle" checked>
                <label for="ready-toggle">60-second wear</label>
              </div>
            </div>
          </div>
          <div class="quantity-selector">
            <button class="qty-btn decrease">-</button>
            <input type="number" value="1" min="1" max="10">
            <button class="qty-btn increase">+</button>
          </div>
          <div class="modal-actions">
            <button class="add-to-cart-btn">Add to Cart</button>
            <button class="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  `;

    // Add styles for toggle switch
    const toggleStyles = document.createElement('style');
    toggleStyles.textContent = `
        .ready-toggle {
            margin-top: 1.5rem;
        }
        .toggle-switch {
            display: flex;
            align-items: center;
            margin-top: 0.5rem;
        }
        .toggle-switch input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
        .toggle-switch label {
            position: relative;
            display: inline-block;
            padding-left: 60px;
            cursor: pointer;
            font-weight: 500;
        }
        .toggle-switch label:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 50px;
            height: 24px;
            border-radius: 24px;
            background-color: #ddd;
            transition: all 0.3s;
        }
        .toggle-switch label:after {
            content: '';
            position: absolute;
            left: 4px;
            top: 4px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: white;
            transition: all 0.3s;
        }
        .toggle-switch input:checked + label:before {
            background-color: var(--accent);
        }
        .toggle-switch input:checked + label:after {
            left: 30px;
        }
    `;
    document.head.appendChild(toggleStyles);

    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Handle close button
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });

    // Handle quantity buttons
    const qtyInput = modal.querySelector('input[type="number"]');
    modal.querySelector('.decrease').addEventListener('click', () => {
        if (qtyInput.value > 1) qtyInput.value--;
    });
    modal.querySelector('.increase').addEventListener('click', () => {
        if (qtyInput.value < 10) qtyInput.value++;
    });

    // Handle option buttons
    const optionBtns = modal.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            optionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Handle color buttons
    const colorBtns = modal.querySelectorAll('.color-btn');
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Handle add to cart
    modal.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        const quantity = qtyInput.value;
        const isReadyToWear = modal.querySelector('#ready-toggle').checked;
        const readyToWearText = isReadyToWear ? " (Ready-to-Wear)" : "";
        console.log(`Added ${quantity} ${productTitle}${readyToWearText} to cart`);

        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'cart-success-message';
        successMsg.textContent = `${quantity} ${productTitle}${readyToWearText} added to cart!`;
        document.body.appendChild(successMsg);

        setTimeout(() => {
            successMsg.classList.add('active');
        }, 10);

        setTimeout(() => {
            successMsg.classList.remove('active');
            setTimeout(() => {
                successMsg.remove();
            }, 300);
        }, 3000);

        // Close modal
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });

    // Handle buy now
    modal.querySelector('.buy-now-btn').addEventListener('click', () => {
        const isReadyToWear = modal.querySelector('#ready-toggle').checked;
        const readyToWearText = isReadyToWear ? " (Ready-to-Wear)" : "";
        console.log(`Buying ${qtyInput.value} ${productTitle}${readyToWearText} now`);
        // Redirect to checkout page (or show checkout modal)
        alert(`Redirecting to checkout for ${productTitle}${readyToWearText}...`);
    });

    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
}

// Initialize zoom effect on product images
function initImageZoom() {
    const productImages = document.querySelectorAll('.product-image');

    productImages.forEach(img => {
        img.addEventListener('mousemove', function (e) {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            const imgWidth = img.offsetWidth;
            const imgHeight = img.offsetHeight;

            const xperc = ((x / imgWidth) * 100);
            const yperc = ((y / imgHeight) * 100);

            // Apply zoom effect based on mouse position
            img.style.transformOrigin = `${xperc}% ${yperc}%`;
        });

        img.addEventListener('mouseenter', function () {
            img.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseleave', function () {
            img.style.transform = 'scale(1)';
            img.style.transformOrigin = 'center center';
        });
    });
}

// Intersection Observer for scroll animations
function observeElements(elements) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
        element.classList.add('scroll-animation');
    });
} 