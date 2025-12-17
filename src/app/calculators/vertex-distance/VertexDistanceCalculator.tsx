'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Calculator, ChevronDown, ChevronUp, Eye, Ruler, Info } from 'lucide-react'

export default function VertexDistanceCalculator() {
  const [originalPower, setOriginalPower] = useState('')
  const [originalVertex, setOriginalVertex] = useState('12')
  const [newVertex, setNewVertex] = useState('14')
  const [compensatedPower, setCompensatedPower] = useState<string | null>(null)
  const [showSteps, setShowSteps] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const calculateCompensatedPower = () => {
    const power = parseFloat(originalPower)
    const origV = parseFloat(originalVertex)
    const newV = parseFloat(newVertex)

    if (isNaN(power) || isNaN(origV) || isNaN(newV)) {
      setCompensatedPower(null)
      return
    }

    // Convert mm to meters for formula
    const origVMeters = origV / 1000
    const newVMeters = newV / 1000

    // Vertex distance compensation formula
    // New Power = Original Power / (1 - (Original Power +� Change in Vertex Distance))
    // Or using effective power: Feff = F / (1 - d +� F)

    // First find effective power at original vertex
    const effectivePower = power / (1 - (origVMeters * power))

    // Then find compensated power at new vertex
    const compensated = effectivePower / (1 + (newVMeters * effectivePower))

    setCompensatedPower(compensated.toFixed(2))
    setShowSteps(true)
  }

  const getExplanation = () => {
    const power = parseFloat(originalPower)
    const origV = parseFloat(originalVertex)
    const newV = parseFloat(newVertex)
    const comp = parseFloat(compensatedPower || '0')

    if (isNaN(power) || isNaN(origV) || isNaN(newV)) return null

    const vertexChange = newV - origV
    const powerChange = comp - power

    return {
      power,
      origV,
      newV,
      vertexChange,
      powerChange,
      compensated: comp
    }
  }

  const explanation = getExplanation()

  const faqs = [
    {
      question: 'What is vertex distance?',
      answer: 'Vertex distance is the distance from the back surface of a lens to the front surface of the cornea. For spectacles, this is typically 12-14mm. For contact lenses, it\'s effectively 0mm since they sit on the cornea.'
    },
    {
      question: 'When does vertex distance matter?',
      answer: 'Vertex distance compensation is clinically significant for powers greater than -�4.00D. For lower powers, the difference is usually negligible (less than 0.12D). High myopes and hyperopes need careful vertex distance consideration.'
    },
    {
      question: 'Why do contact lens powers differ from spectacle powers?',
      answer: 'Contact lenses sit directly on the cornea (0mm vertex), while spectacles sit 12-14mm away. Moving the lens closer to the eye (decreasing vertex distance) requires LESS minus power for myopes and MORE plus power for hyperopes to maintain the same effective correction.'
    },
    {
      question: 'What is the formula for vertex distance compensation?',
      answer: 'The formula is: Compensated Power = F / (1 - (d +� F)), where F is the original power in diopters and d is the vertex distance change in meters. For converting from spectacles to contacts, d is negative (moving closer to eye).'
    },
    {
      question: 'How do I convert spectacle Rx to contact lens Rx?',
      answer: 'To convert from spectacles (typically 12mm vertex) to contacts (0mm vertex): 1) Use a negative vertex change, 2) For minus powers, the contact lens power will be less minus (e.g., -6.00 spectacles G�� -5.50 contacts), 3) For plus powers, the contact lens power will be more plus.'
    },
    {
      question: 'What if the refraction was done at a different vertex distance?',
      answer: 'If the phoropter was positioned at a different vertex distance than standard (12mm), the spectacle prescription may need compensation. Always note the vertex distance used during refraction for high prescriptions.'
    },
    {
      question: 'Does cylinder power need vertex compensation?',
      answer: 'Yes, cylinder power is also affected by vertex distance changes. Each meridian should be compensated separately. For significant astigmatism with high powers, both sphere and cylinder need adjustment.'
    },
    {
      question: 'What\'s the "4 diopter rule"?',
      answer: 'As a general guideline, vertex distance compensation is clinically significant when the power exceeds -�4.00D. Below this threshold, the compensation is typically less than 0.12D and may not be noticeable to the patient.'
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
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Ruler className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Vertex Distance Calculator
                </h1>
                <p className="text-gray-600">
                  Compensate lens power for vertex distance changes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">

              {/* Info Box */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-purple-900">
                    <p className="font-medium mb-1">When to use this calculator:</p>
                    <ul className="list-disc list-inside space-y-1 text-purple-800">
                      <li>Converting spectacle Rx to contact lens Rx (use 0mm for new vertex)</li>
                      <li>Frame changes with different vertex distances</li>
                      <li>High prescriptions (-�4.00D or greater)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Enter Prescription</h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Original Lens Power (Diopters)
                    </label>
                    <input
                      type="number"
                      step="0.25"
                      value={originalPower}
                      onChange={(e) => setOriginalPower(e.target.value)}
                      placeholder="e.g., -6.00 or +4.50"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Use negative for minus powers, positive for plus
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Original Vertex Distance (mm)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        step="0.5"
                        min="0"
                        max="30"
                        value={originalVertex}
                        onChange={(e) => setOriginalVertex(e.target.value)}
                        placeholder="12"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 font-mono"
                      />
                      <span className="flex items-center text-gray-500 font-medium">mm</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <button type="button" onClick={() => setOriginalVertex('0')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${originalVertex === '0' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>0 (CL)</button>
                      <button type="button" onClick={() => setOriginalVertex('10')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${originalVertex === '10' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>10</button>
                      <button type="button" onClick={() => setOriginalVertex('12')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${originalVertex === '12' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>12</button>
                      <button type="button" onClick={() => setOriginalVertex('13.5')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${originalVertex === '13.5' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>13.5</button>
                      <button type="button" onClick={() => setOriginalVertex('14')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${originalVertex === '14' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>14</button>
                      <button type="button" onClick={() => setOriginalVertex('15')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${originalVertex === '15' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>15</button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Vertex Distance (mm)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        step="0.5"
                        min="0"
                        max="30"
                        value={newVertex}
                        onChange={(e) => setNewVertex(e.target.value)}
                        placeholder="0"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 font-mono"
                      />
                      <span className="flex items-center text-gray-500 font-medium">mm</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <button type="button" onClick={() => setNewVertex('0')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${newVertex === '0' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>0 (CL)</button>
                      <button type="button" onClick={() => setNewVertex('10')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${newVertex === '10' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>10</button>
                      <button type="button" onClick={() => setNewVertex('12')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${newVertex === '12' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>12</button>
                      <button type="button" onClick={() => setNewVertex('13.5')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${newVertex === '13.5' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>13.5</button>
                      <button type="button" onClick={() => setNewVertex('14')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${newVertex === '14' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>14</button>
                      <button type="button" onClick={() => setNewVertex('15')} className={`px-3 py-1 text-xs rounded-full border transition-colors ${newVertex === '15' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>15</button>
                    </div>
                  </div>

                  {/* Common Scenarios Quick Buttons */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-700 mb-3">Common Conversions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => { setOriginalVertex('12'); setNewVertex('0'); }}
                        className="px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-colors text-left"
                      >
                        <span className="font-medium block">Spectacles G�� Contacts</span>
                        <span className="text-gray-500">12mm G�� 0mm</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => { setOriginalVertex('0'); setNewVertex('12'); }}
                        className="px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-colors text-left"
                      >
                        <span className="font-medium block">Contacts G�� Spectacles</span>
                        <span className="text-gray-500">0mm G�� 12mm</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => { setOriginalVertex('13.5'); setNewVertex('12'); }}
                        className="px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-colors text-left"
                      >
                        <span className="font-medium block">Phoropter G�� Frame</span>
                        <span className="text-gray-500">13.5mm G�� 12mm</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => { setOriginalVertex('12'); setNewVertex('14'); }}
                        className="px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-colors text-left"
                      >
                        <span className="font-medium block">Frame Change</span>
                        <span className="text-gray-500">12mm G�� 14mm</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={calculateCompensatedPower}
                    disabled={!originalPower}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-colors ${
                      originalPower
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Calculator className="w-5 h-5" />
                    Calculate Compensated Power
                  </button>
                </div>

                {/* Result Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Result</h3>

                  {compensatedPower !== null ? (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white text-center">
                        <p className="text-sm opacity-90 mb-1">Compensated Power</p>
                        <p className="text-4xl font-bold mb-2">
                          {parseFloat(compensatedPower) > 0 ? '+' : ''}{compensatedPower} D
                        </p>
                        <p className="text-sm opacity-75">
                          at {newVertex}mm vertex distance
                        </p>
                      </div>

                      {explanation && (
                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Original Power:</span>
                            <span className="font-medium">{explanation.power > 0 ? '+' : ''}{explanation.power.toFixed(2)} D</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Vertex Change:</span>
                            <span className="font-medium">{explanation.origV}mm G�� {explanation.newV}mm ({explanation.vertexChange > 0 ? '+' : ''}{explanation.vertexChange}mm)</span>
                          </div>
                          <div className="flex justify-between text-sm border-t border-gray-200 pt-3">
                            <span className="text-gray-600">Power Adjustment:</span>
                            <span className={`font-medium ${explanation.powerChange > 0 ? 'text-green-600' : explanation.powerChange < 0 ? 'text-red-600' : ''}`}>
                              {explanation.powerChange > 0 ? '+' : ''}{explanation.powerChange.toFixed(2)} D
                            </span>
                          </div>
                        </div>
                      )}

                      {showSteps && explanation && (
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            type="button"
                            onClick={() => setShowSteps(!showSteps)}
                            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <span className="font-medium text-gray-900">Calculation Steps</span>
                            {showSteps ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                          <div className="p-4 space-y-3 text-sm">
                            <div className="font-mono bg-purple-50 p-3 rounded">
                              <p className="text-gray-600 mb-2">Formula: F' = F / (1 - d +� F)</p>
                              <p>where:</p>
                              <ul className="list-disc list-inside text-gray-700 ml-2">
                                <li>F = original power ({explanation.power} D)</li>
                                <li>d = vertex distance change ({(explanation.newV - explanation.origV) / 1000} m)</li>
                                <li>F' = compensated power</li>
                              </ul>
                            </div>
                            <p className="text-gray-700">
                              {explanation.vertexChange < 0 ? (
                                <>Moving the lens closer to the eye (decreasing vertex distance) means {explanation.power < 0 ? 'less minus power is needed' : 'more plus power is needed'}.</>
                              ) : (
                                <>Moving the lens farther from the eye (increasing vertex distance) means {explanation.power < 0 ? 'more minus power is needed' : 'less plus power is needed'}.</>
                              )}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-xl p-8 text-center">
                      <Eye className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">
                        Enter a lens power and calculate to see the compensated result
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Reference */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Reference Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Spectacle Rx (12mm)</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Contact Lens Rx (0mm)</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Difference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">-4.00 D</td>
                        <td className="px-4 py-2">-3.75 D</td>
                        <td className="px-4 py-2 text-green-600">+0.25 D (less minus)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">-6.00 D</td>
                        <td className="px-4 py-2">-5.50 D</td>
                        <td className="px-4 py-2 text-green-600">+0.50 D (less minus)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">-8.00 D</td>
                        <td className="px-4 py-2">-7.25 D</td>
                        <td className="px-4 py-2 text-green-600">+0.75 D (less minus)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">-10.00 D</td>
                        <td className="px-4 py-2">-8.75 D</td>
                        <td className="px-4 py-2 text-green-600">+1.25 D (less minus)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">+4.00 D</td>
                        <td className="px-4 py-2">+4.25 D</td>
                        <td className="px-4 py-2 text-blue-600">+0.25 D (more plus)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">+6.00 D</td>
                        <td className="px-4 py-2">+6.50 D</td>
                        <td className="px-4 py-2 text-blue-600">+0.50 D (more plus)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-gray-500 italic">
                  Note: Values are approximate. Always verify with exact calculations for patient prescriptions.
                </p>
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

            {/* Related Calculators */}
            <div className="mt-8 bg-gray-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Calculators</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/calculators/transposition"
                  className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium text-gray-900">Transposition Calculator</h4>
                  <p className="text-sm text-gray-600">Convert between plus and minus cylinder forms</p>
                </Link>
                <Link
                  href="/calculators/lens-cutout"
                  className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium text-gray-900">Lens Cutout Calculator</h4>
                  <p className="text-sm text-gray-600">Check if lenses will cut out based on measurements</p>
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
