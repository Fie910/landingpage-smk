// app/(site)/guru/page.tsx
import { client } from "@/sanity/lib/client"
import { teachersQuery, themeSettingsQuery } from "@/lib/queries"
import Teachers from "@/components/sections/Teachers"
import PageBackground from "@/components/site/PageBackground"

export const metadata = { title: "Tenaga Pendidik | SMK KH. A. Wahab Muhsin" }
export const revalidate = 60

export default async function GuruPage() {
    const [teachersData, themeData] = await Promise.all([
        client.fetch(teachersQuery),
        client.fetch(themeSettingsQuery)
    ])
    // PERBAIKAN: guruBg
    const bg = themeData?.guruBg || "bg-bg-tulang text-gray-800"

    return (
        // PERBAIKAN: Gunakan backtick (`) bukan kutip biasa (").
        <div className={`pt-10 min-h-screen relative overflow-hidden ${bg}`}>
            <PageBackground texture={themeData?.guruTexture} opacity={themeData?.guruOpacity} />
            <div className="relative z-10">
                <div className="bg-navy-deep text-white py-16 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold">Tenaga Pendidik</h1>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto px-4">Para pendidik profesional yang berdedikasi mendampingi putra-putri Anda.</p>
                </div>
                <Teachers
                    data={teachersData}
                    bgClass="bg-transparent"
                />
            </div>
        </div>
    )
}