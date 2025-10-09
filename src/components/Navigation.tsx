import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { GraduationCap, Languages } from 'lucide-react';

export const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-border bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-primary font-semibold text-lg">
              <GraduationCap className="h-6 w-6" />
              <span className="hidden sm:inline">Gateway</span>
            </Link>
            <div className="flex gap-1">
              <Link to="/">
                <Button 
                  variant={isActive('/') ? 'default' : 'ghost'} 
                  size="sm"
                >
                  {t('nav.dashboard')}
                </Button>
              </Link>
              <Link to="/courses">
                <Button 
                  variant={isActive('/courses') ? 'default' : 'ghost'} 
                  size="sm"
                >
                  {t('nav.courses')}
                </Button>
              </Link>
              <Link to="/my-courses">
                <Button 
                  variant={isActive('/my-courses') ? 'default' : 'ghost'} 
                  size="sm"
                >
                  {t('nav.my_courses')}
                </Button>
              </Link>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Languages className="h-4 w-4" />
            {t('lang.toggle')}
          </Button>
        </div>
      </div>
    </nav>
  );
};
