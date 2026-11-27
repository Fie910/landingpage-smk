// app/(site)/guru/page.tsx
import { sanityFetch } from "@/sanity/lib/live"
import { teachersQuery, themeSettingsQuery } from "@/lib/queries"
import Teachers from "@/components/sections/Teachers"
import PageBackground from "@/components/site/PageBackground"

export const metadata = {
    title: "Tenaga Pendidik | SMK KH. A. Wahab Muhsin",
    description: "Daftar guru dan tenaga pendidik profesional di SMK KH. A. Wahab Muhsin Tasikmalaya yang berdedikasi membimbing siswa.",
}
export const revalidate = 60

export default async function GuruPage() {
    const [{ data: teachersData }, { data: themeData }] = (await Promise.all([
        sanityFetch({ query: teachersQuery }),
        sanityFetch({ query: themeSettingsQuery })
    ])) as Array<{ data: any }>
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