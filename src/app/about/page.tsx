import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BookOpen, Award, Globe, Users, Target, Heart } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About OpticianStudy
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Helping aspiring opticians worldwide pass their ABO and NCLE certification exams
              with comprehensive, accessible training.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We believe that quality optician education should be accessible to everyone,
                regardless of location or background. Our mission is to provide comprehensive,
                easy-to-understand training materials that help students master the knowledge
                needed to become certified opticians.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're preparing for your ABO certification, NCLE exam, or both,
                OpticianStudy provides the structured curriculum and practice tools you need
                to succeed.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Comprehensive Curriculum
                  </h3>
                  <p className="text-gray-600">
                    52 chapters covering everything from optical fundamentals to advanced
                    contact lens fitting, all aligned with ABO and NCLE exam topics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Practice Quizzes
                  </h3>
                  <p className="text-gray-600">
                    500+ practice questions with detailed explanations to test your
                    knowledge and reinforce key concepts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Global Accessibility
                  </h3>
                  <p className="text-gray-600">
                    Built-in Google Translate support for 100+ languages, making optical
                    education accessible to students worldwide.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Self-Paced Learning
                  </h3>
                  <p className="text-gray-600">
                    Study on your own schedule with bite-sized lessons designed for
                    busy professionals and students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Who Is This For?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Students</h3>
                <p className="text-gray-600 text-sm">
                  New to the field and preparing for your first certification exam.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="text-4xl mb-4">👓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Working Opticians</h3>
                <p className="text-gray-600 text-sm">
                  Looking to add ABO or NCLE certification to advance your career.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-semibold text-gray-900 mb-2">International Learners</h3>
                <p className="text-gray-600 text-sm">
                  Studying optical knowledge in your preferred language from anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-blue-100 mb-8">
              Join students worldwide preparing for their optician certification exams.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Browse Courses
              </Link>
              <Link
                href="/subscribe"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
