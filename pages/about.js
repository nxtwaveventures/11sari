import Layout from '@/components/Layout'
import Head from 'next/head';
import Image from 'next/image';

export default function About() {
    const seo = {
        title: 'About Us',
        description: 'Learn about 11Sari\'s journey in preserving India\'s rich textile heritage. We work directly with master weavers in Varanasi to bring authentic handcrafted silk sarees to you.',
        keywords: ['about 11sari', 'indian textile heritage', 'varanasi weavers', 'handloom sarees', 'banarasi silk history', 'ethical fashion'],
        ogImage: '/assets/images/about/weaver.jpg'
    }

    return (
        <Layout seo={seo}>
            <div className="about-page">
                <Head>
                    <title>About Us - 11Sari</title>
                    <meta name="description" content="Learn about 11Sari&apos;s journey, our commitment to preserving traditional craftsmanship, and our vision for the future of Indian fashion." />
                </Head>

                <div className="page-header">
                    <div className="container">
                        <h1 className="gjs-heading">About <span className="gold-accent">Us</span></h1>
                        <div className="text-main-content highlighted-text">
                            <p>Discover the story behind 11Sari and our commitment to preserving India&apos;s rich textile heritage</p>
                        </div>
                    </div>
                </div>

                <main className="about-content">
                    <section className="about-hero">
                        <div className="container">
                            <h1>About 11Sari</h1>
                            <p>Discover our story of preserving heritage through fashion.</p>
                        </div>
                    </section>

                    <section className="about-section">
                        <div className="container">
                            <div className="about-grid">
                                <div className="about-text">
                                    <h2>Our Journey</h2>
                                    <p>At 11Sari, we&apos;re more than just a saree retailer. We&apos;re custodians of an age-old tradition, working directly with master weavers in Varanasi to bring you authentic, handcrafted silk sarees that tell stories of our rich cultural heritage.</p>
                                    <p>Founded with a vision to bridge the gap between artisans and admirers, we ensure that every saree in our collection meets the highest standards of craftsmanship while providing fair compensation to our skilled artisans.</p>
                                </div>
                                <div className="about-image">
                                    <Image
                                        src="/assets/images/about/weaver.jpg"
                                        alt="Master Weaver at Work"
                                        width={800}
                                        height={500}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="our-story">
                        <div className="container">
                            <h2>Our Story</h2>
                            <p>At 11Sari, we&apos;re more than just a fashion brand - we&apos;re custodians of tradition. Our journey began with a vision to bridge the gap between timeless craftsmanship and contemporary fashion sensibilities.</p>
                            <div className="story-image">
                                <Image
                                    src="/assets/images/about/our-story.jpg"
                                    alt="11Sari workshop"
                                    width={800}
                                    height={500}
                                    priority
                                />
                            </div>
                        </div>
                    </section>

                    <section className="values-section">
                        <div className="container">
                            <h2>Our Values</h2>
                            <div className="values-grid">
                                <div className="value-card">
                                    <i className="fas fa-handshake"></i>
                                    <h3>Authenticity</h3>
                                    <p>We guarantee the authenticity of every saree, working directly with verified artisans.</p>
                                </div>
                                <div className="value-card">
                                    <i className="fas fa-heart"></i>
                                    <h3>Artisan Support</h3>
                                    <p>We ensure fair wages and sustainable livelihoods for our skilled craftsmen.</p>
                                </div>
                                <div className="value-card">
                                    <i className="fas fa-award"></i>
                                    <h3>Quality</h3>
                                    <p>Each saree undergoes rigorous quality checks to meet our high standards.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}