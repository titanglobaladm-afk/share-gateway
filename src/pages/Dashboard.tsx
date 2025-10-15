import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Clock, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import { AppRole, roleToAptitudeTestMap } from '@/data/roleCoursesMap';
import JourneyProgress from '@/components/JourneyProgress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { trainingData } from '@/data/trainingData';

const Dashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<AppRole | null>(null);
  const [hasPassedRoleTest, setHasPassedRoleTest] = useState(false);
  const [hasLockedCourses, setHasLockedCourses] = useState(false);
  const [nextAction, setNextAction] = useState<{
    titleKey: string;
    descKey: string;
    buttonText: string;
    link: string;
  } | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [allCoursesComplete, setAllCoursesComplete] = useState(false);
  const [allDocsSigned, setAllDocsSigned] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<{
    id: string;
    title: string;
    lessonsCompleted: number;
    totalLessons: number;
    quizzesCompleted: number;
  } | null>(null);

  useEffect(() => {
    const fetchUserStatus = async () => {
      if (!user) return;

      const { data: profileData } = await supabase
        .from('profiles')
        .select('kyc_verified, onboarding_completed, locale')
        .eq('user_id', user.id)
        .single();
      
      setProfile(profileData);

      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (roleData) {
        const role = roleData.role as AppRole;
        setUserRole(role);
        const isInvestor = role === 'investor';
        const requiresTest = roleToAptitudeTestMap[role] !== null;
        
        if (requiresTest) {
          const { data: testData } = await supabase
            .from('aptitude_test_attempts')
            .select('passed')
            .eq('user_id', user.id)
            .eq('role', role)
            .eq('passed', true)
            .maybeSingle();

          setHasPassedRoleTest(!!testData);
        } else {
          setHasPassedRoleTest(true);
        }

        const { data: allCoursesData } = await supabase
          .from('user_courses')
          .select('completed_at')
          .eq('user_id', user.id);

        const coursesComplete = allCoursesData?.every(c => c.completed_at !== null) || false;
        setAllCoursesComplete(coursesComplete);

        const { data: docsData } = await supabase
          .from('user_document_signatures')
          .select('id')
          .eq('user_id', user.id);

        const { data: templatesData } = await supabase
          .from('document_templates')
          .select('id')
          .eq('active', true);

        const docsSigned = docsData?.length === templatesData?.length;
        setAllDocsSigned(docsSigned);

        // Fetch first incomplete course
        const { data: incompleteCourses } = await supabase
          .from('user_courses')
          .select('course_id, lessons_completed, quizzes_completed')
          .eq('user_id', user.id)
          .is('completed_at', null)
          .order('assigned_at', { ascending: true })
          .limit(1);

        if (incompleteCourses && incompleteCourses.length > 0) {
          const courseData = incompleteCourses[0];
          const course = trainingData.courses.find(c => c.id === courseData.course_id);
          
          if (course) {
            const courseLessons = trainingData.lessons.filter(l => l.course_id === courseData.course_id);
            const uniqueLessonIds = new Set(courseLessons.map(l => l.id.replace(/_en$|_fr$/, '')));
            
            setCurrentCourse({
              id: courseData.course_id,
              title: profileData?.locale === 'fr' ? course.title_fr : course.title_en,
              lessonsCompleted: Array.isArray(courseData.lessons_completed) ? courseData.lessons_completed.length : 0,
              totalLessons: uniqueLessonIds.size,
              quizzesCompleted: Array.isArray(courseData.quizzes_completed) ? courseData.quizzes_completed.length : 0
            });
          }
        }

        if (isInvestor && !profileData?.kyc_verified) {
          setNextAction({
            titleKey: 'next_action.kyc',
            descKey: 'next_action.kyc_desc',
            buttonText: t('next_action.kyc'),
            link: '/kyc-verification'
          });
        } else if (!isInvestor && !hasPassedRoleTest && requiresTest) {
          setNextAction({
            titleKey: 'next_action.test',
            descKey: 'next_action.test_desc',
            buttonText: t('next_action.test'),
            link: `/role-test?role=${role}`
          });
        } else if (!coursesComplete) {
          setNextAction({
            titleKey: 'next_action.training',
            descKey: 'next_action.training_desc',
            buttonText: t('next_action.training'),
            link: '/my-courses'
          });
        } else if (!docsSigned) {
          setNextAction({
            titleKey: 'next_action.documents',
            descKey: 'next_action.documents_desc',
            buttonText: t('next_action.documents'),
            link: '/documents'
          });
        } else {
          setNextAction({
            titleKey: 'next_action.complete',
            descKey: 'next_action.complete_desc',
            buttonText: t('dashboard.continue'),
            link: '/my-courses'
          });
        }
      }

      setLoading(false);
    };

    fetchUserStatus();
  }, [user, t]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('nav.dashboard')}</h1>
          <p className="text-muted-foreground">{t('dashboard.subtitle')}</p>
        </div>

        <JourneyProgress />
        
        {!loading && nextAction && (
          <Alert className="mb-8 border-primary bg-primary/5">
            <AlertCircle className="h-5 w-5 text-primary" />
            <AlertTitle className="text-lg font-semibold">
              {t(nextAction.titleKey)}
            </AlertTitle>
            <AlertDescription className="mt-2">
              <p className="mb-4">{t(nextAction.descKey)}</p>
              <Button onClick={() => navigate(nextAction.link)} size="lg">
                {nextAction.buttonText}
              </Button>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{t('dashboard.active_courses')}</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">{t('dashboard.in_progress')}</p>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{t('dashboard.completed')}</CardTitle>
              <Award className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">{t('dashboard.courses_finished')}</p>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{t('dashboard.study_time')}</CardTitle>
              <Clock className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0h</div>
              <p className="text-xs text-muted-foreground">{t('dashboard.this_week')}</p>
            </CardContent>
          </Card>
        </div>

        {currentCourse ? (
          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.continue_learning')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
                <div>
                  <h3 className="font-semibold mb-1">{currentCourse.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {currentCourse.lessonsCompleted}/{currentCourse.totalLessons} {t('courses.lesson')} • {currentCourse.quizzesCompleted} {t('courses.quiz')}
                  </p>
                </div>
                <Link to={`/courses/${currentCourse.id}`}>
                  <Button>{t('dashboard.continue')}</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : allCoursesComplete ? (
          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.continue_learning')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-4">
                🎉 {t('dashboard.all_complete')}
              </p>
            </CardContent>
          </Card>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
