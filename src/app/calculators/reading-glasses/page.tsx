import { Metadata } from 'next'
import ReadingGlassesCalculator from './ReadingGlassesCalculator'

export const metadata: Metadata = {
  title: 'Reading Glasses Power Calculator | Age-Based Add Power',
  description: 'Calculate the right reading glasses power based on your age and working distance. Free online tool for determining add power for presbyopia correction.',
  keywords: 'reading glasses calculator, add power, presbyopia, reading power by age, near vision calculator, optician tool',
  alternates: {
    canonical: '/calculators/reading-glasses',
  },
}

const readingGlassesSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Reading Glasses Power Calculator",
  "description": "Calculate reading glasses add power based on age and working distance for presbyopia correction",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function ReadingGlassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(readingGlassesSchema) }} />
      <ReadingGlassesCalculator />
    </>
  )
}
