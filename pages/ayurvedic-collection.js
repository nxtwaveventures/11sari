import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';
import AyurvedicProperties from '@/components/AyurvedicProperties';
import NewsletterSignup from '@/components/NewsletterSignup';

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

                <div className="ayurvedic-benefits-tabs">
                  <div className="container">
                    <h2 className="section-title">Ayurvedic Benefits of Our Collection</h2>
                    <p className="section-subtitle">Discover how our naturally dyed fabrics can enhance your well-being</p>

                    <div className="tabs-container">
                      <div className="tabs-navigation" id="ayurvedicTabs">
                        <button className="tab-button active" data-tab="turmeric">Turmeric</button>
                        <button className="tab-button" data-tab="indigo">Indigo</button>
                        <button className="tab-button" data-tab="neem">Neem</button>
                        <button className="tab-button" data-tab="sandalwood">Sandalwood</button>
                        <button className="tab-button" data-tab="madder">Madder Root</button>
                      </div>

                      <div className="tabs-content">
                        <div id="turmeric" className="tab-content active">
                          <div className="tab-header">
                            <div className="tab-icon" style={{ backgroundColor: '#FFC107' }}>
                              <i className="fas fa-sun"></i>
                            </div>
                            <h3>Turmeric Dyed Fabrics</h3>
                          </div>
                          <div className="tab-body">
                            <p>Turmeric has been revered in Ayurveda for over 4,000 years for its powerful anti-inflammatory and antioxidant properties. Our turmeric-dyed sarees carry these healing properties and may help:</p>
                            <ul className="benefits-list">
                              <li><i className="fas fa-check-circle"></i> Reduce skin inflammation and irritation</li>
                              <li><i className="fas fa-check-circle"></i> Promote a healthy, radiant complexion</li>
                              <li><i className="fas fa-check-circle"></i> Support the body&apos;s natural healing processes</li>
                              <li><i className="fas fa-check-circle"></i> Balance the Pitta dosha with its warming properties</li>
                            </ul>
                            <div className="ayurvedic-quote">
                              "The vibrant yellow of turmeric-dyed fabric represents the sun's energy, bringing warmth and vitality to the wearer."
                            </div>
                          </div>
                        </div>

                        <div id="indigo" className="tab-content">
                          <div className="tab-header">
                            <div className="tab-icon" style={{ backgroundColor: '#3F51B5' }}>
                              <i className="fas fa-moon"></i>
                            </div>
                            <h3>Indigo Dyed Fabrics</h3>
                          </div>
                          <div className="tab-body">
                            <p>Indigo has been used for thousands of years both as a dye and for its therapeutic properties. In Ayurveda, indigo is known to:</p>
                            <ul className="benefits-list">
                              <li><i className="fas fa-check-circle"></i> Cool and calm the mind and body</li>
                              <li><i className="fas fa-check-circle"></i> Reduce excess heat in the system (Pitta pacifying)</li>
                              <li><i className="fas fa-check-circle"></i> Promote skin healing and reduce inflammation</li>
                              <li><i className="fas fa-check-circle"></i> Support respiratory health when worn close to the chest</li>
                            </ul>
                            <div className="ayurvedic-quote">
                              "The deep blue of indigo represents the cooling moonlight, bringing tranquility and peace to the wearer's spirit."
                            </div>
                          </div>
                        </div>

                        <div id="neem" className="tab-content">
                          <div className="tab-header">
                            <div className="tab-icon" style={{ backgroundColor: '#8BC34A' }}>
                              <i className="fas fa-leaf"></i>
                            </div>
                            <h3>Neem Infused Fabrics</h3>
                          </div>
                          <div className="tab-body">
                            <p>Neem has been called the "village pharmacy" in Ayurvedic tradition for its incredible medicinal properties. Our neem-infused fabrics offer:</p>
                            <ul className="benefits-list">
                              <li><i className="fas fa-check-circle"></i> Natural antibacterial and antifungal protection</li>
                              <li><i className="fas fa-check-circle"></i> Relief from skin conditions and irritation</li>
                              <li><i className="fas fa-check-circle"></i> Protection against insects and environmental irritants</li>
                              <li><i className="fas fa-check-circle"></i> Balancing effect on all three doshas</li>
                            </ul>
                            <div className="ayurvedic-quote">
                              "The subtle green essence of neem brings the purifying and protecting energies of nature to the fabric and its wearer."
                            </div>
                          </div>
                        </div>

                        <div id="sandalwood" className="tab-content">
                          <div className="tab-header">
                            <div className="tab-icon" style={{ backgroundColor: '#D7CCC8' }}>
                              <i className="fas fa-tree"></i>
                            </div>
                            <h3>Sandalwood Dyed Fabrics</h3>
                          </div>
                          <div className="tab-body">
                            <p>Sandalwood has been used in Ayurvedic rituals and treatments for millennia. Our sandalwood-dyed fabrics harness its beneficial properties:</p>
                            <ul className="benefits-list">
                              <li><i className="fas fa-check-circle"></i> Cool and calm the mind and emotions</li>
                              <li><i className="fas fa-check-circle"></i> Provide a subtle, grounding fragrance</li>
                              <li><i className="fas fa-check-circle"></i> Support healthy skin with its cooling and soothing properties</li>
                              <li><i className="fas fa-check-circle"></i> Balance excessive Pitta (heat) in the body</li>
                            </ul>
                            <div className="ayurvedic-quote">
                              "The earthy tones of sandalwood-dyed fabric carry the sacred, grounding energy of ancient forests, promoting spiritual clarity."
                            </div>
                          </div>
                        </div>

                        <div id="madder" className="tab-content">
                          <div className="tab-header">
                            <div className="tab-icon" style={{ backgroundColor: '#E57373' }}>
                              <i className="fas fa-heartbeat"></i>
                            </div>
                            <h3>Madder Root Dyed Fabrics</h3>
                          </div>
                          <div className="tab-body">
                            <p>Madder root has been used since ancient times for its rich red dye and therapeutic benefits. In Ayurveda, madder root is valued for:</p>
                            <ul className="benefits-list">
                              <li><i className="fas fa-check-circle"></i> Supporting healthy blood circulation</li>
                              <li><i className="fas fa-check-circle"></i> Promoting vitality and strength</li>
                              <li><i className="fas fa-check-circle"></i> Balancing Vata dosha with its warming properties</li>
                              <li><i className="fas fa-check-circle"></i> Providing grounding energy that supports the root chakra</li>
                            </ul>
                            <div className="ayurvedic-quote">
                              "The rich red tones of madder root connect the wearer to the earth's vital energy, promoting strength and stability."
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
          background: linear-gradient(to right, rgba(255, 243, 224, 0.8), rgba(255, 248, 225, 0.8));
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
          transition: transform 0.3s ease;
        }
        
        .wisdom-image img:hover {
          transform: scale(1.02);
        }
        
        .ayurvedic-benefits-tabs {
          padding: 80px 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
        }
        
        .section-title {
          text-align: center;
          color: #333;
          margin-bottom: 15px;
          font-size: 2.2rem;
        }
        
        .section-subtitle {
          text-align: center;
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 50px;
        }
        
        .tabs-container {
          max-width: 1000px;
          margin: 0 auto;
          box-shadow: 0 5px 30px rgba(0,0,0,0.08);
          background: white;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .tabs-navigation {
          display: flex;
          background: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
          position: relative;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        .tab-button {
          padding: 16px 24px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          color: #495057;
          white-space: nowrap;
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
        }
        
        .tab-button:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #9c27b0;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .tab-button:hover {
          color: #9c27b0;
          background-color: rgba(156, 39, 176, 0.05);
        }
        
        .tab-button.active {
          color: #9c27b0;
          font-weight: 600;
        }
        
        .tab-button.active:after {
          transform: scaleX(1);
        }
        
        .tabs-content {
          padding: 30px;
        }
        
        .tab-content {
          display: none;
          animation: fadeIn 0.5s ease-in-out;
        }
        
        .tab-content.active {
          display: block;
        }
        
        .tab-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .tab-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          color: white;
          font-size: 1.2rem;
        }
        
        .tab-header h3 {
          margin: 0;
          font-size: 1.5rem;
          color: #333;
        }
        
        .tab-body p {
          color: #555;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .benefits-list {
          padding-left: 0;
          list-style-type: none;
        }
        
        .benefits-list li {
          padding: 8px 0;
          display: flex;
          align-items: center;
        }
        
        .benefits-list li i {
          color: #9c27b0;
          margin-right: 10px;
          font-size: 16px;
        }
        
        .ayurvedic-quote {
          font-style: italic;
          border-left: 4px solid #9c27b0;
          padding: 15px 20px;
          background-color: #f9f4fb;
          margin-top: 20px;
          color: #555;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .tabs-container {
            border-radius: 8px;
          }
          
          .tabs-navigation {
            flex-wrap: nowrap;
            justify-content: flex-start;
          }
          
          .tab-button {
            padding: 12px 16px;
            font-size: 14px;
          }
          
          .tabs-content {
            padding: 20px 15px;
          }
          
          .tab-header h3 {
            font-size: 1.3rem;
          }
          
          .tab-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
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
          // Get all tab buttons and content
          const tabButtons = document.querySelectorAll('.tab-button');
          const tabContents = document.querySelectorAll('.tab-content');
          
          // Add click event to each tab button
          tabButtons.forEach(button => {
            button.addEventListener('click', function() {
              // Remove active class from all buttons and contents
              tabButtons.forEach(btn => btn.classList.remove('active'));
              tabContents.forEach(content => content.classList.remove('active'));
              
              // Add active class to clicked button
              this.classList.add('active');
              
              // Show corresponding content
              const tabId = this.getAttribute('data-tab');
              document.getElementById(tabId).classList.add('active');
            });
          });
        });
      ` }}></script>
    </Layout>
  );
};

export default AyurvedicCollection; 