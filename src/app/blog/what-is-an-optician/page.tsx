import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, CheckCircle, Eye, Stethoscope, Glasses, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is an Optician? Roles, Responsibilities & Career Overview 2025',
  description: 'Learn what opticians do, how they differ from optometrists and ophthalmologists, job duties, work environments, and why this healthcare career is in high demand.',
  keywords: 'what is an optician, optician vs optometrist, optician job description, optician duties, optician career, optical professional',
  alternates: {
    canonical: '/blog/what-is-an-optician',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is an Optician? Roles, Responsibilities & Career Overview",
  description: "Comprehensive guide to the optician profession including job duties, work settings, and career paths.",
  author: { "@type": "Organization", name: "OpticianStudy" },
  publisher: { "@type": "Organization", name: "OpticianStudy" },
  datePublished: "2025-01-12",
  dateModified: "2025-01-12",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between an optician and an optometrist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Opticians fit and dispense eyeglasses and contact lenses based on prescriptions. Optometrists are doctors who perform eye exams, diagnose conditions, and write prescriptions. Opticians cannot perform eye exams or prescribe, while optometrists have completed 4 years of optometry school after college."
      }
    },
    {
      "@type": "Question",
      name: "Do opticians need a degree?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A college degree is not always required. Many opticians complete 1-2 year certificate or associate degree programs, while others learn through on-the-job apprenticeships. However, certification (ABO/NCLE) and licensing (in 22 states) is typically required."
      }
    },
    {
      "@type": "Question",
      name: "Is optician a good career?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, opticianry offers stable employment, good work-life balance, and opportunities for advancement. The job outlook is positive with 5% growth projected, and the work is rewarding as you help people see clearly every day."
      }
    }
  ]
}

