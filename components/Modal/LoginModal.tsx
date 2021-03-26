import React from 'react';
import TitleLabel from '../Label/TitleLabel';
import { LoginModalBox, ModalLayout } from './styles';

type LoginModalPropsType = {
  onClose: () => void;
};
export default function LoginModal({ onClose }: LoginModalPropsType): JSX.Element {
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <LoginModalBox>
        <div className="login--left">
          <TitleLabel />
          <form>
            <input type="text" />
          </form>
        </div>
        <div className="login--right"></div>
      </LoginModalBox>
    </ModalLayout>
  );
}
