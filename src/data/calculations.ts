import { CalculationCategory, CalculationProblem, CalculationType } from '@/types'

// Transposition Problems - Converting plus to minus cylinder form and vice versa
const transpositionProblems: CalculationProblem[] = [
  // Easy problems
  {
    id: 'trans-1',
    type: 'transposition',
    difficulty: 'easy',
    question: 'Transpose the following prescription from plus cylinder to minus cylinder form:\n+2.00 +1.00 x 090',
    given: { sphere: 2.00, cylinder: 1.00, axis: 90 },
    answer: '+3.00 -1.00 x 180',
    explanation: 'To transpose: (1) Add sphere and cylinder algebraically: +2.00 + 1.00 = +3.00, (2) Change cylinder sign: +1.00 becomes -1.00, (3) Change axis by 90°: 090 becomes 180.',
    formula: 'New Sphere = Old Sphere + Old Cylinder\nNew Cylinder = Opposite sign of Old Cylinder\nNew Axis = Old Axis ± 90°',
    steps: [
      'Add sphere + cylinder: +2.00 + (+1.00) = +3.00',
      'Change cylinder sign: +1.00 → -1.00',
      'Rotate axis 90°: 090 + 90 = 180'
    ]
  },
  {
    id: 'trans-2',
    type: 'transposition',
    difficulty: 'easy',
    question: 'Transpose: -1.50 -0.50 x 180',
    given: { sphere: -1.50, cylinder: -0.50, axis: 180 },
    answer: '-2.00 +0.50 x 090',
    explanation: 'Add sphere and cylinder: -1.50 + (-0.50) = -2.00. Change cylinder sign to +0.50. Change axis by 90°: 180 - 90 = 090.',
    steps: [
      'Add sphere + cylinder: -1.50 + (-0.50) = -2.00',
      'Change cylinder sign: -0.50 → +0.50',
      'Rotate axis 90°: 180 - 90 = 090'
    ]
  },
  {
    id: 'trans-3',
    type: 'transposition',
    difficulty: 'easy',
    question: 'Transpose: +1.00 +2.00 x 045',
    given: { sphere: 1.00, cylinder: 2.00, axis: 45 },
    answer: '+3.00 -2.00 x 135',
    explanation: 'Add sphere and cylinder: +1.00 + 2.00 = +3.00. Change cylinder sign to -2.00. Add 90° to axis: 45 + 90 = 135.',
    steps: [
      'Add sphere + cylinder: +1.00 + (+2.00) = +3.00',
      'Change cylinder sign: +2.00 → -2.00',
      'Rotate axis 90°: 045 + 90 = 135'
    ]
  },
  // Medium problems
  {
    id: 'trans-4',
    type: 'transposition',
    difficulty: 'medium',
    question: 'Transpose: -3.25 +1.75 x 172',
    given: { sphere: -3.25, cylinder: 1.75, axis: 172 },
    answer: '-1.50 -1.75 x 082',
    explanation: 'Add sphere and cylinder: -3.25 + 1.75 = -1.50. Change cylinder sign to -1.75. Subtract 90° from axis: 172 - 90 = 082.',
    steps: [
      'Add sphere + cylinder: -3.25 + (+1.75) = -1.50',
      'Change cylinder sign: +1.75 → -1.75',
      'Rotate axis 90°: 172 - 90 = 082'
    ]
  },
  {
    id: 'trans-5',
    type: 'transposition',
    difficulty: 'medium',
    question: 'Transpose: +0.75 -2.25 x 015',
    given: { sphere: 0.75, cylinder: -2.25, axis: 15 },
    answer: '-1.50 +2.25 x 105',
    explanation: 'Add sphere and cylinder: +0.75 + (-2.25) = -1.50. Change cylinder sign to +2.25. Add 90° to axis: 15 + 90 = 105.',
    steps: [
      'Add sphere + cylinder: +0.75 + (-2.25) = -1.50',
      'Change cylinder sign: -2.25 → +2.25',
      'Rotate axis 90°: 015 + 90 = 105'
    ]
  },
  {
    id: 'trans-6',
    type: 'transposition',
    difficulty: 'medium',
    question: 'Transpose: -4.50 +3.00 x 165',
    given: { sphere: -4.50, cylinder: 3.00, axis: 165 },
    answer: '-1.50 -3.00 x 075',
    explanation: 'Add sphere and cylinder: -4.50 + 3.00 = -1.50. Change cylinder sign to -3.00. Subtract 90° from axis: 165 - 90 = 075.',
    steps: [
      'Add sphere + cylinder: -4.50 + (+3.00) = -1.50',
      'Change cylinder sign: +3.00 → -3.00',
      'Rotate axis 90°: 165 - 90 = 075'
    ]
  },
  // Hard problems
  {
    id: 'trans-7',
    type: 'transposition',
    difficulty: 'hard',
    question: 'Transpose: -6.75 +4.25 x 008',
    given: { sphere: -6.75, cylinder: 4.25, axis: 8 },
    answer: '-2.50 -4.25 x 098',
    explanation: 'Add sphere and cylinder: -6.75 + 4.25 = -2.50. Change cylinder sign to -4.25. Add 90° to axis: 8 + 90 = 098.',
    steps: [
      'Add sphere + cylinder: -6.75 + (+4.25) = -2.50',
      'Change cylinder sign: +4.25 → -4.25',
      'Rotate axis 90°: 008 + 90 = 098'
    ]
  },
  {
    id: 'trans-8',
    type: 'transposition',
    difficulty: 'hard',
    question: 'Transpose: +2.25 -3.50 x 127',
    given: { sphere: 2.25, cylinder: -3.50, axis: 127 },
    answer: '-1.25 +3.50 x 037',
    explanation: 'Add sphere and cylinder: +2.25 + (-3.50) = -1.25. Change cylinder sign to +3.50. Subtract 90° from axis: 127 - 90 = 037.',
    steps: [
      'Add sphere + cylinder: +2.25 + (-3.50) = -1.25',
      'Change cylinder sign: -3.50 → +3.50',
      'Rotate axis 90°: 127 - 90 = 037'
    ]
  }
]

