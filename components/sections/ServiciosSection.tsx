'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SERVICES } from '../../constants/services'
import { Map, Construction, Milestone, Car, Users, Leaf, CheckCircle, X, LucideIcon } from 'lucide-react'
import { useGsapReveal, useGsapStagger } from '../../lib/gsap'
import { Service } from '../../types'

const ICONS: Record<string, LucideIcon> = {
  'diseño-vial': Map,
  'manejo-transito': Construction,
  senalizacion: Milestone,
  'estudios-transito': Car,
  'estudios-movilidad': Users,
  'manejo-ambiental': Leaf
}

export default function ServiciosSection() {
  const sectionRef = useGsapReveal<HTMLElement>({ y: 16, duration: 0.9, once: true, start: 'top 85%' })
  const cardsRef = useGsapStagger<HTMLDivElement>({ y: 16, duration: 0.8, stagger: 0.15, start: 'top 90%', selector: '> article' })
  const [selected, setSelected] = useState<Service | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selected])

  return (
    <section ref={sectionRef} id="servicios" className="py-20 bg-white">
      <div className="container">
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-6 rounded-full bg-[var(--civym-yellow)]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--civym-gray-dark)]">
              Servicios
            </p>
          </div>
          <h2 className="mt-3 text-4xl font-bold text-[var(--civym-gray-dark)]">Nuestros servicios</h2>
          <p className="mt-4 text-lg text-[var(--civym-gray)] max-w-2xl">
            Ofertas especializadas diseñadas para resolver cada aspecto de tu proyecto vial con excelencia técnica.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(s => {
            const Icon = ICONS[s.id]
            return (
              <article key={s.id}>
                <button
                  type="button"
                  onClick={() => setSelected(s)}
                  className="group w-full text-left bg-white border-2 border-[var(--civym-gray-light)] rounded-xl p-6 hover:border-[var(--civym-yellow)] transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.01] will-change-transform"
                >
                  <div className="w-12 h-12 bg-[var(--civym-yellow)] rounded-lg flex items-center justify-center mb-4 transition-transform duration-500 ease-out group-hover:rotate-[12deg] group-hover:scale-110">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-bold text-lg text-[var(--civym-gray-dark)]">{s.title}</h3>
                  <p className="text-[var(--civym-gray)] mt-3 text-sm leading-relaxed">{s.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[var(--civym-gray-dark)] group-hover:text-[var(--civym-yellow)] transition">
                    Ver más →
                  </span>
                </button>
              </article>
            )
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-[var(--civym-yellow)] rounded-lg flex items-center justify-center">
                {(() => {
                  const Icon = ICONS[selected.id]
                  return <Icon className="w-6 h-6 text-black" />
                })()}
              </div>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setSelected(null)}
                className="p-1 text-[var(--civym-gray)] hover:text-[var(--civym-gray-dark)] transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <h3 id="service-modal-title" className="mt-4 text-2xl font-bold text-[var(--civym-gray-dark)]">
              {selected.title}
            </h3>
            <p className="mt-3 text-[var(--civym-gray)] leading-relaxed">{selected.description}</p>

            <h4 className="mt-6 font-semibold text-sm uppercase tracking-[0.1em] text-[var(--civym-gray-dark)]">
              Qué incluye
            </h4>
            <ul className="mt-3 space-y-2">
              {selected.details.map(detail => (
                <li key={detail} className="flex items-start gap-3 text-sm text-[var(--civym-gray)]">
                  <CheckCircle className="mt-0.5 w-4 h-4 flex-shrink-0 text-[var(--civym-yellow)]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#contacto"
              onClick={() => setSelected(null)}
              className="mt-8 block w-full rounded-lg bg-[var(--civym-yellow)] px-6 py-3 text-center font-semibold text-black transition hover:shadow-lg"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
