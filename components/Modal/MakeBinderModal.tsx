import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import { PhotoBinderType } from '../../modules/drawer';
import useDrawer from '../../modules/drawer/hooks';
import useUser from '../../modules/user/hooks';
import SquareBtn from '../Button/SquareBtn';
import CustomCheckBox from '../Input/CustomCheckBox';
import CustomInput from '../Input/CustomInput';
import CustomTextarea from '../Input/CustomTextarea';
import TitleLabel from '../Label/TitleLabel';
import { MakeBinderModalMox, ModalLayout } from './styles';

function MakeBinderForm({
  userId,
  onToggleMakeMode,
}: {
  userId: number;
  onToggleMakeMode: () => void;
}): JSX.Element {
  const { createPhotoBinderDispatch } = useDrawer();
  const [newTitle, onChangeNewTitle, setNewTitle] = useInput('');
  const [newDesc, onChangeNewDesc, setNewDesc] = useInput('');

  const onCreate = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createPhotoBinderDispatch({
        title: newTitle,
        description: newDesc,
        UserId: userId,
      });
      setNewTitle('');
      setNewDesc('');
    },
    [newTitle, newDesc]
  );

  return (
    <form className="section__right" onSubmit={onCreate}>
      <h5>포토바인더 생성</h5>
      <CustomInput title="제목" value={newTitle} onChange={onChangeNewTitle} />
      <CustomTextarea value={newDesc} title="요약" onChange={onChangeNewDesc} />
      <SquareBtn type="submit">생성</SquareBtn>
      <SquareBtn type="button" onClick={onToggleMakeMode}>
        뒤로
      </SquareBtn>
    </form>
  );
}

type UsersBinderListPropsType = {
  photoId: number;
  userId: number;
};
function UsersBinderList({ photoId, userId }: UsersBinderListPropsType) {
  const { getPhotoBinderListDispatch, getBinderList } = useDrawer();
  const { addBinderPhotoDispatch, removeBinderPhotoDispatch } = useDrawer();

  const makeBinderItem = useCallback(
    (binder: PhotoBinderType) => {
      const checked = binder.PostImages.findIndex(image => image.id === photoId) !== -1;
      const onChange = () => {
        const dispatchData = {
          BinderId: binder.id,
          photoIdArr: [photoId],
        };
        checked
          ? removeBinderPhotoDispatch(dispatchData)
          : addBinderPhotoDispatch(dispatchData);
      };
      return (
        <li key={binder.id}>
          <CustomCheckBox
            title={binder.title as string}
            value={checked}
            onChange={onChange}
          />
        </li>
      );
    },
    [getBinderList.data]
  );

  useEffect(() => {
    getPhotoBinderListDispatch({ userId, limit: 50 });
  }, []);

  if (!getBinderList.data) return <></>;

  return <ul>{getBinderList.data.map(binder => makeBinderItem(binder))}</ul>;
}

type MakeBinderModalPropsType = {
  onClose: (e?: React.MouseEvent) => void;
  photoId: number;
};
export default function MakeBinderModal({
  photoId,
  onClose,
}: MakeBinderModalPropsType): JSX.Element {
  const { userData } = useUser();
  const [makeMode, setMakeMode] = useState(false);

  const onToggleMakeMode = React.useCallback(() => {
    setMakeMode(prev => !prev);
  }, []);
  if (!userData) return <></>;

  return (
    <ModalLayout>
      <MakeBinderModalMox makeMode={makeMode}>
        <TitleLabel title="포토바인더 담기" desc="Photo Binder" />
        <div className="double__section">
          <div className="section__left">
            <h5>회원님의 포토바인더</h5>
            <UsersBinderList photoId={photoId} userId={userData.id} />
          </div>
          <MakeBinderForm userId={userData.id} onToggleMakeMode={onToggleMakeMode} />
        </div>
        <SquareBtn onClick={onToggleMakeMode}>새 바인더</SquareBtn>
        <SquareBtn onClick={onClose}>닫기</SquareBtn>
      </MakeBinderModalMox>
    </ModalLayout>
  );
}
