import Link from 'next/link'
import SEO from './SEO'

export default function Layout({ children, seo }) {
    const defaultSEO = {
        title: null,
        description: '11Sari - Premium Banarasi sarees, handcrafted by master weavers of Varanasi. Discover authentic Indian silk sarees for weddings, festivals, and special occasions.',
        keywords: ['banarasi saree', 'silk sarees', 'wedding sarees', 'indian fashion', 'traditional wear', 'handloom', 'varanasi silk'],
    }

    return (
        <>
            <SEO {...defaultSEO} {...seo} />
            <header className="site-header">
                <div className="container">
                    <div className="header-container">
                        <div className="logo">
                            <Link href="/">
                                <span className="logo-text">11<span className="logo-highlight">Sari</span></span>
                            </Link>
                        </div>
                        <nav className="main-nav">
                            <ul>
                                <li><Link href="/about" className="nav-link">About Us</Link></li>
                                <li><Link href="/blogs" className="nav-link">Blogs</Link></li>
                                <li><Link href="/know-more" className="nav-link">Know More</Link></li>
                                <li><Link href="/contact" className="nav-link">Contact Us</Link></li>
                                <li><Link href="/collection" className="nav-link">Collection</Link></li>
                                <li><Link href="/suit-collection" className="nav-link">11Suit</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {children}
            <footer className="site-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-links">
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/terms-of-service">Terms of Service</Link>
                            <Link href="/shipping-policy">Shipping Policy</Link>
                        </div>
                        <div className="social-media">
                            <a href="https://www.facebook.com/profile.php?id=61574843622187" className="social-link" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/elevensaree/" className="social-link" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div className="copyright">
                            &copy; {new Date().getFullYear()} 11Sari. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}