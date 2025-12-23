-- Create notification_events table
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/YOUR_PROJECT/sql

CREATE TABLE IF NOT EXISTS notification_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL CHECK (event_type IN (
    'free_trial_signup',
    'paid_subscription',
    'subscription_canceled',
    'payment_failed',
    'payment_succeeded'
  )),
  email TEXT NOT NULL,
  name TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_notification_events_created_at
  ON notification_events(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_notification_events_event_type
  ON notification_events(event_type);

CREATE INDEX IF NOT EXISTS idx_notification_events_email
  ON notification_events(email);

-- Enable Row Level Security (RLS)
ALTER TABLE notification_events ENABLE ROW LEVEL SECURITY;

-- Policy: Only service role can insert (from webhooks/API routes)
CREATE POLICY "Service role can insert notification events"
  ON notification_events
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Policy: Only service role can read (for admin dashboard)
CREATE POLICY "Service role can read notification events"
  ON notification_events
  FOR SELECT
  TO service_role
  USING (true);

-- Grant permissions
GRANT INSERT ON notification_events TO service_role;
GRANT SELECT ON notification_events TO service_role;

-- Comment for documentation
COMMENT ON TABLE notification_events IS 'Tracks signup, subscription, and payment events for notifications';
