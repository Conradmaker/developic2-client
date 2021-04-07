import React from 'react';
import Button from '../Button/Button';
import CustomInput from '../Input/CustomInput';
import TitleLabel from '../Label/TitleLabel';
import { ModalLayout, SignupPenNameModalBox } from './styles';

type SignupPenNameModalPropsType = {
  setModalOpen: (state: boolean | ((state: boolean) => boolean)) => void;
};
export default function SignupPenNameModal({
  setModalOpen,
}: SignupPenNameModalPropsType): JSX.Element {
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalOpen(state => !state);
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <ModalLayout onClick={onClickBg}>
      <SignupPenNameModalBox>
        <TitleLabel title="추가정보 입력" />
        <form onSubmit={onSubmit}>
          <CustomInput title="필명" />
          <p>인증이 완료되었습니다.</p>
          <p>디벨로픽에서 사용할 필명을 입력해주세요.</p>
          <section>
            <Button text="홈으로" bar />
            <Button text="제출" type="submit" bar />
          </section>
        </form>
      </SignupPenNameModalBox>
    </ModalLayout>
  );
}
