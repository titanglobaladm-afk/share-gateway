import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, Lock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { AppRole, roleToAptitudeTestMap } from '@/data/roleCoursesMap';

interface JourneyStep {
  id: string;
  labelKey: string;
  status: 'complete' | 'current' | 'locked';
}

const JourneyProgress = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [steps, setSteps] = useState<JourneyStep[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const determineProgress = async () => {
      if (!user) return;

      const { data: profile } = await supabase
        .from('profiles')
        .select('onboarding_completed, kyc_verified')
        .eq('user_id', user.id)
        .single();

      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      const role = roleData?.role as AppRole;
      const isInvestor = role === 'investor';

      const { data: testData } = await supabase
        .from('aptitude_test_attempts')
        .select('passed')
        .eq('user_id', user.id)
        .eq('role', role)
        .eq('passed', true)
        .maybeSingle();

      const { data: coursesData } = await supabase
        .from('user_courses')
        .select('completed_at')
        .eq('user_id', user.id);

      const allCoursesComplete = coursesData?.every(c => c.completed_at !== null);

      const { data: docsData } = await supabase
        .from('user_document_signatures')
        .select('id')
        .eq('user_id', user.id);

      const { data: templatesData } = await supabase
        .from('document_templates')
        .select('id')
        .eq('active', true);

      const allDocsSigned = docsData?.length === templatesData?.length;

      const progressSteps: JourneyStep[] = [
        { id: 'profile', labelKey: 'journey.step1', status: 'complete' },
        { id: 'role', labelKey: 'journey.step2', status: 'complete' },
      ];

      if (isInvestor) {
        progressSteps.push({
          id: 'kyc',
          labelKey: 'journey.step3_kyc',
          status: profile?.kyc_verified ? 'complete' : 'current'
        });
      } else {
        progressSteps.push({
          id: 'test',
          labelKey: 'journey.step3',
          status: testData ? 'complete' : 'current'
        });
      }

      const trainingStatus = 
        (isInvestor && !profile?.kyc_verified) || (!isInvestor && !testData)
          ? 'locked'
          : allCoursesComplete
          ? 'complete'
          : 'current';

      progressSteps.push({
        id: 'training',
        labelKey: 'journey.step4',
        status: trainingStatus
      });

      const docsStatus = 
        !allCoursesComplete
          ? 'locked'
          : allDocsSigned
          ? 'complete'
          : 'current';

      progressSteps.push({
        id: 'documents',
        labelKey: 'journey.step5',
        status: docsStatus
      });

      progressSteps.push({
        id: 'complete',
        labelKey: 'journey.step6',
        status: profile?.onboarding_completed ? 'complete' : 'locked'
      });

      setSteps(progressSteps);
      setLoading(false);
    };

    determineProgress();
  }, [user]);

  if (loading) return null;

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{t('journey.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {steps.map((step) => {
            const Icon = 
              step.status === 'complete' 
                ? CheckCircle2 
                : step.status === 'current'
                ? Circle
                : Lock;

            return (
              <div key={step.id} className="flex items-center gap-3">
                <Icon 
                  className={`h-6 w-6 ${
                    step.status === 'complete' 
                      ? 'text-success' 
                      : step.status === 'current'
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`} 
                />
                <div className="flex-1">
                  <p className={`font-medium ${step.status === 'locked' ? 'text-muted-foreground' : ''}`}>
                    {t(step.labelKey)}
                  </p>
                </div>
                {step.status === 'current' && (
                  <Badge variant="secondary">{t('journey.current')}</Badge>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneyProgress;
