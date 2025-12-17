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

export default function SlitLampTraining() {
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
      title: '1. What is a Slit Lamp?',
      content: (
        <div className="space-y-4">
          <p>
            A <strong>slit lamp</strong> (biomicroscope) is a high-intensity light source combined
            with a low-power microscope that allows detailed examination of the anterior segment
            of the eye. It&apos;s essential for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Evaluating contact lens fit</li>
            <li>Detecting corneal conditions (abrasions, infections, dystrophies)</li>
            <li>Examining the tear film</li>
            <li>Assessing the conjunctiva and sclera</li>
            <li>Viewing the anterior chamber and lens</li>
            <li>With additional lenses: examining the fundus</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900 flex items-center gap-2">
              <Target className="w-5 h-5" />
              NCLE Exam Focus
            </h4>
            <p className="text-blue-800 mt-2">
              For the NCLE exam, focus on contact lens evaluation: fit assessment, detecting
              complications (corneal staining, neovascularization, GPC), and proper use of
              fluorescein. You should know the illumination techniques and what findings indicate.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'parts',
      title: '2. Parts of the Slit Lamp',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Illumination System</h4>
              <p className="text-sm text-gray-600">
                <strong>Light source:</strong> Halogen or LED bulb<br/>
                <strong>Slit aperture:</strong> Adjustable width (0-14mm) and height<br/>
                <strong>Filters:</strong> Cobalt blue, red-free (green), diffuser, ND<br/>
                <strong>Arm:</strong> Rotates independently of microscope
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Microscope System</h4>
              <p className="text-sm text-gray-600">
                <strong>Eyepieces:</strong> Adjustable for your PD and refractive error<br/>
                <strong>Magnification:</strong> Usually 6x, 10x, 16x, 25x, 40x<br/>
                <strong>Binocular viewing:</strong> Provides stereoscopic depth perception
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Mechanical System</h4>
              <p className="text-sm text-gray-600">
                <strong>Joystick:</strong> X-Y-Z positioning, twist for vertical<br/>
                <strong>Base:</strong> Sliding platform for forward/back movement<br/>
                <strong>Click stop:</strong> Locks illumination and microscope together
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Patient Positioning</h4>
              <p className="text-sm text-gray-600">
                <strong>Chin rest:</strong> Adjustable height<br/>
                <strong>Forehead strap:</strong> Stabilizes patient&apos;s head<br/>
                <strong>Fixation target:</strong> Internal light for patient to view
              </p>
            </div>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Key Controls to Know:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Slit width:</strong> Narrow for optical sections, wide for diffuse illumination</li>
            <li><strong>Slit height:</strong> Full height for overview, reduced for specific areas</li>
            <li><strong>Light intensity:</strong> Dim for patient comfort, bright for detail</li>
            <li><strong>Magnification dial:</strong> Start low (6-10x), increase for detail</li>
            <li><strong>Filter lever:</strong> Quick access to cobalt blue and other filters</li>
          </ul>
        </div>
      )
    },
    {
      id: 'illumination',
      title: '3. Illumination Techniques',
      content: (
        <div className="space-y-4">
          <p>
            Different illumination methods reveal different structures. Master these techniques:
          </p>

          <div className="space-y-4 mt-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900">1. Diffuse Illumination</h4>
              <p className="text-blue-800 mt-2">
                <strong>Setup:</strong> Wide beam, medium brightness, low-medium magnification<br/>
                <strong>Use:</strong> General overview, gross examination, initial assessment<br/>
                <strong>Best for:</strong> Lids, lashes, conjunctival injection, overall lens fit
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900">2. Direct Focal Illumination</h4>
              <p className="text-green-800 mt-2">
                <strong>Setup:</strong> Narrow slit focused directly on area of interest<br/>
                <strong>Use:</strong> Viewing corneal depth, creating optical sections<br/>
                <strong>Best for:</strong> Corneal thickness, depth of lesions, lens opacities<br/>
                <strong>Types:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-green-800">
                <li><strong>Parallelepiped:</strong> Medium slit (2-4mm) for corneal layers</li>
                <li><strong>Optical section:</strong> Very narrow slit for cross-sectional view</li>
                <li><strong>Conical beam:</strong> Small round beam for aqueous cells/flare</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900">3. Indirect Illumination</h4>
              <p className="text-purple-800 mt-2">
                <strong>Setup:</strong> Light beam adjacent to (not on) viewing area<br/>
                <strong>Use:</strong> Viewing structures by scattered light<br/>
                <strong>Best for:</strong> Subtle corneal changes, iris details, blood vessels
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900">4. Retroillumination</h4>
              <p className="text-amber-800 mt-2">
                <strong>Setup:</strong> Light reflected from iris or retina behind the structure<br/>
                <strong>Use:</strong> Silhouetting opacities and irregularities<br/>
                <strong>Types:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-amber-800">
                <li><strong>Direct retro:</strong> Light and microscope aligned - opacity appears dark</li>
                <li><strong>Indirect retro:</strong> Light offset - opacity appears bright against dark</li>
              </ul>
              <p className="text-amber-800 mt-2">
                <strong>Best for:</strong> Corneal scars, vacuoles, keratic precipitates, cataracts
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">5. Specular Reflection</h4>
              <p className="text-red-800 mt-2">
                <strong>Setup:</strong> Angle of illumination equals angle of observation<br/>
                <strong>Use:</strong> Viewing surface reflections (like a mirror)<br/>
                <strong>Best for:</strong> Corneal endothelium, tear film quality, lipid layer<br/>
                <strong>Note:</strong> Very bright reflection - use with care
              </p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-900">6. Sclerotic Scatter</h4>
              <p className="text-teal-800 mt-2">
                <strong>Setup:</strong> Light beam at limbus, view cornea from front<br/>
                <strong>Use:</strong> Light travels through cornea via total internal reflection<br/>
                <strong>Best for:</strong> Overall corneal clarity, faint scars, edema<br/>
                <strong>Result:</strong> Whole cornea glows if clear; opacities appear as shadows
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'filters',
      title: '4. Filters and Their Uses',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900">Cobalt Blue Filter</h4>
              <p className="text-blue-800 mt-2">
                <strong>Purpose:</strong> Excites fluorescein dye to fluoresce yellow-green<br/>
                <strong>Use with:</strong> Fluorescein for staining, tear breakup time, RGP fit<br/>
                <strong>Note:</strong> Use yellow barrier (Wratten #12) filter for best contrast
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900">Red-Free (Green) Filter</h4>
              <p className="text-green-800 mt-2">
                <strong>Purpose:</strong> Enhances contrast of blood vessels (appear black)<br/>
                <strong>Use for:</strong> Neovascularization, hemorrhages, blood vessel detail<br/>
                <strong>Note:</strong> Also enhances rose bengal/lissamine green staining
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Neutral Density (ND) Filter</h4>
              <p className="text-gray-700 mt-2">
                <strong>Purpose:</strong> Reduces light intensity without color change<br/>
                <strong>Use for:</strong> Photophobic patients, prolonged exams, comfort
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Diffuser</h4>
              <p className="text-gray-700 mt-2">
                <strong>Purpose:</strong> Spreads light evenly for diffuse illumination<br/>
                <strong>Use for:</strong> General overview, external exam, less glare
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Clinical Pearl: Fluorescein Use
            </h4>
            <p className="text-amber-800 mt-2">
              For best fluorescein visualization:
            </p>
            <ol className="list-decimal pl-6 mt-2 text-amber-800">
              <li>Wet the fluorescein strip with saline (not directly with patient tears)</li>
              <li>Touch the strip to the inferior fornix or inner canthus</li>
              <li>Have patient blink several times to spread the dye</li>
              <li>Wait 1-2 minutes for optimal distribution</li>
              <li>Use cobalt blue filter with yellow barrier filter</li>
              <li>For TBUT: Time from last blink to first dry spot</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'examination',
      title: '5. Systematic Examination Routine',
      content: (
        <div className="space-y-4">
          <p>
            Develop a consistent routine to ensure you don&apos;t miss anything. Here&apos;s a
            suggested order:
          </p>

          <div className="bg-gray-100 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900">Recommended Examination Sequence:</h4>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li><strong>Lids and lashes:</strong> Diffuse illumination, low mag - check for blepharitis, meibomian dysfunction, trichiasis</li>
              <li><strong>Conjunctiva:</strong> Diffuse, then direct focal - check injection, follicles, papillae, foreign bodies</li>
              <li><strong>Cornea:</strong> Multiple techniques - direct focal, retroillumination, sclerotic scatter</li>
              <li><strong>Tear film:</strong> Specular reflection for lipid layer, fluorescein for TBUT</li>
              <li><strong>Anterior chamber:</strong> Narrow beam, oblique angle - check depth, cells, flare</li>
              <li><strong>Iris:</strong> Direct and indirect illumination - check architecture, transillumination defects</li>
              <li><strong>Lens:</strong> Retroillumination - check for opacities, cataracts</li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">Contact Lens Assessment Routine:</h4>
            <ol className="list-decimal pl-6 mt-2 space-y-2 text-blue-800">
              <li><strong>With lens on:</strong> Centration, coverage, movement with blink</li>
              <li><strong>Push-up test:</strong> Check lens is not too tight</li>
              <li><strong>Lens surface:</strong> Deposits, scratches, wetting</li>
              <li><strong>Fluorescein (RGP):</strong> Check for even distribution, bearing areas</li>
              <li><strong>After removal:</strong> Cornea for staining, striae, edema</li>
              <li><strong>Conjunctiva:</strong> Check for GPC, injection, impression rings</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'contact-lens-fit',
      title: '6. Contact Lens Fit Evaluation',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Soft Contact Lens Fit Assessment:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-2 border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Parameter</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Optimal</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Too Tight</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Too Loose</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t">
                  <td className="px-4 py-2">Centration</td>
                  <td className="px-4 py-2">Centered over cornea</td>
                  <td className="px-4 py-2">Good but immobile</td>
                  <td className="px-4 py-2">Decentered, unstable</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">Movement</td>
                  <td className="px-4 py-2">0.5-1mm on blink</td>
                  <td className="px-4 py-2">&lt;0.5mm or none</td>
                  <td className="px-4 py-2">&gt;1mm, excessive</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Coverage</td>
                  <td className="px-4 py-2">Covers cornea + 1mm limbus</td>
                  <td className="px-4 py-2">May tent at edge</td>
                  <td className="px-4 py-2">Edge may expose limbus</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2">Push-up</td>
                  <td className="px-4 py-2">Moves easily, recenters</td>
                  <td className="px-4 py-2">Resists movement</td>
                  <td className="px-4 py-2">Falls off easily</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Comfort</td>
                  <td className="px-4 py-2">Comfortable</td>
                  <td className="px-4 py-2">Tight sensation, reduces over time</td>
                  <td className="px-4 py-2">Edge awareness, unstable vision</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-gray-900 mt-6">RGP Fluorescein Patterns:</h4>
          <div className="grid md:grid-cols-3 gap-4 mt-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h5 className="font-semibold text-green-900">Aligned Fit (Ideal)</h5>
              <p className="text-green-800 mt-2 text-sm">
                Even fluorescein distribution across most of the lens.
                Thin line of pooling at edge. Good centration and movement.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h5 className="font-semibold text-red-900">Steep Fit</h5>
              <p className="text-red-800 mt-2 text-sm">
                Central pooling (bright green), dark bearing ring at mid-periphery,
                edge lift may be reduced. Poor tear exchange.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h5 className="font-semibold text-amber-900">Flat Fit</h5>
              <p className="text-amber-800 mt-2 text-sm">
                Central bearing (dark), peripheral pooling, excessive edge lift.
                Lens may decenter, rock on apex.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'findings',
      title: '7. Common Findings and Their Significance',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Corneal Conditions:</h4>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">Punctate Epithelial Erosions (PEE)</h5>
              <p className="text-gray-700 mt-1 text-sm">
                <strong>Appearance:</strong> Tiny dots of fluorescein staining<br/>
                <strong>Causes:</strong> Dry eye, CL-related, exposure, toxicity<br/>
                <strong>Pattern matters:</strong> Inferior = dry eye, 3&9 o&apos;clock = RGP, superior = GPC/SLK
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">Corneal Abrasion</h5>
              <p className="text-gray-700 mt-1 text-sm">
                <strong>Appearance:</strong> Larger area of staining, may see epithelial defect edges<br/>
                <strong>Causes:</strong> Trauma, foreign body, CL overwear<br/>
                <strong>Action:</strong> Document size/location, refer if large or central
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">Corneal Infiltrates</h5>
              <p className="text-gray-700 mt-1 text-sm">
                <strong>Appearance:</strong> White/gray focal opacities, may have overlying staining<br/>
                <strong>Causes:</strong> Infectious (bacterial, viral), sterile (immune), CL-related<br/>
                <strong>Action:</strong> URGENT if central, large, painful, or with discharge
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">Neovascularization</h5>
              <p className="text-gray-700 mt-1 text-sm">
                <strong>Appearance:</strong> Blood vessels extending onto cornea (use red-free filter)<br/>
                <strong>Causes:</strong> Chronic hypoxia (tight CL, overwear), inflammation<br/>
                <strong>Action:</strong> Improve oxygen, consider higher Dk lens, reduce wearing time
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">Corneal Edema</h5>
              <p className="text-gray-700 mt-1 text-sm">
                <strong>Appearance:</strong> Hazy cornea, striae (folds), microcysts, reduced clarity<br/>
                <strong>Causes:</strong> Hypoxia, endothelial dysfunction, overwear<br/>
                <strong>Stages:</strong> Striae (5% swelling) → Folds (8%) → Loss of transparency (&gt;10%)
              </p>
            </div>
          </div>

          <h4 className="font-semibold text-gray-900 mt-6">Conjunctival Findings:</h4>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">Giant Papillary Conjunctivitis (GPC)</h5>
              <p className="text-gray-700 mt-1 text-sm">
                <strong>Appearance:</strong> Large papillae (&gt;0.3mm) on upper tarsal conjunctiva<br/>
                <strong>Symptoms:</strong> Itching, mucous discharge, lens intolerance<br/>
                <strong>Causes:</strong> CL protein deposits, mechanical irritation<br/>
                <strong>Action:</strong> Change lens type, improve hygiene, may need daily disposables
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900">Conjunctival Injection</h5>
              <p className="text-gray-700 mt-1 text-sm">
                <strong>Appearance:</strong> Red eye, engorged blood vessels<br/>
                <strong>Causes:</strong> Tight lens, hypoxia, infection, allergy, dry eye<br/>
                <strong>Pattern:</strong> Limbal = more serious, diffuse = usually less urgent
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'documentation',
      title: '8. Documentation and Grading',
      content: (
        <div className="space-y-4">
          <p>
            Proper documentation allows tracking of changes over time and communication
            with other practitioners.
          </p>

          <h4 className="font-semibold text-gray-900">Standard Grading Scale (0-4):</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-2 border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Grade</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Description</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Staining Example</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium">0</td>
                  <td className="px-4 py-2">None/Normal</td>
                  <td className="px-4 py-2">No staining</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2 font-medium">1</td>
                  <td className="px-4 py-2">Trace/Mild</td>
                  <td className="px-4 py-2">Scattered punctate staining</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium">2</td>
                  <td className="px-4 py-2">Mild/Moderate</td>
                  <td className="px-4 py-2">Moderate punctate, localized area</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-2 font-medium">3</td>
                  <td className="px-4 py-2">Moderate/Severe</td>
                  <td className="px-4 py-2">Dense staining, larger area</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium">4</td>
                  <td className="px-4 py-2">Severe</td>
                  <td className="px-4 py-2">Coalescent staining, epithelial defect</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-gray-900 mt-4">Location Documentation:</h4>
          <p className="text-gray-700">
            Use clock hours (1-12) or zones (central, paracentral, peripheral, limbal)
            to document location of findings. Example: &quot;Grade 2 SPK, 3-6 o&apos;clock, inferior paracentral&quot;
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900">Documentation Example:</h4>
            <p className="text-blue-800 mt-2 font-mono text-sm">
              SLE: Lids/lashes clear<br/>
              Conj: trace injection OU, no papillae<br/>
              Cornea: Grade 1 SPK inferior OD, clear OS<br/>
              TBUT: 8 sec OD, 9 sec OS<br/>
              CL fit: centered, 0.5mm movement on blink, full coverage<br/>
              Impression: Mild dry eye-related staining OD<br/>
              Plan: Rewetting drops, f/u 2 weeks
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'troubleshooting',
      title: '9. Troubleshooting Common Issues',
      content: (
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Problem: Patient can&apos;t keep eyes open</h4>
              <p className="text-red-800 mt-2">
                <strong>Solutions:</strong>
              </p>
              <ul className="list-disc pl-6 text-red-800">
                <li>Reduce light intensity</li>
                <li>Use diffuser</li>
                <li>Allow adaptation time</li>
                <li>Use topical anesthetic if needed (for procedures)</li>
                <li>Talk to patient, distract them</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Problem: Can&apos;t get clear view</h4>
              <p className="text-red-800 mt-2">
                <strong>Check:</strong>
              </p>
              <ul className="list-disc pl-6 text-red-800">
                <li>Eyepiece focus for your refractive error</li>
                <li>Patient position (forehead on bar)</li>
                <li>Patient looking at fixation target</li>
                <li>Clean eyepieces and objective</li>
                <li>Magnification not too high for the task</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Problem: Fluorescein not showing up</h4>
              <p className="text-red-800 mt-2">
                <strong>Check:</strong>
              </p>
              <ul className="list-disc pl-6 text-red-800">
                <li>Cobalt blue filter is engaged</li>
                <li>Enough fluorescein was applied</li>
                <li>Wait 1-2 minutes for distribution</li>
                <li>Use yellow barrier filter for better contrast</li>
                <li>Increase light intensity</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900">Problem: Patient keeps blinking during TBUT</h4>
              <p className="text-red-800 mt-2">
                <strong>Tips:</strong>
              </p>
              <ul className="list-disc pl-6 text-red-800">
                <li>Have them take a deep breath and hold</li>
                <li>Count down so they know what to expect</li>
                <li>Gently hold lids (if necessary)</li>
                <li>Take multiple measurements, average results</li>
              </ul>
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
              <h4 className="font-semibold text-gray-900">Exercise 1: Illumination Technique Drill</h4>
              <p className="text-gray-700 mt-2">
                Practice switching between all 6 illumination techniques on a colleague.
                For each technique, identify what structures are best visualized.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 2: Systematic Examination</h4>
              <p className="text-gray-700 mt-2">
                Complete a full anterior segment examination in order: lids → conjunctiva →
                cornea → anterior chamber → iris → lens. Time yourself (goal: under 5 minutes
                for routine exam).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 3: TBUT Assessment</h4>
              <p className="text-gray-700 mt-2">
                Practice measuring tear breakup time on multiple subjects. Record where
                the first dry spots appear and the time. Normal is &gt;10 seconds.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 4: Contact Lens Fit Evaluation</h4>
              <p className="text-gray-700 mt-2">
                Evaluate soft lens fit on a wearer: document centration, movement, coverage,
                and push-up response. Rate the fit as optimal, tight, or loose.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Exercise 5: Fluorescein Staining Assessment</h4>
              <p className="text-gray-700 mt-2">
                Apply fluorescein and grade any corneal staining (0-4 scale). Document
                location using clock hours and zones. Practice clear documentation.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-900">NCLE Exam Goals:</h4>
            <ul className="mt-2 space-y-1 text-green-800">
              <li>✓ Proficient with all illumination techniques</li>
              <li>✓ Can evaluate CL fit systematically</li>
              <li>✓ Recognize common complications</li>
              <li>✓ Proper fluorescein application and TBUT</li>
              <li>✓ Grade findings using standard scales</li>
              <li>✓ Know when to refer urgently</li>
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
        <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 text-amber-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Equipment
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">💡</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Slit Lamp Training
                </h1>
                <p className="text-amber-200 mt-1">
                  Master anterior segment examination
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
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
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
            <div className="mt-8 bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-4">Continue Learning</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/equipment/lensometer"
                  className="inline-flex items-center gap-2 bg-white text-amber-600 px-4 py-2 rounded-lg font-medium border border-amber-200 hover:bg-amber-50 transition-colors"
                >
                  Review: Lensometer
                </Link>
                <Link
                  href="/equipment/keratometer"
                  className="inline-flex items-center gap-2 bg-white text-amber-600 px-4 py-2 rounded-lg font-medium border border-amber-200 hover:bg-amber-50 transition-colors"
                >
                  Review: Keratometer
                </Link>
                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors"
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
