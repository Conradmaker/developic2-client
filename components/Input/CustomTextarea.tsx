import React, { useRef } from 'react';
import { CustomTextareaBox } from './styles';

type CustomTextareaPropsType = {
  title: string;
  values: string;
  onChange: string;
  width?: number;
};
export default function CustomTextarea({
  title,
  values,
  onChange,
  width = 0,
}: CustomTextareaPropsType): JSX.Element {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);
  return (
    <CustomTextareaBox width={width}>
      <div className="line"></div>
      <span onClick={() => textareaRef.current?.focus()}>{title}</span>
      <textarea ref={textareaRef}></textarea>
    </CustomTextareaBox>
  );
}
