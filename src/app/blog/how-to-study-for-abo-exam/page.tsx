import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, CheckCircle, BookOpen, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Study for the ABO Exam: Complete 2025 Guide',
  description: 'Master the ABO exam with proven study strategies. Includes week-by-week study plan, best resources, practice tips, and what to expect on test day. Updated for 2025.',
  keywords: 'ABO exam study, how to study for ABO, ABO exam prep, ABO certification study guide, pass ABO exam, ABO test preparation',
  alternates: {
    canonical: '/blog/how-to-study-for-abo-exam',
  },
  openGraph: {
    title: 'How to Study for the ABO Exam: Complete 2025 Guide',
    description: 'Master the ABO exam with proven study strategies and a week-by-week study plan.',
    type: 'article',
    publishedTime: '2025-01-15',
    authors: ['OpticianStudy'],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Study for the ABO Exam: Complete 2025 Guide",
  description: "Master the ABO exam with proven study strategies. Includes week-by-week study plan, best resources, practice tips, and what to expect on test day.",
  image: "https://opticianstudy.com/blog/abo-study-guide.jpg",
  author: {
    "@type": "Organization",
    name: "OpticianStudy",
    url: "https://opticianstudy.com"
  },
  publisher: {
    "@type": "Organization",
    name: "OpticianStudy",
    logo: {
      "@type": "ImageObject",
      url: "https://opticianstudy.com/logo.png"
    }
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://opticianstudy.com/blog/how-to-study-for-abo-exam"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long should I study for the ABO exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most candidates need 8-12 weeks of dedicated study time, spending 1-2 hours per day. If you have work experience in optical, you may need less time. Complete beginners should plan for 12+ weeks."
      }
    },
    {
      "@type": "Question",
      name: "What is the pass rate for the ABO exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ABO exam pass rate is approximately 65-70% for first-time test takers. With proper preparation and practice, most candidates can pass on their first attempt."
      }
    },
    {
      "@type": "Question",
      name: "What topics are covered on the ABO exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ABO exam covers ophthalmic optics, lens materials, frame selection and fitting, measurements, lens treatments, and dispensing procedures. Optical math makes up a significant portion of the exam."
      }
    }
  ]
}

