// Progress tracking using localStorage
// In the future, this can be synced with Supabase for logged-in users

export interface LessonProgress {
  lessonSlug: string
  chapterSlug: string
  completed: boolean
  quizScore: number | null
  completedAt: string | null
}

export interface UserProgress {
  lessons: Record<string, LessonProgress>
  totalStudyTimeMinutes: number
}

const PROGRESS_KEY = 'optician-study-progress'

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return { lessons: {}, totalStudyTimeMinutes: 0 }
  }

  const stored = localStorage.getItem(PROGRESS_KEY)
  if (!stored) {
    return { lessons: {}, totalStudyTimeMinutes: 0 }
  }

  try {
    return JSON.parse(stored)
  } catch {
    return { lessons: {}, totalStudyTimeMinutes: 0 }
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
  } catch (error) {
    console.error('Failed to save progress to localStorage:', error)
  }
}

export function markLessonComplete(
  chapterSlug: string,
  lessonSlug: string,
  quizScore: number
): void {
  if (typeof window === 'undefined') return

  try {
    const progress = getProgress()
    const key = `${chapterSlug}/${lessonSlug}`

    progress.lessons[key] = {
      lessonSlug,
      chapterSlug,
      completed: true,
      quizScore,
      completedAt: new Date().toISOString()
    }

    saveProgress(progress)
    console.log('Progress saved:', key, quizScore)
  } catch (error) {
    console.error('Failed to mark lesson complete:', error)
  }
}

export function isLessonComplete(chapterSlug: string, lessonSlug: string): boolean {
  const progress = getProgress()
  const key = `${chapterSlug}/${lessonSlug}`
  return progress.lessons[key]?.completed || false
}

export function getLessonScore(chapterSlug: string, lessonSlug: string): number | null {
  const progress = getProgress()
  const key = `${chapterSlug}/${lessonSlug}`
  return progress.lessons[key]?.quizScore || null
}

export function getCompletedLessonsCount(): number {
  const progress = getProgress()
  return Object.values(progress.lessons).filter(l => l.completed).length
}

export function getQuizzesPassed(): number {
  const progress = getProgress()
  return Object.values(progress.lessons).filter(l => l.completed && l.quizScore !== null && l.quizScore >= 70).length
}

export function addStudyTime(minutes: number): void {
  const progress = getProgress()
  progress.totalStudyTimeMinutes += minutes
  saveProgress(progress)
}

export function getStudyTimeHours(): number {
  const progress = getProgress()
  return Math.round(progress.totalStudyTimeMinutes / 60)
}
