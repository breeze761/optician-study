/**
 * Calculator Formula Verification Tests
 * Run with: node scripts/test-calculators.js
 */

console.log('=== Optician Calculator Formula Tests ===\n');

let passCount = 0;
let failCount = 0;

function test(name, actual, expected, tolerance = 0.01) {
  const passed = Math.abs(actual - expected) <= tolerance;
  if (passed) {
    console.log(`✓ ${name}: ${actual} (expected ${expected})`);
    passCount++;
  } else {
    console.log(`✗ ${name}: ${actual} (expected ${expected}) - FAILED`);
    failCount++;
  }
  return passed;
}

function testString(name, actual, expected) {
  const passed = actual === expected;
  if (passed) {
    console.log(`✓ ${name}: "${actual}"`);
    passCount++;
  } else {
    console.log(`✗ ${name}: "${actual}" (expected "${expected}") - FAILED`);
    failCount++;
  }
  return passed;
}

// =============================================
// 1. TRANSPOSITION CALCULATOR TESTS
// =============================================
console.log('\n--- Transposition Calculator ---');

function transpose(sphere, cylinder, axis) {
  const newSphere = sphere + cylinder;
  const newCylinder = -cylinder;
  let newAxis = axis + 90;
  if (newAxis > 180) newAxis -= 180;
  return { sphere: newSphere, cylinder: newCylinder, axis: newAxis };
}

// Test 1: -2.00 +1.00 x 090 -> -1.00 -1.00 x 180
let result = transpose(-2.00, 1.00, 90);
test('Transpose -2.00 +1.00 x 090 sphere', result.sphere, -1.00);
test('Transpose -2.00 +1.00 x 090 cylinder', result.cylinder, -1.00);
test('Transpose -2.00 +1.00 x 090 axis', result.axis, 180);

// Test 2: -3.50 -0.75 x 180 -> -4.25 +0.75 x 090
result = transpose(-3.50, -0.75, 180);
test('Transpose -3.50 -0.75 x 180 sphere', result.sphere, -4.25);
test('Transpose -3.50 -0.75 x 180 cylinder', result.cylinder, 0.75);
test('Transpose -3.50 -0.75 x 180 axis', result.axis, 90);

// Test 3: +1.25 -2.00 x 045 -> -0.75 +2.00 x 135
result = transpose(1.25, -2.00, 45);
test('Transpose +1.25 -2.00 x 045 sphere', result.sphere, -0.75);
test('Transpose +1.25 -2.00 x 045 cylinder', result.cylinder, 2.00);
test('Transpose +1.25 -2.00 x 045 axis', result.axis, 135);

// Test 4: -5.00 +3.25 x 170 -> -1.75 -3.25 x 080
result = transpose(-5.00, 3.25, 170);
test('Transpose -5.00 +3.25 x 170 sphere', result.sphere, -1.75);
test('Transpose -5.00 +3.25 x 170 cylinder', result.cylinder, -3.25);
test('Transpose -5.00 +3.25 x 170 axis', result.axis, 80);

// =============================================
// 2. VERTEX DISTANCE CALCULATOR TESTS
// =============================================
console.log('\n--- Vertex Distance Calculator ---');

function calculateVertexCompensation(power, origVertex, newVertex) {
  // Convert mm to meters
  const origVMeters = origVertex / 1000;
  const newVMeters = newVertex / 1000;

  // Effective power at original vertex
  const effectivePower = power / (1 - (origVMeters * power));

  // Compensated power at new vertex
  const compensated = effectivePower / (1 + (newVMeters * effectivePower));

  return compensated;
}

// Test: -6.00D at 12mm to contact lens (0mm)
// Expected: approximately -5.58D (less minus)
let vertexResult = calculateVertexCompensation(-6.00, 12, 0);
test('Vertex -6.00D 12mm->0mm', vertexResult, -5.58, 0.1);

// Test: -10.00D at 12mm to contact lens (0mm)
// Expected: approximately -8.93D
vertexResult = calculateVertexCompensation(-10.00, 12, 0);
test('Vertex -10.00D 12mm->0mm', vertexResult, -8.93, 0.1);

// Test: +6.00D at 12mm to contact lens (0mm)
// Expected: approximately +6.47D (more plus)
vertexResult = calculateVertexCompensation(6.00, 12, 0);
test('Vertex +6.00D 12mm->0mm', vertexResult, 6.47, 0.1);

// Test: -4.00D at 12mm to 14mm (frame change)
vertexResult = calculateVertexCompensation(-4.00, 12, 14);
test('Vertex -4.00D 12mm->14mm', vertexResult, -4.03, 0.05);

// =============================================
// 3. READING GLASSES / PRESBYOPIA TESTS
// =============================================
console.log('\n--- Reading Glasses Calculator ---');

function getAgeBasedAdd(age) {
  if (age < 40) return 0;
  if (age <= 44) return 1.00;
  if (age <= 49) return 1.50;
  if (age <= 54) return 1.75;
  if (age <= 59) return 2.00;
  if (age <= 64) return 2.25;
  return 2.50;
}

