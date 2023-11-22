export const formatPrize = (prize: number): string => {
  return prize
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
