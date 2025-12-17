'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Calculator, ArrowLeft, RotateCcw, Info } from 'lucide-react'

export default function MagnificationCalculator() {
  const [lensPower, setLensPower] = useState('')
  const [vertexDistance, setVertexDistance] = useState('12')
  const [centerThickness, setCenterThickness] = useState('')
  const [refractiveIndex, setRefractiveIndex] = useState('1.50')
  const [baseCurve, setBaseCurve] = useState('')

  const [result, setResult] = useState<{
    powerFactor: number
    shapeFactor: number
    totalMagnification: number
    percentChange: number
    isMinification: boolean
  } | null>(null)

  const calculateMagnification = () => {
    const F = parseFloat(lensPower)
    const d = parseFloat(vertexDistance) / 1000 // Convert mm to meters
    const t = parseFloat(centerThickness) / 1000 // Convert mm to meters
    const n = parseFloat(refractiveIndex)
    const F1 = parseFloat(baseCurve)

    if (isNaN(F) || isNaN(d)) {
      return
    }

    // Power Factor (Magnification) = 1 / (1 - d × F)
    const powerFactor = 1 / (1 - d * F)

    // Shape Factor (if thickness and base curve provided)
    // Shape Factor = 1 / (1 - (t/n) × F1)
    let shapeFactor = 1
    if (!isNaN(t) && !isNaN(n) && !isNaN(F1) && t > 0) {
      shapeFactor = 1 / (1 - (t / n) * F1)
    }

    // Total Spectacle Magnification = Power Factor × Shape Factor
    const totalMagnification = powerFactor * shapeFactor

    // Percent change from 1.0
    const percentChange = (totalMagnification - 1) * 100

    setResult({
      powerFactor: Math.round(powerFactor * 10000) / 10000,
      shapeFactor: Math.round(shapeFactor * 10000) / 10000,
      totalMagnification: Math.round(totalMagnification * 10000) / 10000,
      percentChange: Math.round(percentChange * 100) / 100,
      isMinification: totalMagnification < 1
    })
  }

  const handleReset = () => {
    setLensPower('')
    setVertexDistance('12')
    setCenterThickness('')
    setRefractiveIndex('1.50')
    setBaseCurve('')
    setResult(null)
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          {/* Back Link */}
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All Calculators
          </Link>

          {/* Calculator Card */}
          <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Spectacle Magnification</h1>
                <p className="text-gray-500 text-sm">Power & Shape Factors</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Calculate the magnification or minification effect of spectacle lenses. Important for aniseikonia assessment.
            </p>

            {/* Inputs */}
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Required Inputs</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lens Power (D)
                    </label>
                    <input
                      type="number"
                      step="0.25"
                      value={lensPower}
                      onChange={(e) => setLensPower(e.target.value)}
                      placeholder="-6.00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vertex Distance (mm)
                    </label>
                    <input
                      type="number"
                      value={vertexDistance}
                      onChange={(e) => setVertexDistance(e.target.value)}
                      placeholder="12"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Optional: Shape Factor Inputs
                  <span className="ml-2 text-xs font-normal text-gray-500">(for complete analysis)</span>
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Center Thickness (mm)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={centerThickness}
                      onChange={(e) => setCenterThickness(e.target.value)}
                      placeholder="3.0"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Refractive Index
                    </label>
                    <select
                      value={refractiveIndex}
                      onChange={(e) => setRefractiveIndex(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="1.50">1.50 (CR-39)</option>
                      <option value="1.53">1.53 (Trivex)</option>
                      <option value="1.59">1.59 (Polycarb)</option>
                      <option value="1.60">1.60 (Hi-Index)</option>
                      <option value="1.67">1.67 (Hi-Index)</option>
                      <option value="1.74">1.74 (Hi-Index)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Base Curve (D)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={baseCurve}
                      onChange={(e) => setBaseCurve(e.target.value)}
                      placeholder="4.0"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={calculateMagnification}
                className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Calculate
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {/* Result */}
            {result && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h3 className="font-semibold text-emerald-800 mb-4">Magnification Results</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4 border border-emerald-200">
                    <div className="text-sm text-emerald-700 mb-1">Power Factor</div>
                    <div className="text-2xl font-bold text-emerald-600">
                      {result.powerFactor.toFixed(4)}x
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-emerald-200">
                    <div className="text-sm text-emerald-700 mb-1">Shape Factor</div>
                    <div className="text-2xl font-bold text-emerald-600">
                      {result.shapeFactor.toFixed(4)}x
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-100 rounded-lg p-4 mb-4">
                  <div className="text-center">
                    <div className="text-sm text-emerald-700 mb-1">Total Spectacle Magnification</div>
                    <div className="text-3xl font-bold text-emerald-600">
                      {result.totalMagnification.toFixed(4)}x
                    </div>
                    <div className={`text-lg font-semibold mt-1 ${result.isMinification ? 'text-blue-600' : 'text-orange-600'}`}>
                      {result.isMinification ? '↓' : '↑'} {Math.abs(result.percentChange).toFixed(2)}% {result.isMinification ? 'minification' : 'magnification'}
                    </div>
                  </div>
                </div>

                <div className="text-sm text-emerald-700 space-y-1">
                  <p><strong>Minus lenses</strong> cause minification (image appears smaller)</p>
                  <p><strong>Plus lenses</strong> cause magnification (image appears larger)</p>
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-white rounded-xl border p-6">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-emerald-600" />
              Understanding Spectacle Magnification
            </h2>

            <div className="space-y-4 text-gray-600">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-mono text-center text-sm mb-2">
                  <strong>Power Factor</strong> = 1 / (1 - d x F)
                </p>
                <p className="font-mono text-center text-sm mb-2">
                  <strong>Shape Factor</strong> = 1 / (1 - (t/n) x F1)
                </p>
                <p className="font-mono text-center text-sm">
                  <strong>SM</strong> = Power Factor x Shape Factor
                </p>
                <p className="text-xs text-center text-gray-500 mt-2">
                  d = vertex distance (m), F = lens power (D), t = center thickness (m), n = refractive index, F1 = front curve (D)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Key Concepts:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span><strong>Power factor</strong> depends on vertex distance and lens power</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span><strong>Shape factor</strong> depends on lens thickness and front curve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span><strong>1.0x = no change</strong> in image size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span><strong>&gt;1.0x = magnification</strong> (plus lenses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span><strong>&lt;1.0x = minification</strong> (minus lenses)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Aniseikonia Section */}
          <div className="mt-8 bg-white rounded-xl border p-6">
            <h2 className="font-bold text-gray-900 mb-4">Aniseikonia Considerations</h2>

            <div className="space-y-4 text-gray-600 text-sm">
              <p>
                <strong>Aniseikonia</strong> is a difference in perceived image size between the two eyes.
                It commonly occurs with significant Rx differences between eyes (anisometropia).
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h3 className="font-semibold text-yellow-800 mb-2">Tolerable Difference</h3>
                  <p className="text-yellow-700">Up to 2-3% difference is usually tolerated</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">Problematic</h3>
                  <p className="text-red-700">&gt;5% may cause diplopia, headaches, depth perception issues</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Solutions for Aniseikonia:</h3>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span>Contact lenses (minimal magnification)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span>Iseikonic lens design (modify thickness/curves)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span>Reduce vertex distance for minus lenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span>Match base curves between eyes when possible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Calculators */}
          <div className="mt-8 bg-white rounded-xl border p-6">
            <h2 className="font-bold text-gray-900 mb-4">Related Calculators</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/calculators/vertex-distance"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">📏</span>
                <span className="text-sm font-medium text-gray-700">Vertex Distance</span>
              </Link>
              <Link
                href="/calculators/lens-thickness"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">📐</span>
                <span className="text-sm font-medium text-gray-700">Lens Thickness</span>
              </Link>
              <Link
                href="/calculators/prism"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">🔺</span>
                <span className="text-sm font-medium text-gray-700">Prism Calculator</span>
              </Link>
              <Link
                href="/calculators/spherical-equivalent"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">⚖️</span>
                <span className="text-sm font-medium text-gray-700">Spherical Equivalent</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
