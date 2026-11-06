//components/site/SchemaMarkup.tsx
import { urlForImage } from "@/sanity/lib/image";

export default function SchemaMarkup({ data }: { data?: any }) {
    if (!data) return null;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": data.title || "SMK KH. A. Wahab Muhsin",
        "url": "https://smk-khawahabmuhsin.sch.id",
        "logo": data.logo ? urlForImage(data.logo).url() : "",
        "description": data.tagline || "Sekolah berbasis Boarding School di Kabupaten Tasikmalaya - Sukahideng.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address || "Tasikmalaya",
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
        "sameAs": [
            // Anda bisa menambahkan link Instagram/Facebook di sini nanti jika sudah ada di Sanity
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}