// Vertex Distance Problems
const vertexDistanceProblems: CalculationProblem[] = [
  {
    id: 'vertex-1',
    type: 'vertex-distance',
    difficulty: 'easy',
    question: 'A patient\'s refraction at 12mm vertex distance is -6.00D. What power is needed for a contact lens (0mm vertex)?',
    given: { originalPower: -6.00, originalVertex: 12, newVertex: 0 },
    answer: -5.58,
    answerUnit: 'D',
    tolerance: 0.05,
    explanation: 'Using the vertex distance formula: Fc = Fs / (1 - d × Fs), where d is in meters. Fc = -6.00 / (1 - 0.012 × -6.00) = -6.00 / 1.072 = -5.60D (rounded to -5.50D or -5.75D in practice)',
    formula: 'Fc = Fs / (1 - d × Fs)\nwhere Fc = compensated power, Fs = spectacle power, d = vertex distance in meters',
    steps: [
      'Convert vertex distance to meters: 12mm = 0.012m',
      'Apply formula: Fc = -6.00 / (1 - 0.012 × -6.00)',
      'Calculate: Fc = -6.00 / (1 + 0.072) = -6.00 / 1.072',
      'Result: Fc = -5.60D (round to nearest 0.25D = -5.50D or -5.75D)'
    ]
  },
  {
    id: 'vertex-2',
    type: 'vertex-distance',
    difficulty: 'easy',
    question: 'A spectacle Rx of +8.00D at 14mm vertex distance. What is the effective power at the cornea (contact lens)?',
    given: { originalPower: 8.00, originalVertex: 14, newVertex: 0 },
    answer: 8.99,
    answerUnit: 'D',
    tolerance: 0.05,
    explanation: 'For plus lenses moving closer to eye, power increases. Fc = +8.00 / (1 - 0.014 × 8.00) = +8.00 / 0.888 = +9.01D',
    steps: [
      'Convert vertex distance: 14mm = 0.014m',
      'Apply formula: Fc = +8.00 / (1 - 0.014 × 8.00)',
      'Calculate: Fc = +8.00 / (1 - 0.112) = +8.00 / 0.888',
      'Result: Fc = +9.00D'
    ]
  },
  {
    id: 'vertex-3',
    type: 'vertex-distance',
    difficulty: 'medium',
    question: 'Contact lens power is -10.00D. What spectacle lens power is needed at 13mm vertex distance?',
    given: { originalPower: -10.00, originalVertex: 0, newVertex: 13 },
    answer: -8.85,
    answerUnit: 'D',
    tolerance: 0.05,
    explanation: 'Going from contact to spectacle (increasing distance), we reverse the formula. Fs = Fc / (1 + d × Fc) = -10.00 / (1 + 0.013 × -10.00) = -10.00 / 0.87 = -11.49D. Wait - we need the inverse: Fs = -10.00 / (1 - 0.013 × -10.00) would give wrong result. The correct approach: if CL is -10.00, spec at 13mm = -10/(1+0.013×10) = -10/1.13 = -8.85D',
    steps: [
      'For CL to spectacle: Fs = Fc / (1 + d × |Fc|) for minus',
      'Fs = -10.00 / (1 + 0.013 × 10.00)',
      'Fs = -10.00 / 1.13',
      'Result: Fs = -8.85D'
    ]
  },
  {
    id: 'vertex-4',
    type: 'vertex-distance',
    difficulty: 'medium',
    question: 'Original Rx: -12.00D at 10mm. New frame sits at 14mm. What adjusted power is needed?',
    given: { originalPower: -12.00, originalVertex: 10, newVertex: 14 },
    answer: -11.45,
    answerUnit: 'D',
    tolerance: 0.1,
    explanation: 'First find effective power at cornea, then calculate for new vertex. Moving lens farther from eye with minus lens requires less minus power.',
    steps: [
      'Find corneal power: Fc = -12.00 / (1 - 0.010 × -12.00) = -12.00 / 1.12 = -10.71D',
      'Calculate for 14mm: Fs = -10.71 / (1 + 0.014 × 10.71) = -10.71 / 1.15 = -11.45D',
      'Or use direct formula for vertex change'
    ]
  },
  {
    id: 'vertex-5',
    type: 'vertex-distance',
    difficulty: 'hard',
    question: 'A +15.00D aphakic spectacle lens at 12mm vertex. Calculate the IOL power needed (assume IOL at principal plane of eye).',
    given: { originalPower: 15.00, originalVertex: 12 },
    answer: 18.29,
    answerUnit: 'D',
    tolerance: 0.1,
    explanation: 'For high plus powers, vertex distance compensation is significant. Moving the lens closer to the eye increases effective plus power substantially.',
    steps: [
      'Fc = +15.00 / (1 - 0.012 × 15.00)',
      'Fc = +15.00 / (1 - 0.18)',
      'Fc = +15.00 / 0.82',
      'Result: Fc = +18.29D'
    ]
  }
]

