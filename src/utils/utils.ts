const PATTERN = /(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g;

export const addCommas = (value: number, delimeter: string = ','): string =>
  value.toString().replace(PATTERN, (m, s1, s2) => s2 || s1 + delimeter);

export const isBetween = (value, min, max) => {
  return (value - min) * (value - max) <= 0;
};

export const breakNumber = (value: number): { integer: number[], decimal: number[] } => {
  const [integerPart, decimalPart = ''] = value.toString().split('.');
  
  const integer = integerPart
    .split('')
    .reverse()
    .join('')
    .match(/\d{1,3}/g)
    ?.filter(val => val.length)
    .map(val => {
      const result = val
        .split('')
        .reverse()
        .join('');
      return Number.parseInt(result, 10);
    })
    .reverse() || [];

  const decimal = decimalPart
    .split('')
    .map(d => Number.parseInt(d, 10));

  return { integer, decimal };
};
