//smk-khawahabmuhsin/sanity/schemaTypes/teacher.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'teacher',
    title: 'Tenaga Pendidik',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Nama Lengkap & Gelar', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'role', title: 'Jabatan / Mata Pelajaran', type: 'string' }),
        defineField({ name: 'image', title: 'Foto', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'order', title: 'Urutan Tampil', type: 'number' }),
    ],
})