const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

const SITE_URL = 'https://11sari.com'

    ; (async () => {
        const prettierConfig = await prettier.resolveConfig('./.prettierrc')

        // Get all pages except dynamic routes and API routes
        const pages = await globby([
            'pages/**/*.js',
            '!pages/_*.js',
            '!pages/api',
            '!pages/[*.js',
        ])

        // Add static routes
        const staticPaths = [
            '',
            '/about',
            '/blogs',
            '/contact',
            '/know-more',
            '/collection',
            '/privacy-policy',
            '/terms-of-service',
            '/shipping-policy',
        ]

        const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPaths
                .map((path) => {
                    return `
            <url>
              <loc>${SITE_URL}${path}</loc>
              <changefreq>daily</changefreq>
              <priority>${path === '' ? '1.0' : '0.8'}</priority>
            </url>
          `
                })
                .join('')}
    </urlset>
  `

        const formatted = prettier.format(sitemap, {
            ...prettierConfig,
            parser: 'html',
        })

        fs.writeFileSync('public/sitemap.xml', formatted)
    })()