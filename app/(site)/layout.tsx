//smk-khawahabmuhsin/app/(site)/layout.tsx
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery, themeSettingsQuery } from "@/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
    const [siteSettings, theme] = await Promise.all([
        client.fetch(siteSettingsQuery),
        client.fetch(themeSettingsQuery)
    ]);

    const globalBgColor = theme?.globalBgColor || 'bg-bg-tulang';
    const bgImageUrl = theme?.globalBgImage ? urlForImage(theme.globalBgImage).url() : null;

    return (
        <div
            className={`flex flex-col min-h-screen ${bgImageUrl ? '' : globalBgColor}`}
            style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' } : {}}
        >
            <Navbar data={siteSettings} />
            <main className="grow">
                {children}
            </main>
            <Footer data={siteSettings} />
        </div>
    );
}