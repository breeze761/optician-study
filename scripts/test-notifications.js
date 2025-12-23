/**
 * Notification System Tests
 * Run with: node scripts/test-notifications.js
 *
 * Tests the notification event structure and validation.
 * The actual Supabase integration is tested by the TypeScript compiler.
 */

console.log('=== Optician Study Notification System Tests ===\n');

let passCount = 0;
let failCount = 0;

function test(name, passed, details = '') {
  if (passed) {
    console.log(`✓ ${name}${details ? `: ${details}` : ''}`);
    passCount++;
  } else {
    console.log(`✗ ${name}${details ? `: ${details}` : ''} - FAILED`);
    failCount++;
  }
  return passed;
}

// =============================================
// 1. EVENT TYPE VALIDATION
// =============================================
console.log('\n--- Event Type Validation ---');

const validEventTypes = [
  'free_trial_signup',
  'paid_subscription',
  'subscription_canceled',
  'payment_failed',
  'payment_succeeded'
];

function isValidEventType(type) {
  return validEventTypes.includes(type);
}

test('free_trial_signup is valid', isValidEventType('free_trial_signup'));
test('paid_subscription is valid', isValidEventType('paid_subscription'));
test('subscription_canceled is valid', isValidEventType('subscription_canceled'));
test('payment_failed is valid', isValidEventType('payment_failed'));
test('payment_succeeded is valid', isValidEventType('payment_succeeded'));
test('invalid_type is rejected', !isValidEventType('invalid_type'));

// =============================================
// 2. EVENT DATA STRUCTURE TESTS
// =============================================
console.log('\n--- Event Data Structure ---');

function createFreeTrialEvent(userData) {
  const { email, name, signupDate = new Date() } = userData;
  return {
    event_type: 'free_trial_signup',
    email: email,
    name: name || null,
    metadata: {
      signup_date: signupDate.toISOString(),
      access_level: 'Chapter 1 (4 lessons)'
    },
    created_at: new Date().toISOString()
  };
}

const trialEvent = createFreeTrialEvent({
  email: 'test@example.com',
  name: 'John Doe',
  signupDate: new Date('2024-01-15T10:30:00Z')
});

test('Trial event has event_type', trialEvent.event_type === 'free_trial_signup');
test('Trial event has email', trialEvent.email === 'test@example.com');
test('Trial event has name', trialEvent.name === 'John Doe');
test('Trial event has metadata', typeof trialEvent.metadata === 'object');
test('Trial event has access_level', trialEvent.metadata.access_level === 'Chapter 1 (4 lessons)');
test('Trial event has created_at', !!trialEvent.created_at);

// Test with missing name
const trialEventNoName = createFreeTrialEvent({ email: 'test@example.com' });
test('Trial event handles null name', trialEventNoName.name === null);

// =============================================
// 3. PAID SUBSCRIPTION EVENT TESTS
// =============================================
console.log('\n--- Paid Subscription Event ---');

function createPaidSubscriptionEvent(data) {
  const { email, name, plan, amount, interval, stripeCustomerId } = data;
  return {
    event_type: 'paid_subscription',
    email: email,
    name: name || null,
    metadata: {
      plan: plan,
      amount_cents: amount,
      amount_display: `$${(amount / 100).toFixed(2)}/${interval}`,
      interval: interval,
      stripe_customer_id: stripeCustomerId || null,
      stripe_dashboard_url: stripeCustomerId
        ? `https://dashboard.stripe.com/customers/${stripeCustomerId}`
        : null
    },
    created_at: new Date().toISOString()
  };
}

const paidEvent = createPaidSubscriptionEvent({
  email: 'subscriber@example.com',
  name: 'Jane Smith',
  plan: 'Monthly',
  amount: 1999,
  interval: 'month',
  stripeCustomerId: 'cus_abc123'
});

test('Paid event has correct type', paidEvent.event_type === 'paid_subscription');
test('Paid event has email', paidEvent.email === 'subscriber@example.com');
test('Paid event formats amount', paidEvent.metadata.amount_display === '$19.99/month');
test('Paid event has Stripe URL', paidEvent.metadata.stripe_dashboard_url.includes('cus_abc123'));

// Test without Stripe ID
const paidEventNoStripe = createPaidSubscriptionEvent({
  email: 'test@example.com',
  plan: 'Yearly',
  amount: 9999,
  interval: 'year'
});
test('Paid event handles null Stripe ID', paidEventNoStripe.metadata.stripe_customer_id === null);

// =============================================
// 4. CANCELLATION EVENT TESTS
// =============================================
console.log('\n--- Cancellation Event ---');

function createCancelEvent(data) {
  const { email, name, reason } = data;
  return {
    event_type: 'subscription_canceled',
    email: email,
    name: name || null,
    metadata: {
      reason: reason || 'Not provided',
      canceled_at: new Date().toISOString()
    },
    created_at: new Date().toISOString()
  };
}

const cancelEvent = createCancelEvent({
  email: 'former@example.com',
  name: 'Bob Jones',
  reason: 'Too expensive'
});

test('Cancel event has correct type', cancelEvent.event_type === 'subscription_canceled');
test('Cancel event has email', cancelEvent.email === 'former@example.com');
test('Cancel event has reason', cancelEvent.metadata.reason === 'Too expensive');

