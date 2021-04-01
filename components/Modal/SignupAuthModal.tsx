import React, { useCallback, useState } from 'react';
import Button from '../Button/Button';
import AuthNumInput from '../Input/AuthNumInput';
import TitleLabel from '../Label/TitleLabel';
import { ModalLayout, SignupAuthModalBox } from './styles';

type SignupAuthModalPropsType = {
  setAuthOpen: (state: boolean | ((state: boolean) => boolean)) => void;
};
export default function SignupAuthModal({
  setAuthOpen,
}: SignupAuthModalPropsType): JSX.Element {
  const [authNum1, setAuthNum1] = useState<string>('');
  const [authNum2, setAuthNum2] = useState<string>('');
  const [authNum3, setAuthNum3] = useState<string>('');
  const [authNum4, setAuthNum4] = useState<string>('');
  const [authNum5, setAuthNum5] = useState<string>('');
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };
  const onCloseModal = () => {
    setAuthOpen(state => !state);
  };
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);
  return (
    <ModalLayout onClick={onClickBg}>
      <SignupAuthModalBox>
        <TitleLabel title="이메일 인증" />
        <form onSubmit={onSubmit}>
          <section className="auth__input">
            <div>
              <AuthNumInput authNum={authNum1} setAuthNum={setAuthNum1} authIndex={1} />
              <AuthNumInput authNum={authNum2} setAuthNum={setAuthNum2} authIndex={2} />
              <AuthNumInput authNum={authNum3} setAuthNum={setAuthNum3} authIndex={3} />
              <AuthNumInput authNum={authNum4} setAuthNum={setAuthNum4} authIndex={4} />
              <AuthNumInput authNum={authNum5} setAuthNum={setAuthNum5} authIndex={5} />
            </div>
            <p>입력하신 이메일로 인증번호가 전송되었습니다.</p>
            <p>인증번호를 입력하여 회원가입을 완료해주세요.</p>
          </section>
          <section className="auth__btn">
            <Button text="취소" type="close" onCloseModal={onCloseModal} bar />
            <Button text="제출" type="submit" bar />
          </section>
        </form>
      </SignupAuthModalBox>
    </ModalLayout>
  );
}
