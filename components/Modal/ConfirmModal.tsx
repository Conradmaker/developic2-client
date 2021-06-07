import React, { useCallback } from 'react';
import SquareBtn from '../Button/SquareBtn';
import { ConfirmModalBox, ModalLayout } from './styles';

type ConfirmModalPropsType = {
  onConfirm: () => void;
  onClose?: () => void;
  content: string;
};
export default function ConfirmModal({
  onClose = () => null,
  onConfirm,
  content,
}: ConfirmModalPropsType): JSX.Element {
  const onClickBG = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  }, []);

  return (
    <ModalLayout onClick={onClickBG}>
      <ConfirmModalBox>
        <span>{content}</span>
        <div className="btn__group">
          <SquareBtn onClick={onClose}>닫기</SquareBtn>
          <SquareBtn onClick={onConfirm}>확인</SquareBtn>
        </div>
      </ConfirmModalBox>
    </ModalLayout>
  );
}
