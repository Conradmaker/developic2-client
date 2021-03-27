import React from 'react';
import TitleLabel from '../Label/TitleLabel';
import { LoginModalBox, ModalLayout } from './styles';

type LoginModalPropsType = {
  onClose: () => void;
  fakeLogin: () => void;
};
export default function LoginModal({
  onClose,
  fakeLogin,
}: LoginModalPropsType): JSX.Element {
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const onClickLogin = () => {
    onClose();
    fakeLogin();
  };
  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <LoginModalBox>
        <div className="login--left">
          <TitleLabel title="로그인" desc="login" />
          <form>
            <input type="text" />
            <button onClick={onClickLogin}>로그인</button>
          </form>
        </div>
        <div className="login--right"></div>
      </LoginModalBox>
    </ModalLayout>
  );
}
