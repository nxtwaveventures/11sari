import React from 'react';
import Link from 'next/link';

// Sample blog data (in a real application, this would come from a CMS or API)
const blogPosts = [
    {
        id: 1,
        title: 'The Art and History of Banarasi Silk Sarees',
        excerpt: 'Discover the rich heritage and exquisite craftsmanship behind one of India\'s most iconic textiles: the Banarasi silk saree.',
        category: 'Heritage',
        date: 'June 15, 2023',
        author: 'Ananya Sharma',
        image: '/blog-placeholder-1.jpg',
        readTime: '5 min read',
    },
    {
        id: 2,
        title: 'How Blockchain is Revolutionizing the Traditional Textile Industry',
        excerpt: 'Learn how blockchain technology is bringing transparency, authenticity verification, and new opportunities to the age-old textile craft community.',
        category: 'Technology',
        date: 'July 23, 2023',
        author: 'Raj Patel',
        image: '/blog-placeholder-2.jpg',
        readTime: '7 min read',
    },
    {
        id: 3,
        title: 'Styling Guide: Pairing Your Saree for Different Occasions',
        excerpt: 'From weddings to office wear, this comprehensive guide will help you pick the perfect saree for any event and style it flawlessly.',
        category: 'Styling',
        date: 'August 5, 2023',
        author: 'Priya Nair',
        image: '/blog-placeholder-3.jpg',
        readTime: '4 min read',
    },
    {
        id: 4,
        title: 'Meet the Weavers: Stories from Behind the Loom',
        excerpt: 'Go behind the scenes and learn about the lives, challenges, and triumphs of the master weavers who create our stunning handcrafted sarees.',
        category: 'Artisans',
        date: 'September 12, 2023',
        author: 'Vikram Singh',
        image: '/blog-placeholder-4.jpg',
        readTime: '6 min read',
    },
    {
        id: 5,
        title: 'The Environmental Impact of Traditional vs. Modern Textile Production',
        excerpt: 'A deep dive into sustainable practices in textile manufacturing and how traditional methods often have a lower environmental footprint.',
        category: 'Sustainability',
        date: 'October 3, 2023',
        author: 'Nisha Mehta',
        image: '/blog-placeholder-5.jpg',
        readTime: '8 min read',
    },
    {
        id: 6,
        title: 'NFTs and Digital Fashion: What it Means for Traditional Crafts',
        excerpt: 'Exploring the intersection of traditional craftsmanship and digital technology in the evolving landscape of fashion and art.',
        category: 'Technology',
        date: 'November 17, 2023',
        author: 'Arjun Kumar',
        image: '/blog-placeholder-6.jpg',
        readTime: '5 min read',
    },
];

// Blog categories for filtering
const categories = [
    'All',
    'Heritage',
    'Technology',
    'Styling',
    'Artisans',
    'Sustainability',
];

export default function Blog() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary-100 to-secondary-100 py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="gradient-text">Blog</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                        Insights, stories, and tips from the world of handcrafted sarees, blockchain innovation, and sustainable fashion.
                    </p>
                </div>
            </div>

            {/* Blog Posts Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    {/* Category Filter */}
                    <div className="flex items-center justify-center flex-wrap gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${category === 'All'
                                        ? 'bg-primary-500 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 hover:text-primary-500 dark:hover:bg-gray-700'
                                    } transition-colors`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Featured Post */}
                    <div className="mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
                            {/* Placeholder image for featured post */}
                            <div className="lg:col-span-3 h-64 lg:h-full bg-gradient-to-br from-primary-200 to-secondary-300 flex items-center justify-center p-8">
                                <div className="text-center lg:text-left">
                                    <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-4">
                                        Featured Post
                                    </span>
                                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">Preserving Heritage Through Technology: The Digital Saree Revolution</h2>
                                    <p className="text-sm opacity-90 max-w-lg">
                                        How blockchain and digital innovation are helping preserve and promote India's rich textile heritage for future generations.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-2 p-8">
                                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-4">
                                    <span>May 28, 2023</span>
                                    <span>•</span>
                                    <span>10 min read</span>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    In this in-depth article, we explore how traditional craftsmanship and modern technology can work together to create a sustainable future for India's handloom industry and the artisans behind it.
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/20"></div>
                                    <div>
                                        <h4 className="text-sm font-medium">Aishwarya Reddy</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Founder & Creative Director</p>
                                    </div>
                                </div>

                                <Link
                                    href="/blog/featured-post"
                                    className="inline-flex items-center text-primary-500 text-sm font-medium mt-6 hover:underline"
                                >
                                    Read Full Article
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Regular Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="card group">
                                {/* Post image (placeholder) */}
                                <div className="h-48 bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center rounded-t-2xl">
                                    <span className="text-gray-700 font-medium">{post.title}</span>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3 text-xs text-gray-500 dark:text-gray-400">
                                        <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{post.category}</span>
                                        <span>{post.date} • {post.readTime}</span>
                                    </div>

                                    <Link href={`/blog/${post.id}`}>
                                        <h2 className="text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/20"></div>
                                        <span className="text-sm font-medium">{post.author}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-12">
                        <nav className="flex items-center gap-1 bg-white dark:bg-gray-800 rounded-lg shadow p-1">
                            <button className="w-10 h-10 flex items-center justify-center rounded text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>

                            <button className="w-10 h-10 flex items-center justify-center rounded bg-primary-500 text-white">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">3</button>

                            <span className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-400">...</span>

                            <button className="w-10 h-10 flex items-center justify-center rounded text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">8</button>

                            <button className="w-10 h-10 flex items-center justify-center rounded text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
                        Stay updated with the latest articles, saree collections, and exclusive offers.
                    </p>
                    <div className="max-w-lg mx-auto">
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs mt-4 text-white/80">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
} 