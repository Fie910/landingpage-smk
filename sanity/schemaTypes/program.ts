//sanity/schemaTypes/program.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'program',
    title: 'Program Keahlian',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Nama Jurusan', type: 'string', validation: Rule => Rule.required() }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: Rule => Rule.required()
        }),
        defineField({ name: 'description', title: 'Deskripsi Singkat (Untuk di Beranda)', type: 'text', rows: 3 }),
        defineField({ name: 'longDescription', title: 'Deskripsi Lengkap (Untuk Halaman Detail)', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
        defineField({ name: 'image', title: 'Foto Utama Jurusan', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'videoUrl', title: 'Link Video YouTube (Opsional)', type: 'url' }),
        defineField({ name: 'order', title: 'Urutan Tampil (1, 2, 3...)', type: 'number' }),
    ],
})