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
          {Array.from({ length: 5 }).map((_, index) => {
            return binderData.PostImages[index] ? (
              <div className="img__box__item" key={binderData.PostImages[index].id}>
                <img src={binderData.PostImages[index].src} alt="" />
              </div>
            ) : (
              <div className="img__box__item" key={index}>
                <img
                  src="https://lh3.googleusercontent.com/proxy/C5-C4O3U06DgkK0jIeev6JiUJAljnQ5vaheSnpK7N6GvBB91sRCGdMlsRN2Sj3pS2OSRUcz7toPECsfrSDA5A6ekOa1UubHwrCgzcOUbHeehtyxrdYCuvN5lufBpgVWK"
                  alt=""
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
