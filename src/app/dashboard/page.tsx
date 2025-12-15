'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import {
  BookOpen,
  Award,
  Clock,
  TrendingUp,
  Play,
  Lock,
  CheckCircle,
  LogOut,
  Settings,
  Crown
} from 'lucide-react'
import { curriculumOutline, chapters } from '@/data/chapters'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/auth/login')
        return
      }

      setUser(user)
      // TODO: Check subscription status from database
      // For now, check if user has subscription metadata
      setIsSubscribed(user.user_metadata?.is_subscribed || false)
      setLoading(false)
    }

    checkUser()
  }, [router])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your dashboard...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const completedLessons = 0 // TODO: Get from database
  const totalLessons = curriculumOutline.reduce((sum, ch) => sum + ch.lessons, 0)
  const progressPercent = Math.round((completedLessons / totalLessons) * 100)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Welcome Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Welcome back, {user?.user_metadata?.full_name || 'Student'}!
                </h1>
                <p className="text-gray-600 mt-1">
                  {isSubscribed
                    ? 'You have full access to all courses.'
                    : 'You have access to free content. Upgrade to unlock everything.'}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {!isSubscribed && (
                  <Link
                    href="/subscribe"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Crown className="w-4 h-4" />
                    Upgrade to Premium
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">{completedLessons}</div>
                <div className="text-sm text-gray-500">Lessons Completed</div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">{progressPercent}%</div>
                <div className="text-sm text-gray-500">Overall Progress</div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">0</div>
                <div className="text-sm text-gray-500">Quizzes Passed</div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">0h</div>
                <div className="text-sm text-gray-500">Study Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Learning */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Continue Learning</h2>

            {/* Free Chapter - Always accessible */}
            <div className="bg-white rounded-xl border-2 border-green-200 p-6 mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">Introduction to Opticianry</h3>
                    <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">FREE</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">4 lessons • Get started with the basics</p>
                  <Link
                    href="/learn/chapter/introduction-to-opticianry"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
                  >
                    <Play className="w-4 h-4" />
                    Start Learning
                  </Link>
                </div>
              </div>
            </div>

            {/* Premium Content Preview */}
            {!isSubscribed && (
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Unlock All 52 Chapters</h3>
                    <p className="text-blue-100 mb-4">
                      Get full access to 325+ lessons, 500+ quiz questions, and earn your certificate.
                    </p>
                    <Link
                      href="/subscribe"
                      className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm"
                    >
                      <Crown className="w-4 h-4" />
                      Subscribe for $9.95/month
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Chapter List */}
            <div className="space-y-3">
              {curriculumOutline.slice(1, 6).map((chapter, index) => {
                const canAccess = isSubscribed || chapter.isFree

                return (
                  <div
                    key={chapter.id}
                    className={`bg-white rounded-xl border p-4 ${
                      canAccess ? 'border-gray-200' : 'border-gray-100 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                        canAccess ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {index + 2}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className={`font-medium ${canAccess ? 'text-gray-900' : 'text-gray-500'}`}>
                            {chapter.title}
                          </h3>
                          {!canAccess && <Lock className="w-4 h-4 text-gray-400" />}
                        </div>
                        <p className="text-sm text-gray-500">{chapter.lessons} lessons</p>
                      </div>
                      {canAccess ? (
                        <Link
                          href={`/learn`}
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          Start →
                        </Link>
                      ) : (
                        <span className="text-gray-400 text-sm">Locked</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-6">
              <Link
                href="/learn"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View all {curriculumOutline.length} chapters →
              </Link>
            </div>
          </div>
        </section>

        {/* Account Section */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Account</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">
                    {(user?.user_metadata?.full_name || user?.email || 'U')[0].toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {user?.user_metadata?.full_name || 'Student'}
                  </div>
                  <div className="text-sm text-gray-500">{user?.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className={`px-3 py-1 rounded-full ${
                  isSubscribed
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {isSubscribed ? '✓ Premium Member' : 'Free Account'}
                </span>
                {isSubscribed && (
                  <span className="text-gray-500">• Manage subscription in Stripe</span>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
