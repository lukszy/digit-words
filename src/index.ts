import { convert } from './pl';

const values = [
  0,
  4,
  5,
  7,
  13,
  16,
  19,
  44,
  56,
  76,
  91,
  99,
  101,
  198,
  203,
  345,
  456,
  667,
  789,
  903,
  1002,
  1234566,
];

values.forEach(value => console.log(value, convert(value)));
