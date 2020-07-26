# Digit Words

Simple and small library for converting digits to words.
Contributors all welcome!

| Language | Supported |
| -------- | --------- |
| Polish   | Yes       |
| English  | Yes       |
| Czech    | Yes       |

### Installation

Using npm:

```
npm i digit-words
```

### Usage

```
import DigitWords from 'digit-words';

const digitWords = new DigitWords(); // default is 'pl'

const result = digitWords.toWords(1234);
// logs 'jeden tysiąc dwieście trzydzieści cztery'

```

Using english language

```
import DigitWords from 'digit-words';

const digitWord = new DigitWords('en');

const result = digitWords.toWords(4321);
// logs 'four thousand three hundred twenty-one'
```

##### _toWords(value: number)_

| Property | Type   | Required? | Default |
| -------- | ------ | --------- | ------- |
| value    | number | Yes       |         |

##### License

MIT
