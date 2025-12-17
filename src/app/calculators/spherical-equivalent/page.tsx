import { Metadata } from 'next'
import SphericalEquivalentCalculator from './SphericalEquivalentCalculator'

export const metadata: Metadata = {
  title: 'Spherical Equivalent Calculator | SE = Sphere + Cyl/2',
  description: 'Calculate spherical equivalent (SE) from sphero-cylindrical prescriptions. Free online tool for contact lens fitting, refractive surgery planning, and IOL calculations.',
  keywords: 'spherical equivalent calculator, SE calculator, contact lens fitting, sphero-cylindrical, refractive error, IOL calculation, optician tool',
  alternates: {
    canonical: '/calculators/spherical-equivalent',
  },
}

const seSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Spherical Equivalent Calculator",
  "description": "Calculate spherical equivalent from sphero-cylindrical prescriptions for contact lens fitting and refractive surgery",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function SphericalEquivalentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seSchema) }} />
      <SphericalEquivalentCalculator />
    </>
  )
}
