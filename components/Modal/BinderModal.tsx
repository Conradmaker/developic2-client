import React, { useCallback } from 'react';

import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import CustomTextarea from '../Input/CustomTextarea';
import TitleLabel from '../Label/TitleLabel';
import { BinderEditModalBox, ModalLayout } from './styles';
import { useDrawer, useInput } from 'hooks';

type BinderEditModalPropsType = {
  onClose: () => void;
  onRemove: () => void;
  binderData: {
    title: string;
    description: string;
  };
};
export default function BinderEditModal({
  onClose,
  onRemove,
  binderData,
}: BinderEditModalPropsType): JSX.Element {
  const { getBinderDetail, updatePhotoBinderDetailDispatch } = useDrawer();
  const [title, onChangeTitle] = useInput(binderData.title);
  const [description, onChangeDescription] = useInput(binderData.description);

  const onClickBg = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, []);

  const onUpdate = useCallback(() => {
    if (!getBinderDetail.data) return;
    updatePhotoBinderDetailDispatch({
      BinderId: getBinderDetail.data.id,
      title,
      description,
    });
    onClose();
  }, [getBinderDetail.data, title, description]);

  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <BinderEditModalBox>
        <TitleLabel title="바인더 편집" desc="Binder Edit" />
        <form>
          <CustomInput title="바인더 이름" onChange={onChangeTitle} value={title} />
          <CustomTextarea
            title="바인더 설명"
            value={description}
            onChange={onChangeDescription}
          />
          <div className="btn__group">
            <SquareBtn type="button" onClick={onClose}>
              취소
            </SquareBtn>
            <SquareBtn type="button" onClick={onUpdate}>
              적용
            </SquareBtn>
          </div>
          <span onClick={onRemove}>바인더 삭제</span>
        </form>
      </BinderEditModalBox>
    </ModalLayout>
  );
}
