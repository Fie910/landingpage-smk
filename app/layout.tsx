//smk-khawahabmuhsin/app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'; // <-- 1. Tambahkan ini
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SMK KH. A. Wahab Muhsin",
  description: "Merawat Fitrah - Mengukir Karya. Sekolah berbasis Boarding School di Kabupaten Tasikmalaya.",
  openGraph: {
    title: "SMK KH. A. Wahab Muhsin",
    description: "Merawat Fitrah - Mengukir Karya. Sekolah berbasis Boarding School di Kabupaten Tasikmalaya.",
    url: "https://smk-khawahabmuhsin.sch.id",
    siteName: "SMK KH. A. Wahab Muhsin",
    images: [
      {
        url: "https://smk-khawahabmuhsin.sch.id/og-image.png", // <-- Ganti dengan URL gambar yang ingin ditampilkan
        width: 1200,
        height: 630,
        alt: "SMK KH. A. Wahab Muhsin",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}