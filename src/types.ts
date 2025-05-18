export type Language = 'en' | 'de' | 'es' | 'hr' | 'hi' | 'pl' | 'cz' | 'fr';

export interface ConverterResult {
  text: string;
  integerText: string;
  decimalText: string;
  integerValue: number;
  decimalValue: number;
} 