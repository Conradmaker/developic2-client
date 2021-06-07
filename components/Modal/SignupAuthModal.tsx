import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useInput from '../../hooks/useInput';
import useUser from '../../modules/user/hooks';
import Button from '../Button/Button';
import TitleLabel from '../Label/TitleLabel';
import { ModalLayout, SignupAuthModalBox } from './styles';

type SignupAuthModalPropsType = {
  onClose: () => void;
  email: string;
};
export default function SignupAuthModal({
  onClose,
  email,
}: SignupAuthModalPropsType): JSX.Element {
  const router = useRouter();
  const { verificationDispatch, verification } = useUser();
  const [authNum1, onChangeAuthNum1] = useInput('');
  const [authNum2, onChangeAuthNum2] = useInput('');
  const [authNum3, onChangeAuthNum3] = useInput('');
  const [authNum4, onChangeAuthNum4] = useInput('');
  const [authNum5, onChangeAuthNum5] = useInput('');
  const [authNum6, onChangeAuthNum6] = useInput('');

  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = authNum1 + authNum2 + authNum3 + authNum4 + authNum5 + authNum6;
    verificationDispatch({ email, code });
  };
  useEffect(() => {
    if (verification.data) {
      router.replace('/');
    }
  }, [verification]);
  return (
    <ModalLayout onClick={onClickBg}>
      <SignupAuthModalBox>
        <TitleLabel title="이메일 인증" />
        <form onSubmit={onSubmit}>
          <section className="auth__input">
            <div>
              <input maxLength={1} value={authNum1} onChange={onChangeAuthNum1} />
              <input maxLength={1} value={authNum2} onChange={onChangeAuthNum2} />
              <input maxLength={1} value={authNum3} onChange={onChangeAuthNum3} />
              <input maxLength={1} value={authNum4} onChange={onChangeAuthNum4} />
              <input maxLength={1} value={authNum5} onChange={onChangeAuthNum5} />
              <input maxLength={1} value={authNum6} onChange={onChangeAuthNum6} />
            </div>
            <p>입력하신 이메일로 인증번호가 전송되었습니다.</p>
            <p>인증번호를 입력하여 회원가입을 완료해주세요.</p>
          </section>
          <section className="auth__btn">
            <Button text="취소" type="close" onCloseModal={onClose} bar />
            <Button text="제출" type="submit" bar />
          </section>
        </form>
      </SignupAuthModalBox>
    </ModalLayout>
  );
}
