import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { Archive } from 'modules/archive/type';
import { calcImageSrc } from 'utils/calcImageSrc';
import { ArchiveItemContainer } from './styles';

type ArchiveItemPropsType = {
  data: Archive;
  listLength: number | undefined;
};

export default function ArchiveItem({
  data,
  listLength,
}: ArchiveItemPropsType): JSX.Element {
  return (
    <Link href={`/archive/${data.id}`}>
      <ArchiveItemContainer length={listLength} posterId={data.id}>
        <div className="img__wrapper">
          <img src={calcImageSrc(400, data.poster)} alt="poster" />
        </div>
        <article>
          {data.cost === 0 ? (
            <small>무료</small>
          ) : (
            <small>₩ {data.cost.toLocaleString()}</small>
          )}
          <h2>{data.title}</h2>
          <p>
            <b>by. </b>
            {data.author.split(',').map(name => (
              <span key={name}>{name}</span>
            ))}
          </p>
          <p>
            <b>{`${dayjs(data.startDate).format('YYYY-MM-DD')} - ${dayjs(
              data.endDate
            ).format('YYYY-MM-DD')}`}</b>
          </p>
          <p>{data.address}</p>
        </article>
      </ArchiveItemContainer>
    </Link>
  );
}
