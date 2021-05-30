import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useFetchMore from '../../hooks/useFetchMore';
import useDrawer from '../../modules/drawer/hooks';
import useUser from '../../modules/user/hooks';
import { ComputedListType, sortByDate } from '../../utils/sortByDate';
import DrawerPostCard from '../Card/DrawerPostCard';
import { RecentViewListContainer } from './styles';

export default function RecentViewList(): JSX.Element {
  const router = useRouter();
  const { userData } = useUser();
  const {
    getRecentList,
    hasMore,
    getRecentViewsDispatch,
    removeRecentViewDispatch,
  } = useDrawer();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);
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
  useEffect(() => {
    if (!userData) {
      router.replace('/');
      return;
    }
    if (hasMore && page > 0) {
      getRecentViewsDispatch({ userId: userData.id, limit: 12, offset: page * 12 });
    }
  }, [page]);
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
      <FetchMoreTrigger />
    </RecentViewListContainer>
  );
}
