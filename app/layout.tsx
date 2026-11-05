//smk-khawahabmuhsin/app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}