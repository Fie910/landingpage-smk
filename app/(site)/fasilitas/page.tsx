//app/(site)/fasilitas/page.tsx
import { client } from "@/sanity/lib/client"
import { facilitiesQuery, themeSettingsQuery } from "@/lib/queries"
import Facilities from "@/components/sections/Facilities"
import PageBackground from "@/components/site/PageBackground"

export const metadata = { title: "Fasilitas | SMK KH. A. Wahab Muhsin" }
export const revalidate = 60

export default async function FasilitasPage() {
    const [facilitiesData, themeData] = await Promise.all([
        client.fetch(facilitiesQuery),
        client.fetch(themeSettingsQuery)
    ])

    const bg = themeData?.fasilitasPageBg || "bg-navy-deep text-white";

    return (
        <div className={`pt-20 pb-10 min-h-screen relative overflow-hidden ${bg}`}>
            <PageBackground texture={themeData?.fasilitasPageTexture} opacity={themeData?.fasilitasPageOpacity} />
            <div className="relative z-10">
                <Facilities data={facilitiesData} /> {/* bgClass tidak perlu diteruskan di sini karena sudah ada di parent div */}
            </div>
        </div>
    )
}