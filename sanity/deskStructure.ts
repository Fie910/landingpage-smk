//smk-khawahabmuhsin/sanity/structure.ts
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Konten Website')
    .items([
      S.listItem()
        .title('⚙️ Identitas Sekolah')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      S.listItem()
        .title('🏠 Pengaturan Beranda')
        .id('homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),

      S.listItem()
        .title('📖 Halaman Tentang')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),

      S.documentTypeListItem('texture').title('🖼️ Gudang Tekstur'),

      S.listItem()
        .title('🎨 Pengaturan Tampilan')
        .id('themeSettings')
        .child(S.document().schemaType('themeSettings').documentId('themeSettings')),

      S.divider(),

      S.documentTypeListItem('program').title('🎓 Program Keahlian'),
      S.documentTypeListItem('facility').title('🏫 Fasilitas'),
      S.documentTypeListItem('teacher').title('👨‍🏫 Tenaga Pendidik'),
      S.documentTypeListItem('testimonial').title('💬 Testimoni'),
      S.documentTypeListItem('news').title('📰 Berita'),
      S.documentTypeListItem('event').title('📅 Agenda & Kalender'),

      S.divider(),

      // Folder khusus untuk yang belum ditampilkan di website
      S.listItem()
        .title('📦 Cadangan (Belum Tampil)')
        .child(
          S.list()
            .title('Cadangan')
            .items([
              S.documentTypeListItem('achievement').title('🏆 Data Prestasi')
            ])
        ),
    ])