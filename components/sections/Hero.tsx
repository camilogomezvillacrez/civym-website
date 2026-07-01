'use client'

import Link from 'next/link'
import { CheckCircle, Award } from 'lucide-react'
import { useGsapReveal } from '../../lib/gsap'
import HeroCarousel from './HeroCarousel'

export default function Hero() {
  const heroRef = useGsapReveal<HTMLDivElement>({ y: 16, duration: 0.9, once: true, delay: 0.1, immediate: true })
  const titleRef = useGsapReveal<HTMLHeadingElement>({ y: 10, duration: 0.8, once: true, delay: 0.15, immediate: true })
  const textRef = useGsapReveal<HTMLParagraphElement>({ y: 10, duration: 0.8, once: true, delay: 0.3, immediate: true })
  const ctaRef = useGsapReveal<HTMLDivElement>({ y: 10, duration: 0.8, once: true, delay: 0.45, immediate: true })

  return (
    <section id="inicio" className="bg-gradient-to-r from-[var(--civym-gray-light)] via-white to-[var(--civym-gray-light)] py-20">
      <div className="container">
        <div ref={heroRef} className="grid grid-cols-1 gap-12 items-center lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-6 rounded-full bg-[var(--civym-yellow)]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--civym-gray-dark)]">
                Consultoría en vías y movilidad
              </p>
            </div>
            <h1 ref={titleRef} className="mt-4 text-4xl md:text-5xl font-bold text-[var(--civym-gray-dark)] leading-tight">
              Ingeniería vial <span className="text-[var(--civym-gray-dark)] underline decoration-[var(--civym-yellow)] decoration-[6px] underline-offset-8">integral y profesional</span>
            </h1>
            <p ref={textRef} className="mt-7 text-lg text-[var(--civym-gray)] leading-relaxed">
              CIVYM acompaña cada proyecto con soluciones técnicas completas para movilidad, seguridad vial y entorno, con enfoque práctico y coordinado.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3 rounded-lg border border-[var(--civym-gray-light)] bg-white px-4 py-3 shadow-sm">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-[var(--civym-yellow)]" />
                <span className="text-[var(--civym-gray-dark)]">Más de 3 años de experiencia en Antioquia</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-[var(--civym-gray-light)] bg-white px-4 py-3 shadow-sm">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-[var(--civym-yellow)]" />
                <span className="text-[var(--civym-gray-dark)]">Especialidades integradas en cada entrega</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-[var(--civym-gray-light)] bg-white px-4 py-3 shadow-sm">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-[var(--civym-yellow)]" />
                <span className="text-[var(--civym-gray-dark)]">Atención para clientes públicos y privados</span>
              </div>
            </div>

            <div ref={ctaRef} className="mt-8">
              <div className="flex gap-4 flex-wrap">
                <Link href="#contacto" className="inline-block bg-[var(--civym-yellow)] text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                  Solicitar cotización
                </Link>
                <Link href="#proyectos" className="inline-block border-2 border-[var(--civym-gray)] text-[var(--civym-gray)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--civym-gray-light)] transition">
                  Ver proyectos
                </Link>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--civym-gray-light)] bg-white px-4 py-2 text-sm text-[var(--civym-gray-dark)] shadow-sm">
                <Award className="w-4 h-4 text-[var(--civym-yellow)]" />
                <span><strong>+50 proyectos</strong> completados · <strong>3+ años</strong> de experiencia</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
