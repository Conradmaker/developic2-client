import styled from '@emotion/styled';
import React from 'react';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import CustomTextarea from '../Input/CustomTextarea';
import TitleLabel from '../Label/TitleLabel';
import { BinderEditModalBox, ModalLayout } from './styles';

const PicstoryEditModalBox = styled(BinderEditModalBox)``;

type PicstoryEditModalPropsType = {
  onClose: () => void;
  onRemove: () => void;
};
export default function PicstoryEditModal({
  onClose,
  onRemove,
}: PicstoryEditModalPropsType): JSX.Element {
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <PicstoryEditModalBox>
        <TitleLabel title="픽스토리 편집" desc="Picstory Edit" />
        <form>
          <CustomInput title="픽스토리 이름" />
          <CustomTextarea title="픽스토리 설명" />
          <div className="btn__group">
            <SquareBtn onClick={onClose}>취소</SquareBtn>
            <SquareBtn>적용</SquareBtn>
          </div>
        </form>
      </PicstoryEditModalBox>
    </ModalLayout>
  );
}
