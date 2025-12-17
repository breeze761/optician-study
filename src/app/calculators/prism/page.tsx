import { Metadata } from 'next'
import PrismCalculator from './PrismCalculator'

export const metadata: Metadata = {
  title: 'Prism Calculator (Prentice Rule) | Free Optical Tool',
  description: 'Calculate induced prism from lens decentration using Prentice\'s Rule. Find required decentration for prescribed prism. Free tool for opticians and eye care professionals.',
  keywords: 'prism calculator, Prentice rule, optical prism, decentration calculator, induced prism, optician calculator, slab-off, vertical imbalance',
  alternates: {
    canonical: '/calculators/prism',
  },
}

const prismSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Prism Calculator (Prentice's Rule)",
  "description": "Calculate induced prism from decentration or find decentration needed for prescribed prism using Prentice's Rule",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function PrismCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(prismSchema) }} />
      <PrismCalculator />
    </>
  )
}
