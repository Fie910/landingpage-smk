// sanity/schemaTypes/event.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Agenda & Kalender',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Nama Kegiatan', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'date', title: 'Tanggal Mulai', type: 'datetime', validation: Rule => Rule.required() }),
        defineField({ name: 'location', title: 'Lokasi (Opsional)', type: 'string' }),
        defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'text', rows: 3 }),
    ],
})