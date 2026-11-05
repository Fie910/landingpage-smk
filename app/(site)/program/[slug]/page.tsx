// app/(site)/program/[slug]/page.tsx
import { client } from "@/sanity/lib/client"
import { singleProgramQuery } from "@/lib/queries"
import { urlForImage } from "@/sanity/lib/image"
import { getYouTubeEmbedUrl } from "@/lib/youtube"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const program = await client.fetch(singleProgramQuery, { slug: resolvedParams.slug })
    if (!program) return { title: 'Program Tidak Ditemukan' }
    return { title: `${program.name} | SMK KH. A. Wahab Muhsin` }
}

export const revalidate = 60

export default async function DetailProgram({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const program = await client.fetch(singleProgramQuery, { slug: resolvedParams.slug })

    if (!program) notFound()

    const embedUrl = getYouTubeEmbedUrl(program.videoUrl)

    return (
        <div className="pt-10 min-h-screen bg-bg-tulang">
            {/* Hero Program */}
            <div className="bg-navy-deep text-white py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                    <Link href="/program" className="text-gold text-sm font-semibold mb-6 inline-block hover:underline">&larr; Kembali ke Program</Link>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">{program.name}</h1>
                    <p className="text-xl text-gray-300">{program.description}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-4xl py-16">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">

                    {/* Foto Program (Hanya jika ada) */}
                    {program.image && (
                        <div className="relative h-75 md:h-100 w-full rounded-2xl overflow-hidden mb-10">
                            <Image src={urlForImage(program.image).url()} alt={program.name} fill className="object-cover" />
                        </div>
                    )}

                    {/* Teks Panjang */}
                    <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-img:rounded-xl">
                        {program.longDescription ? (
                            <PortableText value={program.longDescription} />
                        ) : (
                            <p>Informasi detail untuk program ini belum ditambahkan.</p>
                        )}
                    </div>

                    {/* Video YouTube (Hanya jika ada) */}
                    {embedUrl && (
                        <div className="mt-12">
                            <h3 className="font-serif text-2xl font-bold text-navy-deep mb-6">Video Profil Jurusan</h3>
                            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-4 border-bg-tulang">
                                <iframe
                                    src={embedUrl}
                                    className="w-full h-full"
                                    allowFullScreen
                                    title={`Video ${program.name}`}
                                ></iframe>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}