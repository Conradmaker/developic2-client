import React from 'react';
import { MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { CommonPostCardBox, UserAvatarWithNameBox } from './styles';

type PostCardPropsType = {
  data: {
    id: number;
    postImgUrl: string;
    title: string;
    description: string;
    userName: string;
    avatarImgUrl: string;
    likeCount: number;
    viewCount: number;
  };
};
export default function CommonPostCard({ data }: PostCardPropsType): JSX.Element {
  return (
    <CommonPostCardBox>
      <article>
        <div className="img__wrapper">
          <img src={data.postImgUrl} alt="postImg" />
        </div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </article>
      <div className="info">
        <UserAvatarWithNameBox>
          <img src={data.avatarImgUrl} alt="avatar" />
          <strong>{data.userName}</strong>
          <span>님의 글</span>
        </UserAvatarWithNameBox>
        <div className="stats">
          <p>
            <MdFavorite />
            <span>{data.likeCount}</span>
          </p>
          <p>
            <MdRemoveRedEye />
            <span>{data.viewCount}</span>
          </p>
        </div>
      </div>
    </CommonPostCardBox>
  );
}
