-- Create table for manual grading of open-ended test answers
CREATE TABLE public.manual_answer_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  answer_id UUID NOT NULL REFERENCES public.aptitude_test_answers(id) ON DELETE CASCADE,
  grader_user_id UUID NOT NULL REFERENCES auth.users(id),
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 10),
  feedback TEXT,
  graded_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(answer_id)
);

-- Enable RLS
ALTER TABLE public.manual_answer_scores ENABLE ROW LEVEL SECURITY;

-- RLS Policies for manual_answer_scores
CREATE POLICY "Admins can view manual scores"
  ON public.manual_answer_scores 
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert manual scores"
  ON public.manual_answer_scores 
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update manual scores"
  ON public.manual_answer_scores 
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Add index for faster lookups
CREATE INDEX idx_manual_answer_scores_answer_id ON public.manual_answer_scores(answer_id);