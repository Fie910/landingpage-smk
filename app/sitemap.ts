// smk-khawahabmuhsin/app/sitemap.ts
import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://smk-khawahabmuhsin.sch.id'

    // 1. Ambil semua data slug dari Sanity
    const programSlugs = await client.fetch(`*[_type == "program"].slug.current`)
    const newsSlugs = await client.fetch(`*[_type == "news"].slug.current`)
    const gallerySlugs = await client.fetch(`*[_type == "gallery"].slug.current`)

    // 2. Ubah data slug menjadi format URL Sitemap
    const programUrls = programSlugs.map((slug: string) => ({
        url: `${baseUrl}/program/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const newsUrls = newsSlugs.map((slug: string) => ({
        url: `${baseUrl}/berita/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    const galleryUrls = gallerySlugs.map((slug: string) => ({
        url: `${baseUrl}/galeri/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // 3. Gabungkan halaman statis dan dinamis
    return [
        // Halaman Statis (Utama)
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/tentang`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/program`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/fasilitas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/guru`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/berita`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/galeri`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/kontak`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

        // Halaman Dinamis (Detail Slug)
        ...programUrls,
        ...newsUrls,
        ...galleryUrls,
    ]
}