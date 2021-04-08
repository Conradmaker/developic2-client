import React from 'react';
import { CustomSelectBox } from './styles';

type CustomSelectPropsType = {
  title: string;
  values: string[];
  onChange: string;
  width?: number;
};
export default function CustomSelect({
  title,
  values,
  onChange,
  width = 0,
}: CustomSelectPropsType): JSX.Element {
  const randomId = Math.random() * 100000000000000000 + '';
  return (
    <CustomSelectBox width={width}>
      <div className="line"></div>
      <label htmlFor={randomId}>{title}</label>
      <select name="" id={randomId}>
        <option value="1"> </option>
        <option value="1">불만</option>
      </select>
    </CustomSelectBox>
  );
}
