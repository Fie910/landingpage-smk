//smk-khawahabmuhsin/app/(site)/layout.tsx
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import MobileBottomNav from "@/components/site/MobileBottomNav"; // <-- Import
import SchemaMarkup from "@/components/site/SchemaMarkup"; // <-- Import
import { siteSettingsQuery, themeSettingsQuery } from "@/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
    const [{ data: siteSettings }, { data: theme }] = (await Promise.all([
        sanityFetch({ query: siteSettingsQuery }),
        sanityFetch({ query: themeSettingsQuery })
    ])) as Array<{ data: any }>;

    const globalBgColor = theme?.globalBgColor || 'bg-bg-tulang';
    const bgImageUrl = theme?.globalBgImage ? urlForImage(theme.globalBgImage).url() : null;

    return (
        <div
            className={`flex flex-col min-h-screen ${bgImageUrl ? '' : globalBgColor}`}
            style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' } : {}}
        >
            {/* Schema Markup untuk SEO Google */}
            <SchemaMarkup data={siteSettings} />

            <Navbar data={siteSettings} />

            {/* Tambahkan pb-16 md:pb-0 agar konten bawah tidak tertutup BottomNav */}
            <main className="grow pb-16 md:pb-0">
                {children}
            </main>

            <Footer data={siteSettings} />

            {/* Bottom Navbar (Hanya muncul di HP) */}
            <MobileBottomNav data={siteSettings} />

            <SanityLive />
            {(await draftMode()).isEnabled && <VisualEditing />}
        </div>
    );
}