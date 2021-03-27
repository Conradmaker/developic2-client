import React from 'react';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';
import { useThemeState, useToggleTheme } from '../../hooks/ThemeContext';
import { DarkModeBox, FloatingButtonBox } from './styles';

export function DarkModeBtn(): JSX.Element {
  const currentTheme = useThemeState();
  const toggleTheme = useToggleTheme();
  return (
    <DarkModeBox onClick={toggleTheme}>
      {currentTheme === 'light' ? <RiSunFill /> : <RiMoonClearFill />}
    </DarkModeBox>
  );
}

type FloatingBtnPropsType = {
  text: string;
};
export default function FloatingBtn({ text = '' }: FloatingBtnPropsType): JSX.Element {
  return <FloatingButtonBox>{text}</FloatingButtonBox>;
}
