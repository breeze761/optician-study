import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Eye, Award } from 'lucide-react'
import { getNCLEPosts, getPostsByTag } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'NCLE Exam Prep: Complete Guide to Contact Lens Certification',
  description: 'Everything you need to pass the NCLE (National Contact Lens Examiners) exam. Study guides, fitting procedures, practice questions, and certification strategies.',
  keywords: 'NCLE exam prep, NCLE certification, NCLE study guide, NCLE practice test, contact lens certification, National Contact Lens Examiners',
  alternates: {
    canonical: '/ncle-exam-prep',
  },
}

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "NCLE Exam Prep Resources",
  description: "Comprehensive collection of NCLE certification exam preparation resources",
  publisher: { "@type": "Organization", name: "OpticianStudy" },
}

export default function NCLEExamPrepPage() {
  // Automatically pulls all NCLE-related posts
  const nclePosts = getNCLEPosts()
  const studyMaterialsPosts = getPostsByTag('study-materials')

  // Separate featured/main guides from other articles
  const featuredPosts = nclePosts.filter(post => post.featured)
  const otherPosts = nclePosts.filter(post => !post.featured)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }} />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Certification Prep
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              NCLE Exam Prep
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Your complete guide to passing the National Contact Lens Examiners certification exam.
              Fitting procedures, care systems, and troubleshooting expertise.
            </p>
            <Link
              href="/subscribe"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
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
                <div className="text-3xl font-bold text-green-600">150</div>
                <div className="text-gray-600 text-sm">Questions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">3 hrs</div>
                <div className="text-gray-600 text-sm">Time Limit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">$125</div>
                <div className="text-gray-600 text-sm">Exam Fee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">300+</div>
                <div className="text-gray-600 text-sm">Scaled Pass Score</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            {/* NCLE Exam Overview */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-green-600" />
                About the NCLE Exam
              </h2>
              <p className="text-gray-700 mb-4">
                The <strong>National Contact Lens Examiners (NCLE)</strong> certification demonstrates your competency
                in fitting and dispensing contact lenses. It covers lens materials, fitting procedures, care systems,
                troubleshooting, and patient education. Combined with ABO, NCLE certification makes you a complete optical professional.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Exam Content</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Contact Lens Fitting (~35%)</li>
                    <li>• Lens Design & Materials (~30%)</li>
                    <li>• Care & Maintenance (~20%)</li>
                    <li>• Anatomy & Pathology (~15%)</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Key Skills Tested</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Base curve and diameter selection</li>
                    <li>• LARS rule for toric lenses</li>
                    <li>• Dk and Dk/t calculations</li>
                    <li>• Troubleshooting fitting issues</li>
                    <li>• Recognizing complications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Featured Guides */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-green-600" />
                  Essential NCLE Study Guides
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
                    >
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
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

            {/* All NCLE Articles */}
            {otherPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  More NCLE Resources
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

            {/* Contact Lens Types Quick Reference */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-green-600" />
                Contact Lens Types Quick Reference
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Soft Lenses</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Hydrogel (HEMA) - Traditional</li>
                    <li>• Silicone Hydrogel - High Dk</li>
                    <li>• Daily Disposable</li>
                    <li>• Extended Wear</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">RGP Lenses</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Silicone Acrylate</li>
                    <li>• Fluorosilicone Acrylate</li>
                    <li>• Orthokeratology</li>
                    <li>• Scleral Lenses</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Specialty Lenses</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Toric (Astigmatism)</li>
                    <li>• Multifocal/Bifocal</li>
                    <li>• Monovision</li>
                    <li>• Colored/Cosmetic</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Key Parameters</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Base Curve (BC)</li>
                    <li>• Diameter (DIA)</li>
                    <li>• Power (Sphere, Cylinder, Axis)</li>
                    <li>• Dk/t (Oxygen Transmissibility)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Study Checklist */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                NCLE Exam Prep Checklist
              </h2>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <span className="text-gray-700">Review all NCLE exam content areas</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <span className="text-gray-700">Master LARS rule for toric lens rotation</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <span className="text-gray-700">Know Dk vs Dk/t and material properties</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <span className="text-gray-700">Memorize care system types and compatibility</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <span className="text-gray-700">Study corneal anatomy and complications</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <span className="text-gray-700">Practice troubleshooting scenarios</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <span className="text-gray-700">Take at least 2 full practice exams</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Pass the NCLE Exam?
            </h2>
            <p className="text-green-100 mb-6">
              Our comprehensive course covers every NCLE topic with interactive lessons and contact lens case studies.
            </p>
            <Link
              href="/subscribe"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
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
                href="/abo-exam-prep"
                className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-bold text-gray-900 mb-2">ABO Exam Prep</h3>
                <p className="text-gray-600 text-sm">Spectacle certification resources</p>
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
