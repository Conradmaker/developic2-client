import React from 'react';
import Masonry from 'react-masonry-css';
import { RiCheckFill } from 'react-icons/ri';
import { ImgItemBox, PhotoBinderGalleryContainer } from './styles';

type ImgItemPropsType = {
  data: { src: string; id: number };
  onToggleSelectPhoto: (id: string | number) => void;
  selected: boolean;
};
function ImgItem({ data, onToggleSelectPhoto, selected }: ImgItemPropsType): JSX.Element {
  return (
    <ImgItemBox selected={selected}>
      <img
        src={process.env.NEXT_PUBLIC_IMAGE_200 + data.src}
        alt={data.id + data.src}
      ></img>
      <div className="img__layer" />
      <div className="check__circle" onClick={() => onToggleSelectPhoto(data.id)}>
        {selected && <RiCheckFill />}
      </div>
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
    <PhotoBinderGalleryContainer>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map(v => (
          <ImgItem
            key={v.id}
            data={v}
            onToggleSelectPhoto={onToggleSelectPhoto}
            selected={-1 !== selectedPhotos.findIndex(j => j === v.id)}
          />
        ))}
      </Masonry>
    </PhotoBinderGalleryContainer>
  );
}
