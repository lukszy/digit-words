const PATTERN = /(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g;

export const addCommas = (value: number, delimeter: string = ','): string =>
  value.toString().replace(PATTERN, (m, s1, s2) => s2 || s1 + delimeter);
