// components/sections/Facilities.tsx
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

export default function Facilities({ data, bgClass, texture, opacity }: { data: any[], bgClass?: string, texture?: any, opacity?: number }) {
    if (!data || data.length === 0) return null;
    const bg = bgClass || "bg-navy-deep text-white";

    return (
        <section className={`py-20 relative overflow-hidden ${bg}`}>
            {texture?.image && (
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url(${urlForImage(texture.image).url()})`,
                        backgroundSize: 'cover',
                        opacity: (opacity || 20) / 100
                    }}
                />
            )}

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Fasilitas Sekolah</h2>
                        <div className="h-1 w-20 bg-gold mb-6"></div>
                        <p className="max-w-xl opacity-90">Lingkungan yang kondusif untuk belajar, beribadah, dan mengembangkan bakat.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {data.map((facility, index) => (
                        <div key={facility._id} className={`relative rounded-xl overflow-hidden group h-64 ${index === 0 ? 'col-span-2 row-span-2 h-full min-h-100' : ''}`}>
                            {facility.image ? (
                                <Image src={urlForImage(facility.image).url()} alt={facility.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            ) : (
                                <div className="w-full h-full bg-navy-mid flex items-center justify-center text-sm text-gray-400">Foto Belum Ada</div>
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-navy-deep/90 via-navy-deep/20 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="font-serif font-bold text-xl text-white">{facility.name}</h3>
                                    {facility.description && <p className="text-sm text-gray-200 mt-1 line-clamp-2">{facility.description}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}