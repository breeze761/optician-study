'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LessonContent from '@/components/learn/LessonContent'
import Quiz from '@/components/learn/Quiz'
import { getLessonBySlug, chapters } from '@/data/chapters'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle,
  List
} from 'lucide-react'

interface PageProps {
  params: Promise<{ chapterSlug: string; lessonSlug: string }>
}

export default function LessonPage({ params }: PageProps) {
  const { chapterSlug, lessonSlug } = use(params)
  const result = getLessonBySlug(chapterSlug, lessonSlug)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizScore, setQuizScore] = useState<number | null>(null)

  if (!result) {
    notFound()
  }

  const { chapter, lesson } = result
  const lessonIndex = chapter.lessons.findIndex((l) => l.slug === lesson.slug)
  const prevLesson = lessonIndex > 0 ? chapter.lessons[lessonIndex - 1] : null
  const nextLesson =
    lessonIndex < chapter.lessons.length - 1
      ? chapter.lessons[lessonIndex + 1]
      : null

  const handleQuizComplete = (score: number, passed: boolean) => {
    setQuizScore(score)
    setQuizCompleted(passed)
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Lesson Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              href={`/learn/chapter/${chapter.slug}`}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {chapter.title}
            </Link>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span>Chapter {chapter.order}</span>
              <span>•</span>
              <span>Lesson {lessonIndex + 1} of {chapter.lessons.length}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {lesson.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{lesson.estimated_minutes} min</span>
              </div>
              <div className="flex items-center gap-1">
                <List className="w-4 h-4" />
                <span>{lesson.quiz.questions.length} quiz questions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content/Quiz Toggle */}
        <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex">
              <button
                onClick={() => setShowQuiz(false)}
                className={`flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-colors ${
                  !showQuiz
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Lesson
              </button>
              <button
                onClick={() => setShowQuiz(true)}
                className={`flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-colors ${
                  showQuiz
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                Quiz
                {quizCompleted && (
                  <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    {quizScore}%
                  </span>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {!showQuiz ? (
              <>
                {/* Lesson Content */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-10">
                  <LessonContent content={lesson.content} />

                  {/* Take Quiz CTA */}
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <div className="bg-blue-50 rounded-xl p-6 text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Ready to test your knowledge?
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Complete the quiz to reinforce what you&apos;ve learned and unlock the next lesson.
                      </p>
                      <button
                        onClick={() => setShowQuiz(true)}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Take Quiz
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Quiz
                quiz={lesson.quiz}
                onComplete={handleQuizComplete}
                nextLessonUrl={nextLesson ? `/learn/lesson/${chapter.slug}/${nextLesson.slug}` : null}
                nextLessonTitle={nextLesson?.title || null}
              />
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {prevLesson ? (
                <Link
                  href={`/learn/lesson/${chapter.slug}/${prevLesson.slug}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous:</span> {prevLesson.title}
                </Link>
              ) : (
                <div />
              )}

              {nextLesson ? (
                <Link
                  href={`/learn/lesson/${chapter.slug}/${nextLesson.slug}`}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <span className="hidden sm:inline">Next:</span> {nextLesson.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  href="/learn"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  Chapter Complete!
                  <CheckCircle className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
