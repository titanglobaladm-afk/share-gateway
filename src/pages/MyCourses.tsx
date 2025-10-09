import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { trainingData } from '@/data/trainingData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';

const MyCourses = () => {
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
                You can browse available courses and enroll from the Courses page.
              </p>
              <div className="flex justify-center">
                <Link to="/courses">
                  <Button variant="secondary">{t('nav.courses')}</Button>
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
