import Link from 'next/link';
import React from 'react';
import { useThemeState } from '../../hooks/ThemeContext';
import { ArchiveItemPropsType } from '../../pages/archive';
import { ArchiveItemContainer } from './styles';

export default function ArchiveItem({
  id,
  price,
  title,
  by,
  date,
  place,
  src,
}: ArchiveItemPropsType): JSX.Element {
  const currentTheme = useThemeState();
  return (
    <ArchiveItemContainer posterId={id} currentTheme={currentTheme}>
      <div className="img__wrapper">
        <div>
          <Link href={`/archive/${id}`}>
            <img src={src} alt="poster" />
          </Link>
        </div>
      </div>
      <article>
        {price === '무료' && <small>{price}</small>}
        {price !== '무료' && <small>₩ {parseInt(price).toLocaleString()}</small>}
        <Link href={`/archive/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>
          <b>by. </b>
          {by.map(v => (
            <span key={v.id}>{v.name}</span>
          ))}
        </p>
        <p>
          <b>{`${date[0]} - ${date[1]}`}</b>
        </p>
        <p>{place}</p>
      </article>
    </ArchiveItemContainer>
  );
}
