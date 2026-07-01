'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type UseGsapRevealOptions = {
  y?: number
  delay?: number
  duration?: number
  once?: boolean
  start?: string
  blur?: number
}

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updatePreference)
      return () => mediaQuery.removeEventListener('change', updatePreference)
    }

    mediaQuery.addListener(updatePreference)
    return () => mediaQuery.removeListener(updatePreference)
  }, [])

  return prefersReducedMotion
}

export function useGsapReveal<T extends HTMLElement>(options: UseGsapRevealOptions = {}) {
  const ref = useRef<T>(null)
  const prefersReducedMotion = useReducedMotion()
  const {
    y = 18,
    delay = 0,
    duration = 1.1,
    once = true,
    start = 'top 85%',
    blur = 12
  } = options

  useEffect(() => {
    const element = ref.current

    if (!element || typeof window === 'undefined') return

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' })
      return
    }

    const animation = gsap.fromTo(
      element,
      { opacity: 0, y, scale: 0.94, filter: `blur(${blur}px)` },
      { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration, ease: 'power3.out', delay }
    )

    const trigger = ScrollTrigger.create({
      trigger: element,
      start,
      once,
      animation,
      toggleActions: 'play none none none',
      invalidateOnRefresh: true
    })

    return () => {
      animation.kill()
      trigger.kill()
    }
  }, [blur, delay, duration, once, prefersReducedMotion, start, y])

  return ref as RefObject<T>
}

type UseGsapStaggerOptions = {
  y?: number
  duration?: number
  stagger?: number
  start?: string
  once?: boolean
  selector?: string
  blur?: number
}

export function useGsapStagger<T extends HTMLElement>(options: UseGsapStaggerOptions = {}) {
  const ref = useRef<T>(null)
  const prefersReducedMotion = useReducedMotion()
  const {
    y = 20,
    duration = 0.9,
    stagger = 0.15,
    start = 'top 90%',
    once = true,
    selector = '> *',
    blur = 10
  } = options

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === 'undefined') return

    // querySelectorAll does not accept selector strings that start with a
    // combinator like '>' (invalid). Normalize selector so callers can pass
    // '> article' or 'article' interchangeably. Use :scope to scope the
    // selector to the element.
    let sel = selector.trim()
    if (sel.startsWith('>')) sel = `:scope ${sel}`
    else if (!sel.startsWith(':scope') && sel.startsWith(' ')) sel = `:scope${sel}`

    const nodes = Array.from(el.querySelectorAll<HTMLElement>(sel))
    if (nodes.length === 0) return

    if (prefersReducedMotion) {
      gsap.set(nodes, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' })
      return
    }

    const animation = gsap.fromTo(
      nodes,
      { opacity: 0, y, scale: 0.94, filter: `blur(${blur}px)` },
      { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration, stagger, ease: 'power3.out' }
    )

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once,
      animation,
      toggleActions: 'play none none none',
      invalidateOnRefresh: true
    })

    return () => {
      animation.kill()
      trigger.kill()
    }
  }, [blur, duration, prefersReducedMotion, stagger, start, y, once, selector])

  return ref as RefObject<T>
}
