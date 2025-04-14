import Layout from '@/components/Layout'
import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'
import { useState } from 'react'

const categories = ['All', 'Bridal', 'Festive', 'Casual', 'Party Wear', 'Designer']
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Popular']

export default function Collection() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [activeSort, setActiveSort] = useState('Newest')

    const seo = {
        title: 'Collection - Exquisite Banarasi Sarees',
        description: 'Explore our collection of handcrafted Banarasi silk sarees. From bridal to casual wear, find the perfect saree for every occasion.',
        keywords: ['banarasi saree', 'silk saree', 'bridal saree', 'designer saree', 'handloom saree'],
        ogImage: '/assets/images/collections/collection-preview.jpg'
    }

    return (
        <Layout seo={seo}>
            <div className="page-header">
                <div className="container">
                    <h1>Our <span className="gold-accent">Collection</span></h1>
                    <p>Discover timeless elegance in our handcrafted Banarasi silk sarees</p>
                </div>
            </div>

            <main className="collection-content">
                <div className="container">
                    <div className="collection-filters">
                        <div className="filter-group">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="sort-group">
                            <select
                                className="sort-select"
                                value={activeSort}
                                onChange={(e) => setActiveSort(e.target.value)}
                            >
                                {sortOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="products-grid">
                        {products.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <OptimizedImage
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {product.tag && (
                                        <span className="product-tag">{product.tag}</span>
                                    )}
                                    <div className="product-actions">
                                        <button className="action-button">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                        <button className="action-button">
                                            <i className="fas fa-share"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <Link href={`/collection/${product.id}`}>
                                        <h3 className="product-name">{product.name}</h3>
                                    </Link>
                                    <span className="product-category">{product.category}</span>
                                    <span className="product-price">{product.price}</span>
                                    <Link href={`/collection/${product.id}`} className="view-details">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

const products = [
    {
        id: 'royal-heritage-bridal',
        name: 'Royal Heritage Bridal Saree',
        category: 'Bridal',
        price: '₹75,000',
        image: '/assets/images/collections/royal-heritage.jpg',
        tag: 'New Arrival'
    },
    // Add more products here
]