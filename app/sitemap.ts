// smk-khawahabmuhsin/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: 'https://smk-khawahabmuhsin.sch.id', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: 'https://smk-khawahabmuhsin.sch.id/tentang', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: 'https://smk-khawahabmuhsin.sch.id/program', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: 'https://smk-khawahabmuhsin.sch.id/fasilitas', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: 'https://smk-khawahabmuhsin.sch.id/guru', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: 'https://smk-khawahabmuhsin.sch.id/kontak', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ]
}