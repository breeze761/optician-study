import { Chapter } from '@/types'
import { chapter1 } from './chapter-1'

// All chapters in order
export const chapters: Chapter[] = [
  chapter1,
  // Future chapters will be added here as they're developed:
  // chapter2 - Optical Math Fundamentals
  // chapter3 - Basic Anatomy of the Eye
  // chapter4 - Optics Fundamentals
  // chapter5 - Reading & Interpreting Prescriptions
  // chapter6 - Lens Materials & Treatments
  // chapter7 - Frame Selection & Measurements
  // chapter8 - Multifocal & Progressive Lenses
  // chapter9 - ABO Practice Exam
  // chapter10 - Contact Lens Basics (NCLE)
  // chapter11 - Contact Lens Fitting (NCLE)
  // chapter12 - NCLE Practice Exam
  // chapter13 - Regulations & Professional Ethics
]

// Chapter summaries for curriculum overview
// Structure: Introduction → Optical Math → ABO content → ABO Exam → NCLE content → NCLE Exam → Ethics
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
    title: 'Optical Math Fundamentals',
    lessons: 6,
    isFree: false,
    topics: ['Optical formulas', 'Reading a lensometer', 'Astigmatism calculations', 'Transposition', 'Unit conversions']
  },
  // === ABO SECTION (Spectacle Dispensing) ===
  {
    id: 'ch3',
    title: 'Basic Anatomy of the Eye',
    lessons: 5,
    isFree: false,
    topics: ['Eye structures', 'How vision works', 'Common conditions', 'Refractive errors']
  },
  {
    id: 'ch4',
    title: 'Optics Fundamentals',
    lessons: 6,
    isFree: false,
    topics: ['Light and refraction', 'Prisms', 'Lens types', 'Vergence', 'Focal length']
  },
  {
    id: 'ch5',
    title: 'Reading & Interpreting Prescriptions',
    lessons: 5,
    isFree: false,
    topics: ['Sphere, cylinder, axis', 'Add power', 'Prism notation', 'Prescription formats']
  },
  {
    id: 'ch6',
    title: 'Lens Materials & Treatments',
    lessons: 5,
    isFree: false,
    topics: ['CR-39, polycarbonate, hi-index', 'AR coatings', 'Tints', 'Photochromics']
  },
  {
    id: 'ch7',
    title: 'Frame Selection & Measurements',
    lessons: 6,
    isFree: false,
    topics: ['PD measurement', 'Seg height', 'Frame anatomy', 'Face shapes', 'Fitting adjustments']
  },
  {
    id: 'ch8',
    title: 'Multifocal & Progressive Lenses',
    lessons: 5,
    isFree: false,
    topics: ['Bifocals', 'Trifocals', 'Progressive designs', 'Fitting considerations']
  },
  {
    id: 'ch9',
    title: 'ABO Practice Exam',
    lessons: 3,
    isFree: false,
    topics: ['Full-length practice test', 'Timed simulation', 'Answer explanations']
  },
  // === NCLE SECTION (Contact Lenses) ===
  {
    id: 'ch10',
    title: 'Contact Lens Basics',
    lessons: 5,
    isFree: false,
    topics: ['Soft vs rigid lenses', 'Materials (hydrogel, silicone)', 'Parameters', 'Care systems']
  },
  {
    id: 'ch11',
    title: 'Contact Lens Fitting',
    lessons: 6,
    isFree: false,
    topics: ['Keratometry', 'Base curve selection', 'Fitting evaluation', 'Troubleshooting']
  },
  {
    id: 'ch12',
    title: 'NCLE Practice Exam',
    lessons: 3,
    isFree: false,
    topics: ['Full-length practice test', 'Timed simulation', 'Answer explanations']
  },
  // === PROFESSIONAL STANDARDS ===
  {
    id: 'ch13',
    title: 'Regulations & Professional Ethics',
    lessons: 4,
    isFree: false,
    topics: ['State licensure laws', 'HIPAA compliance', 'Professional conduct', 'Scope of practice']
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
