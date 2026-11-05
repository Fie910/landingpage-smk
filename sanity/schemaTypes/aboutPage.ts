//sanity/schemaTypes/aboutPage.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'Halaman Tentang',
    type: 'document',
    fields: [
        defineField({ name: 'history', title: 'Sejarah Sekolah', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
        defineField({ name: 'coreValues', title: 'Nilai-Nilai Inti (Core Values)', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'image', title: 'Foto Pendukung (Opsional)', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'videoUrl', title: 'Link Video Profil YouTube (Opsional)', type: 'url' }),
    ],
})