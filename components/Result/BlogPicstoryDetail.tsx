import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { PicstoryDataType } from '../../utils/data';
import SquareBtn from '../Button/SquareBtn';
import { BlogPicstoryCardBox } from '../Card/styles';
import ConfirmRemoveModal from '../Modal/ConfirmRemoveModal';
import PicstoryEditModal from '../Modal/PicstoryModal';

const BlogPicstoryDetailContainer = styled(BlogPicstoryCardBox)`
  border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
  box-shadow: none;
  height: 300px;
  cursor: auto;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
  }
  article {
    p {
      margin-bottom: 28px;
    }
  }
`;

type PicstoryCardPropsType = {
  data: PicstoryDataType;
};
export default function BlogPicstoryDetailBox({
  data,
}: PicstoryCardPropsType): JSX.Element {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  const onToggleEditModal = useCallback(() => {
    setEditModalOpen(state => !state);
  }, []);

  const onToggleRemoveModal = useCallback(() => {
    setRemoveModalOpen(state => !state);
  }, []);

  return (
    <BlogPicstoryDetailContainer>
      <article>
        <div className="picstory__description">
          <h2>{data[0].title}</h2>
          <div className="picstory__stats">
            <div>
              <MdBook />
              <span>{data[0].postCount ? data[0].postCount : 0}</span>
            </div>
            <div>
              <MdFavorite />
              <span>{data[0].likeCount ? data[0].likeCount : 0}</span>
            </div>
            <div>
              <MdRemoveRedEye />
              <span>{data[0].viewCount ? data[0].viewCount : 0}</span>
            </div>
          </div>
        </div>
        <p>{data[0].description}</p>
        <div className="picstory__btn">
          <SquareBtn onClick={onToggleEditModal}>편집</SquareBtn>
          <SquareBtn onClick={onToggleRemoveModal}>삭제</SquareBtn>
        </div>

        <ul className="picstory__recent-img">
          {data[0].ThumbnailImages &&
            data[0].ThumbnailImages.map(picstoryImgItem => (
              <li className="img__box">
                <img src={picstoryImgItem.src} alt="picstory__recent-img" />
              </li>
            ))}
        </ul>
      </article>
      {editModalOpen && (
        <PicstoryEditModal onClose={onToggleEditModal} onRemove={onToggleRemoveModal} />
      )}
      {removeModalOpen && (
        <ConfirmRemoveModal
          sectionTitle="픽스토리를"
          description="픽스토리에 포함된 글은 삭제되지 않습니다."
          onClose={onToggleRemoveModal}
        />
      )}
    </BlogPicstoryDetailContainer>
  );
}
