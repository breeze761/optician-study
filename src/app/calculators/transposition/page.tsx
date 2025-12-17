import { Metadata } from 'next'
import TranspositionCalculator from './TranspositionCalculator'

export const metadata: Metadata = {
  title: 'Rx Transposition Calculator | Plus to Minus Cylinder Conversion',
  description: 'Instantly convert eyeglass prescriptions between plus and minus cylinder formats. Free transposition calculator with step-by-step formula explanation.',
  keywords: 'transposition calculator, plus cylinder, minus cylinder, prescription conversion, optical transposition, optician calculator, cylinder conversion',
  alternates: {
    canonical: '/calculators/transposition',
  },
}

const transpositionSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Rx Transposition Calculator",
  "description": "Convert eyeglass prescriptions between plus and minus cylinder formats with step-by-step explanations",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function TranspositionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transpositionSchema) }} />
      <TranspositionCalculator />
    </>
  )
}
