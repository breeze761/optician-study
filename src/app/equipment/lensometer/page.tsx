import { Metadata } from 'next'
import LensometerTraining from './LensometerTraining'

export const metadata: Metadata = {
  title: 'Lensometer Training | Measure Lens Power & Verify Prescriptions',
  description: 'Learn lensometer operation to measure lens power, find optical centers, detect prism, and verify prescriptions. Essential skill for ABO certification exam preparation.',
  keywords: 'lensometer training, focimeter, lensmeter, lens power measurement, optical center, prism measurement, ABO exam lensometer, neutralize lenses',
  alternates: {
    canonical: '/equipment/lensometer',
  },
}

const lensometerSchema = {
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "Lensometer Training Guide",
  "description": "Complete guide to lensometer operation and lens power measurement",
  "educationalLevel": "Professional",
  "learningResourceType": "Tutorial",
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function LensometerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lensometerSchema) }} />
      <LensometerTraining />
    </>
  )
}
