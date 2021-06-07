import React from 'react';
import styled from '@emotion/styled';
import useCarousel from '../../hooks/useCarousel';

const Container = styled.div<{ width: number; height: number }>`
  width: 100%;
  height: ${({ height }) => height}px;
  position: relative;
  overflow: hidden;
  .slide__container {
    width: ${({ width }) => width}px;
    margin: 0 auto;
  }
`;
const Slides = styled.div<{
  duration: number;
  currentSlide: number;
  width: number;
  scale: number;
}>`
  display: inline-flex;
  transition: all ${({ duration }) => duration}ms ease-in-out;
  transform: translateX(${({ currentSlide, width }) => currentSlide * -width}px);
  & > div {
    padding: 0 27px;
    transition: 0.2s;
  }
  & > div:nth-child(${({ currentSlide }) => currentSlide + 1}) {
    transform: scale(${({ scale }) => scale});
    text-shadow: 0 0 3px ${({ theme }) => theme.grayScale[2]};
  }
`;

const Control = styled.button`
  position: absolute;
  top: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  font-size: 22px;
  border-radius: 50%;
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: ${({ theme }) => theme.background.initial};
  color: ${({ theme }) => theme.textColor.initial};
  border: 1px solid ${({ theme }) => theme.primary[1]};
`;
const PrevControl = styled(Control)`
  left: 0;
`;
const NextControl = styled(Control)`
  right: 0;
`;

type CarouselPropsType = {
  children: React.ReactNode;
  width?: number;
  height?: number;
  listLength?: number;
};
export default function Carousel({
  children,
  width = 0,
  height = 0,
  listLength = 1,
}: CarouselPropsType): JSX.Element {
  const {
    currentSlide,
    duration,
    isMoving,
    move,
    setIsMoving,
    scale,
    setScale,
  } = useCarousel(listLength);

  const handleClick = React.useCallback(
    e => {
      if (isMoving) return;
      const delta = e.target.id === 'prev' ? -1 : 1;
      move(currentSlide + 1 * delta, 300);
    },
    [currentSlide, isMoving]
  );

  const onTransitionEnd = React.useCallback(() => {
    setIsMoving(false);
    const delta =
      currentSlide === listLength - 1 ? 1 : currentSlide === listLength * 2 + 1 ? -1 : 0;
    if (delta) move(currentSlide + listLength * delta);
    setScale(1.13);
  }, [currentSlide, listLength]);

  return (
    <Container width={width} height={height}>
      <div className="slide__container">
        <Slides
          scale={scale}
          width={width}
          currentSlide={currentSlide}
          duration={duration}
          onTransitionEnd={onTransitionEnd}
        >
          {children}
        </Slides>
      </div>
      <PrevControl id="prev" onClick={handleClick}>
        &laquo;
      </PrevControl>
      <NextControl id="next" onClick={handleClick}>
        &raquo;
      </NextControl>
    </Container>
  );
}
