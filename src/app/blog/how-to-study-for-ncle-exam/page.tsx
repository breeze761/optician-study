import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, CheckCircle, BookOpen, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Study for the NCLE Exam: Complete 2025 Guide',
  description: 'Pass the NCLE contact lens certification exam with our proven study strategies. Includes study schedule, practice tips, and test day advice. Updated for 2025.',
  keywords: 'NCLE exam study, how to study for NCLE, NCLE exam prep, NCLE certification study guide, pass NCLE exam, contact lens exam',
  alternates: {
    canonical: '/blog/how-to-study-for-ncle-exam',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Study for the NCLE Exam: Complete 2025 Guide",
  description: "Pass the NCLE contact lens certification exam with proven study strategies.",
  author: { "@type": "Organization", name: "OpticianStudy" },
  publisher: { "@type": "Organization", name: "OpticianStudy" },
  datePublished: "2025-01-14",
  dateModified: "2025-01-14",
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
              <span className="text-gray-900">How to Study for NCLE Exam</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">NCLE Exam</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />January 14, 2025</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Study for the NCLE Exam: Complete 2025 Guide
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to pass the National Contact Lens Examiners certification on your first attempt.
            </p>
          </header>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />Key Takeaways
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-green-800">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Plan for 6-10 weeks of study, focusing on contact lens fitting and care</span>
              </li>
              <li className="flex items-start gap-2 text-green-800">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Master base curve, diameter, and power calculations</span>
              </li>
              <li className="flex items-start gap-2 text-green-800">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Know contact lens materials, care systems, and troubleshooting</span>
              </li>
              <li className="flex items-start gap-2 text-green-800">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Practice with NCLE-specific questions and scenarios</span>
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the NCLE Exam?</h2>
              <p className="text-gray-700 mb-4">
                The <strong>National Contact Lens Examiners (NCLE) certification</strong> demonstrates your competency in
                fitting, dispensing, and caring for contact lens patients. It's the gold standard for contact lens professionals.
              </p>
              <div className="bg-gray-50 border rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">NCLE Exam Quick Facts:</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Format:</strong> Computer-based, multiple choice</li>
                  <li>• <strong>Questions:</strong> 150 questions (125 scored, 25 pretest)</li>
                  <li>• <strong>Time Limit:</strong> 3 hours</li>
                  <li>• <strong>Passing Score:</strong> Scaled score of 300+</li>
                  <li>• <strong>Cost:</strong> $125 for first attempt</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">NCLE Exam Content Breakdown</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">Contact Lens Fitting</h3>
                    <span className="text-green-600 font-bold">~35%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Patient evaluation, lens selection, fitting procedures, troubleshooting</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">Contact Lens Design & Materials</h3>
                    <span className="text-green-600 font-bold">~30%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Soft, RGP, specialty lenses, materials, parameters</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">Care & Maintenance</h3>
                    <span className="text-green-600 font-bold">~20%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Solution systems, cleaning, disinfection, patient education</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">Anatomy & Pathology</h3>
                    <span className="text-green-600 font-bold">~15%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Corneal anatomy, complications, contraindications</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8-Week NCLE Study Plan</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Weeks 1-2: Foundations</h3>
                  <p className="text-gray-600">Corneal anatomy, tear film, refractive errors, contact lens basics</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Weeks 3-4: Lens Types & Fitting</h3>
                  <p className="text-gray-600">Soft lenses, RGP, toric, multifocal fitting principles</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Weeks 5-6: Care Systems & Troubleshooting</h3>
                  <p className="text-gray-600">Solution types, cleaning protocols, common problems</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Weeks 7-8: Review & Practice Tests</h3>
                  <p className="text-gray-600">Full practice exams, weak area review, test strategies</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top NCLE Study Tips</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Master Base Curve Selection</h3>
                    <p className="text-gray-600">Know how K readings relate to base curve choices for different lens types.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Learn the Troubleshooting Flowcharts</h3>
                    <p className="text-gray-600">Know how to diagnose and solve common contact lens problems.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Understand Care System Compatibility</h3>
                    <p className="text-gray-600">Know which solutions work with which lens materials.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Practice Parameter Calculations</h3>
                    <p className="text-gray-600">Vertex distance conversions, toric calculations, and over-refraction.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-green-600 text-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl mb-2">Start Your NCLE Prep Today</h3>
              <p className="text-green-100 mb-4">
                Our comprehensive course covers all NCLE exam topics with interactive lessons and practice questions.
              </p>
              <Link href="/subscribe" className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Start Free Chapter
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Should I take the ABO or NCLE first?</h3>
                  <p className="text-gray-600">Most people take the ABO first since spectacle dispensing is more foundational. However, if you work primarily with contact lenses, you can take the NCLE first.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Is the NCLE harder than the ABO?</h3>
                  <p className="text-gray-600">They're different, not necessarily harder. The NCLE is more specialized and requires specific contact lens knowledge. Many find the ABO harder due to more math.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Do I need hands-on experience to pass the NCLE?</h3>
                  <p className="text-gray-600">While not required, practical experience helps tremendously. If you don't have experience, focus extra time on fitting scenarios and troubleshooting.</p>
                </div>
              </div>
            </section>
          </div>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/ncle-study-guide" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">NCLE Study Guide 2025</h3>
                <p className="text-gray-600 text-sm">Complete guide with all NCLE topics covered</p>
              </Link>
              <Link href="/blog/how-to-study-for-abo-exam" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How to Study for the ABO Exam</h3>
                <p className="text-gray-600 text-sm">Complete ABO preparation guide</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
