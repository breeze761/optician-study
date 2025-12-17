'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, RotateCcw, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

interface CalculationResult {
  willCutOut: boolean
  minimumBlankSize: number
  decentrationPerLens: number
  totalDecentration: number
  framePD: number
  safetyMargin: number
  availableBlankSizes: { size: number; willWork: boolean }[]
  warnings: string[]
  recommendations: string[]
}

export default function LensCutoutCalculatorPage() {
  // Frame measurements
  const [frameA, setFrameA] = useState('')
  const [frameB, setFrameB] = useState('')
  const [frameDbl, setFrameDbl] = useState('')
  const [frameED, setFrameED] = useState('')

  // Patient measurements
  const [patientPD, setPatientPD] = useState('')
  const [segHeight, setSegHeight] = useState('')

  // Prescription
  const [sphere, setSphere] = useState('')
  const [cylinder, setCylinder] = useState('')
  const [axis, setAxis] = useState('')

  // Lens
  const [blankSize, setBlankSize] = useState('')

  const [result, setResult] = useState<CalculationResult | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  const calculate = () => {
    const A = parseFloat(frameA)
    const B = parseFloat(frameB)
    const DBL = parseFloat(frameDbl)
    const ED = frameED ? parseFloat(frameED) : Math.sqrt(A * A + B * B) // Estimate if not provided
    const pPD = parseFloat(patientPD)
    const blank = blankSize ? parseFloat(blankSize) : 0
    const sph = parseFloat(sphere) || 0
    const cyl = parseFloat(cylinder) || 0

    if (isNaN(A) || isNaN(B) || isNaN(DBL) || isNaN(pPD)) return

    // Frame PD (GCD - Geometric Center Distance)
    const framePD = A + DBL

    // Total decentration needed
    const totalDec = framePD - pPD

    // Decentration per lens (assumes equal distribution)
    const decPerLens = totalDec / 2

    // Minimum blank size formula: ED + (2 × decentration per lens) + safety margin
    // Safety margin typically 2-4mm
    const safetyMargin = 2
    const minBlankSize = Math.ceil(ED + Math.abs(decPerLens * 2) + safetyMargin)

    // Check common blank sizes
    const commonBlanks = [60, 65, 70, 75, 80]
    const availableBlankSizes = commonBlanks.map(size => ({
      size,
      willWork: size >= minBlankSize
    }))

    // Determine if specified blank will cut out
    const willCutOut = blank > 0 ? blank < minBlankSize : false

    // Generate warnings and recommendations
    const warnings: string[] = []
    const recommendations: string[] = []

    if (willCutOut && blank > 0) {
      warnings.push(`A ${blank}mm blank is too small. Minimum needed: ${minBlankSize}mm.`)
    }

    if (Math.abs(decPerLens) > 5) {
      warnings.push(`High decentration (${Math.abs(decPerLens).toFixed(1)}mm/lens) may cause thick edges or thin spots.`)
    }

    if (sph < -6 || sph > 4) {
      warnings.push('High prescription - edge thickness will be significantly affected.')
    }

    if (minBlankSize > 70) {
      warnings.push('Large minimum blank size required. Frame/PD combination may be challenging.')
      recommendations.push('Consider a smaller frame or one with a larger DBL.')
    }

    if (decPerLens > 0) {
      recommendations.push(`Decenter each lens ${Math.abs(decPerLens).toFixed(1)}mm NASALLY (inward).`)
    } else if (decPerLens < 0) {
      recommendations.push(`Decenter each lens ${Math.abs(decPerLens).toFixed(1)}mm TEMPORALLY (outward).`)
    }

    // High minus lens warning
    if (sph < -4) {
      recommendations.push('For minus lenses, smaller frames reduce edge thickness significantly.')
    }

    // High plus lens warning
    if (sph > 3) {
      recommendations.push('For plus lenses, larger eye sizes increase center thickness.')
    }

    const nextBlank = availableBlankSizes.find(b => b.willWork)?.size
    if (nextBlank && (!blank || blank < minBlankSize)) {
      recommendations.push(`Use at least a ${nextBlank}mm blank for this combination.`)
    }

    setResult({
      willCutOut,
      minimumBlankSize: minBlankSize,
      decentrationPerLens: decPerLens,
      totalDecentration: totalDec,
      framePD,
      safetyMargin,
      availableBlankSizes,
      warnings,
      recommendations
    })
  }

  const reset = () => {
    setFrameA('')
    setFrameB('')
    setFrameDbl('')
    setFrameED('')
    setPatientPD('')
    setSegHeight('')
    setSphere('')
    setCylinder('')
    setAxis('')
    setBlankSize('')
    setResult(null)
  }

  const faqs = [
    {
      question: 'What causes a lens to "cut out"?',
      answer: 'A lens "cuts out" when the uncut lens blank isn\'t large enough to completely fill the frame after cutting. This happens when the frame is too large, the patient\'s PD differs significantly from the frame\'s geometric center, or when high-wrap frames require extra material. The lens literally has a piece missing at the edge.'
    },
    {
      question: 'How do I calculate minimum blank size?',
      answer: 'The formula is: Minimum Blank = Effective Diameter (ED) + (2 × Decentration) + Safety Margin. The ED is the longest diagonal of the frame shape. Decentration is half the difference between Frame PD and Patient PD. A 2-4mm safety margin accounts for edging and mounting.'
    },
    {
      question: 'What is decentration and why does it matter?',
      answer: 'Decentration is moving the optical center of the lens from the geometric center of the frame to align with the patient\'s pupil. When the frame PD doesn\'t match the patient PD, we must decenter. More decentration = larger blank needed, and can affect edge thickness and weight distribution.'
    },
    {
      question: 'What is Frame PD (GCD)?',
      answer: 'Frame PD or GCD (Geometric Center Distance) is calculated as A size + DBL (distance between lenses). It represents the distance between the geometric centers of the two lens openings. It\'s different from patient PD, which is the distance between pupils.'
    },
    {
      question: 'What is Effective Diameter (ED)?',
      answer: 'The Effective Diameter is the longest diagonal measurement across the frame\'s lens opening. For rectangular frames, it\'s approximately √(A² + B²). Some frame manufacturers provide the ED, which is more accurate for irregular shapes. It determines the minimum lens size needed.'
    },
    {
      question: 'Why do minus lenses cut out more easily?',
      answer: 'Minus lenses are thinner in the center and thicker at the edges. When you decenter a minus lens nasally (for a smaller patient PD than frame PD), the thin center moves toward the nose, and the thick temporal edge may not reach the frame edge - causing cutout. High minus with large decentration is especially risky.'
    },
    {
      question: 'How does cylinder axis affect cutout?',
      answer: 'Cylinder power adds thickness in one direction. A cylinder at 180° adds thickness top and bottom. A cylinder at 90° adds thickness nasally and temporally. When the thick axis aligns with the direction of decentration, you may need a larger blank to accommodate both the decentration and cylinder thickness.'
    },
    {
      question: 'What can I do if the lens will cut out?',
      answer: 'Options include: 1) Use a larger blank size if available, 2) Choose a smaller frame, 3) Select a frame with larger DBL (less decentration needed), 4) Use a higher index material (thinner lens may come in larger blanks), 5) Consider a different frame shape that has a smaller ED.'
    }
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-rose-600 to-red-700 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 text-rose-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Calculators
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">✂️</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Lens Cutout Calculator
                </h1>
                <p className="text-rose-200 mt-1">
                  Check if a lens will cut out before you order
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Input Section */}
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Frame Measurements</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      A Size (mm)
                    </label>
                    <input
                      type="number"
                      value={frameA}
                      onChange={(e) => setFrameA(e.target.value)}
                      placeholder="54"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      B Size (mm)
                    </label>
                    <input
                      type="number"
                      value={frameB}
                      onChange={(e) => setFrameB(e.target.value)}
                      placeholder="40"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      DBL (mm)
                    </label>
                    <input
                      type="number"
                      value={frameDbl}
                      onChange={(e) => setFrameDbl(e.target.value)}
                      placeholder="18"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ED (optional)
                    </label>
                    <input
                      type="number"
                      value={frameED}
                      onChange={(e) => setFrameED(e.target.value)}
                      placeholder="Auto"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-4">Patient Measurements</h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Patient PD (mm) *
                    </label>
                    <input
                      type="number"
                      value={patientPD}
                      onChange={(e) => setPatientPD(e.target.value)}
                      placeholder="64"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Seg Height (optional)
                    </label>
                    <input
                      type="number"
                      value={segHeight}
                      onChange={(e) => setSegHeight(e.target.value)}
                      placeholder="For progressives"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-4">Prescription (optional)</h2>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sphere
                    </label>
                    <input
                      type="number"
                      step="0.25"
                      value={sphere}
                      onChange={(e) => setSphere(e.target.value)}
                      placeholder="-4.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cylinder
                    </label>
                    <input
                      type="number"
                      step="0.25"
                      value={cylinder}
                      onChange={(e) => setCylinder(e.target.value)}
                      placeholder="-1.50"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Axis
                    </label>
                    <input
                      type="number"
                      value={axis}
                      onChange={(e) => setAxis(e.target.value)}
                      placeholder="180"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-4">Lens Blank</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Available Blank Size (mm)
                  </label>
                  <select
                    value={blankSize}
                    onChange={(e) => setBlankSize(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  >
                    <option value="">Check all common sizes</option>
                    <option value="55">55mm</option>
                    <option value="60">60mm</option>
                    <option value="65">65mm (standard)</option>
                    <option value="70">70mm</option>
                    <option value="75">75mm</option>
                    <option value="80">80mm</option>
                  </select>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={calculate}
                    disabled={!frameA || !frameB || !frameDbl || !patientPD}
                    className="flex-1 bg-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Check for Cutout
                  </button>
                  <button
                    onClick={reset}
                    className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Result Section */}
              {result && (
                <div className={`p-6 ${result.willCutOut ? 'bg-red-50' : 'bg-green-50'}`}>
                  {/* Status */}
                  <div className={`flex items-center gap-3 mb-4 p-4 rounded-xl ${
                    result.willCutOut
                      ? 'bg-red-100 border border-red-200'
                      : 'bg-green-100 border border-green-200'
                  }`}>
                    {result.willCutOut ? (
                      <>
                        <XCircle className="w-8 h-8 text-red-600" />
                        <div>
                          <div className="font-bold text-red-900">WILL CUT OUT</div>
                          <div className="text-sm text-red-700">The specified blank is too small</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-8 h-8 text-green-600" />
                        <div>
                          <div className="font-bold text-green-900">SHOULD FIT</div>
                          <div className="text-sm text-green-700">Lens blank meets minimum requirements</div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Calculations */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 mb-4">
                    <h3 className="font-semibold text-gray-900 mb-4">Calculations</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Frame PD (A + DBL)</div>
                        <div className="text-xl font-bold text-gray-900">{result.framePD} mm</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Total Decentration</div>
                        <div className="text-xl font-bold text-gray-900">{result.totalDecentration.toFixed(1)} mm</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Decentration/Lens</div>
                        <div className="text-xl font-bold text-gray-900">
                          {Math.abs(result.decentrationPerLens).toFixed(1)} mm
                          <span className="text-sm font-normal text-gray-500 ml-1">
                            {result.decentrationPerLens > 0 ? 'nasal' : result.decentrationPerLens < 0 ? 'temporal' : ''}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Minimum Blank Size</div>
                        <div className="text-xl font-bold text-rose-600">{result.minimumBlankSize} mm</div>
                      </div>
                    </div>
                  </div>

                  {/* Blank Size Compatibility */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 mb-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Blank Size Compatibility</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.availableBlankSizes.map(({ size, willWork }) => (
                        <div
                          key={size}
                          className={`px-4 py-2 rounded-lg font-medium ${
                            willWork
                              ? 'bg-green-100 text-green-800 border border-green-200'
                              : 'bg-red-100 text-red-800 border border-red-200'
                          }`}
                        >
                          {size}mm {willWork ? '✓' : '✗'}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Warnings */}
                  {result.warnings.length > 0 && (
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-4">
                      <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Warnings
                      </h3>
                      <ul className="space-y-1 text-sm text-amber-800">
                        {result.warnings.map((w, i) => (
                          <li key={i}>• {w}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Recommendations */}
                  {result.recommendations.length > 0 && (
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">Recommendations</h3>
                      <ul className="space-y-1 text-sm text-blue-800">
                        {result.recommendations.map((r, i) => (
                          <li key={i}>• {r}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Formula Reference */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Key Formulas
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Frame PD (GCD)</h3>
                <div className="font-mono bg-white rounded-lg p-4 text-center text-lg">
                  Frame PD = A + DBL
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  The distance between the geometric centers of the lens openings.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Decentration</h3>
                <div className="font-mono bg-white rounded-lg p-4 text-center text-lg">
                  Dec/lens = (Frame PD - Patient PD) / 2
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Positive = decenter nasal (in). Negative = decenter temporal (out).
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Effective Diameter (ED)</h3>
                <div className="font-mono bg-white rounded-lg p-4 text-center text-lg">
                  ED ≈ √(A² + B²)
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  The longest diagonal of the frame shape. Use manufacturer&apos;s ED if available.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Minimum Blank Size</h3>
                <div className="font-mono bg-white rounded-lg p-4 text-center text-lg">
                  MBS = ED + 2|Dec| + Safety
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Safety margin is typically 2-4mm for edging tolerance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Related Calculators
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/transposition" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🔄</div>
                <h3 className="font-medium text-gray-900">Transposition</h3>
                <p className="text-sm text-gray-500">Convert plus/minus cylinder</p>
              </Link>
              <Link href="/calculators/prism" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🔺</div>
                <h3 className="font-medium text-gray-900">Prism Calculator</h3>
                <p className="text-sm text-gray-500">Calculate induced prism from decentration</p>
              </Link>
              <Link href="/calculators/vertex-distance" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">📏</div>
                <h3 className="font-medium text-gray-900">Vertex Distance</h3>
                <p className="text-sm text-gray-500">Compensate high Rx for vertex changes</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
