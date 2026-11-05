// app/(site)/berita/[slug]/page.tsx
import { client } from "@/sanity/lib/client"
import { singleNewsQuery } from "@/lib/queries"
import { urlForImage } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getYouTubeEmbedUrl } from "@/lib/youtube"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const news = await client.fetch(singleNewsQuery, { slug: resolvedParams.slug })
    if (!news) return { title: 'Berita Tidak Ditemukan' }
    return { title: `${news.title} | SMK KH. A. Wahab Muhsin` }
}

export const revalidate = 60

export default async function DetailBerita({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const news = await client.fetch(singleNewsQuery, { slug: resolvedParams.slug })
    const embedUrl = getYouTubeEmbedUrl(news?.videoUrl)

    if (!news) {
        notFound()
    }

    return (
        <div className="pt-10 min-h-screen bg-white">
            <div className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">

                <Link href="/berita" className="text-sm font-semibold text-gold hover:text-navy-deep mb-6 inline-block">&larr; Kembali ke Berita</Link>

                <h1 className="font-serif text-3xl md:text-5xl font-bold text-navy-deep mb-4 leading-tight">
                    {news.title}
                </h1>
                <p className="text-gray-500 mb-8 border-b pb-4">
                    Diterbitkan pada {new Date(news.publishedAt).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                </p>

                {news.coverImage && (
                    <div className="relative h-75 md:h-100 w-full rounded-2xl overflow-hidden mb-10 bg-gray-100">
                        <Image src={urlForImage(news.coverImage).url()} alt={news.title} fill className="object-cover" />
                    </div>
                )}

                <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-img:rounded-xl">
                    {news.body ? <PortableText value={news.body} /> : <p>Isi berita kosong.</p>}
                </div>

                {embedUrl && (
                    <div className="mt-12">
                        <h3 className="font-serif text-2xl font-bold text-navy-deep mb-6">Video Terkait</h3>
                        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-4 border-bg-tulang">
                            <iframe
                                src={embedUrl}
                                className="w-full h-full"
                                allowFullScreen
                                title={`Video ${news.title}`}
                            ></iframe>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}