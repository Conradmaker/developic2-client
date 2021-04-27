import React from 'react';
import { RoundButtonBox } from './styles';

type RoundBtnPropsType = {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export default function RoundBtn({
  children,
  onClick,
  type = 'button',
}: RoundBtnPropsType): JSX.Element {
  return (
    <RoundButtonBox onClick={onClick} type={type}>
      {children}
    </RoundButtonBox>
  );
}
