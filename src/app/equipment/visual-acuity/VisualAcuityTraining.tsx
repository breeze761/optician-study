'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Lightbulb,
  Target,
  CheckCircle
} from 'lucide-react'

interface Section {
  id: string
  title: string
  content: React.ReactNode
}

export default function VisualAcuityTraining() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['overview']))

  const toggleSection = (id: string) => {
    const newOpen = new Set(openSections)
    if (newOpen.has(id)) {
      newOpen.delete(id)
    } else {
      newOpen.add(id)
    }
    setOpenSections(newOpen)
  }

  const expandAll = () => {
    setOpenSections(new Set(sections.map(s => s.id)))
  }

  const sections: Section[] = [
    {
      id: 'overview',
      title: '1. What is Visual Acuity?',
      content: (
        <div className="space-y-4">
          <p>
            <strong>Visual acuity (VA)</strong> is a measure of the clarity or sharpness of vision.
            It quantifies the eye&apos;s ability to distinguish fine details and is the most commonly
            used metric for assessing visual function.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Measures the smallest detail the eye can resolve</li>
            <li>Recorded as a fraction (e.g., 20/20, 6/6)</li>
            <li>Essential baseline for every eye examination</li>
            <li>Used to monitor changes over time</li>
            <li>Required for driving licenses, job requirements, etc.</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Understanding 20/20 Vision
            </h4>
            <p className="text-blue-800 mt-2">
              &quot;20/20&quot; means the patient can see at 20 feet what a normal eye can see at 20 feet.
              &quot;20/40&quot; means the patient must be at 20 feet to see what a normal eye sees at 40 feet -
              indicating reduced acuity. &quot;20/15&quot; means better than normal acuity.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'notation',
      title: '2. VA Notation Systems',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Common Notation Systems:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-2 border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Snellen (Feet)</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Snellen (Meters)</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Decimal</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">LogMAR</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t">
                  <td className="px-4 py-2">20/10</td>
                  <td className="px-4 py-2">6/3</td>
                  <td className="px-4 py-2">2.0</td>
                  <td className="px-4 py-2">-0.30</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">20/20</td>
                  <td className="px-4 py-2">6/6</td>
                  <td className="px-4 py-2">1.0</td>
                  <td className="px-4 py-2">0.00</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">20/40</td>
                  <td className="px-4 py-2">6/12</td>
                  <td className="px-4 py-2">0.5</td>
                  <td className="px-4 py-2">0.30</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">20/60</td>
                  <td className="px-4 py-2">6/18</td>
                  <td className="px-4 py-2">0.33</td>
                  <td className="px-4 py-2">0.48</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">20/100</td>
                  <td className="px-4 py-2">6/30</td>
                  <td className="px-4 py-2">0.2</td>
                  <td className="px-4 py-2">0.70</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">20/200</td>
                  <td className="px-4 py-2">6/60</td>
                  <td className="px-4 py-2">0.1</td>
                  <td className="px-4 py-2">1.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">LogMAR Explained:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>LogMAR</strong> (Logarithm of the Minimum Angle of Resolution) is the modern
              research standard:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>LogMAR 0.00 = 20/20</li>
              <li>Each line represents a 0.1 LogMAR step</li>
              <li>Each letter is worth 0.02 LogMAR</li>
              <li>Negative values = better than 20/20</li>
              <li>Positive values = worse than 20/20</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Quick Conversion
            </h4>
            <p className="text-amber-800 mt-2">
              To convert Snellen to decimal: divide numerator by denominator<br/>
              20/20 = 20÷20 = 1.0<br/>
              20/40 = 20÷40 = 0.5<br/>
              20/200 = 20÷200 = 0.1
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'snellen',
      title: '3. Snellen Chart Testing',
      content: (
        <div className="space-y-4">
          <p>
            The <strong>Snellen chart</strong> is the most commonly used VA chart worldwide.
            It uses progressively smaller letters to determine the threshold of resolution.
          </p>

          <h4 className="font-semibold text-gray-900">Snellen Chart Design:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Letter size:</strong> Designed so 20/20 letter subtends 5 minutes of arc at 20 feet</li>
            <li><strong>Stroke width:</strong> Each stroke is 1 minute of arc</li>
            <li><strong>Letter style:</strong> Sans-serif, equal difficulty</li>
            <li><strong>Progression:</strong> Each line smaller than the one above</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4">Standard Testing Procedure:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Set distance:</strong> Position patient 20 feet (6 meters) from chart</li>
            <li><strong>Occlude one eye:</strong> Cover left eye, test right eye first (OD)</li>
            <li><strong>Start high:</strong> Begin with larger letters patient can easily read</li>
            <li><strong>Progress down:</strong> Move to smaller lines until errors occur</li>
            <li><strong>Record threshold:</strong> Last line with majority correct</li>
            <li><strong>Test other eye:</strong> Cover right, test left (OS)</li>
            <li><strong>Test binocular:</strong> Both eyes open (OU)</li>
          </ol>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">Recording Convention:</h4>
            <p className="text-blue-800 mt-2">
              Record the smallest line where patient gets more than half correct:
            </p>
            <ul className="list-disc pl-6 mt-2 text-blue-800">
              <li>20/25-2 = Read 20/25 line, missed 2 letters</li>
              <li>20/25+3 = Read 20/25 line plus 3 letters from 20/20 line</li>
              <li>Always note if with correction (cc) or without (sc)</li>
              <li>Example: VA OD: 20/25-1 cc, OS: 20/20 cc, OU: 20/20 cc</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'logmar',
      title: '4. LogMAR/ETDRS Charts',
      content: (
        <div className="space-y-4">
          <p>
            <strong>ETDRS charts</strong> (Early Treatment Diabetic Retinopathy Study) use LogMAR
            principles and are the gold standard for clinical research and precise VA measurement.
          </p>

          <h4 className="font-semibold text-gray-900">ETDRS Chart Features:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>5 letters per line:</strong> Every line has exactly 5 letters</li>
            <li><strong>Equal legibility:</strong> Letters chosen for equal difficulty (C, D, H, K, N, O, R, S, V, Z)</li>
            <li><strong>Geometric progression:</strong> Letter size changes by 0.1 log units per line</li>
            <li><strong>Equal spacing:</strong> Between letters and between lines</li>
            <li><strong>Standard distance:</strong> Usually 4 meters (can use 2m or 1m for low vision)</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4">ETDRS Scoring:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              Score every letter correctly read:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Each letter = 0.02 LogMAR</li>
              <li>Each line = 5 letters = 0.1 LogMAR</li>
              <li>Count total letters read from largest to smallest</li>
              <li>Calculate: LogMAR = 1.1 - (0.02 × letters read) at 4m</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">Advantages of ETDRS:</h4>
            <ul className="list-disc pl-6 mt-2 text-green-800">
              <li>More precise - can detect smaller changes</li>
              <li>Better standardization across examiners</li>
              <li>Valid for statistical analysis</li>
              <li>Required for clinical trials</li>
              <li>Works well at any distance (adjust notation)</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-purple-900">Low Vision Testing:</h4>
            <p className="text-purple-800 mt-2">
              For low vision patients:
            </p>
            <ul className="list-disc pl-6 mt-2 text-purple-800">
              <li>Move patient closer (2m, 1m, or closer)</li>
              <li>Adjust notation accordingly (e.g., at 1m: 1/10 = 20/200)</li>
              <li>Count fingers (CF), hand motion (HM), light perception (LP) if needed</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'distance-setup',
      title: '5. Testing Distance and Room Setup',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Standard Testing Distances:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">Snellen (US)</h5>
              <p className="text-gray-700 mt-2">
                <strong>20 feet (6.1 meters)</strong><br/>
                At this distance, light rays are essentially parallel (optical infinity).
                Accommodation is relaxed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">ETDRS/LogMAR</h5>
              <p className="text-gray-700 mt-2">
                <strong>4 meters standard</strong><br/>
                Can test at 2m or 1m for low vision with appropriate notation adjustment.
              </p>
            </div>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Room Requirements:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Chart illumination:</strong> 80-320 lux (ideally uniform)</li>
            <li><strong>Room lighting:</strong> Moderate - not too bright, not too dark</li>
            <li><strong>Avoid glare:</strong> No reflections on chart surface</li>
            <li><strong>Clean chart:</strong> Ensure letters are sharp and visible</li>
            <li><strong>Calibrated distance:</strong> Mark floor for exact position</li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Mirror Systems
            </h4>
            <p className="text-amber-800 mt-2">
              Many exam rooms use a mirror to double the optical distance:
            </p>
            <ul className="list-disc pl-6 mt-2 text-amber-800">
              <li>Chart placed behind patient, viewed via mirror on wall</li>
              <li>10-foot room = 20-foot optical path</li>
              <li>Chart letters must be reversed (mirror image)</li>
              <li>Patient must view through mirror, not turn around</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Common Distance Errors
            </h4>
            <ul className="list-disc pl-6 mt-2 text-red-800">
              <li>Patient leaning forward (reduces distance)</li>
              <li>Incorrect floor marking</li>
              <li>Testing through phoropter at wrong vertex</li>
              <li>Patient looking around mirror instead of through it</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'pinhole',
      title: '6. Pinhole Testing',
      content: (
        <div className="space-y-4">
          <p>
            <strong>Pinhole testing</strong> is a crucial diagnostic technique that helps
            differentiate refractive error from pathological causes of reduced vision.
          </p>

          <h4 className="font-semibold text-gray-900">How Pinhole Works:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              A pinhole (typically 1-2mm diameter) allows only central, paraxial light rays
              to enter the eye, reducing the blur circle from refractive error:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Eliminates peripheral aberrations</li>
              <li>Increases depth of focus</li>
              <li>Bypasses most refractive error effects</li>
              <li>Does not help pathological vision loss</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Interpreting Pinhole Results:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-2 border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Result</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Interpretation</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t">
                  <td className="px-4 py-2">VA improves with pinhole</td>
                  <td className="px-4 py-2">Refractive error is likely cause - Rx should help</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">VA unchanged with pinhole</td>
                  <td className="px-4 py-2">Pathology suspected - refer for further evaluation</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">VA worse with pinhole</td>
                  <td className="px-4 py-2">Central media opacity or macular pathology possible</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">Slight improvement only</td>
                  <td className="px-4 py-2">May be combination of refractive error and pathology</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">When to Use Pinhole:</h4>
            <ul className="list-disc pl-6 mt-2 text-blue-800">
              <li>Uncorrected VA is reduced (worse than 20/30)</li>
              <li>Patient without their glasses</li>
              <li>Suspected refractive change</li>
              <li>To assess potential for improvement with new Rx</li>
              <li>When VA doesn&apos;t improve with refraction as expected</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900">Pinhole Limitations:</h4>
            <ul className="list-disc pl-6 mt-2 text-amber-800">
              <li>Reduces retinal illumination significantly</li>
              <li>May not help very high refractive errors (&gt;6D)</li>
              <li>Less effective with high astigmatism</li>
              <li>Can be difficult for patients with hand tremor</li>
              <li>Not a substitute for proper refraction</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'near-vision',
      title: '7. Near Vision Testing',
      content: (
        <div className="space-y-4">
          <p>
            Near vision assessment is essential for presbyopic patients and evaluating
            functional vision for reading and close work.
          </p>

          <h4 className="font-semibold text-gray-900">Near Vision Notation:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-2 border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Jaeger</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">N-notation</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">M-units</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Snellen Equivalent</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t">
                  <td className="px-4 py-2">J1</td>
                  <td className="px-4 py-2">N5</td>
                  <td className="px-4 py-2">0.4M</td>
                  <td className="px-4 py-2">20/20</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">J2</td>
                  <td className="px-4 py-2">N6</td>
                  <td className="px-4 py-2">0.5M</td>
                  <td className="px-4 py-2">20/25</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">J3</td>
                  <td className="px-4 py-2">N8</td>
                  <td className="px-4 py-2">0.6M</td>
                  <td className="px-4 py-2">20/30</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">J5</td>
                  <td className="px-4 py-2">N10</td>
                  <td className="px-4 py-2">0.8M</td>
                  <td className="px-4 py-2">20/40</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">J7</td>
                  <td className="px-4 py-2">N14</td>
                  <td className="px-4 py-2">1.0M</td>
                  <td className="px-4 py-2">20/50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Near Testing Procedure:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Set distance:</strong> Usually 40cm (16 inches) or patient&apos;s preferred</li>
            <li><strong>Good lighting:</strong> Adequate illumination on reading card</li>
            <li><strong>With distance correction:</strong> Patient wears their distance Rx</li>
            <li><strong>Test each eye:</strong> Then both eyes together</li>
            <li><strong>Record result:</strong> Note distance, card type, and acuity achieved</li>
          </ol>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">Near Cards:</h4>
            <ul className="list-disc pl-6 mt-2 text-green-800">
              <li><strong>Jaeger cards:</strong> Traditional, variable text sizes</li>
              <li><strong>Rosenbaum card:</strong> Pocket-sized with multiple notation systems</li>
              <li><strong>MN Read cards:</strong> Standardized for research</li>
              <li><strong>Continuous text:</strong> More realistic reading assessment</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'special-populations',
      title: '8. Special Populations',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Pediatric VA Testing:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h5 className="font-semibold text-blue-900">Infants (0-12 months)</h5>
              <ul className="list-disc pl-4 mt-2 text-blue-800 text-sm">
                <li>Preferential looking tests</li>
                <li>Teller Acuity Cards</li>
                <li>Cardiff cards</li>
                <li>Fixation behavior assessment</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h5 className="font-semibold text-blue-900">Toddlers (1-3 years)</h5>
              <ul className="list-disc pl-4 mt-2 text-blue-800 text-sm">
                <li>LEA symbols</li>
                <li>HOTV letters</li>
                <li>Allen pictures</li>
                <li>Matching cards</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h5 className="font-semibold text-blue-900">Preschool (3-5 years)</h5>
              <ul className="list-disc pl-4 mt-2 text-blue-800 text-sm">
                <li>LEA symbols</li>
                <li>HOTV matching</li>
                <li>Tumbling E</li>
                <li>Crowded symbols (important!)</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h5 className="font-semibold text-blue-900">School age (5+ years)</h5>
              <ul className="list-disc pl-4 mt-2 text-blue-800 text-sm">
                <li>Snellen letters</li>
                <li>LogMAR/ETDRS</li>
                <li>Standard protocols</li>
                <li>Near testing as needed</li>
              </ul>
            </div>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Low Vision Assessment:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use reduced testing distances (2m, 1m, closer)</li>
              <li>ETDRS charts designed for low vision</li>
              <li>Count fingers (CF) at specified distance</li>
              <li>Hand motion (HM) detection</li>
              <li>Light perception (LP) / No light perception (NLP)</li>
              <li>Record: CF @ 2ft, HM, LP+projection, LP-projection, NLP</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Non-Verbal/Cognitive Impairment:</h4>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <ul className="list-disc pl-6 text-amber-800">
              <li>Preferential looking tests</li>
              <li>Picture or symbol matching</li>
              <li>LEA symbols with matching card</li>
              <li>Pointing instead of naming</li>
              <li>Multiple attempts may be needed</li>
              <li>Note any test modifications in record</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'documentation',
      title: '9. Documentation Standards',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Required Documentation:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Testing conditions:</strong> Distance, chart type, lighting</li>
            <li><strong>Correction status:</strong> sc (without correction) or cc (with correction)</li>
            <li><strong>Each eye:</strong> OD, OS, OU</li>
            <li><strong>Exact notation:</strong> Include +/- letters</li>
            <li><strong>Pinhole result:</strong> If performed</li>
            <li><strong>Near VA:</strong> Distance and notation</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4">Standard Recording Format:</h4>
          <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
            <p>VA Distance (20 ft, Snellen):</p>
            <p>OD: 20/40-2 sc, 20/20 cc</p>
            <p>OS: 20/30 sc, 20/20-1 cc</p>
            <p>OU: 20/25 sc, 20/15 cc</p>
            <p>PH: OD improves to 20/25</p>
            <p className="mt-2">VA Near (40cm, with Rx):</p>
            <p>OD: N5, OS: N5, OU: N5</p>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Abbreviations:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-2 border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Abbreviation</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Meaning</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t">
                  <td className="px-4 py-2">sc</td>
                  <td className="px-4 py-2">sine correctione (without correction)</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">cc</td>
                  <td className="px-4 py-2">cum correctione (with correction)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">PH</td>
                  <td className="px-4 py-2">pinhole</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">NI</td>
                  <td className="px-4 py-2">no improvement (with PH)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">CF</td>
                  <td className="px-4 py-2">count fingers</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">HM</td>
                  <td className="px-4 py-2">hand motion</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">LP</td>
                  <td className="px-4 py-2">light perception</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">NLP</td>
                  <td className="px-4 py-2">no light perception</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'practice',
      title: '10. Practice Exercises',
      content: (
        <div className="space-y-4">
          <div className="space-y-4 mt-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 1: Standard VA Testing</h4>
              <p className="text-gray-700 mt-2">
                Practice taking VA on 5 colleagues. Test OD, OS, OU both uncorrected and with
                their glasses. Record using proper notation. Time yourself - aim for efficient
                but accurate testing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 2: Notation Conversion</h4>
              <p className="text-gray-700 mt-2">
                Convert these VAs: 20/30 to LogMAR and decimal. 6/12 to Snellen (feet) and decimal.
                LogMAR 0.40 to Snellen (feet) and decimal. Practice until conversions are automatic.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 3: Pinhole Assessment</h4>
              <p className="text-gray-700 mt-2">
                Test a myopic colleague without their glasses - record uncorrected VA. Then test
                with pinhole - record VA with pinhole. Note the improvement. Repeat on several
                people with different prescriptions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 4: LogMAR Scoring</h4>
              <p className="text-gray-700 mt-2">
                Using an ETDRS chart, practice letter-by-letter scoring. Have a colleague read
                and count total letters. Calculate LogMAR score. Compare to Snellen equivalent.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 5: Pediatric Simulation</h4>
              <p className="text-gray-700 mt-2">
                Practice with LEA symbols or HOTV letters. Simulate testing a child by having
                a colleague respond non-verbally (pointing to matching card). Develop your
                instructions and encouragement techniques.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">Key Skills Checklist:</h4>
            <ul className="mt-2 space-y-1 text-green-800">
              <li>✓ Understand VA notation systems (Snellen, LogMAR, decimal)</li>
              <li>✓ Can perform standard Snellen VA testing</li>
              <li>✓ Proper use of pinhole and interpretation</li>
              <li>✓ Near vision testing proficiency</li>
              <li>✓ Know pediatric and special population methods</li>
              <li>✓ Accurate documentation with proper notation</li>
              <li>✓ Can convert between notation systems</li>
              <li>✓ Understand room setup requirements</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-rose-600 to-pink-700 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 text-rose-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Equipment
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">📊</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Visual Acuity Testing
                </h1>
                <p className="text-rose-200 mt-1">
                  Master VA measurement techniques
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            {/* Controls */}
            <div className="flex justify-end mb-6">
              <button
                onClick={expandAll}
                className="text-sm text-rose-600 hover:text-rose-700 font-medium"
              >
                Expand All Sections
              </button>
            </div>

            {/* Sections */}
            <div className="space-y-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h2 className="text-lg font-semibold text-gray-900">
                      {section.title}
                    </h2>
                    {openSections.has(section.id) ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {openSections.has(section.id) && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4 prose prose-gray max-w-none">
                        {section.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Next Steps */}
            <div className="mt-8 bg-rose-50 rounded-xl p-6 border border-rose-200">
              <h3 className="font-semibold text-rose-900 mb-4">Continue Learning</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/equipment/lensometer"
                  className="inline-flex items-center gap-2 bg-white text-rose-600 px-4 py-2 rounded-lg font-medium border border-rose-200 hover:bg-rose-50 transition-colors"
                >
                  Review: Lensometer
                </Link>
                <Link
                  href="/equipment/keratometer"
                  className="inline-flex items-center gap-2 bg-white text-rose-600 px-4 py-2 rounded-lg font-medium border border-rose-200 hover:bg-rose-50 transition-colors"
                >
                  Review: Keratometer
                </Link>
                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-rose-700 transition-colors"
                >
                  Practice Calculations
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
