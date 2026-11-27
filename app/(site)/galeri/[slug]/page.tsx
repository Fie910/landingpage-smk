// app/(site)/galeri/[slug]/page.tsx
import { sanityFetch } from "@/sanity/lib/live"
import { client } from "@/sanity/lib/client"
import { singleGalleryQuery, themeSettingsQuery } from "@/lib/queries"
import { notFound } from "next/navigation"
import Link from "next/link"
import PageBackground from "@/components/site/PageBackground"
import Lightbox from "@/components/site/Lightbox"
import { urlForImage } from "@/sanity/lib/image"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const { data: gallery } = (await sanityFetch({ query: singleGalleryQuery, params: { slug: resolvedParams.slug } })) as { data: any }
    if (!gallery) return { title: 'Galeri Tidak Ditemukan' }

    const title = `${gallery.title} | Galeri SMK KH. A. Wahab Muhsin`
    const description = `Dokumentasi foto kegiatan ${gallery.title} di SMK KH. A. Wahab Muhsin.`
    const firstImage = gallery.images?.[0]
    const ogImage = firstImage ? urlForImage(firstImage).width(1200).height(630).url() : undefined

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
        },
    }
}

export const revalidate = 60

export async function generateStaticParams() {
    const items: { slug: string }[] = await client.fetch(
        `*[_type == "gallery" && defined(slug.current)]{ "slug": slug.current }`
    )
    return items.map((item) => ({ slug: item.slug }))
}

export default async function DetailGaleri({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const [{ data: gallery }, { data: themeData }] = (await Promise.all([
        sanityFetch({ query: singleGalleryQuery, params: { slug: resolvedParams.slug } }),
        sanityFetch({ query: themeSettingsQuery })
    ])) as Array<{ data: any }>

    if (!gallery) notFound()
    const bg = themeData?.beritaBg || "bg-bg-tulang text-gray-800"

    return (
        <div className={`pt-10 min-h-screen relative overflow-hidden ${bg}`}>
            <PageBackground texture={themeData?.beritaTexture} opacity={themeData?.beritaOpacity} />

            <div className="relative z-10">
                <div className="bg-navy-deep text-white py-16 text-center">
                    <Link href="/galeri" className="text-gold text-sm font-semibold mb-4 inline-block hover:underline">&larr; Kembali ke Galeri</Link>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold">{gallery.title}</h1>
                    {gallery.date && (
                        <p className="text-gray-300 mt-4">
                            {new Date(gallery.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    )}
                </div>

                <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl">
                    {gallery.images && gallery.images.length > 0 ? (
                        <Lightbox images={gallery.images} />
                    ) : (
                        <p className="text-center text-gray-500">Belum ada foto di album ini.</p>
                    )}
                </div>
            </div>
        </div>
    )
}