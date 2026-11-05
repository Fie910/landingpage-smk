// lib/queries.ts
import { groq } from 'next-sanity'

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    heroTitle,
    heroSubtitle,
    heroImage,
    welcomeTitle,
    welcomeText,
    headmasterName,
    headmasterPhoto,
    vision,
    missions
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    history,
    coreValues,
    image,
    videoUrl
  }
`

export const programsQuery = groq`
  *[_type == "program"] | order(order asc) {
    _id,
    name,
    slug, 
    description,
    image
  }
`

export const singleProgramQuery = groq`
  *[_type == "program" && slug.current == $slug][0] {
    name,
    description,
    longDescription,
    image,
    videoUrl
  }
`

export const facilitiesQuery = groq`
  *[_type == "facility"] | order(order asc) {
    _id,
    name,
    description,
    image
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonial"] {
    _id,
    name,
    role,
    quote,
    image
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    tagline,
    logo,
    address,
    phone,
    whatsapp,
    email,
    mapsUrl,
    linkPortalPegawai,
    linkPPDB
  }
`

export const teachersQuery = groq`
  *[_type == "teacher"] | order(order asc) {
    _id,
    name,
    role,
    image
  }
`

export const allNewsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    coverImage
  }
`

export const singleNewsQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    title,
    publishedAt,
    coverImage,
    videoUrl,
    body
  }
`

export const latestNewsQuery = groq`
  *[_type == "news"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    coverImage
  }
`

export const eventsQuery = groq`
  *[_type == "event"] | order(date asc)[0...4] {
    _id,
    title,
    date,
    location,
    description
  }
`