test('Age 38 add power', getAgeBasedAdd(38), 0);
test('Age 42 add power', getAgeBasedAdd(42), 1.00);
test('Age 47 add power', getAgeBasedAdd(47), 1.50);
test('Age 52 add power', getAgeBasedAdd(52), 1.75);
test('Age 57 add power', getAgeBasedAdd(57), 2.00);
test('Age 62 add power', getAgeBasedAdd(62), 2.25);
test('Age 70 add power', getAgeBasedAdd(70), 2.50);

// Working distance calculation: Add = 100/distance(cm) - 0.50 buffer
function calculateWorkingDistanceAdd(distanceCm) {
  return (100 / distanceCm) - 0.50;
}

test('Working distance 40cm add', calculateWorkingDistanceAdd(40), 2.00, 0.05);
test('Working distance 33cm add', calculateWorkingDistanceAdd(33), 2.53, 0.05);
test('Working distance 50cm add', calculateWorkingDistanceAdd(50), 1.50, 0.05);

// =============================================
// 4. LENS CUTOUT CALCULATOR TESTS
// =============================================
console.log('\n--- Lens Cutout Calculator ---');

function calculateMinBlankSize(A, B, DBL, patientPD, safetyMargin = 2) {
  // ED (Effective Diameter) approximation
  const ED = Math.sqrt(A * A + B * B);

  // Frame PD (GCD)
  const framePD = A + DBL;

  // Total decentration
  const totalDec = framePD - patientPD;

  // Decentration per lens
  const decPerLens = totalDec / 2;

  // Minimum blank size
  const minBlank = ED + Math.abs(decPerLens * 2) + safetyMargin;

  return {
    ED: ED,
    framePD: framePD,
    decentrationPerLens: decPerLens,
    minBlankSize: Math.ceil(minBlank)
  };
}

// Test: Frame 54-18 with B=40, patient PD 64
let cutoutResult = calculateMinBlankSize(54, 40, 18, 64);
test('Frame PD (54+18)', cutoutResult.framePD, 72);
test('Total decentration', cutoutResult.decentrationPerLens * 2, 8);
test('Decentration per lens', cutoutResult.decentrationPerLens, 4);
// ED should be sqrt(54^2 + 40^2) = sqrt(2916 + 1600) = sqrt(4516) ≈ 67.2
test('ED calculation', cutoutResult.ED, 67.2, 0.2);
// Min blank = 67.2 + 8 + 2 = 77.2 -> 78mm
test('Minimum blank size', cutoutResult.minBlankSize, 78);

// Test: Smaller frame 50-16 with B=36, patient PD 62
cutoutResult = calculateMinBlankSize(50, 36, 16, 62);
test('Frame PD (50+16)', cutoutResult.framePD, 66);
test('Decentration (66-62)/2', cutoutResult.decentrationPerLens, 2);
// ED = sqrt(50^2 + 36^2) = sqrt(2500 + 1296) = sqrt(3796) ≈ 61.6
test('ED for 50x36', cutoutResult.ED, 61.6, 0.2);

// =============================================
// 5. SPHERICAL EQUIVALENT TEST
// =============================================
console.log('\n--- Spherical Equivalent ---');

function sphericalEquivalent(sphere, cylinder) {
  return sphere + (cylinder / 2);
}

test('SE of -2.00 -1.00', sphericalEquivalent(-2.00, -1.00), -2.50);
test('SE of -3.50 -2.00', sphericalEquivalent(-3.50, -2.00), -4.50);
test('SE of +1.00 -0.50', sphericalEquivalent(1.00, -0.50), 0.75);
test('SE of plano -1.50', sphericalEquivalent(0, -1.50), -0.75);

// =============================================
// 6. PRISM CALCULATION (Prentice Rule)
// =============================================
console.log('\n--- Prism Calculator (Prentice Rule) ---');

function calculatePrism(power, decentrationMm) {
  // Prism (Δ) = Power (D) × Decentration (cm)
  const decentrationCm = decentrationMm / 10;
  return Math.abs(power * decentrationCm);
}

test('Prism: -4.00D, 3mm dec', calculatePrism(-4.00, 3), 1.2);
test('Prism: -6.00D, 5mm dec', calculatePrism(-6.00, 5), 3.0);
test('Prism: +2.50D, 4mm dec', calculatePrism(2.50, 4), 1.0);

// =============================================
// 7. SPECTACLE MAGNIFICATION (simplified)
// =============================================
console.log('\n--- Spectacle Magnification ---');

function spectacleMagnification(power, vertexMm) {
  // SM = 1 / (1 - d × F) where d is in meters
  const vertexM = vertexMm / 1000;
  return 1 / (1 - vertexM * power);
}

// -10.00D at 12mm should minify (SM < 1)
let sm = spectacleMagnification(-10.00, 12);
test('SM -10.00D at 12mm (minifies)', sm < 1, true);
test('SM -10.00D at 12mm value', sm, 0.893, 0.01);

// +10.00D at 12mm should magnify (SM > 1)
sm = spectacleMagnification(10.00, 12);
test('SM +10.00D at 12mm (magnifies)', sm > 1, true);
test('SM +10.00D at 12mm value', sm, 1.136, 0.01);

// =============================================
// SUMMARY
// =============================================
console.log('\n=== TEST SUMMARY ===');
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Total: ${passCount + failCount}`);

if (failCount === 0) {
  console.log('\n✓ All calculator formulas are correct!');
  process.exit(0);
} else {
  console.log('\n✗ Some tests failed. Please review the formulas.');
  process.exit(1);
}
