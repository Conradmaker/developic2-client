import dayjs from 'dayjs';
import _forEachRight from 'lodash/forEachRight';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RecentViewType } from '../../modules/drawer';
import useDrawer from '../../modules/drawer/hooks';
import useUser from '../../modules/user/hooks';
import DrawerPostCard from '../Card/DrawerPostCard';
import { RecentViewListContainer } from './styles';

type ComputedListType = { [key: string]: RecentViewType[] };

const sortByDate = (list: RecentViewType[]) => {
  const sections: ComputedListType = {};
  _forEachRight(list, v => {
    const date = dayjs(v.createdAt).format('YYYY.MM.DD');
    if (Array.isArray(sections[date])) {
      sections[date].push(v);
    } else {
      sections[date] = [v];
    }
  });

  return sections;
};

export default function RecentViewList(): JSX.Element {
  const router = useRouter();
  const { userData } = useUser();
  const { getRecentList, getRecentViewsDispatch, removeRecentViewDispatch } = useDrawer();
  const [computedRecents, setComputedRecents] = useState<ComputedListType | []>([]);
  useEffect(() => {
    if (!userData) {
      router.replace('/');
      return;
    }
    getRecentViewsDispatch({ userId: userData.id, limit: 12 });
  }, []);
  useEffect(() => {
    if (getRecentList.data) {
      setComputedRecents(sortByDate(getRecentList.data));
    }
  }, [getRecentList.data]);
  if (!getRecentList.data) return <></>;
  if (!computedRecents) return <></>;
  return (
    <RecentViewListContainer>
      {Object.entries(computedRecents).map(([date, list]) => {
        return (
          <li key={date}>
            <div className="date">
              <span>{date}</span>
            </div>
            <ul>
              {list.map(viewData => (
                <DrawerPostCard
                  key={viewData.id}
                  postData={viewData.Post}
                  onDeleteCb={() => removeRecentViewDispatch(viewData.id)}
                />
              ))}
            </ul>
          </li>
        );
      })}
    </RecentViewListContainer>
  );
}
