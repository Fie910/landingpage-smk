//smk-khawahabmuhsin/app/(site)/layout.tsx
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/lib/queries";

export default async function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const siteSettings = await client.fetch(siteSettingsQuery);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar data={siteSettings} />
            <main className="grow">
                {children}
            </main>
            <Footer data={siteSettings} />
        </div>
    );
}