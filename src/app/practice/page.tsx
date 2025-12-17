import { Metadata } from 'next'
import PracticePage from '@/components/pages/PracticePage'

export const metadata: Metadata = {
  title: 'Calculation Practice | Optical Math Problems for ABO Exam',
  description: 'Practice essential optical calculations for the ABO exam: transposition, vertex distance, Prentice\'s Rule, decentration, and more. Interactive problems with instant feedback.',
  keywords: 'optical calculation practice, ABO exam math, transposition practice, vertex distance calculator, Prentice Rule problems, optician calculation, optical formulas',
  alternates: {
    canonical: '/practice',
  },
}

const practiceSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Optical Calculation Practice",
  "description": "Interactive practice problems for essential optical calculations",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function PracticePageWrapper() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }} />
      <PracticePage />
    </>
  )
}
