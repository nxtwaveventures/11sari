import Head from 'next/head';

export default function SEO({
    title = "11Sari - Authentic Banarasi Sarees | Premium Silk Sarees with Ayurvedic Benefits",
    description = "11Sari - Discover India's premium Banarasi sarees, handcrafted silk sarees, and designer suits. Authentic traditional wear with Ayurvedic benefits. Free shipping across India.",
    canonical = "https://11sari.com",
    image = "https://11sari.com/assets/images/hero/hero-background.jpg",
    ogType = "website",
    children
}) {
    // Base structured data for organization
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "11Sari",
        "url": "https://11sari.com",
        "logo": "https://11sari.com/assets/images/11sari-logo.jpg",
        "sameAs": [
            "https://facebook.com/11sari",
            "https://instagram.com/11sari",
            "https://pinterest.com/11sari",
            "https://twitter.com/11sari"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-98765-43210",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
        },
        "description": "Premium provider of authentic Banarasi sarees, handcrafted with traditional methods and natural Ayurvedic dyes."
    };

    // Structured data for the store
    const storeSchema = {
        "@context": "https://schema.org",
        "@type": "ClothingStore",
        "name": "11Sari - Premium Indian Traditional Wear",
        "image": "https://11sari.com/assets/images/hero/hero-background.jpg",
        "priceRange": "₹₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Textile Hub, Banaras",
            "addressLocality": "Varanasi",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "221001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.3176",
            "longitude": "83.0064"
        },
        "telephone": "+91-98765-43210",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "10:00",
                "closes": "20:00"
            }
        ],
        "makesOffer": {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Product",
                "name": "Authentic Banarasi Sarees",
                "description": "Traditional silk sarees made with natural dyes and Ayurvedic processes."
            }
        }
    };

    // Product category structured data
    const productCategorySchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Ayurvedic Banarasi Silk Sarees",
        "description": "Traditional handwoven silk sarees from Varanasi with Ayurvedic healing properties from natural dyes and processes.",
        "brand": {
            "@type": "Brand",
            "name": "11Sari"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": "5000",
            "highPrice": "100000",
            "offerCount": "100"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
        }
    };

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content="saree, banarasi saree, silk saree, wedding saree, designer saree, handloom saree, traditional saree, indian saree, varanasi saree, sari, ayurvedic clothing, natural dyes, organic saree, suit, indian suit" />

            {/* Canonical Link */}
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="11Sari" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Mobile viewport optimization */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#B71C1C" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* Structured data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(storeSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productCategorySchema)
                }}
            />

            {/* Hreflang tags for language/region */}
            <link rel="alternate" href="https://11sari.com" hrefLang="en-in" />
            <link rel="alternate" href="https://11sari.com" hrefLang="x-default" />

            {/* Favicons */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
                rel="stylesheet"
            />

            {/* Additional Meta Tags */}
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="author" content="11Sari" />
            <meta name="robots" content="index, follow" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "11Sari",
                    "url": "https://11sari.com",
                    "description": description,
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": `${canonical}/search?q={search_term_string}`,
                        "query-input": "required name=search_term_string"
                    }
                })}
            </script>

            {/* E-commerce Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "11Sari",
                    "url": "https://11sari.com",
                    "logo": "https://11sari.com/assets/images/11sari-logo.jpg",
                    "sameAs": [
                        "https://facebook.com/11sari",
                        "https://instagram.com/11sari",
                        "https://pinterest.com/11sari",
                        "https://twitter.com/11sari"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-98765-43210",
                        "contactType": "customer service",
                        "availableLanguage": ["English", "Hindi"]
                    }
                })}
            </script>

            {children}
        </Head>
    );
}