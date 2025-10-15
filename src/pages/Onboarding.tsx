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
import { AppRole, roleToCoursesMap, roleToAptitudeTestMap, roleDescriptions, courseOutlines } from '@/data/roleCoursesMap';
import RoleExplorer from '@/components/RoleExplorer';

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
      
      // Admin-only reset parameter
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('reset') === 'true') {
        const { data: roleData } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .eq('role', 'admin')
          .maybeSingle();

        if (roleData) {
          console.info('onboarding: admin reset triggered');
          return; 
        } else {
          toast.error('Reset is restricted to admins');
          // strip the reset param instead of navigating away to avoid loops
          const newUrl = window.location.pathname;
          window.history.replaceState(null, '', newUrl);
          // continue onboarding normally
        }
      }
      
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

  // Restore persisted onboarding progress per-user
  useEffect(() => {
    if (!user) return;
    const prefix = `onb_${user.id}`;
    const savedStep = sessionStorage.getItem(`${prefix}_step`);
    if (savedStep) setStep(Number(savedStep));
    const savedRole = sessionStorage.getItem(`${prefix}_role`);
    if (savedRole === 'investor' || savedRole === 'doctor' || savedRole === 'nurse' || savedRole === 'driver' || savedRole === 'manager' || savedRole === 'security') {
      setRole(savedRole as AppRole);
    }
    const savedLocale = sessionStorage.getItem(`${prefix}_locale`);
    if (savedLocale === 'en' || savedLocale === 'fr') setLocale(savedLocale as any);
    const savedFullName = sessionStorage.getItem(`${prefix}_fullName`);
    if (savedFullName) setFullName(savedFullName);
    const savedPhone = sessionStorage.getItem(`${prefix}_phone`);
    if (savedPhone) setPhone(savedPhone);
  }, [user]);

  // Persist step as the user advances
  useEffect(() => {
    if (!user) return;
    const prefix = `onb_${user.id}`;
    sessionStorage.setItem(`${prefix}_step`, String(step));
    console.info('onboarding: persist step', { step, prefix });
  }, [step, user]);

  // Debug mount/unmount
  useEffect(() => {
    console.info('onboarding: mounted');
    return () => console.info('onboarding: unmounted');
  }, []);

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

      // Don't change language yet - wait until onboarding complete to avoid remount
      if (user) {
        const prefix = `onb_${user.id}`;
        sessionStorage.setItem(`${prefix}_step`, '2');
        sessionStorage.setItem(`${prefix}_locale`, locale);
        sessionStorage.setItem(`${prefix}_fullName`, fullName);
        sessionStorage.setItem(`${prefix}_phone`, phone);
      }
      setStep(2);
    } catch (error: any) {
      toast.error(error.message || 'Failed to update profile');
    }
  };

  const handleRoleSelection = (selectedRole: AppRole) => {
    console.info('onboarding: role selected', selectedRole);
    setRole(selectedRole);
    if (user) {
      const prefix = `onb_${user.id}`;
      sessionStorage.setItem(`${prefix}_role`, selectedRole);
      sessionStorage.setItem(`${prefix}_step`, '3');
    }
    setStep(3); // Go to course assignment confirmation
  };

  const handleFinalSubmit = async () => {
    if (!user) return;
    setLoading(true);

    try {
      // Delete ALL existing roles for this user (clean slate)
      const { error: deleteRolesError } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', user.id);

      if (deleteRolesError) {
        console.error('Failed to delete existing roles:', deleteRolesError);
        throw new Error('Failed to clear previous role assignments');
      }

      // Delete ALL existing courses for this user (clean slate)
      const { error: deleteCoursesError } = await supabase
        .from('user_courses')
        .delete()
        .eq('user_id', user.id);

      if (deleteCoursesError) {
        console.error('Failed to delete existing courses:', deleteCoursesError);
        throw new Error('Failed to clear previous course assignments');
      }

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

      // DO NOT set onboarding_completed = true yet!
      // It will be set after user completes test + courses + documents

      // Apply language preference now that onboarding setup is complete
      if (locale === 'en' || locale === 'fr') {
        setLanguage(locale);
      }

      // Clear persisted onboarding progress
      const prefix = `onb_${user.id}`;
      sessionStorage.removeItem(`${prefix}_step`);
      sessionStorage.removeItem(`${prefix}_role`);
      sessionStorage.removeItem(`${prefix}_locale`);
      sessionStorage.removeItem(`${prefix}_fullName`);
      sessionStorage.removeItem(`${prefix}_phone`);

      toast.success(t('onb.done'));
      
      // Navigate based on role
      if (role === 'investor') {
        navigate('/kyc-verification'); // Investors go to KYC
      } else {
        // Staff roles go to aptitude test
        const testId = roleToAptitudeTestMap[role];
        if (testId) {
          navigate(`/role-test?role=${role}`);
        } else {
          navigate('/my-courses'); // Fallback (shouldn't happen)
        }
      }
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
                        if (user) {
                          const prefix = `onb_${user.id}`;
                          sessionStorage.setItem(`${prefix}_locale`, val);
                        }
                      }
                    }}
                  >
                    <SelectTrigger id="locale">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-popover">
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

        {/* Step 2: Role Explorer */}
        {step === 2 && (
          <RoleExplorer onSelect={handleRoleSelection} />
        )}

        {/* Step 3: Course Assignment Confirmation */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('onb.confirm_role')}</CardTitle>
              <CardDescription>
                Review your selected role and assigned training courses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Role summary card */}
              <Card className="p-4 bg-muted">
                <h3 className="text-xl font-bold mb-2">{t(`onb.roles.${role}`)}</h3>
                <p className="text-sm mb-4">
                  {roleDescriptions[role][language]}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">{t('role_explorer.training')}</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {courseOutlines[role][language].map((course, i) => (
                      <li key={i} className="text-sm">{course}</li>
                    ))}
                  </ul>
                </div>
              </Card>

              <div className="flex gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(2)} disabled={loading}>
                  {t('onb.back')}
                </Button>
                <Button 
                  onClick={handleFinalSubmit} 
                  className="flex-1"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t('onb.submitting')}
                    </>
                  ) : (
                    t('onb.start')
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
