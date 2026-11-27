// app/(site)/tentang/page.tsx
import { sanityFetch } from "@/sanity/lib/live"
import { homepageQuery, aboutPageQuery, themeSettingsQuery, achievementsQuery } from "@/lib/queries"
import VisionMission from "@/components/sections/VisionMission"
import { PortableText } from "@portabletext/react"
import { getYouTubeEmbedUrl } from "@/lib/youtube"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { CheckCircle2 } from "lucide-react"
import PageBackground from "@/components/site/PageBackground"

export const metadata = { title: "Tentang Kami | SMK KH. A. Wahab Muhsin" }
export const revalidate = 60

export default async function TentangPage() {
    const [{ data: homeData }, { data: aboutData }, { data: themeData }, { data: achievementsData }] = (await Promise.all([
        sanityFetch({ query: homepageQuery }),
        sanityFetch({ query: aboutPageQuery }),
        sanityFetch({ query: themeSettingsQuery }),
        sanityFetch({ query: achievementsQuery }).catch(() => ({ data: [] }))
    ])) as Array<{ data: any }>

    const embedUrl = getYouTubeEmbedUrl(aboutData?.videoUrl)
    const bg = themeData?.tentangBg || "bg-bg-tulang text-gray-800";

    return (
        <div className={`pt-10 pb-20 min-h-screen relative overflow-hidden ${bg}`}>
            <PageBackground texture={themeData?.tentangTexture} opacity={themeData?.tentangOpacity} />
            <div className="relative z-10">
                <div className="bg-navy-deep text-white py-16 text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold">Profil Sekolah</h1>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto px-4">Mengenal lebih dekat sejarah, nilai, dan visi kami.</p>
                </div>
                <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-navy-deep mb-6">Sejarah Singkat</h2>
                            <div className="prose prose-lg">
                                {aboutData?.history ? <PortableText value={aboutData.history} /> : <p>Sejarah belum diisi.</p>}
                            </div>
                        </div>
                        <div className="space-y-6">
                            {embedUrl && (
                                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white/50">
                                    <iframe src={embedUrl} className="w-full h-full" allowFullScreen title="Video Profil Sekolah"></iframe>
                                </div>
                            )}
                            {aboutData?.image && (
                                <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white/50">
                                    <Image src={urlForImage(aboutData.image).width(1200).quality(85).url()} alt="Foto Sekolah" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
                                </div>
                            )}
                        </div>
                    </div>
                    {aboutData?.coreValues && aboutData.coreValues.length > 0 && (
                        <div className="bg-white/95 p-10 rounded-2xl shadow-sm border border-gray-100">
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
                    {achievementsData && achievementsData.length > 0 && (
                        <div className="bg-white/95 p-10 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="font-serif text-3xl font-bold text-navy-deep mb-8 text-center">
                                Prestasi &amp; Penghargaan
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {achievementsData.map((item: any) => (
                                    <div key={item._id} className="bg-bg-tulang p-6 rounded-xl border border-gray-100 flex flex-col gap-3">
                                        {item.year && (
                                            <span className="self-start text-xs font-bold px-3 py-1 rounded-full bg-gold/20 text-navy-deep">
                                                {item.year}
                                            </span>
                                        )}
                                        <h3 className="font-serif text-lg font-bold text-navy-deep">{item.title}</h3>
                                        {item.description && (
                                            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <VisionMission data={homeData} />
                </div>
            </div>
        </div>
    )
}