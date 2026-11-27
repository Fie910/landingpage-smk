import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-bg-tulang flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <p className="text-6xl font-serif font-bold text-gold mb-4">404</p>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-navy-deep mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-gold hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
