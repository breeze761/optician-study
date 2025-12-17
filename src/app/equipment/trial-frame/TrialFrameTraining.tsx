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

export default function TrialFrameTraining() {
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
      title: '1. What is a Trial Frame?',
      content: (
        <div className="space-y-4">
          <p>
            A <strong>trial frame</strong> is a lightweight spectacle frame designed to hold
            interchangeable trial lenses. It allows precise positioning of lenses in front of
            the patient&apos;s eyes for refraction, verification, and specialized testing.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Holds multiple lenses simultaneously in each eye</li>
            <li>Adjustable PD, pantoscopic tilt, and vertex distance</li>
            <li>Allows patient to experience prescription in natural postures</li>
            <li>Essential for high prescriptions, prism fitting, and special cases</li>
            <li>Preferred in many countries for primary refraction</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900 flex items-center gap-2">
              <Target className="w-5 h-5" />
              When Trial Frame is Preferred Over Phoropter
            </h4>
            <ul className="list-disc pl-6 mt-2 text-blue-800">
              <li>Children (better attention and cooperation)</li>
              <li>Patients who cannot sit at the phoropter (wheelchair, posture issues)</li>
              <li>High astigmatism verification (more accurate)</li>
              <li>Prism prescribing (patient walks around to test)</li>
              <li>Low vision assessment</li>
              <li>Binocular vision testing in natural positions</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'parts',
      title: '2. Parts of a Trial Frame',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Lens Cells</h4>
              <p className="text-sm text-gray-600">
                <strong>Front cell:</strong> Usually for sphere lenses<br/>
                <strong>Middle cell:</strong> For cylinder lenses<br/>
                <strong>Back cell:</strong> For additional lenses (prism, etc.)<br/>
                <strong>Capacity:</strong> 3-4 lenses per eye typical
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">PD Adjustment</h4>
              <p className="text-sm text-gray-600">
                <strong>Scale:</strong> Usually 50-75mm<br/>
                <strong>Mechanism:</strong> Slide or screw adjustment<br/>
                <strong>Independent:</strong> Each eye adjusts separately<br/>
                <strong>Markings:</strong> Millimeter graduations
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Temple Adjustment</h4>
              <p className="text-sm text-gray-600">
                <strong>Length:</strong> Adjustable for different head sizes<br/>
                <strong>Angle:</strong> May adjust for fit<br/>
                <strong>Ear pieces:</strong> Some have comfort padding<br/>
                <strong>Stability:</strong> Should sit securely without slipping
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Nose Bridge</h4>
              <p className="text-sm text-gray-600">
                <strong>Adjustable:</strong> Height may be changeable<br/>
                <strong>Pads:</strong> Usually silicone or similar<br/>
                <strong>Width:</strong> Some frames have adjustment<br/>
                <strong>Comfort:</strong> Should not pinch or slide
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Axis Indicator</h4>
              <p className="text-sm text-gray-600">
                <strong>Scale:</strong> 0° to 180°<br/>
                <strong>Location:</strong> Around lens cell circumference<br/>
                <strong>Purpose:</strong> Align cylinder lens axis accurately<br/>
                <strong>Reading:</strong> Read axis at mark on cell
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Vertex Distance Scale</h4>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> Side arm of frame<br/>
                <strong>Purpose:</strong> Measure distance from lens to eye<br/>
                <strong>Standard:</strong> Match intended wearing position<br/>
                <strong>High Rx:</strong> Critical for accuracy
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Quality Trial Frames
            </h4>
            <p className="text-amber-800 mt-2">
              Professional trial frames (like Oculus or Luneau) are precision instruments.
              Cheap trial frames may have inaccurate scales, wobbly cells, or poor fit -
              all leading to refraction errors.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'trial-lens-set',
      title: '3. Trial Lens Sets',
      content: (
        <div className="space-y-4">
          <p>
            A <strong>trial lens set</strong> contains all the lenses needed for refraction.
            Understanding the organization helps you work efficiently.
          </p>

          <h4 className="font-semibold text-gray-900">Standard Trial Lens Set Contents:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-2 border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Lens Type</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Typical Range</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Steps</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t">
                  <td className="px-4 py-2">Plus Spheres</td>
                  <td className="px-4 py-2">+0.25 to +20.00D</td>
                  <td className="px-4 py-2">0.25D steps (0.50D at higher powers)</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">Minus Spheres</td>
                  <td className="px-4 py-2">-0.25 to -20.00D</td>
                  <td className="px-4 py-2">0.25D steps (0.50D at higher powers)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Plus Cylinders</td>
                  <td className="px-4 py-2">+0.25 to +6.00D</td>
                  <td className="px-4 py-2">0.25D steps</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">Minus Cylinders</td>
                  <td className="px-4 py-2">-0.25 to -6.00D</td>
                  <td className="px-4 py-2">0.25D steps</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Prisms</td>
                  <td className="px-4 py-2">0.5Δ to 10Δ</td>
                  <td className="px-4 py-2">Various steps</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">Accessories</td>
                  <td className="px-4 py-2">Occluders, pinholes, Maddox rod, red/green filters, cross cylinders</td>
                  <td className="px-4 py-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Lens Identification:</h4>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h5 className="font-semibold text-red-900">Plus Lenses (Convex)</h5>
              <p className="text-red-800 mt-2 text-sm">
                <strong>Color code:</strong> Often RED rim or markings<br/>
                <strong>Feel:</strong> Thicker in center, thin at edges<br/>
                <strong>Effect:</strong> Magnifies when held away from eye
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h5 className="font-semibold text-green-900">Minus Lenses (Concave)</h5>
              <p className="text-green-800 mt-2 text-sm">
                <strong>Color code:</strong> Often GREEN or BLACK rim<br/>
                <strong>Feel:</strong> Thin in center, thick at edges<br/>
                <strong>Effect:</strong> Minifies when held away from eye
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">Cylinder Lens Markings:</h4>
            <p className="text-blue-800 mt-2">
              Cylinder lenses have a line or mark indicating the axis of the cylinder power.
              When placing in the trial frame, align this mark with the desired axis on the
              frame&apos;s axis scale.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'setup',
      title: '4. Setting Up the Trial Frame',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Step-by-Step Setup:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Measure PD:</strong> Use a pupillometer or PD ruler</li>
            <li><strong>Adjust PD on frame:</strong> Set each eye&apos;s PD independently</li>
            <li><strong>Adjust temple length:</strong> Temples should reach behind ears comfortably</li>
            <li><strong>Check vertex distance:</strong> Note the reading for high Rx</li>
            <li><strong>Place frame on patient:</strong> Center over nose, level with eyes</li>
            <li><strong>Verify fit:</strong> Frame should be stable, not sliding</li>
            <li><strong>Check alignment:</strong> Lens cells should be centered over pupils</li>
          </ol>

          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900">Fitting Considerations:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Children: Use smaller frames, may need head strap for stability</li>
              <li>Large heads: Extend temples fully, widen bridge if possible</li>
              <li>Small heads: Tighten temples, use nose pads for fit</li>
              <li>High nose bridges: Adjust height to center cells on pupils</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Common Setup Errors
            </h4>
            <ul className="list-disc pl-6 mt-2 text-red-800">
              <li>Wrong PD - induces unwanted prism</li>
              <li>Frame tilted - skews axis measurements</li>
              <li>Frame too far from eyes - affects vertex distance</li>
              <li>Lens cells not centered on pupils</li>
              <li>Frame sliding during testing</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'lens-order',
      title: '5. Lens Insertion Order',
      content: (
        <div className="space-y-4">
          <p>
            The order in which you insert lenses matters for accuracy and efficiency.
            Different systems exist, but here&apos;s a widely-used approach:
          </p>

          <h4 className="font-semibold text-gray-900">Recommended Order (Back to Front):</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Back cell (closest to eye):</strong> Cylinder lens (axis marked)</li>
              <li><strong>Middle cell:</strong> Primary sphere power</li>
              <li><strong>Front cell:</strong> Additional sphere (if needed) or accessories</li>
            </ol>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Why This Order?</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cylinder closest to eye = less induced errors</li>
            <li>Axis rotation is easier to verify on back cell</li>
            <li>Sphere can be changed quickly in front cells</li>
            <li>Prism usually goes in front cell for easy adjustment</li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Combining Sphere Powers
            </h4>
            <p className="text-amber-800 mt-2">
              For high sphere powers, you may need to combine lenses:
            </p>
            <ul className="list-disc pl-6 mt-2 text-amber-800">
              <li>-8.50D = -4.00 + -4.50 or -6.00 + -2.50</li>
              <li>+12.00D = +6.00 + +6.00 or +8.00 + +4.00</li>
              <li>Keep lenses close together to minimize errors</li>
              <li>Powers simply add together</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Combining Cylinder Powers:</h4>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              Cylinders can only be added if at the same axis:
            </p>
            <ul className="list-disc pl-6 mt-2 text-blue-800">
              <li>-1.00 x 90 + -0.50 x 90 = -1.50 x 90 ✓</li>
              <li>-1.00 x 90 + -0.50 x 180 ≠ simple addition ✗</li>
              <li>For crossed cylinders, use oblique cylinder calculation</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'refraction',
      title: '6. Trial Frame Refraction Technique',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Basic Refraction Steps:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Occlude one eye:</strong> Place occluder in one frame</li>
            <li><strong>Start with approximate sphere:</strong> From autorefractor, retinoscopy, or habitual Rx</li>
            <li><strong>Fog if needed:</strong> Add +0.75 to +1.00 to relax accommodation</li>
            <li><strong>Refine sphere:</strong> Reduce plus (or add minus) until best VA</li>
            <li><strong>Add cylinder:</strong> If astigmatism, place cyl lens at estimated axis</li>
            <li><strong>Refine axis:</strong> Rotate cyl lens until best clarity</li>
            <li><strong>Refine cyl power:</strong> Adjust cyl power, maintain spherical equivalent</li>
            <li><strong>Repeat for other eye:</strong> Remove occluder, occlude first eye</li>
            <li><strong>Binocular balance:</strong> Fine-tune with both eyes open</li>
          </ol>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">Axis Refinement Technique:</h4>
            <p className="text-green-800 mt-2">
              With cylinder lens in place:
            </p>
            <ol className="list-decimal pl-6 mt-2 text-green-800">
              <li>Rotate axis 10-15° clockwise - note clarity</li>
              <li>Rotate axis 10-15° counterclockwise - note clarity</li>
              <li>Axis is correct in the direction of better clarity</li>
              <li>Reduce rotation amount as you get closer</li>
              <li>Final refinement: 5° movements</li>
            </ol>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-purple-900">Using the Cross Cylinder:</h4>
            <p className="text-purple-800 mt-2">
              A handheld cross cylinder (Jackson cross cylinder) can be used with trial frame:
            </p>
            <ul className="list-disc pl-6 mt-2 text-purple-800">
              <li>Hold in front of trial frame lens</li>
              <li>Same flip technique as phoropter</li>
              <li>For axis: handle at 45° to current axis</li>
              <li>For power: handle aligned with axis</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'advantages',
      title: '7. Advantages Over Phoropter',
      content: (
        <div className="space-y-4">
          <p>
            Trial frames offer unique advantages that make them preferred in many situations:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900">Natural Viewing</h4>
              <p className="text-green-800 mt-2 text-sm">
                Patient can look in any direction, walk around, read at various distances.
                Better represents how they&apos;ll use the glasses.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900">Prism Assessment</h4>
              <p className="text-green-800 mt-2 text-sm">
                Patient can wear prism trial and walk around, go up/down stairs,
                experience it in real-world conditions.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900">Special Populations</h4>
              <p className="text-green-800 mt-2 text-sm">
                Better for children, elderly, wheelchair users, those with postural issues,
                patients with anxiety about equipment.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900">High Astigmatism</h4>
              <p className="text-green-800 mt-2 text-sm">
                More accurate axis determination because patient can look straight ahead
                naturally, frame can be positioned more precisely.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900">Low Vision</h4>
              <p className="text-green-800 mt-2 text-sm">
                Can add high-power adds, magnifiers, telescopes. Patient can trial at
                actual reading distance and materials.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900">Portable</h4>
              <p className="text-green-800 mt-2 text-sm">
                Can be used at bedside, home visits, nursing homes, anywhere.
                No need for specialized equipment mounting.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">Global Perspective:</h4>
            <p className="text-blue-800 mt-2">
              In many countries (UK, Australia, parts of Europe, Africa, Asia), trial frame
              refraction is the standard method taught and practiced. Phoropters are often
              reserved for final refinement. Understanding both methods makes you a more
              versatile practitioner.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'special-uses',
      title: '8. Special Applications',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Prism Verification and Fitting:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              Trial frame is ideal for prism prescribing:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Patient wears the prism amount being considered</li>
              <li>They can walk, look around, go up/down stairs</li>
              <li>Assess adaptation and comfort</li>
              <li>Start with less prism, increase until comfortable</li>
              <li>Try different prism distributions (split vs. one eye)</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Over-Refraction:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              Testing over existing glasses or contact lenses:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Place trial frame over patient&apos;s glasses (adjust for vertex)</li>
              <li>Or have patient wear contacts, place trial frame</li>
              <li>Determine additional power needed</li>
              <li>Common for post-surgical refinement</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Pediatric Testing:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="list-disc pl-6 text-gray-700">
              <li>Child can move, look around naturally</li>
              <li>Less intimidating than phoropter</li>
              <li>Use child-sized trial frames</li>
              <li>Can combine with games and rewards</li>
              <li>Parent can see what child is wearing</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Specialty Lenses:</h4>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800">
              Trial frame allows testing of:
            </p>
            <ul className="list-disc pl-6 mt-2 text-amber-800">
              <li><strong>Maddox rod:</strong> Phoria measurement</li>
              <li><strong>Red-green filters:</strong> Binocular testing</li>
              <li><strong>Pinhole:</strong> Differentiate refractive from pathological blur</li>
              <li><strong>Polarized filters:</strong> Stereo testing</li>
              <li><strong>High adds:</strong> Low vision assessment</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'maintenance',
      title: '9. Care and Maintenance',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Trial Lens Care:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cleaning:</strong> Use lens cleaning solution and microfiber cloth</li>
            <li><strong>Storage:</strong> Return to correct slot in trial lens case</li>
            <li><strong>Handling:</strong> Hold by edges, avoid touching optical surfaces</li>
            <li><strong>Inspection:</strong> Check for scratches, chips, or coating damage</li>
            <li><strong>Replacement:</strong> Damaged lenses should be replaced</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4">Trial Frame Care:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Disinfection:</strong> Wipe between patients with appropriate solution</li>
            <li><strong>Adjustments:</strong> Check periodically that mechanisms work smoothly</li>
            <li><strong>Calibration:</strong> Verify PD and axis scales are accurate</li>
            <li><strong>Storage:</strong> Keep in protective case when not in use</li>
            <li><strong>Replacement parts:</strong> Temple tips, nose pads may need replacing</li>
          </ul>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Infection Control
            </h4>
            <p className="text-red-800 mt-2">
              Trial frames contact patients&apos; skin. Always:
            </p>
            <ul className="list-disc pl-6 mt-2 text-red-800">
              <li>Disinfect between patients</li>
              <li>Use disposable covers if available</li>
              <li>Pay attention to nose pads and temple tips</li>
              <li>Follow your practice&apos;s infection control protocols</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">Trial Lens Set Organization:</h4>
            <ul className="list-disc pl-6 mt-2 text-blue-800">
              <li>Keep lenses in their designated slots</li>
              <li>Plus and minus spheres in separate sections</li>
              <li>Cylinders organized by power and sign</li>
              <li>Prisms and accessories in their sections</li>
              <li>Take inventory periodically for missing lenses</li>
            </ul>
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
              <h4 className="font-semibold text-gray-900">Exercise 1: Frame Fitting Practice</h4>
              <p className="text-gray-700 mt-2">
                Practice fitting the trial frame on colleagues: Measure PD, adjust frame PD,
                set temple length, verify vertex distance, ensure stable fit. Do this on people
                with different face sizes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 2: Lens Identification Speed Drill</h4>
              <p className="text-gray-700 mt-2">
                Have someone hand you random trial lenses. Quickly identify: Is it plus or minus?
                Is it sphere or cylinder? What&apos;s the power? If cylinder, where&apos;s the axis mark?
                Time yourself and work on speed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 3: Complete Refraction</h4>
              <p className="text-gray-700 mt-2">
                Perform a full trial frame refraction on a colleague: Set up frame, determine
                sphere, refine cylinder axis and power, binocular balance, check near if needed.
                Compare your result to phoropter refraction.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 4: Prism Simulation</h4>
              <p className="text-gray-700 mt-2">
                Place various prism amounts in a trial frame and wear them yourself. Walk around,
                go up/down stairs, try to read. Understand what patients experience with prism.
                Try 2Δ, 4Δ, 6Δ base out, in, up, and down.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 5: High Rx Practice</h4>
              <p className="text-gray-700 mt-2">
                Set up a prescription of -10.00 -2.00 x 90 using trial lenses. How many lenses
                do you need? Practice combining spheres. Then try +12.00 -3.00 x 45. Get
                comfortable with high prescription setups.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">Key Skills Checklist:</h4>
            <ul className="mt-2 space-y-1 text-green-800">
              <li>✓ Can properly fit and adjust trial frame</li>
              <li>✓ Know trial lens set organization</li>
              <li>✓ Understand lens insertion order</li>
              <li>✓ Can perform sphere and cylinder refinement</li>
              <li>✓ Comfortable with axis determination</li>
              <li>✓ Can combine lenses for high prescriptions</li>
              <li>✓ Understand prism fitting applications</li>
              <li>✓ Know proper care and maintenance</li>
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
        <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Equipment
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">🕶️</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Trial Frame Training
                </h1>
                <p className="text-teal-200 mt-1">
                  Master trial lens refraction techniques
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
                className="text-sm text-teal-600 hover:text-teal-700 font-medium"
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
            <div className="mt-8 bg-teal-50 rounded-xl p-6 border border-teal-200">
              <h3 className="font-semibold text-teal-900 mb-4">Continue Learning</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/equipment/visual-acuity"
                  className="inline-flex items-center gap-2 bg-white text-teal-600 px-4 py-2 rounded-lg font-medium border border-teal-200 hover:bg-teal-50 transition-colors"
                >
                  Next: Visual Acuity
                </Link>
                <Link
                  href="/equipment/phoropter"
                  className="inline-flex items-center gap-2 bg-white text-teal-600 px-4 py-2 rounded-lg font-medium border border-teal-200 hover:bg-teal-50 transition-colors"
                >
                  Review: Phoropter
                </Link>
                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
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
