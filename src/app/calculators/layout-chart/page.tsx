import { Metadata } from 'next'
import LayoutChartGenerator from './LayoutChartGenerator'

export const metadata: Metadata = {
  title: 'Lens Layout Chart Generator | Optical Center Placement Tool',
  description: 'Generate professional lens layout charts for lab orders. Visualize optical center placement, decentration, and seg heights. Free printable tool for opticians.',
  keywords: 'layout chart generator, lens layout, optical center, decentration calculator, seg height, lab order, optician tool, frame measurements',
  alternates: {
    canonical: '/calculators/layout-chart',
  },
}

const layoutSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lens Layout Chart Generator",
  "description": "Generate professional lens layout charts for lab orders with optical center visualization",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": { "@type": "Organization", "name": "OpticianStudy" }
}

export default function LayoutChartPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(layoutSchema) }} />
      <LayoutChartGenerator />
    </>
  )
}
