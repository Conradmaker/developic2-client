import React from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';
import { useThemeState, useToggleTheme } from '../../hooks/ThemeContext';
import { DarkModeBox, FloatingButtonBox, LikeFltBox } from './styles';

export function DarkModeBtn(): JSX.Element {
  const currentTheme = useThemeState();
  const toggleTheme = useToggleTheme();
  return (
    <DarkModeBox onClick={toggleTheme}>
      {currentTheme === 'light' ? <RiSunFill /> : <RiMoonClearFill />}
    </DarkModeBox>
  );
}

type LikeBtnPropsType = {
  isLike: () => boolean;
  onToggleLike: () => void;
};
export function LikeBtn({ isLike, onToggleLike }: LikeBtnPropsType): JSX.Element {
  return (
    <LikeFltBox onClick={onToggleLike}>
      {isLike() ? (
        <>
          <IoMdHeart />
          <span>unlike</span>
        </>
      ) : (
        <>
          <IoMdHeartEmpty />
          <span>like</span>
        </>
      )}
    </LikeFltBox>
  );
}

type FloatingBtnPropsType = {
  text: string;
};
export default function FloatingBtn({ text = '' }: FloatingBtnPropsType): JSX.Element {
  return <FloatingButtonBox>{text}</FloatingButtonBox>;
}
