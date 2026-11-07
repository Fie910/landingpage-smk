//components/sections/LeadForm.tsx
"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

export default function LeadForm({ bgClass, texture, opacity }: { bgClass?: string, texture?: any, opacity?: number }) {
    const [formData, setFormData] = useState({ name: "", whatsapp: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const bg = bgClass || "bg-navy-deep text-white";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", whatsapp: "", message: "" }); // Reset form
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className={`py-20 relative overflow-hidden ${bg}`}>
            {texture?.image && (
                <div className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: `url(${urlForImage(texture.image).url()})`, backgroundSize: 'cover', opacity: (opacity || 20) / 100 }} />
            )}

            <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-10 items-center">

                    {/* Teks Kiri */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                            Tertarik Bergabung?
                        </h2>
                        <p className="text-gray-200 mb-6 leading-relaxed">
                            Tinggalkan kontak Anda. Tim PPDB kami akan segera menghubungi Anda untuk memberikan informasi beasiswa, biaya, dan fasilitas.
                        </p>
                    </div>

                    {/* Form Kanan */}
                    <div className="w-full md:w-1/2">
                        {status === "success" ? (
                            <div className="bg-green-500/20 border border-green-500/50 p-6 rounded-2xl text-center">
                                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-white font-bold text-xl mb-2">Terima Kasih!</h3>
                                <p className="text-gray-200 text-sm">Data Anda telah kami terima. Tim kami akan segera menghubungi Anda via WhatsApp.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Nama Lengkap Calon Siswa"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="input-lead-form"
                                />
                                <input
                                    type="tel"
                                    placeholder="Nomor WhatsApp Aktif (misal: 0812...)"
                                    required
                                    value={formData.whatsapp}
                                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                    className="input-lead-form"
                                />
                                <textarea
                                    placeholder="Pertanyaan (Opsional: misal biaya asrama)"
                                    rows={3}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="textarea-lead-form"
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full bg-gold hover:bg-yellow-500 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                    {status === "loading" ? "Mengirim..." : "Kirim Minat Pendaftaran"}
                                </button>
                                {status === "error" && (
                                    <p className="text-red-300 text-sm text-center">Terjadi kesalahan. Silakan coba lagi.</p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}