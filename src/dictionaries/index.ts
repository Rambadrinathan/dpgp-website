import 'server-only';

export type Locale = 'en' | 'hi' | 'bn';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  hi: () => import('./hi.json').then((module) => module.default),
  bn: () => import('./bn.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export const locales: Locale[] = ['en', 'hi', 'bn'];
export const defaultLocale: Locale = 'bn';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
  bn: 'বাংলা',
};
