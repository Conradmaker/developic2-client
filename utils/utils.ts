import dayjs from 'dayjs';

export const formatDate = (date: string): string => {
  const dayjsDate = dayjs(date);
  const formatDateResult = dayjsDate.format('MMM D, YYYY');

  return formatDateResult;
};

export const countSum = (arrayData: number[]): number => {
  const countSumData = arrayData.reduce((acc, cur) => acc + cur, 0);
  return countSumData;
};
