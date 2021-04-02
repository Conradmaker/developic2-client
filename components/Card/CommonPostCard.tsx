import React from 'react';
import { MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { CommonPostCardBox, StatsBox, UserAvatarWithNameBox } from './styles';

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
        <img src={data.postImgUrl} alt="postImg" />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </article>
      <div>
        <UserAvatarWithNameBox>
          <img src={data.avatarImgUrl} alt="avatar" />
          <strong>{data.userName}</strong>
          <span>님의 글</span>
        </UserAvatarWithNameBox>
        <StatsBox>
          <div className="post__likes">
            <MdFavorite />
            <span>{data.likeCount}</span>
          </div>
          <div className="post__views">
            <MdRemoveRedEye />
            <span>{data.viewCount}</span>
          </div>
        </StatsBox>
      </div>
    </CommonPostCardBox>
  );
}
