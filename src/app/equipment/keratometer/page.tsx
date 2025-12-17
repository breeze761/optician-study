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

export default function KeratometerTrainingPage() {
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
      title: '1. What is a Keratometer?',
      content: (
        <div className="space-y-4">
          <p>
            A <strong>keratometer</strong> (also called ophthalmometer) measures the curvature
            of the anterior corneal surface. It provides &quot;K-readings&quot; that are essential for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact lens base curve selection</li>
            <li>Detecting and quantifying corneal astigmatism</li>
            <li>Monitoring corneal changes (keratoconus, post-surgical)</li>
            <li>IOL power calculations for cataract surgery</li>
            <li>Fitting orthokeratology lenses</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900 flex items-center gap-2">
              <Target className="w-5 h-5" />
              What K-Readings Tell You
            </h4>
            <p className="text-blue-800 mt-2">
              K-readings express corneal curvature in diopters (D) or millimeters (mm) of radius.
              The typical cornea has a radius of about 7.8mm or approximately 43.00D. The keratometer
              measures the central 3mm zone of the cornea.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900">Conversion Formula:</h4>
            <p className="text-gray-700 mt-2 font-mono">
              Diopters = 337.5 / Radius (mm)<br/>
              Radius (mm) = 337.5 / Diopters
            </p>
            <p className="text-gray-600 mt-2 text-sm">
              Example: 7.8mm radius = 337.5 / 7.8 = 43.27D
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'parts',
      title: '2. Parts of a Manual Keratometer',
      content: (
        <div className="space-y-4">
          <p>Understanding the components of a Bausch & Lomb or similar keratometer:</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Eyepiece (Ocular)</h4>
              <p className="text-sm text-gray-600">
                Where you observe the mires. Has a focusing ring for your refractive error.
                <strong> Focus this first</strong> on the crosshairs before any measurement.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Mires</h4>
              <p className="text-sm text-gray-600">
                The illuminated targets reflected off the patient&apos;s cornea. Usually circles
                or plus signs. Their size and shape indicate corneal curvature.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Horizontal Measuring Drum</h4>
              <p className="text-sm text-gray-600">
                Adjusts the horizontal mire separation. Usually on the right side.
                Measures the horizontal meridian (often 180°).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Vertical Measuring Drum</h4>
              <p className="text-sm text-gray-600">
                Adjusts the vertical mire separation. Usually on the left side.
                Measures the vertical meridian (often 90°).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Chin Rest & Forehead Bar</h4>
              <p className="text-sm text-gray-600">
                Positions and stabilizes the patient. Adjustable for height.
                Patient&apos;s forehead must touch the bar firmly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Joystick/Base</h4>
              <p className="text-sm text-gray-600">
                Moves the instrument toward/away from the patient and
                adjusts horizontal and vertical alignment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Axis Scale</h4>
              <p className="text-sm text-gray-600">
                Shows the meridian being measured (0-180°). Some have a wheel
                to rotate the entire mire system for oblique astigmatism.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Leveling Bubble</h4>
              <p className="text-sm text-gray-600">
                Ensures the instrument is level. Important for accurate
                axis readings. Check before each measurement session.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'mires',
      title: '3. Understanding Mire Patterns',
      content: (
        <div className="space-y-4">
          <p>
            The keratometer projects illuminated targets (mires) onto the cornea and measures
            their reflected image. Different keratometer types use different mire patterns:
          </p>

          <h4 className="font-semibold text-gray-900 mt-4">Bausch & Lomb Type (One-Position):</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses a doubling prism system</li>
            <li>Mires appear as plus signs (+) or circles with plus signs</li>
            <li>You see doubled images that must be superimposed</li>
            <li>Measures both meridians simultaneously without rotating</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4">Javal-Schiøtz Type (Two-Position):</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses two separate mires (often a step pattern)</li>
            <li>Must rotate instrument 90° to measure second meridian</li>
            <li>Mires are aligned edge-to-edge</li>
            <li>Simpler optically but requires two measurements</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">What the Mires Tell You:</h4>
            <div className="mt-2 space-y-2 text-blue-800">
              <p>• <strong>Round/circular mires</strong> = spherical cornea (no astigmatism)</p>
              <p>• <strong>Oval/elliptical mires</strong> = corneal astigmatism present</p>
              <p>• <strong>Irregular/distorted mires</strong> = corneal irregularity (scarring, keratoconus, dry eye)</p>
              <p>• <strong>Poor quality/fuzzy mires</strong> = tear film problem or corneal pathology</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'procedure',
      title: '4. Step-by-Step Measurement Procedure',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Preparation:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Check that the instrument is level (bubble centered)</li>
            <li>Clean the chin rest and forehead bar</li>
            <li>Focus the eyepiece on the crosshairs (with no patient)</li>
            <li>Dim room lights slightly for better mire visibility</li>
          </ol>

          <h4 className="font-semibold text-gray-900 mt-4">Patient Positioning:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Adjust chin rest height so patient&apos;s eyes are at the marked level</li>
            <li>Have patient place chin firmly in rest</li>
            <li>Forehead must touch the forehead bar</li>
            <li>Patient should sit comfortably, relaxed, shoulders down</li>
            <li>Instruct patient to blink normally, then keep eyes wide open</li>
            <li>Patient looks at the fixation target (usually in the center of the mires)</li>
          </ol>

          <h4 className="font-semibold text-gray-900 mt-4">Taking the Measurement (B&L Type):</h4>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Align the instrument:</strong> Use the joystick to center the
              mires in the crosshairs. The reflection should be clear and centered.
            </li>
            <li>
              <strong>Focus:</strong> Move forward/backward until the mires are
              sharp and clear. Blurry mires give inaccurate readings.
            </li>
            <li>
              <strong>Check the axis:</strong> If the mires aren&apos;t aligned with
              horizontal/vertical, rotate the instrument to align with the
              principal meridians.
            </li>
            <li>
              <strong>Superimpose horizontal mires:</strong> Turn the horizontal
              drum until the plus signs (or circles) overlap perfectly.
              Read the horizontal K.
            </li>
            <li>
              <strong>Superimpose vertical mires:</strong> Turn the vertical drum
              until those mires overlap. Read the vertical K.
            </li>
            <li>
              <strong>Read the axis:</strong> Note the axis of the flattest meridian
              (lower diopter reading).
            </li>
            <li>
              <strong>Have patient blink</strong> and verify readings are stable.
              Take multiple readings if uncertain.
            </li>
          </ol>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Common Pitfalls
            </h4>
            <ul className="mt-2 space-y-1 text-amber-800">
              <li>• Patient looking away from fixation target</li>
              <li>• Measuring through a tear film breakup</li>
              <li>• Instrument not level (affects axis reading)</li>
              <li>• Patient squeezing lids (distorts cornea)</li>
              <li>• Reading before mires are perfectly superimposed</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'recording',
      title: '5. Recording K-Readings',
      content: (
        <div className="space-y-4">
          <p>
            K-readings are recorded as two values representing the two principal meridians
            of the cornea. There are several acceptable formats:
          </p>

          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900">Standard Format:</h4>
            <p className="text-gray-700 mt-2 font-mono">
              K: 43.00 @ 180 / 44.50 @ 090
            </p>
            <p className="text-gray-600 mt-2 text-sm">
              (Flatter meridian listed first with its axis, steeper meridian second)
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900">Alternative Format (mm):</h4>
            <p className="text-gray-700 mt-2 font-mono">
              K: 7.85mm @ 180 / 7.58mm @ 090
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900">Shorthand:</h4>
            <p className="text-gray-700 mt-2 font-mono">
              43.00/44.50 @ 180 or 43.00 × 44.50 @ 180
            </p>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Calculating Corneal Astigmatism:</h4>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              <strong>Corneal Cylinder = Steep K - Flat K</strong>
            </p>
            <p className="text-blue-800 mt-2">
              Example: 44.50 - 43.00 = 1.50D of corneal astigmatism
            </p>
            <p className="text-blue-800 mt-2">
              The axis of the corneal cylinder is the axis of the FLAT meridian
              (similar to minus cylinder spectacle convention).
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'astigmatism',
      title: '6. Understanding Corneal Astigmatism Types',
      content: (
        <div className="space-y-4">
          <p>
            The orientation of corneal astigmatism affects contact lens selection
            and helps predict the refractive cylinder:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900">With-the-Rule (WTR)</h4>
              <p className="text-green-800 mt-2">
                <strong>Definition:</strong> Steep meridian is vertical (near 90°)
              </p>
              <p className="text-green-800 mt-2">
                <strong>K-reading example:</strong> 43.00 @ 180 / 44.50 @ 090
              </p>
              <p className="text-green-800 mt-2">
                <strong>Spectacle Rx:</strong> Minus cylinder axis near 180°
              </p>
              <p className="text-green-800 mt-2">
                <strong>Common in:</strong> Younger patients
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900">Against-the-Rule (ATR)</h4>
              <p className="text-purple-800 mt-2">
                <strong>Definition:</strong> Steep meridian is horizontal (near 180°)
              </p>
              <p className="text-purple-800 mt-2">
                <strong>K-reading example:</strong> 43.00 @ 090 / 44.50 @ 180
              </p>
              <p className="text-purple-800 mt-2">
                <strong>Spectacle Rx:</strong> Minus cylinder axis near 90°
              </p>
              <p className="text-purple-800 mt-2">
                <strong>Common in:</strong> Older patients
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 md:col-span-2">
              <h4 className="font-semibold text-amber-900">Oblique Astigmatism</h4>
              <p className="text-amber-800 mt-2">
                <strong>Definition:</strong> Principal meridians are between 30-60° or 120-150°
              </p>
              <p className="text-amber-800 mt-2">
                <strong>K-reading example:</strong> 43.00 @ 045 / 44.50 @ 135
              </p>
              <p className="text-amber-800 mt-2">
                <strong>Clinical note:</strong> Often harder to correct with soft toric CLs
                due to rotation. May need custom or RGP lenses.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Clinical Pearl
            </h4>
            <p className="text-blue-800 mt-2">
              Compare K-readings to refractive cylinder to determine how much astigmatism
              is corneal vs. lenticular. If K-readings show 2.00D cylinder but refraction
              shows only 1.00D cylinder, there&apos;s likely 1.00D of lenticular astigmatism
              partially neutralizing the corneal astigmatism.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'contact-lens',
      title: '7. Using K-Readings for Contact Lens Fitting',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">RGP (Rigid Gas Permeable) Lenses:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Starting Base Curve Rule:</strong> Begin with a base curve
              equal to or slightly flatter than the flat K.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              <li>Flat K = 43.00D → Start with 43.00D or 42.75D BC</li>
              <li>Flatter fit gives better oxygen, but may decenter</li>
              <li>Steeper fit gives better centration, but less tear exchange</li>
              <li>Use fluorescein to evaluate the fit</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Soft Contact Lenses:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              Soft lens BC is less critical because the lens drapes over the cornea.
              Most soft lenses come in limited BCs (8.4, 8.6mm).
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              <li>Flat corneas (K &lt; 42.00): Consider 8.8mm or flatter BC if available</li>
              <li>Average corneas (K 42-45): Standard 8.4 or 8.6mm BC</li>
              <li>Steep corneas (K &gt; 46.00): May need 8.3mm or steeper BC</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">When to Consider Toric CLs:</h4>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              General guideline: Consider toric soft CLs when corneal astigmatism is:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-blue-800">
              <li>&gt; 0.75D for most patients</li>
              <li>&gt; 1.00D is often the threshold for significant visual benefit</li>
              <li>Higher astigmatism = more critical need for toric</li>
            </ul>
            <p className="text-blue-800 mt-2">
              RGP lenses mask up to ~3.00D of corneal astigmatism through the tear lens.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'special',
      title: '8. Special Situations and Irregular Readings',
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900">Irregular Mires</h4>
            <p className="text-amber-800 mt-2">
              If mires appear distorted, wavy, or irregular, suspect:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-amber-800">
              <li><strong>Dry eye:</strong> Have patient blink, instill artificial tears</li>
              <li><strong>Keratoconus:</strong> Scissoring of mires, high/irregular K-readings</li>
              <li><strong>Corneal scarring:</strong> Localized distortion</li>
              <li><strong>Post-surgical cornea:</strong> LASIK, RK, PKP</li>
              <li><strong>Contact lens warpage:</strong> Have patient leave CLs out 2+ weeks</li>
            </ul>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Keratoconus Signs:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>K-readings &gt; 47.00D</li>
            <li>Significant K difference between eyes</li>
            <li>Rapidly changing K-readings over time</li>
            <li>Mire distortion (&quot;scissoring&quot;)</li>
            <li>High, irregular astigmatism</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4">Post-Refractive Surgery:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              K-readings after LASIK/PRK are unreliable for IOL calculations because:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              <li>Central cornea is flattened but keratometer measures too large an area</li>
              <li>Standard formulas assume a standard corneal shape</li>
              <li>Special formulas (Barrett True-K, Haigis-L) are needed for IOL calc</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'troubleshooting',
      title: '9. Troubleshooting Common Problems',
      content: (
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Problem: Mires won&apos;t focus</h4>
              <p className="text-red-800 mt-2">
                <strong>Causes:</strong> Patient too far/close, eyepiece not adjusted,
                patient looking away, excessive tearing
              </p>
              <p className="text-red-800 mt-2">
                <strong>Fix:</strong> Readjust positioning, refocus eyepiece, redirect
                patient gaze, have patient blink and stabilize
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Problem: Mires keep moving</h4>
              <p className="text-red-800 mt-2">
                <strong>Causes:</strong> Patient not stable, eye movement, poor fixation,
                Bell&apos;s phenomenon
              </p>
              <p className="text-red-800 mt-2">
                <strong>Fix:</strong> Ensure firm forehead contact, have patient fixate
                on center target, take reading quickly after positioning
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Problem: Inconsistent readings</h4>
              <p className="text-red-800 mt-2">
                <strong>Causes:</strong> Dry eye/tear film breakup, lid pressure,
                measuring different corneal areas
              </p>
              <p className="text-red-800 mt-2">
                <strong>Fix:</strong> Instill artificial tears, wait for stable tear film,
                ensure consistent alignment, take multiple readings
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Problem: Can&apos;t superimpose mires</h4>
              <p className="text-red-800 mt-2">
                <strong>Causes:</strong> High astigmatism exceeds instrument range,
                irregular cornea, patient accommodation fluctuation
              </p>
              <p className="text-red-800 mt-2">
                <strong>Fix:</strong> Use extended range attachment if available,
                refer for topography, document as &quot;irregular mires - unable to measure&quot;
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
          <p>Develop proficiency with these exercises:</p>

          <div className="space-y-4 mt-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 1: Basic Technique</h4>
              <p className="text-gray-700 mt-2">
                Practice on colleagues or classmates. Measure each eye 3 times and
                compare readings. They should be within 0.25D of each other.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 2: Speed Drill</h4>
              <p className="text-gray-700 mt-2">
                Time yourself. Goal: accurate K-readings on both eyes in under
                2 minutes total, including positioning.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 3: Astigmatism Classification</h4>
              <p className="text-gray-700 mt-2">
                For each measurement, immediately classify as WTR, ATR, or oblique.
                Calculate the corneal cylinder amount. Practice until automatic.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 4: Compare to Refraction</h4>
              <p className="text-gray-700 mt-2">
                After getting K-readings, compare to the patient&apos;s refractive cylinder.
                Can you explain any differences? (Lenticular astigmatism, axis rotation)
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 5: Contact Lens Selection</h4>
              <p className="text-gray-700 mt-2">
                Given K-readings and refraction, determine: appropriate CL type (spherical
                vs. toric), starting base curve for RGP, expected residual astigmatism.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">ABO/NCLE Exam Goals:</h4>
            <ul className="mt-2 space-y-1 text-green-800">
              <li>✓ Accurate K-readings within 0.25D</li>
              <li>✓ Proper recording format</li>
              <li>✓ Correct astigmatism classification</li>
              <li>✓ Understanding of clinical applications</li>
              <li>✓ Troubleshooting irregular readings</li>
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
              <span className="text-5xl">🎯</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Keratometer Training
                </h1>
                <p className="text-teal-200 mt-1">
                  Master corneal curvature measurement
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
                  href="/equipment/slit-lamp"
                  className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  Next: Slit Lamp Training
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
                <Link
                  href="/equipment/lensometer"
                  className="inline-flex items-center gap-2 bg-white text-teal-600 px-4 py-2 rounded-lg font-medium border border-teal-200 hover:bg-teal-50 transition-colors"
                >
                  Review: Lensometer
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
