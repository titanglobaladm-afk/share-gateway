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

type Step = 'loading' | 'test' | 'results';

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

    try {
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

      const roleTestQuizId = roleToAptitudeTestMap[role];
      const testQuestions = trainingData.questions.filter(
        q => q.quiz_id === roleTestQuizId
      );

      let correctCount = 0;
      const answerRecords = Object.entries(answers).map(([questionId, answer]) => {
        const question = testQuestions.find(q => q.id === questionId);
        let isCorrect = null;

        if (question?.type === 'mcq' && question.answer_index !== undefined) {
          isCorrect = answer === String(question.answer_index);
          if (isCorrect) correctCount++;
        } else if (question?.type === 'truefalse' && question.answer !== undefined) {
          isCorrect = answer === String(question.answer);
          if (isCorrect) correctCount++;
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

      const score = Math.round((correctCount / testQuestions.length) * 100);
      const passed = score >= 60;

      const { error: updateError } = await supabase
        .from('aptitude_test_attempts')
        .update({ 
          score, 
          passed, 
          completed_at: new Date().toISOString() 
        })
        .eq('id', attempt.id);

      if (updateError) throw updateError;

      const { error: evalError } = await supabase
        .from('ai_evaluations')
        .insert({
          user_id: user.id,
          attempt_id: attempt.id,
          evaluation_type: 'aptitude_test',
          overall_score: score,
          recommendation: passed ? 'passed' : 'failed'
        });

      if (evalError) console.error('Evaluation insert error:', evalError);

      if (passed) {
        await supabase
          .from('user_courses')
          .update({ role_test_passed: true })
          .eq('user_id', user.id)
          .eq('role_test_passed', false);

        toast.success(t('role_test.complete_message').replace('{role}', role));
      }

      setEvaluation({ overall_score: score, passed });
      setStep('results');

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
        <AptitudeTest 
          quizId={roleToAptitudeTestMap[role] || undefined}
          onComplete={handleTestComplete} 
        />
      </div>
    </div>
  );
};

export default RoleTest;