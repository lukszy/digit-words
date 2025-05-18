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
  const numberValue = toNumber(value);

  if (numberValue < 0) {
    throw new Error('Value must be greater than 0.');
  }

  const converterLoader = langMap[lang];

  if (!converterLoader) {
    throw new Error('Invalid language.');
  }

  // Get converter from cache or load it
  if (!converterCache[lang]) {
    const module = await converterLoader();
    converterCache[lang] = module.convert;
  }

  const converter = converterCache[lang];
  return converter(numberValue);
};

const toNumber = (value: number | string) => {
  const numberValue = typeof value === 'string' ? Number(value.replaceAll(/ /g, '').replaceAll(',', '.')) : value;

  if (isNaN(numberValue)) {
    throw new Error('Invalid number value.');
  }

  return numberValue;
};
