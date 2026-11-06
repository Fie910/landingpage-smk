// components/sections/Programs.tsx
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

// Tambahkan bgClass di sini
export default function Programs({ data, bgClass, texture, opacity }: { data: any[], bgClass?: string, texture?: any, opacity?: number }) {
    if (!data || data.length === 0) return null;

    // Gunakan bgClass jika ada, jika tidak gunakan bg-transparent
    const bg = bgClass || "bg-transparent";

    return (
        <section className={`py-20 relative overflow-hidden ${bg}`}>
            {/* LAPISAN TEKSTUR */}
            {texture?.image && (
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url(${urlForImage(texture.image).url()})`,
                        backgroundSize: 'cover',
                        opacity: (opacity || 10) / 100
                    }}
                />
            )}

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-deep mb-4">
                        Program Keahlian
                    </h2>
                    <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
                    <p className="text-gray-600">
                        Kami berjuang menumbuh kembangkan lulusan yang menjaga fitrahnya dan siap mengabdi melalui karya nyata di berbagai bidang.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((program) => (
                        <div key={program._id} className="group bg-bg-tulang rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                                {program.image ? (
                                    <Image
                                        src={urlForImage(program.image).url()}
                                        alt={program.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
                                        Foto Belum Diatur
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col grow">
                                <h3 className="font-serif text-xl font-bold text-navy-deep mb-3 group-hover:text-navy-mid transition-colors">
                                    {program.name}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 grow line-clamp-3">
                                    {program.description}
                                </p>
                                <Link
                                    href={`/program/${program.slug.current}`}
                                    className="text-gold font-semibold text-sm inline-flex items-center hover:text-navy-deep transition-colors"
                                >
                                    Pelajari Lebih Lanjut &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}