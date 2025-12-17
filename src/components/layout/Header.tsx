'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, BookOpen, User, Calculator, Microscope } from 'lucide-react'
import GoogleTranslate from '@/components/GoogleTranslate'
import { createClient } from '@/lib/supabase/client'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      setIsLoggedIn(!!user)
      setIsLoading(false)
    }
    checkAuth()

    // Listen for auth changes
    const supabase = createClient()
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session?.user)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <>
      <GoogleTranslate />
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Optician<span className="text-blue-600">Study</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/learn"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/practice"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Practice
              </Link>
              <Link
                href="/equipment"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Equipment
              </Link>
              <Link
                href="/calculators"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Calculators
              </Link>
              <Link
                href="/subscribe"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </Link>

              {isLoggedIn ? (
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <User className="w-4 h-4" />
                  Dashboard
                </Link>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    href="/auth/login"
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <Link
                  href="/learn"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 block"
                >
                  Courses
                </Link>
                <Link
                  href="/practice"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 block"
                >
                  Practice
                </Link>
                <Link
                  href="/equipment"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 block"
                >
                  Equipment
                </Link>
                <Link
                  href="/calculators"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 block"
                >
                  Calculators
                </Link>
                <Link
                  href="/subscribe"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 block"
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 block"
                >
                  About
                </Link>
                <hr className="border-gray-200" />
                {isLoggedIn ? (
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium justify-center"
                  >
                    <User className="w-4 h-4" />
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      className="text-center text-gray-600 hover:text-blue-600 font-medium py-2 block"
                    >
                      Log In
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium justify-center"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
