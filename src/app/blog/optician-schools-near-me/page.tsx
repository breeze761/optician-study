import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, MapPin, GraduationCap, DollarSign, Clock3, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Optician Schools Near Me: Find Accredited Programs in 2025',
  description: 'Directory of accredited optician training programs in the US. Compare schools by state, program length, cost, and online options. Find the best path to your optician career.',
  keywords: 'optician schools, optician training programs, optician school near me, optical technician school, opticianry programs, optician degree',
  alternates: {
    canonical: '/blog/optician-schools-near-me',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Optician Schools Near Me: Find Accredited Programs in 2025",
  description: "Directory of accredited optician training programs across the United States.",
  author: { "@type": "Organization", name: "OpticianStudy" },
  publisher: { "@type": "Organization", name: "OpticianStudy" },
  datePublished: "2025-01-08",
  dateModified: "2025-01-08",
}

const schoolsByRegion = {
  northeast: [
    { name: "SUNY College of Optometry (NY)", type: "Associate", duration: "2 years", notes: "Highly regarded program" },
    { name: "Essex County College (NJ)", type: "Associate", duration: "2 years", notes: "COEA accredited" },
    { name: "New York City College of Technology", type: "Associate", duration: "2 years", notes: "City University of New York" },
    { name: "Middlesex Community College (MA)", type: "Certificate", duration: "1 year", notes: "Flexible scheduling" },
  ],
  southeast: [
    { name: "Miami Dade College (FL)", type: "Associate", duration: "2 years", notes: "Large program, COEA accredited" },
    { name: "Hillsborough Community College (FL)", type: "Associate", duration: "2 years", notes: "Tampa area" },
    { name: "Durham Technical Community College (NC)", type: "Associate", duration: "2 years", notes: "Strong job placement" },
    { name: "Roane State Community College (TN)", type: "Associate", duration: "2 years", notes: "Online options available" },
  ],
  midwest: [
    { name: "Ferris State University (MI)", type: "Associate/Bachelor", duration: "2-4 years", notes: "One of the oldest programs" },
    { name: "Cuyahoga Community College (OH)", type: "Associate", duration: "2 years", notes: "Cleveland area" },
    { name: "Columbus State Community College (OH)", type: "Associate", duration: "2 years", notes: "COEA accredited" },
  ],
  west: [
    { name: "Los Angeles City College (CA)", type: "Associate", duration: "2 years", notes: "Established program" },
    { name: "Ohlone College (CA)", type: "Certificate", duration: "1 year", notes: "Bay Area location" },
    { name: "Spokane Community College (WA)", type: "Associate", duration: "2 years", notes: "Pacific Northwest" },
    { name: "Pima Community College (AZ)", type: "Certificate", duration: "1 year", notes: "Tucson area" },
  ],
  southwest: [
    { name: "El Paso Community College (TX)", type: "Associate", duration: "2 years", notes: "COEA accredited" },
    { name: "Tyler Junior College (TX)", type: "Associate", duration: "2 years", notes: "East Texas" },
  ],
}

