import Link from 'next/link';
import React, { useEffect } from 'react';
import { RiFacebookFill, RiGoogleFill, RiKakaoTalkFill } from 'react-icons/ri';
import useInput from '../../hooks/useInput';
import useUser from '../../modules/user/hooks';
import RoundBtn from '../Button/RoundBtn';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import TitleLabel from '../Label/TitleLabel';
import { LoginModalBox, ModalLayout } from './styles';

type LoginModalPropsType = {
  onClose: () => void;
};
export default function LoginModal({ onClose }: LoginModalPropsType): JSX.Element {
  const { login, loginDispatch } = useUser();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const onSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginDispatch({ email, password });
  };
  const onClickSocialLogin = (type: 'fb' | 'gg' | 'kk') => {
    switch (type) {
      case 'fb':
        return console.log('페북로그인');
      case 'kk':
        return console.log('카카오로그인');
      case 'gg':
        return console.log('구글로그인');
      default:
        break;
    }
  };
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
              <RoundBtn onClick={() => onClickSocialLogin('fb')}>
                <RiFacebookFill />
              </RoundBtn>
              <RoundBtn onClick={() => onClickSocialLogin('kk')}>
                <RiKakaoTalkFill />
              </RoundBtn>
              <RoundBtn onClick={() => onClickSocialLogin('gg')}>
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
