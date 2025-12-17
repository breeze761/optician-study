'use client'

import { useState, useRef } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, RotateCcw, Printer, Info } from 'lucide-react'

interface FrameMeasurements {
  eyeSize: string
  bridge: string
  templeLength: string
  aDistance: string // Frame PD
}

interface PatientMeasurements {
  pdOD: string
  pdOS: string
  segHeight: string
  ocHeight: string
}

export default function LayoutChartGeneratorPage() {
  const [frame, setFrame] = useState<FrameMeasurements>({
    eyeSize: '',
    bridge: '',
    templeLength: '',
    aDistance: ''
  })

  const [patient, setPatient] = useState<PatientMeasurements>({
    pdOD: '',
    pdOS: '',
    segHeight: '',
    ocHeight: ''
  })

  const [lensType, setLensType] = useState<'single-vision' | 'bifocal' | 'progressive'>('single-vision')

  const chartRef = useRef<HTMLDivElement>(null)

  // Calculate decentration
  const calculateDecentration = () => {
    const framePD = parseFloat(frame.aDistance)
    const pdRight = parseFloat(patient.pdOD)
    const pdLeft = parseFloat(patient.pdOS)

    if (isNaN(framePD) || (isNaN(pdRight) && isNaN(pdLeft))) {
      return { od: null, os: null }
    }

    const totalPD = (!isNaN(pdRight) ? pdRight : 0) + (!isNaN(pdLeft) ? pdLeft : 0)
    const halfFramePD = framePD / 2

    return {
      od: !isNaN(pdRight) ? Math.round((halfFramePD - pdRight) * 10) / 10 : null,
      os: !isNaN(pdLeft) ? Math.round((halfFramePD - pdLeft) * 10) / 10 : null
    }
  }

  const decentration = calculateDecentration()

  const handlePrint = () => {
    window.print()
  }

  const handleReset = () => {
    setFrame({ eyeSize: '', bridge: '', templeLength: '', aDistance: '' })
    setPatient({ pdOD: '', pdOS: '', segHeight: '', ocHeight: '' })
    setLensType('single-vision')
  }

  const isComplete = frame.eyeSize && frame.bridge && (patient.pdOD || patient.pdOS)

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Link */}
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6 print:hidden"
          >
            <ArrowLeft className="w-4 h-4" />
            All Calculators
          </Link>

          {/* Calculator Card */}
          <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8 print:shadow-none print:border-0">
            <div className="flex items-center gap-3 mb-2 print:hidden">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Layout Chart Generator</h1>
                <p className="text-gray-500 text-sm">Professional Lens Layout</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 print:hidden">
              Generate a visual layout chart for lab orders. Enter frame and patient measurements.
            </p>

            {/* Input Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 print:hidden">
              {/* Frame Measurements */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Frame Measurements</h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Eye Size (A)</label>
                    <input
                      type="number"
                      value={frame.eyeSize}
                      onChange={(e) => setFrame({ ...frame, eyeSize: e.target.value })}
                      placeholder="54"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bridge (DBL)</label>
                    <input
                      type="number"
                      value={frame.bridge}
                      onChange={(e) => setFrame({ ...frame, bridge: e.target.value })}
                      placeholder="18"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Temple</label>
                    <input
                      type="number"
                      value={frame.templeLength}
                      onChange={(e) => setFrame({ ...frame, templeLength: e.target.value })}
                      placeholder="140"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Frame PD (A+DBL)</label>
                    <input
                      type="number"
                      value={frame.aDistance}
                      onChange={(e) => setFrame({ ...frame, aDistance: e.target.value })}
                      placeholder="72"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Patient Measurements */}
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Patient Measurements</h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PD OD (Right)</label>
                    <input
                      type="number"
                      step="0.5"
                      value={patient.pdOD}
                      onChange={(e) => setPatient({ ...patient, pdOD: e.target.value })}
                      placeholder="32"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PD OS (Left)</label>
                    <input
                      type="number"
                      step="0.5"
                      value={patient.pdOS}
                      onChange={(e) => setPatient({ ...patient, pdOS: e.target.value })}
                      placeholder="32"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">OC Height</label>
                    <input
                      type="number"
                      step="0.5"
                      value={patient.ocHeight}
                      onChange={(e) => setPatient({ ...patient, ocHeight: e.target.value })}
                      placeholder="22"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Seg Height</label>
                    <input
                      type="number"
                      step="0.5"
                      value={patient.segHeight}
                      onChange={(e) => setPatient({ ...patient, segHeight: e.target.value })}
                      placeholder="18"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lens Type</label>
                  <select
                    value={lensType}
                    onChange={(e) => setLensType(e.target.value as typeof lensType)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="single-vision">Single Vision</option>
                    <option value="bifocal">Bifocal</option>
                    <option value="progressive">Progressive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mb-8 print:hidden">
              <button
                onClick={handlePrint}
                disabled={!isComplete}
                className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Printer className="w-5 h-5" />
                Print Chart
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {/* Layout Chart Visual */}
            {isComplete && (
              <div ref={chartRef} className="bg-white border-2 border-gray-300 rounded-xl p-6 print:border-0">
                <h2 className="text-xl font-bold text-center mb-6 print:text-2xl">Lens Layout Chart</h2>

                {/* Frame Info */}
                <div className="text-center mb-4 text-sm text-gray-600">
                  <span className="font-semibold">Frame:</span> {frame.eyeSize}-{frame.bridge}-{frame.templeLength}
                  {frame.aDistance && <span className="ml-4"><span className="font-semibold">Frame PD:</span> {frame.aDistance}mm</span>}
                </div>

                {/* Visual Layout */}
                <div className="flex justify-center gap-4 mb-6">
                  {/* OD Lens */}
                  <div className="relative">
                    <div className="w-40 h-32 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-50">
                      {/* Crosshairs */}
                      <div className="absolute w-full h-px bg-gray-300"></div>
                      <div className="absolute h-full w-px bg-gray-300"></div>

                      {/* OC Point */}
                      <div
                        className="absolute w-3 h-3 bg-emerald-500 rounded-full"
                        style={{
                          transform: `translate(${decentration.od ? -decentration.od * 2 : 0}px, ${patient.ocHeight ? -(parseFloat(patient.ocHeight) - 16) * 2 : 0}px)`
                        }}
                      ></div>

                      {/* Seg line for bifocal/progressive */}
                      {(lensType === 'bifocal' || lensType === 'progressive') && patient.segHeight && (
                        <div
                          className="absolute w-full h-px bg-blue-500"
                          style={{
                            bottom: `${(parseFloat(patient.segHeight) / 32) * 100}%`
                          }}
                        ></div>
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <div className="font-bold text-gray-900">OD (Right)</div>
                      <div className="text-sm text-gray-600">PD: {patient.pdOD}mm</div>
                      {decentration.od !== null && (
                        <div className="text-sm text-emerald-600">
                          Dec: {decentration.od > 0 ? 'IN' : 'OUT'} {Math.abs(decentration.od)}mm
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bridge representation */}
                  <div className="flex items-center">
                    <div className="w-8 h-2 bg-gray-400 rounded"></div>
                  </div>

                  {/* OS Lens */}
                  <div className="relative">
                    <div className="w-40 h-32 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-50">
                      {/* Crosshairs */}
                      <div className="absolute w-full h-px bg-gray-300"></div>
                      <div className="absolute h-full w-px bg-gray-300"></div>

                      {/* OC Point */}
                      <div
                        className="absolute w-3 h-3 bg-emerald-500 rounded-full"
                        style={{
                          transform: `translate(${decentration.os ? decentration.os * 2 : 0}px, ${patient.ocHeight ? -(parseFloat(patient.ocHeight) - 16) * 2 : 0}px)`
                        }}
                      ></div>

                      {/* Seg line for bifocal/progressive */}
                      {(lensType === 'bifocal' || lensType === 'progressive') && patient.segHeight && (
                        <div
                          className="absolute w-full h-px bg-blue-500"
                          style={{
                            bottom: `${(parseFloat(patient.segHeight) / 32) * 100}%`
                          }}
                        ></div>
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <div className="font-bold text-gray-900">OS (Left)</div>
                      <div className="text-sm text-gray-600">PD: {patient.pdOS}mm</div>
                      {decentration.os !== null && (
                        <div className="text-sm text-emerald-600">
                          Dec: {decentration.os > 0 ? 'IN' : 'OUT'} {Math.abs(decentration.os)}mm
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Measurements Summary */}
                <div className="grid grid-cols-2 gap-4 text-sm border-t pt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Frame Measurements</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Eye Size (A): <span className="font-medium">{frame.eyeSize}mm</span></p>
                      <p>Bridge (DBL): <span className="font-medium">{frame.bridge}mm</span></p>
                      {frame.templeLength && <p>Temple: <span className="font-medium">{frame.templeLength}mm</span></p>}
                      {frame.aDistance && <p>Frame PD: <span className="font-medium">{frame.aDistance}mm</span></p>}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Patient Measurements</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>PD: <span className="font-medium">{patient.pdOD}/{patient.pdOS}mm</span></p>
                      {patient.ocHeight && <p>OC Height: <span className="font-medium">{patient.ocHeight}mm</span></p>}
                      {patient.segHeight && <p>Seg Height: <span className="font-medium">{patient.segHeight}mm</span></p>}
                      <p>Lens Type: <span className="font-medium capitalize">{lensType.replace('-', ' ')}</span></p>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-4 pt-4 border-t text-xs text-gray-500 flex items-center gap-4 justify-center">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full"></span> Optical Center
                  </span>
                  {(lensType === 'bifocal' || lensType === 'progressive') && (
                    <span className="flex items-center gap-1">
                      <span className="w-4 h-0.5 bg-blue-500"></span> Seg Line
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-white rounded-xl border p-6 print:hidden">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-emerald-600" />
              Layout Chart Guide
            </h2>

            <div className="space-y-4 text-gray-600 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Why Use a Layout Chart?</h3>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Visualize optical center placement before ordering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Verify measurements are correct for the frame</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Communicate clearly with the lab</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Document measurements for patient records</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Decentration Direction:</h3>
                <ul className="space-y-1">
                  <li><strong>IN</strong> = Optical center moves toward the nose (most common)</li>
                  <li><strong>OUT</strong> = Optical center moves toward the temple</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Calculators */}
          <div className="mt-8 bg-white rounded-xl border p-6 print:hidden">
            <h2 className="font-bold text-gray-900 mb-4">Related Calculators</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/calculators/lens-cutout"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">✂️</span>
                <span className="text-sm font-medium text-gray-700">Lens Cutout</span>
              </Link>
              <Link
                href="/calculators/prism"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">🔺</span>
                <span className="text-sm font-medium text-gray-700">Prism Calculator</span>
              </Link>
              <Link
                href="/calculators/lens-thickness"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">📐</span>
                <span className="text-sm font-medium text-gray-700">Lens Thickness</span>
              </Link>
              <Link
                href="/calculators/progressive-identifier"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-xl">🔬</span>
                <span className="text-sm font-medium text-gray-700">Progressive ID</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          header, footer, .print\\:hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
            background: white !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:border-0 {
            border: none !important;
          }
        }
      `}</style>
    </>
  )
}