// Prism Diopter / Prentice Rule Problems
const prismProblems: CalculationProblem[] = [
  {
    id: 'prism-1',
    type: 'prism-diopter',
    difficulty: 'easy',
    question: 'A lens has a power of -4.00D. If the optical center is decentered 5mm from the pupil, how much prism is induced?',
    given: { power: -4.00, decentration: 5 },
    answer: 2.0,
    answerUnit: 'Δ (prism diopters)',
    tolerance: 0.1,
    explanation: 'Using Prentice\'s Rule: P = c × F, where c is decentration in cm and F is lens power in diopters.',
    formula: 'Prism (Δ) = Decentration (cm) × Power (D)\nP = c × F',
    steps: [
      'Convert mm to cm: 5mm = 0.5cm',
      'Apply Prentice\'s Rule: P = 0.5 × 4.00',
      'Result: P = 2.0Δ'
    ]
  },
  {
    id: 'prism-2',
    type: 'prism-diopter',
    difficulty: 'easy',
    question: 'How much prism is induced when looking 8mm below the optical center of a +3.00D lens?',
    given: { power: 3.00, decentration: 8 },
    answer: 2.4,
    answerUnit: 'Δ',
    tolerance: 0.1,
    explanation: 'P = c × F = 0.8cm × 3.00D = 2.4Δ. For a plus lens, looking below OC induces base-up prism.',
    steps: [
      'Convert to cm: 8mm = 0.8cm',
      'Apply formula: P = 0.8 × 3.00 = 2.4Δ',
      'Direction: Plus lens, looking below OC = Base Up'
    ]
  },
  {
    id: 'prism-3',
    type: 'prism-diopter',
    difficulty: 'medium',
    question: 'A patient needs 3Δ base-in prism OU. The lens power is -6.00D. How much should each lens be decentered and in which direction?',
    given: { prismNeeded: 3, power: -6.00, prismBase: 'in' },
    answer: 5,
    answerUnit: 'mm decentered OUT',
    tolerance: 0.1,
    explanation: 'For base-in prism with minus lens, decenter the OC outward (temporally). c = P/F = 3/6 = 0.5cm = 5mm out.',
    steps: [
      'Rearrange Prentice\'s Rule: c = P/F',
      'c = 3Δ / 6.00D = 0.5cm = 5mm',
      'Direction: Minus lens + Base In = Decenter OUT',
      'Each lens decentered 5mm temporally'
    ]
  },
  {
    id: 'prism-4',
    type: 'prism-diopter',
    difficulty: 'medium',
    question: 'Calculate total vertical prism at reading position (10mm below OC) for: OD -5.00D, OS -3.00D',
    given: { powerOD: -5.00, powerOS: -3.00, dropDistance: 10 },
    answer: 2.0,
    answerUnit: 'Δ imbalance',
    tolerance: 0.1,
    explanation: 'Calculate prism for each eye and find the difference (imbalance). This causes vertical imbalance when reading.',
    steps: [
      'OD prism: 1.0cm × 5.00D = 5.0Δ Base Down',
      'OS prism: 1.0cm × 3.00D = 3.0Δ Base Down',
      'Imbalance: 5.0 - 3.0 = 2.0Δ',
      'OD has 2.0Δ more BD relative to OS'
    ]
  },
  {
    id: 'prism-5',
    type: 'prism-diopter',
    difficulty: 'hard',
    question: 'A patient\'s Rx is OD: -4.50 -2.00 x 180, OS: -3.00 -1.50 x 180. Calculate vertical prism imbalance 8mm below OC.',
    given: { sphereOD: -4.50, cylOD: -2.00, axisOD: 180, sphereOS: -3.00, cylOS: -1.50, axisOS: 180, drop: 8 },
    answer: 1.6,
    answerUnit: 'Δ',
    tolerance: 0.1,
    explanation: 'For vertical prism with axis 180, use sphere + cylinder power (90° meridian power). OD: -4.50 + (-2.00) = -6.50D, OS: -3.00 + (-1.50) = -4.50D',
    steps: [
      'Find 90° meridian power (vertical):',
      'OD: -4.50 + (-2.00) = -6.50D',
      'OS: -3.00 + (-1.50) = -4.50D',
      'OD prism: 0.8 × 6.50 = 5.2Δ',
      'OS prism: 0.8 × 4.50 = 3.6Δ',
      'Imbalance: 5.2 - 3.6 = 1.6Δ'
    ]
  },
  {
    id: 'prism-6',
    type: 'prism-diopter',
    difficulty: 'hard',
    question: 'Resolve 4Δ at base 45° into horizontal and vertical components.',
    given: { prism: 4, baseAngle: 45 },
    answer: '2.83Δ BU, 2.83Δ BI',
    explanation: 'Use trigonometry to resolve oblique prism. Horizontal = P × cos(θ), Vertical = P × sin(θ)',
    steps: [
      'Horizontal component: 4 × cos(45°) = 4 × 0.707 = 2.83Δ',
      'Vertical component: 4 × sin(45°) = 4 × 0.707 = 2.83Δ',
      'Base 45° in first quadrant = Base Up and In',
      'Result: 2.83Δ BU, 2.83Δ BI'
    ]
  }
]

