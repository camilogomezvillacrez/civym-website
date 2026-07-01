'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Mail, MessageSquare, User } from 'lucide-react'
import { useGsapReveal } from '../../lib/gsap'

export default function ContactoSection() {
  const [loading, setLoading] = useState(false)
  const sectionRef = useGsapReveal<HTMLElement>({ y: 16, duration: 0.9, once: true, start: 'top 85%' })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Error al enviar')
      }

      setSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(String(err) || 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="contacto">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-[var(--civym-gray-dark)] text-center">Solicita una cotización</h2>
          <p className="mt-4 text-lg text-[var(--civym-gray)] text-center">
            Cuéntanos sobre tu proyecto y te contactaremos en las próximas 24 horas.
          </p>

          {success && (
            <div className="mt-6 bg-green-100 border-l-4 border-green-500 p-4 rounded text-green-700">
              ✓ Gracias por tu solicitud. Te contactaremos pronto.
            </div>
          )}

          {error && (
            <div className="mt-6 bg-red-100 border-l-4 border-red-500 p-4 rounded text-red-700">
              ✗ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="relative">
              <label className="block text-sm font-semibold text-[var(--civym-gray-dark)] mb-2">Nombre</label>
              <div className="flex items-center border-2 border-[var(--civym-gray-light)] rounded-lg px-4 py-3 focus-within:border-[var(--civym-yellow)] transition">
                <User className="w-5 h-5 text-[var(--civym-gray)] mr-3" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="flex-1 outline-none text-[var(--civym-gray-dark)]"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-[var(--civym-gray-dark)] mb-2">Correo</label>
              <div className="flex items-center border-2 border-[var(--civym-gray-light)] rounded-lg px-4 py-3 focus-within:border-[var(--civym-yellow)] transition">
                <Mail className="w-5 h-5 text-[var(--civym-gray)] mr-3" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="flex-1 outline-none text-[var(--civym-gray-dark)]"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-[var(--civym-gray-dark)] mb-2">Mensaje</label>
              <div className="flex border-2 border-[var(--civym-gray-light)] rounded-lg focus-within:border-[var(--civym-yellow)] transition">
                <MessageSquare className="w-5 h-5 text-[var(--civym-gray)] ml-4 mt-4 flex-shrink-0" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="flex-1 outline-none p-4 text-[var(--civym-gray-dark)] resize-none"
                  rows={5}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--civym-yellow)] text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : 'Enviar solicitud'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[var(--civym-gray-light)] text-center">
            <p className="text-sm text-[var(--civym-gray)]">
              O escribe directamente a <Link href="mailto:contacto@civym.com.co" className="font-semibold text-[var(--civym-gray-dark)] underline decoration-[var(--civym-yellow)] decoration-2 underline-offset-4 hover:decoration-[3px]">contacto@civym.com.co</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
