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
                                    src={urlForImage(data.logo).width(200).url()}
                                    alt="Logo"
                                    fill
                                    sizes="80px"
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

                    {(data?.instagram || data?.youtube || data?.facebook) && (
                        <div className="flex items-center gap-3 mt-5">
                            {data?.instagram && (
                                <a
                                    href={data.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold text-white flex items-center justify-center transition-colors"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                                    </svg>
                                </a>
                            )}
                            {data?.youtube && (
                                <a
                                    href={data.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold text-white flex items-center justify-center transition-colors"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
                                    </svg>
                                </a>
                            )}
                            {data?.facebook && (
                                <a
                                    href={data.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold text-white flex items-center justify-center transition-colors"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0Z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    )}
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
                            {data?.phone ? (
                                <a href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-gold transition-colors">
                                    {data.phone}
                                </a>
                            ) : (
                                <span>-</span>
                            )}
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gold shrink-0" />
                            {data?.email ? (
                                <a href={`mailto:${data.email}`} className="hover:text-gold transition-colors">
                                    {data.email}
                                </a>
                            ) : (
                                <span>-</span>
                            )}
                        </li>
                    </ul>

                    {/* Google Maps */}
                    {data?.mapsUrl && (
                        <div className="rounded-lg overflow-hidden h-40 lg:h-44 w-full border border-gray-600 shadow-sm">
                            <iframe
                                src={data.mapsUrl}
                                title="Peta Lokasi SMK KH. A. Wahab Muhsin"
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