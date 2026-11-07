//sanity/schemaTypes/gallery.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'gallery',
    title: 'Galeri Kegiatan',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Nama Album/Kegiatan', type: 'string', validation: Rule => Rule.required() }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: Rule => Rule.required()
        }),
        defineField({ name: 'date', title: 'Tanggal Kegiatan', type: 'date' }),
        defineField({
            name: 'images',
            title: 'Foto-foto',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: Rule => Rule.required().min(1)
        }),
    ],
})