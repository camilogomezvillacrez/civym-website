import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import ServiciosSection from '../components/sections/ServiciosSection'
import StatsSection from '../components/sections/StatsSection'
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
      <AboutSection />
      <ServiciosSection />
      <StatsSection />
      <ProyectosSection />
      <ContactoSection />
    </div>
  )
}