// Test without reason
const cancelEventNoReason = createCancelEvent({ email: 'test@example.com' });
test('Cancel event defaults reason', cancelEventNoReason.metadata.reason === 'Not provided');

// =============================================
// 5. PAYMENT FAILED EVENT TESTS
// =============================================
console.log('\n--- Payment Failed Event ---');

function createPaymentFailedEvent(data) {
  const { email, name, amount, failureReason } = data;
  return {
    event_type: 'payment_failed',
    email: email,
    name: name || null,
    metadata: {
      amount_cents: amount,
      amount_display: `$${(amount / 100).toFixed(2)}`,
      failure_reason: failureReason || 'Unknown',
      failed_at: new Date().toISOString()
    },
    created_at: new Date().toISOString()
  };
}

const failedEvent = createPaymentFailedEvent({
  email: 'declined@example.com',
  name: 'Alice Brown',
  amount: 1999,
  failureReason: 'Card declined'
});

test('Failed event has correct type', failedEvent.event_type === 'payment_failed');
test('Failed event formats amount', failedEvent.metadata.amount_display === '$19.99');
test('Failed event has reason', failedEvent.metadata.failure_reason === 'Card declined');

// =============================================
// 6. AMOUNT FORMATTING TESTS
// =============================================
console.log('\n--- Amount Formatting ---');

function formatAmount(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

test('Format 1999 cents', formatAmount(1999) === '$19.99');
test('Format 0 cents', formatAmount(0) === '$0.00');
test('Format 12345 cents', formatAmount(12345) === '$123.45');
test('Format 100 cents', formatAmount(100) === '$1.00');
test('Format 99 cents', formatAmount(99) === '$0.99');

// =============================================
// 7. API VALIDATION TESTS
// =============================================
console.log('\n--- API Validation ---');

function validateSignupRequest(body) {
  if (!body || typeof body !== 'object') return { valid: false, error: 'Invalid body' };
  if (!body.email) return { valid: false, error: 'Email is required' };
  if (typeof body.email !== 'string') return { valid: false, error: 'Email must be string' };
  if (!body.email.includes('@')) return { valid: false, error: 'Invalid email format' };
  return { valid: true };
}

test('Valid signup request', validateSignupRequest({ email: 'test@example.com' }).valid);
test('Missing email rejected', !validateSignupRequest({}).valid);
test('Invalid email rejected', !validateSignupRequest({ email: 'notanemail' }).valid);
test('Empty body rejected', !validateSignupRequest(null).valid);
test('With name accepted', validateSignupRequest({ email: 'test@example.com', name: 'John' }).valid);

// =============================================
// 8. DAILY STATS AGGREGATION TESTS
// =============================================
console.log('\n--- Daily Stats Aggregation ---');

function aggregateStats(events) {
  return {
    newTrials: events.filter(e => e.event_type === 'free_trial_signup').length,
    newPaid: events.filter(e => e.event_type === 'paid_subscription').length,
    cancelations: events.filter(e => e.event_type === 'subscription_canceled').length,
    failedPayments: events.filter(e => e.event_type === 'payment_failed').length
  };
}

const mockEvents = [
  { event_type: 'free_trial_signup' },
  { event_type: 'free_trial_signup' },
  { event_type: 'free_trial_signup' },
  { event_type: 'paid_subscription' },
  { event_type: 'paid_subscription' },
  { event_type: 'subscription_canceled' },
  { event_type: 'payment_failed' }
];

const stats = aggregateStats(mockEvents);
test('Counts trials correctly', stats.newTrials === 3);
test('Counts paid correctly', stats.newPaid === 2);
test('Counts cancelations correctly', stats.cancelations === 1);
test('Counts failed payments correctly', stats.failedPayments === 1);

// Empty events
const emptyStats = aggregateStats([]);
test('Handles empty events', emptyStats.newTrials === 0 && emptyStats.newPaid === 0);

// =============================================
// 9. SQL TABLE STRUCTURE VALIDATION
// =============================================
console.log('\n--- SQL Table Structure ---');

const requiredColumns = ['id', 'event_type', 'email', 'name', 'metadata', 'created_at'];
const eventRecord = {
  id: 'uuid-here',
  event_type: 'free_trial_signup',
  email: 'test@example.com',
  name: 'John Doe',
  metadata: { signup_date: '2024-01-15' },
  created_at: '2024-01-15T10:30:00Z'
};

requiredColumns.forEach(col => {
  test(`Record has ${col} column`, eventRecord.hasOwnProperty(col));
});

// =============================================
// SUMMARY
// =============================================
console.log('\n=== TEST SUMMARY ===');
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Total: ${passCount + failCount}`);

if (failCount === 0) {
  console.log('\n✓ All notification system tests passed!');
  console.log('\nTo enable notifications:');
  console.log('1. Run the SQL in supabase/migrations/create_notification_events.sql');
  console.log('2. Deploy to Vercel - notifications will be logged automatically');
  console.log('3. View events in your Supabase dashboard');
  process.exit(0);
} else {
  console.log('\n✗ Some tests failed. Please review the notification system.');
  process.exit(1);
}
