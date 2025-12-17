import { Metadata } from 'next'
import TrialFrameTraining from './TrialFrameTraining'

export const metadata: Metadata = {
  title: 'Trial Frame Training | Refraction with Trial Lenses',
  description: 'Learn trial frame refraction techniques and when to use trial lenses over a phoropter. Master lens insertion order, prism verification, and high astigmatism fitting.',
  keywords: 'trial frame training, trial lenses, refraction techniques, trial frame adjustment, high astigmatism, prism trial lenses, optician training',
  alternates: {
    canonical: '/equipment/trial-frame',
  },
}

const trialFrameSchema = {
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "Trial Frame Training Guide",
  "description": "Guide to trial frame refraction and trial lens usage",
  "educationalLevel": "Professional",
  "learningResourceType": "Tutorial",
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function TrialFramePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trialFrameSchema) }} />
      <TrialFrameTraining />
    </>
  )
}
