import Layout from '@/components/Layout'

export default function About() {
    const seo = {
        title: 'About Us',
        description: 'Learn about 11Sari\'s journey in preserving India\'s rich textile heritage. We work directly with master weavers in Varanasi to bring authentic handcrafted silk sarees to you.',
        keywords: ['about 11sari', 'indian textile heritage', 'varanasi weavers', 'handloom sarees', 'banarasi silk history', 'ethical fashion'],
        ogImage: '/assets/images/about/weaver.jpg'
    }

    return (
        <Layout seo={seo}>
            <div className="page-header">
                <div className="container">
                    <h1 className="gjs-heading">About <span className="gold-accent">Us</span></h1>
                    <div className="text-main-content highlighted-text">
                        <p>Discover the story behind 11Sari and our commitment to preserving India's rich textile heritage</p>
                    </div>
                </div>
            </div>

            <main className="about-content">
                <div className="container">
                    <section className="about-section">
                        <div className="about-grid">
                            <div className="about-text">
                                <h2>Our Journey</h2>
                                <p>At 11Sari, we're more than just a saree retailer. We're custodians of an age-old tradition, working directly with master weavers in Varanasi to bring you authentic, handcrafted silk sarees that tell stories of our rich cultural heritage.</p>
                                <p>Founded with a vision to bridge the gap between artisans and admirers, we ensure that every saree in our collection meets the highest standards of craftsmanship while providing fair compensation to our skilled artisans.</p>
                            </div>
                            <div className="about-image">
                                <img src="/assets/images/about/weaver.jpg" alt="Master Weaver at Work" />
                            </div>
                        </div>
                    </section>

                    <section className="values-section">
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
                    </section>
                </div>
            </main>
        </Layout>
    )
}