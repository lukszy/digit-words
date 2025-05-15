export type Language = 'en' | 'de' | 'es' | 'hr' | 'hi' | 'pl' | 'cz' | 'fr';

export interface ConverterResult {
  text: string;
  integer: number;
  decimal: number;
  fractionValue: string;
  numberValue: string;
} 