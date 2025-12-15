import { Chapter } from '@/types'
import { chapter1 } from './chapter-1'

// All chapters in order
export const chapters: Chapter[] = [
  chapter1,
  // Future chapters will be added here as they're developed
]

// ============================================================================
// EXPANDED CURRICULUM - 200+ Lessons for Long-Term Subscriber Value
// ============================================================================
//
// PART 1: CORE CERTIFICATION (Chapters 1-30) - ~150 lessons
// PART 2: SPECIALTY TRACKS (Chapters 31-37) - ~48 lessons
// PART 3: ADVANCED SKILLS (Chapters 38-43) - ~42 lessons
// PART 4: BUSINESS & CAREER (Chapters 44-49) - ~33 lessons
// PART 5: ONGOING LEARNING (Chapter 50+) - Continuously updated
//
// Total: 300+ lessons = 50+ hours of content
// ============================================================================

interface CurriculumChapter {
  id: string
  title: string
  lessons: number
  isFree: boolean
  section: string
  topics: string[]
  isUpdatedMonthly?: boolean
}

export const curriculumOutline: CurriculumChapter[] = [
  // ============================================================================
  // PART 1: CORE CERTIFICATION PREP (~150 lessons)
  // ============================================================================

  // --- FOUNDATION ---
  {
    id: 'ch1',
    title: 'Introduction to Opticianry',
    lessons: 4,
    isFree: true,
    section: 'Foundation',
    topics: ['Career overview', 'ABO/NCLE certification', 'Scope of practice', 'Essential skills']
  },
  {
    id: 'ch2',
    title: 'Optical Math Fundamentals',
    lessons: 8,
    isFree: false,
    section: 'Foundation',
    topics: ['Diopter calculations', 'Transposition', 'Vertex distance', 'Prism calculations', 'Minimum blank size']
  },
  {
    id: 'ch3',
    title: 'Using Optical Instruments',
    lessons: 6,
    isFree: false,
    section: 'Foundation',
    topics: ['Lensometer operation', 'Pupillometer', 'PD ruler', 'Frame heater', 'Lens clock']
  },

  // --- ABO CERTIFICATION TRACK ---
  {
    id: 'ch4',
    title: 'Anatomy of the Eye',
    lessons: 7,
    isFree: false,
    section: 'ABO Certification',
    topics: ['External structures', 'Internal structures', 'Visual pathway', 'Muscles', 'Blood supply']
  },
  {
    id: 'ch5',
    title: 'Refractive Errors & Conditions',
    lessons: 8,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Myopia', 'Hyperopia', 'Astigmatism', 'Presbyopia', 'Anisometropia', 'Amblyopia']
  },
  {
    id: 'ch6',
    title: 'Optics & Light',
    lessons: 8,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Properties of light', 'Refraction', 'Reflection', 'Vergence', 'Focal length', 'Optical cross']
  },
  {
    id: 'ch7',
    title: 'Prescription Interpretation',
    lessons: 7,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Sphere/cylinder/axis', 'Add power', 'Prism', 'Written vs verbal Rx', 'Transposition practice']
  },
  {
    id: 'ch8',
    title: 'Lens Materials Deep Dive',
    lessons: 8,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Glass', 'CR-39', 'Polycarbonate', 'Trivex', 'Hi-index 1.67/1.74', 'Material selection']
  },
  {
    id: 'ch9',
    title: 'Lens Treatments & Coatings',
    lessons: 6,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Anti-reflective', 'Scratch resistant', 'UV protection', 'Blue light', 'Photochromics', 'Mirror coatings']
  },
  {
    id: 'ch10',
    title: 'Single Vision Lenses',
    lessons: 5,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Spherical designs', 'Aspheric designs', 'Atoric lenses', 'Digital surfacing', 'Thickness optimization']
  },
  {
    id: 'ch11',
    title: 'Multifocal Lenses',
    lessons: 8,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Bifocals', 'Trifocals', 'Seg types', 'Image jump', 'Seg height measurement', 'Problem solving']
  },
  {
    id: 'ch12',
    title: 'Progressive Lenses Mastery',
    lessons: 10,
    isFree: false,
    section: 'ABO Certification',
    topics: ['PAL design', 'Corridor length', 'Fitting cross', 'Brand differences', 'Adaptation issues', 'Non-adapts']
  },
  {
    id: 'ch13',
    title: 'Frame Anatomy & Materials',
    lessons: 6,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Frame parts', 'Metal frames', 'Plastic frames', 'Titanium', 'Memory metal', 'Measurements']
  },
  {
    id: 'ch14',
    title: 'Facial Measurements & Fitting',
    lessons: 8,
    isFree: false,
    section: 'ABO Certification',
    topics: ['PD measurement', 'Seg height', 'Pantoscopic tilt', 'Face form', 'Vertex distance', 'OC placement']
  },
  {
    id: 'ch15',
    title: 'Frame Selection & Styling',
    lessons: 6,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Face shapes', 'Skin tone', 'Lifestyle needs', 'Fashion trends', 'Frame sizing', 'Bridge fit']
  },
  {
    id: 'ch16',
    title: 'Frame Adjustments & Repairs',
    lessons: 8,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Temple adjustment', 'Nose pad adjustment', 'Frame alignment', 'Soldering', 'Screw replacement', 'Troubleshooting']
  },
  {
    id: 'ch17',
    title: 'Dispensing Procedures',
    lessons: 6,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Order verification', 'Lens inspection', 'Frame inspection', 'Patient education', 'Follow-up care']
  },
  {
    id: 'ch18',
    title: 'ABO Exam Prep & Practice',
    lessons: 6,
    isFree: false,
    section: 'ABO Certification',
    topics: ['Full practice exam 1', 'Full practice exam 2', 'Timed simulations', 'Test-taking strategies', 'Weak area review']
  },

  // --- NCLE CERTIFICATION TRACK ---
  {
    id: 'ch19',
    title: 'Contact Lens Fundamentals',
    lessons: 6,
    isFree: false,
    section: 'NCLE Certification',
    topics: ['History of CLs', 'Soft vs rigid', 'Daily vs extended wear', 'Replacement schedules', 'Patient selection']
  },
  {
    id: 'ch20',
    title: 'Contact Lens Materials',
    lessons: 6,
    isFree: false,
    section: 'NCLE Certification',
    topics: ['Hydrogel', 'Silicone hydrogel', 'RGP materials', 'Dk/t values', 'Water content', 'Modulus']
  },
  {
    id: 'ch21',
    title: 'Contact Lens Parameters',
    lessons: 5,
    isFree: false,
    section: 'NCLE Certification',
    topics: ['Base curve', 'Diameter', 'Power', 'Cylinder/axis for torics', 'Add power for multifocals']
  },
  {
    id: 'ch22',
    title: 'Soft Contact Lens Fitting',
    lessons: 8,
    isFree: false,
    section: 'NCLE Certification',
    topics: ['Initial lens selection', 'Evaluation techniques', 'Over-refraction', 'Troubleshooting', 'Documentation']
  },
  {
    id: 'ch23',
    title: 'Specialty Soft Lenses',
    lessons: 6,
    isFree: false,
    section: 'NCLE Certification',
    topics: ['Toric lenses', 'Multifocal CLs', 'Colored lenses', 'Extended wear', 'Daily disposables']
  },
  {
    id: 'ch24',
    title: 'RGP Contact Lenses',
    lessons: 7,
    isFree: false,
    section: 'NCLE Certification',
    topics: ['RGP advantages', 'Fitting philosophy', 'Fluorescein patterns', 'Modification', 'Troubleshooting']
  },
  {
    id: 'ch25',
    title: 'Contact Lens Care Systems',
    lessons: 5,
    isFree: false,
    section: 'NCLE Certification',
    topics: ['Multipurpose solutions', 'Hydrogen peroxide', 'RGP solutions', 'Enzymatic cleaners', 'Compliance']
  },
  {
    id: 'ch26',
    title: 'Contact Lens Complications',
    lessons: 6,
    isFree: false,
    section: 'NCLE Certification',
    topics: ['Giant papillary conjunctivitis', 'Corneal ulcers', 'Dry eye', 'Solution sensitivity', 'When to refer']
  },
  {
    id: 'ch27',
    title: 'NCLE Exam Prep & Practice',
    lessons: 6,
    isFree: false,
    section: 'NCLE Certification',
    topics: ['Full practice exam 1', 'Full practice exam 2', 'Timed simulations', 'Test-taking strategies', 'Weak area review']
  },

  // --- REGULATIONS & ETHICS ---
  {
    id: 'ch28',
    title: 'Laws & Regulations',
    lessons: 5,
    isFree: false,
    section: 'Professional Standards',
    topics: ['State licensing', 'Scope of practice', 'FDA regulations', 'OSHA requirements', 'Record keeping']
  },
  {
    id: 'ch29',
    title: 'HIPAA & Patient Privacy',
    lessons: 4,
    isFree: false,
    section: 'Professional Standards',
    topics: ['PHI protection', 'Patient rights', 'Breach notification', 'Documentation', 'Common violations']
  },
  {
    id: 'ch30',
    title: 'Professional Ethics',
    lessons: 4,
    isFree: false,
    section: 'Professional Standards',
    topics: ['Code of ethics', 'Conflict of interest', 'Patient relationships', 'Continuing education']
  },

  // ============================================================================
  // PART 2: SPECIALTY TRACKS (~48 lessons)
  // ============================================================================

  {
    id: 'ch31',
    title: 'Pediatric Eyewear',
    lessons: 8,
    isFree: false,
    section: 'Specialty Tracks',
    topics: ['Vision development', 'Frame selection for kids', 'Impact-resistant requirements', 'Sports eyewear', 'Fitting challenges']
  },
  {
    id: 'ch32',
    title: 'Sports & Safety Eyewear',
    lessons: 7,
    isFree: false,
    section: 'Specialty Tracks',
    topics: ['ANSI Z87.1 standards', 'Sports-specific needs', 'Rx sport goggles', 'Lens tints for sports', 'Impact resistance']
  },
  {
    id: 'ch33',
    title: 'Low Vision Aids',
    lessons: 8,
    isFree: false,
    section: 'Specialty Tracks',
    topics: ['Magnification principles', 'High-add readers', 'Telescopic systems', 'Electronic aids', 'Working with low vision patients']
  },
  {
    id: 'ch34',
    title: 'Occupational & Computer Eyewear',
    lessons: 6,
    isFree: false,
    section: 'Specialty Tracks',
    topics: ['Computer vision syndrome', 'Office progressives', 'Blue light considerations', 'Workspace ergonomics', 'Task-specific lenses']
  },
  {
    id: 'ch35',
    title: 'Sunwear & Fashion Eyewear',
    lessons: 6,
    isFree: false,
    section: 'Specialty Tracks',
    topics: ['UV protection', 'Polarization', 'Lens tint options', 'Designer frames', 'Fashion trends', 'Upselling techniques']
  },
  {
    id: 'ch36',
    title: 'Presbyopia Solutions',
    lessons: 7,
    isFree: false,
    section: 'Specialty Tracks',
    topics: ['All progressive options', 'Occupational lenses', 'Bifocal alternatives', 'Contact lens options', 'Surgical considerations']
  },
  {
    id: 'ch37',
    title: 'High Prescription Dispensing',
    lessons: 6,
    isFree: false,
    section: 'Specialty Tracks',
    topics: ['High myopia challenges', 'Thick lens solutions', 'Frame selection', 'Cosmetic considerations', 'Weight reduction']
  },

  // ============================================================================
  // PART 3: ADVANCED SKILLS (~42 lessons)
  // ============================================================================

  {
    id: 'ch38',
    title: 'Advanced Lens Technology',
    lessons: 8,
    isFree: false,
    section: 'Advanced Skills',
    topics: ['Free-form technology', 'Wavefront lenses', 'Digital surfacing', 'Personalized progressives', 'Future lens tech']
  },
  {
    id: 'ch39',
    title: 'Troubleshooting Vision Complaints',
    lessons: 8,
    isFree: false,
    section: 'Advanced Skills',
    topics: ['Adaptation problems', 'Headaches', 'Blur complaints', 'Double vision', 'Distortion', 'Systematic approach']
  },
  {
    id: 'ch40',
    title: 'Optical Lab Processes',
    lessons: 6,
    isFree: false,
    section: 'Advanced Skills',
    topics: ['Lens fabrication', 'Surfacing', 'Edging', 'Coating application', 'Quality control', 'Turnaround optimization']
  },
  {
    id: 'ch41',
    title: 'Specialty Contact Lenses',
    lessons: 8,
    isFree: false,
    section: 'Advanced Skills',
    topics: ['Scleral lenses', 'Orthokeratology', 'Prosthetic lenses', 'Keratoconus fitting', 'Post-surgical fitting']
  },
  {
    id: 'ch42',
    title: 'Medical Eyewear',
    lessons: 6,
    isFree: false,
    section: 'Advanced Skills',
    topics: ['Post-cataract eyewear', 'Prism for diplopia', 'Ptosis crutches', 'Moisture chambers', 'Side shields']
  },
  {
    id: 'ch43',
    title: 'Advanced Certification Prep',
    lessons: 6,
    isFree: false,
    section: 'Advanced Skills',
    topics: ['ABO Advanced exam', 'Master Optician pathway', 'Specialty certifications', 'Study strategies']
  },

  // ============================================================================
  // PART 4: BUSINESS & CAREER GROWTH (~33 lessons)
  // ============================================================================

  {
    id: 'ch44',
    title: 'Customer Service Excellence',
    lessons: 6,
    isFree: false,
    section: 'Business Skills',
    topics: ['Communication skills', 'Handling complaints', 'Building rapport', 'Difficult patients', 'Creating loyalty']
  },
  {
    id: 'ch45',
    title: 'Sales Techniques for Opticians',
    lessons: 7,
    isFree: false,
    section: 'Business Skills',
    topics: ['Consultative selling', 'Feature-benefit selling', 'Overcoming objections', 'Upselling ethically', 'Multiple pair sales']
  },
  {
    id: 'ch46',
    title: 'Insurance & Billing Basics',
    lessons: 5,
    isFree: false,
    section: 'Business Skills',
    topics: ['Vision insurance plans', 'Medical vs vision', 'Pre-authorization', 'Common codes', 'Patient education']
  },
  {
    id: 'ch47',
    title: 'Inventory Management',
    lessons: 4,
    isFree: false,
    section: 'Business Skills',
    topics: ['Frame inventory', 'Contact lens stock', 'Ordering systems', 'Turnover optimization', 'Vendor relationships']
  },
  {
    id: 'ch48',
    title: 'Leadership & Management',
    lessons: 5,
    isFree: false,
    section: 'Business Skills',
    topics: ['Team leadership', 'Training staff', 'Performance management', 'Workflow optimization', 'Advancing your career']
  },
  {
    id: 'ch49',
    title: 'Starting Your Own Practice',
    lessons: 6,
    isFree: false,
    section: 'Business Skills',
    topics: ['Business planning', 'Legal requirements', 'Location selection', 'Equipment needs', 'Marketing basics', 'Financial planning']
  },

  // ============================================================================
  // PART 5: ONGOING LEARNING (Updated Monthly)
  // ============================================================================

  {
    id: 'ch50',
    title: 'Industry Updates & News',
    lessons: 4,
    isFree: false,
    section: 'Ongoing Learning',
    topics: ['New lens technologies', 'Frame trends', 'Industry news', 'Research updates'],
    isUpdatedMonthly: true
  },
  {
    id: 'ch51',
    title: 'Case Studies Library',
    lessons: 10,
    isFree: false,
    section: 'Ongoing Learning',
    topics: ['Real-world scenarios', 'Problem-solving practice', 'Complex Rx cases', 'Fitting challenges'],
    isUpdatedMonthly: true
  },
  {
    id: 'ch52',
    title: 'Quick Reference Guides',
    lessons: 8,
    isFree: false,
    section: 'Ongoing Learning',
    topics: ['Formula cheat sheets', 'Material comparison charts', 'Troubleshooting flowcharts', 'Conversion tables'],
    isUpdatedMonthly: true
  }
]

// Calculate totals
export const curriculumStats = {
  totalChapters: curriculumOutline.length,
  totalLessons: curriculumOutline.reduce((sum, ch) => sum + ch.lessons, 0),
  sections: {
    foundation: curriculumOutline.filter(ch => ch.section === 'Foundation').length,
    aboCertification: curriculumOutline.filter(ch => ch.section === 'ABO Certification').length,
    ncleCertification: curriculumOutline.filter(ch => ch.section === 'NCLE Certification').length,
    professionalStandards: curriculumOutline.filter(ch => ch.section === 'Professional Standards').length,
    specialtyTracks: curriculumOutline.filter(ch => ch.section === 'Specialty Tracks').length,
    advancedSkills: curriculumOutline.filter(ch => ch.section === 'Advanced Skills').length,
    businessSkills: curriculumOutline.filter(ch => ch.section === 'Business Skills').length,
    ongoingLearning: curriculumOutline.filter(ch => ch.section === 'Ongoing Learning').length,
  }
}

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

export function getChaptersBySection(section: string) {
  return curriculumOutline.filter(ch => ch.section === section)
}
