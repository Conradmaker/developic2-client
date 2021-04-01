import Link from 'next/link';
import React from 'react';
import { PhotoBinderCardBox } from './styles';

export default function PhotoBinderCard(): JSX.Element {
  return (
    <Link href="/user/drawer/binder/1">
      <PhotoBinderCardBox>
        <div className="img__box">
          <div className="img__box__item">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="img__box__item">
            <img src="https://picsum.photos/300/300" alt="" />
          </div>
          <div className="img__box__item">
            <img src="https://picsum.photos/400/300" alt="" />
          </div>
          <div className="img__box__item">
            <img src="https://picsum.photos/200/310" alt="" />
          </div>
          <div className="img__box__item">
            <img src="https://picsum.photos/100/200" alt="" />
          </div>
        </div>
        <article>
          <div className="left">
            <h3>Ideate</h3>
            <p>Turn your idea from concept to MVP</p>
          </div>
          <p>4개의 사진</p>
        </article>
      </PhotoBinderCardBox>
    </Link>
  );
}
