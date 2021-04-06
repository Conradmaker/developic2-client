import React from 'react';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import CustomTextarea from '../Input/CustomTextarea';
import TitleLabel from '../Label/TitleLabel';
import { BinderEditModalBox, ModalLayout } from './styles';

type BinderEditModalPropsType = {
  onClose: () => void;
  onRemove: () => void;
};
export default function BinderEditModal({
  onClose,
  onRemove,
}: BinderEditModalPropsType): JSX.Element {
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <BinderEditModalBox>
        <TitleLabel title="'바인더명'수정" desc="Binder Edit" />
        <form>
          <CustomInput title="바인더 이름" />
          <CustomTextarea title="바인더 설명" />
          <div className="btn__group">
            <SquareBtn onClick={onClose}>취소</SquareBtn>
            <SquareBtn>적용</SquareBtn>
          </div>
          <span onClick={onRemove}>바인더 삭제</span>
        </form>
      </BinderEditModalBox>
    </ModalLayout>
  );
}
