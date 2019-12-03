# Digit Words

Simple and small library for converting digits to words. Currently only PL language is supported. All contributors all welcome! :D

### Installation

Using npm:

```
npm i digit-words
```

### Usage

```
import DigitWords from 'digit-words';

const converter = new DigitWords('pl'); // default is 'pl'

const result = converter.toWords(1234);
// jeden tysiąc dwieście trzydzieści cztery

// or

const result = converter.toWords(123.12);
// sto dwadzieścia trzy i 12/100

```

##### _toWords(value: number)_

| Property | Type   | Required? | Default |
| -------- | ------ | --------- | ------- |
| value    | number | Yes       |         |
