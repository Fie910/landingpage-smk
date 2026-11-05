//smk-khawahabmuhsin/sanity/schemaTypes/achievement.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'achievement',
    title: 'Prestasi',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Nama Prestasi', type: 'string' }),
        defineField({ name: 'year', title: 'Tahun', type: 'string' }),
        defineField({ name: 'description', title: 'Keterangan', type: 'text' }),
    ],
})