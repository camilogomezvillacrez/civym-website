import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[var(--civym-gray-light)] to-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--civym-gray-dark)] leading-tight">
              Ingeniería vial <span className="text-[var(--civym-yellow)]">integral y profesional</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--civym-gray)] leading-relaxed">
              CIVYM integra <strong>diseño vial, estudios de movilidad, manejo ambiental y señalización</strong> en cada proyecto, entregando soluciones completas y coherentes.
            </p>
            
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--civym-yellow)]" />
                <span className="text-[var(--civym-gray-dark)]">3 años operando en Antioquia</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--civym-yellow)]" />
                <span className="text-[var(--civym-gray-dark)]">Soluciones con todas las especialidades integradas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--civym-yellow)]" />
                <span className="text-[var(--civym-gray-dark)]">Clientes públicos y privados</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="#contacto" className="inline-block bg-[var(--civym-yellow)] text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Solicitar cotización
              </Link>
              <Link href="#proyectos" className="inline-block border-2 border-[var(--civym-gray)] text-[var(--civym-gray)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--civym-gray-light)] transition">
                Ver proyectos
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full h-72 bg-gradient-to-br from-[var(--civym-yellow)] to-orange-300 rounded-2xl flex items-center justify-center text-white font-semibold shadow-xl">
              [Imagen Hero - Vías / Ingeniería]
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
