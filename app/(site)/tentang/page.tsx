// app/(site)/tentang/page.tsx
import { client } from "@/sanity/lib/client"
import { homepageQuery, aboutPageQuery } from "@/lib/queries"
import VisionMission from "@/components/sections/VisionMission"
import { PortableText } from "@portabletext/react"
import { getYouTubeEmbedUrl } from "@/lib/youtube"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { CheckCircle2 } from "lucide-react"

export const metadata = { title: "Tentang Kami | SMK KH. A. Wahab Muhsin" }
export const revalidate = 60

export default async function TentangPage() {
    const [homeData, aboutData] = await Promise.all([
        client.fetch(homepageQuery),
        client.fetch(aboutPageQuery)
    ])

    const embedUrl = getYouTubeEmbedUrl(aboutData?.videoUrl)

    return (
        <div className="pt-10 pb-20 bg-bg-tulang min-h-screen">
            {/* Header */}
            <div className="bg-navy-deep text-white py-16 text-center mb-16">
                <h1 className="font-serif text-4xl md:text-5xl font-bold">Profil Sekolah</h1>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto px-4">
                    Mengenal lebih dekat sejarah, nilai, dan visi kami.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-20">

                {/* Sejarah & Video */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-navy-deep mb-6">Sejarah Singkat</h2>
                        <div className="prose prose-lg text-gray-600">
                            {aboutData?.history ? <PortableText value={aboutData.history} /> : <p>Sejarah belum diisi.</p>}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Video YouTube (Hanya muncul jika ada link) */}
                        {embedUrl && (
                            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                <iframe
                                    src={embedUrl}
                                    className="w-full h-full"
                                    allowFullScreen
                                    title="Video Profil Sekolah"
                                ></iframe>
                            </div>
                        )}

                        {/* Foto Pendukung (Hanya muncul jika ada foto) */}
                        {aboutData?.image && (
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                <Image src={urlForImage(aboutData.image).url()} alt="Foto Sekolah" fill className="object-cover" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Nilai-Nilai Inti */}
                {aboutData?.coreValues && aboutData.coreValues.length > 0 && (
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="font-serif text-3xl font-bold text-navy-deep mb-8 text-center">Nilai-Nilai Kami</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {aboutData.coreValues.map((value: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-4 bg-bg-tulang p-4 rounded-xl">
                                    <CheckCircle2 className="w-8 h-8 text-gold shrink-0" />
                                    <span className="font-semibold text-navy-deep text-lg">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Visi & Misi dari Beranda */}
                <VisionMission data={homeData} />

            </div>
        </div>
    )
}