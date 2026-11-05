//smk-khawahabmuhsin/components/site/Footer.tsx
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image"; // <-- Tambahkan ini
import { urlForImage } from "@/sanity/lib/image"; // <-- Tambahkan ini

export default function Footer({ data }: { data?: any }) {
    return (
        <footer className="bg-navy-deep text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

                {/* Kolom 1: Brand (Logo + Title sejajar, Tagline di bawah) */}
                <div className="md:col-span-5 lg:col-span-5">
                    {/* Container Flex untuk Logo & Title */}
                    <div className="flex items-center gap-4 mb-4">
                        {/* Logo */}
                        {data?.logo && (
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white/10 p-2 rounded-lg shrink-0">
                                <Image
                                    src={urlForImage(data.logo).url()}
                                    alt="Logo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                        )}

                        {/* Title */}
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-gold leading-tight">
                            {data?.title || "SMK KH. A. Wahab Muhsin"}
                        </h3>
                    </div>

                    {/* Tagline di bawah Logo & Title */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {data?.tagline || "Merawat Fitrah - Mengukir Karya. Sekolah berbasis Boarding School yang memadukan pendidikan vokasi, adab, dan kemandirian."}
                    </p>
                </div>

                {/* Kolom 2: Tautan Cepat */}
                <div className="md:col-span-2 lg:col-span-2">
                    <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><Link href="/tentang" className="hover:text-gold transition-colors">Profil Sekolah</Link></li>
                        <li><Link href="/program" className="hover:text-gold transition-colors">Program Keahlian</Link></li>
                        <li><Link href="/fasilitas" className="hover:text-gold transition-colors">Fasilitas Asrama</Link></li>
                        <li><Link href="/berita" className="hover:text-gold transition-colors">Berita & Kegiatan</Link></li>
                    </ul>
                </div>

                {/* Kolom 3: Kontak & Maps */}
                <div className="md:col-span-5 lg:col-span-5">
                    <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
                    <ul className="space-y-4 text-sm text-gray-300 mb-6">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{data?.address || "Alamat belum diatur di CMS."}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-gold shrink-0" />
                            <span>{data?.phone || "-"}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gold shrink-0" />
                            <span>{data?.email || "-"}</span>
                        </li>
                    </ul>

                    {/* Google Maps */}
                    {data?.mapsUrl && (
                        <div className="rounded-lg overflow-hidden h-40 lg:h-44 w-full border border-gray-600 shadow-sm">
                            <iframe
                                src={data.mapsUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} {data?.title || "SMK KH. A. Wahab Muhsin"}. All rights reserved.</p>
            </div>
        </footer>
    );
}