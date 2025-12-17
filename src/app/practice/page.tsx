'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CalculationPractice from '@/components/practice/CalculationPractice'
import { calculationCategories } from '@/data/calculations'
import { CalculationType } from '@/types'
import { Calculator, ArrowLeft, BookOpen, Target, Zap } from 'lucide-react'
import Link from 'next/link'

export default function PracticePage() {
  const [selectedCategory, setSelectedCategory] = useState<CalculationType | null>(null)
  const [difficulty, setDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all')
  const [problemCount, setProblemCount] = useState(5)

  const selectedCategoryData = selectedCategory
    ? calculationCategories.find(c => c.id === selectedCategory)
    : null

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calculator className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Calculation Practice
            </h1>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Master essential optical calculations with interactive practice problems.
              Build confidence for the ABO exam and real-world dispensing.
            </p>
          </div>
        </section>

        {!selectedCategory ? (
          /* Category Selection */
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Choose a Calculation Type
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {calculationCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-white rounded-xl border border-gray-200 p-6 text-left hover:border-purple-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{category.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {category.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          {category.problems.length} problems
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick Practice Option */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Or try a mixed practice session:</p>
                <button
                  onClick={() => setSelectedCategory('transposition')} // Will use random from all
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  <Zap className="w-5 h-5" />
                  Quick Mixed Practice
                </button>
              </div>

              {/* Study Tips */}
              <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Tips for Calculation Success
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• <strong>Memorize the formulas</strong> - Write them out daily until automatic</li>
                  <li>• <strong>Watch your units</strong> - Convert mm to cm for Prentice&apos;s Rule, mm to m for vertex</li>
                  <li>• <strong>Check sign conventions</strong> - Plus/minus matters for transposition and cylinder</li>
                  <li>• <strong>Practice under time pressure</strong> - ABO exam is timed</li>
                  <li>• <strong>Round appropriately</strong> - Lens powers to 0.25D, measurements to practical values</li>
                </ul>
              </div>
            </div>
          </section>
        ) : (
          /* Practice Session */
          <section className="py-8">
            <div className="max-w-3xl mx-auto px-4">
              {/* Back Button & Settings */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Categories
                </button>

                <div className="flex items-center gap-4">
                  <select
                    value={problemCount}
                    onChange={(e) => setProblemCount(Number(e.target.value))}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value={3}>3 problems</option>
                    <option value={5}>5 problems</option>
                    <option value={10}>10 problems</option>
                  </select>
                </div>
              </div>

              {/* Category Header */}
              {selectedCategoryData && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{selectedCategoryData.icon}</span>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {selectedCategoryData.title}
                      </h2>
                      <p className="text-gray-600">
                        {selectedCategoryData.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Practice Component */}
              <CalculationPractice
                categoryId={selectedCategory}
                problemCount={problemCount}
              />

              {/* Related Resources */}
              <div className="mt-8 bg-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Related Lessons
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Need to review the concepts? Check out these related lessons:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/learn"
                    className="text-sm bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    View All Lessons →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Formula Reference Section */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Essential Formulas Quick Reference
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🔄 Transposition</h3>
                <code className="text-sm text-gray-700 block">
                  New Sphere = Old Sphere + Old Cylinder<br />
                  New Cylinder = Opposite sign<br />
                  New Axis = Old Axis ± 90°
                </code>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📏 Vertex Distance</h3>
                <code className="text-sm text-gray-700 block">
                  F<sub>c</sub> = F<sub>s</sub> / (1 - d × F<sub>s</sub>)<br />
                  d = vertex distance in meters
                </code>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🔺 Prentice&apos;s Rule</h3>
                <code className="text-sm text-gray-700 block">
                  Prism (Δ) = c × F<br />
                  c = decentration in cm<br />
                  F = lens power in diopters
                </code>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🎯 Vogel&apos;s Rule</h3>
                <code className="text-sm text-gray-700 block">
                  Base Curve = (Sphere / 2) + 6<br />
                  (Use algebraic sphere value)
                </code>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">👓 Decentration</h3>
                <code className="text-sm text-gray-700 block">
                  Total Dec = Frame PD - Patient PD<br />
                  Per Lens = Total Dec / 2<br />
                  Frame PD = A + DBL
                </code>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🔍 Magnification</h3>
                <code className="text-sm text-gray-700 block">
                  SM = 1 / (1 - d × F)<br />
                  Plus lenses magnify<br />
                  Minus lenses minify
                </code>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
