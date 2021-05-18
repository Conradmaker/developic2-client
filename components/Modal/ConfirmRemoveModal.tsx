import React, { useCallback } from 'react';
import useInput from '../../hooks/useInput';
import SquareBtn from '../Button/SquareBtn';
import TitleLabel from '../Label/TitleLabel';
import { ConfirmRemoveModalBox, ModalLayout } from './styles';

type ConfirmRemoveModalPropsType = {
  onClose: () => void;
  title: string;
  description?: string;
  onConfirm: () => void;
};
export default function ConfirmRemoveModal({
  onClose,
  title,
  description,
  onConfirm,
}: ConfirmRemoveModalPropsType): JSX.Element {
  const [validation, onChangeValidation] = useInput('');
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const onConfirmSubmit = useCallback(() => {
    if (validation !== '삭제') return;
    onConfirm();
  }, [validation]);
  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <ConfirmRemoveModalBox valid={validation === '삭제'}>
        <TitleLabel title={title} desc="Confirm Remove" />
        <div className="modal__content">
          <span>
            <br />
            {description}
          </span>
          <p>
            <strong>'삭제'</strong> 를 입력해 주세요.
          </p>
          <input type="text" value={validation} onChange={onChangeValidation} />
          <div className="btn__group">
            <SquareBtn type="button" onClick={onClose}>
              취소
            </SquareBtn>
            <SquareBtn type="button" onClick={onConfirmSubmit}>
              삭제
            </SquareBtn>
          </div>
        </div>
      </ConfirmRemoveModalBox>
    </ModalLayout>
  );
}
