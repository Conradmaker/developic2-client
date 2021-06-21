import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import DrawerPostCard from '../../../components/Card/DrawerPostCard';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import Incomplete from '../../../components/Result/Incomplete';
import useAuth from '../../../hooks/useAuth';
import useFetchMore from '../../../hooks/useFetchMore';
import useDrawer from '../../../modules/drawer/hooks';
import { DrawerNavData } from '../../../utils/data';
import { ComputedListType, sortByDate } from '../../../utils/sortByDate';

export const RecentViewListContainer = styled.ul`
  width: 100%;
  font-family: 'Noto Serif KR';
  & > li {
    .date {
      margin-top: 70px;
      margin-bottom: 50px;
      color: ${({ theme }) => theme.grayScale[1]};
      position: relative;
      display: block;
      width: 100%;
      height: 1px;
      border-top: 1px solid ${({ theme }) => theme.grayScale[1]};
      span {
        display: inline-block;
        letter-spacing: 1.3px;
        padding: 0 20px;
        font-size: 18px;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${({ theme }) => theme.background.initial};
      }
    }
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 50px 24px;
      margin-bottom: 100px;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    & > li {
      .date {
        margin: 50px 0 30px 0;
      }
      ul {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px 10px;
      }
    }
  }
`;

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
  }, [page]);

  if (getRecentList.error)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
  if (!computedRecents || !getRecentList.data)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
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
