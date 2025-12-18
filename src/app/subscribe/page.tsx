import { Metadata } from 'next'
import SubscribePage from '@/components/pages/SubscribePage'

export const metadata: Metadata = {
  title: 'Pricing & Plans | OpticianStudy',
  description: 'Get full access to ABO and NCLE exam prep. 52 chapters, 325+ lessons, 500+ practice questions. Monthly $9.95 or yearly $79.',
  keywords: 'OpticianStudy pricing, ABO exam course, NCLE exam course, optician training subscription, optician certification cost, online optician course',
  alternates: {
    canonical: '/subscribe',
  },
}

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "OpticianStudy Premium",
  "description": "Complete ABO and NCLE optician certification exam preparation course",
  "offers": [
    {
      "@type": "Offer",
      "name": "Monthly Plan",
      "price": "9.95",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Yearly Plan",
      "price": "79.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    }
  ],
  "provider": {
    "@type": "Organization",
    "name": "OpticianStudy"
  }
}

export default function SubscribePageWrapper() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <SubscribePage />
    </>
  )
}
