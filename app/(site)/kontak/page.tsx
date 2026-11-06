// app/(site)/kontak/page.tsx
import { client } from "@/sanity/lib/client"
import { siteSettingsQuery, themeSettingsQuery } from "@/lib/queries"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import PageBackground from "@/components/site/PageBackground"

export const metadata = { title: "Kontak | SMK KH. A. Wahab Muhsin" }
export const revalidate = 60

export default async function KontakPage() {
    const [data, themeData] = await Promise.all([
        client.fetch(siteSettingsQuery),
        client.fetch(themeSettingsQuery)
    ])
    // PERBAIKAN: kontakBg
    const bg = themeData?.kontakBg || "bg-bg-tulang text-gray-800"

    return (
        // PERBAIKAN: Gunakan backtick
        <div className={`pt-10 min-h-screen relative overflow-hidden ${bg}`}>
            <PageBackground texture={themeData?.kontakTexture} opacity={themeData?.kontakOpacity} />
            <div className="relative z-10">
                <div className="bg-navy-deep text-white py-16 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold">Hubungi Kami</h1>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto px-4">Kami siap membantu menjawab pertanyaan Anda seputar pendaftaran dan informasi sekolah.</p>
                </div>
                <div className="container mx-auto px-4 md:px-8 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="font-serif text-2xl font-bold text-navy-deep mb-6">Informasi Kontak</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-bg-tulang rounded-full flex items-center justify-center shrink-0"><MapPin className="w-6 h-6 text-navy-mid" /></div>
                                    <div><h3 className="font-bold text-gray-800">Alamat</h3><p className="text-gray-600 mt-1">{data?.address || "Belum diatur"}</p></div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-bg-tulang rounded-full flex items-center justify-center shrink-0"><Phone className="w-6 h-6 text-navy-mid" /></div>
                                    <div><h3 className="font-bold text-gray-800">Telepon</h3><p className="text-gray-600 mt-1">{data?.phone || "Belum diatur"}</p></div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-bg-tulang rounded-full flex items-center justify-center shrink-0"><Mail className="w-6 h-6 text-navy-mid" /></div>
                                    <div><h3 className="font-bold text-gray-800">Email</h3><p className="text-gray-600 mt-1">{data?.email || "Belum diatur"}</p></div>
                                </div>
                            </div>
                            {data?.whatsapp && (
                                <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition-colors">
                                    <MessageCircle className="w-5 h-5" /> Hubungi via WhatsApp
                                </a>
                            )}
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 h-full min-h-100">
                            {data?.mapsUrl ? (
                                <iframe src={data.mapsUrl} width="100%" height="100%" className="rounded-xl min-h-100" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">Peta belum diatur di CMS.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}