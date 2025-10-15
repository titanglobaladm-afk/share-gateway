-- Clean up corrupted profile data for user 6b0f09fa-997d-4a29-9b70-56318f4efb7f
-- Remove incorrect courses (doctor_track and nurse_track)
DELETE FROM public.user_courses 
WHERE user_id = '6b0f09fa-997d-4a29-9b70-56318f4efb7f' 
  AND course_id IN ('doctor_track', 'nurse_track');

-- Reset onboarding flag to allow proper completion
UPDATE public.profiles 
SET onboarding_completed = false 
WHERE user_id = '6b0f09fa-997d-4a29-9b70-56318f4efb7f';