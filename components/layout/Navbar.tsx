'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  return (
    <header className="bg-white border-b border-[var(--civym-gray-light)] sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-[var(--civym-gray-dark)] hover:text-[var(--civym-yellow)] transition">
          CIVYM
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#servicios" className="text-[var(--civym-gray)] hover:text-[var(--civym-gray-dark)] transition">Servicios</Link>
          <Link href="#proyectos" className="text-[var(--civym-gray)] hover:text-[var(--civym-gray-dark)] transition">Proyectos</Link>
          <Link href="/" className="text-[var(--civym-gray)] hover:text-[var(--civym-gray-dark)] transition">Nosotros</Link>
          <Link href="#contacto" className="bg-[var(--civym-yellow)] text-black px-4 py-2 rounded-lg hover:shadow-md transition">Contacto</Link>
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
            <Link href="#servicios" onClick={() => setOpen(false)} className="text-[var(--civym-gray)] hover:text-[var(--civym-gray-dark)]">Servicios</Link>
            <Link href="#proyectos" onClick={() => setOpen(false)} className="text-[var(--civym-gray)] hover:text-[var(--civym-gray-dark)]">Proyectos</Link>
            <Link href="/" onClick={() => setOpen(false)} className="text-[var(--civym-gray)] hover:text-[var(--civym-gray-dark)]">Nosotros</Link>
            <Link href="#contacto" onClick={() => setOpen(false)} className="bg-[var(--civym-yellow)] text-black px-4 py-2 rounded-lg">Contacto</Link>
          </div>
        </div>
      )}
    </header>
  )
}
