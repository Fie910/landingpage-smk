// app/(site)/berita/page.tsx
import { client } from "@/sanity/lib/client"
import { allNewsQuery, themeSettingsQuery } from "@/lib/queries"
import Link from "next/link"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import PageBackground from "@/components/site/PageBackground"

export const metadata = { title: "Berita | SMK KH. A. Wahab Muhsin" }
export const revalidate = 60

export default async function BeritaPage() {
    const [newsData, themeData] = await Promise.all([
        client.fetch(allNewsQuery),
        client.fetch(themeSettingsQuery)
    ])
    // PERBAIKAN: beritaBg
    const bg = themeData?.beritaBg || "bg-bg-tulang text-gray-800"

    return (
        // PERBAIKAN: Gunakan backtick
        <div className={`pt-10 min-h-screen relative overflow-hidden ${bg}`}>
            <PageBackground texture={themeData?.beritaTexture} opacity={themeData?.beritaOpacity} />
            <div className="relative z-10">
                <div className="bg-navy-deep text-white py-16 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold">Berita & Kegiatan</h1>
                </div>
                <div className="container mx-auto px-4 md:px-8 py-16 max-w-5xl">
                    {newsData.length === 0 ? (
                        <p className="text-center text-gray-500">Belum ada berita yang diterbitkan.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {newsData.map((news: any) => (
                                <Link href={`/berita/${news.slug.current}`} key={news._id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                                        {news.coverImage && <Image src={urlForImage(news.coverImage).url()} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />}
                                    </div>
                                    <div className="p-6">
                                        <p className="text-xs text-gold font-semibold mb-2">{new Date(news.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                        <h3 className="font-serif text-xl font-bold text-navy-deep group-hover:text-navy-mid transition-colors line-clamp-2">{news.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}