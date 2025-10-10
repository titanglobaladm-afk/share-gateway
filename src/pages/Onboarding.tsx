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
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { trainingData } from '@/data/trainingData';
import { AppRole, roleToCoursesMap, roleToAptitudeTestMap } from '@/data/roleCoursesMap';

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

  const handleRoleSelection = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Go to course assignment confirmation
  };

  const handleFinalSubmit = async () => {
    if (!user) return;
    setLoading(true);

    try {
      // Delete ALL existing roles for this user (clean slate)
      await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', user.id);

      // Insert new role
      const { error: roleError } = await supabase
        .from('user_roles')
        .insert({ user_id: user.id, role });

      if (roleError) {
        console.error('Role insert error:', roleError);
        throw roleError;
      }

      // Assign courses based on role
      const courses = roleToCoursesMap[role];
      console.log('Assigning courses:', courses, 'for role:', role);
      
      const courseInserts = courses.map((courseId) => ({
        user_id: user.id,
        course_id: courseId,
        // Only orientation_common is unlocked by default, role-specific courses require test
        role_test_passed: courseId === 'orientation_common'
      }));

      console.log('Course inserts:', courseInserts);

      const { data: insertedCourses, error: coursesError } = await supabase
        .from('user_courses')
        .insert(courseInserts)
        .select();

      if (coursesError) {
        console.error('Courses insert error:', coursesError);
        throw coursesError;
      }
      
      console.log('Successfully inserted courses:', insertedCourses);

      // Mark onboarding as completed
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ onboarding_completed: true })
        .eq('user_id', user.id);

      if (profileError) throw profileError;

      toast.success(t('onb.done'));
      
      // Show message about role test if needed
      const hasRoleTest = roleToAptitudeTestMap[role] !== null;
      if (hasRoleTest) {
        toast.info(`Complete your ${role} aptitude test to unlock all training courses`, {
          duration: 6000
        });
      }
      
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

        {/* Step 2: Role Selection */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('onb.select_role')}</CardTitle>
              <CardDescription>Choose your role to get started with relevant training</CardDescription>
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
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
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

        {/* Step 3: Course Assignment Confirmation */}
        {step === 3 && (
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
                <Button type="button" variant="outline" onClick={() => setStep(2)} disabled={loading}>
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
