import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Clock, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import { AppRole, roleToAptitudeTestMap } from '@/data/roleCoursesMap';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Dashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<AppRole | null>(null);
  const [hasPassedRoleTest, setHasPassedRoleTest] = useState(false);
  const [hasLockedCourses, setHasLockedCourses] = useState(false);

  useEffect(() => {
    const fetchUserStatus = async () => {
      if (!user) return;

      // Fetch user's role
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (roleData) {
        const role = roleData.role as AppRole;
        setUserRole(role);

        // Check if role requires a test
        const requiresTest = roleToAptitudeTestMap[role] !== null;
        
        if (requiresTest) {
          // Check if user has passed the role test
          const { data: testData } = await supabase
            .from('aptitude_test_attempts')
            .select('passed')
            .eq('user_id', user.id)
            .eq('role', role)
            .eq('passed', true)
            .maybeSingle();

          setHasPassedRoleTest(!!testData);

          // Check if user has locked courses
          const { data: coursesData } = await supabase
            .from('user_courses')
            .select('role_test_passed')
            .eq('user_id', user.id)
            .eq('role_test_passed', false);

          setHasLockedCourses(!!coursesData && coursesData.length > 0);
        } else {
          setHasPassedRoleTest(true); // No test required
        }
      }

      setLoading(false);
    };

    fetchUserStatus();
  }, [user]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('nav.dashboard')}</h1>
          <p className="text-muted-foreground">{t('dashboard.subtitle')}</p>
        </div>

        {!loading && !hasPassedRoleTest && hasLockedCourses && userRole && (
          <Alert className="mb-8 border-primary bg-primary/5">
            <AlertCircle className="h-5 w-5 text-primary" />
            <AlertTitle className="text-lg font-semibold">Complete Your {userRole} Aptitude Test</AlertTitle>
            <AlertDescription className="mt-2">
              <p className="mb-4">
                You have courses waiting to be unlocked. Pass the {userRole} aptitude test to begin your training.
              </p>
              <Button onClick={() => navigate(`/role-test?role=${userRole}`)} size="lg">
                Take {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Test
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

        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.continue_learning')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
              <div>
                <h3 className="font-semibold mb-1">Essential Nursing Skills</h3>
                <p className="text-sm text-muted-foreground">1 {t('courses.lesson')} • 1 {t('courses.quiz')}</p>
              </div>
              <Link to="/courses/nurse_track">
                <Button>{t('dashboard.continue')}</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