// Decentration / PD Problems
const decentrationProblems: CalculationProblem[] = [
  {
    id: 'decent-1',
    type: 'decentration',
    difficulty: 'easy',
    question: 'Frame PD is 70mm, patient PD is 64mm. How much total decentration is needed?',
    given: { framePD: 70, patientPD: 64 },
    answer: 6,
    answerUnit: 'mm total (3mm per lens)',
    explanation: 'Total decentration = Frame PD - Patient PD. Divide by 2 for per-lens decentration inward.',
    formula: 'Total Decentration = Frame PD - Patient PD\nPer Lens = Total / 2',
    steps: [
      'Total decentration: 70 - 64 = 6mm',
      'Per lens: 6 / 2 = 3mm inward each',
      'OC moves nasally 3mm in each lens'
    ]
  },
  {
    id: 'decent-2',
    type: 'decentration',
    difficulty: 'easy',
    question: 'Calculate per-lens decentration: Frame A = 52mm, DBL = 18mm, Patient PD = 62mm',
    given: { frameA: 52, dbl: 18, patientPD: 62 },
    answer: 4,
    answerUnit: 'mm inward per lens',
    explanation: 'Frame PD = A + DBL = 52 + 18 = 70mm. Decentration per lens = (70 - 62) / 2 = 4mm inward.',
    steps: [
      'Calculate Frame PD: A + DBL = 52 + 18 = 70mm',
      'Total decentration: 70 - 62 = 8mm',
      'Per lens: 8 / 2 = 4mm inward'
    ]
  },
  {
    id: 'decent-3',
    type: 'decentration',
    difficulty: 'medium',
    question: 'Patient has monocular PDs: OD 31mm, OS 33mm. Frame GC (geometric center) is 35mm from bridge center each side. Calculate decentration for each lens.',
    given: { pdOD: 31, pdOS: 33, frameHalfPD: 35 },
    answer: 'OD: 4mm in, OS: 2mm in',
    explanation: 'Compare each monocular PD to half the frame PD to find individual decentrations.',
    steps: [
      'OD decentration: 35 - 31 = 4mm inward',
      'OS decentration: 35 - 33 = 2mm inward',
      'Note: Unequal decentration needed'
    ]
  },
  {
    id: 'decent-4',
    type: 'decentration',
    difficulty: 'medium',
    question: 'Minimum blank size calculation: Frame A = 54mm, Frame B = 40mm, ED = 58mm, Decentration = 5mm. What minimum blank diameter is needed?',
    given: { frameA: 54, frameB: 40, ed: 58, decentration: 5 },
    answer: 68,
    answerUnit: 'mm',
    tolerance: 1,
    explanation: 'MBS = ED + (2 × decentration) + 2mm safety margin',
    formula: 'MBS = ED + (2 × Decentration) + Safety\nor MBS = ED + Total Decentration + 2mm',
    steps: [
      'Use effective diameter (ED)',
      'MBS = 58 + (2 × 5) + 2',
      'MBS = 58 + 10 + 2 = 70mm',
      'Order next available size: 70mm blank'
    ]
  },
  {
    id: 'decent-5',
    type: 'decentration',
    difficulty: 'hard',
    question: 'Seg height calculation: Patient OC height is 24mm, frame B = 42mm, seg drop needed = 5mm. What seg height should be ordered?',
    given: { ocHeight: 24, frameB: 42, segDrop: 5 },
    answer: 19,
    answerUnit: 'mm',
    explanation: 'Seg height = OC height - seg drop. Seg drop is measured from OC.',
    steps: [
      'Seg height from bottom of lens',
      'Seg height = OC height - seg drop',
      'Seg height = 24 - 5 = 19mm',
      'Verify: Should be appropriate for frame B of 42mm'
    ]
  }
]

