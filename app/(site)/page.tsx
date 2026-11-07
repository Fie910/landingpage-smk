//smk-khawahabmuhsin/app/(site)/page.tsx
import { client } from "@/sanity/lib/client"
import { homepageQuery, programsQuery, facilitiesQuery, testimonialsQuery, siteSettingsQuery, latestNewsQuery, eventsQuery, themeSettingsQuery } from "@/lib/queries"
import Hero from "@/components/sections/Hero"
import QuickLinks from "@/components/sections/QuickLinks"
import Welcome from "@/components/sections/Welcome"
import VisionMission from "@/components/sections/VisionMission"
import Programs from "@/components/sections/Programs"
import Facilities from "@/components/sections/Facilities"
import LatestNews from "@/components/sections/LatestNews"
import Agenda from "@/components/sections/Agenda"
import Testimonials from "@/components/sections/Testimonials"
import ScrollReveal from "@/components/site/ScrollReveal";
//import CtaPpdb from "@/components/sections/CtaPpdb"

export const revalidate = 60

export default async function Home() {
  const [homeData, programsData, facilitiesData, testimonialsData, siteSettings, latestNewsData, eventsData, themeData] = await Promise.all([
    client.fetch(homepageQuery).catch(() => null),
    client.fetch(programsQuery).catch(() => []),
    client.fetch(facilitiesQuery).catch(() => []),
    client.fetch(testimonialsQuery).catch(() => []),
    client.fetch(siteSettingsQuery).catch(() => null),
    client.fetch(latestNewsQuery).catch(() => []),
    client.fetch(eventsQuery).catch(() => []),
    client.fetch(themeSettingsQuery).catch(() => null)
  ])

  return (
    <>
      <Hero data={homeData} />
      <QuickLinks linkPPDB={siteSettings?.linkPPDB} linkPegawai={siteSettings?.linkPortalPegawai} />

      {/* Bungkus setiap section dengan ScrollReveal */}
      <ScrollReveal>
        <Welcome data={homeData} bgClass={themeData?.welcomeBg} texture={themeData?.welcomeTexture} opacity={themeData?.welcomeOpacity} />
      </ScrollReveal>

      <ScrollReveal>
        <VisionMission data={homeData} bgClass={themeData?.visionBg} texture={themeData?.visionTexture} opacity={themeData?.visionOpacity} />
      </ScrollReveal>

      <ScrollReveal>
        <Programs data={programsData} bgClass={themeData?.programBg} texture={themeData?.programTexture} opacity={themeData?.programOpacity} />
      </ScrollReveal>

      <ScrollReveal>
        <Facilities data={facilitiesData} bgClass={themeData?.facilitiesBg} texture={themeData?.facilitiesTexture} opacity={themeData?.facilitiesOpacity} />
      </ScrollReveal>

      <ScrollReveal>
        <Agenda data={eventsData} bgClass={themeData?.agendaBg} texture={themeData?.agendaTexture} opacity={themeData?.agendaOpacity} />
      </ScrollReveal>

      <ScrollReveal>
        <LatestNews data={latestNewsData} bgClass={themeData?.newsBg} texture={themeData?.newsTexture} opacity={themeData?.newsOpacity} />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials data={testimonialsData} bgClass={themeData?.testimonialBg} texture={themeData?.testimonialTexture} opacity={themeData?.testimonialOpacity} />
      </ScrollReveal>

      {/*<ScrollReveal>*/}
      {/*<CtaPpdb linkPPDB={siteSettings?.linkPPDB} bgClass={themeData?.ctaBg} texture={themeData?.ctaTexture} opacity={themeData?.ctaOpacity} /> */}
      {/*</ScrollReveal>*/}

    </>
  )
}