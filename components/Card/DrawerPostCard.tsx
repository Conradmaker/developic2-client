import React from 'react';
import { DrawerPostCardContainer } from './styles';
import { RiArrowRightSLine } from 'react-icons/ri';
import { LikeListItemType } from '../../modules/drawer';
import Link from 'next/link';
import dayjs from 'dayjs';
type DrawerPostCardPropsType = {
  postData: LikeListItemType;
  onDeleteCb: () => void;
};
export default function DrawerPostCard({
  postData,
  onDeleteCb,
}: DrawerPostCardPropsType): JSX.Element {
  const onClickDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDeleteCb();
  };
  return (
    <Link href={`/${postData.User.id}/post/${postData.id}`}>
      <DrawerPostCardContainer>
        <img src={postData.thumbnail} alt="thumnail" />
        <div className="content">
          <img src={postData.User.avatar} alt="avatar" />
          <div className="writer">
            <strong>{postData.User.nickname} </strong>
            <small> 님의 글</small>
          </div>
          <article>
            <h3>{postData.title} </h3>
            <p>{postData.summary}</p>
            <p>{dayjs(postData.updatedAt).format('YYYY년 MM월 DD일')}</p>
            <div className="circle">
              <RiArrowRightSLine />
            </div>
          </article>
        </div>
        <div className="delete__btn" onClick={onClickDelete}>
          삭제
        </div>
      </DrawerPostCardContainer>
    </Link>
  );
}
