//smk-khawahabmuhsin/sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'

import siteSettings from './siteSettings'
import homepage from './homepage'
import aboutPage from './aboutPage'
import program from './program'
import facility from './facility'
import teacher from './teacher'
import testimonial from './testimonial'
import news from './news'
import achievement from './achievement'
import event from './event'
import themeSettings from './themeSettings'
import texture from './texture'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singleton (Hanya 1 data)
    siteSettings,
    homepage,
    aboutPage,

    // Koleksi (Bisa banyak data)
    program,
    facility,
    teacher,
    testimonial,
    news,
    event,
    themeSettings,
    texture,

    // Disiapkan (Belum tampil di UI)
    achievement,
  ],
}