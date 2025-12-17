'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react'

export default function ReadingGlassesCalculatorPage() {
  const [age, setAge] = useState('')
  const [distanceSphere, setDistanceSphere] = useState('')
  const [workingDistance, setWorkingDistance] = useState('40')
  const [hasDistanceRx, setHasDistanceRx] = useState(false)
  const [result, setResult] = useState<{
    recommendedAdd: string
    totalNearPower: string
    ageRange: string
    notes: string[]
  } | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  const getAgeBasedAdd = (ageNum: number): { add: number; range: string } => {
    if (ageNum < 40) return { add: 0, range: 'Under 40' }
    if (ageNum <= 44) return { add: 1.00, range: '40-44' }
    if (ageNum <= 49) return { add: 1.50, range: '45-49' }
    if (ageNum <= 54) return { add: 1.75, range: '50-54' }
    if (ageNum <= 59) return { add: 2.00, range: '55-59' }
    if (ageNum <= 64) return { add: 2.25, range: '60-64' }
    return { add: 2.50, range: '65+' }
  }

  const calculate = () => {
    const ageNum = parseInt(age)
    const distCm = parseFloat(workingDistance)
    const distSph = hasDistanceRx ? parseFloat(distanceSphere) || 0 : 0

    if (isNaN(ageNum)) return

    const { add: ageBasedAdd, range } = getAgeBasedAdd(ageNum)

    // Calculate add based on working distance
    // Working distance in cm, convert to meters: Add = 1/distance(m) - 0.50 buffer
    const distanceAdd = distCm ? (100 / distCm) - 0.50 : ageBasedAdd

    // Use the higher of age-based or distance-based, but cap reasonably
    let recommendedAdd = Math.max(ageBasedAdd, Math.min(distanceAdd, 3.00))

    // Round to nearest 0.25
    recommendedAdd = Math.round(recommendedAdd * 4) / 4

    const totalNear = distSph + recommendedAdd

    const notes: string[] = []
    if (ageNum < 40) {
      notes.push('Patients under 40 typically don\'t need reading glasses unless there\'s a specific issue.')
    }
    if (distCm < 35) {
      notes.push('Very close working distance - consider if this is comfortable long-term.')
    }
    if (recommendedAdd >= 2.50) {
      notes.push('High add power - progressive lenses may provide better range of vision.')
    }
    if (hasDistanceRx && Math.abs(distSph) > 4) {
      notes.push('With high distance Rx, single vision readers may cause adaptation issues. Consider progressives.')
    }

    setResult({
      recommendedAdd: `+${recommendedAdd.toFixed(2)}`,
      totalNearPower: totalNear >= 0 ? `+${totalNear.toFixed(2)}` : totalNear.toFixed(2),
      ageRange: range,
      notes
    })
  }

  const reset = () => {
    setAge('')
    setDistanceSphere('')
    setWorkingDistance('40')
    setHasDistanceRx(false)
    setResult(null)
  }

  const faqs = [
    {
      question: 'How is reading glasses power determined?',
      answer: 'Reading power is primarily based on age (due to presbyopia progression) and working distance. As we age, the lens inside our eye loses flexibility, requiring additional plus power for near tasks. The standard reading distance is 40cm (16 inches), but your specific needs may vary based on hobbies or work.'
    },
    {
      question: 'What is presbyopia?',
      answer: 'Presbyopia is the gradual loss of the eye\'s ability to focus on nearby objects. It\'s a natural part of aging that typically becomes noticeable in the early to mid-40s. By age 65, most people have lost nearly all close-up focusing ability and need reading glasses or bifocals.'
    },
    {
      question: 'Why does reading power increase with age?',
      answer: 'The crystalline lens inside your eye becomes less flexible with age. Around 40, you may need +1.00; by 50, +1.75; by 60, +2.25; and by 65+, around +2.50. This progression is predictable and happens to virtually everyone regardless of whether they wore glasses before.'
    },
    {
      question: 'What is the typical reading add by age?',
      answer: 'Typical starting adds by age: 40-44: +1.00, 45-49: +1.50, 50-54: +1.75, 55-59: +2.00, 60-64: +2.25, 65+: +2.50. These are guidelines - individual needs vary based on arm length, hobbies, and visual demands.'
    },
    {
      question: 'Can I just buy over-the-counter reading glasses?',
      answer: 'OTC readers work well for many people with no distance prescription and equal vision in both eyes. However, they have the same power in both eyes and don\'t correct astigmatism. If you have different prescriptions in each eye, significant astigmatism, or a distance prescription, custom readers are recommended.'
    },
    {
      question: 'What if I already wear glasses for distance?',
      answer: 'If you have a distance prescription, your reading glasses power equals your distance sphere plus the add power. For example: -2.00 distance + 1.50 add = -0.50 reading power. You might benefit from progressives or bifocals to see both distance and near.'
    },
    {
      question: 'How does working distance affect power?',
      answer: 'The closer you work, the more plus power you need. At 40cm (16"), a standard add works. At 33cm (13"), you need about +0.50 more. At 50cm (20"), you need about -0.50 less. Computer distance (60-70cm) needs a different calculation entirely.'
    },
    {
      question: 'Should I get progressives or single vision readers?',
      answer: 'Single vision readers are great for dedicated reading tasks. Progressives offer convenience - distance, intermediate, and near in one pair. If you constantly switch between distance and near, progressives save you from switching glasses. But for extended reading, single vision often provides a wider reading area.'
    }
  ]

  const ageChart = [
    { age: '40-44', add: '+1.00', notes: 'First signs of presbyopia' },
    { age: '45-49', add: '+1.50', notes: 'Noticeable difficulty with small print' },
    { age: '50-54', add: '+1.75', notes: 'Need readers for most near tasks' },
    { age: '55-59', add: '+2.00', notes: 'Consistent near vision needs' },
    { age: '60-64', add: '+2.25', notes: 'Limited accommodation remaining' },
    { age: '65+', add: '+2.50', notes: 'Maximum typical add (presbyopia complete)' },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 text-amber-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Calculators
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">📖</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Reading Glasses Calculator
                </h1>
                <p className="text-amber-200 mt-1">
                  Find your ideal reading power based on age and working distance
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
                      Age
                    </label>
                    <input
                      type="number"
                      min="20"
                      max="100"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="e.g., 52"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Reading Distance (cm)
                    </label>
                    <select
                      value={workingDistance}
                      onChange={(e) => setWorkingDistance(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                    >
                      <option value="30">30 cm (12 inches) - Very close</option>
                      <option value="35">35 cm (14 inches) - Close</option>
                      <option value="40">40 cm (16 inches) - Standard reading</option>
                      <option value="45">45 cm (18 inches) - Comfortable</option>
                      <option value="50">50 cm (20 inches) - Arm&apos;s length</option>
                    </select>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasDistanceRx}
                        onChange={(e) => setHasDistanceRx(e.target.checked)}
                        className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-gray-700">I have a distance prescription</span>
                    </label>

                    {hasDistanceRx && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Distance Sphere (SPH) - one eye or average
                        </label>
                        <input
                          type="number"
                          step="0.25"
                          value={distanceSphere}
                          onChange={(e) => setDistanceSphere(e.target.value)}
                          placeholder="-2.00"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Enter your sphere power (e.g., -2.00 for nearsighted, +1.00 for farsighted)
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={calculate}
                    disabled={!age}
                    className="flex-1 bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    Calculate Power <ArrowRight className="w-5 h-5" />
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
                <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50">
                  <h2 className="text-lg font-semibold text-amber-900 mb-4">Recommended Reading Power</h2>

                  <div className="bg-white rounded-xl p-6 border border-amber-200">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Add Power</div>
                        <div className="text-3xl font-bold text-amber-600">{result.recommendedAdd}</div>
                        <div className="text-xs text-gray-500 mt-1">Based on age {result.ageRange}</div>
                      </div>
                      {hasDistanceRx && (
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Total Near Power</div>
                          <div className="text-3xl font-bold text-gray-900">{result.totalNearPower}</div>
                          <div className="text-xs text-gray-500 mt-1">Distance Rx + Add</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {result.notes.length > 0 && (
                    <div className="mt-4 bg-amber-100 rounded-lg p-4">
                      <h3 className="font-medium text-amber-900 mb-2">Important Notes:</h3>
                      <ul className="space-y-1 text-sm text-amber-800">
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

        {/* Age Chart Reference */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Reading Add Power by Age
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Age Range</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Typical Add</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">What to Expect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {ageChart.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-3 font-medium text-gray-900">{row.age}</td>
                      <td className="px-6 py-3 font-mono text-amber-600">{row.add}</td>
                      <td className="px-6 py-3 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              These are typical starting points. Individual needs vary—always confirm with an eye exam.
            </p>
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
              <Link href="/calculators/computer-glasses" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">💻</div>
                <h3 className="font-medium text-gray-900">Computer Glasses</h3>
                <p className="text-sm text-gray-500">Calculate intermediate power for screens</p>
              </Link>
              <Link href="/calculators/transposition" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🔄</div>
                <h3 className="font-medium text-gray-900">Transposition</h3>
                <p className="text-sm text-gray-500">Convert plus/minus cylinder</p>
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
