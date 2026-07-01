import { PROYECTOS } from '../../constants/proyectos'
import { MapPin, ArrowRight } from 'lucide-react'

export default function ProyectosSection() {
  return (
    <section className="py-20 bg-[var(--civym-gray-light)]" id="proyectos">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[var(--civym-gray-dark)]">Proyectos realizados</h2>
          <p className="mt-4 text-lg text-[var(--civym-gray)]">
            Experiencia con clientes públicos y privados en Antioquia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROYECTOS.map((p) => (
            <article key={p.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-[var(--civym-yellow)] to-orange-300 flex items-center justify-center text-white font-semibold">
                [Imagen: {p.title}]
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[var(--civym-gray-dark)]">{p.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-[var(--civym-gray)]">
                  <MapPin className="w-4 h-4" />
                  <span>{p.location}</span>
                </div>
                <p className="text-[var(--civym-gray)] mt-4 text-sm leading-relaxed">{p.summary}</p>
                <button className="mt-4 flex items-center gap-2 text-[var(--civym-yellow)] font-semibold text-sm hover:gap-3 transition">
                  Ver más <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
