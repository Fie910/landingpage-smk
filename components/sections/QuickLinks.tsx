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
        <section className="bg-white py-8 border-b border-gray-100 relative z-20 -mt-10 mx-4 md:mx-auto md:max-w-5xl rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
                {links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-bg-tulang transition-colors group">
                        <div className={`w-12 h-12 ${link.color} text-white rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                            <link.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-semibold text-navy-deep text-center">{link.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}