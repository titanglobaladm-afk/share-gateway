import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AptitudeTest } from '@/components/AptitudeTest';
import { EvaluationResults } from '@/components/EvaluationResults';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { trainingData } from '@/data/trainingData';

type AppRole = 'investor' | 'doctor' | 'nurse' | 'driver' | 'manager' | 'security';

const roleToCoursesMap: Record<AppRole, string[]> = {
  investor: ['orientation_common'],
  doctor: ['orientation_common', 'doctor_track'],
  nurse: ['orientation_common', 'nurse_track'],
  driver: ['orientation_common', 'driver_track'],
  manager: ['orientation_common', 'manager_track'],
  security: ['orientation_common', 'security_track'],
};

const Onboarding = () => {
  const { t, language, setLanguage } = useLanguage();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<AppRole>('investor');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [locale, setLocale] = useState(language);
  const [testAnswers, setTestAnswers] = useState<Record<string, string>>({});
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<any>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/signin');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const checkOnboarding = async () => {
      if (!user) return;
      
      const { data } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .eq('user_id', user.id)
        .single();

      if (data?.onboarding_completed) {
        navigate('/');
      }
    };

    checkOnboarding();
  }, [user, navigate]);

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      // Update profile immediately (without onboarding_completed flag)
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          phone: phone || null,
          locale,
        })
        .eq('user_id', user.id);

      if (error) throw error;

      if (locale === 'en' || locale === 'fr') {
        setLanguage(locale);
      }
      setStep(2);
    } catch (error: any) {
      toast.error(error.message || 'Failed to update profile');
    }
  };

  const handleTestComplete = async (answers: Record<string, string>) => {
    if (!user) return;
    
    setLoading(true);
    setTestAnswers(answers);

    try {
      // Create aptitude test attempt
      const { data: attempt, error: attemptError } = await supabase
        .from('aptitude_test_attempts')
        .insert({
          user_id: user.id,
          started_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (attemptError) throw attemptError;
      setAttemptId(attempt.id);

      // Get all aptitude test questions to calculate correct answers
      const aptitudeQuestions = trainingData.questions.filter(
        q => q.quiz_id === 'aptitude_test_general'
      );

      // Insert all answers
      const answerInserts = Object.entries(answers).map(([questionId, answer]) => {
        const question = aptitudeQuestions.find(q => q.id === questionId);
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
          is_correct: isCorrect,
        };
      });

      const { error: answersError } = await supabase
        .from('aptitude_test_answers')
        .insert(answerInserts);

      if (answersError) throw answersError;

      // Move to evaluation step
      setStep(3);

      // Call AI evaluation edge function
      const { data: evalData, error: evalError } = await supabase.functions.invoke(
        'evaluate-aptitude-test',
        {
          body: { attemptId: attempt.id }
        }
      );

      if (evalError) throw evalError;

      setEvaluation(evalData.evaluation);
      setStep(4); // Show results

    } catch (error: any) {
      console.error('Test submission error:', error);
      toast.error(error.message || 'Failed to submit test');
      setLoading(false);
    }
  };

  const handleRoleSelection = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(6); // Go to course assignment confirmation
  };

  const handleFinalSubmit = async () => {
    if (!user) return;
    setLoading(true);

    try {
      // Delete existing investor role
      await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', user.id)
        .eq('role', 'investor');

      // Insert new role
      const { error: roleError } = await supabase
        .from('user_roles')
        .insert({ user_id: user.id, role });

      if (roleError) throw roleError;

      // Assign courses based on role
      const courses = roleToCoursesMap[role];
      const courseInserts = courses.map((courseId) => ({
        user_id: user.id,
        course_id: courseId,
      }));

      const { error: coursesError } = await supabase
        .from('user_courses')
        .insert(courseInserts);

      if (coursesError) throw coursesError;

      // Mark onboarding as completed
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ onboarding_completed: true })
        .eq('user_id', user.id);

      if (profileError) throw profileError;

      toast.success(t('onb.done'));
      navigate('/');
    } catch (error: any) {
      console.error('Final submit error:', error);
      toast.error(error.message || 'Onboarding failed');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Step 1: Basic Profile */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('onb.profile.title')}</CardTitle>
              <CardDescription>Tell us about yourself</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full name *</Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="locale">Language *</Label>
                  <Select 
                    value={locale} 
                    onValueChange={(val) => {
                      if (val === 'en' || val === 'fr') {
                        setLocale(val);
                      }
                    }}
                  >
                    <SelectTrigger id="locale">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  {t('auth.continue')}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Aptitude Test */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('aptitude.title')}</CardTitle>
              <CardDescription>{t('aptitude.instructions')}</CardDescription>
            </CardHeader>
            <CardContent>
              <AptitudeTest onComplete={handleTestComplete} />
            </CardContent>
          </Card>
        )}

        {/* Step 3: AI Evaluation Loading */}
        {step === 3 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12 space-y-4">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-lg font-medium">{t('aptitude.evaluating')}</p>
              <p className="text-sm text-muted-foreground">This may take a minute...</p>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Evaluation Results */}
        {step === 4 && evaluation && (
          <div className="space-y-6">
            <EvaluationResults evaluation={evaluation} />
            <Button onClick={() => setStep(5)} className="w-full" size="lg">
              {t('auth.continue')}
            </Button>
          </div>
        )}

        {/* Step 5: Role Selection */}
        {step === 5 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('onb.select_role')}</CardTitle>
              <CardDescription>
                {evaluation && `Based on your evaluation (${evaluation.overall_score}%), select your role.`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRoleSelection} className="space-y-6">
                <RadioGroup value={role} onValueChange={(v) => setRole(v as AppRole)}>
                  {(['investor', 'doctor', 'nurse', 'driver', 'manager', 'security'] as AppRole[]).map((r) => (
                    <div key={r} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent">
                      <RadioGroupItem value={r} id={r} />
                      <Label htmlFor={r} className="flex-1 cursor-pointer font-normal">
                        {t(`onb.roles.${r}`)}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={() => setStep(4)}>
                    Back
                  </Button>
                  <Button type="submit" className="flex-1">
                    {t('auth.continue')}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 6: Course Assignment Confirmation */}
        {step === 6 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start</CardTitle>
              <CardDescription>
                You'll be enrolled in the following courses based on your role: {t(`onb.roles.${role}`)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                {roleToCoursesMap[role].map(courseId => {
                  const course = trainingData.courses.find(c => c.id === courseId);
                  return (
                    <li key={courseId}>
                      {language === 'fr' ? course?.title_fr : course?.title_en}
                    </li>
                  );
                })}
              </ul>
              <div className="flex gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(5)} disabled={loading}>
                  Back
                </Button>
                <Button 
                  onClick={handleFinalSubmit} 
                  className="flex-1"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Completing...
                    </>
                  ) : (
                    t('onb.submit')
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
