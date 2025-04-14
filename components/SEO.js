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