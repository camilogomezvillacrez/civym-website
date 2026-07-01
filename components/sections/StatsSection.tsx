'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../lib/gsap'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Stat {
  value: number
  suffix: string
  label: string
}

const STATS: Stat[] = [
  { value: 3, suffix: '+', label: 'Años de experiencia' },
  { value: 50, suffix: '+', label: 'Proyectos completados' },
  { value: 6, suffix: '', label: 'Especialidades integradas' }
]

const RING_RADIUS = 54
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const counterRefs = useRef<(HTMLElement | null)[]>([])
  const ringRefs = useRef<(SVGCircleElement | null)[]>([])
  const prefersReducedMotion = useReducedMotion()
  const animatedRef = useRef(false)

  useEffect(() => {
    // Only run once per component instance
    if (animatedRef.current || !sectionRef.current || typeof window === 'undefined') return

    if (prefersReducedMotion) {
      STATS.forEach((stat, idx) => {
        const el = counterRefs.current[idx]
        const ring = ringRefs.current[idx]
        if (el) el.textContent = stat.value.toString()
        if (ring) ring.style.strokeDashoffset = '0'
      })
      return
    }

    // Wait a tick to ensure DOM is ready
    const timeout = setTimeout(() => {
      if (!sectionRef.current) return

      animatedRef.current = true

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          STATS.forEach((stat, idx) => {
            const el = counterRefs.current[idx]
            const ring = ringRefs.current[idx]
            if (!el) return

            gsap.to({ value: 0 }, {
              value: stat.value,
              duration: 2.5,
              ease: 'power2.out',
              onUpdate: function() {
                const value = this.targets()[0].value
                el.textContent = Math.floor(value).toString()
                if (ring) {
                  const progress = value / stat.value
                  ring.style.strokeDashoffset = String(RING_CIRCUMFERENCE * (1 - progress))
                }
              }
            })
          })
        },
        once: true
      })

      return () => {
        trigger.kill()
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [prefersReducedMotion])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 bg-[var(--civym-gray-dark)] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#FFCB42_2px,transparent_2px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_top_right,black_35%,transparent_75%)]"
      />
      <div className="container relative">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia que respalda nuestro trabajo
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Números que reflejan nuestro compromiso con la calidad y la{' '}
            <span className="text-white font-semibold underline decoration-[var(--civym-yellow)] decoration-[3px] underline-offset-4">
              excelencia técnica
            </span>{' '}
            en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[var(--civym-yellow)]/30 transition-colors duration-300"
            >
              <div className="relative mx-auto mb-2 flex h-32 w-32 items-center justify-center">
                <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
                  <circle cx="60" cy="60" r={RING_RADIUS} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                  <circle
                    ref={el => ringRefs.current[idx] = el}
                    cx="60"
                    cy="60"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="var(--civym-yellow)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={RING_CIRCUMFERENCE}
                    strokeDashoffset={RING_CIRCUMFERENCE}
                  />
                </svg>
                <div className="text-3xl md:text-4xl font-bold text-[var(--civym-yellow)]">
                  <span ref={el => counterRefs.current[idx] = el}>0</span>
                  {stat.suffix}
                </div>
              </div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
