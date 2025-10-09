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

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/signin');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    // Check if user already completed onboarding
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

  const handleRoleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      // Update profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          phone: phone || null,
          locale,
          onboarding_completed: true,
        })
        .eq('user_id', user.id);

      if (profileError) throw profileError;

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

      // Update language context
      if (locale === 'en' || locale === 'fr') {
        setLanguage(locale);
      }

      toast.success(t('onb.done'));
      navigate('/');
    } catch (error: any) {
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
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">{t('onb.title')}</CardTitle>
          <CardDescription>{t('onb.sub')}</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <form onSubmit={handleRoleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label>{t('onb.select_role')}</Label>
                <RadioGroup value={role} onValueChange={(v) => setRole(v as AppRole)}>
                  {(['investor', 'doctor', 'nurse', 'driver', 'manager', 'security'] as AppRole[]).map((r) => (
                    <div key={r} className="flex items-center space-x-2">
                      <RadioGroupItem value={r} id={r} />
                      <Label htmlFor={r} className="cursor-pointer font-normal">
                        {t(`onb.roles.${r}`)}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <Button type="submit" className="w-full">
                {t('auth.continue')}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name *</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
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
                  disabled={loading}
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
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => setStep(1)} disabled={loading}>
                  Back
                </Button>
                <Button type="submit" className="flex-1" disabled={loading}>
                  {loading ? 'Saving...' : t('onb.submit')}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;
