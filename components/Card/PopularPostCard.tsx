import React from 'react';
import { PostType } from '../../modules/list';
import HashTag from './HashTag';
import { PopularPostCardBox } from './styles';

interface PopularPostCardPropsType {
  data: PostType;
}

export default function PopularPostCard({ data }: PopularPostCardPropsType): JSX.Element {
  return (
    <PopularPostCardBox>
      <img src={data.thumbnail} alt="thumbnail" />
      <article>
        <h5>{data.title}</h5>
        <p>{data.User.nickname}</p>
        <ul>
          {Array.from({ length: 7 }).map(v => (
            <HashTag key={Math.random()} name={'몰라'} />
          ))}
        </ul>
      </article>
    </PopularPostCardBox>
  );
}
