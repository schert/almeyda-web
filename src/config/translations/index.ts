import { Language, TranslationDictionary } from './types';
import { itTranslations } from './it';
import { enTranslations } from './en';

export * from './types';
export { itTranslations } from './it';
export { enTranslations } from './en';

export const translations: Record<Language, TranslationDictionary> = {
  it: itTranslations,
  en: enTranslations,
};

export const getTranslation = (lang: Language): TranslationDictionary => {
  return translations[lang] || translations.it;
};
