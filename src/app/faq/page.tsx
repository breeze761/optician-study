'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ChevronDown, ChevronUp, Search, HelpCircle, Glasses, Calculator, Wrench, FileText, Eye } from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // Prescription Reading & Interpretation
  {
    category: 'Prescription Reading',
    question: 'What does OD and OS mean on a prescription?',
    answer: 'OD (Oculus Dexter) means right eye, OS (Oculus Sinister) means left eye. OU (Oculus Uterque) means both eyes. These Latin abbreviations are standard in optical prescriptions. Always remember: OD = right, OS = left. Some newer prescriptions may use RE (right eye) and LE (left eye) instead.'
  },
  {
    category: 'Prescription Reading',
    question: 'What is the difference between sphere, cylinder, and axis?',
    answer: 'Sphere (SPH) corrects nearsightedness (-) or farsightedness (+). Cylinder (CYL) corrects astigmatism - the amount of correction needed for the irregular corneal curvature. Axis (in degrees 1-180) indicates the angle/orientation of the astigmatism correction. If there\'s no cylinder, there\'s no axis needed.'
  },
  {
    category: 'Prescription Reading',
    question: 'How do I transpose a prescription from plus to minus cylinder?',
    answer: 'Three steps: 1) Add the sphere and cylinder algebraically to get new sphere. 2) Change the sign of the cylinder. 3) Add or subtract 90° from the axis (keep between 1-180). Example: +2.00 +1.00 x 090 becomes +3.00 -1.00 x 180. The optical power is identical, just written differently.'
  },
  {
    category: 'Prescription Reading',
    question: 'What does "Add" power mean on a prescription?',
    answer: 'Add (Addition) is the extra magnifying power added to the distance prescription for reading/near vision in progressive or bifocal lenses. It\'s always a positive number, typically ranging from +0.75 to +3.50. The add is the same for both eyes. Higher adds indicate stronger near correction, usually increasing with age due to presbyopia.'
  },
  {
    category: 'Prescription Reading',
    question: 'What is prism and base direction?',
    answer: 'Prism corrects eye alignment issues (strabismus, double vision). It\'s measured in prism diopters (Δ). Base direction indicates where the thickest part of the prism points: BI (base in/nasal), BO (base out/temporal), BU (base up), BD (base down). Prism shifts the image to help eyes work together.'
  },
  {
    category: 'Prescription Reading',
    question: 'How long is an eyeglass prescription valid?',
    answer: 'Validity varies by state law, typically 1-2 years for eyeglasses (most states allow 2 years). Contact lens prescriptions are usually valid for 1 year. Always check your state regulations. Expired prescriptions cannot legally be filled - patients need a new exam.'
  },

  // Lensometry
  {
    category: 'Lensometry',
    question: 'How do I neutralize a lens on the lensometer?',
    answer: 'Place the lens against the lens stop with the back (concave) surface facing you. Focus the eyepiece first (on the reticle). Move the lens until one set of lines is clear - read sphere. Then focus until the perpendicular lines are clear - the difference is cylinder. Note axis from the axis wheel. For progressives, find the distance portion first (usually upper part of lens).'
  },
  {
    category: 'Lensometry',
    question: 'What is the difference between measuring in plus and minus cylinder?',
    answer: 'Both give the same optical result, just written differently. In minus cylinder: focus the most plus (or least minus) sphere line first, then focus the cylinder. In plus cylinder: focus the most minus (or least plus) sphere line first. Most labs and US optometrists use minus cylinder form. Always match the format requested.'
  },
  {
    category: 'Lensometry',
    question: 'How do I find the optical center of a lens?',
    answer: 'The optical center is where light passes through without deviation (no prism). On the lensometer, when the target is centered in the reticle with no displacement, you\'ve found the OC. Mark it with three dots (one center, two on the 180 line). This is critical for proper fitting - the OC should align with the patient\'s pupil.'
  },
  {
    category: 'Lensometry',
    question: 'How do I measure progressive lenses on a lensometer?',
    answer: 'Progressives have hidden markings. Find the distance reference point (DRP) using the laser engravings - usually small circles or logos. Measure distance power at the DRP. For near, locate the near reference point (typically 14-17mm below DRP, varies by design). The add power is the difference between near and distance readings.'
  },
  {
    category: 'Lensometry',
    question: 'How do I read prism on the lensometer?',
    answer: 'When the target is displaced from the center reticle, there\'s prism. The amount is read from the concentric circles (each circle = 1Δ typically). The direction is where the target appears displaced FROM center - if displaced nasally, it\'s base-out prism. Use the prism compensator dial if available for precise measurements.'
  },
  {
    category: 'Lensometry',
    question: 'Why are my lensometer readings inconsistent?',
    answer: 'Common causes: 1) Lens not seated properly against the stop. 2) Eyepiece not focused for your eye. 3) Measuring in the wrong zone (especially progressives). 4) Dirty lens or lensometer. 5) Not using the same cylinder convention. 6) Parallax error - eye not aligned with eyepiece. Always verify by re-measuring.'
  },

  // Keratometry
  {
    category: 'Keratometry',
    question: 'What does a keratometer measure?',
    answer: 'A keratometer (ophthalmometer) measures the curvature of the central cornea - specifically the anterior corneal surface radius. It provides K-readings in diopters or millimeters. These measurements are essential for contact lens fitting, detecting astigmatism, and IOL calculations. It measures approximately the central 3mm zone.'
  },
  {
    category: 'Keratometry',
    question: 'How do I use a manual keratometer?',
    answer: 'Steps: 1) Focus eyepiece on crosshairs. 2) Position patient with chin on rest, forehead against bar. 3) Align the mires (usually circles or plus signs) with the patient\'s cornea. 4) Superimpose the mires by adjusting horizontal and vertical drums. 5) Read the K-values and axis. The two meridians measured are typically the flattest and steepest.'
  },
  {
    category: 'Keratometry',
    question: 'What do K-readings tell me about astigmatism?',
    answer: 'The difference between the two K-readings indicates corneal astigmatism. Example: If K1 = 42.00D @ 180 and K2 = 44.00D @ 90, there\'s 2.00D of corneal astigmatism (with-the-rule, steeper vertically). Compare to refractive cylinder to determine corneal vs. lenticular astigmatism contribution.'
  },
  {
    category: 'Keratometry',
    question: 'What is "with-the-rule" vs "against-the-rule" astigmatism?',
    answer: 'With-the-rule (WTR): Steeper meridian is vertical (around 90°), common in younger patients. Corrected with minus cylinder axis near 180°. Against-the-rule (ATR): Steeper meridian is horizontal (around 180°), common in older patients. Corrected with minus cylinder axis near 90°. Oblique: Axes between 30-60° or 120-150°.'
  },
  {
    category: 'Keratometry',
    question: 'How do K-readings help with contact lens fitting?',
    answer: 'K-readings determine the base curve of the contact lens. For spherical RGPs: Start with a base curve near the flatter K. For soft lenses: K-readings help select between available base curves. High corneal astigmatism (>2.00D) may need toric contacts. The relationship between lens BC and K determines the fit (flat, steep, or aligned).'
  },

  // Slit Lamp
  {
    category: 'Slit Lamp',
    question: 'What is a slit lamp used for?',
    answer: 'A slit lamp (biomicroscope) provides magnified, illuminated views of the anterior eye structures: lids, lashes, conjunctiva, cornea, iris, lens, and anterior chamber. With additional lenses, it can view the posterior segment. It\'s essential for contact lens fitting, detecting pathology, foreign body removal, and detailed eye examination.'
  },
  {
    category: 'Slit Lamp',
    question: 'What are the main illumination techniques?',
    answer: 'Diffuse: Wide beam, low-medium mag for overview. Direct focal: Narrow beam on area of interest, parallelepiped for cornea depth. Indirect: Light adjacent to viewing area to see transparent structures. Retroillumination: Light bounced off iris/retina to silhouette opacities. Specular reflection: View endothelium by matching illumination and viewing angles. Sclerotic scatter: Light enters limbus to illuminate whole cornea.'
  },
  {
    category: 'Slit Lamp',
    question: 'How do I evaluate a contact lens fit with slit lamp?',
    answer: 'Assess: 1) Centration - lens should center over cornea. 2) Movement - should move 0.5-1mm with blink (soft) or 1-2mm (RGP). 3) Coverage - should fully cover cornea. 4) Fluorescein pattern (RGP) - even distribution indicates aligned fit. 5) Edge lift - appropriate peripheral clearance. 6) Comfort and vision. Look for complications: injection, staining, neovascularization.'
  },
  {
    category: 'Slit Lamp',
    question: 'What corneal conditions can I see with slit lamp?',
    answer: 'Many conditions: Abrasions/erosions (fluorescein staining), ulcers, infiltrates, edema (corneal haze, striae, folds), dystrophies, scars, neovascularization, foreign bodies, keratoconus (Vogt striae, Fleischer ring), dry eye (poor tear breakup, staining), and contact lens complications (3-9 staining, CLARE, microbial keratitis).'
  },
  {
    category: 'Slit Lamp',
    question: 'How do I use fluorescein with the slit lamp?',
    answer: 'Apply fluorescein strip to inferior fornix or drop NaFl solution. Use cobalt blue filter and yellow barrier (Wratten) filter for best visualization. Assess: Tear breakup time (TBUT) - should be >10 seconds. Corneal staining - indicates epithelial damage. Contact lens fit (RGP) - fluorescein pattern shows bearing and clearance areas. Wait 1-2 minutes for dye to spread evenly.'
  },

  // Frame Selection & Fitting
  {
    category: 'Frame Fitting',
    question: 'How do I measure pupillary distance (PD)?',
    answer: 'Monocular PD (preferred): Measure from center of bridge to each pupil separately while patient looks at your corresponding eye (to control convergence). Distance PD: Patient looks at distance target. Near PD: Patient looks at near target (usually 3mm less than distance). Use pupillometer or PD ruler. For progressives, monocular PDs are essential.'
  },
  {
    category: 'Frame Fitting',
    question: 'What measurements do I need for progressive lenses?',
    answer: 'Essential: Monocular PDs (distance), fitting height (from bottom of lens to pupil center), frame dimensions (A, B, DBL, ED). Optional but helpful: Vertex distance, pantoscopic tilt, face form wrap. Some digital designs need more parameters. Fitting height must be minimum 14-18mm depending on design. Mark pupil location with patient in natural head position.'
  },
  {
    category: 'Frame Fitting',
    question: 'How do I adjust a frame that\'s sitting crooked?',
    answer: 'Determine which side is higher. If right side is higher: Increase pantoscopic tilt on right temple OR decrease on left. Adjust temple bend location to be even. Check that nose pads are symmetrical. For asymmetric faces, may need to adjust temples to different angles. Heat plastic frames before bending. Make small adjustments and re-check.'
  },
  {
    category: 'Frame Fitting',
    question: 'How do I select a base curve for best cosmetics?',
    answer: 'Vogel\'s Rule: Base curve = (Sphere power / 2) + 6. Flatter base curves (lower numbers) look better cosmetically for high minus. Steeper curves work for plus powers. For wrap frames, steeper base curves are needed. Balance cosmetics with optical performance - very flat bases on strong minus can cause peripheral distortion.'
  },
  {
    category: 'Frame Fitting',
    question: 'What\'s the minimum fitting height for progressive lenses?',
    answer: 'Depends on the design: Standard progressives: 18mm minimum. Short corridor: 14-16mm minimum. Check manufacturer specs - fitting below minimum eliminates reading zone. Measure from pupil center to bottom of lens. For small frames, use short corridor designs. Some occupational designs have different requirements.'
  },

  // Troubleshooting Patient Complaints
  {
    category: 'Troubleshooting',
    question: 'Patient says their new glasses make them dizzy - what do I check?',
    answer: 'Systematic approach: 1) Verify the Rx against the lab order and original prescription. 2) Check OC placement matches PD. 3) Measure vertex distance. 4) Verify base curve isn\'t drastically different from old glasses. 5) For progressives, check fitting height and corridor design. 6) Compare to previous Rx - large changes cause adaptation issues. 7) Check for prism (intended or unwanted). Most issues resolve in 1-2 weeks; if not, investigate further.'
  },
  {
    category: 'Troubleshooting',
    question: 'Patient complains about blurry vision in new progressives - what\'s wrong?',
    answer: 'Common causes: 1) Wrong fitting height - reading zone too high or too low. 2) Wrong PD - causes swim effect and blur. 3) Design not matched to patient needs (corridor too short/long). 4) Patient not trained to use progressives properly. 5) Vertex distance changed significantly from refraction. 6) Rx error. 7) Frame adjusted incorrectly (too much pantoscopic tilt). Verify measurements and educate on head positioning.'
  },
  {
    category: 'Troubleshooting',
    question: 'Why does the patient see better with their old, weaker prescription?',
    answer: 'Possible reasons: 1) Adaptation - brain adjusted to old Rx, needs time for new. 2) Measurement error in new exam (check refraction). 3) Over-correction - especially common with accommodating patients. 4) Different frame/fit parameters. 5) Lens quality issue. 6) The patient\'s eyes actually changed back. Try reducing the new Rx slightly if over-minused, or give adaptation time (1-2 weeks for glasses, longer for contacts).'
  },
  {
    category: 'Troubleshooting',
    question: 'How do I handle a patient who insists on a specific frame that\'s wrong for their prescription?',
    answer: 'Educate diplomatically: Explain limitations (high minus = thick edges in oversized frames, high plus = thick center/heavy). Offer solutions: high-index materials, aspheric designs, edge polishing, roll-and-polish, smaller eye sizes in same style. Show thickness comparisons. For progressives in shallow frames, explain the reading area trade-off. Document that you counseled them if they proceed anyway.'
  },

  // Lens Materials & Treatments
  {
    category: 'Lenses',
    question: 'What\'s the difference between CR-39, polycarbonate, and high-index lenses?',
    answer: 'CR-39 (n=1.498): Best optics, most scratch-resistant of plastics, affordable, but thickest option. Polycarbonate (n=1.586): Impact-resistant (required for kids/sports), thinner, built-in UV, but softest (scratches easily), chromatic aberration. High-index (1.60-1.74): Thinnest, best for high Rx, but most reflections (needs AR), more brittle. Trivex: Like poly but better optics.'
  },
  {
    category: 'Lenses',
    question: 'When should I recommend anti-reflective coating?',
    answer: 'Almost always beneficial. Especially important for: High-index lenses (more reflections), night driving, computer use, cosmetic appearance, photography/video professionals, high prescriptions, and anyone bothered by glare. Modern AR includes oleophobic/hydrophobic layers for easier cleaning. Premium AR (Crizal, Zeiss) includes scratch resistance and warranties.'
  },
  {
    category: 'Lenses',
    question: 'What causes lenses to craze or crack?',
    answer: 'Crazing (fine surface cracks): Heat damage (car dashboard, dishwasher, hot water), harsh chemicals (alcohol, acetone, ammonia cleaners), stress from overtightened frames, poor quality coating adhesion. Prevention: Use proper lens cleaners, don\'t leave in hot car, clean with lukewarm water, keep frames properly adjusted. Crazing is not repairable - lenses must be replaced.'
  },
  {
    category: 'Lenses',
    question: 'What is chromatic aberration and which lenses have it?',
    answer: 'Chromatic aberration is color fringing caused when different wavelengths focus at different points - lower Abbe values mean more aberration. Polycarbonate (Abbe 30) has most. Trivex (Abbe 43) is much better. CR-39 (Abbe 58) and glass have excellent clarity. High-index varies (30-42). Patients sensitive to chromatic aberration may complain of color fringes, especially in periphery. Consider Trivex over poly for sensitive patients.'
  },

  // Contact Lenses
  {
    category: 'Contact Lenses',
    question: 'How do I convert a glasses prescription to contact lenses?',
    answer: 'For powers over ±4.00D, vertex distance compensation is needed. Contacts sit at 0mm vertex vs 12-14mm for glasses. Use formula: Fc = Fs/(1-d×Fs) where d is in meters. Minus powers decrease, plus powers increase when moving to contacts. Example: -8.00 glasses at 12mm ≈ -7.25 contact lens. Under ±4.00D, use same power.'
  },
  {
    category: 'Contact Lenses',
    question: 'What base curve should I select for soft contact lenses?',
    answer: 'Most soft lenses come in 8.4-8.6mm BC (limited options). Flatter K-readings may need flatter BC (8.6+), steeper Ks may need steeper BC (8.3-8.4). But soft lenses are flexible - BC is less critical than with RGPs. Judge the fit: Should center well, move slightly with blink, and be comfortable. If between sizes, slightly flatter is usually better for oxygen.'
  },
  {
    category: 'Contact Lenses',
    question: 'How do I troubleshoot a tight contact lens fit?',
    answer: 'Signs of tight fit: Minimal or no movement on blink, post-lens debris, injection at limbus, indentation ring after removal, discomfort worsening throughout day. Solutions: Try flatter base curve, smaller diameter, different material (lower modulus), different brand with different design. Reduce wearing time until refit. Educate patient on risks of overwear.'
  },

  // Business & Professional
  {
    category: 'Professional',
    question: 'What\'s the difference between ABO and NCLE certification?',
    answer: 'ABO (American Board of Opticianry) certifies for eyeglass dispensing - covers optics, frames, lenses, measurements, adjustments. NCLE (National Contact Lens Examiners) certifies for contact lens fitting - covers anatomy, fitting, solutions, complications. Many states require both for full scope practice. Both require passing exams and continuing education for renewal (every 3 years).'
  },
  {
    category: 'Professional',
    question: 'Is licensing required to be an optician?',
    answer: 'Varies by state. About 22 states require licensure for opticians. Requirements typically include: education/training hours, passing ABO/NCLE exams, supervised experience, and CE for renewal. Some states have no requirements. Contact lens fitting has additional regulations in most states. Always check your specific state board requirements.'
  }
]

