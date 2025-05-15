# Digit Words

Simple and small library for converting digits to words.
Contributors all welcome!

| Language | Supported |
| -------- | --------- |
| Polish   | Yes       |
| English  | Yes       |
| Czech    | Yes       |
| German   | Yes       |
| French   | Yes       |
| Spanish  | Yes       |
| Croatian | Yes       |
| Hindi    | Yes       |

### Installation

Using npm:

```
npm i digit-words
```

### Usage

```
import { toText } from 'digit-words';

const result = toText(1234);
// logs 'jeden tysiąc dwieście trzydzieści cztery'

```

Using english language

```
import { toText } from 'digit-words';

const result = toText(1234);
// logs 'one thousand two hundred thirty-four'
```

##### _toWords(value: number | string, lang = 'pl')_

| Property | Type   | Required? | Default |
| -------- | ------ | --------- | ------- |
| value    | number | string | Yes       |         |
| lang     | string | No | 'PL'

##### License

MIT
