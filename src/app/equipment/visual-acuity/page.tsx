import { Metadata } from 'next'
import VisualAcuityTraining from './VisualAcuityTraining'

export const metadata: Metadata = {
  title: 'Visual Acuity Testing | Snellen, LogMAR & Special Charts',
  description: 'Master visual acuity measurement techniques including Snellen charts, LogMAR, pinhole testing, and near vision assessment. Essential for ABO and NCLE exam preparation.',
  keywords: 'visual acuity testing, Snellen chart, LogMAR, pinhole testing, near vision, VA measurement, ABO exam visual acuity, optician training',
  alternates: {
    canonical: '/equipment/visual-acuity',
  },
}

const visualAcuitySchema = {
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "Visual Acuity Testing Guide",
  "description": "Comprehensive guide to visual acuity measurement techniques",
  "educationalLevel": "Professional",
  "learningResourceType": "Tutorial",
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function VisualAcuityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(visualAcuitySchema) }} />
      <VisualAcuityTraining />
    </>
  )
}
