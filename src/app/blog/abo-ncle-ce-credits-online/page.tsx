import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, CheckCircle, Award, DollarSign, Laptop, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Get ABO & NCLE CE Credits Online (2025 Guide)',
  description: 'Complete guide to earning ABO and NCLE continuing education credits online. Approved providers, costs, requirements, and how to maintain your optician certification.',
  keywords: 'ABO CE credits, NCLE CE credits, optician continuing education, ABO NCLE renewal, optician CE online, optical CE credits',
  alternates: {
    canonical: '/blog/abo-ncle-ce-credits-online',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get ABO & NCLE CE Credits Online (2025 Guide)",
  description: "Complete guide to earning ABO and NCLE continuing education credits online.",
  author: { "@type": "Organization", name: "OpticianStudy" },
  publisher: { "@type": "Organization", name: "OpticianStudy" },
  datePublished: "2025-01-07",
  dateModified: "2025-01-07",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many CE credits do I need to maintain ABO certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need 18 ABO-approved CE credits every 3 years to maintain your ABO certification. At least 6 credits must be in ophthalmic optics."
      }
    },
    {
      "@type": "Question",
      name: "Can I complete all my CE credits online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all ABO and NCLE CE requirements can be fulfilled through approved online courses. Many opticians prefer this flexible option."
      }
    },
    {
      "@type": "Question",
      name: "What happens if I don't complete my CE credits on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your certification will lapse if you don't complete CE requirements by your renewal deadline. You may need to pay late fees or retake certification exams to reinstate."
      }
    }
  ]
}