export default function WhatIsAnOpticianPage() {
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
              <span className="text-gray-900">What is an Optician?</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">Career</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />January 12, 2025</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is an Optician? Roles, Responsibilities & Career Overview
            </h1>
            <p className="text-xl text-gray-600">
              Discover what opticians do, how they differ from other eye care professionals, and why this rewarding career is in high demand.
            </p>
          </header>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5" />Quick Definition
            </h2>
            <p className="text-blue-800">
              An <strong>optician</strong> is a trained healthcare professional who fits and dispenses eyeglasses,
              contact lenses, and other optical devices based on prescriptions from optometrists or ophthalmologists.
              Opticians are the experts who help you see clearly and look great doing it.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Does an Optician Do?</h2>
              <p className="text-gray-700 mb-4">
                Opticians are the bridge between your eye doctor and your perfect pair of glasses or contacts.
                They combine technical expertise with customer service to ensure you get the best vision correction
                and eyewear for your needs.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Glasses className="w-5 h-5 text-blue-600" />
                    Eyeglass Dispensing
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Interpret prescriptions accurately</li>
                    <li>• Help patients choose frames</li>
                    <li>• Take precise facial measurements</li>
                    <li>• Recommend lens types and coatings</li>
                    <li>• Fit and adjust finished eyewear</li>
                    <li>• Repair and maintain glasses</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-green-600" />
                    Contact Lens Fitting
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Evaluate contact lens prescriptions</li>
                    <li>• Determine proper lens parameters</li>
                    <li>• Teach insertion and removal techniques</li>
                    <li>• Educate on lens care and hygiene</li>
                    <li>• Troubleshoot comfort issues</li>
                    <li>• Follow up on fitting success</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">A Day in the Life of an Optician</h3>
                <p className="text-gray-700 text-sm">
                  A typical day might include helping a child pick their first pair of glasses, teaching a teenager
                  how to insert contact lenses, adjusting frames for an elderly patient, interpreting a complex
                  progressive lens prescription, and troubleshooting why a patient's new glasses don't feel right.
                  Every patient is different, keeping the work engaging and rewarding.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Optician vs. Optometrist vs. Ophthalmologist</h2>
              <p className="text-gray-700 mb-4">
                The "three O's" of eye care have distinct but complementary roles:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Education</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">What They Do</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Optician</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">1-2 year program or apprenticeship</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Fits and dispenses eyewear based on prescriptions</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Optometrist (OD)</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">4-year doctorate after college</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Performs eye exams, diagnoses conditions, prescribes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Ophthalmologist (MD)</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Medical school + residency (12+ years)</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Medical doctor who performs surgery, treats diseases</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Key Distinction:</strong> Opticians cannot perform eye exams, diagnose conditions, or
                  prescribe eyewear. They work from prescriptions written by optometrists or ophthalmologists.
                  Think of it like a pharmacist filling a doctor's prescription.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Where Do Opticians Work?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Retail Optical</h3>
                  <p className="text-gray-600 text-sm mb-2">LensCrafters, Pearle Vision, Costco, Walmart Vision</p>
                  <p className="text-gray-700 text-sm">High volume, diverse patients, structured hours</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Independent Optical Shops</h3>
                  <p className="text-gray-600 text-sm mb-2">Locally owned boutique eyewear stores</p>
                  <p className="text-gray-700 text-sm">Higher-end frames, personalized service</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Medical Practices</h3>
                  <p className="text-gray-600 text-sm mb-2">Optometry offices, ophthalmology clinics</p>
                  <p className="text-gray-700 text-sm">Work alongside doctors, medical environment</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Optical Laboratories</h3>
                  <p className="text-gray-600 text-sm mb-2">Lens manufacturing facilities</p>
                  <p className="text-gray-700 text-sm">Technical focus, less patient interaction</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills Needed to Be an Optician</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Technical Knowledge</span>
                    <p className="text-gray-600 text-sm">Understanding optics, lens types, frame materials, and measurements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Customer Service</span>
                    <p className="text-gray-600 text-sm">Helping patients feel comfortable and confident in their choices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Attention to Detail</span>
                    <p className="text-gray-600 text-sm">Precise measurements and careful prescription verification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Manual Dexterity</span>
                    <p className="text-gray-600 text-sm">Making fine adjustments to frames and handling small parts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Math Skills</span>
                    <p className="text-gray-600 text-sm">Working with prescriptions, measurements, and calculations</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Become an Optician?</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Help People</h3>
                  <p className="text-gray-600 text-sm">Make a real difference in people's daily lives by helping them see clearly</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <Stethoscope className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Healthcare Career</h3>
                  <p className="text-gray-600 text-sm">Stable demand, good benefits, and professional recognition</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <Glasses className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Fashion + Function</h3>
                  <p className="text-gray-600 text-sm">Blend style and science helping people look and see their best</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-600 text-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl mb-2">Ready to Become an Optician?</h3>
              <p className="text-blue-100 mb-4">
                Start your journey with our comprehensive ABO & NCLE certification prep course.
                Interactive lessons and practice exams to help you succeed.
              </p>
              <Link href="/subscribe" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Chapter
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What is the difference between an optician and an optometrist?</h3>
                  <p className="text-gray-600">Opticians fit and dispense eyeglasses and contact lenses based on prescriptions. Optometrists are doctors who perform eye exams, diagnose conditions, and write prescriptions. Opticians cannot perform eye exams or prescribe.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Do opticians need a degree?</h3>
                  <p className="text-gray-600">A college degree is not always required. Many opticians complete 1-2 year certificate or associate degree programs, while others learn through on-the-job apprenticeships. However, certification (ABO/NCLE) and licensing (in 22 states) is typically required.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Is optician a good career?</h3>
                  <p className="text-gray-600">Yes, opticianry offers stable employment, good work-life balance, and opportunities for advancement. The job outlook is positive with 5% growth projected, and the work is rewarding as you help people see clearly every day.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can opticians prescribe glasses?</h3>
                  <p className="text-gray-600">No, opticians cannot prescribe eyeglasses or contact lenses. They work from prescriptions written by optometrists (OD) or ophthalmologists (MD). However, opticians are experts at interpreting prescriptions and recommending the best lens options.</p>
                </div>
              </div>
            </section>
          </div>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/how-to-become-licensed-optician" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How to Become a Licensed Optician</h3>
                <p className="text-gray-600 text-sm">Step-by-step career guide</p>
              </Link>
              <Link href="/blog/how-to-study-for-abo-exam" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How to Study for the ABO Exam</h3>
                <p className="text-gray-600 text-sm">Complete 2025 study guide</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
