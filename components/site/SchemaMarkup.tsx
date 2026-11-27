//components/site/SchemaMarkup.tsx
import { urlForImage } from "@/sanity/lib/image";

export default function SchemaMarkup({ data }: { data?: any }) {
    if (!data) return null;

    const sameAs = [data.instagram, data.youtube, data.facebook].filter(
        (url): url is string => typeof url === "string" && url.trim().length > 0
    );

    const schemaData = {
        "@context": "https://schema.org",
        "@type": ["EducationalOrganization", "HighSchool"],
        "name": data.title || "SMK KH. A. Wahab Muhsin",
        "alternateName": ["SMK KH A Wahab Muhsin", "SMK Wahab Muhsin Sukahideng"],
        "url": "https://smk-khawahabmuhsin.sch.id",
        "logo": data.logo ? urlForImage(data.logo).url() : "",
        "email": data.email || "",
        "description": data.tagline || "Sekolah berbasis Pesantren di Kabupaten Tasikmalaya - Sukahideng.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address || "Sukahideng",
            "addressLocality": "Tasikmalaya",
            "addressRegion": "Jawa Barat",
            "addressCountry": "ID"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": data.phone || "",
            "contactType": "customer service",
            "areaServed": "ID",
            "availableLanguage": ["Indonesian"]
        },
        "sameAs": sameAs
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}