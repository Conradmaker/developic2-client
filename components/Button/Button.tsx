import React from 'react';
import { ButtonBox } from './styles';

type ButtonPropsType = {
  text: string;
  type?: string;
  width?: number;
  height?: number;
};
export default function Button({
  text,
  type = 'button',
  width = 150,
  height = 30,
}: ButtonPropsType): JSX.Element {
  return (
    <ButtonBox width={width} height={height}>
      {type === 'button' && <button type="button">{text}</button>}
      {type === 'submit' && <button type="submit">{text}</button>}
    </ButtonBox>
  );
}
