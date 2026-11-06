// schemas/themeSettings.ts
import { defineField, defineType } from 'sanity'

const colorOptions = [
    { title: 'Putih Tulang', value: 'bg-bg-tulang text-gray-800' },
    { title: 'Putih Bersih', value: 'bg-white text-gray-800' },
    { title: 'Abu-abu Muda (Slate)', value: 'bg-slate-50 text-gray-800' },
    { title: 'Abu-abu Gelap', value: 'bg-slate-800 text-white' },
    { title: 'Biru Sangat Muda', value: 'bg-blue-50 text-gray-800' },
    { title: 'Biru Navy', value: 'bg-navy-deep text-white' },
    { title: 'Biru Terang', value: 'bg-navy-mid text-white' },
    { title: 'Emas', value: 'bg-gold text-white' },
    { title: 'Hijau Lembut', value: 'bg-emerald-50 text-gray-800' },
    { title: 'Hijau Tua', value: 'bg-emerald-800 text-white' },
    { title: 'Merah Muda Lembut', value: 'bg-rose-50 text-gray-800' },
    { title: 'Kuning Lembut', value: 'bg-amber-50 text-gray-800' },
    { title: 'Transparan', value: 'bg-transparent text-gray-800' },
]

export default defineType({
    name: 'themeSettings',
    title: 'Pengaturan Tampilan',
    type: 'document',
    fields: [
        defineField({ name: 'globalBgColor', title: 'Warna Latar Dasar Website (Jika Transparan)', type: 'string', options: { list: colorOptions }, initialValue: 'bg-bg-tulang text-gray-800' }),

        // --- SECTION BERANDA ---
        defineField({ name: 'welcomeBg', title: 'Warna: Sambutan', type: 'string', options: { list: colorOptions }, initialValue: 'bg-white text-gray-800' }),
        defineField({ name: 'welcomeTexture', title: 'Tekstur: Sambutan', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'welcomeOpacity', title: 'Intensitas Tekstur Sambutan (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'visionBg', title: 'Warna: Visi Misi', type: 'string', options: { list: colorOptions }, initialValue: 'bg-bg-tulang text-gray-800' }),
        defineField({ name: 'visionTexture', title: 'Tekstur: Visi Misi', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'visionOpacity', title: 'Intensitas Tekstur Visi Misi (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'programBg', title: 'Warna: Section Program', type: 'string', options: { list: colorOptions }, initialValue: 'bg-transparent text-gray-800' }),
        defineField({ name: 'programTexture', title: 'Tekstur: Section Program', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'programOpacity', title: 'Intensitas Tekstur Program (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'facilitiesBg', title: 'Warna: Section Fasilitas', type: 'string', options: { list: colorOptions }, initialValue: 'bg-navy-deep text-white' }),
        defineField({ name: 'facilitiesTexture', title: 'Tekstur: Fasilitas', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'facilitiesOpacity', title: 'Intensitas Tekstur Fasilitas (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 20 }),

        defineField({ name: 'agendaBg', title: 'Warna: Agenda', type: 'string', options: { list: colorOptions }, initialValue: 'bg-white text-gray-800' }),
        defineField({ name: 'agendaTexture', title: 'Tekstur: Agenda', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'agendaOpacity', title: 'Intensitas Tekstur Agenda (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'newsBg', title: 'Warna: Berita Terbaru', type: 'string', options: { list: colorOptions }, initialValue: 'bg-bg-tulang text-gray-800' }),
        defineField({ name: 'newsTexture', title: 'Tekstur: Berita Terbaru', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'newsOpacity', title: 'Intensitas Tekstur Berita (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'testimonialBg', title: 'Warna: Testimoni', type: 'string', options: { list: colorOptions }, initialValue: 'bg-white text-gray-800' }),
        defineField({ name: 'testimonialTexture', title: 'Tekstur: Testimoni', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'testimonialOpacity', title: 'Intensitas Tekstur Testimoni (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'ctaBg', title: 'Warna: PPDB', type: 'string', options: { list: colorOptions }, initialValue: 'bg-navy-mid text-white' }),
        defineField({ name: 'ctaTexture', title: 'Tekstur: PPDB', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'ctaOpacity', title: 'Intensitas Tekstur PPDB (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 30 }),

        // --- HALAMAN PENDUKUNG (Warna & Tekstur) ---
        defineField({ name: 'tentangBg', title: 'Warna Dasar: Halaman Tentang', type: 'string', options: { list: colorOptions }, initialValue: 'bg-bg-tulang text-gray-800' }),
        defineField({ name: 'tentangTexture', title: 'Tekstur: Halaman Tentang', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'tentangOpacity', title: 'Intensitas Tekstur Tentang (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'programPageBg', title: 'Warna Dasar: Halaman Program', type: 'string', options: { list: colorOptions }, initialValue: 'bg-bg-tulang text-gray-800' }),
        defineField({ name: 'programPageTexture', title: 'Tekstur: Halaman Program', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'programPageOpacity', title: 'Intensitas Tekstur Halaman Program (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'programSlugBg', title: 'Warna Dasar: Detail Program', type: 'string', options: { list: colorOptions }, initialValue: 'bg-bg-tulang text-gray-800' }),
        defineField({ name: 'programSlugTexture', title: 'Tekstur: Detail Program', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'programSlugOpacity', title: 'Intensitas Tekstur Detail Program (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'fasilitasPageBg', title: 'Warna Dasar: Halaman Fasilitas', type: 'string', options: { list: colorOptions }, initialValue: 'bg-navy-deep text-white' }),
        defineField({ name: 'fasilitasPageTexture', title: 'Tekstur: Halaman Fasilitas', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'fasilitasPageOpacity', title: 'Intensitas Tekstur Halaman Fasilitas (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'guruBg', title: 'Warna Dasar: Halaman Guru', type: 'string', options: { list: colorOptions }, initialValue: 'bg-bg-tulang text-gray-800' }),
        defineField({ name: 'guruTexture', title: 'Tekstur: Halaman Guru', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'guruOpacity', title: 'Intensitas Tekstur Guru (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'beritaBg', title: 'Warna Dasar: Halaman Berita', type: 'string', options: { list: colorOptions }, initialValue: 'bg-bg-tulang text-gray-800' }),
        defineField({ name: 'beritaTexture', title: 'Tekstur: Halaman Berita', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'beritaOpacity', title: 'Intensitas Tekstur Berita (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'beritaSlugBg', title: 'Warna Dasar: Detail Berita', type: 'string', options: { list: colorOptions }, initialValue: 'bg-white text-gray-800' }),
        defineField({ name: 'beritaSlugTexture', title: 'Tekstur: Detail Berita', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'beritaSlugOpacity', title: 'Intensitas Tekstur Detail Berita (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),

        defineField({ name: 'kontakBg', title: 'Warna Dasar: Halaman Kontak', type: 'string', options: { list: colorOptions }, initialValue: 'bg-bg-tulang text-gray-800' }),
        defineField({ name: 'kontakTexture', title: 'Tekstur: Halaman Kontak', type: 'reference', to: [{ type: 'texture' }] }),
        defineField({ name: 'kontakOpacity', title: 'Intensitas Tekstur Kontak (%)', type: 'number', options: { layout: 'slider' } as any, initialValue: 10 }),
    ],
})