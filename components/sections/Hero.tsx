// components/sections/Hero.tsx
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

export default function Hero({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="relative bg-navy-deep text-white overflow-hidden py-24 md:py-32">
            {/* 1. GAMBAR LATAR BELAKANG */}
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

            {/* 2. AURORA ORBS (PERMAINAN WARNA & CAHAYA) */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-gold rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob animation-delay-4000"></div>

            {/* 3. KONTEN UTAMA */}
            <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white max-w-4xl mx-auto leading-tight drop-shadow-lg">
                    {data.heroTitle || "Merawat Fitrah, Mengukir Karya"}
                </h1>

                {/* --- HERO SUBTITLE GLASSMORPHISM & COLOR PLAY --- */}
                <div
                    className="inline-block mb-10"
                    style={{ animation: 'fade-up 1s ease-out forwards' }}
                >
                    <p
                        className="relative text-lg md:text-xl font-medium text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-hidden"
                        style={{ animation: 'soft-pulse 4s ease-in-out 1s infinite' }}
                    >
                        {/* Permainan Warna: Efek Pendaran Cahaya di dalam Kaca */}
                        <span className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-blue-500/20 opacity-50"></span>

                        {/* Teks Gradasi Emas ke Putih */}
                        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gold to-gray-100 drop-shadow-sm">
                            {data?.heroSubtitle || "Sekolah berbasis Boarding School di Kabupaten Tasikmalaya yang memadukan pendidikan vokasi, adab, dan kemandirian."}
                        </span>
                    </p>
                </div>

                {/* 4. GLASSMORPHIC BUTTON CONTAINER */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/tentang"
                        className="bg-gold hover:bg-yellow-500 text-white px-8 py-3 rounded-xl font-semibold transition-all w-full sm:w-auto shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:-translate-y-0.5"
                    >
                        Kenali Kami
                    </Link>
                    <Link
                        href="/program"
                        className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-xl font-semibold transition-all w-full sm:w-auto border border-white/10"
                    >
                        Lihat Program
                    </Link>
                </div>
            </div>
        </section>
    )
}