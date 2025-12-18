import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Microscope, Target, ArrowRight, CheckCircle, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Optical Equipment Training | Lensometer & More',
  description: 'Master optical equipment for ABO and NCLE exams. Lensometer, keratometer, slit lamp, phoropter, and visual acuity guides.',
  keywords: 'optical equipment training, lensometer training, keratometer tutorial, slit lamp guide, phoropter instructions, ABO exam equipment, NCLE exam equipment, optician equipment',
  alternates: {
    canonical: '/equipment',
  },
}

const equipmentSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Optical Equipment Training Modules",
  "description": "Comprehensive training guides for optical equipment used in eye care",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Lensometer Training",
      "url": "https://www.opticianstudy.com/equipment/lensometer"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Keratometer Training",
      "url": "https://www.opticianstudy.com/equipment/keratometer"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Slit Lamp Training",
      "url": "https://www.opticianstudy.com/equipment/slit-lamp"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Phoropter Training",
      "url": "https://www.opticianstudy.com/equipment/phoropter"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Trial Frame Training",
      "url": "https://www.opticianstudy.com/equipment/trial-frame"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Visual Acuity Testing",
      "url": "https://www.opticianstudy.com/equipment/visual-acuity"
    }
  ]
}

const equipmentCategories = [
  {
    id: 'lensometer',
    title: 'Lensometer (Focimeter)',
    description: 'Learn to measure lens power, find optical centers, detect prism, and verify prescriptions accurately.',
    icon: '🔬',
    topics: [
      'Parts and controls identification',
      'Focusing the eyepiece',
      'Neutralizing single vision lenses',
      'Measuring cylinder power and axis',
      'Finding the optical center',
      'Detecting and measuring prism',
      'Progressive lens measurement',
      'Common errors and troubleshooting'
    ],
    difficulty: 'Essential',
    timeEstimate: '45 min',
    available: true
  },
  {
    id: 'keratometer',
    title: 'Keratometer (Ophthalmometer)',
    description: 'Master corneal curvature measurement for contact lens fitting and astigmatism assessment.',
    icon: '🎯',
    topics: [
      'Principles of keratometry',
      'Parts and controls',
      'Patient positioning',
      'Mire alignment technique',
      'Reading K-values and axis',
      'Understanding corneal astigmatism',
      'Applications in contact lens fitting',
      'Limitations and sources of error'
    ],
    difficulty: 'Essential',
    timeEstimate: '40 min',
    available: true
  },
  {
    id: 'slit-lamp',
    title: 'Slit Lamp Biomicroscope',
    description: 'Examine anterior eye structures, evaluate contact lens fits, and detect ocular conditions.',
    icon: '💡',
    topics: [
      'Parts and controls',
      'Illumination techniques',
      'Magnification selection',
      'Systematic examination routine',
      'Contact lens fit evaluation',
      'Using fluorescein',
      'Common findings and their significance',
      'Documentation and communication'
    ],
    difficulty: 'Essential',
    timeEstimate: '60 min',
    available: true
  },
  {
    id: 'phoropter',
    title: 'Phoropter (Refractor)',
    description: 'Understand the manual phoropter for refraction verification and prescription checking.',
    icon: '👁️',
    topics: [
      'Parts and controls',
      'Setting up for a patient',
      'Sphere and cylinder dials',
      'Axis adjustment',
      'Prism controls',
      'Cross-cylinder technique basics',
      'Jackson cross cylinder',
      'Binocular balance'
    ],
    difficulty: 'Advanced',
    timeEstimate: '50 min',
    available: true
  },
  {
    id: 'trial-frame',
    title: 'Trial Frame & Lenses',
    description: 'Learn trial frame refraction techniques and when to use trial lenses over a phoropter.',
    icon: '🕶️',
    topics: [
      'Trial frame components',
      'Adjusting for the patient',
      'Lens insertion order',
      'Trial lens sets',
      'Advantages over phoropter',
      'High astigmatism verification',
      'Prism with trial lenses',
      'Special populations'
    ],
    difficulty: 'Advanced',
    timeEstimate: '35 min',
    available: true
  },
  {
    id: 'visual-acuity',
    title: 'Visual Acuity Testing',
    description: 'Master visual acuity measurement techniques including Snellen, LogMAR, and special charts.',
    icon: '📊',
    topics: [
      'Snellen chart principles',
      'LogMAR charts',
      'Testing distance setup',
      'Recording notation',
      'Pinhole testing',
      'Near vision testing',
      'Low vision assessment',
      'Pediatric VA testing'
    ],
    difficulty: 'Essential',
    timeEstimate: '30 min',
    available: true
  }
]

export default function EquipmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(equipmentSchema) }} />
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Microscope className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Optical Equipment Training
            </h1>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
              Master the essential instruments every optician must know.
              These skills are critical for the ABO/NCLE exams and daily practice.
            </p>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                ABO Exam Alert
              </h2>
              <p className="text-amber-800 mb-4">
                The ABO certification exam includes a practical component where you must demonstrate
                proficiency with optical equipment. The computerized exam simulates real equipment
                that you must operate correctly. Understanding how these instruments work is essential
                for passing.
              </p>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lensometer:</strong> You&apos;ll neutralize lenses and identify prescription values</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Keratometer:</strong> You&apos;ll measure corneal curvature and identify K-readings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Slit Lamp:</strong> NCLE exam includes biomicroscopy evaluation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Equipment Cards */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Choose Your Training Module
            </h2>

            <div className="space-y-6">
              {equipmentCategories.map((equipment) => (
                <Link
                  key={equipment.id}
                  href={`/equipment/${equipment.id}`}
                  className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="text-5xl">{equipment.icon}</div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {equipment.title}
                        </h3>
                        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">
                          {equipment.difficulty}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {equipment.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Topics covered:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {equipment.topics.slice(0, 6).map((topic, idx) => (
                            <div key={idx} className="text-sm text-gray-500 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                              {topic}
                            </div>
                          ))}
                          {equipment.topics.length > 6 && (
                            <div className="text-sm text-indigo-600">
                              +{equipment.topics.length - 6} more...
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Estimated time: {equipment.timeEstimate}
                        </span>
                        <span className="text-indigo-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Start Training <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Study Tips */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Tips for Equipment Mastery
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-semibold text-gray-900 mb-2">Learn the Theory First</h3>
                <p className="text-sm text-gray-600">
                  Understand the optical principles behind each instrument before
                  practicing. Know why you&apos;re doing each step.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Practice Systematically</h3>
                <p className="text-sm text-gray-600">
                  Develop a consistent routine for each instrument. Same steps,
                  same order, every time. This builds speed and accuracy.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="font-semibold text-gray-900 mb-2">Verify Your Work</h3>
                <p className="text-sm text-gray-600">
                  Always double-check measurements. Re-neutralize lenses, re-read
                  K-values. Accuracy is more important than speed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-indigo-600 text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Practice Calculations Too?
            </h2>
            <p className="text-indigo-100 mb-6">
              Complement your equipment training with our calculation practice tools.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Calculation Practice
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-400 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Full Course Curriculum
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
