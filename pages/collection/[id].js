import Layout from '@/components/Layout'
import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

// This would typically come from an API or CMS
const products = {
    1: {
        id: 1,
        name: "Royal Banarasi Silk",
        price: "₹25,999",
        images: [
            "/assets/images/products/royal-banarasi.jpg",
            "/assets/images/products/royal-banarasi-2.jpg",
            "/assets/images/products/royal-banarasi-3.jpg"
        ],
        category: "Wedding",
        description: "Experience the grandeur of traditional Banarasi craftsmanship with this exquisite silk saree. Featuring intricate zari work and timeless motifs.",
        details: {
            fabric: "Pure Silk",
            weave: "Banarasi",
            color: "Deep Red with Gold",
            zari: "Real Gold Zari",
            weight: "850-900 grams",
            length: "6.3 meters",
            blouse: "0.8 meters unstitched",
            occasion: "Wedding, Bridal"
        },
        care: [
            "Dry clean only",
            "Store in muslin cloth",
            "Keep away from direct sunlight",
            "Use wooden hangers"
        ],
        relatedProducts: [2, 3]
    }
}

export default function ProductDetail() {
    const router = useRouter()
    const { id } = router.query
    const [selectedImage, setSelectedImage] = useState(0)
    const product = products[id]

    const seo = product ? {
        title: product.name,
        description: `${product.description} Shop this ${product.category.toLowerCase()} Banarasi silk saree from our exclusive collection. Made with ${product.details.fabric}, featuring ${product.details.zari} work.`,
        keywords: [
            'banarasi saree',
            product.category.toLowerCase(),
            'silk saree',
            'wedding wear',
            'indian fashion',
            'traditional wear',
            'handloom saree',
            product.details.fabric.toLowerCase()
        ],
        ogImage: product.images[0]
    } : {
        title: 'Product Not Found',
        description: 'The product you are looking for could not be found.',
    }

    if (!product) {
        return (
            <Layout seo={seo}>
                <div className="container">
                    <div className="error-message">
                        <h1>Product not found</h1>
                        <Link href="/collection" className="back-link">
                            Return to Collection
                        </Link>
                    </div>
                </div>
            </Layout>
        )
    }

    return (
        <Layout seo={seo}>
            <main className="product-detail">
                <div className="container">
                    <div className="product-grid">
                        <div className="product-gallery">
                            <div className="main-image">
                                <OptimizedImage
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="image-thumbnails">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        <OptimizedImage
                                            src={image}
                                            alt={`${product.name} view ${index + 1}`}
                                            fill
                                            sizes="80px"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="product-info">
                            <h1 className="product-title">{product.name}</h1>
                            <span className="product-category">{product.category}</span>
                            <span className="product-price">{product.price}</span>
                            <p className="product-description">{product.description}</p>

                            <div className="product-details">
                                <h2>Product Details</h2>
                                <div className="details-grid">
                                    {Object.entries(product.details).map(([key, value]) => (
                                        <div key={key} className="detail-item">
                                            <span className="detail-label">{key}</span>
                                            <span className="detail-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="care-instructions">
                                <h2>Care Instructions</h2>
                                <ul>
                                    {product.care.map((instruction, index) => (
                                        <li key={index}>{instruction}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="product-actions">
                                <button className="primary-button">
                                    <i className="fas fa-shopping-bag"></i>
                                    Add to Cart
                                </button>
                                <button className="secondary-button">
                                    <i className="fas fa-heart"></i>
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="related-products">
                        <h2>You May Also Like</h2>
                        <div className="related-grid">
                            {product.relatedProducts.map(relatedId => {
                                const relatedProduct = products[relatedId]
                                if (!relatedProduct) return null
                                return (
                                    <Link
                                        href={`/collection/${relatedId}`}
                                        key={relatedId}
                                        className="related-product-card"
                                    >
                                        <OptimizedImage
                                            src={relatedProduct.images[0]}
                                            alt={relatedProduct.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="related-product-info">
                                            <h3>{relatedProduct.name}</h3>
                                            <span>{relatedProduct.price}</span>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}