// components/sections/QuickLinks.tsx
import Link from "next/link"
import { FileText, Users, BookOpen, PhoneCall } from "lucide-react"

export default function QuickLinks({ linkPPDB, linkPegawai }: { linkPPDB?: string, linkPegawai?: string }) {
    const links = [
        { name: "Info PPDB", icon: FileText, href: linkPPDB || "/kontak", color: "bg-gold" },
        { name: "Portal Pegawai", icon: Users, href: linkPegawai || "/kontak", color: "bg-navy-mid" },
        { name: "Program", icon: BookOpen, href: "/program", color: "bg-navy-deep" },
        { name: "Kontak", icon: PhoneCall, href: "/kontak", color: "bg-gray-700" },
    ]

    return (
        // Efek Glassmorphism di sini
        <section className="bg-white/70 backdrop-blur-xl border border-white/40 py-8 relative z-20 -mt-12 mx-4 md:mx-auto md:max-w-5xl rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
                {links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-white/60 transition-all duration-300 group">
                        <div className={`w-12 h-12 ${link.color} text-white rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform`}>
                            <link.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-bold text-navy-deep text-center">{link.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}