'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Search, Eye, ChevronDown, ChevronUp, Filter, Info, ExternalLink } from 'lucide-react'

interface ProgressiveLens {
  brand: string
  manufacturer: string
  nasalEngraving: string
  temporalEngraving: string
  addRange: string
  corridorLength: string
  features: string[]
  notes?: string
}

const progressiveLenses: ProgressiveLens[] = [
  // Essilor
  { brand: 'Varilux Comfort Max', manufacturer: 'Essilor', nasalEngraving: 'VCM', temporalEngraving: 'E', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Wide reading zone', 'Easy adaptation', 'All-purpose'] },
  { brand: 'Varilux Physio', manufacturer: 'Essilor', nasalEngraving: 'VP', temporalEngraving: 'E', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['W.A.V.E. technology', 'High resolution', 'Premium'] },
  { brand: 'Varilux X Series', manufacturer: 'Essilor', nasalEngraving: 'VX', temporalEngraving: 'E', addRange: '+0.75 to +3.50', corridorLength: '11-18mm', features: ['Xtend technology', 'Arms-length vision', 'Premium digital'] },
  { brand: 'Varilux XR Series', manufacturer: 'Essilor', nasalEngraving: 'VXR', temporalEngraving: 'E', addRange: '+0.75 to +3.50', corridorLength: '11-18mm', features: ['Latest technology', 'AI-powered design', 'Ultra-premium'] },
  { brand: 'Varilux S Series', manufacturer: 'Essilor', nasalEngraving: 'VS', temporalEngraving: 'E', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Nanoptix', 'Synchroeyes', 'Sharp vision in motion'] },
  { brand: 'Varilux Liberty', manufacturer: 'Essilor', nasalEngraving: 'VL', temporalEngraving: 'E', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Entry-level', 'Basic progressive', 'Value option'] },
  { brand: 'Essilor Ideal Advanced', manufacturer: 'Essilor', nasalEngraving: 'IDA', temporalEngraving: 'E', addRange: '+0.75 to +3.50', corridorLength: '14-17mm', features: ['Digital surfacing', 'Customizable', 'Mid-range'] },

  // Zeiss
  { brand: 'Zeiss Progressive Individual 2', manufacturer: 'Zeiss', nasalEngraving: 'ZI2', temporalEngraving: 'Z', addRange: '+0.75 to +3.50', corridorLength: '13-19mm', features: ['Individual fitting', 'FrameFit+', 'Premium'] },
  { brand: 'Zeiss Progressive Plus', manufacturer: 'Zeiss', nasalEngraving: 'ZP', temporalEngraving: 'Z', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Luminance Design', 'Wide fields', 'Mid-premium'] },
  { brand: 'Zeiss Progressive Classic', manufacturer: 'Zeiss', nasalEngraving: 'ZC', temporalEngraving: 'Z', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Balanced design', 'Entry progressive', 'Budget-friendly'] },
  { brand: 'Zeiss SmartLife', manufacturer: 'Zeiss', nasalEngraving: 'ZSL', temporalEngraving: 'Z', addRange: '+0.75 to +3.50', corridorLength: '13-18mm', features: ['Age Intelligence', 'Smart Dynamic Optics', 'Digital lifestyle'] },

  // Hoya
  { brand: 'Hoyalux iD MyStyle V+', manufacturer: 'Hoya', nasalEngraving: 'IDM', temporalEngraving: 'H', addRange: '+0.75 to +3.50', corridorLength: '11-19mm', features: ['3D Binocular Vision', 'Personalized', 'Premium'] },
  { brand: 'Hoyalux iD LifeStyle V+', manufacturer: 'Hoya', nasalEngraving: 'IDL', temporalEngraving: 'H', addRange: '+0.75 to +3.50', corridorLength: '11-19mm', features: ['Lifestyle optimization', 'Digital surfacing', 'Mid-premium'] },
  { brand: 'Hoyalux Amplitude', manufacturer: 'Hoya', nasalEngraving: 'AMP', temporalEngraving: 'H', addRange: '+0.75 to +3.50', corridorLength: '14-17mm', features: ['Boost technology', 'Near vision focus', 'Wide reading'] },
  { brand: 'Hoya Array', manufacturer: 'Hoya', nasalEngraving: 'ARY', temporalEngraving: 'H', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Standard progressive', 'Entry-level', 'Value'] },
  { brand: 'Hoyalux GP Wide', manufacturer: 'Hoya', nasalEngraving: 'GPW', temporalEngraving: 'H', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Wide corridor', 'General purpose', 'Mid-range'] },

  // Shamir
  { brand: 'Shamir Autograph III', manufacturer: 'Shamir', nasalEngraving: 'AG3', temporalEngraving: 'S', addRange: '+0.75 to +3.50', corridorLength: '12-18mm', features: ['Natural Posture', 'EyePoint Technology', 'Premium'] },
  { brand: 'Shamir Autograph Intelligence', manufacturer: 'Shamir', nasalEngraving: 'AGI', temporalEngraving: 'S', addRange: '+0.75 to +3.50', corridorLength: '11-18mm', features: ['AI design', 'Near variable distance', 'Ultra-premium'] },
  { brand: 'Shamir Genesis', manufacturer: 'Shamir', nasalEngraving: 'GEN', temporalEngraving: 'S', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Entry progressive', 'Good adaptation', 'Value'] },
  { brand: 'Shamir Spectrum', manufacturer: 'Shamir', nasalEngraving: 'SPT', temporalEngraving: 'S', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Mid-range', 'Wide zones', 'Balanced design'] },
  { brand: 'Shamir Duo', manufacturer: 'Shamir', nasalEngraving: 'DUO', temporalEngraving: 'S', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Office lens', 'Near/intermediate', 'Computer work'] },

  // Rodenstock
  { brand: 'Rodenstock Impression FreeSign 3', manufacturer: 'Rodenstock', nasalEngraving: 'IFS', temporalEngraving: 'R', addRange: '+0.75 to +3.50', corridorLength: '12-18mm', features: ['DNEye Pro', 'Individual parameters', 'Premium'] },
  { brand: 'Rodenstock Progressiv Life Free', manufacturer: 'Rodenstock', nasalEngraving: 'PLF', temporalEngraving: 'R', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Freeform surfacing', 'Personalized', 'Mid-premium'] },
  { brand: 'Rodenstock Progressiv Pure Life', manufacturer: 'Rodenstock', nasalEngraving: 'PPL', temporalEngraving: 'R', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Standard progressive', 'Reliable', 'Value'] },

  // Nikon
  { brand: 'Nikon Presio Power', manufacturer: 'Nikon', nasalEngraving: 'NPP', temporalEngraving: 'N', addRange: '+0.75 to +3.50', corridorLength: '11-18mm', features: ['SeeMax technology', 'Dual-surface', 'Premium'] },
  { brand: 'Nikon Presio Balance', manufacturer: 'Nikon', nasalEngraving: 'NPB', temporalEngraving: 'N', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Balanced design', 'Mid-range', 'Easy adaptation'] },
  { brand: 'Nikon Home & Office', manufacturer: 'Nikon', nasalEngraving: 'NHO', temporalEngraving: 'N', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Occupational lens', 'Indoor use', 'Near/intermediate focus'] },
  { brand: 'Nikon Online Wide', manufacturer: 'Nikon', nasalEngraving: 'NOW', temporalEngraving: 'N', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Entry-level', 'Wide zones', 'Value'] },

  // Seiko
  { brand: 'Seiko Brilliance', manufacturer: 'Seiko', nasalEngraving: 'BRI', temporalEngraving: 'SK', addRange: '+0.75 to +3.50', corridorLength: '11-18mm', features: ['Personalized', 'Digital surfacing', 'Premium'] },
  { brand: 'Seiko Superior', manufacturer: 'Seiko', nasalEngraving: 'SUP', temporalEngraving: 'SK', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Wide corridor', 'Balanced', 'Mid-range'] },
  { brand: 'Seiko Achieve', manufacturer: 'Seiko', nasalEngraving: 'ACH', temporalEngraving: 'SK', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Entry progressive', 'Easy fit', 'Value'] },

  // Indo
  { brand: 'Indo Maxima', manufacturer: 'Indo', nasalEngraving: 'MAX', temporalEngraving: 'I', addRange: '+0.75 to +3.50', corridorLength: '12-18mm', features: ['Premium design', 'Personalized fitting', 'Wide zones'] },
  { brand: 'Indo LifeMade', manufacturer: 'Indo', nasalEngraving: 'LFM', temporalEngraving: 'I', addRange: '+0.75 to +3.50', corridorLength: '14-18mm', features: ['Mid-range', 'Lifestyle optimized', 'Good adaptation'] },
]

export default function ProgressiveIdentifier() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedManufacturer, setSelectedManufacturer] = useState<string | null>(null)
  const [expandedLens, setExpandedLens] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const manufacturers = useMemo(() => {
    return [...new Set(progressiveLenses.map(l => l.manufacturer))].sort()
  }, [])

  const filteredLenses = useMemo(() => {
    return progressiveLenses.filter(lens => {
      const matchesSearch = searchTerm === '' ||
        lens.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lens.nasalEngraving.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lens.temporalEngraving.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lens.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesManufacturer = !selectedManufacturer || lens.manufacturer === selectedManufacturer

      return matchesSearch && matchesManufacturer
    })
  }, [searchTerm, selectedManufacturer])

  const faqs = [
    {
      question: 'Where are progressive lens engravings located?',
      answer: 'Progressive lens engravings are etched into the front surface of the lens in the temporal and nasal areas, approximately 3-4mm above the reading zone (near the 180 degree line). They are subtle and require good lighting and magnification to see. Look at the lens at an angle with light reflecting off the surface.'
    },
    {
      question: 'What do the engravings tell you?',
      answer: 'The nasal engraving typically identifies the lens brand/design, while the temporal engraving usually shows the manufacturer code and the addition power. Some lenses may also have fitting cross markers or other reference points.'
    },
    {
      question: 'How do I find the add power from engravings?',
      answer: 'Most progressive lenses have the add power engraved on the temporal side, often as a number like "200" meaning +2.00, or "25" meaning +2.50. Some manufacturers use different notation systems, so refer to the specific manufacturer guide.'
    },
    {
      question: 'Why would I need to identify a progressive lens?',
      answer: 'Common reasons include: reordering the same lens design for a satisfied patient, troubleshooting adaptation issues by understanding the lens design, determining if a lens is single vision or progressive, and matching lens designs for second pairs.'
    },
    {
      question: 'What if I can\'t find engravings?',
      answer: 'If engravings are not visible, the lens may be: a single vision lens (check for prism or seg line), an older lens with worn engravings, a budget lens without standard engravings, or you may need better lighting/magnification. Try a lensometer to detect add power.'
    },
    {
      question: 'What\'s the difference between corridor lengths?',
      answer: 'Short corridors (11-13mm) are better for smaller frames but have narrower reading areas. Standard corridors (14-15mm) offer balanced performance. Long corridors (17-19mm) provide wider reading zones but need taller frames. Choose based on frame B measurement and patient lifestyle.'
    },
    {
      question: 'How do fitting heights relate to corridor length?',
      answer: 'The minimum fitting height is typically the corridor length + 4-5mm. For example, a 14mm corridor lens needs minimum 18-19mm fitting height. Always follow manufacturer specifications for each lens design.'
    },
    {
      question: 'Can I mix and match progressive lens brands between eyes?',
      answer: 'This is generally not recommended. Different lens designs have different optical characteristics, corridor lengths, and aberration profiles. Mixing brands can cause adaptation issues, visual discomfort, and binocular vision problems.'
    }
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Calculators
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Progressive Lens Identifier
                </h1>
                <p className="text-gray-600">
                  Identify progressive lens designs by manufacturer engravings
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">

              {/* Info Box */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-indigo-900">
                    <p className="font-medium mb-1">How to use this tool:</p>
                    <ol className="list-decimal list-inside space-y-1 text-indigo-800">
                      <li>Hold the lens at an angle under good lighting</li>
                      <li>Look for subtle engravings in the temporal and nasal areas (near the 180 degree line)</li>
                      <li>Search for the engraving code below to identify the lens</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by engraving code, brand, or manufacturer..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={selectedManufacturer || ''}
                    onChange={(e) => setSelectedManufacturer(e.target.value || null)}
                    className="pl-10 pr-8 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
                  >
                    <option value="">All Manufacturers</option>
                    {manufacturers.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <p className="text-sm text-gray-500 mb-4">
                Showing {filteredLenses.length} of {progressiveLenses.length} progressive lens designs
              </p>

              {/* Results List */}
              <div className="space-y-3">
                {filteredLenses.length === 0 ? (
                  <div className="text-center py-12">
                    <Eye className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No lenses found matching your search.</p>
                    <p className="text-sm text-gray-400 mt-1">Try a different engraving code or manufacturer.</p>
                  </div>
                ) : (
                  filteredLenses.map((lens) => (
                    <div
                      key={`${lens.brand}-${lens.nasalEngraving}`}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedLens(expandedLens === lens.brand ? null : lens.brand)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex gap-2">
                            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">
                              {lens.nasalEngraving}
                            </span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded font-mono text-sm">
                              {lens.temporalEngraving}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{lens.brand}</p>
                            <p className="text-sm text-gray-500">{lens.manufacturer}</p>
                          </div>
                        </div>
                        {expandedLens === lens.brand ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      {expandedLens === lens.brand && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Specifications</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Add Range:</span>
                                  <span className="font-medium">{lens.addRange}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Corridor Length:</span>
                                  <span className="font-medium">{lens.corridorLength}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Nasal Engraving:</span>
                                  <span className="font-mono font-bold text-indigo-600">{lens.nasalEngraving}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Temporal Marker:</span>
                                  <span className="font-mono">{lens.temporalEngraving}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Features</h4>
                              <div className="flex flex-wrap gap-2">
                                {lens.features.map((feature, idx) => (
                                  <span
                                    key={idx}
                                    className="bg-white px-2 py-1 rounded text-xs text-gray-600 border border-gray-200"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                              {lens.notes && (
                                <p className="mt-3 text-sm text-gray-600 italic">{lens.notes}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Engraving Location Guide */}
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">How to Find Progressive Lens Engravings</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Engraving Locations</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="relative aspect-[4/3] bg-white rounded-lg border-2 border-gray-300 overflow-hidden">
                      {/* Simple lens diagram */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-32 border-2 border-gray-400 rounded-[50%] relative">
                          {/* Nasal side */}
                          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                            <div className="bg-indigo-500 text-white text-xs px-2 py-1 rounded">NASAL</div>
                            <p className="text-xs text-gray-500 mt-1">Brand ID</p>
                          </div>
                          {/* Temporal side */}
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-right">
                            <div className="bg-gray-500 text-white text-xs px-2 py-1 rounded">TEMPORAL</div>
                            <p className="text-xs text-gray-500 mt-1">Add Power</p>
                          </div>
                          {/* Distance zone */}
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-center">
                            <p className="text-xs text-gray-400">Distance</p>
                          </div>
                          {/* Near zone */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
                            <p className="text-xs text-gray-400">Near</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Engravings are located approximately 3-4mm above the reading zone on both sides.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Tips for Finding Engravings</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <span className="text-indigo-600 font-bold">1.</span>
                      <span className="text-sm text-gray-600">Use a bright light source at an angle to the lens surface</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-600 font-bold">2.</span>
                      <span className="text-sm text-gray-600">Hold the lens against a dark background</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-600 font-bold">3.</span>
                      <span className="text-sm text-gray-600">Use magnification if needed (2-4x loupe)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-600 font-bold">4.</span>
                      <span className="text-sm text-gray-600">Tilt and rotate the lens slowly to catch the light</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-600 font-bold">5.</span>
                      <span className="text-sm text-gray-600">Look in the area 15-20mm from the lens center horizontally</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQs Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-5 pb-5 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Related Tools */}
            <div className="mt-8 bg-gray-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Tools</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/calculators/vertex-distance"
                  className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium text-gray-900">Vertex Distance Calculator</h4>
                  <p className="text-sm text-gray-600">Compensate power for vertex distance changes</p>
                </Link>
                <Link
                  href="/calculators/layout-chart"
                  className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium text-gray-900">Layout Chart Generator</h4>
                  <p className="text-sm text-gray-600">Create professional lens layout charts</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
