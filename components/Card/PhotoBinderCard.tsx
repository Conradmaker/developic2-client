import Link from 'next/link';
import React from 'react';
import { PhotoBinderType } from 'modules/drawer';
import { calcImageSrc } from 'utils/calcImageSrc';
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
          {Array.from({ length: 5 }).map((_, index) => {
            return binderData.PostImages[index] ? (
              <div className="img__box__item" key={binderData.PostImages[index].id}>
                <img src={calcImageSrc(200, binderData.PostImages[index].src)} alt="p" />
              </div>
            ) : (
              <div className="img__box__item" key={index}>
                <img
                  src="https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
                  alt="noPhoto"
                />
              </div>
            );
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
