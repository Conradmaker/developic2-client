import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineInfo } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { CgFolderAdd } from 'react-icons/cg';
import { MetaData } from '../../modules/post';
import usePost from '../../modules/post/hooks';
import { ModalLayout, PhotoDetailBox, PhotoModalBtnBox } from './styles';
import MakeBinderModal from './MakeBinderModal';
import useUser from '../../modules/user/hooks';
import useUI from '../../modules/ui/hooks';

const computeMetaData = (data: MetaData) => ({
  모델: data.manufacturer && data.model ? `${data.manufacturer} ${data.model}` : null,
  'F-VALUE': data.fValue,
  해상도:
    data.resolutionX && data.resolutionY
      ? `${data.resolutionX} * ${data.resolutionY}`
      : null,
  노출시간: data.exposureTime,
  셔터스피드: data.shutterSpeed,
  ISO: data.ISO,
  크기: `${data.size} Byte`,
});

type PhotoDetailModalProps = {
  photoId: number;
  onClose: () => void;
};
export default function PhotoDetailModal({
  photoId,
  onClose,
}: PhotoDetailModalProps): JSX.Element {
  const { userData } = useUser();
  const {
    getPhotoDetail: { data: photoData },
    getPhotoDetailDispatch,
  } = usePost();
  const { toastOpenDispatch } = useUI();
  const [infoOpen, setInfoOpen] = useState(false);
  const [binderSetOpen, setBinderSetOpen] = useState(false);

  const toggleBinderSet = useCallback(
    (e?: React.MouseEvent) => {
      (e as React.MouseEvent).stopPropagation();
      if (!userData) {
        return toastOpenDispatch('로그인이 필요한 서비스입니다.');
      }
      setBinderSetOpen(current => !current);
    },
    [userData]
  );

  const onInfoOpen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setInfoOpen(current => !current);
  }, []);

  const onRightClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    toastOpenDispatch('우클릭이 방지되었습니다.');
  }, []);

  useEffect(() => {
    getPhotoDetailDispatch(photoId);
  }, [photoId]);

  if (!photoData) return <></>;

  return (
    <>
      <ModalLayout background={'darker'} onClick={onClose}>
        <PhotoDetailBox infoOpen={infoOpen} onContextMenu={onRightClick}>
          <div className="back">
            {Object.entries(computeMetaData(photoData.MetaDatum)).map(([key, value]) => {
              return (
                value && (
                  <div key={key + value}>
                    {key}&nbsp;: &nbsp;{value}
                  </div>
                )
              );
            })}
          </div>
          <div className="front">
            <img
              src={process.env.NEXT_PUBLIC_IMAGE_ORIGINAL + photoData.src}
              alt=""
            ></img>
          </div>
        </PhotoDetailBox>
        <PhotoModalBtnBox>
          <i onClick={toggleBinderSet}>
            <CgFolderAdd />
          </i>
          <i>
            <AiOutlineInfo onClick={onInfoOpen} />
          </i>
          <i onClick={onClose}>
            <IoMdClose />
          </i>
        </PhotoModalBtnBox>
      </ModalLayout>
      {binderSetOpen && (
        <MakeBinderModal onClose={toggleBinderSet} photoId={photoData.id} />
      )}
    </>
  );
}
