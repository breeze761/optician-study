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

export default function PhoropterTrainingPage() {
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
      title: '1. What is a Phoropter?',
      content: (
        <div className="space-y-4">
          <p>
            A <strong>phoropter</strong> (also called a refractor or phoroptor) is the primary
            instrument used to determine a patient&apos;s refractive error and prescribe corrective
            lenses. It contains a series of lenses that can be rotated into place to find the
            combination that provides the clearest vision.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Houses hundreds of lens combinations</li>
            <li>Allows precise sphere, cylinder, and axis adjustments</li>
            <li>Includes prism capabilities</li>
            <li>Enables binocular balancing</li>
            <li>Used for both distance and near refraction</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Why Opticians Should Know This
            </h4>
            <p className="text-blue-800 mt-2">
              While opticians typically don&apos;t perform primary refractions, understanding the
              phoropter is essential for: verifying prescriptions, understanding how Rx values
              are derived, assisting during refractions, and in many countries where opticians
              can refract, this knowledge is critical for licensure.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'parts',
      title: '2. Parts of the Phoropter',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Sphere Dials</h4>
              <p className="text-sm text-gray-600">
                <strong>Large dial:</strong> Changes sphere power in 0.25D steps<br/>
                <strong>Range:</strong> Typically ±20.00D or more<br/>
                <strong>Plus/Minus:</strong> Red for plus, black/green for minus<br/>
                <strong>Location:</strong> Usually the larger, outer knob
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Cylinder Dials</h4>
              <p className="text-sm text-gray-600">
                <strong>Power dial:</strong> Changes cylinder power (0.25D steps)<br/>
                <strong>Axis wheel:</strong> Rotates from 0° to 180°<br/>
                <strong>Type:</strong> Most are minus cylinder format<br/>
                <strong>Range:</strong> Usually 0 to -6.00D cylinder
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Cross Cylinder (JCC)</h4>
              <p className="text-sm text-gray-600">
                <strong>Purpose:</strong> Refines cylinder power and axis<br/>
                <strong>Values:</strong> Usually ±0.25 or ±0.50<br/>
                <strong>Handle:</strong> Rotates to flip between positions<br/>
                <strong>Dots/Lines:</strong> Mark the plus and minus axes
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Auxiliary Lenses</h4>
              <p className="text-sm text-gray-600">
                <strong>Rotary prism:</strong> Risley prism for precise prism measurement<br/>
                <strong>Occluder:</strong> Blocks one eye during monocular testing<br/>
                <strong>Pinhole:</strong> Differentiates refractive from pathological blur<br/>
                <strong>Maddox rod:</strong> Dissociates images for phoria testing
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">PD Adjustment</h4>
              <p className="text-sm text-gray-600">
                <strong>Knob location:</strong> Usually near the forehead rest<br/>
                <strong>Range:</strong> Typically 50-75mm<br/>
                <strong>Importance:</strong> Critical for accurate refraction<br/>
                <strong>Tip:</strong> Set PD before beginning refraction
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Level Bubble</h4>
              <p className="text-sm text-gray-600">
                <strong>Purpose:</strong> Ensures phoropter is level<br/>
                <strong>Location:</strong> Usually on top of the instrument<br/>
                <strong>Why it matters:</strong> Tilted phoropter induces prism error<br/>
                <strong>Tip:</strong> Check before each patient
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Manual vs. Digital Phoropters
            </h4>
            <p className="text-amber-800 mt-2">
              Digital phoropters (like the Topcon CV-5000 or Nidek RT-5100) have motorized lens
              changes and integrate with autorefractors. The principles remain the same, but
              operation is via touchscreen or remote control instead of manual dials.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'setup',
      title: '3. Patient Setup',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Pre-Refraction Setup:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Position the patient:</strong> Comfortably seated, back straight, head level</li>
            <li><strong>Adjust chair height:</strong> Patient&apos;s eyes at center of phoropter apertures</li>
            <li><strong>Set the PD:</strong> Measure and dial in the patient&apos;s pupillary distance</li>
            <li><strong>Level the instrument:</strong> Check the bubble level is centered</li>
            <li><strong>Clean the lenses:</strong> Wipe the eyepieces if needed</li>
            <li><strong>Adjust forehead rest:</strong> Patient should rest forehead lightly against it</li>
            <li><strong>Verify room lighting:</strong> Dim room for distance, adequate light for near</li>
          </ol>

          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900">Vertex Distance Consideration:</h4>
            <p className="text-gray-700 mt-2">
              The standard phoropter vertex distance is approximately 13.75mm. For high prescriptions
              (±4.00D or greater), note the vertex distance if it differs significantly from how the
              patient will wear their glasses. Vertex distance compensation may be needed.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Common Setup Errors
            </h4>
            <ul className="list-disc pl-6 mt-2 text-red-800">
              <li>Wrong PD setting - induces unwanted prism</li>
              <li>Phoropter not level - induces vertical prism</li>
              <li>Patient leaning away from forehead rest - changes vertex distance</li>
              <li>Auxiliary lenses left in from previous patient</li>
              <li>Occluder blocking wrong eye</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'sphere',
      title: '4. Sphere Refinement',
      content: (
        <div className="space-y-4">
          <p>
            Sphere power determines the overall focusing power needed to correct myopia (nearsightedness)
            or hyperopia (farsightedness).
          </p>

          <h4 className="font-semibold text-gray-900 mt-4">The Fogging Technique:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Start with autorefractor or retinoscopy values</strong></li>
              <li><strong>Fog the eye:</strong> Add +0.75 to +1.00D to relax accommodation</li>
              <li><strong>Reduce plus (or add minus) in 0.25D steps</strong></li>
              <li><strong>Stop when patient first reports clearest vision</strong></li>
              <li><strong>Check that more minus doesn&apos;t improve - if it does, you&apos;re not at endpoint</strong></li>
            </ol>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Maximum Plus to Best Visual Acuity (MPBVA):</h4>
          <p className="text-gray-700">
            The goal is to prescribe the <strong>most plus (least minus)</strong> power that gives
            the best visual acuity. This principle:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prevents over-minusing</li>
            <li>Reduces accommodative demand</li>
            <li>Minimizes asthenopia (eye strain)</li>
            <li>Is especially important for young patients</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">Red-Green (Duochrome) Test:</h4>
            <p className="text-blue-800 mt-2">
              Uses chromatic aberration to refine sphere:
            </p>
            <ul className="list-disc pl-6 mt-2 text-blue-800">
              <li><strong>Letters clearer on RED:</strong> Need more minus (or less plus)</li>
              <li><strong>Letters clearer on GREEN:</strong> Need more plus (or less minus)</li>
              <li><strong>Letters equally clear:</strong> Endpoint reached</li>
              <li><strong>Memory aid:</strong> &quot;RED = rEtina in frond (add minus)&quot;</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'cylinder',
      title: '5. Cylinder Power and Axis',
      content: (
        <div className="space-y-4">
          <p>
            Cylinder power corrects astigmatism - where the eye has different focusing powers in
            different meridians.
          </p>

          <h4 className="font-semibold text-gray-900">Understanding Cylinder Notation:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-2 border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Format</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Example</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t">
                  <td className="px-4 py-2">Minus Cylinder</td>
                  <td className="px-4 py-2">-2.00 -1.00 x 180</td>
                  <td className="px-4 py-2">Standard for most phoropters and US Rx</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">Plus Cylinder</td>
                  <td className="px-4 py-2">-3.00 +1.00 x 90</td>
                  <td className="px-4 py-2">Same Rx transposed - common in ophthalmology</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">The Jackson Cross Cylinder (JCC):</h4>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <p className="text-purple-800">
              The JCC is a lens with equal plus and minus cylinder powers at 90° to each other
              (e.g., +0.25/-0.25). It&apos;s used to refine both cylinder axis and power.
            </p>

            <h5 className="font-semibold text-purple-900 mt-3">Axis Refinement:</h5>
            <ol className="list-decimal pl-6 mt-2 text-purple-800">
              <li>Position JCC handle at 45° to the cylinder axis</li>
              <li>Flip between two positions - ask &quot;which is better, one or two?&quot;</li>
              <li>Rotate axis 5-15° toward the preferred position</li>
              <li>Repeat until patient reports both positions equal (axis is refined)</li>
            </ol>

            <h5 className="font-semibold text-purple-900 mt-3">Power Refinement:</h5>
            <ol className="list-decimal pl-6 mt-2 text-purple-800">
              <li>Position JCC axes aligned with the cylinder axis (handle at axis)</li>
              <li>Flip between positions</li>
              <li>If minus axis preferred: add -0.25 cyl, add +0.25 sphere</li>
              <li>If plus axis preferred: reduce cylinder -0.25, add -0.25 sphere</li>
              <li>Continue until equally clear</li>
            </ol>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Spherical Equivalent Rule
            </h4>
            <p className="text-amber-800 mt-2">
              When changing cylinder power, adjust sphere by half the cylinder change to maintain
              the spherical equivalent:
            </p>
            <p className="text-amber-800 mt-2 font-mono">
              Add -0.50 cylinder → Add +0.25 sphere<br/>
              Reduce -0.50 cylinder → Add -0.25 sphere
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'binocular',
      title: '6. Binocular Balancing',
      content: (
        <div className="space-y-4">
          <p>
            After refracting each eye separately, binocular balancing ensures both eyes are equally
            fogged (accommodatively relaxed) and working together optimally.
          </p>

          <h4 className="font-semibold text-gray-900">Methods of Binocular Balancing:</h4>

          <div className="space-y-4 mt-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">1. Alternate Occlusion Method</h5>
              <p className="text-gray-700 mt-2">
                Add +0.50 to both eyes to fog. Quickly alternate the occluder between eyes.
                Add +0.25 to the eye that sees clearer. Repeat until both report equal blur.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">2. Prism Dissociation Method</h5>
              <p className="text-gray-700 mt-2">
                Add 3Δ base up OD and 3Δ base down OS (or vice versa) to separate images.
                Patient sees two rows of letters. Add plus to eye with clearer row until equal.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">3. Humphriss Immediate Contrast Method</h5>
              <p className="text-gray-700 mt-2">
                Fog one eye with +0.75. Refine the other eye to best VA. Switch fogging lens.
                Repeat. More useful for significant VA differences between eyes.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">After Binocular Balance:</h4>
            <ol className="list-decimal pl-6 mt-2 text-green-800">
              <li>Remove any prism used for dissociation</li>
              <li>Remove fogging lenses</li>
              <li>Verify best corrected VA with both eyes open</li>
              <li>Check that adding minus doesn&apos;t improve vision</li>
              <li>Proceed to near testing if needed</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'prism',
      title: '7. Prism Measurement',
      content: (
        <div className="space-y-4">
          <p>
            The phoropter includes rotary (Risley) prisms that allow precise measurement of
            phorias and prescription of prism correction.
          </p>

          <h4 className="font-semibold text-gray-900">Using Rotary Prisms:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Location:</strong> Usually just inside the aperture</li>
              <li><strong>Dial:</strong> Shows prism power (usually 0-20Δ)</li>
              <li><strong>Direction wheel:</strong> Rotates base direction continuously</li>
              <li><strong>Reading:</strong> Note both power AND base direction</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Phoria Testing (Von Graefe):</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Use dissociating prism (usually 6Δ base up on one eye)</li>
            <li>Patient sees two targets (one above the other)</li>
            <li>Use Risley prism on the other eye to align targets</li>
            <li>For horizontal phoria: Measure with horizontal prism</li>
            <li>For vertical phoria: Measure with vertical prism</li>
          </ol>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Phoria Type</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Eyes Turn</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Prism to Correct</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t">
                  <td className="px-4 py-2">Esophoria</td>
                  <td className="px-4 py-2">Inward (toward nose)</td>
                  <td className="px-4 py-2">Base OUT</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">Exophoria</td>
                  <td className="px-4 py-2">Outward (toward temple)</td>
                  <td className="px-4 py-2">Base IN</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Hyperphoria</td>
                  <td className="px-4 py-2">One eye higher</td>
                  <td className="px-4 py-2">Base DOWN over higher eye</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Prescribing Prism
            </h4>
            <p className="text-amber-800 mt-2">
              Not all phorias need prism correction. Consider prescribing prism when:
            </p>
            <ul className="list-disc pl-6 mt-2 text-amber-800">
              <li>Patient has symptoms (diplopia, headache, asthenopia)</li>
              <li>Phoria exceeds compensating ranges</li>
              <li>Vertical phorias (even small amounts can be symptomatic)</li>
              <li>Trial frame wear confirms benefit</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'near',
      title: '8. Near Vision Testing',
      content: (
        <div className="space-y-4">
          <p>
            After completing distance refraction, assess near vision - especially important for
            presbyopic patients (typically age 40+).
          </p>

          <h4 className="font-semibold text-gray-900">Near Testing Procedure:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Position the near card:</strong> Usually 40cm (16 inches) from phoropter</li>
            <li><strong>Use good lighting:</strong> Adequate illumination on the card</li>
            <li><strong>Check near VA with distance Rx:</strong> Note what patient can see</li>
            <li><strong>Add plus power:</strong> Determine add needed for comfortable near vision</li>
            <li><strong>Verify range:</strong> Check vision at patient&apos;s typical working distances</li>
          </ol>

          <h4 className="font-semibold text-gray-900 mt-4">Determining the Add:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Starting point by age (approximate):</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>40-45: +0.75 to +1.00</li>
              <li>45-50: +1.25 to +1.50</li>
              <li>50-55: +1.75 to +2.00</li>
              <li>55-60: +2.00 to +2.25</li>
              <li>60+: +2.25 to +2.50</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Near Testing Targets:</h4>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <ul className="list-disc pl-6 text-blue-800">
              <li><strong>Jaeger notation:</strong> J1, J2, J3... (J1 = finest)</li>
              <li><strong>Metric:</strong> N5, N6, N8... (number = point size)</li>
              <li><strong>Snellen equivalent:</strong> 20/20, 20/25, etc. at near</li>
              <li><strong>Goal:</strong> Typically N5 or J1 at comfortable working distance</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">Occupational Considerations:</h4>
            <p className="text-green-800 mt-2">
              Always ask about working distances! A computer user (50-70cm) needs a different
              add than someone reading at 40cm. Consider:
            </p>
            <ul className="list-disc pl-6 mt-2 text-green-800">
              <li>Reading distance preferences</li>
              <li>Computer/screen distances</li>
              <li>Occupational requirements (musicians, mechanics, etc.)</li>
              <li>Hobbies (crafts, electronics, reading)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'documentation',
      title: '9. Recording the Refraction',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Standard Prescription Format:</h4>
          <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
            <p>OD: -2.50 -0.75 x 180 &nbsp; VA: 20/20</p>
            <p>OS: -2.25 -0.50 x 175 &nbsp; VA: 20/20</p>
            <p>Add: +2.00 OU</p>
            <p>PD: 64/62</p>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">What to Record:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sphere power:</strong> Plus or minus, to 0.25D</li>
            <li><strong>Cylinder power:</strong> Minus (or plus) format</li>
            <li><strong>Axis:</strong> 1 to 180 degrees</li>
            <li><strong>Visual acuity:</strong> For each eye, distance and near</li>
            <li><strong>Add power:</strong> If needed for near</li>
            <li><strong>Prism:</strong> If prescribed (amount and base direction)</li>
            <li><strong>PD:</strong> Distance and near if different</li>
            <li><strong>Vertex distance:</strong> If prescription is high (≥±4.00D)</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4">Comparing to Previous Rx:</h4>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800">
              Always compare to the patient&apos;s current glasses or previous prescription:
            </p>
            <ul className="list-disc pl-6 mt-2 text-amber-800">
              <li>Significant sphere change? (&gt;0.50D may warrant discussion)</li>
              <li>Axis change? (&gt;10° at low cyl, &gt;5° at high cyl)</li>
              <li>First time bifocal/progressive wearer?</li>
              <li>Document any changes patient may notice</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">Sample Complete Documentation:</h4>
            <div className="font-mono text-sm text-blue-800 mt-2">
              <p>Subjective Refraction:</p>
              <p>OD: -3.25 -1.00 x 175 → 20/20</p>
              <p>OS: -2.75 -0.75 x 005 → 20/20</p>
              <p>OU: 20/20</p>
              <p>Add: +1.75 OU → N5 at 40cm</p>
              <p>Near PD: 61mm</p>
              <p>Previous Rx: -3.00 -0.75 x 180 OD, -2.50 -0.50 x 010 OS</p>
              <p>Change: Minimal, within normal variation</p>
            </div>
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
              <h4 className="font-semibold text-gray-900">Exercise 1: Phoropter Parts Identification</h4>
              <p className="text-gray-700 mt-2">
                With a phoropter in front of you, identify and practice using each control:
                sphere dials, cylinder dials, axis wheel, JCC, PD adjustment, auxiliary lenses,
                prism dials. Set specific values and verify them.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 2: JCC Technique Practice</h4>
              <p className="text-gray-700 mt-2">
                Practice the motion of using the Jackson Cross Cylinder. Set a cylinder of -1.00 x 90.
                Position the JCC for axis refinement (handle at 45° and 135°). Then position for
                power refinement (handle at axis). Practice smooth flipping motion.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 3: Complete Refraction Simulation</h4>
              <p className="text-gray-700 mt-2">
                Practice on a colleague: Set up the phoropter properly, measure/input PD,
                perform monocular sphere refinement, refine cylinder with JCC, binocular balance,
                and determine near add if applicable. Record the final prescription.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 4: Prism Measurement</h4>
              <p className="text-gray-700 mt-2">
                Practice using the rotary prism: dial in specific prism values (e.g., 2Δ base out),
                verify the reading. Practice the Von Graefe technique for measuring horizontal
                and vertical phorias on a colleague.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 5: Prescription Verification</h4>
              <p className="text-gray-700 mt-2">
                Take a pair of glasses with a known prescription. Set that prescription in the
                phoropter. Have a colleague look through and verify clarity is similar to their
                glasses. This helps verify you can accurately input prescriptions.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">Key Skills Checklist:</h4>
            <ul className="mt-2 space-y-1 text-green-800">
              <li>✓ Can identify all major phoropter parts</li>
              <li>✓ Can properly set up a patient at the phoropter</li>
              <li>✓ Understand sphere refinement principles</li>
              <li>✓ Can perform JCC for axis and power refinement</li>
              <li>✓ Understand binocular balancing methods</li>
              <li>✓ Can measure and record phorias</li>
              <li>✓ Can determine appropriate near add</li>
              <li>✓ Can properly document a refraction</li>
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
        <section className="bg-gradient-to-br from-violet-600 to-purple-700 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 text-violet-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Equipment
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">👁️</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Phoropter Training
                </h1>
                <p className="text-violet-200 mt-1">
                  Understanding refraction instruments
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
                className="text-sm text-violet-600 hover:text-violet-700 font-medium"
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
            <div className="mt-8 bg-violet-50 rounded-xl p-6 border border-violet-200">
              <h3 className="font-semibold text-violet-900 mb-4">Continue Learning</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/equipment/trial-frame"
                  className="inline-flex items-center gap-2 bg-white text-violet-600 px-4 py-2 rounded-lg font-medium border border-violet-200 hover:bg-violet-50 transition-colors"
                >
                  Next: Trial Frame
                </Link>
                <Link
                  href="/equipment/lensometer"
                  className="inline-flex items-center gap-2 bg-white text-violet-600 px-4 py-2 rounded-lg font-medium border border-violet-200 hover:bg-violet-50 transition-colors"
                >
                  Review: Lensometer
                </Link>
                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-violet-700 transition-colors"
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
