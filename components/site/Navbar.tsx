//components/site/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image"

export default function Navbar({ data }: { data?: any }) {
    const menuItems = [
        { name: "Beranda", href: "/" },
        { name: "Tentang", href: "/tentang" },
        { name: "Program", href: "/program" },
        { name: "Fasilitas", href: "/fasilitas" },
        { name: "Guru", href: "/guru" },
        { name: "Berita & Kegiatan", href: "/berita" },
        { name: "Kontak", href: "/kontak" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">

                    {/* --- BAGIAN LOGO YANG DIPERBARUI --- */}
                    {data?.logo ? (
                        <div className="relative w-18 h-18 shrink-0">
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
                    {/* ----------------------------------- */}

                    <div className="hidden sm:block">
                        <h1 className="font-serif font-bold text-navy-deep text-lg leading-tight">
                            {data?.title || "SMK KH. A. Wahab Muhsin"}
                        </h1>
                        <p className="text-xs text-gray-500">Sukahideng - Tasikmalaya</p>
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-6">
                    {menuItems.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-medium text-gray-600 hover:text-navy-mid transition-colors">
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link href={data?.linkPPDB || "https://ppdb.smk-khawahabmuhsin.sch.id"} className="hidden md:inline-flex bg-gold hover:bg-yellow-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-md">
                        Info PPDB
                    </Link>
                    <Link href={data?.linkPortalPegawai || "https://pegawai.smk-khawahabmuhsin.sch.id"} className="hidden md:inline-flex bg-navy-deep hover:bg-navy-mid text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-md">
                        Portal Pegawai
                    </Link>
                    <button className="lg:hidden p-2 text-gray-600 hover:text-navy-deep">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}