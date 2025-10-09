import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import { EvaluationSummary } from '@/components/EvaluationSummary';

const Dashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [evaluation, setEvaluation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvaluation = async () => {
      if (!user) return;

      const { data } = await supabase
        .from('ai_evaluations')
        .select('*')
        .eq('user_id', user.id)
        .eq('evaluation_type', 'aptitude_test')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      setEvaluation(data);
      setLoading(false);
    };

    fetchEvaluation();
  }, [user]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('nav.dashboard')}</h1>
          <p className="text-muted-foreground">{t('dashboard.subtitle')}</p>
        </div>

        {!loading && evaluation && (
          <div className="mb-8">
            <EvaluationSummary evaluation={evaluation} />
          </div>
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
