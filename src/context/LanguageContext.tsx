import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationDictionary, getTranslation } from '../config/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  toggleLanguage: () => void;
}

const STORAGE_KEY = 'almeyda_language_preference';

const detectInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'it';

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'it' || saved === 'en') {
      return saved;
    }

    // Auto-detect from browser locale
    const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || '';
    if (browserLang.toLowerCase().startsWith('it')) {
      return 'it';
    }
    // Default to English for international travelers / non-Italian browsers
    return 'en';
  } catch {
    return 'it';
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore storage errors in restricted sandboxes
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

  useEffect(() => {
    try {
      document.documentElement.lang = language;
    } catch {
      // Ignore
    }
  }, [language]);

  const t = getTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
