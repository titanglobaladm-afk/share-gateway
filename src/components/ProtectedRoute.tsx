import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAuth?: boolean;
}

const ProtectedRoute = ({ children, requireAuth = true }: ProtectedRouteProps) => {
  const { user, loading: authLoading } = useAuth();
  const [checkingOnboarding, setCheckingOnboarding] = useState(true);
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      if (!user) {
        setCheckingOnboarding(false);
        return;
      }

      const { data } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .eq('user_id', user.id)
        .single();

      setOnboardingCompleted(data?.onboarding_completed ?? false);
      setCheckingOnboarding(false);
    };

    if (!authLoading) {
      checkOnboarding();
    }
  }, [user, authLoading]);

  if (authLoading || checkingOnboarding) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (requireAuth && !user) {
    return <Navigate to="/signin" replace />;
  }

  if (requireAuth && user && !onboardingCompleted) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
