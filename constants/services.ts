import { Service } from '../types'

export const SERVICES: Service[] = [
  {
    id: 'diseño-vial',
    title: 'Diseño geométrico de vías',
    description: 'Proyecto completo de diseño geométrico, perfiles y plataformas viales.',
    details: [
      'Trazado en planta, perfil longitudinal y secciones transversales',
      'Diseño de intersecciones y accesos',
      'Cálculo de movimiento de tierras y plataformas',
      'Cumplimiento de normativa INVIAS vigente'
    ]
  },
  {
    id: 'manejo-transito',
    title: 'Planes de manejo de tránsito',
    description: 'Análisis y planes para el manejo del tránsito durante obras.',
    details: [
      'Esquemas de desvíos y señalización temporal',
      'Coordinación con autoridades de tránsito',
      'Planes de contingencia y cierres viales',
      'Minimización de impacto a la movilidad durante la obra'
    ]
  },
  {
    id: 'senalizacion',
    title: 'Diseño de señalización vial',
    description: 'Señalización horizontal y vertical conforme a normativa.',
    details: [
      'Señalización preventiva, reglamentaria e informativa',
      'Demarcación horizontal y elementos de seguridad',
      'Planos de señalización conforme al Manual de INVIAS',
      'Especificaciones técnicas para instalación'
    ]
  },
  {
    id: 'estudios-transito',
    title: 'Estudios de tránsito',
    description: 'Recolección y análisis de datos de flujo vehicular y peatonal.',
    details: [
      'Conteos vehiculares y peatonales en campo',
      'Análisis de capacidad y niveles de servicio',
      'Proyecciones de tránsito futuro',
      'Recomendaciones técnicas basadas en datos'
    ]
  },
  {
    id: 'estudios-movilidad',
    title: 'Estudios de movilidad',
    description: 'Evaluaciones de movilidad integradas y propuestas de mejora.',
    details: [
      'Diagnóstico integral de movilidad urbana',
      'Propuestas de mejora para peatones, ciclistas y vehículos',
      'Evaluación de impacto de nuevos proyectos',
      'Articulación con planes de ordenamiento territorial'
    ]
  },
  {
    id: 'manejo-ambiental',
    title: 'Planes de manejo ambiental',
    description: 'Medidas de mitigación y manejo ambiental para proyectos viales.',
    details: [
      'Identificación de impactos ambientales del proyecto',
      'Medidas de prevención, mitigación y compensación',
      'Gestión de permisos y trámites ambientales',
      'Seguimiento y monitoreo durante la ejecución'
    ]
  }
]
