import { Metadata } from 'next'
import ProgressiveIdentifier from './ProgressiveIdentifier'

export const metadata: Metadata = {
  title: 'Progressive Lens Identifier | Find Lens Brand by Engravings',
  description: 'Identify progressive lens brands and designs using manufacturer engravings. Search by nasal or temporal markings to find Essilor, Zeiss, Hoya, Shamir and more.',
  keywords: 'progressive lens identifier, lens engraving, Varilux, Zeiss, Hoya, Shamir, lens brand identification, PAL identification, optician tool',
  alternates: {
    canonical: '/calculators/progressive-identifier',
  },
}

const progressiveIdSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Progressive Lens Identifier",
  "description": "Identify progressive lens brands and designs using manufacturer engravings",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function ProgressiveIdentifierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(progressiveIdSchema) }} />
      <ProgressiveIdentifier />
    </>
  )
}
