const PATTERN = /(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g;

export const addCommas = (value: number, delimeter: string = ','): string =>
  value.toString().replace(PATTERN, (m, s1, s2) => s2 || s1 + delimeter);

export const isInteger = (value: number) => {
  return value % 1 === 0;
};

export const isBetween = (value, min, max) => {
  return (value - min) * (value - max) <= 0;
};

export const getLowestValue = (value: number, list: number[]): number => {
  return list.reduce((result: number, current) => {
    const min = Math.min(result, value);
    return min in list ? min : result;
  });
};

export const breakValue = (value: number): any[] => {
  return value
    .toString()
    .split('')
    .reverse()
    .join('')
    .match(/\d{1,3}/g)
    .filter(val => val.length)
    .map(val => {
      const result = val
        .split('')
        .reverse()
        .join('');
      return Number.parseInt(result, 10);
    });
};
