// components/site/PageBackground.tsx
import { urlForImage } from "@/sanity/lib/image"

export default function PageBackground({ texture, opacity }: { texture?: any, opacity?: number }) {
    if (!texture?.image) return null;

    return (
        <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                backgroundImage: `url(${urlForImage(texture.image).url()})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: (opacity || 10) / 100
            }}
        />
    )
}