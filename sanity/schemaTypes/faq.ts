//sanity/schemaTypes/faq.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'faq',
    title: 'Pertanyaan Umum (FAQ)',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Pertanyaan',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'answer',
            title: 'Jawaban',
            type: 'text',
            rows: 4,
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'order',
            title: 'Urutan Tampil (1, 2, 3...)',
            type: 'number'
        }),
    ],
})