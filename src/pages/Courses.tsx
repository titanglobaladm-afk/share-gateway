import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { trainingData } from '@/data/trainingData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Courses = () => {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const [assignedCourseIds, setAssignedCourseIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssignedCourses = async () => {
      if (!user) return;
      
      console.log('Fetching courses for user:', user.id);
      
      const { data, error } = await supabase
        .from('user_courses')
        .select('course_id')
        .eq('user_id', user.id);

      console.log('User courses data:', data, 'error:', error);

      if (data) {
        setAssignedCourseIds(data.map(c => c.course_id));
      }
      setLoading(false);
    };

    fetchAssignedCourses();
  }, [user]);

  // Realtime subscription for user_courses changes
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel('courses_user_courses_changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'user_courses',
          filter: `user_id=eq.${user.id}`
        },
        (payload: any) => {
          console.log('Course enrolled:', payload);
          setAssignedCourseIds(prev => [...new Set([...prev, payload.new.course_id])]);
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'user_courses',
          filter: `user_id=eq.${user.id}`
        },
        (payload: any) => {
          console.log('Course unenrolled:', payload);
          setAssignedCourseIds(prev => prev.filter(id => id !== payload.old.course_id));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const coursesToShow = trainingData.courses;

  const handleEnroll = async (courseId: string) => {
    if (!user) return;
    
    // Check if already enrolled
    if (assignedCourseIds.includes(courseId)) {
      toast.info('You are already enrolled in this course');
      return;
    }

    const { error } = await supabase
      .from('user_courses')
      .insert({ user_id: user.id, course_id: courseId });
    
    if (error) {
      console.error('Enroll error:', error);
      toast.error('Failed to enroll');
    } else {
      toast.success('Enrolled successfully');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('nav.courses')}</h1>
          <p className="text-muted-foreground">{t('courses.subtitle')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coursesToShow.map((course) => {
            const title = language === 'en' ? course.title_en : course.title_fr;
            const lessonsCount = trainingData.lessons.filter(
              l => l.course_id === course.id && l.locale === language
            ).length;
            const quizzesCount = trainingData.quizzes.filter(
              q => q.course_id === course.id
            ).length;

            return (
              <Card key={course.id} className="transition-all hover:shadow-lg flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{course.role_required}</Badge>
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription>
                    {lessonsCount} {lessonsCount === 1 ? t('courses.lesson') : t('courses.lessons')} • {quizzesCount} {quizzesCount === 1 ? t('courses.quiz') : t('courses.quizzes')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  {assignedCourseIds.includes(course.id) ? (
                    <Link to={`/courses/${course.id}`}>
                      <Button className="w-full">{t('courses.view_course')}</Button>
                    </Link>
                  ) : (
                    <Button className="w-full" onClick={() => handleEnroll(course.id)}>Enroll</Button>
                  )}
                </CardContent>
              </Card>
            );
            })}
          </div>
      </div>
    </div>
  );
};

export default Courses;
