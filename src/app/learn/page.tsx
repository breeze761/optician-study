import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { chapters, curriculumOutline } from '@/data/chapters'
import { Lock, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Optician Course Curriculum | ABO & NCLE Exam Prep Lessons',
  description: 'Browse our complete optician training curriculum with 52 chapters and 325+ lessons covering everything for ABO and NCLE certification exams. Start with a free chapter today.',
  keywords: 'optician course, ABO exam lessons, NCLE exam curriculum, optician training chapters, optical education, optician certification course',
  alternates: {
    canonical: '/learn',
  },
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "OpticianStudy Certification Prep",
  "description": "Comprehensive ABO and NCLE optician certification exam preparation course",
  "provider": {
    "@type": "Organization",
    "name": "OpticianStudy",
    "url": "https://www.opticianstudy.com"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT50H"
  },
  "numberOfCredits": 52,
  "educationalLevel": "Professional Certification"
}

export default function LearnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Curriculum
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Our comprehensive program covers everything you need to pass the ABO and NCLE certification exams.
              Start with the free introduction chapter below.
            </p>
          </div>
        </section>

        {/* Chapters List */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {curriculumOutline.map((chapterOutline, index) => {
                const fullChapter = chapters.find(c => c.id === chapterOutline.id)
                const isAvailable = fullChapter !== undefined

                return (
                  <div
                    key={chapterOutline.id}
                    className={`bg-white rounded-xl border-2 overflow-hidden ${
                      chapterOutline.isFree
                        ? 'border-green-200'
                        : 'border-gray-200'
                    }`}
                  >
                    {/* Chapter Header */}
                    <div className={`p-6 ${chapterOutline.isFree ? 'bg-green-50' : 'bg-gray-50'}`}>
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                            chapterOutline.isFree
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-300 text-gray-600'
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-xl font-bold text-gray-900">
                              {chapterOutline.title}
                            </h2>
                            {chapterOutline.isFree ? (
                              <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-medium">
                                FREE
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                                <Lock className="w-3 h-3" />
                                Premium
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-3">
                            {chapterOutline.lessons} lessons
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {chapterOutline.topics.map((topic) => (
                              <span
                                key={topic}
                                className="text-xs bg-white text-gray-600 px-2 py-1 rounded border border-gray-200"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        {isAvailable && chapterOutline.isFree && (
                          <Link
                            href={`/learn/chapter/${fullChapter.slug}`}
                            className="hidden md:flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                          >
                            <Play className="w-4 h-4" />
                            Start Chapter
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Lessons List */}
                    {isAvailable && fullChapter.lessons.length > 0 && (
                      <div className="border-t border-gray-200">
                        {fullChapter.lessons.map((lesson, lessonIndex) => (
                          <Link
                            key={lesson.id}
                            href={`/learn/lesson/${fullChapter.slug}/${lesson.slug}`}
                            className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                          >
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-500">
                              {lessonIndex + 1}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                              <p className="text-sm text-gray-500">{lesson.estimated_minutes} min</p>
                            </div>
                            <Play className="w-5 h-5 text-gray-400" />
                          </Link>
                        ))}
                      </div>
                    )}

                    {!isAvailable && (
                      <div className="p-6 text-center text-gray-500 border-t border-gray-200">
                        <Lock className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                        <p>This chapter is coming soon with premium membership.</p>
                        <Link
                          href="/subscribe"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          View pricing
                        </Link>
                      </div>
                    )}

                    {/* Mobile Start Button */}
                    {isAvailable && chapterOutline.isFree && (
                      <div className="md:hidden p-4 border-t border-gray-200">
                        <Link
                          href={`/learn/chapter/${fullChapter.slug}`}
                          className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                          <Play className="w-4 h-4" />
                          Start Chapter
                        </Link>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
