import { useRouter } from 'next/router';
import React from 'react';
import { useThemeState } from '../../hooks/ThemeContext';
import { AchieveItemPropsType } from '../../pages/achieve/inquiry';
import { AchieveItemContainer } from './styles';

export default function AchieveItem({
  id,
  price,
  title,
  by,
  date,
  place,
  src,
}: AchieveItemPropsType): JSX.Element {
  const currentTheme = useThemeState();
  const router = useRouter();
  const onClickAchieve = () => {
    console.log('클릭');
    router.push(`localhost:3000/achieve/${id}`);
  };
  return (
    <AchieveItemContainer posterId={id} currentTheme={currentTheme}>
      <div className="img__wrapper">
        <div onClick={onClickAchieve}>
          <img src={src} alt="poster" />
        </div>
      </div>
      <article>
        {price === '무료' && <small>{price}</small>}
        {price !== '무료' && <small>₩ {parseInt(price).toLocaleString()}</small>}
        <h2 onClick={onClickAchieve}>{title}</h2>
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
    </AchieveItemContainer>
  );
}
