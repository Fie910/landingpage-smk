//app/(site)/program/page.tsx
import { sanityFetch } from "@/sanity/lib/live"
import { programsQuery, themeSettingsQuery } from "@/lib/queries"
import Programs from "@/components/sections/Programs"
import PageBackground from "@/components/site/PageBackground"

export const metadata = {
    title: "Program Keahlian | SMK KH. A. Wahab Muhsin",
    description: "Pilihan program keahlian dan jurusan unggulan di SMK KH. A. Wahab Muhsin Tasikmalaya yang memadukan kompetensi vokasi dan nilai pesantren.",
}
export const revalidate = 60

export default async function ProgramPage() {
    const [{ data: programsData }, { data: themeData }] = (await Promise.all([
        sanityFetch({ query: programsQuery }),
        sanityFetch({ query: themeSettingsQuery })
    ])) as Array<{ data: any }>

    const bg = themeData?.programPageBg || "bg-bg-tulang text-gray-800";

    return (
        <div className={`pt-20 pb-10 min-h-screen relative overflow-hidden ${bg}`}>
            <PageBackground texture={themeData?.programPageTexture} opacity={themeData?.programPageOpacity} />
            <div className="relative z-10">
                <Programs data={programsData} />
            </div>
        </div>
    )
}