export const reverseDate = (date: string): string => {
  return date.split("-").reverse().join("-");
};
