import React, { useRef } from 'react';
import { CustomTextareaBox } from './styles';

type CustomTextareaPropsType = {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  width?: number;
};
export default function CustomTextarea({
  title,
  value,
  onChange,
  width = 0,
}: CustomTextareaPropsType): JSX.Element {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);
  return (
    <CustomTextareaBox width={width}>
      <div className="line"></div>
      <span onClick={() => textareaRef.current?.focus()}>{title}</span>
      <textarea value={value} onChange={onChange} ref={textareaRef}></textarea>
    </CustomTextareaBox>
  );
}
