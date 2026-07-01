import '../styles/globals.css'
import type { ReactNode } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'CIVYM S.A.S. - Consultoría en Ingeniería de Vías y Movilidad',
  description: 'CIVYM integra diseño vial, estudios de movilidad y manejo ambiental en proyectos en Antioquia.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