// Lens Thickness Problems
const lensThicknessProblems: CalculationProblem[] = [
  {
    id: 'thick-1',
    type: 'lens-thickness',
    difficulty: 'easy',
    question: 'Estimate edge thickness: -4.00D lens, 70mm diameter, CR-39 (n=1.498), center thickness 2.0mm',
    given: { power: -4.00, diameter: 70, index: 1.498, centerThickness: 2.0 },
    answer: 6.5,
    answerUnit: 'mm',
    tolerance: 0.5,
    explanation: 'For minus lenses: Edge = Center + (Power × Diameter²) / (8000 × (n-1)). Approximate formula for thin lenses.',
    formula: 'Sag = r² × D / (2000 × (n-1))\nEdge Thickness = Center Thickness + Sag',
    steps: [
      'Calculate sag (sagitta) for one surface',
      'Simplified: Edge increase ≈ |P| × (d/2)² / (530 for CR-39)',
      'Edge increase ≈ 4 × 35² / 530 ≈ 9.2mm total sag',
      'Edge = 2.0 + (9.2/2) ≈ 6.5mm'
    ]
  },
  {
    id: 'thick-2',
    type: 'lens-thickness',
    difficulty: 'easy',
    question: 'Compare edge thickness of -6.00D lens in CR-39 (n=1.498) vs polycarbonate (n=1.586) for 60mm diameter.',
    given: { power: -6.00, diameter: 60, indexCR39: 1.498, indexPoly: 1.586 },
    answer: 'Poly is about 15% thinner',
    explanation: 'Higher index = thinner lens. Thickness is inversely proportional to (n-1).',
    steps: [
      'CR-39: n-1 = 0.498',
      'Poly: n-1 = 0.586',
      'Ratio: 0.498/0.586 = 0.85',
      'Poly edge is about 85% of CR-39 (15% thinner)'
    ]
  },
  {
    id: 'thick-3',
    type: 'lens-thickness',
    difficulty: 'medium',
    question: 'A +6.00D lens with 65mm diameter needs center thickness calculation. Using CR-39, what minimum CT maintains 1.5mm edge?',
    given: { power: 6.00, diameter: 65, index: 1.498, minEdge: 1.5 },
    answer: 7.5,
    answerUnit: 'mm',
    tolerance: 0.5,
    explanation: 'For plus lenses, center is thick, edge is thin. CT = Edge + Sag. Plus lenses thin at edge, so we work backward.',
    steps: [
      'Plus lens: thick center, thin edge',
      'Sag ≈ P × (d/2)² / (530)',
      'Sag ≈ 6 × 32.5² / 530 ≈ 12mm',
      'But this is simplified - actual CT ≈ 1.5 + 6 = 7.5mm for this power/size'
    ]
  },
  {
    id: 'thick-4',
    type: 'lens-thickness',
    difficulty: 'medium',
    question: 'How much will reducing lens diameter from 70mm to 58mm reduce edge thickness for a -8.00D CR-39 lens?',
    given: { power: -8.00, originalDiameter: 70, newDiameter: 58, index: 1.498 },
    answer: 3.7,
    answerUnit: 'mm reduction',
    tolerance: 0.3,
    explanation: 'Edge thickness relates to diameter squared. Smaller frame = dramatically thinner edges.',
    steps: [
      'Thickness proportional to diameter²',
      'Original sag factor: 35² = 1225',
      'New sag factor: 29² = 841',
      'Ratio: 841/1225 = 0.69 (31% reduction)',
      'For -8.00D, this saves ~3-4mm edge thickness'
    ]
  },
  {
    id: 'thick-5',
    type: 'lens-thickness',
    difficulty: 'hard',
    question: 'Calculate approximate center thickness for a +10.00D 1.67 index lens, 55mm diameter, minimum edge 1.0mm.',
    given: { power: 10.00, diameter: 55, index: 1.67, minEdge: 1.0 },
    answer: 6.5,
    answerUnit: 'mm',
    tolerance: 0.5,
    explanation: 'High plus with high index. Use sag formula with n-1 = 0.67.',
    steps: [
      'n - 1 = 0.67 (higher than CR-39)',
      'Sag ≈ P × (d/2)² / (1000 × (n-1) × 2)',
      'Sag ≈ 10 × 27.5² / 1340 ≈ 5.6mm',
      'CT = Edge + Sag ≈ 1.0 + 5.5 = 6.5mm'
    ]
  }
]

