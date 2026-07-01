import { SERVICES } from '../../constants/services'
import { Road, Traffic2, Zap, TrendingUp, Leaf, MapPin } from 'lucide-react'

const icons = [Road, Traffic2, Zap, TrendingUp, Leaf, MapPin]

export default function ServiciosSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[var(--civym-gray-dark)]">Nuestros servicios</h2>
          <p className="mt-4 text-lg text-[var(--civym-gray)] max-w-2xl">
            Ofertas especializadas diseñadas para resolver cada aspecto de tu proyecto vial con excelencia técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => {
            const Icon = icons[idx % icons.length]
            return (
              <article key={s.id} className="bg-white border-2 border-[var(--civym-gray-light)] rounded-xl p-6 hover:border-[var(--civym-yellow)] transition shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-[var(--civym-yellow)] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-bold text-lg text-[var(--civym-gray-dark)]">{s.title}</h3>
                <p className="text-[var(--civym-gray)] mt-3 text-sm leading-relaxed">{s.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-16 bg-[var(--civym-gray-light)] rounded-xl p-8 border-l-4 border-[var(--civym-yellow)]">
          <h3 className="font-bold text-xl text-[var(--civym-gray-dark)]">✓ Por qué elegirnos</h3>
          <p className="text-[var(--civym-gray)] mt-4 leading-relaxed max-w-3xl">
            A diferencia de otras firmas que ofrecen vías <em>o</em> tránsito por separado, CIVYM integra <strong>todas las especialidades</strong> en cada proyecto: diseño vial + estudios de movilidad + manejo ambiental + señalización. 
            Resulta en <strong>menos coordinación, mayor coherencia y soluciones más eficientes</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
