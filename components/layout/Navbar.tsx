'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' }
]

const OBSERVED_SECTION_IDS = [...NAV_LINKS.map(link => link.id), 'contacto']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('inicio')

  useEffect(() => {
    const sections = OBSERVED_SECTION_IDS
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-140px 0px -60% 0px', threshold: 0 }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const linkClass = (id: string) =>
    `px-3 py-1.5 rounded-lg transition-colors ${
      activeId === id
        ? 'bg-[var(--civym-gray)] text-[var(--civym-yellow)] font-semibold'
        : 'text-[var(--civym-gray)] hover:bg-[var(--civym-gray-light)] hover:text-[var(--civym-gray-dark)]'
    }`

  return (
    <header className="bg-white border-b border-[var(--civym-gray-light)] sticky top-0 z-50">
      <div className="container py-1 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <img src="/images/logo.png" alt="CIVYM" className="h-36 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {NAV_LINKS.map(link => (
            <Link key={link.id} href={`#${link.id}`} className={linkClass(link.id)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className={`px-4 py-2 rounded-lg transition ${
              activeId === 'contacto'
                ? 'bg-[var(--civym-yellow)] text-black shadow-md ring-2 ring-[var(--civym-yellow)] ring-offset-2'
                : 'bg-[var(--civym-yellow)] text-black hover:shadow-md'
            }`}
          >
            Contacto
          </Link>
        </nav>

        <button
          aria-label="menu"
          className="md:hidden p-2 text-[var(--civym-gray)]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--civym-gray-light)]">
          <div className="container py-4 flex flex-col gap-4 text-sm font-medium">
            {NAV_LINKS.map(link => (
              <Link key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} className={linkClass(link.id)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setOpen(false)}
              className={`px-4 py-2 rounded-lg ${
                activeId === 'contacto' ? 'bg-[var(--civym-yellow)] text-black ring-2 ring-[var(--civym-yellow)] ring-offset-2' : 'bg-[var(--civym-yellow)] text-black'
              }`}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
