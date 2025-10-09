import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { trainingData } from '@/data/trainingData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { roleToCoursesMap } from '@/data/roleCoursesMap';
import { Loader2 } from 'lucide-react';

const MyCourses = () => {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const [assignedCourseIds, setAssignedCourseIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

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
      .channel('user_courses_changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'user_courses',
          filter: `user_id=eq.${user.id}`
        },
        (payload: any) => {
          console.log('Course inserted:', payload);
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
          console.log('Course deleted:', payload);
          setAssignedCourseIds(prev => prev.filter(id => id !== payload.old.course_id));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  const handleEnrollDefaultCourses = async () => {
    if (!user) return;
    setEnrolling(true);

    try {
      // Fetch user roles
      const { data: rolesData, error: rolesError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id);

      if (rolesError) throw rolesError;

      // Default to investor if no role
      const userRole = rolesData?.[0]?.role || 'investor';
      const courses = roleToCoursesMap[userRole as keyof typeof roleToCoursesMap];

      if (!courses) {
        toast.error('No courses found for your role');
        return;
      }

      // Filter out already assigned courses
      const newCourses = courses.filter(courseId => !assignedCourseIds.includes(courseId));

      if (newCourses.length === 0) {
        toast.info('You are already enrolled in all your courses');
        return;
      }

      // Insert new courses
      const inserts = newCourses.map(courseId => ({
        user_id: user.id,
        course_id: courseId,
      }));

      const { error: insertError } = await supabase
        .from('user_courses')
        .insert(inserts);

      if (insertError) throw insertError;

      toast.success('Successfully enrolled in your courses');
    } catch (error: any) {
      console.error('Enroll error:', error);
      toast.error('Failed to enroll in courses');
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const assignedCourses = trainingData.courses.filter(course => 
    assignedCourseIds.includes(course.id)
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('nav.my_courses')}</h1>
          <p className="text-muted-foreground">{t('my_courses.subtitle')}</p>
        </div>

        {assignedCourses.length === 0 ? (
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-center text-muted-foreground">
                {t('my_courses.no_courses')}
              </p>
              <p className="text-center text-sm text-muted-foreground">
                Get started by enrolling in your default courses or browse all available courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={handleEnrollDefaultCourses} 
                  disabled={enrolling}
                  className="min-w-[200px]"
                >
                  {enrolling ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enrolling...
                    </>
                  ) : (
                    'Enroll My Default Courses'
                  )}
                </Button>
                <Link to="/courses">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    {t('nav.courses')}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {assignedCourses.map((course) => {
            const title = language === 'en' ? course.title_en : course.title_fr;
            
            return (
              <Card key={course.id} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="mb-2">{title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-4">
                        {t('my_courses.role')}: {course.role_required} • {t('my_courses.version')} {course.version}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{t('my_courses.progress')}</span>
                          <span className="font-semibold">0%</span>
                        </div>
                        <Progress value={0} />
                      </div>
                    </div>
                    <Link to={`/courses/${course.id}`}>
                      <Button>{t('dashboard.continue')}</Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">{t('course.lessons')}:</span>{' '}
                      <span className="font-semibold">0/1</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{t('courses.quizzes')}:</span>{' '}
                      <span className="font-semibold">0/1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
