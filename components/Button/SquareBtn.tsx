import React from 'react';
import { SquareBtnBox } from './styles';

type SquareBtnPropsType = {
  children: React.ReactNode;
  onClick?: () => void;
};
export default function SquareBtn({
  children,
  onClick,
}: SquareBtnPropsType): JSX.Element {
  return <SquareBtnBox onClick={onClick}>{children}</SquareBtnBox>;
}
