import { getInstagramEmbedUrl } from "@/lib/instagram";

export default function InstagramEmbedCard({
  url,
  title,
}: {
  url: string;
  title?: string;
}) {
  const embedUrl = getInstagramEmbedUrl(url);
  if (!embedUrl) return null;

  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white">
      <iframe
        src={embedUrl}
        title={title || "Konten Instagram"}
        loading="lazy"
        allowFullScreen
        scrolling="no"
        allowTransparency
        className="w-full min-h-[540px] border-0 bg-white"
      />
      {title && (
        <div className="px-4 py-3 border-t border-gray-100 bg-white">
          <p className="text-sm font-medium text-navy-deep line-clamp-2">{title}</p>
        </div>
      )}
    </div>
  );
}
