import React, { useRef, useState } from 'react';
import { CustomInputBox } from './styles';

type CustomInputPropsType = {
  title: string;
  value: string;
  // onChange: string;
  width?: number;
};
export default function CustomInput({
  title,
  width = 0,
  value = '',
}: CustomInputPropsType): JSX.Element {
  const inputEl = useRef<null | HTMLInputElement>(null);
  return (
    <CustomInputBox width={width}>
      <div className="line"></div>
      <span onClick={() => inputEl.current?.focus()}>{title}</span>
      <input type="text" ref={inputEl} value={value} />
    </CustomInputBox>
  );
}
