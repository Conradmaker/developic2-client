import Link from 'next/link';
import React from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import PicstoryDetailList from '../List/PicstoryDetailList';
import { BlogPicstoryCardBox } from './styles';

type PicstoryCardPropsType = {
  data: {
    id: number;
    title: string;
    description: string;
    postCount?: number;
    likeCount?: number;
    viewCount?: number;
    ThumbnailImages?: any;
    Posts?: any;
  };
};
export default function BlogPistoryCard({ data }: PicstoryCardPropsType): JSX.Element {
  return (
    <Link href="/user123/picstory/1">
      <BlogPicstoryCardBox>
        <article>
          <div className="picstory__description">
            <h3>{data.title}</h3>
            <div className="picstory__stats">
              <div>
                <MdBook />
                <span>{data.postCount ? data.postCount : 0}</span>
              </div>
              <div>
                <MdFavorite />
                <span>{data.likeCount ? data.likeCount : 0}</span>
              </div>
              <div>
                <MdRemoveRedEye />
                <span>{data.viewCount ? data.viewCount : 0}</span>
              </div>
            </div>
          </div>
          <p>{data.description}</p>
          <ul className="picstory__recent-img">
            {data.ThumbnailImages &&
              data.ThumbnailImages.map(picstoryImgItem => (
                <li className="img__box">
                  <img src={picstoryImgItem.src} alt="picstory__recent-img" />
                </li>
              ))}
          </ul>
        </article>
      </BlogPicstoryCardBox>
    </Link>
  );
}
