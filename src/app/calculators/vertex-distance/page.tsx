import { Metadata } from 'next'
import VertexDistanceCalculator from './VertexDistanceCalculator'

export const metadata: Metadata = {
  title: 'Vertex Distance Calculator | Spectacle to Contact Lens Conversion',
  description: 'Calculate lens power compensation for vertex distance changes. Convert spectacle Rx to contact lens Rx and vice versa. Essential for high prescriptions.',
  keywords: 'vertex distance calculator, contact lens conversion, spectacle conversion, vertex compensation, high prescription, optician tool',
  alternates: {
    canonical: '/calculators/vertex-distance',
  },
}

const vertexSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Vertex Distance Calculator",
  "description": "Calculate lens power compensation for vertex distance changes between spectacles and contact lenses",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function VertexDistancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vertexSchema) }} />
      <VertexDistanceCalculator />
    </>
  )
}
