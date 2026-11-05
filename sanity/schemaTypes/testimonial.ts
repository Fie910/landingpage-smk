//smk-khawahabmuhsin/sanity/schemaTypes/testimonial.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimoni',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Nama', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'role', title: 'Peran (misal: Alumni 2020, Orang Tua Siswa)', type: 'string' }),
        defineField({ name: 'quote', title: 'Kutipan Testimoni', type: 'text', rows: 4 }),
        defineField({ name: 'image', title: 'Foto (Opsional)', type: 'image' }),
    ],
})