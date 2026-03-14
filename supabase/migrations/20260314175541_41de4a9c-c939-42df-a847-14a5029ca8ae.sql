
-- Create RSVP confirmations table
CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  attending BOOLEAN NOT NULL DEFAULT true,
  adult_count INTEGER NOT NULL DEFAULT 1,
  child_count INTEGER NOT NULL DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (guests don't need auth)
CREATE POLICY "Anyone can submit RSVP" ON public.rsvps
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (admin) can view RSVPs
CREATE POLICY "Authenticated users can view RSVPs" ON public.rsvps
  FOR SELECT TO authenticated
  USING (true);
