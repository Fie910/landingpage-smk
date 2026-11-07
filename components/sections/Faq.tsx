//components/sections/Faq.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

export default function Faq({ data, bgClass, texture, opacity }: { data: any[], bgClass?: string, texture?: any, opacity?: number }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    if (!data || data.length === 0) return null;

    const bg = bgClass || "bg-white";

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`py-20 relative overflow-hidden ${bg}`}>
            {/* Tekstur Latar (jika ada) */}
            {texture?.image && (
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url(${urlForImage(texture.image).url()})`,
                        backgroundSize: 'cover',
                        opacity: (opacity || 10) / 100
                    }}
                />
            )}

            <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-deep mb-4">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
                    <p className="text-gray-600">
                        Punya pertanyaan seputar pendaftaran atau kehidupan sekolah? Temukan jawabannya di sini.
                    </p>
                </div>

                <div className="space-y-4">
                    {data.map((item, index) => (
                        <div
                            key={item._id}
                            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-navy-deep md:text-lg pr-4">
                                    {item.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="shrink-0"
                                >
                                    <ChevronDown className="w-6 h-6 text-gold" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}