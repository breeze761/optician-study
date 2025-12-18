import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, CheckCircle, GraduationCap, Briefcase, DollarSign, MapPin, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Become a Licensed Optician | Guide',
  description: 'Guide to becoming a licensed optician. Education requirements, ABO & NCLE certification, state licensing, and salary info.',
  keywords: 'how to become an optician, optician career, optician license, optician certification, optician salary, optician training, optician requirements',
  alternates: {
    canonical: '/blog/how-to-become-licensed-optician',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Become a Licensed Optician: Step-by-Step Career Guide 2025",
  description: "Complete guide to becoming a licensed optician with education requirements, certification paths, and career outlook.",
  author: { "@type": "Organization", name: "OpticianStudy" },
  publisher: { "@type": "Organization", name: "OpticianStudy" },
  datePublished: "2025-01-13",
  dateModified: "2025-01-13",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to become a licensed optician?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It typically takes 1-2 years to become a licensed optician. This includes completing an optician training program (1-2 years) and passing certification exams. Some states allow on-the-job training which may take 2-4 years."
      }
    },
    {
      "@type": "Question",
      name: "Do all states require optician licensing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, only 22 states currently require optician licensing. However, ABO and NCLE certifications are recognized nationwide and are required or preferred by most employers regardless of state requirements."
      }
    },
    {
      "@type": "Question",
      name: "What is the average optician salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average optician salary is approximately $45,000 per year, with experienced opticians in high-demand areas earning $55,000-$70,000+. Factors affecting salary include location, experience, certifications, and employer type."
      }
    }
  ]
}

