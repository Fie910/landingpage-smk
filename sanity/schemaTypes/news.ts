//smk-khawahabmuhsin/sanity/schemaTypes/news.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'news',
    title: 'Berita',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Judul Berita', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
        defineField({ name: 'publishedAt', title: 'Tanggal Publikasi', type: 'datetime' }),
        defineField({ name: 'coverImage', title: 'Gambar Sampul', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'videoUrl', title: 'Link Video YouTube (Opsional)', type: 'url' }), // <-- TAMBAHKAN INI
        defineField({
            name: 'body',
            title: 'Isi Berita',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'image' },
                {
                    type: 'object',
                    name: 'instagramEmbed',
                    title: 'Embed Instagram (Post/Reels)',
                    fields: [
                        {
                            name: 'url',
                            title: 'Link Post/Reels Instagram',
                            type: 'url',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'caption',
                            title: 'Keterangan (Opsional)',
                            type: 'string',
                        },
                    ],
                },
            ],
        }),
    ],
})
