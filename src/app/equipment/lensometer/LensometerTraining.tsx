'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Target,
  BookOpen
} from 'lucide-react'

interface Section {
  id: string
  title: string
  content: React.ReactNode
}

export default function LensometerTraining() {
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
      title: '1. What is a Lensometer?',
      content: (
        <div className="space-y-4">
          <p>
            A <strong>lensometer</strong> (also called focimeter, lensmeter, or vertometer) is an optical
            instrument used to measure the refractive power of lenses. It&apos;s essential for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verifying that finished eyeglasses match the prescription</li>
            <li>Determining the prescription of an unknown pair of glasses</li>
            <li>Finding the optical center of a lens</li>
            <li>Detecting and measuring prism</li>
            <li>Measuring the add power in multifocal lenses</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900 flex items-center gap-2">
              <Target className="w-5 h-5" />
              ABO Exam Note
            </h4>
            <p className="text-blue-800 mt-2">
              On the ABO practical exam, you&apos;ll use a simulated digital lensometer to neutralize
              lenses and record the prescription. Practice until you can do this quickly and accurately.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'parts',
      title: '2. Parts of a Manual Lensometer',
      content: (
        <div className="space-y-4">
          <p>Understanding each component is essential for proper operation:</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Eyepiece (Ocular)</h4>
              <p className="text-sm text-gray-600">
                Where you look through. Has a focusing ring to adjust for your eye&apos;s refractive error.
                <strong> Always focus the eyepiece first</strong> before measuring any lens.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Reticle (Target/Graticule)</h4>
              <p className="text-sm text-gray-600">
                The illuminated pattern you see through the eyepiece. Usually consists of crossed lines
                (for sphere) and a circle of dots or lines (for finding OC and axis).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Power Drum/Wheel</h4>
              <p className="text-sm text-gray-600">
                The main dial that moves the target in and out of focus. Calibrated in diopters
                (usually -20 to +20D). Moving the wheel changes the power reading.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Axis Wheel</h4>
              <p className="text-sm text-gray-600">
                Rotates the reticle to align with the cylinder axis. Marked from 0° to 180°.
                Used when the target lines aren&apos;t initially horizontal/vertical.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Lens Stop/Rest</h4>
              <p className="text-sm text-gray-600">
                Where the lens sits during measurement. The back surface of the lens
                (concave side for minus) should rest against this stop.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Lens Holder/Clamp</h4>
              <p className="text-sm text-gray-600">
                Spring-loaded arms that hold the lens in place. Can be adjusted for
                different lens sizes. Should hold firmly without scratching.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Marking Device</h4>
              <p className="text-sm text-gray-600">
                Three-dot marker to mark the optical center and axis. Press to make
                three ink dots: one at OC, two indicating the 180° line.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Prism Compensator</h4>
              <p className="text-sm text-gray-600">
                (On some models) A dial or knob to measure prism. When target is off-center,
                use this to re-center it and read the prism amount and direction.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'setup',
      title: '3. Initial Setup and Eyepiece Focusing',
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Critical First Step
            </h4>
            <p className="text-amber-800 mt-2">
              <strong>Always focus the eyepiece before measuring any lens.</strong> If the eyepiece
              isn&apos;t focused for your eye, all your readings will be wrong! This is the #1
              source of errors for beginners.
            </p>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">How to Focus the Eyepiece:</h4>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Remove any lens</strong> from the lens stop (it should be empty)
            </li>
            <li>
              <strong>Look through the eyepiece</strong> and rotate the eyepiece ring
            </li>
            <li>
              <strong>Focus on the reticle lines</strong> (the crosshairs/target pattern)
              until they&apos;re perfectly sharp
            </li>
            <li>
              <strong>Important:</strong> Focus on the RETICLE, not the background.
              The reticle should be crystal clear.
            </li>
            <li>
              <strong>If you wear glasses:</strong> You can keep them on or off, but be consistent.
              Refocus the eyepiece accordingly.
            </li>
          </ol>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Pro Tip
            </h4>
            <p className="text-green-800 mt-2">
              If multiple people use the same lensometer, each person needs to refocus the
              eyepiece for their own eyes. In a busy practice, make this a habit every time
              you approach the instrument.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'spherical',
      title: '4. Measuring Spherical (Non-Astigmatic) Lenses',
      content: (
        <div className="space-y-4">
          <p>
            Spherical lenses have the same power in all meridians - no cylinder/axis.
            This is the simplest measurement.
          </p>

          <h4 className="font-semibold text-gray-900">Step-by-Step Procedure:</h4>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Position the lens:</strong> Place the back surface (the side that faces
              the eye when worn) against the lens stop. For minus lenses, this is the concave
              side. For plus, it&apos;s the less curved side.
            </li>
            <li>
              <strong>Center the lens:</strong> Move the lens until the target appears centered
              in the reticle. Use the lens holder to secure it.
            </li>
            <li>
              <strong>Focus the target:</strong> Rotate the power drum until the target lines
              are sharp and clear.
            </li>
            <li>
              <strong>Check both line sets:</strong> For a true sphere, BOTH sets of lines
              (horizontal and vertical) should be in focus simultaneously.
            </li>
            <li>
              <strong>Read the power:</strong> The number on the power drum is the sphere power.
              Plus values are farsighted correction, minus values are nearsighted.
            </li>
            <li>
              <strong>Record:</strong> Example: -2.50 DS (D = diopters, S = sphere)
            </li>
          </ol>

          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900">What You Should See:</h4>
            <p className="text-gray-700 mt-2">
              When a spherical lens is properly neutralized, all the target lines come into
              focus at the same power setting. The target appears as a perfect, clear cross
              pattern with no blur in any direction.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cylinder',
      title: '5. Measuring Sphero-Cylinder Lenses (With Astigmatism)',
      content: (
        <div className="space-y-4">
          <p>
            Most prescription lenses have both sphere and cylinder components. The key is that
            the two sets of lines focus at DIFFERENT power settings.
          </p>

          <h4 className="font-semibold text-gray-900">Understanding the Target:</h4>
          <p>
            The lensometer target typically has two sets of perpendicular lines - often called
            the &quot;sphere lines&quot; and &quot;cylinder lines&quot; or the &quot;triple lines.&quot;
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
            <h4 className="font-semibold text-blue-900">The Key Concept:</h4>
            <p className="text-blue-800 mt-2">
              In a lens with cylinder, one set of lines will focus at one power, and the
              perpendicular set will focus at a different power. The DIFFERENCE between
              these two readings is the cylinder power.
            </p>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Measuring in MINUS Cylinder Form:</h4>
          <p className="text-sm text-gray-600 mb-3">(Most common in US practice)</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Position and center the lens</strong> as with sphere measurement
            </li>
            <li>
              <strong>Focus until ONE set of lines is clear</strong> - rotate the power drum
              until either the horizontal or vertical lines are sharp (the other set will be blurry)
            </li>
            <li>
              <strong>Find the MORE PLUS (or less minus) reading first:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Rotate the power drum toward plus until one set of lines is in focus</li>
                <li>This is your SPHERE reading</li>
                <li>Note which lines are in focus and read the axis from the axis wheel</li>
              </ul>
            </li>
            <li>
              <strong>Align the axis:</strong> If the focused lines aren&apos;t perfectly
              horizontal/vertical, rotate the axis wheel until they are aligned with
              the reticle
            </li>
            <li>
              <strong>Read the sphere:</strong> This is your sphere value (e.g., -2.00)
            </li>
            <li>
              <strong>Continue to the second focal point:</strong> Rotate the power drum
              toward minus until the OTHER set of lines comes into focus
            </li>
            <li>
              <strong>Calculate cylinder:</strong> Subtract the first reading from the second.
              <br/>Example: First reading -2.00, Second reading -3.50
              <br/>Cylinder = -3.50 - (-2.00) = -1.50
            </li>
            <li>
              <strong>Determine axis:</strong> The axis is perpendicular to the cylinder
              lines (the second set you focused). If using minus cylinder, the axis is
              read when the SPHERE lines are in focus.
            </li>
          </ol>

          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900">Example:</h4>
            <p className="text-gray-700">
              First reading (sphere lines clear): -2.00 @ axis 180°<br/>
              Second reading (cylinder lines clear): -3.50<br/>
              <strong>Prescription: -2.00 -1.50 x 180</strong>
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Common Mistake
            </h4>
            <p className="text-amber-800 mt-2">
              Don&apos;t confuse which set of lines gives you the axis! In minus cylinder form,
              the axis is read when the sphere (first, more plus) lines are in focus. The
              axis indicates the direction of the sphere power, not the cylinder.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'optical-center',
      title: '6. Finding and Marking the Optical Center',
      content: (
        <div className="space-y-4">
          <p>
            The optical center (OC) is the point where light passes through the lens without
            deviation - zero prism. Proper OC placement is critical for patient comfort and
            accurate vision.
          </p>

          <h4 className="font-semibold text-gray-900">Why It Matters:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>OC should align with the patient&apos;s pupil</li>
            <li>Off-center OC induces unwanted prism (Prentice&apos;s Rule)</li>
            <li>Can cause eyestrain, headaches, and adaptation problems</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4">Finding the OC:</h4>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Neutralize the lens</strong> (find the sphere power)
            </li>
            <li>
              <strong>Move the lens</strong> until the target is perfectly centered in
              the reticle. The target shouldn&apos;t be displaced up, down, left, or right.
            </li>
            <li>
              <strong>Verify:</strong> The illuminated target should sit exactly in the
              center of the circular reticle pattern
            </li>
            <li>
              <strong>Mark it:</strong> Use the three-dot marker to place dots on the lens
            </li>
          </ol>

          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900">The Three-Dot Mark:</h4>
            <p className="text-gray-700 mt-2">
              Standard marking uses three dots: one at the optical center, and two along
              the 180° line. This indicates both the OC location and the horizontal axis.
              For progressive lenses, specific reference points are marked instead.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'prism',
      title: '7. Detecting and Measuring Prism',
      content: (
        <div className="space-y-4">
          <p>
            Prism in a lens displaces the target from center. This can be intentional
            (prescribed prism) or unintentional (from decentered OC).
          </p>

          <h4 className="font-semibold text-gray-900">Detecting Prism:</h4>
          <p>
            When the target isn&apos;t centered in the reticle, there&apos;s prism present.
            The concentric circles in the reticle typically represent 1 prism diopter each.
          </p>

          <h4 className="font-semibold text-gray-900 mt-4">Measuring Prism:</h4>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Neutralize the lens</strong> at the intended OC or fitting point
            </li>
            <li>
              <strong>Note the target displacement</strong> from center
            </li>
            <li>
              <strong>Count the rings:</strong> Each ring = 1Δ (prism diopter)
            </li>
            <li>
              <strong>Determine direction:</strong> The base direction is opposite
              to where the target appears displaced
            </li>
          </ol>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">Reading Prism Direction:</h4>
            <div className="mt-2 space-y-2 text-blue-800">
              <p>• Target displaced UP → Base DOWN prism</p>
              <p>• Target displaced DOWN → Base UP prism</p>
              <p>• Target displaced nasally (toward nose) → Base OUT prism</p>
              <p>• Target displaced temporally (toward ear) → Base IN prism</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Important
            </h4>
            <p className="text-amber-800 mt-2">
              Remember: The base direction is where the THICKEST part of the prism points.
              The image shifts toward the apex (thin part). So if you see the target shifted
              up, the base is down.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'progressives',
      title: '8. Measuring Progressive Lenses',
      content: (
        <div className="space-y-4">
          <p>
            Progressive lenses are more complex because power changes continuously from
            distance to near. You can&apos;t simply put them on the lensometer anywhere.
          </p>

          <h4 className="font-semibold text-gray-900">Key Reference Points:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Distance Reference Point (DRP):</strong> Where you measure distance power</li>
            <li><strong>Prism Reference Point (PRP):</strong> Where you verify prescribed prism</li>
            <li><strong>Near Reference Point (NRP):</strong> Where you measure near/add power</li>
            <li><strong>Fitting Cross:</strong> The alignment point for the pupil</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4">Finding Reference Points:</h4>
          <p>
            Progressive lenses have hidden engravings (laser-etched marks) that indicate
            the lens design and reference points:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Small circles or logos indicate manufacturer/design</li>
            <li>Numbers may indicate add power</li>
            <li>Use these engravings to locate the measurement zones</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4">Measurement Procedure:</h4>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Locate the hidden engravings</strong> - tilt the lens under light
              to see the laser marks
            </li>
            <li>
              <strong>Find the DRP</strong> - typically 4mm above the fitting cross
              (varies by design)
            </li>
            <li>
              <strong>Measure distance power</strong> at the DRP
            </li>
            <li>
              <strong>Find the NRP</strong> - typically 14-17mm below the DRP
            </li>
            <li>
              <strong>Measure near power</strong> at the NRP
            </li>
            <li>
              <strong>Calculate Add:</strong> Near power minus Distance power = Add
            </li>
          </ol>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Pro Tip
            </h4>
            <p className="text-green-800 mt-2">
              Most manufacturers provide fitting guides showing exactly where reference
              points are for each design. Keep these references handy. When in doubt,
              measure at the geometric center of the lens for distance.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'errors',
      title: '9. Common Errors and Troubleshooting',
      content: (
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Error: Inconsistent readings</h4>
              <p className="text-red-800 mt-2">
                <strong>Causes:</strong> Eyepiece not focused, lens not properly seated,
                dirty lens or lensometer, measuring in wrong zone (progressives)
              </p>
              <p className="text-red-800 mt-2">
                <strong>Fix:</strong> Re-focus eyepiece, clean all surfaces, ensure lens
                is flat against stop, verify measurement location
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Error: Can&apos;t get clear focus</h4>
              <p className="text-red-800 mt-2">
                <strong>Causes:</strong> Power exceeds lensometer range, lens is progressive
                and you&apos;re in the corridor, scratched/damaged lens
              </p>
              <p className="text-red-800 mt-2">
                <strong>Fix:</strong> Check lens condition, try different position on lens,
                use auxiliary lens for very high powers
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Error: Target appears doubled</h4>
              <p className="text-red-800 mt-2">
                <strong>Causes:</strong> Bifocal segment in measurement area, lens tilted,
                your eye not aligned with eyepiece
              </p>
              <p className="text-red-800 mt-2">
                <strong>Fix:</strong> Ensure measuring distance zone only, seat lens properly,
                center your eye in eyepiece
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Error: Axis seems wrong</h4>
              <p className="text-red-800 mt-2">
                <strong>Causes:</strong> Lens inserted backwards, confusion about which lines
                give axis, transposition error
              </p>
              <p className="text-red-800 mt-2">
                <strong>Fix:</strong> Verify back surface is against stop, remember axis is
                read at sphere (first) focus in minus cyl form
              </p>
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
          <p>
            Practice these exercises regularly to build speed and accuracy:
          </p>

          <div className="space-y-4 mt-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 1: Spherical Lenses</h4>
              <p className="text-gray-700 mt-2">
                Gather 10 single vision spherical lenses. Neutralize each one, record the power,
                then check against known values. Time yourself - aim for under 30 seconds per lens.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 2: Sphere-Cylinder</h4>
              <p className="text-gray-700 mt-2">
                Practice with 10 astigmatic lenses. Record sphere, cylinder, and axis.
                Double-check by transposing and verifying the prescription.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 3: OC Marking</h4>
              <p className="text-gray-700 mt-2">
                For each lens, find and mark the optical center. Use a PD ruler to verify
                your marks are consistent and accurate.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 4: Progressive Lenses</h4>
              <p className="text-gray-700 mt-2">
                Practice finding reference points on various progressive designs.
                Measure distance and near powers, calculate the add.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 5: Speed Drill</h4>
              <p className="text-gray-700 mt-2">
                Set a timer for 5 minutes. See how many complete measurements
                (sphere, cylinder, axis, OC verification) you can do accurately.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">Goal for ABO Exam:</h4>
            <p className="text-green-800 mt-2">
              You should be able to accurately neutralize a lens and record the
              full prescription (sphere, cylinder, axis, prism if present) in
              under 2 minutes. The practical portion is timed!
            </p>
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
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 text-indigo-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Equipment
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">🔬</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Lensometer Training
                </h1>
                <p className="text-indigo-200 mt-1">
                  Complete guide to lens power measurement
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
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
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
            <div className="mt-8 bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="font-semibold text-indigo-900 mb-4">Continue Learning</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/equipment/keratometer"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Next: Keratometer Training
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium border border-indigo-200 hover:bg-indigo-50 transition-colors"
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
