export function getInstagramEmbedUrl(url: string): string | null {
  if (!url) return null;

  try {
    const parsed = new URL(url.trim());
    if (!parsed.hostname.includes('instagram.com')) {
      return null;
    }

    const match = parsed.pathname.match(/\/(p|reels?)\/([A-Za-z0-9_-]+)/);
    if (!match) return null;

    const type = match[1] === 'p' ? 'p' : 'reel';
    const code = match[2];

    return `https://www.instagram.com/${type}/${code}/embed`;
  } catch {
    return null;
  }
}
