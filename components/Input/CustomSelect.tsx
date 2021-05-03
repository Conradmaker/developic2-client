import React from 'react';
import { CustomSelectBox } from './styles';

type CustomSelectPropsType = {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  width?: number;
  data: { id: number; value: string }[];
};
export default function CustomSelect({
  title,
  data,
  value,
  onChange,
  width = 0,
}: CustomSelectPropsType): JSX.Element {
  const randomId = Math.random() * 100000000000000000 + '';
  return (
    <CustomSelectBox width={width}>
      <div className="line"></div>
      <label htmlFor={randomId}>{title}</label>
      <select name="" id={randomId} value={value} onChange={onChange}>
        {data.map(opt => (
          <option value={opt.value} id={opt.id + 'check'}>
            {opt.value}
          </option>
        ))}
      </select>
    </CustomSelectBox>
  );
}
