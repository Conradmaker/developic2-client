import React from 'react';
import { MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { CommonPostCardBox, UserAvatarWithNameBox } from './styles';
import { PostType } from '../../modules/list';
import Link from 'next/link';
type PostCardPropsType = {
  postData: PostType;
};
export default function CommonPostCard({ postData }: PostCardPropsType): JSX.Element {
  return (
    <Link href={`/${postData.User.id}/post/${postData.id}`}>
      <CommonPostCardBox>
        <article>
          <img src={postData.thumbnail} alt="postImg" />
          <h3>{postData.title}</h3>
          <p>{postData.summary}</p>
        </article>
        <div className="info">
          <Link href={`/${postData.User.id}/post`}>
            <UserAvatarWithNameBox>
              <img src={postData.User.avatar} alt="avatar" />
              <strong>{postData.User.nickname}</strong>
              <span>님의 글</span>
            </UserAvatarWithNameBox>
          </Link>
          <div className="stats">
            <p>
              <MdFavorite />
              <span>{postData.likers?.length}</span>
            </p>
            <p>
              <MdRemoveRedEye />
              <span>{postData.hits}</span>
            </p>
          </div>
        </div>
      </CommonPostCardBox>
    </Link>
  );
}
