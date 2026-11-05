// components/sections/Agenda.tsx
import { Calendar, MapPin } from "lucide-react"

export default function Agenda({ data }: { data: any[] }) {
    if (!data || data.length === 0) return null;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-navy-deep mb-4">Agenda Mendatang</h2>
                    <div className="h-1 w-20 bg-gold mx-auto"></div>
                </div>

                <div className="space-y-4">
                    {data.map((event) => (
                        <div key={event._id} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-gray-100 bg-bg-tulang hover:shadow-md transition-shadow">
                            {/* Tanggal */}
                            <div className="flex flex-col items-center justify-center bg-navy-deep text-white rounded-xl p-4 w-24 h-24 shrink-0">
                                <span className="text-3xl font-bold">{new Date(event.date).getDate()}</span>
                                <span className="text-sm font-medium uppercase">{new Date(event.date).toLocaleDateString('id-ID', { month: 'short' })}</span>
                            </div>

                            {/* Info */}
                            <div className="flex flex-col justify-center">
                                <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">{event.title}</h3>
                                {event.description && <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(event.date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</span>
                                    {event.location && <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.location}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}