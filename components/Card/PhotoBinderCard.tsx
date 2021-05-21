import Link from 'next/link';
import React from 'react';
import { PhotoBinderType } from '../../modules/drawer';
import { PhotoBinderCardBox } from './styles';

type PhotoBinderCardPropsType = {
  id: number;
  binderData: PhotoBinderType;
};
export default function PhotoBinderCard({
  binderData,
}: PhotoBinderCardPropsType): JSX.Element {
  return (
    <Link href={`/user/drawer/binder/${binderData.id}`}>
      <PhotoBinderCardBox>
        <div className="img__box">
          {binderData.PostImages.map((photo, index) => {
            if (index < 6) {
              return (
                <div className="img__box__item" key={photo.id}>
                  <img src={photo.src} alt="" />
                </div>
              );
            }
          })}
        </div>
        <article>
          <div className="left">
            <h3>{binderData.title}</h3>
            <p>{binderData.description}</p>
          </div>
          <p>{binderData.PostImages.length}개의 사진</p>
        </article>
      </PhotoBinderCardBox>
    </Link>
  );
}
