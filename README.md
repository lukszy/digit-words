# Digit Words

Simple and small library for converting digits to words.
Contributors all welcome!

| Language | Code | Supported |
| -------- | ---- | --------- |
| Polish   | `pl` | Yes       |
| English  | `en` | Yes       |
| Czech    | `cz` | Yes       |
| German   | `de` | Yes       |
| French   | `fr` | Yes       |
| Spanish  | `es` | Yes       |
| Croatian | `hr` | Yes       |
| Hindi    | `hi` | Yes       |

### Installation

Using npm:

```bash
npm i digit-words
```

### Usage

The library provides a single async function `toText` that converts numbers to their word representation in various languages.

#### Basic Usage

```typescript
import { toText } from 'digit-words';

// Using default language (Polish)
const result = await toText(1234);
// Returns: 'jeden tysiąc dwieście trzydzieści cztery'

// Using English
const englishResult = await toText(1234, 'en');
// Returns: 'one thousand two hundred thirty-four'

// Using string input
const stringResult = await toText('42', 'en');
// Returns: 'forty-two'
```

#### API Reference

##### `toText(value: number | string, lang?: Language): Promise<ConverterResult>`

Converts a number to its word representation in the specified language.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| value | `number \| string` | Yes | - | The number to convert. Can be a number or string that can be parsed to a number. |
| lang | `Language` | No | `'pl'` | The language code for the output. See supported languages above. |

**Returns:** `Promise<ConverterResult>` - A promise that resolves to the word representation of the number.

**Throws:**
- `Error` if the input value is not a valid number
- `Error` if the input value is negative
- `Error` if the specified language is not supported

#### Type Definitions

```typescript
type Language = 'pl' | 'en' | 'cz' | 'de' | 'fr' | 'es' | 'hr' | 'hi';
type ConverterResult = string;
```

### License

MIT
