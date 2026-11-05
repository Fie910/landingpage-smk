//smk-khawahabmuhsin/sanity/schemaTypes/homepage.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homepage',
    title: 'Pengaturan Beranda',
    type: 'document',
    fields: [
        defineField({ name: 'heroTitle', title: 'Judul Utama (Hero)', type: 'string' }),
        defineField({ name: 'heroSubtitle', title: 'Sub-judul (Hero)', type: 'text', rows: 2 }),
        defineField({ name: 'heroImage', title: 'Gambar Latar (Hero)', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'welcomeTitle', title: 'Judul Sambutan', type: 'string' }),
        defineField({ name: 'welcomeText', title: 'Teks Sambutan', type: 'array', of: [{ type: 'block' }] }),
        defineField({ name: 'headmasterName', title: 'Nama Kepala Sekolah', type: 'string' }),
        defineField({ name: 'headmasterPhoto', title: 'Foto Kepala Sekolah', type: 'image' }),
        defineField({ name: 'vision', title: 'Visi', type: 'text', rows: 3 }),
        defineField({ name: 'missions', title: 'Misi (Poin-poin)', type: 'array', of: [{ type: 'string' }] }),
    ],
})