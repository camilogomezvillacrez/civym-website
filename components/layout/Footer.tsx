import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--civym-gray-dark)] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 rounded-xl bg-white p-2.5">
              <img src="/images/logo.png" alt="CIVYM" className="h-12 w-auto" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">CIVYM S.A.S.</h4>
              <p className="text-sm text-gray-300">Consultoría en Ingeniería de Vías y Movilidad</p>
              <p className="text-xs text-gray-400 mt-2">Operando en Antioquia · 3 años de experiencia</p>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Servicios</h5>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><Link href="#servicios" className="hover:text-[var(--civym-yellow)] transition">Diseño vial</Link></li>
              <li><Link href="#servicios" className="hover:text-[var(--civym-yellow)] transition">Movilidad</Link></li>
              <li><Link href="#servicios" className="hover:text-[var(--civym-yellow)] transition">Manejo ambiental</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Enlaces</h5>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><Link href="#proyectos" className="hover:text-[var(--civym-yellow)] transition">Proyectos</Link></li>
              <li><Link href="#nosotros" className="hover:text-[var(--civym-yellow)] transition">Nosotros</Link></li>
              <li><Link href="#contacto" className="hover:text-[var(--civym-yellow)] transition">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Contacto</h5>
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-3 hover:text-[var(--civym-yellow)] transition">
              <Mail className="w-4 h-4" />
              <Link href="mailto:contacto@civym.com.co">contacto@civym.com.co</Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Phone className="w-4 h-4" />
              <Link href="tel:+573001234567">+57 300 1234567</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} CIVYM S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
