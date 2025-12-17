import { Metadata } from 'next'
import MagnificationCalculator from './MagnificationCalculator'

export const metadata: Metadata = {
  title: 'Spectacle Magnification Calculator | Power & Shape Factor',
  description: 'Calculate spectacle magnification using power factor and shape factor formulas. Essential tool for aniseikonia assessment and iseikonic lens design.',
  keywords: 'spectacle magnification calculator, aniseikonia, power factor, shape factor, iseikonic lens, image size, optician calculator',
  alternates: {
    canonical: '/calculators/magnification',
  },
}

const magnificationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Spectacle Magnification Calculator",
  "description": "Calculate spectacle magnification and minification effects for aniseikonia assessment",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function MagnificationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(magnificationSchema) }} />
      <MagnificationCalculator />
    </>
  )
}
