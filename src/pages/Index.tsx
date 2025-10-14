import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building2, Stethoscope, Heart, Truck, Briefcase, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const roles = [
    { id: 'investor', icon: Building2, descKey: 'role.investor.desc' },
    { id: 'doctor', icon: Stethoscope, descKey: 'role.doctor.desc' },
    { id: 'nurse', icon: Heart, descKey: 'role.nurse.desc' },
    { id: 'driver', icon: Truck, descKey: 'role.driver.desc' },
    { id: 'manager', icon: Briefcase, descKey: 'role.manager.desc' },
    { id: 'security', icon: Shield, descKey: 'role.security.desc' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          {t('landing.welcome')}
        </h1>
        <p className="text-xl text-muted-foreground mb-2">
          {t('landing.tagline')}
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          {t('landing.mission')}
        </p>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t('landing.explore_roles')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {roles.map(({ id, icon: Icon, descKey }) => (
            <Card key={id} className="p-6 hover:shadow-lg transition-all">
              <Icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t(`onb.roles.${id}`)}
              </h3>
              <p className="text-muted-foreground">
                {t(descKey)}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">
            {t('landing.cta')}
          </h3>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/signin')}>
              {t('landing.sign_up')}
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/signin')}>
              {t('landing.sign_in')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
