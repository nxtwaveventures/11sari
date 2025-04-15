class ImageZoom {
    constructor(imageContainer, options = {}) {
        this.container = imageContainer;
        this.zoomLevel = options.zoomLevel || 2;
        this.zoomLensSize = options.zoomLensSize || 100;

        this.setupZoom();
    }

    setupZoom() {
        // Create zoom lens
        this.lens = document.createElement('div');
        this.lens.className = 'zoom-lens';

        // Create zoom result container
        this.zoomResult = document.createElement('div');
        this.zoomResult.className = 'zoom-result';

        // Add elements to container
        this.container.style.position = 'relative';
        this.container.appendChild(this.lens);
        this.container.appendChild(this.zoomResult);

        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            .zoom-lens {
                position: absolute;
                border: 2px solid var(--primary-color);
                width: ${this.zoomLensSize}px;
                height: ${this.zoomLensSize}px;
                display: none;
                cursor: none;
                background: rgba(255,255,255,0.3);
            }

            .zoom-result {
                position: absolute;
                border: 1px solid var(--border-light);
                width: 400px;
                height: 400px;
                top: 0;
                left: 105%;
                display: none;
                overflow: hidden;
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: var(--shadow-md);
                z-index: 100;
            }

            @media (max-width: 1200px) {
                .zoom-result {
                    display: none !important;
                }

                .zoom-lens {
                    display: none !important;
                }

                .product-image-container:hover .product-image {
                    transform: scale(1.5);
                    transition: transform 0.3s ease;
                }
            }
        `;
        document.head.appendChild(styles);

        // Add event listeners
        this.container.addEventListener('mouseenter', () => this.startZoom());
        this.container.addEventListener('mouseleave', () => this.stopZoom());
        this.container.addEventListener('mousemove', (e) => this.moveZoom(e));

        // Add touch support for mobile devices
        this.container.addEventListener('touchstart', (e) => this.handleTouch(e));
        this.container.addEventListener('touchmove', (e) => this.handleTouch(e));
        this.container.addEventListener('touchend', () => this.stopZoom());
    }

    startZoom() {
        const img = this.container.querySelector('img');
        if (!img) return;

        // Show zoom elements
        this.lens.style.display = 'block';
        this.zoomResult.style.display = 'block';

        // Calculate ratios
        this.cx = this.zoomResult.offsetWidth / this.lens.offsetWidth;
        this.cy = this.zoomResult.offsetHeight / this.lens.offsetHeight;

        // Set zoom result background
        this.zoomResult.style.backgroundImage = `url('${img.src}')`;
        this.zoomResult.style.backgroundSize = `${img.width * this.cx}px ${img.height * this.cy}px`;

        // Get container bounds
        this.bounds = this.container.getBoundingClientRect();
    }

    stopZoom() {
        this.lens.style.display = 'none';
        this.zoomResult.style.display = 'none';
    }

    moveZoom(e) {
        e.preventDefault();

        // Get cursor position
        const pos = this.getCursorPos(e);

        // Calculate lens position
        let lensX = pos.x - this.lens.offsetWidth / 2;
        let lensY = pos.y - this.lens.offsetHeight / 2;

        // Prevent lens from going outside image
        const maxX = this.container.offsetWidth - this.lens.offsetWidth;
        const maxY = this.container.offsetHeight - this.lens.offsetHeight;

        lensX = Math.max(0, Math.min(lensX, maxX));
        lensY = Math.max(0, Math.min(lensY, maxY));

        // Move lens
        this.lens.style.left = `${lensX}px`;
        this.lens.style.top = `${lensY}px`;

        // Move zoom result background
        this.zoomResult.style.backgroundPosition = `-${lensX * this.cx}px -${lensY * this.cy}px`;
    }

    getCursorPos(e) {
        let x = 0, y = 0;
        e = e || window.event;

        // Get relative cursor position
        const bounds = this.container.getBoundingClientRect();
        x = e.pageX - bounds.left - window.pageXOffset;
        y = e.pageY - bounds.top - window.pageYOffset;

        return { x, y };
    }

    handleTouch(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        this.moveZoom(mouseEvent);
    }
}

// Initialize zoom on all product images
document.addEventListener('DOMContentLoaded', () => {
    // Add zoom to product images in collection pages
    document.querySelectorAll('.product-image-container').forEach(container => {
        new ImageZoom(container, { zoomLensSize: 80 });
    });

    // Initialize zoom for dynamically added images
    document.addEventListener('quickViewOpened', (e) => {
        const container = document.querySelector('.quick-view-modal .main-image');
        if (container) {
            new ImageZoom(container, { zoomLensSize: 100 });
        }
    });

    // Handle product page zoom
    const productPageImage = document.querySelector('.product-page-main-image');
    if (productPageImage) {
        new ImageZoom(productPageImage, {
            zoomLevel: 2.5,
            zoomLensSize: 120
        });
    }
});