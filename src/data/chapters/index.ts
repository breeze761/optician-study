import { Chapter } from '@/types'
import { chapter1 } from './chapter-1'

// All chapters in order
export const chapters: Chapter[] = [
  chapter1,
  // Future chapters will be added here as they're developed:
  // chapter2 - Basic Anatomy of the Eye
  // chapter3 - Optics Fundamentals
  // chapter4 - Reading & Interpreting Prescriptions
  // chapter5 - Lens Materials & Treatments
  // chapter6 - Frame Selection & Measurements
  // chapter7 - Multifocal & Progressive Lenses
  // chapter8 - Contact Lens Basics (NCLE)
  // chapter9 - Contact Lens Fitting (NCLE)
  // chapter10 - Regulations & Ethics
  // chapter11 - Practice Exams
]

// Chapter summaries for curriculum overview
export const curriculumOutline = [
  {
    id: 'ch1',
    title: 'Introduction to Opticianry',
    lessons: 4,
    isFree: true,
    topics: ['Career overview', 'ABO/NCLE certification', 'Scope of practice', 'Essential skills']
  },
  {
    id: 'ch2',
    title: 'Basic Anatomy of the Eye',
    lessons: 5,
    isFree: false,
    topics: ['Eye structures', 'How vision works', 'Common conditions', 'Refractive errors']
  },
  {
    id: 'ch3',
    title: 'Optics Fundamentals',
    lessons: 6,
    isFree: false,
    topics: ['Light and refraction', 'Prisms', 'Lens types', 'Optical calculations']
  },
  {
    id: 'ch4',
    title: 'Reading & Interpreting Prescriptions',
    lessons: 5,
    isFree: false,
    topics: ['Sphere, cylinder, axis', 'Add power', 'Prism', 'Transposition']
  },
  {
    id: 'ch5',
    title: 'Lens Materials & Treatments',
    lessons: 5,
    isFree: false,
    topics: ['CR-39, polycarbonate, hi-index', 'Coatings', 'Tints', 'Photochromics']
  },
  {
    id: 'ch6',
    title: 'Frame Selection & Measurements',
    lessons: 6,
    isFree: false,
    topics: ['PD measurement', 'Seg height', 'Frame anatomy', 'Face shapes', 'Fitting']
  },
  {
    id: 'ch7',
    title: 'Multifocal & Progressive Lenses',
    lessons: 5,
    isFree: false,
    topics: ['Bifocals', 'Trifocals', 'Progressive lenses', 'Fitting considerations']
  },
  {
    id: 'ch8',
    title: 'Contact Lens Basics (NCLE)',
    lessons: 5,
    isFree: false,
    topics: ['Lens types', 'Materials', 'Parameters', 'Care systems']
  },
  {
    id: 'ch9',
    title: 'Contact Lens Fitting (NCLE)',
    lessons: 6,
    isFree: false,
    topics: ['Keratometry', 'Base curves', 'Fitting evaluation', 'Troubleshooting']
  },
  {
    id: 'ch10',
    title: 'Regulations & Ethics',
    lessons: 4,
    isFree: false,
    topics: ['State laws', 'HIPAA', 'Professional conduct', 'Scope of practice']
  },
  {
    id: 'ch11',
    title: 'Practice Exams',
    lessons: 4,
    isFree: false,
    topics: ['Full ABO practice exam', 'Full NCLE practice exam', 'Review strategies']
  }
]

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find(ch => ch.slug === slug)
}

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find(ch => ch.id === id)
}

export function getLessonBySlug(chapterSlug: string, lessonSlug: string) {
  const chapter = getChapterBySlug(chapterSlug)
  if (!chapter) return null
  const lesson = chapter.lessons.find(l => l.slug === lessonSlug)
  return lesson ? { chapter, lesson } : null
}
