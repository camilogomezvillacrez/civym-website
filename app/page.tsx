import Image from 'next/image'
import Hero from '../components/sections/Hero'
import ServiciosSection from '../components/sections/ServiciosSection'
import ProyectosSection from '../components/sections/ProyectosSection'
import ContactoSection from '../components/sections/ContactoSection'

export const metadata = {
  title: 'Inicio - CIVYM S.A.S.',
  description: 'Consultoría integral en ingeniería de vías y movilidad en Antioquia.'
}

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiciosSection />
      <ProyectosSection />
      <ContactoSection />
    </div>
  )
}
