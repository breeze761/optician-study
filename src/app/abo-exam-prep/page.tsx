import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Calculator, Award } from 'lucide-react'
import { getABOPosts, getPostsByTag } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'ABO Exam Prep: Complete Guide to Passing Your Optician Certification',
  description: 'Everything you need to pass the ABO (American Board of Opticianry) exam. Study guides, practice questions, exam tips, and proven strategies for certification success.',
  keywords: 'ABO exam prep, ABO certification, ABO study guide, ABO practice test, optician exam, American Board of Opticianry',
  alternates: {
    canonical: '/abo-exam-prep',
  },
}

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ABO Exam Prep Resources",
  description: "Comprehensive collection of ABO certification exam preparation resources",
  publisher: { "@type": "Organization", name: "OpticianStudy" },
}

export default function ABOExamPrepPage() {
  // Automatically pulls all ABO-related posts
  const aboPosts = getABOPosts()
  const studyMaterialsPosts = getPostsByTag('study-materials')

  // Separate featured/main guides from other articles
  const featuredPosts = aboPosts.filter(post => post.featured)
  const otherPosts = aboPosts.filter(post => !post.featured)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }} />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Certification Prep
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ABO Exam Prep
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Your complete guide to passing the American Board of Opticianry certification exam.
              Study guides, practice questions, and proven strategies.
            </p>
            <Link
              href="/subscribe"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Free Chapter
            </Link>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">150</div>
                <div className="text-gray-600 text-sm">Questions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">3 hrs</div>
                <div className="text-gray-600 text-sm">Time Limit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">$125</div>
                <div className="text-gray-600 text-sm">Exam Fee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">300+</div>
                <div className="text-gray-600 text-sm">Scaled Pass Score</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            {/* ABO Exam Overview */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                About the ABO Exam
              </h2>
              <p className="text-gray-700 mb-4">
                The <strong>American Board of Opticianry (ABO)</strong> certification demonstrates your competency
                in dispensing eyeglasses. It covers ophthalmic optics, lens types, frame selection, fitting,
                and patient care. ABO certification is recognized nationwide and required or preferred by most employers.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Exam Content</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Ophthalmic Optics (~30%)</li>
                    <li>• Lens Types & Materials (~25%)</li>
                    <li>• Frames & Fitting (~20%)</li>
                    <li>• Lens Treatments (~15%)</li>
                    <li>• Dispensing & Patient Care (~10%)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Key Skills Tested</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Prescription interpretation</li>
                    <li>• Prentice's Rule calculations</li>
                    <li>• Cylinder transposition</li>
                    <li>• Frame measurements</li>
                    <li>• Troubleshooting vision complaints</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Featured Guides */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  Essential ABO Study Guides
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
                    >
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
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

            {/* All ABO Articles */}
            {otherPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  More ABO Resources
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

            {/* Study Materials */}
            {studyMaterialsPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Study Materials & Resources
                </h2>
                <div className="space-y-4">
                  {studyMaterialsPosts.map((post) => (
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

            {/* Study Checklist */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                ABO Exam Prep Checklist
              </h2>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <span className="text-gray-700">Review all ABO exam content areas</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <span className="text-gray-700">Master Prentice's Rule and prism calculations</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <span className="text-gray-700">Practice cylinder transposition until automatic</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <span className="text-gray-700">Memorize lens material properties (index, Abbe)</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <span className="text-gray-700">Know progressive lens fitting requirements</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <span className="text-gray-700">Take at least 2 full practice exams</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <span className="text-gray-700">Review weak areas identified in practice tests</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Pass the ABO Exam?
            </h2>
            <p className="text-blue-100 mb-6">
              Our comprehensive course covers every ABO topic with interactive lessons and 500+ practice questions.
            </p>
            <Link
              href="/subscribe"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Free Chapter
            </Link>
          </div>
        </section>

        {/* Related Hub Pages */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Explore More Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/ncle-exam-prep"
                className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-bold text-gray-900 mb-2">NCLE Exam Prep</h3>
                <p className="text-gray-600 text-sm">Contact lens certification resources</p>
              </Link>
              <Link
                href="/optician-career-guide"
                className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-bold text-gray-900 mb-2">Career Guide</h3>
                <p className="text-gray-600 text-sm">Start your optician career</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
