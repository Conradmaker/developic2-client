import Link from 'next/link';
import React from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { BlogPicstoryCardBox } from './styles';

export default function BlogPistoryCard(): JSX.Element {
  return (
    <Link href="/blog/picstory/1">
      <BlogPicstoryCardBox>
        <article>
          <div className="picstory__description">
            <h3>Summer</h3>
            <div className="picstory__stats">
              <div>
                <MdBook />
                <span>10</span>
              </div>
              <div>
                <MdFavorite />
                <span>113</span>
              </div>
              <div>
                <MdRemoveRedEye />
                <span>112</span>
              </div>
            </div>
          </div>
          <p>내가 기록한 여름</p>
          <ul className="picstory__recent-img">
            <li className="img__box">
              <img
                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="picstory__recent-img"
              />
            </li>
            <li className="img__box">
              <img
                src="https://images.unsplash.com/photo-1572953745960-14685e3e9b49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="picstory__recent-img"
              />
            </li>
            <li className="img__box">
              <img
                src="https://images.unsplash.com/photo-1586902197503-e71026292412?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="picstory__recent-img"
              />
            </li>
            <li className="img__box">
              <img
                src="https://images.unsplash.com/photo-1498747946579-bde604cb8f44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="picstory__recent-img"
              />
            </li>
            <li className="img__box">
              <img
                src="https://images.unsplash.com/photo-1459314079206-9970f36c7784?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bW1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="picstory__recent-img"
              />
            </li>
            <li className="img__box">
              <img
                src="https://images.unsplash.com/photo-1572953745960-14685e3e9b49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="picstory__recent-img"
              />
            </li>
          </ul>
        </article>
      </BlogPicstoryCardBox>
    </Link>
  );
}
