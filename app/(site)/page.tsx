//smk-khawahabmuhsin/app/(site)/page.tsx
import { sanityFetch } from "@/sanity/lib/live"
import { homePageBundleQuery } from "@/lib/queries"
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
import Faq from "@/components/sections/Faq"
import InstagramFeed from "@/components/sections/InstagramFeed"
import LeadForm from "@/components/sections/LeadForm"
//import CtaPpdb from "@/components/sections/CtaPpdb"

export const revalidate = 60

export default async function Home() {
  const { data: bundle } = (await sanityFetch({ query: homePageBundleQuery }).catch(() => ({ data: null }))) as { data: any }

  const homeData = bundle?.homepage ?? null
  const programsData = bundle?.programs ?? []
  const facilitiesData = bundle?.facilities ?? []
  const testimonialsData = bundle?.testimonials ?? []
  const siteSettings = bundle?.siteSettings ?? null
  const latestNewsData = bundle?.latestNews ?? []
  const eventsData = bundle?.events ?? []
  const themeData = bundle?.theme ?? null
  const faqData = bundle?.faqs ?? []
  const instagramData = bundle?.instagramPosts ?? []

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
        <Faq data={faqData} bgClass={themeData?.faqBg} texture={themeData?.faqTexture} opacity={themeData?.faqOpacity} />
      </ScrollReveal>

      <ScrollReveal>
        <InstagramFeed data={instagramData} instagramUrl={siteSettings?.instagram} bgClass={themeData?.instagramBg} texture={themeData?.instagramTexture} opacity={themeData?.instagramOpacity} />
      </ScrollReveal>

      <ScrollReveal>
        <LatestNews data={latestNewsData} bgClass={themeData?.newsBg} texture={themeData?.newsTexture} opacity={themeData?.newsOpacity} />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials data={testimonialsData} bgClass={themeData?.testimonialBg} texture={themeData?.testimonialTexture} opacity={themeData?.testimonialOpacity} />
      </ScrollReveal>

      <ScrollReveal>
        <LeadForm
          bgClass={themeData?.ctaBg || "bg-navy-deep"}
          texture={themeData?.ctaTexture}
          opacity={themeData?.ctaOpacity}
          whatsappNumber={siteSettings?.whatsapp}
        />
      </ScrollReveal>

      {/*<ScrollReveal>*/}
      {/*<CtaPpdb linkPPDB={siteSettings?.linkPPDB} bgClass={themeData?.ctaBg} texture={themeData?.ctaTexture} opacity={themeData?.ctaOpacity} /> */}
      {/*</ScrollReveal>*/}

    </>
  )
}