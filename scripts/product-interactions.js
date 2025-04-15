class ProductInteractions {
    constructor() {
        this.quickViewModal = this.createQuickViewModal();
        this.initializeListeners();
        this.selectedSize = null;
        this.currentProduct = null;
    }

    createQuickViewModal() {
        const modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        modal.innerHTML = `
            <div class="quick-view-container">
                <button class="close-quick-view">&times;</button>
                <div class="quick-view-content">
                    <div class="product-gallery">
                        <div class="main-image">
                            <img src="" alt="Product Image">
                        </div>
                        <div class="thumbnail-list"></div>
                    </div>
                    <div class="product-info">
                        <h2 class="product-name"></h2>
                        <div class="product-price">
                            <span class="current-price"></span>
                            <span class="original-price"></span>
                        </div>
                        <div class="product-description"></div>
                        <div class="product-details">
                            <div class="fabric-info"></div>
                            <div class="color-info"></div>
                        </div>
                        <div class="size-options"></div>
                        <div class="product-actions">
                            <button class="add-to-cart-btn">Add to Cart</button>
                            <button class="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            .quick-view-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.8);
                z-index: 1000;
                overflow-y: auto;
            }

            .quick-view-modal.active {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .quick-view-container {
                background: white;
                border-radius: 0.5rem;
                max-width: 1000px;
                width: 90%;
                position: relative;
                margin: 2rem auto;
            }

            .close-quick-view {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                z-index: 1;
            }

            .quick-view-content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                padding: 2rem;
            }

            .product-gallery {
                position: relative;
            }

            .main-image {
                margin-bottom: 1rem;
                border-radius: 0.5rem;
                overflow: hidden;
            }

            .main-image img {
                width: 100%;
                height: 400px;
                object-fit: cover;
            }

            .thumbnail-list {
                display: flex;
                gap: 0.5rem;
                overflow-x: auto;
            }

            .thumbnail {
                width: 60px;
                height: 60px;
                border-radius: 0.25rem;
                cursor: pointer;
                opacity: 0.6;
                transition: opacity 0.2s ease;
            }

            .thumbnail.active {
                opacity: 1;
                border: 2px solid var(--primary-color);
            }

            .product-info {
                padding: 1rem;
            }

            .product-name {
                font-family: var(--font-display);
                font-size: 1.8rem;
                margin-bottom: 1rem;
            }

            .product-price {
                margin-bottom: 1rem;
            }

            .current-price {
                font-size: 1.5rem;
                font-weight: 600;
                color: var(--primary-color);
            }

            .original-price {
                text-decoration: line-through;
                color: var(--text-secondary);
                margin-left: 0.5rem;
            }

            .product-description {
                color: var(--text-secondary);
                margin-bottom: 1.5rem;
                line-height: 1.6;
            }

            .product-details > div {
                margin-bottom: 0.5rem;
            }

            .size-options {
                display: flex;
                gap: 0.5rem;
                margin: 1.5rem 0;
            }

            .size-option {
                padding: 0.5rem 1rem;
                border: 1px solid var(--border-light);
                border-radius: 0.25rem;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .size-option.selected {
                background: var(--primary-color);
                color: white;
                border-color: var(--primary-color);
            }

            .product-actions {
                display: flex;
                gap: 1rem;
                margin-top: 2rem;
            }

            .add-to-cart-btn, .buy-now-btn {
                flex: 1;
                padding: 0.75rem;
                border-radius: 0.25rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .add-to-cart-btn {
                background: white;
                border: 1px solid var(--primary-color);
                color: var(--primary-color);
            }

            .buy-now-btn {
                background: var(--primary-color);
                border: 1px solid var(--primary-color);
                color: white;
            }

            .add-to-cart-btn:hover {
                background: rgba(147, 37, 37, 0.1);
            }

            .buy-now-btn:hover {
                background: var(--primary-dark);
            }

            @media (max-width: 768px) {
                .quick-view-content {
                    grid-template-columns: 1fr;
                }

                .main-image img {
                    height: 300px;
                }
            }
        `;
        document.head.appendChild(styles);

        return modal;
    }

    initializeListeners() {
        // Quick view functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('.quick-view-trigger')) {
                const productCard = e.target.closest('.product-card');
                this.openQuickView(productCard.dataset.productId);
            }
        });

        // Close quick view
        this.quickViewModal.querySelector('.close-quick-view').addEventListener('click', () => {
            this.closeQuickView();
        });

        // Size selection
        this.quickViewModal.querySelector('.size-options').addEventListener('click', (e) => {
            if (e.target.classList.contains('size-option')) {
                this.handleSizeSelection(e.target);
            }
        });

        // Add to cart
        this.quickViewModal.querySelector('.add-to-cart-btn').addEventListener('click', () => {
            this.handleAddToCart();
        });

        // Buy now
        this.quickViewModal.querySelector('.buy-now-btn').addEventListener('click', () => {
            this.handleBuyNow();
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.quickViewModal.classList.contains('active')) {
                this.closeQuickView();
            }
        });

        // Thumbnail click
        this.quickViewModal.querySelector('.thumbnail-list').addEventListener('click', (e) => {
            if (e.target.classList.contains('thumbnail')) {
                this.updateMainImage(e.target.src);
            }
        });
    }

    openQuickView(productId) {
        // Fetch product data based on ID
        this.currentProduct = this.getProductById(productId);
        if (!this.currentProduct) return;

        // Update modal content
        const modal = this.quickViewModal;
        modal.querySelector('.product-name').textContent = this.currentProduct.name;
        modal.querySelector('.current-price').textContent = `₹${this.currentProduct.price.toLocaleString()}`;
        modal.querySelector('.original-price').textContent = `₹${this.currentProduct.originalPrice.toLocaleString()}`;
        modal.querySelector('.product-description').textContent = this.currentProduct.description;
        modal.querySelector('.fabric-info').textContent = `Fabric: ${this.currentProduct.fabric}`;
        modal.querySelector('.color-info').textContent = `Color: ${this.currentProduct.color}`;

        // Update main image
        this.updateMainImage(`assets/images/products/${this.currentProduct.images[0]}`);

        // Update thumbnails
        const thumbnailList = modal.querySelector('.thumbnail-list');
        thumbnailList.innerHTML = this.currentProduct.images.map(img => `
            <img src="assets/images/products/${img}" alt="Product thumbnail" class="thumbnail">
        `).join('');
        thumbnailList.firstElementChild.classList.add('active');

        // Update size options if applicable
        const sizeOptions = modal.querySelector('.size-options');
        if (this.currentProduct.sizes) {
            sizeOptions.innerHTML = this.currentProduct.sizes.map(size => `
                <div class="size-option">${size}</div>
            `).join('');
            sizeOptions.style.display = 'flex';
        } else {
            sizeOptions.style.display = 'none';
        }

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeQuickView() {
        this.quickViewModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.selectedSize = null;
        this.currentProduct = null;
    }

    updateMainImage(src) {
        const mainImage = this.quickViewModal.querySelector('.main-image img');
        const thumbnails = this.quickViewModal.querySelectorAll('.thumbnail');

        mainImage.src = src;
        thumbnails.forEach(thumb => {
            thumb.classList.toggle('active', thumb.src === src);
        });
    }

    handleSizeSelection(sizeElement) {
        const sizeOptions = this.quickViewModal.querySelectorAll('.size-option');
        sizeOptions.forEach(option => option.classList.remove('selected'));
        sizeElement.classList.add('selected');
        this.selectedSize = sizeElement.textContent;
    }

    handleAddToCart() {
        if (this.currentProduct.sizes && !this.selectedSize) {
            alert('Please select a size');
            return;
        }

        // Add to cart implementation
        const cartItem = {
            ...this.currentProduct,
            selectedSize: this.selectedSize,
            quantity: 1
        };

        // Dispatch custom event for cart update
        const event = new CustomEvent('addToCart', { detail: cartItem });
        document.dispatchEvent(event);

        this.closeQuickView();
    }

    handleBuyNow() {
        if (this.currentProduct.sizes && !this.selectedSize) {
            alert('Please select a size');
            return;
        }

        // Dispatch custom event for buy now
        const event = new CustomEvent('buyNow', {
            detail: {
                ...this.currentProduct,
                selectedSize: this.selectedSize
            }
        });
        document.dispatchEvent(event);

        this.closeQuickView();
    }

    getProductById(id) {
        // This would need to be implemented based on your product data structure
        // For now, returning a mock product
        return {
            id: 'mock-id',
            name: 'Sample Product',
            price: 9999,
            originalPrice: 12999,
            description: 'Sample description',
            fabric: 'Cotton',
            color: 'Blue',
            images: ['sample1.jpg', 'sample2.jpg'],
            sizes: ['S', 'M', 'L', 'XL']
        };
    }
}

// Initialize product interactions
document.addEventListener('DOMContentLoaded', () => {
    new ProductInteractions();
});