'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Calculator, ArrowLeft, RotateCcw, Info } from 'lucide-react'

interface LensMaterial {
  name: string
  index: number
  minCenterThickness: number
  description: string
}

const lensMaterials: LensMaterial[] = [
  { name: 'CR-39 (Standard Plastic)', index: 1.498, minCenterThickness: 2.0, description: 'Most common, best optics' },
  { name: 'Polycarbonate', index: 1.586, minCenterThickness: 1.5, description: 'Impact resistant, thinner' },
  { name: 'Trivex', index: 1.532, minCenterThickness: 1.5, description: 'Best clarity + impact resistance' },
  { name: 'Mid-Index 1.56', index: 1.56, minCenterThickness: 1.5, description: 'Thinner than CR-39' },
  { name: 'High-Index 1.60', index: 1.60, minCenterThickness: 1.2, description: 'Thinner for moderate Rx' },
  { name: 'High-Index 1.67', index: 1.67, minCenterThickness: 1.0, description: 'Thinner for higher Rx' },
  { name: 'High-Index 1.74', index: 1.74, minCenterThickness: 1.0, description: 'Thinnest available' },
]

export default function LensThicknessCalculator() {
  const [spherePower, setSpherePower] = useState('')
  const [frameWidth, setFrameWidth] = useState('')
  const [framePD, setFramePD] = useState('')
  const [patientPD, setPatientPD] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState(lensMaterials[0])

  const [result, setResult] = useState<{
    edgeThickness: number
    centerThickness: number
    isMinusLens: boolean
    decentration: number
    effectiveDiameter: number
  } | null>(null)

  const calculateThickness = () => {
    const sphere = parseFloat(spherePower)
    const width = parseFloat(frameWidth)
    const fPD = parseFloat(framePD)
    const pPD = parseFloat(patientPD)

    if (isNaN(sphere) || isNaN(width) || isNaN(fPD) || isNaN(pPD)) {
      return
    }

    const isMinusLens = sphere < 0
    const absPower = Math.abs(sphere)
    const decentration = Math.abs(fPD - pPD) / 2
    const effectiveDiameter = width + 2 + (decentration * 2)
    const radiusOfCurvature = (selectedMaterial.index - 1) / (absPower / 1000)
    const halfDiameter = effectiveDiameter / 2

    let sag = 0
    if (radiusOfCurvature > halfDiameter) {
      sag = radiusOfCurvature - Math.sqrt(radiusOfCurvature * radiusOfCurvature - halfDiameter * halfDiameter)
    } else {
      sag = (halfDiameter * halfDiameter) / (2 * radiusOfCurvature)
    }

    let edgeThickness: number
    let centerThickness: number

    if (isMinusLens) {
      centerThickness = selectedMaterial.minCenterThickness
      edgeThickness = centerThickness + sag
    } else {
      edgeThickness = 1.5
      centerThickness = edgeThickness + sag
    }

    setResult({
      edgeThickness: Math.round(edgeThickness * 10) / 10,
      centerThickness: Math.round(centerThickness * 10) / 10,
      isMinusLens,
      decentration: Math.round(decentration * 10) / 10,
      effectiveDiameter: Math.round(effectiveDiameter * 10) / 10
    })
  }

  const handleReset = () => {
    setSpherePower('')
    setFrameWidth('')
    setFramePD('')
    setPatientPD('')
    setResult(null)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <Link href="/calculators" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6">
            <ArrowLeft className="w-4 h-4" />
            All Calculators
          </Link>

          <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📐</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Lens Thickness Estimator</h1>
                <p className="text-gray-500 text-sm">Edge & Center Thickness</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Estimate lens thickness based on prescription, frame size, and lens material.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sphere Power (D)</label>
                <input type="number" step="0.25" value={spherePower} onChange={(e) => setSpherePower(e.target.value)} placeholder="e.g., -6.00 or +4.00" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                <p className="text-xs text-gray-500 mt-1">Use the sphere power (cylinder not included in this estimate)</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Frame Eye Size (mm)</label>
                  <input type="number" value={frameWidth} onChange={(e) => setFrameWidth(e.target.value)} placeholder="e.g., 54" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Frame PD (mm)</label>
                  <input type="number" value={framePD} onChange={(e) => setFramePD(e.target.value)} placeholder="e.g., 70" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                  <p className="text-xs text-gray-500 mt-1">Eye size + bridge</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Patient PD (mm)</label>
                <input type="number" value={patientPD} onChange={(e) => setPatientPD(e.target.value)} placeholder="e.g., 64" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lens Material</label>
                <select value={selectedMaterial.name} onChange={(e) => setSelectedMaterial(lensMaterials.find(m => m.name === e.target.value) || lensMaterials[0])} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  {lensMaterials.map((material) => (
                    <option key={material.name} value={material.name}>{material.name} (n={material.index})</option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">{selectedMaterial.description}</p>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <button onClick={calculateThickness} className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                <Calculator className="w-5 h-5" />
                Estimate Thickness
              </button>
              <button onClick={handleReset} className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {result && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h3 className="font-semibold text-emerald-800 mb-4">Estimated Thickness</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className={`p-4 rounded-lg ${result.isMinusLens ? 'bg-emerald-100' : 'bg-white border'}`}>
                    <div className="text-sm text-emerald-700 mb-1">Edge Thickness</div>
                    <div className="text-2xl font-bold text-emerald-600">{result.edgeThickness} mm</div>
                    {result.isMinusLens && <div className="text-xs text-emerald-600 mt-1">Thickest point</div>}
                  </div>
                  <div className={`p-4 rounded-lg ${!result.isMinusLens ? 'bg-emerald-100' : 'bg-white border'}`}>
                    <div className="text-sm text-emerald-700 mb-1">Center Thickness</div>
                    <div className="text-2xl font-bold text-emerald-600">{result.centerThickness} mm</div>
                    {!result.isMinusLens && <div className="text-xs text-emerald-600 mt-1">Thickest point</div>}
                  </div>
                </div>
                <div className="text-sm text-emerald-700 space-y-1 bg-emerald-100 rounded-lg p-3">
                  <p><strong>Lens Type:</strong> {result.isMinusLens ? 'Minus (concave)' : 'Plus (convex)'}</p>
                  <p><strong>Decentration:</strong> {result.decentration} mm per eye</p>
                  <p><strong>Effective Diameter:</strong> {result.effectiveDiameter} mm</p>
                </div>
                <p className="text-xs text-emerald-600 mt-3 italic">* These are estimates. Actual thickness varies based on base curve, cylinder power, and lab equipment.</p>
              </div>
            )}
          </div>

          <div className="mt-8 bg-white rounded-xl border p-6">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-emerald-600" />
              Lens Material Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Material</th>
                    <th className="text-center py-2 px-2">Index</th>
                    <th className="text-center py-2 px-2">Thickness</th>
                    <th className="text-left py-2 pl-2">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="py-2 pr-4">CR-39</td><td className="text-center py-2 px-2">1.50</td><td className="text-center py-2 px-2">Thickest</td><td className="py-2 pl-2 text-gray-600">Low Rx, best optics</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">Polycarbonate</td><td className="text-center py-2 px-2">1.59</td><td className="text-center py-2 px-2">Medium</td><td className="py-2 pl-2 text-gray-600">Kids, safety, rimless</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">Trivex</td><td className="text-center py-2 px-2">1.53</td><td className="text-center py-2 px-2">Medium</td><td className="py-2 pl-2 text-gray-600">Best of both worlds</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">Hi-Index 1.60</td><td className="text-center py-2 px-2">1.60</td><td className="text-center py-2 px-2">Thin</td><td className="py-2 pl-2 text-gray-600">Rx ±4.00 to ±6.00</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">Hi-Index 1.67</td><td className="text-center py-2 px-2">1.67</td><td className="text-center py-2 px-2">Thinner</td><td className="py-2 pl-2 text-gray-600">Rx ±6.00 to ±9.00</td></tr>
                  <tr><td className="py-2 pr-4">Hi-Index 1.74</td><td className="text-center py-2 px-2">1.74</td><td className="text-center py-2 px-2">Thinnest</td><td className="py-2 pl-2 text-gray-600">Rx &gt; ±9.00</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl border p-6">
            <h2 className="font-bold text-gray-900 mb-4">Tips for Thinner Lenses</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span><span><strong>Choose smaller frames</strong> - Eye size has the biggest impact on edge thickness</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span><span><strong>Match frame PD to patient PD</strong> - Reduces decentration and edge thickness</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span><span><strong>Select appropriate material</strong> - Higher index for higher prescriptions</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span><span><strong>Consider aspheric design</strong> - Flatter curves = thinner edges</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span><span><strong>Roll and polish edges</strong> - Makes lenses appear thinner</span></li>
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-xl border p-6">
            <h2 className="font-bold text-gray-900 mb-4">Related Calculators</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/calculators/lens-cutout" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"><span className="text-xl">✂️</span><span className="text-sm font-medium text-gray-700">Lens Cutout</span></Link>
              <Link href="/calculators/prism" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"><span className="text-xl">🔺</span><span className="text-sm font-medium text-gray-700">Prism Calculator</span></Link>
              <Link href="/calculators/magnification" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"><span className="text-xl">🔍</span><span className="text-sm font-medium text-gray-700">Magnification</span></Link>
              <Link href="/calculators/transposition" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"><span className="text-xl">🔄</span><span className="text-sm font-medium text-gray-700">Transposition</span></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
