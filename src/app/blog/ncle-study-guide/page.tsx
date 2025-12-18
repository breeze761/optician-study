import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, CheckCircle, BookOpen, Eye, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'NCLE Study Guide 2025 | Exam Prep',
  description: 'Complete NCLE exam study guide covering contact lens fitting, materials, care systems, troubleshooting, and practice questions.',
  keywords: 'NCLE study guide, NCLE exam topics, NCLE practice questions, contact lens certification, NCLE test prep, contact lens exam',
  alternates: {
    canonical: '/blog/ncle-study-guide',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NCLE Study Guide 2025: Everything You Need to Know",
  description: "Complete NCLE certification exam study guide with all contact lens topics and practice questions.",
  author: { "@type": "Organization", name: "OpticianStudy" },
  publisher: { "@type": "Organization", name: "OpticianStudy" },
  datePublished: "2025-01-10",
  dateModified: "2025-01-10",
}

export default function NCLEStudyGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">NCLE Study Guide</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">NCLE Exam</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />January 10, 2025</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />16 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              NCLE Study Guide 2025: Everything You Need to Know
            </h1>
            <p className="text-xl text-gray-600">
              Your comprehensive guide to contact lens fitting, care, and troubleshooting. Master every NCLE exam topic.
            </p>
          </header>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />What This Guide Covers
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-green-800">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Contact lens types, materials, and parameters</span>
              </li>
              <li className="flex items-start gap-2 text-green-800">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Fitting procedures for soft and RGP lenses</span>
              </li>
              <li className="flex items-start gap-2 text-green-800">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Care systems and patient education</span>
              </li>
              <li className="flex items-start gap-2 text-green-800">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Troubleshooting and complications</span>
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">NCLE Exam Overview</h2>
              <div className="bg-gray-50 border rounded-lg p-4 mb-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Format</p>
                    <p className="font-semibold text-gray-900">Computer-based, multiple choice</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Questions</p>
                    <p className="font-semibold text-gray-900">150 (125 scored + 25 pretest)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Time Limit</p>
                    <p className="font-semibold text-gray-900">3 hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Passing Score</p>
                    <p className="font-semibold text-gray-900">Scaled score of 300+</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topic 1: Contact Lens Fitting (~35%)</h2>
              <p className="text-gray-700 mb-4">
                The largest section focuses on proper lens selection and fitting procedures.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Pre-Fitting Evaluation</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Patient history and lifestyle assessment</li>
                    <li>• Corneal measurements (K readings)</li>
                    <li>• HVID (horizontal visible iris diameter)</li>
                    <li>• Pupil size in different lighting</li>
                    <li>• Tear film evaluation</li>
                    <li>• Lid anatomy and tension</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Soft Lens Fitting</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Base curve selection (typically 8.3-8.9mm)</li>
                    <li>• Diameter selection (typically 13.8-14.5mm)</li>
                    <li>• Coverage should extend 1-2mm beyond limbus</li>
                    <li>• Adequate movement (0.25-0.5mm on blink)</li>
                    <li>• Good centration over cornea</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">RGP Lens Fitting</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Base curve selection based on K readings</li>
                    <li>• Diameter typically 9.0-9.6mm</li>
                    <li>• Fluorescein pattern evaluation</li>
                    <li>• Alignment fit vs. slight apical clearance</li>
                    <li>• Edge lift assessment</li>
                    <li>• Adequate movement (1-2mm on blink)</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Toric Lens Fitting</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• When to prescribe: cylinder ≥ 0.75D</li>
                    <li>• Stabilization methods: prism ballast, thin zones</li>
                    <li>• LARS rule for axis adjustment</li>
                    <li>• Rotation assessment and compensation</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Multifocal Contact Lenses</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Simultaneous vision designs (center-near, center-distance)</li>
                    <li>• Alternating/translating designs</li>
                    <li>• Monovision as an alternative</li>
                    <li>• Managing patient expectations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                  <Eye className="w-5 h-5" />Key Formulas & Rules
                </h3>
                <ul className="space-y-2 text-yellow-800 text-sm">
                  <li>• <strong>LARS Rule:</strong> Left Add, Right Subtract (for toric axis adjustment)</li>
                  <li>• <strong>Flat K + 0.50mm</strong> = Initial RGP base curve (general guideline)</li>
                  <li>• <strong>SAM-FAP:</strong> Steeper Add Minus, Flatter Add Plus (for over-refraction)</li>
                  <li>• <strong>Vertex Distance:</strong> Compensate Rx for powers over ±4.00D</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topic 2: Contact Lens Materials & Design (~30%)</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Soft Lens Materials</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm mt-2">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-1">Material</th>
                          <th className="text-left py-1">Dk</th>
                          <th className="text-left py-1">Water Content</th>
                          <th className="text-left py-1">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-b">
                          <td className="py-1">HEMA (Hydrogel)</td>
                          <td className="py-1">8-20</td>
                          <td className="py-1">38-55%</td>
                          <td className="py-1">Traditional, affordable</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-1">High Water Hydrogel</td>
                          <td className="py-1">20-35</td>
                          <td className="py-1">55-75%</td>
                          <td className="py-1">More oxygen, may dehydrate</td>
                        </tr>
                        <tr>
                          <td className="py-1">Silicone Hydrogel</td>
                          <td className="py-1">60-175</td>
                          <td className="py-1">24-48%</td>
                          <td className="py-1">Highest Dk, extended wear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">RGP Materials</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>PMMA:</strong> Original material, no oxygen permeability (rarely used)</li>
                    <li>• <strong>Silicone Acrylate:</strong> Dk 12-50, good wettability</li>
                    <li>• <strong>Fluorosilicone Acrylate:</strong> Dk 50-200, best oxygen transmission</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Understanding Dk and Dk/t</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Dk:</strong> Oxygen permeability of the material</li>
                    <li>• <strong>Dk/t:</strong> Oxygen transmissibility (accounts for lens thickness)</li>
                    <li>• Daily wear minimum: Dk/t of 24</li>
                    <li>• Extended wear minimum: Dk/t of 87</li>
                    <li>• Higher Dk/t = healthier cornea</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Lens Parameters</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Base Curve (BC):</strong> Radius of curvature, measured in mm</li>
                    <li>• <strong>Diameter (DIA):</strong> Overall lens size in mm</li>
                    <li>• <strong>Power:</strong> Sphere, cylinder, axis</li>
                    <li>• <strong>Center Thickness (CT):</strong> Affects Dk/t and comfort</li>
                    <li>• <strong>Optical Zone (OZ):</strong> Area containing the Rx</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topic 3: Care & Maintenance (~20%)</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Care System Types</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Multi-Purpose Solution (MPS):</strong> Clean, rinse, disinfect, store in one</li>
                    <li>• <strong>Hydrogen Peroxide:</strong> Powerful disinfection, requires neutralization</li>
                    <li>• <strong>Saline:</strong> Rinsing only, no disinfection</li>
                    <li>• <strong>Daily Cleaners:</strong> Surfactant cleaners for deposits</li>
                    <li>• <strong>Enzymatic Cleaners:</strong> Protein removal (weekly)</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Disinfection Agents</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>PHMB (Polyhexamethylene biguanide):</strong> Most common in MPS</li>
                    <li>• <strong>Polyquad:</strong> Gentle, good for sensitive eyes</li>
                    <li>• <strong>Hydrogen Peroxide 3%:</strong> Most effective, requires neutralization</li>
                    <li>• <strong>Povidone Iodine:</strong> Older system, rarely used now</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Patient Education Topics</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Proper insertion and removal technique</li>
                    <li>• Hand washing before handling lenses</li>
                    <li>• Never use tap water with contacts</li>
                    <li>• Replacement schedule compliance</li>
                    <li>• Case cleaning and replacement (every 3 months)</li>
                    <li>• When to remove lenses (redness, pain, blur)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />Critical Safety Points
                </h3>
                <ul className="space-y-1 text-red-800 text-sm">
                  <li>• <strong>Never</strong> use tap water—risk of Acanthamoeba</li>
                  <li>• <strong>Never</strong> "top off" solution—always use fresh</li>
                  <li>• <strong>Never</strong> sleep in lenses not approved for overnight wear</li>
                  <li>• <strong>Never</strong> share contact lenses</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topic 4: Anatomy & Pathology (~15%)</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Corneal Anatomy</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Epithelium:</strong> Outermost layer, 5-6 cell layers, regenerates quickly</li>
                    <li>• <strong>Bowman's Layer:</strong> Acellular, doesn't regenerate</li>
                    <li>• <strong>Stroma:</strong> 90% of corneal thickness, collagen fibers</li>
                    <li>• <strong>Descemet's Membrane:</strong> Basement membrane of endothelium</li>
                    <li>• <strong>Endothelium:</strong> Single layer, pumps fluid, doesn't regenerate</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Lens Complications</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Corneal Neovascularization:</strong> Blood vessel growth from hypoxia</li>
                    <li>• <strong>Giant Papillary Conjunctivitis (GPC):</strong> Large bumps under upper lid</li>
                    <li>• <strong>Corneal Ulcer:</strong> Serious infection, immediate referral</li>
                    <li>• <strong>CLARE:</strong> Contact Lens Acute Red Eye</li>
                    <li>• <strong>Corneal Edema:</strong> Swelling from lack of oxygen</li>
                    <li>• <strong>Dry Eye:</strong> Reduced tear production or stability</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Tear Film</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Lipid Layer:</strong> Outermost, from meibomian glands, prevents evaporation</li>
                    <li>• <strong>Aqueous Layer:</strong> Middle, from lacrimal gland, provides nutrients</li>
                    <li>• <strong>Mucin Layer:</strong> Innermost, from goblet cells, helps tear spread</li>
                    <li>• TBUT (Tear Break-Up Time): Normal is 10+ seconds</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting Guide</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Common Problems & Solutions</h3>
                  <div className="space-y-3 text-sm">
                    <div className="border-b pb-2">
                      <p className="font-medium text-gray-900">"Lens feels dry"</p>
                      <p className="text-gray-600">→ Check Dk/t, water content, rewetting drops, wear time</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium text-gray-900">"Vision fluctuates with blinking"</p>
                      <p className="text-gray-600">→ Poor fit, excess movement, dry lens, deposits</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium text-gray-900">"Lens rotates (toric)"</p>
                      <p className="text-gray-600">→ Check fit, may need different stabilization design</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium text-gray-900">"Red eyes after wear"</p>
                      <p className="text-gray-600">→ Hypoxia, solution sensitivity, overwear, infection</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">"Can't see up close (multifocal)"</p>
                      <p className="text-gray-600">→ Increase add power, try different design, check centration</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-green-600 text-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl mb-2">Master the NCLE Exam</h3>
              <p className="text-green-100 mb-4">
                Our comprehensive course covers every NCLE topic with interactive lessons and contact lens case studies.
              </p>
              <Link href="/subscribe" className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Start Free Chapter
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Study Tips for Success</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Know your materials:</strong> Understand Dk, Dk/t, and when to use different materials.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Master LARS:</strong> Toric rotation compensation is heavily tested.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Study complications:</strong> Know signs, symptoms, and when to refer.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Understand care systems:</strong> Know which solutions work with which lenses.</p>
                </div>
              </div>
            </section>
          </div>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/how-to-study-for-ncle-exam" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How to Study for the NCLE Exam</h3>
                <p className="text-gray-600 text-sm">Complete study strategies and timeline</p>
              </Link>
              <Link href="/blog/how-hard-is-abo-ncle-exam" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How Hard is the ABO & NCLE Exam?</h3>
                <p className="text-gray-600 text-sm">Pass rates and difficulty assessment</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
