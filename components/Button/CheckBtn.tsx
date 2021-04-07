import React, { useState } from 'react';
import { CheckBtnBox } from './styles';

type CheckBtnPropsType = {
  text: string;
};
export default function CheckBtn({ text }: CheckBtnPropsType): JSX.Element {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <CheckBtnBox>
      <div className="ck__btn__outline">
        <div className="ck__btn__inside"></div>
      </div>
      <label htmlFor="">{text}</label>
    </CheckBtnBox>
  );
}
