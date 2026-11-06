//app/(site)/program/page.tsx
import { client } from "@/sanity/lib/client"
import { programsQuery, themeSettingsQuery } from "@/lib/queries"
import Programs from "@/components/sections/Programs"
import PageBackground from "@/components/site/PageBackground"

export const metadata = { title: "Program Keahlian | SMK KH. A. Wahab Muhsin" }
export const revalidate = 60

export default async function ProgramPage() {
    const [programsData, themeData] = await Promise.all([
        client.fetch(programsQuery),
        client.fetch(themeSettingsQuery)
    ])

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