export default function OpticianSchoolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Optician Schools Near Me</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">Education</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />January 8, 2025</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Optician Schools Near Me: Find Accredited Programs in 2025
            </h1>
            <p className="text-xl text-gray-600">
              Directory of optician training programs across the United States. Find the right school for your career.
            </p>
          </header>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-indigo-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />Quick Facts About Optician Education
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-indigo-800">
                <Clock3 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span><strong>Duration:</strong> 1-2 years (certificate to associate)</span>
              </div>
              <div className="flex items-start gap-2 text-indigo-800">
                <DollarSign className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span><strong>Cost:</strong> $3,000-$30,000 (varies by school)</span>
              </div>
              <div className="flex items-start gap-2 text-indigo-800">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span><strong>Accreditation:</strong> Look for COEA accredited programs</span>
              </div>
              <div className="flex items-start gap-2 text-indigo-800">
                <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span><strong>Availability:</strong> ~30 programs nationwide + online options</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Optician Programs</h2>
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Certificate Programs (1 year)</h3>
                  <p className="text-gray-600 text-sm">Focused training in optical dispensing. Fastest path to certification eligibility. Best for career changers or those with some optical experience.</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Associate Degree (2 years)</h3>
                  <p className="text-gray-600 text-sm">Comprehensive education including general education courses. Preferred by many employers. Opens more advancement opportunities.</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Bachelor's Degree (4 years)</h3>
                  <p className="text-gray-600 text-sm">Rare but available at some institutions. Best for those considering optical management or further education.</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Apprenticeship (2-4 years)</h3>
                  <p className="text-gray-600 text-sm">Learn while working under a licensed optician. Available in most states. Earn income while training.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accredited Programs by Region</h2>
              <p className="text-gray-700 mb-4">
                Programs accredited by the <strong>Commission on Opticianry Accreditation (COEA)</strong> meet
                national standards for optician education. Graduation from an accredited program may qualify you
                for ABO/NCLE certification without additional experience requirements.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />Northeast
                  </h3>
                  <div className="space-y-3">
                    {schoolsByRegion.northeast.map((school, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-900">{school.name}</h4>
                            <p className="text-gray-600 text-sm">{school.notes}</p>
                          </div>
                          <div className="text-right">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{school.type}</span>
                            <p className="text-gray-500 text-xs mt-1">{school.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-600" />Southeast
                  </h3>
                  <div className="space-y-3">
                    {schoolsByRegion.southeast.map((school, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-900">{school.name}</h4>
                            <p className="text-gray-600 text-sm">{school.notes}</p>
                          </div>
                          <div className="text-right">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">{school.type}</span>
                            <p className="text-gray-500 text-xs mt-1">{school.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-600" />Midwest
                  </h3>
                  <div className="space-y-3">
                    {schoolsByRegion.midwest.map((school, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-900">{school.name}</h4>
                            <p className="text-gray-600 text-sm">{school.notes}</p>
                          </div>
                          <div className="text-right">
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">{school.type}</span>
                            <p className="text-gray-500 text-xs mt-1">{school.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-purple-600" />West
                  </h3>
                  <div className="space-y-3">
                    {schoolsByRegion.west.map((school, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-900">{school.name}</h4>
                            <p className="text-gray-600 text-sm">{school.notes}</p>
                          </div>
                          <div className="text-right">
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">{school.type}</span>
                            <p className="text-gray-500 text-xs mt-1">{school.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />Southwest
                  </h3>
                  <div className="space-y-3">
                    {schoolsByRegion.southwest.map((school, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-900">{school.name}</h4>
                            <p className="text-gray-600 text-sm">{school.notes}</p>
                          </div>
                          <div className="text-right">
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">{school.type}</span>
                            <p className="text-gray-500 text-xs mt-1">{school.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Optician Training Options</h2>
              <p className="text-gray-700 mb-4">
                If there's no program near you, online learning combined with work experience is a viable path.
              </p>

              <div className="bg-white border rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">Benefits of Online Learning</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Study at your own pace while working</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>More affordable than traditional programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Gain practical experience in a real optical setting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Flexible scheduling for busy adults</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> Online coursework must typically be combined with hands-on experience
                  (often obtained through employment at an optical) to meet ABO/NCLE eligibility requirements.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Choose an Optician School</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Check Accreditation</h3>
                    <p className="text-gray-600 text-sm">COEA-accredited programs meet national standards and may provide exam eligibility advantages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Consider Total Cost</h3>
                    <p className="text-gray-600 text-sm">Include tuition, books, supplies, and living expenses. Community colleges are often most affordable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Review Job Placement Rates</h3>
                    <p className="text-gray-600 text-sm">Ask schools for employment statistics and industry connections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Evaluate Clinical Experience</h3>
                    <p className="text-gray-600 text-sm">Hands-on training is crucial. Look for programs with externship or clinical components.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">5</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Check Exam Pass Rates</h3>
                    <p className="text-gray-600 text-sm">Good programs share their ABO/NCLE pass rates. Higher rates indicate quality instruction.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No School Near You?</h2>
              <p className="text-gray-700 mb-4">
                You have options even if there's no accredited program in your area:
              </p>
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Option 1: Apprenticeship</h3>
                  <p className="text-gray-600 text-sm">Work under a licensed optician while studying independently. Available in most states. Earn while you learn.</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Option 2: Online Study + Optical Employment</h3>
                  <p className="text-gray-600 text-sm">Use online courses like OpticianStudy while gaining experience at a local optical retailer.</p>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Option 3: Distance Learning Programs</h3>
                  <p className="text-gray-600 text-sm">Some accredited schools offer hybrid programs with online coursework and periodic in-person labs.</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-600 text-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl mb-2">Start Your Optician Education Today</h3>
              <p className="text-blue-100 mb-4">
                Our comprehensive online course prepares you for ABO & NCLE certification with 52 chapters and 500+ practice questions.
              </p>
              <Link href="/subscribe" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Chapter
              </Link>
            </div>
          </div>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/how-to-become-licensed-optician" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">How to Become a Licensed Optician</h3>
                <p className="text-gray-600 text-sm">Complete career guide</p>
              </Link>
              <Link href="/blog/best-abo-ncle-study-materials" className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">Best ABO & NCLE Study Materials</h3>
                <p className="text-gray-600 text-sm">Books, courses, and resources reviewed</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
