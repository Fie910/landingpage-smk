//app/(site)/fasilitas/page.tsx
import { client } from "@/sanity/lib/client"
import { facilitiesQuery } from "@/lib/queries"
import Facilities from "@/components/sections/Facilities"

export const metadata = {
    title: "Fasilitas | SMK KH. A. Wahab Muhsin",
    description: "Fasilitas penunjang pembelajaran dan asrama di SMK KH. A. Wahab Muhsin.",
}

export default async function FasilitasPage() {
    const facilitiesData = await client.fetch(facilitiesQuery)

    return (
        <div className="pt-20 pb-10 bg-navy-deep min-h-screen">
            <Facilities data={facilitiesData} />
        </div>
    )
}