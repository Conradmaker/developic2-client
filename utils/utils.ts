import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

export const formatDate = (date: string): string => {
  const formatDateResult = dayjs(date).format('MMM D, YYYY');
  return formatDateResult;
};

export const countSum = (arrayData: number[]): number => {
  const countSumData = arrayData.reduce((acc, cur) => acc + cur, 0);
  return countSumData;
};

// 무한스크롤: onIntersect 콜백함수와 설정값을 인자로 받아 observer 생성 후 관찰
type useInfiniteScrollProps = {
  root?: Element | Document | null;
  threshold?: number;
  rootMargin?: string;
  onIntersect: (
    [{ isIntersecting, target }]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => void;
};
export const useInfiniteScroll = ({
  root = null,
  threshold = 0.1,
  rootMargin = '100px',
  onIntersect,
}: useInfiniteScrollProps): React.Dispatch<React.SetStateAction<Element | null>>[] => {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { root, rootMargin, threshold });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, root, rootMargin, threshold, onIntersect]);

  return [setTarget];
};
