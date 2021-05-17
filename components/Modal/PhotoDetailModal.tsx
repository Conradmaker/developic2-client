import React, { useEffect, useState } from 'react';
import { AiOutlineInfo } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { CgFolderAdd } from 'react-icons/cg';
import { MetaData } from '../../modules/post';
import usePost from '../../modules/post/hooks';
import { ModalLayout, PhotoDetailBox, PhotoModalBtnBox } from './styles';
import MakeBinderModal from './MakeBinderModal';
import useUser from '../../modules/user/hooks';

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
  const [infoOpen, setInfoOpen] = useState(false);
  const [binderSetOpen, setBinderSetOpen] = useState(false);
  const toggleBinderSet = (e?: React.MouseEvent) => {
    e.stopPropagation();
    if (!userData) {
      return alert('로그인해주세요.');
    }
    setBinderSetOpen(current => !current);
  };
  const onInfoOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInfoOpen(current => !current);
  };
  const onRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('우클릭이 방지되었습니다.');
  };
  useEffect(() => {
    getPhotoDetailDispatch(photoId);
  }, [photoId]);
  if (!photoData) return <></>;
  return (
    <>
      <ModalLayout onClick={onClose}>
        <PhotoDetailBox infoOpen={infoOpen} onContextMenu={onRightClick}>
          <div className="back">
            {Object.entries(computeMetaData(photoData.MetaDatum)).map(([key, value]) => {
              return (
                value && (
                  <div>
                    {key}&nbsp;: &nbsp;{value}
                  </div>
                )
              );
            })}
          </div>
          <img className="front" src={photoData.src} alt=""></img>
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