// Base Curve Selection Problems
const baseCurveProblems: CalculationProblem[] = [
  {
    id: 'base-1',
    type: 'base-curve',
    difficulty: 'easy',
    question: 'Using Vogel\'s Rule, what base curve is recommended for a -3.00D lens?',
    given: { spherePower: -3.00 },
    answer: 4.0,
    answerUnit: 'D',
    tolerance: 0.5,
    explanation: 'Vogel\'s Rule: BC = (Sphere power / 2) + 6. For minus lenses, this gives flatter base curves.',
    formula: "Vogel's Rule: BC = (Sphere / 2) + 6",
    steps: [
      'Apply Vogel\'s Rule: BC = (Sphere / 2) + 6',
      'BC = (-3.00 / 2) + 6',
      'BC = -1.50 + 6 = 4.50D',
      'Round to available: 4.00 or 4.50 base'
    ]
  },
  {
    id: 'base-2',
    type: 'base-curve',
    difficulty: 'easy',
    question: 'What base curve for +2.00D using Vogel\'s Rule?',
    given: { spherePower: 2.00 },
    answer: 7.0,
    answerUnit: 'D',
    tolerance: 0.5,
    explanation: 'Vogel\'s: BC = (+2.00 / 2) + 6 = 1 + 6 = 7.00D. Plus lenses need steeper base curves.',
    steps: [
      'BC = (Sphere / 2) + 6',
      'BC = (+2.00 / 2) + 6',
      'BC = 1.00 + 6 = 7.00D'
    ]
  },
  {
    id: 'base-3',
    type: 'base-curve',
    difficulty: 'medium',
    question: 'A frame has an 8-base curve wrap. Patient Rx is -2.00D. Should you use 8-base or compensate?',
    given: { frameBaseCurve: 8, spherePower: -2.00 },
    answer: 'Compensate - use 6 base with Rx adjustment',
    explanation: 'High wrap frames create optical issues. May need to steepen base and add cylinder compensation, or use digitally surfaced lenses.',
    steps: [
      'Standard BC for -2.00: (−2/2)+6 = 5.00D',
      'Frame demands 8-base for cosmetics',
      'Options: 1) Use 6-8 base with compensated Rx',
      '2) Use digital freeform with wrap compensation',
      'Wrap angle induces cylinder - must compensate'
    ]
  },
  {
    id: 'base-4',
    type: 'base-curve',
    difficulty: 'medium',
    question: 'Patient is used to 6-base lenses. New Rx is -6.00D. Vogel suggests 3-base. What should you consider?',
    given: { currentBase: 6, newPower: -6.00 },
    answer: 'Consider 4-base compromise',
    explanation: 'Vogel\'s suggests BC = (-6/2)+6 = 3D, but patient adaptation matters. A compromise base (4-5) may be better.',
    steps: [
      'Vogel\'s Rule: (-6/2)+6 = 3.00D base',
      'Patient adapted to 6-base',
      'Jump from 6 to 3 may cause adaptation issues',
      'Consider 4-base as compromise',
      'Or use 3-base with patient counseling on adaptation'
    ]
  },
  {
    id: 'base-5',
    type: 'base-curve',
    difficulty: 'hard',
    question: 'Calculate the nominal lens formula result for: BC = +6.00D, Lens power = -4.00D. What back curve is needed?',
    given: { baseCurve: 6.00, lensPower: -4.00 },
    answer: -10.00,
    answerUnit: 'D',
    explanation: 'Nominal Lens Formula: Lens Power = Front Curve + Back Curve. So Back Curve = Lens Power - Front Curve.',
    formula: 'Lens Power = Front Curve + Back Curve\nBack Curve = Power - Front Curve',
    steps: [
      'Power = Front + Back',
      '-4.00 = +6.00 + Back',
      'Back = -4.00 - 6.00 = -10.00D',
      'The back surface is -10.00D (concave)'
    ]
  }
]

