// sanity/schemaTypes/texture.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'texture',
    title: 'Gudang Tekstur',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Nama Tekstur', type: 'string', validation: Rule => Rule.required() }),
        defineField({
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: { list: ['Islami', 'Alam (Nature)', 'Abstrak', 'Lainnya'] }
        }),
        defineField({ name: 'image', title: 'Gambar Tekstur', type: 'image', validation: Rule => Rule.required() }),
    ],
})