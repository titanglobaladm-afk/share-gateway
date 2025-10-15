import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { useAdminCheck } from '@/hooks/useAdminCheck';
import { Button } from '@/components/ui/button';
import { GraduationCap, Languages, LogOut, Shield } from 'lucide-react';

export const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();
  const { user, signOut } = useAuth();
  const { isAdmin } = useAdminCheck();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin');
  };

  const isActive = (path: string) => location.pathname === path;

  // Don't show navigation on public pages
  if (location.pathname === '/' && !user) {
    return null;
  }
  
  if (location.pathname === '/signin' || location.pathname === '/onboarding') {
    return null;
  }

  return (
    <nav className="border-b border-border bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="flex items-center gap-2 text-primary font-semibold text-lg">
              <GraduationCap className="h-6 w-6" />
              <span className="hidden sm:inline">Gateway</span>
            </Link>
            <div className="flex gap-1">
              <Link to="/dashboard">
                <Button 
                  variant={isActive('/dashboard') ? 'default' : 'ghost'} 
                  size="sm"
                >
                  {t('nav.dashboard')}
                </Button>
              </Link>
              <Link to="/my-courses">
                <Button 
                  variant={isActive('/my-courses') ? 'default' : 'ghost'} 
                  size="sm"
                >
                  {t('nav.my_training')}
                </Button>
              </Link>
              <Link to="/documents">
                <Button 
                  variant={isActive('/documents') ? 'default' : 'ghost'} 
                  size="sm"
                >
                  {t('nav.documents')}
                </Button>
              </Link>
              <Link to="/resources">
                <Button 
                  variant={isActive('/resources') ? 'default' : 'ghost'} 
                  size="sm"
                >
                  {language === 'en' ? 'Resources' : 'Ressources'}
                </Button>
              </Link>
              {isAdmin && (
                <Link to="/admin">
                  <Button 
                    variant={isActive('/admin') ? 'default' : 'ghost'} 
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Shield className="h-4 w-4" />
                    Admin
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Languages className="h-4 w-4" />
              {t('lang.toggle')}
            </Button>
            {user && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSignOut}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">{t('nav.sign_out')}</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
