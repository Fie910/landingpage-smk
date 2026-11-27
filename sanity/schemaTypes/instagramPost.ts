import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'instagramPost',
  title: 'Konten Instagram',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul / Caption Singkat',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link Post atau Reels Instagram',
      type: 'url',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return true
          const pattern = /^https?:\/\/(www\.)?instagram\.com\/(p|reels?)\/[A-Za-z0-9_-]+/i
          return pattern.test(value)
            ? true
            : 'URL harus berupa link Post (/p/) atau Reels (/reel/ atau /reels/) dari instagram.com'
        }),
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
    }),
  ],
})
