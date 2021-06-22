import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import useModal from '../../hooks/useModal';
import { BlogPicstory, BlogPost } from '../../modules/blog';
import useBlog from '../../modules/blog/hooks';
import usePicstory from '../../modules/picstory/hooks';
import { calcImageSrc } from '../../utils/calcImageSrc';
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
  article > p {
    margin-bottom: 28px;
  }
`;

const countTotal = {
  like: (list: BlogPost[]) =>
    list.reduce((acc, cur) => acc + (cur.likeCount as number), 0),
  hit: (list: BlogPost[]) => list.reduce((acc, cur) => acc + cur.hits, 0),
};

export default function BlogPicstoryDetailBox(): JSX.Element {
  const { loadBlogPicstoryDetail } = useBlog();
  const { removePicstoryDispatch } = usePicstory();
  const router = useRouter();
  const { Posts: posts } = loadBlogPicstoryDetail.data as BlogPicstory;

  const likeCountTotal = useMemo(() => countTotal.like(posts), [posts]);
  const viewCountTotal = useMemo(() => countTotal.hit(posts), [posts]);

  const onRemovePicstory = useCallback(() => {
    removePicstoryDispatch(+(router.query.picstoryId as string));
    router.back();
  }, []);

  const [RemovePicstoryModal, onToggleRemoveModal] = useModal(ConfirmRemoveModal, {
    title: '픽스토리를 삭제하시겠습니까?',
    description: '픽스토리에 포함된 글은 삭제되지 않습니다.',
    onConfirm: onRemovePicstory,
  });

  if (!loadBlogPicstoryDetail.data) return <></>;

  return (
    <BlogPicstoryDetailContainer>
      <article>
        <div className="picstory__description">
          <h2>{loadBlogPicstoryDetail.data.title}</h2>
          <div className="picstory__stats">
            <div>
              <MdBook />
              <span>
                {loadBlogPicstoryDetail.data.Posts
                  ? loadBlogPicstoryDetail.data.Posts.length
                  : 0}
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
        <p>{loadBlogPicstoryDetail.data.description}</p>
        <div className="picstory__btn">
          <SquareBtn onClick={() => alert('준비중')}>편집</SquareBtn>
          <SquareBtn onClick={onToggleRemoveModal}>삭제</SquareBtn>
        </div>

        <ul className="picstory__recent-img">
          {posts &&
            posts.slice(0, 6).map(picstoryImgItem => (
              <li className="img__box" key={picstoryImgItem.id}>
                <img
                  src={calcImageSrc(400, picstoryImgItem.thumbnail)}
                  alt="picstory__recent-img"
                />
              </li>
            ))}
        </ul>
      </article>
      <RemovePicstoryModal />
    </BlogPicstoryDetailContainer>
  );
}
