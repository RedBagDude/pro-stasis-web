import { es } from './es';
import { en } from './en';

export { es, en };

export const TRANSLATIONS = {
  es,
  en
};

export type Language = 'es' | 'en';
export type TranslationSchema = typeof es;
