import React from 'react';
import { MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { BlogPost } from '../../modules/blog';
import { formatDate } from '../../utils/utils';
import { BlogPostCardBox } from './styles';

type BlogPostCardPropsType = {
  data: BlogPost;
};

export default function BlogPostCard({ data }: BlogPostCardPropsType): JSX.Element {
  return (
    <BlogPostCardBox>
      <article>
        <div className="img__wrapper">
          <img src={data.thumbnail} alt="post-thumbnail" />
          {/* <div className="img__description">
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
          </div> */}
        </div>
        <div className="post__description">
          {/* {data.picstoryTitle && <span>{data.picstoryTitle}</span>} */}
          <h3>{data.title}</h3>
          <p>{data.summary}</p>
        </div>
        <div className="post__info">
          <div className="post__stats">
            <div>
              <MdFavorite />
              <span>{data.likeCount}</span>
            </div>
            <div>
              <MdRemoveRedEye />
              <span>{data.hits}</span>
            </div>
          </div>
          <div className="post__date">{formatDate(`${data.updatedAt}`)}</div>
        </div>
      </article>
    </BlogPostCardBox>
  );
}
