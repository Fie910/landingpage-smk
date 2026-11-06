//components/site/MobileBottomNav.tsx
"use client";

import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";

export default function MobileBottomNav({ data }: { data?: any }) {
    // Fungsi untuk membersihkan nomor telepon (menghilangkan spasi, tanda hubung, dll)
    const cleanPhone = (phone: string) => phone ? phone.replace(/[^0-9+]/g, '') : '';

    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-safe">
            <div className="flex justify-around items-center h-16 px-2">

                {/* Tombol Telepon */}
                <a
                    href={`tel:${cleanPhone(data?.phone || "")}`}
                    className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-navy-deep transition-colors"
                >
                    <Phone className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-semibold">Telepon</span>
                </a>

                {/* Tombol WhatsApp */}
                <a
                    href={`https://wa.me/${cleanPhone(data?.whatsapp || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center w-full h-full text-green-600 hover:text-green-700 transition-colors"
                >
                    <MessageCircle className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-semibold">WhatsApp</span>
                </a>

                {/* Tombol PPDB */}
                <Link
                    href={data?.linkPPDB || "/kontak"}
                    className="flex flex-col items-center justify-center w-full h-full text-gold hover:text-yellow-600 transition-colors"
                >
                    <FileText className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-semibold">Daftar PPDB</span>
                </Link>

            </div>
        </div>
    );
}