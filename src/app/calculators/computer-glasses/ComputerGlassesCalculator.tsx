'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, RotateCcw, ChevronDown, ChevronUp, Monitor, Eye } from 'lucide-react'

interface EyeRx {
  sphere: string
  cylinder: string
  axis: string
  add: string
}

interface ComputerRx {
  sphere: string
  cylinder: string
  axis: string
}

export default function ComputerGlassesCalculator() {
  const [odRx, setOdRx] = useState<EyeRx>({ sphere: '', cylinder: '', axis: '', add: '' })
  const [osRx, setOsRx] = useState<EyeRx>({ sphere: '', cylinder: '', axis: '', add: '' })
  const [screenDistance, setScreenDistance] = useState('60')
  const [result, setResult] = useState<{
    od: ComputerRx
    os: ComputerRx
    computerAddUsed: string
    percentOfAdd: string
    focusRange: string
    notes: string[]
  } | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  const calculateComputerRx = (eye: EyeRx, distCm: number): ComputerRx => {
    const sphere = parseFloat(eye.sphere) || 0
    const add = parseFloat(eye.add) || 0

    const ratio = 40 / distCm
    let computerAdd = add * ratio

    if (add > 0) {
      computerAdd = Math.max(computerAdd, 0.50)
    }

    computerAdd = Math.round(computerAdd * 4) / 4
    const totalSphere = sphere + computerAdd

    return {
      sphere: totalSphere >= 0 ? `+${totalSphere.toFixed(2)}` : totalSphere.toFixed(2),
      cylinder: eye.cylinder || 'SPH',
      axis: eye.cylinder ? eye.axis : ''
    }
  }

  const calculate = () => {
    const distCm = parseFloat(screenDistance)
    const odAdd = parseFloat(odRx.add) || 0
    const osAdd = parseFloat(osRx.add) || 0

    if (odAdd === 0 && osAdd === 0) return

    const odResult = calculateComputerRx(odRx, distCm)
    const osResult = calculateComputerRx(osRx, distCm)

    const avgAdd = (odAdd + osAdd) / 2 || odAdd || osAdd
    const ratio = 40 / distCm
    let computerAdd = avgAdd * ratio
    computerAdd = Math.max(computerAdd, 0.50)
    computerAdd = Math.round(computerAdd * 4) / 4

    const percentOfReadingAdd = Math.round(ratio * 100)
    const nearPoint = Math.round(100 / (computerAdd + 0.50))
    const farPoint = Math.round(100 / computerAdd)

    const notes: string[] = []
    if (distCm > 80) {
      notes.push('At this distance, you may only need a small intermediate add or distance-only glasses.')
    }
    if (distCm < 50) {
      notes.push('This is quite close for a computer screen. Consider ergonomic adjustments.')
    }
    if (computerAdd >= avgAdd && avgAdd > 0) {
      notes.push('Your screen is close enough that full reading power may be appropriate.')
    }
    const odSph = parseFloat(odRx.sphere) || 0
    const osSph = parseFloat(osRx.sphere) || 0
    if (Math.abs(odSph) > 3 || Math.abs(osSph) > 3) {
      notes.push('With a strong distance Rx, consider occupational progressives for best results.')
    }

    setResult({
      od: odResult,
      os: osResult,
      computerAddUsed: `+${computerAdd.toFixed(2)}`,
      percentOfAdd: `${percentOfReadingAdd}%`,
      focusRange: `${nearPoint}-${farPoint} cm`,
      notes
    })
  }

  const reset = () => {
    setOdRx({ sphere: '', cylinder: '', axis: '', add: '' })
    setOsRx({ sphere: '', cylinder: '', axis: '', add: '' })
    setScreenDistance('60')
    setResult(null)
  }

  const updateOdRx = (field: keyof EyeRx, value: string) => {
    setOdRx(prev => ({ ...prev, [field]: value }))
  }

  const updateOsRx = (field: keyof EyeRx, value: string) => {
    setOsRx(prev => ({ ...prev, [field]: value }))
  }

  const faqs = [
    {
      question: 'Why do I need different glasses for computer use?',
      answer: 'Reading glasses are optimized for 40cm (16 inches) - typical book distance. Computer screens are usually 50-70cm (20-28 inches) away. Using reading glasses for computer work forces you to lean in uncomfortably close, or you\'ll see the screen blurry. Computer glasses provide clear vision at the intermediate distance.'
    },
    {
      question: 'What percentage of my reading add should computer glasses be?',
      answer: 'Generally 50-70% of your full reading add, depending on your screen distance. At 60cm, you need about 67% of your reading add. At 70cm, about 57%. The calculator above gives you the precise amount based on your specific setup.'
    },
    {
      question: 'Can I just hold my progressives differently?',
      answer: 'You can, but it\'s not ideal. Progressives require you to tilt your head up to use the intermediate zone, which can cause neck strain during prolonged computer work. Dedicated computer glasses or occupational progressives provide a wider intermediate zone at a more natural head position.'
    },
    {
      question: 'What are occupational progressives?',
      answer: 'Occupational progressives (also called office lenses or near-variable focus lenses) are specifically designed for computer and desk work. They have a large intermediate zone at the top, a reading zone at the bottom, and limited or no distance vision. Examples include Zeiss Office, Hoya Tact, and Essilor Eyezen.'
    },
    {
      question: 'Should I get blue light blocking for computer glasses?',
      answer: 'Blue light blocking is popular but the science is still debated. Digital eye strain is primarily caused by reduced blinking and focusing fatigue, not blue light itself. However, if you find blue light coatings comfortable or helpful for sleep when used at night, they won\'t hurt. Proper add power is more important than coatings.'
    },
    {
      question: 'How do I measure my screen distance?',
      answer: 'Sit at your computer in your normal working position. Have someone measure from your eyes to the center of your screen, or measure from your glasses to the screen and add about 1.5cm. Typical distances: laptop 50-60cm, desktop monitor 60-70cm, large monitor 70-80cm.'
    }
  ]

  const hasValidInput = () => {
    const odAdd = parseFloat(odRx.add) || 0
    const osAdd = parseFloat(osRx.add) || 0
    return odAdd > 0 || osAdd > 0
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 text-cyan-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Calculators
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">💻</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Computer Glasses Calculator
                </h1>
                <p className="text-cyan-200 mt-1">
                  Enter your full prescription to calculate the ideal power for screen use
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Prescription Pad Input */}
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Enter Your Prescription</h2>
                <p className="text-sm text-gray-500 mb-6">Enter your current glasses prescription (with reading add)</p>

                {/* Prescription Pad Style Form */}
                <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                  {/* Header Row */}
                  <div className="grid grid-cols-5 gap-2 mb-2 text-center">
                    <div className="text-xs font-semibold text-gray-500 uppercase"></div>
                    <div className="text-xs font-semibold text-gray-500 uppercase">Sphere (SPH)</div>
                    <div className="text-xs font-semibold text-gray-500 uppercase">Cylinder (CYL)</div>
                    <div className="text-xs font-semibold text-gray-500 uppercase">Axis</div>
                    <div className="text-xs font-semibold text-gray-500 uppercase">Add</div>
                  </div>

                  {/* OD (Right Eye) Row */}
                  <div className="grid grid-cols-5 gap-2 mb-3 items-center">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="font-bold text-gray-700">OD</span>
                      <span className="text-xs text-gray-400">(Right)</span>
                    </div>
                    <input
                      type="text"
                      value={odRx.sphere}
                      onChange={(e) => updateOdRx('sphere', e.target.value)}
                      placeholder="-2.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center font-mono text-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                    <input
                      type="text"
                      value={odRx.cylinder}
                      onChange={(e) => updateOdRx('cylinder', e.target.value)}
                      placeholder="-0.75"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center font-mono text-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                    <input
                      type="text"
                      value={odRx.axis}
                      onChange={(e) => updateOdRx('axis', e.target.value)}
                      placeholder="180"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center font-mono text-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                    <input
                      type="text"
                      value={odRx.add}
                      onChange={(e) => updateOdRx('add', e.target.value)}
                      placeholder="+2.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center font-mono text-lg bg-yellow-50 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>

                  {/* OS (Left Eye) Row */}
                  <div className="grid grid-cols-5 gap-2 items-center">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-green-600" />
                      <span className="font-bold text-gray-700">OS</span>
                      <span className="text-xs text-gray-400">(Left)</span>
                    </div>
                    <input
                      type="text"
                      value={osRx.sphere}
                      onChange={(e) => updateOsRx('sphere', e.target.value)}
                      placeholder="-1.75"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center font-mono text-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                    <input
                      type="text"
                      value={osRx.cylinder}
                      onChange={(e) => updateOsRx('cylinder', e.target.value)}
                      placeholder="-0.50"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center font-mono text-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                    <input
                      type="text"
                      value={osRx.axis}
                      onChange={(e) => updateOsRx('axis', e.target.value)}
                      placeholder="090"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center font-mono text-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                    <input
                      type="text"
                      value={osRx.add}
                      onChange={(e) => updateOsRx('add', e.target.value)}
                      placeholder="+2.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center font-mono text-lg bg-yellow-50 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>

                  <p className="text-xs text-gray-500 mt-3 text-center">
                    The <span className="bg-yellow-100 px-1 rounded">Add</span> power is required - this is your reading/near add from your prescription
                  </p>
                </div>

                {/* Screen Distance */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Monitor className="w-4 h-4 inline mr-1" />
                    Screen Distance
                  </label>
                  <select
                    value={screenDistance}
                    onChange={(e) => setScreenDistance(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-lg"
                  >
                    <option value="50">50 cm (20&quot;) - Laptop / Close</option>
                    <option value="55">55 cm (22&quot;) - Small desktop</option>
                    <option value="60">60 cm (24&quot;) - Standard monitor</option>
                    <option value="65">65 cm (26&quot;) - Medium-large monitor</option>
                    <option value="70">70 cm (28&quot;) - Large monitor</option>
                    <option value="75">75 cm (30&quot;) - Extended distance</option>
                    <option value="80">80 cm (32&quot;) - Standing desk / Very large</option>
                  </select>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={calculate}
                    disabled={!hasValidInput()}
                    className="flex-1 bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    Calculate Computer Rx <Monitor className="w-5 h-5" />
                  </button>
                  <button
                    onClick={reset}
                    className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                    title="Reset"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Result Section */}
              {result && (
                <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50">
                  <h2 className="text-lg font-semibold text-cyan-900 mb-4">Your Computer Glasses Prescription</h2>

                  {/* Result Prescription Pad */}
                  <div className="bg-white rounded-xl p-4 border-2 border-cyan-200 shadow-sm">
                    {/* Header Row */}
                    <div className="grid grid-cols-4 gap-2 mb-2 text-center">
                      <div className="text-xs font-semibold text-gray-500 uppercase"></div>
                      <div className="text-xs font-semibold text-gray-500 uppercase">Sphere (SPH)</div>
                      <div className="text-xs font-semibold text-gray-500 uppercase">Cylinder (CYL)</div>
                      <div className="text-xs font-semibold text-gray-500 uppercase">Axis</div>
                    </div>

                    {/* OD Result */}
                    <div className="grid grid-cols-4 gap-2 mb-2 items-center">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-blue-600" />
                        <span className="font-bold text-gray-700">OD</span>
                      </div>
                      <div className="bg-cyan-100 px-3 py-2 rounded-lg text-center font-mono text-xl font-bold text-cyan-700">
                        {result.od.sphere}
                      </div>
                      <div className="bg-gray-100 px-3 py-2 rounded-lg text-center font-mono text-xl text-gray-700">
                        {result.od.cylinder}
                      </div>
                      <div className="bg-gray-100 px-3 py-2 rounded-lg text-center font-mono text-xl text-gray-700">
                        {result.od.axis || '—'}
                      </div>
                    </div>

                    {/* OS Result */}
                    <div className="grid grid-cols-4 gap-2 items-center">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-green-600" />
                        <span className="font-bold text-gray-700">OS</span>
                      </div>
                      <div className="bg-cyan-100 px-3 py-2 rounded-lg text-center font-mono text-xl font-bold text-cyan-700">
                        {result.os.sphere}
                      </div>
                      <div className="bg-gray-100 px-3 py-2 rounded-lg text-center font-mono text-xl text-gray-700">
                        {result.os.cylinder}
                      </div>
                      <div className="bg-gray-100 px-3 py-2 rounded-lg text-center font-mono text-xl text-gray-700">
                        {result.os.axis || '—'}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
                      Single Vision for Computer Use at {screenDistance} cm
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white rounded-lg p-4 text-center border border-cyan-200">
                      <div className="text-sm text-gray-500 mb-1">Intermediate Add Used</div>
                      <div className="text-2xl font-bold text-cyan-600">{result.computerAddUsed}</div>
                      <div className="text-xs text-gray-500">{result.percentOfAdd} of your reading add</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center border border-cyan-200">
                      <div className="text-sm text-gray-500 mb-1">Clear Focus Range</div>
                      <div className="text-2xl font-bold text-gray-900">{result.focusRange}</div>
                      <div className="text-xs text-gray-500">Comfortable viewing zone</div>
                    </div>
                  </div>

                  {result.notes.length > 0 && (
                    <div className="mt-4 bg-cyan-100 rounded-lg p-4">
                      <h3 className="font-medium text-cyan-900 mb-2">Recommendations:</h3>
                      <ul className="space-y-1 text-sm text-cyan-800">
                        {result.notes.map((note, i) => (
                          <li key={i}>• {note}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> This is a calculated estimate for single vision computer glasses.
                      Cylinder and axis remain unchanged from your distance Rx. Always verify with your eye care professional
                      before ordering glasses.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How Computer Glasses Work
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Reading Add @ 40cm</h3>
                <p className="text-gray-600 text-sm">Your full reading add is designed for close work at about 40cm (16 inches)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Computer @ 60cm</h3>
                <p className="text-gray-600 text-sm">Screens are farther away, so you need less add power—typically 60-70% of reading add</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Reduced Eye Strain</h3>
                <p className="text-gray-600 text-sm">Proper intermediate power means comfortable all-day computer use without leaning in</p>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Screen Distance Quick Reference</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-3 border">
                  <div className="font-bold text-gray-900">50 cm</div>
                  <div className="text-xs text-gray-500">Laptop</div>
                  <div className="text-lg font-bold text-cyan-600">80%</div>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <div className="font-bold text-gray-900">60 cm</div>
                  <div className="text-xs text-gray-500">Desktop</div>
                  <div className="text-lg font-bold text-cyan-600">67%</div>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <div className="font-bold text-gray-900">70 cm</div>
                  <div className="text-xs text-gray-500">Large Monitor</div>
                  <div className="text-lg font-bold text-cyan-600">57%</div>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <div className="font-bold text-gray-900">80 cm</div>
                  <div className="text-xs text-gray-500">Standing Desk</div>
                  <div className="text-lg font-bold text-cyan-600">50%</div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-3">Percentage of your reading add needed for each distance</p>
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
              <Link href="/calculators/reading-glasses" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">📖</div>
                <h3 className="font-medium text-gray-900">Reading Glasses</h3>
                <p className="text-sm text-gray-500">Calculate your reading add by age</p>
              </Link>
              <Link href="/calculators/transposition" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🔄</div>
                <h3 className="font-medium text-gray-900">Transposition</h3>
                <p className="text-sm text-gray-500">Convert plus/minus cylinder</p>
              </Link>
              <Link href="/calculators/vertex-distance" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">📏</div>
                <h3 className="font-medium text-gray-900">Vertex Distance</h3>
                <p className="text-sm text-gray-500">Compensate for high prescriptions</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
