//components/sections/LatestNews.tsx
import Link from "next/link"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

export default function LatestNews({ data, bgClass, texture, opacity }: { data: any[], bgClass?: string, texture?: any, opacity?: number }) {
    if (!data || data.length === 0) return null;
    const bg = bgClass || "bg-bg-tulang";

    return (
        <section className={`py-20 relative overflow-hidden ${bg}`}>
            {texture?.image && (
                <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: `url(${urlForImage(texture.image).url()})`, backgroundSize: 'cover', opacity: (opacity || 10) / 100 }} />
            )}
            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-deep mb-4">Berita & Kegiatan Terbaru</h2>
                        <div className="h-1 w-20 bg-gold mb-6"></div>
                        <p className="text-gray-600 max-w-xl">Ikuti terus perkembangan dan keseruan kegiatan belajar di sekolah kami.</p>
                    </div>
                    <Link href="/berita" className="hidden md:inline-flex text-navy-deep font-semibold hover:text-gold transition-colors items-center gap-2">Lihat Semua Berita &rarr;</Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((news) => (
                        <Link href={`/berita/${news.slug.current}`} key={news._id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="relative h-56 bg-gray-200 overflow-hidden">
                                {news.coverImage && <Image src={urlForImage(news.coverImage).url()} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />}
                            </div>
                            <div className="p-6 flex flex-col grow">
                                <p className="text-xs text-gold font-semibold mb-2">{new Date(news.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                <h3 className="font-serif text-xl font-bold text-navy-deep group-hover:text-navy-mid transition-colors line-clamp-2">{news.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-10 text-center md:hidden">
                    <Link href="/berita" className="inline-block bg-navy-deep text-white px-6 py-3 rounded-md font-semibold">Lihat Semua Berita</Link>
                </div>
            </div>
        </section>
    )
}