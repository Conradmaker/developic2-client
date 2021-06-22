import Link from 'next/link';
import React, { useCallback, useEffect } from 'react';
import { RiFacebookFill, RiGoogleFill, RiKakaoTalkFill } from 'react-icons/ri';

import RoundBtn from '../Button/RoundBtn';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import TitleLabel from '../Label/TitleLabel';
import { LoginModalBox, ModalLayout } from './styles';
import { useInput, useUser } from 'hooks';

type LoginModalPropsType = {
  onClose: () => void;
};
export default function LoginModal({ onClose }: LoginModalPropsType): JSX.Element {
  const { login, loginDispatch } = useUser();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onClickBg = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, []);

  const onSubmitLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      loginDispatch({ email, password });
    },
    [email, password]
  );

  const onClickSocialLogin = useCallback((type: 'kakao' | 'facebook' | 'google') => {
    location.href = `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/${type}`;
  }, []);

  useEffect(() => {
    if (login.data) {
      onClose();
    }
  }, [login.data]);

  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <LoginModalBox>
        <div className="login--left">
          <TitleLabel title="로그인" desc="login" />
          <form onSubmit={onSubmitLogin}>
            <CustomInput
              title="이메일"
              value={email}
              onChange={onChangeEmail}
              type="email"
            />
            <CustomInput
              title="비밀번호"
              value={password}
              onChange={onChangePassword}
              type="password"
            />
            <div className="social__wrapper">
              <RoundBtn onClick={() => onClickSocialLogin('facebook')}>
                <RiFacebookFill />
              </RoundBtn>
              <RoundBtn onClick={() => onClickSocialLogin('kakao')}>
                <RiKakaoTalkFill />
              </RoundBtn>
              <RoundBtn onClick={() => onClickSocialLogin('google')}>
                <RiGoogleFill />
              </RoundBtn>
            </div>
            <div className="sign-up__wrapper">
              <span>회원이 아니신가요?</span>
              <Link href="/user/signup">
                <strong>회원가입</strong>
              </Link>
            </div>
            <div className="btn__wrapper">
              <SquareBtn onClick={onClose}>닫기</SquareBtn>
              <SquareBtn type="submit">로그인</SquareBtn>
            </div>
          </form>
        </div>
        <div className="login--right"></div>
      </LoginModalBox>
    </ModalLayout>
  );
}
