'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, RotateCcw, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'

export default function TranspositionCalculator() {
  const [sphere, setSphere] = useState('')
  const [cylinder, setCylinder] = useState('')
  const [axis, setAxis] = useState('')
  const [result, setResult] = useState<{
    sphere: string
    cylinder: string
    axis: string
  } | null>(null)
  const [showSteps, setShowSteps] = useState(true)
  const [copied, setCopied] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  const calculate = () => {
    const sph = parseFloat(sphere)
    const cyl = parseFloat(cylinder)
    const ax = parseInt(axis)

    if (isNaN(sph) || isNaN(cyl) || isNaN(ax)) {
      return
    }

    // Transposition formula
    const newSphere = sph + cyl
    const newCylinder = -cyl
    let newAxis = ax + 90
    if (newAxis > 180) newAxis -= 180

    setResult({
      sphere: newSphere >= 0 ? `+${newSphere.toFixed(2)}` : newSphere.toFixed(2),
      cylinder: newCylinder >= 0 ? `+${newCylinder.toFixed(2)}` : newCylinder.toFixed(2),
      axis: newAxis.toString().padStart(3, '0')
    })
  }

  const reset = () => {
    setSphere('')
    setCylinder('')
    setAxis('')
    setResult(null)
  }

  const copyResult = () => {
    if (result) {
      const text = `${result.sphere} ${result.cylinder} x ${result.axis}`
      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const faqs = [
    {
      question: 'What is prescription transposition?',
      answer: 'Transposition is the process of converting an eyeglass prescription from plus cylinder format to minus cylinder format, or vice versa. Both formats describe the exact same prescriptionG��they\'re just written differently. The optical power and correction are identical.'
    },
    {
      question: 'Why do I need to transpose prescriptions?',
      answer: 'Different professionals use different conventions: ophthalmologists traditionally write in plus cylinder, while optometrists and optical labs typically use minus cylinder. When you receive an Rx in plus cylinder but your lab software requires minus cylinder (or vice versa), you need to transpose it. Many opticians transpose multiple times daily.'
    },
    {
      question: 'What is the transposition formula?',
      answer: 'The transposition formula has three steps: 1) Add the sphere and cylinder algebraically to get the new sphere. 2) Change the sign of the cylinder (+ becomes -, or - becomes +). 3) Change the axis by 90-� (add 90 if under 90, subtract 90 if over 90, keeping between 1-180).'
    },
    {
      question: 'Does transposition change the prescription power?',
      answer: 'No! Transposition does NOT change the optical power of the prescription. Both forms are optically identical. The patient will see exactly the same through either version. It\'s simply a different way of writing the same correction.'
    },
    {
      question: 'What is the difference between plus and minus cylinder?',
      answer: 'Plus cylinder notation places the sphere at the flattest meridian of the lens, while minus cylinder places the sphere at the steepest meridian. Historically, ophthalmologists used plus cylinder (from retinoscopy conventions), while optometrists adopted minus cylinder (matching phoropter design). Modern practice varies by country and practitioner.'
    },
    {
      question: 'How do I know if an Rx is plus or minus cylinder?',
      answer: 'Look at the cylinder value: if it has a + sign (like +1.00), it\'s plus cylinder format. If it has a - sign (like -1.00), it\'s minus cylinder format. If there\'s no cylinder (sphere only), no transposition is needed.'
    },
    {
      question: 'Can I transpose a prescription without cylinder?',
      answer: 'If a prescription has no cylinder (sphere only, like -2.00 DS), there\'s nothing to transpose. The prescription is written the same way in both plus and minus cylinder formats. "DS" stands for "diopters sphere" indicating no astigmatism correction.'
    },
    {
      question: 'What about prescriptions with prism?',
      answer: 'Prism is NOT affected by transposition. When you transpose a prescription, the prism amount and base direction remain exactly the same. Only the sphere, cylinder, and axis values change.'
    }
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Calculators
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">=���</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Rx Transposition Calculator
                </h1>
                <p className="text-blue-200 mt-1">
                  Convert between plus and minus cylinder instantly
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-8">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Input Section */}
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Enter Original Prescription</h2>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sphere (SPH)
                    </label>
                    <input
                      type="number"
                      step="0.25"
                      value={sphere}
                      onChange={(e) => setSphere(e.target.value)}
                      placeholder="-2.00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cylinder (CYL)
                    </label>
                    <input
                      type="number"
                      step="0.25"
                      value={cylinder}
                      onChange={(e) => setCylinder(e.target.value)}
                      placeholder="-1.00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Axis
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="180"
                      value={axis}
                      onChange={(e) => setAxis(e.target.value)}
                      placeholder="180"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={calculate}
                    disabled={!sphere || !cylinder || !axis}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    Transpose <ArrowRight className="w-5 h-5" />
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
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-green-900">Transposed Prescription</h2>
                    <button
                      onClick={copyResult}
                      className="flex items-center gap-1 text-sm text-green-700 hover:text-green-800"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-green-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Sphere</div>
                        <div className="text-2xl font-bold text-gray-900">{result.sphere}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Cylinder</div>
                        <div className="text-2xl font-bold text-gray-900">{result.cylinder}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Axis</div>
                        <div className="text-2xl font-bold text-gray-900">{result.axis}-�</div>
                      </div>
                    </div>
                  </div>

                  {/* Steps */}
                  <button
                    onClick={() => setShowSteps(!showSteps)}
                    className="mt-4 text-sm text-green-700 hover:text-green-800 flex items-center gap-1"
                  >
                    {showSteps ? 'Hide' : 'Show'} calculation steps
                    {showSteps ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {showSteps && (
                    <div className="mt-4 bg-white rounded-lg p-4 border border-green-200 text-sm">
                      <div className="space-y-2 font-mono">
                        <p><strong>Step 1:</strong> New Sphere = Old Sphere + Old Cylinder</p>
                        <p className="pl-4 text-gray-600">= {sphere} + ({cylinder}) = {result.sphere}</p>

                        <p className="mt-3"><strong>Step 2:</strong> New Cylinder = Opposite sign of old cylinder</p>
                        <p className="pl-4 text-gray-600">= {parseFloat(cylinder) > 0 ? '-' : '+'}{Math.abs(parseFloat(cylinder)).toFixed(2)}</p>

                        <p className="mt-3"><strong>Step 3:</strong> New Axis = Old Axis -� 90-�</p>
                        <p className="pl-4 text-gray-600">= {axis}-� {parseInt(axis) <= 90 ? '+' : '-'} 90-� = {result.axis}-�</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Examples */}
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Try These Examples</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => { setSphere('-2.00'); setCylinder('+1.00'); setAxis('90'); setResult(null); }}
                  className="text-left p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="font-mono text-sm">-2.00 +1.00 x 090</div>
                  <div className="text-xs text-gray-500 mt-1">Plus cylinder G�� Minus cylinder</div>
                </button>
                <button
                  onClick={() => { setSphere('-3.50'); setCylinder('-0.75'); setAxis('180'); setResult(null); }}
                  className="text-left p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="font-mono text-sm">-3.50 -0.75 x 180</div>
                  <div className="text-xs text-gray-500 mt-1">Minus cylinder G�� Plus cylinder</div>
                </button>
                <button
                  onClick={() => { setSphere('+1.25'); setCylinder('-2.00'); setAxis('45'); setResult(null); }}
                  className="text-left p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="font-mono text-sm">+1.25 -2.00 x 045</div>
                  <div className="text-xs text-gray-500 mt-1">Mixed astigmatism</div>
                </button>
                <button
                  onClick={() => { setSphere('-5.00'); setCylinder('+3.25'); setAxis('170'); setResult(null); }}
                  className="text-left p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="font-mono text-sm">-5.00 +3.25 x 170</div>
                  <div className="text-xs text-gray-500 mt-1">High cylinder, oblique axis</div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Formula Reference */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              The Transposition Formula
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-4xl mb-3">1n+�G��</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Add Sphere + Cylinder</h3>
                  <p className="text-sm text-gray-600">
                    Algebraically add the original sphere and cylinder to get the new sphere.
                  </p>
                  <div className="mt-4 font-mono text-sm bg-gray-100 rounded p-2">
                    New SPH = SPH + CYL
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-4xl mb-3">2n+�G��</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Flip Cylinder Sign</h3>
                  <p className="text-sm text-gray-600">
                    Change the cylinder from plus to minus, or from minus to plus.
                  </p>
                  <div className="mt-4 font-mono text-sm bg-gray-100 rounded p-2">
                    New CYL = -CYL
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-4xl mb-3">3n+�G��</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Rotate Axis 90-�</h3>
                  <p className="text-sm text-gray-600">
                    Add or subtract 90-� from the axis (keep between 1-� and 180-�).
                  </p>
                  <div className="mt-4 font-mono text-sm bg-gray-100 rounded p-2">
                    New AXIS = AXIS -� 90-�
                  </div>
                </div>
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
              <Link href="/calculators/vertex-distance" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">=���</div>
                <h3 className="font-medium text-gray-900">Vertex Distance</h3>
                <p className="text-sm text-gray-500">Compensate high Rx for vertex changes</p>
              </Link>
              <Link href="/calculators/reading-glasses" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">=���</div>
                <h3 className="font-medium text-gray-900">Reading Glasses</h3>
                <p className="text-sm text-gray-500">Calculate reading add power</p>
              </Link>
              <Link href="/calculators/lens-cutout" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">G��n+�</div>
                <h3 className="font-medium text-gray-900">Lens Cutout</h3>
                <p className="text-sm text-gray-500">Check if a lens will cut out</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
