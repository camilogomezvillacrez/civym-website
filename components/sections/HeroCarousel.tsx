'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from '../../lib/gsap'

const SLIDES = [
  {
    label: 'Diseño vial',
    caption: 'Diseño geométrico, perfiles y plataformas viales',
    tone: 'bg-[var(--civym-gray-dark)]'
  },
  {
    label: 'Estudios de movilidad',
    caption: 'Análisis de tránsito y propuestas de movilidad urbana',
    tone: 'bg-[var(--civym-gray)]'
  },
  {
    label: 'Manejo ambiental',
    caption: 'Gestión y mitigación ambiental en proyectos viales',
    tone: 'bg-[var(--civym-gray-dark)]'
  }
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (prefersReducedMotion || paused) return

    timeoutRef.current = setInterval(() => {
      setIndex(i => (i + 1) % SLIDES.length)
    }, 4000)

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current)
    }
  }, [paused, prefersReducedMotion])

  const goTo = (i: number) => setIndex((i + SLIDES.length) % SLIDES.length)

  return (
    <div
      className="relative w-full max-w-xl h-80 rounded-3xl overflow-hidden shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.label}
          className={`absolute inset-0 flex flex-col justify-end p-8 text-white transition-opacity duration-700 ${slide.tone} ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== index}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#FFCB42_2px,transparent_2px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_top_right,black_35%,transparent_75%)]"
          />
          <span className="relative inline-block w-fit rounded-full bg-[var(--civym-yellow)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-black">
            {slide.label}
          </span>
          <p className="relative mt-4 text-lg font-semibold leading-snug">{slide.caption}</p>
          <p className="relative mt-2 text-sm text-white/70">[Imagen de proyecto próximamente]</p>
        </div>
      ))}

      <button
        type="button"
        aria-label="Anterior"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        onClick={() => goTo(index + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            aria-label={`Ir a ${slide.label}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-[var(--civym-yellow)]' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
