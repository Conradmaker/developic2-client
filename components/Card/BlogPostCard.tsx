import Link from 'next/link';
import React from 'react';
import { MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { BlogPost } from '../../modules/blog';
import { formatDate } from '../../utils/utils';
import { BlogPostCardBox } from './styles';

type BlogPostCardPropsType = {
  postData: BlogPost;
};

export default function BlogPostCard({ postData }: BlogPostCardPropsType): JSX.Element {
  return (
    <Link href={`/${postData.UserId}/post/${postData.id}`}>
      <BlogPostCardBox>
        <article>
          <div className="img__wrapper">
            <img src={postData.thumbnail} alt="post-thumbnail" />
          </div>
          <div className="post__description">
            <h3>{postData.title}</h3>
            <p>{postData.summary}</p>
          </div>
          <div className="post__info">
            <div className="post__stats">
              <div>
                <MdFavorite />
                <span>{postData.likeCount}</span>
              </div>
              <div>
                <MdRemoveRedEye />
                <span>{postData.hits}</span>
              </div>
            </div>
            <div className="post__date">{formatDate(`${postData.createdAt}`)}</div>
          </div>
        </article>
      </BlogPostCardBox>
    </Link>
  );
}
