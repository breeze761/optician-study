'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Calculator, ArrowLeft, RotateCcw, Info } from 'lucide-react'

interface EyeRx {
  sphere: string
  cylinder: string
}

export default function SphericalEquivalentCalculator() {
  const [odRx, setOdRx] = useState<EyeRx>({ sphere: '', cylinder: '' })
  const [osRx, setOsRx] = useState<EyeRx>({ sphere: '', cylinder: '' })

  const [result, setResult] = useState<{
    odSE: number | null
    osSE: number | null
    formula: string
  } | null>(null)

  const calculateSE = (sphere: string, cylinder: string): number | null => {
    const sph = parseFloat(sphere)
    const cyl = parseFloat(cylinder)

    if (isNaN(sph)) return null
    if (isNaN(cyl)) return sph // If no cylinder, SE = sphere

    // Spherical Equivalent = Sphere + (Cylinder / 2)
    return Math.round((sph + cyl / 2) * 100) / 100
  }

  const handleCalculate = () => {
    const odSE = calculateSE(odRx.sphere, odRx.cylinder)
    const osSE = calculateSE(osRx.sphere, osRx.cylinder)

    setResult({
      odSE,
      osSE,
      formula: 'SE = Sphere + (Cylinder / 2)'
    })
  }

  const handleReset = () => {
    setOdRx({ sphere: '', cylinder: '' })
    setOsRx({ sphere: '', cylinder: '' })
    setResult(null)
  }

  const formatPower = (power: number): string => {
    if (power === 0) return 'Plano'
    return power > 0 ? `+${power.toFixed(2)}` : power.toFixed(2)
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
                <span className="text-2xl">⚖️</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Spherical Equivalent Calculator</h1>
                <p className="text-gray-500 text-sm">SE = Sphere + Cyl/2</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Calculate the spherical equivalent of a sphero-cylindrical prescription. Used for contact lens fitting, refractive surgery, and comparing prescriptions.
            </p>

            {/* Prescription Pad Style Input */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="border-b-2 border-gray-300 pb-2 mb-4">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Prescription</span>
              </div>

              {/* Header Row */}
              <div className="grid grid-cols-[60px_1fr_1fr] gap-2 mb-2">
                <div></div>
                <div className="text-center text-xs font-semibold text-gray-500 uppercase">Sphere</div>
                <div className="text-center text-xs font-semibold text-gray-500 uppercase">Cylinder</div>
              </div>

              {/* OD Row */}
              <div className="grid grid-cols-[60px_1fr_1fr] gap-2 mb-2 items-center">
                <div className="text-sm font-bold text-gray-700">OD</div>
                <input
                  type="number"
                  step="0.25"
                  value={odRx.sphere}
                  onChange={(e) => setOdRx({ ...odRx, sphere: e.target.value })}
                  placeholder="-2.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="number"
                  step="0.25"
                  value={odRx.cylinder}
                  onChange={(e) => setOdRx({ ...odRx, cylinder: e.target.value })}
                  placeholder="-1.50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* OS Row */}
              <div className="grid grid-cols-[60px_1fr_1fr] gap-2 items-center">
                <div className="text-sm font-bold text-gray-700">OS</div>
                <input
                  type="number"
                  step="0.25"
                  value={osRx.sphere}
                  onChange={(e) => setOsRx({ ...osRx, sphere: e.target.value })}
                  placeholder="-1.75"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="number"
                  step="0.25"
                  value={osRx.cylinder}
                  onChange={(e) => setOsRx({ ...osRx, cylinder: e.target.value })}
                  placeholder="-1.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleCalculate}
                className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Calculate SE
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {/* Result */}
            {result && (result.odSE !== null || result.osSE !== null) && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h3 className="font-semibold text-emerald-800 mb-4">Spherical Equivalent</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {result.odSE !== null && (
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <div className="text-sm text-emerald-700 mb-1">OD (Right Eye)</div>
                      <div className="text-2xl font-bold text-emerald-600">
                        {formatPower(result.odSE)} D
                      </div>
                    </div>
                  )}
                  {result.osSE !== null && (
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <div className="text-sm text-emerald-700 mb-1">OS (Left Eye)</div>
                      <div className="text-2xl font-bold text-emerald-600">
                        {formatPower(result.osSE)} D
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-sm text-emerald-700 bg-emerald-100 rounded-lg p-3">
                  <p className="font-medium mb-2">{result.formula}</p>
                  {result.odSE !== null && odRx.cylinder && (
                    <p>OD: {odRx.sphere} + ({odRx.cylinder} / 2) = {formatPower(result.odSE)}</p>
                  )}
                  {result.osSE !== null && osRx.cylinder && (
                    <p>OS: {osRx.sphere} + ({osRx.cylinder} / 2) = {formatPower(result.osSE)}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-white rounded-xl border p-6">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-emerald-600" />
              What is Spherical Equivalent?
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Spherical Equivalent (SE)</strong> converts a sphero-cylindrical prescription into a single
                spherical power that represents the average refractive error. It&apos;s the power at the circle of
                least confusion (midpoint between the two focal lines).
              </p>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-mono text-center text-lg mb-2">
                  SE = Sphere + (Cylinder / 2)
                </p>
                <p className="text-sm text-center text-gray-500">
                  Works with both plus and minus cylinder formats
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Common Uses:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span><strong>Soft contact lens fitting</strong> - When cylinder is &lt;0.75D, spherical CLs may work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span><strong>Refractive surgery</strong> - Comparing pre/post-op refractive status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span><strong>IOL calculations</strong> - Selecting intraocular lens power</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span><strong>Research</strong> - Comparing refractive error across studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&#8226;</span>
                    <span><strong>Quick estimates</strong> - Approximating vision without full correction</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Important Note</h3>
                <p className="text-sm text-yellow-700">
                  Spherical equivalent is an <strong>approximation</strong>. Patients with significant astigmatism
                  (cylinder &gt;1.00D) will likely notice blur with SE-only correction. The full sphero-cylindrical
                  prescription provides best visual acuity.
                </p>
              </div>
            </div>
          </div>

          {/* Example Section */}
          <div className="mt-8 bg-white rounded-xl border p-6">
            <h2 className="font-bold text-gray-900 mb-4">Example Calculations</h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Example 1: Minus Cylinder</p>
                <p className="font-mono">-2.00 -1.50 x 180</p>
                <p className="text-sm text-gray-600 mt-1">
                  SE = -2.00 + (-1.50 / 2) = -2.00 + (-0.75) = <strong>-2.75 D</strong>
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Example 2: Plus Cylinder</p>
                <p className="font-mono">-3.50 +2.00 x 090</p>
                <p className="text-sm text-gray-600 mt-1">
                  SE = -3.50 + (+2.00 / 2) = -3.50 + (+1.00) = <strong>-2.50 D</strong>
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Example 3: Sphere Only</p>
                <p className="font-mono">+1.25 sphere</p>
                <p className="text-sm text-gray-600 mt-1">
                  SE = +1.25 + (0 / 2) = <strong>+1.25 D</strong> (no change)
                </p>
              </div>
            </div>
          </div>

          {/* Related Calculators */}
          <div className="mt-8 bg-white rounded-xl border p-6">
            <h2 className="font-bold text-gray-900 mb-4">Related Calculators</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/calculators/transposition"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">🔄</span>
                <span className="text-sm font-medium text-gray-700">Transposition</span>
              </Link>
              <Link
                href="/calculators/vertex-distance"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">📏</span>
                <span className="text-sm font-medium text-gray-700">Vertex Distance</span>
              </Link>
              <Link
                href="/calculators/reading-glasses"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">📖</span>
                <span className="text-sm font-medium text-gray-700">Reading Glasses</span>
              </Link>
              <Link
                href="/calculators/computer-glasses"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">💻</span>
                <span className="text-sm font-medium text-gray-700">Computer Glasses</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
