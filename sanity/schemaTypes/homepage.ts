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
        defineField({ name: 'headmasterPhoto', title: 'Foto Kepala Sekolah', type: 'image', options: { hotspot: true } }),
        defineField({
            name: 'headmasterPhotoSize',
            title: 'Ukuran Bingkai Foto Kepala Sekolah',
            type: 'string',
            initialValue: 'md',
            options: {
                list: [
                    { title: 'Kecil (Ringkas)', value: 'sm' },
                    { title: 'Sedang (Standar)', value: 'md' },
                    { title: 'Besar', value: 'lg' },
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'headmasterPhotoPosition',
            title: 'Posisi Tata Letak Foto',
            type: 'string',
            initialValue: 'left',
            options: {
                list: [
                    { title: 'Di Samping Kiri Teks', value: 'left' },
                    { title: 'Di Samping Kanan Teks', value: 'right' },
                    { title: 'Di Atas Tengah (Potret)', value: 'top' },
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'headmasterPhotoAlign',
            title: 'Fokus Posisi Gambar (Crop)',
            type: 'string',
            initialValue: 'object-top',
            options: {
                list: [
                    { title: 'Fokus Atas / Kepala', value: 'object-top' },
                    { title: 'Fokus Tengah', value: 'object-center' },
                    { title: 'Fokus Bawah', value: 'object-bottom' },
                ],
            },
        }),
        defineField({ name: 'vision', title: 'Visi', type: 'text', rows: 3 }),
        defineField({ name: 'missions', title: 'Misi (Poin-poin)', type: 'array', of: [{ type: 'string' }] }),
    ],
})