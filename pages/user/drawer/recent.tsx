import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import DrawerPostCard from 'components/Card/DrawerPostCard';
import PageWithNavLayout from 'components/Layout/PageWithNavLayout';
import Incomplete from 'components/Result/Incomplete';
import { useAuth, useDrawer, useFetchMore } from 'hooks';
import { DrawerNavData } from 'utils/data';
import { ComputedListType, sortByDate } from 'utils/sortByDate';
import { RecentViewListContainer } from 'styles/pages/user';

function RecentViewList(): JSX.Element {
  const { userData } = useAuth({ replace: true });
  const {
    getRecentList,
    hasMore,
    getRecentViewsDispatch,
    removeRecentViewDispatch,
  } = useDrawer();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);
  const [computedRecents, setComputedRecents] = useState<ComputedListType | []>([]);

  useEffect(() => {
    if (getRecentList.data) {
      setComputedRecents(sortByDate(getRecentList.data));
    }
  }, [getRecentList.data]);

  useEffect(() => {
    if (!userData) return;
    if (!hasMore && page > 0) return;
    getRecentViewsDispatch({ userId: userData.id, limit: 12, offset: page * 12 });
  }, [page, userData, hasMore]);

  if (getRecentList.error)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
  if (!computedRecents || !getRecentList.data) return <></>;
  if (getRecentList.data.length === 0)
    return (
      <Incomplete
        title="최근 읽은 게시글이 없습니다."
        desc="게시글을 읽어보세요!"
        type="notData"
      />
    );

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

export default function recent(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <Head>
        <title>내서랍 | 최근 본 게시글</title>
      </Head>
      <RecentViewList />
    </PageWithNavLayout>
  );
}