export default function HowToBecomeOpticianPage() {
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
              <span className="text-gray-900">How to Become a Licensed Optician</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">Career</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />January 13, 2025</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Become a Licensed Optician: Step-by-Step Career Guide
            </h1>
            <p className="text-xl text-gray-600">
              Your complete roadmap to starting a rewarding career in optical dispensing. From education to certification to your first job.
            </p>
          </header>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />Career Snapshot
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-purple-800">
                <GraduationCap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Education:</strong> 1-2 year program or apprenticeship</span>
              </div>
              <div className="flex items-start gap-2 text-purple-800">
                <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Certifications:</strong> ABO and NCLE (recommended)</span>
              </div>
              <div className="flex items-start gap-2 text-purple-800">
                <DollarSign className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Avg Salary:</strong> $45,000/year ($55K-70K+ experienced)</span>
              </div>
              <div className="flex items-start gap-2 text-purple-800">
                <Briefcase className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Job Outlook:</strong> 5% growth (faster than average)</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Does an Optician Do?</h2>
              <p className="text-gray-700 mb-4">
                <strong>Opticians</strong> are healthcare professionals who help patients see clearly by fitting and dispensing
                eyeglasses, contact lenses, and other optical devices. They work with prescriptions from optometrists and
                ophthalmologists to provide patients with the perfect vision correction solution.
              </p>
              <div className="bg-gray-50 border rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Daily Responsibilities Include:</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Interpreting eyeglass and contact lens prescriptions</li>
                  <li>• Helping patients select frames that fit their face and lifestyle</li>
                  <li>• Taking facial measurements for proper lens fitting</li>
                  <li>• Fitting and adjusting eyeglasses</li>
                  <li>• Teaching patients how to insert, remove, and care for contact lenses</li>
                  <li>• Processing and verifying lens orders</li>
                  <li>• Troubleshooting vision complaints</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Meet Basic Requirements</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Minimum Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>High school diploma or GED</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Strong math skills (algebra, geometry)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Good communication and customer service skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Attention to detail and manual dexterity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Be at least 18 years old (for most programs)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Complete Education or Training</h2>
              <p className="text-gray-700 mb-4">
                There are three main paths to becoming an optician. Choose the one that best fits your situation:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900">Path A: Optician Degree Program (1-2 years)</h3>
                  <p className="text-gray-600 mb-2">Best for: Career changers, those wanting comprehensive training</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Associate degree or certificate from accredited program</li>
                    <li>• Combines classroom learning with hands-on training</li>
                    <li>• Often includes externship experience</li>
                    <li>• Cost: $5,000-$30,000 depending on program</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900">Path B: Apprenticeship (2-4 years)</h3>
                  <p className="text-gray-600 mb-2">Best for: Learning while earning, hands-on learners</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• On-the-job training under licensed optician</li>
                    <li>• Earn income while learning</li>
                    <li>• Available in most states</li>
                    <li>• Must still pass certification exams</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900">Path C: Online Training + Work Experience</h3>
                  <p className="text-gray-600 mb-2">Best for: Working adults, self-motivated learners</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Online coursework combined with retail optical experience</li>
                    <li>• Flexible scheduling</li>
                    <li>• Most affordable option</li>
                    <li>• Requires discipline and self-study</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Get Certified (ABO & NCLE)</h2>
              <p className="text-gray-700 mb-4">
                While not required in all states, <strong>ABO and NCLE certifications</strong> are the industry standard
                and dramatically improve your job prospects and earning potential.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-sm">ABO</span>
                    <span className="font-semibold text-gray-900">Spectacle Certification</span>
                  </div>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 150 multiple-choice questions</li>
                    <li>• 3-hour time limit</li>
                    <li>• $125 exam fee</li>
                    <li>• Covers eyeglasses, lenses, frames</li>
                  </ul>
                  <Link href="/blog/how-to-study-for-abo-exam" className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline">
                    ABO Study Guide →
                  </Link>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-600 text-white px-3 py-1 rounded font-bold text-sm">NCLE</span>
                    <span className="font-semibold text-gray-900">Contact Lens Certification</span>
                  </div>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 150 multiple-choice questions</li>
                    <li>• 3-hour time limit</li>
                    <li>• $125 exam fee</li>
                    <li>• Covers contact lens fitting & care</li>
                  </ul>
                  <Link href="/blog/how-to-study-for-ncle-exam" className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline">
                    NCLE Study Guide →
                  </Link>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Pro Tip:</strong> Most opticians take the ABO first, then the NCLE. You can take both on the same day
                  if you feel prepared. Being dual-certified (ABO-NCLE) significantly increases your marketability.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Obtain State License (If Required)</h2>
              <p className="text-gray-700 mb-4">
                <strong>22 states</strong> currently require opticians to be licensed. Requirements vary by state but
                typically include certification exams and sometimes additional state-specific tests.
              </p>

              <div className="bg-gray-50 border rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  States Requiring Optician Licensure
                </h3>
                <p className="text-gray-700 text-sm">
                  Alaska, Arizona, California, Connecticut, Florida, Georgia, Hawaii, Kentucky, Massachusetts, Maryland,
                  Nevada, New Jersey, New York, North Carolina, Ohio, Rhode Island, South Carolina, Tennessee, Texas,
                  Vermont, Virginia, Washington
                </p>
              </div>

              <p className="text-gray-700">
                Even in non-licensed states, ABO and NCLE certification is strongly preferred by employers and may be
                required for certain positions or insurance reimbursement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Land Your First Optician Job</h2>
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Common Employers</h3>
                  <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                    <div>• Retail optical chains (LensCrafters, Pearle Vision)</div>
                    <div>• Independent optical shops</div>
                    <div>• Ophthalmology practices</div>
                    <div>• Optometry offices</div>
                    <div>• Hospital eye clinics</div>
                    <div>• Optical laboratories</div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Job Search Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Start applying before you finish your program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Highlight customer service experience on your resume</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Get ABO-certified ASAP—it's a major differentiator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Consider starting at a large chain for training</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Optician Salary & Job Outlook</h2>
              <div className="bg-white border rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">Salary by Experience Level</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Entry Level (0-2 years)</span>
                    <span className="font-semibold text-gray-900">$32,000 - $40,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-700">Mid-Level (3-7 years)</span>
                    <span className="font-semibold text-gray-900">$40,000 - $52,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-700">Senior/Manager (8+ years)</span>
                    <span className="font-semibold text-gray-900">$55,000 - $75,000+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700">
                The Bureau of Labor Statistics projects <strong>5% job growth</strong> for opticians through 2032,
                faster than average. An aging population needing vision correction drives demand.
              </p>
            </section>

            <div className="bg-blue-600 text-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl mb-2">Start Your Optician Career Today</h3>
              <p className="text-blue-100 mb-4">
                Our comprehensive ABO & NCLE prep course has helped thousands pass their certification exams
                and launch their optician careers.
              </p>
              <Link href="/subscribe" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Chapter
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">How long does it take to become a licensed optician?</h3>
                  <p className="text-gray-600">It typically takes 1-2 years to become a licensed optician. This includes completing an optician training program (1-2 years) and passing certification exams. Some states allow on-the-job training which may take 2-4 years.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Do all states require optician licensing?</h3>
                  <p className="text-gray-600">No, only 22 states currently require optician licensing. However, ABO and NCLE certifications are recognized nationwide and are required or preferred by most employers regardless of state requirements.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What is the average optician salary?</h3>
                  <p className="text-gray-600">The average optician salary is approximately $45,000 per year, with experienced opticians in high-demand areas earning $55,000-$70,000+. Factors affecting salary include location, experience, certifications, and employer type.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can I become an optician online?</h3>
                  <p className="text-gray-600">You can complete coursework online, but you'll still need hands-on experience and to pass certification exams at a testing center. Many successful opticians combine online study with work experience at an optical retail location.</p>
                </div>
              </div>
            </section>
          </div>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/what-is-an-optician" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">What is an Optician?</h3>
                <p className="text-gray-600 text-sm">Roles, responsibilities, and career overview</p>
              </Link>
              <Link href="/blog/optician-schools-near-me" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">Optician Schools Near Me</h3>
                <p className="text-gray-600 text-sm">Find accredited programs in your state</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
