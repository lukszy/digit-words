# Digit Words

Simple and small library for converting digits to words.
Currently **PL** and **EN** languages are supported.
Contributors all welcome!

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
// jeden tysiąc dwieście trzydzieści cztery

```

##### _toWords(value: number)_

| Property | Type   | Required? | Default |
| -------- | ------ | --------- | ------- |
| value    | number | Yes       |         |
