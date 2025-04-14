import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Custom404() {
    const seo = {
        title: '404 - Page Not Found',
        description: 'The page you are looking for does not exist. Browse our collection of authentic Banarasi silk sarees or return to homepage.',
        keywords: ['404', 'page not found', 'error page'],
    }

    return (
        <Layout seo={seo}>
            <div className="error-page">
                <div className="container">
                    <div className="error-content">
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                        <div className="error-actions">
                            <Link href="/" className="primary-button">
                                Return Home
                            </Link>
                            <Link href="/collection" className="secondary-button">
                                View Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}