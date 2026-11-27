import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 text-navy-deep">
      <Loader2 className="w-10 h-10 animate-spin text-gold" />
      <p className="text-sm font-medium text-gray-500">Memuat halaman...</p>
    </div>
  );
}
