import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';
import _throttle from 'lodash/throttle';
import { useThemeState, useToggleTheme } from 'hooks/ThemeContext';
import { DarkModeBox, FloatingButtonBox, LikeFltBox, ScrollTopBtnBox } from './styles';
import useUI from 'modules/ui/hooks';

export function ScrollTopBtn({
  setHeader = () => null,
}: {
  setHeader?: React.Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const [active, setActive] = useState(false);

  const onScrollTop = useCallback(() => {
    if (window && active) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setHeader(true);
    }
  }, [active]);

  useEffect(() => {
    const onScroll = _throttle(() => {
      const top =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      top > 500 ? setActive(true) : setActive(false);
    }, 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <ScrollTopBtnBox onClick={onScrollTop} active={active}>
      <MdKeyboardArrowUp />
      <p>TOP</p>
    </ScrollTopBtnBox>
  );
}

export function DarkModeBtn(): JSX.Element {
  const currentTheme = useThemeState();
  const toggleTheme = useToggleTheme();
  const { toastOpenDispatch } = useUI();
  const onToggleTheme = React.useCallback(() => {
    toggleTheme();
    toastOpenDispatch(
      currentTheme === 'light'
        ? '다크모드로 변경되었습니다.'
        : '라이트모드로 변경되었습니다.'
    );
  }, [currentTheme]);
  return (
    <DarkModeBox
      className="dark-mode__btn"
      onClick={onToggleTheme}
      currentTheme={currentTheme}
    >
      <span>라이트</span>
      <span>다크</span>
      <div className="slider">
        {currentTheme === 'light' ? <RiSunFill /> : <RiMoonClearFill />}
      </div>
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

type FltBtn = {
  toggleTheme: () => JSX.Element;
};
export const FltBtn: FltBtn = { toggleTheme: DarkModeBtn };
FltBtn.toggleTheme = DarkModeBtn;
