import React from 'react';
import { SquareBtnBox } from './styles';

type SquareBtnPropsType = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};
export default function SquareBtn({
  children,
  onClick,
  type = 'button',
}: SquareBtnPropsType): JSX.Element {
  return (
    <SquareBtnBox type={type} onClick={onClick}>
      {children}
    </SquareBtnBox>
  );
}
