-- Add admin access policies for viewing all test/quiz data

-- Allow admins to view all aptitude test attempts
CREATE POLICY "Admins can view all test attempts"
ON public.aptitude_test_attempts
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to view all aptitude test answers
CREATE POLICY "Admins can view all test answers"
ON public.aptitude_test_answers
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to view all quiz attempts
CREATE POLICY "Admins can view all quiz attempts"
ON public.quiz_attempts
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to view all user profiles
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));