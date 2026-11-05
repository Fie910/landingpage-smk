// components/sections/VisionMission.tsx
import { CheckCircle2 } from "lucide-react"

export default function VisionMission({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="py-20 bg-bg-tulang">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Visi */}
                    <div className="bg-navy-deep text-white p-10 rounded-2xl shadow-xl">
                        <h3 className="font-serif text-2xl font-bold text-gold mb-6">Visi Kami</h3>
                        <p className="text-lg leading-relaxed text-gray-100">
                            {data.vision || "Visi belum diatur."}
                        </p>
                    </div>

                    {/* Misi */}
                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                        <h3 className="font-serif text-2xl font-bold text-navy-deep mb-6">Misi Kami</h3>
                        <ul className="space-y-4">
                            {data.missions?.map((misi: string, index: number) => (
                                <li key={index} className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                                    <span className="text-gray-700">{misi}</span>
                                </li>
                            )) || <li>Misi belum diatur.</li>}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}