export default function ABOStudyGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">How to Study for ABO Exam</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                ABO Exam
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 15, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Study for the ABO Exam: Complete 2025 Guide
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to pass the American Board of Opticianry certification exam on your first try.
              Proven strategies, study schedule, and expert tips from certified opticians.
            </p>
          </header>

          {/* Key Takeaways Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Plan for 8-12 weeks of study time with 1-2 hours daily</span>
              </li>
              <li className="flex items-start gap-2 text-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Focus on optical math – it's 30-40% of the exam</span>
              </li>
              <li className="flex items-start gap-2 text-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Practice with timed exams to build test-taking stamina</span>
              </li>
              <li className="flex items-start gap-2 text-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Use multiple study resources for comprehensive coverage</span>
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-100 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">Table of Contents</h2>
            <nav className="space-y-2 text-sm">
              <a href="#what-is-abo" className="block text-blue-600 hover:underline">1. What is the ABO Exam?</a>
              <a href="#exam-topics" className="block text-blue-600 hover:underline">2. ABO Exam Topics & Content</a>
              <a href="#study-timeline" className="block text-blue-600 hover:underline">3. How Long to Study</a>
              <a href="#study-plan" className="block text-blue-600 hover:underline">4. Week-by-Week Study Plan</a>
              <a href="#study-tips" className="block text-blue-600 hover:underline">5. Top Study Strategies</a>
              <a href="#resources" className="block text-blue-600 hover:underline">6. Best Study Resources</a>
              <a href="#test-day" className="block text-blue-600 hover:underline">7. Test Day Tips</a>
              <a href="#faq" className="block text-blue-600 hover:underline">8. Frequently Asked Questions</a>
            </nav>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <section id="what-is-abo" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the ABO Exam?</h2>
              <p className="text-gray-700 mb-4">
                The <strong>American Board of Opticianry (ABO) certification exam</strong> is the national standard for
                demonstrating competency in ophthalmic dispensing. Passing the ABO exam proves you have the knowledge
                and skills to fit, dispense, and adjust eyeglasses professionally.
              </p>
              <p className="text-gray-700 mb-4">
                While not all states require ABO certification for licensure, it's recognized nationwide and can
                significantly boost your career prospects and earning potential. Many employers prefer or require
                ABO certification.
              </p>
              <div className="bg-gray-50 border rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">ABO Exam Quick Facts:</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Format:</strong> Computer-based, multiple choice</li>
                  <li>• <strong>Questions:</strong> 150 questions (125 scored, 25 pretest)</li>
                  <li>• <strong>Time Limit:</strong> 3 hours</li>
                  <li>• <strong>Passing Score:</strong> Scaled score of 300+</li>
                  <li>• <strong>Cost:</strong> $125 for first attempt</li>
                  <li>• <strong>Retake Policy:</strong> Can retake after 30 days</li>
                </ul>
              </div>
            </section>

            <section id="exam-topics" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ABO Exam Topics & Content Breakdown</h2>
              <p className="text-gray-700 mb-4">
                Understanding what's on the ABO exam helps you prioritize your study time. Here's the official
                content breakdown:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">Ophthalmic Optics</h3>
                    <span className="text-blue-600 font-bold">~30%</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Lens formulas, prism, vertex distance, optical centers, transposition, power calculations
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">Products & Materials</h3>
                    <span className="text-blue-600 font-bold">~25%</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Lens materials (CR-39, polycarbonate, Trivex, high-index), coatings, treatments, frame materials
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">Dispensing Procedures</h3>
                    <span className="text-blue-600 font-bold">~25%</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Measurements (PD, seg height, OC), frame selection, fitting, adjustments, verification
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">Anatomy & Physiology</h3>
                    <span className="text-blue-600 font-bold">~10%</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Eye anatomy, refractive errors, vision conditions, contraindications
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">Regulations & Standards</h3>
                    <span className="text-blue-600 font-bold">~10%</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    ANSI standards, FDA regulations, OSHA requirements, professional ethics
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-yellow-800 font-medium">Pro Tip</p>
                  <p className="text-yellow-700 text-sm">
                    Optical math is the #1 reason people fail the ABO exam. Don't skip the calculations – practice
                    them until they become second nature.
                  </p>
                </div>
              </div>
            </section>

            <section id="study-timeline" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Should You Study for the ABO Exam?</h2>
              <p className="text-gray-700 mb-4">
                The right study timeline depends on your background and experience:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Your Background</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Recommended Study Time</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Daily Study Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2+ years optical experience</td>
                      <td className="border border-gray-300 px-4 py-2">6-8 weeks</td>
                      <td className="border border-gray-300 px-4 py-2">1 hour</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Some optical experience</td>
                      <td className="border border-gray-300 px-4 py-2">8-10 weeks</td>
                      <td className="border border-gray-300 px-4 py-2">1-2 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Optician school graduate</td>
                      <td className="border border-gray-300 px-4 py-2">4-6 weeks</td>
                      <td className="border border-gray-300 px-4 py-2">1-2 hours</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Complete beginner</td>
                      <td className="border border-gray-300 px-4 py-2">12+ weeks</td>
                      <td className="border border-gray-300 px-4 py-2">2 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="study-plan" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8-Week ABO Study Plan</h2>
              <p className="text-gray-700 mb-4">
                Here's a proven week-by-week study schedule for ABO exam success:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Weeks 1-2: Foundations</h3>
                  <p className="text-gray-600">Basic optics, lens types, refractive errors, eye anatomy. Build your vocabulary.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Weeks 3-4: Optical Math</h3>
                  <p className="text-gray-600">Power calculations, transposition, prism, vertex distance formulas. Practice daily.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Weeks 5-6: Materials & Dispensing</h3>
                  <p className="text-gray-600">Lens materials, coatings, frame fitting, measurements, adjustments.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Weeks 7-8: Review & Practice Exams</h3>
                  <p className="text-gray-600">Full practice tests, weak area review, test-taking strategies.</p>
                </div>
              </div>
            </section>

            <section id="study-tips" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top 10 ABO Study Strategies</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Master the Math First</h3>
                    <p className="text-gray-600">Optical calculations appear throughout the exam. Get comfortable with formulas early.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Use Active Recall</h3>
                    <p className="text-gray-600">Test yourself frequently instead of just re-reading notes. Flashcards work well.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Take Timed Practice Tests</h3>
                    <p className="text-gray-600">Simulate exam conditions to build stamina and identify weak areas.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Study in Short Sessions</h3>
                    <p className="text-gray-600">45-60 minute focused sessions are more effective than marathon cramming.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Learn the "Why"</h3>
                    <p className="text-gray-600">Understanding concepts beats memorization. Know why things work, not just what they are.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="resources" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best ABO Study Resources</h2>
              <p className="text-gray-700 mb-4">
                Here are the most effective resources for ABO exam preparation:
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Recommended Resources
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li>• <strong>OpticianStudy.com</strong> – Comprehensive online course with practice questions</li>
                  <li>• <strong>System for Ophthalmic Dispensing</strong> by Brooks & Borish</li>
                  <li>• <strong>ABO-NCLE Practice Exams</strong> (official)</li>
                  <li>• <strong>Clinical Optics</strong> by Troy Fannin</li>
                  <li>• <strong>Essentials of Ophthalmic Lens Finishing</strong></li>
                </ul>
              </div>

              <div className="bg-blue-600 text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">Start Your ABO Prep Today</h3>
                <p className="text-blue-100 mb-4">
                  Our comprehensive course covers all ABO exam topics with 300+ lessons and 500+ practice questions.
                </p>
                <Link href="/subscribe" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Start Free Chapter
                </Link>
              </div>
            </section>

            <section id="test-day" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Test Day Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Arrive early</strong> – Get to the testing center 30 minutes before your appointment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Bring valid ID</strong> – Government-issued photo ID required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Read carefully</strong> – Don't rush; you have 3 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Mark and return</strong> – Flag difficult questions and come back</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Trust your prep</strong> – You've done the work; stay confident</span>
                </li>
              </ul>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">How long should I study for the ABO exam?</h3>
                  <p className="text-gray-600">
                    Most candidates need 8-12 weeks of dedicated study time, spending 1-2 hours per day. If you have
                    work experience in optical, you may need less time. Complete beginners should plan for 12+ weeks.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What is the pass rate for the ABO exam?</h3>
                  <p className="text-gray-600">
                    The ABO exam pass rate is approximately 65-70% for first-time test takers. With proper preparation
                    and practice, most candidates can pass on their first attempt.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What topics are covered on the ABO exam?</h3>
                  <p className="text-gray-600">
                    The ABO exam covers ophthalmic optics, lens materials, frame selection and fitting, measurements,
                    lens treatments, and dispensing procedures. Optical math makes up a significant portion of the exam.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I use a calculator on the ABO exam?</h3>
                  <p className="text-gray-600">
                    Yes, the testing center provides an on-screen calculator. However, practice mental math for simple
                    calculations to save time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How soon can I retake the ABO exam if I fail?</h3>
                  <p className="text-gray-600">
                    You can retake the ABO exam after 30 days. Use this time to review your weak areas and take more
                    practice tests before attempting again.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Related Articles */}
          <section className="border-t pt-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/abo-study-guide" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">ABO Study Guide 2025</h3>
                <p className="text-gray-600 text-sm">Complete guide with practice questions and formulas</p>
              </Link>
              <Link href="/blog/how-hard-is-abo-ncle-exam" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How Hard is the ABO Exam?</h3>
                <p className="text-gray-600 text-sm">Pass rates, difficulty, and what to expect</p>
              </Link>
              <Link href="/blog/best-abo-ncle-study-materials" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">Best Study Materials</h3>
                <p className="text-gray-600 text-sm">Books, courses, and resources reviewed</p>
              </Link>
              <Link href="/blog/how-to-become-licensed-optician" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How to Become an Optician</h3>
                <p className="text-gray-600 text-sm">Complete career guide and requirements</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
