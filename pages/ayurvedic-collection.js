import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';

const AyurvedicCollection = () => {
    // Sample Ayurvedic products
    const ayurvedicProducts = [
        {
            id: 'ayu001',
            name: 'Turmeric Dyed Banarasi Silk',
            price: 14999,
            image: '/assets/images/ayurvedic/turmeric-silk.jpg',
            benefits: ['Anti-inflammatory', 'Skin healing', 'Natural antiseptic'],
            colors: ['Gold', 'Yellow', 'Amber']
        },
        {
            id: 'ayu002',
            name: 'Indigo-Infused Cotton Saree',
            price: 8999,
            image: '/assets/images/ayurvedic/indigo-cotton.jpg',
            benefits: ['Cooling properties', 'Aids meditation', 'Calms mind'],
            colors: ['Deep Blue', 'Navy', 'Midnight']
        },
        {
            id: 'ayu003',
            name: 'Madder Root Heritage Silk',
            price: 16999,
            image: '/assets/images/ayurvedic/madder-silk.jpg',
            benefits: ['Blood purifying', 'Grounding energy', 'Detoxifying'],
            colors: ['Terracotta', 'Red Ochre', 'Rust']
        },
        {
            id: 'ayu004',
            name: 'Neem-treated Linen Blend',
            price: 7999,
            image: '/assets/images/ayurvedic/neem-linen.jpg',
            benefits: ['Antibacterial', 'Skin soothing', 'Insect repellent'],
            colors: ['Sage Green', 'Natural', 'Ivory']
        },
        {
            id: 'ayu005',
            name: 'Sandalwood Infused Silk',
            price: 19999,
            image: '/assets/images/ayurvedic/sandalwood-silk.jpg',
            benefits: ['Stress relief', 'Subtle fragrance', 'Cooling for skin'],
            colors: ['Cream', 'Beige', 'Sandalwood']
        },
        {
            id: 'ayu006',
            name: 'Sacred Lotus Hand-Painted Saree',
            price: 22999,
            image: '/assets/images/ayurvedic/lotus-painted.jpg',
            benefits: ['Enhances spiritual energy', 'Balances chakras', 'Promotes peace'],
            colors: ['Rose Pink', 'White', 'Blush']
        }
    ];

    return (
        <Layout
            title="Ayurvedic Collection | Natural Healing Fabrics | 11Sari"
            description="Discover our collection of traditional sarees with ayurvedic benefits. Handcrafted using natural dyes and processes that offer healing properties."
        >
            <SEO
                title="Ayurvedic Collection | Natural Healing Fabrics | 11Sari"
                description="Discover our collection of traditional sarees with ayurvedic benefits. Handcrafted using natural dyes and processes that offer healing properties."
                canonical="https://11sari.com/ayurvedic-collection"
            />

            <div className="ayurvedic-collection-page">
                {/* Hero Section */}
                <section className="ayurvedic-hero">
                    <div className="ayurvedic-hero-content">
                        <h1 className="page-title">Ayurvedic Collection</h1>
                        <p className="page-subtitle">Handcrafted with natural dyes and healing properties</p>
                    </div>
                </section>

                {/* Introduction */}
                <section className="ayurvedic-intro">
                    <div className="container">
                        <div className="intro-grid">
                            <div className="intro-content">
                                <h2 className="section-title">Ancient Wisdom, Modern Elegance</h2>
                                <p>
                                    Our Ayurvedic collection combines the ancient healing wisdom of India with exquisite craftsmanship.
                                    Each piece is thoughtfully created using traditional techniques and natural dyes derived from plants,
                                    roots, and minerals that have been revered for centuries for their therapeutic properties.
                                </p>
                                <p>
                                    When you wear these sarees, you don't just adorn yourself with beauty - you embrace wellness.
                                    The natural dyes and fabrics interact harmoniously with your body's energy, promoting balance
                                    and wellbeing according to Ayurvedic principles.
                                </p>
                                <div className="benefits-list">
                                    <div className="benefit-item">
                                        <div className="benefit-icon">
                                            <i className="fas fa-leaf"></i>
                                        </div>
                                        <div className="benefit-content">
                                            <h3>All-Natural Dyes</h3>
                                            <p>Derived from plants, roots, flowers, and minerals with healing properties</p>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">
                                            <i className="fas fa-tint"></i>
                                        </div>
                                        <div className="benefit-content">
                                            <h3>Chemical-Free Process</h3>
                                            <p>No harsh chemicals, only traditional mordants like alum and iron</p>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">
                                            <i className="fas fa-hand-holding-heart"></i>
                                        </div>
                                        <div className="benefit-content">
                                            <h3>Artisan Crafted</h3>
                                            <p>Handmade by skilled artisans preserving ancient techniques</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-image">
                                <img src="/assets/images/ayurvedic/ayurvedic-process.jpg" alt="Ayurvedic Dyeing Process" />
                                <div className="image-caption">Traditional natural dyeing process in Varanasi</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="section-divider">
                    <div className="divider-line"></div>
                    <div className="divider-symbol"><i className="fas fa-om"></i></div>
                    <div className="divider-line"></div>
                </div>

                {/* Products Section */}
                <section className="ayurvedic-products">
                    <div className="container">
                        <h2 className="section-title centered">Our Healing Collection</h2>
                        <p className="section-subtitle">Each piece tells a story of tradition, healing, and timeless beauty</p>

                        <div className="products-grid">
                            {ayurvedicProducts.map(product => (
                                <div className="product-card" key={product.id}>
                                    <div className="product-image">
                                        <img src={product.image} alt={product.name} />
                                        <div className="product-badge">Ayurvedic</div>
                                    </div>
                                    <div className="product-details">
                                        <h3 className="product-name">{product.name}</h3>
                                        <p className="product-price">₹{product.price.toLocaleString()}</p>

                                        <div className="product-benefits">
                                            <h4>Healing Benefits:</h4>
                                            <ul>
                                                {product.benefits.map((benefit, index) => (
                                                    <li key={index}><i className="fas fa-check"></i> {benefit}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="product-colors">
                                            <h4>Natural Colors:</h4>
                                            <div className="color-dots">
                                                {product.colors.map((color, index) => (
                                                    <div className="color-dot" key={index} title={color}></div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="product-actions">
                                            <Link href={`/product/${product.id}`}>
                                                <a className="btn btn-outline">View Details</a>
                                            </Link>
                                            <button className="btn btn-primary">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Traditional Wisdom Section */}
                <section className="traditional-wisdom">
                    <div className="container">
                        <div className="wisdom-grid">
                            <div className="wisdom-image">
                                <img src="/assets/images/ayurvedic/ayurvedic-herbs.jpg" alt="Ayurvedic Herbs and Dyes" />
                            </div>
                            <div className="wisdom-content">
                                <h2 className="section-title">Traditional Wisdom in Every Thread</h2>
                                <p>
                                    According to Ayurveda, what touches your skin influences your overall wellbeing. Our sarees are more than
                                    just garments - they are healing embraces that nurture your body and spirit.
                                </p>

                                <div className="wisdom-tabs">
                                    <div className="tab active" data-tab="turmeric">
                                        <div className="tab-icon">
                                            <img src="/assets/images/ayurvedic/turmeric-icon.svg" alt="Turmeric" />
                                        </div>
                                        <h3>Turmeric</h3>
                                    </div>
                                    <div className="tab" data-tab="indigo">
                                        <div className="tab-icon">
                                            <img src="/assets/images/ayurvedic/indigo-icon.svg" alt="Indigo" />
                                        </div>
                                        <h3>Indigo</h3>
                                    </div>
                                    <div className="tab" data-tab="madder">
                                        <div className="tab-icon">
                                            <img src="/assets/images/ayurvedic/madder-icon.svg" alt="Madder Root" />
                                        </div>
                                        <h3>Madder Root</h3>
                                    </div>
                                </div>

                                <div className="tab-content active" id="turmeric-content">
                                    <h3>Turmeric (Haldi)</h3>
                                    <p>
                                        Used for centuries in Ayurvedic medicine, turmeric is renowned for its anti-inflammatory and
                                        antiseptic properties. Sarees dyed with turmeric can help soothe skin irritations and
                                        provide natural protection.
                                    </p>
                                    <p>
                                        The vibrant golden hue also symbolizes prosperity and purity in Indian culture.
                                    </p>
                                </div>

                                <div className="tab-content" id="indigo-content">
                                    <h3>Indigo (Neel)</h3>
                                    <p>
                                        Indigo has cooling properties according to Ayurveda and is particularly beneficial in hot
                                        climates. It's said to calm the mind and aid in meditation and spiritual practices.
                                    </p>
                                    <p>
                                        The deep blue color is also associated with the throat chakra, enhancing self-expression and truth.
                                    </p>
                                </div>

                                <div className="tab-content" id="madder-content">
                                    <h3>Madder Root (Manjistha)</h3>
                                    <p>
                                        Madder root is considered a powerful blood purifier in Ayurveda. Fabrics dyed with
                                        madder root are believed to have detoxifying effects and can help ground energy.
                                    </p>
                                    <p>
                                        Its earthy red hues connect the wearer to the earth element, providing stability and strength.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Care Instructions */}
                <section className="care-instructions">
                    <div className="container">
                        <h2 className="section-title centered">Caring for Your Ayurvedic Garments</h2>
                        <p className="section-subtitle">Preserve the healing properties and natural beauty with these simple steps</p>

                        <div className="care-grid">
                            <div className="care-item">
                                <div className="care-icon">
                                    <i className="fas fa-tshirt"></i>
                                </div>
                                <h3>Gentle Hand Wash</h3>
                                <p>Hand wash in cold water with mild, natural detergent to preserve the dyes and their beneficial properties</p>
                            </div>

                            <div className="care-item">
                                <div className="care-icon">
                                    <i className="fas fa-sun"></i>
                                </div>
                                <h3>Natural Drying</h3>
                                <p>Dry in shade to prevent color fading; occasional sun exposure for brief periods can enhance the fabric's energy</p>
                            </div>

                            <div className="care-item">
                                <div className="care-icon">
                                    <i className="fas fa-wind"></i>
                                </div>
                                <h3>Air Regularly</h3>
                                <p>Expose to fresh air regularly to maintain the natural properties and subtle fragrances of the dyes</p>
                            </div>

                            <div className="care-item">
                                <div className="care-icon">
                                    <i className="fas fa-box"></i>
                                </div>
                                <h3>Proper Storage</h3>
                                <p>Store with natural moth repellents like neem leaves or lavender to protect the fabric sustainably</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="ayurvedic-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Experience the Healing Embrace of Tradition</h2>
                            <p>Each garment is as unique as you are, with slight variations in color that reflect their natural origin.</p>
                            <Link href="/contact-us">
                                <a className="btn btn-gold">Contact for Custom Orders</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
        .ayurvedic-hero {
          height: 60vh;
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/images/ayurvedic/ayurvedic-hero.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }
        
        .ayurvedic-hero-content {
          max-width: 800px;
          padding: 2rem;
        }
        
        .page-title {
          font-family: var(--font-display);
          font-size: 3.5rem;
          margin-bottom: 1rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .page-subtitle {
          font-size: 1.5rem;
          opacity: 0.9;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .ayurvedic-intro {
          padding: 5rem 0;
          background: #FFFAF0;
        }
        
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        
        .section-title {
          font-family: var(--font-display);
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        
        .section-title.centered {
          text-align: center;
        }
        
        .section-subtitle {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        
        .intro-content p {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        .benefits-list {
          margin-top: 2rem;
        }
        
        .benefit-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        
        .benefit-icon {
          width: 50px;
          height: 50px;
          background: var(--success-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-right: 1.5rem;
          flex-shrink: 0;
        }
        
        .benefit-content h3 {
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        .benefit-content p {
          margin: 0;
          color: var(--text-secondary);
        }
        
        .intro-image {
          position: relative;
        }
        
        .intro-image img {
          width: 100%;
          border-radius: 0.5rem;
          box-shadow: var(--shadow-md);
        }
        
        .image-caption {
          margin-top: 0.5rem;
          font-style: italic;
          text-align: center;
          color: var(--text-secondary);
        }
        
        .ayurvedic-products {
          padding: 5rem 0;
          background: white;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .product-card {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        
        .product-image {
          position: relative;
          height: 300px;
        }
        
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .product-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--success-color);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .product-details {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .product-name {
          font-family: var(--font-display);
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        .product-price {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        
        .product-benefits {
          margin-bottom: 1rem;
        }
        
        .product-benefits h4, .product-colors h4 {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        
        .product-benefits ul {
          list-style: none;
          padding: 0;
        }
        
        .product-benefits li {
          margin-bottom: 0.3rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .product-benefits li i {
          color: var(--success-color);
          margin-right: 0.5rem;
        }
        
        .product-colors {
          margin-bottom: 1.5rem;
        }
        
        .color-dots {
          display: flex;
          gap: 0.5rem;
        }
        
        .color-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--secondary-color);
          opacity: 0.8;
        }
        
        .product-actions {
          margin-top: auto;
          display: flex;
          gap: 0.5rem;
        }
        
        .product-actions .btn {
          flex: 1;
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
        }
        
        .traditional-wisdom {
          padding: 5rem 0;
          background: linear-gradient(to right, rgba(255, 243, 224, 0.5), rgba(255, 248, 225, 0.5));
        }
        
        .wisdom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        
        .wisdom-image img {
          width: 100%;
          border-radius: 0.5rem;
          box-shadow: var(--shadow-md);
        }
        
        .wisdom-tabs {
          display: flex;
          gap: 1rem;
          margin: 2rem 0;
        }
        
        .tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          border-radius: 0.5rem;
          background: white;
          cursor: pointer;
          flex: 1;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .tab.active {
          border-color: var(--secondary-color);
        }
        
        .tab:hover {
          transform: translateY(-3px);
        }
        
        .tab-icon {
          width: 40px;
          height: 40px;
          margin-bottom: 0.5rem;
        }
        
        .tab-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        .tab h3 {
          font-size: 0.9rem;
          margin: 0;
          text-align: center;
        }
        
        .tab-content {
          display: none;
          padding: 1.5rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: var(--shadow-sm);
        }
        
        .tab-content.active {
          display: block;
        }
        
        .tab-content h3 {
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-family: var(--font-display);
        }
        
        .tab-content p {
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }
        
        .care-instructions {
          padding: 5rem 0;
          background: white;
        }
        
        .care-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .care-item {
          text-align: center;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .care-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        
        .care-icon {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
        
        .care-item h3 {
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        .care-item p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        .ayurvedic-cta {
          padding: 5rem 0;
          background: linear-gradient(rgba(183, 28, 28, 0.9), rgba(183, 28, 28, 0.9)), url('/assets/images/ayurvedic/cta-background.jpg');
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
        }
        
        .cta-content {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .cta-content h2 {
          font-family: var(--font-display);
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .cta-content p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        @media (max-width: 1024px) {
          .intro-grid, .wisdom-grid {
            grid-template-columns: 1fr;
          }
          
          .page-title {
            font-size: 3rem;
          }
        }
        
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .page-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .ayurvedic-hero {
            height: 50vh;
          }
        }
      `}</style>

            <script dangerouslySetInnerHTML={{
                __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
              tab.addEventListener('click', function() {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab content
                document.querySelectorAll('.tab-content').forEach(content => {
                  content.classList.remove('active');
                });
                
                // Show relevant tab content
                const tabName = this.getAttribute('data-tab');
                document.getElementById(tabName + '-content').classList.add('active');
              });
            });
          });
        `
            }} />
        </Layout>
    );
};

export default AyurvedicCollection; 