const categories = [
  { id: 'all', name: 'All Questions', icon: HelpCircle },
  { id: 'Prescription Reading', name: 'Prescriptions', icon: FileText },
  { id: 'Lensometry', name: 'Lensometry', icon: Eye },
  { id: 'Keratometry', name: 'Keratometry', icon: Eye },
  { id: 'Slit Lamp', name: 'Slit Lamp', icon: Eye },
  { id: 'Frame Fitting', name: 'Frame Fitting', icon: Glasses },
  { id: 'Troubleshooting', name: 'Troubleshooting', icon: Wrench },
  { id: 'Lenses', name: 'Lens Materials', icon: Glasses },
  { id: 'Contact Lenses', name: 'Contact Lenses', icon: Eye },
  { id: 'Professional', name: 'Professional', icon: FileText },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = searchTerm === '' ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleItem = (index: number) => {
    const newOpen = new Set(openItems)
    if (newOpen.has(index)) {
      newOpen.delete(index)
    } else {
      newOpen.add(index)
    }
    setOpenItems(newOpen)
  }

  const expandAll = () => {
    setOpenItems(new Set(filteredFAQs.map((_, i) => i)))
  }

  const collapseAll = () => {
    setOpenItems(new Set())
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-600 to-teal-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Optician FAQ
            </h1>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Practical answers to common questions opticians face every day.
              From prescription reading to troubleshooting patient complaints.
            </p>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
              </p>
              <div className="flex gap-2">
                <button
                  onClick={expandAll}
                  className="text-sm text-green-600 hover:text-green-700"
                >
                  Expand All
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={collapseAll}
                  className="text-sm text-green-600 hover:text-green-700"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <span className="text-xs text-green-600 font-medium uppercase tracking-wide">
                        {faq.category}
                      </span>
                      <h3 className="font-semibold text-gray-900 mt-1">
                        {faq.question}
                      </h3>
                    </div>
                    {openItems.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                    )}
                  </button>

                  {openItems.has(index) && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">No questions found matching your search.</p>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                  className="mt-4 text-green-600 hover:text-green-700 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Master These Topics?
            </h2>
            <p className="text-gray-600 mb-6">
              Our comprehensive curriculum covers all these topics and more with detailed lessons and practice quizzes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Browse Courses
              </Link>
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Practice Calculations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