// Magnification Problems
const magnificationProblems: CalculationProblem[] = [
  {
    id: 'mag-1',
    type: 'magnification',
    difficulty: 'easy',
    question: 'Calculate spectacle magnification for a +10.00D lens at 12mm vertex distance (ignore shape factor).',
    given: { power: 10.00, vertexDistance: 12 },
    answer: 1.136,
    answerUnit: '(13.6% magnification)',
    tolerance: 0.01,
    explanation: 'Power factor magnification: SM = 1 / (1 - d × F), where d is in meters.',
    formula: 'SM (power factor) = 1 / (1 - d × F)',
    steps: [
      'Convert vertex: 12mm = 0.012m',
      'SM = 1 / (1 - 0.012 × 10)',
      'SM = 1 / (1 - 0.12) = 1 / 0.88',
      'SM = 1.136 or 13.6% magnification'
    ]
  },
  {
    id: 'mag-2',
    type: 'magnification',
    difficulty: 'easy',
    question: 'A -8.00D lens at 14mm vertex distance. Calculate power factor magnification.',
    given: { power: -8.00, vertexDistance: 14 },
    answer: 0.899,
    answerUnit: '(10.1% minification)',
    tolerance: 0.01,
    explanation: 'Minus lenses produce minification. SM = 1 / (1 - d × F) = 1 / (1 - 0.014 × -8) = 1 / 1.112 = 0.899',
    steps: [
      'SM = 1 / (1 - 0.014 × -8.00)',
      'SM = 1 / (1 + 0.112)',
      'SM = 1 / 1.112 = 0.899',
      'About 10% minification (image appears smaller)'
    ]
  },
  {
    id: 'mag-3',
    type: 'magnification',
    difficulty: 'medium',
    question: 'Anisometropia: OD is -1.00D, OS is -5.00D. Calculate the relative magnification difference between eyes at 13mm vertex.',
    given: { powerOD: -1.00, powerOS: -5.00, vertex: 13 },
    answer: 5.3,
    answerUnit: '% difference',
    tolerance: 0.3,
    explanation: 'Calculate SM for each eye and find percentage difference.',
    steps: [
      'OD: SM = 1/(1-0.013×-1) = 1/1.013 = 0.987',
      'OS: SM = 1/(1-0.013×-5) = 1/1.065 = 0.939',
      'Difference: 0.987 - 0.939 = 0.048',
      'Percentage: 4.8-5.3% image size difference'
    ]
  },
  {
    id: 'mag-4',
    type: 'magnification',
    difficulty: 'hard',
    question: 'Calculate total spectacle magnification including shape factor: F1 = +8.00D, center thickness = 6mm, n = 1.5, vertex = 12mm, lens power = +4.00D',
    given: { frontCurve: 8.00, thickness: 6, index: 1.5, vertex: 12, power: 4.00 },
    answer: 1.11,
    tolerance: 0.02,
    explanation: 'Total SM = Shape Factor × Power Factor. Shape = 1/(1-t×F1/n), Power = 1/(1-d×F)',
    formula: 'SM = Shape Factor × Power Factor\nShape = 1/(1 - t/n × F1)\nPower = 1/(1 - d × F)',
    steps: [
      'Shape Factor: 1/(1 - 0.006/1.5 × 8) = 1/(1-0.032) = 1.033',
      'Power Factor: 1/(1 - 0.012 × 4) = 1/(0.952) = 1.05',
      'Total SM = 1.033 × 1.05 = 1.085',
      'About 8.5% magnification'
    ]
  }
]

