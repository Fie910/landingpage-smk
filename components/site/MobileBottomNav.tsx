//components/site/MobileBottomNav.tsx
"use client";

import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function MobileBottomNav({ data }: { data?: any }) {
    // Fungsi untuk membersihkan nomor telepon (menghilangkan spasi, tanda hubung, dll)
    const cleanPhone = (phone: string) => phone ? phone.replace(/[^0-9+]/g, '') : '';

    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-safe">
            <div className="flex justify-around items-center h-16 px-2">

                {/* Tombol Telepon */}
                {cleanPhone(data?.phone || "") ? (
                    <a
                        href={`tel:${cleanPhone(data?.phone || "")}`}
                        className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-navy-deep transition-colors"
                    >
                        <Phone className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-semibold">Telepon</span>
                    </a>
                ) : (
                    <Link
                        href="/kontak"
                        className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-navy-deep transition-colors"
                    >
                        <Phone className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-semibold">Telepon</span>
                    </Link>
                )}

                {/* Tombol WhatsApp */}
                {(() => {
                    const waUrl = getWhatsAppUrl(data?.whatsapp);
                    const className = "flex flex-col items-center justify-center w-full h-full text-green-600 hover:text-green-700 transition-colors";
                    const content = (
                        <>
                            <MessageCircle className="w-5 h-5 mb-1" />
                            <span className="text-[10px] font-semibold">WhatsApp</span>
                        </>
                    );

                    return waUrl ? (
                        <a href={waUrl} target="_blank" rel="noopener noreferrer" className={className}>
                            {content}
                        </a>
                    ) : (
                        <Link href="/kontak" className={className}>
                            {content}
                        </Link>
                    );
                })()}

                {/* Tombol PPDB */}
                {(() => {
                    const ppdbHref = data?.linkPPDB || "/kontak";
                    const isExternal = ppdbHref.startsWith("http://") || ppdbHref.startsWith("https://");
                    const className = "flex flex-col items-center justify-center w-full h-full text-gold hover:text-yellow-600 transition-colors";
                    const content = (
                        <>
                            <FileText className="w-5 h-5 mb-1" />
                            <span className="text-[10px] font-semibold">Daftar PPDB</span>
                        </>
                    );

                    return isExternal ? (
                        <a href={ppdbHref} target="_blank" rel="noopener noreferrer" className={className}>
                            {content}
                        </a>
                    ) : (
                        <Link href={ppdbHref} className={className}>
                            {content}
                        </Link>
                    );
                })()}

            </div>
        </div>
    );
}