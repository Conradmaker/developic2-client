import React from 'react';
import DrawerPostCard from '../Card/DrawerPostCard';
import { RecentViewListContainer } from './styles';

export default function RecentViewList(): JSX.Element {
  return (
    <RecentViewListContainer>
      <li>
        <div className="date">
          <span>2020.03.11</span>
        </div>
        <ul>
          <DrawerPostCard />
          <DrawerPostCard />
          <DrawerPostCard />
        </ul>
      </li>
      <li>
        <div className="date">
          <span>2020.03.11</span>
        </div>
        <ul>
          <DrawerPostCard />
          <DrawerPostCard />
          <DrawerPostCard />
          <DrawerPostCard />
          <DrawerPostCard />
        </ul>
      </li>
    </RecentViewListContainer>
  );
}
