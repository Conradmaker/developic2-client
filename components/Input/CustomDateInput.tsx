import React from 'react';
import { CustomDateInputBox } from './styles';

type CustomDateInputPropsType = {
  width?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  max?: string;
  min?: string;
};
export default function CustomDateInput({
  width = 0,
  ...rest
}: CustomDateInputPropsType): JSX.Element {
  return (
    <CustomDateInputBox width={width}>
      <input type="date" {...rest} />
    </CustomDateInputBox>
  );
}
