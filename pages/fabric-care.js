import Layout from '../components/Layout';
import SEO from '../components/SEO';

const FabricCare = () => {
  return (
    <Layout
      title="Fabric Care Guide | Preserving Ayurvedic Properties | 11Sari"
      description="Learn how to properly care for your ayurvedic sarees and suits to maintain their healing properties and extend their life."
    >
      <SEO
        title="Fabric Care Guide | Preserving Ayurvedic Properties | 11Sari"
        description="Learn how to properly care for your ayurvedic sarees and suits to maintain their healing properties and extend their life."
        canonical="https://11sari.com/fabric-care"
      />

      <div className="fabric-care-page">
        <div className="care-hero">
          <div className="care-hero-content">
            <h1 className="page-title">Fabric Care Guide</h1>
            <p className="page-subtitle">Preserving the Beauty and Healing Properties of Your Garments</p>
          </div>
        </div>

        <div className="care-intro">
          <div className="container">
            <div className="intro-content">
              <p>
                At 11Sari, our garments are crafted with traditional techniques and natural dyes that not only
                look beautiful but also offer various Ayurvedic benefits. Proper care ensures these healing
                properties remain effective while extending the life of your precious sarees and suits.
              </p>
              <p>
                Follow our expert care guide to maintain the integrity of your garments and continue to
                enjoy their therapeutic qualities for years to come.
              </p>
            </div>
          </div>
        </div>

        <div className="care-sections">
          <div className="container">
            <section className="care-section">
              <div className="care-icon">
                <i className="fas fa-tint"></i>
              </div>
              <div className="care-content">
                <h2>Washing Instructions</h2>
                <div className="care-details">
                  <div className="care-text">
                    <h3>Naturally Dyed Sarees</h3>
                    <ul>
                      <li>Always hand wash in cold water using mild, natural detergent</li>
                      <li>Avoid soaking for extended periods to prevent color bleeding</li>
                      <li>Gently swish the garment in soapy water without harsh rubbing</li>
                      <li>Rinse thoroughly in clean water until soap residue is gone</li>
                      <li>Add a tablespoon of natural vinegar to the final rinse to preserve colors</li>
                    </ul>

                    <h3>Silk Garments</h3>
                    <ul>
                      <li>Dry clean is recommended for heavily embellished silk sarees</li>
                      <li>For plain silk, hand wash using pH-neutral soap specifically for silk</li>
                      <li>Never wring or twist silk; press gently between towels to remove excess water</li>
                      <li>Avoid mixing with other garments during washing</li>
                    </ul>

                    <h3>Cotton and Linen</h3>
                    <ul>
                      <li>Hand wash or use gentle machine cycle with cold water</li>
                      <li>Use mild detergent free of brighteners and bleach</li>
                      <li>Wash separately from other clothes, especially during first few washes</li>
                    </ul>
                  </div>
                  <div className="care-image">
                    <img src="/assets/images/care/washing.jpg" alt="Proper washing technique for ayurvedic fabrics" />
                  </div>
                </div>
              </div>
            </section>

            <section className="care-section">
              <div className="care-icon">
                <i className="fas fa-sun"></i>
              </div>
              <div className="care-content">
                <h2>Drying Methods</h2>
                <div className="care-details">
                  <div className="care-text">
                    <p>
                      Proper drying is crucial to maintain the Ayurvedic properties of naturally dyed fabrics.
                      The drying process can actually enhance certain therapeutic qualities when done correctly.
                    </p>
                    <ul>
                      <li>Dry in shade to prevent color fading and preserve natural healing properties</li>
                      <li>Lay flat on a clean white sheet to maintain shape and prevent stretching</li>
                      <li>For silk sarees, roll in a clean cotton towel first to remove excess moisture</li>
                      <li>Brief periodic exposure to early morning sunlight (before 8 AM) can enhance the antimicrobial properties</li>
                      <li>Avoid hanging wet sarees by the pallus as this can stretch the fabric</li>
                      <li>Ensure complete drying before storing to prevent mildew growth</li>
                    </ul>
                  </div>
                  <div className="care-image">
                    <img src="/assets/images/care/drying.jpg" alt="Proper drying methods for natural fabrics" />
                  </div>
                </div>
              </div>
            </section>

            <section className="care-section">
              <div className="care-icon">
                <i className="fas fa-archive"></i>
              </div>
              <div className="care-content">
                <h2>Storage Recommendations</h2>
                <div className="care-details">
                  <div className="care-text">
                    <p>
                      Proper storage extends the life of your garments and maintains their Ayurvedic benefits.
                    </p>
                    <ul>
                      <li>Store in clean, dry cotton or muslin cloth to allow the fabric to breathe</li>
                      <li>Add natural moth repellents like neem leaves, cloves, or lavender sachets</li>
                      <li>Fold sarees with acid-free tissue paper to prevent creasing</li>
                      <li>Rotate the folds every 3-4 months to avoid permanent crease lines</li>
                      <li>Store in a cool, dry place away from direct sunlight</li>
                      <li>Air your garments periodically to maintain freshness and therapeutic properties</li>
                    </ul>
                  </div>
                  <div className="care-image">
                    <img src="/assets/images/care/storage.jpg" alt="Proper storage for ayurvedic sarees" />
                  </div>
                </div>
              </div>
            </section>

            <section className="care-section">
              <div className="care-icon">
                <i className="fas fa-magic"></i>
              </div>
              <div className="care-content">
                <h2>Refreshing Ayurvedic Properties</h2>
                <div className="care-details">
                  <div className="care-text">
                    <p>
                      Over time, the Ayurvedic properties of natural dyes may diminish. Here's how to refresh them:
                    </p>
                    <ul>
                      <li>Expose to fresh air and gentle morning sunlight periodically</li>
                      <li>For turmeric-dyed fabrics: add a pinch of turmeric to the final rinse water</li>
                      <li>For indigo-dyed garments: a few drops of essential oil of blue tansy on a damp cloth can refresh cooling properties</li>
                      <li>For madder-root dyed items: a diluted rosehip tea rinse can enhance the detoxifying properties</li>
                      <li>Steam your saree over infusions of the original dyeing herbs for 5-10 minutes (keep a distance to avoid color transfer)</li>
                    </ul>
                  </div>
                  <div className="care-image">
                    <img src="/assets/images/care/refreshing.jpg" alt="Refreshing ayurvedic properties" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="care-faq">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">Get answers to common questions about caring for your precious Ayurvedic garments</p>

            <div className="faq-grid">
              <div className="faq-item">
                <div className="faq-question-container">
                  <h3 className="faq-question">
                    <i className="fas fa-plus-circle question-icon"></i>
                    Can I machine wash my Ayurvedic saree?
                  </h3>
                </div>
                <div className="faq-answer">
                  <p>
                    We strongly recommend hand washing for all naturally dyed garments to preserve their
                    Ayurvedic properties. Machine washing can be harsh on natural dyes and may strip away
                    the beneficial compounds.
                  </p>
                  <div className="answer-tip">
                    <i className="fas fa-lightbulb tip-icon"></i>
                    <p><strong>Pro Tip:</strong> If you must use a machine, use the gentlest cycle available with cold water and a natural detergent, and place the garment in a mesh laundry bag.</p>
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question-container">
                  <h3 className="faq-question">
                    <i className="fas fa-plus-circle question-icon"></i>
                    Will the natural dyes fade over time?
                  </h3>
                </div>
                <div className="faq-answer">
                  <p>
                    Some gradual fading is natural and expected with plant-based dyes. This subtle evolution
                    of color is part of the beauty of natural dyes. Following our care instructions will minimize
                    fading while maintaining the therapeutic properties.
                  </p>
                  <div className="answer-tip">
                    <i className="fas fa-lightbulb tip-icon"></i>
                    <p><strong>Pro Tip:</strong> Periodically refresh the color by adding a small amount of the natural dye to your rinse water - a pinch of turmeric for yellow dyes, or a few drops of blueberry juice for indigo dyes.</p>
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question-container">
                  <h3 className="faq-question">
                    <i className="fas fa-plus-circle question-icon"></i>
                    How often should I air my stored sarees?
                  </h3>
                </div>
                <div className="faq-answer">
                  <p>
                    Ideally, air your stored sarees once every 2-3 months. This prevents mustiness and allows
                    the natural energetic properties of the fabrics to remain active. Brief exposure to fresh air
                    revitalizes both the fabric and its Ayurvedic benefits.
                  </p>
                  <div className="answer-tip">
                    <i className="fas fa-lightbulb tip-icon"></i>
                    <p><strong>Pro Tip:</strong> Try to air your sarees during the morning hours, preferably in dappled sunlight, to enhance their natural healing properties.</p>
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question-container">
                  <h3 className="faq-question">
                    <i className="fas fa-plus-circle question-icon"></i>
                    Can I iron my naturally dyed garments?
                  </h3>
                </div>
                <div className="faq-answer">
                  <p>
                    Yes, but with care. Iron on a low to medium setting and always iron inside out. It&apos;s best to
                    iron when the fabric is slightly damp. For silk sarees, use a pressing cloth between the iron and the fabric.
                  </p>
                  <div className="answer-tip">
                    <i className="fas fa-lightbulb tip-icon"></i>
                    <p><strong>Pro Tip:</strong> Steam ironing is particularly beneficial for naturally dyed fabrics as it helps to reactivate the therapeutic properties while removing wrinkles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="care-contact">
          <div className="container">
            <div className="contact-content">
              <h2>Need Personalized Care Advice?</h2>
              <p>Our fabric experts are available to help with specific care questions about your purchases.</p>
              <div className="contact-buttons">
                <a href="mailto:care@11sari.com" className="btn btn-outline">
                  <i className="fas fa-envelope"></i> Email Us
                </a>
                <a href="tel:+919876543210" className="btn btn-gold">
                  <i className="fas fa-phone"></i> Call: +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fabric-care-page {
          background: #FFFAF0;
        }
        
        .care-hero {
          height: 40vh;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/care/care-hero.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }
        
        .care-hero-content {
          max-width: 800px;
          padding: 2rem;
        }
        
        .page-title {
          font-family: var(--font-display);
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .page-subtitle {
          font-size: 1.3rem;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .care-intro {
          padding: 3rem 0;
          text-align: center;
        }
        
        .intro-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .intro-content p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        .care-sections {
          padding: 2rem 0 5rem;
        }
        
        .care-section {
          display: flex;
          margin-bottom: 4rem;
        }
        
        .care-icon {
          font-size: 2rem;
          color: var(--primary-color);
          margin-right: 2rem;
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: rgba(183, 28, 28, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .care-content {
          flex: 1;
        }
        
        .care-content h2 {
          font-family: var(--font-display);
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          border-bottom: 2px solid var(--secondary-color);
          padding-bottom: 0.5rem;
          display: inline-block;
        }
        
        .care-details {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 2rem;
          align-items: center;
        }
        
        .care-text h3 {
          font-weight: 600;
          margin: 1.5rem 0 0.5rem;
          color: var(--primary-color);
        }
        
        .care-text p {
          margin-bottom: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        .care-text ul {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .care-text li {
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        .care-image img {
          width: 100%;
          border-radius: 0.5rem;
          box-shadow: var(--shadow-md);
        }
        
        .section-title {
          text-align: center;
          font-family: var(--font-display);
          font-size: 2.2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        
        .faq-subtitle {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        
        .faq-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .faq-item {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .faq-question-container {
          padding: 1.5rem;
          cursor: pointer;
          border-left: 4px solid var(--gold);
          transition: background 0.3s ease;
        }
        
        .faq-question-container:hover {
          background: rgba(255, 193, 7, 0.05);
        }
        
        .faq-question {
          font-family: var(--font-display);
          margin: 0;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.2rem;
        }
        
        .question-icon {
          color: var(--gold);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        
        .faq-item.active .question-icon {
          transform: rotate(45deg);
        }
        
        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
          display: none;
        }
        
        .faq-item.active .faq-answer {
          display: block;
          animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .answer-tip {
          background: #FFF8E1;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        
        .tip-icon {
          color: var(--gold);
          font-size: 1.2rem;
          margin-top: 0.2rem;
        }
        
        .answer-tip p {
          margin: 0;
          font-size: 0.95rem;
        }
        
        .care-contact {
          padding: 5rem 0;
          background: linear-gradient(rgba(183, 28, 28, 0.9), rgba(183, 28, 28, 0.9)), url('/assets/images/care/contact-bg.jpg');
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
        }
        
        .contact-content {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .contact-content h2 {
          font-family: var(--font-display);
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }
        
        .contact-content p {
          margin-bottom: 2rem;
          opacity: 0.9;
          font-size: 1.1rem;
        }
        
        .contact-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.8rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 0.25rem;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }
        
        .btn-outline {
          border: 2px solid white;
          color: white;
          background: transparent;
        }
        
        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }
        
        .btn-gold {
          background: var(--gold);
          color: white;
          border: 2px solid var(--gold);
        }
        
        .btn-gold:hover {
          background: transparent;
          color: var(--gold);
          transform: translateY(-3px);
        }
        
        @media (max-width: 1024px) {
          .care-details {
            grid-template-columns: 1fr;
          }
          
          .care-image {
            order: -1;
          }
          
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .care-section {
            flex-direction: column;
          }
          
          .care-icon {
            margin-bottom: 1rem;
          }
          
          .page-title {
            font-size: 2.5rem;
          }
          
          .contact-buttons {
            flex-direction: column;
          }
        }
        
        .care-faq {
          padding: 5rem 0;
          background: linear-gradient(135deg, #FFF8E1, #FFFDE7);
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // FAQ Accordion functionality
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
              const questionContainer = item.querySelector('.faq-question-container');
              
              questionContainer.addEventListener('click', () => {
                // Check if current item is already active
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                  faqItem.classList.remove('active');
                });
                
                // If clicked item wasn't active before, make it active
                if (!isActive) {
                  item.classList.add('active');
                }
              });
            });
            
            // Auto-open first FAQ item
            if (faqItems.length > 0) {
              faqItems[0].classList.add('active');
            }
          });
        `
      }} />
    </Layout>
  );
};

export default FabricCare; 