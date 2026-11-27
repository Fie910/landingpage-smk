import PageBackground from "@/components/site/PageBackground";
import InstagramEmbedCard from "@/components/site/InstagramEmbedCard";

export default function InstagramFeed({
  data,
  instagramUrl,
  bgClass,
  texture,
  opacity,
}: {
  data: any[];
  instagramUrl?: string;
  bgClass?: string;
  texture?: any;
  opacity?: number;
}) {
  if (!data || data.length === 0) return null;
  const bg = bgClass || "bg-white text-gray-800";

  return (
    <section className={`py-20 relative overflow-hidden ${bg}`}>
      <PageBackground texture={texture} opacity={opacity} />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-deep mb-4">
            Sorotan Instagram
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <InstagramEmbedCard key={item._id} url={item.url} title={item.title} />
          ))}
        </div>

        {instagramUrl && (
          <div className="text-center mt-12">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-navy-deep hover:bg-navy-mid text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-md"
            >
              Ikuti Instagram Kami
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
