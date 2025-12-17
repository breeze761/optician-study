import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Clock, ArrowRight, BookOpen, GraduationCap, Briefcase, DollarSign, MapPin, Award } from 'lucide-react'
import { getCareerPosts, getPostsByTag } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Optician Career Guide: How to Become a Licensed Optician',
  description: 'Complete guide to starting your optician career. Education paths, certification requirements, salary expectations, job outlook, and career advancement opportunities.',
  keywords: 'optician career, how to become optician, optician salary, optician education, optician job, optician licensing',
  alternates: {
    canonical: '/optician-career-guide',
  },
}

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Optician Career Guide",
  description: "Comprehensive guide to starting and advancing your optician career",
  publisher: { "@type": "Organization", name: "OpticianStudy" },
}

export default function OpticianCareerGuidePage() {
  // Automatically pulls all career-related posts
  const careerPosts = getCareerPosts()
  const certificationPosts = getPostsByTag('certification')

  // Separate featured/main guides from other articles
  const featuredPosts = careerPosts.filter(post => post.featured)
  const otherPosts = careerPosts.filter(post => !post.featured)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }} />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Career Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Optician Career Guide
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Everything you need to start and grow your career as a licensed optician.
              Education paths, certifications, and job opportunities.
            </p>
            <Link
              href="/subscribe"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Start Your Training
            </Link>
          </div>
        </section>

        {/* Career Snapshot */}
        <section className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600">1-2 yrs</div>
                <div className="text-gray-600 text-sm">Training Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">$45K</div>
                <div className="text-gray-600 text-sm">Avg. Salary</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">5%</div>
                <div className="text-gray-600 text-sm">Job Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">22</div>
                <div className="text-gray-600 text-sm">States Require License</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            {/* Career Path Overview */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-600" />
                Career Path Overview
              </h2>
              <p className="text-gray-700 mb-6">
                Opticians are healthcare professionals who help people see clearly by fitting and dispensing
                eyeglasses and contact lenses. It's a rewarding career with good job security, work-life balance,
                and opportunities for advancement.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <GraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Step 1: Education</h3>
                  <p className="text-gray-600 text-sm">Complete training program or apprenticeship</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Step 2: Certification</h3>
                  <p className="text-gray-600 text-sm">Pass ABO and/or NCLE exams</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <Briefcase className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Step 3: Career</h3>
                  <p className="text-gray-600 text-sm">Start working and continue learning</p>
                </div>
              </div>
            </div>

            {/* Featured Career Articles */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  Essential Career Guides
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
                    >
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Salary Information */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-purple-600" />
                Optician Salary Overview
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Entry Level (0-2 years)</span>
                    <span className="font-semibold">$32,000 - $40,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Mid-Level (3-7 years)</span>
                    <span className="font-semibold">$40,000 - $52,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Senior/Manager (8+ years)</span>
                    <span className="font-semibold">$55,000 - $75,000+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Salary varies by location, employer type, certifications, and specialization.
                Dual-certified opticians (ABO + NCLE) typically earn 10-15% more.
              </p>
            </div>

            {/* All Career Articles */}
            {otherPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  More Career Resources
                </h2>
                <div className="space-y-4">
                  {otherPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="flex items-center justify-between bg-white rounded-lg border p-4 hover:shadow-sm transition-shadow"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900">{post.title}</h3>
                        <p className="text-gray-600 text-sm">{post.excerpt.slice(0, 100)}...</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Certification Resources */}
            {certificationPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Certification & Licensing
                </h2>
                <div className="space-y-4">
                  {certificationPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="flex items-center justify-between bg-white rounded-lg border p-4 hover:shadow-sm transition-shadow"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900">{post.title}</h3>
                        <p className="text-gray-600 text-sm">{post.excerpt.slice(0, 100)}...</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Work Settings */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-600" />
                Where Opticians Work
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Retail Optical</h3>
                  <p className="text-gray-600 text-sm">LensCrafters, Pearle Vision, Costco, Walmart</p>
                  <p className="text-purple-600 text-sm mt-1">~60% of opticians</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Private Practices</h3>
                  <p className="text-gray-600 text-sm">Independent opticians and eye care practices</p>
                  <p className="text-purple-600 text-sm mt-1">~25% of opticians</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Medical Settings</h3>
                  <p className="text-gray-600 text-sm">Ophthalmology clinics and hospitals</p>
                  <p className="text-purple-600 text-sm mt-1">~10% of opticians</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Optical Labs</h3>
                  <p className="text-gray-600 text-sm">Lens manufacturing and specialty work</p>
                  <p className="text-purple-600 text-sm mt-1">~5% of opticians</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-purple-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Optician Career?
            </h2>
            <p className="text-purple-100 mb-6">
              Our comprehensive course prepares you for ABO & NCLE certification with interactive lessons and practice exams.
            </p>
            <Link
              href="/subscribe"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Start Free Chapter
            </Link>
          </div>
        </section>

        {/* Related Hub Pages */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Certification Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/abo-exam-prep"
                className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-bold text-gray-900 mb-2">ABO Exam Prep</h3>
                <p className="text-gray-600 text-sm">Spectacle certification resources</p>
              </Link>
              <Link
                href="/ncle-exam-prep"
                className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-bold text-gray-900 mb-2">NCLE Exam Prep</h3>
                <p className="text-gray-600 text-sm">Contact lens certification resources</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
