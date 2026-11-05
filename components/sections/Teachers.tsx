// components/sections/Teachers.tsx
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

export default function Teachers({ data }: { data: any[] }) {
    if (!data || data.length === 0) return null;

    return (
        <section className="py-20 bg-bg-tulang">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((teacher) => (
                        <div key={teacher._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="relative aspect-3/4 bg-gray-200 overflow-hidden">
                                {teacher.image ? (
                                    <Image
                                        src={urlForImage(teacher.image).url()}
                                        alt={teacher.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-gray-400">Foto Belum Ada</div>
                                )}
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="font-serif text-xl font-bold text-navy-deep mb-1">{teacher.name}</h3>
                                <p className="text-sm text-gold font-medium">{teacher.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}