import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { AptitudeTest } from '@/components/AptitudeTest';
import { EvaluationResults } from '@/components/EvaluationResults';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import type { AppRole } from '@/data/roleCoursesMap';
import { roleToAptitudeTestMap } from '@/data/roleCoursesMap';
import { trainingData } from '@/data/trainingData';

type Step = 'loading' | 'test' | 'evaluating' | 'results';

const RoleTest = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const [step, setStep] = useState<Step>('loading');
  const [role, setRole] = useState<AppRole | null>(null);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<any>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!user) {
        navigate('/signin');
        return;
      }

      // Get role from URL or fetch from database
      const roleParam = searchParams.get('role') as AppRole | null;
      
      if (roleParam && roleToAptitudeTestMap[roleParam]) {
        setRole(roleParam);
        setStep('test');
        return;
      }

      // If no role in URL, fetch user's primary role
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id);

      if (roles && roles.length > 0) {
        const userRole = roles[0].role as AppRole;
        if (roleToAptitudeTestMap[userRole]) {
          setRole(userRole);
          setStep('test');
        } else {
          toast.error('No role-specific test available for your role');
          navigate('/my-courses');
        }
      } else {
        toast.error('No role found. Please complete onboarding.');
        navigate('/onboarding');
      }
    };

    fetchUserRole();
  }, [user, navigate, searchParams]);

  const handleTestComplete = async (answers: Record<string, string>) => {
    if (!user || !role) return;

    setStep('evaluating');

    try {
      // Create test attempt with role
      const { data: attempt, error: attemptError } = await supabase
        .from('aptitude_test_attempts')
        .insert({
          user_id: user.id,
          role: role,
          started_at: new Date().toISOString()
        })
        .select()
        .single();

      if (attemptError) throw attemptError;

      setAttemptId(attempt.id);

      // Get role-specific quiz questions
      const roleTestQuizId = roleToAptitudeTestMap[role];
      const testQuestions = trainingData.questions.filter(
        q => q.quiz_id === roleTestQuizId
      );

      // Insert answers with correctness calculation
      const answerRecords = Object.entries(answers).map(([questionId, answer]) => {
        const question = testQuestions.find(q => q.id === questionId);
        let isCorrect = null;

        // Calculate correctness for MCQ and True/False
        if (question?.type === 'mcq' && question.answer_index !== undefined) {
          isCorrect = answer === String(question.answer_index);
        } else if (question?.type === 'truefalse' && question.answer !== undefined) {
          isCorrect = answer === String(question.answer);
        }

        return {
          attempt_id: attempt.id,
          question_id: questionId,
          answer: answer,
          is_correct: isCorrect
        };
      });

      const { error: answersError } = await supabase
        .from('aptitude_test_answers')
        .insert(answerRecords);

      if (answersError) throw answersError;

      // Call evaluation function with role parameter
      const { data: evalData, error: evalError } = await supabase.functions.invoke(
        'evaluate-aptitude-test',
        { body: { attemptId: attempt.id, role: role } }
      );

      if (evalError) throw evalError;

      setEvaluation(evalData.evaluation);
      setStep('results');

      if (evalData.passed) {
        toast.success(t('role_test.complete_message').replace('{role}', role));
      }
    } catch (error) {
      console.error('Error submitting test:', error);
      toast.error('Failed to submit test. Please try again.');
      setStep('test');
    }
  };

  if (!user) {
    return null;
  }

  if (step === 'loading') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (step === 'evaluating') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">{t('aptitude.evaluating')}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 'results' && evaluation) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto py-8">
          <EvaluationResults evaluation={evaluation} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">
            {t('role_test.title').replace('{role}', role || '')}
          </h1>
          <p className="text-muted-foreground">
            {t('role_test.subtitle').replace('{role}', role || '')}
          </p>
        </div>
        <AptitudeTest onComplete={handleTestComplete} />
      </div>
    </div>
  );
};

export default RoleTest;