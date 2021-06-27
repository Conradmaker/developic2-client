import React from 'react';
import Masonry from 'react-masonry-css';
import { RiCheckFill } from 'react-icons/ri';

import { ImgItemBox, PhotoBinderGalleryContainer } from './styles';
import { calcImageSrc } from 'utils/calcImageSrc';
import _PhotoDetailModal from 'components/Modal/PhotoDetailModal';
import { useModal } from 'hooks';

type ImgItemPropsType = {
  photoData: { src: string; id: number };
  onToggleSelectPhoto: (id: string | number) => void;
  selected: boolean;
};
function ImgItem({
  photoData,
  onToggleSelectPhoto,
  selected,
}: ImgItemPropsType): JSX.Element {
  const [PhotoDetailModal, onToggleModal] = useModal(_PhotoDetailModal, {
    photoId: photoData.id,
  });

  const onTogglePhotoCheck = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onToggleSelectPhoto(photoData.id);
    },
    [onToggleSelectPhoto]
  );

  return (
    <ImgItemBox selected={selected} onClick={onToggleModal}>
      <img
        src={calcImageSrc(400, photoData.src)}
        alt={photoData.id + photoData.src}
      ></img>
      <div className="img__layer" />
      <div className="check__circle" onClick={onTogglePhotoCheck}>
        {selected && <RiCheckFill />}
      </div>
      <PhotoDetailModal />
    </ImgItemBox>
  );
}

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
type PhotoBinderGalleryPropsType = {
  photos: {
    id: number;
    src: string;
  }[];
  onToggleSelectPhoto: (id: string | number) => void;
  selectedPhotos: number[];
};
export default function PhotoBinderGallery({
  photos,
  onToggleSelectPhoto,
  selectedPhotos,
}: PhotoBinderGalleryPropsType): JSX.Element {
  return (
    <>
      <PhotoBinderGalleryContainer>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photos.map(photo => (
            <ImgItem
              key={photo.id}
              photoData={photo}
              onToggleSelectPhoto={onToggleSelectPhoto}
              selected={-1 !== selectedPhotos.findIndex(j => j === photo.id)}
            />
          ))}
        </Masonry>
      </PhotoBinderGalleryContainer>
    </>
  );
}
