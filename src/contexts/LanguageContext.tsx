import React, { createContext, useContext, useState, useEffect } from 'react';
import { trainingData } from '@/data/trainingData';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  const [language, setLanguageState] = useState<Language>(() => {
    // Initialize from localStorage for immediate UI update
    const stored = localStorage.getItem('preferred_language');
    return (stored === 'fr' || stored === 'en') ? stored : 'en';
  });

  // Load user's saved language preference from database
  useEffect(() => {
    if (loading) return;

    const loadLanguagePreference = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('locale')
          .eq('user_id', user.id)
          .single();

        if (data && !error && (data.locale === 'en' || data.locale === 'fr')) {
          setLanguageState(data.locale as Language);
          localStorage.setItem('preferred_language', data.locale);
        }
      }
    };

    loadLanguagePreference();
  }, [user, loading]);

  const setLanguage = async (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred_language', lang);

    // Sync to database if user is authenticated
    if (user) {
      await supabase
        .from('profiles')
        .update({ locale: lang })
        .eq('user_id', user.id);
    }
  };

  const t = (key: string): string => {
    return trainingData.i18n[language][key as keyof typeof trainingData.i18n.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
