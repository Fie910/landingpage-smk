//sanity/schemaTypes/lead.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'lead',
    title: 'Minat Pendaftar (Lead)',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Nama Calon Siswa', type: 'string', readOnly: true }),
        defineField({ name: 'whatsapp', title: 'Nomor WhatsApp', type: 'string', readOnly: true }),
        defineField({ name: 'message', title: 'Pesan / Pertanyaan', type: 'text', readOnly: true }),
        defineField({ name: 'status', title: 'Status Tindak Lanjut', type: 'string', options: { list: ['Baru', 'Sudah Dihubungi', 'Batal'] }, initialValue: 'Baru' }),
        defineField({ name: 'createdAt', title: 'Waktu Masuk', type: 'datetime', readOnly: true }),
    ],
    preview: {
        select: { title: 'name', subtitle: 'whatsapp' }
    }
})