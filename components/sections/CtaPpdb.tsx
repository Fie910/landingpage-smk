//components\sections\CtaPpdb.tsx
import Link from "next/link"

export default function CtaPpdb({ linkPPDB }: { linkPPDB?: string }) {
    return (
        <section className="py-24 bg-navy-mid relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container relative z-10 mx-auto px-4 text-center">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                    Bergabunglah Bersama Kami
                </h2>
                <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                    Siapkan masa depan putra-putri Anda bersama SMK KH. A. Wahab Muhsin. Pendaftaran Siswa Baru telah dibuka!
                </p>
                <Link
                    href={linkPPDB || "#"}
                    className="inline-block bg-gold hover:bg-yellow-600 text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                    Daftar PPDB Sekarang
                </Link>
            </div>
        </section>
    )
}