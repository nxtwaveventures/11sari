import { sareeCollection, suitCollection } from './products.js';

class ProductSearch {
    constructor() {
        this.searchInput = document.querySelector('.search-input');
        this.searchResults = document.querySelector('.search-results');
        this.searchToggle = document.querySelector('.search-toggle');
        this.searchModal = document.createElement('div');
        this.setupSearchUI();
        this.bindEvents();
    }

    setupSearchUI() {
        // Create search modal
        this.searchModal.className = 'search-modal';
        this.searchModal.innerHTML = `
            <div class="search-container">
                <div class="search-header">
                    <input type="text" class="search-input" placeholder="Search for sarees, suits...">
                    <button class="close-search">&times;</button>
                </div>
                <div class="search-results"></div>
            </div>
        `;
        document.body.appendChild(this.searchModal);

        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            .search-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.8);
                z-index: 1000;
            }

            .search-modal.active {
                display: block;
            }

            .search-container {
                position: relative;
                max-width: 800px;
                margin: 2rem auto;
                background: white;
                border-radius: 0.5rem;
                overflow: hidden;
            }

            .search-header {
                padding: 1rem;
                border-bottom: 1px solid var(--border-light);
                display: flex;
                gap: 1rem;
            }

            .search-input {
                flex: 1;
                padding: 0.5rem;
                font-size: 1.1rem;
                border: 1px solid var(--border-light);
                border-radius: 0.25rem;
            }

            .close-search {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--text-secondary);
            }

            .search-results {
                max-height: 70vh;
                overflow-y: auto;
                padding: 1rem;
            }

            .search-result-item {
                display: flex;
                gap: 1rem;
                padding: 1rem;
                border-bottom: 1px solid var(--border-light);
                text-decoration: none;
                color: var(--text-primary);
                transition: background-color 0.2s ease;
            }

            .search-result-item:hover {
                background-color: #f8f8f8;
            }

            .search-result-image {
                width: 100px;
                height: 100px;
                object-fit: cover;
                border-radius: 0.25rem;
            }

            .search-result-details {
                flex: 1;
            }

            .search-result-name {
                font-weight: 600;
                margin-bottom: 0.5rem;
            }

            .search-result-price {
                color: var(--primary-color);
                font-weight: 600;
            }

            .search-result-category {
                font-size: 0.9rem;
                color: var(--text-secondary);
            }
        `;
        document.head.appendChild(styles);
    }

    bindEvents() {
        // Toggle search modal
        this.searchToggle.addEventListener('click', () => {
            this.searchModal.classList.add('active');
            this.searchModal.querySelector('.search-input').focus();
        });

        // Close search modal
        this.searchModal.querySelector('.close-search').addEventListener('click', () => {
            this.searchModal.classList.remove('active');
        });

        // Handle search input
        this.searchModal.querySelector('.search-input').addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.searchModal.classList.contains('active')) {
                this.searchModal.classList.remove('active');
            }
        });
    }

    handleSearch(query) {
        if (!query) {
            this.searchModal.querySelector('.search-results').innerHTML = '';
            return;
        }

        const results = this.searchProducts(query);
        this.displayResults(results);
    }

    searchProducts(query) {
        query = query.toLowerCase();
        let results = [];

        // Search in saree collection
        Object.entries(sareeCollection).forEach(([category, sarees]) => {
            sarees.forEach(saree => {
                if (this.matchesSearch(saree, query)) {
                    results.push({ ...saree, category: 'Saree', type: category });
                }
            });
        });

        // Search in suit collection
        Object.entries(suitCollection).forEach(([category, suits]) => {
            suits.forEach(suit => {
                if (this.matchesSearch(suit, query)) {
                    results.push({ ...suit, category: 'Suit', type: category });
                }
            });
        });

        return results;
    }

    matchesSearch(product, query) {
        return (
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.fabric.toLowerCase().includes(query) ||
            product.color.toLowerCase().includes(query)
        );
    }

    displayResults(results) {
        const resultsContainer = this.searchModal.querySelector('.search-results');

        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">No products found</div>';
            return;
        }

        resultsContainer.innerHTML = results.map(product => `
            <a href="${product.category.toLowerCase()}-collection.html#${product.id}" class="search-result-item">
                <img src="assets/images/products/${product.images[0]}" alt="${product.name}" class="search-result-image">
                <div class="search-result-details">
                    <div class="search-result-name">${product.name}</div>
                    <div class="search-result-category">${product.category} - ${this.capitalizeFirstLetter(product.type)}</div>
                    <div class="search-result-price">₹${product.price.toLocaleString()}</div>
                </div>
            </a>
        `).join('');
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', () => {
    new ProductSearch();
});