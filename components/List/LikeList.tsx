import React from 'react';
import DrawerPostCard from '../Card/DrawerPostCard';
import { LikeListContainer } from './styles';

export default function LikeList(): JSX.Element {
  return (
    <LikeListContainer>
      <div className="total_like_count">
        <span>
          총 <strong>{11}</strong>개의 좋아요 목록
        </span>
      </div>
      <ul>
        <DrawerPostCard />
        <DrawerPostCard />
        <DrawerPostCard />
        <DrawerPostCard />
        <DrawerPostCard />
        <DrawerPostCard />
        <DrawerPostCard />
        <DrawerPostCard />
      </ul>
    </LikeListContainer>
  );
}
