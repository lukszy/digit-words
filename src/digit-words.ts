import { ConverterResult, Language } from './types';

const langMap: Record<Language, () => Promise<{ convert: (value: number) => ConverterResult }>> = {
  pl: () => import('./pl').then(m => m),
  cz: () => import('./cz').then(m => m),
  en: () => import('./en').then(m => m),
  de: () => import('./de').then(m => m),
  fr: () => import('./fr').then(m => m),
  es: () => import('./es').then(m => m),
  hr: () => import('./hr').then(m => m),
  hi: () => import('./hi').then(m => m),
};

const converterCache: Partial<Record<Language, (value: number) => ConverterResult>> = {};

export const toText = async (
  value: number | string,
  lang: Language = 'pl'
): Promise<ConverterResult> => {
  const numberValue = Number(value);

  if (isNaN(numberValue)) {
    throw new Error('Invalid number value.');
  }

  if (numberValue < 0) {
    throw new Error('Value must be greater than 0.');
  }

  const language = lang as Language;
  const converterLoader = langMap[language];

  if (!converterLoader) {
    throw new Error('Invalid language.');
  }

  // Get converter from cache or load it
  if (!converterCache[language]) {
    const module = await converterLoader();
    converterCache[language] = module.convert;
  }

  const converter = converterCache[language]!;
  return converter(numberValue);
};
