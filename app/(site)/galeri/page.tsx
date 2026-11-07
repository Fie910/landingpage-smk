// app/(site)/galeri/page.tsx
import { client } from "@/sanity/lib/client"
import { allGalleriesQuery, themeSettingsQuery } from "@/lib/queries"
import Link from "next/link"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import PageBackground from "@/components/site/PageBackground"
import ScrollReveal from "@/components/site/ScrollReveal"
import { Camera } from "lucide-react"

export const metadata = { title: "Galeri Kegiatan | SMK KH. A. Wahab Muhsin" }
export const revalidate = 60

export default async function GaleriPage() {
    const [galleriesData, themeData] = await Promise.all([
        client.fetch(allGalleriesQuery),
        client.fetch(themeSettingsQuery)
    ])

    // Menggunakan warna dasar halaman default atau dari pengaturan halaman berita
    const bg = themeData?.beritaBg || "bg-bg-tulang text-gray-800"

    return (
        <div className={`pt-10 min-h-screen relative overflow-hidden ${bg}`}>
            <PageBackground texture={themeData?.beritaTexture} opacity={themeData?.beritaOpacity} />

            <div className="relative z-10">
                <div className="bg-navy-deep text-white py-16 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold">Galeri Kegiatan</h1>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto px-4">
                        Momen-momen berharga dan keseruan kegiatan di lingkungan sekolah kami.
                    </p>
                </div>

                <div className="container mx-auto px-4 md:px-8 py-16 max-w-5xl">
                    {galleriesData.length === 0 ? (
                        <p className="text-center text-gray-500">Belum ada album galeri yang diterbitkan.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {galleriesData.map((album: any, index: number) => (
                                <ScrollReveal key={album._id} delay={index * 0.1}>
                                    <Link href={`/galeri/${album.slug.current}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="relative h-56 bg-gray-200 overflow-hidden">
                                            {album.coverImage ? (
                                                <Image
                                                    src={urlForImage(album.coverImage).url()}
                                                    alt={album.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400">Foto Belum Ada</div>
                                            )}
                                            <div className="absolute top-4 right-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                                                <Camera className="w-3 h-3" />
                                                {album.imageCount} Foto
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-xs text-gold font-semibold mb-2">
                                                {new Date(album.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                            </p>
                                            <h3 className="font-serif text-xl font-bold text-navy-deep group-hover:text-navy-mid transition-colors line-clamp-2">
                                                {album.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}