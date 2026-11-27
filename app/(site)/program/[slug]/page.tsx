// app/(site)/program/[slug]/page.tsx
import { sanityFetch } from "@/sanity/lib/live"
import { singleProgramQuery, themeSettingsQuery } from "@/lib/queries"
import { urlForImage } from "@/sanity/lib/image"
import { getYouTubeEmbedUrl } from "@/lib/youtube"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import PageBackground from "@/components/site/PageBackground"
import RichText from "@/components/site/RichText"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const { data: program } = (await sanityFetch({ query: singleProgramQuery, params: { slug: resolvedParams.slug } })) as { data: any }
    if (!program) return { title: 'Program Tidak Ditemukan' }

    const title = `${program.name} | SMK KH. A. Wahab Muhsin`
    const description = program.description || `Informasi program keahlian ${program.name} di SMK KH. A. Wahab Muhsin.`
    const ogImage = program.image
        ? urlForImage(program.image).width(1200).height(630).url()
        : undefined

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

export default async function DetailProgram({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const [{ data: program }, { data: themeData }] = (await Promise.all([
        sanityFetch({ query: singleProgramQuery, params: { slug: resolvedParams.slug } }),
        sanityFetch({ query: themeSettingsQuery })
    ])) as Array<{ data: any }>
    if (!program) notFound()
    const embedUrl = getYouTubeEmbedUrl(program.videoUrl)
    const bg = themeData?.programSlugBg || "bg-bg-tulang text-gray-800";

    return (
        <div className={`pt-10 min-h-screen relative overflow-hidden ${bg}`}>
            <PageBackground texture={themeData?.programSlugTexture} opacity={themeData?.programSlugOpacity} />
            <div className="relative z-10">
                <div className="bg-navy-deep text-white py-20">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                        <Link href="/program" className="text-gold text-sm font-semibold mb-6 inline-block hover:underline">&larr; Kembali ke Program</Link>
                        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">{program.name}</h1>
                        <p className="text-xl text-gray-300">{program.description}</p>
                    </div>
                </div>
                <div className="container mx-auto px-4 md:px-8 max-w-4xl py-16">
                    <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                        {program.image && (
                            <div className="relative h-75 md:h-100 w-full rounded-2xl overflow-hidden mb-10">
                                <Image src={urlForImage(program.image).width(1200).quality(85).url()} alt={program.name} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
                            </div>
                        )}
                        <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-img:rounded-xl">
                            {program.longDescription ? <RichText value={program.longDescription} /> : <p>Informasi detail untuk program ini belum ditambahkan.</p>}
                        </div>
                        {embedUrl && (
                            <div className="mt-12">
                                <h3 className="font-serif text-2xl font-bold text-navy-deep mb-6">Video Profil Jurusan</h3>
                                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-4 border-bg-tulang">
                                    <iframe src={embedUrl} className="w-full h-full" allowFullScreen title={`Video ${program.name}`}></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}