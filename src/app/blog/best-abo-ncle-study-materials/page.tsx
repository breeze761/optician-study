import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, CheckCircle, BookOpen, Star, DollarSign, Laptop } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best ABO & NCLE Study Materials 2025: Books, Courses & Resources',
  description: 'Honest reviews of the top ABO and NCLE study materials. Compare books, online courses, practice tests, and free resources to find the best fit for your learning style.',
  keywords: 'ABO study materials, NCLE study materials, optician study books, ABO practice test, NCLE practice test, optician certification prep',
  alternates: {
    canonical: '/blog/best-abo-ncle-study-materials',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best ABO & NCLE Study Materials 2025: Books, Courses & Resources",
  description: "Comprehensive review of the best study materials for ABO and NCLE certification exams.",
  author: { "@type": "Organization", name: "OpticianStudy" },
  publisher: { "@type": "Organization", name: "OpticianStudy" },
  datePublished: "2025-01-09",
  dateModified: "2025-01-09",
}

export default function StudyMaterialsPage() {
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
              <span className="text-gray-900">Best ABO & NCLE Study Materials</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">Resources</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />January 9, 2025</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best ABO & NCLE Study Materials: Books, Courses & Resources
            </h1>
            <p className="text-xl text-gray-600">
              Honest reviews of the top study materials to help you pass your optician certification exams.
            </p>
          </header>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-orange-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />Quick Recommendations
            </h2>
            <div className="space-y-2">
              <p className="text-orange-800"><strong>Best Overall:</strong> Online course + practice tests + System textbook</p>
              <p className="text-orange-800"><strong>Budget Option:</strong> Free resources + used textbook + practice tests</p>
              <p className="text-orange-800"><strong>Fast Track:</strong> Intensive online course with practice exams</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Evaluated Materials</h2>
              <p className="text-gray-700 mb-4">
                We assessed each resource based on content coverage, accuracy, price, user reviews, and how well it aligns
                with current ABO and NCLE exam content. We've talked to hundreds of opticians about what worked for them.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Courses</h2>

              <div className="space-y-6">
                <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">OpticianStudy</h3>
                      <p className="text-gray-600 text-sm">Comprehensive ABO & NCLE Prep</p>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-medium">Editor's Choice</span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>52 chapters covering all ABO & NCLE topics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>300+ interactive lessons with visuals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>500+ practice questions with explanations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Progress tracking and study plans</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700"><DollarSign className="w-4 h-4 inline" />$9.95/mo or $79/year</span>
                    <Link href="/subscribe" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                      Start Free Chapter
                    </Link>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Laramy-K Optical</h3>
                  <p className="text-gray-600 text-sm mb-2">In-person and online workshops</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm mb-4">
                    <li>• Well-established, industry-recognized program</li>
                    <li>• Hands-on learning options available</li>
                    <li>• Good for visual/kinesthetic learners</li>
                    <li>• Higher price point</li>
                  </ul>
                  <span className="text-gray-700"><DollarSign className="w-4 h-4 inline" />$200-500+ depending on course</span>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">OAA (Opticians Association of America)</h3>
                  <p className="text-gray-600 text-sm mb-2">Career development courses</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm mb-4">
                    <li>• Official industry organization</li>
                    <li>• CE credit courses available</li>
                    <li>• Membership benefits and networking</li>
                    <li>• More focused on practicing opticians</li>
                  </ul>
                  <span className="text-gray-700"><DollarSign className="w-4 h-4 inline" />Membership + course fees</span>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Textbooks</h2>

              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">System for Ophthalmic Dispensing (Brooks & Borish)</h3>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Industry Standard</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">The definitive textbook for optician education</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Comprehensive coverage of all dispensing topics</li>
                    <li>• Used by most optician training programs</li>
                    <li>• Detailed explanations and illustrations</li>
                    <li>• Dense—best used as a reference alongside other materials</li>
                  </ul>
                  <p className="text-gray-700 mt-2"><DollarSign className="w-4 h-4 inline" />$80-150 (new), $40-80 (used)</p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Clinical Optics (Troy Fannin)</h3>
                  <p className="text-gray-600 text-sm mb-2">Great for understanding optical principles</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Clear explanations of optics concepts</li>
                    <li>• Good illustrations and diagrams</li>
                    <li>• Helpful for ABO math sections</li>
                  </ul>
                  <p className="text-gray-700 mt-2"><DollarSign className="w-4 h-4 inline" />$60-100</p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Contact Lenses (Anthony Phillips)</h3>
                  <p className="text-gray-600 text-sm mb-2">Essential for NCLE preparation</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Comprehensive contact lens coverage</li>
                    <li>• Fitting procedures and troubleshooting</li>
                    <li>• Updated information on materials</li>
                  </ul>
                  <p className="text-gray-700 mt-2"><DollarSign className="w-4 h-4 inline" />$70-120</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Tests</h2>
              <p className="text-gray-700 mb-4">
                Practice tests are <strong>essential</strong> for exam success. They help you identify weak areas
                and get comfortable with the question format.
              </p>

              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">ABO-NCLE Official Practice Tests</h3>
                  <p className="text-gray-600 text-sm mb-2">From the exam creators</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Most accurate representation of actual exam</li>
                    <li>• Limited number of questions</li>
                    <li>• Available through ABO-NCLE website</li>
                  </ul>
                  <p className="text-gray-700 mt-2"><DollarSign className="w-4 h-4 inline" />~$30 each</p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">OpticianStudy Practice Questions</h3>
                  <p className="text-gray-600 text-sm mb-2">500+ questions with detailed explanations</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Questions aligned with current exam content</li>
                    <li>• Detailed explanations for every answer</li>
                    <li>• Track progress and identify weak areas</li>
                    <li>• Included with subscription</li>
                  </ul>
                  <p className="text-gray-700 mt-2"><DollarSign className="w-4 h-4 inline" />Included in subscription</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Resources</h2>

              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Laptop className="w-5 h-5 text-blue-600" />
                    YouTube Channels
                  </h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Various optician educators share free content</li>
                    <li>• Good for visual learners</li>
                    <li>• Quality varies—stick to reputable channels</li>
                    <li>• Search "ABO exam prep" or "optician training"</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">ABO-NCLE Website</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Official exam content outlines</li>
                    <li>• Exam registration information</li>
                    <li>• Candidate handbook with study tips</li>
                    <li>• Sample questions</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Manufacturer Training</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Essilor, Zeiss, and other lens companies offer free courses</li>
                    <li>• Contact lens manufacturers provide fitting guides</li>
                    <li>• Some count toward CE credits</li>
                    <li>• Product-focused but educational</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Study Combinations</h2>

              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">Best Value Combo</h3>
                  <ul className="space-y-1 text-green-800 text-sm">
                    <li>1. OpticianStudy online course ($79/year)</li>
                    <li>2. Used System textbook (~$50)</li>
                    <li>3. Official practice test ($30)</li>
                    <li><strong>Total: ~$160</strong></li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Budget-Friendly Combo</h3>
                  <ul className="space-y-1 text-blue-800 text-sm">
                    <li>1. Free YouTube videos and manufacturer training</li>
                    <li>2. Library copy of System textbook (free)</li>
                    <li>3. Official practice test ($30)</li>
                    <li><strong>Total: ~$30</strong></li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 mb-2">Comprehensive Combo</h3>
                  <ul className="space-y-1 text-purple-800 text-sm">
                    <li>1. OpticianStudy online course ($79/year)</li>
                    <li>2. New System textbook ($120)</li>
                    <li>3. Contact Lens textbook for NCLE ($90)</li>
                    <li>4. Both official practice tests ($60)</li>
                    <li><strong>Total: ~$350</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-blue-600 text-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl mb-2">Ready to Start Studying?</h3>
              <p className="text-blue-100 mb-4">
                Try our first chapter free. See why OpticianStudy is trusted by thousands of aspiring opticians.
              </p>
              <Link href="/subscribe" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Chapter
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Choosing Materials</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Consider your learning style:</strong> Visual learners benefit from videos, while readers may prefer textbooks.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Check publication dates:</strong> Optics doesn't change, but lens materials and designs do. Use current resources.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Don't overbuy:</strong> One good course plus practice tests is often enough. More materials doesn't mean better results.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Prioritize practice tests:</strong> These are the most important preparation tool. Don't skip them.</p>
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
