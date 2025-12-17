import { Metadata } from 'next'
import KeratometerTraining from './KeratometerTraining'

export const metadata: Metadata = {
  title: 'Keratometer Training | Measure Corneal Curvature for Contact Lens Fitting',
  description: 'Master keratometer operation for measuring corneal curvature (K-readings). Learn mire alignment, astigmatism assessment, and contact lens base curve selection for ABO/NCLE exams.',
  keywords: 'keratometer training, K-readings, corneal curvature, ophthalmometer, contact lens fitting, corneal astigmatism, ABO exam keratometry, NCLE keratometer',
  alternates: {
    canonical: '/equipment/keratometer',
  },
}

const keratometerSchema = {
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "Keratometer Training Guide",
  "description": "Comprehensive guide to keratometer operation and corneal curvature measurement",
  "educationalLevel": "Professional",
  "learningResourceType": "Tutorial",
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function KeratometerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(keratometerSchema) }} />
      <KeratometerTraining />
    </>
  )
}
