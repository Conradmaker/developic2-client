import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import SquareBtn from 'components/Button/SquareBtn';
import PageWithNavLayout from 'components/Layout/PageWithNavLayout';
import PhotoBinderGallery from 'components/List/PhotoBinderGallery';
import BinderEditModal from 'components/Modal/BinderModal';
import ConfirmRemoveModal from 'components/Modal/ConfirmRemoveModal';
import Incomplete from 'components/Result/Incomplete';
import { useAuth, useDrawer, useModal } from 'hooks';
import { DrawerNavData } from 'utils/data';
import { BinderDetailContainer } from 'styles/pages/user';

export default function binderId(): JSX.Element {
  const router = useRouter();
  const {
    getBinderDetail,
    removeBinderPhotoDispatch,
    removePhotoBinderDispatch,
    getPhotoBinderDetailDispatch,
  } = useDrawer();
  useAuth({ replace: true });
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [RemoveBinderModal, onToggleRemoveModal] = useModal(ConfirmRemoveModal, {
    title: '바인더 삭제',
    description: '포토바인더를 삭제 하시겠습니까?',
    onConfirm: useCallback(() => {
      if (!getBinderDetail.data) return;
      removePhotoBinderDispatch(getBinderDetail.data.id);
      router.replace('/user/drawer/binder');
    }, [getBinderDetail.data]),
  });

  const onToggleEditModal = useCallback(() => {
    setEditModalOpen(prev => !prev);
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

  const removePhotos = useCallback(() => {
    if (!getBinderDetail.data) return;
    removeBinderPhotoDispatch({
      BinderId: getBinderDetail.data.id,
      photoIdArr: selectedPhotos,
    });
  }, [selectedPhotos, getBinderDetail.data]);

  useEffect(() => {
    getPhotoBinderDetailDispatch(+(router.query.binderId as string));
  }, []);

  if (getBinderDetail.loading) return <></>;
  if (getBinderDetail.error)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
  if (!getBinderDetail.data) return <></>;

  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <Head>
        <title>바인더 | {getBinderDetail.data.title}</title>
      </Head>
      <BinderDetailContainer>
        <div className="left__section">
          <article>
            <h2>{getBinderDetail.data.title}</h2>
            <p>{getBinderDetail.data.description}</p>
            <span>{getBinderDetail.data.PostImages.length}개의 사진</span>
            <div className="btn__group">
              <SquareBtn onClick={onToggleEditModal}>편집</SquareBtn>
              <SquareBtn onClick={removePhotos}>선택삭제</SquareBtn>
            </div>
          </article>
        </div>
        <div className="binder__detail__img__list">
          {getBinderDetail.data.PostImages.length === 0 ? (
            <div className="is-empty">비어있는 바인더 입니다.</div>
          ) : (
            <PhotoBinderGallery
              photos={getBinderDetail.data.PostImages}
              selectedPhotos={selectedPhotos}
              onToggleSelectPhoto={onToggleSelectPhoto}
            />
          )}
        </div>
      </BinderDetailContainer>
      {editModalOpen && (
        <BinderEditModal
          binderData={{
            title: getBinderDetail.data.title,
            description: getBinderDetail.data.description,
          }}
          onClose={onToggleEditModal}
          onRemove={onToggleRemoveModal}
        />
      )}
      <RemoveBinderModal />
    </PageWithNavLayout>
  );
}
