import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import MarkdownContent from '@/components/MarkdownContent';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

// Generate avatar color based on name for consistent coloring
function getAvatarColor(name: string) {
    const colors = [
        'bg-primary-500', 'bg-secondary-500', 'bg-teal-500',
        'bg-rose-500', 'bg-amber-500', 'bg-indigo-500'
    ];
    const textColors = [
        'text-white', 'text-white', 'text-white',
        'text-white', 'text-white', 'text-white'
    ];
    // Simple hash function
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colorIndex = hash % colors.length;
    return {
        bg: colors[colorIndex],
        text: textColors[colorIndex]
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = params;
    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    // Generate a color palette based on the category
    const categoryColors = {
        'Heritage': 'from-orange-50 to-amber-100',
        'Technology': 'from-blue-50 to-indigo-100',
        'Styling': 'from-pink-50 to-rose-100',
        'Artisans': 'from-emerald-50 to-teal-100',
        'Sustainability': 'from-green-50 to-lime-100'
    };

    const bgGradient = categoryColors[post.category as keyof typeof categoryColors] || 'from-primary-50 to-secondary-100';

    return (
        <div className="min-h-screen">
            {/* Hero Section with Post Title */}
            <div className={`bg-gradient-to-r ${bgGradient} py-20 px-4`}>
                <div className="container mx-auto max-w-4xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-6"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        Back to All Posts
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex items-center mb-6">
                        <div className="flex items-center">
                            <div className={`w-10 h-10 rounded-full mr-3 flex items-center justify-center overflow-hidden ${getAvatarColor(post.author.name).bg}`}>
                                {post.author.avatar ? (
                                    <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className={`text-lg font-medium ${getAvatarColor(post.author.name).text}`}>
                                        {post.author.name.charAt(0)}
                                    </span>
                                )}
                            </div>
                            <div>
                                <div className="font-medium">{post.author.name}</div>
                                <div className="text-sm text-gray-600">{post.author.title}</div>
                            </div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-sm text-gray-600">{post.date}</div>
                            <div className="text-sm text-gray-600">{post.readTime}</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-block px-3 py-1 text-xs font-medium bg-white/30 backdrop-blur-sm rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto max-w-4xl px-4 py-12">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Post Image Placeholder */}
                    <div className={`h-80 bg-gradient-to-br ${bgGradient} flex items-center justify-center`}>
                        <span className="text-xl font-medium text-gray-700">Featured Image</span>
                    </div>

                    {/* Post Content */}
                    <div className="p-8">
                        <div className="prose max-w-none">
                            <MarkdownContent content={post.content} />
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogPosts
                            .filter(
                                (relatedPost) =>
                                    relatedPost.id !== post.id &&
                                    (relatedPost.category === post.category ||
                                        relatedPost.tags.some((tag) => post.tags.includes(tag)))
                            )
                            .slice(0, 3)
                            .map((relatedPost) => (
                                <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="h-40 bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center">
                                        <span className="text-base font-medium text-gray-700 px-4 text-center">
                                            {relatedPost.title}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-xs text-gray-500 mb-2">
                                            {relatedPost.date} • {relatedPost.readTime}
                                        </div>
                                        <Link href={`/blog/${relatedPost.slug}`}>
                                            <h3 className="text-lg font-semibold mb-2 hover:text-primary-500 transition-colors">
                                                {relatedPost.title}
                                            </h3>
                                        </Link>
                                        <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 text-white">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                        <p className="text-white/90 mb-6 max-w-xl mx-auto">
                            Stay updated with our latest articles, collection updates, and exclusive offers.
                        </p>
                        <div className="max-w-md mx-auto">
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-white text-primary-500 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 