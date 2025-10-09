-- Add role column to aptitude_test_attempts to track which role's test was taken
ALTER TABLE public.aptitude_test_attempts 
ADD COLUMN role app_role;

-- Add role_test_passed column to user_courses to track if user passed the role-specific test
ALTER TABLE public.user_courses 
ADD COLUMN role_test_passed boolean DEFAULT false;

-- Update existing orientation_common courses to be unlocked by default (no role test required)
UPDATE public.user_courses 
SET role_test_passed = true 
WHERE course_id = 'orientation_common';

-- Create function to check if user has passed a specific role's aptitude test
CREATE OR REPLACE FUNCTION public.has_passed_role_test(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.aptitude_test_attempts 
    WHERE user_id = _user_id 
      AND role = _role 
      AND passed = true
  )
$$;