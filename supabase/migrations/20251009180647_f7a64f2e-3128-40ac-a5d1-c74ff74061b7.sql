-- Enable realtime for user_courses table
ALTER TABLE public.user_courses REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.user_courses;