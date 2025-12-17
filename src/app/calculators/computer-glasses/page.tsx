import { Metadata } from 'next'
import ComputerGlassesCalculator from './ComputerGlassesCalculator'

export const metadata: Metadata = {
  title: 'Computer Glasses Calculator | Intermediate Add Power for Screens',
  description: 'Calculate the ideal intermediate add power for computer glasses based on your prescription and screen distance. Reduce digital eye strain with proper lens power.',
  keywords: 'computer glasses calculator, intermediate add, screen distance, digital eye strain, office lens, occupational progressive, blue light glasses',
  alternates: {
    canonical: '/calculators/computer-glasses',
  },
}

const computerGlassesSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Computer Glasses Calculator",
  "description": "Calculate intermediate add power for computer glasses based on your prescription and screen distance",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function ComputerGlassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(computerGlassesSchema) }} />
      <ComputerGlassesCalculator />
    </>
  )
}
