'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Calculator, ArrowLeft, ArrowRight, RotateCcw, Info } from 'lucide-react'

type CalculationMode = 'prism-from-decentration' | 'decentration-for-prism'

export default function PrismCalculatorPage() {
  const [mode, setMode] = useState<CalculationMode>('prism-from-decentration')

  // Prism from Decentration inputs
  const [lensPower, setLensPower] = useState('')
  const [decentration, setDecentration] = useState('')

  // Decentration for Prism inputs
  const [prescribedPrism, setPrescribedPrism] = useState('')
  const [lensPowerForPrism, setLensPowerForPrism] = useState('')

  const [result, setResult] = useState<{
    value: number
    formula: string
    explanation: string
  } | null>(null)

  const calculatePrismFromDecentration = () => {
    const power = parseFloat(lensPower)
    const dec = parseFloat(decentration)

    if (isNaN(power) || isNaN(dec)) {
      return
    }

    // Prentice's Rule: Prism (Δ) = Decentration (cm) × Power (D)
    // If decentration is in mm, divide by 10
    const decCm = dec / 10 // Convert mm to cm
    const prism = Math.abs(decCm * power)

    setResult({
      value: Math.round(prism * 100) / 100,
      formula: `Prism = Decentration (cm) × Power (D)`,
      explanation: `${dec}mm ÷ 10 = ${decCm}cm × ${Math.abs(power)}D = ${Math.round(prism * 100) / 100}Δ prism`
    })
  }

  const calculateDecentrationForPrism = () => {
    const prism = parseFloat(prescribedPrism)
    const power = parseFloat(lensPowerForPrism)

    if (isNaN(prism) || isNaN(power) || power === 0) {
      return
    }

    // Rearranged: Decentration (cm) = Prism (Δ) ÷ Power (D)
    const decCm = prism / Math.abs(power)
    const decMm = decCm * 10 // Convert to mm

    setResult({
      value: Math.round(decMm * 100) / 100,
      formula: `Decentration (cm) = Prism (Δ) ÷ Power (D)`,
      explanation: `${prism}Δ ÷ ${Math.abs(power)}D = ${Math.round(decCm * 100) / 100}cm = ${Math.round(decMm * 100) / 100}mm decentration`
    })
  }

  const handleCalculate = () => {
    if (mode === 'prism-from-decentration') {
      calculatePrismFromDecentration()
    } else {
      calculateDecentrationForPrism()
    }
  }

  const handleReset = () => {
    setLensPower('')
    setDecentration('')
    setPrescribedPrism('')
    setLensPowerForPrism('')
    setResult(null)
  }

  const handleModeChange = (newMode: CalculationMode) => {
    setMode(newMode)
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
                <span className="text-2xl">🔺</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Prism Calculator</h1>
                <p className="text-gray-500 text-sm">Prentice's Rule</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Calculate induced prism from decentration or find the decentration needed for prescribed prism.
            </p>

            {/* Mode Toggle */}
            <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
              <button
                onClick={() => handleModeChange('prism-from-decentration')}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                  mode === 'prism-from-decentration'
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Prism from Decentration
              </button>
              <button
                onClick={() => handleModeChange('decentration-for-prism')}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                  mode === 'decentration-for-prism'
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Decentration for Prism
              </button>
            </div>

            {/* Inputs */}
            {mode === 'prism-from-decentration' ? (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lens Power (D)
                  </label>
                  <input
                    type="number"
                    step="0.25"
                    value={lensPower}
                    onChange={(e) => setLensPower(e.target.value)}
                    placeholder="e.g., -4.00 or +2.50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Use sphere power or power in the meridian of interest</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Decentration (mm)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={decentration}
                    onChange={(e) => setDecentration(e.target.value)}
                    placeholder="e.g., 3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Distance from optical center to pupil position</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prescribed Prism (Δ)
                  </label>
                  <input
                    type="number"
                    step="0.25"
                    value={prescribedPrism}
                    onChange={(e) => setPrescribedPrism(e.target.value)}
                    placeholder="e.g., 2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lens Power (D)
                  </label>
                  <input
                    type="number"
                    step="0.25"
                    value={lensPowerForPrism}
                    onChange={(e) => setLensPowerForPrism(e.target.value)}
                    placeholder="e.g., -4.00 or +2.50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleCalculate}
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
                <h3 className="font-semibold text-emerald-800 mb-2">Result</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-3">
                  {result.value} {mode === 'prism-from-decentration' ? 'Δ prism diopters' : 'mm decentration'}
                </div>
                <div className="text-sm text-emerald-700 bg-emerald-100 rounded-lg p-3">
                  <p className="font-medium mb-1">{result.formula}</p>
                  <p>{result.explanation}</p>
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-white rounded-xl border p-6">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-emerald-600" />
              Understanding Prentice's Rule
            </h2>

            <div className="space-y-4 text-gray-600">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-mono text-center text-lg mb-2">
                  Prism (Δ) = Decentration (cm) × Power (D)
                </p>
                <p className="text-sm text-center text-gray-500">
                  or: Δ = d × F (where d is in cm and F is in diopters)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Key Concepts:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong>Induced prism</strong> occurs when the optical center doesn't align with the pupil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong>Base direction</strong>: For minus lenses, base is toward the thicker edge (toward decentration). For plus lenses, base is toward the thinner edge (away from decentration)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong>Vertical imbalance</strong>: When eyes look through different prism amounts, usually &gt;1.5Δ difference is problematic</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Common Applications:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Checking vertical imbalance in progressive lenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Calculating slab-off requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Grinding prism by decentration to save cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Troubleshooting patient complaints about new glasses</span>
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
                href="/calculators/lens-cutout"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">✂️</span>
                <span className="text-sm font-medium text-gray-700">Lens Cutout</span>
              </Link>
              <Link
                href="/calculators/magnification"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">🔍</span>
                <span className="text-sm font-medium text-gray-700">Magnification</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
