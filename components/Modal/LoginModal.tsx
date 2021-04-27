import React from 'react';
import { RiFacebookFill, RiGoogleFill, RiKakaoTalkFill } from 'react-icons/ri';
import useInput from '../../hooks/useInput';
import RoundBtn from '../Button/RoundBtn';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
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
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const onClickLogin = () => {
    onClose();
    fakeLogin();
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
  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <LoginModalBox>
        <div className="login--left">
          <TitleLabel title="로그인" desc="login" />
          <form>
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
            <div className="btn__wrapper">
              <SquareBtn onClick={onClickLogin}>닫기</SquareBtn>
              <SquareBtn onClick={onClickLogin}>로그인</SquareBtn>
            </div>
          </form>
        </div>
        <div className="login--right"></div>
      </LoginModalBox>
    </ModalLayout>
  );
}
