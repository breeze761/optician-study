import { Metadata } from 'next'
import FAQPage from '@/components/pages/FAQPage'

export const metadata: Metadata = {
  title: 'Optician FAQ | Common Questions & Answers for Opticians',
  description: 'Get answers to common optician questions about prescription reading, lensometry, keratometry, frame fitting, troubleshooting, and contact lenses. Expert guidance for ABO and NCLE exam preparation.',
  keywords: 'optician FAQ, prescription reading, lensometer, keratometer, frame fitting, optician troubleshooting, contact lens fitting, ABO exam questions, NCLE exam questions',
  alternates: {
    canonical: '/faq',
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does OD and OS mean on a prescription?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OD (Oculus Dexter) means right eye, OS (Oculus Sinister) means left eye. OU (Oculus Uterque) means both eyes. These Latin abbreviations are standard in optical prescriptions."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between sphere, cylinder, and axis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sphere (SPH) corrects nearsightedness (-) or farsightedness (+). Cylinder (CYL) corrects astigmatism. Axis (in degrees 1-180) indicates the angle/orientation of the astigmatism correction."
      }
    },
    {
      "@type": "Question",
      "name": "How do I transpose a prescription from plus to minus cylinder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three steps: 1) Add the sphere and cylinder algebraically to get new sphere. 2) Change the sign of the cylinder. 3) Add or subtract 90° from the axis (keep between 1-180)."
      }
    },
    {
      "@type": "Question",
      "name": "What does Add power mean on a prescription?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add (Addition) is the extra magnifying power added to the distance prescription for reading/near vision in progressive or bifocal lenses. It's always a positive number, typically ranging from +0.75 to +3.50."
      }
    },
    {
      "@type": "Question",
      "name": "How do I neutralize a lens on the lensometer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Place the lens against the lens stop with the back surface facing you. Focus the eyepiece first. Move the lens until one set of lines is clear - read sphere. Then focus until the perpendicular lines are clear - the difference is cylinder."
      }
    }
  ]
}

export default function FAQPageWrapper() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FAQPage />
    </>
  )
}
