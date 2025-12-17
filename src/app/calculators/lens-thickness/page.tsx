import { Metadata } from 'next'
import LensThicknessCalculator from './LensThicknessCalculator'

export const metadata: Metadata = {
  title: 'Lens Thickness Calculator | Estimate Edge & Center Thickness',
  description: 'Calculate estimated lens thickness based on prescription power, frame size, and lens material. Compare CR-39, polycarbonate, Trivex, and high-index materials.',
  keywords: 'lens thickness calculator, edge thickness, center thickness, high index lens, CR-39, polycarbonate, lens material comparison, optician tool',
  alternates: {
    canonical: '/calculators/lens-thickness',
  },
}

const lensThicknessSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lens Thickness Calculator",
  "description": "Estimate edge and center thickness for spectacle lenses based on prescription and material",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function LensThicknessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lensThicknessSchema) }} />
      <LensThicknessCalculator />
    </>
  )
}
