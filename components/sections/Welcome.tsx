// components/sections/Welcome.tsx
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"

export default function Welcome({ data, bgClass, texture, opacity }: { data: any, bgClass?: string, texture?: any, opacity?: number }) {
    if (!data) return null;
    const bg = bgClass || "bg-white";

    return (
        <section className={`py-20 relative overflow-hidden ${bg}`}>
            {texture?.image && (
                <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: `url(${urlForImage(texture.image).url()})`, backgroundSize: 'cover', opacity: (opacity || 10) / 100 }} />
            )}
            <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/3">
                    <div className="relative aspect-3/4 rounded-lg overflow-hidden shadow-xl border-4 border-bg-tulang">
                        {data.headmasterPhoto ? <Image src={urlForImage(data.headmasterPhoto).url()} alt={data.headmasterName} fill className="object-cover" /> : <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Foto Belum Diatur</div>}
                    </div>
                </div>
                <div className="w-full lg:w-2/3">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-1 w-12 bg-gold"></div>
                        <h2 className="font-serif text-3xl font-bold text-navy-deep">{data.welcomeTitle || "Sambutan Kepala Sekolah"}</h2>
                    </div>
                    <div className="prose prose-lg text-gray-600 mb-8 italic">
                        {data.welcomeText ? <PortableText value={data.welcomeText} /> : <p>Teks sambutan belum diisi.</p>}
                    </div>
                    <div>
                        <p className="font-bold text-navy-deep text-lg">{data.headmasterName}</p>
                        <p className="text-gray-500">Kepala SMK KH. A. Wahab Muhsin</p>
                    </div>
                </div>
            </div>
        </section>
    )
}