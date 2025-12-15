import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { curriculumOutline } from '@/data/chapters'
import {
  BookOpen,
  CheckCircle,
  Award,
  Users,
  Clock,
  TrendingUp,
  Play,
  Lock,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Free first chapter - no signup required
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Become a Certified Optician
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Master the ABO and NCLE exams with our comprehensive, self-paced training program.
                Interactive lessons, quizzes, and progress tracking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/learn/chapter/introduction-to-opticianry"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Start Free Chapter
                </Link>
                <Link
                  href="/learn"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/40 transition-colors border border-white/20"
                >
                  View Full Curriculum
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">52</div>
                <div className="text-gray-600 mt-1">Chapters</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">325+</div>
                <div className="text-gray-600 mt-1">Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600 mt-1">Quiz Questions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">ABO+NCLE</div>
                <div className="text-gray-600 mt-1">Exam Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Pass
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our program is designed by experienced opticians to give you the knowledge and confidence to ace your certification exams.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Structured Learning
                </h3>
                <p className="text-gray-600">
                  Bite-sized lessons (under 10 minutes each) organized in a logical sequence. Each concept builds on the previous one.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Interactive Quizzes
                </h3>
                <p className="text-gray-600">
                  Test your knowledge after each lesson with instant feedback. Chapter tests ensure you&apos;re ready to move forward.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Track Your Progress
                </h3>
                <p className="text-gray-600">
                  Your personal dashboard shows completed lessons, quiz scores, and overall readiness for the exam.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Learn at Your Pace
                </h3>
                <p className="text-gray-600">
                  Study whenever it fits your schedule. Pick up exactly where you left off on any device.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Earn Certificates
                </h3>
                <p className="text-gray-600">
                  Complete chapters and earn shareable certificates to showcase your progress on LinkedIn and social media.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Expert Content
                </h3>
                <p className="text-gray-600">
                  Created by licensed opticians with years of experience. Covers everything on the ABO and NCLE exams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Preview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Curriculum
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                52 comprehensive chapters covering everything you need to know for ABO and NCLE certification.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {curriculumOutline.map((chapter, index) => (
                <div
                  key={chapter.id}
                  className={`p-6 rounded-xl border-2 ${
                    chapter.isFree
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                        chapter.isFree
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {chapter.title}
                        </h3>
                        {chapter.isFree ? (
                          <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                            FREE
                          </span>
                        ) : (
                          <Lock className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {chapter.lessons} lessons
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {chapter.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Begin with our free introduction chapter. No credit card required.
            </p>
            <Link
              href="/learn/chapter/introduction-to-opticianry"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              <Play className="w-6 h-6" />
              Start Free Chapter
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
