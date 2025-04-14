import Layout from '@/components/Layout'
import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'
import { useRouter } from 'next/router'

// This would typically come from an API or CMS
const blogPosts = {
    'art-of-banarasi-silk': {
        title: "The Art of Banarasi Silk: A Journey Through Time",
        content: `
      <p>The tradition of Banarasi silk weaving dates back over 500 years, representing one of India's most exquisite textile arts. Each Banarasi saree tells a story of incredible craftsmanship, cultural heritage, and timeless elegance.</p>
      
      <h2>The Origins</h2>
      <p>Banarasi silk weaving flourished during the Mughal era, when skilled artisans combined Persian motifs with Indian designs to create something truly unique. The city of Varanasi became the epicenter of this art form, with generations of weavers perfecting their craft.</p>
      
      <h2>The Craftsmanship</h2>
      <p>Creating a Banarasi silk saree is an intricate process that can take anywhere from 15 days to 6 months, depending on the complexity of the design. Master weavers use pure silk threads and often incorporate real gold and silver zari work.</p>
      
      <h2>Preserving the Legacy</h2>
      <p>Today, we face the challenge of preserving this ancient art form while adapting to modern demands. At 11Sari, we work directly with master weavers, ensuring fair compensation and helping to keep this beautiful tradition alive for future generations.</p>
    `,
        author: "Priya Sharma",
        date: "April 10, 2025",
        category: "Heritage",
        image: "/assets/images/blog/banarasi-silk-history.jpg",
        relatedPosts: ['silk-saree-care-guide', 'wedding-season-trends'],
        readTime: "5 min read"
    }
}

export default function BlogPost() {
    const router = useRouter()
    const { slug } = router.query
    const post = blogPosts[slug]

    const seo = post ? {
        title: post.title,
        description: `Read about ${post.title.toLowerCase()} in our blog. Learn about Banarasi sarees, their history, and traditional Indian fashion.`,
        keywords: ['banarasi saree', 'indian fashion', 'traditional wear', post.category.toLowerCase(), 'fashion blog', 'saree blog'],
        ogImage: post.image
    } : {
        title: 'Post Not Found',
        description: 'The blog post you are looking for could not be found.',
    }

    if (!post) {
        return (
            <Layout seo={seo}>
                <div className="container">
                    <div className="error-message">
                        <h1>Post not found</h1>
                        <Link href="/blogs" className="back-link">
                            Return to Blog
                        </Link>
                    </div>
                </div>
            </Layout>
        )
    }

    return (
        <Layout seo={seo}>
            <article className="blog-post">
                <div className="post-hero">
                    <div className="container">
                        <span className="post-category">{post.category}</span>
                        <h1 className="post-title">{post.title}</h1>
                        <div className="post-meta">
                            <span className="post-author">By {post.author}</span>
                            <span className="post-date">{post.date}</span>
                            <span className="post-read-time">{post.readTime}</span>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="post-image">
                        <OptimizedImage
                            src={post.image}
                            alt={post.title}
                            fill
                            priority
                            sizes="(max-width: 900px) 100vw, 900px"
                        />
                    </div>

                    <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                    <footer className="post-footer">
                        <h3>Related Articles</h3>
                        <div className="related-posts">
                            {post.relatedPosts.map(relatedSlug => {
                                const relatedPost = blogPosts[relatedSlug]
                                if (!relatedPost) return null
                                return (
                                    <Link
                                        href={`/blog/${relatedSlug}`}
                                        key={relatedSlug}
                                        className="related-post-card"
                                    >
                                        <OptimizedImage
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <h4>{relatedPost.title}</h4>
                                    </Link>
                                )
                            })}
                        </div>
                    </footer>
                </div>
            </article>
        </Layout>
    )
}