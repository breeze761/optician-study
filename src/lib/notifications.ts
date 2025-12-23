/**
 * Optician Study Notification Service
 * Logs events to Supabase database for tracking signups, subscriptions, and payments
 * View events in your Supabase dashboard: https://supabase.com/dashboard
 *
 * Security: Uses service role key server-side only (never exposed to client)
 */

import { createClient } from '@supabase/supabase-js'

// Create admin client for server-side operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// Event types for the notification_events table
type EventType =
  | 'free_trial_signup'
  | 'paid_subscription'
  | 'subscription_canceled'
  | 'payment_failed'
  | 'payment_succeeded'

interface NotificationEvent {
  event_type: EventType
  email: string
  name?: string
  metadata?: Record<string, unknown>
}

/**
 * Log a notification event to Supabase
 * Events are stored in the notification_events table
 */
async function logEvent(event: NotificationEvent): Promise<boolean> {
  try {
    const { error } = await supabaseAdmin
      .from('notification_events')
      .insert({
        event_type: event.event_type,
        email: event.email,
        name: event.name || null,
        metadata: event.metadata || {},
        created_at: new Date().toISOString()
      })

    if (error) {
      // If table doesn't exist yet, just log to console
      if (error.code === '42P01') {
        console.log(`[NOTIFICATION] ${event.event_type}: ${event.email}`, event.metadata || '')
        return true
      }
      console.error('Failed to log notification event:', error)
      return false
    }

    console.log(`[NOTIFICATION] Logged: ${event.event_type} for ${event.email}`)
    return true
  } catch (err) {
    // Fallback to console logging if database is unavailable
    console.log(`[NOTIFICATION] ${event.event_type}: ${event.email}`, event.metadata || '')
    return true
  }
}

/**
 * Notify of a new free trial signup
 */
export async function notifyFreeTrialSignup(userData: {
  email: string
  name?: string
  signupDate?: Date
}): Promise<boolean> {
  return logEvent({
    event_type: 'free_trial_signup',
    email: userData.email,
    name: userData.name,
    metadata: {
      signup_date: (userData.signupDate || new Date()).toISOString(),
      access_level: 'Chapter 1 (4 lessons)'
    }
  })
}

/**
 * Notify of a new paid subscription
 */
export async function notifyPaidSubscription(subscriptionData: {
  email: string
  name?: string
  plan: string
  amount: number
  interval: string
  stripeCustomerId?: string
}): Promise<boolean> {
  return logEvent({
    event_type: 'paid_subscription',
    email: subscriptionData.email,
    name: subscriptionData.name,
    metadata: {
      plan: subscriptionData.plan,
      amount_cents: subscriptionData.amount,
      amount_display: `$${(subscriptionData.amount / 100).toFixed(2)}/${subscriptionData.interval}`,
      interval: subscriptionData.interval,
      stripe_customer_id: subscriptionData.stripeCustomerId,
      stripe_dashboard_url: subscriptionData.stripeCustomerId
        ? `https://dashboard.stripe.com/customers/${subscriptionData.stripeCustomerId}`
        : null
    }
  })
}

/**
 * Notify of a subscription cancellation
 */
export async function notifySubscriptionCanceled(data: {
  email: string
  name?: string
  reason?: string
}): Promise<boolean> {
  return logEvent({
    event_type: 'subscription_canceled',
    email: data.email,
    name: data.name,
    metadata: {
      reason: data.reason || 'Not provided',
      canceled_at: new Date().toISOString()
    }
  })
}

/**
 * Notify of a failed payment
 */
export async function notifyPaymentFailed(data: {
  email: string
  name?: string
  amount: number
  failureReason?: string
}): Promise<boolean> {
  return logEvent({
    event_type: 'payment_failed',
    email: data.email,
    name: data.name,
    metadata: {
      amount_cents: data.amount,
      amount_display: `$${(data.amount / 100).toFixed(2)}`,
      failure_reason: data.failureReason || 'Unknown',
      failed_at: new Date().toISOString()
    }
  })
}

/**
 * Get recent notification events (for admin dashboard)
 */
export async function getRecentEvents(limit: number = 50): Promise<NotificationEvent[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from('notification_events')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) {
      console.error('Failed to fetch events:', error)
      return []
    }

    return data || []
  } catch {
    return []
  }
}

/**
 * Get daily stats summary
 */
export async function getDailyStats(date?: Date): Promise<{
  newTrials: number
  newPaid: number
  cancelations: number
  failedPayments: number
}> {
  const targetDate = date || new Date()
  const startOfDay = new Date(targetDate)
  startOfDay.setHours(0, 0, 0, 0)
  const endOfDay = new Date(targetDate)
  endOfDay.setHours(23, 59, 59, 999)

  try {
    const { data, error } = await supabaseAdmin
      .from('notification_events')
      .select('event_type')
      .gte('created_at', startOfDay.toISOString())
      .lte('created_at', endOfDay.toISOString())

    if (error || !data) {
      return { newTrials: 0, newPaid: 0, cancelations: 0, failedPayments: 0 }
    }

    return {
      newTrials: data.filter(e => e.event_type === 'free_trial_signup').length,
      newPaid: data.filter(e => e.event_type === 'paid_subscription').length,
      cancelations: data.filter(e => e.event_type === 'subscription_canceled').length,
      failedPayments: data.filter(e => e.event_type === 'payment_failed').length
    }
  } catch {
    return { newTrials: 0, newPaid: 0, cancelations: 0, failedPayments: 0 }
  }
}
