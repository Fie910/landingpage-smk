//components/site/Navbar.tsx
"use client"; // <-- Wajib ditambahkan agar tombol bisa diklik

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Tambah ikon X untuk tombol tutup
import { urlForImage } from "@/sanity/lib/image";

export default function Navbar({ data }: { data?: any }) {
    const [isOpen, setIsOpen] = useState(false); // Logika buka/tutup menu

    const menuItems = [
        { name: "Beranda", href: "/" },
        { name: "Tentang", href: "/tentang" },
        { name: "Program", href: "/program" },
        { name: "Fasilitas", href: "/fasilitas" },
        { name: "Guru", href: "/guru" },
        { name: "Berita & Kegiatan", href: "/berita" },
        { name: "Galeri", href: "/galeri" },
        { name: "Kontak", href: "/kontak" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

                {/* Logo & Nama Sekolah */}
                <Link href="/" className="flex items-center gap-3">
                    {data?.logo ? (
                        <div className="relative w-15 h-15 shrink-0">
                            <Image
                                src={urlForImage(data.logo).url()}
                                alt="Logo Sekolah"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ) : (
                        <div className="w-10 h-10 bg-navy-deep rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                            W
                        </div>
                    )}
                    <div className="block">
                        <h1 className="font-serif font-bold text-navy-deep text-sm sm:text-lg leading-tight line-clamp-2">
                            {data?.title || "SMK KH. A. Wahab Muhsin"}
                        </h1>
                        <p className="text-[10px] sm:text-xs text-gray-500">Tasikmalaya</p>
                    </div>
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden lg:flex items-center gap-6">
                    {menuItems.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-medium text-gray-600 hover:text-navy-mid transition-colors">
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Tombol Aksi & Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <Link href={data?.linkPPDB || "https://ppdb.smk-khawahabmuhsin.sch.id"} className="hidden md:inline-flex bg-gold hover:bg-yellow-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-md">
                        Info PPDB
                    </Link>
                    <Link href={data?.linkPortalPegawai || "https://pegawai.smk-khawahabmuhsin.sch.id"} className="hidden md:inline-flex bg-navy-deep hover:bg-navy-mid text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-md">
                        Portal Pegawai
                    </Link>

                    {/* Tombol Hamburger Mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:text-navy-deep transition-colors z-50 relative"
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Menu Dropdown Mobile */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col px-4 py-6 gap-4 animate-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
                                className="text-base font-semibold text-navy-deep hover:text-gold transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="h-px w-full bg-gray-100 my-2"></div>

                    {/* Tombol Aksi di Mobile Menu */}
                    <div className="flex flex-col gap-3">
                        <Link
                            href={data?.linkPPDB || "https://ppdb.smk-khawahabmuhsin.sch.id"}
                            className="bg-gold text-white text-center px-5 py-3 rounded-md text-sm font-semibold"
                        >
                            Info PPDB
                        </Link>
                        <Link
                            href={data?.linkPortalPegawai || "https://pegawai.smk-khawahabmuhsin.sch.id"}
                            className="bg-navy-deep text-white text-center px-5 py-3 rounded-md text-sm font-semibold"
                        >
                            Portal Pegawai
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}