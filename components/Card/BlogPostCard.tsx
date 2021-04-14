import React from 'react';
import { MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { BlogPostCardBox } from './styles';

type BlogPostCardPropsType = {
  data: {
    id: number;
    postImgUrl: string;
    title: string;
    description: string;
    userName: string;
    avatarImgUrl: string;
    likeCount: number;
    viewCount: number;
    date: string;
    picstoryTitle: string;
  };
};
export default function BlogPostCard({ data }: BlogPostCardPropsType): JSX.Element {
  return (
    <BlogPostCardBox>
      <article>
        <div className="img__wrapper">
          <img src={data.postImgUrl} alt="postImg" />
        </div>
        <div className="post__description">
          {data.picstoryTitle && <span>{data.picstoryTitle}</span>}
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div className="post__info">
          <div className="post__stats">
            <div>
              <MdFavorite />
              <span>{data.likeCount}</span>
            </div>
            <div>
              <MdRemoveRedEye />
              <span>{data.viewCount}</span>
            </div>
          </div>
          <div className="post__date">{data.date}</div>
        </div>
      </article>
    </BlogPostCardBox>
  );
}
