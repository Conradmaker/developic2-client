import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import SquareBtn from '../../../../components/Button/SquareBtn';
import PageWithNavLayout from '../../../../components/Layout/PageWithNavLayout';
import PhotoBinderGallery from '../../../../components/List/PhotoBinderGallery';
import BinderEditModal from '../../../../components/Modal/BinderModal';
import ConfirmRemoveModal from '../../../../components/Modal/ConfirmRemoveModal';
import { DrawerNavData, photos } from '../../../../utils/data';
const BinderDetailContainer = styled.div`
  display: flex;
  .left__section {
    position: relative;
    width: 372px;
    margin-right: 50px;
    article {
      position: sticky;
      top: 90px;
      width: 100%;
      font-family: 'Noto Serif KR';
      color: ${({ theme }) => theme.textColor.initial};

      h2 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      p {
        line-height: 2;
        color: ${({ theme }) => theme.textColor.lighten};
      }
      span {
        font-size: 14px;
        color: ${({ theme }) => theme.textColor.lighten};
      }
      .btn__group {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .binder__detail__img__list {
    flex: 1;
    position: relative;
    margin-bottom: 100px;
  }
`;
export default function binderId(): JSX.Element {
  const [fakePhotos, setFakePhotos] = useState(photos);
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  const onToggleEditModal = useCallback(() => {
    setEditModalOpen(state => !state);
  }, []);
  const onToggleRemoveModal = useCallback(() => {
    setEditModalOpen(state => !state);
    setRemoveModalOpen(state => !state);
  }, []);

  const onToggleSelectPhoto = useCallback(
    id => {
      const isSelected = selectedPhotos.findIndex(v => v === id);
      isSelected !== -1
        ? setSelectedPhotos(selectedPhotos.filter(v => v !== id))
        : setSelectedPhotos(selectedPhotos.concat(id));
    },
    [selectedPhotos]
  );
  const removePhotos = () => {
    let newPhotoList = [...fakePhotos];
    selectedPhotos.forEach(id => {
      newPhotoList = newPhotoList.filter(v => v.id !== id);
    });
    setFakePhotos(newPhotoList);
  };
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <BinderDetailContainer>
        <div className="left__section">
          <article>
            <h2>첫번째 바인더</h2>
            <p>
              이 바인더는 어쩌구 정리하고 보존하는 것은 개인적인 만족감을 준다. 이
              바인더는 어쩌구 정리하고 보존하는 것은 개인적인 만족감을 준다.
            </p>
            <span>23개의 사진</span>
            <div className="btn__group">
              <SquareBtn onClick={onToggleEditModal}>편집</SquareBtn>
              <SquareBtn onClick={removePhotos}>선택삭제</SquareBtn>
            </div>
          </article>
        </div>
        <div className="binder__detail__img__list">
          <PhotoBinderGallery
            photos={fakePhotos}
            selectedPhotos={selectedPhotos}
            onToggleSelectPhoto={onToggleSelectPhoto}
          />
        </div>
      </BinderDetailContainer>
      {editModalOpen && (
        <BinderEditModal onClose={onToggleEditModal} onRemove={onToggleRemoveModal} />
      )}
      {removeModalOpen && <ConfirmRemoveModal onClose={onToggleRemoveModal} />}
    </PageWithNavLayout>
  );
}
