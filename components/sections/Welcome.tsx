// components/sections/Welcome.tsx
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import PageBackground from "@/components/site/PageBackground"

export default function Welcome({ data, bgClass, texture, opacity }: { data: any, bgClass?: string, texture?: any, opacity?: number }) {
    if (!data) return null;
    const bg = bgClass || "bg-white";

    const sizeMap: Record<string, string> = {
        sm: "w-44 sm:w-52",
        md: "w-56 sm:w-64",
        lg: "w-64 sm:w-72",
    };

    const layoutMap: Record<string, string> = {
        left: "flex flex-col lg:flex-row gap-10 lg:gap-12 items-center",
        right: "flex flex-col lg:flex-row-reverse gap-10 lg:gap-12 items-center",
        top: "flex flex-col gap-8 items-center text-center max-w-3xl mx-auto",
    };

    const sizeClass = sizeMap[data.headmasterPhotoSize] || sizeMap.md;
    const position = data.headmasterPhotoPosition || "left";
    const layoutClass = layoutMap[position] || layoutMap.left;
    const alignClass = data.headmasterPhotoAlign || "object-top";

    return (
        <section className={`py-20 relative overflow-hidden ${bg}`}>
            <PageBackground texture={texture} opacity={opacity} />
            <div className={`container relative z-10 mx-auto px-4 md:px-8 ${layoutClass}`}>
                <div className={`${sizeClass} shrink-0`}>
                    <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-xl border-4 border-bg-tulang shrink-0">
                        {data.headmasterPhoto ? (
                            <Image
                                src={urlForImage(data.headmasterPhoto).width(600).quality(80).url()}
                                alt={data.headmasterName || "Kepala Sekolah"}
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className={`object-cover ${alignClass}`}
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                Foto Belum Diatur
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full flex-1">
                    <div className={`flex items-center gap-4 mb-6 ${position === "top" ? "justify-center" : ""}`}>
                        <div className="h-1 w-12 bg-gold"></div>
                        <h2 className="font-serif text-3xl font-bold text-navy-deep">
                            {data.welcomeTitle || "Sambutan Kepala Sekolah"}
                        </h2>
                    </div>
                    <div className="prose prose-lg text-gray-600 mb-8 italic max-w-none">
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
