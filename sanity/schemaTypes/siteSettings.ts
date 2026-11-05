//smk-khawahabmuhsin/sanity/schemaTypes/siteSettings.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Identitas Sekolah',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Nama Sekolah', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'logo', title: 'Logo Sekolah', type: 'image' }),
        defineField({ name: 'address', title: 'Alamat Lengkap', type: 'text', rows: 3 }),
        defineField({ name: 'phone', title: 'Nomor Telepon', type: 'string' }),
        defineField({ name: 'whatsapp', title: 'Nomor WhatsApp (misal: 62812...)', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'mapsUrl', title: 'Link Embed Google Maps (src iframe)', type: 'url' }),
        defineField({ name: 'linkPortalPegawai', title: 'URL Portal Pegawai', type: 'url' }),
        defineField({ name: 'linkPPDB', title: 'URL PPDB Online', type: 'url' }),
    ],
})