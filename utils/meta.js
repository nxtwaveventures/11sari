export function generateMetaTags(pageData) {
    const baseTitle = '11Sari - Authentic Indian Sarees'
    const baseTags = {
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        'format-detection': 'telephone=no',
        robots: 'index, follow',
        author: '11Sari',
        language: 'en',
        revisit: '7 days',
        distribution: 'global',
        rating: 'general',
        'theme-color': '#B30000'
    }

    const title = pageData?.title ? `${pageData.title} - ${baseTitle}` : baseTitle

    return {
        title,
        meta: [
            ...Object.entries(baseTags).map(([name, content]) => ({
                name,
                content
            })),
            {
                name: 'description',
                content: pageData?.description || '11Sari - Premium Banarasi sarees, handcrafted by master weavers of Varanasi. Authentic Indian silk sarees for weddings, festivals, and special occasions.'
            },
            {
                name: 'keywords',
                content: pageData?.keywords?.join(', ') || 'banarasi saree, silk saree, wedding saree, indian fashion, traditional wear, handloom saree'
            },
            // Open Graph
            {
                property: 'og:title',
                content: title
            },
            {
                property: 'og:description',
                content: pageData?.description || '11Sari - Premium Banarasi sarees direct from the weavers of Varanasi'
            },
            {
                property: 'og:type',
                content: pageData?.type || 'website'
            },
            {
                property: 'og:image',
                content: pageData?.image || '/assets/images/og-default.jpg'
            },
            {
                property: 'og:url',
                content: pageData?.url || 'https://11sari.com'
            },
            // Twitter
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:title',
                content: title
            },
            {
                name: 'twitter:description',
                content: pageData?.description || '11Sari - Premium Banarasi sarees direct from the weavers of Varanasi'
            },
            {
                name: 'twitter:image',
                content: pageData?.image || '/assets/images/og-default.jpg'
            }
        ],
        links: [
            {
                rel: 'canonical',
                href: pageData?.url || 'https://11sari.com'
            },
            {
                rel: 'manifest',
                href: '/site.webmanifest'
            },
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    }
}

export function getStructuredData(type, data) {
    const baseData = {
        '@context': 'https://schema.org',
        '@type': type
    }

    switch (type) {
        case 'Product':
            return {
                ...baseData,
                name: data.name,
                description: data.description,
                image: data.images,
                offers: {
                    '@type': 'Offer',
                    price: data.price.replace(/[^0-9]/g, ''),
                    priceCurrency: 'INR',
                    availability: 'https://schema.org/InStock'
                },
                brand: {
                    '@type': 'Brand',
                    name: '11Sari'
                }
            }
        case 'Article':
            return {
                ...baseData,
                headline: data.title,
                image: data.image,
                author: {
                    '@type': 'Person',
                    name: data.author
                },
                datePublished: data.date,
                dateModified: data.date
            }
        default:
            return baseData
    }
}