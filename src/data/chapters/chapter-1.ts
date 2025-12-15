import { Chapter } from '@/types'

export const chapter1: Chapter = {
  id: 'ch1',
  slug: 'introduction-to-opticianry',
  title: 'Introduction to Opticianry',
  description: 'Learn about the optical profession, career paths, certification requirements, and what it takes to become a licensed optician.',
  order: 1,
  is_free: true,
  lessons: [
    {
      id: 'ch1-l1',
      slug: 'what-is-an-optician',
      chapter_id: 'ch1',
      title: 'What is an Optician?',
      description: 'Understand the role of opticians in eye care and how they differ from other eye care professionals.',
      order: 1,
      estimated_minutes: 8,
      content: {
        sections: [
          {
            type: 'heading',
            content: 'The Role of an Optician'
          },
          {
            type: 'text',
            content: 'An optician is a healthcare professional who specializes in fitting and dispensing corrective eyewear based on prescriptions written by ophthalmologists or optometrists. Opticians are the bridge between the eye doctor\'s prescription and the patient\'s perfect pair of glasses or contact lenses.'
          },
          {
            type: 'callout',
            content: 'Opticians do NOT perform eye exams or diagnose eye conditions. They work with prescriptions provided by licensed eye doctors.',
            variant: 'info'
          },
          {
            type: 'heading',
            content: 'Eye Care Team: Understanding the Differences'
          },
          {
            type: 'definition',
            term: 'Ophthalmologist (MD/DO)',
            content: 'Medical doctors who can perform surgery, treat eye diseases, and prescribe medications. They complete 4 years of medical school plus 4+ years of residency.'
          },
          {
            type: 'definition',
            term: 'Optometrist (OD)',
            content: 'Doctors of Optometry who perform eye exams, prescribe glasses and contacts, and treat certain eye conditions. They complete 4 years of optometry school after college.'
          },
          {
            type: 'definition',
            term: 'Optician',
            content: 'Professionals who interpret prescriptions and fit patients with the appropriate eyewear. Training varies by state but typically includes formal education and/or apprenticeship.'
          },
          {
            type: 'heading',
            content: 'What Opticians Do Daily'
          },
          {
            type: 'list',
            content: 'Key responsibilities include:',
            items: [
              'Interpreting eyeglass and contact lens prescriptions',
              'Taking facial measurements (pupillary distance, segment heights, etc.)',
              'Helping patients select frames that fit their face and lifestyle',
              'Recommending appropriate lens materials and treatments',
              'Adjusting and repairing eyewear',
              'Fitting and teaching patients how to use contact lenses',
              'Troubleshooting vision problems with new eyewear',
              'Managing inventory and ordering supplies'
            ]
          },
          {
            type: 'callout',
            content: 'The best opticians combine technical knowledge with excellent customer service skills. You\'re not just fitting glasses—you\'re helping people see the world clearly!',
            variant: 'tip'
          }
        ]
      },
      quiz: {
        passing_score: 80,
        questions: [
          {
            id: 'ch1-l1-q1',
            question: 'Which eye care professional can perform eye surgery?',
            options: [
              'Optician',
              'Optometrist',
              'Ophthalmologist',
              'All of the above'
            ],
            correct_answer: 2,
            explanation: 'Ophthalmologists are medical doctors (MD or DO) who are trained and licensed to perform eye surgery. Optometrists and opticians cannot perform surgery.'
          },
          {
            id: 'ch1-l1-q2',
            question: 'What is the primary role of an optician?',
            options: [
              'Diagnosing eye diseases',
              'Performing eye exams',
              'Fitting and dispensing corrective eyewear',
              'Prescribing medications'
            ],
            correct_answer: 2,
            explanation: 'Opticians specialize in fitting and dispensing eyeglasses and contact lenses based on prescriptions from eye doctors. They do not diagnose conditions or prescribe medications.'
          },
          {
            id: 'ch1-l1-q3',
            question: 'Which measurement is commonly taken by opticians when fitting glasses?',
            options: [
              'Blood pressure',
              'Pupillary distance',
              'Intraocular pressure',
              'Visual field'
            ],
            correct_answer: 1,
            explanation: 'Pupillary distance (PD) is a key measurement taken by opticians to ensure the optical centers of the lenses align with the patient\'s pupils. The other measurements are performed by eye doctors.'
          },
          {
            id: 'ch1-l1-q4',
            question: 'An Optometrist has which degree?',
            options: [
              'MD',
              'DO',
              'OD',
              'PhD'
            ],
            correct_answer: 2,
            explanation: 'Optometrists hold a Doctor of Optometry (OD) degree. MD and DO are medical doctor degrees held by ophthalmologists.'
          },
          {
            id: 'ch1-l1-q5',
            question: 'Can opticians perform eye exams?',
            options: [
              'Yes, all types of eye exams',
              'Only basic vision screenings',
              'No, they cannot perform eye exams',
              'Only with special certification'
            ],
            correct_answer: 2,
            explanation: 'Opticians cannot perform eye exams. They work with prescriptions provided by ophthalmologists or optometrists who are licensed to examine eyes and write prescriptions.'
          }
        ]
      }
    },
    {
      id: 'ch1-l2',
      slug: 'career-paths-in-optical',
      chapter_id: 'ch1',
      title: 'Career Paths in Optical',
      description: 'Explore the various career opportunities available in the optical industry.',
      order: 2,
      estimated_minutes: 7,
      content: {
        sections: [
          {
            type: 'heading',
            content: 'Where Can You Work?'
          },
          {
            type: 'text',
            content: 'The optical industry offers diverse career settings, each with its own advantages and challenges. Your choice of workplace will affect your daily responsibilities, income potential, and work-life balance.'
          },
          {
            type: 'heading',
            content: 'Work Settings'
          },
          {
            type: 'definition',
            term: 'Private Optometry/Ophthalmology Practice',
            content: 'Work directly with eye doctors in a clinical setting. Often more personalized patient care, medical eyewear focus, and opportunities to learn from doctors. May include contact lens fitting and specialty eyewear.'
          },
          {
            type: 'definition',
            term: 'Retail Optical Chains',
            content: 'Large retailers like LensCrafters, Pearle Vision, or Visionworks. Higher volume, structured training programs, benefits packages, and advancement opportunities to management.'
          },
          {
            type: 'definition',
            term: 'Independent Optical Boutiques',
            content: 'Smaller shops often featuring designer frames and personalized service. More creative freedom in frame selection, but may require broader skill set including sales and inventory management.'
          },
          {
            type: 'definition',
            term: 'Wholesale Optical Labs',
            content: 'Manufacturing facilities that fabricate lenses. Focus on technical skills like lens cutting, edging, and coating. Less patient interaction but strong technical foundation.'
          },
          {
            type: 'definition',
            term: 'Hospital/Medical Centers',
            content: 'Work with patients who have complex medical needs, post-surgical cases, or low vision. Often requires additional specialized training.'
          },
          {
            type: 'heading',
            content: 'Career Advancement'
          },
          {
            type: 'list',
            content: 'With experience and certification, you can advance to:',
            items: [
              'Lead Optician or Optical Manager',
              'Regional Manager overseeing multiple locations',
              'Lab Manager in manufacturing',
              'Sales Representative for frame or lens companies',
              'Optical Educator or Trainer',
              'Practice Owner (in states that allow it)',
              'Specialty fitting expert (low vision, sports, pediatrics)'
            ]
          },
          {
            type: 'callout',
            content: 'The median salary for opticians is approximately $40,000-$50,000 per year, with experienced licensed opticians in management earning $60,000-$80,000+.',
            variant: 'info'
          }
        ]
      },
      quiz: {
        passing_score: 80,
        questions: [
          {
            id: 'ch1-l2-q1',
            question: 'Which work setting typically offers the highest patient volume?',
            options: [
              'Independent optical boutique',
              'Private optometry practice',
              'Retail optical chain',
              'Wholesale optical lab'
            ],
            correct_answer: 2,
            explanation: 'Retail optical chains like LensCrafters typically see the highest volume of patients due to their accessible locations and marketing reach.'
          },
          {
            id: 'ch1-l2-q2',
            question: 'Where would you work if you wanted to focus on lens fabrication rather than patient interaction?',
            options: [
              'Private practice',
              'Optical boutique',
              'Wholesale optical lab',
              'Hospital optical department'
            ],
            correct_answer: 2,
            explanation: 'Wholesale optical labs focus on manufacturing and fabricating lenses, with less direct patient interaction compared to dispensing settings.'
          },
          {
            id: 'ch1-l2-q3',
            question: 'Which career path might involve working with post-surgical patients?',
            options: [
              'Retail chain optician',
              'Hospital/Medical center optician',
              'Optical lab technician',
              'Frame sales representative'
            ],
            correct_answer: 1,
            explanation: 'Hospital and medical center opticians often work with patients who have complex medical needs, including those recovering from eye surgery.'
          },
          {
            id: 'ch1-l2-q4',
            question: 'What is a potential career advancement for an experienced optician?',
            options: [
              'Eye surgeon',
              'Optometrist',
              'Optical manager',
              'Ophthalmologist'
            ],
            correct_answer: 2,
            explanation: 'Optical manager is a realistic career advancement for opticians. Becoming an optometrist or ophthalmologist requires separate advanced degree programs.'
          }
        ]
      }
    },
    {
      id: 'ch1-l3',
      slug: 'abo-ncle-certification',
      chapter_id: 'ch1',
      title: 'ABO & NCLE Certification',
      description: 'Learn about the national certification exams and why they matter for your career.',
      order: 3,
      estimated_minutes: 10,
      content: {
        sections: [
          {
            type: 'heading',
            content: 'What is ABO Certification?'
          },
          {
            type: 'text',
            content: 'The American Board of Opticianry (ABO) offers the national certification exam for eyeglass dispensing. Passing the ABO exam demonstrates your competency in fitting and dispensing spectacles and is required or preferred by most employers.'
          },
          {
            type: 'callout',
            content: 'ABO certification is voluntary at the national level, but many states require it for licensure. Even in states without licensure requirements, being ABO-certified gives you a significant advantage in the job market.',
            variant: 'info'
          },
          {
            type: 'heading',
            content: 'ABO Exam Overview'
          },
          {
            type: 'list',
            content: 'The ABO exam covers:',
            items: [
              'Optical theory and applied optics',
              'Lens materials, treatments, and designs',
              'Frame materials and styles',
              'Facial measurements and fitting',
              'Prescription interpretation',
              'Dispensing procedures',
              'Patient communication',
              'Regulations and professional standards'
            ]
          },
          {
            type: 'text',
            content: 'The exam consists of approximately 150 multiple-choice questions. You have 3 hours to complete it. A score of 70% or higher is typically required to pass.'
          },
          {
            type: 'heading',
            content: 'What is NCLE Certification?'
          },
          {
            type: 'text',
            content: 'The National Contact Lens Examiners (NCLE) certification is for professionals who fit and dispense contact lenses. This is a separate certification from ABO and covers the specialized knowledge needed for contact lens fitting.'
          },
          {
            type: 'heading',
            content: 'NCLE Exam Overview'
          },
          {
            type: 'list',
            content: 'The NCLE exam covers:',
            items: [
              'Contact lens types and materials',
              'Ocular anatomy related to contact lens wear',
              'Fitting procedures and measurements',
              'Patient education and care instructions',
              'Troubleshooting common problems',
              'Handling and care systems',
              'Regulations and scope of practice'
            ]
          },
          {
            type: 'callout',
            content: 'Many opticians pursue both ABO and NCLE certifications to maximize their career opportunities and earning potential.',
            variant: 'tip'
          },
          {
            type: 'heading',
            content: 'State Licensure'
          },
          {
            type: 'text',
            content: 'Currently, 23 states require optician licensure. Requirements vary but typically include passing the ABO/NCLE exams plus state-specific jurisprudence exams, and completing continuing education to maintain your license.'
          },
          {
            type: 'list',
            content: 'States requiring optician licensure include:',
            items: [
              'Alaska, Arizona, Arkansas, California, Connecticut',
              'Florida, Georgia, Hawaii, Kentucky, Massachusetts',
              'Nevada, New Jersey, New York, North Carolina, Ohio',
              'Rhode Island, South Carolina, Tennessee, Texas, Vermont',
              'Virginia, Washington, and more'
            ]
          }
        ]
      },
      quiz: {
        passing_score: 80,
        questions: [
          {
            id: 'ch1-l3-q1',
            question: 'What does ABO stand for?',
            options: [
              'American Bureau of Optometry',
              'American Board of Opticianry',
              'Association of Board Opticians',
              'Advanced Board of Optics'
            ],
            correct_answer: 1,
            explanation: 'ABO stands for American Board of Opticianry, the organization that administers the national certification exam for eyeglass dispensing.'
          },
          {
            id: 'ch1-l3-q2',
            question: 'What does NCLE certification cover?',
            options: [
              'Eyeglass frame fitting',
              'Eye surgery assistance',
              'Contact lens fitting and dispensing',
              'Optical lab equipment'
            ],
            correct_answer: 2,
            explanation: 'NCLE (National Contact Lens Examiners) certification specifically covers the knowledge and skills needed to fit and dispense contact lenses.'
          },
          {
            id: 'ch1-l3-q3',
            question: 'Approximately how many states require optician licensure?',
            options: [
              'All 50 states',
              'About 23 states',
              'Only 5 states',
              'No states require it'
            ],
            correct_answer: 1,
            explanation: 'Currently, approximately 23 states require optician licensure. Requirements and regulations vary by state.'
          },
          {
            id: 'ch1-l3-q4',
            question: 'What is the typical passing score for the ABO exam?',
            options: [
              '50%',
              '60%',
              '70%',
              '90%'
            ],
            correct_answer: 2,
            explanation: 'The ABO exam typically requires a score of 70% or higher to pass.'
          },
          {
            id: 'ch1-l3-q5',
            question: 'Which of the following is NOT covered on the ABO exam?',
            options: [
              'Prescription interpretation',
              'Lens materials and treatments',
              'Contact lens fitting procedures',
              'Frame materials and styles'
            ],
            correct_answer: 2,
            explanation: 'Contact lens fitting procedures are covered on the NCLE exam, not the ABO exam. The ABO exam focuses on spectacle (eyeglass) dispensing.'
          }
        ]
      }
    },
    {
      id: 'ch1-l4',
      slug: 'essential-skills-for-opticians',
      chapter_id: 'ch1',
      title: 'Essential Skills for Success',
      description: 'Discover the key technical and soft skills that make opticians successful.',
      order: 4,
      estimated_minutes: 8,
      content: {
        sections: [
          {
            type: 'heading',
            content: 'Technical Skills'
          },
          {
            type: 'text',
            content: 'Success as an optician requires a blend of technical knowledge and hands-on skills. You\'ll need to become proficient in measurements, calculations, and equipment operation.'
          },
          {
            type: 'list',
            content: 'Core technical skills include:',
            items: [
              'Reading and interpreting prescriptions accurately',
              'Taking precise facial measurements',
              'Understanding optical principles (how light bends through lenses)',
              'Operating lensometers, pupillometers, and other equipment',
              'Adjusting and repairing frames',
              'Calculating lens thickness and selecting appropriate materials',
              'Verifying finished eyewear against prescriptions'
            ]
          },
          {
            type: 'heading',
            content: 'Soft Skills'
          },
          {
            type: 'text',
            content: 'Technical knowledge alone won\'t make you successful. The best opticians excel at connecting with patients and making the eyewear experience positive.'
          },
          {
            type: 'list',
            content: 'Essential soft skills:',
            items: [
              'Active listening - understanding what patients need and want',
              'Clear communication - explaining complex topics simply',
              'Patience - especially with frustrated or indecisive patients',
              'Attention to detail - small errors cause big problems',
              'Problem-solving - troubleshooting fit and vision issues',
              'Sales ability - helping patients see the value in quality eyewear',
              'Empathy - many patients are anxious about their vision'
            ]
          },
          {
            type: 'callout',
            content: 'Remember: patients often feel vulnerable about their vision. A compassionate optician who takes time to explain things clearly will build lasting patient relationships.',
            variant: 'tip'
          },
          {
            type: 'heading',
            content: 'Math Skills'
          },
          {
            type: 'text',
            content: 'You don\'t need to be a math genius, but basic math skills are essential. You\'ll work with:'
          },
          {
            type: 'list',
            content: '',
            items: [
              'Fractions and decimals (prescription powers)',
              'Basic geometry (frame angles, lens shapes)',
              'Unit conversions (mm to cm)',
              'Percentages (lens treatments, discounts)',
              'Basic algebra (transposition formulas)'
            ]
          },
          {
            type: 'callout',
            content: 'Don\'t worry if math isn\'t your strong suit! We\'ll cover all the calculations you need in later chapters with plenty of practice problems.',
            variant: 'info'
          }
        ]
      },
      quiz: {
        passing_score: 80,
        questions: [
          {
            id: 'ch1-l4-q1',
            question: 'Which instrument is used to measure the power of an existing lens?',
            options: [
              'Pupillometer',
              'Lensometer',
              'Keratometer',
              'Phoropter'
            ],
            correct_answer: 1,
            explanation: 'A lensometer (also called a lensmeter or vertometer) is used to measure the prescription power of existing lenses.'
          },
          {
            id: 'ch1-l4-q2',
            question: 'Why is attention to detail especially important for opticians?',
            options: [
              'To impress supervisors',
              'Because small errors in eyewear can cause significant problems',
              'It\'s not that important',
              'Only for paperwork purposes'
            ],
            correct_answer: 1,
            explanation: 'Small errors in measurements or prescription interpretation can result in eyewear that doesn\'t work properly, causing headaches, eye strain, or poor vision for patients.'
          },
          {
            id: 'ch1-l4-q3',
            question: 'Which soft skill helps when a patient is frustrated about their new glasses?',
            options: [
              'Technical knowledge',
              'Math skills',
              'Patience and empathy',
              'Sales ability'
            ],
            correct_answer: 2,
            explanation: 'When patients are frustrated, patience and empathy help you understand their concerns and work toward a solution while keeping them calm.'
          },
          {
            id: 'ch1-l4-q4',
            question: 'What type of math is used when working with prescription powers?',
            options: [
              'Calculus',
              'Fractions and decimals',
              'Trigonometry',
              'Statistics'
            ],
            correct_answer: 1,
            explanation: 'Prescription powers are written using decimals (like +2.50 or -1.75), and understanding fractions and decimals is essential for working with these values.'
          }
        ]
      }
    }
  ]
}
