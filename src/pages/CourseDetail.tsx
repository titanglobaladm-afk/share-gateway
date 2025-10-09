import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { trainingData } from '@/data/trainingData';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, ArrowLeft, BookOpen, ClipboardList, Clock, Target, Lock, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const [roleTestPassed, setRoleTestPassed] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const course = trainingData.courses.find(c => c.id === courseId);

  useEffect(() => {
    const checkCourseAccess = async () => {
      if (!user || !courseId) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('user_courses')
        .select('role_test_passed')
        .eq('user_id', user.id)
        .eq('course_id', courseId)
        .single();

      if (error) {
        console.error('Error checking course access:', error);
        toast.error('Failed to verify course access');
        navigate('/my-courses');
        return;
      }

      setRoleTestPassed(data?.role_test_passed ?? false);
      setLoading(false);

      // If course requires role test and it's not passed, redirect
      if (!data?.role_test_passed && courseId !== 'orientation_common') {
        toast.error(t('role_test.locked').replace('{role}', course?.role_required || ''));
        navigate('/my-courses');
      }
    };

    checkCourseAccess();
  }, [user, courseId, navigate, course, t]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">{t('course.not_found')}</p>
      </div>
    );
  }

  const title = language === 'en' ? course.title_en : course.title_fr;
  const minContentChars = trainingData.settings?.lessonMinContentChars || 40;
  const hideEmptyLessons = trainingData.settings?.hideEmptyLessons || false;

  const hasInsufficientContent = (htmlBody: string) => {
    const strippedContent = htmlBody.replace(/<[^>]*>/g, '').trim();
    return !strippedContent || strippedContent.length < minContentChars;
  };

  let lessons = trainingData.lessons.filter(
    l => l.course_id === course.id && l.locale === language
  ).sort((a, b) => a.order - b.order);

  if (hideEmptyLessons) {
    lessons = lessons.filter(lesson => !hasInsufficientContent(lesson.htmlBody));
  }
  
  const quizzes = trainingData.quizzes.filter(q => q.course_id === course.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6"
          onClick={() => navigate('/courses')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('course.back')}
        </Button>

        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
              <Badge variant="secondary">{course.role_required}</Badge>
            </div>
          </div>
          <p className="text-muted-foreground">
            {t('course.subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                {t('course.lessons')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {lessons.map((lesson, index) => {
                const isInsufficient = hasInsufficientContent(lesson.htmlBody);
                
                return (
                  <div key={lesson.id}>
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {index + 1}
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold mb-1">{lesson.title}</h3>
                        {isInsufficient ? (
                          <Alert variant="destructive" className="py-2">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription className="text-sm">
                              {t('lesson.notice.empty')}
                            </AlertDescription>
                          </Alert>
                        ) : (
                          <div 
                            className="text-sm text-muted-foreground prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: lesson.htmlBody }}
                          />
                        )}
                      </div>
                    </div>
                    {index < lessons.length - 1 && <Separator className="my-2" />}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-accent" />
                {t('course.assessments')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quizzes.map((quiz) => {
                const quizTitle = language === 'en' ? quiz.title_en : quiz.title_fr;
                const questionsCount = trainingData.questions.filter(
                  q => q.quiz_id === quiz.id
                ).length;

                return (
                  <div key={quiz.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">{quizTitle}</h3>
                      <p className="text-sm text-muted-foreground">
                        {questionsCount} {t('course.questions')} • {Math.floor(quiz.timeLimitSec / 60)} {t('course.min')} • {t('course.pass')}: {quiz.passingScore}%
                      </p>
                    </div>
                    <Button onClick={() => navigate(`/quiz/${quiz.id}`)}>
                      {t('quiz.start')}
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
