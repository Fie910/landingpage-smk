// smk-khawahabmuhsin/app/sitemap.ts
import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://smk-khawahabmuhsin.sch.id'

    // 1. Ambil semua data slug dari Sanity
    const programSlugs: { slug: string; _updatedAt: string }[] = await client.fetch(
        `*[_type == "program" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    )
    const newsSlugs: { slug: string; _updatedAt: string }[] = await client.fetch(
        `*[_type == "news" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    )
    const gallerySlugs: { slug: string; _updatedAt: string }[] = await client.fetch(
        `*[_type == "gallery" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    )

    // 2. Ubah data slug menjadi format URL Sitemap
    const programUrls = programSlugs.map((item) => ({
        url: `${baseUrl}/program/${item.slug}`,
        lastModified: new Date(item._updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const newsUrls = newsSlugs.map((item) => ({
        url: `${baseUrl}/berita/${item.slug}`,
        lastModified: new Date(item._updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    const galleryUrls = gallerySlugs.map((item) => ({
        url: `${baseUrl}/galeri/${item.slug}`,
        lastModified: new Date(item._updatedAt),
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