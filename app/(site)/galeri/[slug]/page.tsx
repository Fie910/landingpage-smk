// app/(site)/galeri/[slug]/page.tsx
import { client } from "@/sanity/lib/client"
import { singleGalleryQuery, themeSettingsQuery } from "@/lib/queries"
import { notFound } from "next/navigation"
import Link from "next/link"
import PageBackground from "@/components/site/PageBackground"
import Lightbox from "@/components/site/Lightbox"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const gallery = await client.fetch(singleGalleryQuery, { slug: resolvedParams.slug })
    if (!gallery) return { title: 'Galeri Tidak Ditemukan' }
    return { title: `${gallery.title} | Galeri SMK KH. A. Wahab Muhsin` }
}

export const revalidate = 60

export default async function DetailGaleri({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const [gallery, themeData] = await Promise.all([
        client.fetch(singleGalleryQuery, { slug: resolvedParams.slug }),
        client.fetch(themeSettingsQuery)
    ])

    if (!gallery) notFound()
    const bg = themeData?.beritaBg || "bg-bg-tulang text-gray-800"

    return (
        <div className={`pt-10 min-h-screen relative overflow-hidden ${bg}`}>
            <PageBackground texture={themeData?.beritaTexture} opacity={themeData?.beritaOpacity} />

            <div className="relative z-10">
                <div className="bg-navy-deep text-white py-16 text-center">
                    <Link href="/galeri" className="text-gold text-sm font-semibold mb-4 inline-block hover:underline">&larr; Kembali ke Galeri</Link>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold">{gallery.title}</h1>
                    <p className="text-gray-300 mt-4">
                        {new Date(gallery.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
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