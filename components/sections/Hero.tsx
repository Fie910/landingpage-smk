// components/sections/Hero.tsx
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

export default function Hero({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="relative bg-navy-deep text-white overflow-hidden py-24 md:py-32">
            {/* Gambar Latar Belakang */}
            {data.heroImage && (
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src={urlForImage(data.heroImage).url()}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white max-w-4xl mx-auto leading-tight">
                    {data.heroTitle || "Merawat Fitrah, Mengukir Karya"}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                    {data?.heroSubtitle || "Sekolah berbasis Boarding School di Kabupaten Tasikmalaya yang memadukan pendidikan vokasi, adab, dan kemandirian."}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/tentang"
                        className="bg-gold hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-semibold transition-all w-full sm:w-auto"
                    >
                        Kenali Kami
                    </Link>
                    <Link
                        href="/program"
                        className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-md font-semibold transition-all w-full sm:w-auto backdrop-blur-sm"
                    >
                        Lihat Program
                    </Link>
                </div>
            </div>
        </section>
    )
}