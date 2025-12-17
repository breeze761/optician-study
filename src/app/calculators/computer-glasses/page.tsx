'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, RotateCcw, ChevronDown, ChevronUp, Monitor } from 'lucide-react'

export default function ComputerGlassesCalculatorPage() {
  const [readingAdd, setReadingAdd] = useState('')
  const [screenDistance, setScreenDistance] = useState('60')
  const [distanceSphere, setDistanceSphere] = useState('')
  const [hasDistanceRx, setHasDistanceRx] = useState(false)
  const [result, setResult] = useState<{
    computerAdd: string
    totalPower: string
    percentOfAdd: string
    focusRange: string
    notes: string[]
  } | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  const calculate = () => {
    const add = parseFloat(readingAdd)
    const distCm = parseFloat(screenDistance)
    const distSph = hasDistanceRx ? parseFloat(distanceSphere) || 0 : 0

    if (isNaN(add) || isNaN(distCm)) return

    // Computer add calculation
    // Reading add is calibrated for 40cm. For other distances, scale proportionally
    // Formula: Computer Add = Reading Add × (40 / Screen Distance)
    // Or use: Required dioptric demand = 100/distance(cm) - buffer

    // Method: Typically 50-60% of reading add for computer
    // More precise: Full reading add at 40cm, so at 60cm need 40/60 = 67% of add
    const ratio = 40 / distCm
    let computerAdd = add * ratio

    // Practical minimum is usually 0.50D
    computerAdd = Math.max(computerAdd, 0.50)

    // Round to nearest 0.25
    computerAdd = Math.round(computerAdd * 4) / 4

    const percentOfReadingAdd = Math.round(ratio * 100)

    const totalPower = distSph + computerAdd

    // Calculate approximate focus range
    const nearPoint = Math.round(100 / (computerAdd + 0.50)) // with some accommodation
    const farPoint = Math.round(100 / computerAdd)

    const notes: string[] = []
    if (distCm > 80) {
      notes.push('At this distance, you may only need a small intermediate add or distance-only glasses.')
    }
    if (distCm < 50) {
      notes.push('This is quite close for a computer screen. Consider ergonomic adjustments.')
    }
    if (computerAdd >= add) {
      notes.push('Your screen is close enough that full reading power may be appropriate.')
    }
    if (hasDistanceRx && Math.abs(distSph) > 3) {
      notes.push('With a strong distance Rx, consider occupational progressives for best results.')
    }

    setResult({
      computerAdd: `+${computerAdd.toFixed(2)}`,
      totalPower: totalPower >= 0 ? `+${totalPower.toFixed(2)}` : totalPower.toFixed(2),
      percentOfAdd: `${percentOfReadingAdd}%`,
      focusRange: `${nearPoint}-${farPoint} cm`,
      notes
    })
  }

  const reset = () => {
    setReadingAdd('')
    setScreenDistance('60')
    setDistanceSphere('')
    setHasDistanceRx(false)
    setResult(null)
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
    },
    {
      question: 'What if I use multiple monitors at different distances?',
      answer: 'For multiple monitors at similar distances, use the average distance. If monitors are at significantly different distances, occupational progressives or a degressive lens might work better than single vision computer glasses. The wider intermediate range handles the variation.'
    },
    {
      question: 'Can I use computer glasses for reading?',
      answer: 'Computer glasses will be slightly too weak for comfortable close reading. They\'re optimized for intermediate distance. You could hold reading material a bit farther away, but for extended reading, your full reading power is more comfortable. Many people keep both pairs handy.'
    }
  ]

  const distanceGuide = [
    { distance: '50 cm (20")', device: 'Laptop / Close desktop', addPercent: '80%' },
    { distance: '60 cm (24")', device: 'Standard desktop monitor', addPercent: '67%' },
    { distance: '70 cm (28")', device: 'Large monitor / Dual setup', addPercent: '57%' },
    { distance: '80 cm (32")', device: 'Very large / Standing desk', addPercent: '50%' },
  ]

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
                  Convert your reading add to the perfect intermediate power for screens
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
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Enter Your Information</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Reading Add Power
                    </label>
                    <input
                      type="number"
                      step="0.25"
                      min="0.50"
                      max="3.50"
                      value={readingAdd}
                      onChange={(e) => setReadingAdd(e.target.value)}
                      placeholder="e.g., 2.00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Find this on your prescription next to &quot;Add&quot; or &quot;NV Add&quot;
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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

                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasDistanceRx}
                        onChange={(e) => setHasDistanceRx(e.target.checked)}
                        className="w-5 h-5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="text-gray-700">I have a distance prescription</span>
                    </label>

                    {hasDistanceRx && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Distance Sphere (SPH)
                        </label>
                        <input
                          type="number"
                          step="0.25"
                          value={distanceSphere}
                          onChange={(e) => setDistanceSphere(e.target.value)}
                          placeholder="-2.00"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={calculate}
                    disabled={!readingAdd}
                    className="flex-1 bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    Calculate <Monitor className="w-5 h-5" />
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
                <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50">
                  <h2 className="text-lg font-semibold text-cyan-900 mb-4">Your Computer Glasses Power</h2>

                  <div className="bg-white rounded-xl p-6 border border-cyan-200">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Computer Add</div>
                        <div className="text-3xl font-bold text-cyan-600">{result.computerAdd}</div>
                        <div className="text-xs text-gray-500 mt-1">{result.percentOfAdd} of reading add</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Clear Focus Range</div>
                        <div className="text-2xl font-bold text-gray-900">{result.focusRange}</div>
                        <div className="text-xs text-gray-500 mt-1">Approximate comfortable zone</div>
                      </div>
                    </div>

                    {hasDistanceRx && (
                      <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                        <div className="text-sm text-gray-500 mb-1">Total Computer Power</div>
                        <div className="text-2xl font-bold text-gray-900">{result.totalPower}</div>
                        <div className="text-xs text-gray-500 mt-1">Distance Rx + Computer Add</div>
                      </div>
                    )}
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
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Distance Guide */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Screen Distance Quick Reference
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {distanceGuide.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-lg font-bold text-gray-900">{item.distance}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.device}</div>
                  <div className="text-2xl font-bold text-cyan-600 mt-2">{item.addPercent}</div>
                  <div className="text-xs text-gray-500">of reading add</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="font-semibold text-cyan-900 mb-3">Ergonomic Tips for Computer Work</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-cyan-800">
                <ul className="space-y-2">
                  <li>• Monitor top should be at or slightly below eye level</li>
                  <li>• Screen should be arm&apos;s length away (50-70cm)</li>
                  <li>• Reduce glare with proper lighting and screen position</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Follow 20-20-20 rule: Every 20 min, look 20 feet away for 20 sec</li>
                  <li>• Blink frequently - we blink less when staring at screens</li>
                  <li>• Consider a document holder at same distance as screen</li>
                </ul>
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
              <Link href="/calculators/reading-glasses" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">📖</div>
                <h3 className="font-medium text-gray-900">Reading Glasses</h3>
                <p className="text-sm text-gray-500">Calculate your reading add by age</p>
              </Link>
              <Link href="/calculators/lens-cutout" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">✂️</div>
                <h3 className="font-medium text-gray-900">Lens Cutout</h3>
                <p className="text-sm text-gray-500">Check if a lens will fit your frame</p>
              </Link>
              <Link href="/calculators/transposition" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🔄</div>
                <h3 className="font-medium text-gray-900">Transposition</h3>
                <p className="text-sm text-gray-500">Convert plus/minus cylinder</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
