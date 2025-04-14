import Layout from '@/components/Layout'
import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'
import { useState } from 'react'

const blogCategories = [
    'All',
    'Saree History',
    'Styling Tips',
    'Care Guide',
    'Wedding',
    'Traditions'
]

const blogPosts = [
    {
        id: 'history-of-banarasi-sarees',
        title: 'The Rich History of Banarasi Sarees',
        excerpt: 'Discover the centuries-old tradition of Banarasi silk weaving and its evolution through time...',
        category: 'Saree History',
        date: 'April 10, 2025',
        image: '/assets/images/blogs/history-banarasi.jpg',
        readTime: '5 min read'
    },
    // Add more blog posts here
]

export default function Blogs() {
    const [activeCategory, setActiveCategory] = useState('All')

    const seo = {
        title: 'Blog - Learn About Banarasi Sarees',
        description: 'Explore our blog for insights into the rich heritage of Banarasi sarees, styling tips, care guides, and traditional Indian fashion.',
        keywords: ['banarasi saree blog', 'indian fashion blog', 'saree styling', 'saree care guide', 'traditional fashion'],
        ogImage: '/assets/images/blogs/featured-blog.jpg'
    }

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory)

    return (
        <Layout seo={seo}>
            <div className="page-header">
                <div className="container">
                    <h1>Our <span className="gold-accent">Blog</span></h1>
                    <p>Stories, guides, and insights into the world of Banarasi sarees</p>
                </div>
            </div>

            <main className="blog-content">
                <div className="container">
                    <div className="blog-categories">
                        {blogCategories.map(category => (
                            <button
                                key={category}
                                className={`category-button ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="blog-grid">
                        {filteredPosts.map(post => (
                            <article key={post.id} className="blog-card">
                                <div className="blog-image">
                                    <OptimizedImage
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <span className="blog-category">{post.category}</span>
                                </div>
                                <div className="blog-content">
                                    <Link href={`/blog/${post.id}`}>
                                        <h2 className="blog-title">{post.title}</h2>
                                    </Link>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <div className="blog-meta">
                                        <span className="blog-date">{post.date} · {post.readTime}</span>
                                        <Link href={`/blog/${post.id}`} className="read-more">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="blog-pagination">
                        <button className="pagination-button active">1</button>
                        <button className="pagination-button">2</button>
                        <button className="pagination-button">3</button>
                        <button className="pagination-button">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </main>
        </Layout>
    )
}