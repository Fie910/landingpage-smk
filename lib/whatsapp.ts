export function getWhatsAppUrl(phone?: string, message?: string): string {
  if (!phone) return "";

  const cleanNumber = phone.replace(/\D/g, "");
  if (!cleanNumber) return "";

  const normalizedNumber = cleanNumber.startsWith("0")
    ? `62${cleanNumber.slice(1)}`
    : cleanNumber;

  const baseUrl = `https://wa.me/${normalizedNumber}`;
  if (message && message.trim().length > 0) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }

  return baseUrl;
}
