-- Function: append_quiz_completion
-- Appends a quiz_id to user_courses.quizzes_completed (JSONB array), avoiding duplicates.
-- Returns the updated user_courses row.

create or replace function public.append_quiz_completion(
  p_user_id   uuid,
  p_course_id text,
  p_quiz_id   text
)
returns public.user_courses
language plpgsql
security definer
set search_path = public
as $$
declare
  v_course public.user_courses;
begin
  -- Update quizzes_completed JSONB array, avoiding duplicates
  update public.user_courses
  set quizzes_completed = case
    when coalesce(quizzes_completed, '[]'::jsonb) ? p_quiz_id
      then coalesce(quizzes_completed, '[]'::jsonb)
    else coalesce(quizzes_completed, '[]'::jsonb) || to_jsonb(p_quiz_id)
  end,
      last_accessed_at = now()
  where user_id = p_user_id
    and course_id = p_course_id
  returning * into v_course;

  return v_course;
end;
$$;

-- Function: append_lesson_completion
-- Appends a lesson_id to user_courses.lessons_completed (JSONB array), avoiding duplicates.
-- Returns the updated user_courses row.

create or replace function public.append_lesson_completion(
  p_user_id    uuid,
  p_course_id  text,
  p_lesson_id  text
)
returns public.user_courses
language plpgsql
security definer
set search_path = public
as $$
declare
  v_course public.user_courses;
begin
  -- Update lessons_completed JSONB array, avoiding duplicates
  update public.user_courses
  set lessons_completed = case
    when coalesce(lessons_completed, '[]'::jsonb) ? p_lesson_id
      then coalesce(lessons_completed, '[]'::jsonb)
    else coalesce(lessons_completed, '[]'::jsonb) || to_jsonb(p_lesson_id)
  end,
      last_accessed_at = now()
  where user_id = p_user_id
    and course_id = p_course_id
  returning * into v_course;

  return v_course;
end;
$$;