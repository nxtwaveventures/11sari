import Layout from '@/components/Layout'
import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'

export default function Home() {
    const seo = {
        title: 'Eleven Sari - Exquisite Banarasi Silk Sarees',
        description: 'Discover our collection of handcrafted Banarasi silk sarees. Traditional elegance meets contemporary design.',
        keywords: ['banarasi saree', 'silk saree', 'indian fashion', 'traditional wear', 'handloom'],
        ogImage: '/assets/images/hero/hero-background.jpg'
    }

    return (
        <Layout seo={seo}>
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="white-text">Discover the Elegance of</span>
                        <span className="gold-text">Banarasi Silk</span>
                    </h1>
                    <p className="hero-subtitle">
                        Handcrafted with passion, our Banarasi silk sarees embody timeless traditions and contemporary elegance
                    </p>
                    <Link href="/collection" className="cta-button">
                        Explore Collection
                    </Link>
                </div>
                <div className="hero-background">
                    <OptimizedImage
                        src="/assets/images/hero/hero-background.jpg"
                        alt="Elegant Banarasi Silk Saree"
                        fill
                        priority
                        quality={90}
                        sizes="100vw"
                    />
                </div>
            </section>

            <section className="collection-section">
                <div className="container">
                    <h2 className="section-title">Featured Collections</h2>
                    <div className="collection-grid">
                        {featuredCollections.map(collection => (
                            <div key={collection.id} className="collection-item">
                                <div className="collection-image">
                                    <OptimizedImage
                                        src={collection.image}
                                        alt={collection.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <h3 className="collection-title">{collection.title}</h3>
                                <p className="collection-description">{collection.description}</p>
                                <Link
                                    href={`/collection/${collection.id}`}
                                    className="collection-link"
                                >
                                    View Collection
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        {features.map(feature => (
                            <div key={feature.id} className="feature-item">
                                <div className="feature-icon">
                                    <OptimizedImage
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

const featuredCollections = [
    {
        id: 'royal-heritage',
        title: 'Royal Heritage',
        description: 'Timeless pieces that celebrate the rich heritage of Banarasi craftsmanship',
        image: '/assets/images/collections/royal-heritage.jpg'
    },
    {
        id: 'contemporary-elegance',
        title: 'Contemporary Elegance',
        description: 'Modern interpretations of traditional Banarasi designs',
        image: '/assets/images/collections/contemporary-elegance.jpg'
    },
    {
        id: 'festival-special',
        title: 'Festival Special',
        description: 'Stunning sarees for celebrations and special occasions',
        image: '/assets/images/collections/festival-special.jpg'
    }
]

const features = [
    {
        id: 'handcrafted',
        title: 'Handcrafted Excellence',
        description: 'Each piece is meticulously crafted by skilled artisans',
        icon: '/assets/images/icons/handcrafted.svg'
    },
    {
        id: 'custom',
        title: 'Custom Orders',
        description: 'Create your own unique design with our expert weavers',
        icon: '/assets/images/icons/custom.svg'
    },
    {
        id: 'packaging',
        title: 'Premium Packaging',
        description: 'Delivered in elegant packaging worthy of the art within',
        icon: '/assets/images/icons/packaging.svg'
    }
]