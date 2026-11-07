//components/site/Lightbox.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

export default function Lightbox({ images }: { images: any[] }) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Menutup lightbox jika tombol Escape ditekan
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedIndex(null);
            if (e.key === "ArrowRight" && selectedIndex !== null) handleNext();
            if (e.key === "ArrowLeft" && selectedIndex !== null) handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    const handleNext = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : (prev as number) + 1));
    };

    const handlePrev = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : (prev as number) - 1));
    };

    return (
        <>
            {/* Grid Foto */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-gray-100"
                        onClick={() => setSelectedIndex(index)}
                    >
                        <Image
                            src={urlForImage(img).url()}
                            alt={`Foto ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay saat hover */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                Lihat Foto
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center backdrop-blur-sm">

                    {/* Tombol Tutup */}
                    <button
                        onClick={() => setSelectedIndex(null)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors z-50"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Tombol Navigasi Kiri */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 md:left-12 text-white/70 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-50"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    {/* Gambar Utama */}
                    <div className="relative w-full max-w-5xl h-[70vh] md:h-[85vh] mx-4">
                        <Image
                            src={urlForImage(images[selectedIndex]).url()}
                            alt="Foto Lightbox"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Tombol Navigasi Kanan */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-12 text-white/70 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-50"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Indikator Jumlah Foto */}
                    <div className="absolute bottom-6 text-white/80 font-medium tracking-widest text-sm bg-black/50 px-4 py-1 rounded-full">
                        {selectedIndex + 1} / {images.length}
                    </div>

                </div>
            )}
        </>
    );
}