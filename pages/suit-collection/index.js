import Layout from '@/components/Layout'
import OptimizedImage from '@/components/OptimizedImage'
import { useState } from 'react'

const categories = ['All', 'Anarkali', 'Palazzo', 'Patiala', 'Punjabi', 'Sharara']
const occasions = ['All', 'Wedding', 'Festive', 'Casual', 'Party Wear']
const sortOptions = ['Popular', 'Newest', 'Price: Low to High', 'Price: High to Low']

const products = [
    {
        id: 'royal-blue-anarkali',
        title: 'Royal Blue Anarkali Suit',
        category: 'Anarkali',
        occasion: 'Festive',
        material: 'Georgette',
        price: 8999,
        originalPrice: 12999,
        description: 'Stunning royal blue anarkali suit with gold embroidery work, perfect for festive occasions and celebrations.',
        image: '/assets/images/products/anarkali-blue.jpg'
    },
    {
        id: 'emerald-palazzo',
        title: 'Emerald Green Palazzo Suit',
        category: 'Palazzo',
        occasion: 'Casual',
        material: 'Cotton Silk',
        price: 6499,
        originalPrice: 8999,
        description: 'Elegant emerald green palazzo suit with delicate hand embroidery, offering comfort and style for everyday wear.',
        image: '/assets/images/products/palazzo-green.jpg'
    },
    {
        id: 'bridal-maroon',
        title: 'Bridal Maroon Sharara Suit',
        category: 'Sharara',
        occasion: 'Wedding',
        material: 'Pure Silk',
        price: 18999,
        originalPrice: 24999,
        description: 'Luxurious maroon sharara suit with intricate zari work and stone embellishments, perfect for wedding ceremonies.',
        image: '/assets/images/products/sharara-maroon.jpg'
    },
    {
        id: 'lavender-patiala',
        title: 'Lavender Patiala Suit',
        category: 'Patiala',
        occasion: 'Casual',
        material: 'Cotton',
        price: 4999,
        originalPrice: 6999,
        description: 'Comfortable lavender patiala suit with subtle print and mirror work details, ideal for casual gatherings.',
        image: '/assets/images/products/patiala-lavender.jpg'
    },
    {
        id: 'rose-pink-designer',
        title: 'Rose Pink Designer Suit',
        category: 'Anarkali',
        occasion: 'Party',
        material: 'Chiffon',
        price: 9499,
        originalPrice: 11999,
        description: 'Stylish rose pink designer suit with contemporary cuts and sequin work, perfect for evening parties.',
        image: '/assets/images/products/designer-pink.jpg'
    },
    {
        id: 'turquoise-punjabi',
        title: 'Turquoise Punjabi Suit',
        category: 'Punjabi',
        occasion: 'Festive',
        material: 'Chanderi',
        price: 7499,
        originalPrice: 9999,
        description: 'Vibrant turquoise punjabi suit with phulkari embroidery, celebrating the rich cultural heritage of Punjab.',
        image: '/assets/images/products/punjabi-turquoise.jpg'
    }
]

export default function SuitCollection() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [activeOccasion, setActiveOccasion] = useState('All')
    const [activeSort, setActiveSort] = useState('Popular')

    const seo = {
        title: 'Elegant Indian Salwar Suit Collection - 11Suit',
        description: 'Explore our exclusive collection of authentic Indian salwar suits with intricate designs and premium quality.',
        keywords: ['salwar suit', 'indian fashion', 'traditional wear', 'anarkali suit', 'palazzo suit', 'punjabi suit'],
    }

    const filteredProducts = products
        .filter(product =>
            (activeCategory === 'All' || product.category === activeCategory) &&
            (activeOccasion === 'All' || product.occasion === activeOccasion)
        )
        .sort((a, b) => {
            switch (activeSort) {
                case 'Price: Low to High':
                    return a.price - b.price
                case 'Price: High to Low':
                    return b.price - a.price
                case 'Newest':
                    return -1 // For demo, keeping newest first
                default:
                    return 0
            }
        })

    return (
        <Layout seo={seo}>
            <div className="collection-header">
                <h1>Elegant Indian Salwar Suit Collection</h1>
                <p>Discover our premium range of authentic Indian salwar suits, carefully crafted with traditional techniques and contemporary designs.</p>
            </div>

            <div className="filter-bar">
                <div className="filter-group">
                    <label htmlFor="category-filter">Category:</label>
                    <select
                        id="category-filter"
                        className="filter-select"
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="occasion-filter">Occasion:</label>
                    <select
                        id="occasion-filter"
                        className="filter-select"
                        value={activeOccasion}
                        onChange={(e) => setActiveOccasion(e.target.value)}
                    >
                        {occasions.map(occasion => (
                            <option key={occasion} value={occasion}>{occasion}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="sort-options">Sort By:</label>
                    <select
                        id="sort-options"
                        className="filter-select"
                        value={activeSort}
                        onChange={(e) => setActiveSort(e.target.value)}
                    >
                        {sortOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-image"
                        />
                        <div className="product-details">
                            <span className="material-tag">{product.material}</span>
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-description">{product.description}</p>
                            <div className="product-price">
                                <span>₹{product.price.toLocaleString()}</span>
                                <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                            </div>
                            <div className="product-actions">
                                <a href="#" className="buy-now">Buy Now</a>
                                <a href="#" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}