import React from 'react';
import { useUI } from 'hooks';
import { ToastPopUpBox } from './styles';

export default function Toast(): JSX.Element {
  const { toastPopUp } = useUI();
  return (
    <ToastPopUpBox visible={!toastPopUp.visible}>{toastPopUp.message}</ToastPopUpBox>
  );
}