// Compensated Power Problems
const compensatedPowerProblems: CalculationProblem[] = [
  {
    id: 'comp-1',
    type: 'compensated-power',
    difficulty: 'easy',
    question: 'A trial lens refraction of -8.00D was done at 12mm. What is the compensated power for a contact lens?',
    given: { refractionPower: -8.00, trialVertex: 12 },
    answer: -7.35,
    answerUnit: 'D',
    tolerance: 0.1,
    explanation: 'Moving minus lens closer to eye reduces effective power. Use vertex formula.',
    steps: [
      'CL power = Spec power / (1 - d × Spec power)',
      'CL = -8.00 / (1 - 0.012 × -8.00)',
      'CL = -8.00 / 1.096 = -7.30D',
      'Order -7.25 or -7.50D contact lens'
    ]
  },
  {
    id: 'comp-2',
    type: 'compensated-power',
    difficulty: 'medium',
    question: 'Manifest refraction: +12.00 -2.00 x 090 at 14mm. Calculate the spherical equivalent contact lens power.',
    given: { sphere: 12.00, cylinder: -2.00, axis: 90, vertex: 14 },
    answer: 14.05,
    answerUnit: 'D',
    tolerance: 0.2,
    explanation: 'First find spherical equivalent, then compensate for vertex distance.',
    steps: [
      'Spherical Equivalent: +12.00 + (-2.00/2) = +11.00D',
      'Vertex compensate: CL = +11.00 / (1 - 0.014 × 11)',
      'CL = +11.00 / 0.846 = +13.00D',
      'But high plus increases at cornea: need higher power'
    ]
  },
  {
    id: 'comp-3',
    type: 'compensated-power',
    difficulty: 'hard',
    question: 'Keratometry: 43.00/44.00 @ 090. Refraction: -3.00 -1.50 x 180 at 12mm. Calculate toric soft CL parameters using vertex compensation.',
    given: { kFlat: 43.00, kSteep: 44.00, sphere: -3.00, cyl: -1.50, axis: 180, vertex: 12 },
    answer: '-2.75 -1.50 x 180',
    explanation: 'Low powers need minimal vertex compensation. Cylinder stays similar, sphere adjusts slightly.',
    steps: [
      'Sphere compensation: -3.00/(1-0.012×-3) = -3.00/1.036 = -2.90D',
      'Cylinder at axis 180: power is -3.00 + (-1.50) = -4.50D at 90°',
      'Compensate -4.50: -4.50/1.054 = -4.27D at 90°',
      'CL Rx: approximately -2.75 -1.50 x 180',
      'Cylinder magnitude similar due to low power'
    ]
  }
]

// Export all calculation categories
export const calculationCategories: CalculationCategory[] = [
  {
    id: 'transposition',
    title: 'Transposition',
    description: 'Convert prescriptions between plus and minus cylinder forms',
    icon: '🔄',
    problems: transpositionProblems
  },
  {
    id: 'vertex-distance',
    title: 'Vertex Distance',
    description: 'Compensate lens power for different vertex distances',
    icon: '📏',
    problems: vertexDistanceProblems
  },
  {
    id: 'prism-diopter',
    title: 'Prism & Prentice Rule',
    description: 'Calculate induced prism and decentration effects',
    icon: '🔺',
    problems: prismProblems
  },
  {
    id: 'decentration',
    title: 'Decentration & PD',
    description: 'Calculate lens decentration, minimum blank size, and seg heights',
    icon: '👓',
    problems: decentrationProblems
  },
  {
    id: 'lens-thickness',
    title: 'Lens Thickness',
    description: 'Estimate center and edge thickness for different lens parameters',
    icon: '📐',
    problems: lensThicknessProblems
  },
  {
    id: 'base-curve',
    title: 'Base Curve Selection',
    description: 'Choose appropriate base curves using Vogel\'s Rule and other methods',
    icon: '🎯',
    problems: baseCurveProblems
  },
  {
    id: 'magnification',
    title: 'Spectacle Magnification',
    description: 'Calculate magnification effects of spectacle lenses',
    icon: '🔍',
    problems: magnificationProblems
  },
  {
    id: 'compensated-power',
    title: 'Compensated Power',
    description: 'Convert spectacle Rx to contact lens power and vice versa',
    icon: '🔬',
    problems: compensatedPowerProblems
  }
]

// Helper function to get problems by type
export function getProblemsByType(type: CalculationType): CalculationProblem[] {
  const category = calculationCategories.find(c => c.id === type)
  return category?.problems || []
}

// Helper function to get random problems
export function getRandomProblems(count: number, type?: CalculationType): CalculationProblem[] {
  let allProblems: CalculationProblem[]

  if (type) {
    allProblems = getProblemsByType(type)
  } else {
    allProblems = calculationCategories.flatMap(c => c.problems)
  }

  const shuffled = [...allProblems].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Helper to get problems by difficulty
export function getProblemsByDifficulty(
  difficulty: 'easy' | 'medium' | 'hard',
  type?: CalculationType
): CalculationProblem[] {
  let problems: CalculationProblem[]

  if (type) {
    problems = getProblemsByType(type)
  } else {
    problems = calculationCategories.flatMap(c => c.problems)
  }

  return problems.filter(p => p.difficulty === difficulty)
}
