import { Metadata } from 'next'
import SlitLampTraining from './SlitLampTraining'

export const metadata: Metadata = {
  title: 'Slit Lamp Training | Biomicroscope Examination Techniques',
  description: 'Master slit lamp biomicroscope operation for anterior eye examination. Learn illumination techniques, contact lens fit evaluation, and fluorescein staining for NCLE exam.',
  keywords: 'slit lamp training, biomicroscope, anterior eye examination, contact lens fit evaluation, fluorescein, NCLE exam slit lamp, illumination techniques',
  alternates: {
    canonical: '/equipment/slit-lamp',
  },
}

const slitLampSchema = {
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "Slit Lamp Training Guide",
  "description": "Comprehensive guide to slit lamp biomicroscope examination",
  "educationalLevel": "Professional",
  "learningResourceType": "Tutorial",
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function SlitLampPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(slitLampSchema) }} />
      <SlitLampTraining />
    </>
  )
}
