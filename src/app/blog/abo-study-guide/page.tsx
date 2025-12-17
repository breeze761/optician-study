import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, CheckCircle, BookOpen, Calculator, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ABO Study Guide 2025: Topics, Practice Questions & Tips',
  description: 'Comprehensive ABO exam study guide covering all test topics. Includes optics formulas, lens types, frame materials, practice questions, and proven study strategies.',
  keywords: 'ABO study guide, ABO exam topics, ABO practice questions, ABO test prep, optician study guide, ABO certification guide',
  alternates: {
    canonical: '/blog/abo-study-guide',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ABO Study Guide 2025: Topics, Practice Questions & Tips",
  description: "Complete ABO certification exam study guide with all topics, formulas, and practice questions.",
  author: { "@type": "Organization", name: "OpticianStudy" },
  publisher: { "@type": "Organization", name: "OpticianStudy" },
  datePublished: "2025-01-11",
  dateModified: "2025-01-11",
}

export default function ABOStudyGuidePage() {
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
              <span className="text-gray-900">ABO Study Guide</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">ABO Exam</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />January 11, 2025</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ABO Study Guide 2025: Topics, Practice Questions & Tips
            </h1>
            <p className="text-xl text-gray-600">
              Your comprehensive guide to every topic on the ABO exam. Master the content and pass with confidence.
            </p>
          </header>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />What This Guide Covers
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>All ABO exam content areas with key concepts</span>
              </li>
              <li className="flex items-start gap-2 text-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Essential formulas and calculations you must know</span>
              </li>
              <li className="flex items-start gap-2 text-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Sample practice questions for each topic</span>
              </li>
              <li className="flex items-start gap-2 text-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Tips for the most challenging exam areas</span>
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ABO Exam Overview</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topic 1: Ophthalmic Optics (~30%)</h2>
              <p className="text-gray-700 mb-4">
                This is the largest and most math-heavy section. Master these concepts:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Lens Power & Prescriptions</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Sphere, cylinder, and axis notation</li>
                    <li>• Plus and minus cylinder transposition</li>
                    <li>• Reading and interpreting prescriptions</li>
                    <li>• Add power for multifocals</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Prism</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Prism diopters and base direction</li>
                    <li>• Prentice's Rule: Δ = dF (prism = decentration × power)</li>
                    <li>• Induced prism from decentration</li>
                    <li>• Compounding and resolving prism</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Vertex Distance</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Why vertex distance matters for high powers</li>
                    <li>• Compensated power formula</li>
                    <li>• When to apply vertex distance corrections</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                  <Calculator className="w-5 h-5" />Essential Formulas
                </h3>
                <ul className="space-y-2 text-yellow-800 text-sm font-mono">
                  <li>• <strong>Prentice's Rule:</strong> Δ = d × F (d in cm)</li>
                  <li>• <strong>Vertex Distance:</strong> F' = F / (1 - dF) (d in meters)</li>
                  <li>• <strong>Transposition:</strong> Add cyl to sphere, change cyl sign, add 90° to axis</li>
                  <li>• <strong>Resultant Prism:</strong> √(H² + V²)</li>
                </ul>
              </div>

              <div className="bg-gray-100 border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sample Question</h3>
                <p className="text-gray-700 mb-2">A lens with power +4.00D is decentered 8mm from the optical center. What is the induced prism?</p>
                <p className="text-gray-600 text-sm"><strong>Answer:</strong> Using Prentice's Rule: Δ = 0.8 × 4.00 = 3.2Δ</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topic 2: Lens Types & Materials (~25%)</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Single Vision Lenses</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Spherical vs. aspheric designs</li>
                    <li>• Base curve selection</li>
                    <li>• Optical center placement</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Multifocal Lenses</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Bifocal types: FT-28, FT-35, Executive, Round</li>
                    <li>• Trifocal designs and intermediate powers</li>
                    <li>• Segment height and inset measurements</li>
                    <li>• Image jump and how to minimize it</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Progressive Addition Lenses (PALs)</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Corridor length options (short, standard, long)</li>
                    <li>• Fitting height requirements</li>
                    <li>• Peripheral distortion zones</li>
                    <li>• Measuring and marking PALs</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Lens Materials</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm mt-2">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-1">Material</th>
                          <th className="text-left py-1">Index</th>
                          <th className="text-left py-1">Abbe</th>
                          <th className="text-left py-1">Best For</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-b">
                          <td className="py-1">CR-39</td>
                          <td className="py-1">1.498</td>
                          <td className="py-1">58</td>
                          <td className="py-1">Low Rx, best optics</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-1">Polycarbonate</td>
                          <td className="py-1">1.586</td>
                          <td className="py-1">30</td>
                          <td className="py-1">Safety, kids, sports</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-1">Trivex</td>
                          <td className="py-1">1.532</td>
                          <td className="py-1">43</td>
                          <td className="py-1">Light weight + optics</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-1">Hi-Index 1.67</td>
                          <td className="py-1">1.67</td>
                          <td className="py-1">32</td>
                          <td className="py-1">High Rx, thin lenses</td>
                        </tr>
                        <tr>
                          <td className="py-1">Hi-Index 1.74</td>
                          <td className="py-1">1.74</td>
                          <td className="py-1">33</td>
                          <td className="py-1">Very high Rx</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topic 3: Frames & Fitting (~20%)</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Frame Measurements</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Eye size (A measurement)</li>
                    <li>• Bridge size (DBL)</li>
                    <li>• Temple length</li>
                    <li>• Frame PD = A + DBL</li>
                    <li>• Effective diameter (ED)</li>
                    <li>• B measurement (vertical)</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Frame Materials</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Zyl (Cellulose Acetate):</strong> Most common plastic, adjustable with heat</li>
                    <li>• <strong>Titanium:</strong> Lightweight, hypoallergenic, strong</li>
                    <li>• <strong>Memory Metal:</strong> Flexible, returns to shape</li>
                    <li>• <strong>Monel:</strong> Corrosion-resistant metal alloy</li>
                    <li>• <strong>Stainless Steel:</strong> Durable, affordable metal</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Fitting Measurements</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Monocular PD (distance and near)</li>
                    <li>• Segment height for bifocals/trifocals</li>
                    <li>• Fitting height for progressives</li>
                    <li>• Pantoscopic tilt (8-12° ideal)</li>
                    <li>• Face form/wrap angle</li>
                    <li>• Vertex distance (typically 12-14mm)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topic 4: Lens Treatments & Coatings (~15%)</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Anti-Reflective (AR) Coatings</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Reduces reflections from 8% to less than 1%</li>
                    <li>• Improves visual clarity and cosmetics</li>
                    <li>• Essential for high-index lenses</li>
                    <li>• Multi-layer coatings for best performance</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Scratch-Resistant Coatings</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Hard coat applied to plastic lenses</li>
                    <li>• Does not make lenses scratch-proof</li>
                    <li>• Applied before AR coating</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">UV Protection</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• UVA (320-400nm) and UVB (280-320nm)</li>
                    <li>• Polycarbonate blocks UV naturally</li>
                    <li>• CR-39 requires UV coating</li>
                    <li>• 100% UV protection = blocks up to 400nm</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Photochromic Lenses</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Darken in UV light, clear indoors</li>
                    <li>• Temperature affects activation</li>
                    <li>• Don't darken well in cars (UV blocked by windshield)</li>
                    <li>• Available in gray and brown tints</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topic 5: Dispensing & Patient Care (~10%)</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Frame Adjustments</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Temple spread and pantoscopic tilt</li>
                    <li>• Nose pad adjustments</li>
                    <li>• Temple length and bend point</li>
                    <li>• Face form adjustment</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Troubleshooting Common Complaints</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• "Things look tilted" → Check axis alignment</li>
                    <li>• "Headaches" → Check PD, seg height, or add power</li>
                    <li>• "Can't read" → Verify add power, seg height</li>
                    <li>• "Frames slide down" → Adjust temples, nose pads</li>
                    <li>• "Double vision" → Check prism, PD</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Verification</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Using a lensometer to verify Rx</li>
                    <li>• Checking optical center placement</li>
                    <li>• Measuring segment height</li>
                    <li>• Inspecting for defects</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />Most Commonly Missed Topics
              </h3>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">1.</span>
                  <span>Cylinder transposition—practice until it's automatic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">2.</span>
                  <span>Prentice's Rule calculations with induced prism</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">3.</span>
                  <span>Progressive lens fitting heights and corridor lengths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">4.</span>
                  <span>Material properties (index, Abbe value, impact resistance)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">5.</span>
                  <span>Vertex distance corrections for high prescriptions</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 text-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl mb-2">Master the ABO Exam</h3>
              <p className="text-blue-100 mb-4">
                Our comprehensive course covers every ABO topic with interactive lessons, practice questions, and detailed explanations.
              </p>
              <Link href="/subscribe" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Chapter
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Study Tips for Success</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Focus on calculations:</strong> Practice Prentice's Rule and transposition daily until they're second nature.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Know your materials:</strong> Create flashcards for lens material properties (index, Abbe, applications).</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Understand progressives:</strong> This is a heavily tested area—know fitting heights, corridor lengths, and troubleshooting.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Take practice tests:</strong> Simulate exam conditions with timed practice tests.</p>
                </div>
              </div>
            </section>
          </div>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/how-to-study-for-abo-exam" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How to Study for the ABO Exam</h3>
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
