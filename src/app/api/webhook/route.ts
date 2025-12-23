import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import {
  notifyPaidSubscription,
  notifySubscriptionCanceled,
  notifyPaymentFailed
} from '@/lib/notifications'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
})

// Use service role key for webhook (bypasses RLS)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutComplete(session)
        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdate(subscription)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionCanceled(subscription)
        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentSucceeded(invoice)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentFailed(invoice)
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.user_id
  const customerId = session.customer as string
  const subscriptionId = session.subscription as string

  if (!userId) {
    console.error('No user_id in session metadata')
    return
  }

  // Fetch the subscription details
  const subscription = await stripe.subscriptions.retrieve(subscriptionId) as Stripe.Subscription

  // Upsert the subscription record
  const { error } = await supabaseAdmin
    .from('subscriptions')
    .upsert({
      user_id: userId,
      stripe_customer_id: customerId,
      stripe_subscription_id: subscriptionId,
      status: subscription.status,
      price_id: subscription.items.data[0]?.price.id,
      current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
      current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }, {
      onConflict: 'user_id'
    })

  if (error) {
    console.error('Error upserting subscription:', error)
    throw error
  }

  console.log(`Subscription created for user ${userId}`)

  // Send notification for new paid subscription
  const customerEmail = session.customer_email || session.customer_details?.email
  const customerName = session.customer_details?.name
  const priceId = subscription.items.data[0]?.price.id
  const amount = subscription.items.data[0]?.price.unit_amount || 0
  const interval = (subscription.items.data[0]?.price.recurring?.interval) || 'month'

  if (customerEmail) {
    await notifyPaidSubscription({
      email: customerEmail,
      name: customerName || undefined,
      plan: priceId?.includes('yearly') ? 'Yearly' : 'Monthly',
      amount: amount,
      interval: interval,
      stripeCustomerId: customerId
    })
  }
}

async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.user_id

  if (!userId) {
    // Try to find user by customer ID
    const { data } = await supabaseAdmin
      .from('subscriptions')
      .select('user_id')
      .eq('stripe_customer_id', subscription.customer as string)
      .single()

    if (!data) {
      console.error('Could not find user for subscription update')
      return
    }
  }

  const { error } = await supabaseAdmin
    .from('subscriptions')
    .update({
      status: subscription.status,
      price_id: subscription.items.data[0]?.price.id,
      current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
      current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_subscription_id', subscription.id)

  if (error) {
    console.error('Error updating subscription:', error)
    throw error
  }

  console.log(`Subscription ${subscription.id} updated to status: ${subscription.status}`)
}

async function handleSubscriptionCanceled(subscription: Stripe.Subscription) {
  // Get customer email before updating
  let customerEmail: string | undefined
  let customerName: string | undefined

  try {
    const customer = await stripe.customers.retrieve(subscription.customer as string) as Stripe.Customer
    if (!customer.deleted) {
      customerEmail = customer.email || undefined
      customerName = customer.name || undefined
    }
  } catch (e) {
    console.error('Could not fetch customer for cancellation notification:', e)
  }

  const { error } = await supabaseAdmin
    .from('subscriptions')
    .update({
      status: 'canceled',
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_subscription_id', subscription.id)

  if (error) {
    console.error('Error canceling subscription:', error)
    throw error
  }

  console.log(`Subscription ${subscription.id} canceled`)

  // Send cancellation notification
  if (customerEmail) {
    await notifySubscriptionCanceled({
      email: customerEmail,
      name: customerName,
    })
  }
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  // Update subscription period dates on successful renewal
  const subscriptionId = (invoice as any).subscription
  if (subscriptionId) {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId as string) as Stripe.Subscription
    await handleSubscriptionUpdate(subscription)
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  // Log failed payment - subscription status will be updated via subscription.updated event
  console.log(`Payment failed for invoice ${invoice.id}`)

  // Send notification for failed payment
  const customerEmail = invoice.customer_email
  const customerName = invoice.customer_name
  const amount = invoice.amount_due || 0
  const failureReason = (invoice as any).last_finalization_error?.message

  if (customerEmail) {
    await notifyPaymentFailed({
      email: customerEmail,
      name: customerName || undefined,
      amount: amount,
      failureReason: failureReason
    })
  }
}
