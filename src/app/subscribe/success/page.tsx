'use client'

import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CheckCircle, BookOpen, ArrowRight } from 'lucide-react'

export default function SubscribeSuccessPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to OpticianStudy!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your subscription is now active. You have full access to all 13 chapters
            and 500+ quiz questions to prepare for your ABO and NCLE certification exams.
          </p>

          {/* What's Included */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8 text-left">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your subscription includes:</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">All 13 chapters of comprehensive optician training</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">50+ lessons covering ABO & NCLE exam content</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">500+ practice quiz questions with explanations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Progress tracking across all chapters</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Certificate of completion for your portfolio</span>
              </li>
            </ul>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Ready to start learning?</h2>
            <p className="text-gray-600 mb-6">
              Pick up where you left off or start from the beginning.
            </p>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Account Info */}
          <p className="text-sm text-gray-500">
            A confirmation email has been sent to your email address.
            You can manage your subscription anytime from your account settings.
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}
