//app/(site)/fasilitas/page.tsx
import { sanityFetch } from "@/sanity/lib/live"
import { facilitiesQuery, themeSettingsQuery } from "@/lib/queries"
import Facilities from "@/components/sections/Facilities"
import PageBackground from "@/components/site/PageBackground"

export const metadata = { title: "Fasilitas | SMK KH. A. Wahab Muhsin" }
export const revalidate = 60

export default async function FasilitasPage() {
    const [{ data: facilitiesData }, { data: themeData }] = (await Promise.all([
        sanityFetch({ query: facilitiesQuery }),
        sanityFetch({ query: themeSettingsQuery })
    ])) as Array<{ data: any }>

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