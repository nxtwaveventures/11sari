import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { sareeCollection, suitCollection } from '../../scripts/products';

export default function ProductDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);

    // Find product in either collection
    const product = findProduct(id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <Layout>
            <div className="product-detail-container">
                <div className="product-gallery">
                    <div className="main-image-container">
                        <div className="product-page-main-image">
                            <img
                                src={`/assets/images/products/${product.images[selectedImage]}`}
                                alt={product.name}
                                className="main-product-image"
                            />
                        </div>
                    </div>
                    <div className="thumbnail-gallery">
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <img
                                    src={`/assets/images/products/${image}`}
                                    alt={`${product.name} view ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="product-info">
                    <h1 className="product-title">{product.name}</h1>

                    <div className="product-price">
                        <span className="current-price">₹{product.price.toLocaleString()}</span>
                        <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                        <span className="discount">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </span>
                    </div>

                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>

                    <div className="product-details">
                        <div className="detail-row">
                            <span className="detail-label">Fabric:</span>
                            <span className="detail-value">{product.fabric}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Color:</span>
                            <span className="detail-value">{product.color}</span>
                        </div>
                        {product.sareeLength && (
                            <div className="detail-row">
                                <span className="detail-label">Saree Length:</span>
                                <span className="detail-value">{product.sareeLength}</span>
                            </div>
                        )}
                        {product.blousePiece && (
                            <div className="detail-row">
                                <span className="detail-label">Blouse Piece:</span>
                                <span className="detail-value">Included ({product.blouseLength})</span>
                            </div>
                        )}
                        {product.included && (
                            <div className="detail-row">
                                <span className="detail-label">Included Items:</span>
                                <span className="detail-value">{product.included.join(', ')}</span>
                            </div>
                        )}
                    </div>

                    {product.sizes && (
                        <div className="size-selection">
                            <h3>Select Size</h3>
                            <div className="size-options">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="care-instructions">
                        <h3>Care Instructions</h3>
                        <p>{product.care}</p>
                    </div>

                    <div className="product-actions">
                        <button
                            className="add-to-cart-btn"
                            onClick={() => handleAddToCart(product, selectedSize)}
                            disabled={product.sizes && !selectedSize}
                        >
                            Add to Cart
                        </button>
                        <button
                            className="buy-now-btn"
                            onClick={() => handleBuyNow(product, selectedSize)}
                            disabled={product.sizes && !selectedSize}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .product-detail-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    padding: 2rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .product-gallery {
                    position: sticky;
                    top: 2rem;
                }

                .main-image-container {
                    margin-bottom: 1rem;
                    border-radius: 0.5rem;
                    overflow: hidden;
                }

                .main-product-image {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }

                .thumbnail-gallery {
                    display: flex;
                    gap: 0.5rem;
                    overflow-x: auto;
                }

                .thumbnail {
                    width: 80px;
                    height: 80px;
                    border-radius: 0.25rem;
                    overflow: hidden;
                    cursor: pointer;
                    opacity: 0.6;
                    transition: opacity 0.2s ease;
                }

                .thumbnail.active {
                    opacity: 1;
                    border: 2px solid var(--primary-color);
                }

                .thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .product-title {
                    font-family: var(--font-display);
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }

                .product-price {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .current-price {
                    font-size: 1.8rem;
                    font-weight: 600;
                    color: var(--primary-color);
                }

                .original-price {
                    text-decoration: line-through;
                    color: var(--text-secondary);
                }

                .discount {
                    background: #28a745;
                    color: white;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                    font-size: 0.9rem;
                }

                .product-description {
                    margin-bottom: 2rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                }

                .product-details {
                    margin-bottom: 2rem;
                }

                .detail-row {
                    display: flex;
                    margin-bottom: 0.5rem;
                }

                .detail-label {
                    width: 120px;
                    font-weight: 600;
                }

                .size-selection {
                    margin-bottom: 2rem;
                }

                .size-selection h3 {
                    margin-bottom: 0.5rem;
                }

                .size-options {
                    display: flex;
                    gap: 0.5rem;
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

                .care-instructions {
                    margin-bottom: 2rem;
                    padding: 1rem;
                    background: #f8f9fa;
                    border-radius: 0.5rem;
                }

                .care-instructions h3 {
                    margin-bottom: 0.5rem;
                }

                .product-actions {
                    display: flex;
                    gap: 1rem;
                }

                .add-to-cart-btn, .buy-now-btn {
                    flex: 1;
                    padding: 1rem;
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

                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                @media (max-width: 768px) {
                    .product-detail-container {
                        grid-template-columns: 1fr;
                    }

                    .product-gallery {
                        position: static;
                    }
                }
            `}</style>
        </Layout>
    );
}

function findProduct(id) {
    // Search in saree collection
    for (const category in sareeCollection) {
        const found = sareeCollection[category].find(item => item.id === id);
        if (found) return found;
    }

    // Search in suit collection
    for (const category in suitCollection) {
        const found = suitCollection[category].find(item => item.id === id);
        if (found) return found;
    }

    return null;
}

function handleAddToCart(product, selectedSize) {
    const event = new CustomEvent('addToCart', {
        detail: {
            ...product,
            selectedSize,
            quantity: 1
        }
    });
    document.dispatchEvent(event);
}

function handleBuyNow(product, selectedSize) {
    const event = new CustomEvent('buyNow', {
        detail: {
            ...product,
            selectedSize
        }
    });
    document.dispatchEvent(event);
}