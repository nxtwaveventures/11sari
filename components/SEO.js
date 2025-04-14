import Head from 'next/head'
import { generateMetaTags, getStructuredData } from '@/utils/meta'

export default function SEO({
    title,
    description,
    keywords = [],
    image,
    type,
    url,
    structuredData
}) {
    const metaData = generateMetaTags({
        title,
        description,
        keywords,
        image,
        type,
        url
    })

    return (
        <Head>
            <title>{metaData.title}</title>
            {metaData.meta.map((tag, index) => (
                <meta key={index} {...tag} />
            ))}
            {metaData.links.map((link, index) => (
                <link key={index} {...link} />
            ))}

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            />

            {/* Structured Data */}
            {structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(getStructuredData(structuredData.type, structuredData.data))
                    }}
                />
            )}
        </Head>
    )
}