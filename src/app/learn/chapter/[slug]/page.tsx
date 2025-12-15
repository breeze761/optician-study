import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getChapterBySlug } from '@/data/chapters'
import { Play, Clock, CheckCircle, ArrowLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const chapter = getChapterBySlug(slug)
  if (!chapter) return { title: 'Chapter Not Found' }

  return {
    title: `${chapter.title} | OpticianStudy`,
    description: chapter.description,
  }
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params
  const chapter = getChapterBySlug(slug)

  if (!chapter) {
    notFound()
  }

  const totalMinutes = chapter.lessons.reduce((acc, lesson) => acc + lesson.estimated_minutes, 0)

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Chapter Header */}
        <section className={`${chapter.is_free ? 'bg-green-600' : 'bg-blue-600'} text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Courses
            </Link>

            <div className="flex items-center gap-3 mb-4">
              {chapter.is_free && (
                <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-medium">
                  FREE CHAPTER
                </span>
              )}
              <span className="text-white/80">Chapter {chapter.order}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {chapter.title}
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mb-6">
              {chapter.description}
            </p>

            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                <span>{chapter.lessons.length} lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>~{totalMinutes} minutes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons List */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Lessons in this Chapter
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {chapter.lessons.map((lesson, index) => (
                <Link
                  key={lesson.id}
                  href={`/learn/lesson/${chapter.slug}/${lesson.slug}`}
                  className="flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 group"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    chapter.is_free ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {lesson.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">
                      {lesson.estimated_minutes} min
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      chapter.is_free ? 'bg-green-600' : 'bg-blue-600'
                    } text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <Play className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Start Button */}
            <div className="mt-8 text-center">
              <Link
                href={`/learn/lesson/${chapter.slug}/${chapter.lessons[0].slug}`}
                className={`inline-flex items-center gap-2 ${
                  chapter.is_free ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                } text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors`}
              >
                <Play className="w-6 h-6" />
                Start First Lesson
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
