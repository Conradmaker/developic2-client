import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { blogPicstoryDetailData, BlogPost } from '../../modules/blog';
import usePicstory from '../../modules/picstory/hooks';
import SquareBtn from '../Button/SquareBtn';
import { BlogPicstoryCardBox } from '../Card/styles';
import ConfirmRemoveModal from '../Modal/ConfirmRemoveModal';

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
const countTotal = {
  like: (list: BlogPost[]) =>
    list.reduce((acc, cur) => acc + (cur.likeCount as number), 0),
  hit: (list: BlogPost[]) => list.reduce((acc, cur) => acc + cur.hits, 0),
};

type PicstoryCardPropsType = {
  picstoryDetailData: blogPicstoryDetailData;
};
export default function BlogPicstoryDetailBox({
  picstoryDetailData,
}: PicstoryCardPropsType): JSX.Element {
  const { removePicstoryDispatch } = usePicstory();
  const router = useRouter();
  const [removeModalOpen, setRemoveModalOpen] = useState(false);
  const posts = picstoryDetailData.Posts;

  const likeCountTotal = useMemo(() => countTotal.like(posts), [posts]);
  const viewCountTotal = useMemo(() => countTotal.hit(posts), [posts]);

  const onToggleRemoveModal = useCallback(() => {
    setRemoveModalOpen(current => !current);
  }, []);

  const onRemovePicstory = useCallback(() => {
    removePicstoryDispatch(picstoryDetailData.id);
    router.back();
  }, []);
  return (
    <BlogPicstoryDetailContainer>
      <article>
        <div className="picstory__description">
          <h2>{picstoryDetailData.title}</h2>
          <div className="picstory__stats">
            <div>
              <MdBook />
              <span>
                {picstoryDetailData.Posts ? picstoryDetailData.Posts.length : 0}
              </span>
            </div>
            <div>
              <MdFavorite />
              <span>{likeCountTotal && likeCountTotal}</span>
            </div>
            <div>
              <MdRemoveRedEye />
              <span>{viewCountTotal && viewCountTotal}</span>
            </div>
          </div>
        </div>
        <p>{picstoryDetailData.description}</p>
        <div className="picstory__btn">
          <SquareBtn onClick={() => alert('준비중')}>편집</SquareBtn>
          <SquareBtn onClick={onToggleRemoveModal}>삭제</SquareBtn>
        </div>

        <ul className="picstory__recent-img">
          {posts &&
            posts.slice(0, 6).map(picstoryImgItem => (
              <li className="img__box" key={picstoryImgItem.id}>
                <img src={picstoryImgItem.thumbnail} alt="picstory__recent-img" />
              </li>
            ))}
        </ul>
      </article>
      {removeModalOpen && (
        <ConfirmRemoveModal
          title="픽스토리를"
          description="픽스토리에 포함된 글은 삭제되지 않습니다."
          onClose={onToggleRemoveModal}
          onConfirm={onRemovePicstory}
        />
      )}
    </BlogPicstoryDetailContainer>
  );
}
