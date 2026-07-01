'use client'

import { Map, Users, Leaf, Milestone } from 'lucide-react'
import { useGsapReveal } from '../../lib/gsap'

const SPECIALTIES = [
  { icon: Map, label: 'Diseño vial' },
  { icon: Users, label: 'Estudios de movilidad' },
  { icon: Leaf, label: 'Manejo ambiental' },
  { icon: Milestone, label: 'Señalización' }
]

export default function WhyUsSection() {
  const sectionRef = useGsapReveal<HTMLElement>({ y: 16, duration: 0.9, once: true, start: 'top 85%' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--civym-gray-dark)] py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#FFCB42_2px,transparent_2px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_top_right,black_35%,transparent_75%)]"
      />
      <div className="container relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-6 rounded-full bg-[var(--civym-yellow)]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Nuestro diferencial
            </p>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Por qué elegirnos</h2>
          <p className="mt-5 text-lg text-gray-300 leading-relaxed max-w-2xl">
            A diferencia de otras firmas que ofrecen vías <em>o</em> tránsito por separado, CIVYM integra{' '}
            <strong className="text-white">todas las especialidades</strong> en cada proyecto.
            Resulta en <strong className="text-white">menos coordinación, mayor coherencia y soluciones más eficientes</strong>.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {SPECIALTIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="w-10 h-10 bg-[var(--civym-yellow)] rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-black" />
              </div>
              <span className="text-sm font-semibold text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
