import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Optician Blog - Study Guides, Career Tips & Exam Prep | OpticianStudy',
  description: 'Expert guides on becoming a licensed optician, passing ABO & NCLE exams, study tips, career advice, and CE credit information. Free resources for optician students.',
  keywords: 'optician blog, ABO exam tips, NCLE study guide, how to become optician, optician career, optician certification, optician CE credits, optician study resources',
  alternates: {
    canonical: '/blog',
  },
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "OpticianStudy Blog",
  "description": "Expert guides, study tips, and career advice for opticians",
  "url": "https://www.opticianstudy.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "OpticianStudy",
    "url": "https://www.opticianstudy.com"
  }
}

export default function BlogPage() {
  // Automatically pulls all posts from centralized data, sorted by date
  const posts = getAllPosts()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Optician Study Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Expert guides, study tips, and career advice for aspiring and practicing opticians.
              Everything you need to pass your certification exams.
            </p>
          </div>
        </section>

        {/* Quick Links to Hub Pages */}
        <section className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/abo-exam-prep"
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-colors"
              >
                ABO Exam Prep
              </Link>
              <Link
                href="/ncle-exam-prep"
                className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-colors"
              >
                NCLE Exam Prep
              </Link>
              <Link
                href="/optician-career-guide"
                className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-purple-200 transition-colors"
              >
                Career Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`} className="block p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className={`px-3 py-1 rounded-full font-medium ${
                        post.category === 'ABO Exam' ? 'bg-blue-100 text-blue-700' :
                        post.category === 'NCLE Exam' ? 'bg-green-100 text-green-700' :
                        post.category === 'Career' ? 'bg-purple-100 text-purple-700' :
                        post.category === 'Education' ? 'bg-indigo-100 text-indigo-700' :
                        post.category === 'Resources' ? 'bg-orange-100 text-orange-700' :
                        post.category === 'Certification' ? 'bg-teal-100 text-teal-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-blue-600 font-medium">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Studying?
            </h2>
            <p className="text-blue-100 mb-6">
              Access our complete ABO & NCLE training program with 300+ lessons and 500+ practice questions.
            </p>
            <Link
              href="/subscribe"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Free Chapter
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
