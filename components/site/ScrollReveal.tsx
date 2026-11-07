//components/site/ScrollReveal.tsx
"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number; // Opsional: untuk memberi jeda antar elemen
    className?: string;
}

export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }} // Mulai dari transparan dan sedikit ke bawah
            whileInView={{ opacity: 1, y: 0 }} // Animasi ke posisi asli saat terlihat
            viewport={{ once: true, amount: 0.2 }} // Animasi hanya sekali saat 20% elemen terlihat
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}