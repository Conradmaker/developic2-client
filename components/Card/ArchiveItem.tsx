import Link from 'next/link';
import React from 'react';
import { useThemeState } from '../../hooks/ThemeContext';
import { Archive } from '../../modules/archive/type';
import { ArchiveItemContainer } from './styles';

type ArchiveItemPropsType = {
  data: Archive;
  listLength: number | undefined;
};
export default function ArchiveItem({
  data,
  listLength,
}: ArchiveItemPropsType): JSX.Element {
  const currentTheme = useThemeState();
  return (
    <ArchiveItemContainer
      length={listLength}
      posterId={data.id}
      currentTheme={currentTheme}
    >
      <div className="img__wrapper">
        <div>
          <Link href={`/archive/${data.id}`}>
            <img src={data.poster} alt="poster" />
          </Link>
        </div>
      </div>
      <article>
        {data.cost === 0 ? (
          <small>무료</small>
        ) : (
          <small>₩ {data.cost.toLocaleString()}</small>
        )}
        <Link href={`/archive/${data.id}`}>
          <h2>{data.title}</h2>
        </Link>
        <p>
          <b>by. </b>
          {data.author.split(',').map(name => (
            <span key={name}>{name}</span>
          ))}
        </p>
        <p>
          <b>{`${data.startDate} - ${data.endDate}`}</b>
        </p>
        <p>{data.address}</p>
      </article>
    </ArchiveItemContainer>
  );
}
