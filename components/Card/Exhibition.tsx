import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { ArchiveDataType } from '../../modules/list';
import { ExhibitionCardBox } from './styles';

type ExhibitionPropsType = {
  archiveData: ArchiveDataType;
};
export default function Exhibition({ archiveData }: ExhibitionPropsType): JSX.Element {
  return (
    <Link href={`/archive/${archiveData.id}`}>
      <ExhibitionCardBox className="carousel__item">
        <img src={process.env.NEXT_PUBLIC_IMAGE_400 + archiveData.poster} alt="poster" />
        <article>
          <h5>{archiveData.title}</h5>
          <p>{archiveData.author}</p>
          <ul>
            <li>
              <small>From.</small>
              <strong>{dayjs(archiveData.startDate).format('YY년 MM월 DD일')}</strong>
            </li>
            <li>
              <small>To.</small>
              <strong>{dayjs(archiveData.endDate).format('YY년 MM월 DD일')}</strong>
            </li>
          </ul>
        </article>
        <div className="cost__box">
          {archiveData.cost === 0 ? 'FREE' : `${archiveData.cost}원`}
        </div>
      </ExhibitionCardBox>
    </Link>
  );
}
