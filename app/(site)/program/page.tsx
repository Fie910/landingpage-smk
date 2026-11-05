//app/(site)/program/page.tsx
import { client } from "@/sanity/lib/client"
import { programsQuery } from "@/lib/queries"
import Programs from "@/components/sections/Programs"

export const metadata = {
    title: "Program Keahlian | SMK KH. A. Wahab Muhsin",
    description: "Program keahlian unggulan di SMK KH. A. Wahab Muhsin.",
}

export default async function ProgramPage() {
    const programsData = await client.fetch(programsQuery)

    return (
        <div className="pt-20 pb-10 bg-bg-tulang min-h-screen">
            <Programs data={programsData} />
        </div>
    )
}