// Centralized blog post data - add new posts here and they'll automatically
// appear on the blog index and relevant hub pages

export type BlogCategory =
  | 'ABO Exam'
  | 'NCLE Exam'
  | 'Career'
  | 'Resources'
  | 'Education'
  | 'Certification'
  | 'Exams'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: BlogCategory
  // Tags help hub pages find related content
  tags: string[]
  // Featured posts appear at top of hub pages
  featured?: boolean
}

// Add new blog posts here - they'll automatically appear on relevant pages
export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-study-for-abo-exam',
    title: 'How to Study for the ABO Exam: Complete 2025 Guide',
    excerpt: 'Master the American Board of Opticianry exam with proven study strategies, recommended resources, and a week-by-week study plan.',
    date: '2025-01-15',
    readTime: '12 min read',
    category: 'ABO Exam',
    tags: ['abo', 'study-guide', 'exam-prep', 'certification'],
    featured: true,
  },
  {
    slug: 'how-to-study-for-ncle-exam',
    title: 'How to Study for the NCLE Exam: Complete 2025 Guide',
    excerpt: 'Everything you need to pass the National Contact Lens Examiners certification. Study tips, practice questions, and expert advice.',
    date: '2025-01-14',
    readTime: '11 min read',
    category: 'NCLE Exam',
    tags: ['ncle', 'study-guide', 'exam-prep', 'contact-lens', 'certification'],
    featured: true,
  },
  {
    slug: 'how-to-become-licensed-optician',
    title: 'How to Become a Licensed Optician: Step-by-Step Career Guide',
    excerpt: 'Complete roadmap to starting your optician career. Education requirements, licensing, salary expectations, and career paths.',
    date: '2025-01-13',
    readTime: '15 min read',
    category: 'Career',
    tags: ['career', 'licensing', 'salary', 'education', 'getting-started'],
    featured: true,
  },
  {
    slug: 'what-is-an-optician',
    title: 'What is an Optician? Roles, Responsibilities & Career Overview',
    excerpt: 'Discover what opticians do, how they differ from optometrists and ophthalmologists, and why this career is in high demand.',
    date: '2025-01-12',
    readTime: '8 min read',
    category: 'Career',
    tags: ['career', 'getting-started', 'job-description'],
  },
  {
    slug: 'abo-study-guide',
    title: 'ABO Study Guide 2025: Topics, Practice Questions & Tips',
    excerpt: 'Comprehensive study guide covering all ABO exam topics. Includes practice questions, formulas, and test-taking strategies.',
    date: '2025-01-11',
    readTime: '18 min read',
    category: 'ABO Exam',
    tags: ['abo', 'study-guide', 'practice-questions', 'exam-prep'],
    featured: true,
  },
  {
    slug: 'ncle-study-guide',
    title: 'NCLE Study Guide 2025: Everything You Need to Know',
    excerpt: 'Complete NCLE exam preparation guide. Contact lens fitting, care systems, troubleshooting, and practice questions.',
    date: '2025-01-10',
    readTime: '16 min read',
    category: 'NCLE Exam',
    tags: ['ncle', 'study-guide', 'practice-questions', 'contact-lens', 'exam-prep'],
    featured: true,
  },
  {
    slug: 'best-abo-ncle-study-materials',
    title: 'Best ABO & NCLE Study Materials: Books, Courses & Resources',
    excerpt: 'Honest reviews of the top study materials for optician certification. Find the right books, courses, and practice tests for your learning style.',
    date: '2025-01-09',
    readTime: '10 min read',
    category: 'Resources',
    tags: ['abo', 'ncle', 'study-materials', 'books', 'resources'],
  },
  {
    slug: 'optician-schools-near-me',
    title: 'Optician Schools Near Me: Find Accredited Programs in 2025',
    excerpt: 'Directory of accredited optician training programs in the US. Compare schools by state, program length, and cost.',
    date: '2025-01-08',
    readTime: '9 min read',
    category: 'Education',
    tags: ['education', 'schools', 'training', 'career'],
  },
  {
    slug: 'abo-ncle-ce-credits-online',
    title: 'How to Get ABO & NCLE CE Credits Online (2025 Guide)',
    excerpt: 'Complete guide to earning continuing education credits online. Approved providers, costs, and how to maintain your certification.',
    date: '2025-01-07',
    readTime: '7 min read',
    category: 'Certification',
    tags: ['ce-credits', 'certification', 'renewal', 'abo', 'ncle'],
  },
  {
    slug: 'how-hard-is-abo-ncle-exam',
    title: 'How Hard is the ABO & NCLE Exam? Pass Rates & Difficulty',
    excerpt: 'Honest assessment of ABO and NCLE exam difficulty. Pass rates, common challenges, and how to prepare effectively.',
    date: '2025-01-06',
    readTime: '8 min read',
    category: 'Exams',
    tags: ['abo', 'ncle', 'exam-prep', 'pass-rates', 'difficulty'],
  },
]

// Helper functions for filtering posts

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag))
}

export function getPostsByTags(tags: string[]): BlogPost[] {
  return blogPosts.filter(post =>
    tags.some(tag => post.tags.includes(tag))
  )
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

export function getABOPosts(): BlogPost[] {
  return blogPosts.filter(post =>
    post.tags.includes('abo') || post.category === 'ABO Exam'
  )
}

export function getNCLEPosts(): BlogPost[] {
  return blogPosts.filter(post =>
    post.tags.includes('ncle') || post.category === 'NCLE Exam'
  )
}

export function getCareerPosts(): BlogPost[] {
  return blogPosts.filter(post =>
    post.tags.includes('career') ||
    post.category === 'Career' ||
    post.category === 'Education'
  )
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getRelatedPosts(currentSlug: string, limit: number = 4): BlogPost[] {
  const currentPost = blogPosts.find(post => post.slug === currentSlug)
  if (!currentPost) return []

  // Find posts with overlapping tags, excluding current post
  const related = blogPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => ({
      post,
      score: post.tags.filter(tag => currentPost.tags.includes(tag)).length +
             (post.category === currentPost.category ? 2 : 0)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)

  return related
}
