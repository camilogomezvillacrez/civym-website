'use client'

import { CheckCircle, MapPin, Mail } from 'lucide-react'
import { useGsapReveal } from '../../lib/gsap'

export default function AboutSection() {
  const sectionRef = useGsapReveal<HTMLElement>({ y: 16, duration: 0.9, once: true, start: 'top 85%' })

  return (
    <section ref={sectionRef} id="nosotros" className="py-20 bg-[var(--civym-gray-light)]">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-6 rounded-full bg-[var(--civym-yellow)]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--civym-gray-dark)]">
              Sobre CIVYM
            </p>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--civym-gray-dark)]">
            Soluciones integrales para movilidad segura y eficiente
          </h2>
          <p className="mt-5 text-lg text-[var(--civym-gray)] leading-relaxed">
            Somos una firma de consultoría enfocada en ingeniería vial, movilidad y gestión ambiental, con enfoque práctico en proyectos públicos y privados de Antioquia.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--civym-gray-light)] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--civym-yellow)]" />
                <span className="font-semibold text-[var(--civym-gray-dark)]">Enfoque integral</span>
              </div>
              <p className="mt-3 text-sm text-[var(--civym-gray)]">
                Diseñamos cada proyecto con visión completa de vía, movilidad y entorno.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--civym-gray-light)] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--civym-yellow)]" />
                <span className="font-semibold text-[var(--civym-gray-dark)]">Conocimiento local</span>
              </div>
              <p className="mt-3 text-sm text-[var(--civym-gray)]">
                Interpretamos las necesidades del territorio y de la operación vial.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[var(--civym-gray-dark)] p-7 text-white shadow-xl">
          <h3 className="text-xl font-semibold">¿Qué te ofrecemos?</h3>
          <ul className="mt-6 space-y-4 text-sm text-gray-200">
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 w-5 h-5 text-[var(--civym-yellow)]" />
              <span>Asesoría técnica especializada y acompañamiento en cada etapa.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 w-5 h-5 text-[var(--civym-yellow)]" />
              <span>Propuestas claras, alineadas con normativa y operación real.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 w-5 h-5 text-[var(--civym-yellow)]" />
              <span>Respuesta ágil para requerimientos de cotización y proyectos.</span>
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4">
            <Mail className="w-5 h-5 text-[var(--civym-yellow)]" />
            <span className="text-sm">contacto@civym.com.co</span>
          </div>
        </div>
      </div>
    </section>
  )
}
