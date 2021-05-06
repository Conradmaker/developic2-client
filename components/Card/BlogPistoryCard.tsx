import Link from 'next/link';
import React from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { BlogPicstory, Post } from '../../modules/blog';
import { CountSum } from '../../utils/utils';
import { BlogPicstoryCardBox } from './styles';

type PicstoryCardPropsType = {
  data: BlogPicstory;
};

export default function BlogPistoryCard({ data }: PicstoryCardPropsType): JSX.Element {
  const posts = data.Posts;

  const likeCounts = posts.map((post: Post) => post.likers);
  const likeCountSum = likeCounts.length;

  const hits = posts.map((post: Post) => post.hits);
  const viewCountSum = CountSum(hits);

  return (
    <Link href="/user123/picstory/1">
      <BlogPicstoryCardBox>
        <article>
          <div className="picstory__description">
            <h3>{data.title}</h3>
            <div className="picstory__stats">
              <div>
                <MdBook />
                <span>{data.Posts && data.Posts.length}</span>
              </div>
              <div>
                <MdFavorite />
                <span>{likeCountSum && likeCountSum}</span>
              </div>
              <div>
                <MdRemoveRedEye />
                <span>{viewCountSum && viewCountSum}</span>
              </div>
            </div>
          </div>
          <p>{data.description}</p>
          <ul className="picstory__recent-img">
            {posts &&
              posts.map((picstoryImgItem: { thumbnail: string }) => (
                <li className="img__box">
                  <img src={picstoryImgItem.thumbnail} alt="picstory-thumbnail" />
                </li>
              ))}
          </ul>
        </article>
      </BlogPicstoryCardBox>
    </Link>
  );
}
