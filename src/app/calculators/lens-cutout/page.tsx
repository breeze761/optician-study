import { Metadata } from 'next'
import LensCutoutCalculator from './LensCutoutCalculator'

export const metadata: Metadata = {
  title: 'Lens Cutout Calculator | Check Minimum Blank Size',
  description: 'Check if a lens blank will cut out before ordering. Calculate minimum blank size based on frame measurements, PD, and decentration. Prevent cutout issues.',
  keywords: 'lens cutout calculator, minimum blank size, decentration, frame PD, effective diameter, lens blank, optician tool',
  alternates: {
    canonical: '/calculators/lens-cutout',
  },
}

const lensCutoutSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lens Cutout Calculator",
  "description": "Check if a lens blank will cut out and calculate minimum blank size based on frame measurements and decentration",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function LensCutoutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lensCutoutSchema) }} />
      <LensCutoutCalculator />
    </>
  )
}
