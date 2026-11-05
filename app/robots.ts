// smk-khawahabmuhsin/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: '*', allow: '/', disallow: '/studio/' },
        sitemap: 'https://smk-khawahabmuhsin.sch.id/sitemap.xml',
    }
}