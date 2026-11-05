//components\sections\Testimonials.tsx
import { Quote } from "lucide-react"

export default function Testimonials({ data }: { data: any[] }) {
    if (!data || data.length === 0) return null;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-deep mb-4">
                        Kata Mereka
                    </h2>
                    <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item) => (
                        <div key={item._id} className="bg-bg-tulang p-8 rounded-2xl relative">
                            <Quote className="w-10 h-10 text-gold/30 absolute top-6 right-6" />
                            <p className="text-gray-600 italic mb-6 relative z-10 leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-navy-deep rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-deep">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}