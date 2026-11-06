// sanity/schemaTypes/event.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Agenda & Kalender',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Nama Kegiatan', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'date', title: 'Tanggal & Waktu Mulai', type: 'datetime', validation: Rule => Rule.required() }),
        defineField({ name: 'endDate', title: 'Tanggal & Waktu Selesai (Opsional)', type: 'datetime', description: 'Jika diisi, agenda akan otomatis hilang setelah waktu ini lewat.' }),
        defineField({ name: 'location', title: 'Lokasi (Opsional)', type: 'string' }),
        defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'text', rows: 3 }),
    ],
})