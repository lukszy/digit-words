import { convert } from './converter';

const test = [
  //   1,
  //   4,
  //   6,
  //   9,
  11,
  19,
  22,
  35,
  67,
  99,
  101,
  //   245,
  //   334,
  //   543,
  //   809,
  //   991,
  //   1002,
  //   1234,
  //   2357,
  //   5523,
  //   8009,
  //   9281,
  //   9999,
  10001,
  10002,
  123312,
  3453455,
  64645645,
];

test.forEach(value => console.log(value, convert(value)));