export default function CECreditsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">ABO & NCLE CE Credits Online</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">Certification</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />January 7, 2025</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get ABO & NCLE CE Credits Online (2025 Guide)
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about earning continuing education credits to maintain your optician certification.
            </p>
          </header>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-teal-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />CE Requirements at a Glance
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-blue-700 mb-2">ABO Certification</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>18 credits</strong> every 3 years</li>
                  <li>• At least <strong>6 credits</strong> in ophthalmic optics</li>
                  <li>• Renewal fee: ~$50</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-green-700 mb-2">NCLE Certification</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>18 credits</strong> every 3 years</li>
                  <li>• At least <strong>6 credits</strong> in contact lens topics</li>
                  <li>• Renewal fee: ~$50</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are CE Credits?</h2>
              <p className="text-gray-700 mb-4">
                <strong>Continuing Education (CE) credits</strong> are required to maintain your ABO and NCLE certifications.
                They ensure you stay current with advances in optical technology, lens designs, and best practices.
              </p>
              <p className="text-gray-700 mb-4">
                One CE credit typically equals one hour of approved educational content. Credits must come from
                ABO-NCLE approved providers to count toward your renewal requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">CE Credit Requirements</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">ABO Requirements (Every 3 Years)</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Total:</strong> 18 ABO-approved credits</li>
                    <li>• <strong>Required:</strong> At least 6 credits in ophthalmic optics</li>
                    <li>• <strong>Remaining 12:</strong> Any ABO-approved topics</li>
                    <li>• <strong>Online:</strong> 100% of credits can be earned online</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">NCLE Requirements (Every 3 Years)</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Total:</strong> 18 NCLE-approved credits</li>
                    <li>• <strong>Required:</strong> At least 6 credits in contact lens topics</li>
                    <li>• <strong>Remaining 12:</strong> Any NCLE-approved topics</li>
                    <li>• <strong>Online:</strong> 100% of credits can be earned online</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Dual Certification (ABO + NCLE)</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Some credits count toward both certifications</li>
                    <li>• Look for "ABO-NCLE approved" courses</li>
                    <li>• Still need core requirements for each (optics + contact lens)</li>
                    <li>• Can reduce total courses needed</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to Get CE Credits Online</h2>

              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">ABO-NCLE Website</h3>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Official</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">The certification body offers approved courses directly.</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Guaranteed to count toward renewal</li>
                    <li>• Credits automatically recorded</li>
                    <li>• Various topics and price points</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Lens Manufacturer Courses</h3>
                  <p className="text-gray-600 text-sm mb-2">Essilor, Zeiss, Hoya, and others offer free or low-cost CE.</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Often free (product-focused but educational)</li>
                    <li>• Learn about latest lens technology</li>
                    <li>• Check ABO-NCLE approval before starting</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Lens Manufacturer Courses</h3>
                  <p className="text-gray-600 text-sm mb-2">CooperVision, Alcon, Johnson & Johnson Vision offer NCLE CE.</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Focused on contact lens topics</li>
                    <li>• Good for NCLE renewal</li>
                    <li>• Often free with registration</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Organizations</h3>
                  <p className="text-gray-600 text-sm mb-2">OAA, state optical associations offer member CE.</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Networking + education benefits</li>
                    <li>• Often discounted for members</li>
                    <li>• High-quality, unbiased content</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Third-Party CE Providers</h3>
                  <p className="text-gray-600 text-sm mb-2">Various online platforms offer optical CE courses.</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Wide selection of topics</li>
                    <li>• Bundle packages available</li>
                    <li>• <strong>Verify ABO-NCLE approval before purchasing</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">CE Credit Costs</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mb-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Source</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Cost per Credit</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Manufacturer courses</td>
                      <td className="border border-gray-300 px-4 py-2">Free - $10</td>
                      <td className="border border-gray-300 px-4 py-2">Product-focused but valuable</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">ABO-NCLE website</td>
                      <td className="border border-gray-300 px-4 py-2">$5 - $20</td>
                      <td className="border border-gray-300 px-4 py-2">Official, guaranteed approval</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Third-party providers</td>
                      <td className="border border-gray-300 px-4 py-2">$5 - $30</td>
                      <td className="border border-gray-300 px-4 py-2">Verify approval status</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Conferences (online)</td>
                      <td className="border border-gray-300 px-4 py-2">$50 - $200 total</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple credits at once</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>Budget tip:</strong> Mix free manufacturer courses with paid courses to minimize costs.
                You can complete all 18 credits for under $100 if you plan strategically.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Track Your CE Credits</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="bg-teal-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Create an ABO-NCLE Account</h3>
                    <p className="text-gray-600 text-sm">Your official transcript is maintained at abo-ncle.org. Log in to view your current credits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-teal-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Keep Certificates of Completion</h3>
                    <p className="text-gray-600 text-sm">Download and save certificates from every CE course. You may need proof if credits don't auto-report.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-teal-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Check for Auto-Reporting</h3>
                    <p className="text-gray-600 text-sm">Many approved providers automatically report credits. Allow 2-4 weeks for credits to appear.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-teal-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Self-Report if Needed</h3>
                    <p className="text-gray-600 text-sm">If credits don't appear, you can manually submit them through the ABO-NCLE portal with your certificate.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />Don't Let Your Certification Lapse
              </h3>
              <p className="text-red-800 mb-4">
                If you miss your renewal deadline:
              </p>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Your certification status becomes "inactive"</li>
                <li>• You may need to pay late fees to reinstate</li>
                <li>• Extended lapses may require retaking certification exams</li>
                <li>• Some employers require active certification status</li>
              </ul>
              <p className="text-red-800 text-sm mt-4">
                <strong>Pro tip:</strong> Set calendar reminders 6 months and 3 months before your renewal date.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">State Licensing CE Requirements</h2>
              <p className="text-gray-700 mb-4">
                If you're licensed in a state that requires licensure, you may have <strong>additional</strong> CE requirements
                beyond ABO-NCLE. Check with your state board—requirements vary significantly.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Important:</strong> State CE requirements are separate from ABO-NCLE requirements.
                  Some credits may count for both, but always verify with your state licensing board.
                </p>
              </div>
            </section>

            <div className="bg-blue-600 text-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl mb-2">Need More Than CE Credits?</h3>
              <p className="text-blue-100 mb-4">
                If you're preparing for initial certification or helping colleagues study, our comprehensive
                course covers all ABO & NCLE exam topics.
              </p>
              <Link href="/subscribe" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Chapter
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">How many CE credits do I need to maintain ABO certification?</h3>
                  <p className="text-gray-600">You need 18 ABO-approved CE credits every 3 years to maintain your ABO certification. At least 6 credits must be in ophthalmic optics.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I complete all my CE credits online?</h3>
                  <p className="text-gray-600">Yes, all ABO and NCLE CE requirements can be fulfilled through approved online courses. Many opticians prefer this flexible option.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What happens if I don't complete my CE credits on time?</h3>
                  <p className="text-gray-600">Your certification will lapse if you don't complete CE requirements by your renewal deadline. You may need to pay late fees or retake certification exams to reinstate.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Do CE credits expire?</h3>
                  <p className="text-gray-600">CE credits must be earned within your 3-year certification cycle. Credits from a previous cycle don't carry over to the next one.</p>
                </div>
              </div>
            </section>
          </div>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/how-to-become-licensed-optician" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How to Become a Licensed Optician</h3>
                <p className="text-gray-600 text-sm">Complete career guide</p>
              </Link>
              <Link href="/blog/how-hard-is-abo-ncle-exam" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How Hard is the ABO & NCLE Exam?</h3>
                <p className="text-gray-600 text-sm">Pass rates and difficulty</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
