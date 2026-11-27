import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import InstagramEmbedCard from "@/components/site/InstagramEmbedCard";

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: unknown; alt?: string } }) => {
      if (!value?.asset) return null;
      return (
        <div className="my-8 relative w-full overflow-hidden rounded-xl">
          <Image
            src={urlForImage(value).width(1000).quality(85).url()}
            alt={value.alt || "Gambar ilustrasi"}
            width={1000}
            height={650}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      );
    },
    instagramEmbed: ({ value }: { value: { url: string; caption?: string } }) => (
      <div className="my-8 not-prose max-w-md mx-auto">
        <InstagramEmbedCard url={value.url} title={value.caption} />
      </div>
    ),
  },
};

export default function RichText({ value }: { value: any }) {
  if (!value) return null;
  return <PortableText value={value} components={portableTextComponents} />;
}
