import React from 'react';
import SquareBtn from '../Button/SquareBtn';
import TitleLabel from '../Label/TitleLabel';
import { ConfirmRemoveModalBox, ModalLayout } from './styles';

type ConfirmRemoveModalPropsType = {
  onClose: () => void;
  sectionTitle?: string;
  description?: string;
};
export default function ConfirmRemoveModal({
  onClose,
  sectionTitle,
  description,
}: ConfirmRemoveModalPropsType): JSX.Element {
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <ConfirmRemoveModalBox>
        <TitleLabel title="삭제" desc="Confirm Remove" />
        <form>
          <span>
            {sectionTitle} 정말 삭제하시겠습니까?
            <br />
            {description}
          </span>
          <p>
            <strong>'삭제'</strong> 를 입력해 주세요.
          </p>
          <input type="text" />
          <div className="btn__group">
            <SquareBtn onClick={onClose}>취소</SquareBtn>
            <SquareBtn>적용</SquareBtn>
          </div>
        </form>
      </ConfirmRemoveModalBox>
    </ModalLayout>
  );
}
