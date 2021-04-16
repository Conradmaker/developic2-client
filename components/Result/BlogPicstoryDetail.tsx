import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
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
export default function BlogPicstoryDetailBox(): JSX.Element {
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
          <h2>Summer</h2>
          <div className="picstory__stats">
            <div>
              <MdBook />
              <span>10</span>
            </div>
            <div>
              <MdFavorite />
              <span>113</span>
            </div>
            <div>
              <MdRemoveRedEye />
              <span>112</span>
            </div>
          </div>
        </div>
        <p>내가 기록한 여름</p>
        <div className="picstory__btn">
          <SquareBtn onClick={onToggleEditModal}>편집</SquareBtn>
          <SquareBtn onClick={onToggleRemoveModal}>삭제</SquareBtn>
        </div>

        <ul className="picstory__recent-img">
          <li className="img__box">
            <img
              src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="picstory__recent-img"
            />
          </li>
          <li className="img__box">
            <img
              src="https://images.unsplash.com/photo-1572953745960-14685e3e9b49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="picstory__recent-img"
            />
          </li>
          <li className="img__box">
            <img
              src="https://images.unsplash.com/photo-1586902197503-e71026292412?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="picstory__recent-img"
            />
          </li>
          <li className="img__box">
            <img
              src="https://images.unsplash.com/photo-1498747946579-bde604cb8f44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="picstory__recent-img"
            />
          </li>
          <li className="img__box">
            <img
              src="https://images.unsplash.com/photo-1459314079206-9970f36c7784?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bW1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="picstory__recent-img"
            />
          </li>
          <li className="img__box">
            <img
              src="https://images.unsplash.com/photo-1572953745960-14685e3e9b49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="picstory__recent-img"
            />
          </li>
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
