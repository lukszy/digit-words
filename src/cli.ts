#!/usr/bin/env node

import { toText } from './digit-words';
import type { Language } from './types';

const supportedLanguages: Language[] = ['en', 'de', 'es', 'hr', 'hi', 'pl', 'cz', 'fr'];

function showHelp(): void {
  console.log(`
Usage: npx digit-words [options] <number>

Options:
  --lang, -l <language>    Language for conversion (default: pl)
                           Supported languages: ${supportedLanguages.join(', ')}

Examples:
  npx digit-words 1234
  npx digit-words --lang en 1234.56
  npx digit-words -l pl 2112,24

Output:
  Returns the number converted to words in the specified language.
`);
}

function parseArgs(): { lang: Language; number: string } | null {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    showHelp();
    return null;
  }

  let lang: Language = 'pl';
  let number: string | undefined;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--lang' || arg === '-l') {
      const langArg = args[i + 1];
      if (!langArg || !supportedLanguages.includes(langArg as Language)) {
        console.error(`Error: Invalid language. Supported languages: ${supportedLanguages.join(', ')}`);
        process.exit(1);
      }
      lang = langArg as Language;
      i++; // Skip the next argument since we consumed it
    } else if (!arg.startsWith('-')) {
      number = arg;
    }
  }

  if (!number) {
    console.error('Error: Number is required');
    showHelp();
    return null;
  }

  return { lang, number };
}

async function main(): Promise<void> {
  try {
    const parsed = parseArgs();
    if (!parsed) {
      process.exit(0);
    }

    const { lang, number } = parsed;
    
    const result = await toText(number, lang);
    console.log(result.text);
    
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

// Run the CLI
main();
