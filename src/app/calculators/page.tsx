import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Calculator, ArrowRight, Sparkles } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Optical Calculators for Opticians | OpticianStudy',
  description: 'Professional optical calculators for opticians: prescription transposition, reading glasses power, computer glasses conversion, vertex distance, prism, and more. Free tools for daily dispensing.',
  keywords: 'optical calculator, optician calculator, transposition calculator, reading glasses calculator, computer glasses calculator, vertex distance calculator, prism calculator, lens thickness calculator',
  alternates: {
    canonical: '/calculators',
  },
}

const calculatorsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Free Optical Calculators",
  "description": "Professional optical calculation tools for opticians",
  "url": "https://www.opticianstudy.com/calculators",
  "numberOfItems": 11,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Rx Transposition Calculator" },
    { "@type": "ListItem", "position": 2, "name": "Reading Glasses Power Calculator" },
    { "@type": "ListItem", "position": 3, "name": "Computer Glasses Calculator" },
    { "@type": "ListItem", "position": 4, "name": "Vertex Distance Compensation" },
    { "@type": "ListItem", "position": 5, "name": "Progressive Lens Identifier" },
    { "@type": "ListItem", "position": 6, "name": "Prism Calculator" }
  ]
}

const calculators = [
  {
    id: 'transposition',
    title: 'Rx Transposition Calculator',
    description: 'Instantly convert prescriptions between plus and minus cylinder formats. Essential for every optician.',
    icon: '🔄',
    features: ['Plus to minus cylinder', 'Minus to plus cylinder', 'Step-by-step breakdown', 'Verify your work'],
    popular: true
  },
  {
    id: 'reading-glasses',
    title: 'Reading Glasses Power Calculator',
    description: 'Calculate the right reading add power based on age, working distance, and existing prescription.',
    icon: '📖',
    features: ['Age-based recommendations', 'Custom working distance', 'With/without distance Rx', 'Progressive vs single vision'],
    popular: true
  },
  {
    id: 'computer-glasses',
    title: 'Computer Glasses Calculator',
    description: 'Convert reading add to intermediate power for computer use. Calculate the ideal add for any screen distance.',
    icon: '💻',
    features: ['Screen distance optimization', 'Occupational lens calculation', 'Multiple monitor setups', 'Ergonomic recommendations'],
    popular: true
  },
  {
    id: 'vertex-distance',
    title: 'Vertex Distance Compensation',
    description: 'Compensate high prescriptions for changes in vertex distance. Critical for contact lens conversions.',
    icon: '📏',
    features: ['Spectacle to contact lens', 'Contact lens to spectacle', 'Any vertex distance', 'Cylinder compensation'],
    popular: true
  },
  {
    id: 'progressive-identifier',
    title: 'Progressive Lens Identifier',
    description: 'Identify progressive lens brands and designs using manufacturer engravings. Decode the hidden markings.',
    icon: '🔬',
    features: ['Brand identification', 'Engraving decoder', 'Lens design lookup', 'Addition verification'],
    popular: true
  },
  {
    id: 'layout-chart',
    title: 'Layout Chart Generator',
    description: 'Generate professional lens layout charts for the lab. Visualize optical centers, seg heights, and more.',
    icon: '📋',
    features: ['Visual frame layout', 'Measurement verification', 'Print-ready charts', 'Order accuracy'],
    popular: false
  },
  {
    id: 'prism',
    title: 'Prism Calculator (Prentice Rule)',
    description: 'Calculate induced prism from decentration or required decentration for prescribed prism.',
    icon: '🔺',
    features: ['Prism from decentration', 'Decentration for prism', 'Slab-off calculations', 'Vertical imbalance'],
    popular: false
  },
  {
    id: 'lens-thickness',
    title: 'Lens Thickness Estimator',
    description: 'Estimate edge and center thickness based on prescription, lens material, and frame size.',
    icon: '📐',
    features: ['Edge thickness (minus)', 'Center thickness (plus)', 'Material comparison', 'Frame size impact'],
    popular: false
  },
  {
    id: 'lens-cutout',
    title: 'Lens Cutout Calculator',
    description: 'Check if a lens will cut out before ordering. Enter frame, PD, and blank size to verify fit.',
    icon: '✂️',
    features: ['Minimum blank size', 'Cutout prediction', 'Decentration calculation', 'Frame compatibility'],
    popular: true
  },
  {
    id: 'magnification',
    title: 'Spectacle Magnification Calculator',
    description: 'Calculate the magnification or minification effect of spectacle lenses for aniseikonia concerns.',
    icon: '🔍',
    features: ['Power factor', 'Shape factor', 'Total magnification', 'Iseikonic lens design'],
    popular: false
  },
  {
    id: 'spherical-equivalent',
    title: 'Spherical Equivalent Calculator',
    description: 'Convert sphero-cylindrical prescriptions to spherical equivalent for contact lens fitting and comparisons.',
    icon: '⚖️',
    features: ['SE = Sphere + Cyl/2', 'Both eyes', 'CL fitting', 'Refractive surgery'],
    popular: false
  }
]

export default function CalculatorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorsSchema) }} />
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calculator className="w-8 h-8" />
              <Sparkles className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Free Optical Calculators
            </h1>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Professional-grade tools for opticians. Calculate transpositions, reading powers,
              computer glasses, vertex distance, prism, and more—instantly and accurately.
            </p>
          </div>
        </section>

        {/* Popular Calculators */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Most Popular Calculators
            </h2>
            <p className="text-gray-600 text-center mb-8">
              The tools opticians use every day
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {calculators.filter(c => c.popular).map((calc) => (
                <Link
                  key={calc.id}
                  href={`/calculators/${calc.id}`}
                  className="bg-white rounded-xl border-2 border-emerald-200 p-6 hover:border-emerald-400 hover:shadow-lg transition-all group"
                >
                  <div className="text-4xl mb-3">{calc.icon}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    {calc.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {calc.description}
                  </p>
                  <span className="text-emerald-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Use Calculator <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Calculators */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              All Optical Calculators
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {calculators.map((calc) => (
                <Link
                  key={calc.id}
                  href={`/calculators/${calc.id}`}
                  className="bg-gray-50 rounded-xl p-5 hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{calc.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {calc.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {calc.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {calc.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-gray-500 border border-gray-200">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use Our Calculators */}
        <section className="py-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Opticians Trust Our Calculators
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Instant Results</h3>
                <p className="text-sm text-gray-600">No waiting, no page reloads. Get answers in real-time.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Verified Formulas</h3>
                <p className="text-sm text-gray-600">Industry-standard calculations used by professionals.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Mobile-Friendly</h3>
                <p className="text-sm text-gray-600">Use on any device—phone, tablet, or computer.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Learn As You Go</h3>
                <p className="text-sm text-gray-600">See formulas and steps to understand the math.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-emerald-600 text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Want to Master These Calculations?
            </h2>
            <p className="text-emerald-100 mb-6">
              Go beyond the calculator. Practice problems and learn the formulas for the ABO exam.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                Practice Problems
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-400 transition-colors"
              >
                Full Course
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
