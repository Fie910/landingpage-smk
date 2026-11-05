//smk-khawahabmuhsin/sanity/schemaTypes/facility.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'facility',
    title: 'Fasilitas',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Nama Fasilitas', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'string' }),
        defineField({ name: 'image', title: 'Foto Fasilitas', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'order', title: 'Urutan Tampil', type: 'number' }),
    ],
})