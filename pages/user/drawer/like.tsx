import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useCallback, useEffect } from 'react';
import DrawerPostCard from '../../../components/Card/DrawerPostCard';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import Incomplete from '../../../components/Result/Incomplete';
import useAuth from '../../../hooks/useAuth';
import useFetchMore from '../../../hooks/useFetchMore';
import useDrawer from '../../../modules/drawer/hooks';
import { DrawerNavData } from '../../../utils/data';

const LikeListContainer = styled.div`
  width: 100%;
  font-family: 'Noto Serif KR';
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 70px 24px;
    margin-bottom: 100px;
  }

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px 10px;
    }
  }
`;

function LikeList(): JSX.Element {
  const {
    getLikeList,
    removeLikeItemDispatch,
    getLikeListDispatch,
    hasMore,
  } = useDrawer();
  const { userData } = useAuth({ replace: true });
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  const makeDeleteFn = useCallback(
    (postId: number) => {
      if (!userData) return () => null;
      return () => {
        removeLikeItemDispatch({ postId, userId: userData.id });
      };
    },
    [userData]
  );

  useEffect(() => {
    if (!userData) return;
    if (!hasMore && page > 0) return;
    getLikeListDispatch({ userId: userData.id, limit: 12, offset: page * 12 });
  }, [page, userData, hasMore]);

  if (getLikeList.error)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
  if (!getLikeList.data)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
  if (getLikeList.data.length === 0)
    return (
      <Incomplete
        title="좋아요한 게시글이 없어요."
        desc="게시글을 찾아보세요!"
        type="notData"
      />
    );

  return (
    <LikeListContainer>
      <ul>
        {getLikeList.data.map(likeItem => (
          <DrawerPostCard
            key={likeItem.id}
            postData={likeItem}
            onDeleteCb={makeDeleteFn(likeItem.id)}
          />
        ))}
      </ul>
      <FetchMoreTrigger />
    </LikeListContainer>
  );
}

export default function like(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <Head>
        <title>내서랍 | 좋아요 목록</title>
      </Head>
      <LikeList />
    </PageWithNavLayout>
  );
}
