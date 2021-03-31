import React, { useRef } from 'react';
import { CustomCheckBoxBox } from './styles';

type CustomCheckBoxPropsType = {
  value: boolean;
  title: string;
  onChange: () => void;
};
export default function CustomCheckBox({
  value = false,
  title = '',
  onChange,
}: CustomCheckBoxPropsType): JSX.Element {
  const randomId = Math.random() * 100000000000000000 + '';
  return (
    <CustomCheckBoxBox>
      <input id={randomId} type="checkbox" hidden checked={value} onChange={onChange} />
      <span onClick={onChange}></span>
      <label htmlFor={randomId}>{title}</label>
    </CustomCheckBoxBox>
  );
}
