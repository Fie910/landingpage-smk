//smk-khawahabmuhsin/app/(site)/page.tsx
import { client } from "@/sanity/lib/client"
import {
  homepageQuery,
  programsQuery,
  facilitiesQuery,
  testimonialsQuery,
  siteSettingsQuery,
  latestNewsQuery, eventsQuery
} from "@/lib/queries"
import Hero from "@/components/sections/Hero"
import QuickLinks from "@/components/sections/QuickLinks"
import Welcome from "@/components/sections/Welcome"
import VisionMission from "@/components/sections/VisionMission"
import Programs from "@/components/sections/Programs"
import Facilities from "@/components/sections/Facilities"
import LatestNews from "@/components/sections/LatestNews"
import Agenda from "@/components/sections/Agenda"
import Testimonials from "@/components/sections/Testimonials"
//import CtaPpdb from "@/components/sections/CtaPpdb"

export const revalidate = 60

export default async function Home() {
  // Ambil semua data secara bersamaan dengan pengaman .catch()
  const [homeData, programsData, facilitiesData, testimonialsData, siteSettings, latestNewsData, eventsData] = await Promise.all([
    client.fetch(homepageQuery).catch(() => null),
    client.fetch(programsQuery).catch(() => []),
    client.fetch(facilitiesQuery).catch(() => []),
    client.fetch(testimonialsQuery).catch(() => []),
    client.fetch(siteSettingsQuery).catch(() => null),
    client.fetch(latestNewsQuery).catch(() => []),
    client.fetch(eventsQuery).catch(() => [])
  ])

  return (
    <>
      <Hero data={homeData} />
      <QuickLinks linkPPDB={siteSettings?.linkPPDB} linkPegawai={siteSettings?.linkPortalPegawai} />
      <Welcome data={homeData} />
      <VisionMission data={homeData} />
      <Programs data={programsData} />
      <Facilities data={facilitiesData} />
      <Agenda data={eventsData} />
      <LatestNews data={latestNewsData} />
      <Testimonials data={testimonialsData} />
      {/* <CtaPpdb linkPPDB={siteSettings?.linkPPDB} /> */}
    </>
  )
}