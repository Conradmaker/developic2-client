import { Dispatch, SetStateAction, useState } from 'react';

type useCarouselReturnType = {
  currentSlide: number;
  duration: number;
  isMoving: boolean;
  setIsMoving: Dispatch<SetStateAction<boolean>>;
  move: (_currentSlide: number, _duration?: number) => void;
  scale: number;
  setScale: Dispatch<SetStateAction<number>>;
};

export function useCarousel(startIndex: number): useCarouselReturnType {
  const [scale, setScale] = useState(1.13);
  const [currentSlide, setCurrentSlide] = useState(startIndex);
  const [duration, setDuration] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const move = (_currentSlide: number, _duration = 0) => {
    if (_duration) setIsMoving(true);
    setScale(1);
    setCurrentSlide(_currentSlide);
    setDuration(_duration);
  };

  return { currentSlide, duration, isMoving, setIsMoving, move, scale, setScale };
}
export default useCarousel;
