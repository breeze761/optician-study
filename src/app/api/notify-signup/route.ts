import { NextRequest, NextResponse } from 'next/server'
import { notifyFreeTrialSignup } from '@/lib/notifications'

/**
 * POST /api/notify-signup
 * Called when a new user signs up to log the event
 *
 * Body: { email: string, name?: string, userId?: string }
 *
 * Security: This endpoint logs to Supabase using service role key.
 * The service role key is only available server-side.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Log the signup event
    const success = await notifyFreeTrialSignup({
      email,
      name,
      signupDate: new Date()
    })

    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Failed to log signup event' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Signup notification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
