import { Metadata } from 'next'
import HomePage from '@/components/pages/HomePage'

export const metadata: Metadata = {
  title: 'OpticianStudy - ABO & NCLE Exam Prep | Become a Certified Optician',
  description: 'Master the ABO and NCLE certification exams with our comprehensive, self-paced optician training program. 52 chapters, 325+ lessons, 500+ practice questions. Start free today.',
  keywords: 'optician training, ABO exam prep, NCLE exam prep, optician certification, optician course, become an optician, optical education, optician study guide',
  alternates: {
    canonical: '/',
  },
}

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "OpticianStudy",
  "description": "Comprehensive ABO and NCLE optician certification exam preparation",
  "url": "https://www.opticianstudy.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.opticianstudy.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "OpticianStudy",
  "description": "Online optician training and certification exam preparation",
  "url": "https://www.opticianstudy.com",
  "sameAs": [],
  "offers": {
    "@type": "Offer",
    "category": "Optician Training",
    "description": "ABO and NCLE exam preparation courses"
  }
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <HomePage />
    </>
  )
}
