import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from './SEO';

export default function Layout({
    children,
    title = "11Sari - Authentic Banarasi Sarees | Premium Silk Sarees with Ayurvedic Benefits",
    description = "11Sari - Discover India's premium Banarasi sarees, handcrafted silk sarees, and designer suits. Authentic traditional wear with Ayurvedic benefits. Free shipping across India.",
    keywords = "saree, banarasi saree, silk saree, wedding saree, designer saree, handloom saree, traditional saree, indian saree, varanasi saree, sari, ayurvedic clothing, natural dyes, organic saree",
}) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showAyurvedaPopup, setShowAyurvedaPopup] = useState(false);

    useEffect(() => {
        // Check local storage for cart items
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }

        // Add scroll event listener
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Show Ayurveda popup after 15 seconds
        const popupTimer = setTimeout(() => {
            setShowAyurvedaPopup(true);
        }, 15000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(popupTimer);
        };
    }, []);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const closeAyurvedaPopup = () => {
        setShowAyurvedaPopup(false);
    };

    return (
        <>
            <SEO title={title} description={description} />

            <div className="site-wrapper">
                {/* Announcement Bar */}
                <div className="announcement-bar">
                    <div className="announcement-container">
                        <div className="announcement-slider">
                            <div className="announcement-slide">
                                <i className="fas fa-truck"></i> Free Shipping Pan India on Orders Above ₹2999
                            </div>
                            <div className="announcement-slide">
                                <i className="fas fa-leaf"></i> All Sarees Made with Natural Ayurvedic Dyes
                            </div>
                            <div className="announcement-slide">
                                <i className="fas fa-gift"></i> Complimentary Gift Wrapping Available
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
                    <div className="header-container">
                        <div className="logo">
                            <Link href="/">
                                <a className="logo-link">
                                    <span className="logo-text">11<span className="logo-highlight">Sari</span></span>
                                </a>
                            </Link>
                        </div>

                        <nav className="main-nav">
                            <ul>
                                <li><Link href="/about-us"><a className="nav-link">About Us</a></Link></li>
                                <li><Link href="/blogs"><a className="nav-link">Blogs</a></Link></li>
                                <li><Link href="/know-more"><a className="nav-link">Know More</a></Link></li>
                                <li><Link href="/contact-us"><a className="nav-link">Contact Us</a></Link></li>
                                <li>
                                    <div className="dropdown">
                                        <Link href="/saree-collection">
                                            <a className="nav-link dropdown-toggle">Collections <i className="fas fa-chevron-down"></i></a>
                                        </Link>
                                        <div className="dropdown-menu">
                                            <Link href="/saree-collection"><a className="dropdown-item">Sarees</a></Link>
                                            <Link href="/suit-collection"><a className="dropdown-item">Suits</a></Link>
                                            <Link href="/bridal-gift-box"><a className="dropdown-item">Bridal Gift Box</a></Link>
                                            <Link href="/ayurvedic-collection"><a className="dropdown-item">Ayurvedic Collection</a></Link>
                                        </div>
                                    </div>
                                </li>
                                <li><button onClick={toggleSearch} className="search-toggle nav-link"><i className="fas fa-search"></i></button></li>
                            </ul>
                        </nav>

                        <div className="header-actions">
                            <button className="header-action-btn" onClick={toggleCart}>
                                <i className="fas fa-shopping-bag"></i>
                                {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
                            </button>
                            <Link href="/account">
                                <a className="header-action-btn">
                                    <i className="fas fa-user"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Search Overlay */}
                <div className={`search-overlay ${isSearchOpen ? 'active' : ''}`}>
                    <div className="search-container">
                        <button className="close-search" onClick={toggleSearch}>
                            <i className="fas fa-times"></i>
                        </button>
                        <form className="search-form">
                            <div className="search-icon">
                                <i className="fas fa-search"></i>
                            </div>
                            <input
                                type="text"
                                placeholder="Search for sarees, suits, fabrics..."
                                className="search-input"
                            />
                            <button type="submit" className="search-submit">Search</button>
                        </form>
                        <div className="popular-searches">
                            <p className="popular-title">Popular Searches:</p>
                            <div className="popular-tags">
                                <Link href="/search?q=banarasi"><a className="popular-tag">Banarasi Silk</a></Link>
                                <Link href="/search?q=wedding"><a className="popular-tag">Wedding Sarees</a></Link>
                                <Link href="/search?q=ayurvedic"><a className="popular-tag">Ayurvedic Fabric</a></Link>
                                <Link href="/search?q=natural-dye"><a className="popular-tag">Natural Dyes</a></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <main>
                    {children}
                </main>

                {/* Ayurveda Benefits Popup */}
                {showAyurvedaPopup && (
                    <div className="ayurveda-popup">
                        <div className="ayurveda-popup-content">
                            <button className="close-popup" onClick={closeAyurvedaPopup}>
                                <i className="fas fa-times"></i>
                            </button>
                            <div className="ayurveda-popup-icon">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h3 className="ayurveda-popup-title">Discover Ayurvedic Benefits</h3>
                            <p className="ayurveda-popup-text">
                                Our sarees are crafted with natural dyes and fabrics that offer healing properties according to ancient Ayurvedic wisdom.
                            </p>
                            <Link href="/ayurvedic-collection">
                                <a className="btn btn-gold">Explore Ayurvedic Collection</a>
                            </Link>
                        </div>
                    </div>
                )}

                {/* Cart Sidebar */}
                <div className={`cart-sidebar ${isCartOpen ? 'active' : ''}`}>
                    <div className="cart-sidebar-header">
                        <h3>Your Shopping Bag</h3>
                        <button className="close-cart" onClick={toggleCart}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className="cart-items">
                        {cartItems.length === 0 ? (
                            <div className="empty-cart">
                                <div className="empty-cart-icon">
                                    <i className="fas fa-shopping-bag"></i>
                                </div>
                                <p>Your bag is empty</p>
                                <Link href="/saree-collection">
                                    <a className="btn btn-primary">Continue Shopping</a>
                                </Link>
                            </div>
                        ) : (
                            <>
                                {cartItems.map((item, index) => (
                                    <div className="cart-item" key={index}>
                                        <div className="cart-item-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="cart-item-details">
                                            <h4>{item.name}</h4>
                                            <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
                                            <div className="cart-item-quantity">
                                                <button className="quantity-btn">-</button>
                                                <span>{item.quantity}</span>
                                                <button className="quantity-btn">+</button>
                                            </div>
                                        </div>
                                        <button className="remove-item">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                ))}

                                <div className="cart-summary">
                                    <div className="summary-row">
                                        <span>Subtotal:</span>
                                        <span>₹{cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString()}</span>
                                    </div>
                                    <div className="summary-row">
                                        <span>Shipping:</span>
                                        <span>Calculated at checkout</span>
                                    </div>
                                </div>

                                <div className="cart-actions">
                                    <Link href="/checkout">
                                        <a className="btn btn-primary btn-block">Checkout</a>
                                    </Link>
                                    <button className="btn btn-outline btn-block" onClick={toggleCart}>
                                        Continue Shopping
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <footer className="footer">
                    <div className="decorative-pattern"></div>

                    <div className="footer-container">
                        <div className="footer-section">
                            <h3>Shop</h3>
                            <div className="footer-links">
                                <Link href="/saree-collection"><a>Saree Collection</a></Link>
                                <Link href="/suit-collection"><a>Suit Collection</a></Link>
                                <Link href="/bridal-gift-box"><a>Bridal Gift Box</a></Link>
                                <Link href="/ayurvedic-collection"><a>Ayurvedic Collection</a></Link>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3>About</h3>
                            <div className="footer-links">
                                <Link href="/about-us"><a>About Us</a></Link>
                                <Link href="/blogs"><a>Blogs</a></Link>
                                <Link href="/know-more"><a>Know More</a></Link>
                                <Link href="/fabric-care"><a>Fabric Care Guide</a></Link>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3>Customer Service</h3>
                            <div className="footer-links">
                                <Link href="/contact-us"><a>Contact Us</a></Link>
                                <Link href="/shipping-policy"><a>Shipping Policy</a></Link>
                                <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                                <Link href="/terms-of-service"><a>Terms of Service</a></Link>
                                <Link href="/faq"><a>FAQs</a></Link>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3>Connect With Us</h3>
                            <div className="social-links">
                                <a href="https://facebook.com/11sari" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://instagram.com/11sari" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://pinterest.com/11sari" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                                <a href="https://twitter.com/11sari" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                            <div className="newsletter">
                                <h4>Subscribe to our newsletter</h4>
                                <form className="newsletter-form">
                                    <input type="email" placeholder="Your email address" required />
                                    <button type="submit" className="btn btn-gold">Subscribe</button>
                                </form>
                            </div>
                            <div className="contact-info">
                                <p><i className="fas fa-envelope"></i> info@11sari.com</p>
                                <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
                            </div>
                        </div>
                    </div>

                    <div className="payment-methods">
                        <p>Secure Payment Methods</p>
                        <div className="payment-icons">
                            <i className="fab fa-cc-visa"></i>
                            <i className="fab fa-cc-mastercard"></i>
                            <i className="fab fa-cc-amex"></i>
                            <i className="fab fa-cc-paypal"></i>
                            <img src="/assets/images/upi-icon.png" alt="UPI" className="payment-upi" />
                        </div>
                    </div>

                    <div className="copyright">
                        <p>&copy; {new Date().getFullYear()} 11Sari. All rights reserved.</p>
                    </div>
                </footer>
            </div>

            <style jsx global>{`
        /* Additional Styles for Layout Component */
        .site-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        
        main {
          flex: 1;
        }
        
        .announcement-bar {
          background: var(--primary-color);
          color: white;
          padding: 0.5rem 0;
          font-size: 0.9rem;
          overflow: hidden;
        }
        
        .announcement-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .announcement-slider {
          display: flex;
          animation: slide 20s infinite linear;
        }
        
        .announcement-slide {
          white-space: nowrap;
          padding: 0 2rem;
        }
        
        .announcement-slide i {
          margin-right: 0.5rem;
          color: var(--secondary-color);
        }
        
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          
          100% {
            transform: translateX(-100%);
          }
        }
        
        .site-header.scrolled {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-100%);
          animation: slideDown 0.3s forwards;
        }
        
        @keyframes slideDown {
          to {
            transform: translateY(0);
          }
        }
        
        .header-actions {
          display: flex;
          gap: 1rem;
        }
        
        .header-action-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.2rem;
          cursor: pointer;
          position: relative;
          padding: 0.5rem;
          transition: color 0.2s ease;
        }
        
        .header-action-btn:hover {
          color: var(--primary-color);
        }
        
        .cart-count {
          position: absolute;
          top: -5px;
          right: -5px;
          background: var(--secondary-color);
          color: white;
          font-size: 0.7rem;
          font-weight: bold;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .dropdown {
          position: relative;
        }
        
        .dropdown-toggle i {
          font-size: 0.8rem;
          margin-left: 0.3rem;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          min-width: 200px;
          box-shadow: var(--shadow-md);
          border-radius: 0.25rem;
          padding: 0.5rem 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          z-index: 100;
        }
        
        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .dropdown-item {
          display: block;
          padding: 0.5rem 1rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .dropdown-item:hover {
          background: rgba(0, 0, 0, 0.05);
          color: var(--primary-color);
          padding-left: 1.5rem;
        }
        
        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .search-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        
        .search-container {
          width: 80%;
          max-width: 700px;
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          position: relative;
        }
        
        .close-search {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        
        .close-search:hover {
          color: var(--primary-color);
        }
        
        .search-form {
          display: flex;
          align-items: center;
          border-bottom: 2px solid var(--border-light);
          margin-bottom: 1.5rem;
        }
        
        .search-icon {
          color: var(--text-secondary);
          margin-right: 1rem;
        }
        
        .search-input {
          flex: 1;
          border: none;
          padding: 1rem 0;
          font-size: 1.2rem;
          outline: none;
        }
        
        .search-submit {
          background: var(--primary-color);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s ease;
        }
        
        .search-submit:hover {
          background: var(--primary-dark);
        }
        
        .popular-searches {
          margin-top: 1.5rem;
        }
        
        .popular-title {
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }
        
        .popular-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .popular-tag {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          background: #f5f5f5;
          border-radius: 2rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }
        
        .popular-tag:hover {
          background: var(--secondary-color);
          color: white;
        }
        
        .cart-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 400px;
          max-width: 100%;
          height: 100vh;
          background: white;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        
        .cart-sidebar.active {
          transform: translateX(0);
        }
        
        .cart-sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-light);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .cart-sidebar-header h3 {
          margin: 0;
          font-family: var(--font-display);
        }
        
        .close-cart {
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        
        .close-cart:hover {
          color: var(--primary-color);
        }
        
        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }
        
        .empty-cart {
          text-align: center;
          padding: 2rem 0;
        }
        
        .empty-cart-icon {
          font-size: 3rem;
          color: var(--text-secondary);
          opacity: 0.3;
          margin-bottom: 1rem;
        }
        
        .cart-item {
          display: flex;
          border-bottom: 1px solid var(--border-light);
          padding: 1rem 0;
        }
        
        .cart-item-image {
          width: 80px;
          height: 80px;
          margin-right: 1rem;
        }
        
        .cart-item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.25rem;
        }
        
        .cart-item-details {
          flex: 1;
        }
        
        .cart-item-details h4 {
          margin: 0 0 0.5rem;
          font-weight: 500;
        }
        
        .cart-item-price {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .cart-item-quantity {
          display: flex;
          align-items: center;
        }
        
        .quantity-btn {
          width: 24px;
          height: 24px;
          border: 1px solid var(--border-light);
          background: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
        }
        
        .cart-item-quantity span {
          margin: 0 0.5rem;
        }
        
        .remove-item {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s ease;
        }
        
        .remove-item:hover {
          color: var(--primary-color);
        }
        
        .cart-summary {
          margin-top: 2rem;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        
        .cart-actions {
          margin-top: 1.5rem;
        }
        
        .btn-block {
          display: block;
          width: 100%;
          margin-bottom: 0.5rem;
        }
        
        .ayurveda-popup {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 999;
          animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .ayurveda-popup-content {
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
          max-width: 350px;
          position: relative;
          border-top: 4px solid var(--success-color);
        }
        
        .close-popup {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          color: var(--text-secondary);
        }
        
        .ayurveda-popup-icon {
          width: 60px;
          height: 60px;
          background: var(--success-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin: 0 auto 1rem;
        }
        
        .ayurveda-popup-title {
          font-family: var(--font-display);
          text-align: center;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        .ayurveda-popup-text {
          text-align: center;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }
        
        .payment-methods {
          text-align: center;
          margin-top: 2rem;
        }
        
        .payment-methods p {
          color: #9e9e9e;
          margin-bottom: 0.5rem;
        }
        
        .payment-icons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          font-size: 2rem;
          color: rgba(255, 255, 255, 0.5);
        }
        
        .payment-upi {
          height: 32px;
        }
        
        .newsletter {
          margin: 1.5rem 0;
        }
        
        .newsletter h4 {
          color: #e0e0e0;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }
        
        .newsletter-form {
          display: flex;
        }
        
        .newsletter-form input {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          outline: none;
        }
        
        .newsletter-form button {
          padding: 0.5rem 1rem;
        }
        
        .contact-info {
          color: #e0e0e0;
          margin-top: 1rem;
        }
        
        .contact-info p {
          margin-bottom: 0.3rem;
        }
        
        .contact-info i {
          margin-right: 0.5rem;
          color: var(--secondary-color);
        }
        
        @media (max-width: 768px) {
          .header-container {
            padding: 1rem;
          }
          
          .cart-sidebar {
            width: 100%;
          }
          
          .announcement-bar {
            font-size: 0.8rem;
          }
          
          .ayurveda-popup {
            left: 1rem;
            right: 1rem;
            bottom: 1rem;
          }
          
          .ayurveda-popup-content {
            max-width: none;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
          
          .newsletter-form input {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
        </>
    );
}