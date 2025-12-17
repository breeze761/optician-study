import { Metadata } from 'next'
import PhoropterTraining from './PhoropterTraining'

export const metadata: Metadata = {
  title: 'Phoropter Training | Understand Refraction Instruments',
  description: 'Learn phoropter operation for refraction verification. Understand sphere, cylinder, axis controls, cross-cylinder technique, and binocular balancing for ABO exam prep.',
  keywords: 'phoropter training, refractor, refraction instrument, cross cylinder, Jackson cross cylinder, binocular balance, ABO exam refraction',
  alternates: {
    canonical: '/equipment/phoropter',
  },
}

const phoropterSchema = {
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "Phoropter Training Guide",
  "description": "Understanding phoropter operation and refraction principles",
  "educationalLevel": "Professional",
  "learningResourceType": "Tutorial",
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function PhoropterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(phoropterSchema) }} />
      <PhoropterTraining />
    </>
  )
}
