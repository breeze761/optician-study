'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CheckCircle, Globe, BookOpen, Award, Clock, Users, Loader2 } from 'lucide-react'

export default function SubscribePage() {
  const router = useRouter()
  const [loading, setLoading] = useState<'monthly' | 'yearly' | null>(null)

  const handleSubscribe = async (plan: 'monthly' | 'yearly') => {
    setLoading(plan)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan }),
      })

      const data = await response.json()

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else if (response.status === 401) {
        // User not logged in - redirect to login with return URL
        router.push('/auth/login?redirect=/subscribe')
      } else {
        alert('Failed to start checkout. Please try again.')
        setLoading(null)
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start checkout. Please try again.')
      setLoading(null)
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock Your Full Optician Training
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get complete access to all 52 chapters, 325+ lessons, and 500+ practice questions
              to ace your ABO and NCLE certification exams.
            </p>
            <div className="flex items-center justify-center gap-4 text-blue-200">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>Available in 100+ languages</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Join opticians worldwide</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 -mt-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Monthly Plan */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-100 p-6 text-center">
                  <span className="inline-block bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Monthly
                  </span>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $9.95<span className="text-xl font-normal text-gray-600">/mo</span>
                  </div>
                  <p className="text-gray-600">Cancel anytime. No commitment.</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">All 52 chapters unlocked</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">325+ comprehensive lessons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">500+ practice quiz questions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Progress tracking</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => handleSubscribe('monthly')}
                    disabled={loading !== null}
                    className="block w-full bg-gray-800 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading === 'monthly' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Loading...
                      </span>
                    ) : (
                      'Get Monthly Access'
                    )}
                  </button>
                </div>
              </div>

              {/* Yearly Plan - Featured */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-600 overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  BEST VALUE
                </div>
                <div className="bg-blue-600 text-white p-6 text-center">
                  <span className="inline-block bg-green-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Save $40/year
                  </span>
                  <div className="text-4xl font-bold mb-2">
                    $79<span className="text-xl font-normal">/year</span>
                  </div>
                  <p className="text-blue-100">Just $6.58/month • Billed annually</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">All 52 chapters unlocked</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">325+ comprehensive lessons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">500+ practice quiz questions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Progress tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Certificate of completion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Available in 100+ languages</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => handleSubscribe('yearly')}
                    disabled={loading !== null}
                    className="block w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading === 'yearly' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Loading...
                      </span>
                    ) : (
                      'Get Yearly Access'
                    )}
                  </button>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Secure payment powered by Stripe • Promo codes accepted at checkout
            </p>
          </div>
        </section>

        {/* Free Chapter Banner */}
        <section className="bg-white border-y border-gray-200 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Not ready to subscribe?
            </h2>
            <p className="text-gray-600 mb-6">
              Chapter 1: Optical Fundamentals is completely free. Try it first!
            </p>
            <Link
              href="/learn/chapter/introduction-to-opticianry"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Start Free Chapter
            </Link>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Complete ABO & NCLE Exam Prep
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-600">
                  Covers all topics tested on ABO and NCLE exams: optics, lens materials,
                  frame selection, contact lenses, and more.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn at Your Pace</h3>
                <p className="text-gray-600">
                  Short 10-minute lessons fit your busy schedule. Study on any device,
                  anytime, anywhere in the world.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quiz & Test Yourself</h3>
                <p className="text-gray-600">
                  Every lesson includes quizzes with instant feedback and detailed explanations
                  to reinforce your learning.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Community</h3>
                <p className="text-gray-600">
                  Join opticians from around the world. Google Translate support for
                  100+ languages built right in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white border-t border-gray-200 py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-600">
                  Yes! There are no contracts or commitments. Cancel anytime from your account
                  and you won't be charged again. Your access continues until the end of your billing period.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you accept promo codes?
                </h3>
                <p className="text-gray-600">
                  Yes! If you have a promo code, you can enter it at checkout to receive your discount.
                  Promo codes are applied on the Stripe payment page.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is this content approved for ABO/NCLE prep?
                </h3>
                <p className="text-gray-600">
                  Our curriculum covers all the topics tested on both ABO and NCLE certification exams.
                  While we're not officially affiliated with these organizations, our content is
                  designed by experienced opticians and educators.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  I'm not in the US. Can I still use this?
                </h3>
                <p className="text-gray-600">
                  Absolutely! While ABO/NCLE are US certifications, the optical knowledge is universal.
                  Plus, Google Translate is built-in to help you study in your preferred language.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards, debit cards, Apple Pay, Google Pay, and more
                  through our secure Stripe payment processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Your Optician Journey Today
            </h2>
            <p className="text-blue-100 mb-8">
              Join thousands of opticians worldwide preparing for their certification exams.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleSubscribe('yearly')}
                disabled={loading !== null}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors disabled:opacity-50"
              >
                {loading === 'yearly' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Get Yearly Access - $79/year'
                )}
              </button>
              <button
                onClick={() => handleSubscribe('monthly')}
                disabled={loading !== null}
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors disabled:opacity-50"
              >
                {loading === 'monthly' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Or $9.95/month'
                )}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
