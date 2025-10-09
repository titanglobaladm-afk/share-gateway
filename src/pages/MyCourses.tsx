import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { trainingData } from '@/data/trainingData';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Loader2, Lock, CheckCircle } from 'lucide-react';
import { roleToCoursesMap, roleToAptitudeTestMap, type AppRole } from '@/data/roleCoursesMap';
import { toast } from 'sonner';

const MyCourses = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [assignedCourses, setAssignedCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [userRole, setUserRole] = useState<AppRole | null>(null);

  useEffect(() => {
    const fetchAssignedCourses = async () => {
      if (!user) return;

      // Fetch user role
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .limit(1);

      if (roles && roles.length > 0) {
        setUserRole(roles[0].role as AppRole);
      }

      const { data } = await supabase
        .from('user_courses')
        .select('*')
        .eq('user_id', user.id);

      setAssignedCourses(data || []);
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
          event: '*',
          schema: 'public',
          table: 'user_courses',
          filter: `user_id=eq.${user.id}`
        },
        async () => {
          // Refetch courses on any change
          const { data } = await supabase
            .from('user_courses')
            .select('*')
            .eq('user_id', user.id);
          
          setAssignedCourses(data || []);
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
      const assignedIds = assignedCourses.map(c => c.course_id);
      const newCourses = courses.filter(courseId => !assignedIds.includes(courseId));

      if (newCourses.length === 0) {
        toast.info('You are already enrolled in all your courses');
        return;
      }

      // Insert new courses
      const inserts = newCourses.map(courseId => ({
        user_id: user.id,
        course_id: courseId,
        role_test_passed: courseId === 'orientation_common'
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
    return <div className="min-h-screen bg-background flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  // Split courses into unlocked and locked
  const unlockedCourses = assignedCourses.filter(uc => uc.role_test_passed);
  const lockedCourses = assignedCourses.filter(uc => !uc.role_test_passed);

  // If no courses, show enroll options
  if (assignedCourses.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{t('nav.my_courses')}</h1>
            <p className="text-muted-foreground">{t('my_courses.subtitle')}</p>
          </div>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-center text-muted-foreground">{t('my_courses.no_courses')}</p>
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
                <Button variant="secondary" onClick={() => navigate('/courses')}>
                  {t('nav.courses')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{t('nav.my_courses')}</h1>
          <p className="text-muted-foreground">{t('my_courses.subtitle')}</p>
        </div>

        {/* Available Courses */}
        {unlockedCourses.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              {t('role_test.available_courses')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {unlockedCourses.map((uc) => {
                const course = trainingData.courses.find(c => c.id === uc.course_id);
                if (!course) return null;

                const title = language === 'fr' ? course.title_fr : course.title_en;

                return (
                  <Card key={uc.id} className="hover:shadow-lg transition-shadow border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {title}
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </CardTitle>
                      <CardDescription>
                        <div className="flex flex-col gap-2 mt-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>{t('my_courses.role')}</span>
                            <Badge variant="outline">{course.role_required}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>{t('my_courses.version')}</span>
                            <Badge variant="secondary">{course.version}</Badge>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>{t('my_courses.progress')}</span>
                            <span>{uc.progress_percentage || 0}%</span>
                          </div>
                          <Progress value={uc.progress_percentage || 0} />
                        </div>
                        <Button 
                          onClick={() => navigate(`/courses/${course.id}`)}
                          className="w-full"
                        >
                          {t('dashboard.continue')}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Locked Courses */}
        {lockedCourses.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Lock className="h-6 w-6 text-orange-500" />
              {t('role_test.locked_courses')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lockedCourses.map((uc) => {
                const course = trainingData.courses.find(c => c.id === uc.course_id);
                if (!course) return null;

                const title = language === 'fr' ? course.title_fr : course.title_en;

                return (
                  <Card key={uc.id} className="hover:shadow-lg transition-shadow border-orange-200 opacity-90">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {title}
                        <Lock className="h-5 w-5 text-orange-500" />
                      </CardTitle>
                      <CardDescription>
                        <div className="flex flex-col gap-2 mt-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>{t('my_courses.role')}</span>
                            <Badge variant="outline">{course.role_required}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>{t('my_courses.version')}</span>
                            <Badge variant="secondary">{course.version}</Badge>
                          </div>
                          <Badge variant="destructive" className="text-xs">
                            {t('role_test.locked').replace('{role}', course.role_required)}
                          </Badge>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        onClick={() => navigate(`/role-test?role=${userRole || course.role_required}`)}
                        className="w-full"
                        variant="outline"
                      >
                        <Lock className="h-4 w-4 mr-2" />
                        {t('role_test.take_test').replace('{role}', course.role_required)}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
